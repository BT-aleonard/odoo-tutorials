/** @odoo-module */

import { Todo } from "../todo/todo";

import { Component, useState} from "@odoo/owl";

export class TodoList extends Component {
    setup() {
        this.nextId = 0;
        this.todoList = useState([]);
    }

    addTodo(ev){
        if (ev.keyCode === 13 && ev.target.value != "") {
            this.todoList.push({ id: this.nextId++, description: ev.target.value, done: false });
            ev.target.value = "";
        }
    }
}

TodoList.components = { Todo };
TodoList.template = "owl_playground.TodoList";