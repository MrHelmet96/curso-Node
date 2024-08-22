import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base: number;
    limit: number;
    displayTable: boolean;
    fileName: string;
    fileDestination: string;
}

export class ServerApp {
    
    static run({base, limit, displayTable, fileName, fileDestination}: RunOptions) {
        console.log('Server running');

        const table = new CreateTable().execute({base, limit});
        const wasCreated = new SaveFile()
        .execute({
            fileContent: table,
            fileDestination: fileDestination,
            fileName: fileName
        });

        if (displayTable) console.log(table);

        (wasCreated) 
        ? console.log('file created') 
        : console.log('error creating file');
    }
}