import { expect } from "chai";
import { hello } from "../src/index.js";

describe("Hello world!", function () {
  it("Demo test", function () {
    expect(hello()).to.be.equal("Hello world, 1024.");
  });
});
