// log out
document.getElementById("out-out-btn").
  addEventListener('click', function () {
  window.location.href = "./index.html";
  });


const validPin = 1234;
const transactionsData = [];
const bonusCoupon = "PH-BATCH-12";

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
  const bank = getInputValue("select-bank");
  const accountNumber = getInputValue("account-number");
  const amount = getInputValueNumber("add-amount");
  if (amount <= 0) {
    alert('Invalid Amount')
    return;
  }
  const pin = getInputValueNumber("add-pin");
  const availableBalance = getInnerText("available-balance");

  
if (bank === "") {
  alert("⚠️ Please select a bank!");
  return;
} 

 if (accountNumber.length < 11) {
   alert('Please enter valid account number.')
   return;
  } 
  if (pin !== validPin) {
    alert('Please Enter Valid Pin.');
    return;
  }

  const totalNewAvailableBalance = amount + availableBalance;

   setInnerText(totalNewAvailableBalance);
  
  const data = {
    name: 'Add Money',
    date: new Date().toLocaleDateString()
  }
  transactionsData.push(data);

  alert(`✅ Money added successfully! New balance: ${totalNewAvailableBalance}`);

    document.getElementById("select-bank").value = "";
    document.getElementById("account-number").value = "";
    document.getElementById("add-amount").value = "";
    document.getElementById("add-pin").value = "";
});

//cash out feature
document.getElementById("Withdraw-btn").
  addEventListener('click', function (e) {
    e.preventDefault()
    const amount = getInputValueNumber("withdraw-amount");
    const availableBalance = getInnerText("available-balance");
    const agentNumber = getInputValue("agent-number");
    const pin = getInputValueNumber("cash-out-pin");
    
      if (agentNumber.length < 11 || isNaN(agentNumber) || agentNumber === '') {
        alert("Please enter valid account number.");
        return;
      } 
    
    if (amount <= 0 || amount > availableBalance || isNaN(amount)) {
      alert("Invalid Amount")
      return;
    }

    if (pin !== validPin) {
      alert("Please Enter Valid Pin.");
      return;
    }

    let totalNewAvailableBalance = availableBalance - amount;

    setInnerText(totalNewAvailableBalance);

      const data = {
    name: 'Cash Out',
    date: new Date().toLocaleDateString()
  }
  transactionsData.push(data);

      alert(
        `✅ Cash Out successful! New balance: ${totalNewAvailableBalance}`
      );

      document.getElementById("agent-number").value = "";
      document.getElementById("withdraw-amount").value = "";
      document.getElementById("cash-out-pin").value = "";
});


// transfer money feature
document.getElementById("send-money-btn").addEventListener('click', function (e) {
  e.preventDefault();
  const userAccountNumber = getInputValue("user-account-number");
  const transferAmount = getInputValueNumber("transfer-amount");
  const availableBalance = getInnerText("available-balance");
  const pin = getInputValueNumber("transfer-pin");

  if (userAccountNumber.length < 11 || isNaN(userAccountNumber || userAccountNumber === '')) {
    alert("Please enter valid User Account Number.");
    return;
  }

  if (transferAmount <= 0 || transferAmount > availableBalance ||  isNaN(transferAmount)) {
    alert("Invalid Amount");
    return;
  }

  if (pin !== validPin) {
    alert("Please Enter Valid Pin.");
    return;
  }

  let totalNewAvailableBalance = availableBalance - transferAmount;
  setInnerText(totalNewAvailableBalance);

  const data = {
    name: "Transfer Money",
    date: new Date().toLocaleDateString(),
  };
  transactionsData.push(data);

  alert(
    `✅ Transfer Money successful! New balance: ${totalNewAvailableBalance}`
  );

  document.getElementById("user-account-number").value = "";
  document.getElementById("transfer-amount").value = "";
  document.getElementById("transfer-pin").value = "";
});


// transactions feature

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

//get bonus feature
document.getElementById("get-bonus-btn").addEventListener('click', function (e) {
  e.preventDefault()
  const inputCoupon = document.getElementById("coupon").value;
  if (inputCoupon === bonusCoupon) {
    alert("Cong🎉rats You get 10% bonus" );
  }

  const data = {
    name: "Get Bonus",
    date: new Date().toLocaleDateString(),
  };
  transactionsData.push(data);
  document.getElementById("coupon").value = "";
});


//pay bill feature
document.getElementById("pay-now-btn").addEventListener('click', function (e) {
  e.preventDefault();
  const selectBillPay = getInputValue("select-bill-pay");
  const billerAccountNumber = getInputValue("biller-account-number");
  const billPayAmount = getInputValueNumber("bill-pay-amount");
  const billPayPin = getInputValueNumber("bill-pay-pin");
  const availableBalance = getInnerText("available-balance");

  if (selectBillPay === '') {
    alert("Please select Pay option");
    return;
  }

  if (billerAccountNumber.length < 11 || isNaN(billerAccountNumber || billerAccountNumber === '')) {
    alert("Please enter valid User Account Number.");
    return;
  }

  if (billPayAmount <= 0 || billPayAmount > availableBalance ||  isNaN(billPayAmount)) {
    alert("Invalid Amount");
    return;
  }

  if (billPayPin !== validPin) {
    alert("Please Enter Valid Pin.");
    return;
  }

  
  let totalNewAvailableBalance = availableBalance - billPayAmount;
  setInnerText(totalNewAvailableBalance);

  const data = {
    name: "Pay Bill",
    date: new Date().toLocaleDateString(),
  };
  transactionsData.push(data);

  alert(
    `✅ Bill Pay successful! New balance: ${totalNewAvailableBalance}`
  );

  document.getElementById("select-bill-pay").value = "";
  document.getElementById("biller-account-number").value = "";
  document.getElementById("bill-pay-amount").value = "";
  document.getElementById("bill-pay-pin").value = "";

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
























