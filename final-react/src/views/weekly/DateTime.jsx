
export function getDefaultYear(){
  // Automated date change
  let defaultYear = new Date().getFullYear();
  const current_date = new Date();
  const week2Date = new Date(defaultYear, 7, 1); // (0 = Jan.)
  if (current_date <= week2Date) { //change the date once week2Date is in the past
    defaultYear = defaultYear - 1;
  }

  return defaultYear
}
