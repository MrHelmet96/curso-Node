import { buildLogger } from "../../src/plugins";



describe('plugins/logger.plugins.ts', () => {

    test('buildLogger should return a function logger', () => {
        const logger = buildLogger('test');
        expect(typeof logger.log).toBe('function');
        expect(typeof logger.error).toBe('function');
    });
});