import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('Home');
    }
    async getHtml() {
        return `
        <img src='./images/nuggit.jpeg'>

        <p style='background-color: rgba(61, 60, 61, 0.69);'>

        `;
    }
}