---
layout: layouts/default.njk
pageTitle: ALF | Startpage Table - Take 2
eleventyNavigation:
  key: alf-startpage-table-take-2
  title: ALF - StartPage Table - Take 2
  parent: examples
---

<div class="grid-container">
  <div id="root" class="alf-startpage part-2">
    <h2>Ansökningar som du fortfarande kan ändra i</h2>
    <ul class="legend">
      <li>I kolumnen <em>"Komplett"</em> ett <strong>Nej</strong> betyder att din inskickade ansökan inte är komplett. Myndigheten kommer begära att du kompletterar din ansökan med fler uppgifter.</li>
      <li>I kolumnen <em>"Status"</em><br /> <strong>Utkast</strong> betyder att du börjat på en ansökan och sparat den men ännu inte skickat in den.<br /> <strong>Inskickad</strong> betyder att du har skickat in ansökan till myndigheten.<br /> <strong>Ändring</strong> betyder att du har ändrat i en inskickad ansökan.  Du måste skicka in ansökan igen för att myndigheten ska se dina ändringar.</li>
    </ul>
    <table>
      <thead>
        <tr>
          <th class="shrink">Senast ändrad</th>
          <th style="width: 100%;">Namn  </th>
          <th class="shrink">Komplett</th>
          <th>Status</th>
          <th>Ansökanstyp</th>
          <th>Journalnummer</th>
          <th class="shrink"><span class="visually-hidden">download</span></th>
          <th class="shrink"><span class="visually-hidden">edit</an></th>
          <th class="shrink"><span class="visually-hidden">delete</span></th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(row, index) in rows">
          <tr>
            <td>{% raw %}{{ row.date }}{% endraw %}</td>
            <td>{% raw %}{{ row.name }}{% endraw %}</td>
            <td>
              <template v-if="row.komplett === false">nej</template>
              <template v-else>
                <svg class="svg-icon" aria-hidden="true" focusable="false" v-show="row.komplett">
                  <use xlink:href="#svg--check-solid" />
                </svg>
                <span class="visually-hidden">complete</span>
              </template>
            </td>
            <td class="shrink">{% raw %}{{ row.status }}{% endraw %}
              <span data-tooltip class="top" tabindex="2" title="Du har inte skickad in din senaste ändring" v-if="row.status == 'Ändring'">
                <svg class="svg-icon" aria-hidden="true" focusable="false">
                  <use xlink:href="#svg--question-circle-solid" />
                </svg>
                <span class="visually-hidden">What is this?</span>
              </span>
            </td>
            <td>{% raw %}{{ row.type }}{% endraw %}</td>
            <td>{% raw %}{{ row.journalnumber }}{% endraw %}</td>
            <td>
              <button class="button clear" data-tooltip tabindex="1" title="Ladda ner" data-position="top" data-alignment="center">
                <svg class="svg-icon" aria-hidden="true" focusable="false" v-show="row.download">
                  <use xlink:href="#svg--download-solid" />
                </svg>
                <span class="visually-hidden">Download</span>
              </button>
            </td>
            <td>
              <button class="button clear" data-tooltip tabindex="1" title="Redigera" data-position="top" data-alignment="center">
              <svg class="svg-icon" aria-hidden="true" focusable="false" v-show="row.edit">
                <use xlink:href="#svg--edit-solid" />
              </svg>
              <span class="visually-hidden">Edit</span>
              </button>
            </td>
            <td>
              <button class="button clear" data-tooltip tabindex="1" title="Radera" data-position="top" data-alignment="center">
              <svg class="svg-icon" aria-hidden="true" focusable="false" v-show="row.delete">
                <use xlink:href="#svg--times-solid" />
              </svg>
              <span class="visually-hidden">Delete</span>
              </button>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</div>
<script src="{{ '/js/vue.js' | url }}"></script>
<script src="{{ '/js/vue-alf-startpage-table.js' | url }}"></script>