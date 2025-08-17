import { RegionBehaviorDnd35e } from "./RegionBehaviorDnd35e";
import fields = foundry.data.fields;

class EnvironmentFeatureBehaviorType extends foundry.data.regionBehaviors.RegionBehaviorType<
    EnvironmentFeatureTypeSchema,
    RegionBehaviorDnd35e | null
> {
}

interface EnvironmentFeatureBehaviorType
    extends foundry.data.regionBehaviors.RegionBehaviorType<EnvironmentFeatureTypeSchema, RegionBehaviorDnd35e | null>,
        fields.ModelPropsFromSchema<EnvironmentFeatureTypeSchema> {}

type EnvironmentFeatureTypeSchema = {
    terrain: fields.SchemaField<{
        difficult: fields.NumberField<ZeroToTwo, ZeroToTwo, true, false, true>;
    }>;
};

export { EnvironmentFeatureBehaviorType };
