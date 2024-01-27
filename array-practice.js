const findMinimum = arr => {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if(arr[i] < result) result = arr[i];
  }
  return result;
};

const runningSum = arr => {
  for (let i = 1; i < arr.length; i++) {
    arr[i] += arr[i - 1];
  }
  return arr;
};

const evenNumOfChars = arr => {
  let counter = 0;
  for (const element of arr) {
    if(element.length % 2 === 0) counter++;
  }
  return counter;
};

const smallerThanCurr = arr => { 
  let result = []
  for (const number of arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
      if(arr[i]< number) counter++;
    }
    result.push(counter);
  }
  return result;
};

const twoSum = (arr, target) => {

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[i] + arr[j] === target) return true;
    }
  }
  return false;
};

const secondLargest = arr => {
  if(arr.length <= 1) return undefined;
  let greatest = Math.max(...arr);
  arr.splice(arr.indexOf(greatest), 1);
  return Math.max(...arr); 
};

const shuffle = (arr) => {
  let workingArr = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    workingArr.push(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    let value = workingArr[getRandomInt(workingArr.length)];
    workingArr.splice(workingArr.indexOf(value), 1);
    result.push(value);
  }
  return result;
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
