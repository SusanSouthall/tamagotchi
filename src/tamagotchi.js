class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.sleepLevel = 10;
    this.attentionLevel = 10;
  }
  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }
  setSleep() {
    setInterval(() => {
      this.sleepLevel--;
    }, 1000);
  }
  setAttention() {
    setInterval(() => {
      this.attentionLevel--;
    }, 1000);
  }
  zombieGotchi() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }
  zombieGotchiSleep() {
    if (this.sleepLevel > 0) {
      return false;
    } else {
      return true;
    }
  }
  zombieGotchiAttention() {
    if (this.attentionLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    this.foodLevel = 10;
  }
  sleep() {
    this.sleepLevel = 10;
  }
  attention() {
    this.attentionLevel = 10;
  }
}
export { Tamagotchi };
