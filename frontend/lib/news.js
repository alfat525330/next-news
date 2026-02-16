// this fun is for to get available news years
export function getAvailableNewsYears(data) {
  return data.reduce((years, news) => {
    const year = new Date(news.date).getFullYear();
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort((a, b) => b - a);
}

// this fun is for to get available news month
export function getAvailableNewsMonths(data,year) {
  return data.reduce((months, news) => {
    const newsYear = new Date(news.date).getFullYear();
    if (newsYear === +year) {
      const month = new Date(news.date).getMonth();
      if (!months.includes(month)) {
        months.push(month + 1);
      }
    }
    return months;
  }, []).sort((a, b) => a - b);
}

// this fun is for to get available news for years
export function getNewsForYear(data,year) {
  return data.filter(
    (news) => new Date(news.date).getFullYear() === +year
  );
}

// this fun is for to get available news for years and month
export function getNewsForYearAndMonth(data,year, month) {
  return data.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}
