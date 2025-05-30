import { UnitOfMeasure } from "./UnitOfMeasure";

export type GameSettings = {
  unitOfMeasure: UnitOfMeasure;
};

export const defaultGameSettings = {
  "unitOfMeasure": UnitOfMeasure.IMPERIAL,
};

