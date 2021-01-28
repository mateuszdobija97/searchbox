import { colors } from './data.js';

const colorList = document.querySelector('.app__color-list');
const searchBar = document.querySelector('.app__input');
const removeButton = document.querySelector('.app__icon-remove');

removeButton.addEventListener('click', () => {
    searchBar.value = '';
    displayColors(colors);
})

const buildLiElement = (id, name) => {
    const li = document.createElement('li');
        li.classList.add('app__color-item');
        li.id = id;
        li.innerText = name;
        li.addEventListener('click', () => li.style.color = 'green');
        li.addEventListener('dblclick', () => li.style.color = '#bbb');

        colorList.appendChild(li);
}

searchBar.addEventListener('keyup', e => {
    const searchString = e.target.value.toLowerCase();
    const filteredColors = colors.filter(color => (
        color.name.includes(searchString)
    ));
    colorList.innerHTML = '';
    displayColors(filteredColors);
})

const displayColors = (colors) => {
    const divElement = document.createElement('div');
    divElement.innerHTML = colors
        .map(color => (
            buildLiElement(color.id, color.name)
        ))
        .join('');
    colorList.appendChild(divElement);

    if(colors.length) document.title = colors[0].name;
};

displayColors(colors);