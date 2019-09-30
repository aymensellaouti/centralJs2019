var i = 0;
testInterval();

function testInterval() {
    var code = setInterval(function () {
        if (i < 22) {
            console.log(i);
            i++
        } else {
            clearInterval(code);
        }
    }, 100, code);
}

