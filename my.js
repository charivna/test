refs = {
  categoriesContEl: document.querySelector(".categories"),
  bookEl:document.querySelector(".book_cards")
}
  
// ==============================================================
// Ці дві функції роблять запит до API за списком категорій для меню зліва на макеті та формують цей список у розмітці! це наче є, але тут потрібно доробити скрол.

function getCategories() {
  return fetch("https://books-backend.p.goit.global/books/category-list ")
      .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json();
      })
}

getCategories().then(data => createMarkupCategory(data))

function createMarkupCategory(data) {
   const categoryEl = data
    .map(({ list_name }) => `<li class ="category">${list_name}</li>`)
    .join(' ');  
    refs.categoriesContEl.insertAdjacentHTML('beforeend', categoryEl);
}
// ==============================================================
// Отут я намагаю зробити запит за бестселлерами по категоріям, але в мене загвоздка з відмальовкою відповіді! Функція getAllBooks працює та робить запит.


function getAllBooks() {
  return fetch("https://books-backend.p.goit.global/books/top-books")
    .then(response => {
      if (!response.ok) {
      throw new Error(response.statusText)
      }
      return response.json()
  })
}
// =============================================================
// Тут я намагалась вийняти через форіч з кожного масиву його жанр та помістити в розмітку, якщо розкоментувати разом з викликом, то воно видає список лі з назвами жанрів теж. Але проблема помістити в цю лі потрібни книжки.Бо books це глибокий массив, я не розумію як кожні перебрати.

// function createBooks(data) {
// const arr =[]
//   const containerEL = data.forEach(({ list_name, books }) =>
//     arr.push(list_name))
//   const markupCont = arr.map(item => `<li>${item}</li>`).join(' ');
//   refs.bookEl.insertAdjacentHTML('beforeend',markupCont)
//   }
//   getAllBooks().then(data => createBooks(data))

// ================================================================

// Якщо  розкоментувати це з викликом, то можна побачити відмальовку 5 книжок з 1 жанру. Якщо 0 змінити на 1, то наступного. Але потрібно якось достукатись до всіх в одній функції.

//  function createBooks(data) {
// const bookEl = data[0].books
// .map(({book_image, title, author }) => 
// `<img src="${book_image}" alt="${title}" width=200>
//  <h2 class="title">${title}</h2>
// <p>${author}</p>`)
// .join(' ');  
//     refs.bookEl.insertAdjacentHTML('beforeend', bookEl)
// }

// getAllBooks().then(data => createBooks(data))


  