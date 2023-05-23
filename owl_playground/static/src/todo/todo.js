/** @odoo-module */

import { Component } from "@odoo/owl";

export class Todo extends Component {
    //static props = ['id', 'description', 'done'];
}

Todo.template = "owl_playground.Todo";
Todo.props = {
    id: {type: Number},
    description: {type: String},
    done: {type: Boolean},
}