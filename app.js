const form = document.querySelector('form');

//* blank obj to initialize 'state'
const stateObj = {
  flight: null,
  food: null,
  activities: null,
  accomedations: null,
  transportation: null,
  nights: null
}

function inputMaker(type, nameID, placeholder) {
  // create elements
  const div = document.createElement("div");
  const label = document.createElement("lable");
  const input = document.createElement("input");

  // set attributes and content
  label.setAttribute("for", nameID);
  label.textContent = nameID;
  input.setAttribute("type", type);
  input.setAttribute("name", nameID);
  input.setAttribute("id", nameID);
  input.setAttribute("value", "");
  input.setAttribute("placeholder", placeholder);
  // input.setAttribute("oninput", 'logStat()');

  // nest elements within eachother
  label.appendChild(input);
  div.appendChild(label);
  form.appendChild(div);

}
// const evtListner = document.querySelector(`#${nameID}`);
// evtListner.addEventListener('input', updateValue);

inputMaker('number', 'flight', 'you walking?');
inputMaker('number', 'food', 'you eat yeah?');
inputMaker('number', 'activities', '');
inputMaker('number', 'accomedations', '');
inputMaker('number', 'transportation', '');
inputMaker('number', 'nights', '');


function makeEvtListner(varName, varNameAsString){
  varName.addEventListener("input", updateValue);
  function updateValue() {
    console.log(varName.value);
    stateObj[varNameAsString] = varName.value; //doesn't work with . notation varNameAsString works if argument is a string
    console.log(stateObj);
  }
  console.log(varName);
}
// makeEvtListner(flight, 'flight'); //need both string for [] object notation var for evt listener
// makeEvtListner(food, 'food'); //need both string for [] object notation var for evt listener
// makeEvtListner(activities, 'activities'); //need both string for [] object notation var for evt listener
// makeEvtListner(accomedations, 'accomedations'); //need both string for [] object notation var for evt listener
// makeEvtListner(transportation, 'transportation'); //need both string for [] object notation var for evt listener
// makeEvtListner(nights, 'nights'); //need both string for [] object notation var for evt listener

// //TODO: make array of all catergories. GOAL: mapping over a master array THIS THIS WORKS, I htink I can nest makeEvtListner within inputMaker
// const catArr = ['flight','food','activities','accomedations','transportation','nights'];
const catArr = [flight,food,activities,accomedations,transportation,nights];
const mapCatArr = catArr.map(cat => {
  makeEvtListner(cat, cat.name)
});



              // function logStat(e){
              //   // console.log(e);
              //   // const food = document.querySelector('#food');
              //   // console.log(activities.value);
              //   // const input = document.getElementById('food').value;
              // // console.log(input)
              // }