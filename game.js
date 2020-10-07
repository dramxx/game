class Game {
  constructor() {
    this.canvas = document.getElementById("game");
    this.context = this.canvas.getContext("2d");
    this.spriteImage = new Image();
    this.spriteImage.src = "assets/magic.png";
    this.sprites = [];
    const game = this;

    this.spriteImage.onload = (event) => {
      game.lastRefreshTime = Date.now();
      game.spawn();
      game.refresh();
    };
  }

  spawn = () => {
    const options = {
      context: this.context,
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      width: this.spriteImage.width,
      height: this.spriteImage.height,
      image: this.spriteImage,
    };
    const sprite = new Sprite(options);
    this.sprites.push(sprite);
    this.sinceLastSpawn = 0;
  };

  refresh = () => {
    const now = Date.now();
    const dTime = (now - this.lastRefreshTime) / 1000.0;

    this.update(dTime);
    this.render();

    this.lastRefreshTime = now;

    const game = this;
    requestAnimationFrame(() => {
      game.refresh();
    });
  };

  update = (dTime) => {
    this.sinceLastSpawn += dTime;
    this.sinceLastSpawn > 1 && this.spawn();
  };

  render = () => {
    this.sprites.forEach((sprite) => sprite.render());
  };
}

class Sprite {
  constructor(options) {
    this.context = options.context;
    this.width = options.width;
    this.height = options.height;
    this.image = options.image;
    this.x = options.x;
    this.y = options.y;
  }

  render = () => {
    this.context.drawImage(this.image, this.x, this.y, 50, 30);
  };
}
