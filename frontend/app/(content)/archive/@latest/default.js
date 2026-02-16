import NewsList from '@/components/news/news-list';
import { getNewsList } from '@/services/news.server';
export default async function LatestNewsPage() {
  // this fun is for to call api on server to collect data
    const {status,message,details : news} = await getNewsList();
    if(!status){
      return <p>{message}</p>
    }
    console.log('news',news)
    // here we are calling only latest 3 news
    const latestNews =  news.slice(0, 3);
    
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}
