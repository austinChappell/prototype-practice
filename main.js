//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog () {
  this.hungry = false;
  this.owner = undefined;
}

const sadie = new Dog();
const moonshine = new Dog();
const atticus = new Dog();

sadie.status = 'normal';
sadie.color = 'black';
sadie.owner = 'Mason';
moonshine.hungry = true;

// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human () {
  this.cool = true;
}

Human.prototype.pet = function(dog) {
  dog.status = 'happy';
}

Human.prototype.feed = function(dog) {
  dog.hungry = false;
}

const mason = new Human();
const julia = new Human();

mason.cool = false;

// Instances of Human
// Needed: mason, julia
