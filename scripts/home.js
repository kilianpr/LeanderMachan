//checks if page was loaded from history, if yes, it reloads since otherwise opacity=0
window.addEventListener( "pageshow", function ( event ) {
    if ( event.persisted ) {
      window.location.reload();
    }
  });


//pulls up hamburger menu if user clicks outside the menu
window.addEventListener('click', function(e){
    if (!document.getElementById("menuToggle").contains(e.target)){
        if (document.getElementById("checkbox").checked){
            document.getElementById("checkbox").checked=false;
        }
    }
});

// sets opacity to 0 when going to different page (which triggers css animation)
window.transitionToPage = function(href){
    document.querySelector('body').style.opacity = 0;
    setTimeout(function(){
        window.location.href = href;
    }, 1000);
}

//adds remove-hashes functionality to buttons and sets opacity of body to 1
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
    document.querySelector('body').style.opacity = 1;
});

function removeHash(){
    history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
}


function openClient(){
    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    const mail_content = document.getElementById("mail-content").value;
    const body = mail_content + '\n' + '\n' + 'Best Regards' + '\n' + name;
    console.log(mail_content);
    console.log(body);
    location.href = 'mailto:leander.machan@gmail.com?subject='+subject+'&body='+encodeURIComponent(body);
}