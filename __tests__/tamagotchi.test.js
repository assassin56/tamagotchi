import {Tamagotchi} from '../src/tamagotchi'
import { JestEnvironment } from '@jest/environment';

describe("Tamagotchi", () => {
    jest.useFakeTimers();
    let tamagotchi;
    beforeEach( () => {
        tamagotchi = new Tamagotchi("Hiro");
    });

    afterEach( function() {
        jest.clearAllTimers();
    });
    
    test('test for decrement health value over time', () => {
        tamagotchi.setHappiness();
        jest.advanceTimersByTime(1001);
        expect(tamagotchi.happiness).toEqual(90);
    });
    
    test('test for decrement hunger value over time', () => {
        tamagotchi.setHunger();
        jest.advanceTimersByTime(1001);
        expect(tamagotchi.hunger).toEqual(90);
    });

    test('test for feeding the tamagotchi after its hunger has decremented', () => {
        tamagotchi.feedTamagotchi();
        jest.advanceTimersByTime(1001);
        expect(tamagotchi.hunger).toEqual(100);
    });

    test('test to make the tamagotchi go to sleep when sleep meter is low', () => {
        tamagotchi.timeForBed();
        jest.advanceTimersByTime(1001);
        expect(tamagotchi.sleep).toEqual(100);
    });
    
    // test('should decrease the health every second the tamagotchi plays', () => {
    //     tamagotchi.play();
    //     jest.advanceTimersByTime(3001);
    //     expect(tamagotchi.health).toEqual(85);
    //     expect(tamagotchi.feed).toEqual(85);
    // });


});