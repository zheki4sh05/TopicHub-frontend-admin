import { useEffect, useState } from "react";
import useControlHub from "../api/hook/useControlHub";
import { createHubs, doDeleteHubs, doUpdateHubs, fetchHubs } from "../api/request";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../../../process/menu/ui/Menu";
import Modal from "../../../shared/modal/ui/Modal";
import HubForm from "../../../widget/hub/ui/HubForm";

function Hubs() {
  const { dispatch, isLoading, hubs, error, loaded } = useControlHub();
  const [showCreate, setShowCreate] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setDeleteEdit] = useState(false);
  const [activeHub, setActiveHub] = useState({});
  useEffect(()=>{
    dispatch(fetchHubs())
  },[])
  const handleClose = () => {
    setShowEdit(false);
    setDeleteEdit(false);
    setShowCreate(false);
  };

  const handleCreate = () => {
    setShowCreate(true);
  };

  const handleEdit = (hub) => {
    setActiveHub(hub);
    setShowEdit(true);
  };

  const handleDelete = (hub) => {
    setActiveHub(hub);
    setDeleteEdit(true)
  };

  const handleDispatchSave = (hub) => {
    dispatch(createHubs(hub));
    handleClose();
  };

  const handleDispatchEdit = (hub) => {
    console.log(hub)
    dispatch(doUpdateHubs({...hub}));
    handleClose();
  };

  const handleDispatchDelete = () => {
    dispatch(doDeleteHubs({id:activeHub.id}));
    handleClose();
  };

  return (
    <>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <Menu />
        <div className="container mt-4">
          <h1>Hub List</h1>
          <button className="btn btn-success mb-3" onClick={handleCreate}>
            Add Hub
          </button>
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
                      <button
                        className="btn btn-warning"
                        style={{ marginRight: "10px" }}
                        onClick={() => handleEdit(hub)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(hub)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <span
            id="message"
            style={{ display: "none", marginTop: "10px" }}
          ></span>
        </div>
      </div>

      <Modal show={showCreate} handleClose={handleClose}>
        <HubForm
          item={{ id: 0, ru: "", en: "" }}
          handleSaveProp={handleDispatchSave}
        />
      </Modal>

      <Modal show={showEdit} handleClose={handleClose}>
        <HubForm item={activeHub} handleSaveProp={handleDispatchEdit} />
      </Modal>

      <Modal show={showDelete} handleClose={handleClose}>
      <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">Подтверждение удаления</h5>
        </div>
        <div className="card-body">
          <p>Вы точно хотите удалить?</p>
          <button 
            type="button" 
            className="btn btn-danger"
            style={{marginRight:"20px"}} 
            onClick={handleDispatchDelete}
          >
            Удалить
          </button>
          <button 
            type="button" 
            className="btn btn-secondary" 
            onClick={handleClose}
          >
            Отмена
          </button>
        </div>
      </div>
    </div>
      </Modal>
    </>
  );
}

export default Hubs;
