import Link from 'next/link';
import NewsList from '@/components/news/news-list';
import { getNewsList } from '@/services/news.server';

import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from '@/lib/news';

export default async function FilteredNewsPage({ params }) {
  // this fun is for to call api on server to collect data
  const {details : data} = await getNewsList();
  
  // filter data 
  const {filter} = await params;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;
  let links = getAvailableNewsYears(data);
  console.log('links',links)

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(data,selectedYear);
    links = getAvailableNewsMonths(data,selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(data,selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if (
    (selectedYear && !getAvailableNewsYears(data).includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(data,selectedYear).includes(+selectedMonth))
  ) {
    throw new Error('Invalid filter.');
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
