const canvas = document.getElementById("myCanvas");
canvas.height = window.innerHeight;
canvas.Width=200;

const ctx = canvas.getContext ("2d");
const car = new Car (100,100,30,50);
car.draw(ctx);
