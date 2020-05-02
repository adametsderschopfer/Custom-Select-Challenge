class Select {
  constructor(selectArrayWithObject = [], firstText) {
    this.selectArrayWithObject = selectArrayWithObject;
    this.firstText = firstText;
    this.render();
  }

  select =  document.createElement("div");

  value = null;

  documentCreateElement(element = "div", classNames, append, value) {
    let elem = document.createElement(element);

    if (!classNames || classNames === "") {
      console.warn("ClassNames was not specified");
      return;
    }

    if (value) {
      elem.textContent = value;
    }

    elem.classList.add(classNames);
    append && append.append(elem);
    return elem;
  }

  checkClassForToggleSelectBox = (selectBox) => {
    if (!selectBox.classList.contains("openedSelectBox")) {
      selectBox.classList.remove("closeSelectBox");
      selectBox.classList.add("openedSelectBox");
    } else {
      selectBox.classList.remove("openedSelectBox");
      selectBox.classList.add("closeSelectBox");
    }
  };

  UI() {
    return {
      triangle: this.documentCreateElement("div", "triangle"),
      selectBox: this.documentCreateElement("div", "selectBox", this.select),
      textView: this.documentCreateElement("div", "textView"),
    };
  }

  selectBar() {
    const { triangle, selectBox, textView } = this.UI();
    const selectBar = this.documentCreateElement(
      "div",
      "selectContainer",
      this.select
    );
    selectBar.appendChild(triangle);
    selectBar.appendChild(textView);
    textView.textContent = this.firstText || "Choose";

    selectBar.addEventListener("click", () => {
      triangle.classList.toggle("triangle-rotate");
      this.checkClassForToggleSelectBox(selectBox);

      selectBox.innerHTML = "";
      this.selectArrayWithObject.map((option) => {
        let opt = this.documentCreateElement(
          "div",
          "option",
          selectBox,
          option.name
        );

        opt.addEventListener("click", (e) => {
          triangle.classList.toggle("triangle-rotate");
          this.checkClassForToggleSelectBox(selectBox);
          let text = e.target.textContent;

          if (e.target.textContent.length > 25) {
            textView.textContent = text.substring(0, 20) + "...";
          } else {
            textView.textContent = text;
          }

          this.value = text;
          return this.innerValue();
        });
      });
    });

    return selectBar;
  }

  innerValue() {
  // USING CHOOSE OPTION IN A RENDER FUNC.

    return this.value;
  }

  render() {
      this.select.id = "select";
      document.body.append(this.select);
    
    if (!document.querySelector("selectContainer")) {
      this.selectBar();
    }
  }
}

const sel = new Select([
  { name: "React" },
  { name: "React2" },
  { name: "React3" },
  { name: "React4" },
  { name: "React5" },
  { name: "React6" },
  { name: "React7" },
  { name: "React8" },
  { name: "React9" },
  { name: "React0" },
  { name: "React12" },
  { name: "React34" },
  { name: "React45" },
  { name: "React56asdasdasdasdasdasdasdasdasdasdasdasdasdasd" },
]);

console.log(sel.innerValue())

