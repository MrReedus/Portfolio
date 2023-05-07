
const cards = document.querySelectorAll('.card');
const buttons = document.querySelectorAll('.service__button');

let activeButtons = [];

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (event) {

        if (this.classList.contains("button--active")) {
            this.classList.remove("button--active");
            activeButtons.splice(activeButtons.indexOf(this), 1);
        } else {
            if (activeButtons.length < 2) {
                this.classList.add("button--active");
                activeButtons.push(this);
            }
        }

        if (activeButtons.length >= 2) {
            for (let j = 0; j < buttons.length; j++) {
                if (!activeButtons.includes(buttons[j])) {
                    buttons[j].setAttribute("disabled", true);
                    buttons[j].classList.add("button--disabled");
                }
            }
        } else {
            for (let j = 0; j < buttons.length; j++) {
                buttons[j].removeAttribute("disabled");
                buttons[j].classList.remove("button--disabled");
            }
        }

        cards.forEach((card) => {
            const category = card.dataset.category;
            if (activeButtons.length === 0 || activeButtons.some((btn) => btn.id === category)) {
                card.classList.remove('blur');
            } else {
                card.classList.add('blur');
            }
        });
    })
}

//***********************PRICES************************** */

const pricesButtons = document.querySelectorAll('.prices-item__btn');
const ratesContent = document.querySelectorAll('.prices-content');
const rates = document.querySelectorAll('.prices-item');

pricesButtons.forEach((button) => {
    button.addEventListener('click', () => {
        rates.forEach((rate) => {
            if (button.id === rate.dataset.rate) {
                rate.classList.toggle('open');
            } else {
                rate.classList.remove('open');
            }
            ratesContent.forEach((content) => {
                if (button.id === content.dataset.rate) {
                    content.classList.toggle('hidden')

                } else {
                    content.classList.add('hidden')
                }
            })
        })
    })
})


//************************SELECT**************************/

const listBtn = document.querySelector('.contact-city__btn');
const cityList = document.querySelector('.city__list');
const cities = document.querySelectorAll('.city__selected');
const cityText = document.querySelector('.contact__text');
const cityWrapper = document.querySelector('.contact-city__wrapper');
const outList = document.querySelector('.main');


const popups = document.querySelectorAll('.city__popup');


listBtn.addEventListener('click', () => {
    cityList.classList.toggle('show')
    listBtn.classList.toggle('show');
    cityWrapper.classList.add('show')
    popups.forEach((popup) => {
        popup.classList.add('hidden')
    })

})

cities.forEach((city) => {
    city.addEventListener('click', () => {
        cityText.textContent = city.textContent;
        cityList.classList.remove('show');

        popups.forEach((popup) => {
            if (cityText.textContent.includes(popup.id))
                popup.classList.remove('hidden')
        })
    });
})
