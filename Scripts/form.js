const fields = document.querySelectorAll("[required]")




function customValidation(event){
    const field = event.target

    function verifyErrors(){
        let foundError = false

        for(error in field.validity){

            if(error != "customError")
{
    
}        }

        return foundError;
    }

    verifyErrors()

    field.setCustomValidity("Esse campo é obrigatório")
}

for(field of fields)[
    field.addEventListener("invalid", event =>{
        console.log("campo inválido")
    })
]




document.querySelector("form")
.addEventListener("submit", customValidation)