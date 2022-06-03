import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Films = () => {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films`)
            .then(res => res.json())
            .then(films => setFilms(films))
            .catch(e => alert(e.message));
    }, [])

    return (
        <main className="container  ">
            <ul className="col-12 d-flex flex-wrap justify-content-evenly">
                {films.map(myfilms => (
                    <div key={`film-id${myfilms.id}`} className='card shadow p-3 mb-5 bg-body rounded col-md-4 m-4'>
                        <img src={myfilms.movie_banner} alt="..." className='card-img-top' />
                        <div className="card-body">
                        <h1 className="card-title text-center text-decoration-underline">{myfilms.title}</h1>
                        <p className="card-text">{myfilms.description}</p>
                        <div className="d-flex justify-content-center mt-2 ">
                            <Link to={`/films/${myfilms.id}`} className="btn btn-primary"> {/* This allows us to dynamically go to users page via their id when you click on the link*/}
                                Full Details
                            </Link>
                        </div>
                        </div>
                    
                    </div>
                ))}
            </ul>
        </main>
    );
};

export default Films;