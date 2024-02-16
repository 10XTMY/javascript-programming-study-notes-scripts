console.log('dom js')

const body = document.querySelector('body');

// export const styleBody = () => {
const styleBody = () => {
    body.style.background = 'peachpuff';
};

const addTitle = (text) => {
    const title = document.createElement('h1');
    title.textContent = text;
    body.appendChild(title);
};

// export const contact = 'tom@tom.com';
const contact = 'tom@tom.com';

// export {styleBody, addTitle} // export all at once
//
// export default contact; // import this as any name you choose

export {styleBody, addTitle, contact as default};
