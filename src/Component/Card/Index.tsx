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
      <div className={props.image ? "flex justify-between " : ""}>
      <div className={props.image ? "items-start w-2/3" : ""}>
        <b>{props.title}</b>
        <p>{props.abstract}</p>
        <div className="flex justify-between text-sm my-5">
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
            <div>

            <Tooltip text={
              <div>
                {
                  props?.keyword && props?.keyword.slice(0,-3).map((data:{value:string})=>{
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
              + {props.keyword && props.keyword.length - 3}
            </span>
          )}
            </Tooltip>
            </div>
          
        </div>
      </div>
      {
        props.image && (

          <div>
          <img
            alt=""
            src={"https://www.nytimes.com/" + props.image}
            className="w-40"
          />
        </div>
        )
      }
      </div>
     
    </div>
  );
};
export default Card;
