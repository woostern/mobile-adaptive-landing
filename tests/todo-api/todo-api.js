const url = 'https://planner.deep-oasis.ru/';

function showUrl() {
    console.log(url);
}

showUrl();
// Получить все задачи
async function getTasks() {
    try {
        const response = await fetch(url+'api/tasks');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getTasks();

async function getTask(id) {
    try {
        const response = await fetch(url+'api/tasks/'+id);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}


async function createTask() {
    try {

        const newTask = {
            title: "Покосить траву",
            status: "todo"
        }

        const createUrl = url + 'api/tasks-todo';

        const response = await fetch(createUrl, {

            method: 'POST',
            body: JSON.stringify(newTask),
            headers: {
                'content-type': 'application/json',
            }
        });



        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// createTask();

async function deleteTask(id) {
    try {

        const deleteUrl = url + 'api/tasks-todo/'+id;

        const response = await fetch(deleteUrl, {
            method: 'DELETE'
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// deleteTask('e06e9eb8-b9e0-46a1-819f-b4804eee288f');

async function renameTask(id, title) {
    try {

        const renamedTask = {
            title: title
        }

        const renameUrl = url + 'api/tasks-todo/'+id;
        const response = await fetch(renameUrl, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(renamedTask)
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

renameTask('298ee5da-cfa9-49ef-91ce-aeb272eed71e', 'приготовить клубничный пирог');

getTask('298ee5da-cfa9-49ef-91ce-aeb272eed71e');

// Projects

// Получить все проекты

async function getProjects() {
    try {
        const response = await fetch(url+'api/projects');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getProjects();

// Создать проект

async function createProject() {
    try {
        const newProject = {
            name: "Ремонт"
        }

        const createUrl = url + 'api/projects';

        const response = await fetch(createUrl, {
            method: 'POST',
            body: JSON.stringify(newProject),
            headers: {
                'content-type': 'application/json',
            }
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

createProject();

// Получить задачу

async function getProject(id) {
    try {
        const response = await fetch(url+'api/projects/'+id);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}

getProject('56400c27-eec9-4c5d-8de9-d42cc42d83b0');

// Переименовать проект

async function renameProject(id, name) {
    try {
        const renamedProject = {
            name: name
        }

        const renameUrl = url + 'api/projects/'+id;
        const response = await fetch(renameUrl, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(renamedProject)
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

renameProject('c46fe7d6-e6ae-42f3-bbfa-4063191f58b2', 'Работа');

getProjects();

// Удалить проект

async function deleteProject(id) {
    try {
        const deleteUrl = url + 'api/projects/'+id;

        const response = await fetch(deleteUrl, {
            method: 'DELETE'
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

deleteProject('5eebc878-8c13-4319-b8c2-f2cb08e1ed3e');

getProjects();