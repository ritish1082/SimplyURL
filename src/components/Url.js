import React from 'react';
import {useState} from 'react'
import Loading from './Loading';

function Url() {

    const [url,setUrl] = useState("");
    const [error,setError] = useState(false);
    const [resultUrl,setResultUrl] = useState({});
    const [isloading,setIsLoading] = useState(false);
    // Api call link
    const shortUrl = `https://api.shrtco.de/v2/shorten?url=${url} `;

    // Validate Url based on index
    const validUrl = () => {
        if(url.indexOf("http") === 0 || url.indexOf("www.") === 0){
            setError(false);
        }
        else{
            setError(true);
        }
    }

    // Handling submit btn
    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        validUrl();
        try{
            let response = await fetch(shortUrl);
            let result = await response.json();
            console.log(result);
            setResultUrl(result);
            setIsLoading(false);
        }
        catch(error){
            setError(true);
            setIsLoading(false);
        }
    }
  return (
    <div className='mt-3 main'>
        <form onSubmit={handleSubmit}>
            <div className="link ">
                <div>
                    <input size={35} autoComplete='on' className='rounded p-2 m-3 mb-0 ms-0 rounded' type="text" name='url' placeholder='Enter Link here...' onChange={(e) => {setUrl(e.target.value);}}/>
                </div>
                <div>
                    <button type="submit" className='button btn  p-2 m-3 ms-1 '>{isloading ? <Loading /> : "Shorten it!"}</button>
                </div>
            </div>
        </form>
        {
            error && (
                <p className='text-danger'>* Enter a valid URL</p>
            )
        }
        {resultUrl.ok?
        (
             <div className="shorturl text-center rounded bg-white border border-2  p-3 ">
                <p>
                    <h4 className='text-center'>Link Created !</h4>
                    <a href={resultUrl.result.full_short_link}>{resultUrl.result.full_short_link}</a>
                    <h1>{resultUrl.result.error_code}</h1>
                </p>
            </div>  
        ):
        (
            <p className=" warning mt-3 text-white ">
           * This website uses shrtcode API and by using it you agree to their
          Terms of Service. NOT AVAILABLE
        </p>
        
        )}
        
    </div>
  );
}

export default Url;

// autocomplete
//ui


// 