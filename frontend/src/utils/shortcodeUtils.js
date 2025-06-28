import { nanoid } from "nanoid";

export function generateShortCode(existingCodes) {
  let code;
  do {
    code = nanoid(6);
  } while (existingCodes.includes(code));
  return code;
}
