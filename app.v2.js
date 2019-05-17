// A singleton object is an immediate anomous function and can only return one instance of an object at a time
// So repeated calls to the constructor will just return the same instance
// Like the module pattern it maintains a private reference what nothing from the outside can access
// So when would you use a singleton, for example if you want 1 user object created at a time, maybe a logged in user, it will prevent you from having  2 users from being created at once. 

const Singleton = (function() {
    let instance;

    function createInstance() {
        const object = new Object({name: 'Philip'});
        return object;
    }

    return {
        getInstance: function() {
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const instanceA = Singleton.getInstance();
console.log(instanceA);

const instanceB = Singleton.getInstance();
console.log(instanceA === instanceB); // True, as you can see we can never have more then one instance.. 

