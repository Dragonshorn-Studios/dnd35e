import chokidar from "chokidar";
import fs from "fs-extra";
import path from "node:path";

const srcGlob = "src/**/*.hbs";

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

// Initial copy of all .hbs files
import { promisify } from "node:util";
import globCb from "glob";
const glob = promisify(globCb);

(async () => {
  const files = await glob(srcGlob);
  await Promise.all(files.map(copyFile));
  console.log(`Initial copy complete: ${files.length} file(s)`);

  // Start watching
  chokidar.watch(srcGlob, { ignoreInitial: true })
    .on("add", copyFile)
    .on("change", copyFile)
    .on("unlink", removeFile);
})();
