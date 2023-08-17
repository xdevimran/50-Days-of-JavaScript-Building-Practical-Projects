let total = 0;
function clickBtn(target) {
  const invoiceContainer = document.getElementById("invoice-container");
  const bookName = target.parentNode.childNodes[1].innerText;
  const bookTitle = document.createElement("h4");

  // Check if book title is already present in the invoice container
  if (!isBookTitleDisplayed(bookName)) {
    bookTitle.innerText = bookName;
    invoiceContainer.prepend(bookTitle);
  }

  const Price = target.parentNode.childNodes[5].innerText.split(" ")[1];
  const totalPrice = document.getElementById("total-price");
  total = parseInt(total) + parseInt(Price);
  totalPrice.innerText = total;
  console.log(total);
}

// Function to check if a book title is already displayed in the invoice container
function isBookTitleDisplayed(title) {
  const invoiceContainer = document.getElementById("invoice-container");
  const bookTitles = invoiceContainer.getElementsByTagName("h4");
  
  for (let i = 0; i < bookTitles.length; i++) {
    if (bookTitles[i].innerText === title) {
      return true;
    }
  }
  
  return false;
}
