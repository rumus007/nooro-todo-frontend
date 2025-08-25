import { TaskForm } from "@/components/TaskForm";

type Props = {
  params: { id: string };
};

export default function EditTaskPage({ params }: Props) {
  const id = Number(params.id);
  return (
    <main>
      <h2 className="mb-4 text-xl font-semibold">Edit Task</h2>
      <TaskForm taskId={id} />
    </main>
  );
}
