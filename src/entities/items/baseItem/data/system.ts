import { DocumentFlags } from "@common/data/_module.mjs";


type ItemGrantDeleteAction = "cascade" | "detach" | "restrict";

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

type ItemSystemSource = {
    // level?: { value: number };
    // description: ItemDescriptionSource;
    // traits: ItemTraits | ItemTraitsNoRarity | RarityTraitAndOtherTags | OtherTagsOnly;
    // rules: RuleElementSource[];
    // /** A non-unique but human-readable identifier for this item */
    // slug: string | null;

    // /** Information concerning the publication from which this item originates */
    // publication: PublicationData;

    // /** A record of this actor's current world schema version as well a log of the last migration to occur */
    // _migration: MigrationRecord;
    // /** Legacy location of `MigrationRecord` */
    // schema?: object;
};

// interface ItemSystemData extends Omit<ItemSystemSource, "schema"> {
//     description: ItemDescriptionData;
// }

interface ItemSystemData extends Omit<ItemSystemSource, "schema"> {
    description: string;
}


export type {
    // ActionCost,
    // ActionType,
    // BaseItemSourcePF2e,
    // Frequency,
    // FrequencyInterval,
    // FrequencySource,
    // ItemDescriptionData,
    ItemFlagsDnd35e,
    ItemGrantData,
    ItemGrantDeleteAction,
    ItemGranterSource,
    ItemGrantSource,
    // ItemSchemaPF2e,
    // ItemSourceFlagsPF2e,
    ItemSystemData,
    ItemSystemSource,
    // ItemTrait,
    // ItemTraits,
    // ItemTraitsNoRarity,
    // OtherTagsOnly,
    // RarityTraitAndOtherTags,
};