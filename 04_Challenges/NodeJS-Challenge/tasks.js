
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
  let fs = require('fs');
  const path=require('path');
  try{
    let data=fs.readFileSync(path.join(__dirname, 'files',filename),'utf-8')
    let obj=JSON.parse(data)
    arraylist=obj;
  }
  catch(err){
    console.log(err);
  }
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(text === 'help\n'){
    help()
  }
  else if(text === 'hello\n' || text.startsWith("hello ")){
    hello(text);
  }
  else if(text.startsWith("list")){
   list();
  }
  else if(text.startsWith("add")){
    add(text);
}
else if(text.startsWith("remove")){
  remove(text);
}
else if(text.startsWith("edit")){
  edit(text);
}
else if(text.startsWith("check")){
  check(text);
}
else if(text.startsWith("uncheck")){
  uncheck(text);
}
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 * print hello with name (able to take an argument)
 *
 * @returns {void}
 */
function hello(text){
  text = text.replace("\n", "");
  text = text.trim(" ");
  console.log(text + "!");
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

/**
 *help command
 *
 * @returns {void}
 */
function help(){
  console.log('Ready to help you! you can write exit or quit to exit the app OR')
  console.log('say hello + what do you want')
  console.log('if you want to see the list just write list')
  console.log('if you want to add or remove an item: create add or remove')
  console.log('if you want to edit any item in the list: write edit with the number you want to modify and what the new item.')
  console.log('if you want to check or uncheck any item from the list: just write check or uncheck with the number')
}

var arraylist=["Jan", "Feb", "Mar", "Apr"];
/**
 * list function
 *
 * @returns {void}
 */
function list(){
  if(newarr[arraylist.length-1 ]=== undefined){
    newarr[arraylist.length-1]="[]";}
  for(let i = 0 ; i < arraylist.length ; i++){
   
      console.log(i + ". "  + newarr[i] +arraylist[i]);
  }
  }

/**
 * add task
 *
 * @returns {void}
 */
function add(text){
  if(text === "add\n" || text.substring(5)=== "") {
    console.log("ERROR!");
  }
  else{
   arraylist.push(text.substring(4).trim());
   console.log("Successfully added!");
  }
    
  }

  /**
 * remove from list
 *
 * @returns {void}
 */
function remove(text){
  if(text === "remove\n"){
  arraylist.pop();
  console.log("The last item is removed.")}
  
  else if(text.substring(7)-1 >= arraylist.length){
    console.log("Sorry but this index doesn't exist");
  }
  else{
    arraylist.splice(text.substring(7)-1,1)}; //remove specific item
} 
/*
/**
 * edit
 *
 * @returns {void}
 */
/*function edit(text){
  text=text.trim();
  newtext= text.substring(5).trim();
  if(newtext.startwith("1")){
    arraylist.splice(0,1,newtext.substring(1).trim());
    console.log("done");
  }
  else if(newtext!=""){
   arraylist.splice(list.length-1,1,newtext);
   console.log("last done");
  } 
  else{
    console.log("ERROR!");
  }
}*/

/**
 *  edit
 * 
 * @returns {void}
 */
function edit(text){
  text=text.trim();
  newtext1=text.substring(5).trim();
  newtext2=text.slice(5,7);
  if(text==="edit"){
    console.log("ERROR!");
  }
  else if(isNaN(newtext2)){
    arraylist.splice(arraylist.length-1,1,newtext1);
    console.log("last done");
  }
  else {
    arraylist.splice(newtext2,1,newtext1.substring(1).trim());
    console.log("done");
  }
  }

  /**
 *  check 
 * 
 * @returns {void}
 */
const newarr=[];
for(let i=0; i<arraylist.length; i++){
newarr[i]= "[]";
}
 function check(text){

 new2=text.slice(6,8);
  if(text==="check\n"){
    console.log("ERROR!");
  }
  else{
    text= text.trim();
    text= text.substring(6);
    newarr[Number(text)]=newarr[Number(text)].replace("[]", "[✓]");
    console.log("Checked :) Write list to see it.")
  }
 }

  /**
 *  uncheck 
 * 
 * @returns {void}
 */

function uncheck(text){
  new2=text.slice(8,10);
  if(text==="uncheck\n"){
    console.log("ERROR!");
  }
  else{
    text= text.trim();
    text= text.substring(8);
    newarr[Number(text)]=newarr[Number(text)].replace("[✓]", "[]");
    console.log("unchecked :| Write list to see it.")
  }
}

// The following line starts the application
startApp("Assala")

