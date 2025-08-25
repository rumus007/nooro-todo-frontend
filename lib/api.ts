import type { Task, CreateTaskInput, UpdateTaskInput } from "./types";

const BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

async function http<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
    cache: "no-store",
  });
  if (!res.ok) {
    let msg = `HTTP ${res.status}`;
    try {
      const data = await res.json();
      msg = data?.message || msg;
    } catch {}
    throw new Error(msg);
  }
  return res.json() as Promise<T>;
}

export async function getTasks(): Promise<Task[]> {
  return http<Task[]>("/tasks");
}

export async function getTask(id: number): Promise<Task> {
  return http<Task>(`/tasks`)
    .then(list => {
      const found = list.find(t => t.id === id);
      if (!found) throw new Error("Task not found");
      return found;
    });
}

export async function createTask(input: CreateTaskInput): Promise<Task> {
  return http<Task>(`/tasks`, { method: "POST", body: JSON.stringify(input) });
}

export async function updateTask(id: number, input: UpdateTaskInput): Promise<Task> {
  return http<Task>(`/tasks/${id}`, { method: "PUT", body: JSON.stringify(input) });
}

export async function toggleTask(id: number, completed: boolean): Promise<Task> {
  return updateTask(id, { completed });
}

export async function deleteTask(id: number): Promise<void> {
  await fetch(`${BASE}/tasks/${id}`, { method: "DELETE" });
}
