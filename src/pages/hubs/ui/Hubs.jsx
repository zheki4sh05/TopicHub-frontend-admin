import { useEffect, useState } from "react";
import useControlHub from "../api/hook/useControlHub";
import { fetchHubs } from "../api/request";



function Hubs() {
    const {dispatch, isLoading, hubs, error, loaded} = useControlHub()
    const [showEdit, setShowEdit] = useState(false);
    const [showCreate, setShowCreate] = useState(false);
    const [currentHub, setCurrentHub] = useState({ id: '', ru: '', en: '' });
  
    const handleEditClose = () => setShowEdit(false);
    const handleEditShow = (hub) => {
      setCurrentHub(hub);
      setShowEdit(true);
    };
  
    const handleCreateClose = () => setShowCreate(false);
    const handleCreateShow = () => {
      setCurrentHub({ id: '', ru: '', en: '' });
      setShowCreate(true);
    };

    useEffect(()=>{
      if(!loaded){
        dispatch(fetchHubs())
      }
    },[])

    if(isLoading){
        return (
            <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
        )
    }
    // if(!error){
    //     return (
    //         <div>
    //           <p>Error occurred: {error.status}</p>
    //           <p>{error.data?.message || "Unknown error"}</p>
    //         </div>
    //       );
    // }

    const handleDeleteHub=(id)=>{
      if(!id){
        return
      }
    
    }

    return ( 
        <div className="container mt-4">
        <h1>Hub List</h1>

        <button className="btn btn-success mb-3" onClick={handleCreateShow}>Add Hub</button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">English</th>
              <th scope="col">Russian</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody id="tableBody">
            {hubs.map((hub) => (
              <tr key={hub.id}>
                <td>{hub.id}</td>
                <td>{hub.en}</td>
                <td>{hub.ru}</td>
                <td>
                  <div className="d-flex">
                    <button className="btn btn-warning" style={{ marginRight: '10px' }} onClick={() => handleEditShow(hub)}>
                      Edit
                    </button>
                    <button className="btn btn-error"  onClick={() =>handleDeleteHub(hub)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <span id="message" style={{ display: 'none', marginTop: '10px' }}></span>
  

        {showEdit && (
          <div className="modal show" style={{ display: 'block' }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit Hub</h5>
                  <button type="button" className="close" onClick={handleEditClose}>
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form id="hubForm" action="/admin/hub/update" method="post">
                    <input type="hidden" id="id" name="id" value={currentHub.id} />
                    <div style={{ marginTop: '10px' }}>
                      <label htmlFor="ru">Русский:</label>
                      <input type="text" id="ru" name="ru" className="form-control" defaultValue={currentHub.ru} required />
                    </div>
                    <div style={{ marginTop: '10px' }}>
                      <label htmlFor="en">English:</label>
                      <input type="text" id="en" name="en" className="form-control" defaultValue={currentHub.en} required />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                      <button type="submit" className="btn btn-success">Сохранить</button>
                      <button type="button" className="btn btn-secondary" onClick={handleEditClose} style={{ marginLeft: '10px' }}>Назад</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
  

        {showCreate && (
          <div className="modal show" style={{ display: 'block' }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Create Hub</h5>
                  <button type="button" className="close" onClick={handleCreateClose}>
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form id="hubForm" action="/admin/hub/create" method="post">
                    <input type="hidden" id="id" name="id" />
                    <div style={{ marginTop: '10px' }}>
                      <label htmlFor="ru">Русский:</label>
                      <input type="text" id="ru" name="ru" className="form-control" required />
                    </div>
                    <div style={{ marginTop: '10px' }}>
                      <label htmlFor="en">English:</label>
                      <input type="text" id="en" name="en" className="form-control" required />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                      <button type="submit" className="btn btn-success">Сохранить</button>
                      <button type="button" className="btn btn-secondary" onClick={handleCreateClose} style={{ marginLeft: '10px' }}>Назад</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
}

export default Hubs;