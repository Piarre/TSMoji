import { describe, expect, it } from "vitest";
import { Moji, getMojiByCode, getMojiByName, getMojiDescription } from "../src/index"

describe('Moji from "src/" folder', () => {
  it("Get Moji by Code and Name", () => {
    expect(Moji(":zap:", "Hello World")).toBe("⚡️ Hello World");
    expect(Moji(":art:", "Hello World")).toBe("🎨 Hello World");

    expect(Moji("zap", "Hello World")).toBe("⚡️ Hello World");
    expect(Moji("art", "Hello World")).toBe("🎨 Hello World");
  });

  it("Get Moji By Code", () => {
    expect(getMojiByCode(":zap:")).toBe("⚡️");
    expect(getMojiByCode(":art:")).toBe("🎨");
  });

  it("Get Moji By Name", () => {
    expect(getMojiByName("zap")).toBe("⚡️");
    expect(getMojiByName("art")).toBe("🎨");
  });

  it("Get Moji Description", () => {
    expect(getMojiDescription("zap")).toBe("Improve performance.");
    expect(getMojiDescription("art")).toBe("Improve structure / format of the code.");

    expect(getMojiDescription(":zap:")).toBe("Improve performance.");
    expect(getMojiDescription(":art:")).toBe("Improve structure / format of the code.");
  });
});
