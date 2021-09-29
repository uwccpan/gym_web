const countEl = document.querySelector("#count");
const nameEl = document.getElementById("name");
const heightEl = document.getElementById("height");
const weightEl = document.getElementById("weight");
const resultEl = document.querySelector(".result");
console.log(countEl);

function calc() {

    if(heightEl.value == '' || weightEl.value == ''){
        resultEl.textContent = "數值不能為空";
    }
    let height = parseFloat(heightEl.value);
    let weight = parseFloat(weightEl.value);

    console.log(height, typeof(height));
    // isNan ==> not a number
    if(isNaN(height) || isNaN(weight)) {
        alert("Wrong Number");
        return;
    }
    let bmi = weight/(height/100)**2;

    console.log(nameEl.value, heightEl.value, weightEl.value, bmi.toFixed(2));

    resultEl.textContent="BMI:" + bmi.toFixed(2);
}