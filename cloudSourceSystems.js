// A retailer offers a rewards program to its customers, awarding points based on each recorded purchase.
// A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction
// (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).
// Given a record of every transaction during a three month period, calculate the reward points earned for each customer per month and total.
// Make up a data set to best demonstrate your solution

// 2 points -> for every dollar over 100$
// 1 point -> for every dollar spent over $50
// three month period
// Given a record of every transaction during a three month period, calculate the reward points earned for each customer per month and total.

//userId: [transaction, transaction, transaction]
let month1 = {0: [120, 44, 64], 1: [120, 44, 64, 55, 209, 12]}; 
let month2 = {0: [120], 1: [120], 2: [32], 3: [138], 4: [120], 5: [120], 6: [32], 7: [138, 22, 55, 107]}; 
let month3 = {0: [151], 1: [124, 55, 33, 2], 2: [36, 77, 33], 3: [194], 4: [269, 302, 283, 111, 7], 5: [120], 6: [11], 7: [159], 8: [101]}; 

function pointsCalculator(month1, month2, month3) {
  let month1Totals = {};
  let month2Totals = {};
  let month3Totals = {};
  //calculate the reward points for each of the customer's transactions and the customer's monthly total
  //month 1
  console.log(Object.keys(month1))
  for (i = 0; i < Object.keys(month1).length; i++) {
    let total = 0;
    for (j = 0; j < month1[i].length; j++) {
      if (month1[i][j] <= 50) {
        if (month1Totals[i] === undefined) {
          month1Totals[i] = [0];
        } else {
          month1Totals[i].push(0);
        }
        total += month1Totals[i][j];
      }
      if (month1[i][j] > 50 && month1[i][j] <= 100) {
        if (month1Totals[i] === undefined) {
          month1Totals[i] = [month1[i][j] - 50];
        } else {
          month1Totals[i].push(month1[i][j] - 50);
        }
        total += month1Totals[i][j];
      }
      if (month1[i][j] > 100) {
        if (month1Totals[i] === undefined) {
          month1Totals[i] = [(2 * (month1[i][j] - 100)) + 50];
        } else {
          month1Totals[i].push((2 * (month1[i][j] - 100)) + 50);
        }
        total += month1Totals[i][j];
      }
      if (j === month1[i].length - 1) {
        month1Totals[i].push(total);
        total = 0;
      }
    }
  }
  //month 2
  for (i = 0; i < Object.keys(month2).length; i++) {
    let total = 0;
    for (j = 0; j < month2[i].length; j++) {
      if (month2[i][j] <= 50) {
        if (month2Totals[i] === undefined) {
          month2Totals[i] = [0];
        } else {
          month2Totals[i].push(0);
        }
        total += month2Totals[i][j];
      }
      if (month2[i][j] > 50 && month2[i][j] <= 100) {
        if (month2Totals[i] === undefined) {
          month2Totals[i] = [month2[i][j] - 50];
        } else {
          month2Totals[i].push(month2[i][j] - 50);
        }
        total += month2Totals[i][j];
      }
      if (month2[i][j] > 100) {
        if (month2Totals[i] === undefined) {
          month2Totals[i] = [(2 * (month2[i][j] - 100)) + 50];
        } else {
          month2Totals[i].push((2 * (month2[i][j] - 100)) + 50);
        }
        total += month2Totals[i][j];
      }
      if (j === month2[i].length - 1) {
        month2Totals[i].push(total);
        total = 0;
      }
    }
  }
  //month 3
  for (i = 0; i < Object.keys(month3).length; i++) {
    let total = 0;
    for (j = 0; j < month3[i].length; j++) {
      if (month3[i][j] <= 50) {
        if (month3Totals[i] === undefined) {
          month3Totals[i] = [0];
        } else {
          month3Totals[i].push(0);
        }
        total += month3Totals[i][j];
      }
      if (month3[i][j] > 50 && month3[i][j] <= 100) {
        if (month3Totals[i] === undefined) {
          month3Totals[i] = [month3[i][j] - 50];
        } else {
          month3Totals[i].push(month3[i][j] - 50);
        }
        total += month3Totals[i][j];
      }
      if (month3[i][j] > 100) {
        if (month3Totals[i] === undefined) {
          month3Totals[i] = [(2 * (month3[i][j] - 100)) + 50];
        } else {
          month3Totals[i].push((2 * (month3[i][j] - 100)) + 50);
        }
        total += month3Totals[i][j];
      }
      if (j === month3[i].length - 1) {
        month3Totals[i].push(total);
        total = 0;
      }
    }
  }
  console.log([month1Totals, month2Totals, month3Totals])
  //'0': [transactionPoints1, transactionPoints2, total], '1': [transactionPoints1, total], ...
  return [month1Totals, month2Totals, month3Totals];
}

pointsCalculator(month1, month2, month3);