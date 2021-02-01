//var weight = document.getElementById("lbs").onclick;
//var workout = document.getElementById("workouts").value;
//var calories = document.getElementById("kgs").onclick;


//this registers the button click events when the
//page loads
window.onload = function() {
    //register button events when the page loads
    document.getElementById("lbs-to-kgs").onclick = lbsToKgs;
    document.getElementById("workout-to-met").onclick = workoutToMet;
    document.getElementById("calc-calories").onclick = calculateCalories;

}

//convert lbs to kgs from the input fields in the
//page and send output to the console
function lbsToKgs() {
    let numberOfLbs = document.getElementById("lbs").value;
    if (numberOfLbs != "") {
        let resultKgs = numberOfLbs * 0.453592;
        resultKgs = resultKgs.toFixed(2);
        output(numberOfLbs + " pounds is " + resultKgs + " kilograms");
        document.getElementById("kgs").value = resultKgs;
    } else {
        output("Pounds field is empty!");
    }
}

//determine MET value for exercises in the dropdown
//list and send output to the console
function workoutToMet() {
    let selectWorkout = document.getElementById("workouts").value;
    let workout = "";
    let numMET = 0;

    if (selectWorkout != "0") {
        if (selectWorkout == "1") {
            workout = "General bicycling";
            numMET = 7.5;
        } else if (selectWorkout == "2") {
            workout = "Health club exercise";
            numMET = 5.5;
        } else if (selectWorkout == "3") {
            workout = "General aerobic";
            numMET = 7.3;
        } else if (selectWorkout == "4") {
            workout = "Crab fishing";
            numMET = 4.5;
        } else if (selectWorkout == "5") {
            workout = "Making bed";
            numMET = 3.3;
        } else if (selectWorkout == "6") {
            workout = "Chopping wood";
            numMET = 4.5;
        } else if (selectWorkout == "7") {
            workout = "Football";
            numMET = 8.0;
        } else if (selectWorkout == "8") {
            workout = "Tennis";
            numMET = 7.3;
        }
        numMET = numMET.toFixed(1);
        output(workout + " has a MET value of " + numMET);
        document.getElementById("met").value = numMET;
    } else {
        output("MET value not found!");
    }
    return numMET;
}

//Calculates the calories burned per minute, given
//the inputs from the page and sends the output
//to the console
function calculateCalories() {
    let inputMET = document.getElementById("met").value;
    let inputWeight = document.getElementById("kgs").value;

    console.log(Number.isNaN(inputMET));
    console.log(Number.isNaN(inputWeight));

    if (inputMET != "" && inputWeight != "") {
        let burnCal = (inputMET * 3.5 * inputWeight) / 200;
        burnCal = burnCal.toFixed(2);
        output("MET " + inputMET + ", weight " + inputWeight + " - burns " + burnCal + " calories per minute");
        return burnCal;
    } else if (inputMET == "") {
        output("MET value not found!");
    } else if (inputWeight == "") {
        output("Weight value not found!");
    } else {
        output("It is invalid value!");
    }
}

//this function takes the provided message and prints
//it to the console on the page
function output(message) {
    let console = document.getElementById("console");
    console.innerHTML = message + "\n" + console.innerHTML;
}