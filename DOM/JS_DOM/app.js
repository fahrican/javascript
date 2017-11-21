const toggleList = document.getElementById('toggleList');
const buttonChangeListDesc = document.querySelector('button.description');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');

toggleList.addEventListener('click', () => {

  const list = document.querySelector('.list');

  if(list.style.display == 'none'){

    toggleList.textContent = 'hide list';
    list.style.display = 'block';
  } else {

    toggleList.textContent = 'show list';
    list.style.display = 'none';    
  }
});

buttonChangeListDesc.addEventListener('click', () => {
  // body...
  const inputText = document.querySelector('input.description');
  const pDescription = document.querySelector('p.description');

  if (inputText.value) {
    pDescription.innerHTML = inputText.value; 
    inputText.value = "";
  }

}); 

addItemButton.addEventListener('click', () => {

  const addItemInput = document.querySelector('input.addItemInput');
  const ulTag = document.querySelector("ul");
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  if (li.textContent) {
    ulTag.appendChild(li);
    addItemInput.value = "";
  }

});


removeItemButton.addEventListener('click', () => {

  const ulTag = document.querySelector("ul");
  let lastLi = document.querySelector("li:last-child");

  if (lastLi) {
    ulTag.removeChild(lastLi);
  } 

});

