const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((btn) => {
    btn.addEventListener('click', function(e) {
        // switch (e.target.id) {
        //     case 'grey':
                // body.style.backgroundColor = e.target.id
        //         break;

        //     case 'white':
        //         body.style.backgroundColor = e.target.id
        //         break;

        //     case 'yellow':
        //         body.style.backgroundColor = e.target.id
        //         break;

        //     case 'blue':
        //         body.style.backgroundColor = e.target.id
        //         break;
        
        //     default:
        //         break;
        // }

        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
        }else if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
        }else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }else{
            body.style.backgroundColor = e.target.id 
        }
    })
})