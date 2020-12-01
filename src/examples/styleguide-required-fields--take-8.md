---
layout: layouts/leftnav.njk
pageTitle: Styleguide | Required Fields | Stars
eleventyNavigation:
  key: required-fields-8
  title: Styleguide - Required Fields - Stars
  parent: examples
---

<style>
/* + Resets */
body,
label,
ul,
ol,
li,
p {
  line-height: 1.5;
}

[type=text] {
  margin-bottom: 0;
}

[type="checkbox"] + label, [type="radio"] + label {
  margin-right: 0;
}
/* - Resets */

form > * + * {
  margin-top: 2rem;
}

label {
  font-size: 16px;
}

@media screen and ( min-width: 640px ) {
  label {
    font-size: 19px;
  }
}

.required {
  font-weight: normal;
}

[type="checkbox"] + label {
  padding-left: 1.5rem;
  text-indent: -1.5rem;
}

li > [type="checkbox" ] + label {
  font-weight: normal;
}

fieldset legend {
  color: #333;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 0;
}

@media screen and ( min-width: 640px ) {
  fieldset legend {
    font-size: 19px;
  }
}

fieldset legend ~ .helptext {
  margin: .5rem 0 .75rem;
}
fieldset li + li {
  margin-top: .5rem;
} 

fieldset ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.helptext {
  box-shadow: inset 2px 0 0 0 #f2f2f2, inset 4px 0 0 0 #ccc;
  font-size: 13px;
  margin: 4px 0 8px 0;
  padding: 0px 0 0px 12px;
}

.helptext > div:first-child {
  overflow: hidden;
  margin-bottom: 1rem;
}

@media screen and (min-width: 640px ) {
  .helptext {
    font-size: 16px;
  }
}

.helptext p:last-child {
  margin-bottom: 0;
}
</style>

# Styleguide
## Required Fields
### Take 7

--- 

## Form Example

Alla fält som är markerade med * är obligatoriska

<form>
<div>
  <label for="input1" aria-label="Obligatorisk fält, mitt etikett">Mitt etikett <span class="required">*</span> </label>
  <div class="helptext">
    <p>This is the area for the help text.</p>
  </div>
  <input type="text" id="input1" required>
</div>

<!-- The aria-label is used to prevent screen readers from reading "star" in the :before psuedo-content. -->
<div>
  <label for="input2" aria-label="Obligatorisk fält. Mitt andra etikett">Mitt andra etikett. But what about really long label that will wrap to several lines? How will that look? <span class="required">*</span></label>
  <div class="helptext">
    <div>
      <p>Here is some important information that will give you necessary context to successfully fill out this field.</p>
      <p>För bara en dryg vecka sedan slopade Folkhälsomyndigheten restriktionerna för 70-plussare. I samma veva gav statsepidemiolog Anders Tegnell grönt ljus för mindre släktkalas under julen.</p>
      <p>Om det fanns möjligheter att hålla avstånd skulle ett firande med såväl barn som mor- och farföräldrar kunna betraktas som relativt riskritt.</p>
    </div>
    <button id="testBtn" class="button clear small">Stang</button>
  </div>
  <input type="text" id="input2" required />
</div>

<div class="grid-x grid-margin-x small-up-2">
  <div class="cell">
    <label for="input3" aria-label="Obligatorisk fält, Forenamn">Forenamn <span class="required">*</span></label>
    <input type="text" id="input3" required />
  </div>
  <div class="cell">
    <label for="input4" aria-label="Obligatorisk fält, Efternamn">Efternamn <span class="required">*</span></label>
    <input type="text" id="input4" required />
  </div>
</div>

<div>
  <label for="input5">A non-required field.</label>
  <p class="helptext">We want this information only because it pads out the form.</p>
  <input type="text" id="input5" />
</div>

<div>
  <input type="checkbox" id="checkbox1" required /><label for="checkbox1" aria-label="Obligatorisk fält, Checkboxar kan vara ensam eller i grupp"><span>Checkboxes can be alone or in groups. How will that look?</span> <span class="required">*</span></label>
</div>

<!-- The Legend will always be rendered first. So any element above it need to be outside of the Fieldset tag. That feels wrong. -->
<fieldset>
  <!-- Most browsers cannot implement a flexbox layout inside of a legend tag. The solution is to use a wrapper element inside the legend element -->
  <legend aria-label="Obligatorisk grupp. This is a group of checkboxes. How should this appear when the group is required?">
    <div>
      <span>This is a group of checkboxes. How should this appear when the group is required? </span>
      <span class="required">&nbsp;</span>
    </div>    
  </legend>
  <div class="helptext">
    <p>Choose all that apply.</p>
  </div>
  <ul>
    <li><input type="checkbox" id="checkbox2" /><label for="checkbox2">Checkboxes can be alone or in groups. How will that look?</label></li>
    <li><input type="checkbox" id="checkbox3" /><label for="checkbox3">This is the second checkbox in the the group. Its label is a little bit longer than the others.</label></li>
    <li><input type="checkbox" id="checkbox4" /><label for="checkbox4">Our third label is pretty short.</label></li>
  </ul>
</fieldset>
</form>

---

#### Changes
- Shrink the line-spacing to 1.5
- Place groups of checkboxes in a fieldset.
- Order groups of checkboxes in a fieldset as list items.
- Increase the space between those list items.
- Modify :focus style to reflect the style from vertical menus
- Add "required" text above each label
- Add a "*" before the "required" text.
- Hang the asterisk in the margin on larger screens.
- Align the asterisk with the left margin on small screens
- Switched "required" font to Open Sans.
- Dropped helptext to 13px
- Moved the helptext line halfway in the left padding.

<script>
var btn = document.getElementById( 'testBtn' );
btn.addEventListener( 'click', function( evt ) {
  console.log( evt.target.parentNode );
  evt.target.previousElementSibling.style.height = 24 + 'px';
});
</script>

