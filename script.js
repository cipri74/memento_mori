const decades = 8
const years = 10
const weeks = 52

function drawCalendar() {
    var calendarTag = document.getElementById('calendar')
    for (let decade = 0; decade < decades; decade++){
        let newDecadeTag = document.createElement('div')
        newDecadeTag.className = 'decade'
        for (let year = 0; year < years; year++){
            let ageCalendarIndex = (decade * 10) + year + 1
            for(let week = 0; week < weeks; week++){
                let squareTag = document.createElement('div')
                squareTag.className = 'square'
                newDecadeTag.appendChild(squareTag)
            }
            let indexTag = document.createElement('div')
            indexTag.className = 'number'
            if (ageCalendarIndex % 5 == 0 || ageCalendarIndex == 1){
                indexTag.innerText = ageCalendarIndex
            }
            newDecadeTag.appendChild(indexTag)
        }
        calendarTag.appendChild(newDecadeTag)
    }
}

function cleanCalendar(){
    let squares = document.getElementsByClassName('square')
    for (let i=0;i<squares.length; i++){
        squares[i].classList.remove('square-black')
    } 
}

function getAgeInWeeks(birthDate){
    var currentDate = new Date()
    let age = Math.round((currentDate - birthDate) / (1000 * 60 * 60 * 24 * 7))
    let leapYears = Math.round((currentDate.getFullYear() - birthDate.getFullYear()) / 4) - 1
    return age - leapYears
}

function getBirthDate(){
    var birthDateTag = document.getElementById('date-input')
    if (birthDateTag.value === ''){
        console.log('Nothing')
        return false
    }
    birthDate = new Date(birthDateTag.value)
    let age = getAgeInWeeks(birthDate)
    if (age <= 0){
        console.log('Future Date')
        return false
    }
    if (age > 52 * decades * years){
        console.log('Maximum age limit')
        return false
    }
    return age
}

function fill_calendar() {
    cleanCalendar()
    age = getBirthDate()
    if (!age) return
    var squareTags = document.getElementsByClassName('square')
    for (let i = 0; i < squareTags.length; i++){
        age--
        squareTags[i].classList.add('square-black');
        if (age == 0) return
    }
}

function main() {
    drawCalendar()
    document.getElementById('date-button').addEventListener('click', fill_calendar)
}

