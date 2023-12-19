export function getYesterdayDate(): string {
  const today = new Date();
  today.setDate(today.getDate() - 1); // Subtract one day

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
