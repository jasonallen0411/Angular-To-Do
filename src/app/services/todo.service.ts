import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

	private todos: Todo[];
	private nextId: number;

	constructor() {
		this.todos = [
		new Todo(0, "Wake up"),
		new Todo(1, "Get out of bed"),
		new Todo(2, "Make bed"),
		new Todo(3, "Brush teeth"),
		new Todo(4, "Get dressed"),
		new Todo(5, "Grab books"),
		new Todo(6, "Go to class")
		];

		this.nextId = 7;
	 }

	 public addTodo(text: string): void {
	 	let todo = new Todo(this.nextId, text);
	 	this.todos.push(todo);
	 	this.nextId++;
	 }

	 public getTodos(): Todo[] {
	 	return this.todos;
	 }

	 public removeTodo(id: number): void {
	 	this.todos = this.todos.filter((todo) => todo.id != id);
	 }
}
