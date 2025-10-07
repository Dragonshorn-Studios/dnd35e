export type Constructor<T = object> = abstract new (...args: any[]) => T;

// Get only static methods and props
export type StaticSide<T> = Omit<T, 'prototype'>;

// Extract the schema type from a class with a static defineSchema
// export type SchemaOf<TCtor> = TCtor extends { defineSchema(): infer S } ? S : never;
export type BaseSchemaOf<TBase> = TBase extends { defineSchema: (...a: any[]) => infer S } ? S : never;
// Utility: get the static side of a class constructor
export type Static<TCtor> = { [K in keyof TCtor]: TCtor[K] };

// Utility: merge base statics with derived statics
export type MergeStatics<TBase, TDerived> = Static<TBase> & Static<TDerived>;

export function mergeSchemas<Base, Ext>(base: Base, ext: Ext): Base & Ext {
  return { ...base, ...ext } as Base & Ext;
}

export type ConstructorWithStatics<TCtor extends abstract new (...args: any[]) => any> =
  TCtor & { new (...args: any[]): InstanceType<TCtor> };

export type DeepMerge<A, B> =
  A extends object
    ? B extends object
      ? {
          [K in keyof (A & B)]:
            K extends keyof B
              ? K extends keyof A
                ? DeepMerge<A[K], B[K]> // recurse if key exists in both
                : B[K]                  // only in B
              : K extends keyof A
                ? A[K]                  // only in A
                : never;
        }
      : B
    : B;
