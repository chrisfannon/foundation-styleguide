---
pageTitle: Off Canvas
eleventyNavigation:
  key: off-canvas
  parent: components
  title: Off Canvas
  order: 3
---

# Off Canvas

<div class="off-canvas-wrapper">
  <div class="off-canvas-absolute position-left" id="offCanvas" data-off-canvas>
    <button class="close-button" aria-label="Close menu" type="button" data-close>
      <span aria-hidden="true">&times;</span>
    </button>
    <ul class="vertical menu">
      <li><a href="#">Foundation</a></li>
      <li><a href="#">Dot</a></li>
      <li><a href="#">ZURB</a></li>
      <li><a href="#">Com</a></li>
      <li><a href="#">Slash</a></li>
      <li><a href="#">Sites</a></li>
    </ul>
  </div>
  <div class="off-canvas-content" data-off-canvas-content>
    <p> Your page content lives here </p>
    <button type="button" class="button" data-toggle="offCanvas">Open Menu</button>
  </div>
</div>