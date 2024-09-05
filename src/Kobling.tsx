import { Box, VStack } from "@navikt/ds-react";
import "react";
import "./Kobling.css";

export interface KoblingProps {
  url: string;
}

function Kobling({ url }: KoblingProps) {
  const bareUrl = url.replace(/(^\w+:|^)\/\//, "");
  const domene =
    /(?:[-a-zA-Z0-9@:%_+~.#=]{2,256}\.)?([-a-zA-Z0-9@:%_+~#=]*)\.[a-z]{2,6}\b(?:[-a-zA-Z0-9@:%_+.~#?&//=]*)/g.exec(
      url
    ) || "";

  const padding = "6";

  return (
    <Box
      as={"a"}
      href={url}
      className="koblingContainer"
      padding={padding}
      borderRadius={"xlarge"}
    >
      <VStack
        height={"128px"}
        width={"108px"}
        align={"center"}
        justify={"space-evenly"}
        padding={"0"}
      >
        <Box
          as={"div"}
          className="koblingLogo"
          shadow="small"
          borderColor="border-default"
          borderRadius={"xlarge"}
          padding={padding}
          margin={"2"}
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
        <span>{domene[1] || <br />}</span>
      </VStack>
    </Box>
  );
}

export default Kobling;
