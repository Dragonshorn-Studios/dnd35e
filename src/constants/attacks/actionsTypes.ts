export const ActionsTypes = {
  meleeWeaponAttack: 'meleeWeaponAttack',
  rangedWeaponAttack: 'rangedWeaponAttack',
  meleeSpellAttack: 'meleeSpellAttack',
  rangedSpellAttack: 'rangedSpellAttack',
};

export type ActionsTypes = typeof ActionsTypes[keyof typeof ActionsTypes];
export const ActionsTypesList = Object.values(ActionsTypes);
export const isAttackAction = (action: string): action is ActionsTypes => {
  return ActionsTypesList.includes(action as ActionsTypes);
};