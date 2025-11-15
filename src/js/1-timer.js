// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const refs = {
    input: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};

let userSelectedDate = null;
let countdownInterval = null;


    flatpickr(refs.input, {
    enableTime: true,
    // dateFormat: "Y-m-d H:i",
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const pickedDate = selectedDates[0];
        if((pickedDate) <= Date.now()) {
            iziToast.show({
              message: 'Please choose a date in the future',
              color: 'red',
              position: 'topRight',
              messageSize: '20',
            });
            refs.startBtn.disabled = true;
        } else {
            userSelectedDate = pickedDate; 
            refs.startBtn.disabled = false;
    }
    },
});

    
    refs.startBtn.addEventListener('click', () => {
        if(!userSelectedDate) return;
        refs.startBtn.disabled = true;
        startCountdown(userSelectedDate);
    });

    function startCountdown(date) {
        clearInterval(countdownInterval);
        countdownInterval = setInterval(() => {
            const now = Date.now();
            const timeDifference = date.getTime() - now;

            if(timeDifference <= 0) {
                clearInterval(countdownInterval);
                addLeadingZero(0, 0, 0, 0);
                return;
            }
            const {days, hours, minutes, seconds} = convertMs(timeDifference);
            addLeadingZero(days, hours, minutes, seconds);
            
        }, 1000);
    }

    function addLeadingZero(days, hours, minutes, seconds) {
        refs.days.textContent = String(days).padStart(2, '0');
        refs.hours.textContent = String(hours).padStart(2, '0');
        refs.minutes.textContent = String(minutes).padStart(2, '0');
        refs.seconds.textContent = String(seconds).padStart(2, '0');
    }

    function convertMs(ms) {
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
      
        // Remaining days
        const days = Math.floor(ms / day);
        // Remaining hours
        const hours = Math.floor((ms % day) / hour);
        // Remaining minutes
        const minutes = Math.floor(((ms % day) % hour) / minute);
        // Remaining seconds
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);
      
        return { days, hours, minutes, seconds };
      }






    //   const refs = {
    //     input: document.querySelector('#datetime-picker'),
    //     startBtn: document.querySelector('[data-start]'),
    //     days: document.querySelector('[data-days]'),
    //     hours: document.querySelector('[data-hours]'),
    //     minutes: document.querySelector('[data-minutes]'),
    //     seconds: document.querySelector('[data-seconds]'),
    // };
    
    // let userSelectedDate = null;
    // let countdownInterval = null;

    // flatpickr(refs.input, {
    //          enableTime: true,
    //           dateFormat: "Y-m-d H:i",
    //       time_24hr: true,
    //          defaultDate: new Date(),
    //          minuteIncrement: 1,
    //          onClose(selectedDates) {
    //             const pickedDate = selectedDates[0];
    //             if(pickedDate <= Date.now()) {
    //                 alert('Pleaseselect a date in future!');
    //                 refs.startBtn.disabled = true;
    //             } else {
    //                 userSelectedDate = pickedDate;
    //                 refs.startBtn.disabled = false;
    //             }
    //          }

    //         });

    //         refs.startBtn.addEventListener('click', () => {
    //             if(!userSelectedDate) return;
    //             refs.startBtn.disabled = true;
    //             startCountdown(userSelectedDate);
            
    //         });


    //         function startCountdown(futureDate) {
    //             clearInterval(startCountdown);
    //             countdownInterval = setInterval( () => {
    //                 const now = Date.now();
    //                 const future = futureDate;
    //                 const timeDifference = future - now;
               
                 
    //             if(countdownInterval <= 0) {
    //                 clearInterval(startCountdown);
    //                 addLeadingZero(0, 0, 0, 0);
    //                 alert('Countdown finished!')
                     
    //             }
    //              const { days, hours, minutes, seconds } = convertMs(timeDifference)
    //             addLeadingZero (days, hours, minutes, seconds);
    //         }, 1000) 

    //         };

            


    //         function addLeadingZero(days, hours, minutes, seconds) {
    //             refs.days.textContent = String(days).padStart(2, '0');
    //             refs.hours.textContent = String(hours).padStart(2, '0');
    //             refs.minutes.textContent = String(minutes).padStart(2, '0');
    //             refs.seconds.textContent = String(seconds).padStart(2, '0');
    //         }

    //         function convertMs(ms) {
    //             // Number of milliseconds per unit of time
    //             const second = 1000;
    //             const minute = second * 60;
    //             const hour = minute * 60;
    //             const day = hour * 24;
              
    //             // Remaining days
    //             const days = Math.floor(ms / day);
    //             // Remaining hours
    //             const hours = Math.floor((ms % day) / hour);
    //             // Remaining minutes
    //             const minutes = Math.floor(((ms % day) % hour) / minute);
    //             // Remaining seconds
    //             const seconds = Math.floor((((ms % day) % hour) % minute) / second);
              
    //             return { days, hours, minutes, seconds };
    //           }
              


















  






  