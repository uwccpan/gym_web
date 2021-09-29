let numbers = [];

const btnEl = document.querySelector(".btn-el");
const showTimeEl = document.querySelector(".show-time");
const tableEl = document.getElementById("table-el");
const countEl = document.getElementById("count-el");

// tableEl.style.display = "none";
console.log(countEl);


btnEl.addEventListener("click", function () {
    const count = countEl.value;
    tableEl.innerHTML = "";
    console.log("count:" + count);
    for (let i = 0; i < count; i++) {
        insertRow(i);
    }
});

function insertRow(rowIndex = 0) {
    numbers = getLottoNumber(1, 49);
    const row = tableEl.insertRow(rowIndex);
    for (let i =0; i < numbers.length; i++) {
        if(numbers[i]<10) {
            numbers[i] = "0" + numbers[i];
        }
        row.insertCell(i).textContent = numbers[i];
    }
}

function getLottoNumber(start, end, maxCount = 6, specialNumber = true) {
    let numbers = [];
    let count = 0;
    while(true){
        const number = getRandNumber(start, end);
        if (!numbers.includes(number)){
            numbers.push(number);
            if(++count == maxCount) {
                break;
            }
        }
    }
    numbers.sort(function(a,b) {
        return a - b;

    });
    // 特別號
    if (specialNumber) {
        numbers.push(getRandNumber(start, end));
    }
    console.log(numbers);
    return numbers;

}

function getRandNumber(start, end) {
    return Math.floor(Math.random()*(end-start+1)) + start;
}


function getTime() {
    let date = new Date();
    let day = date.toISOString().substring(0, 10);
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    showTimeEl.textContent = `${day} ${hour}:${min}:${sec}`;

    setTimeout('getTime()', 1000);

    console.log(date.toISOString());
}