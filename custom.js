
class customElement extends HTMLElement{
	constructor(){
		super();
		this.innerHTML="Create custom HTML elements";
	}
}
customElements.define('custom-tag',customElement);