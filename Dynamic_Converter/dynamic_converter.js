var first = document.getElementById('first');
var second = document.getElementById('second');
var output = document.getElementById('output');
var input = document.querySelector('#input');
var input_display = document.getElementById('input_display');

//USD
let onCalculate_usd2thb = () => {
	var output = document.getElementById('output');
	fetch('/JSON/USD/usd2thb.json')
	.then(response => response.json())
	.then(data => {
		input_display.innerText = " USD";
	output.innerText = data.rate * input.value + " thai bath";
	});

}
let onCalculate_usd2usd = () => {
	input_display.innerText = " USD";
	output.innerText = input.value + " us dollar";
}
let onCalculate_usd2euro = () => {
	var output = document.getElementById('output');
	fetch('/JSON/USD/usd2euro.json')
	.then(response => response.json())
	.then(data => {
		input_display.innerText = " USD";
	output.innerText = data.rate * input.value + " euro";
	});
}
let onCalculate_usd2gbp = () => {
	var output = document.getElementById('output');
	fetch('/JSON/USD/usd2gbp.json')
	.then(response => response.json())
	.then(data => {
		input_display.innerText = " USD";
	output.innerText = data.rate * input.value + " british pound";
	});
}
let onCalculate_usd2aud = () => {
	var output = document.getElementById('output');
	fetch('/JSON/USD/usd2aud.json')
	.then(response => response.json())
	.then(data => {
		input_display.innerText = " USD";
	output.innerText = data.rate * input.value + " australian dollar";
	});
}
let onCalculate_usd2yen = () => {
	var output = document.getElementById('output');
	fetch('/JSON/USD/usd2yen.json')
	.then(response => response.json())
	.then(data => {
		input_display.innerText = " USD";
	output.innerText = data.rate * input.value + " japanese yen";
	});
}
let onCalculate_usd2krw = () => {
	var output = document.getElementById('output');
	fetch('/JSON/USD/usd2krw.json')
	.then(response => response.json())
	.then(data => {
		input_display.innerText = " USD";
	output.innerText = data.rate * input.value + " korean won";
	});
}
let onCalculate_usd2cny = () => {
	var output = document.getElementById('output');
	fetch('/JSON/USD/usd2cny.json')
	.then(response => response.json())
	.then(data => {
		input_display.innerText = " USD";
	output.innerText = data.rate * input.value + " chinese yeun";
	});
}
//THB
let onCalculate_thb2usd = () => {
	fetch('/JSON/THB/thb2usd.json')
	.then(response => response.json())
	.then(data => {
		input_display.innerText = " THB";
		output.innerText = data.rate * input.value + " us dollar";
	});

}
let onCalculate_thb2thb = () => {
	input_display.innerText = " THB";
	output.innerText = input.value + " thai bath";
}
let onCalculate_thb2euro = () => {
	fetch('/JSON/THB/thb2euro.json')
	.then(response => response.json())
	.then(data => {
		input_display.innerText = " THB";
		output.innerText = data.rate * input.value + " euro";
	});
}
let onCalculate_thb2gbp = () => {
	fetch('/JSON/THB/thb2gbp.json')
	.then(response => response.json())
	.then(data => {
		input_display.innerText = " THB";
		output.innerText = data.rate * input.value + " british pound";
	});
}
let onCalculate_thb2aud = () => {
	fetch('/JSON/THB/thb2aud.json')
	.then(response => response.json())
	.then(data => {
		input_display.innerText = " THB";
		output.innerText = data.rate * input.value + " australian dollar";
	});
}
let onCalculate_thb2yen = () => {
	fetch('/JSON/THB/thb2yen.json')
	.then(response => response.json())
	.then(data => {
		input_display.innerText = " THB";
		output.innerText = data.rate * input.value + " japanese yen";
	});
}
let onCalculate_thb2krw = () => {
	fetch('/JSON/THB/thb2krw.json')
	.then(response => response.json())
	.then(data => {
		input_display.innerText = " THB";
		output.innerText = data.rate * input.value + " korean won";
	});
}
let onCalculate_thb2cny = () => {
	fetch('/JSON/THB/thb2cny.json')
	.then(response => response.json())
	.then(data => {
		input_display.innerText = " THB";
		output.innerText = data.rate * input.value + " chinese yeun";
	});
}
//EURO
let onCalculate_euro2usd = () => {
        fetch('/JSON/EURO/euro2usd.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " EURO";
        output.innerText = data.rate * input.value + " us dollar";
        });
    }
    let onCalculate_euro2thb = () => {
        fetch('/JSON/EURO/euro2thb.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " EURO";
        output.innerText = data.rate * input.value + " thai bath";
        });
    }
	let onCalculate_euro2euro = () => {
		input_display.innerText = " EURO";
        output.innerText = input.value + " euro";
    }
    let onCalculate_euro2gbp = () => {
        fetch('/JSON/EURO/euro2gbp.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " EURO";
        output.innerText = data.rate * input.value + " british pound";
        });
    }
    let onCalculate_euro2aud = () => {
        fetch('/JSON/EURO/euro2aud.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " EURO";
        output.innerText = data.rate * input.value + " australian dollar";
        });
    }
    let onCalculate_euro2yen = () => {
        fetch('/JSON/EURO/euro2yen.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " EURO";
        output.innerText = data.rate * input.value + " japanese yen";
        });
    }
    let onCalculate_euro2krw = () => {
        fetch('/JSON/EURO/euro2krw.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " EURO";
        output.innerText = data.rate * input.value + " korean won";
        });
    }
    let onCalculate_euro2cny = () => {
        fetch('/JSON/EURO/euro2cny.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " EURO";
        output.innerText = data.rate * input.value + " chinese yeun";
        });
    }
