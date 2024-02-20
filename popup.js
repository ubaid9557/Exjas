let url = 'https://script.google.com/macros/s/AKfycbwOcBa85KBEGhYBat8aLEv4uMPZOBejABFyF20Y0Wt61TjBKJUYOFZtNOuR6iJaRXwr/exec'
let form = document.querySelector('#form');
form.addEventListener("submit", (e) =>{ 
    e.target.btn.innerHTML="Submintting data....";

    let d=new FormData(form);
    fetch(url, {
        method: "POST",
        body: d
    }).then((res) =>res.text())
    .then((finalRes)=>{
        e.target.btn.innerHTML="submit";
        document.getElementById("res").innerHTML=finalRes;
        form.reset();
        console.log(finalRes)
        setTimeout(()=>{
            document.getElementById("res").innerHTML='';
        },5000)
    })

    e.preventDefault();
})
    
