export const formatDateMsgTitle = (serializedDate: string) => {
  const now = new Date();
  const date = new Date(JSON.parse(serializedDate));
  const actualDate = {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate(),
  };
  const msgDate = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    weekDay: date.getDay(),
    hour: date.getHours(),
    minutes: date.getMinutes(),
    ampm: date.getHours() >= 12 ? "PM" : "AM",
  };
  let formattedDate = "";
  if (
    actualDate.day === msgDate.day &&
    actualDate.year === msgDate.year &&
    actualDate.month === msgDate.month
  ) {
    formattedDate = `Today at ${msgDate.hour}:${
      msgDate.minutes < 10 ? "0" : ""
    }${msgDate.minutes} ${msgDate.ampm}`;
  }
  return formattedDate;
};

export const formatDateMsgMini = () => {};
