import React from 'react'
import {useParams} from "react-router-dom"

function Update() {
    let {slug} = useParams();
    return (
        <div>
            <h1 className="text-center">Editer {slug}</h1>
            <div className="col-md-10 offset-1">

            </div>
        </div>
    )
}

export default Update
