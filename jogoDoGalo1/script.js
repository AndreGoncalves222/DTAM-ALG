let symbol = 'X'
const tds = document.querySelectorAll('td')
for (const td of tds) {
    td.addEventListener('click', function () {
        if (this.innerHTML == '') {
            symbol == 'O' ? symbol = 'X' : symbol = 'O'
            this.innerHTML = symbol
        } else {
            alert('Ocupado!')
        }
    })
    

}

/* let addcell = document.querySelector('table')
    if (symbol '') {
        
    } */