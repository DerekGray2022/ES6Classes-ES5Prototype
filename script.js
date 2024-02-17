let users = [];

class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
        users.push(this);
    };

    logIn() {
        console.log(`${this.name} has logged IN.`);
        return this;
    };

    logOut() {
        console.log(`${this.name} has logged OUT.`);
        return this;
    };

    updateScore() {
        this.score++;
        console.log(`${this.email}'s score is now ${this.score}`);
        return this;
    };
};

class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => {
            return u.email !== user.email;
        });
    };
};

const user01 = new User('lou@velvets.com', 'Lou Reed');
const user02 = new User('john@velvets.com', 'John Cale');
const admin = new Admin('sterling@velvets.com', 'Sterling Morrison');

console.log(users);

console.log(user01);
console.log(user02);
console.log(admin);

user01.logIn().updateScore().updateScore().logOut();
admin.deleteUser(user02);

console.log(users);
const myUser = Object.getPrototypeOf(user01);
console.log(myUser);




