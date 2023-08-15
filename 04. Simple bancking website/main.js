// Dashboard function
// Selecting all of the money boxes
const depositMoney = document.getElementById("deposit-money");
const withdrawMoney = document.getElementById("withdraw-money");
const balanceMoney = document.getElementById("balance-money");

// Selecting the deposit and withdraw fields
const depositField = document.getElementById("deposit-filed");
const withdrawField = document.getElementById("withdraw-filed");

// Selecting the deposit and withdraw buttons
const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");

// Deposit
depositBtn.addEventListener("click", function () {
  const depositAmount = parseFloat(depositField.value);
  if (!isNaN(depositAmount) && depositAmount > 0) {
    const currentDeposit = parseFloat(depositMoney.innerText);
    const newDeposit = currentDeposit + depositAmount;
    depositMoney.innerText = newDeposit;
    depositField.value = "";

    // Update the main balanceMoney
    const previousBalanceTotal = parseFloat(balanceMoney.innerText);
    const currentTotalBalance = previousBalanceTotal + depositAmount;
    balanceMoney.innerText = currentTotalBalance;
  }
});

// Withdraw
withdrawBtn.addEventListener("click", function () {
  const availableBalance = parseFloat(balanceMoney.innerText);
  const withdrawAmount = parseFloat(withdrawField.value);

  if (
    !isNaN(withdrawAmount) &&
    withdrawAmount > 0 &&
    withdrawAmount <= availableBalance
  ) {
    const newWithdraw = parseFloat(withdrawMoney.innerText) + withdrawAmount;
    withdrawMoney.innerText = newWithdraw;
    withdrawField.value = "";

    // Update the main balanceMoney
    const previousBalanceTotal = parseFloat(balanceMoney.innerText);
    const currentTotalBalance = previousBalanceTotal - withdrawAmount;
    balanceMoney.innerText = currentTotalBalance;
  }
});
