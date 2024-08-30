import { yarg } from "./args.plugin";

const runCommand = async (args: string[]) => {

    process.argv =[...process.argv, ...args];

    const {yarg} = await import('./args.plugin');

    return yarg;
}

describe('Test in args.plugin.ts', () => {

    test ('should return default values', async() => {
        
        const argv = await runCommand(['-b', '5']);

        expect(argv.b).toBe(5);
        expect(argv).toEqual(expect.objectContaining({
            b: 5,
            l: 10,
            s: false,
            n: 'multiplication-table',
            d: 'outputs',
        }));
    });

});