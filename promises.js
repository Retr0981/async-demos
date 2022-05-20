const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let errorMessage = "There was an error";
    reject(new Error(errorMessage));
  }, 4000);
});
promise
   .then(result => console.log("Result", result))
   .catch(error => console.log("Error", error));