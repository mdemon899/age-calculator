// Selecting Variables from DOM
const dateInput = document.querySelector("#date_input");
const calculateBtn = document.querySelector("#calculateBtn");
const result = document.querySelector("#result");
dateInput.max = new Date().toISOString().split("T")[0];

// Adding Event Listener For Calculator Button
calculateBtn.addEventListener("click", () => {
  // Getting Dates From Input Field
  let inputDate = new Date(dateInput.value);
  let inpDate = inputDate.getDate();
  let inpMonth = inputDate.getMonth() + 1;
  let inpYear = inputDate.getFullYear();

  // Creating Today Dates
  let today = new Date();
  let currentDate = today.getDate();
  let currentMonth = today.getMonth() + 1;
  let currentYear = today.getFullYear();

  //   Calculating Dates Between Dates Input And Today Date
  let calDate, calMonth, calYear;
  calYear = currentYear - inpYear;

  if (currentMonth >= inpMonth) {
    calMonth = currentMonth - inpMonth;
  } else {
    calYear--;
    calMonth = 12 + currentMonth - inpMonth;
  }

  if (currentDate >= inpDate) {
    calDate = currentDate - inpDate;
  } else {
    calMonth--;
    calDate = getDaysInMonth(currentYear, currentMonth) + currentDate - inpDate;
  }

  if (calMonth < 0) {
    calMonth = 11;
    calYear--;
  }

  if (isNaN(calYear) || isNaN(calMonth) || isNaN(calDate)) {
    result.innerHTML = `Please select your Date Of Birth`;
    result.style.color = "#2e86de";
  } else {
    result.style.color = "#fff";
    result.innerHTML = `You are <span>${calYear}</span> years <span>${calMonth}</span> months <span>${calDate}</span> days old.`;
  }
});

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
