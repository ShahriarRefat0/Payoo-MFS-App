// log out
document.getElementById("out-out-btn").
  addEventListener('click', function () {
  window.location.href = "./index.html";
  });


const validPin = 1234;
const transactionsData = [];
//function to get input values
function getInputValueNumber(id) {
  const inputFieldValueNumber = parseInt(document.getElementById(id).value);
  return inputFieldValueNumber;
}

function getInputValue(id) {
  const inputFieldValue = document.getElementById(id).value;
  return inputFieldValue;
}

// functions to get innerText
function getInnerText(id) {
  const elementValueNumber = parseInt(document.getElementById(id).innerText);
  return elementValueNumber;
}

// function to set innerText
function setInnerText(value) {
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value;
}

//function to set toggling
function handleToggling(id) {
    const forms = document.getElementsByClassName("form");
    for (const form of forms) {
      form.style.display = "none";
    }

    document.getElementById(id).style.display = "block";
}

//function to set fom button toggling
function handleButtonToggle(id) {
  const formBtns = document.getElementsByClassName("form-btn");
  for (const formBtn of formBtns) {
    formBtn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    formBtn.classList.add("border-gray-300");
  }

  document.getElementById(id).classList.remove("border-gray-300");
  document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]");
  
}
// add money feature
document.getElementById("add-money-btn").addEventListener('click', function (e) {
  e.preventDefault()
  const bank = getInputValue("bank");
  const accountNumber = getInputValue("account-number");
  const amount = getInputValueNumber("add-amount");
  if (amount <= 0) {
    alert('Invalid Amount')
    return;
  }
  const pin = getInputValueNumber("add-pin");
  const availableBalance = getInnerText("available-balance");

  
 if (accountNumber.length < 11) {
   alert('Please enter valid account number.')
   return;
  } 
  if (pin !== validPin) {
    alert('Please Enter Valid Pin.')
  }
  const totalNewAvailableBalance = amount + availableBalance;

   setInnerText(totalNewAvailableBalance);
  
  const data = {
    name: 'Add Money',
    date: new Date().toLocaleDateString()
  }
  transactionsData.push(data);
  console.log(transactionsData);
});

//cash out feature
document.getElementById("Withdraw-btn").
  addEventListener('click', function (e) {
    e.preventDefault()
    const amount = getInputValueNumber("withdraw-amount");
    const availableBalance = getInnerText("available-balance");

    if (amount <= 0 || amount > availableBalance) {
      alert("Invalid Amount")
      return;
    }
    let totalNewAvailableBalance = availableBalance - amount;

    setInnerText(totalNewAvailableBalance);

      const data = {
    name: 'Cash Out',
    date: new Date().toLocaleDateString()
  }
  transactionsData.push(data);
    console.log(transactionsData);
});



  document.getElementById("transactions-btn").addEventListener('click', function () {
    const transactionsContainer = document.getElementById("transactions-container");
    transactionsContainer.innerText = '';
    for (const data of transactionsData) {
      const div = document.createElement('div')
      div.innerHTML=`
                <div
              class="bg-white rounded-xl p-3 flex justify-between items-center mt-3"
            >
              <div class="flex items-center">
              <div class="p-3 rounded-full bg-[#f4f5f7]">
                <img src="./assets/wallet1.png" class="mx-auto" alt="" />
              </div>
              <div class="ml-3">
                <h2>${data.name}</h2>
                <p>${data.date}</p>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
    `;
    transactionsContainer.appendChild(div)
  }
});

// toggling feature

document.getElementById('add-btn').addEventListener('click', function () {
  handleToggling("add-money-parent");

  handleButtonToggle('add-btn');
})

document.getElementById("cash-out-btn").addEventListener("click", function () {
  handleToggling("cash-out-parent");
  
    handleButtonToggle("cash-out-btn");
});

document.getElementById("transfer-btn").addEventListener("click", function () {
  handleToggling("transfer-parent");
  handleButtonToggle("transfer-btn");
});

document.getElementById("bonus-btn").addEventListener("click", function () {
  handleToggling("get-bonus-parent");
    handleButtonToggle("bonus-btn");
});

document.getElementById("pay-bill-btn").addEventListener("click", function () {
  handleToggling("pay-bill-parent");
  handleButtonToggle("pay-bill-btn");
});

document.getElementById("transactions-btn").addEventListener("click", function () {
handleToggling("transactions-parent");
handleButtonToggle("transactions-btn");
});
























