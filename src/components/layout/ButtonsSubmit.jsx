import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import confetti from "canvas-confetti";

// Boton de calcular y empezar de 0 que recibe como prop el cleanUp
// que es el click del boton
export function ButtonsSubmit({ cleanUp, result, unit }) {
  const [modalIsOpen, setModalIsOpen] = useState();

  const lanzarConfeti = () => {
    confetti({
      particleCount: 300,
      spread: 90,
      origin: { y: 0.5 },
    });
  };

  const handleClickResult = () => {
    lanzarConfeti();
    setModalIsOpen(true);
  };

  return (
    <div className="container-buttons">
      <Button
        className="submit"
        type="submit"
        onClick={result ? handleClickResult : null}
      >
        Calcular
      </Button>
      {result ? (
        <Modal
          className="modal"
          show={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
        >
          <Modal.Body className="modal-body">
            {/*De esta manera mostramos el resultado, si existe ese valor damos esto */}
            <h1 className="title-modal">El resultado es :</h1>
            <p className="result">
              {result}
              {unit}
            </p>
          </Modal.Body>
          <Modal.Footer className="modal-footer">
            <Button className="submit" onClick={() => setModalIsOpen(false)}>
              Ok, gracias
            </Button>
          </Modal.Footer>
        </Modal>
      ) : null}
      <button onClick={cleanUp} className="clean">
        Empezar de 0
      </button>
    </div>
  );
}
