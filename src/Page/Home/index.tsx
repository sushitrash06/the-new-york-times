import { useEffect, useState } from "react";
import {ApiSearch} from '../../Api'
import Card from "../../Component/Card/Index";
import InputComponent from "../../Component/Input";
import PaginationComponent from "../../Component/Pagination";
import LoadingSpinner from "../../Component/Loading";

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
const [value, setValue] = useState<string>()
const [currentPage, setCurrentPage] = useState<number>(1);
const [totalPages, setTotalPages] = useState<number>(0);
const [searchVal, setSearchVal] = useState<string>('election')
const [dataArticle, setDataArticle] = useState<any>()
const [isLoading, setIsLoading] = useState<boolean>(false);

useEffect(()=>{
    const fetchData = async () =>{
        try {
          setIsLoading(true);
            const data = await ApiSearch(searchVal,currentPage - 1);
            setDataArticle(data.data.response.docs)
            setTotalPages(Math.ceil(data.data.response.meta.hits / 10));
        } catch (error) {
            console.log('INI ERROR:', error)
        } finally {
          setIsLoading(false)
        }
    }
    if(searchVal === '' && value === ''){
      setSearchVal('election')
    }
    fetchData();
},[searchVal, value,currentPage])

const handleNextPage = () => {
  setCurrentPage((prevPage) => prevPage + 1);
};

const handlePrevPage = () => {
  setCurrentPage((prevPage) => prevPage - 1);
};

  return (
    <div className="w-full">
      <InputComponent value={value} placholder="Search ..." onChange={(e)=>{
        setTimeout(() => {
          setSearchVal(e.target.value);
        }, 2000);
        setValue(e.target.value)
      }}/>
      {/* <LoadingSpinner/> */}
       {isLoading && <LoadingSpinner />}
        {
          dataArticle &&  dataArticle?.map((data:dataResponseType, Index:number)=>{
                return (
                    <div className="my-10">
                        <Card
                            title={data.headline.main}
                            keyword={data.keywords}
                            abstract={data.abstract}
                            date={data.pub_date}
                            image={data.multimedia[0]?.url}
                            url={data.web_url}
                        />
                    </div>
                )
            })
        }
        
           <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
  </div>
  )
};

export default HomePage;
