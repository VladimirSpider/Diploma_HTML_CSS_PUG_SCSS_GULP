const closeBurgerMenu = document.querySelector('.close_burger_menu');
const closeBurger = document.querySelector('.close_burger');
const openBurger = document.querySelector('.open_burger_menu')
const buttonCloseBurger = document.querySelector('.button_close_burger_menu a')

const callBack = () => {
	closeBurger.classList.toggle("close_burger_hidden");
	openBurger.classList.toggle("open_burger_menu_show");
}

closeBurgerMenu.addEventListener('click', () => {
	callBack();
})

buttonCloseBurger.addEventListener('click', () => {
	callBack();
})
