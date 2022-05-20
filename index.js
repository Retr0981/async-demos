console.log("before");

console.log("After");

const getUser = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading user from the database");
      resolve({ id: id, gitHubUserName: "David" });
    }, 2000);
  });
};
// //promise based approach
// getUser(1)
//   .then(user => getRepos(user.gitHubUserName))
//   .then(repos => getCommits(repos[0]))
//   .then(commits => console.log(commits))
//   .catch(err => err.message);

//async and await
const displayCommits = async () => {
  try {
    const user = await getUser(1);
    const repos = await getRepos(user.gitHubUserName);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (err) {
    console.log(err.message);
  }
};
displayCommits();
const getRepos = username => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        console.log("fetching repos..");
        // resolve(["repo1", "repo2", "repo3"]);
        reject(new Error("There was an error"));
      },

      2000
    );
  });
};
const getCommits = repo => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        console.log("Fetching commits...");
        resolve(["commit"]);
      },

      2000
    );
  });
};
// Promise.all([getRepos, getCommits]).then(result => console.log(result));
