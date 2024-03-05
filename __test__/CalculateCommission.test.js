const calculateCommissionFunction = require('../CalculateComission');

describe('calculateCommissionFunction', () => {
	test('commission for total sales less than or equal to 1000',
	() => {
		const [totalSales, commission] = calculateCommissionFunction(10, 10, 10);

        expect(totalSales).toBe(1000);
		expect(commission).toBe(100);
	});
	test('minimum',
	() => {
		const [totalSales, commission] = calculateCommissionFunction(1, 1, 1);
		expect(totalSales).toBe(100);
		expect(commission).toBe(10);
	});
	test('minimum +',
	() => {
		const [totalSales, commission] = calculateCommissionFunction(2, 1, 1);
		expect(totalSales).toBe(145);
		expect(commission).toBe(14.5);
	});
	test('midpoint',
	() => {
		const [totalSales, commission] = calculateCommissionFunction(5, 5, 5);
		expect(totalSales).toBe(500);
		expect(commission).toBe(50);
	});
	test('1k sales border -',
	() => {
		const [totalSales, commission] = calculateCommissionFunction(10, 10, 9);
		expect(totalSales).toBe(975);
		expect(commission).toBe(97.5);
	});
	test('1k sales border +',
	() => {
		const [totalSales, commission] = calculateCommissionFunction(10, 11, 10);
		expect(totalSales).toBe(1030);
		expect(commission).toBe(104.5);
	});
	test('1800 border -',
	() => {
		const [totalSales, commission] = calculateCommissionFunction(17, 18, 18);
		expect(totalSales).toBe(1755);
		expect(commission).toBe(175.5);
	});
	test('1800 border',
	() => {
		const [totalSales, commission] = calculateCommissionFunction(18, 18, 18);
		expect(totalSales).toBe(1800);
		expect(commission).toBe(270);
	});
	test('1800 border +',
	() => {
		const [totalSales, commission] = calculateCommissionFunction(18, 19, 18);
		expect(totalSales).toBe(1830);
		expect(commission).toBe(366);
	});
	test('max sales',
	() => {
		const [totalSales, commission] = calculateCommissionFunction(70, 80, 90);
		expect(totalSales).toBe(7800);
		expect(commission).toBe(1560);
	});
	test('max sales + ',
	() => {
		const response = calculateCommissionFunction(71, 80, 90);
		expect(response).toBe("Sales quantities exceed maximum limits.");
	});
	test('max sales + all',
	() => {
		const response = calculateCommissionFunction(71, 81, 91);
		expect(response).toBe("Sales quantities exceed maximum limits.");
	});
});
