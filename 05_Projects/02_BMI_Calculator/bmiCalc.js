const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(form.querySelector('#height').value)
    const weight = parseInt(form.querySelector('#weight').value)
    const results = form.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height: ${height}`
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight: ${weight}`
    }else{

        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        results.innerHTML = `Under Weight<span>${bmi}</span>`
        
        if(bmi < 18.6){
            results.innerHTML = `Under Weight<span>${bmi}</span>`
        }else if(18.6 < bmi && bmi < 24.9){
            results.innerHTML = `Normal Weight<span>${bmi}</span>`

        }else{
            results.innerHTML = `Over Weight<span>${bmi}</span>`
        }
    }
})