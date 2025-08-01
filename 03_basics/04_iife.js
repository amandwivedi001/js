// Immediately Invoked Function Expressions (IIFE)
// it is used to remove global pollution

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')