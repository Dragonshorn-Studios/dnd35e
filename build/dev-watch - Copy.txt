import chokidar from "chokidar";
import fs from "fs-extra";
import path from "node:path";
import { promisify } from "node:util";
import globCb from "glob";
import ts from "typescript";

const glob = promisify(globCb);
const srcGlob = "src/**/*.hbs";

// --- Template copy helpers ---
async function copyFile(src) {
  const dest = path.join("dist", src);
  await fs.copy(src, dest);
  console.log(`[copied] ${src} → ${dest}`);
}

async function removeFile(src) {
  const dest = path.join("dist", src);
  await fs.remove(dest);
  console.log(`[removed] ${dest}`);
}

async function initialCopy() {
  const files = await glob(srcGlob);
  await Promise.all(files.map(copyFile));
  console.log(`Initial .hbs copy complete: ${files.length} file(s)`);
}

// --- TypeScript watch ---
function watchTypeScript() {
  const configPath = ts.findConfigFile("./", ts.sys.fileExists, "tsconfig.json");
  if (!configPath) throw new Error("Could not find tsconfig.json");

  const createProgram = ts.createSemanticDiagnosticsBuilderProgram;

  const host = ts.createWatchCompilerHost(
    configPath,
    {}, // compilerOptions overrides
    ts.sys,
    createProgram,
    reportDiagnostic,
    reportWatchStatusChanged
  );

  ts.createWatchProgram(host);
}

function reportDiagnostic(diagnostic) {
  console.error(
    "TS Error",
    ts.flattenDiagnosticMessageText(diagnostic.messageText, ts.sys.newLine)
  );
}

function reportWatchStatusChanged(diagnostic) {
  console.log(ts.formatDiagnostic(diagnostic, {
    getCanonicalFileName: f => f,
    getCurrentDirectory: ts.sys.getCurrentDirectory,
    getNewLine: () => ts.sys.newLine
  }));
}

// --- Main ---
(async () => {
  await initialCopy();

  // Start watching .hbs files
  chokidar.watch(srcGlob, { ignoreInitial: true })
    .on("add", copyFile)
    .on("change", copyFile)
    .on("unlink", removeFile);

  // Start TypeScript watch
  watchTypeScript();
})();
