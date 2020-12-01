---
layout: layouts/default.njk
pageTitle: ALF | Progress Bar Status - Take 2
eleventyNavigation:
  key: progress-bar-status-take-2
  title: ALF - Progress Bar Status - Take 2
  parent: examples
---
<div id="wrapper">
<div id="app" class="alf-progress-bar-take-2">
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
            <div class="title" v-if="isTitleTruncated">{% raw %}{{ title | truncate(30, '...')}}{% endraw %}<button class="button clear small" @click="hideShowTitle">Visa mer</button></div>
            <div class="title" v-else>{% raw %}{{ title }}{% endraw %} <button class="button clear small" @click="hideShowTitle">Visa mindre</button></div>
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
          <ul class="progressbar left">
            <li v-for="( stop, index ) in stops">
              <a :href="stop.url" :class="[stop.pageType, stop.status]" ><span>{% raw %}{{ index }}. {{ stop.title }}</span>{% endraw %}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="cell small-8 small-offset-1">
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

<script src="{{ '/js/vue.js' | url }}"></script>
<script src="{{ '/js/vue-alf-progress-bar-status-sample-take-2.js' | url }}"></script>
