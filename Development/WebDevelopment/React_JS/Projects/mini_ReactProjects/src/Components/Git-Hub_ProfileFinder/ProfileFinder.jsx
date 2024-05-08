
import {  useEffect, useState } from 'react';





function Projectfinder(){
    const [username, setUsername] = useState('spranjal3301');
   const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
       

        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(`https://api.github.com/users/${username}`);
                const dt= await response.json();
                setData(dt);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };
        
        const st = setTimeout(() => {
            fetchData();
        },1000)


        return () => {
           clearTimeout(st);
        };

    }, [username])
    

 

    function handleChange(e){
        e.preventDefault();
        setUsername(e.target.value);
    }
    console.log(data.avatar_url);

    if(isLoading) return <div>Loading...</div>
    if(error) return <div>Error: {error.message}</div>

    return (
        <div className="Projectfinder">
            <input onChange={handleChange} type="text" placeholder="Enter GitHub Username" />
            { data && <div>
                <img src={data.avatar_url} alt="avatar" />
                <h1>{data.name}</h1>
                <h2>{data.location}</h2>
                <h3>{data.bio}</h3>
                </div>
            }
        </div>
    )
}


export default Projectfinder;