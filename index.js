document.addEventListener("DOMContentLoaded", function() {
// NORMAL SIZE TO FULL SIZE CALCULATOR TOGGLER
document.querySelectorAll('#expand').forEach(button => {
    button.addEventListener('click', toggleTrackpad);
});
function toggleTrackpad() {
    let trackpad = document.getElementById("trackpad");
    let expandedTrackpad = document.getElementById("trackpad-expanded");

    if (trackpad.classList.contains("hidden")) {
        trackpad.classList.remove("hidden");
        expandedTrackpad.classList.add("hidden");
    } else {
        trackpad.classList.add("hidden");
        expandedTrackpad.classList.remove("hidden");
    }
}

//Normal Size Calc
var num = document.getElementsByClassName("num");
for (var i = 0; i < num.length; i++) {
    num[i].addEventListener("click", function() {
        clearError();
        var value = this.innerHTML;
        var screen = document.getElementById("screen");
        screen.innerHTML += value;
    });
}

var remove = document.getElementById("remove");
remove.addEventListener("click", function() {
    clearError();
    var screen = document.getElementById("screen");
    screen.innerHTML = screen.innerHTML.slice(0, -1);
});

var clear = document.getElementById("clear");
clear.addEventListener("click", function() {
    var screen = document.getElementById("screen");
    screen.innerHTML = "";
});

var sign = document.getElementsByClassName("sign");
for (var i = 0; i < sign.length; i++) {
    sign[i].addEventListener("click", function() {
        var value = this.innerHTML;
        var screen = document.getElementById("screen");
        screen.innerHTML += value;
    });
}

var equalbtn = document.getElementById("equal");
    if (equalbtn) {
        equalbtn.addEventListener("click", ()=>{
            calculate();
        });
    }


//Full Size Calc
var num = document.getElementsByClassName("num-h");
for (var i = 0; i < num.length; i++) {
    num[i].addEventListener("click", function() {
        clearError();
        var value = this.innerHTML;
        var screen = document.getElementById("screen");
        screen.innerHTML += value;
    });
}

var remove = document.getElementById("remove-h");
remove.addEventListener("click", function() {
    clearError();
    var screen = document.getElementById("screen");
    screen.innerHTML = screen.innerHTML.slice(0, -1);
});


var clear = document.getElementById("clear-h");
clear.addEventListener("click", function() {
    var screen = document.getElementById("screen");
    screen.innerHTML = "";
});

var sign = document.getElementsByClassName("sign-h");
for (var i = 0; i < sign.length; i++) {
    sign[i].addEventListener("click", function() {
        var value = this.innerHTML;
        var screen = document.getElementById("screen");
        screen.innerHTML += value;
    });
}
var equalbtn = document.getElementById("equal-h");
    if (equalbtn) {
        equalbtn.addEventListener("click", ()=>{
            calculate();
        });
    }

var exp=document.getElementsByClassName("exp");
for (var i = 0; i < exp.length; i++) {
    exp[i].addEventListener("click", function() {
        clearError();
        var value = this.innerHTML;
        var screen = document.getElementById("screen");
        screen.innerHTML += value;
    });
}


    
//Main Calcuation Function
function calculate() {
    var screen = document.getElementById("screen");
    var expression = screen.innerText.trim();
    console.log("Calculate function called:", expression);


    if (expression === "") {
        return; // If no expression, do nothing
    }
    

    expression = expression.replace(/×/g, '*').replace(/÷/g, '/').replace(/%/g, '/100').replace(/π/g, 'Math.PI').replace(/√/g, 'Math.sqrt').replace(/log/g, 'Math.log').replace(/e/g, 'Math.E').replace(/\^/g,'**');
    expression = expression.replace(/sin/g, 'Math.sin').replace(/cos/g, 'Math.cos').replace(/tan/g, 'Math.tan');

    if (expression.includes("!")) {
        var result = calculateFactorial(expression);
        screen.innerText = result;
    } else {
    try {
        var result = eval(expression);
        screen.innerText = result;
    } catch (error) {
        screen.innerText = "Error";
        
    }
} 
} 
var factorialBtn = document.getElementById("factorial");
if (factorialBtn) {
    factorialBtn.addEventListener("click", function() {
        clearError();
        var screen = document.getElementById("screen");
        var expression = screen.innerText.trim();
        if (expression.endsWith("!")) {
            return;
        }
        screen.innerHTML += "!";
    });
}

    // Calculate factorial function
    function calculateFactorial(expression) {
        var num = parseInt(expression);
        if (isNaN(num)) {
            return "Error";
        }
        if (num < 0) {
            return "Error";
        }
        if (num === 0 || num === 1) {
            return 1;
        }
        var result = 1;
        for (var i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }



    
});
function clearError() {
    var screen = document.getElementById("screen");
    if (screen.innerText === "Error") {
        screen.innerText = "";
    }
}
