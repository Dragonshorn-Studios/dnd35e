import type { DocumentSheetConfiguration, DocumentSheetRenderOptions } from '@client/applications/api/document-sheet.mjs';
import { WeaponDnd35e } from '../index.mjs';
import {
  PhysicalItemSheetMixin,
  PhysicalItemSheetConfig,
  PhysicalItemSheetPartialsList,
  PhysicalItemSheetRenderContext,
} from '@items/physical/index.mjs';
import { defaultHeaderStatusPartialName } from '@items/baseItem/sheet/ItemSheetDnd35e.mjs';
import { HandlebarsTemplatePart } from '@client/applications/api/handlebars-application.mjs';
import { identifiableDescriptionPartialName, identifiableNameConfigPartialName } from '@items/components/IdentifiableItem/sheet.mjs';

type WeaponSheetConfig<TItem extends WeaponDnd35e = WeaponDnd35e> = PhysicalItemSheetConfig<TItem> & {
  // Add any additional properties needed for the physical item sheet context here
};

type WeaponSheetPartialsList = PhysicalItemSheetPartialsList & {
  headerSummary: string;
  headerStatus: string;
};

interface WeaponSheetRenderContext extends PhysicalItemSheetRenderContext {
  partials: WeaponSheetPartialsList;
};

export const weaponSummaryPartialName = 'weaponSummary';

class WeaponSheet extends PhysicalItemSheetMixin<WeaponDnd35e, WeaponSheetConfig>() {
  static override DEFAULT_OPTIONS: DeepPartial<DocumentSheetConfiguration> = {
    id: 'dnd35e-weapon-sheet', // this probably should be unique
  }

  static override get TABS() {
    const baseTabs = super.TABS;
    // baseTabs.primary.tabs.push({
    //     id: 'details',
    //     label: 'D35E.Details',
    //     // icon: 'fas fa-th-list',
    // })
    return {
      ...baseTabs,
    };
  }

  static override get PARTS(): Record<string, HandlebarsTemplatePart> {
    const baseParts = super.PARTS;
    return {
      top: baseParts['top'],
      // banner: { template: identifiableBannerPartialName },
      tabs: baseParts['tabs'],
      namesetup: { template: identifiableNameConfigPartialName, scrollable: [''], },
      description: { template: identifiableDescriptionPartialName, scrollable: [''], },
      // details: { template: materialDetailsPartialName, scrollable: [''], },
    }
  }

  override async _prepareContext (options: DocumentSheetRenderOptions): Promise<WeaponSheetRenderContext> {
    const baseContext = await super._prepareContext(options) as PhysicalItemSheetRenderContext;
    baseContext.partials.headerSummary = weaponSummaryPartialName;
    baseContext.partials.headerStatus = defaultHeaderStatusPartialName;

    return baseContext;
  }
  
  protected override async _preparePartContext(partId: string, context: PhysicalItemSheetRenderContext) {
    return super._preparePartContext(partId, context);
  }
}

export { WeaponSheet };
export type {
  WeaponSheetConfig,
  WeaponSheetRenderContext,
  WeaponSheetPartialsList,
};
