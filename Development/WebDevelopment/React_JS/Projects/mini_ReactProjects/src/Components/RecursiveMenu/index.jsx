import { useState } from "react";
import menusData from "./data";



function Treeview({Data=menusData}){
    return <div>
        <ul>
            {Data.map((items,idx)=>{
                return (
                    
                    <MenuList key={idx} items={items} />
                )
            })}
        </ul>
    </div>
}

function MenuList({items}){
    const [display,setDisplay]=useState({});

    function handleToggle(){
        setDisplay({...display,[items.label]:!display[items.label]});
        console.log(display);
    }



    return(
        <>
        <li onClick={handleToggle}>{items.label}</li>
        {
            items && items.children && items.children.length>0 && display[items.label]? <Treeview Data={items.children}/>:null
        }
        </>
    )
}


export default Treeview;