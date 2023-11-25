import chalk from "chalk";
import { Moji, MojisName, MojisCode } from "src/types/moji";
import { Mojis } from "src/variables/mojis";

/**
 * Creates a Moji by combining a message and an icon.
 * @param message - The message to be displayed.
 * @param icon - The name or code of the icon to be displayed.
 * @returns The combined message and icon as a string.
 *
 * @example
 * ```ts
 * console.log(Moji("Hello world", "zap"));
 * ```
 */
export function Moji(icon: MojisName | MojisCode, message: string) {
  let founded;

  icon.startsWith(":") ? founded = Mojis.find(moji => moji.code === icon) : founded = Mojis.find(moji => moji.name === icon);
  
  return founded ? `${founded.emoji} ${message}` : chalk.red("🚩 Unknow emoji");
}

/**
 * Retrieves the emoji corresponding to the given code.
 *
 * @param code - The code of the emoji to retrieve.
 * @returns The emoji corresponding to the code, or a red flag emoji if the code is unknown.
 *
 * @example
 * ```ts
 * console.log(getMojiByCode(":test_tube:"));
 * ```
 */
export function getMojiByCode(code: MojisCode | string) {
  const founded = Mojis.find((moji) => moji.code === code);

  return founded ? founded.emoji : chalk.red("🚩 Unknow emoji");
}

/**
 * Retrieves the emoji by its name.
 * @param name - The name of the emoji.
 * @returns The emoji corresponding to the given name, or a red flag emoji if the name is unknown.
 *
 * @example
 * ```ts
 * console.log(getMojiByName("test-tube"));
 * ```
 */
export function getMojiByName(name: MojisName) {
  const founded = Mojis.find((moji) => moji.name === name);

  return founded ? founded.emoji : chalk.red("🚩 Unknow emoji");
}

/**
 * Get the description of a moji based on its name.
 * @param name - The name of the moji.
 * @returns The emoji description if found, otherwise a red flag emoji indicating an unknown emoji.
 *
 * @example
 * ```ts
 * console.log(getMojiDescription("test-tube"));
 * console.log(getMojiDescription(":test_tube:"));
 * ```
 */
export function getMojiDescription(name: MojisCode | MojisName) {
  let founded;
  let moji;

  if (!name.startsWith(":")) {
    founded = Mojis.find((moji) => moji.name === name);
    moji = founded? founded.description : chalk.red("🚩 Unknow emoji");
  } else {
    founded = Mojis.find((moji) => moji.code === name);
    moji = founded? founded.description : chalk.red("🚩 Unknow emoji");
  }

  return moji;
}