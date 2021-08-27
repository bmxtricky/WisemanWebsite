import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('Home');
    }
    async getHtml() {
        return `
            <p style='background-color: rgba(61, 60, 61, 0.69);'>test
            
                            dadasd
                            asdasd
                            asd
                            asd
                            as      aqwdasdsa</p>
        `;
    }
}