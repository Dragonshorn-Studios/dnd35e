import { ActorDnd35e } from "@actors/baseActor/ActorDnd35e.mjs";
import { HandleBarsItemSheetBase, HandleBarsItemSheetMixin, ItemDnd35e, ItemDnd35eConstructor, ItemSheetDnd35eConfig, ItemSheetDnd35eRenderContext } from "@items/baseItem/index.mjs";
import { IdentifiableItemMixin, RequiredBaseIdentifiableItem } from "../IdentifiableItem.mjs";
import { DeepMerge } from "@source/types.mjs";
import { ActorTypes } from "@actors/index.mjs";

interface IdentifiableItemPartialsList {
  headerMain: string;
};

type IdentifiableItemContextEnrichedTexts = {
  unIdentifiedDescription: string;
};

interface IdentifiableItemRenderContextBase {
    // showUnidentifiedInfoMode: UnidentifiedInfoMode;
    showUnidentifiedInfoMode: {
        showBoth: boolean;
        showOnlyUnidentified: boolean;
        showOnlyIdentified: boolean;
    };
    partials: IdentifiableItemPartialsList;
    enrichedTexts: IdentifiableItemContextEnrichedTexts;
};

type IdentifiableItemRenderContext<TBase extends ItemSheetDnd35eRenderContext> = DeepMerge<IdentifiableItemRenderContextBase, TBase>;

const identifiableHeaderPartialName = 'identifiableHeader';
const identifiableBannerPartialName = 'identifiableBanner';
const identifiableDescriptionPartialName = 'identifiableDescription';
const identifiableNameConfigPartialName = 'identifiableNameConfig';




abstract class RequiredIdentifiableBase extends HandleBarsItemSheetMixin<
  ActorTypes,
  RequiredBaseIdentifiableItem,
  ItemSheetDnd35eConfig<RequiredBaseIdentifiableItem>
>(){}

function IdentifiableItemSheetMixin<
  // TParent extends ActorTypes = ActorTypes,
  // TDoc extends ReturnType<typeof IdentifiableItemMixin<ActorTypes, ItemDnd35e<ActorTypes>>>
  //   = ReturnType<typeof IdentifiableItemMixin<ActorTypes, ItemDnd35e<ActorTypes>>>, //RequiredBaseDoc = RequiredBaseDoc,
  // TConfig extends ItemSheetDnd35eConfig<RequiredBaseDoc>
  //   = ItemSheetDnd35eConfig<RequiredBaseDoc>,
  TBase extends AbstractConstructorOf<RequiredIdentifiableBase> & typeof RequiredIdentifiableBase
    = AbstractConstructorOf<RequiredIdentifiableBase> & typeof RequiredIdentifiableBase
>(Base: TBase) {
  type PrepareContextReturn = Awaited<ReturnType<RequiredIdentifiableBase["_prepareContext"]>>;

  type MergedContext = IdentifiableItemRenderContext<PrepareContextReturn>;

  abstract class IdentifiableItemSheet extends Base {
    protected override async _prepareContext(options: fa.api.DocumentSheetRenderOptions): Promise<MergedContext> {
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
  RequiredIdentifiableBase,
};

export type {
  IdentifiableItemRenderContext,
  IdentifiableItemPartialsList,
  IdentifiableItemContextEnrichedTexts,
};
