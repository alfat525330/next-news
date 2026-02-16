import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getNewsDetails } from '@/services/news.server';

import AddNewsPage from '@/components/news/add-news';
export default async function NewsDetailPage({ params }) {
  const {slug} = await params;
  console.log('slug',slug);
  // this is here we are checking routefor edit or someing else
  if(slug == 'add-news'){
    return <AddNewsPage/>
  }
  // this fun is for to get news details
  const {status, details : newsItem} = await getNewsDetails(slug);

  if (!status) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
        <div className="fullscreen-image">
          <img src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/${newsItem.image}`} alt={newsItem.title} />
        </div>
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
