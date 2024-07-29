import { Suspense, useEffect, useState } from "react";


const URL='https://dummyjson.com/products?limit=10'; //` &skip=90

function LoadMore(){
    const [loading,setLoading]=useState(false);
    const [products,setProducts]=useState([]);

    const fetchProducts=async()=>{
        const res=await fetch(URL+`&skip=${products.length}`);
        const data=await res.json();
        setProducts([...products,...data.products]);
    }
   
    useEffect(()=>{
        fetchProducts();
    },[loading]);
    
    function handleClick(){
        if(products.length==100){
            alert('Limit Reach 100 Products');
        }else{
            setLoading(!loading)
        }
    }
    

    return(
        <div>
            
            <ol>
                <Suspense fallback={<div>Loading...</div>}>
                    {products.map((product,idx)=>{
                        return (
                                    <li key={product.id}>{product.title}</li>       
                        )
                    })}
                </Suspense>
            </ol>
            <button onClick={handleClick}>{products.length==100?'Limit Reach 100 Products':'Load More'}</button>
        </div>
    )
}


export default LoadMore;