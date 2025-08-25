"use client";
import { useRouter } from "next/navigation";
import type { Task } from "@/lib/types";

export function TaskCard({
  task,
  onToggle,
  onDelete,
}: {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
}) {
  const router = useRouter();

  return (
    <div className="group flex items-center justify-between rounded-2xl border border-gray-800 bg-neutral-900/60 p-4 shadow-sm transition hover:bg-neutral-900">
      {/* Left: toggle + title */}
      <button
        aria-label={task.completed ? "Mark as not completed" : "Mark as completed"}
        onClick={onToggle}
        className="mr-3 inline-flex items-center justify-center"
      >
        <span
          className={`grid h-5 w-5 place-items-center rounded-full border ${
            task.completed ? "border-sky-500 bg-sky-600" : "border-gray-600"
          }`}
        >
          {task.completed && <CheckIcon className="h-3.5 w-3.5 text-white" />}
        </span>
      </button>

      <div
        onClick={() => router.push(`/tasks/${task.id}/edit`)}
        className="flex min-w-0 flex-1 cursor-pointer items-center gap-3"
      >
        <span className={`h-3 w-3 rounded-full ${colorToBg(task.color)}`} />
        <div className="min-w-0">
          <div
            className={`truncate text-sm font-medium ${
              task.completed ? "text-gray-500 line-through" : "text-gray-100"
            }`}
          >
            {task.title}
          </div>
        </div>
      </div>

      <button
        onClick={onDelete}
        className="ml-3 rounded-lg p-2 text-gray-400 hover:bg-neutral-800 hover:text-red-400"
        aria-label="Delete task"
        title="Delete"
      >
        <TrashIcon className="h-4 w-4" />
      </button>
    </div>
  );
}

function colorToBg(c: string) {
  switch (c) {
    case "red": return "bg-red-500";
    case "orange": return "bg-orange-400";
    case "yellow": return "bg-yellow-400";
    case "green": return "bg-green-500";
    case "blue": return "bg-blue-500";
    case "indigo": return "bg-indigo-500";
    case "purple": return "bg-purple-500";
    case "pink": return "bg-pink-500";
    case "brown": return "bg-amber-700";
    default: return "bg-gray-500";
  }
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M3 6h18M9 6V4h6v2M8 10v8M12 10v8M16 10v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
