import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

const { b:base, l:limit, s:displayTable } = yarg;

let outputsMessage = '';
const headerMessage = `====================================\n          Tabla del ${base}\n====================================\n`;

    for (let i = 1; i <= limit ; i++) {
        outputsMessage += `${base} x ${i} = ${base*i}\n`;
    }

outputsMessage = headerMessage + outputsMessage;

const outputPath = `outputs`;

//en consola
if (displayTable) {
    console.log(outputsMessage);
} 

//en archivo
fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputsMessage);
console.log("file created");
