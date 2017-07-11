
	var Finn = {
		name: "finn",
		display: "Finn the Human",
		health: 120,
		attackP: 12,
		baseAttackP: 12,
		counterAttack: 12
	};

	var Jake = {
		name: "jake",
		display: "Jake the Dog",
		health: 150,
		attackP:8,
		baseAttackP: 8,
		counterAttack: 8
	};

	var princessBubblegum = {
		name: "princessbubblegum",
		display: "Princess Bubblegum",
		health: 100,
		attackP: 10,
		baseAttackP: 10,
		counterAttack: 15
	};

	var BMO = {
		name: "bmo",
		display: "BMO",
		health: 150,
		attackP: 9,
		baseAttackP: 9,
		counterAttack: 12
	};

	var characters = ['finn', 'jake', 'princessBubblegum', 'bmo'];
	var player1;
	var player2;
	var player3;
	var player4;

	
$(document).ready(function() {

	$('#player1').click(function() {
		player1 = Finn;
		$('#player1').empty();
		$('#playerCharArea').append('<img src="assets/images/Finn.png" class="charPick img-rounded">');
		$('#playerStats').append('<h2 id="player1Attack"> Attack Power: '+ Finn.attackP +'</h2>' + '<h2 id="player1Health"> Health Points:' +Finn.health +'</h2>' + '<h1>' + Finn.display + '</h1>');
	});

	$('#player2').click(function() {
		player2 = Jake;
		$('#player2').empty();
		$('#enemyCharArea').append('<img src="assets/images/Jake.png" class="charPick img-rounded">');
		$('#enemyStats').append('<h2 id="player2Attack"> Attack Power:' + Jake.attackP + '</h2>' + '<h2 id="player2Health">Health Points:' + Jake.health + '</h2>' + '<h1>' + Jake.display + '</h1>');
	});

	$('#player3').click(function() {
		player2 = princessBubblegum;
		$('#player3').empty();
		$('#battleStats').empty();
		$('#enemyCharArea').append('<img src="assets/images/Princess.png" class="charPick img-rounded">');
		$('#enemyStats').append('<h2 id="player3Attack"> Attack Power:' + princessBubblegum.attackP + '</h2>' + '<h2 id="player3Health">Health Points:' + princessBubblegum.health + '</h2>' + '<h1>' + princessBubblegum.display + '</h1>');
	});

	$('#player4').click(function() {
		player2 = BMO;
		$('#player4').empty();
		$('#battleStats').empty();
		$('#enemyCharArea').append('<img src="assets/images/BMO.png" class="charPick img-rounded">');
		$('#enemyStats').append('<h2 id="player4Attack"> Attack Power:' + BMO.attackP + '</h2>' + '<h2 id="player4Health">Health Points:' + BMO.health + '</h2>' + '<h1>' + BMO.display + '</h1>');
	});

	$('#attack').click(function() {
		player2.health -= player1.attackP;
		player1.health -= player2.counterAttack;
		player1.attackP += player1.baseAttackP;

		$('#player1Health').html('<h2> Health Points:' + Finn.health + '</h2>');
		$('#player2Health').html('<h2> Health Points:' + Jake.health + '</h2>');
		$('#player3Health').html('<h2> Health Points:' + princessBubblegum.health + '</h2>');
		$('#player4Health').html('<h2> Health Points:' + BMO.health + '</h2>');


		$('#player1Attack').html('<h2> Attack Power: ' + Finn.attackP + '</h2>');
		$('#player2Attack').html('<h2> Attack Power: ' + Jake.attackP + '</h2>');
		$('#player3Attack').html('<h2> Attack Power: ' + princessBubblegum.attackP + '</h2>');
		$('#player4Attack').html('<h2> Attack Power: ' + BMO.attackP + '</h2>');


		if (player2.health <= 0) {
			$('#enemyCharArea').empty();
			$('#enemyStats').html(" ");
			$('#battleStats').append('<h2> You have defeated ' + player2.display + '<h2>Please Choose New Opponent </h2>');
		}
		else {
			player1Health -= player2.counterAttack;
			if (player1.health <= 0) {
				$('#attack').hide();
				$('#battleStats').append('<h2> OH MY GLOB....I have been defeated </h2>');
			}
		};
	
	});



});

console.log(Finn)


