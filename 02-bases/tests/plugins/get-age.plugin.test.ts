import { getAge } from "../../src/plugins";

describe('plugins/get-age.plugin', () => {

    test('getAge should return the age of a person', () => {

        const birthdate = '1990-01-01';
        const age = getAge(birthdate);

        expect(typeof age).toBe('number');
    });

    test('getAge should return current age', () => {
            
            const birthdate = '1990-01-01';
            const age = getAge(birthdate);
    
            const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();

            expect(age).toBe(calculatedAge);
    });

});