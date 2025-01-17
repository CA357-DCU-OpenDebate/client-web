import { NodeSpec } from 'prosemirror-model';
import { Node } from 'tiptap'

export default class Title extends Node {

    get name() {
        return 'title'
    }

    get schema(): NodeSpec {
        return {
            content: 'inline*',
            parseDOM: [{
                tag: 'h1',
            }],
            toDOM: () => ['h1', 0],
        }
    }
}