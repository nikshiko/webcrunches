let i = 0;

function increment() {
    i++;
    console.log(i);
}

const debounce = (func, wait) => {
    let timeout = null;
    return function(context, ...args) {
        if(timeout) { // Helps ensure that the latest args are considered. 
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
          func.apply(context, args);
        }, wait)
    }

}


const debouncedFunc = debounce(increment, 0);
debouncedFunc(); // 0
debouncedFunc() // 1
setTimeout(() => {
   debouncedFunc() 
}, 100);



