export function calculateTax({ income, dependents, deductionMonths, insurance }) {
    const personalDeduction = 132_000_000;
    const dependentDeduction = dependents * deductionMonths * 4_400_000;
    const taxableIncome = Math.max(0, income - personalDeduction - dependentDeduction - insurance);
    const bracketLimits = [60_000_000, 120_000_000, 216_000_000, 384_000_000, 624_000_000, 960_000_000];
    const rates = [0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35];
    const taxableAmounts = bracketLimits.map((limit, index) => Math.max(0, Math.min(taxableIncome, limit) - (bracketLimits[index - 1] ?? 0)));
    taxableAmounts.push(Math.max(0, taxableIncome - bracketLimits.at(-1)));
    const taxes = taxableAmounts.map((amount, index) => amount * rates[index]);

    return {
        personalDeduction,
        dependentDeduction,
        taxableIncome,
        taxableAmounts,
        taxes,
        totalTax: taxes.reduce((total, tax) => total + tax, 0),
    };
}
