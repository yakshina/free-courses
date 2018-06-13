var a=process.argv[2];
a=a.toLowerCase().replace(/\s/g, '');
var b=a.split('').reverse().join('');
if (a===b){
    process.stdout.write('YES');
}
else {
    process.stdout.write('NO');
};