import { Box, VStack } from "@navikt/ds-react";
import "react";
import "./Kobling.css";

export interface KoblingProps {
  url: string;
  tittel?: string;
}

function Kobling({ url, tittel }: KoblingProps) {
  const domene =
    /(?:[-a-zA-Z0-9@:%_+~.#=]{2,256}\.)?([-a-zA-Z0-9@:%_+~#=]*)\.[a-z]{2,6}\b(?:[-a-zA-Z0-9@:%_+.~#?&//=]*)/g.exec(
      url
    ) || "";

  return (
    <>
      <VStack className="koblingContainer" align={"center"} justify={"center"}>
        <Box as={"a"} href={url} padding={"4"}>
          <span>{tittel || domene[1] || <i>undefined</i>}</span>
        </Box>
      </VStack>
    </>
  );
}

export default Kobling;
