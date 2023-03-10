document.addEventListener('DOMContentLoaded', () => {
	const menuButton = document.querySelector('.burger-menu');
	const headerNavigation = document.querySelector('.navigation-header');
	menuButton.addEventListener('click', () => {
		headerNavigation.classList.toggle('active');
	});
});