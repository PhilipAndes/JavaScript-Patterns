// Lets you subscribe or unsubscribe to certain events or functionality so gives us a really nice subscription model
// Can notify the DOM of certain elements to be updated (Angular JS relice heavily on this pattern)

// Create a constructor function
function EventObserver() {
    // Will have 1 property called observers which represents the functions that will be passed into it, it will be an array:
    this.observers = [];

}
// Create prototype
EventObserver.prototype = {
    // it is going to be a function which takes in a function (fn) as we want to be able to subscribe to this function:
    subscribe: function(fn) {
        //Then we want to push it to our observers and pass in the (fn)
        this.observers.push(fn);
        // do a console.log to let the user know he is subscribed to that handler
        // And we dont want to log the whole function, just the name:
        console.log(`You are now subscribed to ${fn.name}`);
    },
    unsubscribe: function(fn) {
        // Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
        this.observers = this.observers.filter(function(item) {
            // We just want an if statement
            if(item !== fn) {
                return item;
            }
        });
        console.log(`You are now unsubscribed from ${fn.name}`);
    },
    // Fire function:
    fire: function() {
        // Loop true the observers:
        this.observers.forEach(function(item) {
            // Then we just want to call whatever the item is:
            item.call();
        });
    }
}

const click = new EventObserver();

// Event listeners 
document.querySelector('.sub-ms').addEventListener('click', function() {
    // Then we want the click we initiazed above and use the subscribe function above
    click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
    // Then we want the click we initiazed above and use the subscribe function above
    click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function() {
    // Then we want the click we initiazed above and use the subscribe function above
    click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function() {
    // Then we want the click we initiazed above and use the subscribe function above
    click.unsubscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click', function() {
    // Then we want the click we initiazed above and use fire function above
    click.fire();
});

// Click handler
const getCurMilliseconds = function() {
    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurSeconds = function() {
    console.log(`Current Seconds: ${new Date().getSeconds()}`);
}