const legend__list = document.querySelector('.legend__list')
const btn = document.querySelector('.btn')
const name = document.getElementById('name')
const price = document.getElementById('price')
const selectCategory = document.getElementById('selectCategory')
const tbody = document.getElementById('tbody')
const legend__item = document.querySelectorAll('.legend__item')
const legend__price = document.querySelectorAll('.legend__price')
const unitAll = document.querySelectorAll('.unit')

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
        if (td3.textContent > 0) { legend__price[0].textContent = parseInt(legend__price[0].textContent) + parseInt(td3.textContent) 
            //Тут ниже мои безуспешные попытки сделать диаграмму
        
    //         let o = parseInt(legend__price[0].textContent)/(parseInt(legend__price[1].textContent)+parseInt(legend__price[2].textContent)+parseInt(legend__price[3].textContent)+parseInt(legend__price[4].textContent)+parseInt(legend__price[5].textContent)+parseInt(legend__price[6].textContent)+parseInt(legend__price[7].textContent)+1)*100
    // unitAll[0].style.strokeDasharray = '0'+o
    // unitAll[1].style.strokeDashoffset = o
    

   
 
        } else {
        }
    }
    if (td2.textContent === "ФастФуд") {
        if (td3.textContent > 0) { legend__price[1].textContent = parseInt(legend__price[1].textContent) + parseInt(td3.textContent)
            
   
         } else {
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

legend__item.forEach(function (item, index) {
    item.addEventListener('mouseover', function () {
       unitAll[index].classList.add('hovered');
    });


item.addEventListener('mouseout', function () {
    unitAll[index].classList.remove('hovered');
 });
});
