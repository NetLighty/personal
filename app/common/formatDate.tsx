export const formatMsgDateTitle = (serializedDate: string) => {
  const now = new Date();
  const deserializedDate = new Date(JSON.parse(serializedDate));

  const actualDate = {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate(),
  };

  const msgDate = {
    year: deserializedDate.getFullYear(),
    month: deserializedDate.getMonth() + 1,
    day: deserializedDate.getDate(),
    weekDay: deserializedDate.getDay(),
    hour: deserializedDate.getHours(),
    minutes:
      deserializedDate.getMinutes() < 10
        ? `0${deserializedDate.getMinutes()}`
        : `${deserializedDate.getMinutes()}`,
    ampm: deserializedDate.getHours() >= 12 ? "PM" : "AM",
  };

  if (
    actualDate.year === msgDate.year &&
    actualDate.month === msgDate.month &&
    actualDate.day === msgDate.day
  ) {
    return `Today at ${msgDate.hour}:${msgDate.minutes} ${msgDate.ampm}`;
  }

  if (
    actualDate.year === msgDate.year &&
    actualDate.month === msgDate.month &&
    actualDate.day === msgDate.day - 1
  ) {
    return `Yesterday at ${msgDate.hour}:${msgDate.minutes} ${msgDate.ampm}`;
  }
  return `${msgDate.month}/${msgDate.day}/${msgDate.year} ${msgDate.hour}:${msgDate.minutes} ${msgDate.ampm}`;
};

export const formatDateMsgMini = () => {};
