// The idea is to have a mediator to communicate with colleagues, mediated objects
// A chatroom is the best example

const User = function(name) {
    this.name = name;
    this.chatroom = null;
}

User.prototype =  {
    send: function(message, to) {
        this.chatroom.send(message, this, to); // (this is the User above)
    },
    recieve: function(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}

const Chatroom = function() {
    let users = {}; // List of users

    return {
        register: function(user) {
            users[user.name] = user;
            user.chatroom = this; // this is the current chatroom
        },
        send: function(message, from, to) {
            // Here we are going to decide if the message is send to the user or the entire chatroom, so we are going to check this with a if loop for a to value:
            if(to) {
                // Single user message:
                to.recieve(message, from);
            } else {
                // we loop through all the users and do the recieve:
                for(key in users) {
                    // check if it is not the user sending it:
                    if(users[key] !== from) {
                        users[key].recieve(message, from);
                    }
                }
            }
        }
    }
}

const philip = new User('Philip');
const jeff = new User('Jeff');
const sara = new User('Sara');

// create the chatroom, the mediator:
const chatroom = new Chatroom();

// Register the users:
chatroom.register(philip);
chatroom.register(jeff);
chatroom.register(sara);

// So now everyone is registered we want to send messages:
philip.send('Hello Jeff', jeff);
sara.send('Hello Philip, you are the best dev ever!', philip);

// Lets say Jeff wants to set a message to the whole room:
jeff.send('Hello Everyone!!!!');

