const select = document.querySelector(".select");

const selectContainer = document.createElement("div");
selectContainer.classList.add("selectContainer");
select.appendChild(selectContainer);

const triangle = document.createElement("span");
triangle.classList.add("triangle");
selectContainer.appendChild(triangle);

const mnemoText = document.createElement("span");
mnemoText.innerText = "Choose option";
mnemoText.classList.add("mnemoText");
selectContainer.appendChild(mnemoText);

const selectBox = document.createElement("div");
selectBox.classList.add("selectBox");

let options = [
  { name: "React" },
  { name: "Angular" },
  { name: "Vue" },
  { name: "Ionic" },
  { name: "Abs" },
  { name: "Component" },
  { name: "Test1" },
  { name: "test2" },
  { name: "test3" },
  { name: "test4" },
];

let chooseOption = null;

select.addEventListener("click", (e) => {
  triangle.classList.toggle("triangle-rotate");
  if (document.querySelector(".selectBox")) {
    document.querySelector(".selectBox").classList.add("closeSelectBox");
  }

  if (!document.querySelector(".selectBox")) {
    select.appendChild(selectBox);

    options.map((i) => {
      const optionEl = document.createElement("div");
      optionEl.classList.add("option");
      optionEl.innerText += i.name;
      document.querySelector(".selectBox").append(optionEl);

      optionEl.addEventListener("click", (e) => {
        mnemoText.innerText = e.target.textContent;
        chooseOption = e.target.textContent;

        if (e.isTrusted) {
          e.target.classList.toggle("s");
        }

        render();
      });
    });
  } else {
    setTimeout(() => {
      document.querySelector(".selectBox").classList.remove("closeSelectBox");
      select.removeChild(selectBox);
      selectBox.innerHTML = "";
    }, 200);
  }
});

const render = () => {
  console.log(chooseOption);

  // USING CHOOSE OPTION IN A RENDER FUNC.
};

render();
