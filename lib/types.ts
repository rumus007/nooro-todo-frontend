export type Task = {
  id: number;
  title: string;
  color: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink' | 'brown';
  completed: boolean;
  createdAt: string;
  updatedAt: string;
};

export type CreateTaskInput = {
  title: string;
  color: Task['color'];
};

export type UpdateTaskInput = Partial<Pick<Task, 'title' | 'color' | 'completed'>>;
