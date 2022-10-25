export function add(obj) {
  let arr = [];
  if (obj.add) {
    for (let i = 0; i < obj.add.length; i++) {
      let userOp = obj.add[i];
      let user = userOp.user;
      let result = userOp.value1 + userOp.value2;
      const resultObj = { user: user, result: result };
      arr.push(resultObj);
    }
  }
  return arr;
}

export function subtract(obj) {
  let arr = [];
  if (obj.subtract) {
    for (let i = 0; i < obj.subtract.length; i++) {
      let userOp = obj.subtract[i];
      let user = userOp.user;
      let result = userOp.value1 - userOp.value2;
      const resultObj = { user: user, result: result };
      arr.push(resultObj);
    }
  }
  return arr;
}

export function multiply(obj) {
  let arr = [];
  if (obj.multiply) {
    for (let i = 0; i < obj.multiply.length; i++) {
      let userOp = obj.multiply[i];
      let user = userOp.user;
      let result = userOp.value1 * userOp.value2;
      const resultObj = { user: user, result: result };
      arr.push(resultObj);
    }
  }
  return arr;
}

export function divide(obj) {
    let arr = [];
    if (obj.divide) {
      for (let i = 0; i < obj.divide.length; i++) {
        let userOp = obj.divide[i];
        let user = userOp.user;
        let result = userOp.value1 / userOp.value2;
        const resultObj = { user: user, result: result };
        arr.push(resultObj);
      }
    }
    return arr;
  }
  
