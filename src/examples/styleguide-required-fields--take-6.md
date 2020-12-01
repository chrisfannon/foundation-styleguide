---
layout: layouts/leftnav.njk
pageTitle: Styleguide | Required Fields | Take 6
eleventyNavigation:
  key: required-fields-6
  title: Styleguide - Required Fields - Take 6
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
  background-color: #fff;
  border-radius: 2px;
  color: #333;
  align-items: center;
  display: inline-flex;
  flex-wrap: wrap;
  /* font-family: monospace; */
  font-weight: normal;
  font-style: italic;
  font-size: 11px;
  position: relative;
  left: 0.5rem;
  /* width: calc(100% - 1.0rem); */
  /* margin-left: 0.8rem; */
  padding: 0 .5rem 0 1.5rem;
  text-indent: 0;
}

@media screen and (min-width: 640px ) {
  .required {
    font-size: 16px;
    left: 0;
  }
}

.required:before {
  position: absolute;
  content: url('data:image/svg+xml; utf-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M478.21 334.093L336 256l142.21-78.093c11.795-6.477 15.961-21.384 9.232-33.037l-19.48-33.741c-6.728-11.653-21.72-15.499-33.227-8.523L296 186.718l3.475-162.204C299.763 11.061 288.937 0 275.48 0h-38.96c-13.456 0-24.283 11.061-23.994 24.514L216 186.718 77.265 102.607c-11.506-6.976-26.499-3.13-33.227 8.523l-19.48 33.741c-6.728 11.653-2.562 26.56 9.233 33.037L176 256 33.79 334.093c-11.795 6.477-15.961 21.384-9.232 33.037l19.48 33.741c6.728 11.653 21.721 15.499 33.227 8.523L216 325.282l-3.475 162.204C212.237 500.939 223.064 512 236.52 512h38.961c13.456 0 24.283-11.061 23.995-24.514L296 325.282l138.735 84.111c11.506 6.976 26.499 3.13 33.227-8.523l19.48-33.741c6.728-11.653 2.563-26.559-9.232-33.036z"></path></svg>');
  height: .6rem;
  width: .6rem;
  left: .6rem;
  display: flex;
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
### Take 1

#### Problems
- Current tag solution is too visually heavy.
- Current tag solution is taller than most input fields leading to misalignment when a required and non-required field are used in the same row.
- Labels can be extremely long. Solution need to mark fields as required without searching the entire label.

#### Potential Solutions
- Remove tag and use only text.
- Add in an icon. Maybe even an asterisk.
- Mark the beginning and end of a label.

#### Questions
- Can the user still tell the difference between a required and non-required field?
- Does the required tag distract from reading and scanning the form?

--- 

## Form Example

<form>
<div>
  <label for="input1">Min etikett <span class="required">Obligatorisk</span> </label>
  <div class="helptext">
    <p>This is the area for the help text.</p>
  </div>
  <input type="text" id="input1">
</div>

<!-- The aria-label is used to prevent screen readers from reading "star" in the :before psuedo-content. -->
<div>
  <label for="input2" aria-label="Obligatorisk fält. Min andra etikett">Min andra etikett. But what about really long label that will wrap to several lines? How will that look? <span class="required">Obligatorisk</span></label>
  <div class="helptext"><p>Here is some important information that will give you necessary context to successfully fill out this field.</p>
    <p>För bara en dryg vecka sedan slopade Folkhälsomyndigheten restriktionerna för 70-plussare. I samma veva gav statsepidemiolog Anders Tegnell grönt ljus för mindre släktkalas under julen.</p>
    <p>Om det fanns möjligheter att hålla avstånd skulle ett firande med såväl barn som mor- och farföräldrar kunna betraktas som relativt riskritt.</p>
  </div>
  <input type="text" id="input2" />
</div>

<div class="grid-x grid-margin-x small-up-2">
  <div class="cell">
    <label for="input3" aria-label="Obligatorisk fält. Min andra etikett">Forenamn <span class="required">Obligatorisk</span></label>
    <input type="text" id="input3" />
  </div>
  <div class="cell">
    <label for="input4" aria-label="Obligatorisk fält. Min andra etikett">Efternamn <span class="required">Obligatorisk</span></label>
    <input type="text" id="input4" />
  </div>
</div>

<div>
  <label for="input5" aria-label="not required field">A non-required field.</label>
  <p class="helptext">We want this information only because it pads out the form.</p>
  <input type="text" id="input5" />
</div>

<div>
  <input type="checkbox" id="checkbox1" /><label for="checkbox1"><span>Checkboxes can be alone or in groups. How will that look?</span> <span class="required">Obligatorisk</span></label>
</div>

<!-- The Legend will always be rendered first. So any element above it need to be outside of the Fieldset tag. That feels wrong. -->
<fieldset>
  <!-- Most browsers cannot implement a flexbox layout inside of a legend tag. The solution is to use a wrapper element inside the legend element -->
  <legend aria-label="Required Field. This is a group of checkboxes. How should this appear when the group is required?">
    <div>
      <span>This is a group of checkboxes. How should this appear when the group is required? </span>
      <span class="required">Obligatorisk</span>
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

