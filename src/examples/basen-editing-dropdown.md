---
layout: layouts/leftnav.njk
pageTitle: Basen | Editing Dropdown
eleventyNavigation:
  key: editing-dropdown
  title: Editing Dropdown
  parent: examples
---

# Editing Dropdown
<p class="lead">Basen</p>

<button class="button" type="button" data-toggle="example-dropdown">Toggle Default Dropdown</button>
<div class="dropdown-pane" id="example-dropdown" data-dropdown data-auto-focus="true">
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
        <span class="icon"><i class="fas fa-exclamation-triangle"></i></span>
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