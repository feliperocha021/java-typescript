"use strict";
var UserAction;
(function (UserAction) {
    class User {
        constructor(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
    }
    let userList = [];
    function createUser(name, age, gender) {
        const u = new User(name, age, gender);
        userList.push(u);
        return u;
    }
    UserAction.createUser = createUser;
    function getUsers() {
        return userList;
    }
    UserAction.getUsers = getUsers;
})(UserAction || (UserAction = {}));
