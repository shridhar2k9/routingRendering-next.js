'use client'
import { notFound, useRouter } from 'next/navigation';
import { DUMMY_NEWS } from '@/dummy-news';

export default function InterceptedImagePage({params}) {
  const route = useRouter();
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
  <>
  <div className="modal-backdrop" onClick={route.back}>
    <dialog className="modal" open>
      <h1>interceted Route</h1>
        <div className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
    </dialog>
  </div>
   
  </>
  )
}