---
layout: layouts/default.njk
pageTitle: ALF | Progress Bar Status
eleventyNavigation:
  key: progress-bar-status
  title: ALF - Progress Bar Status
  parent: examples
---
<div id="wrapper">
<div id="app">
  <div class="off-canvas position-right" id="offCanvas" data-off-canvas>
    <form v-for="stop in stops" v-bind:key="stop.id">
      <fieldset>
        <legend>Set status for page {% raw %}{{ stop.title }}{% endraw %}</legend>
        <input type="radio" :id="`default${ stop.id }`" v-model="stops[ stop.id ].status" value="default" /><label :for="`default${ stop.id }`">Default</label>
        <input type="radio" :id="`error${ stop.id }`" v-model="stops[ stop.id ].status" value="error" /><label :for="`error${ stop.id }`">Error</label>
        <input type="radio" :id="`warning${ stop.id }`" v-model="stops[ stop.id ].status" value="warning" /><label :for="`warning${ stop.id }`">Warning</label>
        <input type="radio" :id="`success${ stop.id }`" v-model="stops[ stop.id ].status" value="success" /><label :for="`success${ stop.id }`">Success</label>
      </fieldset>
    </form>
  </div>
  <div class="grid-container off-canvas-content" data-off-canvas-content>
    <div class="grid-x grid-margin-x grid-margin-y">
      <div class="cell small-3 progress-column">
        <div class="progress-component">
        <button type="button" class="button" data-toggle="offCanvas">Open Menu</button>
          <div class="meta">
            <div class="title">Hembygdsgård 2.0</div>
            <ul class="meta-data">
              <li>
                <span>Status</span>
                <span>Utkast</span>
              </li>
              <li>
                <span>Ansökanstyp</span>
                <span>Projektstöd</span>
              </li><li>
                <span>Journalnummer</span>
                <span>2020-1567-1</span>
              </li>
            </ul>
            <ul class="control-panel">
              <li>
                <button class="button clear small"><i class="fas fa-save"></i><span>Spara</span></button>
              </li><li>
                <button class="button clear small"><i class="fas fa-download"></i><span>Ladda ner</span></button>
              </li><li>
                <button class="button clear small"><i class="fas fa-times"></i><span>Radera</span></button>
              </li>
            </ul>
          </div>
          <ul class="progressbar">
            <li v-for="( stop, index ) in stops">
              <a :href="stop.url" :class="[stop.pageType, stop.status]" ><span>{% raw %}{{ index }}. {{ stop.title }}</span>{% endraw %}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="cell small-8 small-offset-1">
        <router-link to="/test">Go to test</router-link>
        <router-view></router-view>
        <page title="Page 1" nextpage="page2" v-bind:fields="fields"></page>
        <!--<h1>Progress Bar Status</h1>
        <button type="button" class="button" data-toggle="offCanvas">Open Menu</button>
        <label for="field2" class="error">Field Two Label</label>
        <input type="text" id="field2" class="error" />
        <text-input></text-input>
        <fieldset>
          <legend>Choose Your Favorite</legend>
          <input type="radio" name="favorite" value="Yes" id="yes" required><label for="yes">Yes</label>
          <input type="radio" name="favorite" value="no" id="no"><label for="no">No</label>
        </fieldset>-->
      </div>  
    </div>
  </div>
</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
<script>


  const textInput = Vue.component( 'text-input' , {
    props: [ 'label', 'id', 'status' ],
    data: function() {
      return {
      }
    },
    template: '<div>\
                {{ field }}\
                <label :for="`{{ id }}`">{% raw %}{{ label }}{% endraw %}</label>\
                <input type="text" id="{{ id }}" :class="{{ status }}" />\
              </div>'
  });
  
  const page = Vue.component( 'page', {
    props: {
      title : {
        type: String
      }, 
      nextpage : {
        type: String
      },
      fields : {
       type: Array
      }
    },
    template: '<section>\
                <h1>{% raw %}{{ title }}{% endraw %}</h1>\
                <p>Answer the following questions on this page</p>\
                <text-input \
                    v-for="field in fields" \
                    v-bind:field="field" \
                    v-bind:key="field.id" \
                    v-bind:id="field.id" \
                    v-bind:status="field.status" \
                    v-bind:label="field.label">\
                </text-input>\
                <router-link :to="nextpage" tag="button" class="button large">next</router-link>\
               </section>'
  });

  const errorSummary = Vue.component( 'error-summary', {
    data: function() {
      return {
        links: [
          {
            title: "Worng thing one"
          },
          {
            title: "Wrong thing two"
          },
          {
            title: "Wrong thing three"
          }
        ]
      }
    },
    template: '<div class="error-summary">\
          <div class="headline">Something bad has happened.</div>\
          <ul>\
            <li v-for="link in links">\
              <a href="#">{% raw %}{{ link.title }}{% endraw %}</a>\
            </li>\
          </ul>\
        </div>'
  });
  
  const routes = [
    { path: '/test', component: errorSummary },
    { path: '/testInput', component: textInput },
    { path: '/page1', component: page, props: { title: 'Page 2', nextpage: 'page2' } },
    { path: '/page2', component: page, props: { title: 'Page 2', nextpage: 'page3' } },
    { path: '/page3', component: page, props: { title: 'Page 3', nextpage: 'page3' } }
  ];

  const router = new VueRouter({
    routes 
  });

  var app = new Vue({
    router,
    el: '#app',
    data: {
      stops : [
        {
          id : 0,
          url : '#part0',
          title : "Välj insats",
          status  : 'default',
          seen : false,
          pageType: "main"
        },
        {
          id : 1,
          url : '#part1',
          title : "Om ansökan",
          status  : 'default',
          seen : false,
          pageType: "main"
        },
        {
          id : 2,
          url : '#part2',
          title : "Frågor grupp",
          status  : 'default',
          seen : false,
          pageType: "sub"
        },
        {
          id : 3,
          url : '#part3',
          title : "Frågor grupp",
          status  : 'default',
          seen : false,
          pageType: "sub"
        },
        {
          id : 4,
          url : '#part4',
          title : "Frågor grupp",
          status  : 'default',
          seen : false,
          pageType: "sub"
        },
        {
          id : 5,
          url : '#part5',
          title : "Utgifter och finansiering",
          status  : 'default',
          seen : false,
          pageType: "main"
        },
        {
          id : 6,
          url : '#part6',
          title : "Utgifter och finansiering",
          status  : 'default',
          seen : false,
          pageType: "main"
        },
        {
          id : 7,
          url : '#part7',
          title : "Lägg till poster",
          status  : 'default',
          seen : false,
          pageType: "sub"
        },
        {
          id : 8,
          url : '#part8',
          title : "Bilagor",
          status  : 'default',
          seen : false,
          pageType: "main"
        },
        {
          id : 9,
          url : '#part9',
          title : "Granska och skicka in",
          status  : 'default',
          seen : false,
          pageType: "main"
        }
      ],
      fields : [
        {
          label : "Test 1 Label",
          id : "0-0",
          status : "idle"
        },
        {
          label : "Test 2 Label",
          id : "0-1",
          status : "idle"
        },
        {
          label : "Test 3 Label",
          id : "0-2",
          status : "error"
        }
      ]
    }
  }).$mount( '#app' );
</script>