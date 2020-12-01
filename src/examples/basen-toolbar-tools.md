---
layout: layouts/default.njk
pageTitle: Basen | Toolbar tools
eleventyNavigation:
  key: toolbar-tools
  title: Basen - Toolbar Tools
  parent: examples
---

## Basen | Toolbar Tools

<div id="root" class="off-canvas-wrapper">
  <div class="off-canvas position-bottom" id="offCanvas" data-off-canvas>
  </div>
  <div class="off-canvas-content" data-off-canvas-content>
    <div class="grid-x grid-padding-x grid-padding-y">
      <div class="toolbar">
        <toolbar-tool :selected-item="tool1Option"></toolbar-tool>
        <toolbar-tool selectedItem="drill4"></toolbar-tool>
        <toolbar-tool selectedItem="drill5"></toolbar-tool>
        <toolbar-tool selectedItem="drill6"></toolbar-tool>
      </div>
    </div>
  </div>
  <button type="button" class="button" data-toggle="offCanvas">Open Menu</button>
  <select @change="changedName" v-model="tool1Option">
    <option v-for="toolName in toolNames" :value="toolName">{% raw %}{{ toolName }}{% endraw %}</option>
  </select>
  {% raw %}{{tool1Option}}{% endraw %}
</div>

<script src="{{ '/js/vue.js' | url }}"></script>
<script src="{{ '/js/vue-toolbar.js' | url }}"></script>