
function updateColor(inputType) {
    if (inputType == 'rgb') {
        //get rgb
        var red = document.getElementById("redInput").value;
        var green = document.getElementById("greenInput").value;
        var blue = document.getElementById("blueInput").value;

        //change color block
        document.getElementById("color").style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

    }
    else if (inputType = 'hex') {
        //get hex
        var hex = document.getElementById('hexInput').value.toUpperCase();

        //change color block
        document.getElementById("color").style.backgroundColor = "#" + hex;

    }
}

function decTohex(num) {
    var dec = [];
    var hexSect = "";

    //convert number for hex use
    num = num / 16;

    //seperate into first and second hex decimal
    dec[0] = num.toString().substring(0, num.toString().indexOf("."));
    dec[1] = num.toString().substring(num.toString().indexOf("."));
    dec[1] = Number(dec[1]) * 16;

    //convert from decimal to hex
    for (var x = 0; x < 2; x++) {
        if (dec[x] < 10) {
            hexSect += dec[x];
        }
        else if (dec[x] >= 10 && dec[x] < 16) {
            if (dec[x] == 10) {
                hexSect += 'A';
            }
            else if (dec[x] == 11) {
                hexSect += 'B';
            }
            else if (dec[x] == 12) {
                hexSect += 'C';
            }
            else if (dec[x] == 13) {
                hexSect += 'D';
            }
            else if (dec[x] == 14) {
                hexSect += 'E';
            }
            else if (dec[x] == 15) {
                hexSect += 'F';
            }
        }
    }
    return hexSect;

}

function hexTodec(hexSect) {
    var colorValue;

    //split into first and second char
    var sect = hexSect.split('');

    switch (sect[0]) {
        case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
            colorValue = sect[0];
            break;
        case 'A':
            colorValue = '10';
            break;
        case 'B':
            colorValue = '11';
            break;
        case 'C':
            colorValue = '12';
            break;
        case 'D':
            colorValue = '13';
            break;
        case 'E':
            colorValue = '14';
            break;
        case 'F':
            colorValue = '15';
            break;
        default:
            //request valid hex code//request valid hex code
            document.getElementById("warning").innerHTML = "Not a valid hex code"; break;
    }


    switch (sect[1]) {
        case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
            colorValue = Number(colorValue) + Number(sect[1]) / 16;
            break;
        case 'A':
            colorValue += '.625';
            break;
        case 'B':
            colorValue += '.6875';
            break;
        case 'C':
            colorValue += '.75';
            break;
        case 'D':
            colorValue += '.8125';
            break;
        case 'E':
            colorValue += '.875';
            break;
        case 'F':
            colorValue += '.9375';
            break;
        default:
            //request valid hex code
            document.getElementById("warning").innerHTML = "Not a valid hex code";
            break;
    }

    colorValue = Number(colorValue) * 16;

    return colorValue;


}

function convertRGB() {
    //update color
    updateColor('rgb');

    var hex;

    //get rgb
    var red = document.getElementById("redInput").value;
    var green = document.getElementById("greenInput").value;
    var blue = document.getElementById("blueInput").value;

    //convert to hex
    hex = decTohex(red) + decTohex(green) + decTohex(blue);

    //display hex
    document.getElementById('hexInput').value = hex;
}

function convertHEX() {
    //get hex
    var hex = document.getElementById('hexInput').value.toUpperCase();

    //convert to rgb
    if (hex.length == 6) {
        //hide warning
        document.getElementById("warning").innerHTML = "";
        
        //update color
        updateColor('hex');

        //split hex into sections
        var red = hex.substring(0, 2);
        var green = hex.substring(2, 4);
        var blue = hex.substring(4);

        red = hexTodec(red);
        blue = hexTodec(blue);
        green = hexTodec(green);

        //display rgb
        document.getElementById("redInput").value = red;
        document.getElementById("greenInput").value = green;
        document.getElementById("blueInput").value = blue;
    }
    else if(hex.length > 6) {
        //request valid hex code
        document.getElementById("warning").innerHTML = "Not a valid hex code";
    }


}