function withLogging(originalFunction) {
    let callCount = 0;

    return function(...args) {
        callCount++;
        
        const time = new Date().toLocaleTimeString();
        const functionName = originalFunction.name || "Anonymous";

        console.log(`%c--- [${functionName}] Call #${callCount} at ${time} ---`, 'color: #3498db; font-weight: bold;');
        console.log("Inputs:", args);
        
        const result = originalFunction(...args);
        
        console.log("Output:", result);
        return result;
    }
}

const add = (a, b) => a + b;
const multiply = (a, b, c) => a * b * c;
const greet = (name) => `Hello, ${name}!`;

const smartAdd = withLogging(add);
const smartMultiply = withLogging(multiply);
const smartGreet = withLogging(greet);

smartAdd(12, 8);
smartAdd(50, 25);
smartMultiply(2, 5, 10);
smartGreet("Moni");