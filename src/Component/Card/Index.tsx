import React from 'react'

interface Icard {
    title: string,
    abstract: string;
    date: string;
    image: string;
    url:string;
    keyword: {
        value: string;
    }[]
}
const Card: React.FC<Icard> = (props) => {
    return (
        <div className="w-full flex justify-between rounded overflow-hidden shadow-lg m-2 relative ">
            <div className='items-start'>
            <p>{props.title}</p>
            <p>{props.abstract}</p>
            <div className='flex justify-between text-sm'>
                tags : 
            {
               props && props.keyword?.map((data:{
                value: string
               })=>{
                    return (
                        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">{data.value}</span>
                    )
                })
            }
            </div>
          
            </div>
            <div>
                <img alt='' src={'https://www.nytimes.com/'+props.image} className='w-40'/>
            </div>
            </div>
    )

}
export default Card
  