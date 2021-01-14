const day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function change(day) {
  if (day == "Sunday") return "Monday";
  if (day == "Monday") return "Tuesday";
  if (day == "Tuesday") return "Wednesday";
  if (day == "Wednesday") return "Thursday";
  if (day == "Thursday") return "Friday";
  if (day == "Friday") return "Satuarday";
  if (day == "Satuarday") return "Sunday";
}

function changedown(day) {
  if (day == "Sunday") return "Satuarday";
  if (day == "Monday") return "Sunday";
  if (day == "Tuesday") return "Monday";
  if (day == "Wednesday") return "Tuesday";
  if (day == "Thursday") return "Wednesday";
  if (day == "Friday") return "Thursday";
  if (day == "Satuarday") return "Friday";
}

window.addEventListener("keyup", (e) => {
  //   console.log(e.key);
  if (e.key == "ArrowUp") {
    // var div = document.getElementById("0");
    // if (div.innerHTML === "Sunday") div.innerHTML = "Monday";

    for (var i = 0; i < 7; i++) {
      var div = document.getElementById(i.toString(10));
      div.innerHTML = change(div.innerHTML);
    }
  } else if (e.key == "ArrowDown") {
    for (var i = 0; i < 7; i++) {
      var div = document.getElementById(i.toString(10));
      div.innerHTML = changedown(div.innerHTML);
    }
  }
});
