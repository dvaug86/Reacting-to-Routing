
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const FilmDetails = () => {

    const { filmsid } = useParams();
    const [details, setDetails] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${filmsid}`)
            .then(res => res.json())
            .then(details => setDetails(details))
            .catch(e => alert(e.message));
    }, []);


    return (
        <main className="container d-flex justify-content-center">
            <div key={`film-${details?.id}`} className='card shadow p-3 mb-5 bg-body rounded col-md-4 m-4'> {/*Make sure that it is what is the parameters for the useState and not from the link*/}
                <img src={details?.image} alt="..." className="card-img-top" />
                <div className="card-body">
                    <h1 className="card-title text-center text-decoration-underline">{details?.title}</h1>
                    <h2 className="text-center fst-italic">{details?.original_title}</h2>
                    <h4 className="text-center ">{details?.original_title_romanised}</h4>
                    <h6 className="text-left ">Director: {details?.director}</h6>
                    <h6 className="text-left ">Release Date: {details?.release_date}</h6>
                    <h6 className="text-left ">Rotten Tomatoe Score:<span className= 'text-warning'>{details?.rt_score}</span></h6>
                    <h6 className="text-left text-decoration-underline ">Description: </h6>
                    <p className="card-text">{details?.description}</p>
                    <div className="d-flex justify-content-center mt-2 ">
                    <Link to={`/films`} className="btn btn-primary">Back to Films</Link>{/* This allows us to dynamically go to users page via their id when you click on the link*/}
                
                        </div>

                </div>
            </div>
        </main>
    );
}
export default FilmDetails;
