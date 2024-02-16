// find the button which will trigger the event first
const button = document.querySelector('button');
const ul = document.querySelector('ul');
// add an event listerner to the button
button.addEventListener('click', () => {
    // ul.innerHTML += `<li>something new</li>`;
    const li = document.createElement('li');
    li.textContent = 'something new';
    // ul.append(li);
    ul.prepend(li);
});

// event clicks start on the clicked target and bubble up the parents to look for event listeners
// can be utilised to trigger many actions up through the parents

// get a list of all items
// const items = document.querySelectorAll('li');
// // attach event listeners to each of the items
// items.forEach((item) => {
//     // browser automatically passes an 'e' argument (event)
//    item.addEventListener('click', (e) => {
//       // console.log(`clicked ${item.textContent}`);
//       // console.log(`clicked ${e.target.textContent}`);
//       // console.log(e);
//       // console.log(e.target);
//
//       // to remove:
//       // e.target.remove();
//
//        // line through it
//        e.stopPropagation(); // stops Event Bubbling
//       if (e.target.style.textDecoration !== 'line-through'){
//           e.target.style.textDecoration = 'line-through';
//       } else {
//           e.target.style.textDecoration = 'none';
//       }
//    });
// });

// Event Bubbling ------------------------!!!
// event clicks start on the clicked target and bubble up the parents to look for event listeners
// can be utilised to trigger many actions up through the parents
// can also be used to catch all clicks within this element and perform actions!
// instead of adding listeners to every to-do item...
ul.addEventListener('click', e => {
    // line through it
    if (e.target.tagName === 'LI') {
        if (e.target.style.textDecoration !== 'line-through'){
            e.target.style.textDecoration = 'line-through';
        } else {
            e.target.style.textDecoration = 'none';
        }
    }
});