//AUD
let onCalculate_aud2usd = () => {
        fetch('/JSON/AUD/aud2usd.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " AUD";
        output.innerText = data.rate * input.value + " us dollar";
        });
    }
	let onCalculate_aud2thb = () => {
        fetch('/JSON/AUD/aud2thb.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " AUD";
        output.innerText = data.rate * input.value + " thai bath";
        });
    }
	let onCalculate_aud2euro = () => {
        fetch('/JSON/AUD/aud2euro.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " AUD";
        output.innerText = data.rate * input.value + " euro";
        });
    }
	let onCalculate_aud2gbp = () => {
        fetch('/JSON/AUD/aud2gbp.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " AUD";
        output.innerText = data.rate * input.value + " british pound";
        });
    }
    let onCalculate_aud2aud = () => {
		input_display.innerText = " AUD";
        output.innerText = input.value + " australia dollar";
    }

    let onCalculate_aud2yen = () => {
        fetch('/JSON/AUD/aud2yen.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " AUD";
        output.innerText = data.rate * input.value + " japanese yen";
        });
    }
    let onCalculate_aud2krw = () => {
        fetch('/JSON/AUD/aud2krw.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " AUD";
        output.innerText = data.rate * input.value + " korean won";
        });
    }
    let onCalculate_aud2cny = () => {
        fetch('/JSON/AUD/aud2cny.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " AUD";
        output.innerText = data.rate * input.value + " chinese yeun";
        });
    }
//GBP
 let onCalculate_gbp2usd = () => {
        fetch('/JSON/GBP/gbp2usd.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " GBP";
        output.innerText = data.rate * input.value + " us dollar";
        });
    }
    let onCalculate_gbp2thb= () => {
        fetch('/JSON/GBP/gbp2thb.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " GBP";
        output.innerText = data.rate * input.value + " thai bath";
        });
    }
    let onCalculate_gbp2euro = () => {
        fetch('/JSON/GBP/gbp2euro.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " GBP";
        output.innerText = data.rate * input.value + " british pound";
        });
    }
    let onCalculate_gbp2aud = () => {
        fetch('/JSON/GBP/gbp2aud.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " GBP";
        output.innerText = data.rate * input.value + " australian dollar";
        });
    }
	let onCalculate_gbp2gbp = () => {
		input_display.innerText = " GBP";
        output.innerText = input.value + " british pound";
    }
    let onCalculate_gbp2yen = () => {
        fetch('/JSON/GBP/gbp2yen.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " GBP";
        output.innerText = data.rate * input.value + " japanese yen";
        });
    }
    let onCalculate_gbp2krw = () => {
        fetch('/JSON/GBP/gbp2krw.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " GBP";
        output.innerText = data.rate * input.value + " korean won";
        });
    }
    let onCalculate_gbp2cny = () => {
        fetch('/JSON/GBP/gbp2cny.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " GBP";
			output.innerText = data.rate * input.value + " chinese yeun";
        });
    }
//YEN
let onCalculate_yen2usd = () => {
        fetch('JSON/YEN/yen2usd.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " YEN";
        output.innerText = data.rate * input.value + " us dollar";
        });
    }
    let onCalculate_yen2thb = () => {
        fetch('JSON/YEN/yen2thb.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " YEN";
        output.innerText = data.rate * input.value + " thai bath";
        });
    }
    let onCalculate_yen2euro = () => {
        fetch('JSON/YEN/yen2thb.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " YEN";
        output.innerText = data.rate * input.value + " euro";
        });
    }
    let onCalculate_yen2aud = () => {
        fetch('JSON/YEN/yen2thb.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " YEN";
        output.innerText = data.rate * input.value + " australian dollar";
        });
    }
    let onCalculate_yen2gbp = () => {
        fetch('JSON/YEN/yen2thb.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " YEN";
        output.innerText = data.rate * input.value + " british pound";
        });
    }
	let onCalculate_yen2yen = () => {
		input_display.innerText = " YEN";
        output.innerText = input.value + " japanese yen";
    }
    let onCalculate_yen2krw = () => {
        fetch('JSON/YEN/yen2thb.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " YEN";
        output.innerText = data.rate * input.value + " korean won";
        });
    }
    let onCalculate_yen2cny = () => {
        fetch('JSON/YEN/yen2thb.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " YEN";
        output.innerText = data.rate * input.value + " chinese yeun";
        });
    }
