---
layout: layouts/default.njk
pageTitle: Basen | Error Panel
eleventyNavigation:
  key: basen-error-panel
  title: Basen - Error Panel
  parent: examples
---

## Basen - Error Panel
<div class="basen-error-panel">
<div class="grid-x grid-margin-x grid-margin-y">
  <div class="cell small-12">
    <div class="off-canvas-wrapper">
      <div class="off-canvas position-left" id="offCanvas" data-off-canvas data-transition="over">
        <div class="grid-container full" style="height: 100%;">
          <div class="grid-x" style="height: 100%;">
            <div class="cell shrink tabs-cell">
              <ul class="vertical tabs" data-tabs id="example-tabs">
                <li class="tabs-title is-active">
                  <a href="#panel1v" aria-selected="true">
                    <svg class="svg-icon" aria-hidden="true" focusable="false">
                      <use xlink:href="#svg--vector-square-solid" />
                    </svg>
                    <span class="visually-hidden">Block Information</span>
                  </a>
                </li>
                <li class="tabs-title">
                  <a href="#panel2v">
                    <svg class="svg-icon" aria-hidden="true" focusable="false">
                      <use xlink:href="#svg--user-circle-solid" />
                    </svg>
                    <span class="visually-hidden">Kund Information</span>
                  </a>
                </li>
                <li class="tabs-title">
                  <a href="#panel3v">
                    <svg class="svg-icon" aria-hidden="true" focusable="false">
                      <use xlink:href="#svg--history-solid" />
                    </svg>
                    <span class="visually-hidden">Granskningslog</span>
                  </a>
                </li>
                <li class="tabs-title tabs-error">
                  <a href="#panel4v">
                    <svg class="svg-icon" aria-hidden="true" focusable="false">
                      <use xlink:href="#svg--times-hexagon-solid" />
                    </svg>
                    <span class="visually-hidden">Fel Summering</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="cell auto" style="height: 100vh; overflow-y: scroll; border-left: 1px solid #116fa2;">
              <div class="tabs-content vertical" data-tabs-content="example-tabs">
                <div class="tabs-panel is-active" id="panel1v">
                  <p>Block Info</p>
                </div>
                <div class="tabs-panel" id="panel2v">
                  <p>Kund Info</p>
                </div>
                <div class="tabs-panel" id="panel3v">
                  <p>Granskningslog</p>
                </div>
                <div class="tabs-panel" id="panel4v">
                  <div class="media-object">
                    <div class="media-object-section">
                      <svg class="svg-icon" aria-hidden="true" focusable="false">
                        <use xlink:href="#svg--times-hexagon-solid" />
                      </svg>
                      <span class="visually-hidden">Search</span>
                    </div>
                    <div class="media-object-section">
                      <h5>Följande fel måste åtgärdas</h5>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <span class="listing-heading">123-565-6661 - 1,18 ha</span>
                      <span class="listing-meta">Bete, Gård/Miljö</span>
                      <ol>
                        <li>Fyll i notering</li>
                        <li>Blocket överlappar block -0223</li>
                        <li>Blocket får inte överlappa en regiongräns med mer än 0,1 ha. Dela eventuellt blocket i regiongränsen</li>
                      </ol>
                    </li>
                    <li>
                      <span class="listing-heading">Blockavvikelseyta 1 -  0,08 ha</span>
                      <span class="listing-meta">Pro rata</span>
                      <ol>
                        <li>Fyll i andel Pro rata</li>
                        <li>Blockavvikelseyta 1 överlappar Blockavvikelseyta 2</li>
                        <li>Blockavvikelseyta 1 får inte vara mindre 10 m2</li>
                      </ol>
                    </li>
                    <li>
                      <span class="listing-heading">Blockavvikelseyta 2 -  0,10 ha</span>
                      <span class="listing-meta">Pro rata</span>
                      <ol>
                        <li>Blockavvikelseyta 2 överlappar Blockavvikelseyta 1</li>
                      </ol>
                    </li>
                    <li>
                      <span class="listing-heading">Markklass 1 -  0,13 ha</span>
                      <span class="listing-meta">Betesmark med särskilda värden</span>
                      <ol>
                        <li>Markklass 1 överlappar Markklass 2</li>
                        <li>Markklass täcker inte hela blockets areal</li>
                      </ol>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="off-canvas-content" data-off-canvas-content style="height: 70vh;">
        <button type="button" class="button" data-toggle="offCanvas">Open Menu</button>
      </div>
    </div>
  </div>
</div>
</div>