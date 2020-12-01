---
layout: layouts/leftnav.njk
pageTitle: Buttons
eleventyNavigation:
  key: button
  title: Button
  parent: components
  order: 0
---

# Button

<p class="lead">Buttons are clickable elements that are used to trigger actions.</p> 

<p>They communicate calls to action to the user and allow users to interact with pages in a variety of ways. Button labels express what action will occur when the user interacts with it.</p>

### When to use
<p>Use buttons to communicate actions users can take and to allow users to interact with the page. Each page should have one primary button, and any remaining calls to action should be represented as lower emphasis buttons.</p>

### When not to use
<p>Do not use buttons as navigational elements. Instead, use links when the desired action is to take the user to a new page.</p>
<small>Text lifted from: <a href="https://www.carbondesignsystem.com/components/button/usage">https://www.carbondesignsystem.com/components/button/usage</a></small>

## Primary
The most important actions on the page. There should usually be only one of these on a page. It's the one action that you want 80% of your users to take
<div class="visual-example">
  <button class="button small">Small</button>
  <button class="button">Medium</button>
  <button class="button large">Large</button>
</div>

<div class="visual-example">
  <button class="button small" disabled="disabled">Small</button>
  <button class="button" disabled="disabled">Medium</button>
  <button class="button large" disabled="disabled">Large</button>
</div>

``` html 
<button class="button small">Label</button>
<button class="button">Knapp</button>
<button class="button large">Something else</button>
```

## Secondary
Den sekundära knappen är den vanligaste knappen och du kan använda flera sekundära knappar på en sida.  
<div class="visual-example">
  <button class="button hollow small">Small</button>
  <button class="button hollow">Medium</button>
  <button class="button hollow large">Large</button>
</div>

<div class="visual-example">
  <button class="button hollow small" disabled="disabled">Small</button>
  <button class="button hollow" disabled="disabled">Medium</button>
  <button class="button hollow large" disabled="disabled">Large</button>
</div>

``` html
<button class="button hollow small">Small</button>
<button class="button hollow">Medium</button>
<button class="button hollow large">Large</button>
```

## Secondary with Icon 
<div class="visual-example">
  <button class="button hollow small"><span aria-hidden="true"><i class="fas fa-times"></i></span>Small</button>
  <button class="button hollow"><span aria-hidden="true"><i class="fas fa-times"></i></span>Medium</button>
  <button class="button hollow large"><span aria-hidden="true"><i class="fas fa-times"></i></span>Large</button>
</div>

<div class="visual-example">
  <button class="button hollow small" disabled="disabled"><span aria-hidden="true"><i class="fas fa-times"></i></span>Small</button>
  <button class="button hollow" disabled="disabled"><span aria-hidden="true"><i class="fas fa-times"></i></span>Medium</button>
  <button class="button hollow large" disabled="disabled"><span aria-hidden="true"><i class="fas fa-times"></i></span>Large</button>
</div>

``` html
<button class="button hollow small"><span aria-hidden="true"><i class="fas fa-times"></i></span>Small</button>
<button class="button hollow"><span aria-hidden="true"><i class="fas fa-times"></i></span>Medium</button>
<button class="button hollow large"><span aria-hidden="true"><i class="fas fa-times"></i></span>Large</button>
```

## Text Button
<div class="visual-example">
  <button class="button clear small">Small</button>
  <button class="button clear">Medium</button>
  <button class="button clear large">Large</button>
</div>
<div class="visual-example">
  <button class="button clear small" disabled="disabled">Small</button>
  <button class="button clear" disabled="disabled">Medium</button>
  <button class="button clear large" disabled="disabled">Large</button>
</div>
<div class="visual-example visual-example--dark">
  <button class="button clear small dark">Small</button>
  <button class="button clear dark">Medium</button>
  <button class="button clear large dark">Large</button>
</div>
<div class="visual-example visual-example--dark">
  <button class="button clear small dark" disabled="disabled">Small</button>
  <button class="button clear dark" disabled="disabled">Medium</button>
  <button class="button clear large dark" disabled="disabled">Large</button>
</div>

``` html
<button class="button clear small">Small</button>
<button class="button clear">Medium</button>
<button class="button clear large">Large</button>
```

``` html
<button class="button clear small dark">Small</button>
<button class="button clear dark">Medium</button>
<button class="button clear large dark">Large</button>
```

## Text Button with Icon
<div class="visual-example">
  <button class="button clear small"><span aria-hidden="true"><i class="fas fa-times"></i></span>Small</button>
  <button class="button clear"><span aria-hidden="true"><i class="fas fa-times"></i></span>Medium</button>
  <button class="button clear large"><span aria-hidden="true"><i class="fas fa-times"></i></span>Large</button>
</div>
<div class="visual-example">
  <button class="button clear small" disabled="disabled"><span aria-hidden="true"><i class="fas fa-times"></i></span>Small</button>
  <button class="button clear" disabled="disabled"><span aria-hidden="true"><i class="fas fa-times"></i></span>Medium</button>
  <button class="button clear large" disabled="disabled"><span aria-hidden="true"><i class="fas fa-times"></i></span>Large</button>
</div>
<div class="visual-example visual-example--dark">
  <button class="button clear small dark"><span aria-hidden="true"><i class="fas fa-times"></i></span>Small</button>
  <button class="button clear dark"><span aria-hidden="true"><i class="fas fa-times"></i></span>Medium</button>
  <button class="button clear large dark"><span aria-hidden="true"><i class="fas fa-times"></i></span>Large</button>
</div>
<div class="visual-example visual-example--dark">
  <button class="button clear small dark" disabled="disabled"><span aria-hidden="true"><i class="fas fa-times"></i></span>Small</button>
  <button class="button clear dark" disabled="disabled"><span aria-hidden="true"><i class="fas fa-times"></i></span>Medium</button>
  <button class="button clear large dark" disabled="disabled"><span aria-hidden="true"><i class="fas fa-times"></i></span>Large</button>
</div>

``` html
<button class="button clear small"><span aria-hidden="true"><i class="fas fa-times"></i></span>Small</button>
<button class="button clear"><span aria-hidden="true"><i class="fas fa-times"></i></span>Medium</button>
<button class="button clear large"><span aria-hidden="true"><i class="fas fa-times"></i></span>Large</button>
```

``` html
<button class="button clear small dark"><span aria-hidden="true"><i class="fas fa-times"></i></span>Small</button>
<button class="button clear dark"><span aria-hidden="true"><i class="fas fa-times"></i></span>Medium</button>
<button class="button clear large dark"><span aria-hidden="true"><i class="fas fa-times"></i></span>Large</button>
```