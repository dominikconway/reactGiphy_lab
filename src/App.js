import GifDisplay from "./components/GifDisplay";
import Form from "./components/Form";
import {useState} from 'react'

function App() {
  const api_key = 'aMa73CBQLRvwQCnyX5U7AfCefAHQEeJI'

  const [gif, setGif] = useState(null)

  const generateGif = async (searchterm) => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${searchterm}&rating=g`)

    const data = await response.json()

    setGif(data)
    console.log(data)
  }


  return (
    <div className="App">
      
     <Form generateGif={generateGif} />
     <GifDisplay gif={gif} />
     
    </div>
  );
}

export default App;
