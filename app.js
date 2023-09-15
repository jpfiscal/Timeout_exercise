//Exercise 1: countDown Function
function decrement(n){
    n -= 1;
    if(n === 0){
        console.log("DONE!")
    }else{
        console.log(n);
    }
}
function countDown(num){
    for(let i = num; i>0; i--){
        j = num-i+1
        setTimeout(function(){decrement(i)}, j*1000);
    }
}

//Exercise 2: randomGame Function
function randomGame(){
    let RndNum;
    let count = 0;
    let stopTime = setInterval(function(){
        count++;
        RndNum = Math.random();
        if (RndNum > 0.75){
            clearInterval(stopTime);
            console.log(count+" times before number > 0.75 found");
        }
    },1000)
    
        console.log(Math.random);
}