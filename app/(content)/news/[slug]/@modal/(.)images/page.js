import { notFound, useRouter } from 'next/navigation';
import ModalBackdrop from '@/components/modal-backdrop';

export default async function InterceptedImagePage({params}) {
  const newsItemSlug = params.slug;
  const newsItem = await getNewsItem(newsItemSlug);
  

  if (!newsItem) {
    notFound();
  }

  return (
  <>
    <ModalBackdrop />
    <dialog className="modal" open>
      <h1>interceted Route</h1>
        <div className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
    </dialog>
   
  </>
  )
}