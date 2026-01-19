import type { fields as fieldsType } from '@common/data/_module.mjs';
const {
  StringField,
  HTMLField,
  BooleanField,
  NumberField,
} = foundry.data.fields;

// Strings
export const requiredStringField = (initialValue?: string) => {
  // save logic for nullable
  // if (initialValue === undefined) {
  //   initialValue = '';
  // }
  return new StringField({ required: true, nullable: false, initial: initialValue ?? '' });
};

type NullableOptionalStringField = fieldsType.StringField<string, string, false, true, true>;
export const nullableOptionalStringField = (initialValue?: string) => {
  return new StringField<string, string, false, true, true>({ required: false, blank: true, initial: initialValue ?? undefined });
};

type OptionalStringField = fieldsType.StringField<string, string, false, false, true>;
export const optionalStringField = (initialValue?: string) => {
  return new StringField<string, string, false, false, true>({ required: false, blank: true, initial: initialValue ?? undefined });
};

// HTML
type OptionalHtmlField = fieldsType.HTMLField<string, string, false, false, true>;
const optionalHtmlField = () =>
  new HTMLField({ required: false, nullable: false, blank: true });

// Bools
type RequiredBoolField = fieldsType.BooleanField<boolean, boolean, true, false, true>;
export const requiredBooleanField = (initialValue?: boolean) => {
  if (initialValue === undefined) {
    initialValue = false;
  }
  return new BooleanField<boolean, boolean, true, false, true>({ required: true, nullable: false, initial: initialValue });
};

// Numbers
export const requiredNumberField = (initialValue?: number) => {
  if (initialValue === undefined) {
    initialValue = 0;
  }
  return new NumberField<number, number, true, false, true>({ required: true, nullable: false, initial: initialValue });
};

export const optionalNumberField = (initialValue?: number) => {
  return new NumberField({ required: false, nullable: true, initial: initialValue });
};

type RequiredNullableNumberField = fieldsType.NumberField<number, number, true, true, false>;
const requiredNullableNumberField = () =>
  new NumberField<number, number, true, true, false>({ required: true, nullable: true })


export {

  optionalHtmlField,

  requiredNullableNumberField,
}

export type {
  OptionalStringField,
  NullableOptionalStringField,

  OptionalHtmlField,

  RequiredBoolField,

  RequiredNullableNumberField,
};


class system {}

class ChildSystem extends system {}

class base<TSystem extends system> {
  declare system: TSystem;
}

class child extends base<ChildSystem> {}

class base2 {
  declare system: system
}
class child2 extends base2 {
  declare system: ChildSystem;
}