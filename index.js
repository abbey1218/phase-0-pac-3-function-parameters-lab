function introduction(name) {
    console.log(name);
    const message = `Hi, my name is ${name}.`;
    return message;
}
function introductionWithLanguage(name, language) {
    console.log(name, language);
    const message = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return message;
}
function introductionWithLanguageOptional(name, language = "JavaScript") {
    console.log(name, language);
    const message = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return message;
} 

