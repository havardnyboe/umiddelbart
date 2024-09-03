import { Box, VStack } from "@navikt/ds-react";
import "react";

interface KoblingProps {
  url: string;
}

function Kobling({ url }: KoblingProps) {
  const bareUrl = url.replace(/(^\w+:|^)\/\//, "");
  const domene =
    /(?:[-a-zA-Z0-9@:%_+~.#=]{2,256}\.)?([-a-zA-Z0-9@:%_+~#=]*)\.[a-z]{2,6}\b(?:[-a-zA-Z0-9@:%_+.~#?&//=]*)/g.exec(
      url
    ) || "";

  return (
    <Box
      as={"div"}
      className="kobling"
      margin={"2"}
      shadow="small"
      borderColor="border-default"
      borderRadius={"large"}
    >
      <VStack
        height={"168px"}
        width={"168px"}
        href={url}
        as={"a"}
        align={"center"}
        justify={"space-evenly"}
        padding={"2"}
      >
        <img
          src={
            !(url == "")
              ? `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${bareUrl}&size=128`
              : "https://upload.wikimedia.org/wikipedia/commons/8/8d/Globe_smoke_rounded.svg"
          }
          alt={url}
          width={"100px"}
        />
        <span>{domene[1]}</span>
      </VStack>
    </Box>
  );
}

export default Kobling;
