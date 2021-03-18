// document.getElementById('')
// document.querySelector('')

// Total Balance
const balanceElement = document.getElementById("balance");

// Value input
const valueInputElement = document.querySelector("input");

// Income or Expence
const selectElement = document.querySelector("select");

// Addition button
const additionButtonElement = document.querySelector("footer button");

// Entry list => this is section with bullet points
const entryListElement = document.querySelector("section ul");

// Function for adding elements to the breakdown list
function addEntry(amount, operation) {
  const listEntry = document.createElement("li"); // add elements to follow the list
  listEntry.classList.add(operation); // class of the items => background color

  const listEntryValue = document.createElement("strong"); // add entered value in the same style than existing "Strong".

  listEntryValue.innerText = amount + "$"; // add sign dollar at the end of the amount

  const listEntryDescription = document.createElement("em"); // add Description at the left of the amount

  listEntryDescription.innerText = "Description"; // We add the text "Description"

  const listEntryOperator = document.createElement("span"); // Adding sign + or -

  if (operation === "income") {
    // making difference if the sign is + or -
    listEntryOperator.innerText = "+";
  } else {
    listEntryOperator.innerText = "-";
  }

  listEntry.appendChild(listEntryDescription); // adding the elements into the list entry  li
  listEntry.appendChild(listEntryOperator);
  listEntry.appendChild(listEntryValue);

  entryListElement.appendChild(listEntry); // adding the li into the ul.
}

function updateBalance() {
  // function for updating balance
  let total = 0; // defining total to 0

  for (let item of entryListElement.children) {
    // for list of operations
    const valueElement = item.querySelector("strong"); // defining value
    const operationElement = item.querySelector("span"); // defining operation

    const value = parseInt(valueElement.innerText); // number without invalid signs
    const operation = operationElement.innerText;

    if (operation === "+") {
      total = total + value;
    } else if (operation === "-") {
      total = total - value;
    }
  }

  balanceElement.innerText = total + "$";
}

additionButtonElement.onclick = function () {
  // function add button
  const amount = valueInputElement.value; // defining amount
  const operation = selectElement.value; // defining operation

  addEntry(amount, operation); // add amount and operation into the breakdown => see function for adding elements to the breakdown list

  valueInputElement.value = ""; // put to 0 the field after pushing button

  updateBalance(); // updating Balance => see function above for updating balance
};
