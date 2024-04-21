const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./lib/generateMarkdown")
inquirer.prompt([
    {
        type:"input",
        name:"title",
        message:"Enter Project Title: "
    },
    {
        type:"input",
        name:"Discription",
        message:"Enter Project Discriptiom: "
    },
    {
        type:"input",
        name:"installation",
        message:"Enter Project installation: "
    },
    {
        type:"input",
        name:"testing",
        message:"Enter Project testing: "
    },
    {
        type:"input",
        name:"contribution",
        message:"Enter Project contribution: "
    },
    {
        type:"input",
        name:"usage",
        message:"Enter Project usage: "
    },
    {
        type:"input",
        name:"github",
        message:"Enter Project github: "
    },
    {
        type:"input",
        name:"email",
        message:"Enter Project email: "
    },
    {
        type:"list",
        name:"license",
        message:"Enter Project license: ",
        choices:["MIT","ISC","APACHE 2.0","None"]
    },
]).then(response =>{
    console.log(response);
    fs.writeFileSync("OUTPUT.md",generateMarkdown(response),function(err){
        if(err) console.log(err)
    })
})

