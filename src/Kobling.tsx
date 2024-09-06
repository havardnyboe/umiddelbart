import { Box, VStack } from "@navikt/ds-react";
import "react";
import "./Kobling.css";

export interface KoblingProps {
  url: string;
  tittel?: string;
}

function Kobling({ url, tittel }: KoblingProps) {
  const bareUrl = url.replace(/(^\w+:|^)\/\//, "");
  const domene =
    /(?:[-a-zA-Z0-9@:%_+~.#=]{2,256}\.)?([-a-zA-Z0-9@:%_+~#=]*)\.[a-z]{2,6}\b(?:[-a-zA-Z0-9@:%_+.~#?&//=]*)/g.exec(
      url
    ) || "";

  return (
    <>
      <VStack
        className="koblingContainer"
        width={"128px"}
        height={"148px"}
        align={"center"}
        justify={"center"}
      >
        <Box as={"a"} href={url}>
          <Box
            as={"div"}
            className="koblingLogo"
            shadow="small"
            borderColor="border-default"
            borderRadius={"xlarge"}
          >
            <img
              src={
                !(url == "")
                  ? `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${bareUrl}&size=128`
                  : "https://upload.wikimedia.org/wikipedia/commons/8/8d/Globe_smoke_rounded.svg"
              }
              alt={url}
              width={"64px"}
            />
          </Box>
          <span>{tittel || domene[1] || <i>undefined</i>}</span>
        </Box>
      </VStack>
    </>
  );
}

export default Kobling;
