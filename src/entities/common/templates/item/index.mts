import { type HandlebarsTemplatePart } from "@client/applications/api/handlebars-application.mjs";
import { hbsTemplatePath } from "@constants/paths.mjs";
import { registerPartial } from "@helpers/display.mjs";
import './nameAndArt/nameAndArt.scss';

const hbsPath = (path: string, file: string) => `${hbsTemplatePath}/entities/common/templates/item/${path}/${file}`;

export const defaultNameHeaderPartial = "defaultNameHeader";
export const nameAndArtPartial = 'nameAndArt';
// export const nameAndArtPartialPath = localPath('nameAndArt', `nameAndArt.hbs`);

export const nameAndArtPart: HandlebarsTemplatePart = {
  template: nameAndArtPartial,
};

const partialsToRegister = [
  {
    path: 'nameAndArt',
    partials: [
      // is registered in the sheet... but maybe we still use this instead later?
      nameAndArtPartial,
      defaultNameHeaderPartial,
    ],
  },
];
export const register = () => {
  partialsToRegister.forEach(({path, partials}) => partials.forEach(partialName => registerPartial(hbsPath(path, `${partialName}.hbs`), partialName)))
}
// export const register = async () => await Promise.all(partials.flatMap(({path, partials}) =>
//   partials.map(partialName => registerPartial(localPath(path, `${partialName}.hbs`), partialName))));
