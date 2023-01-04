// https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API

// https://techrocks.ru/2022/09/07/12-javascript-web-api-for-your-website/

var enterFullscreen = function(el) {
    if(el.requestFullscreen) {
      el.requestFullscreen();
    } else if(el.msRequestFullscreen) {
      el.msRequestFullscreen();
    } else if(el.mozRequestFullScreen) {
      el.mozRequestFullScreen();
    } else if(el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else {
      noFullscreenSupport();
    }
  };
  
  var exitFullscreen = function() {
    if(document.exitFullscreen) {
      document.exitFullscreen();
    } else if(document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if(document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if(document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else {
      noFullscreenSupport();
    }
  };
  
  var noFullscreenSupport = function() {
    alert('Your browser does not support the Fullscreen API.');
  };
  
  var fullscreenButton = document.getElementById('fullscreen-button');
  fullscreenButton.addEventListener('click', function(e) {
    e.preventDefault();
    if((window.innerWidth === screen.width && window.innerHeight === screen.height) || (window.fullScreen)) {
      exitFullscreen();
    } else {
      enterFullscreen(document.documentElement);
    } 
  });
  
  var eventList = ["fullscreenchange", "MSFullscreenChange", "mozfullscreenchange", "webkitfullscreenchange"];
  for(event of eventList) {
    window.addEventListener(event, function() {
      if(fullscreenButton.querySelector('.fa').classList.contains('fa-compress')) {
        fullscreenButton.querySelector('.fa').classList.add('fa-expand');
        fullscreenButton.querySelector('.fa').classList.remove('fa-compress');
      } else if(fullscreenButton.querySelector('.fa').classList.contains('fa-expand')) {
        fullscreenButton.querySelector('.fa').classList.remove('fa-expand');
        fullscreenButton.querySelector('.fa').classList.add('fa-compress');
      }
    });
  }


//   el.requestFullscreen()
// document.documentElement.requestFullscreen()
// document.exitFullscreen()

// if (document.exitFullscreen) {    
//     document.exitFullscreen()
// }

// document.fullscreenElement // returns 'null' or the fullscreen-enabled DOM element

// document.fullscreenElement    
//     || document.mozFullscreenElement    
//     || document.msFullscreenElement    
//     || document.webkitFullscreenElement


// function toggleFullScreen() { 
//     if (!document.fullscreenElement) {   
//         document.documentElement.requestFullscreen(); 
//     } else {  
//         if (document.exitFullscreen) {   
//             document.exitFullscreen();  
//         } 
//     }
// }
