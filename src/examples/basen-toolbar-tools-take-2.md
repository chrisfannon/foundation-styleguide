---
layout: layouts/default.njk
pageTitle: Basen | Toolbar tools - Take 2
eleventyNavigation:
  key: toolbar-tools
  title: Basen - Toolbar Tools - Take 2
  parent: examples
---

## Basen | Toolbar Tools

<div id="root">
  <div class="off-canvas-absolute position-right" id="offCanvas" data-off-canvas>
    <div class="grid-container">
      <div class="grid-x grid-padding-x grid-padding-y">
        <div class="cell">
          <select-list v-for="(control, index) in selectControls" :name="control.name" :alternatives="icons" :myid="index" :key="control.name" @option-changed="selectNewControl"></select-list>
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
      <div class="edits">
        <button class="button dark small clear" :class="{ active : dropdown.isActive }" @click="dropdownTriggered" data-toggle="example-dropdown">
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
        <toolbar-tool v-for="(control, index) in selectControls" :icons="icons" :selected-item="control.name"></toolbar-tool>
      </div>
    </div>
  </div>
  <br/>
  <button type="button" class="button" data-toggle="offCanvas">Toggle Tool Icons</button>
</div>

<script src="{{ '/js/vue.js' | url }}"></script>
<script src="{{ '/js/vue-toolbar-take-2.js' | url }}"></script>