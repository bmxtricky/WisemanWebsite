import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('Shop');
    }
    async getHtml() {
        return `
        <style>
        p {
            color: white;
        }
        </style>
            <p>test
            
                           Hi this is my shop</p>
        `;
    }
}