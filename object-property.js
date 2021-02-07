const students = [
    {id: 20, name: 'Javascript'},
    {id: 31, name: 'Jhankar Mahbub'},
    {id: 41, name: 'Nasim'},
    {id: 71, name: 'Summit'}
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);
const biggerOne = students.find(s => s.id > 40);
console.log(biggerOne);