const PHYSICAL_ITEM_TYPES = new Set([
  'Weapon',
] as const);
type PhysicalItemType = SetElement<typeof PHYSICAL_ITEM_TYPES>;

export type {
  PhysicalItemType,
};

export {
  PHYSICAL_ITEM_TYPES,
};
