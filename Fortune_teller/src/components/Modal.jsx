import "bootstrap/dist/css/bootstrap.min.css";
import "./Modal.css";

export default function Modal() {
  return (
    <div className="modal" tabIndex="-1" style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            {/* <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button> */}
          </div>
          <div className="modal-body">
            <p>Respond goes here.</p>
          </div>
          <div className="modal-footer">
            <div className="col-auto">
              {/* <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button> */}
              <div className="input-group mb-3">
                {/* <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Default
                </span> */}
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
                <button
                  type="button"
                  className="btn btn-primary ms-5 btn-danger"
                >
                  Show My Fortune
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
