import { Memento } from './Memento';
import { Originator } from './Originator';

export class Command {

    private originator: Originator;
    private readonly history: Memento[];

    constructor(originator: Originator) {
        this.originator = originator;
        this.history = [];
    }

    save() {
        const snapshot = this.originator.createSnapshot();
        this.history.push(snapshot);
        this.print('Saving...');
    }

    restore() {
        if (!this.history.length) {
            this.print('Nothing to restore');
            return;
        }

        const snapshot = this.history.pop();
        if (!snapshot) {
            this.print('Empty snapshot');
            return;
        }

        snapshot.restore();
        this.print('Restored');
    }

    private print(title: string) {
        console.log('Command:', title, JSON.stringify(this.history, null, 2));
    }

}
