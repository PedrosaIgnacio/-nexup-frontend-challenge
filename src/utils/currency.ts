export const formatCurrency = (amount: number, currency: string): string => {
  return amount.toLocaleString('en-EU', {
    style: 'currency',
    currency,
  });
};
