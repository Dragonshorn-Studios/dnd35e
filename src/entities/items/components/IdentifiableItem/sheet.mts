import { IdentifiableItemSystemData } from './system.mjs';
import { ItemSheetDnd35eRenderContext } from '@items/baseItem/index.mjs';

// type UnidentifiedInfoMode = 'UnidentifiedOnly' | 'IdentifiedOnly' | 'Both';

interface IdentifiableItemRenderContext {
    // showUnidentifiedInfoMode: UnidentifiedInfoMode;
    showUnidentifiedInfoMode: {
        showBoth: boolean;
        showOnlyUnidentified: boolean;
        showOnlyIdentified: boolean;
    };
};

const prepareIdentifiableContext = <TData extends IdentifiableItemSystemData>(data: TData): Partial<ItemSheetDnd35eRenderContext> & IdentifiableItemRenderContext => {
  return {
    partials: {
      header: identifiableHeaderPartialName,
    },
    showUnidentifiedInfoMode: {
      showBoth: game.user.isGM && data.isIdentifiable,
      showOnlyIdentified: !data.isIdentifiable || (data.unidentifiedInfo?.isIdentified || false),
      showOnlyUnidentified: data.isIdentifiable && !data.unidentifiedInfo?.isIdentified,
    },
  };
};

const identifiableHeaderPartialName = 'identifiableHeader';

export {
  prepareIdentifiableContext,
  identifiableHeaderPartialName,
  // IdentifiableHeaderPart,
  type IdentifiableItemRenderContext,
};
