class DateUtils {
  static formatDate(isoString) {
    const date = new Date(isoString);

    const months = [
      "January","February","March","April","May","June",
      "July","August","September","October","November","December"
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return `${day} ${month}, ${year}\n${hours}:${minutes} ${ampm}`;
  }
}

export default DateUtils;
