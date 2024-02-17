//      ES5 Prototype Method
let users = [];

//      Constructor
function User(email, name) {
    this.name = name;
    this.email = email;
    this.online = false;
    users.push(this);
};

//      Prototype Constructor
User.prototype.logIn = function () {
    this.online = true;
    console.log(`${this.name} has logged IN.`);
};

User.prototype.logOut = function() {
    this.online = false;
    console.log(`${this.name} has logged OUT.`);
};

//      Inheritance
function Admin(...args) {
    User.apply(this, args);
    this.role = 'Administrator';
};
//      Prototypes
Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function (user) {
    users = users.filter(u => {
        if (u.name === user.name) {
            console.log(`${user.name} has been deleted.`);
        }
        return u.name !== user.name;
    });
};


const user01 = new User('lou@velvets.com', 'Lou Reed');
const user02 = new User('john@velvets.com', 'John Cale');
const user03 = new User('sterling@velvets.com', 'Sterling Morrison');
const admin = new Admin('moe@velvets.com', 'Moe Tucker');

console.log(users);
user02.logIn();
admin.logIn();
admin.deleteUser(user02);
console.log(users);
admin.logOut();






