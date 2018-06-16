var d = process.argv[2];
var m = process.argv[3];
var y = process.argv[4];
var n = '';
n = n + m;
var k=0;
if((y%4==0)&&(y%100!==0)||(y%400==0))
{switch (n) 
    {
case 'января':
k=31-d+335;
break;
case 'февраля':
k=29-d+306;
break;
case 'марта':
k=31-d+276;  
break;
case 'апреля':
k=30-d+246;
break;
case 'мая':
k=31-d+215;
break;
case 'июня':
k=30-d+185;
break;
case 'июля':
k=31-d+154;
break;
case 'августа':
k=31-d+123;
break;
case 'сентября':
k=30-d+93;
break;
case 'октября':
k=31-d+62;
break;
case 'ноября':
k=30-d+32;
break;
case 'декабря':
k=31-d;
break;
} 
}
else {
switch (n) {
case 'января':
k=31-d+334;
break;
case 'февраля':
k=28-d+306;
break;
case 'марта':
k=31-d+275;
break;
case 'апреля':
k=30-d+245;
break;
case 'мая':
k=31-d+214;
break;
case 'июня':
k=30-d+184;
break;
case '7':
k=31-d+153;
break;
case 'августа':
k=31-d+122;
break;
case 'сентября':
k=30-d+92;
break;
case 'октября':
k=31-d+61;
break;
case 'ноября':
k=30-d+31;
break;
case 'декабря':
k=31-d;
break;
} 

}
process.stdout.write(k);