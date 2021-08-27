import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('Shop');
    }
    async getHtml() {
        return `
            <p style='background-color: rgba(61, 60, 61, 0.69);'>test
            
                           Hi this is my shop</p>
        `;
    }
}