<template>
  <div class="debate">
    <h1>yow debate !</h1>
    <Promised :promise="fetchDebateModelById">
      <template v-slot:default>
        <div v-if="debateModel">
          <h1 >{{debateModel.title}}</h1>
          <h1>description</h1>
          {{debateModel.description}}
          <h1>analyse</h1>
          <h2>argumentation</h2>
          <editor-content class="editor" :editor="editorArgumentation" :autoFocus="false" :readonly="true"></editor-content>
          <h2>conclusion</h2>
          <editor-content class="editor" :editor="editorConclusion" :autoFocus="false" :readonly="true"></editor-content>
        </div>
      </template>
      <template v-slot:pending>
        load
      </template>
    </Promised>
  </div>
</template>

<script lang="ts">
import { Component,  Vue } from 'vue-property-decorator';
import {getAxios} from "@/axiosInstance";
import DebateModel from "@/models/DebateModel";
import {plainToClass} from "class-transformer";
import { Editor, EditorContent, EditorMenuBar } from "tiptap";
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
  Placeholder,
} from "tiptap-extensions";
import Title from "@/editorExtension/Title";
import Doc from "@/editorExtension/Doc";

@Component({
  components: {
    EditorMenuBar,
    EditorContent,
  }
})
export default class Debate extends Vue {
  debateModel!: DebateModel;
  editorArgumentation!: Editor;
  editorConclusion!: Editor;

  get fetchDebateModelById(): Promise<DebateModel>{
    const id = this.$route.params.id;
    console.log("id " + id)
    return getAxios(false)
        .get("debates/" + id)
        .then((debate: any) => {
          console.log("yoww cool")
          this.debateModel = plainToClass(DebateModel, debate.data as Object)
          console.log(this.debateModel)
          this.setEditorArgumentation()
          this.setEditorConclusion()
        })
  }
  setEditorArgumentation() {
    this.editorArgumentation = new Editor({
      onUpdate: ({ getHTML, getJSON }) => {
        //const editor: any = this.editor.getJSON();
        //const content: Array<any> = editor["content"];
        //this.setTitle(this.getTitleFromContent(content));
      },
      extensions: [
        //new Placeholder({
        //  showOnlyCurrent: false,
        //  emptyNodeText: node => {
        //    if (node.type.name === "title") {
        //      return "Give me a name";
        //    }
        //    return "Write the description !";
        //  },
        //}),
        new Blockquote(),
        new CodeBlock(),
        new HardBreak(),
        new Heading({ levels: [1, 2, 3, 4, 5, 6] }),
        new BulletList(),
        new OrderedList(),
        new ListItem(),
        new TodoItem(),
        new TodoList(),
        new Bold(),
        new Code(),
        new Italic(),
        new Link(),
        new Strike(),
        new Underline(),
        new History(),
      ],
      //TODO transform description en string et la parse?
      content: {
        type: "doc",
        content:  this.debateModel.analyse.argumentation
      },
    });
  }
  setEditorConclusion() {
    this.editorConclusion = new Editor({
      onUpdate: ({ getHTML, getJSON }) => {
        const editor: any = this.editorConclusion.getJSON();
        console.log(editor)
        //const content: Array<any> = editor["content"];
        //this.setTitle(this.getTitleFromContent(content));
      },
      extensions: [
       // new Placeholder({
       //   showOnlyCurrent: false,
       //   emptyNodeText: node => {
       //     if (node.type.name === "title") {
       //       return "Give me a name";
       //     }
       //     return "Write the description !";
       //   },
       // }),
        new Blockquote(),
        new CodeBlock(),
        new HardBreak(),
        new Heading({ levels: [1, 2, 3, 4, 5, 6] }),
        new BulletList(),
        new OrderedList(),
        new ListItem(),
        new TodoItem(),
        new TodoList(),
        new Bold(),
        new Code(),
        new Italic(),
        new Link(),
        new Strike(),
        new Underline(),
        new History(),
      ],
      content: {
        type: "doc",
        content: this.debateModel.analyse.conclusion
      }
    });
  }
  created() {
    console.log("created")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.debate {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* width: 90%; */
  padding-left: 25%;
  padding-right: 25%;
}
.debate > .menubar {
  padding-top: 20px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
</style>
<style lang="scss">
*.is-empty:nth-child(1)::before,
*.is-empty:nth-child(2):last-child::before {
  content: attr(data-empty-text);
  float: left;
  color: #aaa;
  pointer-events: none;
  height: 0;
  font-style: italic;
}
.ProseMirror:focus {
  outline: none;
}
h1 > br:nth-child(2):last-child {
  display: none;
}
.menubar > button.is-active {
  background-color: rgba(0, 0, 0, 0.1);
}
.menubar > button {
  border: none;
  background-color: whitesmoke;
  outline: none;
}
.menubar {
  margin-bottom: 5px;
}
.tag-list {
  margin-bottom: 20px;
}
.editor {
  position: relative;
  overflow-y: auto;
}
.editor p {
  margin-bottom: 0px;
}
</style>

<style lang="scss">
.debate .editor {
  p,
  i,
  b,
  em {
    font-size: 16px;
    line-height: 1.5;
    word-wrap: break-word; // could be reconsidered, the whitespace property might also be useful
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    line-height: 1.25;
    margin-top: 24px;
    margin-bottom: 16px;
  }

  h1,
  h2 {
    padding-bottom: 0.3em;
    border-bottom: 1px solid #eaecef;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.5em;
  }

  h3 {
    font-size: 1.25em;
  }

  h4 {
    font-size: 1em;
  }

  h5 {
    font-size: 0.875em;
  }

  h6 {
    font-size: 0.85em;
    color: #6a737d;
  }
}
</style>
