import { Button, Modal, TextField } from "@navikt/ds-react";

interface ModalProps {
  elementRef: React.RefObject<HTMLDialogElement>;
  tittelPlaceholder: string;
}

function NyFavorittModal({ elementRef, tittelPlaceholder }: ModalProps) {
  return (
    <Modal ref={elementRef} header={{ heading: "Ny favoritt" }} width={"small"}>
      <Modal.Body>
        <TextField label="Url" type="url" size="medium"></TextField>
        <TextField
          label="Tittel"
          type="text"
          size="medium"
          placeholder={tittelPlaceholder}
        ></TextField>
      </Modal.Body>
      <Modal.Footer>
        <Button
          type="button"
          variant="primary-neutral"
          onClick={() => elementRef.current?.close()}
        >
          Legg til
        </Button>
        <Button
          type="button"
          variant="secondary-neutral"
          onClick={() => elementRef.current?.close()}
        >
          Avbryt
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NyFavorittModal;
