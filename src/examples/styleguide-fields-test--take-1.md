---
layout: layouts/leftnav.njk
pageTitle: Styleguide | Fields Test | Take 1
date-created: 2020-12-22
eleventyNavigation:
  key: fields-test-1
  title: Styleguide - Fields Test - Take 1
  parent: examples
---

<style>
  label,
  legend {
    color: #4d4d4d;
    font-weight: bold;
    /* font-size: 19px; */
  }
  .text-help {
    overflow: hidden;
    transition: all .2s ease-in-out;
  }
  .text-help button {
    margin-bottom: 0;
  }
  .text-help p {
    margin-bottom: 0.25rem;
    padding-left: 1rem;
    position: relative;
  }
  .text-help p:before {
    content: "";
    border-left: 1px solid #b3b3b3;
    position: absolute;
    height: 95%;
    left: 2px;
    top: 3%;
  }
  .error-help {
    color: red;
    margin-bottom: 0;
    display: none;
  }
  .help-meta p {
    
  }
  .format-help {
    margin-bottom: 0;
  }
  .toggle-help {
    border-radius: 0;
    color: #116fa2;
    transition: box-shadow .1s ease-in;
  }
  .toggle-help .svg-icon {
    width: .875em;
    height: .875em;
  }
  .toggle-help:hover {
    color: green;
    box-shadow: 0 2px 0 green;
  }
  
  fieldset [type="radio"] + label[for], 
  fieldset [type="checkbox"] + label[for] {
    font-weight: normal;
  }
  
  fieldset ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

</style>

# Test of new form field styling
<div class="lead">Trying to get this right so we don't have to revisit it every 6 months.</div>

The fields should look ok when added into a regular page of text. My biggest worry is that by increasing the font size of the labels, they'll suddenly look comically oversize compared to the rest of the text.

I wonder if keeping the label size similiar to the base font size will help. Out of context, it's tough to tell. In context, maybe it'll be a little more clear.

