let firstRow = document.getElementById("primary");
let secondRow = document.getElementById("secondary");
let thirdRow = document.getElementById("tertiary");

let primaryCharacters = [1, 2, 3, 4, 5];
let secondaryCharacters = [6, 7, 8, 9, 10, 11];
let tertiaryCharacters = [12, 13, 14, 15, 16, 17];

function* generador() {
  let i = 0;
  yield primaryCharacters[i];
  i++;
  yield primaryCharacters[i];
  i++;
  yield primaryCharacters[i];
  i++;
  yield primaryCharacters[i];
  i++;
  yield primaryCharacters[i];
  return;
}

const gen1 = generador();

const clickPrimary = () => {
  let value = gen1.next().value;
  if (value === undefined) {
    return;
  }
  fetch(`https://swapi.dev/api/people/${value}/`)
    .then((response) => response.json())
    .then((data) => {
      firstRow.innerHTML += `<div class="col-12 col-md-6 col-lg-4">
      <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">
          <div class="timeline-icon-red"><i class="fa fa-archive" aria-hidden="true"></i></div>
          <div class="timeline-text">
              <h6>${data.name}</h6>
              <p>Estatura: ${data.height} cm. Peso ${data.mass} kg.</p>
          </div>
      </div>
      </div>`;
    });
};

function* generador2() {
  let i = 0;
  yield secondaryCharacters[i];
  i++;
  yield secondaryCharacters[i];
  i++;
  yield secondaryCharacters[i];
  i++;
  yield secondaryCharacters[i];
  i++;
  yield secondaryCharacters[i];
  i++;
  yield secondaryCharacters[i];
  return;
}

const gen2 = generador2();

const clickSecondary = () => {
  let value = gen2.next().value;
  if (value === undefined) {
    return;
  }
  fetch(`https://swapi.dev/api/people/${value}/`)
    .then((response) => response.json())
    .then((data) => {
      secondRow.innerHTML += `<div class="col-12 col-md-6 col-lg-4">
        <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">
            <div class="timeline-icon-green"><i class="fa fa-archive" aria-hidden="true"></i></div>
            <div class="timeline-text">
                <h6>${data.name}</h6>
                <p>Estatura: ${data.height} cm. Peso ${data.mass} kg.</p>
            </div>
        </div>
        </div>`;
    });
};

function* generador3() {
  let i = 0;
  yield tertiaryCharacters[i];
  i++;
  yield tertiaryCharacters[i];
  i++;
  yield tertiaryCharacters[i];
  i++;
  yield tertiaryCharacters[i];
  i++;
  yield tertiaryCharacters[i];
  i++;
  yield tertiaryCharacters[i];
  return;
}

const gen3 = generador3();

const clickTertiary = () => {
  let value = gen3.next().value;
  if (value === undefined) {
    return;
  }
  fetch(`https://swapi.dev/api/people/${value}/`)
    .then((response) => response.json())
    .then((data) => {
      thirdRow.innerHTML += `<div class="col-12 col-md-6 col-lg-4">
        <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">
            <div class="timeline-icon-blue"><i class="fa fa-archive" aria-hidden="true"></i></div>
            <div class="timeline-text">
                <h6>${data.name}</h6>
                <p>Estatura: ${data.height} cm. Peso ${data.mass} kg.</p>
            </div>
        </div>
        </div>`;
    });
};
