import { IdentifiableItemSystemData } from './system.mjs';
import { ItemSheetDnd35eRenderContext } from '@items/baseItem/index.mjs';

// type UnidentifiedInfoMode = 'UnidentifiedOnly' | 'IdentifiedOnly' | 'Both';

interface IdentifiableItemPartialsList {
  headerMain: string;
};

interface IdentifiableItemRenderContext {
    // showUnidentifiedInfoMode: UnidentifiedInfoMode;
    showUnidentifiedInfoMode: {
        showBoth: boolean;
        showOnlyUnidentified: boolean;
        showOnlyIdentified: boolean;
    };
    partials: IdentifiableItemPartialsList;
};

const prepareIdentifiableContext = <TData extends IdentifiableItemSystemData>(data: TData): DeepPartial<ItemSheetDnd35eRenderContext> & IdentifiableItemRenderContext => {
  return {
    partials: {
      headerMain: identifiableHeaderPartialName,
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
  type IdentifiableItemPartialsList,
};
