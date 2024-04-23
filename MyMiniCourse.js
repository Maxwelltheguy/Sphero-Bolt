//Programmer: Maxwell Moss
//Team Member: James Maher
//Bolt ID:SB-F28B
//Date: 4-23-2024
//Program: My Mini Course
//Program URL: https://edu.sphero.com/program/16743357/edit

async function startProgram() {
	setMainLed({ r:160, g:32, b:240 });
	await speak("Bibbity Bobbity, These shoes are now my property!");
	await delay(1);
	await roll((getHeading() + 0), 80, 1);
	await delay(1);
	await roll((getHeading() + 90), 70, 1);
	await delay(1);
	await Sound.EightBit.Charging.play(true);

}
