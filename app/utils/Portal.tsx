"use client"
import {useState, useEffect} from "react";
import { createPortal } from "react-dom";
 

interface ChildrenProp {
    children: React.ReactNode
}

export default function Portal ({children}:ChildrenProp)
{
    const [mounted, setMounted] = useState(false);

    useEffect(()=>
    {
       setMounted(true);
       return ()=>setMounted(false) 
    },[])

    if(!mounted) return null;

    return createPortal(children, document.body)
}