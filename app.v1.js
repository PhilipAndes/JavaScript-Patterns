// Basic structure

(function() {
    // Declare private vars and functions
    // We cant acces it out of the module

    return {
        // Declare public vars and functions
    }
})();

// this is the blueprint for the module pattern
// We use an iify - Immediately invoked function expression
// We have to wrap it in paretheses to make it an expression
// A anomonous function
// We need paretheses after it to run it. 

//////////////////////////////////////////////////////////////////////////

// Standard Module pattern:

// Lets create a module called UI controller:
const UICtrl = (function() {
    let text = 'Hello World';

    const changeText = function() {
        // Lets get the h1 from the UI and change the text
        const element = document.querySelector('h1');
        // So any variable we set above we can access here:
        element.textContent = text;
    }
    // Both of these are private, so we cant access them out of this module so what we have to do is, return something from this module:
    // What we return is public, what we can access from outside:
    return {
        // Lets create a function:
        callChangeText: function() {
            // Call changeText function from above
            changeText();
            console.log(text);
        }
    }
})();

// So to call the function above we say:
UICtrl.callChangeText();

// But we cannot say:
// UICtrl.changeText();
// Because it is in the private part of the module

// And for:
// console.log(UICtrl.text); // Undefined

//////////////////////////////////////////////////////////////////////////

// Revealing module pattern

const ItemCtrl = (function() {
    let data = [];
    // A lot of the times a PRIVATE variable is writed with a underscore like: let _data = []; 

    function add(item) {
        data.push(item);
        console.log('Item Added...')
    }

    function get(id) {
        return data.find(item => {
            return item.id === id;
        });
    }

    // Public:
    return {
        add: add,
        get: get
    }
})();

ItemCtrl.add({id: 1, name: 'John'});
console.log(ItemCtrl.get(1)); // 1 John

// The difference here with the standard pattern is that here we are mapping or returning an object literal that directly reveals methods that are in the module