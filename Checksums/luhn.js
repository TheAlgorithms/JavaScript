function luhn(card_number) {
    var sum_of_odds  = 0;
    var sum_of_evens = 0;
    for (var i = 15; i > 0; i-=2) {
        sum_of_odds += parseInt(card_number[i]);
    }
    for (var i = 14; i > -1; i-=2) {
        var current_number = parseInt(card_number[i]);
        if (parseInt(card_number[i])*2 > 9) {
            sum_of_evens += (i*2)-9;
        } else {
            sum_of_evens += i*2;
        }
    }
    return 0 === ((sum_of_odds + sum_of_evens) % 10);
}
