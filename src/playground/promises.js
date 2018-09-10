const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: "Hannes",
        //     age: 26
        // })
        reject("Something went wrong")
    }, 2000)
})

console.log("before")

promise.then((data) => {
    console.log("1", data)
    
    return new Promise((resolve, reject) => {           // promise chaining 
        setTimeout(() => {
            resolve("my other promise")
        }, 2000)
    })
}).then((str) => {
    console.log("does it run?", str)
}).catch((error) => {               // .catch() to not throw js errors
    console.log("error", error)
})

console.log("after")