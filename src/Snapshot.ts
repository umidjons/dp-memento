import { Memento } from './Memento';
import { Originator } from './Originator';

export interface State {
    someNumber: number;
    someString: string;
}

export class Snapshot implements Memento {

    private originator: Originator;
    private state: State;

    constructor(originator: Originator, state: State) {
        this.originator = originator;
        this.state = state;
    }

    restore() {
        this.originator.setNumber(this.state.someNumber);
        this.originator.setString(this.state.someString);
    }
}
