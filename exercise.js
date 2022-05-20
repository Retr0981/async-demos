function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "David Nii Armah",
        isExplicit: true,
        email:"email"
      });
    }, 4000);
  });
}

function getTopMivies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["movies", "movie2"]);
    }, 4000);
  });
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve();
    }, 4000);
  })
}

const displayCustomers = async () => {
  try {
    const customer = await getCustomer(1);
    console.log("Cusstomer:" , customer);
  
  if (customer.isExplicit) {
    const movies = await getTopMivies();

    console.log("Top movies: ", movies);
    const email = await sendEmail(customer.email, movies);
    console.log("Email sent");
  }
  } catch (err) {
    console.log(err.message);
  }
};

displayCustomers();