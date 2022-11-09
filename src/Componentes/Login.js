 export function verificar(){
    var usuario = document.getElementById("usuario").value;
    
    var contraseña = document.getElementById("pass").value;
    

    if(usuario=="willian" && contraseña =="123456")
    {
        alert("User and Password correct");
        console.log( usuario +  contraseña);

    }
    else{
        alert("repit you data");
    }
} 