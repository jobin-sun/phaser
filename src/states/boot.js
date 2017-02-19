class Boot extends Phaser.State {

  constructor() {
    super();
  }

  preload() {
    this.load.image('preloader', 'assets/preloader.gif');
  }

  create() {
    this.game.input.maxPointers = 1;
    this.game.scale.pageAlignHorizontally = true;
    //setup device scaling
    if (!this.game.device.desktop) {
      this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      
      /*this.game.scale.minWidth =  screen.availWidth;
      this.game.scale.minHeight = screen.availHeight;
      this.game.scale.maxWidth = screen.availWidth;
      this.game.scale.maxHeight = screen.availHeight;
      this.game.scale.forceOrientation(true);
      */
      //this.game.scale.setScreenSize(true);
    }

    this.initGlobalVariables();

    this.game.state.start('preloader');
  }

  initGlobalVariables(){
    this.game.global = {
      score: 0
    };
  }

}

export default Boot;
