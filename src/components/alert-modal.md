---
layout: layouts/leftnav.njk
pageTitle: Alert Modal
eleventyNavigation:
  key: alert-modal
  parent: components
  title: Alert Modal
  order: 8
---

# Alert Modal
<p class="lead">Used when the user is about to perform an action that they cannot recover from.</p>
<p>A variation of a modal component. The difference is the icon which is used to draw the attention of the user.</p>
<svg class="svg-icon"
     aria-hidden="true"
     focusable="false">
  <use xlink:href="#svg--exclamation-triangle-solid" />
</svg>
<h2>Examples</h2>
<div class="reveal modal--alert tiny" id="exampleModal1" data-reveal>
  <div class="closeBtn">
    <button class="button clear small" data-close><i class="fas fa-times"></i> stäng</button>
  </div>
  <div class="media-object">
    <div class="media-object-section">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-triangle" class="svg-inline--fa fa-exclamation-triangle fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>
    </div>
    <div class="media-object-section">
      <p class="h4"><strong>This is the header of the message. It's optional.</strong></p>
      <p>This would be where all the content would go.</p>
      <div class="modal__controls">
        <button class="button hollow alert">Radera</button>
        <button class="button" data-close>Avbryt</button>
      </div>
    </div>
  </div>
</div>
<button class="button" data-open="exampleModal1">Launch Small Alert Modal</button><br />
<div class="reveal modal--alert small" id="exampleModal2" data-reveal>
  <div class="closeBtn">
    <button class="button clear small" data-close><i class="fas fa-times"></i> stäng</button>
  </div>
  <div class="media-object">
    <div class="media-object-section">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-triangle" class="svg-inline--fa fa-exclamation-triangle fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>
    </div>
    <div class="media-object-section">
      <p class="h4"><strong>This is the header of the message. It's optional.</strong></p>
      <p>This would be where all the content would go.</p>
      <div class="modal__controls">
        <button class="button hollow alert">Radera</button>
        <button class="button" data-close>Avbryt</button>
      </div>
    </div>
  </div>
</div>
<button class="button" data-open="exampleModal2">Launch Medium Alert Modal</button><br />
<div class="reveal modal--alert large" id="exampleModal3" data-reveal>
  <div class="closeBtn">
    <button class="button clear small" data-close><i class="fas fa-times"></i> stäng</button>
  </div>
  <div class="media-object">
    <div class="media-object-section">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-triangle" class="svg-inline--fa fa-exclamation-triangle fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>
    </div>
    <div class="media-object-section">
      <p class="h4"><strong>This is the header of the message. It's optional.</strong></p>
      <p>This would be where all the content would go.</p>
      <div class="modal__controls">
        <button class="button hollow alert">Radera</button>
        <button class="button" data-close>Avbryt</button>
      </div>
    </div>
  </div>
</div>
<button class="button" data-open="exampleModal3">Launch Large Alert Modal</button>
<h2>Code Samples</h2>
<p>There's no hard a fast rule regarding which size your project should use. The project team can decide what fits best at which screen size.</p>
<h3>Small</h3>

``` html
<div class="reveal modal--alert tiny" id="exampleModal1" data-reveal>
  <div class="closeBtn">
    <button class="button clear small" data-close><i class="fas fa-times"></i> stäng</button>
  </div>
  <div class="media-object">
    <div class="media-object-section">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-triangle" class="svg-inline--fa fa-exclamation-triangle fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>
    </div>
    <div class="media-object-section">
      <p class="h4"><strong>This is the header of the message. It's optional.</strong></p>
      <p>This would be where all the content would go.</p>
      <div class="modal__controls">
        <button class="button hollow alert">Radera</button>
        <button class="button" data-close>Avbryt</button>
      </div>
    </div>
  </div>
</div>
<button class="button" data-open="exampleModal1">Launch Small Alert Modal</button>
```

<h3>Medium</h3>

``` html
<button class="button" data-open="exampleModal1">Launch Small Alert Modal</button><br />
<div class="reveal modal--alert small" id="exampleModal2" data-reveal>
  <div class="closeBtn">
    <button class="button clear small" data-close><i class="fas fa-times"></i> stäng</button>
  </div>
  <div class="media-object">
    <div class="media-object-section">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-triangle" class="svg-inline--fa fa-exclamation-triangle fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>
    </div>
    <div class="media-object-section">
      <p class="h4"><strong>This is the header of the message. It's optional.</strong></p>
      <p>This would be where all the content would go.</p>
      <div class="modal__controls">
        <button class="button hollow alert">Radera</button>
        <button class="button" data-close>Avbryt</button>
      </div>
    </div>
  </div>
</div>
<button class="button" data-open="exampleModal2">Launch Medium Alert Modal</button>
```

<h3>Large</h3>

``` html
<div class="reveal modal--alert large" id="exampleModal3" data-reveal>
  <div class="closeBtn">
    <button class="button clear small" data-close><i class="fas fa-times"></i> stäng</button>
  </div>
  <div class="media-object">
    <div class="media-object-section">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-triangle" class="svg-inline--fa fa-exclamation-triangle fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>
    </div>
    <div class="media-object-section">
      <p class="h4"><strong>This is the header of the message. It's optional.</strong></p>
      <p>This would be where all the content would go.</p>
      <div class="modal__controls">
        <button class="button hollow alert">Radera</button>
        <button class="button" data-close>Avbryt</button>
      </div>
    </div>
  </div>
</div>
<button class="button" data-open="exampleModal3">Launch Large Alert Modal</button>
```