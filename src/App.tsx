import { Box, Button, HGrid, Link } from "@navikt/ds-react";
import "./App.css";
import Kobling, { KoblingProps } from "./Kobling";
import { useRef } from "react";
import NyFavorittModal from "./NyFavorittModal";

function App() {
  const favoritter: KoblingProps[] = [
    { url: "https://nav.no" },
    { url: "https://skatteetaten.no" },
    { url: "https://dagenidag.com" },
    { url: "https://cloudflare.com" },
    { url: "https://www.dagsdato.no" },
    { url: "https://yr.no" },
    { url: "https://javalin.io" },
    { url: "https://javalin.io" },
    { url: "https://javalin.io" },
    { url: "" },
  ];

  const nyFavorittModal = useRef<HTMLDialogElement>(null);

  return (
    <>
      <main>
        <header>
          <h1>umiddelbart</h1>
          <img src="src/assets/bart.svg" alt="bart" width={"128px"} />
        </header>
        <HGrid columns={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}>
          {favoritter.map((kobling, idx) => (
            <Kobling key={idx} url={kobling.url} />
          ))}
        </HGrid>
        <Box margin={"10"}>
          <Button
            type="button"
            variant="primary-neutral"
            onClick={() => nyFavorittModal.current?.showModal()}
          >
            Legg til favoritt
          </Button>
          <NyFavorittModal elementRef={nyFavorittModal} />
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
