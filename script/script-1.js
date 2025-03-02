let infButton = document.querySelector(".infinity-btn");

if (infButton){

infButton.addEventListener("click", function () {
    let hexaRandom = Math.floor(Math.random() * 16777215);
    let hexaColor = "#" + hexaRandom.toString(16);

    document.body.style.background = hexaColor;
})
}

let calendar = document.querySelector(".calendar");

if (calendar) {
calendar.addEventListener("click", function () {
    window.location.href = "./index1.html";
})
}


let completeBtn = document.querySelectorAll('.complete-btn');


completeBtn.forEach(function(button){
    button.addEventListener("click",function(){
        let num1 = document.getElementById('number-1');
        let convNum1 = parseInt(num1.innerText);

        let num2 = document.getElementById('number-2');
        let convNum2 = parseInt(num2.innerText);
        let history = document.querySelector(".history")

        alert("Board Updated Successfully!")
        convNum1--;
        convNum2++;
        
        num1.innerText = convNum1;
        num2.innerText = convNum2;
        button.disabled = true;

        if(convNum1 === 0) {
            alert("Congratulations! You have completed all the modules.")
        }
let p = document.createElement("p");
p.classList.add("font-bold", "mt-5");

let parentComplete = button.closest('.parent-complete').querySelector(".title").innerText;
p.innerText = `You have completed the ${parentComplete} ${time}` 
history.appendChild(p)

let clearHistory = document.querySelector(".clear-history");
clearHistory.addEventListener("click", function () {
    history.innerHTML = " ";
})




    })  //forEach end
})

let backBtn = document.querySelector(".back-btn");

if (backBtn){
backBtn.addEventListener("click", function () {
    window.location.href = "./index.html";
    console.log("hi")
})
}

document.querySelector(".calendar-date").innerText = date;
