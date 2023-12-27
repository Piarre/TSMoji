import { describe, expect, it } from "vitest";
import { moji } from "../dist";

describe('Moji from "src/" folder', () => {
  it("Get Moji by Code and Name", () => {
    expect(moji(":zap:").emoji).toBe("⚡️");
    expect(moji(":art:").emoji).toBe("🎨");

    expect(moji("zap").emoji).toBe("⚡️");
    expect(moji("art").emoji).toBe("🎨");
  });

  it("Get Moji Description", () => {
    expect(moji("zap").description).toBe("Improve performance.");
    expect(moji("art").description).toBe("Improve structure / format of the code.");

    expect(moji(":zap:").description).toBe("Improve performance.");
    expect(moji(":art:").description).toBe("Improve structure / format of the code.");
  });
});