const fs = require('fs');
const path = require('path');

// const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, "data.json"), "utf-8"));
const users = data.users;

// Controller for creating a user
exports.createUser = (req, res) => {
    users.push(req.body);
    res.status(201).json(users[users.length - 1]);
}

// Controller for getting all users
exports.getAllUsers = (req, res) => {
    res.status(200).json(users);
}

// Controller for getting one user
exports.getOneUser = (req, res) => {
    const userID = +req.params.id;
    const user = users.find((p) => {
        return p.id === userID;
    });
    res.status(200).json(user);
}

// Controller for replacing a user
exports.replaceUser = (req, res) => {
    const userID = +req.params.id;
    const userIndex = users.findIndex((p) => {
        return p.id === userID;
    });
    users.splice(userIndex, 1, {...req.body, id:userID});

    res.status(200).json(users[userIndex]);
}

// Controller for updating a user
exports.updateUser = (req, res) => {
    const userID = +req.params.id;
    const userIndex = users.findIndex((p) => {
        return p.id === userID;
    });
    const oldUser = users[userIndex];
    users.splice(userIndex, 1, {...oldUser, ...req.body});

    res.status(200).json(users[userIndex]);
}

// Controller for deleting a user
exports.deleteUser = (req, res) => {
    const userID = +req.params.id;
    const userIndex = users.findIndex((p) => {
        return p.id === userID;
    });
    const deletedUser = users[userIndex];
    users.splice(userIndex, 1);

    res.status(200).json(deletedUser);
}