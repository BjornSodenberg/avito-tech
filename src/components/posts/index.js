import React, { useState, useEffect } from 'react';

const Posts = () => {
    const {items, isLoaded, error} = useFetchData();
    if(error) return <p>Error</p>;
    if(isLoaded) return <p>loading...</p>;
    return (
        <div>
            {
                items.map((el) => (
                    <div key={el.id}>
                    <p>{el.id}</p>
                    <img src={el.url} alt={el.url}></img>
                    </div>
                ))
            }
        </div>
    )
}

const useFetchData = () => {

    const loadPattern = {id:0, url:''};

    const [items, setItems] = useState([loadPattern]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoaded(true);
        fetch(`https://boiling-refuge-66454.herokuapp.com/images/`)
        .then((res) => res.json())
        .then((data) => {setItems(data); setIsLoaded(false)})
        .catch((error) => {setError(error); setIsLoaded(false)})
    }, []);

    return {items,isLoaded, error};
}

export default Posts;