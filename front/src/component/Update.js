import React, {useState} from 'react'
import Axios from "axios"

function Update() {
    const api_url = 'http://laravel-api.test/api/topicality';
    const [title,setTitle] = useState('')
    const [content, setContent] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState('false')

    let handleSubmit = (e) => {
        e.preventDefault()
      
        setLoading('true')
            Axios.post(api_url, {
                title: title,
                content, content
            })
            .then(result => {
               
                //setLoading(false)
                setSuccess('true')
                
            })
            .catch(err => {
                
                //setLoading(false)
                setSuccess('false')

            })

        setContent('')
        setTitle('')
            
    }
    return (
        <div>
            <div className="col-md-10 offset-1 mt-5">
                <form  onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="form-group col-md">
                            <label>Titre</label>
                            <input type="text" className="form-control" value={title} onChange={({target}) => setTitle(target.value)} />
                        </div>
                        <div className="form-group col-md">
                            <label>Contenu</label>
                            <input type="text" className="form-control" value={content} onChange={({target}) => setContent(target.value)}  />
                        </div>
                        <div className="form-group col-md">
                            <br/>
                            <button className="btn btn-primary form-control mt-2" loading={loading}>ENRGISTRER</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Update
