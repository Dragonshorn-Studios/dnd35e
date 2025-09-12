import { type HandlebarsTemplatePart } from "@client/applications/api/handlebars-application.mjs";
import { systemPath } from "@constants/paths.mjs";
import { registerPartial } from "@helpers/display.mjs";

const localPath = (path: string, file: string) => `${systemPath}src/entities/common/templates/item/${path}${file}`;

export const defaultNameHeaderPartial = "defaultNameHeader";
export const nameAndArtPartial = 'nameAndArt';
export const nameAndArtPartialPath = localPath('nameAndArt/', `nameAndArt.hbs`);

export const nameAndArtPart: HandlebarsTemplatePart = {
  template: nameAndArtPartialPath,
};

const partialsToRegister = [
  // {
  //   path: '/',
  //   partials: [
  //     'wrapper',
  //   ],
  // },
  // {
  //   path: 'nameAndArt/',
  //   partials: [
  //     nameAndArtPartial,
  //     defaultNameHeaderPartial,
  //   ],
  // },
];
export const register = () => {
  // partialsToRegister.forEach(({path, partials}) => partials.forEach(partialName => registerPartial(localPath(path, `${partialName}.hbs`), partialName)))
}
// export const register = async () => await Promise.all(partials.flatMap(({path, partials}) =>
//   partials.map(partialName => registerPartial(localPath(path, `${partialName}.hbs`), partialName))));
