import { Buttons } from "@components/Buttons";
import { GoogleIcon } from "./styles";

export function Google() {
  return (
    <Buttons type="border" text="Google">
      {<GoogleIcon />}
    </Buttons>
  );
}
