const DAMAGE_TYPES = [
  'Piercing',
  'Bludgeoning',
  'Slashing',
];
type DamageType = (typeof DAMAGE_TYPES)[number];

export { DAMAGE_TYPES, type DamageType };
