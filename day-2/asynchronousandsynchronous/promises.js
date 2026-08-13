const promise = new Promise((res, rej) => {
    setTimeout(() => {
        res("Hii");
    }, 3000);
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log("error");
    });