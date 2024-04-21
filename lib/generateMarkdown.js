function generateMarkdown (data){
    return `

# Title : 
${data.title}
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

##  Description:

${data.Discription}
    

### Table Of Contents:
* [Installation](#installation)
* [testing](#testing)
* [contribution](#contribution)
* [usage](#usage)
* [github](#github)   
* [email](#email)  
* [license](#license)  

### Installation:
    
${data.installation}

### testing

${data.testing}

### contribution

${data.contribution}

### usage

${data.usage}

### github

Please check my other projects at

[Github Profile](https://github.com/${data.github})

### email

If you have any questions regarding this project please reach me at
${data.email}

### license

This Project is licensed under
${data.license}
For further information reagarding License please check 
[this](https://choosealicense.com/licenses/) link

`

}


module.exports = generateMarkdown