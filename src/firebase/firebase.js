import * as firebase from "firebase" //importing all named exports into one variable

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_ATH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database() 
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider()

export { firebase, googleAuthProvider, twitterAuthProvider, database as default }

// // child_removed
// database.ref("expenses").on("child_removed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // child_changed
// database.ref("expenses").on("child_changed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // child_added
// database.ref("expenses").on("child_added", (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // database.ref("expenses")
// //     .once("value")
// //     .then((snapshot) => {
// //         const expenses = []
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             })
// //         })
// //         console.log(expenses)
// //     })

// // database.ref("expenses")
// //     .on("value", (snapshot) => {
// //         const expenses = []
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             })
// //         })
// //         console.log(expenses)
// //     })

// // database.ref("expenses").push({
// //     description: "ice",
// //     note: "",
// //     amount: 3.00,
// //     createdAt: 1000
// // })

// // database.ref("notes").push({
// //     title: "course topics",
// //     body: "react"
// // })

// // database.ref("notes").set(notes)

// // database.ref().on("value", (snapshot) => {
// //     const val = snapshot.val()
// //     console.log(`${val.name} is a ${val.job.title} at ${val.location.city}`)
// // }, (e) => {
// //     console.log("Error with data changing", e)
// // })

// // setTimeout(() => {
// //     database.ref("name").set("Paul")
// // }, 3500)


// // setTimeout(() => {
// //     database.ref().off(onValueChange)
// // }, 7000)

// // setTimeout(() => {
// //     database.ref("age").set(30)
// // }, 10500)

// // database.ref("location/city")
// //     .once("value")
// //     .then((snapshot) => {
// //         const val = snapshot.val()
// //         console.log(val)
// //     }).catch((e) => {
// //         console.log("error fetching", e)
// //     })

// // database.ref().set({
// //     name: "Hannes Asbahr",
// //     age: 26,
// //     stressLevel: 6,
// //     job: {
// //         title: "Software developer",
// //         company: "Google"
// //     },
// //     location: {
// //         city: "Hamburg",
// //         country: "Germany"
// //     }
// // }).then(() => {
// //     console.log("Data is saved!")
// // }).catch((e) => {
// //     console.log("error", e)
// // })

// // database.ref().update({
// //     stressLevel: 9,
// //     "job/company": "Amazon",
// //     "location/city": "Seattle"
// // })

// // database.ref()
// //     .remove()
// //     .then(() => {
// //         console.log("works")
// //     }).catch((e) => {
// //         console.log("geht nicht", e)
// //     })
