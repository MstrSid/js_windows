import './slider';
import modals from "./modules/modals";

window.addEventListener('DOMContentLoaded', () => {
	modals('.popup', '.popup .popup_close', '.phone_link');
	modals('.popup_engineer', '.popup_engineer .popup_close', '.popup_engineer_btn');
})

