document.addEventListener("DOMContentLoaded", function() {
    const saveBtn = document.getElementById("save-btn");
    const scheduleList = document.getElementById("schedule-list");

    // Load schedule data when the page loads
    loadSchedule();

    saveBtn.addEventListener("click", function() {
        const inputs = scheduleList.querySelectorAll("input");
        let scheduleData = [];

        // Get existing schedule data from localStorage
        const existingData = JSON.parse(localStorage.getItem('scheduleData')) || [];

        inputs.forEach((input, index) => {
            // Push new data or existing data if available
            scheduleData.push(input.value || existingData[index] || "");
            input.value = ""; // Clear input field after saving
        });

        // Save updated schedule data to localStorage
        localStorage.setItem('scheduleData', JSON.stringify(scheduleData)); 
        loadSchedule();
        console.log("Schedule Data Saved:", scheduleData);
    });

    // Function to load schedule data from localStorage
    function loadSchedule() {
        const scheduleData = JSON.parse(localStorage.getItem('scheduleData'));

        if (scheduleData) {
            const scheduleItems = document.querySelectorAll('#schedule-list li input');

            scheduleItems.forEach((input, index) => {
                input.value = scheduleData[index] || "";
            });
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const addGoalBtn = document.getElementById("addGoalBtn");
    const goalInput = document.getElementById("goalInput");
    const goalList = document.getElementById("goalList");

    // Function to add a new goal
    const addGoal = () => {
        const goalText = goalInput.value.trim();
        if (goalText !== "") {
            const goalItem = document.createElement("li");
            goalItem.innerHTML = `
                <input type="checkbox">
                <label>${goalText}</label>
            `;
            goalList.appendChild(goalItem);
            goalInput.value = ""; // Clear the input field after adding the goal
        } else {
            alert("Please enter a valid goal."); // Notify the user if the input is empty
        }
    };

    // Event listener for adding a new goal
    addGoalBtn.addEventListener("click", addGoal);

});

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const day = document.querySelector(".calendar-dates");

const currdate = document.querySelector(".calendar-current-date");

const prenexIcons = document.querySelectorAll(".calendar-navigation span");

// Array of month names
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

// Function to generate the calendar
const manipulate = () => {

    // Get the first day of the month
    let dayone = new Date(year, month, 1).getDay();

    // Get the last date of the month
    let lastdate = new Date(year, month + 1, 0).getDate();

    // Get the day of the last date of the month
    let dayend = new Date(year, month, lastdate).getDay();

    // Get the last date of the previous month
    let monthlastdate = new Date(year, month, 0).getDate();

    // Variable to store the generated calendar HTML
    let lit = "";

    // Loop to add the last dates of the previous month
    for (let i = dayone; i > 0; i--) {
        lit +=
            `<li class="inactive">${monthlastdate - i + 1}</li>`;
    }

    // Loop to add the dates of the current month
    for (let i = 1; i <= lastdate; i++) {

        // Check if the current date is today
        let isToday = i === date.getDate()
            && month === new Date().getMonth()
            && year === new Date().getFullYear()
            ? "active"
            : "";
        lit += `<li class="${isToday}">${i}</li>`;
    }

    // Loop to add the first dates of the next month
    for (let i = dayend; i < 6; i++) {
        lit += `<li class="inactive">${i - dayend + 1}</li>`
    }

    // Update the text of the current date element 
    // with the formatted current month and year
    currdate.innerText = `${months[month]} ${year}`;

    // update the HTML of the dates element 
    // with the generated calendar
    day.innerHTML = lit;
}

manipulate();

// Attach a click event listener to each icon
prenexIcons.forEach(icon => {

    // When an icon is clicked
    icon.addEventListener("click", () => {

        // Check if the icon is "calendar-prev"
        // or "calendar-next"
        month = icon.id === "calendar-prev" ? month - 1 : month + 1;

        // Check if the month is out of range
        if (month < 0 || month > 11) {

            // Set the date to the first day of the 
            // month with the new year
            date = new Date(year, month, new Date().getDate());

            // Set the year to the new year
            year = date.getFullYear();

            // Set the month to the new month
            month = date.getMonth();
        }

        else {

            // Set the date to the current date
            date = new Date();
        }

        // Call the manipulate function to 
        // update the calendar display
        manipulate();
    });
});