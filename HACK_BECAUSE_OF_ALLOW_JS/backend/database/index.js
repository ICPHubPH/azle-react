import initSqlJs from 'sql.js/dist/sql-asm.js';
import { DataSource } from 'typeorm';
import { DatabaseStorage } from '../database/storage';
export const DatabaseDefaults = {
    storage: new DatabaseStorage(),
};
export class Database {
    constructor(options = DatabaseDefaults) {
        this.options = options;
        this.storage = this.options.storage;
    }
    async connect(bytes) {
        const AppDataSource = new DataSource({
            type: 'sqljs',
            // TODO: may I get this from the options?
            driver: await initSqlJs({}),
            database: bytes,
            synchronize: this.options.sincronize,
            entities: this.options.entities,
            migrations: this.options.migrations,
            migrationsRun: this.options.migrationsRun,
            logging: this.options.logging,
            logger: this.options.logger,
        });
        const dataSource = await AppDataSource.initialize();
        return dataSource;
    }
    async init() {
        try {
            this.options.sincronize = true;
            this.dataSource = await this.connect(Uint8Array.from([]));
        }
        catch (error) {
            console.error('Error initializing database:', error);
            throw error;
        }
    }
    async load() {
        try {
            const data = (await this.storage.get()) || Uint8Array.from([]);
            if (data.length === 0) {
                this.options.sincronize = true;
                console.log('Empty database found in storage');
            }
            this.dataSource = await this.connect(data);
        }
        catch (error) {
            console.error('Error initializing database:', error);
            throw error;
        }
    }
    async save() {
        if (!this.dataSource) {
            throw new Error('Database not initialized');
        }
        const driver = this.dataSource.driver;
        const data = driver.export();
        await this.storage.set(data);
    }
    async getDataSource() {
        if (!this.dataSource) {
            throw new Error('Database not initialized');
        }
        return this.dataSource;
    }
}
