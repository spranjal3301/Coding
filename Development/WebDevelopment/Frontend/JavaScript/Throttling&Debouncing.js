//!Throttling and Debouncing
//*Throttling and Debouncing are two techniques to control the number of times a function can be executed over time.
//*Decrease the number of API calls and increase the performance of the application.



//!Throttling: Limit the number of times a function can be called over time.
//example: scroll event, resize event
//?Throttling is a technique in which, no matter how many times the user fires the event,
//? the attached function will be executed only once in a given time interval.

//~set delay between two fn calls(api call) 
//~Throttling is Debouncing in backend(If you want to debounce in Backend)
function throttle(fn,delay){
    let flag=true;
    return function(){
        if (flag) {
            fn.apply(this, arguments);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, delay);
        }
    }
}
document.querySelector("button").addEventListener("click",throttle(fetchData,1000));

//*Debouncing: Limit the number of times a function can be called after a certain period of time.
//example: click event,input event
//?Debouncing is a technique in which, no matter how many times the user fires the event,
//? the attached function will be executed only after a certain period of time has passed since the last time the event was fired.

//~set delay between last event occurence and fn call(api call)
//~Debouncing is Throttling  in frontend
function debounce(fn,delay){
    let timer;
    return function(){//~return function because of making it chainable(or timer as context)
        let context=this;
        let args=arguments;
        clearTimeout(timer);//~clear previous timer
        timer=setTimeout(()=>{ //~set new timer
            fn.apply(context,args);
        },delay);
    }
}
document.querySelector("button").addEventListener("click",debounce(fetchData,1000));