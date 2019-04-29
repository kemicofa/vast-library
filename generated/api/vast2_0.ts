/* tslint:disable: class-name object-literal-sort-keys */

///////////////////////////////////////////////////////
//  IMPORTANT: this file is generated, dont edit it
/////////

import V from "../../common/vast-element";

function p<T extends V<any>>(newElem: T): T {
  newElem.parent.childs.push(newElem);
  return newElem;
}

class AdSystem_5 extends V<InLine_4> {}
class AdTitle_6 extends V<InLine_4> {}
class Description_7 extends V<InLine_4> {}
class Survey_8 extends V<InLine_4> {}
class Error_9 extends V<InLine_4> {}
class Impression_10 extends V<InLine_4> {}
class Duration_14 extends V<Linear_13> {}
class Tracking_16 extends V<TrackingEvents_15> {}
class TrackingEvents_15 extends V<Linear_13> {
  public attachTracking(
    content: string,
    attributes: {
      event:
        | "creativeView"
        | "start"
        | "midpoint"
        | "firstQuartile"
        | "thirdQuartile"
        | "complete"
        | "mute"
        | "unmute"
        | "pause"
        | "rewind"
        | "resume"
        | "fullscreen"
        | "expand"
        | "collapse"
        | "acceptInvitation"
        | "close";
    }
  ): Tracking_16 {
    return p<Tracking_16>(
      new Tracking_16(
        "Tracking",
        this,
        { attrs: ["event"] },
        content,
        attributes
      )
    );
  }
  public addTracking(
    content: string,
    attributes: {
      event:
        | "creativeView"
        | "start"
        | "midpoint"
        | "firstQuartile"
        | "thirdQuartile"
        | "complete"
        | "mute"
        | "unmute"
        | "pause"
        | "rewind"
        | "resume"
        | "fullscreen"
        | "expand"
        | "collapse"
        | "acceptInvitation"
        | "close";
    }
  ): TrackingEvents_15 {
    return this.attachTracking(content, attributes).and();
  }
}
class AdParameters_17 extends V<Linear_13> {}
class ClickThrough_19 extends V<VideoClicks_18> {}
class ClickTracking_20 extends V<VideoClicks_18> {}
class CustomClick_21 extends V<VideoClicks_18> {}
class VideoClicks_18 extends V<Linear_13> {
  public attachClickThrough(content: string): ClickThrough_19 {
    return p<ClickThrough_19>(
      new ClickThrough_19("ClickThrough", this, {}, content)
    );
  }
  public addClickThrough(content: string): VideoClicks_18 {
    return this.attachClickThrough(content).and();
  }
  public attachClickTracking(content: string): ClickTracking_20 {
    return p<ClickTracking_20>(
      new ClickTracking_20("ClickTracking", this, {}, content)
    );
  }
  public addClickTracking(content: string): VideoClicks_18 {
    return this.attachClickTracking(content).and();
  }
  public attachCustomClick(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): CustomClick_21 {
    return p<CustomClick_21>(
      new CustomClick_21(
        "CustomClick",
        this,
        { attrs: ["id"] },
        content,
        attributes
      )
    );
  }
  public addCustomClick(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): VideoClicks_18 {
    return this.attachCustomClick(content, attributes).and();
  }
}
class MediaFile_23 extends V<MediaFiles_22> {}
class MediaFiles_22 extends V<Linear_13> {
  public attachMediaFile(
    content: string,
    attributes: {
      id?: string;
      delivery: "progressive" | "streaming";
      type: string;
      bitrate?: string;
      width: string;
      height: string;
      scalable?: string;
      mantainAspectRatio?: string;
      apiFramework?: string;
    }
  ): MediaFile_23 {
    return p<MediaFile_23>(
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
  }
  public addMediaFile(
    content: string,
    attributes: {
      id?: string;
      delivery: "progressive" | "streaming";
      type: string;
      bitrate?: string;
      width: string;
      height: string;
      scalable?: string;
      mantainAspectRatio?: string;
      apiFramework?: string;
    }
  ): MediaFiles_22 {
    return this.attachMediaFile(content, attributes).and();
  }
}
class Linear_13 extends V<Creative_12> {
  public attachDuration(content: string): Duration_14 {
    return p<Duration_14>(new Duration_14("Duration", this, {}, content));
  }
  public addDuration(content: string): Linear_13 {
    return this.attachDuration(content).and();
  }
  public attachTrackingEvents(): TrackingEvents_15 {
    return p<TrackingEvents_15>(
      new TrackingEvents_15("TrackingEvents", this, {})
    );
  }
  public attachAdParameters(content: string): AdParameters_17 {
    return p<AdParameters_17>(
      new AdParameters_17("AdParameters", this, {}, content)
    );
  }
  public addAdParameters(content: string): Linear_13 {
    return this.attachAdParameters(content).and();
  }
  public attachVideoClicks(): VideoClicks_18 {
    return p<VideoClicks_18>(new VideoClicks_18("VideoClicks", this, {}));
  }
  public attachMediaFiles(): MediaFiles_22 {
    return p<MediaFiles_22>(new MediaFiles_22("MediaFiles", this, {}));
  }
}
class StaticResource_26 extends V<Companion_25> {}
class IFrameResource_27 extends V<Companion_25> {}
class HTMLResource_28 extends V<Companion_25> {}
class Tracking_30 extends V<TrackingEvents_29> {}
class TrackingEvents_29 extends V<Companion_25> {
  public attachTracking(
    content: string,
    attributes: {
      event: "creativeView";
    }
  ): Tracking_30 {
    return p<Tracking_30>(
      new Tracking_30(
        "Tracking",
        this,
        { attrs: ["event"] },
        content,
        attributes
      )
    );
  }
  public addTracking(
    content: string,
    attributes: {
      event: "creativeView";
    }
  ): TrackingEvents_29 {
    return this.attachTracking(content, attributes).and();
  }
}
class CompanionClickThrough_31 extends V<Companion_25> {}
class AltText_32 extends V<Companion_25> {}
class AdParameters_33 extends V<Companion_25> {}
class Companion_25 extends V<CompanionAds_24> {
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
  ): StaticResource_26 {
    return p<StaticResource_26>(
      new StaticResource_26(
        "StaticResource",
        this,
        { attrs: ["creativeType"] },
        content,
        attributes
      )
    );
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
  ): Companion_25 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content: string): IFrameResource_27 {
    return p<IFrameResource_27>(
      new IFrameResource_27("IFrameResource", this, {}, content)
    );
  }
  public addIFrameResource(content: string): Companion_25 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content: string): HTMLResource_28 {
    return p<HTMLResource_28>(
      new HTMLResource_28("HTMLResource", this, {}, content)
    );
  }
  public addHTMLResource(content: string): Companion_25 {
    return this.attachHTMLResource(content).and();
  }
  public attachTrackingEvents(): TrackingEvents_29 {
    return p<TrackingEvents_29>(
      new TrackingEvents_29("TrackingEvents", this, {})
    );
  }
  public attachCompanionClickThrough(
    content: string
  ): CompanionClickThrough_31 {
    return p<CompanionClickThrough_31>(
      new CompanionClickThrough_31("CompanionClickThrough", this, {}, content)
    );
  }
  public addCompanionClickThrough(content: string): Companion_25 {
    return this.attachCompanionClickThrough(content).and();
  }
  public attachAltText(content: string): AltText_32 {
    return p<AltText_32>(new AltText_32("AltText", this, {}, content));
  }
  public addAltText(content: string): Companion_25 {
    return this.attachAltText(content).and();
  }
  public attachAdParameters(content: string): AdParameters_33 {
    return p<AdParameters_33>(
      new AdParameters_33("AdParameters", this, {}, content)
    );
  }
  public addAdParameters(content: string): Companion_25 {
    return this.attachAdParameters(content).and();
  }
}
class CompanionAds_24 extends V<Creative_12> {
  public attachCompanion(attributes: {
    id?: string;
    width: string;
    height: string;
    expandedWidth?: string;
    expandedHeight?: string;
    apiFramework?: string;
  }): Companion_25 {
    return p<Companion_25>(
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
  }
}
class StaticResource_36 extends V<NonLinear_35> {}
class IFrameResource_37 extends V<NonLinear_35> {}
class HTMLResource_38 extends V<NonLinear_35> {}
class NonLinear_35 extends V<NonLinearAds_34> {
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
  ): StaticResource_36 {
    return p<StaticResource_36>(
      new StaticResource_36(
        "StaticResource",
        this,
        { attrs: ["creativeType"] },
        content,
        attributes
      )
    );
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
  ): NonLinear_35 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content: string): IFrameResource_37 {
    return p<IFrameResource_37>(
      new IFrameResource_37("IFrameResource", this, {}, content)
    );
  }
  public addIFrameResource(content: string): NonLinear_35 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content: string): HTMLResource_38 {
    return p<HTMLResource_38>(
      new HTMLResource_38("HTMLResource", this, {}, content)
    );
  }
  public addHTMLResource(content: string): NonLinear_35 {
    return this.attachHTMLResource(content).and();
  }
}
class Tracking_40 extends V<TrackingEvents_39> {}
class TrackingEvents_39 extends V<NonLinearAds_34> {
  public attachTracking(
    content: string,
    attributes: {
      event:
        | "creativeView"
        | "start"
        | "midpoint"
        | "firstQuartile"
        | "thirdQuartile"
        | "complete"
        | "mute"
        | "unmute"
        | "pause"
        | "rewind"
        | "resume"
        | "fullscreen"
        | "expand"
        | "collapse"
        | "acceptInvitation"
        | "close";
    }
  ): Tracking_40 {
    return p<Tracking_40>(
      new Tracking_40(
        "Tracking",
        this,
        { attrs: ["event"] },
        content,
        attributes
      )
    );
  }
  public addTracking(
    content: string,
    attributes: {
      event:
        | "creativeView"
        | "start"
        | "midpoint"
        | "firstQuartile"
        | "thirdQuartile"
        | "complete"
        | "mute"
        | "unmute"
        | "pause"
        | "rewind"
        | "resume"
        | "fullscreen"
        | "expand"
        | "collapse"
        | "acceptInvitation"
        | "close";
    }
  ): TrackingEvents_39 {
    return this.attachTracking(content, attributes).and();
  }
}
class NonLinearClickThrough_41 extends V<NonLinearAds_34> {}
class AdParameters_42 extends V<NonLinearAds_34> {}
class NonLinearAds_34 extends V<Creative_12> {
  public attachNonLinear(attributes: {
    id?: string;
    width: string;
    height: string;
    expandedWidth?: string;
    expandedHeight?: string;
    scalable?: string;
    maintainAspectRatio?: string;
    minSuggestedDuration?: string;
    apiFramework?: string;
  }): NonLinear_35 {
    return p<NonLinear_35>(
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
  }
  public attachTrackingEvents(): TrackingEvents_39 {
    return p<TrackingEvents_39>(
      new TrackingEvents_39("TrackingEvents", this, {})
    );
  }
  public attachNonLinearClickThrough(
    content: string
  ): NonLinearClickThrough_41 {
    return p<NonLinearClickThrough_41>(
      new NonLinearClickThrough_41("NonLinearClickThrough", this, {}, content)
    );
  }
  public addNonLinearClickThrough(content: string): NonLinearAds_34 {
    return this.attachNonLinearClickThrough(content).and();
  }
  public attachAdParameters(content: string): AdParameters_42 {
    return p<AdParameters_42>(
      new AdParameters_42("AdParameters", this, {}, content)
    );
  }
  public addAdParameters(content: string): NonLinearAds_34 {
    return this.attachAdParameters(content).and();
  }
}
class Creative_12 extends V<Creatives_11> {
  public attachLinear(): Linear_13 {
    return p<Linear_13>(new Linear_13("Linear", this, {}));
  }
  public attachCompanionAds(): CompanionAds_24 {
    return p<CompanionAds_24>(new CompanionAds_24("CompanionAds", this, {}));
  }
  public attachNonLinearAds(): NonLinearAds_34 {
    return p<NonLinearAds_34>(new NonLinearAds_34("NonLinearAds", this, {}));
  }
}
class Creatives_11 extends V<InLine_4> {
  public attachCreative(
    attributes: {
      id?: string;
      sequence?: string;
      adID?: string;
    } = {}
  ): Creative_12 {
    return p<Creative_12>(
      new Creative_12(
        "Creative",
        this,
        { attrs: ["id", "sequence", "adID"] },
        attributes
      )
    );
  }
}
class Extension_44 extends V<Extensions_43> {}
class Extensions_43 extends V<InLine_4> {
  public attachExtension(
    content: string,
    attributes: {
      type?: string;
    } = {}
  ): Extension_44 {
    return p<Extension_44>(
      new Extension_44(
        "Extension",
        this,
        { attrs: ["type"] },
        content,
        attributes
      )
    );
  }
  public addExtension(
    content: string,
    attributes: {
      type?: string;
    } = {}
  ): Extensions_43 {
    return this.attachExtension(content, attributes).and();
  }
}
class InLine_4 extends V<Ad_3> {
  public attachAdSystem(
    content: string,
    attributes: {
      version?: string;
    } = {}
  ): AdSystem_5 {
    return p<AdSystem_5>(
      new AdSystem_5(
        "AdSystem",
        this,
        { attrs: ["version"] },
        content,
        attributes
      )
    );
  }
  public addAdSystem(
    content: string,
    attributes: {
      version?: string;
    } = {}
  ): InLine_4 {
    return this.attachAdSystem(content, attributes).and();
  }
  public attachAdTitle(content: string): AdTitle_6 {
    return p<AdTitle_6>(new AdTitle_6("AdTitle", this, {}, content));
  }
  public addAdTitle(content: string): InLine_4 {
    return this.attachAdTitle(content).and();
  }
  public attachDescription(content: string): Description_7 {
    return p<Description_7>(
      new Description_7("Description", this, {}, content)
    );
  }
  public addDescription(content: string): InLine_4 {
    return this.attachDescription(content).and();
  }
  public attachSurvey(content: string): Survey_8 {
    return p<Survey_8>(new Survey_8("Survey", this, {}, content));
  }
  public addSurvey(content: string): InLine_4 {
    return this.attachSurvey(content).and();
  }
  public attachError(content: string): Error_9 {
    return p<Error_9>(new Error_9("Error", this, {}, content));
  }
  public addError(content: string): InLine_4 {
    return this.attachError(content).and();
  }
  public attachImpression(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): Impression_10 {
    return p<Impression_10>(
      new Impression_10(
        "Impression",
        this,
        { attrs: ["id"] },
        content,
        attributes
      )
    );
  }
  public addImpression(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): InLine_4 {
    return this.attachImpression(content, attributes).and();
  }
  public attachCreatives(): Creatives_11 {
    return p<Creatives_11>(new Creatives_11("Creatives", this, {}));
  }
  public attachExtensions(): Extensions_43 {
    return p<Extensions_43>(new Extensions_43("Extensions", this, {}));
  }
}
class AdSystem_46 extends V<Wrapper_45> {}
class VASTAdTagURI_47 extends V<Wrapper_45> {}
class Error_48 extends V<Wrapper_45> {}
class Impression_49 extends V<Wrapper_45> {}
class Tracking_54 extends V<TrackingEvents_53> {}
class TrackingEvents_53 extends V<Linear_52> {
  public attachTracking(
    content: string,
    attributes: {
      event:
        | "creativeView"
        | "start"
        | "midpoint"
        | "firstQuartile"
        | "thirdQuartile"
        | "complete"
        | "mute"
        | "unmute"
        | "pause"
        | "rewind"
        | "resume"
        | "fullscreen"
        | "expand"
        | "collapse"
        | "acceptInvitation"
        | "close";
    }
  ): Tracking_54 {
    return p<Tracking_54>(
      new Tracking_54(
        "Tracking",
        this,
        { attrs: ["event"] },
        content,
        attributes
      )
    );
  }
  public addTracking(
    content: string,
    attributes: {
      event:
        | "creativeView"
        | "start"
        | "midpoint"
        | "firstQuartile"
        | "thirdQuartile"
        | "complete"
        | "mute"
        | "unmute"
        | "pause"
        | "rewind"
        | "resume"
        | "fullscreen"
        | "expand"
        | "collapse"
        | "acceptInvitation"
        | "close";
    }
  ): TrackingEvents_53 {
    return this.attachTracking(content, attributes).and();
  }
}
class ClickThrough_56 extends V<VideoClicks_55> {}
class ClickTracking_57 extends V<VideoClicks_55> {}
class CustomClick_58 extends V<VideoClicks_55> {}
class VideoClicks_55 extends V<Linear_52> {
  public attachClickThrough(content: string): ClickThrough_56 {
    return p<ClickThrough_56>(
      new ClickThrough_56("ClickThrough", this, {}, content)
    );
  }
  public addClickThrough(content: string): VideoClicks_55 {
    return this.attachClickThrough(content).and();
  }
  public attachClickTracking(content: string): ClickTracking_57 {
    return p<ClickTracking_57>(
      new ClickTracking_57("ClickTracking", this, {}, content)
    );
  }
  public addClickTracking(content: string): VideoClicks_55 {
    return this.attachClickTracking(content).and();
  }
  public attachCustomClick(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): CustomClick_58 {
    return p<CustomClick_58>(
      new CustomClick_58(
        "CustomClick",
        this,
        { attrs: ["id"] },
        content,
        attributes
      )
    );
  }
  public addCustomClick(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): VideoClicks_55 {
    return this.attachCustomClick(content, attributes).and();
  }
}
class Linear_52 extends V<Creative_51> {
  public attachTrackingEvents(): TrackingEvents_53 {
    return p<TrackingEvents_53>(
      new TrackingEvents_53("TrackingEvents", this, {})
    );
  }
  public attachVideoClicks(): VideoClicks_55 {
    return p<VideoClicks_55>(new VideoClicks_55("VideoClicks", this, {}));
  }
}
class StaticResource_61 extends V<Companion_60> {}
class IFrameResource_62 extends V<Companion_60> {}
class HTMLResource_63 extends V<Companion_60> {}
class Tracking_65 extends V<TrackingEvents_64> {}
class TrackingEvents_64 extends V<Companion_60> {
  public attachTracking(
    content: string,
    attributes: {
      event: "creativeView";
    }
  ): Tracking_65 {
    return p<Tracking_65>(
      new Tracking_65(
        "Tracking",
        this,
        { attrs: ["event"] },
        content,
        attributes
      )
    );
  }
  public addTracking(
    content: string,
    attributes: {
      event: "creativeView";
    }
  ): TrackingEvents_64 {
    return this.attachTracking(content, attributes).and();
  }
}
class CompanionClickThrough_66 extends V<Companion_60> {}
class AltText_67 extends V<Companion_60> {}
class AdParameters_68 extends V<Companion_60> {}
class Companion_60 extends V<CompanionAds_59> {
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
  ): StaticResource_61 {
    return p<StaticResource_61>(
      new StaticResource_61(
        "StaticResource",
        this,
        { attrs: ["creativeType"] },
        content,
        attributes
      )
    );
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
  ): Companion_60 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content: string): IFrameResource_62 {
    return p<IFrameResource_62>(
      new IFrameResource_62("IFrameResource", this, {}, content)
    );
  }
  public addIFrameResource(content: string): Companion_60 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content: string): HTMLResource_63 {
    return p<HTMLResource_63>(
      new HTMLResource_63("HTMLResource", this, {}, content)
    );
  }
  public addHTMLResource(content: string): Companion_60 {
    return this.attachHTMLResource(content).and();
  }
  public attachTrackingEvents(): TrackingEvents_64 {
    return p<TrackingEvents_64>(
      new TrackingEvents_64("TrackingEvents", this, {})
    );
  }
  public attachCompanionClickThrough(
    content: string
  ): CompanionClickThrough_66 {
    return p<CompanionClickThrough_66>(
      new CompanionClickThrough_66("CompanionClickThrough", this, {}, content)
    );
  }
  public addCompanionClickThrough(content: string): Companion_60 {
    return this.attachCompanionClickThrough(content).and();
  }
  public attachAltText(content: string): AltText_67 {
    return p<AltText_67>(new AltText_67("AltText", this, {}, content));
  }
  public addAltText(content: string): Companion_60 {
    return this.attachAltText(content).and();
  }
  public attachAdParameters(content: string): AdParameters_68 {
    return p<AdParameters_68>(
      new AdParameters_68("AdParameters", this, {}, content)
    );
  }
  public addAdParameters(content: string): Companion_60 {
    return this.attachAdParameters(content).and();
  }
}
class CompanionAds_59 extends V<Creative_51> {
  public attachCompanion(attributes: {
    id?: string;
    width: string;
    height: string;
    expandedWidth?: string;
    expandedHeight?: string;
    apiFramework?: string;
  }): Companion_60 {
    return p<Companion_60>(
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
  }
}
class StaticResource_71 extends V<NonLinear_70> {}
class IFrameResource_72 extends V<NonLinear_70> {}
class HTMLResource_73 extends V<NonLinear_70> {}
class NonLinear_70 extends V<NonLinearAds_69> {
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
  ): StaticResource_71 {
    return p<StaticResource_71>(
      new StaticResource_71(
        "StaticResource",
        this,
        { attrs: ["creativeType"] },
        content,
        attributes
      )
    );
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
  ): NonLinear_70 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content: string): IFrameResource_72 {
    return p<IFrameResource_72>(
      new IFrameResource_72("IFrameResource", this, {}, content)
    );
  }
  public addIFrameResource(content: string): NonLinear_70 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content: string): HTMLResource_73 {
    return p<HTMLResource_73>(
      new HTMLResource_73("HTMLResource", this, {}, content)
    );
  }
  public addHTMLResource(content: string): NonLinear_70 {
    return this.attachHTMLResource(content).and();
  }
}
class Tracking_75 extends V<TrackingEvents_74> {}
class TrackingEvents_74 extends V<NonLinearAds_69> {
  public attachTracking(
    content: string,
    attributes: {
      event:
        | "creativeView"
        | "start"
        | "midpoint"
        | "firstQuartile"
        | "thirdQuartile"
        | "complete"
        | "mute"
        | "unmute"
        | "pause"
        | "rewind"
        | "resume"
        | "fullscreen"
        | "expand"
        | "collapse"
        | "acceptInvitation"
        | "close";
    }
  ): Tracking_75 {
    return p<Tracking_75>(
      new Tracking_75(
        "Tracking",
        this,
        { attrs: ["event"] },
        content,
        attributes
      )
    );
  }
  public addTracking(
    content: string,
    attributes: {
      event:
        | "creativeView"
        | "start"
        | "midpoint"
        | "firstQuartile"
        | "thirdQuartile"
        | "complete"
        | "mute"
        | "unmute"
        | "pause"
        | "rewind"
        | "resume"
        | "fullscreen"
        | "expand"
        | "collapse"
        | "acceptInvitation"
        | "close";
    }
  ): TrackingEvents_74 {
    return this.attachTracking(content, attributes).and();
  }
}
class NonLinearAds_69 extends V<Creative_51> {
  public attachNonLinear(attributes: {
    id?: string;
    width: string;
    height: string;
    expandedWidth?: string;
    expandedHeight?: string;
    scalable?: string;
    maintainAspectRatio?: string;
    minSuggestedDuration?: string;
    apiFramework?: string;
  }): NonLinear_70 {
    return p<NonLinear_70>(
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
  }
  public attachTrackingEvents(): TrackingEvents_74 {
    return p<TrackingEvents_74>(
      new TrackingEvents_74("TrackingEvents", this, {})
    );
  }
}
class Creative_51 extends V<Creatives_50> {
  public attachLinear(): Linear_52 {
    return p<Linear_52>(new Linear_52("Linear", this, {}));
  }
  public attachCompanionAds(): CompanionAds_59 {
    return p<CompanionAds_59>(new CompanionAds_59("CompanionAds", this, {}));
  }
  public attachNonLinearAds(): NonLinearAds_69 {
    return p<NonLinearAds_69>(new NonLinearAds_69("NonLinearAds", this, {}));
  }
}
class Creatives_50 extends V<Wrapper_45> {
  public attachCreative(
    attributes: {
      id?: string;
      sequence?: string;
      adID?: string;
    } = {}
  ): Creative_51 {
    return p<Creative_51>(
      new Creative_51(
        "Creative",
        this,
        { attrs: ["id", "sequence", "adID"] },
        attributes
      )
    );
  }
}
class Extension_77 extends V<Extensions_76> {}
class Extensions_76 extends V<Wrapper_45> {
  public attachExtension(
    content: string,
    attributes: {
      type?: string;
    } = {}
  ): Extension_77 {
    return p<Extension_77>(
      new Extension_77(
        "Extension",
        this,
        { attrs: ["type"] },
        content,
        attributes
      )
    );
  }
  public addExtension(
    content: string,
    attributes: {
      type?: string;
    } = {}
  ): Extensions_76 {
    return this.attachExtension(content, attributes).and();
  }
}
class Wrapper_45 extends V<Ad_3> {
  public attachAdSystem(
    content: string,
    attributes: {
      version?: string;
    } = {}
  ): AdSystem_46 {
    return p<AdSystem_46>(
      new AdSystem_46(
        "AdSystem",
        this,
        { attrs: ["version"] },
        content,
        attributes
      )
    );
  }
  public addAdSystem(
    content: string,
    attributes: {
      version?: string;
    } = {}
  ): Wrapper_45 {
    return this.attachAdSystem(content, attributes).and();
  }
  public attachVASTAdTagURI(content: string): VASTAdTagURI_47 {
    return p<VASTAdTagURI_47>(
      new VASTAdTagURI_47("VASTAdTagURI", this, {}, content)
    );
  }
  public addVASTAdTagURI(content: string): Wrapper_45 {
    return this.attachVASTAdTagURI(content).and();
  }
  public attachError(content: string): Error_48 {
    return p<Error_48>(new Error_48("Error", this, {}, content));
  }
  public addError(content: string): Wrapper_45 {
    return this.attachError(content).and();
  }
  public attachImpression(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): Impression_49 {
    return p<Impression_49>(
      new Impression_49(
        "Impression",
        this,
        { attrs: ["id"] },
        content,
        attributes
      )
    );
  }
  public addImpression(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): Wrapper_45 {
    return this.attachImpression(content, attributes).and();
  }
  public attachCreatives(): Creatives_50 {
    return p<Creatives_50>(new Creatives_50("Creatives", this, {}));
  }
  public attachExtensions(): Extensions_76 {
    return p<Extensions_76>(new Extensions_76("Extensions", this, {}));
  }
}
class Ad_3 extends V<VAST_2> {
  public attachInLine(): InLine_4 {
    return p<InLine_4>(new InLine_4("InLine", this, {}));
  }
  public attachWrapper(): Wrapper_45 {
    return p<Wrapper_45>(new Wrapper_45("Wrapper", this, {}));
  }
}
class VAST_2 extends V<apiv2> {
  public attachAd(attributes: { id: string }): Ad_3 {
    return p<Ad_3>(new Ad_3("Ad", this, { attrs: ["id"] }, attributes));
  }
}
class apiv2 extends V<apiv2> {
  public attachVAST(attributes: { version: "2.0" }): VAST_2 {
    return p<VAST_2>(
      new VAST_2("VAST", this, { attrs: ["version"] }, attributes)
    );
  }
  public and() {
    return this;
  }
}

export { apiv2, VAST_2 };
