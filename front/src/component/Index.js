import React, {useState, useEffect} from 'react';
import Axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"



function Index() {
  const api_url = 'http://laravel-api.test/api/topicality';
  const [topicalities, setTopicalities] = useState([]);

  function topicaliti(){
    Axios.get(api_url)
    .then(response =>{
      const res = response.data
      console.log(res);
      setTopicalities(res);
    })
  }

  useEffect(() => {
    topicaliti();
  }, []);

  function truncate(str, n) {
    return str?.lenght > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="App">

        <h1 className="text-center">Liste des actualites</h1>
        <table class="table col-md-10 offset-1">
          <thead class="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">TITRE</th>
              <th scope="col">CONTENU</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
              {topicalities.map((topicality) => (
                <tr>
                  <td>
                    <h6>{topicality.id}</h6>
                  </td>
                  <td>
                    <h6>{topicality.title}</h6>
                  </td>
                  <td>
                    <p>
                      {truncate(topicality.content, 60)}
                    </p>
                  </td>
                  <td>
                    <button className="btn btn-warning">EDITER</button>
                    <button className="btn btn-danger ml-4">SUPPRIMER</button>
                  </td>
                </tr>
                
              ))}
          </tbody>
         </table>
    </div>
  );
}

export default Index;