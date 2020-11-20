//Welcome to address book program

//UC 2 : Validate
let validate = {
    firstName : fName => new RegExp('^[A-Z][A-Za-z]{2,}$').test(fName),
    lastName : lName => new RegExp('^[A-Z][A-Za-z]{2,}$').test(lName),
    city : city => new RegExp('^[A-Za-z]{4,}$').test(city),
    state : state => new RegExp('^[A-Za-z]{4,}$').test(state),
    zip : zip => new RegExp('^[0-9]{6}$').test(zip),
    phone : phone => new RegExp('^[0-9]{2}[ ][1-9][0-9]{9}$').test(phone),
    email : email => new RegExp('^[A-Za-z0-9]+([._+-][A-Za-z0-9]+)*[@][A-Za-z0-9]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3})?$').test(email),
    validateAll : function(contact){
        for(let key in contact)
            if(key != 'address' && !validate[key](contact[key]))
                throw key + ' is not valid';
    }
    };

//UC1 : Create Contact

function Contact(fName,lName,address,city,state,zip,phone,email){
    this.firstName = fName;
    this.lastName = lName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip  = zip;
    this.phone = phone;
    this.email = email;
    validate.validateAll(this);
}

let contact1 = new Contact('Mayank', 'Purohit','Street A','NYEZ','NYSD','548787','98 9989898989','m@gmail.com');
let contact2 = new Contact('Mukesh','Kumar','Street B','Jodh','Rajasthan','342301','91 9798979897','mukesh@gmail.com');
console.log(contact1);


//UC 3 : Address Book Array 
let AddressBook = [contact1];
AddressBook.push(contact2);
console.log(AddressBook);

//UC4 : find contact 
let nameToFind = 'Mukesh';
let contact = AddressBook.find(c => c.firstName==nameToFind);
console.log(contact);