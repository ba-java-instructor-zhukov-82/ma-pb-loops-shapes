function print(data) {
    document.getElementById('shape').innerHTML = data;
}

function drawRect() {

    var width = 5;
    var height = 5;
    var symbol = '*&nbsp ';

    var rectangle = '';
    for(var row = 0; row < height; ++row) {
        for(var column = 0; column < width; ++column) {
            if(row == 0 || row == height - 1)
                rectangle += symbol;
            else {
                if(column == 0 || column == width - 1) {
                    rectangle += symbol;
                } else
                    rectangle += '&nbsp &nbsp ';
            }
        }
        rectangle += '<br/>';
    }

    print(rectangle);
}

function drawTriangle() {

    var height = 5;
    var symbol = '*&nbsp ';

    var triangle = '';
    for(var row = 1; row <= height; ++row) {
        for(var column = 0; column < row; ++column) {
            triangle += symbol;
        }
        triangle += '<br/>';
    }

    print(triangle);
}