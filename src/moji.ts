/// <reference path="./index.d.ts" />
import { Options } from "./index";

export default function (name: string, options: Options) {
  // Utilisez le type Options comme requis
  // const emoji = options.emojis[name];
  // if (!emoji) {
  //   throw new Error(`Emoji "${name}" not found`);
  // }
  return "emoji";
}