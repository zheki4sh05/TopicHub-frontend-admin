import zIndex from "@mui/material/styles/zIndex";

function Modal(props) {
  return (
    <>
      {props.show ? (
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#00000089",
          }}
        >
          <div
    
            style={{ display: "block",maxWidth:"500px" }}
       
          >
            <div>
              <button className="btn btn-primary" onClick={props.handleClose}>Закрыть</button>
            </div>
            <div style={{width:'100%'}}>
            {props.children}
            </div>
         
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal;
