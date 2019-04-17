/* tslint:disable: class-name object-literal-sort-keys */

///////////////////////////////////////////////////////
//  IMPORTANT: this file is generated, dont edit it
/////////

import VastElement from "../../src/vast-element";

class Error_4 extends VastElement<VAST_3> {}
class AdSystem_7 extends VastElement<InLine_6> {}
class AdTitle_8 extends VastElement<InLine_6> {}
class Description_9 extends VastElement<InLine_6> {}
class Advertiser_10 extends VastElement<InLine_6> {}
class Pricing_11 extends VastElement<InLine_6> {}
class Survey_12 extends VastElement<InLine_6> {}
class Error_13 extends VastElement<InLine_6> {}
class Impression_14 extends VastElement<InLine_6> {}
class CreativeExtension_18 extends VastElement<CreativeExtensions_17> {}
class CreativeExtensions_17 extends VastElement<Creative_16> {
  public attachCreativeExtension(content: string): CreativeExtension_18 {
    const newElem = new CreativeExtension_18(
      "CreativeExtension",
      this,
      {},
      content
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addCreativeExtension(content: string): CreativeExtensions_17 {
    return this.attachCreativeExtension(content).and();
  }
}
class AdParameters_20 extends VastElement<Linear_19> {}
class Duration_21 extends VastElement<Linear_19> {}
class MediaFile_23 extends VastElement<MediaFiles_22> {}
class MediaFiles_22 extends VastElement<Linear_19> {
  public attachMediaFile(
    content: string,
    attributes: {
      id?: string;
      delivery: "progressive" | "streaming";
      type: string;
      bitrate?: string;
      minBitrate?: string;
      maxBitrate?: string;
      width: string;
      height: string;
      scalable?: string;
      mantainAspectRatio?: string;
      codec?: string;
      apiFramework?: string;
    }
  ): MediaFile_23 {
    const newElem = new MediaFile_23(
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
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addMediaFile(
    content: string,
    attributes: {
      id?: string;
      delivery: "progressive" | "streaming";
      type: string;
      bitrate?: string;
      minBitrate?: string;
      maxBitrate?: string;
      width: string;
      height: string;
      scalable?: string;
      mantainAspectRatio?: string;
      codec?: string;
      apiFramework?: string;
    }
  ): MediaFiles_22 {
    return this.attachMediaFile(content, attributes).and();
  }
}
class Tracking_25 extends VastElement<TrackingEvents_24> {}
class TrackingEvents_24 extends VastElement<Linear_19> {
  public attachTracking(
    content: string,
    attributes: {
      offset?: string;
      event:
        | "creativeView"
        | "start"
        | "firstQuartile"
        | "midpoint"
        | "thirdQuartile"
        | "complete"
        | "mute"
        | "unmute"
        | "pause"
        | "rewind"
        | "resume"
        | "fullscreen"
        | "exitFullscreen"
        | "expand"
        | "collapse"
        | "acceptInvitationLinear"
        | "closeLinear"
        | "skip"
        | "progress";
    }
  ): Tracking_25 {
    const newElem = new Tracking_25(
      "Tracking",
      this,
      { attrs: ["offset", "event"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(
    content: string,
    attributes: {
      offset?: string;
      event:
        | "creativeView"
        | "start"
        | "firstQuartile"
        | "midpoint"
        | "thirdQuartile"
        | "complete"
        | "mute"
        | "unmute"
        | "pause"
        | "rewind"
        | "resume"
        | "fullscreen"
        | "exitFullscreen"
        | "expand"
        | "collapse"
        | "acceptInvitationLinear"
        | "closeLinear"
        | "skip"
        | "progress";
    }
  ): TrackingEvents_24 {
    return this.attachTracking(content, attributes).and();
  }
}
class ClickThrough_27 extends VastElement<VideoClicks_26> {}
class ClickTracking_28 extends VastElement<VideoClicks_26> {}
class CustomClick_29 extends VastElement<VideoClicks_26> {}
class VideoClicks_26 extends VastElement<Linear_19> {
  public attachClickThrough(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): ClickThrough_27 {
    const newElem = new ClickThrough_27(
      "ClickThrough",
      this,
      { attrs: ["id"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addClickThrough(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): VideoClicks_26 {
    return this.attachClickThrough(content, attributes).and();
  }
  public attachClickTracking(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): ClickTracking_28 {
    const newElem = new ClickTracking_28(
      "ClickTracking",
      this,
      { attrs: ["id"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addClickTracking(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): VideoClicks_26 {
    return this.attachClickTracking(content, attributes).and();
  }
  public attachCustomClick(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): CustomClick_29 {
    const newElem = new CustomClick_29(
      "CustomClick",
      this,
      { attrs: ["id"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addCustomClick(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): VideoClicks_26 {
    return this.attachCustomClick(content, attributes).and();
  }
}
class StaticResource_32 extends VastElement<Icon_31> {}
class IFrameResource_33 extends VastElement<Icon_31> {}
class HTMLResource_34 extends VastElement<Icon_31> {}
class IconClickThrough_36 extends VastElement<IconClicks_35> {}
class IconClickTracking_37 extends VastElement<IconClicks_35> {}
class IconClicks_35 extends VastElement<Icon_31> {
  public attachIconClickThrough(content: string): IconClickThrough_36 {
    const newElem = new IconClickThrough_36(
      "IconClickThrough",
      this,
      {},
      content
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addIconClickThrough(content: string): IconClicks_35 {
    return this.attachIconClickThrough(content).and();
  }
  public attachIconClickTracking(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): IconClickTracking_37 {
    const newElem = new IconClickTracking_37(
      "IconClickTracking",
      this,
      { attrs: ["id"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addIconClickTracking(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): IconClicks_35 {
    return this.attachIconClickTracking(content, attributes).and();
  }
}
class IconViewTracking_38 extends VastElement<Icon_31> {}
class Icon_31 extends VastElement<Icons_30> {
  public attachStaticResource(
    content: string,
    attributes: {
      creativeType:
        | "image/gif"
        | "image/jpeg"
        | "image/jpg"
        | "image/png"
        | "application/x-javascript"
        | "application/x-shockwave-flash";
    }
  ): StaticResource_32 {
    const newElem = new StaticResource_32(
      "StaticResource",
      this,
      { attrs: ["creativeType"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(
    content: string,
    attributes: {
      creativeType:
        | "image/gif"
        | "image/jpeg"
        | "image/jpg"
        | "image/png"
        | "application/x-javascript"
        | "application/x-shockwave-flash";
    }
  ): Icon_31 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content: string): IFrameResource_33 {
    const newElem = new IFrameResource_33("IFrameResource", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content: string): Icon_31 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content: string): HTMLResource_34 {
    const newElem = new HTMLResource_34("HTMLResource", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content: string): Icon_31 {
    return this.attachHTMLResource(content).and();
  }
  public attachIconClicks(): IconClicks_35 {
    const newElem = new IconClicks_35("IconClicks", this, {});
    this.childs.push(newElem);
    return newElem;
  }
  public attachIconViewTracking(content: string): IconViewTracking_38 {
    const newElem = new IconViewTracking_38(
      "IconViewTracking",
      this,
      {},
      content
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addIconViewTracking(content: string): Icon_31 {
    return this.attachIconViewTracking(content).and();
  }
}
class Icons_30 extends VastElement<Linear_19> {
  public attachIcon(
    attributes: {
      program: string;
      width: string;
      height: string;
      xPosition: string;
      yPosition: string;
      duration?: string;
      offset?: string;
      apiFramework?: string;
    } = {}
  ): Icon_31 {
    const newElem = new Icon_31(
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
    );
    this.childs.push(newElem);
    return newElem;
  }
}
class Linear_19 extends VastElement<Creative_16> {
  public attachAdParameters(
    content: string,
    attributes: {
      xmlEncoded?: string;
    } = {}
  ): AdParameters_20 {
    const newElem = new AdParameters_20(
      "AdParameters",
      this,
      { attrs: ["xmlEncoded"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addAdParameters(
    content: string,
    attributes: {
      xmlEncoded?: string;
    } = {}
  ): Linear_19 {
    return this.attachAdParameters(content, attributes).and();
  }
  public attachDuration(content: string): Duration_21 {
    const newElem = new Duration_21("Duration", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addDuration(content: string): Linear_19 {
    return this.attachDuration(content).and();
  }
  public attachMediaFiles(): MediaFiles_22 {
    const newElem = new MediaFiles_22("MediaFiles", this, {});
    this.childs.push(newElem);
    return newElem;
  }
  public attachTrackingEvents(): TrackingEvents_24 {
    const newElem = new TrackingEvents_24("TrackingEvents", this, {});
    this.childs.push(newElem);
    return newElem;
  }
  public attachVideoClicks(): VideoClicks_26 {
    const newElem = new VideoClicks_26("VideoClicks", this, {});
    this.childs.push(newElem);
    return newElem;
  }
  public attachIcons(): Icons_30 {
    const newElem = new Icons_30("Icons", this, {});
    this.childs.push(newElem);
    return newElem;
  }
}
class StaticResource_41 extends VastElement<Companion_40> {}
class IFrameResource_42 extends VastElement<Companion_40> {}
class HTMLResource_43 extends VastElement<Companion_40> {}
class AdParameters_44 extends VastElement<Companion_40> {}
class AltText_45 extends VastElement<Companion_40> {}
class CompanionClickThrough_46 extends VastElement<Companion_40> {}
class CompanionClickTracking_47 extends VastElement<Companion_40> {}
class Tracking_49 extends VastElement<TrackingEvents_48> {}
class TrackingEvents_48 extends VastElement<Companion_40> {
  public attachTracking(
    content: string,
    attributes: {
      event: "creativeView";
    }
  ): Tracking_49 {
    const newElem = new Tracking_49(
      "Tracking",
      this,
      { attrs: ["event"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(
    content: string,
    attributes: {
      event: "creativeView";
    }
  ): TrackingEvents_48 {
    return this.attachTracking(content, attributes).and();
  }
}
class Companion_40 extends VastElement<CompanionAds_39> {
  public attachStaticResource(
    content: string,
    attributes: {
      creativeType:
        | "image/gif"
        | "image/jpeg"
        | "image/jpg"
        | "image/png"
        | "application/x-javascript"
        | "application/x-shockwave-flash";
    }
  ): StaticResource_41 {
    const newElem = new StaticResource_41(
      "StaticResource",
      this,
      { attrs: ["creativeType"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(
    content: string,
    attributes: {
      creativeType:
        | "image/gif"
        | "image/jpeg"
        | "image/jpg"
        | "image/png"
        | "application/x-javascript"
        | "application/x-shockwave-flash";
    }
  ): Companion_40 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content: string): IFrameResource_42 {
    const newElem = new IFrameResource_42("IFrameResource", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content: string): Companion_40 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content: string): HTMLResource_43 {
    const newElem = new HTMLResource_43("HTMLResource", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content: string): Companion_40 {
    return this.attachHTMLResource(content).and();
  }
  public attachAdParameters(
    content: string,
    attributes: {
      xmlEncoded?: string;
    } = {}
  ): AdParameters_44 {
    const newElem = new AdParameters_44(
      "AdParameters",
      this,
      { attrs: ["xmlEncoded"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addAdParameters(
    content: string,
    attributes: {
      xmlEncoded?: string;
    } = {}
  ): Companion_40 {
    return this.attachAdParameters(content, attributes).and();
  }
  public attachAltText(content: string): AltText_45 {
    const newElem = new AltText_45("AltText", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addAltText(content: string): Companion_40 {
    return this.attachAltText(content).and();
  }
  public attachCompanionClickThrough(
    content: string
  ): CompanionClickThrough_46 {
    const newElem = new CompanionClickThrough_46(
      "CompanionClickThrough",
      this,
      {},
      content
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addCompanionClickThrough(content: string): Companion_40 {
    return this.attachCompanionClickThrough(content).and();
  }
  public attachCompanionClickTracking(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): CompanionClickTracking_47 {
    const newElem = new CompanionClickTracking_47(
      "CompanionClickTracking",
      this,
      { attrs: ["id"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addCompanionClickTracking(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): Companion_40 {
    return this.attachCompanionClickTracking(content, attributes).and();
  }
  public attachTrackingEvents(): TrackingEvents_48 {
    const newElem = new TrackingEvents_48("TrackingEvents", this, {});
    this.childs.push(newElem);
    return newElem;
  }
}
class CompanionAds_39 extends VastElement<Creative_16> {
  public attachCompanion(
    attributes: {
      id?: string;
      width: string;
      height: string;
      assetWidth?: string;
      assetHeight?: string;
      expandedWidth?: string;
      expandedHeight?: string;
      apiFramework?: string;
      adSlotID?: string;
    } = {}
  ): Companion_40 {
    const newElem = new Companion_40(
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
    );
    this.childs.push(newElem);
    return newElem;
  }
}
class StaticResource_52 extends VastElement<NonLinear_51> {}
class IFrameResource_53 extends VastElement<NonLinear_51> {}
class HTMLResource_54 extends VastElement<NonLinear_51> {}
class NonLinearClickThrough_55 extends VastElement<NonLinear_51> {}
class NonLinearClickTracking_56 extends VastElement<NonLinear_51> {}
class AdParameters_57 extends VastElement<NonLinear_51> {}
class NonLinear_51 extends VastElement<NonLinearAds_50> {
  public attachStaticResource(
    content: string,
    attributes: {
      creativeType:
        | "image/gif"
        | "image/jpeg"
        | "image/jpg"
        | "image/png"
        | "application/x-javascript"
        | "application/x-shockwave-flash";
    }
  ): StaticResource_52 {
    const newElem = new StaticResource_52(
      "StaticResource",
      this,
      { attrs: ["creativeType"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(
    content: string,
    attributes: {
      creativeType:
        | "image/gif"
        | "image/jpeg"
        | "image/jpg"
        | "image/png"
        | "application/x-javascript"
        | "application/x-shockwave-flash";
    }
  ): NonLinear_51 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content: string): IFrameResource_53 {
    const newElem = new IFrameResource_53("IFrameResource", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content: string): NonLinear_51 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content: string): HTMLResource_54 {
    const newElem = new HTMLResource_54("HTMLResource", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content: string): NonLinear_51 {
    return this.attachHTMLResource(content).and();
  }
  public attachNonLinearClickThrough(
    content: string
  ): NonLinearClickThrough_55 {
    const newElem = new NonLinearClickThrough_55(
      "NonLinearClickThrough",
      this,
      {},
      content
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addNonLinearClickThrough(content: string): NonLinear_51 {
    return this.attachNonLinearClickThrough(content).and();
  }
  public attachNonLinearClickTracking(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): NonLinearClickTracking_56 {
    const newElem = new NonLinearClickTracking_56(
      "NonLinearClickTracking",
      this,
      { attrs: ["id"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addNonLinearClickTracking(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): NonLinear_51 {
    return this.attachNonLinearClickTracking(content, attributes).and();
  }
  public attachAdParameters(
    content: string,
    attributes: {
      xmlEncoded?: string;
    } = {}
  ): AdParameters_57 {
    const newElem = new AdParameters_57(
      "AdParameters",
      this,
      { attrs: ["xmlEncoded"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addAdParameters(
    content: string,
    attributes: {
      xmlEncoded?: string;
    } = {}
  ): NonLinear_51 {
    return this.attachAdParameters(content, attributes).and();
  }
}
class Tracking_59 extends VastElement<TrackingEvents_58> {}
class TrackingEvents_58 extends VastElement<NonLinearAds_50> {
  public attachTracking(
    content: string,
    attributes: {
      offset?: string;
      event:
        | "creativeView"
        | "start"
        | "firstQuartile"
        | "midpoint"
        | "thirdQuartile"
        | "complete"
        | "mute"
        | "unmute"
        | "pause"
        | "rewind"
        | "resume"
        | "fullscreen"
        | "exitFullscreen"
        | "expand"
        | "collapse"
        | "acceptInvitation"
        | "close"
        | "progress";
    }
  ): Tracking_59 {
    const newElem = new Tracking_59(
      "Tracking",
      this,
      { attrs: ["offset", "event"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(
    content: string,
    attributes: {
      offset?: string;
      event:
        | "creativeView"
        | "start"
        | "firstQuartile"
        | "midpoint"
        | "thirdQuartile"
        | "complete"
        | "mute"
        | "unmute"
        | "pause"
        | "rewind"
        | "resume"
        | "fullscreen"
        | "exitFullscreen"
        | "expand"
        | "collapse"
        | "acceptInvitation"
        | "close"
        | "progress";
    }
  ): TrackingEvents_58 {
    return this.attachTracking(content, attributes).and();
  }
}
class NonLinearAds_50 extends VastElement<Creative_16> {
  public attachNonLinear(
    attributes: {
      id?: string;
      width: string;
      height: string;
      expandedWidth?: string;
      expandedHeight?: string;
      scalable?: string;
      maintainAspectRatio?: string;
      minSuggestedDuration?: string;
      apiFramework?: string;
    } = {}
  ): NonLinear_51 {
    const newElem = new NonLinear_51(
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
    );
    this.childs.push(newElem);
    return newElem;
  }
  public attachTrackingEvents(): TrackingEvents_58 {
    const newElem = new TrackingEvents_58("TrackingEvents", this, {});
    this.childs.push(newElem);
    return newElem;
  }
}
class Creative_16 extends VastElement<Creatives_15> {
  public attachCreativeExtensions(): CreativeExtensions_17 {
    const newElem = new CreativeExtensions_17("CreativeExtensions", this, {});
    this.childs.push(newElem);
    return newElem;
  }
  public attachLinear(
    attributes: {
      skipoffset?: string;
    } = {}
  ): Linear_19 {
    const newElem = new Linear_19(
      "Linear",
      this,
      { attrs: ["skipoffset"] },
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public attachCompanionAds(attributes: {
    required: "all" | "any" | "none";
  }): CompanionAds_39 {
    const newElem = new CompanionAds_39(
      "CompanionAds",
      this,
      { attrs: ["required"] },
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public attachNonLinearAds(): NonLinearAds_50 {
    const newElem = new NonLinearAds_50("NonLinearAds", this, {});
    this.childs.push(newElem);
    return newElem;
  }
}
class Creatives_15 extends VastElement<InLine_6> {
  public attachCreative(
    attributes: {
      id?: string;
      sequence?: string;
      adID?: string;
      apiFramework?: string;
    } = {}
  ): Creative_16 {
    const newElem = new Creative_16(
      "Creative",
      this,
      { attrs: ["id", "sequence", "adID", "apiFramework"] },
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
}
class Extension_61 extends VastElement<Extensions_60> {}
class Extensions_60 extends VastElement<InLine_6> {
  public attachExtension(
    content: string,
    attributes: {
      type?: string;
    } = {}
  ): Extension_61 {
    const newElem = new Extension_61(
      "Extension",
      this,
      { attrs: ["type"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addExtension(
    content: string,
    attributes: {
      type?: string;
    } = {}
  ): Extensions_60 {
    return this.attachExtension(content, attributes).and();
  }
}
class InLine_6 extends VastElement<Ad_5> {
  public attachAdSystem(
    content: string,
    attributes: {
      version?: string;
    } = {}
  ): AdSystem_7 {
    const newElem = new AdSystem_7(
      "AdSystem",
      this,
      { attrs: ["version"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addAdSystem(
    content: string,
    attributes: {
      version?: string;
    } = {}
  ): InLine_6 {
    return this.attachAdSystem(content, attributes).and();
  }
  public attachAdTitle(content: string): AdTitle_8 {
    const newElem = new AdTitle_8("AdTitle", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdTitle(content: string): InLine_6 {
    return this.attachAdTitle(content).and();
  }
  public attachDescription(content: string): Description_9 {
    const newElem = new Description_9("Description", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addDescription(content: string): InLine_6 {
    return this.attachDescription(content).and();
  }
  public attachAdvertiser(content: string): Advertiser_10 {
    const newElem = new Advertiser_10("Advertiser", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdvertiser(content: string): InLine_6 {
    return this.attachAdvertiser(content).and();
  }
  public attachPricing(
    content: string,
    attributes: {
      currency: string;
      model: "CPM" | "CPC" | "CPE" | "CPV";
    }
  ): Pricing_11 {
    const newElem = new Pricing_11(
      "Pricing",
      this,
      { attrs: ["currency", "model"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addPricing(
    content: string,
    attributes: {
      currency: string;
      model: "CPM" | "CPC" | "CPE" | "CPV";
    }
  ): InLine_6 {
    return this.attachPricing(content, attributes).and();
  }
  public attachSurvey(content: string): Survey_12 {
    const newElem = new Survey_12("Survey", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addSurvey(content: string): InLine_6 {
    return this.attachSurvey(content).and();
  }
  public attachError(content: string): Error_13 {
    const newElem = new Error_13("Error", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addError(content: string): InLine_6 {
    return this.attachError(content).and();
  }
  public attachImpression(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): Impression_14 {
    const newElem = new Impression_14(
      "Impression",
      this,
      { attrs: ["id"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addImpression(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): InLine_6 {
    return this.attachImpression(content, attributes).and();
  }
  public attachCreatives(): Creatives_15 {
    const newElem = new Creatives_15("Creatives", this, {});
    this.childs.push(newElem);
    return newElem;
  }
  public attachExtensions(): Extensions_60 {
    const newElem = new Extensions_60("Extensions", this, {});
    this.childs.push(newElem);
    return newElem;
  }
}
class AdSystem_63 extends VastElement<Wrapper_62> {}
class VASTAdTagURI_64 extends VastElement<Wrapper_62> {}
class Error_65 extends VastElement<Wrapper_62> {}
class Impression_66 extends VastElement<Wrapper_62> {}
class Tracking_71 extends VastElement<TrackingEvents_70> {}
class TrackingEvents_70 extends VastElement<Linear_69> {
  public attachTracking(
    content: string,
    attributes: {
      offset?: string;
      event:
        | "creativeView"
        | "start"
        | "firstQuartile"
        | "midpoint"
        | "thirdQuartile"
        | "complete"
        | "mute"
        | "unmute"
        | "pause"
        | "rewind"
        | "resume"
        | "fullscreen"
        | "exitFullscreen"
        | "expand"
        | "collapse"
        | "acceptInvitationLinear"
        | "closeLinear"
        | "skip"
        | "progress";
    }
  ): Tracking_71 {
    const newElem = new Tracking_71(
      "Tracking",
      this,
      { attrs: ["offset", "event"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(
    content: string,
    attributes: {
      offset?: string;
      event:
        | "creativeView"
        | "start"
        | "firstQuartile"
        | "midpoint"
        | "thirdQuartile"
        | "complete"
        | "mute"
        | "unmute"
        | "pause"
        | "rewind"
        | "resume"
        | "fullscreen"
        | "exitFullscreen"
        | "expand"
        | "collapse"
        | "acceptInvitationLinear"
        | "closeLinear"
        | "skip"
        | "progress";
    }
  ): TrackingEvents_70 {
    return this.attachTracking(content, attributes).and();
  }
}
class ClickTracking_73 extends VastElement<VideoClicks_72> {}
class CustomClick_74 extends VastElement<VideoClicks_72> {}
class VideoClicks_72 extends VastElement<Linear_69> {
  public attachClickTracking(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): ClickTracking_73 {
    const newElem = new ClickTracking_73(
      "ClickTracking",
      this,
      { attrs: ["id"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addClickTracking(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): VideoClicks_72 {
    return this.attachClickTracking(content, attributes).and();
  }
  public attachCustomClick(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): CustomClick_74 {
    const newElem = new CustomClick_74(
      "CustomClick",
      this,
      { attrs: ["id"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addCustomClick(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): VideoClicks_72 {
    return this.attachCustomClick(content, attributes).and();
  }
}
class StaticResource_77 extends VastElement<Icon_76> {}
class IFrameResource_78 extends VastElement<Icon_76> {}
class HTMLResource_79 extends VastElement<Icon_76> {}
class IconClickThrough_81 extends VastElement<IconClicks_80> {}
class IconClickTracking_82 extends VastElement<IconClicks_80> {}
class IconClicks_80 extends VastElement<Icon_76> {
  public attachIconClickThrough(content: string): IconClickThrough_81 {
    const newElem = new IconClickThrough_81(
      "IconClickThrough",
      this,
      {},
      content
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addIconClickThrough(content: string): IconClicks_80 {
    return this.attachIconClickThrough(content).and();
  }
  public attachIconClickTracking(content: string): IconClickTracking_82 {
    const newElem = new IconClickTracking_82(
      "IconClickTracking",
      this,
      {},
      content
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addIconClickTracking(content: string): IconClicks_80 {
    return this.attachIconClickTracking(content).and();
  }
}
class IconViewTracking_83 extends VastElement<Icon_76> {}
class Icon_76 extends VastElement<Icons_75> {
  public attachStaticResource(
    content: string,
    attributes: {
      creativeType:
        | "image/gif"
        | "image/jpeg"
        | "image/jpg"
        | "image/png"
        | "application/x-javascript"
        | "application/x-shockwave-flash";
    }
  ): StaticResource_77 {
    const newElem = new StaticResource_77(
      "StaticResource",
      this,
      { attrs: ["creativeType"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(
    content: string,
    attributes: {
      creativeType:
        | "image/gif"
        | "image/jpeg"
        | "image/jpg"
        | "image/png"
        | "application/x-javascript"
        | "application/x-shockwave-flash";
    }
  ): Icon_76 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content: string): IFrameResource_78 {
    const newElem = new IFrameResource_78("IFrameResource", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content: string): Icon_76 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content: string): HTMLResource_79 {
    const newElem = new HTMLResource_79("HTMLResource", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content: string): Icon_76 {
    return this.attachHTMLResource(content).and();
  }
  public attachIconClicks(): IconClicks_80 {
    const newElem = new IconClicks_80("IconClicks", this, {});
    this.childs.push(newElem);
    return newElem;
  }
  public attachIconViewTracking(content: string): IconViewTracking_83 {
    const newElem = new IconViewTracking_83(
      "IconViewTracking",
      this,
      {},
      content
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addIconViewTracking(content: string): Icon_76 {
    return this.attachIconViewTracking(content).and();
  }
}
class Icons_75 extends VastElement<Linear_69> {
  public attachIcon(
    attributes: {
      program: string;
      width: string;
      height: string;
      xPosition: string;
      yPosition: string;
      duration?: string;
      offset?: string;
      apiFramework?: string;
    } = {}
  ): Icon_76 {
    const newElem = new Icon_76(
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
    );
    this.childs.push(newElem);
    return newElem;
  }
}
class Linear_69 extends VastElement<Creative_68> {
  public attachTrackingEvents(): TrackingEvents_70 {
    const newElem = new TrackingEvents_70("TrackingEvents", this, {});
    this.childs.push(newElem);
    return newElem;
  }
  public attachVideoClicks(): VideoClicks_72 {
    const newElem = new VideoClicks_72("VideoClicks", this, {});
    this.childs.push(newElem);
    return newElem;
  }
  public attachIcons(): Icons_75 {
    const newElem = new Icons_75("Icons", this, {});
    this.childs.push(newElem);
    return newElem;
  }
}
class StaticResource_86 extends VastElement<Companion_85> {}
class IFrameResource_87 extends VastElement<Companion_85> {}
class HTMLResource_88 extends VastElement<Companion_85> {}
class AdParameters_89 extends VastElement<Companion_85> {}
class AltText_90 extends VastElement<Companion_85> {}
class CompanionClickThrough_91 extends VastElement<Companion_85> {}
class CompanionClickTracking_92 extends VastElement<Companion_85> {}
class Tracking_94 extends VastElement<TrackingEvents_93> {}
class TrackingEvents_93 extends VastElement<Companion_85> {
  public attachTracking(
    content: string,
    attributes: {
      event: "creativeView";
    }
  ): Tracking_94 {
    const newElem = new Tracking_94(
      "Tracking",
      this,
      { attrs: ["event"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(
    content: string,
    attributes: {
      event: "creativeView";
    }
  ): TrackingEvents_93 {
    return this.attachTracking(content, attributes).and();
  }
}
class Companion_85 extends VastElement<CompanionAds_84> {
  public attachStaticResource(
    content: string,
    attributes: {
      creativeType:
        | "image/gif"
        | "image/jpeg"
        | "image/jpg"
        | "image/png"
        | "application/x-javascript"
        | "application/x-shockwave-flash";
    }
  ): StaticResource_86 {
    const newElem = new StaticResource_86(
      "StaticResource",
      this,
      { attrs: ["creativeType"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(
    content: string,
    attributes: {
      creativeType:
        | "image/gif"
        | "image/jpeg"
        | "image/jpg"
        | "image/png"
        | "application/x-javascript"
        | "application/x-shockwave-flash";
    }
  ): Companion_85 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content: string): IFrameResource_87 {
    const newElem = new IFrameResource_87("IFrameResource", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content: string): Companion_85 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content: string): HTMLResource_88 {
    const newElem = new HTMLResource_88("HTMLResource", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content: string): Companion_85 {
    return this.attachHTMLResource(content).and();
  }
  public attachAdParameters(
    content: string,
    attributes: {
      xmlEncoded?: string;
    } = {}
  ): AdParameters_89 {
    const newElem = new AdParameters_89(
      "AdParameters",
      this,
      { attrs: ["xmlEncoded"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addAdParameters(
    content: string,
    attributes: {
      xmlEncoded?: string;
    } = {}
  ): Companion_85 {
    return this.attachAdParameters(content, attributes).and();
  }
  public attachAltText(content: string): AltText_90 {
    const newElem = new AltText_90("AltText", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addAltText(content: string): Companion_85 {
    return this.attachAltText(content).and();
  }
  public attachCompanionClickThrough(
    content: string
  ): CompanionClickThrough_91 {
    const newElem = new CompanionClickThrough_91(
      "CompanionClickThrough",
      this,
      {},
      content
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addCompanionClickThrough(content: string): Companion_85 {
    return this.attachCompanionClickThrough(content).and();
  }
  public attachCompanionClickTracking(
    content: string
  ): CompanionClickTracking_92 {
    const newElem = new CompanionClickTracking_92(
      "CompanionClickTracking",
      this,
      {},
      content
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addCompanionClickTracking(content: string): Companion_85 {
    return this.attachCompanionClickTracking(content).and();
  }
  public attachTrackingEvents(): TrackingEvents_93 {
    const newElem = new TrackingEvents_93("TrackingEvents", this, {});
    this.childs.push(newElem);
    return newElem;
  }
}
class CompanionAds_84 extends VastElement<Creative_68> {
  public attachCompanion(
    attributes: {
      id?: string;
      width: string;
      height: string;
      assetWidth?: string;
      assetHeight?: string;
      expandedWidth?: string;
      expandedHeight?: string;
      apiFramework?: string;
      adSlotID?: string;
    } = {}
  ): Companion_85 {
    const newElem = new Companion_85(
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
    );
    this.childs.push(newElem);
    return newElem;
  }
}
class NonLinearClickTracking_97 extends VastElement<NonLinear_96> {}
class NonLinear_96 extends VastElement<NonLinearAds_95> {
  public attachNonLinearClickTracking(
    content: string
  ): NonLinearClickTracking_97 {
    const newElem = new NonLinearClickTracking_97(
      "NonLinearClickTracking",
      this,
      {},
      content
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addNonLinearClickTracking(content: string): NonLinear_96 {
    return this.attachNonLinearClickTracking(content).and();
  }
}
class Tracking_99 extends VastElement<TrackingEvents_98> {}
class TrackingEvents_98 extends VastElement<NonLinearAds_95> {
  public attachTracking(
    content: string,
    attributes: {
      offset?: string;
      event:
        | "creativeView"
        | "start"
        | "firstQuartile"
        | "midpoint"
        | "thirdQuartile"
        | "complete"
        | "mute"
        | "unmute"
        | "pause"
        | "rewind"
        | "resume"
        | "fullscreen"
        | "exitFullscreen"
        | "expand"
        | "collapse"
        | "acceptInvitation"
        | "close"
        | "progress";
    }
  ): Tracking_99 {
    const newElem = new Tracking_99(
      "Tracking",
      this,
      { attrs: ["offset", "event"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(
    content: string,
    attributes: {
      offset?: string;
      event:
        | "creativeView"
        | "start"
        | "firstQuartile"
        | "midpoint"
        | "thirdQuartile"
        | "complete"
        | "mute"
        | "unmute"
        | "pause"
        | "rewind"
        | "resume"
        | "fullscreen"
        | "exitFullscreen"
        | "expand"
        | "collapse"
        | "acceptInvitation"
        | "close"
        | "progress";
    }
  ): TrackingEvents_98 {
    return this.attachTracking(content, attributes).and();
  }
}
class NonLinearAds_95 extends VastElement<Creative_68> {
  public attachNonLinear(
    attributes: {
      id?: string;
      width: string;
      height: string;
      expandedWidth?: string;
      expandedHeight?: string;
      scalable?: string;
      maintainAspectRatio?: string;
      minSuggestedDuration?: string;
      apiFramework?: string;
    } = {}
  ): NonLinear_96 {
    const newElem = new NonLinear_96(
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
    );
    this.childs.push(newElem);
    return newElem;
  }
  public attachTrackingEvents(): TrackingEvents_98 {
    const newElem = new TrackingEvents_98("TrackingEvents", this, {});
    this.childs.push(newElem);
    return newElem;
  }
}
class Creative_68 extends VastElement<Creatives_67> {
  public attachLinear(): Linear_69 {
    const newElem = new Linear_69("Linear", this, {});
    this.childs.push(newElem);
    return newElem;
  }
  public attachCompanionAds(attributes: {
    required: "all" | "any" | "none";
  }): CompanionAds_84 {
    const newElem = new CompanionAds_84(
      "CompanionAds",
      this,
      { attrs: ["required"] },
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public attachNonLinearAds(): NonLinearAds_95 {
    const newElem = new NonLinearAds_95("NonLinearAds", this, {});
    this.childs.push(newElem);
    return newElem;
  }
}
class Creatives_67 extends VastElement<Wrapper_62> {
  public attachCreative(
    attributes: {
      id?: string;
      sequence?: string;
      adID?: string;
    } = {}
  ): Creative_68 {
    const newElem = new Creative_68(
      "Creative",
      this,
      { attrs: ["id", "sequence", "adID"] },
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
}
class Extension_101 extends VastElement<Extensions_100> {}
class Extensions_100 extends VastElement<Wrapper_62> {
  public attachExtension(
    content: string,
    attributes: {
      type?: string;
    } = {}
  ): Extension_101 {
    const newElem = new Extension_101(
      "Extension",
      this,
      { attrs: ["type"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addExtension(
    content: string,
    attributes: {
      type?: string;
    } = {}
  ): Extensions_100 {
    return this.attachExtension(content, attributes).and();
  }
}
class Wrapper_62 extends VastElement<Ad_5> {
  public attachAdSystem(
    content: string,
    attributes: {
      version?: string;
    } = {}
  ): AdSystem_63 {
    const newElem = new AdSystem_63(
      "AdSystem",
      this,
      { attrs: ["version"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addAdSystem(
    content: string,
    attributes: {
      version?: string;
    } = {}
  ): Wrapper_62 {
    return this.attachAdSystem(content, attributes).and();
  }
  public attachVASTAdTagURI(content: string): VASTAdTagURI_64 {
    const newElem = new VASTAdTagURI_64("VASTAdTagURI", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addVASTAdTagURI(content: string): Wrapper_62 {
    return this.attachVASTAdTagURI(content).and();
  }
  public attachError(content: string): Error_65 {
    const newElem = new Error_65("Error", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addError(content: string): Wrapper_62 {
    return this.attachError(content).and();
  }
  public attachImpression(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): Impression_66 {
    const newElem = new Impression_66(
      "Impression",
      this,
      { attrs: ["id"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addImpression(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): Wrapper_62 {
    return this.attachImpression(content, attributes).and();
  }
  public attachCreatives(): Creatives_67 {
    const newElem = new Creatives_67("Creatives", this, {});
    this.childs.push(newElem);
    return newElem;
  }
  public attachExtensions(): Extensions_100 {
    const newElem = new Extensions_100("Extensions", this, {});
    this.childs.push(newElem);
    return newElem;
  }
}
class Ad_5 extends VastElement<VAST_3> {
  public attachInLine(): InLine_6 {
    const newElem = new InLine_6("InLine", this, {});
    this.childs.push(newElem);
    return newElem;
  }
  public attachWrapper(
    attributes: {
      followAdditonalWrappers?: string;
      allowMultipleAds?: string;
      fallbackOnNoAd?: string;
    } = {}
  ): Wrapper_62 {
    const newElem = new Wrapper_62(
      "Wrapper",
      this,
      {
        attrs: ["followAdditonalWrappers", "allowMultipleAds", "fallbackOnNoAd"]
      },
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
}
class VAST_3 extends VastElement<apiv3> {
  public attachError(content: string): Error_4 {
    const newElem = new Error_4("Error", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addError(content: string): VAST_3 {
    return this.attachError(content).and();
  }
  public attachAd(
    attributes: {
      id?: string;
      sequence?: string;
    } = {}
  ): Ad_5 {
    const newElem = new Ad_5(
      "Ad",
      this,
      { attrs: ["id", "sequence"] },
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
}
class apiv3 extends VastElement<apiv3> {
  public attachVAST(attributes: { version: "3.0" }): VAST_3 {
    const newElem = new VAST_3(
      "VAST",
      this,
      { attrs: ["version"] },
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
}

export { apiv3 };
