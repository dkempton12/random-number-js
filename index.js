const randomNumber = (min, max, randomMultiplier = Math.random()) => randomMultiplier * (max - min) + min;

randomNumber(20, 100);
