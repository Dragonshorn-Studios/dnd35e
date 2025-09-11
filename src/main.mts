import { registerItems } from './entities/items/index.mjs';

globalThis.fa = foundry.applications;
globalThis.fc = foundry.canvas;
globalThis.fd = foundry.documents;
globalThis.fh = foundry.helpers;
globalThis.fu = foundry.utils;

registerItems();
