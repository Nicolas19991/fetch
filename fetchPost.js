const btn = document.getElementById('button');

let form = document.getElementById("form");

form.addEventListener("submit",function(e){
    e.preventDefault();
    console.log("diste click")
    btn.value = 'enviando...';

    
    var formData = new FormData(form);
    formData.append('service_id', 'YOUR_SERVICE_ID');
    formData.append('template_id', 'YOUR_TEMPLATE_ID');
    formData.append('user_id', 'YOUR_PUBLIC_KEY');
    
    
    fetch("https://api.emailjs.com/api/email/send-form", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
        .then(response => response.json()) 
        .then(json => console.log(json))
        .catch(err => console.log(err));
        
});
