'use strict'

function solveEquation(a, b, c) {
	let arr = [];
	if (a === 0) {
		arr[0] = -c / b;
		return arr;
	}
	let discriminant = Math.pow(b, 2) - 4 * a * c;
	if (discriminant > 0) {
		arr[0] = parseInt(((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(0));
		arr[1] = parseInt(((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(0));
	} else if (discriminant === 0) {
		arr[0] = -b / (2 * a);
	}
	return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let totalAmount;

	percent = +percent;
	contribution = +contribution;
	amount = +amount;
	countMonths = +countMonths;

	let monthlyPartPercent = (percent / 100) / 12;
	let initialPayment = amount - contribution; // начальный взнос
	let monthFee = initialPayment * (monthlyPartPercent + (monthlyPartPercent / (((1 + monthlyPartPercent) ** countMonths) - 1))); // Ежемесячная оплата
	totalAmount = +(monthFee * countMonths).toFixed(2); // Общая сумма
	return totalAmount;
}