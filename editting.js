let allNames = [];
const addFull = (ev)=>{
    ev.preventDefault();
    let fullName = {
        firstName: document.getElementById('firstName').innerHTML,
        lastName: document.getElementById('lastName').innerHTML
    };
    allNames.push(fullName);
    document.forms[0].reset();

    console.warn('added', {allNames});
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(allNames, '\t',2);
};
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addFull);
});
