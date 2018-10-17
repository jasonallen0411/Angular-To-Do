import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-to-do-input',
  templateUrl: './to-do-input.component.html',
  styleUrls: ['./to-do-input.component.css']
})
export class ToDoInputComponent implements OnInit {

	private todoText: string;

  	constructor(private todoService: TodoService) { 
  		this.todoText = '';
  	}

  	ngOnInit() {
  }

  private addTodo(): void{
  	this.todoService.addTodo(this.todoText);
  	this.todoText = '';
  }

}
