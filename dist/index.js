"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Moji: () => Moji,
  getMojiByCode: () => getMojiByCode,
  getMojiByName: () => getMojiByName,
  getMojiDescription: () => getMojiDescription
});
module.exports = __toCommonJS(src_exports);

// src/moji/moji.ts
var import_chalk = __toESM(require("chalk"));

// src/variables/mojis.ts
var Mojis = [
  {
    emoji: "\u{1F3A8}",
    entity: "&#x1f3a8;",
    code: ":art:",
    description: "Improve structure / format of the code.",
    name: "art"
  },
  {
    emoji: "\u26A1\uFE0F",
    entity: "&#x26a1;",
    code: ":zap:",
    description: "Improve performance.",
    name: "zap"
  },
  {
    emoji: "\u{1F525}",
    entity: "&#x1f525;",
    code: ":fire:",
    description: "Remove code or files.",
    name: "fire"
  },
  {
    emoji: "\u{1F41B}",
    entity: "&#x1f41b;",
    code: ":bug:",
    description: "Fix a bug.",
    name: "bug"
  },
  {
    emoji: "\u{1F691}\uFE0F",
    entity: "&#128657;",
    code: ":ambulance:",
    description: "Critical hotfix.",
    name: "ambulance"
  },
  {
    emoji: "\u2728",
    entity: "&#x2728;",
    code: ":sparkles:",
    description: "Introduce new features.",
    name: "sparkles"
  },
  {
    emoji: "\u{1F4DD}",
    entity: "&#x1f4dd;",
    code: ":memo:",
    description: "Add or update documentation.",
    name: "memo"
  },
  {
    emoji: "\u{1F680}",
    entity: "&#x1f680;",
    code: ":rocket:",
    description: "Deploy stuff.",
    name: "rocket"
  },
  {
    emoji: "\u{1F484}",
    entity: "&#ff99cc;",
    code: ":lipstick:",
    description: "Add or update the UI and style files.",
    name: "lipstick"
  },
  {
    emoji: "\u{1F389}",
    entity: "&#127881;",
    code: ":tada:",
    description: "Begin a project.",
    name: "tada"
  },
  {
    emoji: "\u2705",
    entity: "&#x2705;",
    code: ":white_check_mark:",
    description: "Add, update, or pass tests.",
    name: "white-check-mark"
  },
  {
    emoji: "\u{1F512}\uFE0F",
    entity: "&#x1f512;",
    code: ":lock:",
    description: "Fix security or privacy issues.",
    name: "lock"
  },
  {
    emoji: "\u{1F510}",
    entity: "&#x1f510;",
    code: ":closed_lock_with_key:",
    description: "Add or update secrets.",
    name: "closed-lock-with-key"
  },
  {
    emoji: "\u{1F516}",
    entity: "&#x1f516;",
    code: ":bookmark:",
    description: "Release / Version tags.",
    name: "bookmark"
  },
  {
    emoji: "\u{1F6A8}",
    entity: "&#x1f6a8;",
    code: ":rotating_light:",
    description: "Fix compiler / linter warnings.",
    name: "rotating-light"
  },
  {
    emoji: "\u{1F6A7}",
    entity: "&#x1f6a7;",
    code: ":construction:",
    description: "Work in progress.",
    name: "construction"
  },
  {
    emoji: "\u{1F49A}",
    entity: "&#x1f49a;",
    code: ":green_heart:",
    description: "Fix CI Build.",
    name: "green-heart"
  },
  {
    emoji: "\u2B07\uFE0F",
    entity: "\u2B07\uFE0F",
    code: ":arrow_down:",
    description: "Downgrade dependencies.",
    name: "arrow-down"
  },
  {
    emoji: "\u2B06\uFE0F",
    entity: "\u2B06\uFE0F",
    code: ":arrow_up:",
    description: "Upgrade dependencies.",
    name: "arrow-up"
  },
  {
    emoji: "\u{1F4CC}",
    entity: "&#x1F4CC;",
    code: ":pushpin:",
    description: "Pin dependencies to specific versions.",
    name: "pushpin"
  },
  {
    emoji: "\u{1F477}",
    entity: "&#x1f477;",
    code: ":construction_worker:",
    description: "Add or update CI build system.",
    name: "construction-worker"
  },
  {
    emoji: "\u{1F4C8}",
    entity: "&#x1F4C8;",
    code: ":chart_with_upwards_trend:",
    description: "Add or update analytics or track code.",
    name: "chart-with-upwards-trend"
  },
  {
    emoji: "\u267B\uFE0F",
    entity: "&#x267b;",
    code: ":recycle:",
    description: "Refactor code.",
    name: "recycle"
  },
  {
    emoji: "\u2795",
    entity: "&#10133;",
    code: ":heavy_plus_sign:",
    description: "Add a dependency.",
    name: "heavy-plus-sign"
  },
  {
    emoji: "\u2796",
    entity: "&#10134;",
    code: ":heavy_minus_sign:",
    description: "Remove a dependency.",
    name: "heavy-minus-sign"
  },
  {
    emoji: "\u{1F527}",
    entity: "&#x1f527;",
    code: ":wrench:",
    description: "Add or update configuration files.",
    name: "wrench"
  },
  {
    emoji: "\u{1F528}",
    entity: "&#128296;",
    code: ":hammer:",
    description: "Add or update development scripts.",
    name: "hammer"
  },
  {
    emoji: "\u{1F310}",
    entity: "&#127760;",
    code: ":globe_with_meridians:",
    description: "Internationalization and localization.",
    name: "globe-with-meridians"
  },
  {
    emoji: "\u270F\uFE0F",
    entity: "&#59161;",
    code: ":pencil2:",
    description: "Fix typos.",
    name: "pencil2"
  },
  {
    emoji: "\u{1F4A9}",
    entity: "&#58613;",
    code: ":poop:",
    description: "Write bad code that needs to be improved.",
    name: "poop"
  },
  {
    emoji: "\u23EA\uFE0F",
    entity: "&#9194;",
    code: ":rewind:",
    description: "Revert changes.",
    name: "rewind"
  },
  {
    emoji: "\u{1F500}",
    entity: "&#128256;",
    code: ":twisted_rightwards_arrows:",
    description: "Merge branches.",
    name: "twisted-rightwards-arrows"
  },
  {
    emoji: "\u{1F4E6}\uFE0F",
    entity: "&#1F4E6;",
    code: ":package:",
    description: "Add or update compiled files or packages.",
    name: "package"
  },
  {
    emoji: "\u{1F47D}\uFE0F",
    entity: "&#1F47D;",
    code: ":alien:",
    description: "Update code due to external API changes.",
    name: "alien"
  },
  {
    emoji: "\u{1F69A}",
    entity: "&#1F69A;",
    code: ":truck:",
    description: "Move or rename resources (e.g.: files, paths, routes).",
    name: "truck"
  },
  {
    emoji: "\u{1F4C4}",
    entity: "&#1F4C4;",
    code: ":page_facing_up:",
    description: "Add or update license.",
    name: "page-facing-up"
  },
  {
    emoji: "\u{1F4A5}",
    entity: "&#x1f4a5;",
    code: ":boom:",
    description: "Introduce breaking changes.",
    name: "boom"
  },
  {
    emoji: "\u{1F371}",
    entity: "&#1F371",
    code: ":bento:",
    description: "Add or update assets.",
    name: "bento"
  },
  {
    emoji: "\u267F\uFE0F",
    entity: "&#9855;",
    code: ":wheelchair:",
    description: "Improve accessibility.",
    name: "wheelchair"
  },
  {
    emoji: "\u{1F4A1}",
    entity: "&#128161;",
    code: ":bulb:",
    description: "Add or update comments in source code.",
    name: "bulb"
  },
  {
    emoji: "\u{1F37B}",
    entity: "&#x1f37b;",
    code: ":beers:",
    description: "Write code drunkenly.",
    name: "beers"
  },
  {
    emoji: "\u{1F4AC}",
    entity: "&#128172;",
    code: ":speech_balloon:",
    description: "Add or update text and literals.",
    name: "speech-balloon"
  },
  {
    emoji: "\u{1F5C3}\uFE0F",
    entity: "&#128451;",
    code: ":card_file_box:",
    description: "Perform database related changes.",
    name: "card-file-box"
  },
  {
    emoji: "\u{1F50A}",
    entity: "&#128266;",
    code: ":loud_sound:",
    description: "Add or update logs.",
    name: "loud-sound"
  },
  {
    emoji: "\u{1F507}",
    entity: "&#128263;",
    code: ":mute:",
    description: "Remove logs.",
    name: "mute"
  },
  {
    emoji: "\u{1F465}",
    entity: "&#128101;",
    code: ":busts_in_silhouette:",
    description: "Add or update contributor(s).",
    name: "busts-in-silhouette"
  },
  {
    emoji: "\u{1F6B8}",
    entity: "&#128696;",
    code: ":children_crossing:",
    description: "Improve user experience / usability.",
    name: "children-crossing"
  },
  {
    emoji: "\u{1F3D7}\uFE0F",
    entity: "&#1f3d7;",
    code: ":building_construction:",
    description: "Make architectural changes.",
    name: "building-construction"
  },
  {
    emoji: "\u{1F4F1}",
    entity: "&#128241;",
    code: ":iphone:",
    description: "Work on responsive design.",
    name: "iphone"
  },
  {
    emoji: "\u{1F921}",
    entity: "&#129313;",
    code: ":clown_face:",
    description: "Mock things.",
    name: "clown-face"
  },
  {
    emoji: "\u{1F95A}",
    entity: "&#129370;",
    code: ":egg:",
    description: "Add or update an easter egg.",
    name: "egg"
  },
  {
    emoji: "\u{1F648}",
    entity: "&#8bdfe7;",
    code: ":see_no_evil:",
    description: "Add or update a .gitignore file.",
    name: "see-no-evil"
  },
  {
    emoji: "\u{1F4F8}",
    entity: "&#128248;",
    code: ":camera_flash:",
    description: "Add or update snapshots.",
    name: "camera-flash"
  },
  {
    emoji: "\u2697\uFE0F",
    entity: "&#x2697;",
    code: ":alembic:",
    description: "Perform experiments.",
    name: "alembic"
  },
  {
    emoji: "\u{1F50D}\uFE0F",
    entity: "&#128269;",
    code: ":mag:",
    description: "Improve SEO.",
    name: "mag"
  },
  {
    emoji: "\u{1F3F7}\uFE0F",
    entity: "&#127991;",
    code: ":label:",
    description: "Add or update types.",
    name: "label"
  },
  {
    emoji: "\u{1F331}",
    entity: "&#127793;",
    code: ":seedling:",
    description: "Add or update seed files.",
    name: "seedling"
  },
  {
    emoji: "\u{1F6A9}",
    entity: "&#x1F6A9;",
    code: ":triangular_flag_on_post:",
    description: "Add, update, or remove feature flags.",
    name: "triangular-flag-on-post"
  },
  {
    emoji: "\u{1F945}",
    entity: "&#x1F945;",
    code: ":goal_net:",
    description: "Catch errors.",
    name: "goal-net"
  },
  {
    emoji: "\u{1F4AB}",
    entity: "&#x1f4ab;",
    code: ":dizzy:",
    description: "Add or update animations and transitions.",
    name: "dizzy"
  },
  {
    emoji: "\u{1F5D1}\uFE0F",
    entity: "&#x1F5D1;",
    code: ":wastebasket:",
    description: "Deprecate code that needs to be cleaned up.",
    name: "wastebasket"
  },
  {
    emoji: "\u{1F6C2}",
    entity: "&#x1F6C2;",
    code: ":passport_control:",
    description: "Work on code related to authorization, roles and permissions.",
    name: "passport-control"
  },
  {
    emoji: "\u{1FA79}",
    entity: "&#x1FA79;",
    code: ":adhesive_bandage:",
    description: "Simple fix for a non-critical issue.",
    name: "adhesive-bandage"
  },
  {
    emoji: "\u{1F9D0}",
    entity: "&#x1F9D0;",
    code: ":monocle_face:",
    description: "Data exploration/inspection.",
    name: "monocle-face"
  },
  {
    emoji: "\u26B0\uFE0F",
    entity: "&#x26B0;",
    code: ":coffin:",
    description: "Remove dead code.",
    name: "coffin"
  },
  {
    emoji: "\u{1F9EA}",
    entity: "&#x1F9EA;",
    code: ":test_tube:",
    description: "Add a failing test.",
    name: "test-tube"
  },
  {
    emoji: "\u{1F454}",
    entity: "&#128084;",
    code: ":necktie:",
    description: "Add or update business logic.",
    name: "necktie"
  },
  {
    emoji: "\u{1FA7A}",
    entity: "&#x1FA7A;",
    code: ":stethoscope:",
    description: "Add or update healthcheck.",
    name: "stethoscope"
  },
  {
    emoji: "\u{1F9F1}",
    entity: "&#x1f9f1;",
    code: ":bricks:",
    description: "Infrastructure related changes.",
    name: "bricks"
  },
  {
    emoji: "\u{1F9D1}\u200D\u{1F4BB}",
    entity: "&#129489;&#8205;&#128187;",
    code: ":technologist:",
    description: "Improve developer experience.",
    name: "technologist"
  },
  {
    emoji: "\u{1F4B8}",
    entity: "&#x1F4B8;",
    code: ":money_with_wings:",
    description: "Add sponsorships or money related infrastructure.",
    name: "money-with-wings"
  },
  {
    emoji: "\u{1F9F5}",
    entity: "&#x1F9F5;",
    code: ":thread:",
    description: "Add or update code related to multithreading or concurrency.",
    name: "thread"
  },
  {
    emoji: "\u{1F9BA}",
    entity: "&#x1F9BA;",
    code: ":safety_vest:",
    description: "Add or update code related to validation.",
    name: "safety-vest"
  }
];

