## TSMoji

🔥 Print ✨ emojis ✨ in TypeScript...

###### <i>EMOJIS BT [GITMOJIS](https://gitmoji.dev/)</i>

## ⬇️ Installation

```bash
npm i @piarre/tsmoji
```

## 🩹 Known issues
- [x] <strong>Git Bash for Windows</strong> : Default install of can't handle emoji, you must check out [this Gist](https://gist.github.com/OlivierLDff/766ea2be17e35fb7794f2a2a9ab5fb44)

## 🚨 Examples

```ts
import { getMojiByCode, getMojiByName, Moji } from "@piarre/tsmoji";

console.log(getMojiByCode(":zap:")); /* return ⚡️ */
console.log(getMojiByCode(":art:")); /* return 🎨 */

console.log(getMojiByName("zap")); /* return ⚡️ */
console.log(getMojiByName("art")); /* return 🎨 */

console.log(Moji("zap", "Hello World")); /* return "⚡️ Hello World" */
console.log(Moji(":art:", "Hello World")); /* return "🎨 Hello World" */
```

## 🔧 Availabe functions
```ts
/**
 * Returns a string with an emoji and a message based on the provided icon and message.
 * @param icon - The name or code of the emoji.
 * @param message - The message to be displayed with the emoji.
 * @returns A string with the emoji and the message, or a red flag emoji if the emoji is unknown.
 */
export function Moji(icon: MojisName | MojisCode, message: string);
```
```ts
/**
 * Retrieves the emoji corresponding to the given code.
 * @param code - The code of the emoji to retrieve.
 * @returns The emoji corresponding to the code, or a red flag emoji if the code is unknown.
 */
export function getMojiByCode(code: MojisCode | string);
```
```ts
/**
 * Retrieves the emoji associated with the given name.
 * @param name The name of the emoji to retrieve.
 * @returns The emoji corresponding to the given name, or a red flag emoji if the name is unknown.
 */
export function getMojiByName(name: MojisName);
```
```ts
/**
 * Retrieves the description of a moji based on its name or code.
 * @param name The name or code of the moji.
 * @returns The description of the moji, or a red flag emoji if the moji is unknown.
 */
export function getMojiDescription(name: MojisCode | MojisName);
```

# 🔐 License

MIT
