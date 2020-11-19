import React, {useState, useEffect} from 'react';
import Axios from "axios";

function Coments({id}) {
    const [coments, setComents] = useState([]);
    const [number, setNumber] = useState(0);

    useEffect(() => {
        if (number > 0){
            Axios.get(`${process.env.API_BLOG}/posts/${id}/comments`)
                .then(resp => {
                    //console.log(resp.data);
                    setComents(resp.data)
                })
                .catch(e => console.log('error',e));

        }
    }, [number]);


    return (
        <div>
            {coments.length === 0  ?
                <div>
                    {coments}
                    <button onClick={() => setNumber(number + 1)}>Cargar comentarios</button>
                </div>
                :
                <div>
                    {
                        coments.map(resp => (
                            <div key={resp.id}>
                                <h6>{resp.id}</h6>
                                <span>{resp.body}</span>
                                <h3>{resp.email}</h3>
                                <p>{resp.name}</p>


                            </div>

                        ))
                    }
                </div>
            }
        </div>
    );
}

export default Coments;
