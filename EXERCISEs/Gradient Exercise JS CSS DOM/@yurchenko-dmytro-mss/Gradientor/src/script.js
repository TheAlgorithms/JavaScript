;'use strict';

//********START
// CORRECTLY REMOVE ALL COLOR PICKERS FROM INNER HTML BEFORE COMPUTEDSTYLE.********START
//********START
var AllCP = document.getElementsByTagName("input");
for (var i = AllCP.length - 1; i > -1; i--) {
    if (AllCP[i].getAttribute("type") == "color") {
        AllCP[i].parentNode.removeChild(AllCP[i]);
    }
}
//********END
// CORRECTLY REMOVE ALL COLOR PICKERS FROM INNER HTML BEFORE COMPUTEDSTYLE.********END
//********END


var css = document.querySelector("h3");
var body = document.getElementById("gradient");

var
    ARGcounter,
    postARGcounter,
    findRGB,
    ColorBUF,
    RGBBUF,
    LGStyleStringStart,
    LGStyleStringEnd,
    RandomButton,
    InCycleCBuf = [],
    ColorPicker = [];

var styleBody = getComputedStyle(body).backgroundImage;
var result = styleBody.match(/[^,\s]+\([\d\s,.]+\)[\s\d%]*|[\w-]+[\w\s%]+/g);
var findAngle = result[1].match(/deg\b|\bto\b/g);


//***
//*** PROCESS first LG function ANGLE argument
//***
if (findAngle === null) {
    ARGcounter = postARGcounter = 1;
} //NOT FOUND ANGLE : START color Argument in CSS LG_function = 1
else {
    ARGcounter = postARGcounter = 2;
} //FOUND ANGLE : START color Argument in CSS LG_function = 2
//***
//*** PROCESS first LG function ANGLE argument
//***


//***                             === if = delete all CONSTANT colour percentage
//*** PROCESS ALL LG function arguments | Add to color array "InCycleCBuf" HEX colors transform
//***                             === else = delete all RGB|RGBA color blindness and percentage
for (ARGcounter; ARGcounter < result.length; ARGcounter++) {
    findRGB = result[ARGcounter].match(/rgb/g);
    if (findRGB === null) {
        ColorBUF = result[ARGcounter].replace(/[\s\d%]+/g, "");
        InCycleCBuf.push(RGBtoHEX(colorStringToRGB(ColorBUF)));
    }
    else {
        RGBBUF = result[ARGcounter].replace(/\,\s\d\.\d|\d+%/g, "");
        InCycleCBuf.push(RGBtoHEX(RGBBUF));
    }
}
//***
//*** PROCESS first LG ANGLE argument
//***


//***
//*** EXECUTE COLORPICKER INSTANCES fabric pattern
//***
for (var i = 0; i < InCycleCBuf.length; i++) {
    body.insertBefore(ColorPicker[i] = ColorPickerFactory(i, InCycleCBuf[i]), body.getElementsByTagName("h2")[0]);
}


//***
//*** RANDOMIZATION SECTION
//***
body.insertBefore(RandomButton = document.createElement("button"), body.getElementsByTagName("h2")[0]);
RandomButton.appendChild(document.createTextNode("Random CP"));
RandomButton.addEventListener("click", RandValNumButton);

function RandValNumButton() {
    function randomHexColor() { // ====== CLOSURE function to start random generation
        var n = 6, s = '#';
        while (n--) {
            s += (Math.random() * 16 | 0).toString(16);    // random char from 0 to f
        }
        return s;
    }                           // ====== CLOSURE function to start random generation

    for (var i = 0; i < ColorPicker.length; i++) {
        ColorPicker[i].value = randomHexColor(); // CLOSURE function to start random generation
    }
    setGradient();              // Callback call at once
}

//***
//*** RANDOMIZATION SECTION
//***

//***
//*** EXECUTES COLORPICKER INSTANCES fabric pattern
//***
function ColorPickerFactory(CPIndex, CPValue) {
    var ColorPicker = document.createElement('input');
    ColorPicker.type = "color";
    ColorPicker.className = "color" + CPIndex;
    ColorPicker.value = CPValue;
    ColorPicker.addEventListener("input", setGradient);
    return ColorPicker;
}

//***
//*** EXECUTES COLORPICKER INSTANCES fabric pattern
//***


//***
//*** STYLE string begin for linear-gradient|repeating-linear-gradient + (Angle|""
//***
if (postARGcounter == 2) {
    LGStyleStringStart = result[0] + "(" + result[1] + ", "
}
else {
    LGStyleStringStart = result[0] + "("
}
//***
//*** STYLE string begin for linear-gradient|repeating-linear-gradient +(Angle|""
//***


//***
//*** STYLE string end for all LG function arguments
//***
function setGradient() {
    LGStyleStringEnd = "";
    for (var i = 0; i < ColorPicker.length - 1; i++) {
        LGStyleStringEnd = LGStyleStringEnd + ColorPicker[i].value + ", ";
    }
    LGStyleStringEnd = LGStyleStringEnd + ColorPicker[i].value + ")";
    body.style.background = LGStyleStringStart + LGStyleStringEnd;
    css.textContent = body.style.background + ";";
}

//***
//*** STYLE string end for all LG function arguments
//***


//***
//*** KeyWord Color to RGB convertor function
//***
function colorStringToRGB(colorInstanse) {
    var bufElem = document.createElement("div");
    bufElem.style.color = colorInstanse;
    document.body.appendChild(bufElem)
    //Color in RGB
    var stringResultRGB = window.getComputedStyle(bufElem).color;
    bufElem.parentNode.removeChild(bufElem); //Clean from memory
    return stringResultRGB;
}

//***
//*** KeyWord RGB to HEX convertor function
//***
function RGBtoHEX(RGBinstance) {
    var a = RGBinstance.split("(")[1].split(")")[0];
    a = a.split(",");
    var b = a.map(function (x) {                      //For each array element
        x = parseInt(x).toString(16);      //Convert to a base16 string
        return (x.length == 1) ? "0" + x : x; //Add zero if we get only one character
    }); //Color in HEX string
    var b = b.join("");
    return ('#' + b);
}

