---
layout: layouts/default.njk
pageTitle: This is the title of the page.
---

<div class="grid-container">
  <h1>This is foundation</h1>
  <p class="lead">This is my lead paragraph. Though it looks like I might be missing some spacing between it, its header, and its content below.</p>
  <p>Komponenten textfält finns i storlekarna large och medium. Storleken medium kan du använda om utrymmet på skärmen är begränsad.

Det är bra att ange attributet "autocomplete" på input element för att specificera för browsern vilken typ av information som ska fyllas i i textfältet, på så vis kan browsern ge förslag på vad som ska stå i textfältet baserat på de tidigare värden som fyllts i. Här finns en lista på de värden <a href="#">värden som kan anges i autocompletelänk till annan webbplats</a>.

Glöm inte att uppdatera alla "id" på inmatningsfältet eftersom de måste vara unika.</p>
  <div class="grid-x grid-margin-x small-up-3">
    <div class="cell">
      <label for="test">My foundation label</label>
      <input type="text" id="test" />
    </div>
    <div class="cell">
      <label for="test">My foundation label</label>
      <input type="text" id="test" />
    </div>
    <div class="cell">
      <label for="test">My foundation label</label>
      <input type="text" id="test" />
    </div>
    <div class="cell">
      <label for="textarea">My foundation textarea</label>
      <textarea id="textarea"></textarea>
    </div>
    <div class="cell">
      <input type="radio" id="radio1" name="radio-group" /><label for="radio1">Radio Group option one</label>
      <input type="radio" id="radio2" name="radio-group" /><label for="radio2">Radio Group option two</label>
      <input type="radio" id="radio3" name="radio-group" /><label for="radio3">Radio Group option three</label>
    </div>
    <div class="cell">
      <button class="button small">This is a button small</button>
      <button class="button">This is a button</button>
      <button class="button large">This is a button large</button>
    </div>
    <div class="cell">
      <a class="button primary" href="#">Primary</a>
      <a class="button secondary hollow" href="#">Secondary</a>
      <a class="button success" href="#">Success</a>
      <a class="button alert" href="#">Alert</a>
      <a class="button warning" href="#">Warning</a>
    </div>
    <div class="cell">
      <a class="button secondary small hollow" href="#">Secondary Small</a>
      <a class="button secondary hollow" href="#">Secondary</a>
      <a class="button secondary large hollow" href="#">Secondary Large</a>
    </div>
  </div>
  
  <div class="grid-container">
    <div class="grid-x grid-padding-x">
      <div class="large-12 cell">
        <h1>Welcome to Foundation</h1>
      </div>
    </div>
    <div class="grid-x grid-padding-x">
      <div class="large-12 cell">
        <div class="callout">
          <h3>We&rsquo;re stoked you want to try Foundation! </h3>
          <p>To get going, this file (index.html) includes some basic styles you can modify, play around with, or totally destroy to get going.</p>
          <p>Once you've exhausted the fun in this document, you should check out:</p>
          <div class="grid-x grid-padding-x">
            <div class="large-4 medium-4 cell">
              <p><a href="https://get.foundation/docs">Foundation Documentation</a><br />Everything you need to know about using the framework.</p>
            </div>
            <div class="large-4 medium-4 cell">
              <p><a href="http://zurb.com/university/code-skills">Foundation Code Skills</a><br />These online courses offer you a chance to better understand how Foundation works and how you can master it to create awesome projects.</p>
            </div>
            <div class="large-4 medium-4 cell">
              <p><a href="https://get.foundation/forum">Foundation Forum</a><br />Join the Foundation community to ask a question or show off your knowledge.</p>
            </div>
          </div>
          <div class="grid-x grid-padding-x">
            <div class="large-4 medium-4 medium-push-2 cell">
              <p><a href="http://github.com/foundation/foundation">Foundation on Github</a><br />Latest code, issue reports, feature requests and more.</p>
            </div>
            <div class="large-4 medium-4 medium-pull-2 cell">
              <p><a href="https://twitter.com/ZURBfoundation">@zurbfoundation</a><br />Ping us on Twitter if you have questions. When you build something with this we'd love to see it (and send you a totally boss sticker).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-x grid-padding-x">
      <div class="large-8 medium-8 cell">
        <h5>Here&rsquo;s your basic grid:</h5>
        <div class="grid-x grid-padding-x">
          <div class="large-12 cell">
            <div class="primary callout">
              <p><strong>This is a twelve cell section in a grid-x.</strong> Each of these includes a div.callout element so you can see where the cell are - it's not required at all for the grid.</p>
            </div>
          </div>
        </div>
        <div class="grid-x grid-padding-x">
          <div class="large-6 medium-6 cell">
            <div class="primary callout">
              <p>Six cell</p>
            </div>
          </div>
          <div class="large-6 medium-6 cell">
            <div class="primary callout">
              <p>Six cell</p>
            </div>
          </div>
        </div>
        <div class="grid-x grid-padding-x">
          <div class="large-4 medium-4 small-4 cell">
            <div class="primary callout">
              <p>Four cell</p>
            </div>
          </div>
          <div class="large-4 medium-4 small-4 cell">
            <div class="primary callout">
              <p>Four cell</p>
            </div>
          </div>
          <div class="large-4 medium-4 small-4 cell">
            <div class="primary callout">
              <p>Four cell</p>
            </div>
          </div>
        </div>
        <hr />
        <h5>We bet you&rsquo;ll need a form somewhere:</h5>
        <form>
          <div class="grid-x grid-padding-x">
            <div class="large-12 cell">
              <label>Input Label</label>
              <input type="text" placeholder="large-12.cell" />
            </div>
          </div>
          <div class="grid-x grid-padding-x">
            <div class="large-4 medium-4 cell">
              <label>Input Label</label>
              <input type="text" placeholder="large-4.cell" />
            </div>
            <div class="large-4 medium-4 cell">
              <label>Input Label</label>
              <input type="text" placeholder="large-4.cell" />
            </div>
            <div class="large-4 medium-4 cell">
              <div class="grid-x">
                <label>Input Label</label>
                <div class="input-group">
                  <input type="text" placeholder="small-9.cell" class="input-group-field" />
                  <span class="input-group-label">.com</span>
                </div>
              </div>
            </div>
          </div>
          <div class="grid-x grid-padding-x">
            <div class="large-12 cell">
              <label>Select Box</label>
              <select>
                <option value="husker">Husker</option>
                <option value="starbuck">Starbuck</option>
                <option value="hotdog">Hot Dog</option>
                <option value="apollo">Apollo</option>
              </select>
            </div>
          </div>
          <div class="grid-x grid-padding-x">
            <div class="large-6 medium-6 cell">
              <fieldset>
                <legend>Choose Your Favorite</legend>
                <input type="radio" name="pokemon" value="Red" id="pokemonRed"><label for="pokemonRed">Radio 1</label>
                <input type="radio" name="pokemon" value="Blue" id="pokemonBlue"><label for="pokemonBlue">Radio 2</label>
              </fieldset>
            </div>
            <div class="large-6 medium-6 cell">
              <fieldset>
                <legend>Check these out</legend>
                <input id="checkbox1" type="checkbox"><label for="checkbox1">Checkbox 1</label>
                <input id="checkbox2" type="checkbox"><label for="checkbox2">Checkbox 2</label>
              </fieldset>
            </div>
          </div>
          <div class="grid-x grid-padding-x">
            <div class="large-12 cell">
              <label>Textarea Label</label>
              <textarea placeholder="small-12.cell"></textarea>
            </div>
          </div>
        </form>
      </div>
      <div class="large-4 medium-4 cell">
        <h5>Try one of these buttons:</h5>
        <p><a href="#" class="button">Simple Button</a><br/>
        <a href="#" class="success button">Success Btn</a><br/>
        <a href="#" class="alert button">Alert Btn</a><br/>
        <a href="#" class="secondary button">Secondary Btn</a></p>
        <div class="callout">
          <h5>So many components, girl!</h5>
          <p>A whole kitchen sink of goodies comes with Foundation. Check out the docs to see them all, along with details on making them your own.</p>
          <a href="https://get.foundation/sites/docs/" class="small button">Go to Foundation Docs</a>
        </div>
      </div>
    </div>
  </div>
</div>
