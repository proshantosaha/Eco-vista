function getFormateDate(value, type, inMS) {
  if (!type) return value;
  if (!inMS) {
    value = value * 1000;
  }

  const date = new Date(value);
  let options;
  if (type === "date") {
    options = {
      weekday: "Long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
  } else if (type === "date") {
    options = {
      hour: "numeric",
      minute: "numeric",
    };
  }

  return new Intl.DateTimeFormat("en-us", options).format(date);
}

export { getFormateDate };
