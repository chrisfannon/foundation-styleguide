---
layout: layouts/basen.njk
pageTitle: Basen | Toolbar tools - Take 4
eleventyNavigation:
  key: toolbar-tools-take-4
  title: Basen - Toolbar Tools - Take 4
  parent: examples
---
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
  <div class="grid-x" style="height: 100%; align-items: flex-start;">
    <div class="toolbar" style="flex: 0 0 auto;">
      <div class="menu-toggle">
        <button class="button dark clear tool" data-toggle="offCanvasMenu" :class="{ active : isMenuToggled }" @click="toggleMenu( $event )">
          <span>
            <svg aria-hidden="true"
                 focusable="false">
              <use xlink:href="#svg--bars-solid" />
            </svg>
          </span>
        </button>
      </div>
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
        <toolbar-tool v-for="(control, index) in selectControls" :icons="icons" :selected-item="control.name" :my-is-editor="isEditor" :key="index" @toggleMenu="toggleMenu"></toolbar-tool>
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
    <div class="cell small-12" style="flex: 2 0 auto; height: 100%">
      <div class="off-canvas-wrapper" style="height: 100%">
        <div class="off-canvas-absolute position-left" id="offCanvasMenu" data-off-canvas style="height: 100%">
          <div class="panel menu-panel">
            <h3 class="h4">Meny</h3>
            <div class="panel__content">
              <h4 class="h6">
                <svg class="svg-icon" aria-hidden="true" role="img" focusable="false">
                  <use xlink:href="#svg--search-solid" />
                </svg>Sök
              </h4>
              <ul class="options-menu">
                <li><a href="#" data-toggle="offCanvasSearch offCanvasMenu" @click="toggleMenu( $event )">Sök block</a></li>
                <li><a href="#">Sök block per kund</a></li>
              </ul>
              <h4 class="h6">
                <svg class="svg-icon" aria-hidden="true" role="img" focusable="false">
                  <use xlink:href="#svg--tasks-solid" />
                </svg>Uppdrag
              </h4>
              <ul class="options-menu">
                <li><a href="">Mina uppdrag</a></li>
                <li><a href="">Adminstrera uppdrag</a></li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Off Canvas - Right Side - Layer List -->
        <div class="off-canvas-absolute position-right" id="offCanvasLayers" data-off-canvas style="height: 100%">
          <div class="panel">
            <h3 class="h4">Lager</h3>
            <div class="panel__content">
              <div class="layers">
                <div class="layers__profile">
                  <!-- .field-object -->
                  <div class="field__object small">
                    <div class="field__header">
                      <label for="profile">
                        <span>Profil</span>
                        <button class="button clear small">Spara</button>
                        <button class="button clear small" data-toggle="profil-contextual-menu">
                          <svg class="svg-icon" aria-hidden="true" role="img" focusable="false">
                            <use xlink:href="#svg--ellipsis-v-solid" />
                          </svg>
                        </button>
                      </label>
                      <!-- .contextual-menu-dropdown -->
                      <div class="dropdown-pane" id="profil-contextual-menu" class="large" data-dropdown data-auto-focus="true" data-position="bottom" data-alignment="right">
                        <ul class="options-menu">
                          <li><a href="">Spara som...</a></li>
                          <li><a href="">Ta bort</a></li>
                          <li><a href="">Duplicera</a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="field__wrapper">
                      <select id="profile">
                        <option value="standard">Standard</option>
                        <option value="myprofile">My New Profile</option>
                      </select>
                    </div>
                  </div>
                  <!-- /.field-object -->
                </div>
                <div class="layers__add-remove"></div>
                <div class="layers__change-style"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- Off Canvas - Left Side - Search Panel -->
        <div class="off-canvas-absolute position-left off-canvas-search" id="offCanvasSearch" data-off-canvas style="height: 100%">
          <div class="panel search-panel">
            <h3 class="h4">Advancerad Sök</h3>
            <div class="panel__content">
            </div>
          </div>
        </div>
      <!--<div class="off-canvas-content" data-off-canvas-content>-->
        <h2>Basen - Menu Mockup</h2>
        <br/>
        <button type="button" class="button clear" data-toggle="offCanvas">Interface Settings</button>
      <!--</div>-->
      </div>
    </div>
  </div>
</div>
  

<script src="{{ '/js/vue.js' | url }}"></script>
<script src="{{ '/js/vue-toolbar-take-3.js' | url }}"></script>