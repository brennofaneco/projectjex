import { useContext } from "react";
import  queryContext  from "./";

export const useSettings =  () => {
   const context = useContext(queryContext);

   return context;
};