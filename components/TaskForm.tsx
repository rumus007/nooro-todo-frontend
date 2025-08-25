"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createTask, getTask, updateTask } from "@/lib/api";
import type { Task } from "@/lib/types";
import { PlusIconTask, ArrowLeftIcon, CheckIcon } from "./icons";

const COLORS = ["red","orange","yellow","green","blue","indigo","purple","pink","brown"] as const;
type Color = typeof COLORS[number];

export function TaskForm({ taskId }: { taskId?: number }) {
  const router = useRouter();
  const isEdit = typeof taskId === "number";
  const [title, setTitle] = useState("");
  const [color, setColor] = useState<Color>("red");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isEdit) return;
    (async () => {
      try {
        setLoading(true);
        const t = await getTask(taskId!);
        setTitle(t.title);
        setColor((t.color as Color) || "red");
      } catch (e: any) {
        setError(e?.message || "Failed to load task");
      } finally {
        setLoading(false);
      }
    })();
  }, [isEdit, taskId]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Title is required");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      if (isEdit) await updateTask(taskId!, { title, color });
      else await createTask({ title, color });
      router.push("/");
    } catch (e: any) {
      setError(e?.message || "Failed to save");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <button
        type="button"
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white"
      >
        <ArrowLeftIcon className="h-5 w-5" /> <span>Back</span>
      </button>

      <form onSubmit={onSubmit} className="mx-auto max-w-2xl space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-sky-400">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ex. Brush your teeth"
            className="w-full rounded-xl border border-gray-800 bg-neutral-800 p-3 text-gray-100 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-sky-600"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-sky-400">Color</label>
          <div className="flex flex-wrap gap-3">
            {COLORS.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setColor(c)}
                aria-label={c}
                className={`h-10 w-10 rounded-full ring-2 ${
                  color === c ? "ring-white" : "ring-transparent"
                } ${colorToBg(c)}`}
              />
            ))}
          </div>
        </div>

        {error && <div className="text-sm text-red-400">{error}</div>}

        <button
          disabled={loading}
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-3 font-semibold text-white hover:bg-sky-500 disabled:opacity-60"
        >
          {isEdit ? (
            <>
              Save <CheckIcon className="h-5 w-5" />
            </>
          ) : (
            <>
              Add Task <PlusIconTask className="h-5 w-5" />
            </>
          )}
        </button>
      </form>
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

