     //Programmer: Maxwell Moss
    //Team Member: James Maher
   //Bolt ID:SB-F28B
  //Date: 4.16.2024
 //Program: Hello world - Sandbox
//program url:https://edu.sphero.com/program/16788354/edit

	async function startProgram(){
	// Programmer: Maxwell Moss - Start Text & Audio Checkpoint Commit - Date: 4-31-2024
	await scrollMatrixText('Start', { r: 255, g: 255, b: 255 }, 15, true);
	await speak("Start", true);

	// Programmer:James maher -blue led checkpoint commit - Date: 5-1-2024
	await roll((getHeading() + 0), 50, 3.3);
	setMainLed({r:0, g:0, b:255});
	
		

	// Programmer: Maxwell Moss - Sound One Checkpoint Commit - Date:
	await delay(1);
	await roll((getHeading() + 90), 50, 2.6);
	await Sound.Water.BoatAngry.play(true);


	// Programmer:James Maher  - Red LED Checkpoint Commit - Date:5-6-2024
	await delay(1);
	await roll((getHeading() + 90), 50, 1.5);
	await delay(1);
	await roll((getHeading() + 45), 50, 1.5);
	setMainLed({r:255, g:0, b:0});



	// Programmer: Maxwell Moss - Sound Two Checkpoint Commit - Date:
	await delay(1);
	await roll((getHeading() - 90), 50, 0.5);
	await delay(1);
	await roll((getHeading() - 90), 50, 1.5);
	await Sound.Water.BoatAngry.play(true);


	// Programmer:  - Green LED Checkpoint Commit - Date:



	// Programmer:  - Sound Two Checkpoint Commit - Date:



	// Programmer:  - Purple LED & Sound Three Checkpoint Commit - Date:



	// Programmer: Maxwell Moss - Finish Text & Audio Checkpoint Commit - Date:	

}