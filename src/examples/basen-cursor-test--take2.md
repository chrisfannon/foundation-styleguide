---
layout: layouts/leftnav.njk
pageTitle: Basen | Cursor Test | Take 2
eleventyNavigation:
  key: cursor-test-2
  title: Basen - Cursor Test - Take 2
  parent: examples
---

<style>
.wrapper {
  display: grid;
  grid-template-rows: repeat( 4, 25fr );
  height: 100%;
}
.bg {
  background-color: #333;
}
.box {
  cursor: url("http://localhost:8080/img/slice--v2.png"), auto;
  /*cursor: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/heart.png"), auto;*/
}
</style>

<div class="wrapper">
  <div class="box">
    <img src="/img/map-satillite.png" />
  </div>
  <div class="box">
    <img src="/img/map-topography.png" />
  </div>
</div>