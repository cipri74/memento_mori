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
            // index.classList.add('square')
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

function fill_calendar(e) {
    // TODO clean_calendar()
    let squares = document.getElementsByClassName('square')
    let current_date = new Date()
    let date = document.getElementById('date-input')
    if (date.value === ''){
        console.log('Nothing')
    }
    else{
        date = Date.parse(date.value)
        if (date >= current_date){
            console.log('Future Date')
        }
        else{
            let age_in_days = Math.ceil((current_date - date) / (1000 * 60 * 60 * 24 * 7)) // TODO correct formula
            for (let i=0;i<squares.length; i++){
                age_in_days--
                
                squares[i].classList.add('square-black');
                if (age_in_days == 0) break
            } 
        }
    }
}

function main() {
    draw_calendar()
    document.getElementById('date-button').addEventListener('click', fill_calendar)
}

