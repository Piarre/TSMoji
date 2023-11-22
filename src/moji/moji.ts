import { Option, AvailableEmojis, MojiName } from "src/types/moji";
import { Mojis } from "src/variables/mojis";

export function moji(message: string, gitmoji: Option) {}

export function MojiName(message: string, icon: MojiName) {
  return `${getMojiByCode(`:${icon}:`)} ${message}`;
}

export function getMojiByCode(code: string) {
  return Mojis.find((moji) => moji.code === code);
}
