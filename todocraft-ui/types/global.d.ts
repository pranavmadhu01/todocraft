type User = {
  id: string;
  created_at: string;
  name: string;
  email: string;
};

type Project = {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  todo_count?: number;
};

type Todo = {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
  status: boolean;
  project_id: string;
};

type ProjectWithTodo = {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
  completed_todo_count: number;
  todos: Todo[];
};
