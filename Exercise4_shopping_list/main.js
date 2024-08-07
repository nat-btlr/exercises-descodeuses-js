const buttonAdd = document.querySelector("#buttonAdd");
const listElements = document.querySelector("ul");

buttonAdd.addEventListener("click", function(){
    let liElement = document.createElement('li');
    liElement.innerText = prompt("Enter a product you want to add: ");
    listElements.append(liElement);
    
    liElement.addEventListener('click', function(){
        liElement.remove();
    });
});

