let darkMode=true;
const mode=()=>{
  const body=document.getElementById('body');
  if(darkMode){
    body.style.backgroundColor="#fff";
    const footer=document.getElementById('footer');
    const text =document.getElementById('textA');
    text.style.borderColor="#006400";
    footer.style.backgroundColor="#006400"
  }
  else{
    body.style.backgroundColor="#333";
    const footer= document.getElementById('footer');
    const text=document.getElementById('textA');
    text.style.borderColor="#00F0FF";
    footer.style.backgroundColor="#00F0FF";
  }
  darkMode=!darkMode;
};

const handleFunction =()=>{
  send(output);
};

const send =(callback)=>{
  let chat=document.getElementById('textA');
  let input=document.getElementById('input');
  let val=input.value;
  
  if(input.value.trim()!==""){
    input.value="";
    chat.value=` User Input:\n ${val}`;
    chat.value+=" \n";
    chat.scrollTop=chat.scrollHeight;
  }
  callback(val);
};

const output =(val)=>{
  val=val.toUpperCase();
  let out="";
  let chat=document.getElementById('textA');
  
  if(val==="HELLO" || val==="HI"){
    out="Hello User Welcome To RIGEL_CLI";
  }
  else if(val==="HTML" || val==="HYPERTEXT LANGUAGE"){
    out=`*  HTML stands for HyperText Markup Language.
    ------------------------------------
    -It is used to define the structure of the web pages and its components.
    ------------------------------------
    -We can even use it define the dynamic web pages when used with CSS and Javascript.
    ------------------------------------
    -It is a tag based language which uses pre-defined tags for defining the components.
    ------------------------------------
    -The very first line of the html file is <!DOCTYPE html> and it can be saved using the .html file extension.`;
  }
  else if(val==="CSS" || val==="STYLE SHEETS"){
    out=`*  CSS stands for Cascading-Style Sheets.
    ----------------------------------------------
    -It is used to style the HTML elements.
    ----------------------------------------------
    -One can apply CSS to html elements in three distinct ways:
      1.Internal CSS= Using <style> tag inside the head section of the HTML file and using the selectors name to apply style.
      2.Inline CSS= Using style attribute inside the opening tag of the element.
      3.External CSS= In this type of CSS we create an external file with .css extension and declare all the styles\n      within it, and then we use the <link> tag is inside the head section of HTML file to use tye external css file in it.
    ---------------------------------------------`
  }
  else if(val==="JS" || val==="JAVASCRIPT"){
    out=` * JS stands for Javascript.
    ---------------------------------
    -Javascript is scripting language. 
    ---------------------------------
    -When it comes to web development then it is often uses to make the web pages more interactive and dynamic.
    ---------------------------------
    -This language do not uses compilation process for the execution of the code.
    ---------------------------------
    -Nowadays, JS is used for server-side processing while it was introduced for client processing.
    ---------------------------------
    -It has the file extension .js .
    ---------------------------------
    -Also it is a dynamically typed language hence it automatically fetches the data type of the value\n     assigned to the variable.
    -------------------------------------------`
  }
  else if(val==="CLEAR"){
    out=`RIGEL HAS CLEANED THE AREA
  --------------------------------------------`;
  }
  else if(val==="HELP"){
    out=`Here are sone of the keywords you can use:
    1.Clear (To clear the chat area).
    2.HTML (To get info regarding HTML).
    3.CSS (To get info regarding CSS).
    4.JS (To get info regarding Javascript).
    4.Hello (For Greetings).
    5.Explain (To get RIGEL'S introduction).`;
  }
  else if(val==="TIME"){
    out=new Date().toUTCString();
  }
  else if(val==="DATE){
    out= new Date();
  }
  else{
    out="Sorry, we do not have information regarding that";
  }
  chat.value+=`  Response from RIGEL:
  ${out}
  ==========================================`;
};
