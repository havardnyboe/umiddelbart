import { useRef, useState } from "react";
import { Box, Button, HGrid, HStack, Link } from "@navikt/ds-react";
import { useLocalStorage } from "usehooks-ts";
import NyFavorittModal from "./NyFavorittModal";
import Kobling, { KoblingProps } from "./Kobling";
import "./App.css";

function App() {
  const [favoritter, setFavoritter, fjernFavoritter] = useLocalStorage<
    KoblingProps[]
  >("favoritter", []);

  const nyFavorittModal = useRef<HTMLDialogElement>(null);
  const [nyFavorittUrl, setNyFavorittUrl] = useState("");
  const [nyFavorittTittel, setNyFavorittTittel] = useState("");

  function nyKobling(url: string, tittel?: string) {
    console.log("Legger til favoritt");
    setFavoritter((prev) => [...prev, { url: url, tittel: tittel }]);
    console.log(favoritter);
  }

  return (
    <>
      <main>
        <header>
          <div>
            <h1>umiddelbart</h1>
            <img src="/bart.svg" alt="bart" width={"128px"} />
          </div>
        </header>
        <HGrid columns={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}>
          {favoritter.map((kobling, idx) => (
            <Kobling key={idx} url={kobling.url} tittel={kobling.tittel} />
          ))}
        </HGrid>
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
