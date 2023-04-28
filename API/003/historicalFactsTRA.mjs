import data from "./data.mjs";

const chooseFact = (year) => {
    let index = 100 - (2020 - year);
    return data[index];
}

export default chooseFact;