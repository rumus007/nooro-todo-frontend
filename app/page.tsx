"use client";
import { useEffect, useMemo, useState } from "react";
import { TaskCard } from "@/components/TaskCard";
import { getTasks, toggleTask, deleteTask } from "@/lib/api";
import type { Task } from "@/lib/types";
import { PlusIcon, EmptyIcon } from "@/components/icons";

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = async () => {
    try {
      setLoading(true);
      const list = await getTasks();
      setTasks(list);
      setError(null);
    } catch (e: any) {
      setError(e?.message || "Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { refresh(); }, []);

  const summary = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    return { total, completed };
  }, [tasks]);

  const onToggle = async (task: Task) => {
    const updated = { ...task, completed: !task.completed };
    setTasks((prev) => prev.map((t) => (t.id === task.id ? updated : t)));
    try { await toggleTask(task.id, updated.completed); }
    catch {
      setTasks((prev) => prev.map((t) => (t.id === task.id ? task : t)));
      alert("Failed to update task");
    }
  };

  const onDelete = async (task: Task) => {
    if (!confirm(`Delete "${task.title}"?`)) return;
    const prev = tasks;
    setTasks(prev.filter((t) => t.id !== task.id));
    try { await deleteTask(task.id); }
    catch {
      setTasks(prev);
      alert("Failed to delete");
    }
  };

  return (
    <div className="space-y-6">
      {/* Big Create button */}
      <div className="flex justify-center">
        <a
          href="/tasks/new"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-3 font-semibold text-white hover:bg-sky-500 transition"
        >
          Create Task <PlusIcon className="h-5 w-5" />
        </a>
      </div>

      {/* Counters row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-200">
          <span>Tasks</span>
          <span className="rounded-full bg-gray-700 px-2 py-0.5 text-xs">{summary.total}</span>
        </div>
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-200">
          <span>Completed</span>
          <span className="rounded-full bg-gray-700 px-2 py-0.5 text-xs">
            {summary.completed} of {summary.total}
          </span>
        </div>
      </div>

      {loading && <div className="text-gray-400">Loading…</div>}
      {error && <div className="text-red-400">{error}</div>}

      {/* List / Empty state */}
      <div className="grid gap-3">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onToggle={() => onToggle(task)}
            onDelete={() => onDelete(task)}
          />
        ))}

        {!loading && tasks.length === 0 && (
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-gray-800 bg-neutral-900/60 px-8 py-14 text-center">
            <EmptyIcon className="h-10 w-10 text-gray-600" />
            <p className="mt-2 text-lg font-semibold text-gray-200">
              You don’t have any tasks registered yet.
            </p>
            <p className="text-gray-400">Create tasks and organize your to-do items.</p>
          </div>
        )}
      </div>
    </div>
  );
}

