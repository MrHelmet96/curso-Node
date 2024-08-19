import fs from 'fs';


let outputsMessage = '';
const base = 5;
const headerMessage = `====================================\n          Tabla del ${base}\n====================================\n`;

    for (let i = 1; i <= 10; i++) {
        outputsMessage += `${base} x ${i} = ${base*i}\n`;
    }

outputsMessage = headerMessage + outputsMessage;

const outputPath = `outputs`;

//en consola
console.log(outputsMessage);

//en archivo
fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputsMessage);
console.log("file created");
