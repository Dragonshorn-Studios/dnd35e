import { systemPath } from "@constants/paths.mjs";
import { register as registerItem } from "./item/index.mjs";
import { registerPartial } from "@helpers/display.mjs";

const localPath = (file: string) => `${systemPath}entities/common/templates/${file}`;

const partials = [
  'wrapper',
];

export const register = async () => {
  await registerItem();
  await Promise.all(
    partials.map(partialName => registerPartial(localPath(`${partialName}.hbs`), partialName))
  );
}
