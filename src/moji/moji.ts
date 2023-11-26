import { MojisName, MojisCode } from "src/types/moji";
import MOJIS from "../constants/mojis";

/**
 * Returns a string with an emoji and a message based on the provided icon and message.
 * @param icon - The name or code of the emoji.
 * @param message - The message to be displayed with the emoji.
 * @returns A string with the emoji and the message, or a red flag emoji if the emoji is unknown.
 */
export function Moji(icon: MojisName | MojisCode, message: string) {
  let founded;

  icon.startsWith(":")
    ? (founded = MOJIS.find((moji) => moji.code === icon))
    : (founded = MOJIS.find((moji) => moji.name === icon));

  return founded ? `${founded.emoji} ${message}` : "🚩 Unknow emoji";
}

/**
 * Retrieves the emoji corresponding to the given code.
 * @param code - The code of the emoji to retrieve.
 * @returns The emoji corresponding to the code, or a red flag emoji if the code is unknown.
 */
export function getMojiByCode(code: MojisCode | string) {
  const founded = MOJIS.find((moji) => moji.code === code);

  return founded ? founded.emoji : "🚩 Unknow emoji";
}

/**
 * Retrieves the emoji associated with the given name.
 * @param name The name of the emoji to retrieve.
 * @returns The emoji corresponding to the given name, or a red flag emoji if the name is unknown.
 */
export function getMojiByName(name: MojisName) {
  const founded = MOJIS.find((moji) => moji.name === name);

  return founded ? founded.emoji : "🚩 Unknow emoji";
}

/**
 * Retrieves the description of a moji based on its name or code.
 * @param name The name or code of the moji.
 * @returns The description of the moji, or a red flag emoji if the moji is unknown.
 */
export function getMojiDescription(name: MojisCode | MojisName) {
  let founded;
  let moji;

  if (!name.startsWith(":")) {
    founded = MOJIS.find((moji) => moji.name === name);
    moji = founded ? founded.description : "🚩 Unknow emoji";
  } else {
    founded = MOJIS.find((moji) => moji.code === name);
    moji = founded ? founded.description : "🚩 Unknow emoji";
  }

  return moji;
}
