"use client"
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { CirclePlus , CircleMinus} from "lucide-react";

interface FAQType{
    question: string,
    answer: string,
}

const FAQ:React.FC<FAQType> = ({question, answer}) => {

    const [open, setOpen] = useState(false);

    const makeAnswerVisible=():void=>
    {
        setOpen(!open);
        console.log(open)
    }
    const hideAnswer=():void=>
    {
        setOpen(false);
        console.log(open)
    }
  return (

    <div className="flex flex-col justify-center items-center gap-2 w-full md:w-[831px] px-5 md:px-10 py-3 hover:cursor-pointer bg-gray-100 rounded-md "  onMouseLeave={hideAnswer} onClick={makeAnswerVisible}>
        <div className="flex justify-start items-center w-full gap-6">

        {
                    open ? (
                            <span onClick={hideAnswer} className="hover:cursor-pointer">
                               
                               <CircleMinus/>
                            </span>
                    ): (
                        <span onClick={makeAnswerVisible} className=" hover:text-primary hover:cursor-pointer">

<CirclePlus/>
                        </span>
                        
                    )
                }
            <span className="text-[17px] w-[494px] font-[600]">{question}</span>
            
              
          
            
        </div>
        <div className="">
        <AnimatePresence>
       {
        open ? (
          <motion.div
          initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
  <p className="text-gray-500 font-normal text-[14px]">{answer}</p>
          </motion.div>
          
        ):""
       }
       </AnimatePresence>
        </div>
    </div>
      
  )
}

export default FAQ;