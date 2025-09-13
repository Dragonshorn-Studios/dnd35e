import { type DocumentSheetConfiguration, type DocumentSheetRenderOptions } from '@client/applications/api/document-sheet.mjs';
import { WeaponDnd35e } from '../index.mjs';
import { PhysicalItemSheet, PhysicalItemSheetConfig, PhysicalItemSheetPartialsList, PhysicalItemSheetRenderContext } from '@items/physical/index.mjs';

type WeaponSheetConfig<TItem extends WeaponDnd35e = WeaponDnd35e> = PhysicalItemSheetConfig<TItem> & {
  // Add any additional properties needed for the physical item sheet context here
};

type WeaponSheetPartialsList = PhysicalItemSheetPartialsList & {
  headerSummary: string;
};

interface WeaponSheetRenderContext extends PhysicalItemSheetRenderContext {
  partials: WeaponSheetPartialsList;
};

export const weaponSummaryPartialName = 'weaponSummary';

class WeaponSheet extends foundry.applications.api.HandlebarsApplicationMixin(PhysicalItemSheet<WeaponDnd35e, WeaponSheetConfig>) {
  static override DEFAULT_OPTIONS: DeepPartial<DocumentSheetConfiguration> = {
    tag: 'form',
    id: 'dnd35e-weapon-sheet', // this probably should be unique
    form: {
      submitOnChange: true,
    },
    window: {
      resizable: true,
    },
    position: {
      width: 600,
      height: 400,
    },
  };

  static override PARTS = {
    ...PhysicalItemSheet.PARTS,
    // main: {
    //   template: `${hbsTemplatePath}src/entities/items/weaponSheet.hbs`,
    // },
  };

  override async _prepareContext (options: DocumentSheetRenderOptions): Promise<WeaponSheetRenderContext> {
    const baseContext = await super._prepareContext(options) as PhysicalItemSheetRenderContext;
    baseContext.partials.headerSummary = weaponSummaryPartialName;

    return baseContext;
  }
}

export { WeaponSheet };
export type {
  WeaponSheetConfig,
  WeaponSheetRenderContext,
  WeaponSheetPartialsList,
};
