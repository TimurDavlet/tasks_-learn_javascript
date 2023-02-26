let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

const sumProperties = (obj) => {
  const objKeys = Object.keys(obj);
  const isObjProperty = objKeys.length > 0 ? true : false;

  if (isObjProperty) {
    const ObjPropValue = Object.values(obj);
    return ObjPropValue.reduce((acc, value) => {
      return acc += value;
    }, 0);
  }
  return 0;
}

console.log(salaries);