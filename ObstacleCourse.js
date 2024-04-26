//Programmer: James Maher
//Team Member: Max Moss
//Date ID: 4.16.2024
//Program: Hello world - Sandbox
//program url: https://edu.sphero.com/program/16752575/edit

//Maxwell Moss
async function startProgram() {
	setMainLed({ r:0, g:0, b:255});
	await speak("Imma beat this thing")
	await roll((getHeading() + 0), 40, 1);
	await roll((getHeading() + 45), 80, 1);
	//James Maher
	await delay(1);
	setMainLed({r:10, g:100, b:115});
	await roll((getHeading() - 20), 100, 1);
	//Maxwell Moss - PC 7 - checkpoint 3 - green
	await delay(1);
	setMainLed({r:0, g:225, b:0});
	await roll((getHeading() + 125), 150, 1);
	await Sound.Mechanical.Hammer.play(true); 
	await delay(1);
}