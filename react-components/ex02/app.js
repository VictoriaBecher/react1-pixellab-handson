const person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};
const dropChars = (string, charCount = 2) => {
  return string.slice(0, string.length - charCount);
};
console.warn(
  `Folosind obiectul person si reduce, afiseaza in consola un string care contine skillurile de pe pozitiile pare ale arrayului, separate prin virgula`,
);
const string1 = person.skills.reduce((string1, skill, index, skills) => {
  if (index % 2 === 0) {
    string1 += `${skill}, `;
  }
  return string1;
}, '');
console.log(dropChars(string1));

console.warn(' In mod similar, afiseaza skillurile care NU incep cu j.');
const string2 = person.skills.reduce((string2, skill) => {
  if (!skill.startsWith('j')) {
    string2 += `${skill}, `;
  }

  return string2;
}, '');
console.log(dropChars(string2));

console.warn(
  ` Folosind reduce afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."`,
);
const sentence = person.friends.reduce(
  (sentence, { name, surname }, index, friends) => {
    const punctuation = index === friends.length - 1 ? '.' : ', ';

    sentence += `${name} ${surname} ${punctuation}`;
    return sentence;
  },
  'Prietenii mei se numesc ',
);
console.log(sentence);

console.warn(
  ` Folosind reduce, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca varsta este mai mare sau egala cu 30 de ani.`,
);
const sumYears = person.friends.reduce((sumYears, { age }) => {
  if (age >= 30) {
    sumYears += age;
  }
  return sumYears;
}, 0);
console.log(sumYears);

console.warn(
  ` Folosind reduce, afiseaza suma anilor de nastere ai persoanelor. `,
);
const sumBirthYears = person.friends.reduce((sumBirthYears, { age }) => {
  const currentYear = new Date().getFullYear();

  sumBirthYears += currentYear - age;

  return sumBirthYears;
}, 0);
console.log(sumBirthYears);

console.warn(
  ` Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ", doar daca varsta prietenului este impara. `,
);
const string3 = person.friends
  .reduce((string3, { age, name }) => {
    string3 += `intre ${person.name} si ${name} este o diferenta de ${Math.abs(
      person.age - age,
    )} ani. `;
    return string3;
  }, '')
  .trim();
console.log(string3);

console.warn(
  `Folosind obiectul person si reduce, afiseaza in consola un string care contine skillurile persoanei, separate prin virgula`,
);
const string4 = person.skills.reduce((string4, skill) => {
  string4 += `${skill}, `;
  return string4;
}, '');
console.log(dropChars(string4));

console.warn(`In mod similar, afiseaza skillurile care incep cu c `);
const string5 = person.skills.reduce((string5, skill) => {
  if (skill.startsWith('c')) string5 += `${skill}, `;
  return string5;
}, '');
console.log(dropChars(string5));

console.warn(
  `Folosind reduce afiseaza propozitia: "Numele de familie ale prietenilor mei sunt: xxx, xxx , xxx."`,
);
const sentence2 = person.friends.reduce(
  (sentence2, { name }, index, friends) => {
    const punctuation = index === friends.length - 1 ? '.' : ', ';
    sentence2 += `${name}${punctuation}`;
    return sentence2;
  },
  'Numele de familie ale prietenilor mei sunt: ',
);
console.log(sentence2);

console.warn(
  `Folosind reduce, afiseaza numarul total de ani pe care il au persoanele din arrayul friends `,
);
const totalYears = person.friends.reduce((totalYears, { age }) => {
  totalYears += age;
  return totalYears;
}, 0);
console.log(totalYears);

console.warn(`Folosind reduce, afiseaza suma anilor  persoanelor. `);
const allYears = person.friends.reduce((allYears, { age }) => {
  allYears += age;
  return allYears;
}, person.age);
console.log(allYears);

console.warn(
  ` Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends. `,
);
const diffAge = person.friends.reduce((diffAge, { age }) => {
  diffAge -= age;
  return diffAge;
}, person.age);
console.log(Math.abs(diffAge));

console.warn(
  `Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ". Repeta pentru tot arrayul friends.`,
);
const sentence3 = person.friends
  .reduce((sentence3, { name, age }) => {
    sentence3 += `Intre ${
      person.name
    } si ${name} este o diferenta de varsta de ${Math.abs(
      person.age - age,
    )} ani. `;
    return sentence3;
  }, '')
  .trim();
console.log(sentence3);
