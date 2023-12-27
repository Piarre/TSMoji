/* eslint-disable @typescript-eslint/no-explicit-any */
import { MojisName, MojisCode, MojiObject } from "src/types/moji";
import MOJIS from "../constants/mojis";

/**
 * Retrieves a MojiObject based on the provided MojisName or MojisCode.
 *
 * @param name - The name or code of the Moji.
 * @returns The MojiObject matching the provided name or code.
 */
function moji(name: MojisName | MojisCode): MojiObject {
  let moj;

  name.startsWith(":")
    ? (moj = MOJIS.find((moj) => moj.code === name))
    : (moj = MOJIS.find((moj) => moj.name === name));

  return moj as MojiObject;
}

export { moji };
