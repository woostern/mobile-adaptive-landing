// Работа с данными

function sayHello() {
    const message = "Hello world";
    let age = 18;
    // age = "test";

    const numberOne = 15;
    let numberTwo = 20;
    numberTwo = "20 age";
    const numberThree = numberOne + numberTwo;
    console.log(numberThree);
    // console.log(age);
    console.log(message);
}

// sayHello();

function testObject() {
    const client = {
        id: 1,
        name: "Natalya",
        city: "Cydrovo",
        active: true,
        contacts: {
            phone: "+7962000000",
            email: "natalua@mail.ru",
            address: {
                street: "Evropeiskii"
            }
        }
    };
    // console.log(client);
    // console.log(client.name);
    // console.log(client.contacts.email);
    // console.log(client.contacts.address);
    // console.log(client.contacts.address.street);

    client.age = 18;
    console.log(client.age);
    delete client.age;
    console.log(client);
    for (const [key, value] of Object.entries(client)) {
        console.log(key);

    }
    //
    // const copy = {
    //     ...client,
    // }

    const copy = client;
    client.name = "test";
    console.log(copy);
    console.log(client);
}

// testObject();

function testArray() {
    const clients = [
        {
            id: 1,
            name: "Natalya",
            active: true,
            age: 18
        },
        {
            id: 2,
            name: "Cydrovo",
            active: false,
            age: 18
        },
        {
            id: 3,
            name: "Evropeiskii",
            active: true,
            age: 20
        }
    ]
    console.log(clients);
    // clients.forEach((client) => {client.id = 50});
    const newClients = clients.map((client) => {
        return {
            id: client.id,
            name: client.name,
            full: client.id + client.name,
            active: false
        };
    });
    console.log(newClients);
    console.log(clients[1].name);
    // console.log(clients);

    const filteredClients = clients.filter((client) => client.active);
    const notActiveClients = clients.filter((client) => client.active===false);
    const bigClients = clients.filter((client) => client.age > 18);
    console.log(filteredClients);
    console.log(notActiveClients);
    console.log(bigClients);

    const nowActiveClient = clients.find((client) => client.active === false);
    console.log(nowActiveClient);
}

testArray();
