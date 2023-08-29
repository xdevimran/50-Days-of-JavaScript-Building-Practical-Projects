const loadPhone = async (searchText = "iphone", isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhone(phones, isShowAll);
};

// displaying the card image and title dynamicaly
const displayPhone = (phones, isShowAll) => {
  const cardContainer = document.getElementById("cardContainer");
  // console.log(phones);
  cardContainer.innerText = "";
  // display the button if there is more then 12 phone
  const showAllBtn = document.getElementById("showAllBtn");
  if (phones.length > 12 && !isShowAll) {
    showAllBtn.classList.remove("hidden");
  } else {
    showAllBtn.classList.add("hidden");
  }
  // display only 12 phone in first page
  if (!isShowAll) {
    phones = phones.slice(0, 12);
  }
  phones.forEach((phone) => {
    const phoneCard = document.createElement("div");
    phoneCard.classList = `shadow-md rounded-md card bg-base-100 shadow-xl p-5`;
    phoneCard.innerHTML = `<div
            class="flex items-center justify-center  p-4 rounded-lg  mx-auto"
        >
            <img
            src="${phone.image}"
            alt=""
            />
        </div>
        <div class="card-body items-center text-center">
            <h2 class="text-2xl font-semibold">${phone.phone_name}</h2>
            <p>
            There are many variations of passages of available, but the majority have suffered
            </p>
        </div>
        <div class="flex items-center justify-center">
            <button
            onclick="handleShowDetails('${phone.slug}')"
            class="flex w-40 btn btn-primary bg-[#0D6EFD] text-white border-none"
            >
            Show Details
            </button>
        </div>`;
    cardContainer.appendChild(phoneCard);
  });
  toggleLoadingSpinner(false);
};

// search field
const searchField = document.getElementById("searchField");
const searchHandle = (isShowAll) => {
  toggleLoadingSpinner(true);
  const searchWord = searchField.value;
  loadPhone(searchWord, isShowAll);
};

const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("loadingSpinner");
  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
  } else {
    loadingSpinner.classList.add("hidden");
  }
};

const handleShowDetails = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  const data = await res.json();
  const phone = data.data;
  showPhoneDetails(phone);
};

// modal function

const showPhoneDetails = (phone) => {
  modalBtn.showModal();
  const modalContainer = document.getElementById("modalContainer");
  modalContainer.innerHTML = `
  
  <h2 class="text-center text-2xl font-bold">${phone.name}</h2>
  <img src="${phone.image}" alt="">
  <h3 class="font-bold">Storage:<span class="font-normal">${phone.mainFeatures.memory}</span></h3>
  <h3 class="font-bold">Display Size: <span class="font-normal">${phone.mainFeatures.displaySize}</span></h3>
  <h3 class="font-bold">ChipSet: <span class="font-normal">${phone.mainFeatures.chipSet}</span></h3>
  <h3 class="font-bold">Memory:</h3>
  <h3 class="font-bold">Slug:</h3>
  <h3 class="font-bold">Release date:</h3>
  <h3 class="font-bold">Brand:</h3>
  <h3 class="font-bold">GPS:</h3>

  `;
  console.log(phone);
};

// handle show all
const handleShowAll = () => {
  searchHandle(true);
};

loadPhone();

//  onclick="modalBtn.showModal()"
