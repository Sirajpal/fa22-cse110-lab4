//function main() {
    let d = new Date();
    let time = d.getTime();
    let seconds = time/ 1000;

    let count = 0;
   
    var currInterval = setInterval(timeCallback, 1000, seconds); 


    function timeCallback (seconds) {
        console.log(seconds);
    }
