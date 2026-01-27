const send =(callback)=>{
  chat=document.getElementById('textA');
  input=document.getElementById('input');

  if(input.value.trim()!=""){
    let value=input.value;
    input.value="";
    callback(val);
    chat.value=`User Input: \n ${chat.value}`;
    chat.scrollTop=chat.scrollHeight;
  }
};

const output =(val)=>{
  val=val.toUpperCase();
  let output="";
  chat=document.getElementById('textA');
  
  if(val.value=="HELLO"){
    output="Hello User Welcome To RIGEL_CLI";
  }
  else if(val.value=="HTML"){
    output=`HTML stands for HyperText Markup Language
    It is used to define the structure of the web pages
    and its components. We can even use it define the
    dynamic web pages when used with CSS and Javascript.
    It is a tag based language which uses pre-defined tags
    for defining the components. The very first line of the
    html file is <!DOCTYPE html> and it can be saved using
    the .html file extension.`
  }
  else if(val.value=="CLEAR"){
    chat.value=`RIGEL HAS CLEANED THE AREA
    ------------------------------`
  }
  else if(val.value=="HELP"){
    output=`Here are sone of the keywords you can use:
    1.Clear (To clear the chat area).
    2.HTML (To get info regarding HTML).
    3.CSS (To get info regarding CSS).
    4.Hello (For Greetings).
    5.Explain (To get RIGEL'S introduction).`
  }
  else{
    output="Sorry, we do not have information regarding that";
  }
  chat.value=`Response from RIGEL:
  \n ${output.value} \n ============================`;
}
