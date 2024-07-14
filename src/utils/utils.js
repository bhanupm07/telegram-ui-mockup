export function convertToShortTime(dateTimeString) {
  // Parse the date-time string into a Date object
  const date = new Date(dateTimeString);

  // Get the hours and minutes
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  // Add leading zero to hours and minutes if necessary
  const hoursStr = hours < 10 ? "0" + hours : hours;
  const minutesStr = minutes < 10 ? "0" + minutes : minutes;

  // Format the time as HH:MM
  const shortTime = `${hoursStr}:${minutesStr}`;

  return shortTime;
}

export function formatDate(isoDateString) {
  const date = new Date(isoDateString);
  const options = { month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}
