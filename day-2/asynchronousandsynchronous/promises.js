const promise = new Promise((res, rej) => {
    setTimeout(() => {
        res("Hii");
    }, 3000);
});

promise
    .then(() => {
        console.log("3 seconds passed");
    })
    .catch((error) => {
        console.log("error");
    });

// const pr=new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         resolve("hiee");
//         console.log("heyyyy");

//     },5000);
// });

// pr.then((res) => {
//     console.log(res);
//     console.log("hey");
// });


// Simulate two asynchronous API calls (promise.all)
// const fetchUserProfile = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id: 1, name: "Alice" });
//     }, 1000); // Takes 1 second
//   });
// };

// const fetchUserPosts = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(["Post 1", "Post 2", "Post 3"]);
//     }, 1500); // Takes 1.5 seconds
//   });
// };

// async function loadDashboard() {
//   console.time("Dashboard Load Time");

//   try {
//     // Run both promises concurrently
//     const [user, posts] = await Promise.all([
//       fetchUserProfile(),
//       fetchUserPosts()
//     ]);
//     console.log("User:", user);
//     console.log("Posts:", posts);
//   } catch (error) {
//     console.error("Failed to load dashboard data:", error);
//   }

//   // Takes ~1.5s total (the slowest operation), NOT 2.5s!
//   console.timeEnd("Dashboard Load Time");
// }

// loadDashboard();


// Creates a promise that resolves immediately with the value "Hello, World!"
// const resolvedPromise = Promise.resolve("Hello, World!");

// resolvedPromise.then((data) => {
//   console.log(data); // Output: Hello, World!
// });

// // Simulate three server requests with varying response speeds and failure rates
// const fetchFromServerA = () => new Promise((_, reject) => 
//   setTimeout(() => reject("Server A is down (500)"), 1000)
// );

// const fetchFromServerB = () => new Promise((resolve) => 
//   setTimeout(() => resolve({ data: "Content from Server B" }), 2000)
// );

// const fetchFromServerC = () => new Promise((resolve) => 
//   setTimeout(() => resolve({ data: "Content from Server C" }), 3000)
// );

// async function getFastestResource() {
//   try {
//     // Tries all three simultaneously, resolves with Server B because:
//     // - Server A fails at 1s (ignored!)
//     // - Server B succeeds at 2s (WINS!)
//     // - Server C succeeds at 3s (ignored, already got B)
//     const result = await Promise.any([
//       fetchFromServerA(),
//       fetchFromServerB(),
//       fetchFromServerC()
//     ]);

//     console.log("Success:", result);
//   } catch (error) {
//     console.error("All servers failed:", error);
//   }
// }

// getFastestResource();
// // Output (after 2s):
// // Success: { data: 'Content from Server B' }