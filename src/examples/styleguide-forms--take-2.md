---
layout: layouts/leftnav.njk
pageTitle: Styleguide | Forms | Take 2
eleventyNavigation:
  key: forms-2
  title: Styleguide - Forms - Take 2
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
  color: #4d4d4d;
  font-size: 1em
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

.field__header > * {
  display: inline;
}

.field__help {
  margin-top: .25rem;
}

.help__toggle {
  color: #116fa2;
  margin-left: .25rem;
  margin-bottom: 0;
  position: relative;
  top: -3px;
}

.help__text {
  box-shadow: inset 2px 0 0 0 #f2f2f2, inset 4px 0 0 0 #ccc;
  font-size: 1em;
  margin: 4px 0 8px 0;
  padding: 0px 0 0px 12px;
}

.help__text p {
  margin-bottom: .5rem;
}

.help__text .button {
  margin-bottom: 0;
}

.help__error {
  color: #ab362b;
  display: flex;
  flex-direction: row;
  margin-bottom: .5rem;
}

.help__error > *:first-child {
  flex: 0 1 1rem;
  margin-right: .5rem;
  position: relative;
  top: 4px;
}

.help__error > p {
  margin-bottom: 0;
}

.help__format {
  margin-bottom: 0;
}

.field__wrapper {
  margin-top: .25rem;
}

.hide {
  display: none;
}

/* Update contrast styles */
input {
  border: #808080;
}

/* Error State */
.error label {
  color: #ab362b;
}

/* Medium State */
.field__object {
  font-size: 1rem;
}

/* Small State */
.field__object.small {
  font-size: .875rem;
}
.small [type="text"], 
.small [type="password"], 
.small [type="date"], 
.small [type="datetime"], 
.small [type="datetime-local"], 
.small [type="month"], 
.small [type="week"], 
.small [type="email"], 
.small [type="number"], 
.small [type="search"], 
.small [type="tel"], 
.small [type="time"], 
.small [type="url"], 
.small [type="color"], 
.small textarea {
  font-size: 1em;
  padding: .25rem .125rem;
}

.small .field__wrapper {
  margin-top: 0;
}

.small .field__help {
  margin-top: .125rem;
}

.small .help__text {
  margin: .125rem 0 .25rem 0;
}
.small .help__text p,
.small .help__error,
.small .help__format {
  margin-bottom: .25rem;
}

/* Page styles */

.controls {
  background-color: #e6e6e6;
  padding: 1rem;
}

.form-controls > label + * {
  margin-bottom: 1rem;
}

.cell > .field__object {
  position: sticky;
  top: 1rem;
}
</style>

<div id="forms">
  <form>
    <div class="grid-x grid-margin-x grid-margin-y small-up-2">
      <div class="cell">
        <field-object v-for="(field, index) in fields"
          :key="index"
          :my-field="fields[ index ]"></field-object>
      </div>
      <div class="cell controls">
        <field-control v-for="(field, index) in fields"
          :key="index"
          :id="index"
          v-model="fields[ index ]"></field-control>
      </div>
    </div>
  </form>
</div>

<script src="{{ '/js/vue.js' | url }}"></script>
<script src="{{ '/js/vue-forms-take-2.js' | url }}"></script>