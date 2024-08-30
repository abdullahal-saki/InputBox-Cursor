const passToggler = document.querySelector('section .form-input .passwordToggler')
const inputPass = document.querySelector ('section .form-input input')

const passTogglerFun = () =>{
    
let { type } = inputPass


    type =='password'? type ='text' : type = 'password'
    type == 'password'? passToggler.innerHTML = `<i class="bi bi-eye-slash"></i>`:
    passToggler.innerHTML = `<i class="bi bi-eye"></i>`

    inputPass.type = type

   console.log(type)
}



passToggler.addEventListener('click', passTogglerFun )

const cursor = document.querySelector('.cursor')
const cursorSm = document.querySelector('.cursorSm')

const customCursor = (event ) => {

    const {pageY:top, pageX:left} = event;
 
    console.log(top);

    cursor.style.top = top +'px'
    cursor.style.left = left +'px'

    cursorSm .style.top = top +'px'
    cursorSm .style.left = left +'px'


    
}

window.addEventListener('mousemove', customCursor)
