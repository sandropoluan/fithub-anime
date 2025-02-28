export default function debounce(callback, waitTime){
    let timeout;
    return function(...arg){
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            if(typeof callback === 'function'){
                callback(...arg);
            }
        }, waitTime)
    }   
}