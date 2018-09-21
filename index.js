const inquire = require('inquirer');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'Great_Bay',
});

const start = () => {
    inquire.prompt(
        [
            {
                type: "list",
                name: "choice",
                message: "Would like to POST and item or BID on an item?",
                choices: ["Post item","Bid on an item"]
            }
        ]
    ).then((res) => {
        console.log('༼ つ ◕ ◕ ༽つ Sending Energy ༼ つ ◕ ◕ ༽つ ' + res.choice + ' ༼ つ ◕ ◕ ༽つ');
        if (res.choice === "Post item") {
            postItem();
        }else {
            bidItem();
        }
    })
};

const postItem = () => {
    inquire.prompt([
        {
            type: 'input',
            name: "item",
            message: "What item are you posting"
        },
        {
            type: 'input',
            name: 'price',
            message: 'Enter a starting price'
        }
    ]).then((res) => {
        let value = [];
        value.push(res.item);
        value.push(res.price);

        postDB(value);
    })
};

const bidItem = () => {
    inquire.prompt([
        {
            type: 'input',
            name: "item",
            message: "What item are you posting"
        },
        {
            type: 'input',
            name: 'price',
            message: 'Enter a starting price'
        }
    ]).then((res) => {
        let value = [];
        value.push(res.item);
        value.push(res.price);

        postDB(value);
    })
};

start();
