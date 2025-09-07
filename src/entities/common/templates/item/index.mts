import { systemPath } from "@constants/paths.mjs";
import { registerPartial } from "@helpers/display.mjs";

const localPath = (path: string, file: string) => `${systemPath}entities/common/templates${path}${file}`;

export const defaultNameHeaderPartial = "defaultNameHeader";
export const nameAndArtPartial = 'nameAndArt';
export const nameAndArtPartialPath = localPath('nameAndArt/', `nameAndArt.hbs`);

export const nameAndArtPart = {
  template: nameAndArtPartialPath,
};

const partials = [
  // {
  //   path: '/',
  //   partials: [
  //     'wrapper',
  //   ],
  // },
  {
    path: 'nameAndArt/',
    partials: [
      nameAndArtPartial,
      defaultNameHeaderPartial,
    ],
  },
];

export const register = async () => await Promise.all(partials.flatMap(({path, partials}) =>
  partials.map(partialName => registerPartial(localPath(path, `${partialName}.hbs`), partialName))));
