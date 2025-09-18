import { IdentifiableItemSystemData } from './system.mjs';
import { ItemSheetDnd35eRenderContext } from '@items/baseItem/index.mjs';

// type UnidentifiedInfoMode = 'UnidentifiedOnly' | 'IdentifiedOnly' | 'Both';

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

const prepareIdentifiableContext = <TData extends IdentifiableItemSystemData>(data: TData, windowConfig: {
  editable: boolean;
}): DeepPartial<ItemSheetDnd35eRenderContext> & IdentifiableItemRenderContext => {
  const { editable } = windowConfig ?? {};
  return {
    partials: {
      headerMain: identifiableHeaderPartialName,
    },
    showUnidentifiedInfoMode: {
      showBoth: (game.user.isGM || editable) && data.isIdentifiable,
      showOnlyIdentified: !data.isIdentifiable || (data.unidentifiedInfo?.isIdentified || false),
      showOnlyUnidentified: data.isIdentifiable && !data.unidentifiedInfo?.isIdentified,
    },
    enrichedTexts: {
      unIdentifiedDescription: data.unidentifiedInfo?.unidentifiedDescription || game.i18n.localize('D35E.DescriptionPlaceholder'),
    }
  };
};

const identifiableHeaderPartialName = 'identifiableHeader';
const identifiableBannerPartialName = 'identifiableBanner';
const identifiableDescriptionPartialName = 'identifiableDescription';
const identifiableNameConfigPartialName = 'identifiableNameConfig';

export {
  prepareIdentifiableContext,
  identifiableHeaderPartialName,
  identifiableBannerPartialName,
  identifiableDescriptionPartialName,
  identifiableNameConfigPartialName,
};

export type {
  IdentifiableItemContextEnrichedTexts,
  IdentifiableItemRenderContext,
  IdentifiableItemPartialsList,
}
