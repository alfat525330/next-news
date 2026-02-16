
import { notFound } from 'next/navigation';

import { getNewsDetails } from '@/services/news.server';

export default async function ImagePage({ params }) {
  const {slug} = await params;
  // this fun is for to get news details
  const {status, details : newsItem} = await getNewsDetails(slug);

  if (!status) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
