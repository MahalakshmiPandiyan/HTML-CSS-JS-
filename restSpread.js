let language = ["C", "Java","C++", "Python"];
let updateLanguage=[".net", ...language];
let [a,b,...rest]=updateLanguage;
console.log(updateLanguage);
console.log(rest)
console.log(a)
console.log(language)

