import { ItemSystemData, ItemSystemSource } from "../baseItem/data/system";

interface PhysicalSystemSource extends ItemSystemSource {
    // level: { value: number };
    // traits: PhysicalItemTraits<PhysicalItemTrait>;
    // quantity: number;
    // baseItem: string | null;
    // bulk: {
    //     value: number;
    // };
    // hp: PhysicalItemHPSource;
    // hardness: number;
    // price: PartialPrice;
    // equipped: EquippedData;
    // identification: IdentificationSource;
    // containerId: string | null;
    // material: ItemMaterialSource;
    // size: Size;
    // usage?: { value: string };
    // temporary?: boolean;
    // subitems?: PhysicalItemSource[];

    // /**
    //  * Data for apex items: the attribute upgraded and, in case of multiple apex items, whether the upgrade has been
    //  * selected
    //  */
    // apex?: {
    //     attribute: AttributeString;
    //     selected?: boolean;
    // };
};

interface PhysicalItemHitPoints {
    value: number;
    max: number;
};

interface UnidentifiedInfo {
    unidentifiedName: string;
    unidentifiedDescription: string;
    unidentifiedPrice: number;
};

interface PhysicalSystemData extends PhysicalSystemSource, ItemSystemData {
    // apex?: {
    //     attribute: AttributeString;
    //     selected: boolean;
    // };
    // hp: PhysicalItemHitPoints;
    // price: Price;
    // bulk: BulkData;
    // material: ItemMaterialData;
    // traits: PhysicalItemTraits<PhysicalItemTrait>;
    // temporary: boolean;
    // identification: IdentificationData;
    // usage: UsageDetails;
    // stackGroup: string | null;
    weight: number;
    unidentifiedInfo?: UnidentifiedInfo;
    isIdentifiable: boolean;
    isIdentified: boolean;
    hitPoints: PhysicalItemHitPoints;
    hardness: number;
    isCarried: boolean;
    labels: PhysicalItemLabels;
};

type PhysicalItemLabelTypes = "carried" | "identified";

type PhysicalItemLabels = {
  [Key in PhysicalItemLabelTypes]: string;
};

export type {
    // BasePhysicalItemSource,
    // BulkData,
    // Coins,
    // EquippedData,
    // IdentificationData,
    // IdentificationStatus,
    // IdentifiedData,
    // Investable,
    // ItemCarryType,
    // ItemMaterialData,
    // ItemMaterialSource,
    // MystifiedData,
    // PartialPrice,
    // PhysicalItemHitPoints,
    // PhysicalItemHPSource,
    // PhysicalItemTrait,
    // PhysicalItemTraits,
    PhysicalSystemData,
    UnidentifiedInfo,
    PhysicalItemLabels,
    // PhysicalSystemSource,
    // Price,
};