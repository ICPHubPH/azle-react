import { StableBTreeMap, stableJson } from 'azle';
export class DatabaseStorage {
    constructor(options) {
        this.STORAGE_KEY = options?.key || 'DATABASE';
        this.STORAGE_INDEX = options?.index || 0;
        this.storage = StableBTreeMap(this.STORAGE_INDEX, stableJson, {
            toBytes: (data) => data,
            fromBytes: (bytes) => bytes,
        });
    }
    async get() {
        return this.storage.get(this.STORAGE_KEY).Some;
    }
    async set(data) {
        return this.storage.insert(this.STORAGE_KEY, data);
    }
}
