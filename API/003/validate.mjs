const validateYear = (year) => {
    if (!isNaN(year))
        return year < 1920 || year > 2020 ? false : true;
    return false;
}

export default validateYear;