<div class="grid-container full">
  <div class="grid-x grid-margin-x">
    <div class="cell textfield small-6">
      <label for="text1">Forenamn * 
        <button class="toggle-help" title="click to see help text">
          <svg class="svg-icon" aria-hidden="true" focusable="false">
            <use xlink:href="#svg--question-circle-solid" />
          </svg>
        </button>
      </label>
      <div class="help-meta">
        <div class="text-help">
          <p>Mer detailer om detta consectetur adipiscing elit. Vivamus vitae porttitor velit. Fusce blandit eget lorem quis fermentum. Nullam consequat venenatis posuere. Donec a eleifend lorem. Donec at arcu nulla. Nullam scelerisque augue sollicitudin, condimentum orci sed, luctus eros.</p>
          <button class="button clear">Stäng</button>
        </div>
        <p class="error-help">This is the error message</p>
        <!-- <p class="format-help">ÅÅÅÅ-MM-DD</p> -->
      </div>
      <input type="text" id="text1" aria-described-by="help-meta" />
    </div>
    <div class="cell small-6 textfield">
      <label for="text2">Efternamn * 
        <button class="toggle-help">
          <svg class="svg-icon" aria-hidden="true" focusable="false">
            <use xlink:href="#svg--question-circle-solid" />
          </svg>
        </button>
      </label>
      <div class="help-meta">
        <div class="text-help">
          <p>Mer detailer om detta consectetur adipiscing elit. Vivamus vitae porttitor velit. Fusce blandit eget lorem quis fermentum. Nullam consequat venenatis posuere. Donec a eleifend lorem. Donec at arcu nulla. Nullam scelerisque augue sollicitudin, condimentum orci sed, luctus eros.</p>
          <button class="button clear">Stäng</button>
        </div>
        <p class="error-help">This is the error message</p>
      </div>
      <input type="text" id="text2" aria-described-by="help-meta" />
    </div>
    <div class="cell small-12 textfield">
      <label for="text3">Email * 
        <!--<button class="toggle-help">
          <svg class="svg-icon" aria-hidden="true" focusable="false">
            <use xlink:href="#svg--question-circle-solid" />
          </svg>
        </button>-->
      </label>
      <div class="help-meta">
        <!-- <div class="text-help">
          <p>Mer detailer om detta consectetur adipiscing elit. Vivamus vitae porttitor velit. Fusce blandit eget lorem quis fermentum. Nullam consequat venenatis posuere. Donec a eleifend lorem. Donec at arcu nulla. Nullam scelerisque augue sollicitudin, condimentum orci sed, luctus eros.</p>
          <button class="button clear">Stäng</button>
        </div>-->
        <p class="error-help">This is the error message</p>
        <p class="format-help">Email addresses should have an '@' in them.</p>
      </div>
      <input type="text" id="text3" aria-described-by="help-meta format-help" />
    </div>
    <div class="cell small-4 textfield">
      <label for="text4">Town * 
        <!--<button class="toggle-help">
          <svg class="svg-icon" aria-hidden="true" focusable="false">
            <use xlink:href="#svg--question-circle-solid" />
          </svg>
        </button>-->
      </label>
      <div class="help-meta">
        <!-- <div class="text-help">
          <p>Mer detailer om detta consectetur adipiscing elit. Vivamus vitae porttitor velit. Fusce blandit eget lorem quis fermentum. Nullam consequat venenatis posuere. Donec a eleifend lorem. Donec at arcu nulla. Nullam scelerisque augue sollicitudin, condimentum orci sed, luctus eros.</p>
          <button class="button clear">Stäng</button>
        </div>-->
        <p class="error-help">This is the error message</p>
        <!--<p class="format-help">Email addresses should have an '@' in them.</p>-->
      </div>
      <input type="text" id="text4" aria-described-by="help-meta format-help" />
    </div>
    <div class="cell small-4 select">
      <label for="select1">State * 
        <!--<button class="toggle-help">
          <svg class="svg-icon" aria-hidden="true" focusable="false">
            <use xlink:href="#svg--question-circle-solid" />
          </svg>
        </button>-->
      </label>
      <div class="help-meta">
        <!-- <div class="text-help">
          <p>Mer detailer om detta consectetur adipiscing elit. Vivamus vitae porttitor velit. Fusce blandit eget lorem quis fermentum. Nullam consequat venenatis posuere. Donec a eleifend lorem. Donec at arcu nulla. Nullam scelerisque augue sollicitudin, condimentum orci sed, luctus eros.</p>
          <button class="button clear">Stäng</button>
        </div>-->
        <p class="error-help">This is the error message</p>
        <!--<p class="format-help">Email addresses should have an '@' in them.</p>-->
      </div>
      <select type="text" id="select1" aria-described-by="help-meta">
        <option value="1">Massachusetts</option>
        <option value="2">New Hampshire</option>
        <option value="3">Vermont</option>
        <option value="4">Maine</option>
      </select>
    </div>
    <div class="cell small-4 textfield">
      <label for="text5">Zipcode * 
        <!--<button class="toggle-help">
          <svg class="svg-icon" aria-hidden="true" focusable="false">
            <use xlink:href="#svg--question-circle-solid" />
          </svg>
        </button>-->
      </label>
      <div class="help-meta">
        <!-- <div class="text-help">
          <p>Mer detailer om detta consectetur adipiscing elit. Vivamus vitae porttitor velit. Fusce blandit eget lorem quis fermentum. Nullam consequat venenatis posuere. Donec a eleifend lorem. Donec at arcu nulla. Nullam scelerisque augue sollicitudin, condimentum orci sed, luctus eros.</p>
          <button class="button clear">Stäng</button>
        </div>-->
        <p class="error-help">This is the error message</p>
        <!--<p class="format-help">Email addresses should have an '@' in them.</p>-->
      </div>
      <input type="text" id="text5" aria-described-by="help-meta format-help" />
    </div>
    <fieldset class="cell textfield">
      <legend for="text2">My Radio Group * 
        <button class="toggle-help">
          <svg class="svg-icon" aria-hidden="true" focusable="false">
            <use xlink:href="#svg--question-circle-solid" />
          </svg>
        </button>
      </legend>
      <div class="help-meta">
        <div class="text-help">
          <p>Mer detailer om detta consectetur adipiscing elit. Vivamus vitae porttitor velit. Fusce blandit eget lorem quis fermentum. Nullam consequat venenatis posuere. Donec a eleifend lorem. Donec at arcu nulla. Nullam scelerisque augue sollicitudin, condimentum orci sed, luctus eros.</p>
          <button class="button clear">Stäng</button>
        </div>
        <p class="error-help">This is the error message</p>
      </div>
      <ul>
        <li>
          <input type="radio" name="radio1" id="radio1-1" aria-described-by="help-meta" />
          <label for="radio1-1">Radio Label 1</label>
        </li>
        <li>
          <input type="radio" name="radio1" id="radio1-2" aria-described-by="help-meta" />
          <label for="radio1-2">Radio Label 1</label>
        </li>
        <li>
          <input type="radio" name="radio1" id="radio1-3" aria-described-by="help-meta" />
          <label for="radio1-3">Radio Label 1</label>
        </li>
      </ul>
    </fieldset>
  </div>
</div>
<script>
  var getClosest = function (elem, selector) {
	for ( ; elem && elem !== document; elem = elem.parentNode ) {
  		if ( elem.matches( selector ) ) return elem;
  	}
  	return null;
  };
  var helptexts = document.querySelectorAll( '.text-help' );
  helptexts.forEach( function( helpText ) {
    helpText.setAttribute( 'data-height', helpText.clientHeight + 4 );
    helpText.style.height = 0;
    var closeBtn = helpText.getElementsByTagName( 'button' )[0];
    closeBtn.addEventListener( 'click', function( evt ) {
      helpText.style.height = 0;
    });
  });
  var toggle = document.querySelectorAll( '.toggle-help' );
  toggle.forEach( function( item ) {
    //console.log( item );
    item.addEventListener( 'click', function( evt ) {
      //console.log( getClosest( evt.target, '.textfield' ) );
      var menu = getClosest( evt.target, '.textfield' ).querySelector( '.text-help' );
      if ( menu.clientHeight == 0 ) {
        menu.style.height = menu.getAttribute( 'data-height' ) + 'px';
      } else {
        menu.style.height = 0;
      }
    });
  });
</script>

