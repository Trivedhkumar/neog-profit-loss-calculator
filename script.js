const initialPriceEl = document.getElementById("initial-price");
const quantityOfStocksEL = document.getElementById("quantity-of-stocks");
const currentPriceEl = document.getElementById("current-price");
const tellMe = document.getElementById("tell-me");
const messsage = document.querySelector(".message");
const setMessage = (str, sts = "") => {
  messsage.innerText = str;
  if (sts === "error") {
    messsage.classList.add("error");
  } else if (sts === "success") {
    messsage.classList.add("success");
  }
};
const checkForProfitOrLoss = () => {
  let profit, loss, profitPercent, lossPercent;
  const initialPrice = Number(initialPriceEl.value);
  const quantityOfStocks = Number(quantityOfStocksEL.value);
  const currentPrice = Number(currentPriceEl.value);
  messsage.classList.remove("error");
  messsage.classList.remove("success");
  setMessage("");
  if (!initialPrice || !quantityOfStocks || !currentPrice) {
    return setMessage("Please enter all fields");
  }
  if (currentPrice > initialPrice) {
    profit = (currentPrice - initialPrice) * quantityOfStocks;
    profitPercent = ((profit / initialPrice) * 100).toFixed(2);
    setMessage(
      `Yay!! It's a profit of ${profit} in percent ${profitPercent}%`,
      "success"
    );
    return;
  } else if (currentPrice < initialPrice) {
    loss = (initialPrice - currentPrice) * quantityOfStocks;
    lossPercent = ((loss / initialPrice) * 100).toFixed(2);
    setMessage(
      `Sorry its a loss of ${loss} an in percent ${lossPercent}%`,
      "error"
    );
    return;
  }
  setMessage("No Pain No Gain");
  return;
};

tellMe.addEventListener("click", checkForProfitOrLoss);
