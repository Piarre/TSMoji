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
declare function Moji(icon: MojisName | MojisCode, message: string): string;
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
declare function getMojiByCode(code: MojisCode | string): string;
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
declare function getMojiByName(name: MojisName): string;
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
declare function getMojiDescription(name: MojisCode | MojisName): string;

export { Moji, getMojiByCode, getMojiByName, getMojiDescription };
