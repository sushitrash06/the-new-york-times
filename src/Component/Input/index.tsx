import React from "react";

export type InputProps = {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
  placholder?: string
};

const InputComponent: React.FC<InputProps> = ((props) => {
  return (
    <div className="mb-4">
      <input value={props.value} enterKeyHint={"search"} onChange={props.onChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder={props.placholder}/>
    </div>
  );
});

export default InputComponent;
