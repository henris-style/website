import Vue from 'vue';
import SilMarkdown from '@sil/markdown';

import ME from '@sil/markdown-elements';

Vue.component('Markdown', SilMarkdown);
Vue.component('Mh1', ME.MarkdownH1);
Vue.component('Mh2', ME.MarkdownH2);
Vue.component('Mh3', ME.MarkdownH3);
Vue.component('Mh4', ME.MarkdownH4);
Vue.component('Mh5', ME.MarkdownH5);
Vue.component('Mh6', ME.MarkdownH6);
Vue.component('Mp', ME.MarkdownP);