// src/moji/moji.ts
function Moji(icon, message) {
  let founded;
  icon.startsWith(":") ? founded = Mojis.find((moji) => moji.code === icon) : founded = Mojis.find((moji) => moji.name === icon);
  return founded ? `${founded.emoji} ${message}` : import_chalk.default.red("\u{1F6A9} Unknow emoji");
}
function getMojiByCode(code) {
  const founded = Mojis.find((moji) => moji.code === code);
  return founded ? founded.emoji : import_chalk.default.red("\u{1F6A9} Unknow emoji");
}
function getMojiByName(name) {
  const founded = Mojis.find((moji) => moji.name === name);
  return founded ? founded.emoji : import_chalk.default.red("\u{1F6A9} Unknow emoji");
}
function getMojiDescription(name) {
  let founded;
  let moji;
  if (!name.startsWith(":")) {
    founded = Mojis.find((moji2) => moji2.name === name);
    moji = founded ? founded.description : import_chalk.default.red("\u{1F6A9} Unknow emoji");
  } else {
    founded = Mojis.find((moji2) => moji2.code === name);
    moji = founded ? founded.description : import_chalk.default.red("\u{1F6A9} Unknow emoji");
  }
  return moji;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Moji,
  getMojiByCode,
  getMojiByName,
  getMojiDescription
});
