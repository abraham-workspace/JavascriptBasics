// // //array.map(callbackfn, thisArg);
// // let runners = ["Kiplimo", "Kipchumba", "Koskei"];
// // let newArray = runners.map(function(runner){
// //     return `${runner} runs a 100 meters`; //ES6
// // })

// // console.log(runners)
// // console.log(newArray)

// // //example 2: use an arrow functin to do the same
// // const initialFoodPrices = [
// //     { image: "🍕", name: "pizza", price: 1000 },
// //     { image: "🍔", name: "burger", price: 800 },
// //     { image: "🥪", name: "sandwich", price: 600 },
// //   ];

  
// // initialFoodPrices.map((foodObj) => {
// //     console.log(foodObj.price);
// // });


// // let names = ['ben', 'musyoki', 'john']

// // let newNames = names.map((name)=> name.toUpperCase())

// // console.log(newNames)


// //reducing method()
// // array.reduce((accumulator, currentValue, currentIndex, array) => {
// //     // Function body
// //   }, initialValue);
// const reducedVals = [1, 2, 3, 4, 5, 6]
// reducedVals.reduce((prev, next) => {
//     console.log(`prev: ${prev} next: ${next}`);
//     return prev + next;
// });

// console.log(reducedVals);  // 21

// //prev - holds the accumulator/ the lfrt handside value
// //next - hold the current value


// const myDinner = [
//     { image: "🍕", name: "pizza", price: 1000 },
//     { image: "🍔", name: "burger", price: 800 },
//     { image: "🥪", name: "sandwich", price: 600 },
// ];

// // Extract prices using map
// const totalArray = myDinner.map(foodObj => foodObj.price).reduce((prev, next)=> prev+next)
// console.log(totalArray);

// //filter()
// const availableFoods = [
//     { id: "qwe234dfh", name: "Burger", image: "🍔🍔", price: 234 },
//     { id: "qwe2356dxh", name: "Pizza", image: "🍕🍕", price: 400 },
//     { id: "qwe2456yh", name: "Meat", image: "🍖🍖", price: 500 },
//     { id: "qwe2785yh", name: "Chicken", image: "🍗🍗", price: 1200 },
//     { id: "qwe234dfh", name: "Burger", image: "🍔🍔", price: 234 },
//     { id: "qwe2356dxh", name: "Pizza", image: "🍕🍕", price: 400 },
//     { id: "qwe2456yh", name: "Meat", image: "🍖🍖", price: 500 },
//     { id: "qwe2785yh", name: "Chicken", image: "🍗🍗", price: 1200 },
// ];


// const filteredFoods = availableFoods.filter((food) => food.name == 'Pizza')
// console.log(filteredFoods)

// const filteredPrices = availableFoods.filter((foodPrice) =>foodPrice.price> 450)
// console.log(filteredPrices)


// const books = [
//     { title: "The Alchemist", author: "Paulo Coelho", year: 1988, genre: "Fiction" },
//     { title: "Atomic Habits", author: "James Clear", year: 2018, genre: "Self-Help" },
//     { title: "Clean Code", author: "Robert C. Martin", year: 2008, genre: "Programming" },
//     { title: "The Pragmatic Programmer", author: "Andrew Hunt", year: 1999, genre: "Programming" },
//     { title: "Educated", author: "Tara Westover", year: 2018, genre: "Memoir" }
//    ];

//    const genreCount = books.reduce((prev, next) => {
//     prev[next.genre] = (prev[next.genre] || 0) + 1;
//     return prev;
//   }, {});
//   console.log(genreCount);




//synchronous programming => depend on a logic (it does not involve external processes)
// Asynchronous programming => wait for data or an event to be executed!
//    -operations that involve waiting for data.
//    -network requests.

//Callbacks--do not nest them deeply(callback hell).
//Promises -- (pending, fulfilled or rejected) .then() and .catch()
//Async/Await -- async functions return promises and await pauses execution until the Promise is resolved. 


// const add = (a, b)=>{
//     return a+b
// }

// const addCallback = (z, callbackFn)=>{
//     return callbackFn(z, 16)
// }

// console.log(addCallback(10, add))


//simulating a netflix login 
const loginUser = (email, password, callbackFn)=>{
    setTimeout(()=>{
        console.log("We have logged into Netflix!")
        callbackFn({userEmail: email})

    }, 3000)
}

//simulate getiing recently watched videos:
const recentlyWatchedVideo =({userEmail},callbackFn)=>{
    setTimeout(()=>{
        console.log("We have all the recently watched videos!")
        callbackFn({
            userEmail,
            videos: ["Star Wars", "The Mando", "The Lord of The Rings"],
       
        }, 3000)

    })
}

//simulate getting details of one video: 
const getDetailsOfOneVideo = (videos, callbackFn)=>{
    setTimeout(() => {
        console.log("We are getting the details of one video");
        callbackFn({ video: videos.videos[1] });
      }, 3000);

}

loginUser("job@gmail.com", "password", (user) => {
    console.log(user);
  
    recentlyWatchedVideo(user, (videos) => {
      console.log(videos);  

       
      getDetailsOfOneVideo(videos, (videoDetails) => {
        console.log("This is the info of: ", videoDetails.video);
      });
          
    });
  }); 