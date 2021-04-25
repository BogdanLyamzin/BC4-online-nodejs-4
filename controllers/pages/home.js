const home = (homeData) => {
    const now = new Date();
    const [year, month, day] = homeData.showDate.split("-");
    const showDate = new Date(year, month, day);
    const dayLate = Math.round((showDate - now) / (1000 * 3600 * 24));
    return {...homeData, dayLate};
}

module.exports = home;