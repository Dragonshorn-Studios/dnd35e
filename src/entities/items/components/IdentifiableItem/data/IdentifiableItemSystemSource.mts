import { ItemSystemSource } from "@items/baseItem/index.mjs";

interface IdentifiableItemSystemSource extends ItemSystemSource {
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

export { IdentifiableItemSystemSource };
