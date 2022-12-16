'use strict';

const dropdown = document.querySelector('#dropbtn');

dropdown.onclick = () => {
    const dropdownList = document.querySelector('#dropdownList');
    if (dropdownList.classList.contains('show')) {
        dropdownList.classList.remove('show');
    } else {
        dropdownList.classList.toggle('show');
    }
};
