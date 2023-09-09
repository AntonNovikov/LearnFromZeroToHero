// [ScreenOrientation](https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation)
// screen.orientation

// https://w3c.github.io/screen-orientation/#dfn-screen-orientation-values-table

// https://techrocks.ru/2022/09/07/12-javascript-web-api-for-your-website/

function getOrientation() {  
    const isPortrait = screen.orientation.type.startswith('portrait')  
    return isPortrait ? 'portrait' : 'landscape'
}

screen.orientation.lock(orientation)
// https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/lock#exceptions