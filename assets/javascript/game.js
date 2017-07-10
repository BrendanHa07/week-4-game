
	var Finn = {
		name: "finn",
		display: "Finn the Human",
		health: 120,
		attackP: 12,
		counterAttack: 7
	};

	var Jake = {
		name: "jake",
		display: "Jake the Dog",
		health: 150,
		attackP:8,
		counterAttack: 8
	};

	var princessBubblegum = {
		name: "princessbubblegum",
		display: "Princess Bubblegum",
		health: 100,
		attackP: 10,
		counterAttack: 8
	};

	var BMO = {
		name: "bmo",
		display: "BMO",
		health: 150,
		attackP: 9,
		counterAttack: 5
	};

	var characters = ['finn', 'jake', 'princessBubblegum', 'bmo'];

	var player2;

	$('#attack').click(function() {
		player2.health -= Finn.attackP;
		Finn.health -= player2.attackP;


		
		$('#player1Health').html('<h2> Health Points:' + Finn.health + '</h2>');
		$('#player2Health').html('<h2> Health Points:' + Jake.health + '</h2>');
		$('#player3Health').html('<h2> Health Points:' + princessBubblegum.health + '</h2>');
		$('#player4Health').html('<h2> Health Points:' + BMO.health + '</h2>');


		if (Jake.health <= 0) {
			alert ('You win!!');
		}
		if (princessBubblegum.health <= 0) {
			alert('You win!!');
		}

		if (BMO.health <= 0) {
			alert ('You win!!');
		}

		if (Finn.health <=0) {
			alert ('You lose!!');
		}

	});

$(document).ready(function() {

	$('#player1').click(function() {
		$('#player1').empty();
		$('#playerCharArea').append('<img src="assets/images/Finn.png" class="charPick">');
		$('#playerStats').append('<h2> Attack Power: '+ Finn.attackP +'</h2>' + '<h2 id="player1Health"> Health Points:' +Finn.health +'</h2>' + '<h2>' + Finn.display + '</h2>');
	});

	$('#player2').click(function() {
		player2 = Jake;
		$('#player2').empty();
		$('#enemyCharArea').append('<img src="assets/images/Jake.png" class="charPick">');
		$('#enemyStats').append('<h2> Attack Power:' + Jake.attackP + '</h2>' + '<h2 id="player2Health">Health Points:' + Jake.health + '</h2>' + '<h2>' + Jake.display + '</h2>');
	});

	$('#player3').click(function() {
		player2 = princessBubblegum;
		$('#player3').empty();
		$('#enemyCharArea').append('<img src="assets/images/Princess.png" class="charPick">');
		$('#enemyStats').append('<h2> Attack Power:' + princessBubblegum.attackP + '</h2>' + '<h2 id="player3Health">Health Points:' + princessBubblegum.health + '</h2>' + '<h2>' + princessBubblegum.display + '</h2>');
	});

	$('#player4').click(function() {
		player2 = BMO;
		$('#player4').empty();
		$('#enemyCharArea').append('<img src="assets/images/BMO.png" class="charPick">');
		$('#enemyStats').append('<h2> Attack Power:' + BMO.attackP + '</h2>' + '<h2 id="player4Health">Health Points:' + BMO.health + '</h2>' + '<h2>' + BMO.display + '</h2>');
	});

	

});


console.log(Finn)


// characterPicked = eval($(this).data("obj"));