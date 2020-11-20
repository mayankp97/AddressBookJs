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

let contact = new Contact('Mayank', 'Purohit','Street A','NY1','NY','548787','87878787','m@gmail.com');

console.log(contact);