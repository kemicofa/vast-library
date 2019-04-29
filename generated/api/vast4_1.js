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
  var AdServingID_11 = /** @class */ (function(_super) {
    __extends(AdServingID_11, _super);
    function AdServingID_11() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return AdServingID_11;
  })(vast_element_1.default);
  var Category_12 = /** @class */ (function(_super) {
    __extends(Category_12, _super);
    function Category_12() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Category_12;
  })(vast_element_1.default);
  var Description_13 = /** @class */ (function(_super) {
    __extends(Description_13, _super);
    function Description_13() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Description_13;
  })(vast_element_1.default);
  var Advertiser_14 = /** @class */ (function(_super) {
    __extends(Advertiser_14, _super);
    function Advertiser_14() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Advertiser_14;
  })(vast_element_1.default);
  var Pricing_15 = /** @class */ (function(_super) {
    __extends(Pricing_15, _super);
    function Pricing_15() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Pricing_15;
  })(vast_element_1.default);
  var Survey_16 = /** @class */ (function(_super) {
    __extends(Survey_16, _super);
    function Survey_16() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Survey_16;
  })(vast_element_1.default);
  var Error_17 = /** @class */ (function(_super) {
    __extends(Error_17, _super);
    function Error_17() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Error_17;
  })(vast_element_1.default);
  var Expires_18 = /** @class */ (function(_super) {
    __extends(Expires_18, _super);
    function Expires_18() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Expires_18;
  })(vast_element_1.default);
  var Viewable_20 = /** @class */ (function(_super) {
    __extends(Viewable_20, _super);
    function Viewable_20() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Viewable_20;
  })(vast_element_1.default);
  var NotViewable_21 = /** @class */ (function(_super) {
    __extends(NotViewable_21, _super);
    function NotViewable_21() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return NotViewable_21;
  })(vast_element_1.default);
  var ViewUndetermined_22 = /** @class */ (function(_super) {
    __extends(ViewUndetermined_22, _super);
    function ViewUndetermined_22() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return ViewUndetermined_22;
  })(vast_element_1.default);
  var ViewableImpression_19 = /** @class */ (function(_super) {
    __extends(ViewableImpression_19, _super);
    function ViewableImpression_19() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    ViewableImpression_19.prototype.attachViewable = function(content) {
      return p(new Viewable_20("Viewable", this, {}, content));
    };
    ViewableImpression_19.prototype.addViewable = function(content) {
      return this.attachViewable(content).and();
    };
    ViewableImpression_19.prototype.attachNotViewable = function(content) {
      return p(new NotViewable_21("NotViewable", this, {}, content));
    };
    ViewableImpression_19.prototype.addNotViewable = function(content) {
      return this.attachNotViewable(content).and();
    };
    ViewableImpression_19.prototype.attachViewUndetermined = function(content) {
      return p(new ViewUndetermined_22("ViewUndetermined", this, {}, content));
    };
    ViewableImpression_19.prototype.addViewUndetermined = function(content) {
      return this.attachViewUndetermined(content).and();
    };
    return ViewableImpression_19;
  })(vast_element_1.default);
  var JavaScriptResource_25 = /** @class */ (function(_super) {
    __extends(JavaScriptResource_25, _super);
    function JavaScriptResource_25() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return JavaScriptResource_25;
  })(vast_element_1.default);
  var ExecutableResource_26 = /** @class */ (function(_super) {
    __extends(ExecutableResource_26, _super);
    function ExecutableResource_26() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return ExecutableResource_26;
  })(vast_element_1.default);
  var Tracking_28 = /** @class */ (function(_super) {
    __extends(Tracking_28, _super);
    function Tracking_28() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Tracking_28;
  })(vast_element_1.default);
  var TrackingEvents_27 = /** @class */ (function(_super) {
    __extends(TrackingEvents_27, _super);
    function TrackingEvents_27() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    TrackingEvents_27.prototype.attachTracking = function(content, attributes) {
      return p(
        new Tracking_28(
          "Tracking",
          this,
          { attrs: ["offset", "event"] },
          content,
          attributes
        )
      );
    };
    TrackingEvents_27.prototype.addTracking = function(content, attributes) {
      return this.attachTracking(content, attributes).and();
    };
    return TrackingEvents_27;
  })(vast_element_1.default);
  var VerificationParameters_29 = /** @class */ (function(_super) {
    __extends(VerificationParameters_29, _super);
    function VerificationParameters_29() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return VerificationParameters_29;
  })(vast_element_1.default);
  var Verification_24 = /** @class */ (function(_super) {
    __extends(Verification_24, _super);
    function Verification_24() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Verification_24.prototype.attachJavaScriptResource = function(
      content,
      attributes
    ) {
      return p(
        new JavaScriptResource_25(
          "JavaScriptResource",
          this,
          { attrs: ["apiFramework", "browserOptional"] },
          content,
          attributes
        )
      );
    };
    Verification_24.prototype.addJavaScriptResource = function(
      content,
      attributes
    ) {
      return this.attachJavaScriptResource(content, attributes).and();
    };
    Verification_24.prototype.attachExecutableResource = function(
      content,
      attributes
    ) {
      return p(
        new ExecutableResource_26(
          "ExecutableResource",
          this,
          { attrs: ["apiFramework", "language", "type"] },
          content,
          attributes
        )
      );
    };
    Verification_24.prototype.addExecutableResource = function(
      content,
      attributes
    ) {
      return this.attachExecutableResource(content, attributes).and();
    };
    Verification_24.prototype.attachTrackingEvents = function() {
      return p(new TrackingEvents_27("TrackingEvents", this, {}));
    };
    Verification_24.prototype.attachVerificationParameters = function(content) {
      return p(
        new VerificationParameters_29(
          "VerificationParameters",
          this,
          {},
          content
        )
      );
    };
    Verification_24.prototype.addVerificationParameters = function(content) {
      return this.attachVerificationParameters(content).and();
    };
    return Verification_24;
  })(vast_element_1.default);
  var AdVerifications_23 = /** @class */ (function(_super) {
    __extends(AdVerifications_23, _super);
    function AdVerifications_23() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    AdVerifications_23.prototype.attachVerification = function(attributes) {
      return p(
        new Verification_24(
          "Verification",
          this,
          { attrs: ["vendor"] },
          attributes
        )
      );
    };
    return AdVerifications_23;
  })(vast_element_1.default);
  var Extension_31 = /** @class */ (function(_super) {
    __extends(Extension_31, _super);
    function Extension_31() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Extension_31;
  })(vast_element_1.default);
  var Extensions_30 = /** @class */ (function(_super) {
    __extends(Extensions_30, _super);
    function Extensions_30() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Extensions_30.prototype.attachExtension = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Extension_31(
          "Extension",
          this,
          { attrs: ["type"] },
          content,
          attributes
        )
      );
    };
    Extensions_30.prototype.addExtension = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachExtension(content, attributes).and();
    };
    return Extensions_30;
  })(vast_element_1.default);
  var UniversalAdId_34 = /** @class */ (function(_super) {
    __extends(UniversalAdId_34, _super);
    function UniversalAdId_34() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return UniversalAdId_34;
  })(vast_element_1.default);
  var CreativeExtension_36 = /** @class */ (function(_super) {
    __extends(CreativeExtension_36, _super);
    function CreativeExtension_36() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return CreativeExtension_36;
  })(vast_element_1.default);
  var CreativeExtensions_35 = /** @class */ (function(_super) {
    __extends(CreativeExtensions_35, _super);
    function CreativeExtensions_35() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    CreativeExtensions_35.prototype.attachCreativeExtension = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new CreativeExtension_36(
          "CreativeExtension",
          this,
          { attrs: ["type"] },
          content,
          attributes
        )
      );
    };
    CreativeExtensions_35.prototype.addCreativeExtension = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachCreativeExtension(content, attributes).and();
    };
    return CreativeExtensions_35;
  })(vast_element_1.default);
  var Duration_38 = /** @class */ (function(_super) {
    __extends(Duration_38, _super);
    function Duration_38() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Duration_38;
  })(vast_element_1.default);
  var AdParameters_39 = /** @class */ (function(_super) {
    __extends(AdParameters_39, _super);
    function AdParameters_39() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return AdParameters_39;
  })(vast_element_1.default);
  var Mezzanine_41 = /** @class */ (function(_super) {
    __extends(Mezzanine_41, _super);
    function Mezzanine_41() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Mezzanine_41;
  })(vast_element_1.default);
  var MediaFile_42 = /** @class */ (function(_super) {
    __extends(MediaFile_42, _super);
    function MediaFile_42() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return MediaFile_42;
  })(vast_element_1.default);
  var InteractiveCreativeFile_43 = /** @class */ (function(_super) {
    __extends(InteractiveCreativeFile_43, _super);
    function InteractiveCreativeFile_43() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return InteractiveCreativeFile_43;
  })(vast_element_1.default);
  var ClosedCaptionFile_45 = /** @class */ (function(_super) {
    __extends(ClosedCaptionFile_45, _super);
    function ClosedCaptionFile_45() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return ClosedCaptionFile_45;
  })(vast_element_1.default);
  var ClosedCaptionFiles_44 = /** @class */ (function(_super) {
    __extends(ClosedCaptionFiles_44, _super);
    function ClosedCaptionFiles_44() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    ClosedCaptionFiles_44.prototype.attachClosedCaptionFile = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new ClosedCaptionFile_45(
          "ClosedCaptionFile",
          this,
          { attrs: ["type", "language"] },
          content,
          attributes
        )
      );
    };
    ClosedCaptionFiles_44.prototype.addClosedCaptionFile = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachClosedCaptionFile(content, attributes).and();
    };
    return ClosedCaptionFiles_44;
  })(vast_element_1.default);
  var MediaFiles_40 = /** @class */ (function(_super) {
    __extends(MediaFiles_40, _super);
    function MediaFiles_40() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    MediaFiles_40.prototype.attachMezzanine = function(content, attributes) {
      return p(
        new Mezzanine_41(
          "Mezzanine",
          this,
          {
            attrs: [
              "delivery",
              "type",
              "width",
              "height",
              "codec",
              "id",
              "fileSize",
              "mediaType"
            ]
          },
          content,
          attributes
        )
      );
    };
    MediaFiles_40.prototype.addMezzanine = function(content, attributes) {
      return this.attachMezzanine(content, attributes).and();
    };
    MediaFiles_40.prototype.attachMediaFile = function(content, attributes) {
      return p(
        new MediaFile_42(
          "MediaFile",
          this,
          {
            attrs: [
              "delivery",
              "type",
              "width",
              "height",
              "codec",
              "id",
              "bitrate",
              "minBitrate",
              "maxBitrate",
              "scalable",
              "mantainAspectRatio",
              "apiFramework",
              "fileSize",
              "mediaType"
            ]
          },
          content,
          attributes
        )
      );
    };
    MediaFiles_40.prototype.addMediaFile = function(content, attributes) {
      return this.attachMediaFile(content, attributes).and();
    };
    MediaFiles_40.prototype.attachInteractiveCreativeFile = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new InteractiveCreativeFile_43(
          "InteractiveCreativeFile",
          this,
          { attrs: ["type", "apiFramework", "variableDuration"] },
          content,
          attributes
        )
      );
    };
    MediaFiles_40.prototype.addInteractiveCreativeFile = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachInteractiveCreativeFile(content, attributes).and();
    };
    MediaFiles_40.prototype.attachClosedCaptionFiles = function() {
      return p(new ClosedCaptionFiles_44("ClosedCaptionFiles", this, {}));
    };
    return MediaFiles_40;
  })(vast_element_1.default);
  var ClickThrough_47 = /** @class */ (function(_super) {
    __extends(ClickThrough_47, _super);
    function ClickThrough_47() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return ClickThrough_47;
  })(vast_element_1.default);
  var ClickTracking_48 = /** @class */ (function(_super) {
    __extends(ClickTracking_48, _super);
    function ClickTracking_48() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return ClickTracking_48;
  })(vast_element_1.default);
  var CustomClick_49 = /** @class */ (function(_super) {
    __extends(CustomClick_49, _super);
    function CustomClick_49() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return CustomClick_49;
  })(vast_element_1.default);
  var VideoClicks_46 = /** @class */ (function(_super) {
    __extends(VideoClicks_46, _super);
    function VideoClicks_46() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    VideoClicks_46.prototype.attachClickThrough = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new ClickThrough_47(
          "ClickThrough",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    VideoClicks_46.prototype.addClickThrough = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachClickThrough(content, attributes).and();
    };
    VideoClicks_46.prototype.attachClickTracking = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new ClickTracking_48(
          "ClickTracking",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    VideoClicks_46.prototype.addClickTracking = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachClickTracking(content, attributes).and();
    };
    VideoClicks_46.prototype.attachCustomClick = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new CustomClick_49(
          "CustomClick",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    VideoClicks_46.prototype.addCustomClick = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachCustomClick(content, attributes).and();
    };
    return VideoClicks_46;
  })(vast_element_1.default);
  var Tracking_51 = /** @class */ (function(_super) {
    __extends(Tracking_51, _super);
    function Tracking_51() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Tracking_51;
  })(vast_element_1.default);
  var TrackingEvents_50 = /** @class */ (function(_super) {
    __extends(TrackingEvents_50, _super);
    function TrackingEvents_50() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    TrackingEvents_50.prototype.attachTracking = function(content, attributes) {
      return p(
        new Tracking_51(
          "Tracking",
          this,
          { attrs: ["offset", "event"] },
          content,
          attributes
        )
      );
    };
    TrackingEvents_50.prototype.addTracking = function(content, attributes) {
      return this.attachTracking(content, attributes).and();
    };
    return TrackingEvents_50;
  })(vast_element_1.default);
  var StaticResource_54 = /** @class */ (function(_super) {
    __extends(StaticResource_54, _super);
    function StaticResource_54() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return StaticResource_54;
  })(vast_element_1.default);
  var IFrameResource_55 = /** @class */ (function(_super) {
    __extends(IFrameResource_55, _super);
    function IFrameResource_55() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IFrameResource_55;
  })(vast_element_1.default);
  var HTMLResource_56 = /** @class */ (function(_super) {
    __extends(HTMLResource_56, _super);
    function HTMLResource_56() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return HTMLResource_56;
  })(vast_element_1.default);
  var IconClickThrough_58 = /** @class */ (function(_super) {
    __extends(IconClickThrough_58, _super);
    function IconClickThrough_58() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IconClickThrough_58;
  })(vast_element_1.default);
  var IconClickTracking_59 = /** @class */ (function(_super) {
    __extends(IconClickTracking_59, _super);
    function IconClickTracking_59() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IconClickTracking_59;
  })(vast_element_1.default);
  var IconClicks_57 = /** @class */ (function(_super) {
    __extends(IconClicks_57, _super);
    function IconClicks_57() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    IconClicks_57.prototype.attachIconClickThrough = function(content) {
      return p(new IconClickThrough_58("IconClickThrough", this, {}, content));
    };
    IconClicks_57.prototype.addIconClickThrough = function(content) {
      return this.attachIconClickThrough(content).and();
    };
    IconClicks_57.prototype.attachIconClickTracking = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new IconClickTracking_59(
          "IconClickTracking",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    IconClicks_57.prototype.addIconClickTracking = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachIconClickTracking(content, attributes).and();
    };
    return IconClicks_57;
  })(vast_element_1.default);
  var IconViewTracking_60 = /** @class */ (function(_super) {
    __extends(IconViewTracking_60, _super);
    function IconViewTracking_60() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IconViewTracking_60;
  })(vast_element_1.default);
  var Icon_53 = /** @class */ (function(_super) {
    __extends(Icon_53, _super);
    function Icon_53() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Icon_53.prototype.attachStaticResource = function(content, attributes) {
      return p(
        new StaticResource_54(
          "StaticResource",
          this,
          { attrs: ["creativeType"] },
          content,
          attributes
        )
      );
    };
    Icon_53.prototype.addStaticResource = function(content, attributes) {
      return this.attachStaticResource(content, attributes).and();
    };
    Icon_53.prototype.attachIFrameResource = function(content) {
      return p(new IFrameResource_55("IFrameResource", this, {}, content));
    };
    Icon_53.prototype.addIFrameResource = function(content) {
      return this.attachIFrameResource(content).and();
    };
    Icon_53.prototype.attachHTMLResource = function(content) {
      return p(new HTMLResource_56("HTMLResource", this, {}, content));
    };
    Icon_53.prototype.addHTMLResource = function(content) {
      return this.attachHTMLResource(content).and();
    };
    Icon_53.prototype.attachIconClicks = function() {
      return p(new IconClicks_57("IconClicks", this, {}));
    };
    Icon_53.prototype.attachIconViewTracking = function(content) {
      return p(new IconViewTracking_60("IconViewTracking", this, {}, content));
    };
    Icon_53.prototype.addIconViewTracking = function(content) {
      return this.attachIconViewTracking(content).and();
    };
    return Icon_53;
  })(vast_element_1.default);
  var Icons_52 = /** @class */ (function(_super) {
    __extends(Icons_52, _super);
    function Icons_52() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Icons_52.prototype.attachIcon = function(attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Icon_53(
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
    return Icons_52;
  })(vast_element_1.default);
  var Linear_37 = /** @class */ (function(_super) {
    __extends(Linear_37, _super);
    function Linear_37() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Linear_37.prototype.attachDuration = function(content) {
      return p(new Duration_38("Duration", this, {}, content));
    };
    Linear_37.prototype.addDuration = function(content) {
      return this.attachDuration(content).and();
    };
    Linear_37.prototype.attachAdParameters = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new AdParameters_39(
          "AdParameters",
          this,
          { attrs: ["xmlEncoded"] },
          content,
          attributes
        )
      );
    };
    Linear_37.prototype.addAdParameters = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachAdParameters(content, attributes).and();
    };
    Linear_37.prototype.attachMediaFiles = function() {
      return p(new MediaFiles_40("MediaFiles", this, {}));
    };
    Linear_37.prototype.attachVideoClicks = function() {
      return p(new VideoClicks_46("VideoClicks", this, {}));
    };
    Linear_37.prototype.attachTrackingEvents = function() {
      return p(new TrackingEvents_50("TrackingEvents", this, {}));
    };
    Linear_37.prototype.attachIcons = function() {
      return p(new Icons_52("Icons", this, {}));
    };
    return Linear_37;
  })(vast_element_1.default);
  var NonLinearClickThrough_63 = /** @class */ (function(_super) {
    __extends(NonLinearClickThrough_63, _super);
    function NonLinearClickThrough_63() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return NonLinearClickThrough_63;
  })(vast_element_1.default);
  var NonLinearClickTracking_64 = /** @class */ (function(_super) {
    __extends(NonLinearClickTracking_64, _super);
    function NonLinearClickTracking_64() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return NonLinearClickTracking_64;
  })(vast_element_1.default);
  var NonLinear_62 = /** @class */ (function(_super) {
    __extends(NonLinear_62, _super);
    function NonLinear_62() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    NonLinear_62.prototype.attachNonLinearClickThrough = function(content) {
      return p(
        new NonLinearClickThrough_63("NonLinearClickThrough", this, {}, content)
      );
    };
    NonLinear_62.prototype.addNonLinearClickThrough = function(content) {
      return this.attachNonLinearClickThrough(content).and();
    };
    NonLinear_62.prototype.attachNonLinearClickTracking = function(content) {
      return p(
        new NonLinearClickTracking_64(
          "NonLinearClickTracking",
          this,
          {},
          content
        )
      );
    };
    NonLinear_62.prototype.addNonLinearClickTracking = function(content) {
      return this.attachNonLinearClickTracking(content).and();
    };
    return NonLinear_62;
  })(vast_element_1.default);
  var Tracking_66 = /** @class */ (function(_super) {
    __extends(Tracking_66, _super);
    function Tracking_66() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Tracking_66;
  })(vast_element_1.default);
  var TrackingEvents_65 = /** @class */ (function(_super) {
    __extends(TrackingEvents_65, _super);
    function TrackingEvents_65() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    TrackingEvents_65.prototype.attachTracking = function(content, attributes) {
      return p(
        new Tracking_66(
          "Tracking",
          this,
          { attrs: ["event"] },
          content,
          attributes
        )
      );
    };
    TrackingEvents_65.prototype.addTracking = function(content, attributes) {
      return this.attachTracking(content, attributes).and();
    };
    return TrackingEvents_65;
  })(vast_element_1.default);
  var NonLinearAds_61 = /** @class */ (function(_super) {
    __extends(NonLinearAds_61, _super);
    function NonLinearAds_61() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    NonLinearAds_61.prototype.attachNonLinear = function(attributes) {
      return p(
        new NonLinear_62(
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
              "apiFramework",
              "minSuggestedDuration"
            ]
          },
          attributes
        )
      );
    };
    NonLinearAds_61.prototype.attachTrackingEvents = function() {
      return p(new TrackingEvents_65("TrackingEvents", this, {}));
    };
    return NonLinearAds_61;
  })(vast_element_1.default);
  var StaticResource_69 = /** @class */ (function(_super) {
    __extends(StaticResource_69, _super);
    function StaticResource_69() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return StaticResource_69;
  })(vast_element_1.default);
  var IFrameResource_70 = /** @class */ (function(_super) {
    __extends(IFrameResource_70, _super);
    function IFrameResource_70() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IFrameResource_70;
  })(vast_element_1.default);
  var HTMLResource_71 = /** @class */ (function(_super) {
    __extends(HTMLResource_71, _super);
    function HTMLResource_71() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return HTMLResource_71;
  })(vast_element_1.default);
  var AdParameters_72 = /** @class */ (function(_super) {
    __extends(AdParameters_72, _super);
    function AdParameters_72() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return AdParameters_72;
  })(vast_element_1.default);
  var AltText_73 = /** @class */ (function(_super) {
    __extends(AltText_73, _super);
    function AltText_73() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return AltText_73;
  })(vast_element_1.default);
  var CompanionClickThrough_74 = /** @class */ (function(_super) {
    __extends(CompanionClickThrough_74, _super);
    function CompanionClickThrough_74() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return CompanionClickThrough_74;
  })(vast_element_1.default);
  var CompanionClickTracking_75 = /** @class */ (function(_super) {
    __extends(CompanionClickTracking_75, _super);
    function CompanionClickTracking_75() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return CompanionClickTracking_75;
  })(vast_element_1.default);
  var Tracking_77 = /** @class */ (function(_super) {
    __extends(Tracking_77, _super);
    function Tracking_77() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Tracking_77;
  })(vast_element_1.default);
  var TrackingEvents_76 = /** @class */ (function(_super) {
    __extends(TrackingEvents_76, _super);
    function TrackingEvents_76() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    TrackingEvents_76.prototype.attachTracking = function(content, attributes) {
      return p(
        new Tracking_77(
          "Tracking",
          this,
          { attrs: ["event"] },
          content,
          attributes
        )
      );
    };
    TrackingEvents_76.prototype.addTracking = function(content, attributes) {
      return this.attachTracking(content, attributes).and();
    };
    return TrackingEvents_76;
  })(vast_element_1.default);
  var Companion_68 = /** @class */ (function(_super) {
    __extends(Companion_68, _super);
    function Companion_68() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Companion_68.prototype.attachStaticResource = function(
      content,
      attributes
    ) {
      return p(
        new StaticResource_69(
          "StaticResource",
          this,
          { attrs: ["creativeType"] },
          content,
          attributes
        )
      );
    };
    Companion_68.prototype.addStaticResource = function(content, attributes) {
      return this.attachStaticResource(content, attributes).and();
    };
    Companion_68.prototype.attachIFrameResource = function(content) {
      return p(new IFrameResource_70("IFrameResource", this, {}, content));
    };
    Companion_68.prototype.addIFrameResource = function(content) {
      return this.attachIFrameResource(content).and();
    };
    Companion_68.prototype.attachHTMLResource = function(content) {
      return p(new HTMLResource_71("HTMLResource", this, {}, content));
    };
    Companion_68.prototype.addHTMLResource = function(content) {
      return this.attachHTMLResource(content).and();
    };
    Companion_68.prototype.attachAdParameters = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new AdParameters_72(
          "AdParameters",
          this,
          { attrs: ["xmlEncoded"] },
          content,
          attributes
        )
      );
    };
    Companion_68.prototype.addAdParameters = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachAdParameters(content, attributes).and();
    };
    Companion_68.prototype.attachAltText = function(content) {
      return p(new AltText_73("AltText", this, {}, content));
    };
    Companion_68.prototype.addAltText = function(content) {
      return this.attachAltText(content).and();
    };
    Companion_68.prototype.attachCompanionClickThrough = function(content) {
      return p(
        new CompanionClickThrough_74("CompanionClickThrough", this, {}, content)
      );
    };
    Companion_68.prototype.addCompanionClickThrough = function(content) {
      return this.attachCompanionClickThrough(content).and();
    };
    Companion_68.prototype.attachCompanionClickTracking = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new CompanionClickTracking_75(
          "CompanionClickTracking",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    Companion_68.prototype.addCompanionClickTracking = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachCompanionClickTracking(content, attributes).and();
    };
    Companion_68.prototype.attachTrackingEvents = function() {
      return p(new TrackingEvents_76("TrackingEvents", this, {}));
    };
    return Companion_68;
  })(vast_element_1.default);
  var CompanionAds_67 = /** @class */ (function(_super) {
    __extends(CompanionAds_67, _super);
    function CompanionAds_67() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    CompanionAds_67.prototype.attachCompanion = function(attributes) {
      return p(
        new Companion_68(
          "Companion",
          this,
          {
            attrs: [
              "width",
              "height",
              "id",
              "assetWidth",
              "assetHeight",
              "expandedWidth",
              "expandedHeight",
              "apiFramework",
              "adSlotID",
              "pxratio",
              "renderingMode"
            ]
          },
          attributes
        )
      );
    };
    return CompanionAds_67;
  })(vast_element_1.default);
  var Creative_33 = /** @class */ (function(_super) {
    __extends(Creative_33, _super);
    function Creative_33() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Creative_33.prototype.attachUniversalAdId = function(content, attributes) {
      return p(
        new UniversalAdId_34(
          "UniversalAdId",
          this,
          { attrs: ["idRegistry", "idValue"] },
          content,
          attributes
        )
      );
    };
    Creative_33.prototype.addUniversalAdId = function(content, attributes) {
      return this.attachUniversalAdId(content, attributes).and();
    };
    Creative_33.prototype.attachCreativeExtensions = function() {
      return p(new CreativeExtensions_35("CreativeExtensions", this, {}));
    };
    Creative_33.prototype.attachLinear = function(attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Linear_37("Linear", this, { attrs: ["skipoffset"] }, attributes)
      );
    };
    Creative_33.prototype.attachNonLinearAds = function() {
      return p(new NonLinearAds_61("NonLinearAds", this, {}));
    };
    Creative_33.prototype.attachCompanionAds = function(attributes) {
      return p(
        new CompanionAds_67(
          "CompanionAds",
          this,
          { attrs: ["required"] },
          attributes
        )
      );
    };
    return Creative_33;
  })(vast_element_1.default);
  var Creatives_32 = /** @class */ (function(_super) {
    __extends(Creatives_32, _super);
    function Creatives_32() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Creatives_32.prototype.attachCreative = function(attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Creative_33(
          "Creative",
          this,
          { attrs: ["id", "sequence", "adId", "apiFramework"] },
          attributes
        )
      );
    };
    return Creatives_32;
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
    InLine_7.prototype.attachAdServingID = function(content) {
      return p(new AdServingID_11("AdServingID", this, {}, content));
    };
    InLine_7.prototype.addAdServingID = function(content) {
      return this.attachAdServingID(content).and();
    };
    InLine_7.prototype.attachCategory = function(content, attributes) {
      return p(
        new Category_12(
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
      return p(new Description_13("Description", this, {}, content));
    };
    InLine_7.prototype.addDescription = function(content) {
      return this.attachDescription(content).and();
    };
    InLine_7.prototype.attachAdvertiser = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Advertiser_14(
          "Advertiser",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    InLine_7.prototype.addAdvertiser = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachAdvertiser(content, attributes).and();
    };
    InLine_7.prototype.attachPricing = function(content, attributes) {
      return p(
        new Pricing_15(
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
        new Survey_16("Survey", this, { attrs: ["type"] }, content, attributes)
      );
    };
    InLine_7.prototype.addSurvey = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachSurvey(content, attributes).and();
    };
    InLine_7.prototype.attachError = function(content) {
      return p(new Error_17("Error", this, {}, content));
    };
    InLine_7.prototype.addError = function(content) {
      return this.attachError(content).and();
    };
    InLine_7.prototype.attachExpires = function(content) {
      return p(new Expires_18("Expires", this, {}, content));
    };
    InLine_7.prototype.addExpires = function(content) {
      return this.attachExpires(content).and();
    };
    InLine_7.prototype.attachViewableImpression = function(attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new ViewableImpression_19(
          "ViewableImpression",
          this,
          { attrs: ["id"] },
          attributes
        )
      );
    };
    InLine_7.prototype.attachAdVerifications = function() {
      return p(new AdVerifications_23("AdVerifications", this, {}));
    };
    InLine_7.prototype.attachExtensions = function() {
      return p(new Extensions_30("Extensions", this, {}));
    };
    InLine_7.prototype.attachCreatives = function() {
      return p(new Creatives_32("Creatives", this, {}));
    };
    return InLine_7;
  })(vast_element_1.default);
  var Impression_79 = /** @class */ (function(_super) {
    __extends(Impression_79, _super);
    function Impression_79() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Impression_79;
  })(vast_element_1.default);
  var VASTAdTagURI_80 = /** @class */ (function(_super) {
    __extends(VASTAdTagURI_80, _super);
    function VASTAdTagURI_80() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return VASTAdTagURI_80;
  })(vast_element_1.default);
  var AdSystem_81 = /** @class */ (function(_super) {
    __extends(AdSystem_81, _super);
    function AdSystem_81() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return AdSystem_81;
  })(vast_element_1.default);
  var Pricing_82 = /** @class */ (function(_super) {
    __extends(Pricing_82, _super);
    function Pricing_82() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Pricing_82;
  })(vast_element_1.default);
  var Error_83 = /** @class */ (function(_super) {
    __extends(Error_83, _super);
    function Error_83() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Error_83;
  })(vast_element_1.default);
  var Viewable_85 = /** @class */ (function(_super) {
    __extends(Viewable_85, _super);
    function Viewable_85() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Viewable_85;
  })(vast_element_1.default);
  var NotViewable_86 = /** @class */ (function(_super) {
    __extends(NotViewable_86, _super);
    function NotViewable_86() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return NotViewable_86;
  })(vast_element_1.default);
  var ViewUndetermined_87 = /** @class */ (function(_super) {
    __extends(ViewUndetermined_87, _super);
    function ViewUndetermined_87() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return ViewUndetermined_87;
  })(vast_element_1.default);
  var ViewableImpression_84 = /** @class */ (function(_super) {
    __extends(ViewableImpression_84, _super);
    function ViewableImpression_84() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    ViewableImpression_84.prototype.attachViewable = function(content) {
      return p(new Viewable_85("Viewable", this, {}, content));
    };
    ViewableImpression_84.prototype.addViewable = function(content) {
      return this.attachViewable(content).and();
    };
    ViewableImpression_84.prototype.attachNotViewable = function(content) {
      return p(new NotViewable_86("NotViewable", this, {}, content));
    };
    ViewableImpression_84.prototype.addNotViewable = function(content) {
      return this.attachNotViewable(content).and();
    };
    ViewableImpression_84.prototype.attachViewUndetermined = function(content) {
      return p(new ViewUndetermined_87("ViewUndetermined", this, {}, content));
    };
    ViewableImpression_84.prototype.addViewUndetermined = function(content) {
      return this.attachViewUndetermined(content).and();
    };
    return ViewableImpression_84;
  })(vast_element_1.default);
  var JavaScriptResource_90 = /** @class */ (function(_super) {
    __extends(JavaScriptResource_90, _super);
    function JavaScriptResource_90() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return JavaScriptResource_90;
  })(vast_element_1.default);
  var ExecutableResource_91 = /** @class */ (function(_super) {
    __extends(ExecutableResource_91, _super);
    function ExecutableResource_91() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return ExecutableResource_91;
  })(vast_element_1.default);
  var Tracking_93 = /** @class */ (function(_super) {
    __extends(Tracking_93, _super);
    function Tracking_93() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Tracking_93;
  })(vast_element_1.default);
  var TrackingEvents_92 = /** @class */ (function(_super) {
    __extends(TrackingEvents_92, _super);
    function TrackingEvents_92() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    TrackingEvents_92.prototype.attachTracking = function(content, attributes) {
      return p(
        new Tracking_93(
          "Tracking",
          this,
          { attrs: ["offset", "event"] },
          content,
          attributes
        )
      );
    };
    TrackingEvents_92.prototype.addTracking = function(content, attributes) {
      return this.attachTracking(content, attributes).and();
    };
    return TrackingEvents_92;
  })(vast_element_1.default);
  var VerificationParameters_94 = /** @class */ (function(_super) {
    __extends(VerificationParameters_94, _super);
    function VerificationParameters_94() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return VerificationParameters_94;
  })(vast_element_1.default);
  var BlockedAdCategories_95 = /** @class */ (function(_super) {
    __extends(BlockedAdCategories_95, _super);
    function BlockedAdCategories_95() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return BlockedAdCategories_95;
  })(vast_element_1.default);
  var Verification_89 = /** @class */ (function(_super) {
    __extends(Verification_89, _super);
    function Verification_89() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Verification_89.prototype.attachJavaScriptResource = function(
      content,
      attributes
    ) {
      return p(
        new JavaScriptResource_90(
          "JavaScriptResource",
          this,
          { attrs: ["apiFramework", "browserOptional"] },
          content,
          attributes
        )
      );
    };
    Verification_89.prototype.addJavaScriptResource = function(
      content,
      attributes
    ) {
      return this.attachJavaScriptResource(content, attributes).and();
    };
    Verification_89.prototype.attachExecutableResource = function(
      content,
      attributes
    ) {
      return p(
        new ExecutableResource_91(
          "ExecutableResource",
          this,
          { attrs: ["apiFramework", "language", "type"] },
          content,
          attributes
        )
      );
    };
    Verification_89.prototype.addExecutableResource = function(
      content,
      attributes
    ) {
      return this.attachExecutableResource(content, attributes).and();
    };
    Verification_89.prototype.attachTrackingEvents = function() {
      return p(new TrackingEvents_92("TrackingEvents", this, {}));
    };
    Verification_89.prototype.attachVerificationParameters = function(content) {
      return p(
        new VerificationParameters_94(
          "VerificationParameters",
          this,
          {},
          content
        )
      );
    };
    Verification_89.prototype.addVerificationParameters = function(content) {
      return this.attachVerificationParameters(content).and();
    };
    Verification_89.prototype.attachBlockedAdCategories = function(
      content,
      attributes
    ) {
      return p(
        new BlockedAdCategories_95(
          "BlockedAdCategories",
          this,
          { attrs: ["authority"] },
          content,
          attributes
        )
      );
    };
    Verification_89.prototype.addBlockedAdCategories = function(
      content,
      attributes
    ) {
      return this.attachBlockedAdCategories(content, attributes).and();
    };
    return Verification_89;
  })(vast_element_1.default);
  var AdVerifications_88 = /** @class */ (function(_super) {
    __extends(AdVerifications_88, _super);
    function AdVerifications_88() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    AdVerifications_88.prototype.attachVerification = function(attributes) {
      return p(
        new Verification_89(
          "Verification",
          this,
          { attrs: ["vendor"] },
          attributes
        )
      );
    };
    return AdVerifications_88;
  })(vast_element_1.default);
  var Extension_97 = /** @class */ (function(_super) {
    __extends(Extension_97, _super);
    function Extension_97() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Extension_97;
  })(vast_element_1.default);
  var Extensions_96 = /** @class */ (function(_super) {
    __extends(Extensions_96, _super);
    function Extensions_96() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Extensions_96.prototype.attachExtension = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Extension_97(
          "Extension",
          this,
          { attrs: ["type"] },
          content,
          attributes
        )
      );
    };
    Extensions_96.prototype.addExtension = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachExtension(content, attributes).and();
    };
    return Extensions_96;
  })(vast_element_1.default);
  var Tracking_102 = /** @class */ (function(_super) {
    __extends(Tracking_102, _super);
    function Tracking_102() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Tracking_102;
  })(vast_element_1.default);
  var TrackingEvents_101 = /** @class */ (function(_super) {
    __extends(TrackingEvents_101, _super);
    function TrackingEvents_101() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    TrackingEvents_101.prototype.attachTracking = function(
      content,
      attributes
    ) {
      return p(
        new Tracking_102(
          "Tracking",
          this,
          { attrs: ["offset", "event"] },
          content,
          attributes
        )
      );
    };
    TrackingEvents_101.prototype.addTracking = function(content, attributes) {
      return this.attachTracking(content, attributes).and();
    };
    return TrackingEvents_101;
  })(vast_element_1.default);
  var ClickTracking_104 = /** @class */ (function(_super) {
    __extends(ClickTracking_104, _super);
    function ClickTracking_104() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return ClickTracking_104;
  })(vast_element_1.default);
  var CustomClick_105 = /** @class */ (function(_super) {
    __extends(CustomClick_105, _super);
    function CustomClick_105() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return CustomClick_105;
  })(vast_element_1.default);
  var VideoClicks_103 = /** @class */ (function(_super) {
    __extends(VideoClicks_103, _super);
    function VideoClicks_103() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    VideoClicks_103.prototype.attachClickTracking = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new ClickTracking_104(
          "ClickTracking",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    VideoClicks_103.prototype.addClickTracking = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachClickTracking(content, attributes).and();
    };
    VideoClicks_103.prototype.attachCustomClick = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new CustomClick_105(
          "CustomClick",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    VideoClicks_103.prototype.addCustomClick = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachCustomClick(content, attributes).and();
    };
    return VideoClicks_103;
  })(vast_element_1.default);
  var StaticResource_108 = /** @class */ (function(_super) {
    __extends(StaticResource_108, _super);
    function StaticResource_108() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return StaticResource_108;
  })(vast_element_1.default);
  var IFrameResource_109 = /** @class */ (function(_super) {
    __extends(IFrameResource_109, _super);
    function IFrameResource_109() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IFrameResource_109;
  })(vast_element_1.default);
  var HTMLResource_110 = /** @class */ (function(_super) {
    __extends(HTMLResource_110, _super);
    function HTMLResource_110() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return HTMLResource_110;
  })(vast_element_1.default);
  var IconClickThrough_112 = /** @class */ (function(_super) {
    __extends(IconClickThrough_112, _super);
    function IconClickThrough_112() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IconClickThrough_112;
  })(vast_element_1.default);
  var IconClickTracking_113 = /** @class */ (function(_super) {
    __extends(IconClickTracking_113, _super);
    function IconClickTracking_113() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IconClickTracking_113;
  })(vast_element_1.default);
  var IconClicks_111 = /** @class */ (function(_super) {
    __extends(IconClicks_111, _super);
    function IconClicks_111() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    IconClicks_111.prototype.attachIconClickThrough = function(content) {
      return p(new IconClickThrough_112("IconClickThrough", this, {}, content));
    };
    IconClicks_111.prototype.addIconClickThrough = function(content) {
      return this.attachIconClickThrough(content).and();
    };
    IconClicks_111.prototype.attachIconClickTracking = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new IconClickTracking_113(
          "IconClickTracking",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    IconClicks_111.prototype.addIconClickTracking = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachIconClickTracking(content, attributes).and();
    };
    return IconClicks_111;
  })(vast_element_1.default);
  var IconViewTracking_114 = /** @class */ (function(_super) {
    __extends(IconViewTracking_114, _super);
    function IconViewTracking_114() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IconViewTracking_114;
  })(vast_element_1.default);
  var Icon_107 = /** @class */ (function(_super) {
    __extends(Icon_107, _super);
    function Icon_107() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Icon_107.prototype.attachStaticResource = function(content, attributes) {
      return p(
        new StaticResource_108(
          "StaticResource",
          this,
          { attrs: ["creativeType"] },
          content,
          attributes
        )
      );
    };
    Icon_107.prototype.addStaticResource = function(content, attributes) {
      return this.attachStaticResource(content, attributes).and();
    };
    Icon_107.prototype.attachIFrameResource = function(content) {
      return p(new IFrameResource_109("IFrameResource", this, {}, content));
    };
    Icon_107.prototype.addIFrameResource = function(content) {
      return this.attachIFrameResource(content).and();
    };
    Icon_107.prototype.attachHTMLResource = function(content) {
      return p(new HTMLResource_110("HTMLResource", this, {}, content));
    };
    Icon_107.prototype.addHTMLResource = function(content) {
      return this.attachHTMLResource(content).and();
    };
    Icon_107.prototype.attachIconClicks = function() {
      return p(new IconClicks_111("IconClicks", this, {}));
    };
    Icon_107.prototype.attachIconViewTracking = function(content) {
      return p(new IconViewTracking_114("IconViewTracking", this, {}, content));
    };
    Icon_107.prototype.addIconViewTracking = function(content) {
      return this.attachIconViewTracking(content).and();
    };
    return Icon_107;
  })(vast_element_1.default);
  var Icons_106 = /** @class */ (function(_super) {
    __extends(Icons_106, _super);
    function Icons_106() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Icons_106.prototype.attachIcon = function(attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Icon_107(
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
    return Icons_106;
  })(vast_element_1.default);
  var InteractiveCreativeFile_115 = /** @class */ (function(_super) {
    __extends(InteractiveCreativeFile_115, _super);
    function InteractiveCreativeFile_115() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return InteractiveCreativeFile_115;
  })(vast_element_1.default);
  var Linear_100 = /** @class */ (function(_super) {
    __extends(Linear_100, _super);
    function Linear_100() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Linear_100.prototype.attachTrackingEvents = function() {
      return p(new TrackingEvents_101("TrackingEvents", this, {}));
    };
    Linear_100.prototype.attachVideoClicks = function() {
      return p(new VideoClicks_103("VideoClicks", this, {}));
    };
    Linear_100.prototype.attachIcons = function() {
      return p(new Icons_106("Icons", this, {}));
    };
    Linear_100.prototype.attachInteractiveCreativeFile = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new InteractiveCreativeFile_115(
          "InteractiveCreativeFile",
          this,
          { attrs: ["type", "apiFramework", "variableDuration"] },
          content,
          attributes
        )
      );
    };
    Linear_100.prototype.addInteractiveCreativeFile = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachInteractiveCreativeFile(content, attributes).and();
    };
    return Linear_100;
  })(vast_element_1.default);
  var NonLinearClickThrough_118 = /** @class */ (function(_super) {
    __extends(NonLinearClickThrough_118, _super);
    function NonLinearClickThrough_118() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return NonLinearClickThrough_118;
  })(vast_element_1.default);
  var NonLinearClickTracking_119 = /** @class */ (function(_super) {
    __extends(NonLinearClickTracking_119, _super);
    function NonLinearClickTracking_119() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return NonLinearClickTracking_119;
  })(vast_element_1.default);
  var NonLinear_117 = /** @class */ (function(_super) {
    __extends(NonLinear_117, _super);
    function NonLinear_117() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    NonLinear_117.prototype.attachNonLinearClickThrough = function(content) {
      return p(
        new NonLinearClickThrough_118(
          "NonLinearClickThrough",
          this,
          {},
          content
        )
      );
    };
    NonLinear_117.prototype.addNonLinearClickThrough = function(content) {
      return this.attachNonLinearClickThrough(content).and();
    };
    NonLinear_117.prototype.attachNonLinearClickTracking = function(content) {
      return p(
        new NonLinearClickTracking_119(
          "NonLinearClickTracking",
          this,
          {},
          content
        )
      );
    };
    NonLinear_117.prototype.addNonLinearClickTracking = function(content) {
      return this.attachNonLinearClickTracking(content).and();
    };
    return NonLinear_117;
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
  var NonLinearAds_116 = /** @class */ (function(_super) {
    __extends(NonLinearAds_116, _super);
    function NonLinearAds_116() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    NonLinearAds_116.prototype.attachNonLinear = function(attributes) {
      return p(
        new NonLinear_117(
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
              "apiFramework",
              "minSuggestedDuration"
            ]
          },
          attributes
        )
      );
    };
    NonLinearAds_116.prototype.attachTrackingEvents = function() {
      return p(new TrackingEvents_120("TrackingEvents", this, {}));
    };
    return NonLinearAds_116;
  })(vast_element_1.default);
  var StaticResource_124 = /** @class */ (function(_super) {
    __extends(StaticResource_124, _super);
    function StaticResource_124() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return StaticResource_124;
  })(vast_element_1.default);
  var IFrameResource_125 = /** @class */ (function(_super) {
    __extends(IFrameResource_125, _super);
    function IFrameResource_125() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IFrameResource_125;
  })(vast_element_1.default);
  var HTMLResource_126 = /** @class */ (function(_super) {
    __extends(HTMLResource_126, _super);
    function HTMLResource_126() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return HTMLResource_126;
  })(vast_element_1.default);
  var AdParameters_127 = /** @class */ (function(_super) {
    __extends(AdParameters_127, _super);
    function AdParameters_127() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return AdParameters_127;
  })(vast_element_1.default);
  var AltText_128 = /** @class */ (function(_super) {
    __extends(AltText_128, _super);
    function AltText_128() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return AltText_128;
  })(vast_element_1.default);
  var CompanionClickThrough_129 = /** @class */ (function(_super) {
    __extends(CompanionClickThrough_129, _super);
    function CompanionClickThrough_129() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return CompanionClickThrough_129;
  })(vast_element_1.default);
  var CompanionClickTracking_130 = /** @class */ (function(_super) {
    __extends(CompanionClickTracking_130, _super);
    function CompanionClickTracking_130() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return CompanionClickTracking_130;
  })(vast_element_1.default);
  var Tracking_132 = /** @class */ (function(_super) {
    __extends(Tracking_132, _super);
    function Tracking_132() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Tracking_132;
  })(vast_element_1.default);
  var TrackingEvents_131 = /** @class */ (function(_super) {
    __extends(TrackingEvents_131, _super);
    function TrackingEvents_131() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    TrackingEvents_131.prototype.attachTracking = function(
      content,
      attributes
    ) {
      return p(
        new Tracking_132(
          "Tracking",
          this,
          { attrs: ["event"] },
          content,
          attributes
        )
      );
    };
    TrackingEvents_131.prototype.addTracking = function(content, attributes) {
      return this.attachTracking(content, attributes).and();
    };
    return TrackingEvents_131;
  })(vast_element_1.default);
  var Companion_123 = /** @class */ (function(_super) {
    __extends(Companion_123, _super);
    function Companion_123() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Companion_123.prototype.attachStaticResource = function(
      content,
      attributes
    ) {
      return p(
        new StaticResource_124(
          "StaticResource",
          this,
          { attrs: ["creativeType"] },
          content,
          attributes
        )
      );
    };
    Companion_123.prototype.addStaticResource = function(content, attributes) {
      return this.attachStaticResource(content, attributes).and();
    };
    Companion_123.prototype.attachIFrameResource = function(content) {
      return p(new IFrameResource_125("IFrameResource", this, {}, content));
    };
    Companion_123.prototype.addIFrameResource = function(content) {
      return this.attachIFrameResource(content).and();
    };
    Companion_123.prototype.attachHTMLResource = function(content) {
      return p(new HTMLResource_126("HTMLResource", this, {}, content));
    };
    Companion_123.prototype.addHTMLResource = function(content) {
      return this.attachHTMLResource(content).and();
    };
    Companion_123.prototype.attachAdParameters = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new AdParameters_127(
          "AdParameters",
          this,
          { attrs: ["xmlEncoded"] },
          content,
          attributes
        )
      );
    };
    Companion_123.prototype.addAdParameters = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachAdParameters(content, attributes).and();
    };
    Companion_123.prototype.attachAltText = function(content) {
      return p(new AltText_128("AltText", this, {}, content));
    };
    Companion_123.prototype.addAltText = function(content) {
      return this.attachAltText(content).and();
    };
    Companion_123.prototype.attachCompanionClickThrough = function(content) {
      return p(
        new CompanionClickThrough_129(
          "CompanionClickThrough",
          this,
          {},
          content
        )
      );
    };
    Companion_123.prototype.addCompanionClickThrough = function(content) {
      return this.attachCompanionClickThrough(content).and();
    };
    Companion_123.prototype.attachCompanionClickTracking = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new CompanionClickTracking_130(
          "CompanionClickTracking",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    Companion_123.prototype.addCompanionClickTracking = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachCompanionClickTracking(content, attributes).and();
    };
    Companion_123.prototype.attachTrackingEvents = function() {
      return p(new TrackingEvents_131("TrackingEvents", this, {}));
    };
    return Companion_123;
  })(vast_element_1.default);
  var CompanionAds_122 = /** @class */ (function(_super) {
    __extends(CompanionAds_122, _super);
    function CompanionAds_122() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    CompanionAds_122.prototype.attachCompanion = function(attributes) {
      return p(
        new Companion_123(
          "Companion",
          this,
          {
            attrs: [
              "width",
              "height",
              "id",
              "assetWidth",
              "assetHeight",
              "expandedWidth",
              "expandedHeight",
              "apiFramework",
              "adSlotID",
              "pxratio",
              "renderingMode"
            ]
          },
          attributes
        )
      );
    };
    return CompanionAds_122;
  })(vast_element_1.default);
  var Creative_99 = /** @class */ (function(_super) {
    __extends(Creative_99, _super);
    function Creative_99() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Creative_99.prototype.attachLinear = function() {
      return p(new Linear_100("Linear", this, {}));
    };
    Creative_99.prototype.attachNonLinearAds = function() {
      return p(new NonLinearAds_116("NonLinearAds", this, {}));
    };
    Creative_99.prototype.attachCompanionAds = function(attributes) {
      return p(
        new CompanionAds_122(
          "CompanionAds",
          this,
          { attrs: ["required"] },
          attributes
        )
      );
    };
    return Creative_99;
  })(vast_element_1.default);
  var Creatives_98 = /** @class */ (function(_super) {
    __extends(Creatives_98, _super);
    function Creatives_98() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Creatives_98.prototype.attachCreative = function(attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Creative_99(
          "Creative",
          this,
          { attrs: ["id", "sequence", "adId"] },
          attributes
        )
      );
    };
    return Creatives_98;
  })(vast_element_1.default);
  var Wrapper_78 = /** @class */ (function(_super) {
    __extends(Wrapper_78, _super);
    function Wrapper_78() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Wrapper_78.prototype.attachImpression = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Impression_79(
          "Impression",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    Wrapper_78.prototype.addImpression = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachImpression(content, attributes).and();
    };
    Wrapper_78.prototype.attachVASTAdTagURI = function(content) {
      return p(new VASTAdTagURI_80("VASTAdTagURI", this, {}, content));
    };
    Wrapper_78.prototype.addVASTAdTagURI = function(content) {
      return this.attachVASTAdTagURI(content).and();
    };
    Wrapper_78.prototype.attachAdSystem = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new AdSystem_81(
          "AdSystem",
          this,
          { attrs: ["version"] },
          content,
          attributes
        )
      );
    };
    Wrapper_78.prototype.addAdSystem = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachAdSystem(content, attributes).and();
    };
    Wrapper_78.prototype.attachPricing = function(content, attributes) {
      return p(
        new Pricing_82(
          "Pricing",
          this,
          { attrs: ["currency", "model"] },
          content,
          attributes
        )
      );
    };
    Wrapper_78.prototype.addPricing = function(content, attributes) {
      return this.attachPricing(content, attributes).and();
    };
    Wrapper_78.prototype.attachError = function(content) {
      return p(new Error_83("Error", this, {}, content));
    };
    Wrapper_78.prototype.addError = function(content) {
      return this.attachError(content).and();
    };
    Wrapper_78.prototype.attachViewableImpression = function(attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new ViewableImpression_84(
          "ViewableImpression",
          this,
          { attrs: ["id"] },
          attributes
        )
      );
    };
    Wrapper_78.prototype.attachAdVerifications = function() {
      return p(new AdVerifications_88("AdVerifications", this, {}));
    };
    Wrapper_78.prototype.attachExtensions = function() {
      return p(new Extensions_96("Extensions", this, {}));
    };
    Wrapper_78.prototype.attachCreatives = function() {
      return p(new Creatives_98("Creatives", this, {}));
    };
    return Wrapper_78;
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
        new Wrapper_78(
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
          { attrs: ["id", "sequence", "conditionalAd", "adType"] },
          attributes
        )
      );
    };
    return VAST_4;
  })(vast_element_1.default);
  exports.VAST_4 = VAST_4;
  var apiv4_1 = /** @class */ (function(_super) {
    __extends(apiv4_1, _super);
    function apiv4_1() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    apiv4_1.prototype.attachVAST = function(attributes) {
      return p(new VAST_4("VAST", this, { attrs: ["version"] }, attributes));
    };
    apiv4_1.prototype.and = function() {
      return this;
    };
    return apiv4_1;
  })(vast_element_1.default);
  exports.apiv4_1 = apiv4_1;
});
//# sourceMappingURL=vast4_1.js.map
