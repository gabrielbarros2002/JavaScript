let str = '     Gabriel Otávio de Barros     ';

str = str.trim()

console.log(str);
console.log(str.slice(-6));
console.log(str.slice(6));
console.log(str.slice(3, 4));
console.log(str.substr(3, 3));
console.log(str.substring(3, 5));
console.log(str.replace('de Barros', 'Schuhmacher'));
console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());
console.log(str.concat(' Schuhmacher'));
console.log(str + ' Schuhmacher');
console.log(str.charAt(3));
console.log(str[3]);
console.log(str.split(' '));
