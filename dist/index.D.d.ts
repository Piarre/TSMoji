import { Mojis } from "./mojis";
declare module "TSMoji" {
    function m(name: Moji): string;
    type Option = AvailableEmojis | MojisName | MojisCode;
    /**
     * Returns a list of available emojis.
     * @example 🎨 | ⚡️ | 🔥 | 🐛
     */
    type AvailableEmojis = (typeof Mojis)[number]["emoji"];
    /**
     * Returns a list emojis name
     * @example "art" | "zap" | "fire" | "bug"
     */
    type MojisName = (typeof Mojis)[number]["name"];
    /**
     * Returns a list emojis code
     * @example ":art:" | ":zap:" | ":fire:" | ":bug:"
     */
    type MojisCode = (typeof Mojis)[number]["code"];
    /**
     * Return an emoji
     * @example { name: "art", code: ":art:", emoji: "🎨" }
     */
    type Moji = {
        name: MojisName;
        code: MojisCode;
        emoji: AvailableEmojis;
    };
}
