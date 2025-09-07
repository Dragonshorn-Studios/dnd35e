type IdentifiableItemSource = {
    isIdentifiable: boolean;
    unidentifiedInfo?: {
        unidentifiedName: string;
        unidentifiedDescription: string;
        unidentifiedPrice: number | null;
        isIdentified: boolean;
        unidentifiedNameFormula?: string | null;
        usesUnidentifiedNameFormula: boolean;
    };
};

type IdentifiableItemSystemData = IdentifiableItemSource;

export type {
  IdentifiableItemSource,
  IdentifiableItemSystemData,
};
