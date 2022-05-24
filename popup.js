const updateText = document.getElementById("update");
const body = document.getElementById("body");
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");

body.addEventListener("onload", updateData());
function updateData() {
  updateText.innerHTML = `Update Counter value ${localStorage.getItem(
    "countValue"
  )}`;
}

incBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const data = loadVaule("inc");
  updateCountValue(data);
});

decBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const data = loadVaule("dec");
  updateCountValue(data);
});

function updateCountValue(data) {
  updateText.innerHTML = `Update Counter value ${data}`;
  localStorage.setItem("countValue", data);
}

function loadVaule(action) {
  let getValue = localStorage.getItem("countValue");

  if (!getValue) {
    return (getValue = 1);
  }

  if (action === "inc") {
    return (getValue = +getValue + 1);
  }

  if (action === "dec") {
    if (getValue <= 0) {
      return (getValue = 0);
    }
    return (getValue = +getValue - 1);
  }
}
