import { useRef, useState, useEffect } from "react";
import { Box, Button, HStack, Link } from "@navikt/ds-react";
import { useLocalStorage } from "usehooks-ts";
import { Draggable } from "react-drag-reorder";
import NyFavorittModal from "./NyFavorittModal";
import Kobling, { KoblingProps } from "./Kobling";
import "./App.css";

function App() {
  const [favoritter, setFavoritter, fjernFavoritter] = useLocalStorage<
    KoblingProps[]
  >("favoritter", []);

  const nyFavorittModal = useRef<HTMLDialogElement>(null);
  const [nyFavorittUrl, setNyFavorittUrl] = useState("https://");
  const [nyFavorittTittel, setNyFavorittTittel] = useState("");
  const [isDeleteEnabled, setIsDeleteEnabled] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey) {
        setIsDeleteEnabled(true);
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (!event.metaKey && !event.ctrlKey) {
        setIsDeleteEnabled(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  function nyKobling(url: string, tittel?: string, bilde?: string) {
    console.log("Legger til favoritt");
    setFavoritter((prev) => [
      ...prev,
      { url: url, tittel: tittel, bilde: bilde },
    ]);
    setNyFavorittUrl("https://");
    setNyFavorittTittel("");
    console.log(favoritter);
  }

  const getChangedPos = (currentPos: number, newPos: number) => {
    console.log(currentPos, newPos);
    const nyFavoritter = favoritter;
    const temp = nyFavoritter[newPos];
    nyFavoritter[newPos] = nyFavoritter[currentPos];
    nyFavoritter[currentPos] = temp;
    setFavoritter(nyFavoritter);
  };

  return (
    <>
      <main>
        <header>
          <div>
            <h1>umiddelbart</h1>
            <img src="/bart.svg" alt="bart" width={"128px"} />
          </div>
        </header>

        <HStack justify={"center"} align={"center"} gap={"2"}>
          <Draggable onPosChange={getChangedPos}>
            {favoritter.map((kobling, idx) => (
              <Kobling key={idx} url={kobling.url} tittel={kobling.tittel} />
            ))}
          </Draggable>
        </HStack>

        <Box margin={"10"}>
          <HStack justify={"center"} align={"center"} gap={"4"}>
            <Button
              type="button"
              variant="primary-neutral"
              onClick={() => nyFavorittModal.current?.showModal()}
            >
              Legg til favoritt
            </Button>
            <Button
              type="button"
              variant="danger"
              onClick={() => fjernFavoritter()}
              disabled={!isDeleteEnabled}
            >
              Slett favoritter
            </Button>
          </HStack>

          <NyFavorittModal
            elementRef={nyFavorittModal}
            tittel={nyFavorittTittel}
            url={nyFavorittUrl}
            setTittel={setNyFavorittTittel}
            setUrl={setNyFavorittUrl}
            nyFavoritt={nyKobling}
          />
        </Box>
      </main>

      <footer>
        Laget med ❤️ av{" "}
        <Link href="http://github.com/havardnyboe">havardnyboe</Link>. Inspirert
        av <Link href="https://instabart.no">instabart.no</Link>
      </footer>
    </>
  );
}

export default App;
