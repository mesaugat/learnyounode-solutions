var sum = 0;

process.argv.forEach(function(value) {
    if (+value) {
        sum += +value;
    }
});

console.log(sum);
