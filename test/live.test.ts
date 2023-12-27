import { describe, expect, it } from "vitest";

import { moji } from "../dist";

describe("Live test", () => {
  it("Dev", () => {
    console.log(moji(":passport_control:"));
  });
});
