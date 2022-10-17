import { useReducer, useState } from "react";
import CardSimple from "../../components/properties/CardSimple";
import FormLoc from "../../components/properties/FormLoc";

export default function Properties() {
  const [visible, setVisible] = useState(false);
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  const handler = () => {
    setVisible(!visible);
    forceUpdate();
  };

  return (
    <>
      <div className="bg-gradient-to-r from-gris-500 bg-cover bg-center min-h-screen">
        <div className="flex justify-center">
          <button className="p-2 m-5 btn rounded bg-or-50" onClick={handler}>
            Add
          </button>
        </div>
        <div className="w-full h-full min-h-screen backdrop-blur-sm ">
          {visible && <FormLoc forceUpdate={forceUpdate} />}
          <CardSimple reducerValue={reducerValue} />
        </div>
      </div>
    </>
  );
}
