const products = [
  {
    name: `Антифриз Fosser Antifreeze<br> 
          FA 12 Readymix 1 л Concentrat, Germany`,
    rate: 5,
    comments: 10,
    in_store: 24,
    img: '/img/tyre1.jpg',
    summer: true,
    passenger: true,
    new: true,
    hit: true,
    discount: true,
    price_now: '599',
    price_old: '1 250'
  },
  {
    name: `Антифриз Fosser Antifreeze<br> 
          FA 12 Readymix 1 л Concentrat, Germany`,
    rate: 3,
    comments: 10,
    in_store: 24,
    img: '/img/tyre2.jpg',
    summer: true,
    passenger: false,
    new: true,
    hit: true,
    discount: false,
    price_now: '599',
    price_old: '1 250'
  },
  {
    name: `Антифриз Fosser Antifreeze<br> 
          FA 12 Readymix 1 л Concentrat, Germany`,
    rate: 0,
    comments: 0,
    in_store: 24,
    img: '/img/tyre3.jpg',
    summer: true,
    passenger: true,
    new: true,
    hit: false,
    discount: false,
    price_now: '9 570',
    price_old: '11 250'
  },
  {
    name: `Антифриз Fosser Antifreeze`,
    rate: 5,
    comments: 10,
    in_store: 24,
    img: '/img/tyre4.jpg',
    summer: true,
    passenger: true,
    new: false,
    hit: false,
    discount: false,
    price_now: '599',
    price_old: null
  },
]

function addProduct(product) {
  let newProduct = document.createElement("div");
  newProduct.className = 'products__card col-3';
  newProduct.innerHTML = `
      <div class="card__badge">
        Mark
      </div>
      <a href="#" class="card__title">
        ${product.name}
      </a>
      <div class="card__info">
        <div class="info__rate">
          ${product.rate === 5 ? `
            <img src="/img/star2.svg" alt="star">
            <img src="/img/star2.svg" alt="star">
            <img src="/img/star2.svg" alt="star">
            <img src="/img/star2.svg" alt="star">
            <img src="/img/star2.svg" alt="star">
          ` : product.rate === 3 ? `
            <img src="/img/star2.svg" alt="star">
            <img src="/img/star2.svg" alt="star">
            <img src="/img/star2.svg" alt="star">
            <img src="/img/star_gray.svg" alt="star">
            <img src="/img/star_gray.svg" alt="star">
          ` : `
            <img src="/img/star_gray.svg" alt="star">
            <img src="/img/star_gray.svg" alt="star">
            <img src="/img/star_gray.svg" alt="star">
            <img src="/img/star_gray.svg" alt="star">
            <img src="/img/star_gray.svg" alt="star">
          `}
        </div>
        <a href="#" class="info__comments">
          Отзывы (${product.comments})
        </a>
        <div class="info__store">
          В наличии ${product.in_store} шт.
        </div>
      </div>
      <div class="card__images">
        <div class="images__type">
          ${product.summer ? `
            <div class="type-1">
              <img src="/img/sun.svg" alt="sun">
              ЛЕТНЯЯ
            </div>
          ` : ``}
          ${product.passenger ? `
            <div class="type-2">
              <img src="/img/car.svg" alt="sun">
              ЛЕГКОВАЯ
            </div>
          ` : ``}
          ${product.new ? `
            <div class="type-3">
            <img src="/img/new.svg" alt="sun">
            НОВАЯ
          </div>
          ` : ``}
        </div>
        <div class="images__photo">
          <img src=${product.img} alt="tyre">
        </div>
      </div>
      <div class="card__badges">
        ${product.new ? `
          <div class="badge-green">
            НОВИНКА
          </div>
        ` : ``}
        ${product.hit ? `
          <div class="badge-purple">
            ХИТ
          </div>
        ` : ``}
        ${product.discount ? `
          <div class="badge-red">
            СКИДКА
          </div>
        ` : ``}       
      </div>
      <div class="card__price">
        <div class="price-now">
          ${product.price_now} <span>ГРН.</span> 
        </div>
        ${product.price_old ? `
          <div class="price-old">
          ${product.price_old} ГРН.
        </div>
        ` : ``}
      </div>
      <div class="card__button">
        <button>
          <img src="/img/basket2.svg" alt="buy">
          КУПИТЬ ТОВАР
        </button>
      </div>
      <div class="card__actions">
        <div id="comp_btn" class="action-compare">
          <img src="/img/libra_yellow.svg" alt="libra">
          <span>Сравнить товар</span>
        </div>
        <div id="fav_btn" class="action-fav">
          <img src="/img/star_yellow.svg" alt="star">
          <span>В избранное</span>
        </div>
      </div>
  `;

  let container = document.getElementById("products");

  container.appendChild(newProduct);
}

products.map(product => {
  addProduct(product);
})


const comp_btn = document.querySelectorAll('#comp_btn');
const fav_btn = document.querySelectorAll('#fav_btn');
const comp_badge = document.getElementById('comp_badge');
const fav_badge = document.getElementById('fav_badge');
let comp_counter = 0;
let fav_counter = 0;

comp_btn.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.children[1].textContent === "В сравнении") {
      return
    }
    comp_counter++;
    comp_badge.style.display = 'flex';
    comp_badge.textContent = comp_counter;
    btn.children[1].textContent = "В сравнении";
  })
})
fav_btn.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.children[1].textContent === "В избранном") {
      return
    }
    fav_counter++;
    fav_badge.style.display = 'flex';
    fav_badge.textContent = fav_counter;
    btn.children[1].textContent = "В избранном";
  })
})