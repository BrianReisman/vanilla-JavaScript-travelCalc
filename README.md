# Travel Calc in Vanilla JavaScript

## Stack
- HTML
- CSS
- JavaScript [sans libraries and frameworks]

## 
I left the index.html to a barebones 14 lines so all elements would be created in JavaScript

## Change log
11.14.2020

refactored:
makeEvtListner(flight, 'flight');
makeEvtListner(food, 'food');
makeEvtListner(activities, 'activities');
makeEvtListner(accomedations, 'accomedations');
makeEvtListner(transportation, 'transportation');
makeEvtListner(nights, 'nights');

into:
const categoryArr = [flight, food, activities, accomedations, transportation, nights];
const mapCategoryArr = catArr.map(cat => {
  makeEvtListner(cat, cat.name)
});

11.16.2020
Testing managing state by adding a state property to the constructor function

11.18.2020
Added conditional logic to the makeEvtListner function so that the callback added to each category would be based on whether a cost was daily or fixed.