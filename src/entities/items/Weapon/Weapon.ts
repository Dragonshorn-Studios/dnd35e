
export class Dnd35eWeapon<SubType extends Item.SubType = Item.SubType> extends Item<SubType> {
  constructor(...args: Item.ConstructorArgs) {
    super(...args);
  }
}