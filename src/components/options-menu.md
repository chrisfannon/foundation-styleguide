---
layout: layouts/leftnav.njk
pageTitle: Options Menu
eleventyNavigation:
  key: options-menu
  parent: components
  title: Options Menu
  order: 1
---

# Options Menu / Objektlista

<div class="lead">A non-navigation list of options.</div>

These lists are most often used with [Dropdown](../dropdown) components for overflow menus or options lists that change the functionality of a selected item. They do not remember their state and should not be substituted for [Menu](../menu) components. Menu components are designed to be navigation. 

<div class="visual-example light">
  <ul class="options-menu">
    <li><button>Options Menu Item</button>
  </ul>
</div>

``` html
<ul class="options-menu">
  <li><button>Options Menu Item</button></li>
</ul>
```
## Design

Because the component was intended to be used mostly in a [Dropdown](../dropdown ) component, the design was based around a white background. They can be used on the light gray global background, but their background colors will not pass accessibility tests.

## Options

Small
<div class="visual-example light">
  <ul class="options-menu small">
    <li><button>Options Menu Item - Small</button></li>
  </ul>
</div>


``` html
<ul class="options-menu small">
  <li><button>Options Menu Item - Small</button></li>
</ul>
```


## Examples

Overflow Menu - Small
<div class="visual-example">
  <button class="button clear small" data-toggle="profil-contextual-menu" style="margin-bottom: 0;">
    <svg class="svg-icon" aria-hidden="true" role="img" focusable="false" style="position: relative; top: 1px">
      <use xlink:href="#svg--ellipsis-v-solid" />
    </svg>
  </button>
  <!-- .contextual-menu-dropdown -->
  <div class="dropdown-pane" id="profil-contextual-menu" class="large" data-dropdown data-auto-focus="true" data-position="bottom" data-alignment="left" data-v-offset="-1">
    <ul class="options-menu small">
      <li><button>Spara</button></li>
      <li><button>Spara som...</button></li>
      <li><button>Ta bort</button></li>
      <li><button>Duplicera</button></li>
    </ul>
  </div>
</div>

``` html
<button class="button clear small" data-toggle="profil-contextual-menu" style="margin-bottom: 0;">
  <svg class="svg-icon" aria-hidden="true" role="img" focusable="false" style="position: relative; top: 1px">
    <use xlink:href="#svg--ellipsis-v-solid" />
  </svg>
</button>
<!-- .contextual-menu-dropdown -->
<div class="dropdown-pane" id="profil-contextual-menu" class="large" data-dropdown data-auto-focus="true" data-position="bottom" data-alignment="left" data-v-offset="-1">
  <ul class="options-menu small">
    <li><button>Spara</button></li>
    <li><button>Spara som...</button></li>
    <li><button>Ta bort</button></li>
    <li><button>Duplicera</button></li>
  </ul>
</div>
```