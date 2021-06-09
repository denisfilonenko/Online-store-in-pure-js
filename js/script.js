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
      title.className = 'select__title selected'
    })
  }
}
  

