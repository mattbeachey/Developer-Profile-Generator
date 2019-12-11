const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt([{
    message: "Enter your GitHub username",
    name: "username"
  },
  {
    message: "Please select one of the following colors:",
    type: "checkbox",
    name: "colors",
    choices: ["red", "blue", "green", "orange"]
  }])
  
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}`;


    axios.get(queryUrl).then(function(response) {
        console.log(response.data.public_repos)
        console.log(response.data.name)
        console.log(response.data.bio)
        console.log(response.data.avatar_url)
        
    //   console.log(response.data[response.data.length-1]);
    //   const repoNames = response.data.map(function(repo){
    //     return repo.name
    //   });
    //   console.log(repoNames)

      const repoNamesString = repoNames.join("\n")
    //   console.log(repoNamesString)
    //   fs.appendFile("log.txt", repoNamesString, function(err){
    //       if (err){
    //         console.log(err)
    //       }
    //   });
      
      })

      // const names = response.data.map
      // console.log(response.data.name)
      // names.foreach(function(name){
      //   console.log(name);
      // })
    // });
  });