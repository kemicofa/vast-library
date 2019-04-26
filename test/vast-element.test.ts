import VastElement, { VastElementRoot } from "../src/vast-element";

const testOptions = {
  logWarn: false,
  throwOnError: true
};

// initialized just for autocomplete
let vast = new VastElement();

describe("VAST Element", () => {
  beforeEach(() => {
    vast = new VastElement();
    vast.parseOptions(testOptions);
  });
  test("should correctly create child", () => {
    vast = new VastElement("name", null, {});
    expect(vast.content).toBeNull();
    expect(vast.attrs).toEqual({});
  });
  test("should correctly create child with content", () => {
    vast = new VastElement("name", null, {}, "content");
    expect(vast.content).toBe("content");
    expect(vast.attrs).toEqual({});
  });
  test("should correctly create child with attributes", () => {
    vast = new VastElement("name", null, {}, { cool: "ok" });
    expect(vast.content).toBeNull();
    expect(vast.attrs).toEqual({ cool: "ok" });
  });
  test("should correctly create child with attributes", () => {
    vast = new VastElement("name", null, {}, "content", { cool: "ok" });
    expect(vast.content).toBe("content");
    expect(vast.attrs).toEqual({ cool: "ok" });
  });
  test("should correctly create child with infos on fields", () => {
    vast = new VastElement("name", null, { attrs: ["foo", "bar"] });
    expect(vast.infos.attrs).toEqual(["foo", "bar"]);
  });
  test("should assert object has attrs ", () => {
    expect(vast.hasAttrs()).toBe(false);
  });
  test("should assert object has attrs ", () => {
    vast = new VastElement("name", null, {}, { cool: "ok" });
    expect(vast.hasAttrs()).toBe(true);
  });
  test("should correctly return all attrs", () => {
    vast = new VastElement("name", null, { attrs: "all" }, { cool: "ok" });
    expect(vast.getValidAttrs()).toEqual({ cool: "ok" });
  });
  test("should correctly return only valid attrs", () => {
    vast = new VastElement(
      "name",
      null,
      { attrs: ["foo", "bar"] },
      { bar: "33", cool: "ok" }
    );
    vast.parseOptions(testOptions);
    expect(vast.getValidAttrs()).toEqual({ bar: "33" });
  });
  test("should correctly return only valid attrs", () => {
    vast = new VastElement(
      "name",
      null,
      { attrs: ["foo", "bar"] },
      { bar: "33", cool: "ok" }
    );
    vast.parseOptions(testOptions);
    expect(vast.getValidAttrs()).toEqual({ bar: "33" });
  });
  test("should correctly return childs filtered by name", () => {
    vast = new VastElement(
      "name",
      null,
      { attrs: ["foo", "bar"] },
      { bar: "33", cool: "ok" }
    );
    vast.parseOptions(testOptions);
    expect(vast.getValidAttrs()).toEqual({ bar: "33" });
  });
  test("should correctly return itself", () => {
    vast = new VastElementRoot();
    const whoAmI = vast.and();
    const whoAmI2 = vast.back();
    expect(whoAmI).toBe(vast);
    expect(whoAmI2).toBe(vast);
  });
  test("should correctly return parent", () => {
    const parentParent = new VastElement("name", null, {});
    const parent = new VastElement("name", parentParent, {});
    const childVast = new VastElement("name", parent, {});
    const whoAmI = childVast.and();
    const whoAmI2 = childVast.back();
    expect(whoAmI).toBe(parent);
    expect(whoAmI2).toBe(parentParent);
  });
  test("should correctly get name", () => {
    vast = new VastElement("name");
    expect(vast.getName()).toEqual("name");
    const test = vast.dangerouslyAttachCustomTag("test");
    expect(test.getName()).toEqual("test");
  });
  test("should correctly get content", () => {
    vast = new VastElement("name");
    expect(vast.getContent()).toBeNull();
    const test = vast.dangerouslyAttachCustomTag("test", "content");
    expect(test.getContent()).toBe("content");
  });
  test("should correctly get infos", () => {
    vast = new VastElement("name");
    expect(vast.getInfos()).toEqual({ attrs: [] });
  });
  test("should correctly get attribute with lowercase power", () => {
    const test = vast.dangerouslyAttachCustomTag("test", {
      id: "20",
      myKey: "test1",
      myLastKey: "test3",
      myotherkey: "test2"
    });
    expect(test.getAttr("id")).toBe("20");
    expect(test.getAttr("mykey")).toBe("test1");
    expect(test.getAttr("myOtherKey")).toBe("test2");
    expect(test.getAttr("MYLASTKEY")).toBe("test3");
  });
  test("should correctly get parent", () => {
    vast = new VastElementRoot("name");
    expect(vast.getParent()).toEqual(vast);
    const test = vast.dangerouslyAttachCustomTag("test");
    expect(test.getParent()).toEqual(vast);
  });
  test("should correctly return root", () => {
    const parentParent = new VastElement("name", null, {});
    const parent = new VastElement("name", parentParent, {});
    const childVast = new VastElement("name", parent, {});
    expect(childVast.getRoot()).toBe(parentParent);
  });
  test("should correctly return json trace on AddCustomTag", () => {
    vast.parseOptions({
      cdata: false
    });
    vast
      .dangerouslyAddCustomTag("test1")
      .dangerouslyAddCustomTag("test2", { id: "22" })
      .dangerouslyAddCustomTag("test3", "content3", { id: "33" });

    const expected = {
      test1: [],
      test2: [
        {
          _attributes: {
            id: "22"
          }
        }
      ],
      test3: [
        {
          _attributes: {
            id: "33"
          },
          _text: "content3"
        }
      ]
    };
    expect(vast.getJson()).toEqual(expected);
  });
  test("should correctly return json trace on dangerouslyAttachCustomTag", () => {
    vast.parseOptions({
      cdata: false
    });
    vast
      .dangerouslyAttachCustomTag("test1")
      .dangerouslyAttachCustomTag("test2", { id: "22" })
      .dangerouslyAttachCustomTag("test3", "content3", { id: "33" });

    const expected = {
      test1: [
        {
          test2: [
            {
              _attributes: {
                id: "22"
              },
              test3: [
                {
                  _attributes: {
                    id: "33"
                  },
                  _text: "content3"
                }
              ]
            }
          ]
        }
      ]
    };

    expect(vast.getJson()).toEqual(expected);
  });
  test("should correctly return json trace", () => {
    vast.parseOptions({
      cdata: false
    });
    vast
      .dangerouslyAddCustomTag("test1", { id: "11" })
      .dangerouslyAttachCustomTag("test2", "content2")
      .dangerouslyAttachCustomTag("test3", "content3", { id: "33" })
      .cdata();

    const expected = {
      test1: [
        {
          _attributes: {
            id: "11"
          }
        }
      ],
      test2: [
        {
          _text: "content2",
          test3: [
            {
              _attributes: {
                id: "33"
              },
              _cdata: "content3"
            }
          ]
        }
      ]
    };
    expect(vast.getJson()).toEqual(expected);
  });
  test("should return the vast version", () => {
    vast.dangerouslyAddCustomTag("VAST", { version: "44" });
    expect(vast.getVastVersion()).toBe(44);
  });
  test("should return the vast snake version", () => {
    vast.dangerouslyAddCustomTag("VAST", { version: "4.4" });
    expect(vast.getVastSnakeVersion()).toBe("4_4");
  });
  test("should return the vast code", () => {
    vast.dangerouslyAddCustomTag("VAST", "content", { version: "44" });
    expect(vast.toXml()).toContain(
      '<VAST version="44"><![CDATA[content]]></VAST>'
    );
  });
  test("should return the vast code without cdata config", () => {
    vast.parseOptions({ cdata: false });
    vast.dangerouslyAddCustomTag("VAST", "content", { version: "44" });
    expect(vast.toXml()).toContain('<VAST version="44">content</VAST>');
  });
  test("should return the vast code with forced cdata by attribute", () => {
    vast.parseOptions({ cdata: false });
    vast
      .dangerouslyAttachCustomTag("VAST", "content", { version: "44" })
      .cdata();
    expect(vast.toXml()).toContain(
      '<VAST version="44"><![CDATA[content]]></VAST>'
    );
  });
  test("should return the vast code with cdata forced recursively", () => {
    vast.parseOptions({ cdata: false });
    vast.dangerouslyAddCustomTag("VAST", "content", { version: "44" }).cdata();
    expect(vast.toXml()).toContain(
      '<VAST version="44"><![CDATA[content]]></VAST>'
    );
  });
  test("should detect wrappers", () => {
    expect(vast.isWrapper()).toBe(false);
    vast.dangerouslyAddCustomTag("Wrapper");
    expect(vast.isWrapper()).toBe(true);
  });
  test("should retreives childs searched by name", () => {
    const test11 = vast.dangerouslyAttachCustomTag("test1", { id: "11" });
    const test12 = vast.dangerouslyAttachCustomTag("test1", { id: "11" });
    const test2 = vast.dangerouslyAttachCustomTag("test2", "content2");
    const test3 = vast.dangerouslyAttachCustomTag("test3", "content3", {
      id: "33"
    });
    expect(vast.getChilds("test1")).toEqual([test11, test12]);
    expect(vast.getChilds("test2")).toEqual([test2]);
    expect(vast.getChilds("test3")).toEqual([test3]);
  });
  test("should retreives childs searched by array of names", () => {
    // 1A
    // |  \
    // 2B   3C
    // | \   | \
    // 4C 5D 6E 7B
    // | \
    // 8E 9D
    const test1 = vast.dangerouslyAttachCustomTag("tagA", { id: "1" });
    const test2 = test1.dangerouslyAttachCustomTag("tagB", { id: "2" });
    const test3 = test1.dangerouslyAttachCustomTag("tagC", { id: "3" });
    const test4 = test2.dangerouslyAttachCustomTag("tagC", { id: "4" });
    const test5 = test2.dangerouslyAttachCustomTag("tagD", { id: "5" });
    const test6 = test3.dangerouslyAttachCustomTag("tagE", { id: "6" });
    const test7 = test3.dangerouslyAttachCustomTag("tagB", { id: "7" });
    const test8 = test4.dangerouslyAttachCustomTag("tagE", "content 8", {
      id: "8"
    });
    const test9 = test4.dangerouslyAttachCustomTag("tagD", "content 9", {
      id: "9"
    });

    expect(vast.get(["tagA"])).toEqual([test1]);
    expect(vast.get(["tagE"])).toEqual([test8, test6]);
    expect(test2.get(["tagE"], false)).toEqual([test8]);
    expect(test2.get(["tagE"])).toEqual([test8, test6]);
    expect(vast.get(["tagD"])).toEqual([test9, test5]);
    expect(test3.get(["tagB"], false)).toEqual([test7]);
  });
  // test("should print a warning if trying to put cdata directly", () => {
  //   const stub = sinon.stub(VastElement.prototype, "warn");
  //   vast = new VastElement("test", null, {}, "<![CDATA[content]]>");
  //   vast.parseOptions(testOptions);
  //   expect(stub.called).toBe(true);
  //   expect(
  //     stub.calledWith("dont put CDATA item in content, use .cdata() instead")
  //   ).toBe(true);
  //   stub.restore();
  // });
  // test("should print a warning", () => {
  //   const stubWarn = sinon.stub(console, "warn");
  //   const stubError = sinon.stub(console, "error");

  //   vast.parseOptions({
  //     logWarn: true
  //   });
  //   vast.warn("something");
  //   vast.err("something");
  //   expect(stubWarn.called).toBe(true);
  //   expect(stubWarn.calledWithMatch("something")).toBe(true);
  //   expect(stubError.called).toBe(true);
  //   expect(stubError.calledWithMatch("something")).toBe(true);

  //   stubWarn.restore();
  //   stubError.restore();
  // });
  // test("should validate on build", () => {
  //   const stub = sinon.stub(VastElement.prototype, "validate");
  //   vast.parseOptions({
  //     validateOnBuild: true
  //   });
  //   vast.toXml();
  //   assert.isTrue(stub.called);
  //   stub.restore();
  // });
  test("should correctly parse options", () => {
    vast.parseOptions({
      cdata: false,
      logWarn: true,
      spaces: 24,
      throwOnError: false,
      validateOnBuild: true
    });
    expect(vast.options.cdata).toBe(false);
    expect(vast.options.logWarn).toBe(true);
    expect(vast.options.validateOnBuild).toBe(true);
    expect(vast.options.throwOnError).toBe(false);
    expect(vast.options.spaces).toBe(24);
  });
});
