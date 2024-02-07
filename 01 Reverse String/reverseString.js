// The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay 
// of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of 
// 2 seconds before reversing the string. The reversed string should then be printed as output.

let input = document.getElementById("string-input");
let output = document.getElementById("output");
let reversebtn = document.getElementById("reversebtn");

reversebtn.addEventListener("click", () => {
    if (input.value == "") {
        output.innerText = `Please Enter a value`;
        output.style.color = "red";
        return;
    }
    setTimeout(() => {
        stringChArray = input.value.split("");
        finalOutput = stringChArray.reverse().toString().replaceAll(",", "");
        console.log(finalOutput);
        output.innerText = `reverse : ${finalOutput}`;
        output.style.color = "green";
    }, 2000);
})
