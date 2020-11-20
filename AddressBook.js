//Welcome to address book program

//UC1 : Create Contact

function Contact(fName,lName,address,city,state,zip,phone,email){
    this.fullName = fName;
    this.lastName = lName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip  = zip;
    this.phone = phone;
    this.email = email;
}

let contact = new Contact('Mayank', 'Purohit','Street A','NYEZ','NYSD','548787','98 9989898989','m@gmail.com');

console.log(contact);

//UC 2 : Validate
let validate = {
    fullName : fName => new RegExp('^[A-Z][A-Za-z]{2,}$').test(fName),
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

validate.validateAll(contact);