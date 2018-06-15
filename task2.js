var d = a=process.argv[2];
var m = a=process.argv[3];
var y = a=process.argv[4];
var n = String(m);
if((y%4==0)&&(y%100!==0)||(y%400==0))
{switch (n) 
    {
case 'января':
process.stdout.write(31-d+335);
break;
case 'февраля':
process.stdout.write(29-d+306);
break;
case 'марта':
process.stdout.write(31-d+276);
break;
case 'апреля':
process.stdout.write(30-d+246);
break;
case 'мая':
process.stdout.write(31-d+215);
break;
case 'июня':
process.stdout.write(30-d+185);
break;
case 'июля':
process.stdout.write(31-d+154);
break;
case 'августа':
process.stdout.write(31-d+123);
break;
case 'сентября':
process.stdout.write(30-d+93);
break;
case 'октября':
process.stdout.write(31-d+62);
break;
case 'ноября':
process.stdout.write(30-d+32);
break;
case 'декабря':
process.stdout.write(31-d);
break;
} 
}
else {
switch (n) {
case 'января':
process.stdout.write(31-d+334);
break;
case 'февраля':
process.stdout.write(28-d+306);
break;
case 'марта':
process.stdout.write(31-d+275);
break;
case 'апреля':
process.stdout.write(30-d+245);
break;
case 'мая':
process.stdout.write(31-d+214);
break;
case 'июня':
process.stdout.write(30-d+184);
break;
case 'июля':
process.stdout.write(31-d+153);
break;
case 'августа':
process.stdout.write(31-d+122);
break;
case 'сентября':
process.stdout.write(30-d+92);
break;
case 'октября':
process.stdout.write(31-d+61);
break;
case 'ноября':
process.stdout.write(30-d+31);
break;
case 'декабря':
process.stdout.write(31-d);
break;
} 

}