//KRW
let onCalculate_krw2usd = () => {
        fetch('/JSON/KRW/krw2usd.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " KRW";
        output.innerText = data.rate * input.value + " us dollar";
        });
    }
    let onCalculate_krw2thb = () => {
        fetch('/JSON/KRW/krw2thb.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " KRW";
        output.innerText = data.rate * input.value + " thai bath";
        });
    }
    let onCalculate_krw2euro = () => {
        fetch('/JSON/KRW/krw2euro.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " KRW";
        output.innerText = data.rate * input.value + " euro";
        });
    }
    let onCalculate_krw2aud = () => {
        fetch('/JSON/KRW/krw2aud.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " KRW";
        output.innerText = data.rate * input.value + " australian dollar";
        });
    }
    let onCalculate_krw2gbp = () => {
        fetch('/JSON/KRW/krw2gbp.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " KRW";
        output.innerText = data.rate * input.value + " british pound";
        });
    }
    let onCalculate_krw2yen = () => {
        fetch('/JSON/KRW/krw2yen.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " KRW";
        output.innerText = data.rate * input.value + " japanese yen";
        });
    }
	let onCalculate_krw2krw = () => {
		input_display.innerText = " KRW";
        output.innerText = input.value + " korean won";
    }
    let onCalculate_krw2cny = () => {
        fetch('/JSON/KRW/krw2cny.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " KRW";
        output.innerText = data.rate * input.value + " chinese yeun";
        });
    }
//CNY
let onCalculate_cny2usd = () => {
        fetch('/JSON/CNY/cny2usd.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " CNY";
        output.innerText = data.rate * input.value + " us dollar";
        });
    }
    let onCalculate_cny2thb = () => {
        fetch('/JSON/CNY/cny2thb.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " CNY";
        output.innerText = data.rate * input.value + " thai bath";
        });
    }
    let onCalculate_cny2euro = () => {
        fetch('/JSON/CNY/cny2euro.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " CNY";
        output.innerText = data.rate * input.value + " euro";
        });
    }
    let onCalculate_cny2aud = () => {
        fetch('/JSON/CNY/cny2aud.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " CNY";
        output.innerText = data.rate * input.value + " australian dollar";
        });
    }
    let onCalculate_cny2gbp = () => {
        fetch('/JSON/CNY/cny2gbp.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " CNY";
        output.innerText = data.rate * input.value + " british pound";
        });
    }
    let onCalculate_cny2yen = () => {
        fetch('/JSON/CNY/cny2yen.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " CNY";
        output.innerText = data.rate * input.value + " japanese yen";
        });
    }
    let onCalculate_cny2krw = () => {
        fetch('/JSON/CNY/cny2krw.json')
        .then(response => response.json())
        .then(data => {
			input_display.innerText = " CNY";
        output.innerText = data.rate * input.value + " korean won";
        });
    }
	let onCalculate_cny2cny = () => {
		input_display.innerText = " CNY";
        output.innerText = input.value + " chinese yeun";
    }
//test


