---
layout: layouts/leftnav.njk
pageTitle: This is colors.
navTitle: Colors
tags: menu
eleventyNavigation:
  key: colors
  title: Colors
  parent: styleguide
---

# This is the color page.

<div class="grid-container">
  <div class="grid-x grid-margin-x grid-margin-y small-up-2 medium-up-4 large-up-6">
    {%- for color in colors -%}
      <div class="cell">
        {% include 'colorcard.njk' %}
      </div>
    {%- endfor -%}
  </div>
</div>

This is after the colors.
