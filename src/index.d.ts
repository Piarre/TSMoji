import { Mojis } from "./mojis";
import moji from "./moji";

declare module "TSMoji" {
  export function moji(name: Moji): string;

  export type Option = AvailableEmojis | MojisName | MojisCode;

  /**
   * Returns a list of available emojis.
   * @example 🎨 | ⚡️ | 🔥 | 🐛
   */
  export type AvailableEmojis = (typeof Mojis)[number]["emoji"];

  /**
   * Returns a list emojis name
   * @example "art" | "zap" | "fire" | "bug"
   */
  export type MojisName = (typeof Mojis)[number]["name"];

  /**
   * Returns a list emojis code
   * @example ":art:" | ":zap:" | ":fire:" | ":bug:"
   */
  export type MojisCode = (typeof Mojis)[number]["code"];

  /**
   * Return an emoji
   * @example { name: "art", code: ":art:", emoji: "🎨" }
   */
  export type Moji = {
    name: MojisName;
    code: MojisCode;
    emoji: AvailableEmojis;
  };
}
