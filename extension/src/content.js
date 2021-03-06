let $ = require("jquery");
let databaseHandling = require("./firebase/operations");

let index = require("./index.js");

console.log('hello');

$($.parseHTML(
    '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous"> <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Unica+One"> <link type="text/html" rel="stylesheet" href="/floatycss.css">'
)).appendTo('head');

$.get(chrome.extension.getURL('/src/floatyBoi.html'), function(data) {
    $(data).appendTo('body');
    // Or if you're using jQuery 1.8+:
    // $($.parseHTML(data)).appendTo('body');
});

async function main() {
    localStorage.removeItem('link');
    let currentLink = await index.getCurrentLinkData();
    localStorage.setItem('link', JSON.stringify(currentLink));
    console.log("meme");
}

main();

var checkForPlus = setInterval(checkForPlusFunction, 500);

function checkForPlusFunction(){
    let check = localStorage.getItem('plussed');
    console.log(check);

    if(check === 'true'){
        localStorage.setItem('plussed', 'false');
        let projectName = localStorage.getItem("project"); 
        if (projectName == null) {
            let newProject = prompt("Please enter a project name: ", "New Project");
            localStorage.setItem("project", newProject);
            projectName = newProject;
        }
        let obj = JSON.parse(localStorage.getItem('link'));
        console.log(obj);
        databaseHandling.addSite("z4GwaEY5WXZC17998rIuIZojM7D2", "demo@atiumapp.com", projectName, obj);     
        alert(obj.title + ' has been added under "' + projectName + '".');
    }
}
