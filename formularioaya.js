const inputs = document.querySelectorAll(".formulario__items")
const form = document.querySelector(".main__form")
const mensaje =document.getElementById("mensaje")
const button = document.querySelector(".form__button")
const label = document.getElementById("label")
const textarea = document.getElementById("textarea")


mensaje.addEventListener("keyup",()=>{

 if(mensaje.nextElementSibling.classList.contains("mensaje")){
    mensaje.nextElementSibling.classList.replace("mensaje","mensaje-js")}
 
 if(mensaje.value.length<1){
    mensaje.nextElementSibling.classList.replace("mensaje-js","mensaje")}
 })


for (let i = 0; i < inputs.length; i++)
     inputs[i].addEventListener("keyup",()=>{
    if(inputs[i].nextElementSibling.classList.contains("form-label"))
        inputs[i].nextElementSibling.classList.replace("form-label","form-js")
    if (inputs[i].value.length<1) {
        inputs[i].nextElementSibling.classList.replace("form-js","form-label")
    }
    })

button.addEventListener("click",()=>{
    alert(`${inputs[0].value} Gracias por esta alienza estratégica, Bienvenidos`)

  form.reset()

  for (let i = 0; i < inputs.length; i++)
  if (inputs[i].value.length<1) {
    inputs[i].nextElementSibling.classList.replace("form-js","form-label")
}

  textarea.classList.replace("mensaje-js","mensaje")
   
})


