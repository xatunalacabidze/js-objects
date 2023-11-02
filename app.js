let facebookobject = {
 firstname: " ხათუნა",
 lastname:  "ლაცაბიძე",
 dateofBirth: "1981",
 password: "xatuna1981",
 email: "xatunalacabidze@gmail.com",
 phoneNumber: "555-441-324",
 friends: ["Diana","Dato","Giorgi","Daviti","Eka","Lado","Tamari","Natia"],
 isAuthorized:false,
 imageUrl:"https://www.facebook.com/photo/?fbid=312320151447611&set=pcb.312325444780415&locale=ka_GE",
 imageAlt:"აქ არის ფოტო",
 followedPage:["facebook.com","friends.ge","gmail.com","email.mes.gov.ge"]
 logIn: function() {
    this.isAuthorized = true;
 },
 logOut: function() {
    this.isAuthorized = false;
 }
}

console.log(facebookobject);
