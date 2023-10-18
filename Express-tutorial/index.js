const div = document.querySelector('.frame')
const button = document.querySelector('button')

button.addEventListener('click', ()=>{
    if(button.classList.contains('btn')){
        button.classList.remove('btn')
        div.style.backgroundColor = 'rgb(20, 1, 20)'
        div.style.color = 'cyan'
        button.innerHTML = "Toggle Light mode"
    } else {
        button.classList.add('btn') 
        div.style.backgroundColor = 'white'
        div.style.color = 'black'
        button.innerHTML = "Toggle Dark mode"
    }
})