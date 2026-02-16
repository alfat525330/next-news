import { notFound } from 'next/navigation';

import RouteAccess from '@/components/router';

import { getNewsDetails } from '@/services/news.server';

export default async function InterceptedImagePage({ params }) {
  const router = RouteAccess;

  const {slug} = await params;
  // this fun is for to get news details
  const {status, details : newsItem} = await getNewsDetails(slug);

  if (!status) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
