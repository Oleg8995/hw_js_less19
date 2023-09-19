// *********************************** LESS 19 ********************************************

// # 1 Get days in year

const getDaysInYear = (year) => {

   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
     console.log(366);
     return 366;
   } else {
    console.log(365);
    return 365;
   };
};

getDaysInYear(2021);
// 365
getDaysInYear(2020);
// 366
getDaysInYear(4);
getDaysInYear(1788);
getDaysInYear(1983);

// ==========================================================

// # 2 Get day of a year

const getDayNumber = (date) => {
    const strTodate = new Date(date);
    const startYear = new Date(strTodate.getFullYear(), 0, 1);
    const diff = strTodate - startYear;
    const numberDayOfYear = Math.floor(diff / (24 * 60 * 60 * 1000)) + 1;

    console.log(numberDayOfYear);
    return numberDayOfYear;

};

getDayNumber("2023-01-12");
// 12

getDayNumber("2023-02-26");
// 57
getDayNumber("2023-02-26");
getDayNumber("2023-10-01");
getDayNumber("2201-05-13");

// ==========================================================

// # 3 Get fiscal quarters

const getQuarters = (dateStr) => {

    const date = new Date(dateStr);
    const month = date.getMonth();
    const day = date.getDate();
    const monthArray = ["jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    switch (true) {
        case month >= 1 && month <= 3:
            console.log(`${monthArray[month]} ${day} is I quarter`);
            return `${monthArray[month]} ${day} is I quarter`;
        case month >= 4 && month <= 6:
            console.log(`${monthArray[month]} ${day} is II quarter`);
            return `${monthArray[month]} ${day} is I quarter`;
        case month >= 7 && month <= 9:
            console.log(`${monthArray[month]} ${day} is III quarter`);
            return `${monthArray[month]} ${day} is I quarter`;
        case month >= 10 && month <= 12:
            console.log(`${monthArray[month]} ${day} is IV  quarter`);
            return `${monthArray[month]} ${day} is I quarter`;
        
    }

};

getQuarters("2023-02-26");
// Feb 26 is I quarter
getQuarters("2023-05-05");
getQuarters("2023-12-01");
getQuarters("2022-10-13");

// ==========================================================

// # 4 Write a function to calculate date diff

const calcDateDiff = (startDate, endDate) => {

    const start = new Date(startDate);
    const end = new Date(endDate);
    const diff = end - start;
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60) % 24));
    const minutes = Math.floor((diff / 1000 / 60) % 60);

    if ( years === 0 && months === 0 && days === 0 && hours === 0 ) {

        console.log(`${minutes} minutes`);
        return `${minutes} minutes`;

    } else if ( years === 0 && months === 0 && days === 0 ) {

        console.log(`${hours} hours ${minutes} minutes`);
        return `${hours} hours ${minutes} minutes`;

    } else if ( years === 0 && months === 0 ) {

        console.log(`${days} days`);
        return `${days} days`;

    } else if ( years === 0 ) {

        console.log(`${months} months`);
        return `${months} months`;

    } else {

        console.log(`${years} yaers`);
        return `${years} yaers`;
    }

};

calcDateDiff("2023-02-26 14:00", "2023-02-26 14:20"); // 20 minutes

calcDateDiff("2023-02-26 14:00", "2023-02-26 15:30"); // 1 hours 30 minutes

calcDateDiff("2023-02-26 14:00", "2023-02-28 15:30"); // 2 days

calcDateDiff("2023-02-26 14:00", "2023-05-28 15:30"); // 3 months

calcDateDiff("2023-02-26 14:00", "2023-05-28 15:30"); // 2 years
calcDateDiff("2023-11-21 14:00", "2023-01-02 15:30");
calcDateDiff("2000-02-26 14:40", "2025-05-28 11:33");
calcDateDiff("2023-02-26 14:00", "2023-11-28 15:22");