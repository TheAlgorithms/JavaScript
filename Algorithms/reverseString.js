function stringInvert(str) {
    let strInverted = '';
    for (let i = str.trim().length - 1; i >= 0; i--)
        strInverted += str.trim()[i];

    console.log('Inverted text: ' + strInverted);
}

(function main() {
	stringInvert('Algorithm');
	stringInvert('mhtiroglA');
})();