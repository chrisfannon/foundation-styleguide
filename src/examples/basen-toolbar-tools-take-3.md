---
layout: layouts/default.njk
pageTitle: Basen | Toolbar tools - Take 3
eleventyNavigation:
  key: toolbar-tools-take-3
  title: Basen - Toolbar Tools - Take 3
  parent: examples
---

## Basen | Toolbar Tools

<div id="root" class="take-3">
  <div class="off-canvas-absolute position-right" id="offCanvas" data-off-canvas>
    <div class="grid-container">
      <div class="grid-x grid-padding-x grid-padding-y">
        <div class="cell">
          <fieldset>
            <legend>Typ av användare</legend>
            <input type="radio" id="read" value="false" v-model="isEditor">
            <label for="read">Läsbehörigheter</label>
            <br>
            <input type="radio" id="edit" value="true" v-model="isEditor">
            <label for="edit">Redigering behörigheter</label>
          </fieldset>
          <fieldset>
          <legend>Välj ikoner för varje verktyg</legend>
          <select-list v-for="(control, index) in selectControls" :name="control.name" :alternatives="icons" :myid="index" :key="control.name" @option-changed="selectNewControl"></select-list>
          </fieldset>
        </div>
      </div>
    </div>
  </div>
  <div class="off-canvas-content" data-off-canvas-content>
    
  </div>
  <div class="grid-x grid-padding-x grid-padding-y">
    <div class="toolbar">
      <div class="search">
        <div class="search--inner">
          <input type="text" />
          <button class="button">
            <svg class="svg-icon" aria-hidden="true" focusable="false">
              <use xlink:href="#svg--search-solid" />
            </svg>
            <span class="visually-hidden">Search</span>
          </button>
        </div>
      </div>
      <div class="edits" v-show="isEditor == 'true'">
        <button class="button dark small clear" :class="{ active : dropdowns[0].isActive }" @click="dropdownTriggered( $event, this.id )" :id="dropdowns[0].id" data-toggle="example-dropdown">
          <svg class="svg-icon"
               :class="{ active : dropdown.isActive }"
               aria-hidden="true"
               focusable="false">
            <use xlink:href="#svg--caret-right-solid" />
          </svg> Pågående redigeringar</button>
        <div class="dropdown-pane" id="example-dropdown" data-dropdown data-auto-focus="true" data-v-offset="13">
          <ul class="edit-layers">
            <li>
              <span class="edit-row">
                <div class="icon"></div>
                <div class="block">Objekt</div>
                <div class="status">Status</div>
              </span>
            </li>
            <li>
              <a href="#" class="edit-row">
                <span class="icon"><i class="fas fa-check-circle"></i></span>
                <span class="block">5564</span>
                <span class="status">klar</span>
              </a>
            </li>
            <li>
              <a href="#" class="edit-row">
                <span class="icon">
                  <svg class="svg-icon error" aria-hidden="true" focusable="false">
                    <use xlink:href="#svg--times-hexagon-solid" />
                  </svg>
                  <span class="visually-hidden">There's an error in this block.</span>
                </span>
                <span class="block">1245</span>
                <span class="status">-</span>
              </a>
            </li>
            <li>
              <a href="#" class="edit-row">
                <span class="icon"><i class="fas fa-check-circle"></i></span>
                <span class="block">8896</span>
                <span class="status">klar</span>
              </a>
            </li>
          </ul>
          <div class="control-panel">
            <button class="button primary small">Publicera alla</button>
            <button class="button clear small">Radera alla</button>
          </div>
        </div>
        <button class="button hollow small">Spara</button>
      </div>
      <div class="tools">
        <toolbar-tool v-for="(control, index) in selectControls" :icons="icons" :selected-item="control.name" :my-is-editor="isEditor"></toolbar-tool>
      </div>
      <div class="creationMenu">
        <div class="dropdown-pane small" id="creation-dropdown" data-dropdown data-auto-focus="true" data-v-offset="4">
          <ul class="edit-layers">
            <li>
              <a href="#" class="edit-row" data-toggle="creation-dropdown">Block</a>
            </li>
            <li>
              <a href="#" class="edit-row" data-toggle="creation-dropdown">Dike</a>
            </li>
            <li>
              <a href="#" class="edit-row" data-toggle="creation-dropdown">Småvatten</a>
            </li>
            <li>
              <a href="#" class="edit-row" data-toggle="creation-dropdown">Solitärträd</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <br/>
  <button type="button" class="button clear" data-toggle="offCanvas">Interface Settings</button>
</div>

<script src="{{ '/js/vue.js' | url }}"></script>
<script src="{{ '/js/vue-toolbar-take-3.js' | url }}"></script>