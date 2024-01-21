import { useEffect, useState } from "react";
import {ApiSearch} from '../../Api'

const ArtsPage: React.FunctionComponent = () => {
const [dataArticle, setDataArticle] = useState<any>()
useEffect(()=>{
    const fetchData = async () =>{
        try {
            const data = await ApiSearch('election');
            setDataArticle(data)
        } catch (error) {
            console.log('INI ERROR:', error)
        }
    }
},[])
console.log(dataArticle,'ini data')
  return (
    <div>
        <div>Page Art</div>
  </div>
  )
};

export default ArtsPage;
