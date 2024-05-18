const legend__list = document.querySelector('.legend__list')
const btn = document.querySelector('.btn')
const name = document.getElementById('name')
const price = document.getElementById('price')
const selectCategory = document.getElementById('selectCategory')
const tbody = document.getElementById('tbody')
const legend__item = document.querySelectorAll('.legend__item')
const legend__price = document.querySelectorAll('.legend__price')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    let tr = document.createElement('tr')
    tr.classList.add('purcashes__item')
    tr.classList.add('purcashes__row')

    tbody.appendChild(tr)
    let td1 = document.createElement('td')
    td1.classList.add('purcashes__td')
    tr.appendChild(td1)
    td1.textContent = name.value

    let td2 = document.createElement('td')
    td2.classList.add('purcashes__td')
    tr.appendChild(td2)
    td2.textContent = selectCategory.value

    let td3 = document.createElement('td')
    td3.classList.add('purcashes__td')
    tr.appendChild(td3)
    td3.textContent = price.value

    let td4 = document.createElement('td')
    td4.classList.add('purcashes__td')
    tr.appendChild(td4)


    let i = document.createElement('i')
    i.classList.add('purcashes__item-del')
    i.classList.add('fa-solid')
    i.classList.add('fa-xmark')
    td4.appendChild(i)
    i.addEventListener('click', () => {
        tbody.removeChild(tr)
    })

    name.value = ''
    price.value = ''
    if (td2.textContent === "Продукты") {
        if (td3.textContent > 0) { legend__price[0].textContent = parseInt(legend__price[0].textContent) + parseInt(td3.textContent) } else {
        }
    }
    if (td2.textContent === "ФастФуд") {
        if (td3.textContent > 0) { legend__price[1].textContent = parseInt(legend__price[1].textContent) + parseInt(td3.textContent) } else {
        }
    }
    if (td2.textContent === "Спорт") {
        if (td3.textContent > 0) { legend__price[2].textContent = parseInt(legend__price[2].textContent) + parseInt(td3.textContent) } else {
        }
    }
    if (td2.textContent === "Напитки") {
        if (td3.textContent > 0) { legend__price[3].textContent = parseInt(legend__price[3].textContent) + parseInt(td3.textContent) } else {
        }
    }
    if (td2.textContent === "Видеоигры") {
        if (td3.textContent > 0) { legend__price[4].textContent = parseInt(legend__price[4].textContent) + parseInt(td3.textContent) } else {
        }
    }
    if (td2.textContent === "Развлечения") {
        if (td3.textContent > 0) { legend__price[5].textContent = parseInt(legend__price[5].textContent) + parseInt(td3.textContent) } else {
        }
    }
    if (td2.textContent === "Лекарства") {
        if (td3.textContent > 0) {
            legend__price[6].textContent = parseInt(legend__price[6].textContent) + parseInt(td3.textContent)
        } else {
        }
    }
    if (td2.textContent === "Другое") {
        if (td3.textContent > 0) { legend__price[7].textContent = parseInt(legend__price[7].textContent) + parseInt(td3.textContent) } else {
        }
    }
})

// <!-- <tr class="purcashes__item purcashes__row" data-category="product">
//                             <td class="purcashes__td">Вода</td>
//                             <td class="purcashes__td">Напитки</td>
//                             <td class="purcashes__td">1200</td>
//                             <td class="purcashes__td"><i class="purcashes__item-del fa-solid fa-xmark"></i></td>
//                         </tr> -->