import React from 'react';

const Info = ({info}) => {
    
    if (Object.keys(info).length === 0 ) return null;

    const { strArtistThumb, strGenre, strBiographyES } = info;

    return(
        <div className="card border-ligth">
            <div className="card-header bg-primary text-light font-weight-bold">
                Información sobre el artista
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Logo artista"></img>
                <p className="card-text"> Género: {strGenre} </p>
                <h2 className="card-text">Biografía:</h2>
                <p className="card-text"> {strBiographyES} </p>
            </div>
        </div>
    );

}

export default Info;