/* tslint:disable: class-name object-literal-sort-keys */

///////////////////////////////////////////////////////
//  IMPORTANT: this file is generated, dont edit it
/////////

import V from "../../common/vast-element";

function p<T extends V<any>>(newElem: T): T {
  newElem.parent.childs.push(newElem);
  return newElem;
}

class Error_4 extends V<VAST_3> {}
class AdSystem_7 extends V<InLine_6> {}
class AdTitle_8 extends V<InLine_6> {}
class Description_9 extends V<InLine_6> {}
class Advertiser_10 extends V<InLine_6> {}
class Pricing_11 extends V<InLine_6> {}
class Survey_12 extends V<InLine_6> {}
class Error_13 extends V<InLine_6> {}
class Impression_14 extends V<InLine_6> {}
class CreativeExtension_18 extends V<CreativeExtensions_17> {}
class CreativeExtensions_17 extends V<Creative_16> {
  public attachCreativeExtension(content: string): CreativeExtension_18 {
    return p<CreativeExtension_18>(
      new CreativeExtension_18("CreativeExtension", this, {}, content)
    );
  }
  public addCreativeExtension(content: string): CreativeExtensions_17 {
    return this.attachCreativeExtension(content).and();
  }
}
class AdParameters_20 extends V<Linear_19> {}
class Duration_21 extends V<Linear_19> {}
class MediaFile_23 extends V<MediaFiles_22> {}
class MediaFiles_22 extends V<Linear_19> {
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
class Tracking_25 extends V<TrackingEvents_24> {}
class TrackingEvents_24 extends V<Linear_19> {
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
    return p<Tracking_25>(
      new Tracking_25(
        "Tracking",
        this,
        { attrs: ["offset", "event"] },
        content,
        attributes
      )
    );
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
class ClickThrough_27 extends V<VideoClicks_26> {}
class ClickTracking_28 extends V<VideoClicks_26> {}
class CustomClick_29 extends V<VideoClicks_26> {}
class VideoClicks_26 extends V<Linear_19> {
  public attachClickThrough(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): ClickThrough_27 {
    return p<ClickThrough_27>(
      new ClickThrough_27(
        "ClickThrough",
        this,
        { attrs: ["id"] },
        content,
        attributes
      )
    );
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
    return p<ClickTracking_28>(
      new ClickTracking_28(
        "ClickTracking",
        this,
        { attrs: ["id"] },
        content,
        attributes
      )
    );
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
    return p<CustomClick_29>(
      new CustomClick_29(
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
  ): VideoClicks_26 {
    return this.attachCustomClick(content, attributes).and();
  }
}
class StaticResource_32 extends V<Icon_31> {}
class IFrameResource_33 extends V<Icon_31> {}
class HTMLResource_34 extends V<Icon_31> {}
class IconClickThrough_36 extends V<IconClicks_35> {}
class IconClickTracking_37 extends V<IconClicks_35> {}
class IconClicks_35 extends V<Icon_31> {
  public attachIconClickThrough(content: string): IconClickThrough_36 {
    return p<IconClickThrough_36>(
      new IconClickThrough_36("IconClickThrough", this, {}, content)
    );
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
    return p<IconClickTracking_37>(
      new IconClickTracking_37(
        "IconClickTracking",
        this,
        { attrs: ["id"] },
        content,
        attributes
      )
    );
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
class IconViewTracking_38 extends V<Icon_31> {}
class Icon_31 extends V<Icons_30> {
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
    return p<StaticResource_32>(
      new StaticResource_32(
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
  ): Icon_31 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content: string): IFrameResource_33 {
    return p<IFrameResource_33>(
      new IFrameResource_33("IFrameResource", this, {}, content)
    );
  }
  public addIFrameResource(content: string): Icon_31 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content: string): HTMLResource_34 {
    return p<HTMLResource_34>(
      new HTMLResource_34("HTMLResource", this, {}, content)
    );
  }
  public addHTMLResource(content: string): Icon_31 {
    return this.attachHTMLResource(content).and();
  }
  public attachIconClicks(): IconClicks_35 {
    return p<IconClicks_35>(new IconClicks_35("IconClicks", this, {}));
  }
  public attachIconViewTracking(content: string): IconViewTracking_38 {
    return p<IconViewTracking_38>(
      new IconViewTracking_38("IconViewTracking", this, {}, content)
    );
  }
  public addIconViewTracking(content: string): Icon_31 {
    return this.attachIconViewTracking(content).and();
  }
}
class Icons_30 extends V<Linear_19> {
  public attachIcon(attributes: {
    program: string;
    width: string;
    height: string;
    xPosition: string;
    yPosition: string;
    duration?: string;
    offset?: string;
    apiFramework?: string;
  }): Icon_31 {
    return p<Icon_31>(
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
  }
}
class Linear_19 extends V<Creative_16> {
  public attachAdParameters(
    content: string,
    attributes: {
      xmlEncoded?: string;
    } = {}
  ): AdParameters_20 {
    return p<AdParameters_20>(
      new AdParameters_20(
        "AdParameters",
        this,
        { attrs: ["xmlEncoded"] },
        content,
        attributes
      )
    );
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
    return p<Duration_21>(new Duration_21("Duration", this, {}, content));
  }
  public addDuration(content: string): Linear_19 {
    return this.attachDuration(content).and();
  }
  public attachMediaFiles(): MediaFiles_22 {
    return p<MediaFiles_22>(new MediaFiles_22("MediaFiles", this, {}));
  }
  public attachTrackingEvents(): TrackingEvents_24 {
    return p<TrackingEvents_24>(
      new TrackingEvents_24("TrackingEvents", this, {})
    );
  }
  public attachVideoClicks(): VideoClicks_26 {
    return p<VideoClicks_26>(new VideoClicks_26("VideoClicks", this, {}));
  }
  public attachIcons(): Icons_30 {
    return p<Icons_30>(new Icons_30("Icons", this, {}));
  }
}
class StaticResource_41 extends V<Companion_40> {}
class IFrameResource_42 extends V<Companion_40> {}
class HTMLResource_43 extends V<Companion_40> {}
class AdParameters_44 extends V<Companion_40> {}
class AltText_45 extends V<Companion_40> {}
class CompanionClickThrough_46 extends V<Companion_40> {}
class CompanionClickTracking_47 extends V<Companion_40> {}
class Tracking_49 extends V<TrackingEvents_48> {}
class TrackingEvents_48 extends V<Companion_40> {
  public attachTracking(
    content: string,
    attributes: {
      event: "creativeView";
    }
  ): Tracking_49 {
    return p<Tracking_49>(
      new Tracking_49(
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
  ): TrackingEvents_48 {
    return this.attachTracking(content, attributes).and();
  }
}
class Companion_40 extends V<CompanionAds_39> {
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
    return p<StaticResource_41>(
      new StaticResource_41(
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
  ): Companion_40 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content: string): IFrameResource_42 {
    return p<IFrameResource_42>(
      new IFrameResource_42("IFrameResource", this, {}, content)
    );
  }
  public addIFrameResource(content: string): Companion_40 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content: string): HTMLResource_43 {
    return p<HTMLResource_43>(
      new HTMLResource_43("HTMLResource", this, {}, content)
    );
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
    return p<AdParameters_44>(
      new AdParameters_44(
        "AdParameters",
        this,
        { attrs: ["xmlEncoded"] },
        content,
        attributes
      )
    );
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
    return p<AltText_45>(new AltText_45("AltText", this, {}, content));
  }
  public addAltText(content: string): Companion_40 {
    return this.attachAltText(content).and();
  }
  public attachCompanionClickThrough(
    content: string
  ): CompanionClickThrough_46 {
    return p<CompanionClickThrough_46>(
      new CompanionClickThrough_46("CompanionClickThrough", this, {}, content)
    );
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
    return p<CompanionClickTracking_47>(
      new CompanionClickTracking_47(
        "CompanionClickTracking",
        this,
        { attrs: ["id"] },
        content,
        attributes
      )
    );
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
    return p<TrackingEvents_48>(
      new TrackingEvents_48("TrackingEvents", this, {})
    );
  }
}
class CompanionAds_39 extends V<Creative_16> {
  public attachCompanion(attributes: {
    id?: string;
    width: string;
    height: string;
    assetWidth?: string;
    assetHeight?: string;
    expandedWidth?: string;
    expandedHeight?: string;
    apiFramework?: string;
    adSlotID?: string;
  }): Companion_40 {
    return p<Companion_40>(
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
  }
}
class StaticResource_52 extends V<NonLinear_51> {}
class IFrameResource_53 extends V<NonLinear_51> {}
class HTMLResource_54 extends V<NonLinear_51> {}
class NonLinearClickThrough_55 extends V<NonLinear_51> {}
class NonLinearClickTracking_56 extends V<NonLinear_51> {}
class AdParameters_57 extends V<NonLinear_51> {}
class NonLinear_51 extends V<NonLinearAds_50> {
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
    return p<StaticResource_52>(
      new StaticResource_52(
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
  ): NonLinear_51 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content: string): IFrameResource_53 {
    return p<IFrameResource_53>(
      new IFrameResource_53("IFrameResource", this, {}, content)
    );
  }
  public addIFrameResource(content: string): NonLinear_51 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content: string): HTMLResource_54 {
    return p<HTMLResource_54>(
      new HTMLResource_54("HTMLResource", this, {}, content)
    );
  }
  public addHTMLResource(content: string): NonLinear_51 {
    return this.attachHTMLResource(content).and();
  }
  public attachNonLinearClickThrough(
    content: string
  ): NonLinearClickThrough_55 {
    return p<NonLinearClickThrough_55>(
      new NonLinearClickThrough_55("NonLinearClickThrough", this, {}, content)
    );
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
    return p<NonLinearClickTracking_56>(
      new NonLinearClickTracking_56(
        "NonLinearClickTracking",
        this,
        { attrs: ["id"] },
        content,
        attributes
      )
    );
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
    return p<AdParameters_57>(
      new AdParameters_57(
        "AdParameters",
        this,
        { attrs: ["xmlEncoded"] },
        content,
        attributes
      )
    );
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
class Tracking_59 extends V<TrackingEvents_58> {}
class TrackingEvents_58 extends V<NonLinearAds_50> {
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
    return p<Tracking_59>(
      new Tracking_59(
        "Tracking",
        this,
        { attrs: ["offset", "event"] },
        content,
        attributes
      )
    );
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
class NonLinearAds_50 extends V<Creative_16> {
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
  }): NonLinear_51 {
    return p<NonLinear_51>(
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
  }
  public attachTrackingEvents(): TrackingEvents_58 {
    return p<TrackingEvents_58>(
      new TrackingEvents_58("TrackingEvents", this, {})
    );
  }
}
class Creative_16 extends V<Creatives_15> {
  public attachCreativeExtensions(): CreativeExtensions_17 {
    return p<CreativeExtensions_17>(
      new CreativeExtensions_17("CreativeExtensions", this, {})
    );
  }
  public attachLinear(
    attributes: {
      skipoffset?: string;
    } = {}
  ): Linear_19 {
    return p<Linear_19>(
      new Linear_19("Linear", this, { attrs: ["skipoffset"] }, attributes)
    );
  }
  public attachCompanionAds(attributes: {
    required: "all" | "any" | "none";
  }): CompanionAds_39 {
    return p<CompanionAds_39>(
      new CompanionAds_39(
        "CompanionAds",
        this,
        { attrs: ["required"] },
        attributes
      )
    );
  }
  public attachNonLinearAds(): NonLinearAds_50 {
    return p<NonLinearAds_50>(new NonLinearAds_50("NonLinearAds", this, {}));
  }
}
class Creatives_15 extends V<InLine_6> {
  public attachCreative(
    attributes: {
      id?: string;
      sequence?: string;
      adID?: string;
      apiFramework?: string;
    } = {}
  ): Creative_16 {
    return p<Creative_16>(
      new Creative_16(
        "Creative",
        this,
        { attrs: ["id", "sequence", "adID", "apiFramework"] },
        attributes
      )
    );
  }
}
class Extension_61 extends V<Extensions_60> {}
class Extensions_60 extends V<InLine_6> {
  public attachExtension(
    content: string,
    attributes: {
      type?: string;
    } = {}
  ): Extension_61 {
    return p<Extension_61>(
      new Extension_61(
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
  ): Extensions_60 {
    return this.attachExtension(content, attributes).and();
  }
}
class InLine_6 extends V<Ad_5> {
  public attachAdSystem(
    content: string,
    attributes: {
      version?: string;
    } = {}
  ): AdSystem_7 {
    return p<AdSystem_7>(
      new AdSystem_7(
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
  ): InLine_6 {
    return this.attachAdSystem(content, attributes).and();
  }
  public attachAdTitle(content: string): AdTitle_8 {
    return p<AdTitle_8>(new AdTitle_8("AdTitle", this, {}, content));
  }
  public addAdTitle(content: string): InLine_6 {
    return this.attachAdTitle(content).and();
  }
  public attachDescription(content: string): Description_9 {
    return p<Description_9>(
      new Description_9("Description", this, {}, content)
    );
  }
  public addDescription(content: string): InLine_6 {
    return this.attachDescription(content).and();
  }
  public attachAdvertiser(content: string): Advertiser_10 {
    return p<Advertiser_10>(new Advertiser_10("Advertiser", this, {}, content));
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
    return p<Pricing_11>(
      new Pricing_11(
        "Pricing",
        this,
        { attrs: ["currency", "model"] },
        content,
        attributes
      )
    );
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
    return p<Survey_12>(new Survey_12("Survey", this, {}, content));
  }
  public addSurvey(content: string): InLine_6 {
    return this.attachSurvey(content).and();
  }
  public attachError(content: string): Error_13 {
    return p<Error_13>(new Error_13("Error", this, {}, content));
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
    return p<Impression_14>(
      new Impression_14(
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
  ): InLine_6 {
    return this.attachImpression(content, attributes).and();
  }
  public attachCreatives(): Creatives_15 {
    return p<Creatives_15>(new Creatives_15("Creatives", this, {}));
  }
  public attachExtensions(): Extensions_60 {
    return p<Extensions_60>(new Extensions_60("Extensions", this, {}));
  }
}
class AdSystem_63 extends V<Wrapper_62> {}
class VASTAdTagURI_64 extends V<Wrapper_62> {}
class Error_65 extends V<Wrapper_62> {}
class Impression_66 extends V<Wrapper_62> {}
class Tracking_71 extends V<TrackingEvents_70> {}
class TrackingEvents_70 extends V<Linear_69> {
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
    return p<Tracking_71>(
      new Tracking_71(
        "Tracking",
        this,
        { attrs: ["offset", "event"] },
        content,
        attributes
      )
    );
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
class ClickTracking_73 extends V<VideoClicks_72> {}
class CustomClick_74 extends V<VideoClicks_72> {}
class VideoClicks_72 extends V<Linear_69> {
  public attachClickTracking(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): ClickTracking_73 {
    return p<ClickTracking_73>(
      new ClickTracking_73(
        "ClickTracking",
        this,
        { attrs: ["id"] },
        content,
        attributes
      )
    );
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
    return p<CustomClick_74>(
      new CustomClick_74(
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
  ): VideoClicks_72 {
    return this.attachCustomClick(content, attributes).and();
  }
}
class StaticResource_77 extends V<Icon_76> {}
class IFrameResource_78 extends V<Icon_76> {}
class HTMLResource_79 extends V<Icon_76> {}
class IconClickThrough_81 extends V<IconClicks_80> {}
class IconClickTracking_82 extends V<IconClicks_80> {}
class IconClicks_80 extends V<Icon_76> {
  public attachIconClickThrough(content: string): IconClickThrough_81 {
    return p<IconClickThrough_81>(
      new IconClickThrough_81("IconClickThrough", this, {}, content)
    );
  }
  public addIconClickThrough(content: string): IconClicks_80 {
    return this.attachIconClickThrough(content).and();
  }
  public attachIconClickTracking(content: string): IconClickTracking_82 {
    return p<IconClickTracking_82>(
      new IconClickTracking_82("IconClickTracking", this, {}, content)
    );
  }
  public addIconClickTracking(content: string): IconClicks_80 {
    return this.attachIconClickTracking(content).and();
  }
}
class IconViewTracking_83 extends V<Icon_76> {}
class Icon_76 extends V<Icons_75> {
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
    return p<StaticResource_77>(
      new StaticResource_77(
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
  ): Icon_76 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content: string): IFrameResource_78 {
    return p<IFrameResource_78>(
      new IFrameResource_78("IFrameResource", this, {}, content)
    );
  }
  public addIFrameResource(content: string): Icon_76 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content: string): HTMLResource_79 {
    return p<HTMLResource_79>(
      new HTMLResource_79("HTMLResource", this, {}, content)
    );
  }
  public addHTMLResource(content: string): Icon_76 {
    return this.attachHTMLResource(content).and();
  }
  public attachIconClicks(): IconClicks_80 {
    return p<IconClicks_80>(new IconClicks_80("IconClicks", this, {}));
  }
  public attachIconViewTracking(content: string): IconViewTracking_83 {
    return p<IconViewTracking_83>(
      new IconViewTracking_83("IconViewTracking", this, {}, content)
    );
  }
  public addIconViewTracking(content: string): Icon_76 {
    return this.attachIconViewTracking(content).and();
  }
}
class Icons_75 extends V<Linear_69> {
  public attachIcon(attributes: {
    program: string;
    width: string;
    height: string;
    xPosition: string;
    yPosition: string;
    duration?: string;
    offset?: string;
    apiFramework?: string;
  }): Icon_76 {
    return p<Icon_76>(
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
  }
}
class Linear_69 extends V<Creative_68> {
  public attachTrackingEvents(): TrackingEvents_70 {
    return p<TrackingEvents_70>(
      new TrackingEvents_70("TrackingEvents", this, {})
    );
  }
  public attachVideoClicks(): VideoClicks_72 {
    return p<VideoClicks_72>(new VideoClicks_72("VideoClicks", this, {}));
  }
  public attachIcons(): Icons_75 {
    return p<Icons_75>(new Icons_75("Icons", this, {}));
  }
}
class StaticResource_86 extends V<Companion_85> {}
class IFrameResource_87 extends V<Companion_85> {}
class HTMLResource_88 extends V<Companion_85> {}
class AdParameters_89 extends V<Companion_85> {}
class AltText_90 extends V<Companion_85> {}
class CompanionClickThrough_91 extends V<Companion_85> {}
class CompanionClickTracking_92 extends V<Companion_85> {}
class Tracking_94 extends V<TrackingEvents_93> {}
class TrackingEvents_93 extends V<Companion_85> {
  public attachTracking(
    content: string,
    attributes: {
      event: "creativeView";
    }
  ): Tracking_94 {
    return p<Tracking_94>(
      new Tracking_94(
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
  ): TrackingEvents_93 {
    return this.attachTracking(content, attributes).and();
  }
}
class Companion_85 extends V<CompanionAds_84> {
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
    return p<StaticResource_86>(
      new StaticResource_86(
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
  ): Companion_85 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content: string): IFrameResource_87 {
    return p<IFrameResource_87>(
      new IFrameResource_87("IFrameResource", this, {}, content)
    );
  }
  public addIFrameResource(content: string): Companion_85 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content: string): HTMLResource_88 {
    return p<HTMLResource_88>(
      new HTMLResource_88("HTMLResource", this, {}, content)
    );
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
    return p<AdParameters_89>(
      new AdParameters_89(
        "AdParameters",
        this,
        { attrs: ["xmlEncoded"] },
        content,
        attributes
      )
    );
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
    return p<AltText_90>(new AltText_90("AltText", this, {}, content));
  }
  public addAltText(content: string): Companion_85 {
    return this.attachAltText(content).and();
  }
  public attachCompanionClickThrough(
    content: string
  ): CompanionClickThrough_91 {
    return p<CompanionClickThrough_91>(
      new CompanionClickThrough_91("CompanionClickThrough", this, {}, content)
    );
  }
  public addCompanionClickThrough(content: string): Companion_85 {
    return this.attachCompanionClickThrough(content).and();
  }
  public attachCompanionClickTracking(
    content: string
  ): CompanionClickTracking_92 {
    return p<CompanionClickTracking_92>(
      new CompanionClickTracking_92("CompanionClickTracking", this, {}, content)
    );
  }
  public addCompanionClickTracking(content: string): Companion_85 {
    return this.attachCompanionClickTracking(content).and();
  }
  public attachTrackingEvents(): TrackingEvents_93 {
    return p<TrackingEvents_93>(
      new TrackingEvents_93("TrackingEvents", this, {})
    );
  }
}
class CompanionAds_84 extends V<Creative_68> {
  public attachCompanion(attributes: {
    id?: string;
    width: string;
    height: string;
    assetWidth?: string;
    assetHeight?: string;
    expandedWidth?: string;
    expandedHeight?: string;
    apiFramework?: string;
    adSlotID?: string;
  }): Companion_85 {
    return p<Companion_85>(
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
  }
}
class NonLinearClickTracking_97 extends V<NonLinear_96> {}
class NonLinear_96 extends V<NonLinearAds_95> {
  public attachNonLinearClickTracking(
    content: string
  ): NonLinearClickTracking_97 {
    return p<NonLinearClickTracking_97>(
      new NonLinearClickTracking_97("NonLinearClickTracking", this, {}, content)
    );
  }
  public addNonLinearClickTracking(content: string): NonLinear_96 {
    return this.attachNonLinearClickTracking(content).and();
  }
}
class Tracking_99 extends V<TrackingEvents_98> {}
class TrackingEvents_98 extends V<NonLinearAds_95> {
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
    return p<Tracking_99>(
      new Tracking_99(
        "Tracking",
        this,
        { attrs: ["offset", "event"] },
        content,
        attributes
      )
    );
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
class NonLinearAds_95 extends V<Creative_68> {
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
  }): NonLinear_96 {
    return p<NonLinear_96>(
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
  }
  public attachTrackingEvents(): TrackingEvents_98 {
    return p<TrackingEvents_98>(
      new TrackingEvents_98("TrackingEvents", this, {})
    );
  }
}
class Creative_68 extends V<Creatives_67> {
  public attachLinear(): Linear_69 {
    return p<Linear_69>(new Linear_69("Linear", this, {}));
  }
  public attachCompanionAds(attributes: {
    required: "all" | "any" | "none";
  }): CompanionAds_84 {
    return p<CompanionAds_84>(
      new CompanionAds_84(
        "CompanionAds",
        this,
        { attrs: ["required"] },
        attributes
      )
    );
  }
  public attachNonLinearAds(): NonLinearAds_95 {
    return p<NonLinearAds_95>(new NonLinearAds_95("NonLinearAds", this, {}));
  }
}
class Creatives_67 extends V<Wrapper_62> {
  public attachCreative(
    attributes: {
      id?: string;
      sequence?: string;
      adID?: string;
    } = {}
  ): Creative_68 {
    return p<Creative_68>(
      new Creative_68(
        "Creative",
        this,
        { attrs: ["id", "sequence", "adID"] },
        attributes
      )
    );
  }
}
class Extension_101 extends V<Extensions_100> {}
class Extensions_100 extends V<Wrapper_62> {
  public attachExtension(
    content: string,
    attributes: {
      type?: string;
    } = {}
  ): Extension_101 {
    return p<Extension_101>(
      new Extension_101(
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
  ): Extensions_100 {
    return this.attachExtension(content, attributes).and();
  }
}
class Wrapper_62 extends V<Ad_5> {
  public attachAdSystem(
    content: string,
    attributes: {
      version?: string;
    } = {}
  ): AdSystem_63 {
    return p<AdSystem_63>(
      new AdSystem_63(
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
  ): Wrapper_62 {
    return this.attachAdSystem(content, attributes).and();
  }
  public attachVASTAdTagURI(content: string): VASTAdTagURI_64 {
    return p<VASTAdTagURI_64>(
      new VASTAdTagURI_64("VASTAdTagURI", this, {}, content)
    );
  }
  public addVASTAdTagURI(content: string): Wrapper_62 {
    return this.attachVASTAdTagURI(content).and();
  }
  public attachError(content: string): Error_65 {
    return p<Error_65>(new Error_65("Error", this, {}, content));
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
    return p<Impression_66>(
      new Impression_66(
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
  ): Wrapper_62 {
    return this.attachImpression(content, attributes).and();
  }
  public attachCreatives(): Creatives_67 {
    return p<Creatives_67>(new Creatives_67("Creatives", this, {}));
  }
  public attachExtensions(): Extensions_100 {
    return p<Extensions_100>(new Extensions_100("Extensions", this, {}));
  }
}
class Ad_5 extends V<VAST_3> {
  public attachInLine(): InLine_6 {
    return p<InLine_6>(new InLine_6("InLine", this, {}));
  }
  public attachWrapper(
    attributes: {
      followAdditonalWrappers?: string;
      allowMultipleAds?: string;
      fallbackOnNoAd?: string;
    } = {}
  ): Wrapper_62 {
    return p<Wrapper_62>(
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
  }
}
class VAST_3 extends V<apiv3> {
  public attachError(content: string): Error_4 {
    return p<Error_4>(new Error_4("Error", this, {}, content));
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
    return p<Ad_5>(
      new Ad_5("Ad", this, { attrs: ["id", "sequence"] }, attributes)
    );
  }
}
class apiv3 extends V<apiv3> {
  public attachVAST(attributes: { version: "3.0" }): VAST_3 {
    return p<VAST_3>(
      new VAST_3("VAST", this, { attrs: ["version"] }, attributes)
    );
  }
  public and() {
    return this;
  }
}

export { apiv3, VAST_3 };
