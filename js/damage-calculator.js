/* main.js - komplet z zaokrąglaniem finalDamage do pół jednostki */

/* -------------------- Konfiguracja -------------------- */
const hitLocations = [
  { name: 'Głowa', range: [1, 10], multiplier: 2.0 },
  { name: 'Tors', range: [11, 50], multiplier: 1.0 },
  { name: 'Ręce', range: [51, 70], multiplier: 0.5 },
  { name: 'Nogi', range: [71, 100], multiplier: 0.5 },
];
const damageTypes = ['PIERCING', 'ENERGY', 'PRIMITIVE'];

/* -------------------- Stan pancerza -------------------- */
let armorValues = {};
function resetArmorValues() {
  armorValues = {};
  hitLocations.forEach((loc) => {
    armorValues[loc.name] = { PIERCING: 0, ENERGY: 0, PRIMITIVE: 0 };
  });
}
resetArmorValues();

/* -------------------- Render pól edycji pancerza -------------------- */
function renderArmorInputs() {
  const container = document.getElementById('armorTable');
  container.innerHTML = '';

  const table = document.createElement('table');
  const header = document.createElement('tr');
  header.innerHTML = `<th>Lokacja</th>${damageTypes
    .map((t) => `<th>${t}</th>`)
    .join('')}`;
  table.appendChild(header);

  hitLocations.forEach((loc) => {
    const tr = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.textContent = loc.name;
    tr.appendChild(nameCell);

    damageTypes.forEach((type) => {
      const td = document.createElement('td');
      const input = document.createElement('input');
      input.type = 'number';
      input.min = '0';
      input.step = '0.1';
      input.value = Number(armorValues[loc.name][type] || 0);
      input.addEventListener('input', () => {
        armorValues[loc.name][type] = parseFloat(input.value) || 0;
      });
      td.appendChild(input);
      tr.appendChild(td);
    });

    table.appendChild(tr);
  });

  container.appendChild(table);
}

/* -------------------- Reverse roll helper -------------------- */
function reverseRollValue(n) {
  const s = String(n).replace(/\D/g, '');
  if (s.length === 0) return NaN;
  if (s.length === 1) {
    return parseInt(s + '0', 10);
  }
  const rev = s.split('').reverse().join('');
  return parseInt(rev, 10);
}

/* -------------------- Zaokrąglanie finalDamage do pół jednostki -------------------- */
function roundUpHalf(num) {
  return Math.ceil(num * 2) / 2;
}

/* -------------------- Presety (localStorage) -------------------- */
const STORAGE_KEY = 'armorPresets_v1';

function loadPresetsFromStorage() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch (e) {
    return [];
  }
}
function savePresetsToStorage(presets) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(presets));
}

function renderPresets() {
  const list = document.getElementById('presetList');
  list.innerHTML = '';

  const presets = loadPresetsFromStorage();
  if (presets.length === 0) {
    list.textContent = 'Brak zapisanych presetów.';
    return;
  }

  presets.forEach((preset, idx) => {
    const div = document.createElement('div');
    div.className = 'preset';

    const chk = document.createElement('input');
    chk.type = 'checkbox';
    chk.className = 'presetCheckbox';
    chk.value = idx;
    chk.addEventListener('change', handlePresetCheckboxChange);

    const label = document.createElement('span');
    label.textContent = `${preset.name} (Build ${
      preset.buildModifier >= 0 ? '+' : ''
    }${preset.buildModifier})`;

    const delBtn = document.createElement('button');
    delBtn.textContent = '🗑';
    delBtn.title = 'Usuń preset';
    delBtn.addEventListener('click', () => {
      const all = loadPresetsFromStorage();
      all.splice(idx, 1);
      savePresetsToStorage(all);
      renderPresets();
      updateArmorFromSelectedPresets();
    });

    div.appendChild(chk);
    div.appendChild(label);
    div.appendChild(delBtn);
    list.appendChild(div);
  });
}

function handlePresetCheckboxChange() {
  updateArmorFromSelectedPresets();
}

