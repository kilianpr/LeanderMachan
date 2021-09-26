function setCountdownTo(dateAsString){ /* Format as 'July 19, 2021 00:00:00 (WET)' */

    let date = new Date(dateAsString);

    var i = setInterval(function(){        
        let curDate = new Date().getTime();
        let differenceInMilli = date - curDate;
        
        let days = Math.floor(differenceInMilli/(24*60*60*1000));
        let hours = Math.floor((differenceInMilli%(24*60*60*1000))/(1000*60*60));
        let minutes = Math.floor((differenceInMilli%(60*60*1000)/(1000*60)));
        let seconds = Math.floor((differenceInMilli%(60*1000))/1000);


        if (differenceInMilli < 0){
            clearInterval(i);
            document.getElementById("timer").innerHTML = "00:00:00:00";
            isOnLoad();
        }

        else{
            document.getElementById("timer").innerHTML = (days<10 ? '0' : '') + days.toString() + ":" + (hours<10 ? '0' : '') + hours.toString() + ":" + (minutes<10 ? '0' : '') + minutes.toString() + ":" + (seconds<10 ? '0' : '') + seconds.toString();
            isOnLoad();
        }
        
    }, 1000);

}

function isOnLoad(){ //Checks if timer is ready, if yes, it removes the loader and displays the timer
    let wrapper = document.getElementById("countdown-wrapper")
    if (window.getComputedStyle(wrapper).display === 'none'){
        if ((document.readyState === 'complete') && (document.getElementById("timer").textContent!="Countdown")) {
            document.getElementById("loader").style.display = 'none';
            wrapper.style.display = 'flex';
        }
    }
}


setCountdownTo('October 2, 2021 19:00:00 (WET)');



window.transitionToPage = function(href) {
    document.getElementById("countdown-wrapper").style.opacity = 0;
    setTimeout(function() {
        if (href.includes("#")){
            page = href.split("#")[0];
            section = href.split("#")[1];
            sessionStorage.setItem('navToSection', "#"+section);
            window.location.href = page;
        }
        else {
            window.location.href = href;
        }
    }, 1000);

}


window.onpageshow = function(event) { // Reloads the page if you go back
	if (event.persisted) {
		window.location.reload();
	}
};


    
