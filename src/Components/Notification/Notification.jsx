import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ImQuotesLeft } from "react-icons/im";

import { HiOutlineBell } from "react-icons/hi";

const Notification = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="position-absolute top-50 end-0 mx-3">
      <Button
        className="shadow p-3 mb-5 rounded"
        variant="primary"
        onClick={handleShow}
      >
        <HiOutlineBell onClick={handleShow} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="d-flex justify-content-center align-items-center w-100">
            <ImQuotesLeft size={80} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          Don’t settle for average. Bring your best to the moment. Then, whether
          it fails or succeeds, at least you know gave all had. We need to live
          the best that’s in us.
          <p className="title fw-bold">Alexandra MIchael</p>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center align-items-center">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            More
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Notification;
