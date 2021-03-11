import { Backupable } from './Backupable';
import { Memento } from './Memento';
import { Snapshot } from './Snapshot';

export class Originator implements Backupable {

    private someNumber: number;
    private someString: string;

    constructor() {
        this.someNumber = 0;
        this.someString = '';
    }

    createSnapshot(): Memento {
        return new Snapshot(this, { someNumber: this.someNumber, someString: this.someString });
    }

    setNumber(num: number) {
        this.someNumber = num;
    }

    setString(str: string) {
        this.someString = str;
    }

    print(): void {
        console.log(`Originator: {someNumber: ${ this.someNumber }, someString: ${ this.someString }}`);
    }

}
