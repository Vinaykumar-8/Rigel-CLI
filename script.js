const handleFunction =()=>{
  send(output);
};

const send =(callback)=>{
  let chat=document.getElementById('textA');
  input=document.getElementById('input');
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
  
  if(val==="HELLO"){
    out="Hello User Welcome To RIGEL_CLI";
  }
  else if(val==="HTML"){
    out=`*  HTML stands for HyperText Markup Language.\n-------------------------------------------\n -It is used to define the structure of the web pages and its components.\n-----------------------------\n -We can even use it define the dynamic web pages when used with CSS and Javascript.\n----------------------------------\n -It is a tag based language which uses pre-defined tags for defining the components. \n-------------------------------\n -The very first line of the html file is <!DOCTYPE html> and it can be saved using the .html file extension.`;
  }
  else if(val==="CSS"){
    out=`*  CSS stands for Cascading-Style Sheets.\n----------------------------------------------\n -It is used to style the HTML elements.\n-----------------------------\n -One can apply CSS to html elements in three distinct ways: \n 1.Internal CSS= Using <style> tag inside the head section of the HTML file and using the selectors name to apply style. \n 2.Inline CSS= Using style attribute inside the opening tag of the element. \n 3.External CSS= In this type of CSS we create an external file woth .css extension and declare all the styles within it, and then we use the <link> tag is inside the head section of HTML file to use tye external css file in it.\n-----------------------------------.
    
    `
  }
  else if(val==="CLEAR"){
    chat.value=`RIGEL HAS CLEANED THE AREA
    ------------------------------`;
  }
  else if(val==="HELP"){
    out=`Here are sone of the keywords you can use:
    1.Clear (To clear the chat area).
    2.HTML (To get info regarding HTML).
    3.CSS (To get info regarding CSS).
    4.Hello (For Greetings).
    5.Explain (To get RIGEL'S introduction).`;
  }
  else{
    out="Sorry, we do not have information regarding that";
  }
  chat.value+=` Response from RIGEL:
  \n ${out} \n ============================`;
};
