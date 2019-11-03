!function(t){var e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);class i{constructor(t,e,s,i,n,a){this.valueRuLow=t,this.valueRuUp=e,this.valueEnLow=s,this.valueEnUp=i,this.parent=a,this.child=null,this.button=null,this.keyCode=n,this.createButton()}createButton(){this.child=document.createElement("span"),this.child.innerText=this.valueRuLow,this.button=document.createElement("div"),this.parent.append(this.button),this.button.append(this.child),this.button.classList.add("key"),this.button.id=this.keyCode}render(t,e,s){"ru"===t&&e===s&&(this.child.innerText=this.valueRuLow),"ru"===t&&e!==s&&(this.child.innerText=this.valueRuUp),"en"===t&&e===s&&(this.child.innerText=this.valueEnLow),"en"===t&&e!==s&&(this.child.innerText=this.valueEnUp),!0===e&&20===this.keyCode&&this.button.classList.add("active"),!1===e&&20===this.keyCode&&this.button.classList.remove("active")}}let n=document.createElement("div");n.classList.add("wrapper");let a=document.createElement("textarea");document.body.append(n),n.prepend(a);new class{constructor(t){this.ruLow=[["ё","1","2","3","4","5","6","7","8","9","0","-","=","Backspace"],["Tab","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","\\","DEL"],["CapsLock","ф","ы","в","а","п","р","о","л","д","ж","э","Enter"],["Shift","я","ч","с","м","и","т","ь","б","ю",".","▲","Shift"],["Ctrl","Win","Alt","","Alt","◄","▼","►","Ctrl"]],this.enLow=[["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace"],["Tab","q","w","e","r","t","y","u","i","o","p","[","]","\\","DEL"],["CapsLock","a","s","d","f","g","h","j","k","l",";","'","Enter"],["Shift","z","x","c","v","b","n","m",",",".","/","▲","Shift"],["Ctrl","Win","Alt","","Alt","◄","▼","►","Ctrl"]],this.ruUp=[["Ё","!",'"',"№",";","%",":","?","*","(",")","_","+","Backspace"],["Tab","Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ","\\","DEL"],["CapsLock","Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э","Enter"],["Shift","Я","Ч","С","М","И","Т","Ь","Б","Ю",".","▲","Shift"],["Ctrl","Win","Alt","","Alt","◄","▼","►","Ctrl"]],this.enUp=[["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace"],["Tab","Q","W","E","R","T","Y","U","I","O","P","[","]","\\","DEL"],["CapsLock","A","","S","D","F","G","H","J","K","L",";","'","Enter"],["Shift","Z","X","C","V","B","N","M",",",".","/","▲","Shift"],["Ctrl","Win","Alt","","Alt","◄","▼","►","Ctrl"]],this.keyCodes=[[192,49,50,51,52,53,54,55,56,57,48,189,187,8],[9,81,87,69,82,84,89,85,73,79,80,219,221,220,46],[20,65,83,68,70,71,72,74,75,76,186,222,13],[16,90,88,67,86,66,78,77,188,190,191,38,16],[17,91,18,32,18,37,40,39,17]],this.parent=t,this.state={language:"ru",capsLock:!1,shift:!1,alt:!1},this.keys=[],this.container=document.createElement("div"),this.container.classList.add("keyboard-container"),this.parent.append(this.container),this.fillRows(),this.specialkeys(),document.addEventListener("keydown",t=>{console.log(t.code," ",t.keyCode);let e=t.keyCode,s=document.getElementById(e);null!==s&&(s.classList.add("keydown"),this.capsToggle(e),this.setShift(e),this.setAlt(e),this.toggleLanguage(e))}),document.addEventListener("keyup",t=>{let e=t.keyCode,s=document.getElementById(e);null!==s&&(s.classList.remove("keydown"),this.clearShift(e),this.clearAlt(e))})}fillRows(){for(let t=0;t<5;t++){this.row=document.createElement("div"),this.row.classList.add("row"),this.container.append(this.row);for(let e=0;e<this.ruLow[t].length;e++)this.keys.push(new i(this.ruLow[t][e],this.ruUp[t][e],this.enLow[t][e],this.enUp[t][e],this.keyCodes[t][e],this.row))}}capsToggle(t){20==t&&(this.state.capsLock=!this.state.capsLock,this.render())}setShift(t){16==t&&(this.state.shift=!0,this.render())}clearShift(t){16==t&&(this.state.shift=!1,this.render())}setAlt(t){18==t&&(this.state.alt=!0,this.render())}clearAlt(t){18==t&&(this.state.alt=!1,this.render())}toggleLanguage(t){18!=t&&16!=t||this.state.shift&&this.state.alt&&("ru"===this.state.language?this.state.language="en":this.state.language="ru",this.render())}render(){this.keys.forEach(t=>{t.render(this.state.language,this.state.capsLock,this.state.shift)})}specialkeys(){const t=[100,100,100,115,107.5,107.5,75,75,75,75,198,50,50,50,50];let e=0;[8,9,20,13,16,17,18,32,38,37,40,39].forEach(s=>{document.querySelectorAll('div[data="'+`${s}`+'"]').forEach(s=>{s.classList.add("special-key"),s.innerText=specialKeysContent[e],s.style.width=t[e]+"px",e++})})}}(n)}]);