---
layout: layouts/leftnav.njk
pageTitle: Dropdown
eleventyNavigation:
  key: dropdown
  parent: components
  title: Dropdown
  order: 1
---

# Dropdown

<div class="lead">A component to show hidden content in a small, defined area.</div>

<div class="visual-example">
  <button class="button" type="button" data-toggle="example-dropdown">Toggle Default Dropdown</button>
  <div class="dropdown-pane" id="example-dropdown" data-dropdown data-auto-focus="true">
    <p>Example content in a dropdown. Example content in a dropdown.</p>
  </div>
</div>

``` html
<button class="button" type="button" data-toggle="example-dropdown">Toggle Default Dropdown</button>
<div class="dropdown-pane" id="example-dropdown" data-dropdown data-auto-focus="true">
  <p>Example content in a dropdown. Example content in a dropdown.</p>
</div>
```
## Options

<table>
  <tr>
    <td>dropdown-pane-small</td>
  </tr><tr>
    <td>dropdown-pane-medium</td>
  </tr><tr>
    <td>dropdown-pane-large</td>
  </tr>
</table>

## Examples
<div class="visual-example">
  <button class="button" type="button" data-toggle="example-dropdown-2">Dropdown with Text (medium / default)</button>
  <div class="dropdown-pane" id="example-dropdown-2" data-dropdown data-auto-focus="true">
    <h3>Jordbruksverkets styleguide</h3>
    <p>Styleguiden innehåller både färdiga komponenter som går att återanvända i flera typer av digitala tjänster samt riktlinjer för språk och grafisk design. Genom att använda styleguiden blir utvecklingen mer kostnadseffektiv och våra digitala tjänster blir mer tillgängliga och enhetliga.</p>
  </div>
</div>

<div class="visual-example">
  <button class="button" type="button" data-toggle="example-dropdown-3">Dropdown with Form (medium / default)</button>
  <div class="dropdown-pane" id="example-dropdown-3" data-dropdown data-auto-focus="true">
    <div class="grid-x">
    <div class="cell">
      <label for="test">My foundation label</label>
      <input type="text" id="test">
    </div>
    <div class="cell">
      <label for="test">My foundation label</label>
      <input type="text" id="test">
    </div>
    <div class="cell">
      <label for="test">My foundation label</label>
      <input type="text" id="test">
    </div>
    <div class="cell">
      <label for="textarea">My foundation textarea</label>
      <textarea id="textarea"></textarea>
    </div>
    <div class="cell">
      <input type="radio" id="radio1" name="radio-group"><label for="radio1">Radio Group option one</label>
      <input type="radio" id="radio2" name="radio-group"><label for="radio2">Radio Group option two</label>
      <input type="radio" id="radio3" name="radio-group"><label for="radio3">Radio Group option three</label>
    </div>
  </div>
  </div>
</div>

<div class="visual-example">
  <button class="button" type="button" data-toggle="example-dropdown-4">Dropdown with images (large)</button>
  <div class="dropdown-pane large" id="example-dropdown-4" data-dropdown data-auto-focus="true">
    <div class="media-object">
      <div class="media-object-section">
        <div class="thumbnail">
          <img src="http://www.picsum.photos/80/160">
        </div>
      </div>
      <div class="media-object-section">
        <h4>Dreams feel real while we're in them.</h4>
        <p>I'm going to improvise. Listen, there's something you should know about me... about inception. An idea is like a virus, resilient, highly contagious. The smallest seed of an idea can grow. It can grow to define or destroy you.</p>
      </div>
    </div>
  </div>
</div>

<div class="visual-example">
  <button class="button" type="button" data-toggle="example-dropdown-6">Dropdown with images (small)</button>
  <div class="dropdown-pane tiny" id="example-dropdown-6" data-dropdown data-auto-focus="true">
    <div class="grid-x grid-margin-y">
    <div class="cell">
      <img src="http://picsum.photos/66?random=1">
    </div>
    <div class="cell">
      <img src="http://picsum.photos/66?random=2">
    </div>
    <div class="cell">
      <img src="http://picsum.photos/66?random=3">
    </div>
    <div class="cell">
      <img src="http://picsum.photos/66?random=4">
    </div>
    <div class="cell">
      <img src="http://picsum.photos/66?random=5">
    </div>
    </div>
  </div>
</div>