import { Tamagotchi } from './../src/tamagotchi.js';

describe('Tamagotchi', function() {
  let pico = new Tamagotchi("Pico De Gallo");

  beforeEach(function() {
    jasmine.clock().install();
    pico.setHunger();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(pico.name).toEqual("Pico De Gallo");
    expect(pico.foodLevel).toEqual(10);
  });

  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(pico.foodLevel).toEqual(7);
  });

  it('should get very hungry if the food level drops below zero', function() {
    fuzzy.foodLevel = 0;
    expect(pico.zombieGotchi()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(10001);
    expect(pico.zombieGotchi()).toEqual(true);
  });

  it('should have a food level of ten if it is fed', function() {
    jasmine.clock().tick(9001);
    pico.feed();
    expect(pico.foodLevel).toEqual(10);
  });
});
