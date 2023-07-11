var taskDetails = {
    getFullCard() {
      return this.title + ' ' + this.description + ' ' + this.dueDate + ' ' + this.priority;
    },
  };

export function createTask(title, description, dueDate, priority) {
    let task = Object.create(taskDetails);
    task.title = title;
    task.description = description;
    task.dueDate = dueDate;
    task.priority = priority;
    return task;
}