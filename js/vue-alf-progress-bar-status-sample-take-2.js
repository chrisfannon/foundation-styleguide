const textInput = Vue.component( 'text-input' , {
  props: [ 'label', 'id', 'status' ],
  data: function() {
    return {
    }
  },
  template: '<div>\
              <label :for="id">{{ label }}</label>\
              <input type="text" :id="id" :class="status" />\
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
              <h1>{{ title }}</h1>\
              <p>Answer the following questions on this page</p>\
              <text-input \
                  v-for="field in fields" \
                  v-bind:field="field" \
                  v-bind:key="field.id" \
                  v-bind:id="field.id" \
                  v-bind:status="field.status" \
                  v-bind:label="field.label">\
              </text-input>\
              <button class="button large">next</button>\
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

var filter = function(text, length, clamp){
    clamp = clamp || '...';
    var node = document.createElement('div');
    node.innerHTML = text;
    var content = node.textContent;
    return content.length > length ? content.slice(0, length) + clamp : content;
};

Vue.filter('truncate', filter);

var app = new Vue({
  el: '#app',
  data: {
    title: 'Hembygdsgård 2.0 - Let\'s make this a wickedly long title with lots of un-hyphenable words like Antidisestablishmentarianism to try and break the layout.',
    isTitleTruncated: true,
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
  },
  methods: {
    hideShowTitle: function( evt ) {
      this.isTitleTruncated = !this.isTitleTruncated;
    }
  }
})