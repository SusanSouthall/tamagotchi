import { Tamagotchi } from './../src/tamagotchi.js';

describe('Tamagotchi', function() {
  let pico = new Tamagotchi("Pico De Gallo");

  beforeEach(function() {
    jasmine.clock().install();
    pico.setHunger();
    pico.setSleep();
    pico.setAttention();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food/sleep/attention level of 10 when it is created', function() {
    expect(pico.name).toEqual("Pico De Gallo");
    expect(pico.foodLevel).toEqual(15);
    expect(pico.sleepLevel).toEqual(10);
    expect(pico.attentionLevel).toEqual(10);
  });

  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(pico.foodLevel).toEqual(12);
    expect(pico.sleepLevel).toEqual(7);
    expect(pico.attentionLevel).toEqual(7);
  });

  it('should get very hungry if the food level drops below zero', function() {
    pico.foodLevel = 0;
    expect(pico.zombieGotchi()).toEqual(true);
  });

  it('should get very tired if the sleep level drops below zero', function() {
    pico.sleepLevel = 1;
    expect(pico.zombieGotchiSleep()).toEqual(false);
  });

  it('should get very lonely if the attention level drops below zero', function() {
    pico.attentionLevel = 0;
    expect(pico.zombieGotchiAttention()).toEqual(true);
  })

  it('should get very hungry if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(15001);
    expect(pico.zombieGotchi()).toEqual(true);
  });

  it('should get very tired if 10 seconds pass without sleeping', function() {
    jasmine.clock().tick(10001);
    expect(pico.zombieGotchiSleep()).toEqual(true);
  });

  it('should get very lonely if 10 seconds pass without attention', function() {
    jasmine.clock().tick(10001);
    expect(pico.zombieGotchiAttention()).toEqual(true);
  });

  it('should have a food, sleep, attention level of ten if it is supplied', function() {
    jasmine.clock().tick(14001);
    pico.feed();
    expect(pico.foodLevel).toEqual(10);
    pico.sleep();
    expect(pico.sleepLevel).toEqual(10);
    pico.attention();
    expect(pico.attentionLevel).toEqual(10);
  });

  it('should determine if tamagotchi has been over fed', function() {
    pico.foodLevel = 16;
    pico.messIncrement();
    expect(pico.mess).toEqual(1);
  });
});
