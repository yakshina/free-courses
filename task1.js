var a=process.argv[2];
a=a.toLowerCase().replace(/\s/g, '').replace(/[^\w\s]|_/g, "");
var b=a.split('').reverse().join('');
process.stdout.write((a===b)?'YES':'NO');