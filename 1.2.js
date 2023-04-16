let come = document.querySelector("#come1");
const but1 = document.querySelector("#ekle1");
const ah1 = document.querySelector("#ah");


const ekleme = (e) =>{
    let come_value = come.value;
    let crt = document.createElement("li");
    crt.innerHTML = come_value;
    crt.classList = "add1";
    ah.appendChild(crt);

    const kes = () => {
        crt.style.textDecoration = "line-through"
    }

    crt.addEventListener("click",kes);


    let del = document.createElement("button");
    del.innerHTML = "delete";
    del.classList = "button_";
    crt.appendChild(del);


    const delet = (e) =>{
        ah.removeChild(crt)
        crt.removeChild(del);
    }

    del.addEventListener("click",delet);

    come.value = "";

  };

but1.addEventListener("click",ekleme);





