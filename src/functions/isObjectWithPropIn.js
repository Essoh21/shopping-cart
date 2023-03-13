const isObjectWithPropIn = (obj, prop, anArray) => {
    let result = false;
    anArray.forEach((el) => {
        if (el[`${prop}`] === obj[`${prop}`]) {
            result = true;
        }
    });
    return result;
}

export default isObjectWithPropIn;