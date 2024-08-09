const buttonAdd = document.querySelector("#buttonAdd");
const listElements = document.querySelector("ul");

buttonAdd.addEventListener("click", function(){
    let liElement = document.createElement('li');
    liElement.style.display = 'flex';
    liElement.style.alignItems = 'center';

    let checkBox = document.createElement("input");
    checkBox.type = 'checkbox';
    checkBox.style.marginRight = '10px';

    let itemName = prompt("Enter a product you want to add: ");
    liElement.innerHTML = `${checkBox.outerHTML} ${itemName} `;

    let deleteIcon = document.createElement('span');
    deleteIcon.innerHTML = '🗑️';
    deleteIcon.style.cursor = 'pointer';
    deleteIcon.style.marginLeft = '10px';
    liElement.appendChild(deleteIcon);

    listElements.append(liElement);
    
    deleteIcon.addEventListener('click', function(){
        liElement.remove();
    });
});