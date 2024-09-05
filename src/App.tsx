import { HGrid } from "@navikt/ds-react";
import "./App.css";
import Kobling from "./Kobling";

function App() {
  return (
    <>
      <main>
        <header>
          <h1>umiddelbart</h1>
          <img src="src/assets/bart.svg" alt="bart" width={"128px"} />
        </header>
        <HGrid
          columns={{ xs: 2, sm: 2, md: 4, lg: 5, xl: 6 }}
          gap="0"
          align="center"
        >
          <Kobling url="https://nav.no" />
          <Kobling url="https://skatteetaten.no" />
          <Kobling url="https://dagenidag.com" />
          <Kobling url="https://cloudflare.com" />
          <Kobling url="https://www.dagsdato.no" />
          <Kobling url="https://yr.no" />
          <Kobling url="https://javalin.io" />
          <Kobling url="https://javalin.io" />
          <Kobling url="https://javalin.io" />
          <Kobling url="https://javalin.io" />
          <Kobling url="https://javalin.io" />
          <Kobling url="https://javalin.io" />
          <Kobling url="https://javalin.io" />
          <Kobling url="https://javalin.io" />
          <Kobling url="https://javalin.io" />
          <Kobling url="https://javalin.io" />
          <Kobling url="a" />
        </HGrid>
      </main>
      <footer>
        Laget med ❤️ av <a href="http://github.com/havardnyboe">havardnyboe</a>.
        Inspirert av <a href="https://instabart.no">instabart.no</a>
      </footer>
    </>
  );
}

export default App;
