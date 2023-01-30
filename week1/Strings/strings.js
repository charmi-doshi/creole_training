function strLength(str){
    alert("string length is "+str.length)
}

function strSlice(s,e){
    str = "JavaScript".slice(s,e)
    alert("string slice is "+ str)
}

function strSubstring(s,e){
    str = "JavaScript".substring(s,e)
    alert("string substring is "+ str)
}

function strSubstr(s,l){
    str = "JavaScript".substr(s,l)
    alert("string substr is "+ str)
}

function strReplace(str1,str2){
     str = "Javascript is amazing".replace(str1,str2)
    alert("result string= "+ str)
}

function strReplaceAll(str1,str2){
    str = "Js is amazing.Js is everywhere.Js is used in variety of applications".replaceAll(str1,str2)
   alert("result string"+ str)
}

function strUpperCase(str1){
    str = str1.toUpperCase()
    alert("result string"+ str)
}

function strLowerCase(str1){
    str = str1.toLowerCase()
    alert("result string"+ str)
}
function strConcat(str1){
    str = "Hello".concat(str1)
    alert("result string"+ str)
}

function strTrim(){
    str = "  Js is versatile.   ".trim()
    alert("result string= "+ str + str.length)
    console.log("trim",str);
}
function strTrimStart(){
    str = "  Js is versatile.   ".trimStart()
    alert("result string-length= "+ str.length)
    console.log("trim",str);
}
function strTrimEnd(){
    str = "  Js is versatile.   ".trimStart()
    alert("result string-length= "+ str.length)
    console.log("trim",str);
}

function strPadStart(num,str){
    str= "js".padStart(num,str)
    alert("result string= "+ str)
    console.log("pad",str);
}
function strPadEnd(num,str){
    str= "js".padEnd(num,str)
    alert("result string= "+ str)
    console.log("pad",str);
}
function strChar(num){
    str = "Javascript".charAt(num);
    alert("result string= "+ str)
    console.log("charat",str);
}
function strCharCode(num){
    str = "Javascript".charCodeAt(num);
    alert("result string= "+ str)
    console.log("charat",str);
}
function strSplit(c){
    str = "Js,java,ruby,c,python".split("-")
    alert("result array= "+ str)
    console.log("charat",str);
}
