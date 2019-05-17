// Also called the factory method in JS which is a way of creating an interface or creating objects
// We can let subclasses define which classes to instantiate 
// OFten used in applications to manage, maintain and manipulate collections of objects that are different but at the same time have a lot of common characteristics
// For example a member, which can have a payed membership on a website or application, which can be different types, but still have the same properties and methods

function MemberFactory() {
    this.createMember = function(name, type) {
        let member;

        if(type === 'simple') {
            member = new SimpleMembership(name);
        } else if (type === 'standard') {
            member = new StandardMembership(name);
        } else if ( type === 'super') {
            member = new SuperMembership(name);
        }

        member.type = type;

        member.define = function() {
            console.log(`${this.name} (${this.type}): ${this.cost}`);
        }

        return member;
    }
}

const SimpleMembership = function(name) {
    this.name = name;
    this.cost = '$5';
}

const StandardMembership = function(name) {
    this.name = name;
    this.cost = '$15';
}

const SuperMembership = function(name) {
    this.name = name;
    this.cost = '$25';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('Philip Andes', 'super'));
members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Anna Smith', 'standard'));
members.push(factory.createMember('Sam Will', 'super'));

//console.log(members);

// Loop through the members:
members.forEach(function(member) {
    member.define();
});