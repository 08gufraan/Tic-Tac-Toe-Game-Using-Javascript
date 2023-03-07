	var player1="O";
	var player2="X";
	var count = 0;

	b1 = document.getElementById('button1').innerHTML = "|"
	b2 = document.getElementById('button2').innerHTML = "|"
	b3 = document.getElementById('button3').innerHTML ="|"
	b4 = document.getElementById('button4').innerHTML = "|"
	b5 = document.getElementById('button5').innerHTML = "|"
	b6 = document.getElementById('button6').innerHTML = "|"
	b7 = document.getElementById('button7').innerHTML = "|"
	b8 = document.getElementById('button8').innerHTML = "|"
	b9 = document.getElementById('button9').innerHTML = "|"

	function button1() {
		if (count == 0) {
			b1 = document.getElementById('button1').innerHTML = player1
			document.getElementById('button1').disabled = true
			count = 1
		}
		else {
			b1 = document.getElementById('button1').innerHTML = player2
			document.getElementById('button1').disabled = true
			count = 0
		}
	}
	function button2() {
		if (count == 0) {
			b2 = document.getElementById('button2').innerHTML = player1
			document.getElementById('button2').disabled = true
			count = 1
		}
		else {
			b2 = document.getElementById('button2').innerHTML = player2
			document.getElementById('button2').disabled = true
			count = 0
		}
	}
	function button3() {
		if (count == 0) {
			b3 = document.getElementById('button3').innerHTML = player1
			document.getElementById('button3').disabled = true
			count = 1
		}
		else {
			b3 = document.getElementById('button3').innerHTML = player2
			document.getElementById('button3').disabled = true
			count = 0
		}
	}
	function button4() {
		if (count == 0) {
			b4 = document.getElementById('button4').innerHTML = player1
			document.getElementById('button4').disabled = true
			count = 1
		}
		else {
			b4 = document.getElementById('button4').innerHTML = player2
			document.getElementById('button4').disabled = true
			count = 0
		}
	}
	function button5() {
		if (count == 0) {
			b5 = document.getElementById('button5').innerHTML = player1
			document.getElementById('button5').disabled = true
			count = 1
		}
		else {
			b5 = document.getElementById('button5').innerHTML = player2
			document.getElementById('button5').disabled = true
			count = 0
		}
	}
	function button6() {
		if (count == 0) {
			b6 = document.getElementById('button6').innerHTML = player1
			document.getElementById('button6').disabled = true
			count = 1
		}
		else {
			b6 = document.getElementById('button6').innerHTML = player2
			document.getElementById('button6').disabled = true
			count = 0
		}
	}
	function button7() {
		if (count == 0) {
			b7 = document.getElementById('button7').innerHTML = player1
			document.getElementById('button7').disabled = true
			count = 1
		}
		else {
			b7 = document.getElementById('button7').innerHTML = player2
			document.getElementById('button7').disabled = true
			count = 0
		}
	}
	function button8() {
		if (count == 0) {
			b8 = document.getElementById('button8').innerHTML = player1
			document.getElementById('button8').disabled = true
			count = 1
		}
		else {
			b8 = document.getElementById('button8').innerHTML = player2
			document.getElementById('button8').disabled = true
			count = 0
		}
	}
	function button9() {
		if (count == 0) {
			b9 = document.getElementById('button9').innerHTML = player1
			document.getElementById('button9').disabled = true
			count = 1
		}
		else {
			b9 = document.getElementById('button9').innerHTML = player2
			document.getElementById('button9').disabled = true
			count = 0
		}
	}
	function check() {
		if (
			(b1 == b2 && b2 == b3 && b1 == "X")
			||
			(b1 == b5 && b5 == b9 && b1 == "X")
			||
			(b1 == b4 && b4 == b7 && b1 == "X")
			||
			(b4 == b5 && b5 == b6 && b4 == "X")
			||
			(b7 == b8 && b8 == b9 && b7 == "X")
			||
			(b7 == b5 && b5 == b3 && b7 == "X")
			||
			(b2 == b5 && b5 == b8 && b2 == "X")
			||
			(b3 == b6 && b6 == b9 && b3 == "X")
			||
			(b1 == b2 && b2 == b3 && b1 == "O")
			||
			(b1 == b5 && b5 == b9 && b1 == "O")
			||
			(b1 == b4 && b4 == b7 && b1 == "O")
			||
 			(b4 == b5 && b5 == b6 && b4 == "O")
 			||
 			(b7 == b8 && b8 == b9 && b7 == "O")
 			||
			(b7 == b5 && b5 == b3 && b7 == "O")
			||
			(b2 == b5 && b5 == b8 && b2 == "O")
			||
			(b3 == b6 && b6 == b9 && b3 == "O")
			) {
			if (count == 0) {
				alert("player X wins")
				restart()
				document.getElementById('result').innerHTML = "PLAYER X WON,<br> CLICK THE RESTART BUTTON TO PLAY AGAIN"
				// b1 = document.getElementById('button1').disabled = true
				// b2 = document.getElementById('button2').disabled = true
				// b3 = document.getElementById('button3').disabled = true	
				// b4 = document.getElementById('button4').disabled = true
				// b5 = document.getElementById('button5').disabled = true
				// b6 = document.getElementById('button6').disabled = true
				// b7 = document.getElementById('button7').disabled = true
				// b8 = document.getElementById('button8').disabled = true
				// b9 = document.getElementById('button9').disabled = true


			}
			else if(count == 1){
				alert("player O wins")
				restart()
				document.getElementById('result').innerHTML = "PLAYER O WON,<br> CLICK THE RESTART BUTTON TO PLAY AGAIN"
				// b1 = document.getElementById('button1').disabled = true
				// b2 = document.getElementById('button2').disabled = true
				// b3 = document.getElementById('button3').disabled = true	
				// b4 = document.getElementById('button4').disabled = true
				// b5 = document.getElementById('button5').disabled = true
				// b6 = document.getElementById('button6').disabled = true
				// b7 = document.getElementById('button7').disabled = true
				// b8 = document.getElementById('button8').disabled = true
				// b9 = document.getElementById('button9').disabled = true
			}
		} 
	}

	function restart(){
	b1 = document.getElementById('button1').innerHTML = "|"
	b2 = document.getElementById('button2').innerHTML = "|"
	b3 = document.getElementById('button3').innerHTML ="|"
	b4 = document.getElementById('button4').innerHTML = "|"
	b5 = document.getElementById('button5').innerHTML = "|"
	b6 = document.getElementById('button6').innerHTML = "|"
	b7 = document.getElementById('button7').innerHTML = "|"
	b8 = document.getElementById('button8').innerHTML = "|"
	b9 = document.getElementById('button9').innerHTML = "|"


	b1 = document.getElementById('button1').disabled =false
	b2 = document.getElementById('button2').disabled =false
	b3 = document.getElementById('button3').disabled =false	
	b4 = document.getElementById('button4').disabled =false
	b5 = document.getElementById('button5').disabled =false
	b6 = document.getElementById('button6').disabled =false
	b7 = document.getElementById('button7').disabled =false
	b8 = document.getElementById('button8').disabled =false
	b9 = document.getElementById('button9').disabled =false
		
	}