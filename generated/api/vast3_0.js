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
  var Error_4 = /** @class */ (function(_super) {
    __extends(Error_4, _super);
    function Error_4() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Error_4;
  })(vast_element_1.default);
  var AdSystem_7 = /** @class */ (function(_super) {
    __extends(AdSystem_7, _super);
    function AdSystem_7() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return AdSystem_7;
  })(vast_element_1.default);
  var AdTitle_8 = /** @class */ (function(_super) {
    __extends(AdTitle_8, _super);
    function AdTitle_8() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return AdTitle_8;
  })(vast_element_1.default);
  var Description_9 = /** @class */ (function(_super) {
    __extends(Description_9, _super);
    function Description_9() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Description_9;
  })(vast_element_1.default);
  var Advertiser_10 = /** @class */ (function(_super) {
    __extends(Advertiser_10, _super);
    function Advertiser_10() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Advertiser_10;
  })(vast_element_1.default);
  var Pricing_11 = /** @class */ (function(_super) {
    __extends(Pricing_11, _super);
    function Pricing_11() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Pricing_11;
  })(vast_element_1.default);
  var Survey_12 = /** @class */ (function(_super) {
    __extends(Survey_12, _super);
    function Survey_12() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Survey_12;
  })(vast_element_1.default);
  var Error_13 = /** @class */ (function(_super) {
    __extends(Error_13, _super);
    function Error_13() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Error_13;
  })(vast_element_1.default);
  var Impression_14 = /** @class */ (function(_super) {
    __extends(Impression_14, _super);
    function Impression_14() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Impression_14;
  })(vast_element_1.default);
  var CreativeExtension_18 = /** @class */ (function(_super) {
    __extends(CreativeExtension_18, _super);
    function CreativeExtension_18() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return CreativeExtension_18;
  })(vast_element_1.default);
  var CreativeExtensions_17 = /** @class */ (function(_super) {
    __extends(CreativeExtensions_17, _super);
    function CreativeExtensions_17() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    CreativeExtensions_17.prototype.attachCreativeExtension = function(
      content
    ) {
      return p(
        new CreativeExtension_18("CreativeExtension", this, {}, content)
      );
    };
    CreativeExtensions_17.prototype.addCreativeExtension = function(content) {
      return this.attachCreativeExtension(content).and();
    };
    return CreativeExtensions_17;
  })(vast_element_1.default);
  var AdParameters_20 = /** @class */ (function(_super) {
    __extends(AdParameters_20, _super);
    function AdParameters_20() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return AdParameters_20;
  })(vast_element_1.default);
  var Duration_21 = /** @class */ (function(_super) {
    __extends(Duration_21, _super);
    function Duration_21() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Duration_21;
  })(vast_element_1.default);
  var MediaFile_23 = /** @class */ (function(_super) {
    __extends(MediaFile_23, _super);
    function MediaFile_23() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return MediaFile_23;
  })(vast_element_1.default);
  var MediaFiles_22 = /** @class */ (function(_super) {
    __extends(MediaFiles_22, _super);
    function MediaFiles_22() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    MediaFiles_22.prototype.attachMediaFile = function(content, attributes) {
      return p(
        new MediaFile_23(
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
    MediaFiles_22.prototype.addMediaFile = function(content, attributes) {
      return this.attachMediaFile(content, attributes).and();
    };
    return MediaFiles_22;
  })(vast_element_1.default);
  var Tracking_25 = /** @class */ (function(_super) {
    __extends(Tracking_25, _super);
    function Tracking_25() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Tracking_25;
  })(vast_element_1.default);
  var TrackingEvents_24 = /** @class */ (function(_super) {
    __extends(TrackingEvents_24, _super);
    function TrackingEvents_24() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    TrackingEvents_24.prototype.attachTracking = function(content, attributes) {
      return p(
        new Tracking_25(
          "Tracking",
          this,
          { attrs: ["offset", "event"] },
          content,
          attributes
        )
      );
    };
    TrackingEvents_24.prototype.addTracking = function(content, attributes) {
      return this.attachTracking(content, attributes).and();
    };
    return TrackingEvents_24;
  })(vast_element_1.default);
  var ClickThrough_27 = /** @class */ (function(_super) {
    __extends(ClickThrough_27, _super);
    function ClickThrough_27() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return ClickThrough_27;
  })(vast_element_1.default);
  var ClickTracking_28 = /** @class */ (function(_super) {
    __extends(ClickTracking_28, _super);
    function ClickTracking_28() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return ClickTracking_28;
  })(vast_element_1.default);
  var CustomClick_29 = /** @class */ (function(_super) {
    __extends(CustomClick_29, _super);
    function CustomClick_29() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return CustomClick_29;
  })(vast_element_1.default);
  var VideoClicks_26 = /** @class */ (function(_super) {
    __extends(VideoClicks_26, _super);
    function VideoClicks_26() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    VideoClicks_26.prototype.attachClickThrough = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new ClickThrough_27(
          "ClickThrough",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    VideoClicks_26.prototype.addClickThrough = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachClickThrough(content, attributes).and();
    };
    VideoClicks_26.prototype.attachClickTracking = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new ClickTracking_28(
          "ClickTracking",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    VideoClicks_26.prototype.addClickTracking = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachClickTracking(content, attributes).and();
    };
    VideoClicks_26.prototype.attachCustomClick = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new CustomClick_29(
          "CustomClick",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    VideoClicks_26.prototype.addCustomClick = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachCustomClick(content, attributes).and();
    };
    return VideoClicks_26;
  })(vast_element_1.default);
  var StaticResource_32 = /** @class */ (function(_super) {
    __extends(StaticResource_32, _super);
    function StaticResource_32() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return StaticResource_32;
  })(vast_element_1.default);
  var IFrameResource_33 = /** @class */ (function(_super) {
    __extends(IFrameResource_33, _super);
    function IFrameResource_33() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IFrameResource_33;
  })(vast_element_1.default);
  var HTMLResource_34 = /** @class */ (function(_super) {
    __extends(HTMLResource_34, _super);
    function HTMLResource_34() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return HTMLResource_34;
  })(vast_element_1.default);
  var IconClickThrough_36 = /** @class */ (function(_super) {
    __extends(IconClickThrough_36, _super);
    function IconClickThrough_36() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IconClickThrough_36;
  })(vast_element_1.default);
  var IconClickTracking_37 = /** @class */ (function(_super) {
    __extends(IconClickTracking_37, _super);
    function IconClickTracking_37() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IconClickTracking_37;
  })(vast_element_1.default);
  var IconClicks_35 = /** @class */ (function(_super) {
    __extends(IconClicks_35, _super);
    function IconClicks_35() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    IconClicks_35.prototype.attachIconClickThrough = function(content) {
      return p(new IconClickThrough_36("IconClickThrough", this, {}, content));
    };
    IconClicks_35.prototype.addIconClickThrough = function(content) {
      return this.attachIconClickThrough(content).and();
    };
    IconClicks_35.prototype.attachIconClickTracking = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new IconClickTracking_37(
          "IconClickTracking",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    IconClicks_35.prototype.addIconClickTracking = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachIconClickTracking(content, attributes).and();
    };
    return IconClicks_35;
  })(vast_element_1.default);
  var IconViewTracking_38 = /** @class */ (function(_super) {
    __extends(IconViewTracking_38, _super);
    function IconViewTracking_38() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IconViewTracking_38;
  })(vast_element_1.default);
  var Icon_31 = /** @class */ (function(_super) {
    __extends(Icon_31, _super);
    function Icon_31() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Icon_31.prototype.attachStaticResource = function(content, attributes) {
      return p(
        new StaticResource_32(
          "StaticResource",
          this,
          { attrs: ["creativeType"] },
          content,
          attributes
        )
      );
    };
    Icon_31.prototype.addStaticResource = function(content, attributes) {
      return this.attachStaticResource(content, attributes).and();
    };
    Icon_31.prototype.attachIFrameResource = function(content) {
      return p(new IFrameResource_33("IFrameResource", this, {}, content));
    };
    Icon_31.prototype.addIFrameResource = function(content) {
      return this.attachIFrameResource(content).and();
    };
    Icon_31.prototype.attachHTMLResource = function(content) {
      return p(new HTMLResource_34("HTMLResource", this, {}, content));
    };
    Icon_31.prototype.addHTMLResource = function(content) {
      return this.attachHTMLResource(content).and();
    };
    Icon_31.prototype.attachIconClicks = function() {
      return p(new IconClicks_35("IconClicks", this, {}));
    };
    Icon_31.prototype.attachIconViewTracking = function(content) {
      return p(new IconViewTracking_38("IconViewTracking", this, {}, content));
    };
    Icon_31.prototype.addIconViewTracking = function(content) {
      return this.attachIconViewTracking(content).and();
    };
    return Icon_31;
  })(vast_element_1.default);
  var Icons_30 = /** @class */ (function(_super) {
    __extends(Icons_30, _super);
    function Icons_30() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Icons_30.prototype.attachIcon = function(attributes) {
      return p(
        new Icon_31(
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
              "apiFramework"
            ]
          },
          attributes
        )
      );
    };
    return Icons_30;
  })(vast_element_1.default);
  var Linear_19 = /** @class */ (function(_super) {
    __extends(Linear_19, _super);
    function Linear_19() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Linear_19.prototype.attachAdParameters = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new AdParameters_20(
          "AdParameters",
          this,
          { attrs: ["xmlEncoded"] },
          content,
          attributes
        )
      );
    };
    Linear_19.prototype.addAdParameters = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachAdParameters(content, attributes).and();
    };
    Linear_19.prototype.attachDuration = function(content) {
      return p(new Duration_21("Duration", this, {}, content));
    };
    Linear_19.prototype.addDuration = function(content) {
      return this.attachDuration(content).and();
    };
    Linear_19.prototype.attachMediaFiles = function() {
      return p(new MediaFiles_22("MediaFiles", this, {}));
    };
    Linear_19.prototype.attachTrackingEvents = function() {
      return p(new TrackingEvents_24("TrackingEvents", this, {}));
    };
    Linear_19.prototype.attachVideoClicks = function() {
      return p(new VideoClicks_26("VideoClicks", this, {}));
    };
    Linear_19.prototype.attachIcons = function() {
      return p(new Icons_30("Icons", this, {}));
    };
    return Linear_19;
  })(vast_element_1.default);
  var StaticResource_41 = /** @class */ (function(_super) {
    __extends(StaticResource_41, _super);
    function StaticResource_41() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return StaticResource_41;
  })(vast_element_1.default);
  var IFrameResource_42 = /** @class */ (function(_super) {
    __extends(IFrameResource_42, _super);
    function IFrameResource_42() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IFrameResource_42;
  })(vast_element_1.default);
  var HTMLResource_43 = /** @class */ (function(_super) {
    __extends(HTMLResource_43, _super);
    function HTMLResource_43() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return HTMLResource_43;
  })(vast_element_1.default);
  var AdParameters_44 = /** @class */ (function(_super) {
    __extends(AdParameters_44, _super);
    function AdParameters_44() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return AdParameters_44;
  })(vast_element_1.default);
  var AltText_45 = /** @class */ (function(_super) {
    __extends(AltText_45, _super);
    function AltText_45() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return AltText_45;
  })(vast_element_1.default);
  var CompanionClickThrough_46 = /** @class */ (function(_super) {
    __extends(CompanionClickThrough_46, _super);
    function CompanionClickThrough_46() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return CompanionClickThrough_46;
  })(vast_element_1.default);
  var CompanionClickTracking_47 = /** @class */ (function(_super) {
    __extends(CompanionClickTracking_47, _super);
    function CompanionClickTracking_47() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return CompanionClickTracking_47;
  })(vast_element_1.default);
  var Tracking_49 = /** @class */ (function(_super) {
    __extends(Tracking_49, _super);
    function Tracking_49() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Tracking_49;
  })(vast_element_1.default);
  var TrackingEvents_48 = /** @class */ (function(_super) {
    __extends(TrackingEvents_48, _super);
    function TrackingEvents_48() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    TrackingEvents_48.prototype.attachTracking = function(content, attributes) {
      return p(
        new Tracking_49(
          "Tracking",
          this,
          { attrs: ["event"] },
          content,
          attributes
        )
      );
    };
    TrackingEvents_48.prototype.addTracking = function(content, attributes) {
      return this.attachTracking(content, attributes).and();
    };
    return TrackingEvents_48;
  })(vast_element_1.default);
  var Companion_40 = /** @class */ (function(_super) {
    __extends(Companion_40, _super);
    function Companion_40() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Companion_40.prototype.attachStaticResource = function(
      content,
      attributes
    ) {
      return p(
        new StaticResource_41(
          "StaticResource",
          this,
          { attrs: ["creativeType"] },
          content,
          attributes
        )
      );
    };
    Companion_40.prototype.addStaticResource = function(content, attributes) {
      return this.attachStaticResource(content, attributes).and();
    };
    Companion_40.prototype.attachIFrameResource = function(content) {
      return p(new IFrameResource_42("IFrameResource", this, {}, content));
    };
    Companion_40.prototype.addIFrameResource = function(content) {
      return this.attachIFrameResource(content).and();
    };
    Companion_40.prototype.attachHTMLResource = function(content) {
      return p(new HTMLResource_43("HTMLResource", this, {}, content));
    };
    Companion_40.prototype.addHTMLResource = function(content) {
      return this.attachHTMLResource(content).and();
    };
    Companion_40.prototype.attachAdParameters = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new AdParameters_44(
          "AdParameters",
          this,
          { attrs: ["xmlEncoded"] },
          content,
          attributes
        )
      );
    };
    Companion_40.prototype.addAdParameters = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachAdParameters(content, attributes).and();
    };
    Companion_40.prototype.attachAltText = function(content) {
      return p(new AltText_45("AltText", this, {}, content));
    };
    Companion_40.prototype.addAltText = function(content) {
      return this.attachAltText(content).and();
    };
    Companion_40.prototype.attachCompanionClickThrough = function(content) {
      return p(
        new CompanionClickThrough_46("CompanionClickThrough", this, {}, content)
      );
    };
    Companion_40.prototype.addCompanionClickThrough = function(content) {
      return this.attachCompanionClickThrough(content).and();
    };
    Companion_40.prototype.attachCompanionClickTracking = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new CompanionClickTracking_47(
          "CompanionClickTracking",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    Companion_40.prototype.addCompanionClickTracking = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachCompanionClickTracking(content, attributes).and();
    };
    Companion_40.prototype.attachTrackingEvents = function() {
      return p(new TrackingEvents_48("TrackingEvents", this, {}));
    };
    return Companion_40;
  })(vast_element_1.default);
  var CompanionAds_39 = /** @class */ (function(_super) {
    __extends(CompanionAds_39, _super);
    function CompanionAds_39() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    CompanionAds_39.prototype.attachCompanion = function(attributes) {
      return p(
        new Companion_40(
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
              "adSlotID"
            ]
          },
          attributes
        )
      );
    };
    return CompanionAds_39;
  })(vast_element_1.default);
  var StaticResource_52 = /** @class */ (function(_super) {
    __extends(StaticResource_52, _super);
    function StaticResource_52() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return StaticResource_52;
  })(vast_element_1.default);
  var IFrameResource_53 = /** @class */ (function(_super) {
    __extends(IFrameResource_53, _super);
    function IFrameResource_53() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IFrameResource_53;
  })(vast_element_1.default);
  var HTMLResource_54 = /** @class */ (function(_super) {
    __extends(HTMLResource_54, _super);
    function HTMLResource_54() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return HTMLResource_54;
  })(vast_element_1.default);
  var NonLinearClickThrough_55 = /** @class */ (function(_super) {
    __extends(NonLinearClickThrough_55, _super);
    function NonLinearClickThrough_55() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return NonLinearClickThrough_55;
  })(vast_element_1.default);
  var NonLinearClickTracking_56 = /** @class */ (function(_super) {
    __extends(NonLinearClickTracking_56, _super);
    function NonLinearClickTracking_56() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return NonLinearClickTracking_56;
  })(vast_element_1.default);
  var AdParameters_57 = /** @class */ (function(_super) {
    __extends(AdParameters_57, _super);
    function AdParameters_57() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return AdParameters_57;
  })(vast_element_1.default);
  var NonLinear_51 = /** @class */ (function(_super) {
    __extends(NonLinear_51, _super);
    function NonLinear_51() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    NonLinear_51.prototype.attachStaticResource = function(
      content,
      attributes
    ) {
      return p(
        new StaticResource_52(
          "StaticResource",
          this,
          { attrs: ["creativeType"] },
          content,
          attributes
        )
      );
    };
    NonLinear_51.prototype.addStaticResource = function(content, attributes) {
      return this.attachStaticResource(content, attributes).and();
    };
    NonLinear_51.prototype.attachIFrameResource = function(content) {
      return p(new IFrameResource_53("IFrameResource", this, {}, content));
    };
    NonLinear_51.prototype.addIFrameResource = function(content) {
      return this.attachIFrameResource(content).and();
    };
    NonLinear_51.prototype.attachHTMLResource = function(content) {
      return p(new HTMLResource_54("HTMLResource", this, {}, content));
    };
    NonLinear_51.prototype.addHTMLResource = function(content) {
      return this.attachHTMLResource(content).and();
    };
    NonLinear_51.prototype.attachNonLinearClickThrough = function(content) {
      return p(
        new NonLinearClickThrough_55("NonLinearClickThrough", this, {}, content)
      );
    };
    NonLinear_51.prototype.addNonLinearClickThrough = function(content) {
      return this.attachNonLinearClickThrough(content).and();
    };
    NonLinear_51.prototype.attachNonLinearClickTracking = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new NonLinearClickTracking_56(
          "NonLinearClickTracking",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    NonLinear_51.prototype.addNonLinearClickTracking = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachNonLinearClickTracking(content, attributes).and();
    };
    NonLinear_51.prototype.attachAdParameters = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new AdParameters_57(
          "AdParameters",
          this,
          { attrs: ["xmlEncoded"] },
          content,
          attributes
        )
      );
    };
    NonLinear_51.prototype.addAdParameters = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachAdParameters(content, attributes).and();
    };
    return NonLinear_51;
  })(vast_element_1.default);
  var Tracking_59 = /** @class */ (function(_super) {
    __extends(Tracking_59, _super);
    function Tracking_59() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Tracking_59;
  })(vast_element_1.default);
  var TrackingEvents_58 = /** @class */ (function(_super) {
    __extends(TrackingEvents_58, _super);
    function TrackingEvents_58() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    TrackingEvents_58.prototype.attachTracking = function(content, attributes) {
      return p(
        new Tracking_59(
          "Tracking",
          this,
          { attrs: ["offset", "event"] },
          content,
          attributes
        )
      );
    };
    TrackingEvents_58.prototype.addTracking = function(content, attributes) {
      return this.attachTracking(content, attributes).and();
    };
    return TrackingEvents_58;
  })(vast_element_1.default);
  var NonLinearAds_50 = /** @class */ (function(_super) {
    __extends(NonLinearAds_50, _super);
    function NonLinearAds_50() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    NonLinearAds_50.prototype.attachNonLinear = function(attributes) {
      return p(
        new NonLinear_51(
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
    NonLinearAds_50.prototype.attachTrackingEvents = function() {
      return p(new TrackingEvents_58("TrackingEvents", this, {}));
    };
    return NonLinearAds_50;
  })(vast_element_1.default);
  var Creative_16 = /** @class */ (function(_super) {
    __extends(Creative_16, _super);
    function Creative_16() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Creative_16.prototype.attachCreativeExtensions = function() {
      return p(new CreativeExtensions_17("CreativeExtensions", this, {}));
    };
    Creative_16.prototype.attachLinear = function(attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Linear_19("Linear", this, { attrs: ["skipoffset"] }, attributes)
      );
    };
    Creative_16.prototype.attachCompanionAds = function(attributes) {
      return p(
        new CompanionAds_39(
          "CompanionAds",
          this,
          { attrs: ["required"] },
          attributes
        )
      );
    };
    Creative_16.prototype.attachNonLinearAds = function() {
      return p(new NonLinearAds_50("NonLinearAds", this, {}));
    };
    return Creative_16;
  })(vast_element_1.default);
  var Creatives_15 = /** @class */ (function(_super) {
    __extends(Creatives_15, _super);
    function Creatives_15() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Creatives_15.prototype.attachCreative = function(attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Creative_16(
          "Creative",
          this,
          { attrs: ["id", "sequence", "adID", "apiFramework"] },
          attributes
        )
      );
    };
    return Creatives_15;
  })(vast_element_1.default);
  var Extension_61 = /** @class */ (function(_super) {
    __extends(Extension_61, _super);
    function Extension_61() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Extension_61;
  })(vast_element_1.default);
  var Extensions_60 = /** @class */ (function(_super) {
    __extends(Extensions_60, _super);
    function Extensions_60() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Extensions_60.prototype.attachExtension = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Extension_61(
          "Extension",
          this,
          { attrs: ["type"] },
          content,
          attributes
        )
      );
    };
    Extensions_60.prototype.addExtension = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachExtension(content, attributes).and();
    };
    return Extensions_60;
  })(vast_element_1.default);
  var InLine_6 = /** @class */ (function(_super) {
    __extends(InLine_6, _super);
    function InLine_6() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    InLine_6.prototype.attachAdSystem = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new AdSystem_7(
          "AdSystem",
          this,
          { attrs: ["version"] },
          content,
          attributes
        )
      );
    };
    InLine_6.prototype.addAdSystem = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachAdSystem(content, attributes).and();
    };
    InLine_6.prototype.attachAdTitle = function(content) {
      return p(new AdTitle_8("AdTitle", this, {}, content));
    };
    InLine_6.prototype.addAdTitle = function(content) {
      return this.attachAdTitle(content).and();
    };
    InLine_6.prototype.attachDescription = function(content) {
      return p(new Description_9("Description", this, {}, content));
    };
    InLine_6.prototype.addDescription = function(content) {
      return this.attachDescription(content).and();
    };
    InLine_6.prototype.attachAdvertiser = function(content) {
      return p(new Advertiser_10("Advertiser", this, {}, content));
    };
    InLine_6.prototype.addAdvertiser = function(content) {
      return this.attachAdvertiser(content).and();
    };
    InLine_6.prototype.attachPricing = function(content, attributes) {
      return p(
        new Pricing_11(
          "Pricing",
          this,
          { attrs: ["currency", "model"] },
          content,
          attributes
        )
      );
    };
    InLine_6.prototype.addPricing = function(content, attributes) {
      return this.attachPricing(content, attributes).and();
    };
    InLine_6.prototype.attachSurvey = function(content) {
      return p(new Survey_12("Survey", this, {}, content));
    };
    InLine_6.prototype.addSurvey = function(content) {
      return this.attachSurvey(content).and();
    };
    InLine_6.prototype.attachError = function(content) {
      return p(new Error_13("Error", this, {}, content));
    };
    InLine_6.prototype.addError = function(content) {
      return this.attachError(content).and();
    };
    InLine_6.prototype.attachImpression = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Impression_14(
          "Impression",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    InLine_6.prototype.addImpression = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachImpression(content, attributes).and();
    };
    InLine_6.prototype.attachCreatives = function() {
      return p(new Creatives_15("Creatives", this, {}));
    };
    InLine_6.prototype.attachExtensions = function() {
      return p(new Extensions_60("Extensions", this, {}));
    };
    return InLine_6;
  })(vast_element_1.default);
  var AdSystem_63 = /** @class */ (function(_super) {
    __extends(AdSystem_63, _super);
    function AdSystem_63() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return AdSystem_63;
  })(vast_element_1.default);
  var VASTAdTagURI_64 = /** @class */ (function(_super) {
    __extends(VASTAdTagURI_64, _super);
    function VASTAdTagURI_64() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return VASTAdTagURI_64;
  })(vast_element_1.default);
  var Error_65 = /** @class */ (function(_super) {
    __extends(Error_65, _super);
    function Error_65() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Error_65;
  })(vast_element_1.default);
  var Impression_66 = /** @class */ (function(_super) {
    __extends(Impression_66, _super);
    function Impression_66() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Impression_66;
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
          { attrs: ["offset", "event"] },
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
  var ClickTracking_73 = /** @class */ (function(_super) {
    __extends(ClickTracking_73, _super);
    function ClickTracking_73() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return ClickTracking_73;
  })(vast_element_1.default);
  var CustomClick_74 = /** @class */ (function(_super) {
    __extends(CustomClick_74, _super);
    function CustomClick_74() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return CustomClick_74;
  })(vast_element_1.default);
  var VideoClicks_72 = /** @class */ (function(_super) {
    __extends(VideoClicks_72, _super);
    function VideoClicks_72() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    VideoClicks_72.prototype.attachClickTracking = function(
      content,
      attributes
    ) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new ClickTracking_73(
          "ClickTracking",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    VideoClicks_72.prototype.addClickTracking = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachClickTracking(content, attributes).and();
    };
    VideoClicks_72.prototype.attachCustomClick = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new CustomClick_74(
          "CustomClick",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    VideoClicks_72.prototype.addCustomClick = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachCustomClick(content, attributes).and();
    };
    return VideoClicks_72;
  })(vast_element_1.default);
  var StaticResource_77 = /** @class */ (function(_super) {
    __extends(StaticResource_77, _super);
    function StaticResource_77() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return StaticResource_77;
  })(vast_element_1.default);
  var IFrameResource_78 = /** @class */ (function(_super) {
    __extends(IFrameResource_78, _super);
    function IFrameResource_78() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IFrameResource_78;
  })(vast_element_1.default);
  var HTMLResource_79 = /** @class */ (function(_super) {
    __extends(HTMLResource_79, _super);
    function HTMLResource_79() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return HTMLResource_79;
  })(vast_element_1.default);
  var IconClickThrough_81 = /** @class */ (function(_super) {
    __extends(IconClickThrough_81, _super);
    function IconClickThrough_81() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IconClickThrough_81;
  })(vast_element_1.default);
  var IconClickTracking_82 = /** @class */ (function(_super) {
    __extends(IconClickTracking_82, _super);
    function IconClickTracking_82() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IconClickTracking_82;
  })(vast_element_1.default);
  var IconClicks_80 = /** @class */ (function(_super) {
    __extends(IconClicks_80, _super);
    function IconClicks_80() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    IconClicks_80.prototype.attachIconClickThrough = function(content) {
      return p(new IconClickThrough_81("IconClickThrough", this, {}, content));
    };
    IconClicks_80.prototype.addIconClickThrough = function(content) {
      return this.attachIconClickThrough(content).and();
    };
    IconClicks_80.prototype.attachIconClickTracking = function(content) {
      return p(
        new IconClickTracking_82("IconClickTracking", this, {}, content)
      );
    };
    IconClicks_80.prototype.addIconClickTracking = function(content) {
      return this.attachIconClickTracking(content).and();
    };
    return IconClicks_80;
  })(vast_element_1.default);
  var IconViewTracking_83 = /** @class */ (function(_super) {
    __extends(IconViewTracking_83, _super);
    function IconViewTracking_83() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IconViewTracking_83;
  })(vast_element_1.default);
  var Icon_76 = /** @class */ (function(_super) {
    __extends(Icon_76, _super);
    function Icon_76() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Icon_76.prototype.attachStaticResource = function(content, attributes) {
      return p(
        new StaticResource_77(
          "StaticResource",
          this,
          { attrs: ["creativeType"] },
          content,
          attributes
        )
      );
    };
    Icon_76.prototype.addStaticResource = function(content, attributes) {
      return this.attachStaticResource(content, attributes).and();
    };
    Icon_76.prototype.attachIFrameResource = function(content) {
      return p(new IFrameResource_78("IFrameResource", this, {}, content));
    };
    Icon_76.prototype.addIFrameResource = function(content) {
      return this.attachIFrameResource(content).and();
    };
    Icon_76.prototype.attachHTMLResource = function(content) {
      return p(new HTMLResource_79("HTMLResource", this, {}, content));
    };
    Icon_76.prototype.addHTMLResource = function(content) {
      return this.attachHTMLResource(content).and();
    };
    Icon_76.prototype.attachIconClicks = function() {
      return p(new IconClicks_80("IconClicks", this, {}));
    };
    Icon_76.prototype.attachIconViewTracking = function(content) {
      return p(new IconViewTracking_83("IconViewTracking", this, {}, content));
    };
    Icon_76.prototype.addIconViewTracking = function(content) {
      return this.attachIconViewTracking(content).and();
    };
    return Icon_76;
  })(vast_element_1.default);
  var Icons_75 = /** @class */ (function(_super) {
    __extends(Icons_75, _super);
    function Icons_75() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Icons_75.prototype.attachIcon = function(attributes) {
      return p(
        new Icon_76(
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
              "apiFramework"
            ]
          },
          attributes
        )
      );
    };
    return Icons_75;
  })(vast_element_1.default);
  var Linear_69 = /** @class */ (function(_super) {
    __extends(Linear_69, _super);
    function Linear_69() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Linear_69.prototype.attachTrackingEvents = function() {
      return p(new TrackingEvents_70("TrackingEvents", this, {}));
    };
    Linear_69.prototype.attachVideoClicks = function() {
      return p(new VideoClicks_72("VideoClicks", this, {}));
    };
    Linear_69.prototype.attachIcons = function() {
      return p(new Icons_75("Icons", this, {}));
    };
    return Linear_69;
  })(vast_element_1.default);
  var StaticResource_86 = /** @class */ (function(_super) {
    __extends(StaticResource_86, _super);
    function StaticResource_86() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return StaticResource_86;
  })(vast_element_1.default);
  var IFrameResource_87 = /** @class */ (function(_super) {
    __extends(IFrameResource_87, _super);
    function IFrameResource_87() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IFrameResource_87;
  })(vast_element_1.default);
  var HTMLResource_88 = /** @class */ (function(_super) {
    __extends(HTMLResource_88, _super);
    function HTMLResource_88() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return HTMLResource_88;
  })(vast_element_1.default);
  var AdParameters_89 = /** @class */ (function(_super) {
    __extends(AdParameters_89, _super);
    function AdParameters_89() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return AdParameters_89;
  })(vast_element_1.default);
  var AltText_90 = /** @class */ (function(_super) {
    __extends(AltText_90, _super);
    function AltText_90() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return AltText_90;
  })(vast_element_1.default);
  var CompanionClickThrough_91 = /** @class */ (function(_super) {
    __extends(CompanionClickThrough_91, _super);
    function CompanionClickThrough_91() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return CompanionClickThrough_91;
  })(vast_element_1.default);
  var CompanionClickTracking_92 = /** @class */ (function(_super) {
    __extends(CompanionClickTracking_92, _super);
    function CompanionClickTracking_92() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return CompanionClickTracking_92;
  })(vast_element_1.default);
  var Tracking_94 = /** @class */ (function(_super) {
    __extends(Tracking_94, _super);
    function Tracking_94() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Tracking_94;
  })(vast_element_1.default);
  var TrackingEvents_93 = /** @class */ (function(_super) {
    __extends(TrackingEvents_93, _super);
    function TrackingEvents_93() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    TrackingEvents_93.prototype.attachTracking = function(content, attributes) {
      return p(
        new Tracking_94(
          "Tracking",
          this,
          { attrs: ["event"] },
          content,
          attributes
        )
      );
    };
    TrackingEvents_93.prototype.addTracking = function(content, attributes) {
      return this.attachTracking(content, attributes).and();
    };
    return TrackingEvents_93;
  })(vast_element_1.default);
  var Companion_85 = /** @class */ (function(_super) {
    __extends(Companion_85, _super);
    function Companion_85() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Companion_85.prototype.attachStaticResource = function(
      content,
      attributes
    ) {
      return p(
        new StaticResource_86(
          "StaticResource",
          this,
          { attrs: ["creativeType"] },
          content,
          attributes
        )
      );
    };
    Companion_85.prototype.addStaticResource = function(content, attributes) {
      return this.attachStaticResource(content, attributes).and();
    };
    Companion_85.prototype.attachIFrameResource = function(content) {
      return p(new IFrameResource_87("IFrameResource", this, {}, content));
    };
    Companion_85.prototype.addIFrameResource = function(content) {
      return this.attachIFrameResource(content).and();
    };
    Companion_85.prototype.attachHTMLResource = function(content) {
      return p(new HTMLResource_88("HTMLResource", this, {}, content));
    };
    Companion_85.prototype.addHTMLResource = function(content) {
      return this.attachHTMLResource(content).and();
    };
    Companion_85.prototype.attachAdParameters = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new AdParameters_89(
          "AdParameters",
          this,
          { attrs: ["xmlEncoded"] },
          content,
          attributes
        )
      );
    };
    Companion_85.prototype.addAdParameters = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachAdParameters(content, attributes).and();
    };
    Companion_85.prototype.attachAltText = function(content) {
      return p(new AltText_90("AltText", this, {}, content));
    };
    Companion_85.prototype.addAltText = function(content) {
      return this.attachAltText(content).and();
    };
    Companion_85.prototype.attachCompanionClickThrough = function(content) {
      return p(
        new CompanionClickThrough_91("CompanionClickThrough", this, {}, content)
      );
    };
    Companion_85.prototype.addCompanionClickThrough = function(content) {
      return this.attachCompanionClickThrough(content).and();
    };
    Companion_85.prototype.attachCompanionClickTracking = function(content) {
      return p(
        new CompanionClickTracking_92(
          "CompanionClickTracking",
          this,
          {},
          content
        )
      );
    };
    Companion_85.prototype.addCompanionClickTracking = function(content) {
      return this.attachCompanionClickTracking(content).and();
    };
    Companion_85.prototype.attachTrackingEvents = function() {
      return p(new TrackingEvents_93("TrackingEvents", this, {}));
    };
    return Companion_85;
  })(vast_element_1.default);
  var CompanionAds_84 = /** @class */ (function(_super) {
    __extends(CompanionAds_84, _super);
    function CompanionAds_84() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    CompanionAds_84.prototype.attachCompanion = function(attributes) {
      return p(
        new Companion_85(
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
              "adSlotID"
            ]
          },
          attributes
        )
      );
    };
    return CompanionAds_84;
  })(vast_element_1.default);
  var NonLinearClickTracking_97 = /** @class */ (function(_super) {
    __extends(NonLinearClickTracking_97, _super);
    function NonLinearClickTracking_97() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return NonLinearClickTracking_97;
  })(vast_element_1.default);
  var NonLinear_96 = /** @class */ (function(_super) {
    __extends(NonLinear_96, _super);
    function NonLinear_96() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    NonLinear_96.prototype.attachNonLinearClickTracking = function(content) {
      return p(
        new NonLinearClickTracking_97(
          "NonLinearClickTracking",
          this,
          {},
          content
        )
      );
    };
    NonLinear_96.prototype.addNonLinearClickTracking = function(content) {
      return this.attachNonLinearClickTracking(content).and();
    };
    return NonLinear_96;
  })(vast_element_1.default);
  var Tracking_99 = /** @class */ (function(_super) {
    __extends(Tracking_99, _super);
    function Tracking_99() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Tracking_99;
  })(vast_element_1.default);
  var TrackingEvents_98 = /** @class */ (function(_super) {
    __extends(TrackingEvents_98, _super);
    function TrackingEvents_98() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    TrackingEvents_98.prototype.attachTracking = function(content, attributes) {
      return p(
        new Tracking_99(
          "Tracking",
          this,
          { attrs: ["offset", "event"] },
          content,
          attributes
        )
      );
    };
    TrackingEvents_98.prototype.addTracking = function(content, attributes) {
      return this.attachTracking(content, attributes).and();
    };
    return TrackingEvents_98;
  })(vast_element_1.default);
  var NonLinearAds_95 = /** @class */ (function(_super) {
    __extends(NonLinearAds_95, _super);
    function NonLinearAds_95() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    NonLinearAds_95.prototype.attachNonLinear = function(attributes) {
      return p(
        new NonLinear_96(
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
    NonLinearAds_95.prototype.attachTrackingEvents = function() {
      return p(new TrackingEvents_98("TrackingEvents", this, {}));
    };
    return NonLinearAds_95;
  })(vast_element_1.default);
  var Creative_68 = /** @class */ (function(_super) {
    __extends(Creative_68, _super);
    function Creative_68() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Creative_68.prototype.attachLinear = function() {
      return p(new Linear_69("Linear", this, {}));
    };
    Creative_68.prototype.attachCompanionAds = function(attributes) {
      return p(
        new CompanionAds_84(
          "CompanionAds",
          this,
          { attrs: ["required"] },
          attributes
        )
      );
    };
    Creative_68.prototype.attachNonLinearAds = function() {
      return p(new NonLinearAds_95("NonLinearAds", this, {}));
    };
    return Creative_68;
  })(vast_element_1.default);
  var Creatives_67 = /** @class */ (function(_super) {
    __extends(Creatives_67, _super);
    function Creatives_67() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Creatives_67.prototype.attachCreative = function(attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Creative_68(
          "Creative",
          this,
          { attrs: ["id", "sequence", "adID"] },
          attributes
        )
      );
    };
    return Creatives_67;
  })(vast_element_1.default);
  var Extension_101 = /** @class */ (function(_super) {
    __extends(Extension_101, _super);
    function Extension_101() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Extension_101;
  })(vast_element_1.default);
  var Extensions_100 = /** @class */ (function(_super) {
    __extends(Extensions_100, _super);
    function Extensions_100() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Extensions_100.prototype.attachExtension = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Extension_101(
          "Extension",
          this,
          { attrs: ["type"] },
          content,
          attributes
        )
      );
    };
    Extensions_100.prototype.addExtension = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachExtension(content, attributes).and();
    };
    return Extensions_100;
  })(vast_element_1.default);
  var Wrapper_62 = /** @class */ (function(_super) {
    __extends(Wrapper_62, _super);
    function Wrapper_62() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Wrapper_62.prototype.attachAdSystem = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new AdSystem_63(
          "AdSystem",
          this,
          { attrs: ["version"] },
          content,
          attributes
        )
      );
    };
    Wrapper_62.prototype.addAdSystem = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachAdSystem(content, attributes).and();
    };
    Wrapper_62.prototype.attachVASTAdTagURI = function(content) {
      return p(new VASTAdTagURI_64("VASTAdTagURI", this, {}, content));
    };
    Wrapper_62.prototype.addVASTAdTagURI = function(content) {
      return this.attachVASTAdTagURI(content).and();
    };
    Wrapper_62.prototype.attachError = function(content) {
      return p(new Error_65("Error", this, {}, content));
    };
    Wrapper_62.prototype.addError = function(content) {
      return this.attachError(content).and();
    };
    Wrapper_62.prototype.attachImpression = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Impression_66(
          "Impression",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    Wrapper_62.prototype.addImpression = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachImpression(content, attributes).and();
    };
    Wrapper_62.prototype.attachCreatives = function() {
      return p(new Creatives_67("Creatives", this, {}));
    };
    Wrapper_62.prototype.attachExtensions = function() {
      return p(new Extensions_100("Extensions", this, {}));
    };
    return Wrapper_62;
  })(vast_element_1.default);
  var Ad_5 = /** @class */ (function(_super) {
    __extends(Ad_5, _super);
    function Ad_5() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Ad_5.prototype.attachInLine = function() {
      return p(new InLine_6("InLine", this, {}));
    };
    Ad_5.prototype.attachWrapper = function(attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Wrapper_62(
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
    return Ad_5;
  })(vast_element_1.default);
  var VAST_3 = /** @class */ (function(_super) {
    __extends(VAST_3, _super);
    function VAST_3() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    VAST_3.prototype.attachError = function(content) {
      return p(new Error_4("Error", this, {}, content));
    };
    VAST_3.prototype.addError = function(content) {
      return this.attachError(content).and();
    };
    VAST_3.prototype.attachAd = function(attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(new Ad_5("Ad", this, { attrs: ["id", "sequence"] }, attributes));
    };
    return VAST_3;
  })(vast_element_1.default);
  exports.VAST_3 = VAST_3;
  var apiv3 = /** @class */ (function(_super) {
    __extends(apiv3, _super);
    function apiv3() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    apiv3.prototype.attachVAST = function(attributes) {
      return p(new VAST_3("VAST", this, { attrs: ["version"] }, attributes));
    };
    apiv3.prototype.and = function() {
      return this;
    };
    return apiv3;
  })(vast_element_1.default);
  exports.apiv3 = apiv3;
});
//# sourceMappingURL=vast3_0.js.map
