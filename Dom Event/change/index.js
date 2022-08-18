// const input = document.querySelector("input[name=name]");
// input.addEventListener('change', changeHandler)


// function changeHandler(e) {
//   console.log(e);// event
//   console.log(e.type);
//   console.log(e.target)
//   console.log(e.target.id)
//   console.log(e.target.className)
//   console.log(e.target.value)
// }


/*
const programs = document.querySelectorAll("input");
console.log(programs);

Array.from(programs).map((program) => {
  program.addEventListener("change", programHandler);
})

function programHandler(e) {
  if (e.target.checked) {
    console.log("Checked")
  }
}*/

// ---------------Select ------------
/*
const department = document.querySelector("#department");
department.addEventListener("change", function (e) {
  console.log("select " + e.target.value)
})
*/


// -----------------------------
// finding the elements
const form = document.querySelector("form");
const name = form.querySelector("div #name");
const email = form.querySelector("div #email");
const password = form.querySelector("div #password");
// console.log(name);
// console.log(email);
// console.log(password);

form.addEventListener("submit", function (e) {
  e.preventDefault ()// auto reface off
  const userInfo = {
    name: name.value,
    email: email.value,
    password: password.value
  };
  console.log(userInfo);
  name.value = " ";
  email.value = " ";
  password.value = "";
})