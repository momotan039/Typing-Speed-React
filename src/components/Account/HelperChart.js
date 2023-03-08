export const getCustomeDate = (date, way) => {
    // create a new Date object from the provided string
    const dateObj = new Date(date);

    // get the current hour, minute, and second
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const seconds = dateObj.getSeconds();

    // get the current day and month
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1; // add 1 to account for zero-based indexing

    // create a formatted string with the time, day, and month
    // const formattedString = `${hours}:${minutes}:${seconds} ${day}/${month}`;
    const formattedString = `${hours}:${minutes}:${seconds}`;
    if (way === 'month')
        return `${day}/${month}`
    // print the formatted string to the console
    return formattedString
}


export const groupByDateValue = (data, value) => {
    const res = data.reduce((acc, item) => {
        let key;
        const date = new Date(item.date)
        if (value === 'day') {
            key = date.getDate();
        } else if (value === 'month') {
            key = date.getMonth() + 1;
        } else if (value === 'year') {
            key = date.getFullYear();
        }

        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(item);
        return acc;
    }, {});
    return res
}


export const  groupedBy =(data)=>{
    data.reduce((acc, item) => {
        const key = item.city;
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(item);
        return acc;
      }, {});
} 
  