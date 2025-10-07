type IdentifiableItemSource = {
    isIdentifiable: boolean;
    unidentifiedInfo?: {
        unidentifiedName: string;
        unidentifiedDescription: string;
        unidentifiedPrice: number | null;
        isIdentified: boolean;
        unidentifiedNameFormula?: string | null;
        isUnidentifiedNameFromFormula: boolean;
    };
};

type IdentifiableItemSystemDataCore = IdentifiableItemSource;

export type {
  IdentifiableItemSource,
  IdentifiableItemSystemDataCore,
};
