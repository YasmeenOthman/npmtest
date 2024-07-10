// node --- js runtime environment /v8 engine
// modules === separated code
// local modules === files
const { printMessage } = require("./index");
printMessage();
// core-modules === built in modules (fs,http,path,os,...)
const fs = require("fs");
const os = require("os");
const http = require("http");
const path = require("path");

// third-party modules /packages (libraries)
// we need to install them (to have an access)
// where to add these packages
// package.json === npm init -y
// install the package itself (express ,mongoose ,bcrypt )
// npm install express
// npm i express

// we require them to use the functionality
// const _ = require();
const express = require("express");

// console.log(_.partition([1, 2, 3, 4, 7], (n) => n % 2));

// development dependencies (jasmine ,webpack )

// global & local
// local ==== project (directory )
// global === pc (command line tool)
