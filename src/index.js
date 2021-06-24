import {task} from './task'
import {project} from './project'

var items = []


function loadPage(){
    populatePage()
    bindButtons()
}

function populatePage(){
    var container = document.querySelector('.container')
    for(var i = 0; i < items.length; i++){
        var item = items[i]
        for(var j = 0; j < item.length; j++){
            if(j == 0){
                var newProject = `<div class="project">
                                    <h2 class="project-title">${items[i][j].title}</h2>
                                    <div class="project-menu">
                                        <button class="plus-button"></button>
                                        <button class="x-button"></button>
                                    </div>
                                  </div>`
                container.insertAdjacentHTML('beforeend', newProject)
            }else{
                var content = items[i][j]
            }
        }
    }
}


function bindButtons(){
    var button = document.getElementById('add-project')
    button.addEventListener('click', createProject)
    bindProjectButtons()
}

function bindProjectButtons(){
    let buttons = document.querySelectorAll('.plus-button')
    buttons.forEach(button => button.addEventListener('click', addTaskToProject))
}


function createProject(){
    var title = prompt("Please enter the project title")
    if(title != null){
        var newobj = new project(title)
        items.push([newobj])
        addNewProjectToPage(newobj)
        bindProjectButtons()
    }

}

function addNewProjectToPage(newobj){
    var container = document.querySelector('.container')
    var newProject = `<div class="project">
                                    <h2 class="project-title">${newobj.title}</h2>
                                    <div class="project-menu">
                                        <button class="plus-button"></button>
                                        <button class="x-button"></button>
                                    </div>
                                  </div>`
    container.insertAdjacentHTML('beforeend', newProject)
}



function addTaskToProject(){
    var project = this.parentElement.parentElement
    var content = project.innerHTML
    project.innerHTML = 
    `<h2 class="project-title">Add Note</h2>
    <form>
        <label for='fdescription'>Task:</label>
        <input type='text' id='fdescription' name="fdescription">
        <label for='fdate'>Due:</label>
        <input type="datetime-local" value="2018-06-12T19:30" id='fdate' name="fdate">
    </form>
    
    `
}




loadPage()