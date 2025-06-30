namespace UserAction {
    class User {
        constructor(
            public name: string,
            public age: number,
            public gender: string
        ) {}
    }

    let userList: User[] = [];

    export function createUser(name: string, age: number, gender: string) {
        const u = new User(name, age, gender)
        userList.push(u);
        return u;
    }

    export function getUsers() {
        return userList;
    }
}