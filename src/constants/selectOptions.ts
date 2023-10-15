export const genderOptions = [
  {
    name: 'Female',
    value: 'female',
  },
  {
    name: 'Male',
    value: 'male',
  },
  {
    name: 'Other',
    value: 'other',
  },
];

const createYearsOptions = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  while (years.length < 100) {
    const nextYear: number = currentYear - years.length;
    years.push({
      name: nextYear,
      value: nextYear,
    });
  }
  return years;
};

export const yearOptions = createYearsOptions();

const createMonthOptions = () => {
  const date = new Date(0, 0, 1, 0);
  const months = [];
  while (months.length < 12) {
    const monthIndex = date.getMonth();
    const monthName = date.toLocaleString('default', { month: 'long' });
    months.push({
      name: monthName,
      value: monthIndex,
    });
    date.setMonth(monthIndex + 1);
  }
  return months;
};

export const monthsOptions = createMonthOptions();
