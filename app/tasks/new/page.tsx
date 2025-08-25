import { TaskForm } from "@/components/TaskForm";

export default function NewTaskPage() {
  return (
    <main>
      <h2 className="mb-4 text-xl font-semibold">Create Task</h2>
      <TaskForm />
    </main>
  );
}
