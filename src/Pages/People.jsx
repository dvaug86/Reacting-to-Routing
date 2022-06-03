import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const People = () => {

    const [individual, setIndividual] = useState([]);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people`)
            .then(res => res.json())
            .then(individual => setIndividual(individual))
            .catch(e => alert(e.message));
    }, [])
    return (
        <main className="container  ">
            <ul className="col-12 d-flex flex-wrap justify-content-evenly">
                {individual.map(myindividual => (
                    <div key={`people-id${myindividual.id}`} className='card shadow p-3 mb-5 bg-body rounded col-md-4 m-4'>
                        <div className="card">
                            <h1 className="card-title text-center text-decoration-underline">{myindividual.name}</h1>
                            <div className="d-flex justify-content-center mt-2 ">

                            <Link to={`/people/${myindividual.id}`} className="btn btn-primary">
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

export default People;