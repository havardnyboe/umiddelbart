import { Button, Modal, TextField } from "@navikt/ds-react";
import { FormEvent, useRef } from "react";

interface ModalProps {
  elementRef: React.RefObject<HTMLDialogElement>;
  tittel: string;
  url: string;
  setTittel: React.Dispatch<React.SetStateAction<string>>;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  nyFavoritt(url: string, tittel?: string): void;
}

function NyFavorittModal({
  elementRef,
  tittel,
  url,
  setTittel,
  setUrl,
  nyFavoritt,
}: ModalProps) {
  const urlInput = useRef<HTMLInputElement>(null);
  const tittelInput = useRef<HTMLInputElement>(null);

  function leggTil(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    nyFavoritt(url, tittel);
  }

  return (
    <Modal ref={elementRef} header={{ heading: "Ny favoritt" }} width={"small"}>
      <form onSubmit={(e) => leggTil(e)}>
        <Modal.Body>
          <TextField
            ref={urlInput}
            label="Url"
            type="url"
            size="medium"
            onChange={() => setUrl(urlInput.current?.value || "")}
            value={url}
          />
          <TextField
            ref={tittelInput}
            label="Tittel"
            type="text"
            size="medium"
            placeholder={tittel}
            onKeyUp={() => setTittel(tittelInput.current?.value || "")}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="submit"
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
      </form>
    </Modal>
  );
}

export default NyFavorittModal;
