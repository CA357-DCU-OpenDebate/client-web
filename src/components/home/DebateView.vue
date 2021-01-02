<template>
  <div class="debate">
    <Promised :promise="fetchDebateModelById">
      <template v-slot:default>
        <div v-if="debateModel">
          <div class="title">
            <h1>{{debateModel.title}}</h1>
            <b-button class="change-proposal-button" variant="open-debate-green">
              Change proposal
              <img src="../../assets/pen.svg" alt="" width="20" height="20">
            </b-button>
          </div>
          <div class="payload">
            <div class="view-container">
              <router-link class="article-button" :to="{}" :replace="true">Article</router-link>
              <router-link :to="{}"> History</router-link>
              <router-link :to="{}"> LatestProposal </router-link>
            </div>
            <div class="description content">
              <h1 class="header">Description</h1>
              <b-button class="change-proposal-button" variant="open-debate-green">
                Change proposal
                <img src="../../assets/pen.svg" alt="" width="20" height="20">
              </b-button>
              {{debateModel.description}}
            </div>
            <div class="analyse content">
              <h1 class="header">Analyse</h1>
              <div class="view-container">
                <router-link :to="{}">Simple View</router-link>
                <router-link class="advenced-button" :to="{}">Advenced View</router-link>
              </div>
              <b-button class="change-proposal-button"  variant="open-debate-green">
                Change proposal
                <img src="../../assets/pen.svg" alt="" width="20" height="20">
              </b-button>
              <h2 class="sub-category">Argumentation</h2>
              <editor-content class="editor" :editor="editorArgumentation" :autoFocus="false" :readonly="true"></editor-content>
              <h2 class="sub-category">Conclusion</h2>
              <editor-content class="editor" :editor="editorConclusion" :autoFocus="false" :readonly="true"></editor-content>
            </div>
          </div>
          </div>
      </template>
      <template v-slot:pending>
        Load
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
  toto = "qhdqlh"
  debateModel!: DebateModel;
  editorArgumentation!: Editor;
  editorConclusion!: Editor;

  test(id: string) {
    console.log(id)
  }
  get fetchDebateModelById(): Promise<DebateModel>{
    const id = this.$route.params.id;

    return getAxios(false)
        .get("debates/" + id)
        .then((debate: DebateModel) => {
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
<style lang="scss">
.advenced-button {
  background-color: #E5E5E5 !important;
}
.article-button {
  background-color: #E5E5E5 !important;
}
.title {
  border-bottom: 1px solid;
  text-align: center;
  position: relative;
}
.title .change-proposal-button {
  position: absolute;
  top: 30px
}
.content > .header {
  position: absolute;
  margin-left: 20px;
  top: -32px;
  margin-bottom: 0;
}
 .change-proposal-button {
  color: white !important;
  height: 32px;
  padding: .25em !important;
  color: white;
  position: absolute;
  top: -25px;
  border-radius: 20px !important;
  margin-bottom: 0;
  right: 10px;
}
.content > .view-content-button {
  border: 1px solid;
  position: absolute;
  bottom: -14px;
  border-radius: 18px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}
.content {
  background-color: white;
  position: relative;
  border: 1px solid #E5E5E5;
  border-radius: 6px;
  padding: 5px;
  margin-bottom: 40px;
}

</style>
<style lang="scss" scoped>
.debate {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* width: 90%; */
}
.debate .payload {
  padding-top: 30px;
  background-color: #F5F5F5;
  padding-left: 20%;
  padding-right: 20%;
  display: flex;
  flex-direction: column;
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
$trait-width: 53px;
.view-container {
  display: inline-flex;
  border: 1px solid gray;
  margin: auto;
  border-radius: 7px;
  position: relative;
}
.view-container > a {
  all: unset;
  border-right: 1px solid gray;
  padding: 4px;
  padding-right: 6px;
  padding-left: 6px;
}
.view-container > a:last-child {
  border-right: none;
  padding-right: 7px;
}
.view-container > a:first-child {
  padding-left: 7px;
}
.view-container > a:first-child,
.view-container > a:last-child {
  position: relative;
}
.view-container > a:hover,
.view-container > a.router-link-active {
  cursor: pointer;
  background-color: var(--dark-hover);
}
.view-container::before {
  content: "";
  position: absolute;
  display: block;
  width: $trait-width;
  background-color: gray;
  height: 1px;
  left: calc(#{$trait-width} * -1);
  top: calc(50% - 1px);
}
.view-container::after {
  content: "";
  position: absolute;
  display: block;
  width: $trait-width;
  background-color: gray;
  height: 1px;
  right: calc(#{$trait-width} * -1);
  top: calc(50% - 1px);
}

.content {
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  flex-direction: column;
}
.content .sub-category {
  position: relative;
  margin-left: 60px;
  inline-size: fit-content;
}
.content  .sub-category::before {
  content: "";
  position: absolute;
  display: block;
  width: $trait-width;
  background-color: gray;
  height: 1px;
  left: calc(#{$trait-width} * -1);
  top: calc(50% - 1px);
}
.content  .sub-category::after {
  content: "";
  position: absolute;
  display: block;
  width: $trait-width;
  background-color: gray;
  height: 1px;
  right: calc(#{$trait-width} * -1);
  top: calc(50% - 1px);
}
.change-proposal-button {
}
.payload > .view-container {
  margin-bottom: 40px;
}
.analyse > .view-container {
  margin-top: 10px;
  margin-bottom: 15px;
}
</style>
