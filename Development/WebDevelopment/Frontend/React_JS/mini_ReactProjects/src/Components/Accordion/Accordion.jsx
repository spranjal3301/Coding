import { useEffect,useState } from "react"
import data from './data'
import './style.css'


function Accordion(){
    
        const [dataArr,setDataArr] = useState(data);
        const [selected,setSelected]=useState([]);
    
        useEffect(()=>{
            setDataArr(data);
        },[])
    
        return(
            <div>
                {dataArr.map((item)=>{
                    return <AccordionRender key={item.id} title={item.title} content={item.info} id={item.id} 
                    selected={selected} setSelected={setSelected}/>
                })}
            </div>
        )
    
}


function AccordionRender({title, content,id,selected,setSelected}){

    //!multi AccordionRender
    const handleClick = () => {
        setSelected((prevSelected) => {
            const idx = prevSelected.indexOf(id);
            if (idx !== -1) {
                // Remove if already present
                return prevSelected.filter(itemId => itemId !== id);
            } else {
               // Add if not present
               return [...prevSelected, id];
           }
        });
    }
    
    //!Single AccordionRender
    // const handleClick = () => {
    //     setSelected(selected==id?null:id);
    // }

    return(
        <div className="accordion">

            <div className="accordion-item">
                <div className="accordion-title" onClick={handleClick}>
                    <h2>{title}<span >X</span></h2>
                </div>

                <div className="accordion-content" >
                {
                        selected.indexOf(id)!==-1?<p>{content}</p>: null
                }
                </div>

            </div>    
        </div>
    )
}

export default Accordion;