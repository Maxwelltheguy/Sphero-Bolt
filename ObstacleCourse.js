//Programmer: Maxwell Moss
//Team Member: James Maher
//Bolt ID:SB-F28B
//Date: 4-24-2024
//Program: Obstacle Course
//Program URL: https://edu.sphero.com/program/16752554/edit

//Maxwell Moss
async function startProgram() {
	setMainLed({ r:0, g:0, b:255});
	await speak("Imma beat this thing")
	await roll((getHeading() + 0), 40, 1);
	await roll((getHeading() + 45), 80, 1);
}
