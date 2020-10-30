import React from 'react'

function Update() {
    return (
        <div>
            <div className="col-md-10 offset-1">
                <form>
                    <div className="row">
                        <div className="form-group col-md">
                            <label>Titre</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group col-md">
                            <label>Contenu</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group col-md">
                            <br/>
                            <button className="btn btn-primary form-control mt-2">ENRGISTRER</button>
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Update
