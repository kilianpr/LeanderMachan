window.addEventListener('click', function(e){
    if (!document.getElementById("menuToggle").contains(e.target)){
        if (document.getElementById("checkbox").checked){
            document.getElementById("checkbox").checked=false;
        }
    }
});

