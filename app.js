const fixedArr = []; console.log(fixedArr);
const dailyArr = []; console.log(dailyArr);

function inputMaker(type, nameID, placeholder, expenseType) {
  // create + grab elements
  const form = document.querySelector('form');
  const div = document.createElement("div");
  const label = document.createElement("lable");
  const input = document.createElement("input");
  
  // create labels
  label.setAttribute("for", nameID);
  label.textContent = nameID;
  // create inputs
  input.setAttribute("type", type);
  input.setAttribute("name", nameID);
  input.setAttribute("id", nameID);
  input.setAttribute("value", "");
  input.setAttribute("placeholder", placeholder);
  
  // nest elements within eachother
  form.appendChild(div);
  div.appendChild(label);
  label.appendChild(input);
  
  // push a new item into the appropriate array based on expenseType
  if(expenseType === 'fixed'){
    fixedArr.push(nameID);
  } else if (expenseType === 'daily') {
    dailyArr.push(nameID);
  }
};

inputMaker('number', 'flight', 'you walking?', 'fixed');
inputMaker('number', 'gear', 'need something before?', 'fixed');
inputMaker('number', 'food', 'you eat, yeah?', 'daily');
inputMaker('number', 'activities', '', 'daily');
inputMaker('number', 'accomedations', '', 'daily');
inputMaker('number', 'transportation', '', 'daily');
inputMaker('number', 'nights', '', 'daily');

//This needs to be below inputMaker calls and above the functions that use it?
const allCategoriesArr = dailyArr.concat(fixedArr); console.log(allCategoriesArr);

// create a div to show the total per day + append to the body of the document (after form inputs)
const bodyDiv = document.createElement('div');
document.body.appendChild(bodyDiv);



const mapCategoryArr = allCategoriesArr.map(cat => {
  makeEvtListner(document.querySelector(`#${cat}`))
});

function makeEvtListner(ele){
  ele.addEventListener("input", updateValue(ele));

  function updateValue() {
    // console.log(ele.name); //*if ele.name is present in the daily arr, treat as fixed expense. Else, treat as daily.
    if(dailyArr.includes(ele.name)){
      // console.log('daily category')
    } else if (fixedArr.includes(ele.name)) {
      // console.log('fixed category')
    } else {
      throw Error ('issue in function updateValue?')
      alert('issue in function updateValue')
    }
  };
};