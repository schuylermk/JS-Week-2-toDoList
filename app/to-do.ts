interface IPerson {
  name: string;
  email: string;
}

interface ITask {
  description: string;
  done: boolean;
  priority: string;
  markDone(): void;
  assignedTo?: IPerson;
}

class Task implements ITask {
  done: boolean = false;
  constructor(public description: string, public priority: string, public assignedTo?: IPerson) {}
  markDone () {
    this.done = true;
  }
}

class HomeTask extends Task {
  constructor(public description: string, public priority: string, public assignedTo?: IPerson)  {
    super(description, priority);
  }
}

class WorkTask extends Task {
constructor(public description: string, public priority: string, public assignedTo: IPerson) {
    super(description, priority, assignedTo);
  }
}

class HobbyTask extends Task {
  constructor(public description: string) {
    super(description, "low");
  }
}

var diane: IPerson = {
  name: "Diane D",
  email: "diane@epicodus.com"
}

var thor: IPerson = {
  name: "Thor Son of Odin",
  email: "thor@asgard.com"
}

var loki: IPerson = {
  name: "God of Mischief",
  email: "loki@geocities"
}

var tasks = [];
tasks.push(new HomeTask("Do the dishes", "high"));
tasks.push(new HomeTask("Buy cookies", "low"));
tasks.push(new HomeTask("wash laundry", "high"));

tasks.push(new HobbyTask("Practice origami."));
tasks.push(new HobbyTask("Bake a pie."));

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);

tasks.push(new WorkTask(today, "Update website", "High", diane));
tasks.push(new WorkTask(tomorrow, "Go to meeting", "medium", thor));
tasks.push(new WorkTask(nextDay, "Clean ceiling", "low", loki));

// tasks[0].markDone();
console.log(tasks);
