---
layout: layouts/leftnav.njk
pageTitle: Menu
eleventyNavigation:
  key: menu
  title: Menu
  parent: components
  order: 5
---

# Menu

<div class="lead">Menus are used for navigation throughout the site.</div>

Their layout can be either horizontal or vertical. In general, we use horizontal menus for global navigation or menus with a limited number of items. Whereas a vertical menu is used for local navigation within a section or when we need a navigation with an indeterminate number of items.

## Horizontal

This implementation is [Foundation](https://get.foundation/index.html)-specific and takes advantage of Foundation's [XY Grid](https://get.foundation/sites/docs/xy-grid.html) and [menu](https://get.foundation/sites/docs/menu.html) components. Use what works best for your system.

<nav class="global">
  <div class="grid-container fluid">
    <ul class="menu">
      {%- for item in menu -%}
      <li>
        <a href="{{ item.url }}" {% if item.selected %}class="active" {% endif %}>{{ item.title }}</a>
      </li>
      {%- endfor -%}
    </ul>
  </div>
</nav>

``` html
<nav class="global">
  <div class="grid-container fluid">
    <ul class="menu">
      {%- for item in menu -%}
      <li>
        <a href="{{ item.url }}" {% if item.selected %}class="active" {% endif %}>{{ item.title }}</a>
      </li>
      {%- endfor -%}
    </ul>
  </div>
</nav>
```

## Vertical 

This implementation takes advantage of styling pre-built into [Foundation's menu component](https://get.foundation/sites/docs/menu.html). Use whatever markup works for your system. 

<nav class="local">
  <ol class="vertical menu">
    {%- for item in menu -%}
    <li>
      <a href="{{ item.url }}" {% if item.selected %}class="active" {% endif %}>{{ item.title }}</a>
    </li>
    {%- endfor -%}
  </ol>
</nav>

``` html
<nav class="local">
  <ol class="vertical menu">
    {%- for item in menu -%}
    <li>
      <a href="{{ item.url }}" {% if item.selected %}class="active" {% endif %}>{{ item.title }}</a>
    </li>
    {%- endfor -%}
  </ol>
</nav>
```