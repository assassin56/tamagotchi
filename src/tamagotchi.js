
export class Tamagotchi {
  constructor(tamagotchi) {
    this.tamagotchi = tamagotchi;
    this.happiness = 100;
    this.hunger = 100;
    this.sleep = 100;
    this.busy = false;
    this.alive = true;
    // this.play = 0; 
  }

  setHappiness() {
    setInterval( () => {
      if (this.happiness > 0) {
        this.happiness -= 10;
      }
    }, 1000);
  }

  setHunger() {
    setInterval( () => {
      if (this.hunger > 0) {
        this.hunger -= 10;
      }
    }, 1000);
  }   

  setTired() {
    setInterval( () => {
      if (this.sleep > 0) {
        this.sleep -= 10;
      }
    }, 1000);
  }
  
  feedTamagotchi() {
    if (this.busy === false && this.alive === true) {
      this.hunger = 100;
      this.busy = true;
      setTimeout( () => {
        this.busy = false;
      }, 1000 * 5);
    }
  }

  timeForBed() {
    if (this.busy === false && this.alive === true) {
      this.sleep = 100;
      this.busy = true;
      setInterval( () => {
        this.busy = false;
      }, 1000);
    }
  }

  
}