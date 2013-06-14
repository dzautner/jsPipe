var p = (function (exports) {

    var pipedValue,
        pipes = [],
        addToPipe = false,
        runPipe = function () {
            var val = pipedValue, idx;
            for (idx in pipes) {
                val = pipes[idx](val);
            }
            pipes = [];
            addToPipe = false;

            return;
        };

    Function.prototype.valueOf  = function () {
        return addToPipe ? pipes.push(this) : this;
    };

    exports.pe = {valueOf: runPipe};

    return function (newPipedValue) {
        addToPipe = true;
        pipedValue = newPipedValue;
    };

}(window));


function sort(array) {
    return Array.prototype.sort.apply(array);
}

function removeLessThenThree(array) {
    return Array.prototype.filter.apply(array, [
            function (n) { return n > 3; }
        ]);
}

function doubleAll(array) {
    return array.map(function(n) { return n*2; } );
}

function print(value) {
    console.log(value);
}

var result;
p([1,6,4,9,3])
 | sort
 | removeLessThenThree
 | doubleAll
 | print
 | function (value) { result = value; }
 |pe


