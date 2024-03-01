import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteDataFunc } from "../redux/dataSlice";

const ProductCard = ({ dt }) => {
  const [openEdit,setOpenEdit] = useState(false)
  const dispatch = useDispatch()
  return (
    <div className="w-[200px] h-[200px] relative m-2 rounded-md">
      <img src={dt?.url} className="w-full h-full absolute rounded-md" />
      <div className="absolute left-0 bottom-0 bg-indigo-600 text-white w-full">
        <div>{dt?.name}</div>
        <div>{dt?.price}</div>
      </div>
      <div onClick={()=>setOpenEdit(!openEdit)} className="absolute top-0 right-0">
        <BsThreeDots color="black" size={24} />
      </div>
      {
        openEdit && (
          <div className="bg-black border border-white text-white absolute top-5 right-2">
            <div onClick={()=>dispatch(deleteDataFunc(dt?.id))} className="cursor-pointer">sil</div>
            <div className="cursor-pointer">guncelle</div>
          </div>
        )
      }
    </div>
  );
};

export default ProductCard;
