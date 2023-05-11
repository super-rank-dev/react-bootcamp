export type FilterTypes = 'all' | 'active' | 'completed';
export type TodoType = 'active' | 'completed' | 'cleared';

export interface Todo {
  id: string;
  label: string;
  status: TodoType;
}

export type Todos = Todo[];


export interface AppContextProps {
  addTodo: (label: string) => void;
  toggleCompleted: (id: string) => void;
  clearCompleted: () => void;
  changeFilter: (filter: FilterTypes) => void;
  getFilter: () => FilterTypes;
  getTodos: () => Todos;
}
