const icon=document.querySelector("#icon");
const parent=document.querySelector(".parent");
const kres=document.querySelector("#kres")
icon.addEventListener("click",function(){  
    if(parent.style.display==="none"){
        parent.style.display="block";
        parent.style.transition="1s";
        kres.style.display="block";
        icon.style.display="none"
        kres.addEventListener("click", function(){
                    kres.style.display="none";
        icon.style.display="block"
        parent.style.display="none";
        })
    }
    else{
        parent.style.display="none";
            parent.style.transition="1s";

    }
    
})