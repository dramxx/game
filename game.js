class Game {
  constructor() {
    this.canvas = document.getElementById("game");
    this.context = this.canvas.getContext("2d");

    this.spriteImage = new Image();
    this.spriteImage.src = "assets/DMA.jpg";

    const game = this;

    this.spriteImage.onload = (event) => {
      const options = {
        context: game.context,
        width: this.width,
        height: this.height,
        image: this.spriteImage,
      };
      game.sprite = new Sprite(options);
      game.sprite.render();
    };
  }
}

class Sprite {
  constructor(options) {
    this.context = options.context;
    this.width = options.width;
    this.height = options.height;
    this.image = options.image;
  }

  render() {
    this.context.drawImage(this.image, 70, 20, 150, 100);
  }
}
