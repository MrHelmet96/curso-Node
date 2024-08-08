import {buildMakePerson} from '../../src/js-foundation/05-factory';

describe('js-foundation/05.factory.ts', () => {

    const getUUId = () => '123';
    const getAge = () => 25;

    it('should return a person object with id, name, birthdate and age', () => {
        const obj = {name: 'Jhon', birthdate: '1996-10-17'}
        const john = buildMakePerson({getUUId, getAge })(obj);
        expect(john).toEqual({
            id: '123',
            name: 'Jhon',
            birthdate: '1996-10-17',
            age: 25,
        });
    });

    test('buildMakePerson should return a function', () => {
        const makePerson = buildMakePerson({getUUId, getAge});
        expect(typeof makePerson).toBe('function');
    });


});
