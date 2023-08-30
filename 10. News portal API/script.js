// handleing the category section
// news_category
const handleCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await response.json();
  const categoryContainer = document.getElementById("categoryContainer");
  const trimedCategory = data.data.news_category.slice(0, 5);
  trimedCategory.forEach((category) => {
    const navigationLinks = document.createElement("ul");
    navigationLinks.classList = `menu menu-horizontal px-1`;
    navigationLinks.innerHTML = `
    <li><a onclick="handleCategoryId('${category.category_id}')">${category.category_name}</a></li>
    `;
    categoryContainer.appendChild(navigationLinks);
  });
};

// handleing the news card
const handleCategoryId = async (categoryId) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${categoryId}`
  );
  const data = await response.json();
  const articleContainer = document.getElementById("articleContainer");
  articleContainer.innerHTML = "";
  data.data.forEach((news) => {
    console.log(data.data);
    const div = document.createElement("div");
    div.classList = `card bg-base-100 shadow-xl`;
    div.innerHTML = `
  <figure>
            <img
              class="rounded-md"
              src="${news.image_url}"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title font-bold">${news.title.slice(0, 40)}</h2>
            <p>${news.details.slice(0, 50)}</p>
            <div class="card-actions items-center justify-between">
              <!-- author info  -->
              <div class="flex gap-2">
                <div class="avatar">
                  <div class="w-7 rounded-full">
                    <img
                      src="${news.author?.img}"
                    />
                  </div>
                </div>
                <h2>${news.author?.name}</h2>
              </div>
              <button
              onclick="handleModal('${news._id}')"
              class="bg-slate-500 px-2 py-1 text-white rounded-md">
                Details
              </button>
  `;
    articleContainer.appendChild(div);
  });
};

/* <button class="btn" onclick="my_modal_1.showModal()">open modal</button> */
// handleing the modal section
const handleModal = async (newsId) => {
  console.log(newsId);
  const response = await fetch(
    `https://openapi.programming-hero.com/api/news/${newsId}`
  );
  const data = await response.json();
  console.log(data.data[0]);

  const modalContainer = document.getElementById("modalContainer");
  const div = document.createElement("div");
  div.innerHTML = `
<dialog id="my_modal_1" class="modal">
  <form method="dialog" class="modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <!-- if there is a button in form, it will close the modal -->
      <button class="btn">Close</button>
    </div>
  </form>
</dialog>
  `;
  modalContainer.appendChild(div);
  const modal = document.getElementById("my_modal_1");
  modal.showModal();
};

handleCategory();
handleCategoryId("01");
