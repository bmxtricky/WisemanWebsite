import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Home");
  }
  async getHtml() {
    return `
        <style>
        .img1{
            display: flex;
            width: 70%;
            margin-left: 15%;
            margin-top: 5%;
            border-radius: 15px;
            box-shadow: inset 0px 0px 15px 4px black, 0px 0px 15px 4px black;
        }
       
        </style>
        <div>
        <div class="imgContainer">
        <img class='img1' src='/images/nuggit.jpeg' alt='banner'>
        </div>
        
        <div class="lowerContainer">
         <p class="aboutMe"></p>
        </div>
        </div>
        
        `;
  }
}
