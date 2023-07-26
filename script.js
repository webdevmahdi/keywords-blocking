let words = [
    'me',
    'you',
    'he',
    'she',
    'it',
    'they',
    'we',
    'john',
    'do',
    'the',
    'same',
    'work',
    'again',
    'and',
    'again'
];
let button = document.getElementById('request');
let searchField = document.getElementById('search');
let searchText = searchField.value;
searchField.addEventListener('keypress', (event) =>{
    if(event.key === 'Enter'){
        button.click();
    }
})
button.addEventListener('click', function () {
    let searchField = document.getElementById('search');
    let searchText = searchField.value;
    let content = document.getElementById('text');
    content.textContent = '';
    for (let i = 0; i <= words.length; i++) {
        if (searchText === words[i]) {
            let div = document.createElement('div');
            div.innerHTML = `
             <h1>Please use right keywords</h1>
            `;
            content.appendChild(div);
        }
        else if(searchText === ''){
            let div = document.createElement('div');
            div.innerHTML = `
             <h1>Please wright something</h1>
            `;
            content.appendChild(div);
        }
        else{
            let div = document.createElement('div');
            div.innerHTML = `
             <h1>Your data is loading...</h1>
            `;
            content.appendChild(div);
        }
    }
    searchField.value = '';
})