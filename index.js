// what is npm
// third party modules
// pacakge json
// installing pacakges (where and how)
// dev dependencies -D
// Local and global dependencies
// scripts
// clone a  project from Github or push

// nodejs
// Local modules ===>  files
// core modules ===> built in modules (node js) === fs , http,path,os ....etc
// third-party modules ===> out resources code

// local modules
// function sum(n1, n2) {
//   return n1 + n2;
// }

// module.exports = { sum };

// http ,fs,os ....etc
const fs = require("fs");
const http = require("http");
const os = require("os");

// third-party modules (express , mongoose ,bcrypt)
//  ----- how to have an access to the package (how to install it ?) -----
// npm install <package name>
// npm i express
// npm i mongoose
// ------ where to install it ??? -------
// package.json file (collect data about all the pacakges that you are using in your project)
// node-modules

// npm init OR npm init -y

const _ = require("lodash");

console.log(_.partition([1, 2, 3, 4], (n) => n % 2));

// local pacakges vs global packages (used to run some commands)

// npm i -g <package name>

// nodemon === globally

// development
// npm i -D <package name>

console.log("hi");
