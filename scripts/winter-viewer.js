(() => {
  const html = (strings, ...values) => String.raw({ raw: strings }, ...values);
  const css = (strings, ...values) => String.raw({ raw: strings }, ...values);

  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  const warnings = [];

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function warn(...issue) {
    console.warn(...issue);
    warnings.push(issue);
  }

  const questionTypes = {
    'blanks': (itemId) => {

      const item = `quiz-item[id=${itemId}] `;
      const blanks = [];

      const source = $(item + 'q-source').innerHTML;
      const rendered = source.replace(/\[(.*)\]/g, (a, b) => {
        const input = html`
          <q-blank id="${itemId}/${blanks.length}">
            <input type="text"
              autocomplete="off"
              autocorrect="off"
              autocapitalize="off"
              spellcheck="false"
              value="">
            </q-blank>`;
        blanks.push(b);
        return input;
      });

      shuffleArray(blanks);

      const clues = blanks.join(', ');

      $(item + `q-source`).innerHTML = html`
        <preview-slot>
          <q-interactive>${rendered}</q-interactive>
        </preview-slot>

        <details>
          <summary>Source</summary>
          <code>${source}</code>
        </details>
      `;

      $(item + 'clues-slot').innerHTML = html`
        <q-clues>
          <p aria-label="Options are">${clues}</p>
        </q-clues>
      `;

    }
  }

  function initialiseInteractives() {

    const interactives = $$('quiz-item');
    console.debug('Interactives', interactives);

    interactives.forEach((interactive, i) => {
      const type = interactive.attributes.type.value;
      const id = interactive.attributes.id.value || `winter-activity-${i}`;

      if (typeof questionTypes[type] !== 'function') {
        warn(`The interactive type ${type} is not supported`);
      }

      const renderer = questionTypes[type];
      renderer(id);
    })


  }

  document.addEventListener("DOMContentLoaded", function (event) {
    initialiseInteractives();
  });

})();
