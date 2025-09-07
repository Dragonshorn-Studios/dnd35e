import { fields } from '@common/data/_module.mjs';

export const requiredStringField = (initialValue?: string) => {
  if (initialValue === undefined) {
    initialValue = '';
  }
  return new fields.StringField({ required: true, nullable: false, initial: initialValue });
};

export const nullableOptionalStringField = (initialValue?: string) => {
  return new fields.StringField<string, string, false, true, true>({ required: false, blank: true, initial: initialValue ?? undefined });
};
export const optionalStringField = (initialValue?: string) => {
  return new fields.StringField<string, string, false, false, true>({ required: false, blank: true, initial: initialValue ?? undefined });
};

export const requiredBooleanField = (initialValue?: boolean) => {
  if (initialValue === undefined) {
    initialValue = false;
  }
  return new fields.BooleanField<boolean, boolean, true, false, true>({ required: true, nullable: false, initial: initialValue });
};

export const requiredNumberField = (initialValue?: number) => {
  if (initialValue === undefined) {
    initialValue = 0;
  }
  return new fields.NumberField<number, number, true, false, true>({ required: true, nullable: false, initial: initialValue });
};

export const optionalNumberField = (initialValue?: number) => {
  return new fields.NumberField({ required: false, nullable: true, initial: initialValue });
};
