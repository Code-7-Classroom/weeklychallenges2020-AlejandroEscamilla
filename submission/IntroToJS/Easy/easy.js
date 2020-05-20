var name1 ='Alejandro';
var name2 ='Ordaz';
var difference = (name1.length - name2.length)
document.write ('Hello! My full name is '+ name1 +' '+ name2 +'.');

if(name1.length > name2.length)   {
    document.write(" My first name is longer than my last name.");
} else {
    document.write(" My last name is longer than my first name.");
} 
document.write(' '+ name1 +' has '+ difference +' more characters than '+ name2 +'.'); 

console.log ('Hello! My full name is '+ name1 +' '+ name2 +'.');

if(name1.length > name2.length)   {
    console.log (" My first name is longer than my last name.");
} else {
    console.log (" My last name is longer than my first name.");
} 
console.log (' '+ name1 +' has '+ difference +' more characters than '+ name2 +'.'); 
