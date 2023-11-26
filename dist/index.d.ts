type Option = AvailableEmojis | MojisName | MojisCode;

/**
 * Returns a list of available emojis.
 * @example 🎨 | ⚡️ | 🔥 | 🐛
 */
type AvailableEmojis =
  | "🎨"
  | "⚡️"
  | "🔥"
  | "🐛"
  | "🚑️"
  | "✨"
  | "📝"
  | "🚀"
  | "💄"
  | "🎉"
  | "✅"
  | "🔒️"
  | "🔐"
  | "🔖"
  | "🚨"
  | "🚧"
  | "💚"
  | "⬇️"
  | "⬆️"
  | "📌"
  | "👷"
  | "📈"
  | "♻️"
  | "➕"
  | "➖"
  | "🔧"
  | "🔨"
  | "🌐"
  | "✏️"
  | "💩"
  | "⏪️"
  | "🔀"
  | "📦️"
  | "👽️"
  | "🚚"
  | "📄"
  | "💥"
  | "🍱"
  | "♿️"
  | "💡"
  | "🍻"
  | "💬"
  | "🗃️"
  | "🔊"
  | "🔇"
  | "👥"
  | "🚸"
  | "🏗️"
  | "📱"
  | "🤡"
  | "🥚"
  | "🙈"
  | "📸"
  | "⚗️"
  | "🔍️"
  | "🏷️"
  | "🌱"
  | "🚩"
  | "🥅"
  | "💫"
  | "🗑️"
  | "🛂"
  | "🩹"
  | "🧐"
  | "⚰️"
  | "🧪"
  | "👔"
  | "🩺"
  | "🧱"
  | "🧑‍💻"
  | "💸"
  | "🧵"
  | "🦺";

/**
 * Returns a list emojis name
 * @example "art" | "zap" | "fire" | "bug"
 */
type MojisName =
  | "art"
  | "zap"
  | "fire"
  | "bug"
  | "ambulance"
  | "sparkles"
  | "memo"
  | "rocket"
  | "lipstick"
  | "tada"
  | "white-check-mark"
  | "lock"
  | "closed-lock-with-key"
  | "bookmark"
  | "rotating-light"
  | "construction"
  | "green-heart"
  | "arrow-down"
  | "arrow-up"
  | "pushpin"
  | "construction-worker"
  | "chart-with-upwards-trend"
  | "recycle"
  | "heavy-plus-sign"
  | "heavy-minus-sign"
  | "wrench"
  | "hammer"
  | "globe-with-meridians"
  | "pencil2"
  | "poop"
  | "rewind"
  | "twisted-rightwards-arrows"
  | "package"
  | "alien"
  | "truck"
  | "page-facing-up"
  | "boom"
  | "bento"
  | "wheelchair"
  | "bulb"
  | "beers"
  | "speech-balloon"
  | "card-file-box"
  | "loud-sound"
  | "mute"
  | "busts-in-silhouette"
  | "children-crossing"
  | "building-construction"
  | "iphone"
  | "clown-face"
  | "egg"
  | "see-no-evil"
  | "camera-flash"
  | "alembic"
  | "mag"
  | "label"
  | "seedling"
  | "triangular-flag-on-post"
  | "goal-net"
  | "dizzy"
  | "wastebasket"
  | "passport-control"
  | "adhesive-bandage"
  | "monocle-face"
  | "coffin"
  | "test-tube"
  | "necktie"
  | "stethoscope"
  | "bricks"
  | "technologist"
  | "money-with-wings"
  | "thread"
  | "safety-vest";

/**
 * Returns a list emojis code
 * @example ":art:" | ":zap:" | ":fire:" | ":bug:"
 */
type MojisCode =
  | ":art:"
  | ":zap:"
  | ":fire:"
  | ":bug:"
  | ":ambulance:"
  | ":sparkles:"
  | ":memo:"
  | ":rocket:"
  | ":lipstick:"
  | ":tada:"
  | ":white_check_mark:"
  | ":lock:"
  | ":closed_lock_with_key:"
  | ":bookmark:"
  | ":rotating_light:"
  | ":construction:"
  | ":green_heart:"
  | ":arrow_down:"
  | ":arrow_up:"
  | ":pushpin:"
  | ":construction_worker:"
  | ":chart_with_upwards_trend:"
  | ":recycle:"
  | ":heavy_plus_sign:"
  | ":heavy_minus_sign:"
  | ":wrench:"
  | ":hammer:"
  | ":globe_with_meridians:"
  | ":pencil2:"
  | ":poop:"
  | ":rewind:"
  | ":twisted_rightwards_arrows:"
  | ":package:"
  | ":alien:"
  | ":truck:"
  | ":page_facing_up:"
  | ":boom:"
  | ":bento:"
  | ":wheelchair:"
  | ":bulb:"
  | ":beers:"
  | ":speech_balloon:"
  | ":card_file_box:"
  | ":loud_sound:"
  | ":mute:"
  | ":busts_in_silhouette:"
  | ":children_crossing:"
  | ":building_construction:"
  | ":iphone:"
  | ":clown_face:"
  | ":egg:"
  | ":see_no_evil:"
  | ":camera_flash:"
  | ":alembic:"
  | ":mag:"
  | ":label:"
  | ":seedling:"
  | ":triangular_flag_on_post:"
  | ":goal_net:"
  | ":dizzy:"
  | ":wastebasket:"
  | ":passport_control:"
  | ":adhesive_bandage:"
  | ":monocle_face:"
  | ":coffin:"
  | ":test_tube:"
  | ":necktie:"
  | ":stethoscope:"
  | ":bricks:"
  | ":technologist:"
  | ":money_with_wings:"
  | ":thread:"
  | ":safety_vest:";

/**
 * Return an emoji
 * @example { name: "art", code: ":art:", emoji: "🎨" }
 */
type MojiObject = {
  name: MojisName;
  code: MojisCode;
  emoji: AvailableEmojis;
  description: string;
};

/**
 * Returns a string with an emoji and a message based on the provided icon and message.
 * @param icon - The name or code of the emoji.
 * @param message - The message to be displayed with the emoji.
 * @returns A string with the emoji and the message, or a red flag emoji if the emoji is unknown.
 */
declare function Moji(icon: MojisName | MojisCode, message: string): string;
/**
 * Retrieves the emoji corresponding to the given code.
 * @param code - The code of the emoji to retrieve.
 * @returns The emoji corresponding to the code, or a red flag emoji if the code is unknown.
 */
declare function getMojiByCode(code: MojisCode | string): string;
/**
 * Retrieves the emoji associated with the given name.
 * @param name The name of the emoji to retrieve.
 * @returns The emoji corresponding to the given name, or a red flag emoji if the name is unknown.
 */
declare function getMojiByName(name: MojisName): string;
/**
 * Retrieves the description of a moji based on its name or code.
 * @param name The name or code of the moji.
 * @returns The description of the moji, or a red flag emoji if the moji is unknown.
 */
declare function getMojiDescription(name: MojisCode | MojisName): string;

export { type AvailableEmojis, Moji, type MojiObject, type MojisCode, type MojisName, type Option, getMojiByCode, getMojiByName, getMojiDescription };
