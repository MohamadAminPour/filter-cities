let countryElem = document.querySelector('.country')
let cityElem = document.querySelector('.city')

let datas = {
    khorasanRazavi: ['مشهد', 'نیشابور', 'کلات'],
    tehran: ['شهریار', 'ورامین', 'فیروزکوه'],
    esfahan: ['چادگان', 'خمینی شهر', 'نجف آباد'],
    yazd: ['اردکان', 'بهاباد', 'هرات'],
    tabriz: ['اسکو', 'آذرشهر', 'ملکان'],
    mazandaran: ['گیلان', 'رامسر', 'رشت'],
}


countryElem.addEventListener('change', () => {
    let countries = countryElem.value
    let citties = datas[countries]

    if (countryElem.value === 'selectOstan') {
        cityElem.innerHTML = ``
        cityElem.innerHTML += `<option>شهر</option>`
    }
    else {
        cityElem.innerHTML = ``
        citties.forEach(city => {
            cityElem.innerHTML += `<option>${city}</option>`
        });
    }
})

