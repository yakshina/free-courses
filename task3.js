var t1 = process.argv[2];
var t2 = process.argv[3];
var hO = "";
var mO = "";
var sO = "";
var sum = t1 + t2;
var strH = ' часов ';
var strM = ' минут ';
var strS = ' секунд';
var h = Math.floor(sum / 60 / 60);
if(h === 0){
h = '';
strH = '';
}
var t = String(h).substring(String(h).length - 1);
var k = String(h).substring(String(h).length - 2, String(h).length);
if(k !=='11'& k !=='12'& k !=='13'&k !=='14'){
switch(t){
case '1':
hO = ' час ';
strH = "";     
break;
case '2':
hO = "а ";
strH = ' час';
break;
case '3':
hO = "а ";
strH = ' час'; 
break;
case '4':
hO = "а ";
strH = ' час';
break;
case '':
hO = "";
strH = "";
break;
}
}
var min = Math.floor((sum - h * 60*60)/60);
if((min === 0)&&(h === '')){
min = '';
strM = '';
}
var t = String(min).substring(String(min).length - 1);
var k = String(min).substring(String(min).length - 2, String(min).length);
if(k !=='11'& k !=='12'& k !=='13'&k !=='14'){
switch(t){
case '1':
mO = "а ";
strM = ' минут';
break;
case '2':
mO = "ы ";
strM = ' минут';
break;
case '3':
mO = "ы ";
strM = ' минут';
break;
case '4':
mO = "ы ";
strM = ' минут';
break;
case '':
mO = "";
strM = "";
break;
}
}
var sec = sum - h * 60*60 - min * 60;
var t = String(sec).substring(String(sec).length - 1);
var k = String(sec).substring(String(sec).length - 2, String(sec).length);
if(k !=='11'& k !=='12'& k !=='13'&k !=='14'){
switch(t){
case '1':
sO = "а";
strS = ' секунд';
break;
case '2':
sO = "ы";
strS = ' секунд';
break;
case '3':
sO = "ы";
strS = ' секунд';
break;
case '4':
sO = "ы";
strS = ' секунд';
break;
case '':
sO = "";
strS = "";
break;
}
}
process.stdout.write(h + strH + hO + min + strM + mO + sec + strS + sO);