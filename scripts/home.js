//checks if page was loaded from history, if yes, it reloads since otherwise opacity=0
window.addEventListener( "pageshow", function ( event ) {
    if ( event.persisted ) {
      window.location.reload();
    }
    if(sessionStorage.getItem('navToSection')!== "null"){
        setTimeout(function(){
            scrollToSection(sessionStorage.getItem('navToSection'));
            console.log(sessionStorage.getItem('navToSection'));
            sessionStorage.setItem('navToSection', "null");
            console.log(sessionStorage.getItem('navToSection'));
        },1000);
    }
    removeHash();
  });


//pulls up hamburger menu if user clicks outside the menu
window.addEventListener('click', function(e){
    if (!document.getElementById("menuToggle").contains(e.target)){
        if (document.getElementById("checkbox").checked){
            document.getElementById("checkbox").checked=false;
        }
    }
});

window.transitionToPage = function(href) {
    document.querySelector("body").style.opacity = 0;
    setTimeout(function() {
            window.location.href = href;
    }, 1000);

}


//adds remove-hashes functionality to buttons and sets opacity of body to 1
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('body').style.opacity = 1;
});

function scrollToSection(section){
    console.log(section);
    const element = document.querySelector(section)
    try {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
     } catch (error) {
        try {
            element.scrollIntoView({
              block: "center"
            });
            console.log("Smooth not supported, but center");
         } catch (error) {
            try{
                element.scrollIntoView();
                console.log("Smooth and center not supported");

            } catch (error){
                element.scrollIntoView(false);
                console.log("Only false supported");
            }
         }
     }

    if (document.getElementById("checkbox").checked){
        setTimeout(()=>{
            document.getElementById("checkbox").checked=false;
        }, 500);   
    }
}




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
