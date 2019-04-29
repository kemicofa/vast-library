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
  var AdSystem_5 = /** @class */ (function(_super) {
    __extends(AdSystem_5, _super);
    function AdSystem_5() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return AdSystem_5;
  })(vast_element_1.default);
  var AdTitle_6 = /** @class */ (function(_super) {
    __extends(AdTitle_6, _super);
    function AdTitle_6() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return AdTitle_6;
  })(vast_element_1.default);
  var Description_7 = /** @class */ (function(_super) {
    __extends(Description_7, _super);
    function Description_7() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Description_7;
  })(vast_element_1.default);
  var Survey_8 = /** @class */ (function(_super) {
    __extends(Survey_8, _super);
    function Survey_8() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Survey_8;
  })(vast_element_1.default);
  var Error_9 = /** @class */ (function(_super) {
    __extends(Error_9, _super);
    function Error_9() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Error_9;
  })(vast_element_1.default);
  var Impression_10 = /** @class */ (function(_super) {
    __extends(Impression_10, _super);
    function Impression_10() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Impression_10;
  })(vast_element_1.default);
  var Duration_14 = /** @class */ (function(_super) {
    __extends(Duration_14, _super);
    function Duration_14() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Duration_14;
  })(vast_element_1.default);
  var Tracking_16 = /** @class */ (function(_super) {
    __extends(Tracking_16, _super);
    function Tracking_16() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Tracking_16;
  })(vast_element_1.default);
  var TrackingEvents_15 = /** @class */ (function(_super) {
    __extends(TrackingEvents_15, _super);
    function TrackingEvents_15() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    TrackingEvents_15.prototype.attachTracking = function(content, attributes) {
      return p(
        new Tracking_16(
          "Tracking",
          this,
          { attrs: ["event"] },
          content,
          attributes
        )
      );
    };
    TrackingEvents_15.prototype.addTracking = function(content, attributes) {
      return this.attachTracking(content, attributes).and();
    };
    return TrackingEvents_15;
  })(vast_element_1.default);
  var AdParameters_17 = /** @class */ (function(_super) {
    __extends(AdParameters_17, _super);
    function AdParameters_17() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return AdParameters_17;
  })(vast_element_1.default);
  var ClickThrough_19 = /** @class */ (function(_super) {
    __extends(ClickThrough_19, _super);
    function ClickThrough_19() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return ClickThrough_19;
  })(vast_element_1.default);
  var ClickTracking_20 = /** @class */ (function(_super) {
    __extends(ClickTracking_20, _super);
    function ClickTracking_20() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return ClickTracking_20;
  })(vast_element_1.default);
  var CustomClick_21 = /** @class */ (function(_super) {
    __extends(CustomClick_21, _super);
    function CustomClick_21() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return CustomClick_21;
  })(vast_element_1.default);
  var VideoClicks_18 = /** @class */ (function(_super) {
    __extends(VideoClicks_18, _super);
    function VideoClicks_18() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    VideoClicks_18.prototype.attachClickThrough = function(content) {
      return p(new ClickThrough_19("ClickThrough", this, {}, content));
    };
    VideoClicks_18.prototype.addClickThrough = function(content) {
      return this.attachClickThrough(content).and();
    };
    VideoClicks_18.prototype.attachClickTracking = function(content) {
      return p(new ClickTracking_20("ClickTracking", this, {}, content));
    };
    VideoClicks_18.prototype.addClickTracking = function(content) {
      return this.attachClickTracking(content).and();
    };
    VideoClicks_18.prototype.attachCustomClick = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new CustomClick_21(
          "CustomClick",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    VideoClicks_18.prototype.addCustomClick = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachCustomClick(content, attributes).and();
    };
    return VideoClicks_18;
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
              "width",
              "height",
              "scalable",
              "mantainAspectRatio",
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
  var Linear_13 = /** @class */ (function(_super) {
    __extends(Linear_13, _super);
    function Linear_13() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Linear_13.prototype.attachDuration = function(content) {
      return p(new Duration_14("Duration", this, {}, content));
    };
    Linear_13.prototype.addDuration = function(content) {
      return this.attachDuration(content).and();
    };
    Linear_13.prototype.attachTrackingEvents = function() {
      return p(new TrackingEvents_15("TrackingEvents", this, {}));
    };
    Linear_13.prototype.attachAdParameters = function(content) {
      return p(new AdParameters_17("AdParameters", this, {}, content));
    };
    Linear_13.prototype.addAdParameters = function(content) {
      return this.attachAdParameters(content).and();
    };
    Linear_13.prototype.attachVideoClicks = function() {
      return p(new VideoClicks_18("VideoClicks", this, {}));
    };
    Linear_13.prototype.attachMediaFiles = function() {
      return p(new MediaFiles_22("MediaFiles", this, {}));
    };
    return Linear_13;
  })(vast_element_1.default);
  var StaticResource_26 = /** @class */ (function(_super) {
    __extends(StaticResource_26, _super);
    function StaticResource_26() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return StaticResource_26;
  })(vast_element_1.default);
  var IFrameResource_27 = /** @class */ (function(_super) {
    __extends(IFrameResource_27, _super);
    function IFrameResource_27() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IFrameResource_27;
  })(vast_element_1.default);
  var HTMLResource_28 = /** @class */ (function(_super) {
    __extends(HTMLResource_28, _super);
    function HTMLResource_28() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return HTMLResource_28;
  })(vast_element_1.default);
  var Tracking_30 = /** @class */ (function(_super) {
    __extends(Tracking_30, _super);
    function Tracking_30() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Tracking_30;
  })(vast_element_1.default);
  var TrackingEvents_29 = /** @class */ (function(_super) {
    __extends(TrackingEvents_29, _super);
    function TrackingEvents_29() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    TrackingEvents_29.prototype.attachTracking = function(content, attributes) {
      return p(
        new Tracking_30(
          "Tracking",
          this,
          { attrs: ["event"] },
          content,
          attributes
        )
      );
    };
    TrackingEvents_29.prototype.addTracking = function(content, attributes) {
      return this.attachTracking(content, attributes).and();
    };
    return TrackingEvents_29;
  })(vast_element_1.default);
  var CompanionClickThrough_31 = /** @class */ (function(_super) {
    __extends(CompanionClickThrough_31, _super);
    function CompanionClickThrough_31() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return CompanionClickThrough_31;
  })(vast_element_1.default);
  var AltText_32 = /** @class */ (function(_super) {
    __extends(AltText_32, _super);
    function AltText_32() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return AltText_32;
  })(vast_element_1.default);
  var AdParameters_33 = /** @class */ (function(_super) {
    __extends(AdParameters_33, _super);
    function AdParameters_33() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return AdParameters_33;
  })(vast_element_1.default);
  var Companion_25 = /** @class */ (function(_super) {
    __extends(Companion_25, _super);
    function Companion_25() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Companion_25.prototype.attachStaticResource = function(
      content,
      attributes
    ) {
      return p(
        new StaticResource_26(
          "StaticResource",
          this,
          { attrs: ["creativeType"] },
          content,
          attributes
        )
      );
    };
    Companion_25.prototype.addStaticResource = function(content, attributes) {
      return this.attachStaticResource(content, attributes).and();
    };
    Companion_25.prototype.attachIFrameResource = function(content) {
      return p(new IFrameResource_27("IFrameResource", this, {}, content));
    };
    Companion_25.prototype.addIFrameResource = function(content) {
      return this.attachIFrameResource(content).and();
    };
    Companion_25.prototype.attachHTMLResource = function(content) {
      return p(new HTMLResource_28("HTMLResource", this, {}, content));
    };
    Companion_25.prototype.addHTMLResource = function(content) {
      return this.attachHTMLResource(content).and();
    };
    Companion_25.prototype.attachTrackingEvents = function() {
      return p(new TrackingEvents_29("TrackingEvents", this, {}));
    };
    Companion_25.prototype.attachCompanionClickThrough = function(content) {
      return p(
        new CompanionClickThrough_31("CompanionClickThrough", this, {}, content)
      );
    };
    Companion_25.prototype.addCompanionClickThrough = function(content) {
      return this.attachCompanionClickThrough(content).and();
    };
    Companion_25.prototype.attachAltText = function(content) {
      return p(new AltText_32("AltText", this, {}, content));
    };
    Companion_25.prototype.addAltText = function(content) {
      return this.attachAltText(content).and();
    };
    Companion_25.prototype.attachAdParameters = function(content) {
      return p(new AdParameters_33("AdParameters", this, {}, content));
    };
    Companion_25.prototype.addAdParameters = function(content) {
      return this.attachAdParameters(content).and();
    };
    return Companion_25;
  })(vast_element_1.default);
  var CompanionAds_24 = /** @class */ (function(_super) {
    __extends(CompanionAds_24, _super);
    function CompanionAds_24() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    CompanionAds_24.prototype.attachCompanion = function(attributes) {
      return p(
        new Companion_25(
          "Companion",
          this,
          {
            attrs: [
              "id",
              "width",
              "height",
              "expandedWidth",
              "expandedHeight",
              "apiFramework"
            ]
          },
          attributes
        )
      );
    };
    return CompanionAds_24;
  })(vast_element_1.default);
  var StaticResource_36 = /** @class */ (function(_super) {
    __extends(StaticResource_36, _super);
    function StaticResource_36() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return StaticResource_36;
  })(vast_element_1.default);
  var IFrameResource_37 = /** @class */ (function(_super) {
    __extends(IFrameResource_37, _super);
    function IFrameResource_37() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IFrameResource_37;
  })(vast_element_1.default);
  var HTMLResource_38 = /** @class */ (function(_super) {
    __extends(HTMLResource_38, _super);
    function HTMLResource_38() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return HTMLResource_38;
  })(vast_element_1.default);
  var NonLinear_35 = /** @class */ (function(_super) {
    __extends(NonLinear_35, _super);
    function NonLinear_35() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    NonLinear_35.prototype.attachStaticResource = function(
      content,
      attributes
    ) {
      return p(
        new StaticResource_36(
          "StaticResource",
          this,
          { attrs: ["creativeType"] },
          content,
          attributes
        )
      );
    };
    NonLinear_35.prototype.addStaticResource = function(content, attributes) {
      return this.attachStaticResource(content, attributes).and();
    };
    NonLinear_35.prototype.attachIFrameResource = function(content) {
      return p(new IFrameResource_37("IFrameResource", this, {}, content));
    };
    NonLinear_35.prototype.addIFrameResource = function(content) {
      return this.attachIFrameResource(content).and();
    };
    NonLinear_35.prototype.attachHTMLResource = function(content) {
      return p(new HTMLResource_38("HTMLResource", this, {}, content));
    };
    NonLinear_35.prototype.addHTMLResource = function(content) {
      return this.attachHTMLResource(content).and();
    };
    return NonLinear_35;
  })(vast_element_1.default);
  var Tracking_40 = /** @class */ (function(_super) {
    __extends(Tracking_40, _super);
    function Tracking_40() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Tracking_40;
  })(vast_element_1.default);
  var TrackingEvents_39 = /** @class */ (function(_super) {
    __extends(TrackingEvents_39, _super);
    function TrackingEvents_39() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    TrackingEvents_39.prototype.attachTracking = function(content, attributes) {
      return p(
        new Tracking_40(
          "Tracking",
          this,
          { attrs: ["event"] },
          content,
          attributes
        )
      );
    };
    TrackingEvents_39.prototype.addTracking = function(content, attributes) {
      return this.attachTracking(content, attributes).and();
    };
    return TrackingEvents_39;
  })(vast_element_1.default);
  var NonLinearClickThrough_41 = /** @class */ (function(_super) {
    __extends(NonLinearClickThrough_41, _super);
    function NonLinearClickThrough_41() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return NonLinearClickThrough_41;
  })(vast_element_1.default);
  var AdParameters_42 = /** @class */ (function(_super) {
    __extends(AdParameters_42, _super);
    function AdParameters_42() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return AdParameters_42;
  })(vast_element_1.default);
  var NonLinearAds_34 = /** @class */ (function(_super) {
    __extends(NonLinearAds_34, _super);
    function NonLinearAds_34() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    NonLinearAds_34.prototype.attachNonLinear = function(attributes) {
      return p(
        new NonLinear_35(
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
    NonLinearAds_34.prototype.attachTrackingEvents = function() {
      return p(new TrackingEvents_39("TrackingEvents", this, {}));
    };
    NonLinearAds_34.prototype.attachNonLinearClickThrough = function(content) {
      return p(
        new NonLinearClickThrough_41("NonLinearClickThrough", this, {}, content)
      );
    };
    NonLinearAds_34.prototype.addNonLinearClickThrough = function(content) {
      return this.attachNonLinearClickThrough(content).and();
    };
    NonLinearAds_34.prototype.attachAdParameters = function(content) {
      return p(new AdParameters_42("AdParameters", this, {}, content));
    };
    NonLinearAds_34.prototype.addAdParameters = function(content) {
      return this.attachAdParameters(content).and();
    };
    return NonLinearAds_34;
  })(vast_element_1.default);
  var Creative_12 = /** @class */ (function(_super) {
    __extends(Creative_12, _super);
    function Creative_12() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Creative_12.prototype.attachLinear = function() {
      return p(new Linear_13("Linear", this, {}));
    };
    Creative_12.prototype.attachCompanionAds = function() {
      return p(new CompanionAds_24("CompanionAds", this, {}));
    };
    Creative_12.prototype.attachNonLinearAds = function() {
      return p(new NonLinearAds_34("NonLinearAds", this, {}));
    };
    return Creative_12;
  })(vast_element_1.default);
  var Creatives_11 = /** @class */ (function(_super) {
    __extends(Creatives_11, _super);
    function Creatives_11() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Creatives_11.prototype.attachCreative = function(attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Creative_12(
          "Creative",
          this,
          { attrs: ["id", "sequence", "adID"] },
          attributes
        )
      );
    };
    return Creatives_11;
  })(vast_element_1.default);
  var Extension_44 = /** @class */ (function(_super) {
    __extends(Extension_44, _super);
    function Extension_44() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Extension_44;
  })(vast_element_1.default);
  var Extensions_43 = /** @class */ (function(_super) {
    __extends(Extensions_43, _super);
    function Extensions_43() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Extensions_43.prototype.attachExtension = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Extension_44(
          "Extension",
          this,
          { attrs: ["type"] },
          content,
          attributes
        )
      );
    };
    Extensions_43.prototype.addExtension = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachExtension(content, attributes).and();
    };
    return Extensions_43;
  })(vast_element_1.default);
  var InLine_4 = /** @class */ (function(_super) {
    __extends(InLine_4, _super);
    function InLine_4() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    InLine_4.prototype.attachAdSystem = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new AdSystem_5(
          "AdSystem",
          this,
          { attrs: ["version"] },
          content,
          attributes
        )
      );
    };
    InLine_4.prototype.addAdSystem = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachAdSystem(content, attributes).and();
    };
    InLine_4.prototype.attachAdTitle = function(content) {
      return p(new AdTitle_6("AdTitle", this, {}, content));
    };
    InLine_4.prototype.addAdTitle = function(content) {
      return this.attachAdTitle(content).and();
    };
    InLine_4.prototype.attachDescription = function(content) {
      return p(new Description_7("Description", this, {}, content));
    };
    InLine_4.prototype.addDescription = function(content) {
      return this.attachDescription(content).and();
    };
    InLine_4.prototype.attachSurvey = function(content) {
      return p(new Survey_8("Survey", this, {}, content));
    };
    InLine_4.prototype.addSurvey = function(content) {
      return this.attachSurvey(content).and();
    };
    InLine_4.prototype.attachError = function(content) {
      return p(new Error_9("Error", this, {}, content));
    };
    InLine_4.prototype.addError = function(content) {
      return this.attachError(content).and();
    };
    InLine_4.prototype.attachImpression = function(content, attributes) {
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
    InLine_4.prototype.addImpression = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachImpression(content, attributes).and();
    };
    InLine_4.prototype.attachCreatives = function() {
      return p(new Creatives_11("Creatives", this, {}));
    };
    InLine_4.prototype.attachExtensions = function() {
      return p(new Extensions_43("Extensions", this, {}));
    };
    return InLine_4;
  })(vast_element_1.default);
  var AdSystem_46 = /** @class */ (function(_super) {
    __extends(AdSystem_46, _super);
    function AdSystem_46() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return AdSystem_46;
  })(vast_element_1.default);
  var VASTAdTagURI_47 = /** @class */ (function(_super) {
    __extends(VASTAdTagURI_47, _super);
    function VASTAdTagURI_47() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return VASTAdTagURI_47;
  })(vast_element_1.default);
  var Error_48 = /** @class */ (function(_super) {
    __extends(Error_48, _super);
    function Error_48() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Error_48;
  })(vast_element_1.default);
  var Impression_49 = /** @class */ (function(_super) {
    __extends(Impression_49, _super);
    function Impression_49() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Impression_49;
  })(vast_element_1.default);
  var Tracking_54 = /** @class */ (function(_super) {
    __extends(Tracking_54, _super);
    function Tracking_54() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Tracking_54;
  })(vast_element_1.default);
  var TrackingEvents_53 = /** @class */ (function(_super) {
    __extends(TrackingEvents_53, _super);
    function TrackingEvents_53() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    TrackingEvents_53.prototype.attachTracking = function(content, attributes) {
      return p(
        new Tracking_54(
          "Tracking",
          this,
          { attrs: ["event"] },
          content,
          attributes
        )
      );
    };
    TrackingEvents_53.prototype.addTracking = function(content, attributes) {
      return this.attachTracking(content, attributes).and();
    };
    return TrackingEvents_53;
  })(vast_element_1.default);
  var ClickThrough_56 = /** @class */ (function(_super) {
    __extends(ClickThrough_56, _super);
    function ClickThrough_56() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return ClickThrough_56;
  })(vast_element_1.default);
  var ClickTracking_57 = /** @class */ (function(_super) {
    __extends(ClickTracking_57, _super);
    function ClickTracking_57() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return ClickTracking_57;
  })(vast_element_1.default);
  var CustomClick_58 = /** @class */ (function(_super) {
    __extends(CustomClick_58, _super);
    function CustomClick_58() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return CustomClick_58;
  })(vast_element_1.default);
  var VideoClicks_55 = /** @class */ (function(_super) {
    __extends(VideoClicks_55, _super);
    function VideoClicks_55() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    VideoClicks_55.prototype.attachClickThrough = function(content) {
      return p(new ClickThrough_56("ClickThrough", this, {}, content));
    };
    VideoClicks_55.prototype.addClickThrough = function(content) {
      return this.attachClickThrough(content).and();
    };
    VideoClicks_55.prototype.attachClickTracking = function(content) {
      return p(new ClickTracking_57("ClickTracking", this, {}, content));
    };
    VideoClicks_55.prototype.addClickTracking = function(content) {
      return this.attachClickTracking(content).and();
    };
    VideoClicks_55.prototype.attachCustomClick = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new CustomClick_58(
          "CustomClick",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    VideoClicks_55.prototype.addCustomClick = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachCustomClick(content, attributes).and();
    };
    return VideoClicks_55;
  })(vast_element_1.default);
  var Linear_52 = /** @class */ (function(_super) {
    __extends(Linear_52, _super);
    function Linear_52() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Linear_52.prototype.attachTrackingEvents = function() {
      return p(new TrackingEvents_53("TrackingEvents", this, {}));
    };
    Linear_52.prototype.attachVideoClicks = function() {
      return p(new VideoClicks_55("VideoClicks", this, {}));
    };
    return Linear_52;
  })(vast_element_1.default);
  var StaticResource_61 = /** @class */ (function(_super) {
    __extends(StaticResource_61, _super);
    function StaticResource_61() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return StaticResource_61;
  })(vast_element_1.default);
  var IFrameResource_62 = /** @class */ (function(_super) {
    __extends(IFrameResource_62, _super);
    function IFrameResource_62() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IFrameResource_62;
  })(vast_element_1.default);
  var HTMLResource_63 = /** @class */ (function(_super) {
    __extends(HTMLResource_63, _super);
    function HTMLResource_63() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return HTMLResource_63;
  })(vast_element_1.default);
  var Tracking_65 = /** @class */ (function(_super) {
    __extends(Tracking_65, _super);
    function Tracking_65() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Tracking_65;
  })(vast_element_1.default);
  var TrackingEvents_64 = /** @class */ (function(_super) {
    __extends(TrackingEvents_64, _super);
    function TrackingEvents_64() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    TrackingEvents_64.prototype.attachTracking = function(content, attributes) {
      return p(
        new Tracking_65(
          "Tracking",
          this,
          { attrs: ["event"] },
          content,
          attributes
        )
      );
    };
    TrackingEvents_64.prototype.addTracking = function(content, attributes) {
      return this.attachTracking(content, attributes).and();
    };
    return TrackingEvents_64;
  })(vast_element_1.default);
  var CompanionClickThrough_66 = /** @class */ (function(_super) {
    __extends(CompanionClickThrough_66, _super);
    function CompanionClickThrough_66() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return CompanionClickThrough_66;
  })(vast_element_1.default);
  var AltText_67 = /** @class */ (function(_super) {
    __extends(AltText_67, _super);
    function AltText_67() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return AltText_67;
  })(vast_element_1.default);
  var AdParameters_68 = /** @class */ (function(_super) {
    __extends(AdParameters_68, _super);
    function AdParameters_68() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return AdParameters_68;
  })(vast_element_1.default);
  var Companion_60 = /** @class */ (function(_super) {
    __extends(Companion_60, _super);
    function Companion_60() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Companion_60.prototype.attachStaticResource = function(
      content,
      attributes
    ) {
      return p(
        new StaticResource_61(
          "StaticResource",
          this,
          { attrs: ["creativeType"] },
          content,
          attributes
        )
      );
    };
    Companion_60.prototype.addStaticResource = function(content, attributes) {
      return this.attachStaticResource(content, attributes).and();
    };
    Companion_60.prototype.attachIFrameResource = function(content) {
      return p(new IFrameResource_62("IFrameResource", this, {}, content));
    };
    Companion_60.prototype.addIFrameResource = function(content) {
      return this.attachIFrameResource(content).and();
    };
    Companion_60.prototype.attachHTMLResource = function(content) {
      return p(new HTMLResource_63("HTMLResource", this, {}, content));
    };
    Companion_60.prototype.addHTMLResource = function(content) {
      return this.attachHTMLResource(content).and();
    };
    Companion_60.prototype.attachTrackingEvents = function() {
      return p(new TrackingEvents_64("TrackingEvents", this, {}));
    };
    Companion_60.prototype.attachCompanionClickThrough = function(content) {
      return p(
        new CompanionClickThrough_66("CompanionClickThrough", this, {}, content)
      );
    };
    Companion_60.prototype.addCompanionClickThrough = function(content) {
      return this.attachCompanionClickThrough(content).and();
    };
    Companion_60.prototype.attachAltText = function(content) {
      return p(new AltText_67("AltText", this, {}, content));
    };
    Companion_60.prototype.addAltText = function(content) {
      return this.attachAltText(content).and();
    };
    Companion_60.prototype.attachAdParameters = function(content) {
      return p(new AdParameters_68("AdParameters", this, {}, content));
    };
    Companion_60.prototype.addAdParameters = function(content) {
      return this.attachAdParameters(content).and();
    };
    return Companion_60;
  })(vast_element_1.default);
  var CompanionAds_59 = /** @class */ (function(_super) {
    __extends(CompanionAds_59, _super);
    function CompanionAds_59() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    CompanionAds_59.prototype.attachCompanion = function(attributes) {
      return p(
        new Companion_60(
          "Companion",
          this,
          {
            attrs: [
              "id",
              "width",
              "height",
              "expandedWidth",
              "expandedHeight",
              "apiFramework"
            ]
          },
          attributes
        )
      );
    };
    return CompanionAds_59;
  })(vast_element_1.default);
  var StaticResource_71 = /** @class */ (function(_super) {
    __extends(StaticResource_71, _super);
    function StaticResource_71() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return StaticResource_71;
  })(vast_element_1.default);
  var IFrameResource_72 = /** @class */ (function(_super) {
    __extends(IFrameResource_72, _super);
    function IFrameResource_72() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return IFrameResource_72;
  })(vast_element_1.default);
  var HTMLResource_73 = /** @class */ (function(_super) {
    __extends(HTMLResource_73, _super);
    function HTMLResource_73() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return HTMLResource_73;
  })(vast_element_1.default);
  var NonLinear_70 = /** @class */ (function(_super) {
    __extends(NonLinear_70, _super);
    function NonLinear_70() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    NonLinear_70.prototype.attachStaticResource = function(
      content,
      attributes
    ) {
      return p(
        new StaticResource_71(
          "StaticResource",
          this,
          { attrs: ["creativeType"] },
          content,
          attributes
        )
      );
    };
    NonLinear_70.prototype.addStaticResource = function(content, attributes) {
      return this.attachStaticResource(content, attributes).and();
    };
    NonLinear_70.prototype.attachIFrameResource = function(content) {
      return p(new IFrameResource_72("IFrameResource", this, {}, content));
    };
    NonLinear_70.prototype.addIFrameResource = function(content) {
      return this.attachIFrameResource(content).and();
    };
    NonLinear_70.prototype.attachHTMLResource = function(content) {
      return p(new HTMLResource_73("HTMLResource", this, {}, content));
    };
    NonLinear_70.prototype.addHTMLResource = function(content) {
      return this.attachHTMLResource(content).and();
    };
    return NonLinear_70;
  })(vast_element_1.default);
  var Tracking_75 = /** @class */ (function(_super) {
    __extends(Tracking_75, _super);
    function Tracking_75() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Tracking_75;
  })(vast_element_1.default);
  var TrackingEvents_74 = /** @class */ (function(_super) {
    __extends(TrackingEvents_74, _super);
    function TrackingEvents_74() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    TrackingEvents_74.prototype.attachTracking = function(content, attributes) {
      return p(
        new Tracking_75(
          "Tracking",
          this,
          { attrs: ["event"] },
          content,
          attributes
        )
      );
    };
    TrackingEvents_74.prototype.addTracking = function(content, attributes) {
      return this.attachTracking(content, attributes).and();
    };
    return TrackingEvents_74;
  })(vast_element_1.default);
  var NonLinearAds_69 = /** @class */ (function(_super) {
    __extends(NonLinearAds_69, _super);
    function NonLinearAds_69() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    NonLinearAds_69.prototype.attachNonLinear = function(attributes) {
      return p(
        new NonLinear_70(
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
    NonLinearAds_69.prototype.attachTrackingEvents = function() {
      return p(new TrackingEvents_74("TrackingEvents", this, {}));
    };
    return NonLinearAds_69;
  })(vast_element_1.default);
  var Creative_51 = /** @class */ (function(_super) {
    __extends(Creative_51, _super);
    function Creative_51() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Creative_51.prototype.attachLinear = function() {
      return p(new Linear_52("Linear", this, {}));
    };
    Creative_51.prototype.attachCompanionAds = function() {
      return p(new CompanionAds_59("CompanionAds", this, {}));
    };
    Creative_51.prototype.attachNonLinearAds = function() {
      return p(new NonLinearAds_69("NonLinearAds", this, {}));
    };
    return Creative_51;
  })(vast_element_1.default);
  var Creatives_50 = /** @class */ (function(_super) {
    __extends(Creatives_50, _super);
    function Creatives_50() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Creatives_50.prototype.attachCreative = function(attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Creative_51(
          "Creative",
          this,
          { attrs: ["id", "sequence", "adID"] },
          attributes
        )
      );
    };
    return Creatives_50;
  })(vast_element_1.default);
  var Extension_77 = /** @class */ (function(_super) {
    __extends(Extension_77, _super);
    function Extension_77() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    return Extension_77;
  })(vast_element_1.default);
  var Extensions_76 = /** @class */ (function(_super) {
    __extends(Extensions_76, _super);
    function Extensions_76() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Extensions_76.prototype.attachExtension = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Extension_77(
          "Extension",
          this,
          { attrs: ["type"] },
          content,
          attributes
        )
      );
    };
    Extensions_76.prototype.addExtension = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachExtension(content, attributes).and();
    };
    return Extensions_76;
  })(vast_element_1.default);
  var Wrapper_45 = /** @class */ (function(_super) {
    __extends(Wrapper_45, _super);
    function Wrapper_45() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Wrapper_45.prototype.attachAdSystem = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new AdSystem_46(
          "AdSystem",
          this,
          { attrs: ["version"] },
          content,
          attributes
        )
      );
    };
    Wrapper_45.prototype.addAdSystem = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachAdSystem(content, attributes).and();
    };
    Wrapper_45.prototype.attachVASTAdTagURI = function(content) {
      return p(new VASTAdTagURI_47("VASTAdTagURI", this, {}, content));
    };
    Wrapper_45.prototype.addVASTAdTagURI = function(content) {
      return this.attachVASTAdTagURI(content).and();
    };
    Wrapper_45.prototype.attachError = function(content) {
      return p(new Error_48("Error", this, {}, content));
    };
    Wrapper_45.prototype.addError = function(content) {
      return this.attachError(content).and();
    };
    Wrapper_45.prototype.attachImpression = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return p(
        new Impression_49(
          "Impression",
          this,
          { attrs: ["id"] },
          content,
          attributes
        )
      );
    };
    Wrapper_45.prototype.addImpression = function(content, attributes) {
      if (attributes === void 0) {
        attributes = {};
      }
      return this.attachImpression(content, attributes).and();
    };
    Wrapper_45.prototype.attachCreatives = function() {
      return p(new Creatives_50("Creatives", this, {}));
    };
    Wrapper_45.prototype.attachExtensions = function() {
      return p(new Extensions_76("Extensions", this, {}));
    };
    return Wrapper_45;
  })(vast_element_1.default);
  var Ad_3 = /** @class */ (function(_super) {
    __extends(Ad_3, _super);
    function Ad_3() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Ad_3.prototype.attachInLine = function() {
      return p(new InLine_4("InLine", this, {}));
    };
    Ad_3.prototype.attachWrapper = function() {
      return p(new Wrapper_45("Wrapper", this, {}));
    };
    return Ad_3;
  })(vast_element_1.default);
  var VAST_2 = /** @class */ (function(_super) {
    __extends(VAST_2, _super);
    function VAST_2() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    VAST_2.prototype.attachAd = function(attributes) {
      return p(new Ad_3("Ad", this, { attrs: ["id"] }, attributes));
    };
    return VAST_2;
  })(vast_element_1.default);
  exports.VAST_2 = VAST_2;
  var apiv2 = /** @class */ (function(_super) {
    __extends(apiv2, _super);
    function apiv2() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    apiv2.prototype.attachVAST = function(attributes) {
      return p(new VAST_2("VAST", this, { attrs: ["version"] }, attributes));
    };
    apiv2.prototype.and = function() {
      return this;
    };
    return apiv2;
  })(vast_element_1.default);
  exports.apiv2 = apiv2;
});
//# sourceMappingURL=vast2_0.js.map
