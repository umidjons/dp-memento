import { Command } from './Command';
import { Originator } from './Originator';

const originator = new Originator();
const command = new Command(originator);

originator.setNumber(1);
originator.setString('first');
originator.print();
command.save();

originator.setNumber(2);
originator.setString('second');
originator.print();
command.save();

originator.setNumber(3);
originator.setString('third');
originator.print();
command.save();

command.restore();
command.restore();
command.restore();
command.restore();
