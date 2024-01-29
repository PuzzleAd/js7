;

// function openAlert() {
//     alert('Hello World!');
// }

// button.addEventListener("click", openAlert);



// function containerChanger(){
//     const main_container = document.getElementsByTagName("main")[0];
//     const container = document.createElement("div");
//     main_container.appendChild(container);
//     let width = prompt("Enter container width");
//     let height = prompt("Enter container height");
//     let backgrounColor = prompt("Enter container backgorund color");

//     container.style.width = `${width}px`;
//     container.style.height = `${height}px`;
//     container.style.backgroundColor = backgrounColor;
// }

// containerChanger();



// const card = document.getElementsByClassName("container")[0];

// function colorChanger(){
//     card.style.backgroundColor = "blue";
// }



// button.addEventListener("click", () => {
//     window.location.reload();
// });

// button.addEventListener("click", () => {
//     console.log(`value: ${input.value}`);
//     card.innerHTML = `<h1>${input.value}</h1>`;
// })


// const button = document.getElementById("button");
// const input = document.getElementById("input");
// const card = document.getElementsByClassName("card")[0];

// function calculator(num1, num2) {
//     card.innerHTML = num1 / num2;
// }

// let num1 = prompt("Enter First Number:");
// let num2 = prompt("Enter Second Number:");

// calculator(num1, num2);



// let isLogedin = false;
// const button = document.getElementById("button");
// const input = document.getElementsByClassName("input");
// const card = document.getElementsByClassName("card")[0];

// button.addEventListener("click", function(){
//     if (isLogedin) {
//         alert("You are already logged in!!");
//     } else {  
//         card.innerHTML = `<h1>${input[0].value}</h1> <h1>${input[1].value}</h1> <h1>${input[2].value}</h1>`;
//         setTimeout(() => {
//             alert("You are registered succesfully!!");
//         }, 3000);
//         isLogedin = true;
//     }
// })


// const button = document.getElementById("button");
// const firstName = document.getElementsByClassName("firstname")[0];
// const card = document.getElementsByClassName("card")[0];
// const error = document.getElementById("error");

// button.addEventListener("click", () => {
//     let input_value = firstName.value;
//     if (input_value === "") {
//         error.textContent = "Write something...";
//     } else {
//         window.location.reload();
//     }
// })



// const first = document.getElementById("first_container");
// const second = document.getElementById("second_container");
// const button = document.getElementById("button");
// const firstName = document.getElementsByClassName("firstname")[0];
// const error = document.getElementById("error");

// button.addEventListener("click", () => {
//     let input_value = firstName.value;
//     if (input_value === "") {
//         error.innerHTML = "Write something...";
//         error.style.color = "blue";
//         error.style.display = "block";
//     } else {
//         first.style.display = "none";
//         second.style.display = "block";
//         const p1 = document.createElement("p");
//         const p2 = document.createElement("p");
//         second.appendChild(p1);
//         second.appendChild(p2);
//         p1.style.color = "green";
//         p1.textContent = "You are succesfully registered!!";
//         p2.style.color = "gold";
//         p2.textContent = `Your first name is ${input_value}`;
//     }
// })


const rating_container = document.getElementsByClassName("rating_container")[0];
const result_container = document.getElementsByClassName("result_container")[0];
const stars_container = document.getElementById("stars_container");
const out_of = document.getElementById("out_of");
const submit = document.getElementById("submit");


let stars = [];
let index = -1;

for (let i = 0; i < 5; i++) {
    const star = document.createElement("button");
    star.textContent = `${i + 1}`;
    stars.push(star);
    stars_container.appendChild(star);
    star.addEventListener("click", () => highlightButton(star));
    console.log(stars);

    
}

function highlightButton(clickedButton) {
    stars.forEach(button => {
      button.classList.remove('highlighted');
    });

    clickedButton.classList.add('highlighted');
    index = stars.indexOf(clickedButton);
  }


submit.addEventListener("click", () => {
    rating_container.style.display = "none";
    result_container.style.display = "block";
    const p = document.createElement("p");
    out_of.appendChild(p);
    p.textContent = `You selected ${index + 1} out of 5`;
})