function updateArmorFromSelectedPresets() {
  resetArmorValues();
  const presets = loadPresetsFromStorage();
  const checkedBoxes = [
    ...document.querySelectorAll('.presetCheckbox:checked'),
  ].map((el) => parseInt(el.value, 10));

  let totalBuild = 0;

  checkedBoxes.forEach((idx) => {
    const p = presets[idx];
    if (!p) return;
    totalBuild += Number(p.buildModifier || 0);
    for (const locName in p.armorValues) {
      if (!armorValues[locName])
        armorValues[locName] = { PIERCING: 0, ENERGY: 0, PRIMITIVE: 0 };
      for (const t of damageTypes) {
        armorValues[locName][t] =
          (armorValues[locName][t] || 0) +
          (Number(p.armorValues[locName][t]) || 0);
      }
    }
  });

  document.getElementById('buildModifier').value = totalBuild;
  renderArmorInputs();
}

/* -------------------- Zapisanie nowego presetu -------------------- */
document.getElementById('savePresetBtn').addEventListener('click', () => {
  const name = document.getElementById('presetName').value.trim();
  if (!name) return alert('Podaj nazwę presetu!');
  const buildModifier =
    parseFloat(document.getElementById('buildModifier').value) || 0;
  const snapshot = JSON.parse(JSON.stringify(armorValues));
  const preset = { name, buildModifier, armorValues: snapshot };
  const presets = loadPresetsFromStorage();
  presets.push(preset);
  savePresetsToStorage(presets);
  document.getElementById('presetName').value = '';
  renderPresets();
  alert('Preset zapisany!');
});

/* -------------------- Kalkulacja obrażeń -------------------- */
document.getElementById('calcBtn').addEventListener('click', () => {
  const rollInput = document.getElementById('roll').value.trim();
  const rollNum = parseInt(rollInput, 10);
  const base = parseFloat(document.getElementById('baseDamage').value);
  const type = document.getElementById('damageType').value;
  const isMelee = document.getElementById('meleeCheckbox').checked;
  const buildModInput =
    parseFloat(document.getElementById('buildModifier').value) || 0;

  if (isNaN(rollNum) || rollNum < 1 || rollNum > 100) {
    return alert('Podaj rzut między 1 a 100 (0 jest błędem).');
  }
  if (isNaN(base) || base <= 0) {
    return alert('Podaj poprawną wartość obrażeń bazowych (>0).');
  }

  const reversedRoll = reverseRollValue(rollNum);
  if (isNaN(reversedRoll) || reversedRoll < 1 || reversedRoll > 100) {
    return alert('Po odwróceniu rzut dał nieprawidłowy wynik: ' + reversedRoll);
  }

  const loc = hitLocations.find(
    (l) => reversedRoll >= l.range[0] && reversedRoll <= l.range[1]
  );
  if (!loc)
    return alert('Nie udało się przypisać lokacji dla odwróconego rzutu.');

  let armor =
    Number(armorValues[loc.name][type] || 0) + Number(buildModInput || 0);
  if (isMelee) armor = armor / 2;

  const reduced = Math.max(base - armor, 0);
  const finalDamage = reduced * loc.multiplier;
  const finalDamageRounded = roundUpHalf(finalDamage);

  // Wyświetlenie tylko końcowego dmg + info z boku
  document.getElementById('result').innerHTML = `
    <div class="result-box" style="display:flex; gap:20px; flex-wrap:wrap;">
      <div>
        <h2 style="font-size:2em;">Końcowe obrażenia: ${finalDamageRounded}</h2>
      </div>
      <div style="font-size:0.9em; color:#aaa;">
        <p>Rzut: ${rollNum} → ${reversedRoll}</p>
        <p>Lokacja: ${loc.name} ×${loc.multiplier}</p>
        <p>Pancerz (${type})${isMelee ? ' (melee /2)' : ''}: ${armor.toFixed(
    2
  )}</p>
        <p>Build Modifier: ${buildModInput}</p>
        <p>Obrażenia po pancerzu: ${reduced.toFixed(2)}</p>
      </div>
    </div>
  `;
});

/* -------------------- Init -------------------- */
renderArmorInputs();
renderPresets();
