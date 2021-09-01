import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Contact");
  }
  async getHtml() {
    return `
            <p>test
            
                            dadasd
                            asdasd
                            asd
                            asd
                            as      aqwdasdsa</p>
        `;
  }
}
