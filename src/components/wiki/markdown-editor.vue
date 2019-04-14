 <template>
  <v-container fluid grid-list-md box fill-height>
    <v-layout row wrap>
      <v-flex xs12>
        <div class="text-xs-center">
          <v-btn-toggle v-model="buttonGroup" multiple>
            <v-btn flat>
              <v-icon>fullscreen</v-icon>
            </v-btn>
            <v-btn flat>
              <v-icon>web</v-icon>
            </v-btn>
          </v-btn-toggle>
        </div>
      </v-flex>
      <v-flex xs12 v-bind:class="{ sm6: !isEditorVisible }" v-if="!isPreviewVisible">
        <v-card class="full-height">
          <v-card-title>
            <v-textarea
              :rows="rows"
              v-model="markdownContent"
              v-on:keyup.enter="growTextArea"
            ></v-textarea>
          </v-card-title>
          <v-card-actions>
            <v-btn
              flat
              color="orange"
              v-on:click="$emit('markdown-editor-save', markdownContent)"
            >Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 v-if="!isEditorVisible" v-bind:class="{ sm6: !isPreviewVisible }">
        <v-card class="full-height">
          <v-card-text>
            <div align="left" v-html="htmlContent"></div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script lang='ts'>
import { Vue, Component, Prop } from "vue-property-decorator";
import marked from "marked";
import _ from "lodash";

@Component
export default class MarkdownEditor extends Vue {
  @Prop(String) public content!: string;

  public rows: number = 18;

  private readonly editorBtn = 0;

  private readonly previewBtn = 1;

  private isEditorVisible: boolean = false;

  private isPreviewVisible: boolean = false;

  private selectedBtns: number[] = [this.editorBtn, this.previewBtn];

  private markdown: string | null = null;

  private html: string = "";

  constructor() {
    super();
  }

  get buttonGroup(): number[] {
    return this.selectedBtns;
  }

  set buttonGroup(btns: number[]) {
    this.isEditorVisible = this.isButtonSelected(btns, this.editorBtn);
    this.isPreviewVisible = this.isButtonSelected(btns, this.previewBtn);

    if (!this.isEditorVisible && !this.isPreviewVisible) {
      this.selectedBtns = [this.editorBtn, this.previewBtn];
      return;
    }

    this.selectedBtns = btns;
  }

  get markdownContent(): string {
    if (this.markdown === null) {
      return this.content;
    }

    return this.markdown;
  }

  set markdownContent(val: string) {
    this.markdown = val;

    const debounceTime = this.isPreviewVisible ? 300 : 1000;
    _.debounce(() => {
      this.htmlContent = this.markdownContent;
    }, debounceTime)();
  }

  get htmlContent(): string {
    return this.html;
  }

  set htmlContent(val: string) {
    this.html = marked(val, { sanitize: true });
  }

  public updated() {
    if (this.content.length && this.markdown === null) {
      this.htmlContent = this.content;
    }
  }

  //// TODO: v-textarea auto-grow should work but then the page scrollbar
  //// starts jumping around....
  public growTextArea(e: Event) {
    const scrollHeight = (e.srcElement as any).scrollHeight;
    const lineHeight = 18;
    const defaultHeight = 350;
    if (scrollHeight > defaultHeight) {
      this.rows = Math.ceil(scrollHeight / lineHeight);
    }
  }

  private isButtonSelected(btns: number[], btn: number): boolean {
    return btns.indexOf(btn) > -1 && btns.length === 1;
  }
}
</script>


<style scoped>
.full-height {
  height: 100%;
}
</style>
