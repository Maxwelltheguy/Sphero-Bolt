//Programmer: Maxwell Moss
//Team Member: James Maher
//Bolt ID:SB-F28B
//Date: 4-16-2024
//Program: Hello World - Sandbox
//Program URL: https://edu.sphero.com/program/16700425/edit

/*
async function startProgram() {
await speak("Hello World", true);
	setMainLed({ r: 0, g: 0, b: 255});
	setSpeed(60);
	await delay (2);
	setSpeed(0);
}
*/
/*
async function startProgram() {

	setMainLed({ r: 255, g: 50, b: 0 });
	await speak("Hippity Hoppity", true);
	await delay(1);
	for (var bolt = 0; bolt < 4; bolt++) {
		setMainLed(getRandomColor());
		await Sound.EightBit.Magic.play(true);
		await roll((getHeading() + 90), 60, 1);
		await delay(1);
	}
}
*/


async function startProgram() {
	await roll((getHeading() + 90), 60, 1);
	await delay(1);
	await roll((getHeading() - 90), 60, 1);


}
