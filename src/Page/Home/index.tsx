import { useEffect, useState } from "react";
import {ApiSearch} from '../../Api'
import Card from "../../Component/Card/Index";

interface dataResponseType {
    abstract: string,
    headline: {
        main: string
    };
    keywords: {
        value: string;
    }[];
    multimedia: {
        url: string
    }[]
    pub_date: string;
    type_of_material: string;
    web_url: string;
    subsection_name: string;
}
const HomePage: React.FunctionComponent = () => {
const [dataArticle, setDataArticle] = useState<any>()
useEffect(()=>{
    const fetchData = async () =>{
        try {
            const data = await ApiSearch('election');
            setDataArticle(data.data.response.docs)
        } catch (error) {
            console.log('INI ERROR:', error)
        }
    }
    fetchData();
},[])
console.log(dataArticle,'ini data')
  return (
    <div>
        {
          dataArticle &&  dataArticle?.map((data:dataResponseType)=>{
                return (
                    <div className="m-3 w-2/5">
                        <Card
                            title={data.headline.main}
                            keyword={data.keywords}
                            abstract={data.abstract}
                            date={data.pub_date}
                            image={data.multimedia[0].url}
                            url={data.web_url}
                        />
                    </div>
                )
            })
        }
  </div>
  )
};

export default HomePage;
