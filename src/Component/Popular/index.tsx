import { useEffect, useState } from "react";
import {ApiPopular} from '../../Api'
import Card from "../../Component/Card/Index";

interface dataResponseType {
    title: string,
    abstract: string
}

const PopularComponent: React.FunctionComponent = () => {
const [dataArticle, setDataArticle] = useState<any>()
useEffect(()=>{
    const fetchData = async () =>{
        try {
            const data = await ApiPopular();
            setDataArticle(data.data.results)
        } catch (error) {
            console.log('INI ERROR:', error)
        }
    }
    fetchData();
},[])

  return (
    <div className="w-2/5 overflow-hidden inline-block">
      <p className="font-bold text-xl m-4">Popular Article</p>
      <div className="max-h-screen h-screen overflow-y-scroll">
      {
          dataArticle &&  dataArticle?.map((data:dataResponseType)=>{
                return (
                    <div className="my-10">
                        <Card
                            title={data.title}
                            abstract={data.abstract}
                        />
                    </div>
                )
            })
        }
      </div>
        
  </div>
  )
};

export default PopularComponent;
