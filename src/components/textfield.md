---
pageTitle: Textfield
eleventyNavigation:
  key: textfield
  parent: components
  title: Textfield
  order: 3
---

# Textfield

<style>
  label {
    color: #4d4d4d;
    font-size: 19px;
  }
  .text-help {
    border-left: 1px solid #4d4d4d;
    padding-left: 1rem;
    overflow: hidden;
    transition: all .2s ease-in-out;
  }
  .text-help button {
    margin-bottom: 0;
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

</style>
<div style="max-width: 320px;">
  <div class="textfield">
    <label for="text1">Textfield Label One * 
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
      <p class="format-help">ÅÅÅÅ-MM-DD</p>
    </div>
    <input type="text" id="text1" aria-described-by="help-meta" />
  </div>
  <div class="textfield">
    <label for="text2">Textfield Label Two * 
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
  <fieldset class="textfield">
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
        <input type="radio" name="radio1" id="radio1-1" aria-described-by="help-meta" />
        <label for="radio1-1">Radio Label 1</label>
      </li>
      <li>
        <input type="radio" name="radio1" id="radio1-1" aria-described-by="help-meta" />
        <label for="radio1-1">Radio Label 1</label>
      </li>
    </ul>
  </fieldset>
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
    helpText.setAttribute( 'data-height', helpText.clientHeight );
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
      //console.log( menu, menu.style.height, menu.clientHeight, menu.clientHeight == 0, menu.getAttribute( 'data-height' ) );
      if ( menu.clientHeight == 0 ) {
        menu.style.height = menu.getAttribute( 'data-height' ) + 'px';
      } else {
        menu.style.height = 0;
      }
    });
  });
</script>