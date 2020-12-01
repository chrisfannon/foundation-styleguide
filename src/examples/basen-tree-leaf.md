---
layout: layouts/default.njk
pageTitle: Basen | Tree Leaf
eleventyNavigation:
  key: toolbar-tree-leaf
  title: Basen - Tree Leaf
  parent: examples
---

## Basen | Tree Leaf

<div class="tree">
  <div class="tree-leaf">
    <div class="leaf-info">
      <div class="leaf-name">123-565-6661 - 1,18 ha</div>
      <div class="leaf-meta">Bete, Gård/Miljö</div>
    </div>
    <div class="leaf-controls">
      <button class="button clear small" data-toggle="creation-dropdown">
        <svg class="svg-icon">
            <use xlink:href="#svg--plus-solid-w-dropdown" />
          </svg>
      </button>
    </div>
    <div class="dropdown-pane small" id="creation-dropdown" data-dropdown data-auto-focus="true">
      <!-- <ul class="edit-layers"> -->
      <ul class="edit-layers">
        <li>
          <a href="#" class="edit-row" data-toggle="creation-dropdown">Blockavvikelseyta</a>
        </li>
        <li>
          <a href="#" class="edit-row" data-toggle="creation-dropdown">Markklass</a>
        </li>
      </ul>
    </div>
  </div>
  
  <div class="tree-leaf">
    <div class="leaf-info">
      <div class="leaf-name">Blockavvikelseyta 1 - 0,11 ha</div>
      <div class="leaf-meta">Pro rata</div>
    </div>
    <div class="leaf-controls">
      <button class="button clear small">
        <svg class="svg-icon">
            <use xlink:href="#svg--trash-alt-solid" />
          </svg>
      </button>
      <button class="button clear small" data-toggle="creation-dropdown-1">
        <svg class="svg-icon">
            <use xlink:href="#svg--plus-solid-w-dropdown" />
          </svg>
      </button>
    </div>
    <div class="dropdown-pane small" id="creation-dropdown-1" data-dropdown data-auto-focus="true">
      <ul class="edit-layers">
        <li>
          <a href="#" class="edit-row" data-toggle="creation-dropdown-1">Blockavvikelseyta</a>
        </li>
        <li>
          <a href="#" class="edit-row" data-toggle="creation-dropdown-1">Markklass</a>
        </li>
      </ul>
    </div>
  </div>
</div>