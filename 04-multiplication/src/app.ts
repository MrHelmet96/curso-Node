import {yarg} from "./config/plugins/args.plugin";

//console.log(process.argv);
//console.log(yarg.b);

(async () => {
    await main();
    console.log('fin del programa');
})();

async function main() {
    console.log('Main ejecutado');
}