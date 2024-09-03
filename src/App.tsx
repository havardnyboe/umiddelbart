import { HGrid } from "@navikt/ds-react";
import "./App.css";
import Kobling from "./Kobling";

function App() {
  return (
    <main>
      <h1>Umiddelbart</h1>
      <HGrid
        columns={{ xs: 2, sm: 2, md: 4, lg: 5, xl: 6 }}
        gap="2"
        align="center"
      >
        <Kobling url="https://nav.no" />
        <Kobling url="https://skatteetaten.no" />
        <Kobling url="https://dagenidag.com" />
        <Kobling url="https://cloudflare.com" />
        <Kobling url="https://www.dagsdato.no" />
        <Kobling url="https://nav.no" />
        <Kobling url="https://nav.no" />
        <Kobling url="a" />
      </HGrid>
    </main>
  );
}

export default App;
