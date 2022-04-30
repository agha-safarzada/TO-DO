const search = document.getElementById('search')
const input = document.querySelector('.label');
const list = document.querySelector('.list ul')
const addingButton = document.querySelector('.button')
const add = document.getElementsByClassName('add')[0]
const sortDesc = document.getElementById('desc')
const sortAsc = document.getElementById('asc')
const removeBtn = document.querySelector('.remove-button')
input.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        add.style.display = "none"
        list.innerHTML += `<li>${e.target.value}<img class="remove-button" src="./assets/Group 77.png" alt="remove"></li>`;
        e.target.value = ''

    }
})

addingButton.addEventListener('click', () => {
    if (!add.classList.contains('hide')) {
        list.innerHTML += `<li>${input.value}<img class="remove-button" src="./assets/Group 77.png" alt="remove"></li>`;
        input.value = ''
        add.classList.add('hide')
    } else if (add.classList.contains('hide')) {
        add.classList.remove('hide')

    }

})
removeBtn.addEventListener('mouseover', () => {
    removeBtn.src = "./assets/Group 70.png"
})
removeBtn.addEventListener('mouseout', () => {
    removeBtn.src = "./assets/Group 77.png"
})
removeBtn.addEventListener('click', () => {
    input.value = ""
})
list.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('remove-button')) {
        e.target.src = "./assets/Group 70.png"
    }
})
list.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('remove-button')) {
        e.target.src = "./assets/Group 77.png"
    }
})
list.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-button')) {
        e.target.parentElement.remove();
    }
})
sortDesc.addEventListener('mouseover', () => {
    sortDesc.src = "./assets/Group 73.png"
})
sortDesc.addEventListener('mouseout', () => {
    sortDesc.src = "./assets/Group 74.png"
})
sortAsc.addEventListener('mouseover', () => {
    sortAsc.src = "./assets/Group 91.png"
})
sortAsc.addEventListener('mouseout', () => {
    sortAsc.src = "./assets/Group 90.png"
})
sortDesc.addEventListener('click', () => {
    sortDesc.style.display = 'none'
    sortAsc.style.display = 'block'
    values = document.querySelectorAll('.list ul li');

    let arr = [];
    values.forEach(element => {
        arr.push(element.textContent)
    });
    arr.sort().reverse()
    for (i = 0; i < arr.length; i++) {
        values[i].innerHTML = `${arr[i]} <img class="remove-button" src="./assets/Group 77.png" alt="remove">`

    }
})
sortAsc.addEventListener('click', () => {
    sortAsc.style.display = 'none'
    sortDesc.style.display = 'block'
    values = document.querySelectorAll('.list ul li');

    let arr = [];
    values.forEach(element => {
        arr.push(element.textContent)
    });
    arr.sort();
    for (i = 0; i < arr.length; i++) {
        values[i].innerHTML = `${arr[i]} <img class="remove-button" src="./assets/Group 77.png" alt="remove">`

    }
})

search.addEventListener("keyup", () => {
    let arr = [...list.children];
    arr.forEach(item => {
        if (!item.innerText.toLowerCase().trim().includes(search.value.toLowerCase())) {
            item.style.display = 'none'


        } else if (item.innerText.toLowerCase().trim().includes(search.value.toLowerCase())) {

            item.style.display = 'flex'
            console.log(item)
            console.log('he')

        }
    })

});
new Sortable(list, {
    animation: 350
});