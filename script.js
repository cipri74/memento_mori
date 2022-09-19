function draw() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        for (let i=0; i<26; i++)
        {
            for (let j=0; j<10;j++)
            {
                ctx.rect(10, 10, 10, 10);
                ctx.rect(25, 10, 10, 10);
                break;
            }
            break;
        }
        ctx.stroke();
       
    }
  }