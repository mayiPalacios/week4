import React,{useState, useEffect} from "react";

const CardGenerals = () =>{
         
    const [data,setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error,setError] = useState(null);
    const [currentPage,setCurrentPage] = useState(1);
    const [itemsPerPage,setItemsPerPage] = useState(5);
   useEffect(()=>{
       const fetchData = async () =>{
           setIsLoading(true);
      try{
       const request = await fetch(`http://localhost:3000/posts?_page=${currentPage}&_limit=${itemsPerPage}`, {
           method: "GET",
           headers: { "Content-Type": "application/json" },
         });
         const data = await request.json();
         
         setData(data);
      }catch(error){
       setError(error);
      }
      setIsLoading(error);
       };
       fetchData();
   },[currentPage,itemsPerPage]);
   
    if(isLoading){
       return <div>Loading...</div>;
    }

    if(error){
       return <div>Error: {error.message}</div>
    }
  


        return(
        
            <div className="container_card--general">
                <h1>Generals card</h1>
                <div className="container__general--items">
                {data && data.map((item)=>(
                   <div className="card__general">
                   <a href="https://store.playstation.com/es-sv/pages/latest#ps-icon:PSFamilyMark-Logo"><div className="card__general--img">
                       <img
                       src= {item.image} />
                   </div>
                       <span>{item.title}</span></a>
               </div>
            ))}
              </div>
            <div className="container__btn--general">
               <button className="btn__before--general" onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage ===1}>Previous</button>
               <button className="btn__after--general" onClick={()=>setCurrentPage(currentPage+1)} disabled={data.length<itemsPerPage}>Next</button>
            </div>
              
           
         </div>
           
    
    )
}

export default CardGenerals;