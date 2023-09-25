

In TypeScript, the void keyword is used as a return type for functions that do not return a value.

For example:

function printMessage(message: string): void {
    console.log(message);
}

This function does not return any value, hence the return type is void.

So, in TypeScript, void is a proper type for telling developers that a function returns undefined.

the second void in this dummy event for exemple: 
@Listen('fow') onCategory(event): void { void this.drawSomething();} :

In TypeScript, the void keyword before a function call like void this.drawSomething(); is used to explicitly discard the return value of the function. This is often done when you want to make it clear that you’re not interested in the return value of a function.

It’s worth noting that this usage of void is not specific to TypeScript, but is also found in other languages like JavaScript.

It’s also not very common, and some developers might find it confusing. It’s usually more common to simply call the function without the void keyword if you intend to ignore the return value. However, using void can sometimes be helpful for making your intentions clear to other developers who might read your code.

It may be used to avoid adding await before a function in an async function. The goal is to suppress the console warning without changing the behaviour.

In JavaScript and TypeScript, the void operator can be used before a function call to explicitly discard its return value. This is particularly useful in the context of asynchronous functions, which always return a Promise.

When you use the await keyword before a function call in an asynchronous function, it causes the function to pause and wait for the Promise to resolve before continuing. However, if you don’t need to wait for the Promise to resolve, you can call the function without the await keyword. This will start the asynchronous operation but allow your code to continue running without waiting for it to finish.

However, some linters (tools that analyze code for potential errors) will warn you if you “float” a Promise like this, because it can lead to unhandled Promise rejections if the Promise is rejected. This is where the void operator comes in handy. By using void before the function call, you’re telling the linter that you’re intentionally not handling the Promise, which suppresses the warning.

Here’s an example:

async function doSomethingAsync() {
    // This will start an asynchronous operation but not wait for it to finish.
    // The linter might warn about a floating Promise here.
    doAsyncStuff();
    
    // Using void suppresses the linter warning.
    void doOtherAsyncStuff();
}

In this example, doAsyncStuff() and doOtherAsyncStuff() are both asynchronous functions that return a Promise. The call to doAsyncStuff() might trigger a linter warning about a floating Promise, while the call to doOtherAsyncStuff() will not, because it’s preceded by the void operator.

It’s important to note that using void in this way should be done with caution. If an error occurs in the Promise returned by the function, it will result in an unhandled Promise rejection, which can be difficult to debug. It’s generally better to handle Promises properly using await or .then(), and only use void to suppress linter warnings when you’re sure it’s safe to do so.