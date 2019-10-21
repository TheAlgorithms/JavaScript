var url='webpage address'
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (this.readyState === 4) {
        if (this.status === 200) {
            document.body.className = 'ok';
            console.log(this.responseText);
                window.responseData = this.responseText;

        }
            else if (this.response == null && this.status === 0) {
            document.body.className = 'error offline';
            console.log("The computer appears to be offline.");
        } else {
            document.body.className = 'error';
        }
    }
}
request.open("GET",url,true);
request.send();
