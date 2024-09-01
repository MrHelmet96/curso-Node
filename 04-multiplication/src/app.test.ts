import { ServerApp } from "./presentation/server-app";


describe ('Test App.ts', () => {
    test('should call Server.run with values', async() => {
        
        const serverRunMock = jest.fn();
        ServerApp.run = serverRunMock;
        process.argv = ['node', 'app.ts', '-b', '9', '-l', '5', '-s', '-n', 'test-file', '-d', 'test-destination']

        await import('./app');

        expect(serverRunMock).toHaveBeenCalledWith({
            base: 9,
            limit: 5,
            displayTable: true,
            fileName: 'test-file',
            fileDestination: 'test-destination'
        });
    });
});