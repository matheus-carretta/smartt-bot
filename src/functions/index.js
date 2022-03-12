export function getTodayDate() {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  return today;
}

export function getTodayDateFormat() {
  const date = getTodayDate();
  const isoFormat = date.toISOString();
  const todayCorrectFormat = isoFormat.slice(0, 10);
  return todayCorrectFormat;
}
