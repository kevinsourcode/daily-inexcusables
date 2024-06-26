const squares = document.querySelector('.squares');

function checkDataLevel(event){
  let dataLevel = parseInt(event.target.dataset.level); 
  switch (dataLevel) {
    case 0:
    case 1:
     event.target.dataset.level = dataLevel + 1;
      break;
    case 2:
      event.target.dataset.level = 0;
      break; 
    default:
      break; 
  }
  console.log(dataLevel);
}

function renderSquares() {
  for (var i = 1; i < 60; i++) {
    let count = i;
    const level = 0;
    squares.insertAdjacentHTML('beforeend', `<li id="${count}" data-level="${level}"></li>`);
  }
}

function clickLevel() {
  const listItems = document.querySelectorAll('li');

  listItems.forEach(item => {
    item.addEventListener('click', checkDataLevel)
  });
};


function navbarDisplayToggle() {
  const navBar = document.querySelector('.trigger');
  const navbarElement = document.querySelector('.tasks-navbar');

  navBar.addEventListener('click', () => {
    navbarElement.classList.toggle('open');
  });

}

function completeTask() {
  const checkboxes = document.querySelectorAll('.checks');

  checkboxes.forEach(checkbox => {
    const textElement = checkbox.nextElementSibling;
    if (checkbox.checked) {
      textElement.classList.add('strike-text');
    } else {
      textElement.classList.remove('strike-text');
    }
  });
}

// Attach event listeners to checkboxes
document.querySelectorAll('.checks').forEach(checkbox => {
  checkbox.addEventListener('change', completeTask);
});


renderSquares();
clickLevel();
navbarDisplayToggle();
completeTask();