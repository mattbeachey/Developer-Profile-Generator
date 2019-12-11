const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");


let avatarURL;
let name;
let company;
let gitHubURL;
let blogURL;
let publicRepos;
let followers;
let following;
let location;
let bio;
let githubStars;


inquirer
    .prompt([{
        message: "Enter your GitHub username",
        name: "username"
    },
    {
        message: "Choose a color and let's hope HTML knows what it is",
        name: "color",
    }])

    .then(function (data) {
        const queryUrl = `https://api.github.com/users/${data.username}`;
        const queryUrlStarred = `https://api.github.com/users/${data.username}/starred`
        // console.log(data.username)
        // console.log(userColor)

        axios.get(queryUrl).then(function (response) {
            avatarURL = response.data.avatar_url;
            name = response.data.name;
            company = response.data.company;
            gitHubURL = response.data.html_url;
            blogURL = response.data.blog;
            publicRepos = response.data.public_repos;
            followers = response.data.followers;
            following = response.data.following;
            location = response.data.location;
            bio = response.data.bio;

            axios.get(queryUrlStarred).then(function (response) {
                githubStars = response.data.length
                // console.log(name, githubStars, data.color)
                let userColor = data.color

                // console.log(userColor)



                const htmlFormat = `
                <html lang="en">

                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
                    <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
                    <title>Document</title>
                    <style>
                        @page {
                            margin: 0;
                        }
            
                        *,
                        *::after,
                        *::before {
                            box-sizing: border-box;
                        }
            
                        html,
                        body {
                            padding: 0;
                            margin: 0;
                        }
            
                        html,
                        body,
                        .wrapper {
                            height: 100%;
                        }
            
                        .wrapper {
                            background-color: ${
                userColor
                }
            
                            ;
                            padding-top: 100px;
                        }
            
                        body {
                            background-color: white;
                            -webkit-print-color-adjust: exact !important;
                            font-family: 'Cabin', sans-serif;
                        }
            
                        main {
                            background-color: #E9EDEE;
                            height: auto;
                            padding-top: 30px;
                        }
            
                        h1,
                        h2,
                        h3,
                        h4,
                        h5,
                        h6 {
                            font-family: 'BioRhyme', serif;
                            margin: 0;
                        }
            
                        h1 {
                            font-size: 3em;
                        }
            
                        h2 {
                            font-size: 2.5em;
                        }
            
                        h3 {
                            font-size: 2em;
                        }
            
                        h4 {
                            font-size: 1.5em;
                        }
            
                        h5 {
                            font-size: 1.3em;
                        }
            
                        h6 {
                            font-size: 1.2em;
                        }
            
                        .photo-header {
                            position: relative;
                            margin: 0 auto;
                            margin-bottom: -50px;
                            display: flex;
                            justify-content: center;
                            flex-wrap: wrap;
            
                            background-color: ${
                userColor
                }
            
                            ;
            
                            color: white
            
                            ;
                            padding: 10px;
                            width: 95%;
                            border-radius: 6px;
                        }
            
                        .photo-header img {
                            width: 250px;
                            height: 250px;
                            border-radius: 50%;
                            object-fit: cover;
                            margin-top: -75px;
                            background-color: white;
            
                            border: 6px solid ${
                userColor
                }
            
                            ;
                            box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
                        }
            
                        .photo-header h1,
                        .photo-header h2 {
                            width: 100%;
                            text-align: center;
                        }
            
                        .photo-header h1 {
                            margin-top: 10px;
                        }
            
                        .links-nav {
                            width: 100%;
                            text-align: center;
                            padding: 20px 0;
                            font-size: 1.1em;
                        }
            
                        .nav-link {
                            display: inline-block;
                            margin: 5px 10px;
                        }
            
                        .workExp-date {
                            font-style: italic;
                            font-size: .7em;
                            text-align: right;
                            margin-top: 10px;
                        }
            
                        .container {
                            padding: 50px;
                            padding-left: 100px;
                            padding-right: 100px;
                        }
            
                        .row {
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: space-between;
                            margin-top: 20px;
                            margin-bottom: 20px;
                        }
            
                        .card {
                            padding: 20px;
                            border-radius: 6px;
            
                            background-color: ${
                userColor
                }
            
                            ;
            
                            color: white
            
                            ;
                            margin: 20px;
                        }
            
                        .col {
                            flex: 1;
                            text-align: center;
                        }
            
                        a,
                        a:hover {
                            text-decoration: none;
                            color: inherit;
                            font-weight: bold;
                        }
            
                        @media print {
                            body {
                                zoom: .75;
                            }
                        }
                    </style>
                <body>
                    <header class="wrapper">
                        <div class="row">
                            <div class="col">
                                <div class="photo-header">
                                    <img src="${avatarURL}">
                                    <h1>Hi!</h1>
                                    <h2>My name is ${name}</h2>
                                    <h5>Currently @ ${company}</h5>
                                    <div class="link-nav">
                                        <a href="https://www.google.com/maps?q=${location}" target="_blank" class="nav-link"><i class="fas fa-location-arrow"></i>${location}</a>
                                        <a href="${gitHubURL}" target="_blank" class="nav-link"><i class="fab fa-github fa-sm"></i>GitHub</a>
                                        <a href="${blogURL}" target="_blank" class="nav-link"><i class="fas fa-rss fa-sm"></i>Blog</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h6>${bio}</h6>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="card">
                                    <h5>Public Repositories</h5>
                                    <h5>${publicRepos}</h5>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <h5>Followers</h5>
                                    <h5>${followers}</h5>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="card">
                                    <h5>GitHub Stars</h5>
                                    <h5>${githubStars}</h5>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <h5>Following</h5>
                                    <h5>${following}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <footer class="wrapper">
                    </footer>
            
            
            
                </body>
            
                </html>
                    `
                
                fs.appendFile("log.html", htmlFormat, function (err) {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        console.log("Success!");
                    }
                });

            })
            //   console.log(response.data[response.data.length-1]);
            //   const repoNames = response.data.map(function(repo){
            //     return repo.name
            //   });
            //   console.log(repoNames)




        })


        // const names = response.data.map
        // console.log(response.data.name)
        // names.foreach(function(name){
        //   console.log(name);
        // })
        // });

    });
