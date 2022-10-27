var fibonum = 10;
for (var n = 0; n <= fibonum; n++) {
    console.log(parseInt(((Math.pow(((1 + Math.sqrt(5)) / 2), n) - Math.pow(((1 - Math.sqrt(5)) / 2), n)) / Math.sqrt(5))));
}
