function draw() {
    var calendar = document.getElementById('calendar')
    var decades = 8
    var years = 10
    var weeks = 52
    for (let decade=0; decade<decades; decade++){
        var d = document.createElement('div')
        d.className = 'decade'
        for (let year=0; year<years; year++){
            for(let week=0; week<weeks; week++){
                var square = document.createElement('div')
                square.className = 'square'
                d.appendChild(square)
                console.log('test')
            }
        }
        calendar.appendChild(d)
    }
  }