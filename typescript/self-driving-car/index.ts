import { getObstacleEvents } from './computer-vision';

interface Events {
  [key: string]: boolean;
}

interface  Control {
  execute(command: string): void;
}

interface Steering extends Control{
  turn(direction: string): void;
}

interface AutonomousCarProps {
  isRunning?: boolean;
  steeringControl: Steering
}

interface AutonomousCar {
  isRunning?: boolean;
  respond: (events: Events) => void
}

class SteeringControl implements Steering {
  execute(command: string) {
    console.log(`Executing: ${command}`);
  }
  turn(direction: string) {
    this.execute(`turn ${direction}`)
  }
}

class Car implements AutonomousCar{
  isRunning: boolean | undefined;
  steeringControl: Steering | undefined;

  constructor(props: AutonomousCarProps){
    this.isRunning = props.isRunning;
    this.steeringControl = props.steeringControl
    }
    respond(events: Events): void{
      if (!this.isRunning) {
        console.log('The Car is off!');
        return;
      }
      Object.keys(events).forEach(eventKey => {
        if (events[eventKey] === false) {
          return;
        }
        if (eventKey === 'ObstacleLeft') {
          this.steeringControl?.turn('right');
        }
        if (eventKey === 'ObstacleRight') {
          this.steeringControl?.turn('left');
        }
      });
    }
}

const steering = new SteeringControl();

const autonomousCar = new Car({ isRunning: true, steeringControl: steering });

steering.turn('left')
autonomousCar.respond(getObstacleEvents())


