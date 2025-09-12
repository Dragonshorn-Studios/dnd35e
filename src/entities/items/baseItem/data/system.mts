import type { DocumentFlags } from '@common/data/_module.mjs';

type ItemGrantDeleteAction = 'cascade' | 'detach' | 'restrict';

interface ItemGrantSource {
    /** The ID of a granting or granted item */
    id: string;
    /** The action taken when the user attempts to delete the item referenced by `id` */
    onDelete?: ItemGrantDeleteAction;
};

interface ItemGranterSource extends ItemGrantSource {
    /** Is this granted item visually nested under its granter: only applies to feats and features */
    nested?: boolean | null;
};

// interface ItemGranterData extends Required<ItemGranterSource> {};

type ItemGrantData = Required<ItemGrantSource>;

type ItemFlagsDnd35e = DocumentFlags & {
    Dnd35e: {
        // rulesSelections: Record<string, string | number | object | null>;
        // itemGrants: Record<string, ItemGranterData>;
        // grantedBy: ItemGrantData | null;
        [key: string]: unknown;
    };
};

type ItemOrigin = {
    originId: string;
    originVersion: string;
    originPack: string;
};

type ItemDescription = {
    value: string;
    // chat: string;
};

type ItemSystemSource = {
    version: string;
    uniqueId?: string;
    origin?: ItemOrigin;
    // Name
    isNameFromFormula: boolean;
    nameFormula?: string | null;
    // Description
    description: ItemDescription;
    isPsionic: boolean;
    isEpic: boolean;
};

// interface ItemSystemData extends Omit<ItemSystemSource, "schema"> {
//     description: ItemDescriptionData;
// }

interface ItemSystemData extends ItemSystemSource {};

// type ItemSchemaDnd35e = Omit<foundry.documents.ItemSchema, 'system'> & {
//     system: fields.TypeDataField;
// };

export type {
  ItemFlagsDnd35e,
  ItemGrantData,
  ItemGrantDeleteAction,
  ItemGranterSource,
  ItemGrantSource,
  ItemSystemData,
  ItemSystemSource,
};
