const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const buttonChangeListDesc = document.querySelector('button.description');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');

toggleList.addEventListener('click', () => {

  if(listDiv.style.display == 'none'){

    toggleList.textContent = 'hide list';
    listDiv.style.display = 'block';
  } else {

    toggleList.textContent = 'show list';
    listDiv.style.display = 'none';    
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

listDiv.addEventListener("mouseover", (event) => {

  if (event.target.tagName === "LI") {
    event.target.textContent = event.target.textContent.toUpperCase(); 
  }
});

listDiv.addEventListener("mouseout", (event) => {

  if (event.target.tagName === "LI") {
    event.target.textContent = event.target.textContent.toLowerCase(); 
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

