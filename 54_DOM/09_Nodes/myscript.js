const parent = document.getElementById('parent');

// Append Child
const para = document.createElement('p');
const words = document.createTextNode("This is new paragraph append with DOM!");
para.appendChild(words);
// parent.appendChild(para);

// Remove Child
// use remove() method remove on element
// but recommended removeChild(), call in parent element to remove child element
// para.remove();
const first = document.getElementById('first');
// parent.removeChild(first);
// first.parentNode.removeChild(first);

// insert before
// use insertBefore(newElement, oldElement)
parent.insertBefore(para, first);

// replace child
// use replaceChild(newElement, oldElement)
const para2 = document.createElement('p');
const words2 = document.createTextNode("Learn JavaScript DOM!");
para2.appendChild(words2);

parent.replaceChild(para2, first);