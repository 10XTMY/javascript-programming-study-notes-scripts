const form = document.querySelector('.signup-form'); // by Class
const feedback = document.querySelector('.feedback'); // by Class
const regExPattern = /^[a-z]{6,}$/ // minimum 6 characters, lower, a-z, no spaces (^$ start and end)

form.addEventListener('submit', e => {
   e.preventDefault(); // stops default page refresh on submit

    // validation
    if (regExPattern.test(form.username.value)) {
        feedback.textContent = `username ${form.username.value} is valid`
    } else {
        feedback.textContent = `ERROR: username ${form.username.value} is invalid`
    }

    // let result = regExPattern.test(form.username.value); // use this the most
    // console.log(result);
    // result = form.username.value.search(regExPattern); // return integer of position of match, -1 false
    // console.log(result);
});

// live feedback
form.username.addEventListener('keyup', e => {
    console.log(e); // see keyboardEvvent attributes in browser console
    if (regExPattern.test(e.target.value)) {
        form.username.setAttribute('class', 'success');
    } else {
        form.username.setAttribute('class', 'error');
    }
});

// RegEx
// declare a pattern for a string to match
// ^ = start of string
// $ = end of string
// [] = character set
// {} = range
// . = any character including special
// '/^[a-zA-Z]{6,10}$' <-- matches only if word is on its own start and end of string,
// and has letters a to z eith lower or upper, and is 6 to 10 characters long

// '/^[a-zA-Z0-9]{6,10}$' now also includes numbers
// '/^.{6,10}$' <-- matches any characters 6 to 10 long
