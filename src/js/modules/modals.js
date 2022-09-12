const modals = (modalSelector, closeSelector, triggerSelector) => {
	const modal = document.querySelector(modalSelector);
	const closeBtn = document.querySelector(closeSelector);
	const modalTrigger = document.querySelectorAll(triggerSelector);

	modalTrigger.forEach(item => {
		item.addEventListener('click', (e) => {
			if (e.target) {
				e.preventDefault();
				modal.style.display = 'block';
				document.body.classList.add('modal-open');
			}
		});
	})

	closeBtn.addEventListener('click', (e) => {
		if (e.target) {
			modal.style.display = 'none';
			document.body.classList.remove('modal-open');
		}
	});

	modal.addEventListener('click', (e) => {
		if (e.target && e.target === modal) {
			closeBtn.click();
		}
	});

	const showModalByTime = (selector, time) => {
		setTimeout(() => {
			document.querySelector(selector).style.display = 'block';
			document.body.classList.add('modal-open');
		}, time);
	}

	showModalByTime('.popup', 60000);
};

export default modals;