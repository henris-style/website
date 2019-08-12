import Vue from 'vue';
import SilMarkdown from '@sil/markdown';

import MarkdownH1 from '~/components/markdown/h1.vue';
import MarkdownH2 from '~/components/markdown/h2.vue';
import MarkdownH3 from '~/components/markdown/h3.vue';
import MarkdownH4 from '~/components/markdown/h4.vue';
import MarkdownH5 from '~/components/markdown/h5.vue';
import MarkdownH6 from '~/components/markdown/h6.vue';
import MarkdownP from '~/components/markdown/p.vue';
// import ME from '@sil/markdown-elements';

Vue.component('Markdown', SilMarkdown);
Vue.component('Mh1', MarkdownH1);
Vue.component('Mh2', MarkdownH2);
Vue.component('Mh3', MarkdownH3);
Vue.component('Mh4', MarkdownH4);
Vue.component('Mh5', MarkdownH5);
Vue.component('Mh6', MarkdownH6);
Vue.component('Mp', MarkdownP);
