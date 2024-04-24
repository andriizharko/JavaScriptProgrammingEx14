import { $, createElement, createTextNode } from '/dom.js'
import { notNullOrEmpty, isValidNumber, isValidDate } from '/validators.js'
import { Person } from '/person.js'

const createBtn = $('#btnCreate');
const txtFirstname = $('#txtFirstname');
const txtLastname = $('#txtLastname');
const txtDob = $('#txtDob');

let err = $('#errors');
let tb = $('#people');

let people = [];
let errors = [];

createBtn.addEventListener('click', addPerson);

function addPerson() {
    let p = new Person(txtFirstname.value, txtLastName.value, new Date(`${txtDob.value} T00:00:00`));

    if (isValidPerson(p)) {
        people.push(p);

        let tr = createElement('tr');
        let tdFirstName = createElement('td');
        let tdLastName = createElement('td');
        let tdAge = createElement('td');

        tdFirstName.innerHTML = p.firstName;
        tdLastName.innerHTML = p.lastName;
        tdAge.innerHTML = p.age();

        tr.appendChild(tdFirstName);
        tr.appendChild(tdLastName);
        tr.appendChild(tdAge);
        tb.appendChild(tr);

        clearForm();

    }
    else {
        err.innerHTML = '';
        let ul = createElement('ul');

        errors.forEach(err => {
            let li = createElement('li');
            li.appendChild(createTextNode(err));
            ul.appendChild(li);
        })

        err.appendChild(ul);
    }

}

function clearForm{
    txtFirstname.value = '';
    txtLastname.value = '';
    txtDob.value = '';
    err.innerHTML = '';
    txtFirstname.focus();
}

function isValidPerson(person) {
    errors = [];

    if (!notNullOrEmpty(person.firstName)) errors.push('First name is required');
    if (!notNullOrEmpty(person.lastName)) errors.push('Last name is required');
    if (!isValidDate(person.dateOfBirth)) errors.push('Birthdate is invalid');
    if (!isValidNumber(person.age)) errors.push('Agge is not valid');

    return errors.length == 0;
}

const searchMsg = $('#searchMsg');
const searchTable = $('#search');
const txtSearch = $('#txtSearch');
const btn = $('#btnSearch');

btn.addEventListener('click', function () {
    searchMsg.innerHTML = '';
    let query = Person.searchPeople(txtSearch.value.trim().toLowerCase(), people)
    searchMsg.innerHTML = `<p><strong>${query.length} </strong>result(s)  found for <strong> ${txtSearch.value.trim()}</strong></p>`;

    query.forEach(p => {
        let tr = createElement('tr');
        let tdFirstName = createElement('td');
        let tdLastName = createElement('td');
        let tdAge = createElement('td');

        tdFirstName.innerHTML = p.firstName;
        tdLastName.innerHTML = p.lastName;
        tdAge.innerHTML = p.age();

        tr.appendChild(tdFirstName);
        tr.appendChild(tdLastName);
        tr.appendChild(tdAge);
        searchTable.appendChild(tr);
    });

    txtSearch.value = '';
})