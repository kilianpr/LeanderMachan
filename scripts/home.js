window.addEventListener('click', function(e){
    if (!document.getElementById("menuToggle").contains(e.target)){
        if (document.getElementById("checkbox").checked){
            document.getElementById("checkbox").checked=false;
        }
    }
});

document.addEventListener("DOMContentLoaded", function(){
    const menuBtns = document.getElementsByClassName('remove-hash');
    for (var i=0; i<menuBtns.length; i++){
        var menuBtn = menuBtns[i];
        menuBtn.onclick = function(){
            setTimeout(()=>{
                removeHash();
            }, 5);
            if (document.getElementById("checkbox").checked){
                setTimeout(()=>{
                    document.getElementById("checkbox").checked=false;
                }, 500);   
            }
        }
    }
    document.querySelector('body').style.opacity = 1
});

function removeHash(){
    history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
}