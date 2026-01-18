import type { DocumentFlags, DocumentFlagsSource } from "@common/data/_module.mjs";

interface ItemFlagsDnd35e extends DocumentFlags {
  Dnd35e: {
    // rulesSelections: Record<string, string | number | object | null>;
    // itemGrants: Record<string, ItemGranterData>;
    // grantedBy: ItemGrantData | null;
    [key: string]: Record<string, JSONValue>;
  };
};
interface ItemFlagsSourceDnd35e extends DocumentFlagsSource {
  Dnd35e: Record<string, JSONValue>;
};

export type {
  ItemFlagsDnd35e,
  ItemFlagsSourceDnd35e,
};
