import { useEffect, useState } from "react";
import {ApiSection} from '../../Api'
import xml2js from 'xml2js';
import dayjs from 'dayjs'
import LoadingSpinner from "../../Component/Loading";


const ArtsPage: React.FunctionComponent = () => {
const [dataArticle, setDataArticle] = useState<any>()
const [isLoading, setIsLoading] = useState<boolean>(false);

useEffect(()=>{
    const fetchData = async () =>{
        try {
          setIsLoading(true)
            const data = await ApiSection('Arts');
            const xmlData = data.data
            xml2js.parseString(xmlData, (err, result) => {
              if (err) {
                console.error('Error parsing XML:', err);
              } else {
                // Set the JSON data in the state
                setDataArticle(result && result.rss?.channel[0].item);
              }
              });
        } catch (error) {
            console.log('ERROR:', error)
        }finally{
          setIsLoading(false)
        }
    }
    fetchData()
},[])
  return (
    <div className="m-10 mr-28">
      {isLoading && <LoadingSpinner />}
    {
      dataArticle &&  dataArticle?.map((data:any)=>{
            return (
                <div className="m-3 w-full border-b-2">
                    <div className={'p-5 rounded m-2'}>
                      <b>{data?.title[0]}</b>
                      <p>{data?.description[0]}</p>
                      <p className="text-sm text-gray-500 bg-slate-300 p-2 w-fit rounded-xl">{data && data['dc:creator']?.[0]}</p>
                      <span className="text-xs text-gray-500">{dayjs(data?.pubDate[0]).format('DD-MMMM-YYYY HH:mm')}</span>
                    </div>
                </div>
            )
        })
    }
</div>
  )
};

export default ArtsPage;