function normal() {
const valueI = first.options[first.selectedIndex].value;
const valueII = second.options[second.selectedIndex].value;
var click = 0;
var swtch = document.getElementById('swtch');


	switch (valueI) {
		case "1": //USD
		switch (valueII) {
			case "1":
				onCalculate_usd2thb();
				swtch.addEventListener('click', usd2thb, false);
				function usd2thb() {
					click += 1;
					if (click % 2 ==1) {
						onCalculate_thb2usd();
						first.options[1].selected = true;
						second.options[1].selected = true;
						console.log('inv');
					} else {
						onCalculate_usd2thb();
						first.options[0].selected = true;
						second.options[0].selected = true;
						console.log('nor');
						}

				}
				
			break;
			
			case "2":
			onCalculate_usd2usd();
			break;

			case "3":
			onCalculate_usd2euro();
			swtch.addEventListener('click', usd2euro, false);
			function usd2euro() {
				click += 1; 
					if (click % 2 ==1) {
						first.options[2].selected = true;
						second.options[1].selected = true;
						console.log('inv');
					} else {
						first.options[0].selected = true;
						second.options[2].selected = true;
						console.log('normal');
					}
			}
			break;

			case "4":		
				onCalculate_usd2aud();	
				swtch.addEventListener('click', usd2aud, false);
				function usd2aud() {
					click += 1;
				if (click % 2 ==1) {
					onCalculate_aud2usd()
					first.options[3].selected = true;
					second.options[1].selected = true;
					console.log('inv');
				} else {
					onCalculate_usd2aud();
					first.options[0].selected = true;
					second.options[3].selected = true;
					console.log('nor');
				}
				}
			break;
			
			case "5":
				onCalculate_usd2gbp();
				swtch.addEventListener('click', usd2gbp, false);
				function usd2gbp() {
					click += 1;
				if (click % 2 ==1) {
					onCalculate_gbp2usd()
					first.options[4].selected = true;
					second.options[1].selected = true;
					console.log('inv');
				} else {
					onCalculate_usd2gbp();
					first.options[0].selected = true;
					second.options[4].selected = true;
					console.log('nor');
				}
				}
			break;

			case "6":
				onCalculate_usd2yen();
				swtch.addEventListener('click', usd2yen, false);
				function usd2yen() {
					click += 1;
				if (click % 2 ==1) {
					onCalculate_yen2usd()
					first.options[5].selected = true;
					second.options[1].selected = true;
					console.log('inv');
				} else {
					onCalculate_usd2yen();
					first.options[0].selected = true;
					second.options[5].selected = true;
					console.log('nor');
					}
				}

			break;

			case "7":
				onCalculate_usd2krw();
				swtch.addEventListener('click', usd2krw, false);
				function usd2krw() {
					click += 1;
				if (click % 2 ==1) {
					onCalculate_krw2usd()
					first.options[6].selected = true;
					second.options[1].selected = true;
					console.log('inv');
				} else {
					onCalculate_usd2krw();
					first.options[0].selected = true;
					second.options[6].selected = true;
					console.log('nor');
					}
				}
				break;

			case "8":
				onCalculate_usd2cny();
				swtch.addEventListener('click', usd2cny, false);
				function usd2cny() {
				click += 1;
				if (click % 2 ==1) {
					onCalculate_cny2usd()
					first.options[7].selected = true;
					second.options[1].selected = true;
					console.log('inv');
				} else {
					onCalculate_usd2cny();
					first.options[0].selected = true;
					second.options[7].selected = true;
					console.log('nor');
					}
				}
			break;				
			
			default:
			console.log('unknow');
			break;
		}
		break;
		
		case "2": //THB
		switch (valueII) {
			case "1":
			onCalculate_thb2thb();
			break;
			
			case "2":
			onCalculate_thb2usd();
			swtch.addEventListener('click', thb2usd, false);
			function thb2usd() {
				click +=1;
				if (click % 2 ==1) {
					first.options[0].selected = true;
					second.options[0].selected = true;
					console.log('inv');
				} else {
					first.options[1].selected = true;
					second.options[1].selected = true;
					console.log('nor');
				}
			}
			break;

			case "3":
			onCalculate_thb2euro();
			swtch.addEventListener('click', thb2euro, false);
			function thb2euro() {
				click +=1;
				if (click % 2 ==1) {
					first.options[2].selected = true;
					second.options[0].selected = true;
					console.log('inv');
				} else {
					first.options[1].selected = true;
					second.options[2].selected = true;
					console.log('nor');
				}
			}
				break;
			
			case "4":
				onCalculate_thb2aud();
				swtch.addEventListener('click', thb2aud, false);
				function thb2aud() {
				click +=1;
				if (click % 2 ==1) {
					first.options[3].selected = true;
					second.options[0].selected = true;
					console.log('inv');
				} else {
					first.options[1].selected = true;
					second.options[3].selected = true;
					console.log('nor');
				}
			}
			break;

			case "5":
				onCalculate_thb2gbp();
				swtch.addEventListener('click', thb2gbp, false);
				function thb2gbp() {
				click +=1;
				if (click % 2 ==1) {
					first.options[4].selected = true;
					second.options[0].selected = true;
					console.log('inv');
				} else {
					first.options[1].selected = true;
					second.options[4].selected = true;
					console.log('nor');
				}
			}
				break;

			case "6":
				onCalculate_thb2yen();
				swtch.addEventListener('click', thb2yen, false);
				function thb2yen() {
				click +=1;
				if (click % 2 ==1) {
					first.options[5].selected = true;
					second.options[0].selected = true;
					console.log('inv');
				} else {
					first.options[1].selected = true;
					second.options[5].selected = true;
					console.log('nor');
				}
			}
				break;

			case "7":
				onCalculate_thb2krw();	
				swtch.addEventListener('click', thb2krw, false);
				function thb2krw() {
				click +=1;
				if (click % 2 ==1) {
					first.options[6].selected = true;
					second.options[0].selected = true;
					console.log('inv');
				} else {
					first.options[1].selected = true;
					second.options[6].selected = true;
					console.log('nor');
				}
			}
				break;

			case "8":
				onCalculate_thb2cny();
				swtch.addEventListener('click', fthb2cny, false);
				function thb2cny() {
				click +=1;
				if (click % 2 ==1) {
					first.options[7].selected = true;
					second.options[0].selected = true;
					console.log('inv');
				} else {
					first.options[1].selected = true;
					second.options[7].selected = true;
					console.log('nor');
				}
			}
				break;				
			
			default:
			console.log('unknow');
			break;
		}
		break;
		
		case "3": //EURO
		switch (valueII) {
			case "1":
			onCalculate_euro2thb();
			swtch.addEventListener('click', euro2thb, false);
			function euro2thb() {
				click +=1;
				if (click % 2 ==1) {
					first.options[1].selected = true;
					second.options[2].selected = true;
					console.log('inv');
				} else {
					first.options[2].selected = true;
					second.options[0].selected = true;
					console.log('nor');
				}
			}
			break;
			
			case "2":
			onCalculate_euro2usd();
			swtch.addEventListener('click', euro2usd, false);
			function euro2usd() {
				if (click % 2 ==1) {
					first.options[0].selected = true;
					second.options[2].selected = true;
					console.log('inv');
				} else {
					first.options[2].selected = true;
					second.options[1].selected = true;
					console.log('nor');
				}
			}
			break;

			case "3":
			onCalculate_euro2euro();
			break;

			case "4":		
				onCalculate_euro2aud();		
				swtch.addEventListener('click', euro2aud, false);
				function euro2aud() {
				click +=1;
				if (click % 2 ==1) {
					first.options[3].selected = true;
					second.options[2].selected = true;
					console.log('inv');
				} else {
					first.options[2].selected = true;
					second.options[3].selected = true;
					console.log('nor');
				}
			}
				break;
			
			case "5":
				onCalculate_euro2gbp();
				swtch.addEventListener('click', feuro2gbp, false);
				function euro2gbp() {
				click +=1;
				if (click % 2 ==1) {
					first.options[4].selected = true;
					second.options[2].selected = true;
					console.log('inv');
				} else {
					first.options[2].selected = true;
					second.options[4].selected = true;
					console.log('nor');
				}
			}
				break;

			case "6":
				onCalculate_euro2yen();
				swtch.addEventListener('click', euro2yen, false);
				function euro2yen() {
				click +=1;
				if (click % 2 ==1) {
					first.options[5].selected = true;
					second.options[2].selected = true;
					console.log('inv');
				} else {
					first.options[2].selected = true;
					second.options[5].selected = true;
					console.log('nor');
				}
			}
				
				break;

			case "7":
				onCalculate_euro2krw();
				swtch.addEventListener('click', euro2krw, false);
				function euro2krw() {
				click +=1;
				if (click % 2 ==1) {
					first.options[6].selected = true;
					second.options[2].selected = true;
					console.log('inv');
				} else {
					first.options[2].selected = true;
					second.options[6].selected = true;
					console.log('nor');
				}
			}
				break;

			case "8":
				onCalculate_euro2cny();
				swtch.addEventListener('click', euro2cny, false);
				function euro2cny() {
				click +=1;
				if (click % 2 ==1) {
					first.options[7].selected = true;
					second.options[2].selected = true;
					console.log('inv');
				} else {
					first.options[2].selected = true;
					second.options[7].selected = true;
					console.log('nor');
				}
			}
				break;				
			
			default:
			console.log('unknow');
			break;
		}

		break;

		case "4"://AUD
		switch (valueII) {
			case "1":
			onCalculate_aud2thb();
				swtch.addEventListener('click', aud2thb, false);
				function aud2thb() {
				click +=1;
				if (click % 2 ==1) {
					first.options[1].selected = true;
					second.options[3].selected = true;
					console.log('inv');
				} else {
					first.options[3].selected = true;
					second.options[0].selected = true;
					console.log('nor');
				}
			}
			break;
			
			case "2":
			onCalculate_aud2usd();
				swtch.addEventListener('click', aud2usd, false);
				function aud2usd() {
				click +=1;
				if (click % 2 ==1) {
					first.options[0].selected = true;
					second.options[3].selected = true;
					console.log('inv');
				} else {
					first.options[3].selected = true;
					second.options[1].selected = true;
					console.log('nor');
				}
			}
			break;

			case "3":
			onCalculate_aud2euro();
				swtch.addEventListener('click', aud2euro, false);
				function aud2euro() {
				click +=1;
				if (click % 2 ==1) {
					first.options[2].selected = true;
					second.options[3].selected = true;
					console.log('inv');
				} else {
					first.options[3].selected = true;
					second.options[2].selected = true;
					console.log('nor');
				}
			}
			break;

			case "4":		
				onCalculate_aud2aud();			
				break;
			
			case "5":
				onCalculate_aud2gbp();
				swtch.addEventListener('click', aud2gbp, false);
				function aud2gbp() {
				click +=1;
				if (click % 2 ==1) {
					first.options[4].selected = true;
					second.options[3].selected = true;
					console.log('inv');
				} else {
					first.options[3].selected = true;
					second.options[4].selected = true;
					console.log('nor');
				}
			}
				break;

			case "6":
				onCalculate_aud2yen();
				swtch.addEventListener('click', aud2yen, false);
				function aud2yen() {
				click +=1;
				if (click % 2 ==1) {
					first.options[5].selected = true;
					second.options[3].selected = true;
					console.log('inv');
				} else {
					first.options[3].selected = true;
					second.options[5].selected = true;
					console.log('nor');
				}
			}
				break;

			case "7":
				onCalculate_aud2krw();
				swtch.addEventListener('click', aud2krw, false);
				function aud2krw() {
				click +=1;
				if (click % 2 ==1) {
					first.options[6].selected = true;
					second.options[3].selected = true;
					console.log('inv');
				} else {
					first.options[3].selected = true;
					second.options[6].selected = true;
					console.log('nor');
				}
			}
				break;

			case "8":
				onCalculate_aud2cny();
				swtch.addEventListener('click', aud2cny, false);
				function aud2cny() {
				click +=1;
				if (click % 2 ==1) {
					first.options[7].selected = true;
					second.options[3].selected = true;
					console.log('inv');
				} else {
					first.options[3].selected = true;
					second.options[7].selected = true;
					console.log('nor');
				}
			}
				break;				
			
			default:
			console.log('unknow');
			break;
		}
		break;

		case "5"://GBP
		switch (valueII) {
			case "1":
			onCalculate_gbp2thb();
				swtch.addEventListener('click', gbp2thb, false);
				function gbp2thb() {
				click +=1;
				if (click % 2 ==1) {
					first.options[1].selected = true;
					second.options[4].selected = true;
					console.log('inv');
				} else {
					first.options[4].selected = true;
					second.options[0].selected = true;
					console.log('nor');
				}
				}
			break;
			
			case "2":
			onCalculate_gbp2usd();
				swtch.addEventListener('click', gbp2usd, false);
				function gbp2usd() {
				click +=1;
				if (click % 2 ==1) {
					first.options[0].selected = true;
					second.options[4].selected = true;
					console.log('inv');
				} else {
					first.options[4].selected = true;
					second.options[1].selected = true;
					console.log('nor');
				}
			}
			break;

			case "3":
			onCalculate_gbp2euro();
				swtch.addEventListener('click', gbp2euro, false);
				function gbp2euro() {
				click +=1;
				if (click % 2 ==1) {
					first.options[2].selected = true;
					second.options[4].selected = true;
					console.log('inv');
				} else {
					first.options[4].selected = true;
					second.options[2].selected = true;
					console.log('nor');
				}
			}
			break;

			case "4":		
				onCalculate_gbp2aud();		
				swtch.addEventListener('click', gbp2aud, false);
				function gbp2aud() {
				click +=1;
				if (click % 2 ==1) {
					first.options[3].selected = true;
					second.options[4].selected = true;
					console.log('inv');
				} else {
					first.options[4].selected = true;
					second.options[3].selected = true;
					console.log('nor');
				}
			}
				break;
			
			case "5":
				onCalculate_gbp2gbp();
				break;

			case "6":
				onCalculate_gbp2yen();
				swtch.addEventListener('click', gbp2yen, false);
				function gbp2yen() {
				click +=1;
				if (click % 2 ==1) {
					first.options[5].selected = true;
					second.options[4].selected = true;
					console.log('inv');
				} else {
					first.options[4].selected = true;
					second.options[5].selected = true;
					console.log('nor');
				}
			}
				break;

			case "7":
				onCalculate_gbp2krw();
				swtch.addEventListener('click', gbp2krw, false);
				function gbp2krw() {
				click +=1;
				if (click % 2 ==1) {
					first.options[6].selected = true;
					second.options[4].selected = true;
					console.log('inv');
				} else {
					first.options[4].selected = true;
					second.options[6].selected = true;
					console.log('nor');
				}
			}
				break;

			case "8":
				onCalculate_gbp2cny();
				swtch.addEventListener('click', gbp2cny, false);
				function gbp2cny() {
				click +=1;
				if (click % 2 ==1) {
					first.options[7].selected = true;
					second.options[4].selected = true;
					console.log('inv');
				} else {
					first.options[4].selected = true;
					second.options[7].selected = true;
					console.log('nor');
				}
			}
				break;				
			
			default:
			console.log('unknow');
			break;
		}
		break;

		case "6"://YEN
		switch (valueII) {
			case "1":
			onCalculate_yen2thb();
				swtch.addEventListener('click', yen2thb, false);
				function yen2thb() {
				click +=1;
				if (click % 2 ==1) {
					first.options[1].selected = true;
					second.options[5].selected = true;
					console.log('inv');
				} else {
					first.options[5].selected = true;
					second.options[0].selected = true;
					console.log('nor');
				}
			}
			break;
			
			case "2":
			onCalculate_yen2usd();
				swtch.addEventListener('click', yen2usd, false);
				function yen2usd() {
				click +=1;
				if (click % 2 ==1) {
					first.options[0].selected = true;
					second.options[5].selected = true;
					console.log('inv');
				} else {
					first.options[5].selected = true;
					second.options[1].selected = true;
					console.log('nor');
				}
			}
			break;

			case "3":
			onCalculate_yen2euro();
				swtch.addEventListener('click', yen2euro, false);
				function yen2euro() {
				click +=1;
				if (click % 2 ==1) {
					first.options[2].selected = true;
					second.options[5].selected = true;
					console.log('inv');
				} else {
					first.options[5].selected = true;
					second.options[2].selected = true;
					console.log('nor');
				}
			}
			break;

			case "4":		
				onCalculate_yen2aud();		
				swtch.addEventListener('click', yen2aud, false);
				function yen2aud() {
				click +=1;
				if (click % 2 ==1) {
					first.options[3].selected = true;
					second.options[5].selected = true;
					console.log('inv');
				} else {
					first.options[5].selected = true;
					second.options[3].selected = true;
					console.log('nor');
				}
			}	
				break;
			
			case "5":
				onCalculate_yen2gbp();
				swtch.addEventListener('click', yen2gbp, false);
				function yen2gbp() {
				click +=1;
				if (click % 2 ==1) {
					first.options[4].selected = true;
					second.options[5].selected = true;
					console.log('inv');
				} else {
					first.options[5].selected = true;
					second.options[4].selected = true;
					console.log('nor');
				}
			}
				break;

			case "6":
				onCalculate_yen2yen();
				break;

			case "7":
				onCalculate_yen2krw();
				swtch.addEventListener('click', yen2krw, false);
				function yen2krw() {
				click +=1;
				if (click % 2 ==1) {
					first.options[6].selected = true;
					second.options[5].selected = true;
					console.log('inv');
				} else {
					first.options[5].selected = true;
					second.options[6].selected = true;
					console.log('nor');
				}
			}
				break;

			case "8":
				onCalculate_yen2cny();
				swtch.addEventListener('click', yen2cny, false);
				function yen2cny() {
				click +=1;
				if (click % 2 ==1) {
					first.options[7].selected = true;
					second.options[5].selected = true;
					console.log('inv');
				} else {
					first.options[5].selected = true;
					second.options[7].selected = true;
					console.log('nor');
				}
			}
				break;				
			
			default:
			console.log('unknow');
			break;
		}
		break;

		case "7": //KRW
		switch (valueII) {
			case "1":
			onCalculate_krw2thb();
				swtch.addEventListener('click', krw2thb, false);
				function krw2thb() {
				click +=1;
				if (click % 2 ==1) {
					first.options[1].selected = true;
					second.options[6].selected = true;
					console.log('inv');
				} else {
					first.options[6].selected = true;
					second.options[0].selected = true;
					console.log('nor');
				}
			}
			break;
			
			case "2":
			onCalculate_krw2usd();
				swtch.addEventListener('click', krw2usd, false);
				function krw2usd() {
				click +=1;
				if (click % 2 ==1) {
					first.options[0].selected = true;
					second.options[6].selected = true;
					console.log('inv');
				} else {
					first.options[6].selected = true;
					second.options[1].selected = true;
					console.log('nor');
				}
			}
			break;

			case "3":
			onCalculate_krw2euro();
				swtch.addEventListener('click', krw2euro, false);
				function krw2euro() {
				click +=1;
				if (click % 2 ==1) {
					first.options[2].selected = true;
					second.options[6].selected = true;
					console.log('inv');
				} else {
					first.options[6].selected = true;
					second.options[2].selected = true;
					console.log('nor');
				}
			}
			break;

			case "4":		
				onCalculate_krw2aud();		
				swtch.addEventListener('click', krw2aud, false);
				function krw2aud() {
				click +=1;
				if (click % 2 ==1) {
					first.options[3].selected = true;
					second.options[6].selected = true;
					console.log('inv');
				} else {
					first.options[6].selected = true;
					second.options[3].selected = true;
					console.log('nor');
				}
			}		
				break;
			
			case "5":
				onCalculate_krw2gbp();
				swtch.addEventListener('click', krw2gbp, false);
				function krw2gbp() {
				click +=1;
				if (click % 2 ==1) {
					first.options[4].selected = true;
					second.options[6].selected = true;
					console.log('inv');
				} else {
					first.options[6].selected = true;
					second.options[4].selected = true;
					console.log('nor');
				}
			}
				break;

			case "6":
				onCalculate_krw2yen();
				swtch.addEventListener('click', krw2yen, false);
				function krw2yen() {
				click +=1;
				if (click % 2 ==1) {
					first.options[5].selected = true;
					second.options[6].selected = true;
					console.log('inv');
				} else {
					first.options[6].selected = true;
					second.options[5].selected = true;
					console.log('nor');
				}
			}
				break;

			case "7":
				onCalculate_krw2krw();
				console.log('normal 7-7');
				break;

			case "8":
				onCalculate_krw2cny();
				swtch.addEventListener('click', krw2cny, false);
				function krw2cny() {
				click +=1;
				if (click % 2 ==1) {
					first.options[7].selected = true;
					second.options[6].selected = true;
					console.log('inv');
				} else {
					first.options[6].selected = true;
					second.options[7].selected = true;
					console.log('nor');
				}
			}
				break;				
			
			default:
			console.log('unknow');
			break;
		}
		break;

		case "8"://CNY
		switch (valueII) {
			case "1":
			onCalculate_cny2thb();
				swtch.addEventListener('click', cny2thb, false);
				function cny2thb() {
				click +=1;
				if (click % 2 ==1) {
					first.options[1].selected = true;
					second.options[7].selected = true;
					console.log('inv');
				} else {
					first.options[7].selected = true;
					second.options[0].selected = true;
					console.log('nor');
				}
			}
			break;
			
			case "2":
			onCalculate_cny2usd();
				swtch.addEventListener('click', cny2usd, false);
				function cny2usd() {
				click +=1;
				if (click % 2 ==1) {
					first.options[0].selected = true;
					second.options[7].selected = true;
					console.log('inv');
				} else {
					first.options[7].selected = true;
					second.options[1].selected = true;
					console.log('nor');
				}
			}
			break;

			case "3":
			onCalculate_cny2euro();
				swtch.addEventListener('click', cny2euro, false);
				function cny2euro() {
				click +=1;
				if (click % 2 ==1) {
					first.options[2].selected = true;
					second.options[7].selected = true;
					console.log('inv');
				} else {
					first.options[7].selected = true;
					second.options[2].selected = true;
					console.log('nor');
				}
			}
			break;

			case "4":		
				onCalculate_cny2aud();		
				swtch.addEventListener('click', cny2aud, false);
				function cny2aud() {
				click +=1;
				if (click % 2 ==1) {
					first.options[3].selected = true;
					second.options[7].selected = true;
					console.log('inv');
				} else {
					first.options[7].selected = true;
					second.options[3].selected = true;
					console.log('nor');
				}
			}
				break;
			
			case "5":
				onCalculate_cny2gbp();
				swtch.addEventListener('click', cny2gbp, false);
				function cny2gbp() {
				click +=1;
				if (click % 2 ==1) {
					first.options[4].selected = true;
					second.options[7].selected = true;
					console.log('inv');
				} else {
					first.options[7].selected = true;
					second.options[4].selected = true;
					console.log('nor');
				}
			}
				break;

			case "6":
				onCalculate_cny2yen();
				swtch.addEventListener('click', cny2yen, false);
				function cny2yen() {
				click +=1;
				if (click % 2 ==1) {
					first.options[5].selected = true;
					second.options[7].selected = true;
					console.log('inv');
				} else {
					first.options[7].selected = true;
					second.options[5].selected = true;
					console.log('nor');
				}
			}
				break;

			case "7":
				onCalculate_cny2krw();
				swtch.addEventListener('click', cny2krw, false);
				function cny2krw() {
				click +=1;
				if (click % 2 ==1) {
					first.options[6].selected = true;
					second.options[7].selected = true;
					console.log('inv');
				} else {
					first.options[7].selected = true;
					second.options[6].selected = true;
					console.log('nor');
				}
			}
				break;

			case "8":
				onCalculate_cny2cny();
				console.log('normal 8-8');
				break;				
			
			default:
			console.log('unknow');
			break;
		}
		break;

		default:
		console.log('unknow');
		break;
	}
}

first.onchange = normal;
second.onchange = normal;
normal();
input.addEventListener('input', normal, false);