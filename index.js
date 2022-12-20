function submitData(name, email) {

    const formData = {
        name: name,
        email: email,
    }
    
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData)
    }

   return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
        return response.json();
    })
    .then( data => {
        document.querySelector("body").append(data.id)
    })
    .catch( error => {
        alert("Unauthorized Access")
        document.querySelector("body").append(error.message)
    })

}