import Opacity from "@/animation/Opacity";
import React from "react";
import { TiDeleteOutline } from "react-icons/ti";

type Props = {
   message: string;
   setMeassage: React.Dispatch<React.SetStateAction<string>>;
   setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
   errors: string;
};

const MessagesAddProfile = ({
   message,
   setMeassage,
   setErrorMessage,
   errors: errorMessage,
}: Props) => {
   return (
      <>
         {message ? (
            <Opacity>
               <div
                  className={`w-full ${message.length == 0 ? "h-0" : "h-15"} 
                     transition-all ease-in overflow-hidden
                      mt-5 bg-second text-zinc-100 rounded-md`}
               >
                  <div className="flex items-center justify-between p-3 pr-10">
                     <p>{message}</p>
                     <button
                        onClick={() => {
                           setMeassage("");
                        }}
                        className="text-zinc-100 border border-transparent rounded-md
                           transition-all ease-in hover:bg-red-500 
                           px-1 py-1"
                        type="button"
                     >
                        <span className="text-2xl">
                           <TiDeleteOutline />
                        </span>
                     </button>
                  </div>
               </div>
            </Opacity>
         ) : null}
         {errorMessage ? (
            <Opacity>
               <div
                  className={`w-full ${
                     errorMessage.length == 0 ? "h-0" : "h-15"
                  } 
                     transition-all ease-in overflow-hidden
                      mt-5 bg-red-100 text-red-500 rounded-md`}
               >
                  <div className="flex items-center justify-between p-3 pr-10">
                     <p>{errorMessage}</p>
                     <button
                        onClick={() => {
                           setErrorMessage("");
                        }}
                        className="text-red-500 border border-transparent rounded-md
                           transition-all ease-in hover:border-red-500 border-dashed 
                           px-1 py-1"
                        type="button"
                     >
                        <span className="text-2xl">
                           <TiDeleteOutline />
                        </span>
                     </button>
                  </div>
               </div>
            </Opacity>
         ) : null}
      </>
   );
};

export default MessagesAddProfile;
