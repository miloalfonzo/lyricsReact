import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './Components/Formulario';
import Cancion from './Components/Cancion';
import Info from './Components/Info';
import axios from 'axios';


function App() {

  //state

  const [busquedaletra, setBusquedaletra] = useState({});
  const [letra, setLetra] = useState('');
  const [info, setInfo] = useState({});

  useEffect( () =>{
    if (Object.keys(busquedaletra).length === 0) return;

    const consultarAPIletra = async () => {

      const { artista, cancion } = busquedaletra;
      const url =`https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [letra, informacion] = await Promise.all([
        axios(url),
        axios(url2)
      ]);

      setLetra(letra.data.lyrics);
      setInfo(informacion.data.artists[0]);
    }
    consultarAPIletra();
  }, [busquedaletra, info]);


  return (
    <Fragment>
      <Formulario 
        setBusquedaletra={setBusquedaletra}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info 
              info={info}
            />
          </div>
          <div className="col-md-6">
            <Cancion 
              letra={letra}
            />
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
