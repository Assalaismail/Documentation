
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
}

var arraylist=["add", "remove", "edit"];
/**
 * list function
 *
 * @returns {void}
 */
function list(){
  for(let i = 0 ; i < arraylist.length ; i++){
    console.log( i + "." + arraylist[i])
}
}


// The following line starts the application
startApp("Assala")
