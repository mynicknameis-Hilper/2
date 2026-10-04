function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

function runTask1() {
  let age = Number(document.getElementById("ageInput1").value);
  
  if (age && age > 0) {
    closeModal("task1Input");
    document.getElementById("task1ResultText").innerText = `Через 5 лет вам будет ${age + 5} лет.`;
    openModal("task1Result");
  } else {
    alert("Пожалуйста, введите корректный возраст!");
  }
}

function runTask2() {
  let val1 = document.getElementById("num1").value;
  let val2 = document.getElementById("num2").value;

  if (val1 !== "" && val2 !== "") {
    let sum = Number(val1) + Number(val2);
    closeModal("task2Input");
    document.getElementById("task2ResultText").innerText = `Сумма чисел равна: ${sum}`;
    openModal("task2Result");
  } else {
    alert("Заполните оба поля!");
  }
}

let tempName = "";
let tempAge = "";

function confirmTask3() {
  tempName = document.getElementById("nameInput").value.trim();
  tempAge = document.getElementById("ageInput3").value;

  if (tempName !== "" && tempAge !== "") {
    closeModal("task3Input");
    document.getElementById("task3ConfirmText").innerText = `Точно ваше имя — ${tempName}, а возраст — ${tempAge}?`;
    openModal("task3Confirm");
  } else {
    alert("Заполните все поля!");
  }
}

function backToInput3() {
  closeModal("task3Confirm");
  openModal("task3Input");
}

function finishTask3() {
  closeModal("task3Confirm");
  document.getElementById("task3ResultText").innerText = `Привет, ${tempName}! Тебе ${tempAge} лет.`;
  openModal("task3Result");
}