
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const PeopleDetails = () => {

    const { peopleid } = useParams();
    const [details, setDetails] = useState(null);

    useEffect(() => { //effects are consequences of renders
        fetch(`https://ghibliapi.herokuapp.com/people/${peopleid}`)
            .then(res => res.json())
            .then(details => setDetails(details))
            .catch(e => alert(e.message));
    }, [peopleid]);


    return (
        <main className="container d-flex justify-content-center">
            <div key={`film-${details?.id}`} className='card shadow p-3 mb-5 bg-body rounded col-md-4 m-4'>
                <div className=" card-body">
                    
                <h1 className="card-title text-center text-decoration-underline">{details?.name}</h1>
                    <div className='text-left'>
                    <h6 >Gender: {details?.gender}</h6>                                    
                    <h6 >Age: {details?.age}</h6>
                    <h6 >Eye Color: {details?.eye_color}</h6>
                    <h6 >Age: {details?.hair_color}</h6>
                    <div className="d-flex justify-content-center mt-2 ">
                        <Link to={`/people`} className="btn btn-primary">Back to People</Link>
                    </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default PeopleDetails;