let switcher = document.getElementById('switcher'),
    tab1 = document.querySelector('.tab1'),
    tab2 = document.querySelector('.tab2');

switcher.onchange = () => {
  switch(switcher.checked) {
    case true: 
      setTimeout(() => {
        tab1.className = 'tab1';
        tab2.className = 'tab2 checked';
      }, 100)
      break;
    case false: 
      setTimeout(() => {
        tab1.className = 'tab1 checked';
        tab2.className = 'tab2';
      }, 100)
  }
}


let selectors = document.querySelectorAll('.form__select');
let currentList = null;

for (let i = 0; i < selectors.length; i++) {
  selectors[i].addEventListener('click', () => {
    let item = selectors[i].lastElementChild;
    isHidden(item) ? open(item) : close(item);
    chooseOption(item, selectors[i].children[0]);
  })
}

document.addEventListener('click', (ev) => {
  if (currentList && !ev.target.className.includes('select')) {
    close(currentList);
  }

  if (!ev.target.className.includes('price')) {
    clearBorder();
  }
})

function isHidden(el) {
  return el.className.includes('opened') ? false : true;
}
function open(el) {
  if (currentList) {
    close(currentList);
  }
  el.className = 'select__list opened';
  currentList = el;
}
function close(el) {
  el.className = 'select__list';
  currentList = null;
}
function chooseOption(el, head) {
  let title = head.children[0];
  const options = el.children;
  for(let j = 0; j < options.length; j++) {
    options[j].addEventListener('click', () => {
      title.textContent = options[j].textContent;
      title.className = 'select__title selected';
      title.style.color = '#696969';
    })
  }
}


const login_btn = document.getElementById('login_btn');
let enter_window = document.getElementById('enter');
const close_login_btn = document.getElementById('close_enter');

login_btn.addEventListener('click', () => {
  enter_window.style.display = 'block';
})
close_login_btn.addEventListener('click', () => {
  enter_window.style.display = 'none';
})


const call_btn = document.getElementById('call_btn');
let callback_window = document.getElementById('callback');
const close_call_btn = document.getElementById('close_callback');

call_btn.addEventListener('click', () => {
  callback_window.style.display = 'flex';
})
close_call_btn.addEventListener('click', () => {
  callback_window.style.display = 'none';
})

  
const form = document.getElementById('enter_form');
let email = document.getElementById('email');
let password = document.getElementById('password');

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  validateEmail(email.value) ? (
    password.value.length >= 4 ? (
      form.submit()
    ) : (
      password.value = "",
      password.placeholder = "Минимум 4 символа",
      password.style.borderColor = 'red'
    )
  ) : (
    email.value = "",
    email.placeholder = "Введите корректный e-mail",
    email.style.borderColor = 'red'
  );
})

email.addEventListener('input', () => {
  email.style.borderColor = '#d2d2d2'
})
password.addEventListener('input', () => {
  email.style.borderColor = '#d2d2d2'
})

function validateEmail (email) {
  const reg = /\S+@\S+\.\S+/;
  return reg.test(email);
}


const sub_btn = document.getElementById('sub_btn');
let sub_email = document.getElementById('sub_email');
let subscribe = document.getElementById('subscribe');
let subscribe_btn = document.getElementById('subscribe_btn');

sub_btn.addEventListener('click', () => {
  validateEmail(sub_email.value) ? (
    subscribe.style.display = 'block',
    sub_email.value = "",
    sub_email.style.border = 'none'
  ) : (
    sub_email.value = "",
    sub_email.placeholder = "Введите корректный e-mail",
    sub_email.style.border = '1px solid red'
  );
})

subscribe_btn.addEventListener('click', () => {
  subscribe.style.display = 'none'
})


let search = document.getElementById('search');
const search_btn = document.getElementById('search_btn');

search_btn.addEventListener('click', (ev) => {
  ev.preventDefault();
  search.value.length >= 2 ? (
    search_btn.click(),
    search.value = ""
  ) : (
    search.value = "",
    search.placeholder = "Минимум 2 символа",
    search.style.border = '1px solid red'
  )
})

search.addEventListener('input', () => {
  search.style.border = 'none'
})


const price_boxes = document.querySelectorAll('.price_box');

price_boxes.forEach(input => {
  input.addEventListener('click', () => {
    clearBorder();
    input.style.borderBottom = '1px solid #ff8500';
  })
})

function clearBorder() {
  price_boxes.forEach(input => {
    input.style.borderBottom = '1px solid #ffffff';
  })
}

const form_filters = document.getElementById('form__filters');
const price_inputs = document.querySelectorAll('.price_input');

form_filters.addEventListener('submit', (ev) => {
  ev.preventDefault();
  validatePrice(price_inputs);
})

function validatePrice(items) {
  min_price = items[0];
  max_price = items[1];
  if (Math.sign(min_price.value) !== 1) {
    min_price.value = null;
    min_price.style.border = '1px solid red';
  }
  if (Math.sign(max_price.value) !== 1) {
    max_price.value = null;
    max_price.style.border = '1px solid red';
  }
  if (Math.sign(max_price.value) === 1 && Math.sign(min_price.value) === 1) {
    min_price.style.border = 'none';
    max_price.style.border = 'none';
    form_filters.submit();
  }
}


const tel_input = document.getElementById('telephone');

tel_input.addEventListener('focus', () => { 
  if(!/^\+\d*$/.test(tel_input.value)) {
    tel_input.value = '+'; 
  }
}); 

let old = 0;
tel_input.addEventListener('keypress', (e) => { 
  if(!/\d/.test(e.key)) {
    e.preventDefault(); 
  }
  
  let curLen = tel_input.value.length;
  if (curLen < old) {
    old--;
    return
  }

  switch (curLen) {
    case 3: 
      tel_input.value = tel_input.value + '(';
      break;
    case 7:
      tel_input.value = tel_input.value + ") ";
      break;
    case 12:
      tel_input.value = tel_input.value + "-";
      break;
    case 15:
      tel_input.value = tel_input.value + "-";
      break;
    case 18:
      tel_input.value = tel_input.value.substring(0, tel_input.value.length - 1);
      break;
  }
  old++;
});


const clear_btn = document.getElementById('clear_btn');

selectors.forEach(selector => {
  let head = selector.children[0];
  let title = head.children[0];
  title.attributes.defValue = title.textContent;
})

clear_btn.addEventListener('click', ev => {
  ev.preventDefault();
  selectors.forEach(selector => {
    let head = selector.children[0];
    let title = head.children[0];
    title.textContent = title.attributes.defValue;
    title.style.color = '#9c9c9c';
  })
  price_inputs.forEach(input => {
    input.value = null;
    input.style.border = 'none';
  })
})





