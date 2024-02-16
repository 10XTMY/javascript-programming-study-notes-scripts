// import './dom'; // to use functions within the module they must be exported from the module..
// import {styleBody, addTitle} from "./dom";
import importedString, {styleBody, addTitle} from "./dom";

console.log(importedString);
addTitle('boo!');
styleBody();
