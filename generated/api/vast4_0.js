/* tslint:disable: class-name object-literal-sort-keys */
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b;
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
(function(factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    var v = factory(require, exports);
    if (v !== undefined) module.exports = v;
  } else if (typeof define === "function" && define.amd) {
    define(["require", "exports", "../../src/vast-element"], factory);
  }
})(function(require, exports) {
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  ///////////////////////////////////////////////////////
  //  IMPORTANT: this file is generated, dont edit it
  /////////
  var vast_element_1 = require("../../src/vast-element");
  function p(newElem) {
    newElem.parent.childs.push(newElem);
    return newElem;
  }
  var Error_5 = /** @class */ (function(_super) {
    __extends(Error_5, _super);
    function Error_5() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Error_5;
  })(vast_element_1.default);
  var AdSystem_8 = /** @class */ (function(_super) {
    __extends(AdSystem_8, _super);
    function AdSystem_8() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return AdSystem_8;
  })(vast_element_1.default);
  var AdTitle_9 = /** @class */ (function(_super) {
    __extends(AdTitle_9, _super);
    function AdTitle_9() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return AdTitle_9;
  })(vast_element_1.default);
  var Impression_10 = /** @class */ (function(_super) {
    __extends(Impression_10, _super);
    function Impression_10() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Impression_10;
  })(vast_element_1.default);
  var Category_11 = /** @class */ (function(_super) {
    __extends(Category_11, _super);
    function Category_11() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Category_11;
  })(vast_element_1.default);
  var Description_12 = /** @class */ (function(_super) {
    __extends(Description_12, _super);
    function Description_12() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Description_12;
  })(vast_element_1.default);
  var Advertiser_13 = /** @class */ (function(_super) {
    __extends(Advertiser_13, _super);
    function Advertiser_13() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Advertiser_13;
  })(vast_element_1.default);
  var Pricing_14 = /** @class */ (function(_super) {
    __extends(Pricing_14, _super);
    function Pricing_14() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Pricing_14;
  })(vast_element_1.default);
  var Survey_15 = /** @class */ (function(_super) {
    __extends(Survey_15, _super);
    function Survey_15() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Survey_15;
  })(vast_element_1.default);
  var Error_16 = /** @class */ (function(_super) {
    __extends(Error_16, _super);
    function Error_16() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Error_16;
  })(vast_element_1.default);
  var Viewable_18 = /** @class */ (function(_super) {
    __extends(Viewable_18, _super);
    function Viewable_18() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Viewable_18;
  })(vast_element_1.default);
  var NotViewable_19 = /** @class */ (function(_super) {
    __extends(NotViewable_19, _super);
    function NotViewable_19() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return NotViewable_19;
  })(vast_element_1.default);
  var ViewUndetermined_20 = /** @class */ (function(_super) {
    __extends(ViewUndetermined_20, _super);
    function ViewUndetermined_20() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return ViewUndetermined_20;
  })(vast_element_1.default);
  var ViewableImpression_17 = /** @class */ (function(_super) {
    __extends(ViewableImpression_17, _super);
    function ViewableImpression_17() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    ViewableImpression_17.prototype.attachViewable = function(content) {
      return p(new Viewable_18("Viewable", this, {}, content));
    };
    ViewableImpression_17.prototype.addViewable = function(content) {
      return this.attachViewable(content).and();
    };
    ViewableImpression_17.prototype.attachNotViewable = function(content) {
      return p(new NotViewable_19("NotViewable", this, {}, content));
    };
    ViewableImpression_17.prototype.addNotViewable = function(content) {
      return this.attachNotViewable(content).and();
    };
    ViewableImpression_17.prototype.attachViewUndetermined = function(content) {
      return p(new ViewUndetermined_20("ViewUndetermined", this, {}, content));
    };
    ViewableImpression_17.prototype.addViewUndetermined = function(content) {
      return this.attachViewUndetermined(content).and();
    };
    return ViewableImpression_17;
  })(vast_element_1.default);
  var JavaScriptResource_23 = /** @class */ (function(_super) {
    __extends(JavaScriptResource_23, _super);
    function JavaScriptResource_23() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return JavaScriptResource_23;
  })(vast_element_1.default);
  var FlashResource_24 = /** @class */ (function(_super) {
    __extends(FlashResource_24, _super);
    function FlashResource_24() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return FlashResource_24;
  })(vast_element_1.default);
  var ViewableImpression_25 = /** @class */ (function(_super) {
    __extends(ViewableImpression_25, _super);
    function ViewableImpression_25() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return ViewableImpression_25;
  })(vast_element_1.default);
  var Verification_22 = /** @class */ (function(_super) {
    __extends(Verification_22, _super);
    function Verification_22() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Verification_22.prototype.attachJavaScriptResource = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new JavaScriptResource_23(
          "JavaScriptResource",
          this,
          { attrs: ["apiFramework"] },
          content,
          attributes
        )
      );
    };
    Verification_22.prototype.addJavaScriptResource = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachJavaScriptResource(content, attributes).and();
    };
    Verification_22.prototype.attachFlashResource = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new FlashResource_24(
          "FlashResource",
          this,
          { attrs: ["apiFramework"] },
          content,
          attributes
        )
      );
    };
    Verification_22.prototype.addFlashResource = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachFlashResource(content, attributes).and();
    };
    Verification_22.prototype.attachViewableImpression = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new ViewableImpression_25(
          "ViewableImpression",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    Verification_22.prototype.addViewableImpression = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachViewableImpression(content, attributes).and();
    };
    return Verification_22;
  })(vast_element_1.default);
  var AdVerifications_21 = /** @class */ (function(_super) {
    __extends(AdVerifications_21, _super);
    function AdVerifications_21() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    AdVerifications_21.prototype.attachVerification = function(attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Verification_22(
          "Verification",
          this,
          { attrs: ["vendor"] },
          attributes
        )
      );
    };
    return AdVerifications_21;
  })(vast_element_1.default);
  var Extension_27 = /** @class */ (function(_super) {
    __extends(Extension_27, _super);
    function Extension_27() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Extension_27;
  })(vast_element_1.default);
  var Extensions_26 = /** @class */ (function(_super) {
    __extends(Extensions_26, _super);
    function Extensions_26() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Extensions_26.prototype.attachExtension = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Extension_27(
          "Extension",
          this,
          { attrs: ["type"] },
          content,
          attributes
        )
      );
    };
    Extensions_26.prototype.addExtension = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachExtension(content, attributes).and();
    };
    return Extensions_26;
  })(vast_element_1.default);
  var UniversalAdId_30 = /** @class */ (function(_super) {
    __extends(UniversalAdId_30, _super);
    function UniversalAdId_30() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return UniversalAdId_30;
  })(vast_element_1.default);
  var CreativeExtension_32 = /** @class */ (function(_super) {
    __extends(CreativeExtension_32, _super);
    function CreativeExtension_32() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return CreativeExtension_32;
  })(vast_element_1.default);
  var CreativeExtensions_31 = /** @class */ (function(_super) {
    __extends(CreativeExtensions_31, _super);
    function CreativeExtensions_31() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    CreativeExtensions_31.prototype.attachCreativeExtension = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new CreativeExtension_32(
          "CreativeExtension",
          this,
          { attrs: ["type"] },
          content,
          attributes
        )
      );
    };
    CreativeExtensions_31.prototype.addCreativeExtension = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachCreativeExtension(content, attributes).and();
    };
    return CreativeExtensions_31;
  })(vast_element_1.default);
  var Duration_34 = /** @class */ (function(_super) {
    __extends(Duration_34, _super);
    function Duration_34() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Duration_34;
  })(vast_element_1.default);
  var AdParameters_35 = /** @class */ (function(_super) {
    __extends(AdParameters_35, _super);
    function AdParameters_35() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return AdParameters_35;
  })(vast_element_1.default);
  var Mezzanine_37 = /** @class */ (function(_super) {
    __extends(Mezzanine_37, _super);
    function Mezzanine_37() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Mezzanine_37;
  })(vast_element_1.default);
  var MediaFile_38 = /** @class */ (function(_super) {
    __extends(MediaFile_38, _super);
    function MediaFile_38() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return MediaFile_38;
  })(vast_element_1.default);
  var InteractiveCreativeFile_39 = /** @class */ (function(_super) {
    __extends(InteractiveCreativeFile_39, _super);
    function InteractiveCreativeFile_39() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return InteractiveCreativeFile_39;
  })(vast_element_1.default);
  var MediaFiles_36 = /** @class */ (function(_super) {
    __extends(MediaFiles_36, _super);
    function MediaFiles_36() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    MediaFiles_36.prototype.attachMezzanine = function(content) {
      return p(new Mezzanine_37("Mezzanine", this, {}, content));
    };
    MediaFiles_36.prototype.addMezzanine = function(content) {
      return this.attachMezzanine(content).and();
    };
    MediaFiles_36.prototype.attachMediaFile = function(content, attributes) {
      return p(
        new MediaFile_38(
          "MediaFile",
          this,
          {
            attrs: [
              "id",
              "delivery",
              "type",
              "bitrate",
              "minBitrate",
              "maxBitrate",
              "width",
              "height",
              "scalable",
              "mantainAspectRatio",
              "codec",
              "apiFramework"
            ]
          },
          content,
          attributes
        )
      );
    };
    MediaFiles_36.prototype.addMediaFile = function(content, attributes) {
      return this.attachMediaFile(content, attributes).and();
    };
    MediaFiles_36.prototype.attachInteractiveCreativeFile = function(content) {
      return p(
        new InteractiveCreativeFile_39(
          "InteractiveCreativeFile",
          this,
          {},
          content
        )
      );
    };
    MediaFiles_36.prototype.addInteractiveCreativeFile = function(content) {
      return this.attachInteractiveCreativeFile(content).and();
    };
    return MediaFiles_36;
  })(vast_element_1.default);
  var ClickThrough_41 = /** @class */ (function(_super) {
    __extends(ClickThrough_41, _super);
    function ClickThrough_41() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return ClickThrough_41;
  })(vast_element_1.default);
  var ClickTracking_42 = /** @class */ (function(_super) {
    __extends(ClickTracking_42, _super);
    function ClickTracking_42() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return ClickTracking_42;
  })(vast_element_1.default);
  var CustomClick_43 = /** @class */ (function(_super) {
    __extends(CustomClick_43, _super);
    function CustomClick_43() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return CustomClick_43;
  })(vast_element_1.default);
  var VideoClicks_40 = /** @class */ (function(_super) {
    __extends(VideoClicks_40, _super);
    function VideoClicks_40() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    VideoClicks_40.prototype.attachClickThrough = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new ClickThrough_41(
          "ClickThrough",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    VideoClicks_40.prototype.addClickThrough = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachClickThrough(content, attributes).and();
    };
    VideoClicks_40.prototype.attachClickTracking = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new ClickTracking_42(
          "ClickTracking",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    VideoClicks_40.prototype.addClickTracking = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachClickTracking(content, attributes).and();
    };
    VideoClicks_40.prototype.attachCustomClick = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new CustomClick_43(
          "CustomClick",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    VideoClicks_40.prototype.addCustomClick = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachCustomClick(content, attributes).and();
    };
    return VideoClicks_40;
  })(vast_element_1.default);
  var Tracking_45 = /** @class */ (function(_super) {
    __extends(Tracking_45, _super);
    function Tracking_45() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Tracking_45;
  })(vast_element_1.default);
  var TrackingEvents_44 = /** @class */ (function(_super) {
    __extends(TrackingEvents_44, _super);
    function TrackingEvents_44() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    TrackingEvents_44.prototype.attachTracking = function(content, attributes) {
      return p(
        new Tracking_45(
          "Tracking",
          this,
          { attrs: ["offset", "event"] },
          content,
          attributes
        )
      );
    };
    TrackingEvents_44.prototype.addTracking = function(content, attributes) {
      return this.attachTracking(content, attributes).and();
    };
    return TrackingEvents_44;
  })(vast_element_1.default);
  var StaticResource_48 = /** @class */ (function(_super) {
    __extends(StaticResource_48, _super);
    function StaticResource_48() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return StaticResource_48;
  })(vast_element_1.default);
  var IFrameResource_49 = /** @class */ (function(_super) {
    __extends(IFrameResource_49, _super);
    function IFrameResource_49() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IFrameResource_49;
  })(vast_element_1.default);
  var HTMLResource_50 = /** @class */ (function(_super) {
    __extends(HTMLResource_50, _super);
    function HTMLResource_50() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return HTMLResource_50;
  })(vast_element_1.default);
  var IconClickThrough_52 = /** @class */ (function(_super) {
    __extends(IconClickThrough_52, _super);
    function IconClickThrough_52() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IconClickThrough_52;
  })(vast_element_1.default);
  var IconClickTracking_53 = /** @class */ (function(_super) {
    __extends(IconClickTracking_53, _super);
    function IconClickTracking_53() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IconClickTracking_53;
  })(vast_element_1.default);
  var IconClicks_51 = /** @class */ (function(_super) {
    __extends(IconClicks_51, _super);
    function IconClicks_51() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    IconClicks_51.prototype.attachIconClickThrough = function(content) {
      return p(new IconClickThrough_52("IconClickThrough", this, {}, content));
    };
    IconClicks_51.prototype.addIconClickThrough = function(content) {
      return this.attachIconClickThrough(content).and();
    };
    IconClicks_51.prototype.attachIconClickTracking = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new IconClickTracking_53(
          "IconClickTracking",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    IconClicks_51.prototype.addIconClickTracking = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachIconClickTracking(content, attributes).and();
    };
    return IconClicks_51;
  })(vast_element_1.default);
  var IconViewTracking_54 = /** @class */ (function(_super) {
    __extends(IconViewTracking_54, _super);
    function IconViewTracking_54() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IconViewTracking_54;
  })(vast_element_1.default);
  var Icon_47 = /** @class */ (function(_super) {
    __extends(Icon_47, _super);
    function Icon_47() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Icon_47.prototype.attachStaticResource = function(content, attributes) {
      return p(
        new StaticResource_48(
          "StaticResource",
          this,
          { attrs: ["creativeType"] },
          content,
          attributes
        )
      );
    };
    Icon_47.prototype.addStaticResource = function(content, attributes) {
      return this.attachStaticResource(content, attributes).and();
    };
    Icon_47.prototype.attachIFrameResource = function(content) {
      return p(new IFrameResource_49("IFrameResource", this, {}, content));
    };
    Icon_47.prototype.addIFrameResource = function(content) {
      return this.attachIFrameResource(content).and();
    };
    Icon_47.prototype.attachHTMLResource = function(content) {
      return p(new HTMLResource_50("HTMLResource", this, {}, content));
    };
    Icon_47.prototype.addHTMLResource = function(content) {
      return this.attachHTMLResource(content).and();
    };
    Icon_47.prototype.attachIconClicks = function() {
      return p(new IconClicks_51("IconClicks", this, {}));
    };
    Icon_47.prototype.attachIconViewTracking = function(content) {
      return p(new IconViewTracking_54("IconViewTracking", this, {}, content));
    };
    Icon_47.prototype.addIconViewTracking = function(content) {
      return this.attachIconViewTracking(content).and();
    };
    return Icon_47;
  })(vast_element_1.default);
  var Icons_46 = /** @class */ (function(_super) {
    __extends(Icons_46, _super);
    function Icons_46() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Icons_46.prototype.attachIcon = function(attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Icon_47(
          "Icon",
          this,
          {
            attrs: [
              "program",
              "width",
              "height",
              "xPosition",
              "yPosition",
              "duration",
              "offset",
              "apiFramework",
              "pxratio"
            ]
          },
          attributes
        )
      );
    };
    return Icons_46;
  })(vast_element_1.default);
  var Linear_33 = /** @class */ (function(_super) {
    __extends(Linear_33, _super);
    function Linear_33() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Linear_33.prototype.attachDuration = function(content) {
      return p(new Duration_34("Duration", this, {}, content));
    };
    Linear_33.prototype.addDuration = function(content) {
      return this.attachDuration(content).and();
    };
    Linear_33.prototype.attachAdParameters = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new AdParameters_35(
          "AdParameters",
          this,
          { attrs: ["xmlEncoded"] },
          content,
          attributes
        )
      );
    };
    Linear_33.prototype.addAdParameters = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachAdParameters(content, attributes).and();
    };
    Linear_33.prototype.attachMediaFiles = function() {
      return p(new MediaFiles_36("MediaFiles", this, {}));
    };
    Linear_33.prototype.attachVideoClicks = function() {
      return p(new VideoClicks_40("VideoClicks", this, {}));
    };
    Linear_33.prototype.attachTrackingEvents = function() {
      return p(new TrackingEvents_44("TrackingEvents", this, {}));
    };
    Linear_33.prototype.attachIcons = function() {
      return p(new Icons_46("Icons", this, {}));
    };
    return Linear_33;
  })(vast_element_1.default);
  var NonLinearClickThrough_57 = /** @class */ (function(_super) {
    __extends(NonLinearClickThrough_57, _super);
    function NonLinearClickThrough_57() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return NonLinearClickThrough_57;
  })(vast_element_1.default);
  var NonLinearClickTracking_58 = /** @class */ (function(_super) {
    __extends(NonLinearClickTracking_58, _super);
    function NonLinearClickTracking_58() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return NonLinearClickTracking_58;
  })(vast_element_1.default);
  var NonLinear_56 = /** @class */ (function(_super) {
    __extends(NonLinear_56, _super);
    function NonLinear_56() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    NonLinear_56.prototype.attachNonLinearClickThrough = function(content) {
      return p(
        new NonLinearClickThrough_57("NonLinearClickThrough", this, {}, content)
      );
    };
    NonLinear_56.prototype.addNonLinearClickThrough = function(content) {
      return this.attachNonLinearClickThrough(content).and();
    };
    NonLinear_56.prototype.attachNonLinearClickTracking = function(content) {
      return p(
        new NonLinearClickTracking_58(
          "NonLinearClickTracking",
          this,
          {},
          content
        )
      );
    };
    NonLinear_56.prototype.addNonLinearClickTracking = function(content) {
      return this.attachNonLinearClickTracking(content).and();
    };
    return NonLinear_56;
  })(vast_element_1.default);
  var Tracking_60 = /** @class */ (function(_super) {
    __extends(Tracking_60, _super);
    function Tracking_60() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Tracking_60;
  })(vast_element_1.default);
  var TrackingEvents_59 = /** @class */ (function(_super) {
    __extends(TrackingEvents_59, _super);
    function TrackingEvents_59() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    TrackingEvents_59.prototype.attachTracking = function(content, attributes) {
      return p(
        new Tracking_60(
          "Tracking",
          this,
          { attrs: ["event"] },
          content,
          attributes
        )
      );
    };
    TrackingEvents_59.prototype.addTracking = function(content, attributes) {
      return this.attachTracking(content, attributes).and();
    };
    return TrackingEvents_59;
  })(vast_element_1.default);
  var NonLinearAds_55 = /** @class */ (function(_super) {
    __extends(NonLinearAds_55, _super);
    function NonLinearAds_55() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    NonLinearAds_55.prototype.attachNonLinear = function(attributes) {
      return p(
        new NonLinear_56(
          "NonLinear",
          this,
          {
            attrs: [
              "id",
              "width",
              "height",
              "expandedWidth",
              "expandedHeight",
              "scalable",
              "maintainAspectRatio",
              "minSuggestedDuration",
              "apiFramework"
            ]
          },
          attributes
        )
      );
    };
    NonLinearAds_55.prototype.attachTrackingEvents = function() {
      return p(new TrackingEvents_59("TrackingEvents", this, {}));
    };
    return NonLinearAds_55;
  })(vast_element_1.default);
  var StaticResource_63 = /** @class */ (function(_super) {
    __extends(StaticResource_63, _super);
    function StaticResource_63() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return StaticResource_63;
  })(vast_element_1.default);
  var IFrameResource_64 = /** @class */ (function(_super) {
    __extends(IFrameResource_64, _super);
    function IFrameResource_64() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IFrameResource_64;
  })(vast_element_1.default);
  var HTMLResource_65 = /** @class */ (function(_super) {
    __extends(HTMLResource_65, _super);
    function HTMLResource_65() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return HTMLResource_65;
  })(vast_element_1.default);
  var AdParameters_66 = /** @class */ (function(_super) {
    __extends(AdParameters_66, _super);
    function AdParameters_66() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return AdParameters_66;
  })(vast_element_1.default);
  var AltText_67 = /** @class */ (function(_super) {
    __extends(AltText_67, _super);
    function AltText_67() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return AltText_67;
  })(vast_element_1.default);
  var CompanionClickThrough_68 = /** @class */ (function(_super) {
    __extends(CompanionClickThrough_68, _super);
    function CompanionClickThrough_68() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return CompanionClickThrough_68;
  })(vast_element_1.default);
  var CompanionClickTracking_69 = /** @class */ (function(_super) {
    __extends(CompanionClickTracking_69, _super);
    function CompanionClickTracking_69() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return CompanionClickTracking_69;
  })(vast_element_1.default);
  var Tracking_71 = /** @class */ (function(_super) {
    __extends(Tracking_71, _super);
    function Tracking_71() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Tracking_71;
  })(vast_element_1.default);
  var TrackingEvents_70 = /** @class */ (function(_super) {
    __extends(TrackingEvents_70, _super);
    function TrackingEvents_70() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    TrackingEvents_70.prototype.attachTracking = function(content, attributes) {
      return p(
        new Tracking_71(
          "Tracking",
          this,
          { attrs: ["event"] },
          content,
          attributes
        )
      );
    };
    TrackingEvents_70.prototype.addTracking = function(content, attributes) {
      return this.attachTracking(content, attributes).and();
    };
    return TrackingEvents_70;
  })(vast_element_1.default);
  var Companion_62 = /** @class */ (function(_super) {
    __extends(Companion_62, _super);
    function Companion_62() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Companion_62.prototype.attachStaticResource = function(
      content,
      attributes
    ) {
      return p(
        new StaticResource_63(
          "StaticResource",
          this,
          { attrs: ["creativeType"] },
          content,
          attributes
        )
      );
    };
    Companion_62.prototype.addStaticResource = function(content, attributes) {
      return this.attachStaticResource(content, attributes).and();
    };
    Companion_62.prototype.attachIFrameResource = function(content) {
      return p(new IFrameResource_64("IFrameResource", this, {}, content));
    };
    Companion_62.prototype.addIFrameResource = function(content) {
      return this.attachIFrameResource(content).and();
    };
    Companion_62.prototype.attachHTMLResource = function(content) {
      return p(new HTMLResource_65("HTMLResource", this, {}, content));
    };
    Companion_62.prototype.addHTMLResource = function(content) {
      return this.attachHTMLResource(content).and();
    };
    Companion_62.prototype.attachAdParameters = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new AdParameters_66(
          "AdParameters",
          this,
          { attrs: ["xmlEncoded"] },
          content,
          attributes
        )
      );
    };
    Companion_62.prototype.addAdParameters = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachAdParameters(content, attributes).and();
    };
    Companion_62.prototype.attachAltText = function(content) {
      return p(new AltText_67("AltText", this, {}, content));
    };
    Companion_62.prototype.addAltText = function(content) {
      return this.attachAltText(content).and();
    };
    Companion_62.prototype.attachCompanionClickThrough = function(content) {
      return p(
        new CompanionClickThrough_68("CompanionClickThrough", this, {}, content)
      );
    };
    Companion_62.prototype.addCompanionClickThrough = function(content) {
      return this.attachCompanionClickThrough(content).and();
    };
    Companion_62.prototype.attachCompanionClickTracking = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new CompanionClickTracking_69(
          "CompanionClickTracking",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    Companion_62.prototype.addCompanionClickTracking = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachCompanionClickTracking(content, attributes).and();
    };
    Companion_62.prototype.attachTrackingEvents = function() {
      return p(new TrackingEvents_70("TrackingEvents", this, {}));
    };
    return Companion_62;
  })(vast_element_1.default);
  var CompanionAds_61 = /** @class */ (function(_super) {
    __extends(CompanionAds_61, _super);
    function CompanionAds_61() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    CompanionAds_61.prototype.attachCompanion = function(attributes) {
      return p(
        new Companion_62(
          "Companion",
          this,
          {
            attrs: [
              "id",
              "width",
              "height",
              "assetWidth",
              "assetHeight",
              "expandedWidth",
              "expandedHeight",
              "apiFramework",
              "adSlotID",
              "pxratio"
            ]
          },
          attributes
        )
      );
    };
    return CompanionAds_61;
  })(vast_element_1.default);
  var Creative_29 = /** @class */ (function(_super) {
    __extends(Creative_29, _super);
    function Creative_29() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Creative_29.prototype.attachUniversalAdId = function(content, attributes) {
      return p(
        new UniversalAdId_30(
          "UniversalAdId",
          this,
          { attrs: ["idRegistry", "idValue"] },
          content,
          attributes
        )
      );
    };
    Creative_29.prototype.addUniversalAdId = function(content, attributes) {
      return this.attachUniversalAdId(content, attributes).and();
    };
    Creative_29.prototype.attachCreativeExtensions = function() {
      return p(new CreativeExtensions_31("CreativeExtensions", this, {}));
    };
    Creative_29.prototype.attachLinear = function(attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Linear_33("Linear", this, { attrs: ["skipoffset"] }, attributes)
      );
    };
    Creative_29.prototype.attachNonLinearAds = function() {
      return p(new NonLinearAds_55("NonLinearAds", this, {}));
    };
    Creative_29.prototype.attachCompanionAds = function(attributes) {
      return p(
        new CompanionAds_61(
          "CompanionAds",
          this,
          { attrs: ["required"] },
          attributes
        )
      );
    };
    return Creative_29;
  })(vast_element_1.default);
  var Creatives_28 = /** @class */ (function(_super) {
    __extends(Creatives_28, _super);
    function Creatives_28() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Creatives_28.prototype.attachCreative = function(attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Creative_29(
          "Creative",
          this,
          { attrs: ["id", "sequence", "adId", "apiFramework"] },
          attributes
        )
      );
    };
    return Creatives_28;
  })(vast_element_1.default);
  var InLine_7 = /** @class */ (function(_super) {
    __extends(InLine_7, _super);
    function InLine_7() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    InLine_7.prototype.attachAdSystem = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new AdSystem_8(
          "AdSystem",
          this,
          { attrs: ["version"] },
          content,
          attributes
        )
      );
    };
    InLine_7.prototype.addAdSystem = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachAdSystem(content, attributes).and();
    };
    InLine_7.prototype.attachAdTitle = function(content) {
      return p(new AdTitle_9("AdTitle", this, {}, content));
    };
    InLine_7.prototype.addAdTitle = function(content) {
      return this.attachAdTitle(content).and();
    };
    InLine_7.prototype.attachImpression = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Impression_10(
          "Impression",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    InLine_7.prototype.addImpression = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachImpression(content, attributes).and();
    };
    InLine_7.prototype.attachCategory = function(content, attributes) {
      return p(
        new Category_11(
          "Category",
          this,
          { attrs: ["authority"] },
          content,
          attributes
        )
      );
    };
    InLine_7.prototype.addCategory = function(content, attributes) {
      return this.attachCategory(content, attributes).and();
    };
    InLine_7.prototype.attachDescription = function(content) {
      return p(new Description_12("Description", this, {}, content));
    };
    InLine_7.prototype.addDescription = function(content) {
      return this.attachDescription(content).and();
    };
    InLine_7.prototype.attachAdvertiser = function(content) {
      return p(new Advertiser_13("Advertiser", this, {}, content));
    };
    InLine_7.prototype.addAdvertiser = function(content) {
      return this.attachAdvertiser(content).and();
    };
    InLine_7.prototype.attachPricing = function(content, attributes) {
      return p(
        new Pricing_14(
          "Pricing",
          this,
          { attrs: ["currency", "model"] },
          content,
          attributes
        )
      );
    };
    InLine_7.prototype.addPricing = function(content, attributes) {
      return this.attachPricing(content, attributes).and();
    };
    InLine_7.prototype.attachSurvey = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Survey_15("Survey", this, { attrs: ["type"] }, content, attributes)
      );
    };
    InLine_7.prototype.addSurvey = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachSurvey(content, attributes).and();
    };
    InLine_7.prototype.attachError = function(content) {
      return p(new Error_16("Error", this, {}, content));
    };
    InLine_7.prototype.addError = function(content) {
      return this.attachError(content).and();
    };
    InLine_7.prototype.attachViewableImpression = function(attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new ViewableImpression_17(
          "ViewableImpression",
          this,
          { attrs: ["id"] },
          attributes
        )
      );
    };
    InLine_7.prototype.attachAdVerifications = function() {
      return p(new AdVerifications_21("AdVerifications", this, {}));
    };
    InLine_7.prototype.attachExtensions = function() {
      return p(new Extensions_26("Extensions", this, {}));
    };
    InLine_7.prototype.attachCreatives = function() {
      return p(new Creatives_28("Creatives", this, {}));
    };
    return InLine_7;
  })(vast_element_1.default);
  var Impression_73 = /** @class */ (function(_super) {
    __extends(Impression_73, _super);
    function Impression_73() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Impression_73;
  })(vast_element_1.default);
  var VASTAdTagURI_74 = /** @class */ (function(_super) {
    __extends(VASTAdTagURI_74, _super);
    function VASTAdTagURI_74() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return VASTAdTagURI_74;
  })(vast_element_1.default);
  var AdSystem_75 = /** @class */ (function(_super) {
    __extends(AdSystem_75, _super);
    function AdSystem_75() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return AdSystem_75;
  })(vast_element_1.default);
  var Pricing_76 = /** @class */ (function(_super) {
    __extends(Pricing_76, _super);
    function Pricing_76() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Pricing_76;
  })(vast_element_1.default);
  var Error_77 = /** @class */ (function(_super) {
    __extends(Error_77, _super);
    function Error_77() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Error_77;
  })(vast_element_1.default);
  var Viewable_79 = /** @class */ (function(_super) {
    __extends(Viewable_79, _super);
    function Viewable_79() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Viewable_79;
  })(vast_element_1.default);
  var NotViewable_80 = /** @class */ (function(_super) {
    __extends(NotViewable_80, _super);
    function NotViewable_80() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return NotViewable_80;
  })(vast_element_1.default);
  var ViewUndetermined_81 = /** @class */ (function(_super) {
    __extends(ViewUndetermined_81, _super);
    function ViewUndetermined_81() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return ViewUndetermined_81;
  })(vast_element_1.default);
  var ViewableImpression_78 = /** @class */ (function(_super) {
    __extends(ViewableImpression_78, _super);
    function ViewableImpression_78() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    ViewableImpression_78.prototype.attachViewable = function(content) {
      return p(new Viewable_79("Viewable", this, {}, content));
    };
    ViewableImpression_78.prototype.addViewable = function(content) {
      return this.attachViewable(content).and();
    };
    ViewableImpression_78.prototype.attachNotViewable = function(content) {
      return p(new NotViewable_80("NotViewable", this, {}, content));
    };
    ViewableImpression_78.prototype.addNotViewable = function(content) {
      return this.attachNotViewable(content).and();
    };
    ViewableImpression_78.prototype.attachViewUndetermined = function(content) {
      return p(new ViewUndetermined_81("ViewUndetermined", this, {}, content));
    };
    ViewableImpression_78.prototype.addViewUndetermined = function(content) {
      return this.attachViewUndetermined(content).and();
    };
    return ViewableImpression_78;
  })(vast_element_1.default);
  var ViewableImpression_84 = /** @class */ (function(_super) {
    __extends(ViewableImpression_84, _super);
    function ViewableImpression_84() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return ViewableImpression_84;
  })(vast_element_1.default);
  var Verification_83 = /** @class */ (function(_super) {
    __extends(Verification_83, _super);
    function Verification_83() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Verification_83.prototype.attachViewableImpression = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new ViewableImpression_84(
          "ViewableImpression",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    Verification_83.prototype.addViewableImpression = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachViewableImpression(content, attributes).and();
    };
    return Verification_83;
  })(vast_element_1.default);
  var AdVerifications_82 = /** @class */ (function(_super) {
    __extends(AdVerifications_82, _super);
    function AdVerifications_82() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    AdVerifications_82.prototype.attachVerification = function(attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Verification_83(
          "Verification",
          this,
          { attrs: ["vendor"] },
          attributes
        )
      );
    };
    return AdVerifications_82;
  })(vast_element_1.default);
  var Extension_86 = /** @class */ (function(_super) {
    __extends(Extension_86, _super);
    function Extension_86() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Extension_86;
  })(vast_element_1.default);
  var Extensions_85 = /** @class */ (function(_super) {
    __extends(Extensions_85, _super);
    function Extensions_85() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Extensions_85.prototype.attachExtension = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Extension_86(
          "Extension",
          this,
          { attrs: ["type"] },
          content,
          attributes
        )
      );
    };
    Extensions_85.prototype.addExtension = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachExtension(content, attributes).and();
    };
    return Extensions_85;
  })(vast_element_1.default);
  var Tracking_91 = /** @class */ (function(_super) {
    __extends(Tracking_91, _super);
    function Tracking_91() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Tracking_91;
  })(vast_element_1.default);
  var TrackingEvents_90 = /** @class */ (function(_super) {
    __extends(TrackingEvents_90, _super);
    function TrackingEvents_90() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    TrackingEvents_90.prototype.attachTracking = function(content, attributes) {
      return p(
        new Tracking_91(
          "Tracking",
          this,
          { attrs: ["offset", "event"] },
          content,
          attributes
        )
      );
    };
    TrackingEvents_90.prototype.addTracking = function(content, attributes) {
      return this.attachTracking(content, attributes).and();
    };
    return TrackingEvents_90;
  })(vast_element_1.default);
  var ClickTracking_93 = /** @class */ (function(_super) {
    __extends(ClickTracking_93, _super);
    function ClickTracking_93() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return ClickTracking_93;
  })(vast_element_1.default);
  var CustomClick_94 = /** @class */ (function(_super) {
    __extends(CustomClick_94, _super);
    function CustomClick_94() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return CustomClick_94;
  })(vast_element_1.default);
  var VideoClicks_92 = /** @class */ (function(_super) {
    __extends(VideoClicks_92, _super);
    function VideoClicks_92() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    VideoClicks_92.prototype.attachClickTracking = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new ClickTracking_93(
          "ClickTracking",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    VideoClicks_92.prototype.addClickTracking = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachClickTracking(content, attributes).and();
    };
    VideoClicks_92.prototype.attachCustomClick = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new CustomClick_94(
          "CustomClick",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    VideoClicks_92.prototype.addCustomClick = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachCustomClick(content, attributes).and();
    };
    return VideoClicks_92;
  })(vast_element_1.default);
  var StaticResource_97 = /** @class */ (function(_super) {
    __extends(StaticResource_97, _super);
    function StaticResource_97() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return StaticResource_97;
  })(vast_element_1.default);
  var IFrameResource_98 = /** @class */ (function(_super) {
    __extends(IFrameResource_98, _super);
    function IFrameResource_98() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IFrameResource_98;
  })(vast_element_1.default);
  var HTMLResource_99 = /** @class */ (function(_super) {
    __extends(HTMLResource_99, _super);
    function HTMLResource_99() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return HTMLResource_99;
  })(vast_element_1.default);
  var IconClickThrough_101 = /** @class */ (function(_super) {
    __extends(IconClickThrough_101, _super);
    function IconClickThrough_101() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IconClickThrough_101;
  })(vast_element_1.default);
  var IconClickTracking_102 = /** @class */ (function(_super) {
    __extends(IconClickTracking_102, _super);
    function IconClickTracking_102() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IconClickTracking_102;
  })(vast_element_1.default);
  var IconClicks_100 = /** @class */ (function(_super) {
    __extends(IconClicks_100, _super);
    function IconClicks_100() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    IconClicks_100.prototype.attachIconClickThrough = function(content) {
      return p(new IconClickThrough_101("IconClickThrough", this, {}, content));
    };
    IconClicks_100.prototype.addIconClickThrough = function(content) {
      return this.attachIconClickThrough(content).and();
    };
    IconClicks_100.prototype.attachIconClickTracking = function(content) {
      return p(
        new IconClickTracking_102("IconClickTracking", this, {}, content)
      );
    };
    IconClicks_100.prototype.addIconClickTracking = function(content) {
      return this.attachIconClickTracking(content).and();
    };
    return IconClicks_100;
  })(vast_element_1.default);
  var IconViewTracking_103 = /** @class */ (function(_super) {
    __extends(IconViewTracking_103, _super);
    function IconViewTracking_103() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IconViewTracking_103;
  })(vast_element_1.default);
  var Icon_96 = /** @class */ (function(_super) {
    __extends(Icon_96, _super);
    function Icon_96() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Icon_96.prototype.attachStaticResource = function(content, attributes) {
      return p(
        new StaticResource_97(
          "StaticResource",
          this,
          { attrs: ["creativeType"] },
          content,
          attributes
        )
      );
    };
    Icon_96.prototype.addStaticResource = function(content, attributes) {
      return this.attachStaticResource(content, attributes).and();
    };
    Icon_96.prototype.attachIFrameResource = function(content) {
      return p(new IFrameResource_98("IFrameResource", this, {}, content));
    };
    Icon_96.prototype.addIFrameResource = function(content) {
      return this.attachIFrameResource(content).and();
    };
    Icon_96.prototype.attachHTMLResource = function(content) {
      return p(new HTMLResource_99("HTMLResource", this, {}, content));
    };
    Icon_96.prototype.addHTMLResource = function(content) {
      return this.attachHTMLResource(content).and();
    };
    Icon_96.prototype.attachIconClicks = function() {
      return p(new IconClicks_100("IconClicks", this, {}));
    };
    Icon_96.prototype.attachIconViewTracking = function(content) {
      return p(new IconViewTracking_103("IconViewTracking", this, {}, content));
    };
    Icon_96.prototype.addIconViewTracking = function(content) {
      return this.attachIconViewTracking(content).and();
    };
    return Icon_96;
  })(vast_element_1.default);
  var Icons_95 = /** @class */ (function(_super) {
    __extends(Icons_95, _super);
    function Icons_95() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Icons_95.prototype.attachIcon = function(attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Icon_96(
          "Icon",
          this,
          {
            attrs: [
              "program",
              "width",
              "height",
              "xPosition",
              "yPosition",
              "duration",
              "offset",
              "apiFramework",
              "pxratio"
            ]
          },
          attributes
        )
      );
    };
    return Icons_95;
  })(vast_element_1.default);
  var InteractiveCreativeFile_104 = /** @class */ (function(_super) {
    __extends(InteractiveCreativeFile_104, _super);
    function InteractiveCreativeFile_104() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return InteractiveCreativeFile_104;
  })(vast_element_1.default);
  var Linear_89 = /** @class */ (function(_super) {
    __extends(Linear_89, _super);
    function Linear_89() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Linear_89.prototype.attachTrackingEvents = function() {
      return p(new TrackingEvents_90("TrackingEvents", this, {}));
    };
    Linear_89.prototype.attachVideoClicks = function() {
      return p(new VideoClicks_92("VideoClicks", this, {}));
    };
    Linear_89.prototype.attachIcons = function() {
      return p(new Icons_95("Icons", this, {}));
    };
    Linear_89.prototype.attachInteractiveCreativeFile = function(content) {
      return p(
        new InteractiveCreativeFile_104(
          "InteractiveCreativeFile",
          this,
          {},
          content
        )
      );
    };
    Linear_89.prototype.addInteractiveCreativeFile = function(content) {
      return this.attachInteractiveCreativeFile(content).and();
    };
    return Linear_89;
  })(vast_element_1.default);
  var NonLinearClickThrough_107 = /** @class */ (function(_super) {
    __extends(NonLinearClickThrough_107, _super);
    function NonLinearClickThrough_107() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return NonLinearClickThrough_107;
  })(vast_element_1.default);
  var NonLinearClickTracking_108 = /** @class */ (function(_super) {
    __extends(NonLinearClickTracking_108, _super);
    function NonLinearClickTracking_108() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return NonLinearClickTracking_108;
  })(vast_element_1.default);
  var NonLinear_106 = /** @class */ (function(_super) {
    __extends(NonLinear_106, _super);
    function NonLinear_106() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    NonLinear_106.prototype.attachNonLinearClickThrough = function(content) {
      return p(
        new NonLinearClickThrough_107(
          "NonLinearClickThrough",
          this,
          {},
          content
        )
      );
    };
    NonLinear_106.prototype.addNonLinearClickThrough = function(content) {
      return this.attachNonLinearClickThrough(content).and();
    };
    NonLinear_106.prototype.attachNonLinearClickTracking = function(content) {
      return p(
        new NonLinearClickTracking_108(
          "NonLinearClickTracking",
          this,
          {},
          content
        )
      );
    };
    NonLinear_106.prototype.addNonLinearClickTracking = function(content) {
      return this.attachNonLinearClickTracking(content).and();
    };
    return NonLinear_106;
  })(vast_element_1.default);
  var Tracking_110 = /** @class */ (function(_super) {
    __extends(Tracking_110, _super);
    function Tracking_110() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Tracking_110;
  })(vast_element_1.default);
  var TrackingEvents_109 = /** @class */ (function(_super) {
    __extends(TrackingEvents_109, _super);
    function TrackingEvents_109() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    TrackingEvents_109.prototype.attachTracking = function(
      content,
      attributes
    ) {
      return p(
        new Tracking_110(
          "Tracking",
          this,
          { attrs: ["event"] },
          content,
          attributes
        )
      );
    };
    TrackingEvents_109.prototype.addTracking = function(content, attributes) {
      return this.attachTracking(content, attributes).and();
    };
    return TrackingEvents_109;
  })(vast_element_1.default);
  var NonLinearAds_105 = /** @class */ (function(_super) {
    __extends(NonLinearAds_105, _super);
    function NonLinearAds_105() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    NonLinearAds_105.prototype.attachNonLinear = function(attributes) {
      return p(
        new NonLinear_106(
          "NonLinear",
          this,
          {
            attrs: [
              "id",
              "width",
              "height",
              "expandedWidth",
              "expandedHeight",
              "scalable",
              "maintainAspectRatio",
              "minSuggestedDuration",
              "apiFramework"
            ]
          },
          attributes
        )
      );
    };
    NonLinearAds_105.prototype.attachTrackingEvents = function() {
      return p(new TrackingEvents_109("TrackingEvents", this, {}));
    };
    return NonLinearAds_105;
  })(vast_element_1.default);
  var StaticResource_113 = /** @class */ (function(_super) {
    __extends(StaticResource_113, _super);
    function StaticResource_113() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return StaticResource_113;
  })(vast_element_1.default);
  var IFrameResource_114 = /** @class */ (function(_super) {
    __extends(IFrameResource_114, _super);
    function IFrameResource_114() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IFrameResource_114;
  })(vast_element_1.default);
  var HTMLResource_115 = /** @class */ (function(_super) {
    __extends(HTMLResource_115, _super);
    function HTMLResource_115() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return HTMLResource_115;
  })(vast_element_1.default);
  var AdParameters_116 = /** @class */ (function(_super) {
    __extends(AdParameters_116, _super);
    function AdParameters_116() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return AdParameters_116;
  })(vast_element_1.default);
  var AltText_117 = /** @class */ (function(_super) {
    __extends(AltText_117, _super);
    function AltText_117() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return AltText_117;
  })(vast_element_1.default);
  var CompanionClickThrough_118 = /** @class */ (function(_super) {
    __extends(CompanionClickThrough_118, _super);
    function CompanionClickThrough_118() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return CompanionClickThrough_118;
  })(vast_element_1.default);
  var CompanionClickTracking_119 = /** @class */ (function(_super) {
    __extends(CompanionClickTracking_119, _super);
    function CompanionClickTracking_119() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return CompanionClickTracking_119;
  })(vast_element_1.default);
  var Tracking_121 = /** @class */ (function(_super) {
    __extends(Tracking_121, _super);
    function Tracking_121() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Tracking_121;
  })(vast_element_1.default);
  var TrackingEvents_120 = /** @class */ (function(_super) {
    __extends(TrackingEvents_120, _super);
    function TrackingEvents_120() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    TrackingEvents_120.prototype.attachTracking = function(
      content,
      attributes
    ) {
      return p(
        new Tracking_121(
          "Tracking",
          this,
          { attrs: ["event"] },
          content,
          attributes
        )
      );
    };
    TrackingEvents_120.prototype.addTracking = function(content, attributes) {
      return this.attachTracking(content, attributes).and();
    };
    return TrackingEvents_120;
  })(vast_element_1.default);
  var Companion_112 = /** @class */ (function(_super) {
    __extends(Companion_112, _super);
    function Companion_112() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Companion_112.prototype.attachStaticResource = function(
      content,
      attributes
    ) {
      return p(
        new StaticResource_113(
          "StaticResource",
          this,
          { attrs: ["creativeType"] },
          content,
          attributes
        )
      );
    };
    Companion_112.prototype.addStaticResource = function(content, attributes) {
      return this.attachStaticResource(content, attributes).and();
    };
    Companion_112.prototype.attachIFrameResource = function(content) {
      return p(new IFrameResource_114("IFrameResource", this, {}, content));
    };
    Companion_112.prototype.addIFrameResource = function(content) {
      return this.attachIFrameResource(content).and();
    };
    Companion_112.prototype.attachHTMLResource = function(content) {
      return p(new HTMLResource_115("HTMLResource", this, {}, content));
    };
    Companion_112.prototype.addHTMLResource = function(content) {
      return this.attachHTMLResource(content).and();
    };
    Companion_112.prototype.attachAdParameters = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new AdParameters_116(
          "AdParameters",
          this,
          { attrs: ["xmlEncoded"] },
          content,
          attributes
        )
      );
    };
    Companion_112.prototype.addAdParameters = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachAdParameters(content, attributes).and();
    };
    Companion_112.prototype.attachAltText = function(content) {
      return p(new AltText_117("AltText", this, {}, content));
    };
    Companion_112.prototype.addAltText = function(content) {
      return this.attachAltText(content).and();
    };
    Companion_112.prototype.attachCompanionClickThrough = function(content) {
      return p(
        new CompanionClickThrough_118(
          "CompanionClickThrough",
          this,
          {},
          content
        )
      );
    };
    Companion_112.prototype.addCompanionClickThrough = function(content) {
      return this.attachCompanionClickThrough(content).and();
    };
    Companion_112.prototype.attachCompanionClickTracking = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new CompanionClickTracking_119(
          "CompanionClickTracking",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    Companion_112.prototype.addCompanionClickTracking = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachCompanionClickTracking(content, attributes).and();
    };
    Companion_112.prototype.attachTrackingEvents = function() {
      return p(new TrackingEvents_120("TrackingEvents", this, {}));
    };
    return Companion_112;
  })(vast_element_1.default);
  var CompanionAds_111 = /** @class */ (function(_super) {
    __extends(CompanionAds_111, _super);
    function CompanionAds_111() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    CompanionAds_111.prototype.attachCompanion = function(attributes) {
      return p(
        new Companion_112(
          "Companion",
          this,
          {
            attrs: [
              "id",
              "width",
              "height",
              "assetWidth",
              "assetHeight",
              "expandedWidth",
              "expandedHeight",
              "apiFramework",
              "adSlotID",
              "logoTile",
              "logoTitle",
              "logoArtist",
              "logoURL",
              "pxratio"
            ]
          },
          attributes
        )
      );
    };
    return CompanionAds_111;
  })(vast_element_1.default);
  var Creative_88 = /** @class */ (function(_super) {
    __extends(Creative_88, _super);
    function Creative_88() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Creative_88.prototype.attachLinear = function() {
      return p(new Linear_89("Linear", this, {}));
    };
    Creative_88.prototype.attachNonLinearAds = function() {
      return p(new NonLinearAds_105("NonLinearAds", this, {}));
    };
    Creative_88.prototype.attachCompanionAds = function(attributes) {
      return p(
        new CompanionAds_111(
          "CompanionAds",
          this,
          { attrs: ["required"] },
          attributes
        )
      );
    };
    return Creative_88;
  })(vast_element_1.default);
  var Creatives_87 = /** @class */ (function(_super) {
    __extends(Creatives_87, _super);
    function Creatives_87() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Creatives_87.prototype.attachCreative = function(attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Creative_88(
          "Creative",
          this,
          { attrs: ["id", "sequence", "adId"] },
          attributes
        )
      );
    };
    return Creatives_87;
  })(vast_element_1.default);
  var Wrapper_72 = /** @class */ (function(_super) {
    __extends(Wrapper_72, _super);
    function Wrapper_72() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Wrapper_72.prototype.attachImpression = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Impression_73(
          "Impression",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    Wrapper_72.prototype.addImpression = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachImpression(content, attributes).and();
    };
    Wrapper_72.prototype.attachVASTAdTagURI = function(content) {
      return p(new VASTAdTagURI_74("VASTAdTagURI", this, {}, content));
    };
    Wrapper_72.prototype.addVASTAdTagURI = function(content) {
      return this.attachVASTAdTagURI(content).and();
    };
    Wrapper_72.prototype.attachAdSystem = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new AdSystem_75(
          "AdSystem",
          this,
          { attrs: ["version"] },
          content,
          attributes
        )
      );
    };
    Wrapper_72.prototype.addAdSystem = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachAdSystem(content, attributes).and();
    };
    Wrapper_72.prototype.attachPricing = function(content, attributes) {
      return p(
        new Pricing_76(
          "Pricing",
          this,
          { attrs: ["currency", "model"] },
          content,
          attributes
        )
      );
    };
    Wrapper_72.prototype.addPricing = function(content, attributes) {
      return this.attachPricing(content, attributes).and();
    };
    Wrapper_72.prototype.attachError = function(content) {
      return p(new Error_77("Error", this, {}, content));
    };
    Wrapper_72.prototype.addError = function(content) {
      return this.attachError(content).and();
    };
    Wrapper_72.prototype.attachViewableImpression = function(attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new ViewableImpression_78(
          "ViewableImpression",
          this,
          { attrs: ["id"] },
          attributes
        )
      );
    };
    Wrapper_72.prototype.attachAdVerifications = function() {
      return p(new AdVerifications_82("AdVerifications", this, {}));
    };
    Wrapper_72.prototype.attachExtensions = function() {
      return p(new Extensions_85("Extensions", this, {}));
    };
    Wrapper_72.prototype.attachCreatives = function() {
      return p(new Creatives_87("Creatives", this, {}));
    };
    return Wrapper_72;
  })(vast_element_1.default);
  var Ad_6 = /** @class */ (function(_super) {
    __extends(Ad_6, _super);
    function Ad_6() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Ad_6.prototype.attachInLine = function() {
      return p(new InLine_7("InLine", this, {}));
    };
    Ad_6.prototype.attachWrapper = function(attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Wrapper_72(
          "Wrapper",
          this,
          {
            attrs: [
              "followAdditonalWrappers",
              "allowMultipleAds",
              "fallbackOnNoAd"
            ]
          },
          attributes
        )
      );
    };
    return Ad_6;
  })(vast_element_1.default);
  var VAST_4 = /** @class */ (function(_super) {
    __extends(VAST_4, _super);
    function VAST_4() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    VAST_4.prototype.attachError = function(content) {
      return p(new Error_5("Error", this, {}, content));
    };
    VAST_4.prototype.addError = function(content) {
      return this.attachError(content).and();
    };
    VAST_4.prototype.attachAd = function(attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Ad_6(
          "Ad",
          this,
          { attrs: ["id", "sequence", "conditionalAd"] },
          attributes
        )
      );
    };
    return VAST_4;
  })(vast_element_1.default);
  exports.VAST_4 = VAST_4;
  var apiv4 = /** @class */ (function(_super) {
    __extends(apiv4, _super);
    function apiv4() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    apiv4.prototype.attachVAST = function(attributes) {
      return p(new VAST_4("VAST", this, { attrs: ["version"] }, attributes));
    };
    apiv4.prototype.and = function() {
      return this;
    };
    return apiv4;
  })(vast_element_1.default);
  exports.apiv4 = apiv4;
});
//# sourceMappingURL=vast4_0.js.map
