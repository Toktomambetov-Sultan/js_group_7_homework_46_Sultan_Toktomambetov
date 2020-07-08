let str = "",
    isReverse = false;
for (let i = 1; i <= 64; i++) {
    str += isReverse ? i % 2 ? " 0 " : " _ " : i % 2 ? " _ " : " 0 "; 
    if (i % 8 == 0) {
        str += "\n";
        isReverse = !isReverse;
    } 
}
console.log(str);