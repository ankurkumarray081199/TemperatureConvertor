let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

let getSelect1 = document.getElementById("select1");
let getSelect2 = document.getElementById("select2");
var option1 = "celsius";
var option2 = "fahrenheit";

function temp(a, b) {
  getSelect1.addEventListener("change", function () {
    let value1 = this.value;
    a = value1;

    if (a == "celsius" && b == "fahrenheit") {
      input1.addEventListener("input", function () {
        let c = this.value;
        let f = (c * 9) / 5 + 32;
        if (!Number.isInteger(f)) {
          f = f.toFixed(4);
        }
        input2.value = f;
      });
    } else if (a == "celsius" && b == "kelvin") {
      input1.addEventListener("input", function () {
        let c = this.value;
        let k = 2 * c + 273.15;
        if (!Number.isInteger(k)) {
          k = k.toFixed(4);
        }
        input2.value = k;
      });
    } else if (a == "fahrenheit" && b == "celsius") {
      input1.addEventListener("input", function () {
        let f = this.value;
        let c = ((f - 32) * 5) / 9;
        if (!Number.isInteger(c)) {
          c = c.toFixed(4);
        }
        input2.value = c;
      });
    } else if (a == "fahrenheit" && b == "kelvin") {
      input1.addEventListener("input", function () {
        let f = this.value;
        let k = ((2 * f - 32) * 5) / 9 + 273.15;
        if (!Number.isInteger(k)) {
          k = k.toFixed(4);
        }
        input2.value = k;
      });
    } else if (a == "kelvin" && b == "celsius") {
      input1.addEventListener("input", function () {
        let k = this.value;
        let c = 2 * k - 273.15;
        if (!Number.isInteger(c)) {
          c = c.toFixed(4);
        }
        input2.value = c;
      });
    } else if (a == "kelvin" && b == "fahrenheit") {
      input1.addEventListener("input", function () {
        let k = this.value;
        let f = ((2 * k - 273.15) * 9) / 5 + 32;
        if (!Number.isInteger(f)) {
          f = f.toFixed(4);
        }
        input2.value = f;
      });
    }
  });

  getSelect2.addEventListener("change", function () {
    let value2 = getSelect2.value;
    b = value2;

    if (b == "fahrenheit" && a == "celsius") {
      input2.addEventListener("input", function () {
        let f = this.value;
        let c = ((f - 32) * 5) / 9;
        if (!Number.isInteger(c)) {
          c = c.toFixed(4);
        }
        input1.value = c;
      });
    } else if (b == "fahrenheit" && a == "kelvin") {
      input2.addEventListener("input", function () {
        let f = this.value;
        let k = ((2 * f - 32) * 5) / 9 + 273.15;
        if (!Number.isInteger(k)) {
          k = k.toFixed(4);
        }
        input2.value = k;
      });
    } else if (b == "celsius" && a == "kelvin") {
      input2.addEventListener("input", function () {
        let c = this.value;
        let k = 2 * c + 273.15;
        if (!Number.isInteger(k)) {
          k = k.toFixed(4);
        }
        input2.value = k;
      });
    } else if (b == "celsius" && a == "fahrenheit") {
      input2.addEventListener("input", function () {
        let c = this.value;
        let f = (c * 9) / 5 + 32;
        if (!Number.isInteger(f)) {
          f = f.toFixed(4);
        }
        input2.value = f;
      });
    } else if (b == "kelvin" && a == "celsius") {
      input2.addEventListener("input", function () {
        let k = this.value;
        let c = 2 * k - 273.15;
        if (!Number.isInteger(c)) {
          c = c.toFixed(4);
        }
        input2.value = c;
      });
    } else if (b == "kelvin" && a == "fahrenheit") {
      input2.addEventListener("input", function () {
        let k = this.value;
        let f = ((2 * k - 273.15) * 9) / 5 + 32;
        if (!Number.isInteger(f)) {
          f = f.toFixed(4);
        }
        input2.value = f;
      });
    }
  });
}
temp(option1, option2);
// let data = false;
// data ? console.log("first statement") : console.log("second statement");

// const y = [];
// console.log(typeof y);
// let ans = 6 / "3";
// console.log(typeof ans);
// let a = new Object();
// a = {
//   name: "ankur",
//   rollno: 191,
// };
// console.log(a);

// let number = 7;
// while (number > 0) {
//   if (number <= 5) {
//     number--;
//     console.log('if'+number)
//     continue;
    
//   }
//   console.log(number);
//   number--;
// }
// for(let i=1; ;i++) { 
//   let num1= i*5; 
//   console.log(num1) ;
//   if(num1>=30) break;
//  }

 