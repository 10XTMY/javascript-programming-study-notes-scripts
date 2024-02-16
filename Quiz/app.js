const correctAnswers = ['A', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
   e.preventDefault();
   let score = 0;
   const userAnswers = [form.q1.value, form.q2.value]
    // check answers
    userAnswers.forEach((answer, index) => {
       if(answer === correctAnswers[index]) {
           score+= 50;
       }
    });
   // display result
   scrollTo(0,0);
   // result.querySelector('span').textContent = `${score}%`;
   result.classList.remove('d-none'); // remove display: none to reveal result

    // animate the percentage result
    let output = 0;
    const timer = setInterval(() => {
       result.querySelector('span').textContent = `${output}%`;
       if (output === score){
           clearInterval(timer);
       } else {
           output++;
       }
    }, 10);
});

// window object (global object)
// console.log is actually window.console.log but window is the global variable we use automatically
// document.querySelector('form');
// window.document.queryselector('form);

// alerts after 3 seconds of page loading
// setTimeout(() => {
//     alert('heyo, im a timeout alert :D');
// }, 3000);

// perform action every nth millisecond
// let i = 0;
// const intervalLog = setInterval(() => {
//    console.log('interval msg');
//    i++;
//    if (i === 5){
//        clearInterval(intervalLog);
//    }
// }, 1000);
