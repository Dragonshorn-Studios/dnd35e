import { systemPath } from "@constants/paths.mjs";
import { register as registerItem } from "./item/index.mjs";
import { registerPartial } from "@helpers/display.mjs";

const localPath = (file: string) => `${systemPath}src/entities/common/templates/${file}`;

const partials = [
  'wrapper',
  'emptyDiv',
];

export const register = () => {
  registerItem();
  partials.forEach(partialName => registerPartial(localPath(`${partialName}.hbs`), partialName))
  // await Promise.all(
  //   partials.map(partialName => registerPartial(localPath(`${partialName}.hbs`), partialName))
  // );
}
