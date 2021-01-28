var fieldObject = Vue.component( 'field-object', {
  props: {
    myField: { type: Object }
  },
  data: function() {
    return {
      hideHelpText: ''
    }
  },
  template: `
    <div class="field__object" :class="[ myField.size == 'small' ? 'small' : '' ]">
      <div class="field__header" :class="{ 'error' : myField.showHelpError }">
        <label for=""><span>{{ myField.labelText }}</span> <span v-show="myField.isRequired == true" class="label__required">*</span></label>
        <button type="button" v-show="myField.helpTextMode == 'interactive'" class="help__toggle button clear small" @click="toggleHelpText">
          <svg class="svg-icon" aria-hidden="true" focusable="false">
            <use xlink:href="#svg--question-circle-solid" />View Help Text
          </svg>
        </button>
      </div>
      <div class="field__help">
        <div v-if="myField.helpTextMode == 'interactive' || myField.helpTextMode == 'static'" class="help__text" :class="{ 'hide' : hideHelpText }">
          <p>{{ myField.helpText}}</p>
          <button type="button" 
                  v-show="myField.helpTextMode == 'interactive'" class="button clear" 
                  :class="{ 'small' : myField.size }" 
                  @click="toggleHelpText">Close</button>
        </div>
        <div v-show="myField.showHelpError == true" class="help__error">
          <svg class="svg-icon" aria-hidden="true" focusable="false">
            <use xlink:href="#svg--times-hexagon-solid" />
          </svg>
          <p>{{ myField.errorText }}</p>
        </div>
        <p v-show="myField.showHelpFormat == true" class="help__format">{{ myField.formatText }}</p>
      </div>
      <div class="field__wrapper">
        <input type="text" id="" :class="{ 'error' : myField.showHelpError }" />
      </div>
    </div>
  `,
  methods: {
    toggleHelpText: function( evt ) {
      this.hideHelpText = !this.hideHelpText;
      evt.preventDefault;
      return false;
    }
  }
})

var fieldControl = Vue.component( 'field-control', {
  props: [ 'field', 'id' ],
  model: {
    prop: 'field',
    event: 'change'
  },
  template: `
    <div class="form-controls">
      <fieldset>
        <legend>Size</legend>
        <input type="radio" name="sizeGroup" id="size-medium" value="medium" v-model="field.size"><label for="size-medium">Medium</label>
        <input type="radio" name="sizeGroup" id="size-small" value="small" v-model="field.size"><label for="size-small">Small</label>
      </fieldset>
      <label :for="'fieldLabel-' + field.index">Field Label</label>
      <input type="text" :id="'fieldLabel-' + field.index" :value="field.labelText" @input="updateValue( 'labelText', $event.target.value )" />
      <label :for="'helpText-' + field.index">Help text</label>
      <textarea :id="'helpText-' + field.index" :value="field.helpText" @input="updateValue( 'helpText', $event.target.value )"></textarea>
      <label :for="'errorText-' + field.index">Error Text</label>
      <input type="text" :value="field.errorText" :id="'errorText-' + field.index" />
      <label :for="'formatText-' + field.index">Format Text</label>
      <input type="text" :value="field.formatText" :id="'formatText-' + field.index" @input="updateValue( 'formatText', $event.target.value )" />
      <input type="checkbox" :id="'isRequired-' + field.index" v-model="field.isRequired" @input="updateValue( 'isRequired', $event.target.checked )" /><label :for="'isRequired-' + field.index">Is Required</label>
      <label :for="'helpTextMode-' + field.index">Help Text Mode</label>
      <select :id="'helpTextMode-' + field.index" v-model="field.helpTextMode" @input="updateValue( 'helpTextMode', $event.target.value )">
        <option value="none">None</option>
        <option value="static">Static</option>
        <option value="interactive">Interactive</option>
      </select>
      <input type="checkbox" :id="'showHelpError-' + this.id" v-model="field.showHelpError" @input="updateValue( 'showHelpError', $event.target.checked )" /><label :for="'showHelpError-' + this.id">Show Error</label>
      <input type="checkbox" :id="'showFormat-' + field.index" v-model="field.showHelpFormat" @input="updateValue( 'showFormat', $event.target.checked )" /><label :for="'showFormat-' + field.index">Show Format</label>
    </div>
  `,
  methods:{
    updateValue( key, value ) {
      console.log( "updateValue", key, value );
      this.$emit( "change", { ...this.field, [key]: value } );
    } 
  }
})

var app = new Vue({
  el: '#forms',
  data : {
    fields : [
      {
        labelText: "My Label Text One",
        helpText: "Help text to label text one",
        errorText: "You did something wrong on field one",
        formatText: "This is my format text for field one",
        isRequired: true,
        size: "small",
        helpTextMode: "static",
        showHelpError: false,
        showHelpFormat: true
      }
    ]
  },
  methods: {
    selectNewControl: function( selected, id ) {
      console.log( "Detected a custom event ", selected, id );
      this.selectControls[ id ].name = selected;
    },
    dropdownTriggered: function( evt, id ) {
      console.log( "Dropdown triggered", id );
      this.dropdown.isActive = ( this.dropdown.isActive ) ? false : true;
    },
    onInputChanged: function( ) {
      console.log( "working from main timeline")
    }
  }
})