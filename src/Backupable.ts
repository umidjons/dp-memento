import { Memento } from './Memento';

export interface Backupable {
    createSnapshot(): Memento;
}
