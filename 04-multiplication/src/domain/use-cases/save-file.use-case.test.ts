import { SaveFile } from "./save-file.use-case";
import fs from 'fs';

describe('saveFileUseCase', () => {

    const options = { 
        fileDestination: 'custom-outputs', 
        fileContent: 'custom content',
        fileName: 'custom-table-name' 
    };

    afterEach(() => {
        //clean up
        const outputFolderExists = fs.existsSync('outputs');
        if(outputFolderExists) {
            fs.rmSync('outputs', {recursive: true});
        }

        const customOutputFolderExists = fs.existsSync(options.fileDestination);
        if(customOutputFolderExists) fs.rmSync(options.fileDestination, {recursive: true});

    });

    test('should save file with default values', () => {
        
        const saveFile = new SaveFile();
        const filePath = 'outputs/table.txt';
        
        const result = saveFile.execute({ fileContent: 'test content' });
        const checkFile = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, {encoding:'utf8'});
        
        expect(result).toBe(true);
        expect(checkFile).toBe(true);
        expect(fileContent).toBe('test content');
    });


    test('should save file with custom values', () => {
        
        const saveFile = new SaveFile();

        const customFilePath = `${options.fileDestination}/${options.fileName}.txt`;

        const result = saveFile.execute(options);
        const checkContent = fs.readFileSync(customFilePath, {encoding:'utf8'});

        expect(result).toBe(true);
        expect(fs.existsSync(customFilePath)).toBe(true);
        expect(checkContent).toBe(options.fileContent);
        });
});