function Result() {
  const displayElm = document.getElementById("ouput");
  const operators = ["/", "*", "-", "+"];
  let calcbtns = document.getElementsByClassName("btn");

  let strToDisplay = "";

  for (btn of calcbtns) {
    btn.addEventListener("click", (event) => {
      const value = event.target.innerText;
      // strToDisplay = strToDisplay + value;
      if (value === "C") {
        strToDisplay = "";
        display(strToDisplay);
        return;
      }

      if (value === "=") {
        total();
        return;
      }

      if (value === "B") {
        strToDisplay = strToDisplay.slice(0, -1);
        display(strToDisplay);
        return;
      }

      /// chek if operator button is clicked
      if (operators.includes(value)) {
        // check what's the last charactor in the strTodisplay
        const lastChar = strToDisplay[strToDisplay.length - 1];
        console.log(lastChar);
        if (operators.includes(lastChar)) {
          // if last char is operator then remove it
          strToDisplay = strToDisplay.slice(0, -1);
        }
      }

      strToDisplay += value;
      display(strToDisplay);
    });
  }

  const display = (str) => {
    displayElm.innerText = str || "0.00";
  };

  const total = () => {
    const ttl = eval(strToDisplay);
    strToDisplay = ttl;
    display(strToDisplay);
  };
}
export default Result;
