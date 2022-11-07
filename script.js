function updateColor() {
    //get rgb
    var red = document.getElementById("redInput").value;
    var green = document.getElementById("greenInput").value;
    var blue = document.getElementById("blueInput").value;

    document.getElementById("color").style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
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

function convertRGB() {
    //update color
    updateColor();

    var hex;

    //get rgb
    var red = document.getElementById("redInput").value;
    var green = document.getElementById("greenInput").value;
    var blue = document.getElementById("blueInput").value;

    //convert to hex
    hex = '#' + decTohex(red) + decTohex(green) + decTohex(blue);

    //display hex
    document.getElementById("hex").innerHTML = hex;
}