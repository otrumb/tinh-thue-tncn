import assert from "node:assert/strict";
import test from "node:test";
import { calculateTax } from "./calculator.mjs";

test("calculateTax returns zero tax when deductions cover income", () => {
    // Given
    const input = { income: 132_000_000, dependents: 0, deductionMonths: 0, insurance: 0 };

    // When
    const result = calculateTax(input);

    // Then
    assert.equal(result.taxableIncome, 0);
    assert.equal(result.totalTax, 0);
});

test("calculateTax taxes exactly through first annual bracket boundary", () => {
    // Given
    const input = { income: 192_000_000, dependents: 0, deductionMonths: 0, insurance: 0 };

    // When
    const result = calculateTax(input);

    // Then
    assert.deepEqual(result.taxableAmounts, [60_000_000, 0, 0, 0, 0, 0, 0]);
    assert.equal(result.totalTax, 3_000_000);
});

test("calculateTax applies rates across multiple annual brackets", () => {
    // Given
    const input = { income: 500_000_000, dependents: 1, deductionMonths: 12, insurance: 15_000_000 };

    // When
    const result = calculateTax(input);

    // Then
    assert.equal(result.personalDeduction, 132_000_000);
    assert.equal(result.dependentDeduction, 52_800_000);
    assert.equal(result.taxableIncome, 300_200_000);
    assert.deepEqual(result.taxableAmounts, [60_000_000, 60_000_000, 96_000_000, 84_200_000, 0, 0, 0]);
    assert.deepEqual(result.taxes, [3_000_000, 6_000_000, 14_400_000, 16_840_000, 0, 0, 0]);
    assert.equal(result.totalTax, 40_240_000);
});
