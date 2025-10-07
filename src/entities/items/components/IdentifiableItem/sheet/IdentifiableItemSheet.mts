import { ActorDnd35e } from "@actors/baseActor/ActorDnd35e.mjs";
import { HandleBarsItemSheetBase, ItemDnd35e, ItemDnd35eConstructor, ItemSheetDnd35eConfig, ItemSheetDnd35eRenderContext } from "@items/baseItem/index.mjs";
import { IdentifiableItemMixin } from "../IdentifiableItem.mjs";

interface IdentifiableItemPartialsList {
  headerMain: string;
};

type IdentifiableItemContextEnrichedTexts = {
  unIdentifiedDescription: string;
};

interface IdentifiableItemRenderContext {
    // showUnidentifiedInfoMode: UnidentifiedInfoMode;
    showUnidentifiedInfoMode: {
        showBoth: boolean;
        showOnlyUnidentified: boolean;
        showOnlyIdentified: boolean;
    };
    partials: IdentifiableItemPartialsList;
    enrichedTexts: IdentifiableItemContextEnrichedTexts;
};

const identifiableHeaderPartialName = 'identifiableHeader';
const identifiableBannerPartialName = 'identifiableBanner';
const identifiableDescriptionPartialName = 'identifiableDescription';
const identifiableNameConfigPartialName = 'identifiableNameConfig';

function IdentifiableItemSheetMixin<
  TParent extends ActorDnd35e | null = ActorDnd35e | null,
  TDoc extends InstanceType<ReturnType<typeof IdentifiableItemMixin<TParent, ItemDnd35e<TParent>>>>
    = InstanceType<ReturnType<typeof IdentifiableItemMixin<TParent, ItemDnd35e<TParent>>>>,
  TConfig extends ItemSheetDnd35eConfig<TDoc> = ItemSheetDnd35eConfig<TDoc>,
  TBase extends HandleBarsItemSheetBase<TParent, TDoc, TConfig> = HandleBarsItemSheetBase<TParent, TDoc, TConfig>
>(Base: TBase) {
  abstract class IdentifiableItemSheet extends Base {
    protected override async _prepareContext(options: fa.api.DocumentSheetRenderOptions): Promise<> {
      const context = await super._prepareContext(options);

      const {
        isIdentifiable,
        unidentifiedInfo: {
          isIdentified,
          unidentifiedDescription,
        } = {},
      } = this.document.system;

      return {
        ...context,
        partials: {
          ...context.partials,
          headerMain: identifiableHeaderPartialName,
        },
        showUnidentifiedInfoMode: {
          showBoth: (game.user.isGM || context.editable) && isIdentifiable,
          showOnlyIdentified: !isIdentifiable || (isIdentified ?? false),
          showOnlyUnidentified: isIdentifiable && !isIdentified,
        },
        enrichedTexts: {
          ...context.enrichedTexts,
          unIdentifiedDescription: unidentifiedDescription || game.i18n.localize('D35E.DescriptionPlaceholder'),
        }
      };
    }
  }
  return IdentifiableItemSheet;
}

export {
  IdentifiableItemSheetMixin,
  identifiableHeaderPartialName,
  identifiableBannerPartialName,
  identifiableDescriptionPartialName,
  identifiableNameConfigPartialName,
};

export type {
  IdentifiableItemRenderContext,
  IdentifiableItemPartialsList,
  IdentifiableItemContextEnrichedTexts,
};
