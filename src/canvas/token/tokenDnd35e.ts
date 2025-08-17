import TokenLayer from "@client/canvas/layers/tokens.mjs";
import { TokenDocumentDnd35e } from "../../scene/token-document";

class tokenDnd35e<TDocument extends TokenDocumentDnd35e = TokenDocumentDnd35e> extends fc.placeables.Token<TDocument> {

}

interface tokenDnd35e<TDocument extends TokenDocumentDnd35e = TokenDocumentDnd35e> extends fc.placeables.Token<TDocument> {
    get layer(): TokenLayer<this>;
}

export { tokenDnd35e };