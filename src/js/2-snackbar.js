// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const refs = {
    form: document.querySelector('.form'),
    delay: document.querySelector('input[name="delay"]'),
    state: document.querySelector('input[name="state"]'),
}

refs.form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(refs.form);
    const promiseInfo = Object.fromEntries(formData.entries());

    if(promiseInfo.state === 'fulfilled') {
        promiseInfo.state = true;
    } else {
        promiseInfo.state = false;
    };

    const state = promiseInfo.state;
    const delay = +promiseInfo.delay;

    createPromise(state, delay);

    refs.form.reset(); 
})


function createPromise(isPositive, delay) {
    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            if(isPositive) {
                iziToast.show({
                    message: `✅ Fulfilled promise in ${delay}ms`,
                    color: 'green',
                    position: 'topRight',
                    messageSize: '20',
                  });
            } else {
                iziToast.show({
                    message: `❌ Rejected promise in ${delay}ms`,
                    color: 'red',
                    position: 'topRight',
                    messageSize: '20',
                  });
            }
        }, delay);
    });
    return promise;
};