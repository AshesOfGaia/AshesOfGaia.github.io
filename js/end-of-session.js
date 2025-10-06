document.addEventListener('DOMContentLoaded', function () {
  const archetypeMap = {
    1: 'ROLEPLAYER',
    2: 'WARRIOR',
    3: 'EXPLORER',
    4: 'STORYTELLER',
    5: 'TACTICIAN',
  };

  const players = ['prince', 'pikacz', 'puniek', 'bjodro', 'wojtas'];
  const archetypes = Object.values(archetypeMap);
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const clearButtons = document.querySelectorAll('.clear-all-btn');

  // Load saved checkbox states from localStorage
  function loadCheckboxStates() {
    const savedStates = JSON.parse(
      localStorage.getItem('checkboxStates') || '{}'
    );
    checkboxes.forEach((cb) => {
      cb.checked = savedStates[cb.id] || false;
    });
  }

  // Save current checkbox states to localStorage
  function saveCheckboxStates() {
    const states = {};
    checkboxes.forEach((cb) => {
      states[cb.id] = cb.checked;
    });
    localStorage.setItem('checkboxStates', JSON.stringify(states));
  }

  function updateTotals() {
    const scores = {};
    players.forEach((player) => {
      scores[player] = {};
      archetypes.forEach((archetype) => {
        scores[player][archetype] = 0;
      });
    });

    checkboxes.forEach((cb) => {
      if (!cb.checked) return;

      const idParts = cb.id.split('_');
      if (idParts.length !== 3) return;

      const [player, archetypeIndex] = idParts;
      const archetype = archetypeMap[archetypeIndex];
      if (!player || !archetype) return;

      if (scores[player] && scores[player][archetype] !== undefined) {
        scores[player][archetype]++;
      }
    });

    players.forEach((player) => {
      archetypes.forEach((archetype) => {
        const cells = document.querySelectorAll(
          `[data-player="${player}"][data-archetype="${archetype}"]`
        );
        cells.forEach((cell) => {
          cell.textContent = scores[player][archetype];
          cell.style.backgroundColor = '';
          cell.style.fontWeight = 'normal';
        });
      });
    });

    // Highlight max per player
    players.forEach((player) => {
      const maxCount = Math.max(...archetypes.map((a) => scores[player][a]));
      archetypes.forEach((archetype) => {
        const cell = document.querySelector(
          `td[data-player="${player}"][data-archetype="${archetype}"]`
        );
        if (cell) {
          if (scores[player][archetype] === maxCount && maxCount > 0) {
            cell.style.backgroundColor = '#dff0d8'; // highlight
            cell.style.fontWeight = 'bold';
          }
        }
      });
    });
  }

  // Clear all checkboxes
  function clearAllCheckboxes() {
    checkboxes.forEach((cb) => (cb.checked = false));
    saveCheckboxStates();
    updateTotals();
  }

  // Event listeners for checkboxes
  checkboxes.forEach((cb) => {
    cb.addEventListener('change', () => {
      saveCheckboxStates();
      updateTotals();
    });
  });

  // Event listener for clear button
  clearButtons.forEach((button) => {
    button.addEventListener('click', clearAllCheckboxes);
  });

  // Initialize
  loadCheckboxStates();
  updateTotals();
});
