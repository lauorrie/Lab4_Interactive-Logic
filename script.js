
let selectedMood = "";
let selectedPlan = "";

// Select a mood
const moodButtons = document.querySelectorAll(".mood");

moodButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        selectedMood = button.dataset.mood;

        moodButtons.forEach(function(b) {
            b.classList.remove("selected");
        });

        button.classList.add("selected");
    });
});

// Select a plan
const planButtons = document.querySelectorAll(".plan");

planButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        selectedPlan = button.dataset.plan;

        planButtons.forEach(function(b) {
            b.classList.remove("selected");
        });

        button.classList.add("selected");
    });
});


// Generate recommendation
document.getElementById("submit").addEventListener("click", function() {

    console.log("Mood:", selectedMood);
    console.log("Plan:", selectedPlan);

    if (selectedMood === "" || selectedPlan === "") {
        alert("Please answer both questions!");
        return;
    }

    let title = "";
    let description = "";

    if (selectedMood === "happy") {
        if (selectedPlan === "out") {
            title = "A Little Café Date ☕";
            description = "Treat yourself to a new café!";
        } else {
            title = "Cozy Movie Night 🍿";
            description = "Stay in and enjoy a movie!";
        }
    }
    
    else if (selectedMood === "tired") {
        if (selectedPlan === "out") {
            title = "A Little Boba Run 🧋";
            description = "Low energy? Treat yourself to a drink and enjoy a change of scenery without doing too much.";
        } else {
            title = "Time to Recharge 🌙";
            description = "Stay cozy, take a break, and give yourself some well-deserved rest.";
        }
    }

    else if (selectedMood === "stressed") {
        if (selectedPlan === "out") {
            title = "Take a Little Walk 🌿";
            description = "Get some fresh air and relax.";
        } else {
            title = "Unwind with Music 🎧";
            description = "Put on your favorite playlist.";
        }
    }
    else {
        title = "Something Went Wrong";
        description = "Please restart the quiz.";
    }

    document.getElementById("result-title").textContent = title;
    document.getElementById("result-description").textContent = description;

    document.getElementById("result").hidden = false;
});


// Reset the quiz
document.getElementById("reset").addEventListener("click", function() {
    selectedMood = "";
    selectedPlan = "";

    document.querySelectorAll(".selected").forEach(function(button) {
        button.classList.remove("selected");
    });

    document.getElementById("result").hidden = true;
});
