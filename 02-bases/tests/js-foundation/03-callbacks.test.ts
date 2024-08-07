import {getUserById} from '../../src/js-foundation/03-callbacks';


describe('js-foundation/03-callbacks', ()=> {

    test('getUserById should return an error if user does not exist', (done)=> {

        const userId = 123;

        getUserById(userId, (error, user)=> {
            expect(error).toBe(`User not found with id: ${userId}`);
            expect(user).toBeUndefined();
            done();
        });

    });

    test('getUserById with id 1 should return Ryan Reynolds', ()=>{
        const userId = 1;

        getUserById(userId, (error, user)=> {
            expect(error).toBeUndefined();
            expect(user).toEqual({
                id: 1,
                name: 'Ryan Reynolds',
            });
        });
    });


});