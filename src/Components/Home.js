import { useState} from 'react';
import './Home.css';

// Api key   -H-bUUaQj00MKi6ep01LtvfITeXYkRcPE9UMyyu5icg
// https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=-H-bUUaQj00MKi6ep01LtvfITeXYkRcPE9UMyyu5icg


function Home() {
    const[photo, setPhoto] = useState('');
    const[display, setDisplay] = useState([]);


    const getPhoto= async ()=>{
        const data = await fetch(`https://api.unsplash.com/search/photos?per_page=30&query=${photo}&client_id=-H-bUUaQj00MKi6ep01LtvfITeXYkRcPE9UMyyu5icg`);
        const dataJson = await data.json();
        console.log(dataJson.results);
        setDisplay(dataJson.results)
    }

  return (
    <div className='container'>
        <div className="search-container">
            <div className="searchbar">
                <input type="text" placeholder='search image' className='form' value={photo} onChange={(e)=>{
                    setPhoto(e.target.value)
                }}/>
                <button type='submit' onClick={getPhoto}>search</button>
            </div>
        </div>

        <div className="main-container imagebox">
                {display.map((value)=>{
                    return(
                        <div className='image'>
                            <img src={value.urls.small} alt="" />
                        </div>
                    )
                })}
        </div>
    </div>
  )
}

export default Home

