import { documents } from "@client/_module.mjs";
import { SceneDnd35e } from "../scene/SceneDnd35e";
import AmbientLight from "@client/canvas/placeables/light.mjs";
import MeasuredTemplate from "@client/canvas/placeables/template.mjs";
import { RegionDocumentDnd35e } from "../scene/region-document/RegionDocumentDnd35e";
import EffectsCanvasGroup from "@client/canvas/groups/effects.mjs";
import { TokenDocumentDnd35e } from "../scene/token-document";
import { tokenDnd35e } from "./token/tokenDnd35e";
import { RegionDnd35e } from "./RegionDnd35e";

export type CanvasDnd35e = foundry.canvas.Canvas<
    SceneDnd35e,
    AmbientLight<documents.AmbientLightDocument<SceneDnd35e>>,
    MeasuredTemplate<MeasuredTemplateDocument<SceneDnd35e>>,
    tokenDnd35e<TokenDocumentDnd35e<SceneDnd35e>>,
    EffectsCanvasGroup,
    RegionDnd35e<RegionDocumentDnd35e<SceneDnd35e>>
>;