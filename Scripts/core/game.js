"use strict";
// Author : NOUSHIG CHITJIAN
// Student ID : 301117936
// Date : AUG.19,2020
// Descrption : THIS TYPESCRIPT FILE WILL TRANSPILE INTO GAME.JS ^_^
let Game = (function () {
    // variable declarations
    let canvas = document.getElementsByTagName('canvas')[0];
    let stage;
    let assets;
    let Button;
    let rightSideDice;
    let leftSideDice;
    let rightSideNumber;
    let leftSideNumber;
    


    let assetManifest = [
        { id: "1", src: "./Assets/images/1.png" },
        { id: "2", src: "./Assets/images/2.png" },
        { id: "3", src: "./Assets/images/3.png" },
        { id: "4", src: "./Assets/images/4.png" },
        { id: "5", src: "./Assets/images/5.png" },
        { id: "6", src: "./Assets/images/6.png" },
        { id: "backButton", src: "./Assets/images/startButton.png" },
        { id: "background", src: "./Assets/images/background.png" },
        { id: "blank", src: "./Assets/images/blank.png" },
        { id: "button", src: "./Assets/images/button.png" },
        { id: "nextButton", src: "./Assets/images/nextButton.png" },
        { id: "placeholder", src: "./Assets/images/placeholder.png" },
        { id: "resetButton", src: "./Assets/images/resetButton.png" },
        { id: "rollButton", src: "./Assets/images/rollButton.png" },
        { id: "startButton", src: "./Assets/images/startButton.png" },
        { id: "startOverButton", src: "./Assets/images/startOverButton.png" }
    ];
    function Preload() {
        console.log(`%c Preload Function`, "color: grey; font-size: 14px; font-weight: bold;");
        assets = new createjs.LoadQueue(); // asset container 
        assets.installPlugin(createjs.Sound); // supports sound preloading
        assets.loadManifest(assetManifest);
        assets.on("complete", Start);
    }
    /**
     * This method initializes the CreateJS (EaselJS) Library
     * It sets the framerate to 60 FPS and sets up the main Game Loop (Update)
     */
    function Start() {
        console.log(`%c Start Function`, "color: grey; font-size: 14px; font-weight: bold;");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = Config.Game.FPS;
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20);
        Config.Game.ASSETS = assets; // make a reference to the assets in the global config
        Main();
    }
    /**
     * This function is triggered every frame (16ms)
     * The stage is then erased and redrawn
     */
    function Update() {
        stage.update();
    }

   
    //this function will create the objects
    function buildInt() {
        //this will create a button.
        Button = new UIObjects.Button("rollButton", Config.Game.CENTER_X, Config.Game.CENTER_Y + 100, true);
        stage.addChild(Button);
        //this creates two dices.
        leftSideDice = new Core.GameObject("1", Config.Game.CENTER_X - 150, Config.Game.CENTER_Y - 80, true);
        stage.addChild(leftSideDice);
        rightSideDice = new Core.GameObject("1", Config.Game.CENTER_X + 150, Config.Game.CENTER_Y - 80, true);
        stage.addChild(rightSideDice);
        //this creates two text labels under each dice respectively.
        leftSideNumber = new UIObjects.Label("1", "20px", "Consolas", "#000000", Config.Game.CENTER_X - 150, Config.Game.CENTER_Y + 35, true);
        stage.addChild(leftSideNumber);
        rightSideNumber = new UIObjects.Label("1", "20px", "Consolas", "#000000", Config.Game.CENTER_X + 150, Config.Game.CENTER_Y + 35, true);
        stage.addChild(rightSideNumber);
    }

        //this function will change the Result of the diceR every time clicked on the button
        function rollTheDice() {
            let diceR = [" ", " "];
            let result = [0, 0];
            for (let diceRoll = 0; diceRoll < 2; diceRoll++) {
                result[diceRoll] = Math.floor((Util.Mathf.RandomRange(1, 6)));
                switch (result[diceRoll]) {
                    case result[diceRoll] = 1:
                        diceR[diceRoll] = "1";
                        break;
                    case result[diceRoll] = 2:
                        diceR[diceRoll] = "2";
                        break;
                    case result[diceRoll] = 3:
                        diceR[diceRoll] = "3";
                        break;
                    case result[diceRoll] = 4:
                        diceR[diceRoll] = "4";
                        break;
                    case result[diceRoll] = 5:
                        diceR[diceRoll] = "5";
                        break;
                    case result[diceRoll] = 6:
                        diceR[diceRoll] = "6";
                        break;
                }
            }
            return diceR;
        }

           
 
 
        //this function will create the logic
        function intLogic() {
            Button.on("click", () => {
                
                //this will show the message whenever button gets clicked
                console.log("Roll button clicked !");
                
                //this will change the text and the image of the dice depending on the dice number
                let dice = rollTheDice();
                leftSideDice.image = assets.getResult(dice[0]);
                leftSideNumber.setText(dice[0].toString());
                rightSideDice.image = assets.getResult(dice[1]);
                rightSideNumber.setText(dice[1].toString());
            });
        }
    /**
     * This is the main function of the Game (where all the fun happens)
     * this functions will get implemented on page load
     */
    function Main() {
        console.log(`%c Main Function`, "color: grey; font-size: 14px; font-weight: bold;");
        buildInt();
        intLogic();
    }
    window.addEventListener('load', Preload);
})();
//# sourceMappingURL=game.js.map