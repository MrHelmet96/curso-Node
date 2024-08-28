import { CreateTable } from "./create-table.use-case"


describe('CreateTableUseCase', () => {
    test('should create table with default values', ()=> {
        const createTable = new CreateTable();
        const table = createTable.execute({base: 2});

        console.log(table);

        expect(createTable).toBeInstanceOf(createTable);
    })
})