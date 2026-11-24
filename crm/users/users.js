const users = [
    {
        id: 1,
        name: 'John',
        email: 'johnjohn@test.ru'
    },
    {
        id: 2,
        name: 'Anna',
        email: 'annaanna@test.ru'
    }
];

function renderUsers() {
    const usersDiv = document.getElementById('users');
    users.forEach((user) => {

        const card = document.createElement('div');
        card.classList.add('card');
        const name = document.createElement('h2');
        name.textContent = user.name;

        const email = document.createElement('h2');
        email.textContent = user.email;

        const id = document.createElement('h2');
        id.textContent = user.id;

        card.append(id);
        card.append(email);
        card.append(name);

        usersDiv.append(card);
    })

}

renderUsers();

function addTask() {
    const text = document.getElementById("schedule-input-form");
    const textInput = text.value.trim();
    if (textInput === "") return;

    const tasks = document.getElementById("schedule-tasks-todo");

    const task = document.createElement("div");
    task.classList.add("schedule__task");

    const label = document.createElement("label");
    label.classList.add("schedule__task-component");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("schedule__tasks--checkbox");

    checkbox.addEventListener("change", () => {
        task.classList.toggle("completed", checkbox.checked);
    });

    label.append(checkbox, textInput);

    const actions = document.createElement("div");
    actions.classList.add("schedule__task-actions");

    const buttonEdit = document.createElement("button");
    buttonEdit.classList.add("button");
    const imgEdit = document.createElement("img");
    imgEdit.classList.add("schedule__tasks-image");
    imgEdit.src = "../../assets/pencil%201.png";
    buttonEdit.append(imgEdit);

    const buttonDelete = document.createElement("button");
    buttonDelete.classList.add("button");
    const imgDelete = document.createElement("img");
    imgDelete.classList.add("schedule__tasks--image-trash");
    imgDelete.src = "../../assets/trash1.png";
    buttonDelete.append(imgDelete);

    actions.append(buttonEdit);
    actions.append(buttonDelete);

    task.append(label);
    task.append(actions);
    tasks.append(task);

    text.value = "";
}

function changeColorTheme() {
    const body = document.body;

    body.classList.toggle("dark-theme");
}