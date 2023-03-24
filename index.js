function submitData(userName, userEmail) {

    const formData = {
        name: userName,
        email: userEmail,
    };
    
    const configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify(formData),
    };

    return fetch("http://localhost:3000/users", configObject)
    .then(function (res) {
        return res.json();
    })
    .then(function (object) {
        document.body.textContent = object.id
    })
    .catch(function (error) {
        alert("See page for more details on the alert");
        document.body.textContent = error.message;
    })
};

