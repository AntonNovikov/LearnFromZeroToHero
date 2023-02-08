function rotate(){
    let goole = document.querySelector('#logo-default');
    var x = 0;
    function go(){
        goole.getElementsByClassName.transform = `rotate(${x}deg)`;
        x+=1;
    }
    setInterval(go,200)
}