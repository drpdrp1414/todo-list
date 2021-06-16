import {task} from './task'
import {project} from './project'

var items = []


function loadPage(){
    bindButtons()
}

function populatePage(){
    console.log(items)
    var container = document.querySelector('.container')
    for(var i = 0; i < items.length; i++){
        var item = items[i]
        for(var j = 0; j < item.length; j++){
            if(j == 0){
                var newProject = `<div class="project">
                                <h2 class="project-title">${items[i][j].title}</h2>
                             </div>`
                container.innerHTML += newProject
                

            }else{
                var content = items[i][j]
            }
        }
    }
}


function bindButtons(){
    var button = document.getElementById('add-project')
    button.addEventListener('click', createProject)
}

function createProject(){
    var title = prompt("Please enter the project title", "Kitchen")
    if(title != null){
        var newobj = new project(title)
        items.push([newobj])
        
        populatePage()
    }

}

loadPage()