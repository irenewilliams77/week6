const button = document.getElementById("timeDelay");

button.addEventListener("click", function() {
   msgTimeout = setTimeout(function() {
        alert("whats up?");
    }, 3000);
    });


     Promise.resolve().then(() =>console.log("resolved"));

    const cancelButton = document.getElementById("cancelTimeDelay");
    let msgTimeout = null;
    
    cancelButton.addEventListener("click", function(){
        console.log(msgTimeout);
        clearTimeout(msgTimeout);
    })
