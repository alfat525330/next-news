import NewsList from '@/components/news/news-list';
import { getNewsList } from '@/services/news.server'
import Link from 'next/link'

export default async function NewsPage() {

  // this fun is for to call api on server to collect data
  const {status,message,details : news} = await getNewsList();
  if(!status){
    return <p>{message}</p>
  }
  console.log('news',news)

  const handleEdit = newsItem => {
    router.push(`/news/edit/${newsItem.id}`)
  }

  const handleDelete = async newsItem => {
    if (!confirm('Are you sure you want to delete this news?')) return

    try {
      await deleteNews(newsItem.id)
      toast.success('News deleted')
      router.refresh()
    } catch {
      toast.error('Failed to delete news')
    }
  }
  return (
    <>
      <div className="news-header">
        <h1>News Page</h1>

        <Link href="/news/add-news" className="add-news-btn">
          Add News
        </Link>
      </div>
      <NewsList 
        news={news}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </>
  );
}
