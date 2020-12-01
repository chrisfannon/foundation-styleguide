var selectList = Vue.component( 'select-list', {
  props: {
    alternatives : { type: Array },
    name: { type: String },
    myid: { type: Number }
  },
  data: function() {
    return {
      selected: ''
    }
  },
  template: `
    <div>
      <label>{{ name }}</label>
      <select @change="changedName" v-model="selected">
        <option v-for="(alt, index) in alternatives">{{ alt.name }}</option>
      </select>
    </div>
  `,
  methods: {
    changedName: function( evt ) {
      console.log( 'name changed to ', this.selected );
      this.$emit( 'option-changed', this.selected, this.myid );
    }
  },
  mounted: function() {
    this.selected = this.name;
  }
})

var tool = Vue.component( 'toolbar-tool', {
  props: {
    selectedItem: { type: String },
    icons: { type: Array }
  },
  template: `
    <div>
      <button v-for="icon in icons" class="button clear dark tool" :name="icon.name" v-show="selectedItem == icon.name" v-html="icon.svg"></button>
    </div>
  `,
  data: function() {
    return {
      selected: 'false',
    }
  },
  mounted: function() {
    this.selected = this.selectedItem;
  }
})

var app = new Vue({
  el: '#root',
  data : {
    icons: [
      {
        name: 'infoclick1',
        svg: '<svg viewBox="0 0 25 23" version="1.1" xml:space="preserve"><path id="mouse-pointer" d="M12.297,19.563l-1.454,-3.533l-1.623,1.831c-0.247,0.277 -0.6,0.435 -0.97,0.435c-0.714,0 -1.3,-0.587 -1.3,-1.3c0,-0.012 0,-0.023 0,-0.035l0,-13.003c0,-0.011 0,-0.023 0,-0.034c0,-0.713 0.586,-1.3 1.3,-1.3c0.359,0 0.702,0.149 0.948,0.411l8.49,9.1c0.234,0.248 0.364,0.577 0.364,0.918c0,0.723 -0.584,1.322 -1.307,1.34l-2.28,0l1.485,3.613c0.284,0.677 -0.036,1.467 -0.71,1.756l-1.249,0.52c-0.156,0.064 -0.323,0.097 -0.492,0.097c-0.529,0 -1.007,-0.324 -1.202,-0.816Zm-1.1,-5.6l2.131,5.179c0.025,0.076 0.096,0.127 0.176,0.127c0.022,0 0.043,-0.003 0.064,-0.011l1.249,-0.52c0.112,-0.057 0.162,-0.194 0.111,-0.309l-2.12,-5.142l3.936,0c0.113,-0.016 0.199,-0.114 0.199,-0.229c0,-0.06 -0.024,-0.119 -0.067,-0.162l-8.49,-9.1c-0.125,-0.134 -0.326,-0.032 -0.326,0.165l0,13.003c0,0.2 0.206,0.3 0.329,0.161l2.808,-3.162Z" style="fill-rule:nonzero;"/></svg>'
      },
      {
        name: 'infoclick2',
        svg: '<svg viewBox="0 0 25 25" xml:space="preserve"><path d="M12.5,2.563c-6.352,-0.001 -11.5,4.182 -11.5,9.343c0,2.228 0.961,4.268 2.561,5.872c-0.562,2.264 -2.44,4.281 -2.462,4.303c-0.099,0.103 -0.126,0.256 -0.068,0.391c0.059,0.135 0.185,0.215 0.328,0.215c2.979,0 5.211,-1.428 6.316,-2.309c1.469,0.553 3.1,0.872 4.825,0.872c6.352,0 11.5,-4.182 11.5,-9.344c0,-5.161 -5.148,-9.344 -11.5,-9.344Zm0.681,7.793l-2.118,0c-0.209,0 -0.379,0.17 -0.379,0.379l0,0.903c0,0.209 0.17,0.378 0.379,0.378l0.378,0l0,2.733l-0.378,0c-0.209,0 -0.379,0.169 -0.379,0.378l0,0.904c0,0.209 0.17,0.378 0.379,0.378l2.875,0c0.208,0 0.378,-0.169 0.378,-0.378l0,-0.904c0,-0.209 -0.17,-0.378 -0.378,-0.378l-0.379,0l0,-4.014c0,-0.209 -0.169,-0.379 -0.378,-0.379Zm-0.681,-3.631c-0.752,0 -1.362,0.609 -1.362,1.362c0,0.752 0.61,1.361 1.362,1.361c0.752,0 1.362,-0.609 1.362,-1.361c0,-0.753 -0.61,-1.362 -1.362,-1.362Z"/></svg>'
      },
      {
        name: 'drill1',
        svg: '<svg viewBox="0 0 25 21" version="1.1" xml:space="preserve"><path d="M7.254,10.243l-1.284,-3.176c-0.146,-0.355 -0.15,-0.754 -0.012,-1.113c0.291,-0.759 1.148,-1.153 1.915,-0.879l2.394,0.919l-0.105,-4.392c-0.024,-0.826 0.63,-1.527 1.455,-1.558l1.523,-0.044c0.19,-0.004 0.379,0.029 0.556,0.097c0.556,0.213 0.928,0.747 0.934,1.342l0.104,4.295l2.443,-1.265c0.371,-0.191 0.806,-0.215 1.195,-0.066c0.75,0.288 1.13,1.142 0.842,1.892c-0.004,0.011 -0.008,0.022 -0.013,0.033l-1.503,3.915l6.764,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-7.148,0l-0.767,1.998l7.915,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-8.299,0l-0.767,1.998l9.066,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-9.449,0l-1.059,2.757c-0.004,0.011 -0.007,0.021 -0.011,0.032c-0.288,0.75 -1.143,1.13 -1.893,0.842c-0.376,-0.144 -0.677,-0.438 -0.83,-0.81l-1.14,-2.821l-9.58,0c-0.276,0 -0.5,-0.224 -0.5,-0.5c0,-0.276 0.224,-0.5 0.5,-0.5l9.176,0l-0.807,-1.998l-8.369,0c-0.276,0 -0.5,-0.224 -0.5,-0.5c0,-0.276 0.224,-0.5 0.5,-0.5l7.965,0l-0.807,-1.998l-7.158,0c-0.276,0 -0.5,-0.224 -0.5,-0.5c0,-0.276 0.224,-0.5 0.5,-0.5l6.754,0Zm6.277,-2.471l-0.151,-6.303c0.004,-0.09 -0.05,-0.173 -0.134,-0.205c-0.023,-0.009 -0.047,-0.014 -0.071,-0.014l-1.523,0.043c-0.141,0.015 -0.246,0.138 -0.24,0.28l0.15,6.256l-4.137,-1.588c-0.125,-0.029 -0.254,0.04 -0.3,0.16c-0.025,0.064 -0.023,0.135 0.004,0.198l5.25,12.992c0.077,0.191 0.33,0.165 0.409,-0.042l5.247,-13.669c0.081,-0.211 -0.095,-0.399 -0.281,-0.303l-4.223,2.195Z"/></svg>'
      },
      {
        name: 'drill2',
        svg: '<svg viewBox="0 0 25 25" xml:space="preserve"><path d="M9.543,14.041c-2.118,-3.025 -2.578,-3.79 -2.578,-5.506c0,-3.036 2.499,-5.535 5.535,-5.535c3.037,0 5.536,2.499 5.536,5.535c0,1.717 -0.461,2.481 -2.578,5.507l8.542,2.98l-11.5,5.173l-11.5,-5.173l8.543,-2.981Zm0.44,0.629l-6.991,2.439l9.508,4.277l9.508,-4.277l-6.991,-2.439c-0.548,0.782 -1.193,1.7 -1.948,2.795c-0.129,0.186 -0.342,0.298 -0.569,0.298c-0.226,0 -0.439,-0.112 -0.569,-0.298c-0.755,-1.095 -1.399,-2.013 -1.948,-2.795Zm2.517,-3.829c-1.265,0 -2.306,-1.041 -2.306,-2.306c0,-1.265 1.041,-2.306 2.306,-2.306c1.266,0 2.307,1.041 2.307,2.306c0,1.265 -1.041,2.306 -2.307,2.306Z"/></svg>'
      }
    ],
    selectControls: [
      {
        name: "infoclick1"
      },
      {
        name: "drill1"
      }
    ],
    dropdown : {
      isActive : false
    }
  },
  methods: {
    selectNewControl: function( selected, id ) {
      console.log( "Detected a custom event ", selected, id );
      this.selectControls[ id ].name = selected;
    },
    dropdownTriggered: function( evt ) {
      console.log( "Dropdown triggered" );
      this.dropdown.isActive = ( this.dropdown.isActive ) ? false : true;
    }
  }
})