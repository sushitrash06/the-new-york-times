import React from "react";
import Tooltip from "../Tooltip";

interface Icard {
  title: string;
  abstract?: string;
  date?: string;
  image?: string;
  url?: string;
  keyword?: {
    value: string;
  }[];
}
const Card: React.FC<Icard> = (props) => {
  return (
    <div className={'p-5 rounded shadow-lg m-2'}>
      <div className={props.image ? "lg:flex md:flex justify-between " : ""}>
      {
        props.image && (

          <div>
          <img
            alt=""
            src={"https://www.nytimes.com/" + props.image}
            className="lg:w-40 md:w-40 w-full"
          />
        </div>
        )
      }
      <div className={props.image ? "items-start lg:w-2/3 md:w-2/3" : ""}>
        <b>{props.title}</b>
        <p>{props.abstract}.... <a className="text-blue-500" href={props.url}> read more</a></p>
        <div className="text-sm my-5">
          <div className="hidden md:flex lg:flex justify-between">
          {props?.keyword &&
            props?.keyword?.map(
              (
                data: {
                  value: string;
                },
                Index
              ) => {
                return (
                  <div>
                    {Index < 3 && (
                      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                        {data.value}
                      </span>
                    )}
                  </div>
                );
              }
            )}
          </div>
          <div>
            <span className="md:hidden lg:hidden block">tags:</span>
            <Tooltip text={
              <div className="flex">
                {
                  props?.keyword && props?.keyword.map((data:{value:string})=>{
                    return (
                      <span>
                        {data.value}
                      </span>
                    )
                  })
                }
              </div>
            }>
            {props.keyword && props.keyword.length > 3 && (
            <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
              + {props.keyword && props.keyword.length}
            </span>
          )}
            </Tooltip>
            </div>
          
        </div>
      </div>
      
      </div>
     
    </div>
  );
};
export default Card;
