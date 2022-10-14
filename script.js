function draw_calendar() {
    var calendar = document.getElementById('calendar')
    var decades = 8
    var years = 10
    var weeks = 52
    var calendar_age = 1
    for (let decade=0; decade<decades; decade++){
        var d = document.createElement('div')
        d.className = 'decade'
        for (let year=0; year<years; year++){
            for(let week=0; week<weeks; week++){
                var square = document.createElement('div')
                square.className = 'square'
                d.appendChild(square)
            }
            var index = document.createElement('div')
            index.classList.add('number')
            if (calendar_age % 5 == 0 || calendar_age == 1){
                index.innerText = calendar_age
            }
            calendar_age ++
            d.appendChild(index)
        }
        calendar.appendChild(d)
    }
}

function clean_calendar(){
    let squares = document.getElementsByClassName('square')
    for (let i=0;i<squares.length; i++){
        squares[i].classList.remove('square-black')
    } 
}

function fill_calendar() {
    clean_calendar()
    let birth_date = document.getElementById('date-input')
    if (birth_date.value === ''){
        console.log('Nothing')
        return 
    }
    let current_date = new Date()
    birth_date = Date.parse(birth_date.value)
    let age = Math.floor(Math.floor((current_date.getTime() - birth_date) / (1000 * 60 * 60 * 24)) / 7)
    if (age <= 0){
        console.log('Future Date')
        return
    }
    console.log(age)
    let squares = document.getElementsByClassName('square')
    for (let i=0;i<squares.length; i++){
        age--
        squares[i].classList.add('square-black');
        if (age == 0) return
    }
}

function main() {
    draw_calendar()
    document.getElementById('date-button').addEventListener('click', fill_calendar)
}

