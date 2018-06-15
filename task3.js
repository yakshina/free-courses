var t1=process.argv[2];
var t2=process.argv[3];

if (t1+t2>3600){
    process.stdout.write(Math.floor((t1+t2)/3600) + ' час '+ ((t1+t2)%60)%60 + ' минут '+(t1+t2)%60 + ' секунд');
}
else if (((t1+t2)>=3600)&&((t1+t2)%3600==0)){
    process.stdout.write(Math.floor((t1+t2)/3600) + ' час');
}
else if (t1+t2>60){
    process.stdout.write(Math.floor((t1+t2)/60) + ' минут '+(t1+t2)%60 + ' секунд');
}
else if (((t1+t2)>=60)&&((t1+t2)%60==0)){
    process.stdout.write(Math.floor((t1+t2)/60) + ' минут');
}
else if (t1+t2<60){
    process.stdout.write((t1+t2) + ' секунды');
}