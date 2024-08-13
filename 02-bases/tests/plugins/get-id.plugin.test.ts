import { getUUId } from "../../src/plugins";


describe('plugins/get-id.plugin.ts', () => {

    test('getUUId should return a UUID', () => {

        const id = getUUId();

        expect(typeof id).toBe('string');
        expect(id.length).toBe(36);
    });

});
