const legend__list = document.querySelector('.legend__list')
const btn = document.querySelector('.btn')
const name = document.getElementById('name')
const price = document.getElementById('price')
const selectCategory = document.getElementById('selectCategory')
const tbody = document.getElementById('tbody')
const legend__item = document.querySelectorAll('.legend__item')
const legend__price = document.querySelectorAll('.legend__price')
const unitAll = document.querySelectorAll('.unit')
const itog = document.querySelector('.itog')

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
        if (td3.textContent > 0) {
            if (td2.textContent === "Продукты") {
                legend__price[0].textContent = parseInt(legend__price[0].textContent) - parseInt(td3.textContent)
            }
            if (td2.textContent === "ФастФуд") {
                legend__price[1].textContent = parseInt(legend__price[1].textContent) - parseInt(td3.textContent)
            }
            if (td2.textContent === "Спорт") {
                legend__price[2].textContent = parseInt(legend__price[2].textContent) - parseInt(td3.textContent)
            }
            if (td2.textContent === "Напитки") {
                legend__price[3].textContent = parseInt(legend__price[3].textContent) - parseInt(td3.textContent)
            }
            if (td2.textContent === "Видеоигры") {
                legend__price[4].textContent = parseInt(legend__price[4].textContent) - parseInt(td3.textContent)
            }
            if (td2.textContent === "Развлечения") {
                legend__price[5].textContent = parseInt(legend__price[5].textContent) - parseInt(td3.textContent)
            }
            if (td2.textContent === "Лекарства") {
                legend__price[6].textContent = parseInt(legend__price[6].textContent) - parseInt(td3.textContent)
            }
            if (td2.textContent === "Другое") {
                legend__price[7].textContent = parseInt(legend__price[7].textContent) - parseInt(td3.textContent)
            }
            itog.textContent = parseInt(itog.textContent) - parseInt(td3.textContent)
        }
        tbody.removeChild(tr)

    })

    name.value = ''
    price.value = ''
    if (td2.textContent === "Продукты") {
        if (td3.textContent > 0) {
            legend__price[0].textContent = parseInt(legend__price[0].textContent) + parseInt(td3.textContent)
            //Тут ниже мои безуспешные попытки сделать диаграмму

            //         let o = parseInt(legend__price[0].textContent)/(parseInt(legend__price[1].textContent)+parseInt(legend__price[2].textContent)+parseInt(legend__price[3].textContent)+parseInt(legend__price[4].textContent)+parseInt(legend__price[5].textContent)+parseInt(legend__price[6].textContent)+parseInt(legend__price[7].textContent)+1)*100
            // unitAll[0].style.strokeDasharray = '0'+o
            // unitAll[1].style.strokeDashoffset = o
            itog.textContent = parseInt(itog.textContent) + parseInt(td3.textContent)



        } else {
        }
        td2.style.backgroundColor = 'green'
        td2.style.color = 'white'
    }
    if (td2.textContent === "ФастФуд") {
        if (td3.textContent > 0) {
            legend__price[1].textContent = parseInt(legend__price[1].textContent) + parseInt(td3.textContent)
            itog.textContent = parseInt(itog.textContent) + parseInt(td3.textContent)

        } else {
        }
        td2.style.backgroundColor = 'rgb(255, 174, 0)'

    }
    if (td2.textContent === "Спорт") {
        if (td3.textContent > 0) {
            legend__price[2].textContent = parseInt(legend__price[2].textContent) + parseInt(td3.textContent)
            itog.textContent = parseInt(itog.textContent) + parseInt(td3.textContent)
        } else {
        }
        td2.style.backgroundColor = 'aqua'

    }
    if (td2.textContent === "Напитки") {
        if (td3.textContent > 0) {
            legend__price[3].textContent = parseInt(legend__price[3].textContent) + parseInt(td3.textContent)
            itog.textContent = parseInt(itog.textContent) + parseInt(td3.textContent)
        } else {
        }
        td2.style.backgroundColor = 'violet'

    }
    if (td2.textContent === "Видеоигры") {
        if (td3.textContent > 0) {
            legend__price[4].textContent = parseInt(legend__price[4].textContent) + parseInt(td3.textContent)
            itog.textContent = parseInt(itog.textContent) + parseInt(td3.textContent)
        } else {
        }
        td2.style.backgroundColor = 'red'
        td2.style.color = 'white'
    }
    if (td2.textContent === "Развлечения") {
        if (td3.textContent > 0) {
            legend__price[5].textContent = parseInt(legend__price[5].textContent) + parseInt(td3.textContent)
            itog.textContent = parseInt(itog.textContent) + parseInt(td3.textContent)
        } else {
        }
        td2.style.backgroundColor = 'darkviolet'
        td2.style.color = 'white'
    }
    if (td2.textContent === "Лекарства") {
        if (td3.textContent > 0) {
            legend__price[6].textContent = parseInt(legend__price[6].textContent) + parseInt(td3.textContent)
            itog.textContent = parseInt(itog.textContent) + parseInt(td3.textContent)
        } else {
        }
        td2.style.backgroundColor = 'greenyellow'

    }
    if (td2.textContent === "Другое") {
        if (td3.textContent > 0) {
            legend__price[7].textContent = parseInt(legend__price[7].textContent) + parseInt(td3.textContent)
            itog.textContent = parseInt(itog.textContent) + parseInt(td3.textContent)
        } else {
        }
        td2.style.backgroundColor = 'blue'
        td2.style.color = 'white'
    }
})

legend__item.forEach(function (item, index) {
    item.addEventListener('mouseover', function () {
        unitAll[index].classList.add('hovered');
    });


    item.addEventListener('mouseout', function () {
        unitAll[index].classList.remove('hovered');
    });
});


