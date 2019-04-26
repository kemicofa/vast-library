/* tslint:disable: class-name object-literal-sort-keys */

///////////////////////////////////////////////////////
//  IMPORTANT: this file is generated, dont edit it
/////////

import V from "../../src/vast-element";

function p<T extends V<any>>(newElem: T): T {
  newElem.parent.childs.push(newElem);
  return newElem;
}

class Error_5 extends V<VAST_4> {}
class AdSystem_8 extends V<InLine_7> {}
class AdTitle_9 extends V<InLine_7> {}
class Impression_10 extends V<InLine_7> {}
class Category_11 extends V<InLine_7> {}
class Description_12 extends V<InLine_7> {}
class Advertiser_13 extends V<InLine_7> {}
class Pricing_14 extends V<InLine_7> {}
class Survey_15 extends V<InLine_7> {}
class Error_16 extends V<InLine_7> {}
class Viewable_18 extends V<ViewableImpression_17> {}
class NotViewable_19 extends V<ViewableImpression_17> {}
class ViewUndetermined_20 extends V<ViewableImpression_17> {}
class ViewableImpression_17 extends V<InLine_7> {
  public attachViewable(content: string): Viewable_18 {
    return p<Viewable_18>(new Viewable_18("Viewable", this, {}, content));
  }
  public addViewable(content: string): ViewableImpression_17 {
    return this.attachViewable(content).and();
  }
  public attachNotViewable(content: string): NotViewable_19 {
    return p<NotViewable_19>(
      new NotViewable_19("NotViewable", this, {}, content)
    );
  }
  public addNotViewable(content: string): ViewableImpression_17 {
    return this.attachNotViewable(content).and();
  }
  public attachViewUndetermined(content: string): ViewUndetermined_20 {
    return p<ViewUndetermined_20>(
      new ViewUndetermined_20("ViewUndetermined", this, {}, content)
    );
  }
  public addViewUndetermined(content: string): ViewableImpression_17 {
    return this.attachViewUndetermined(content).and();
  }
}
class JavaScriptResource_23 extends V<Verification_22> {}
class FlashResource_24 extends V<Verification_22> {}
class ViewableImpression_25 extends V<Verification_22> {}
class Verification_22 extends V<AdVerifications_21> {
  public attachJavaScriptResource(
    content: string,
    attributes: {
      apiFramework?: string;
    } = {}
  ): JavaScriptResource_23 {
    return p<JavaScriptResource_23>(
      new JavaScriptResource_23(
        "JavaScriptResource",
        this,
        { attrs: ["apiFramework"] },
        content,
        attributes
      )
    );
  }
  public addJavaScriptResource(
    content: string,
    attributes: {
      apiFramework?: string;
    } = {}
  ): Verification_22 {
    return this.attachJavaScriptResource(content, attributes).and();
  }
  public attachFlashResource(
    content: string,
    attributes: {
      apiFramework?: string;
    } = {}
  ): FlashResource_24 {
    return p<FlashResource_24>(
      new FlashResource_24(
        "FlashResource",
        this,
        { attrs: ["apiFramework"] },
        content,
        attributes
      )
    );
  }
  public addFlashResource(
    content: string,
    attributes: {
      apiFramework?: string;
    } = {}
  ): Verification_22 {
    return this.attachFlashResource(content, attributes).and();
  }
  public attachViewableImpression(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): ViewableImpression_25 {
    return p<ViewableImpression_25>(
      new ViewableImpression_25(
        "ViewableImpression",
        this,
        { attrs: ["id"] },
        content,
        attributes
      )
    );
  }
  public addViewableImpression(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): Verification_22 {
    return this.attachViewableImpression(content, attributes).and();
  }
}
class AdVerifications_21 extends V<InLine_7> {
  public attachVerification(
    attributes: {
      vendor?: string;
    } = {}
  ): Verification_22 {
    return p<Verification_22>(
      new Verification_22(
        "Verification",
        this,
        { attrs: ["vendor"] },
        attributes
      )
    );
  }
}
class Extension_27 extends V<Extensions_26> {}
class Extensions_26 extends V<InLine_7> {
  public attachExtension(
    content: string,
    attributes: {
      type?: string;
    } = {}
  ): Extension_27 {
    return p<Extension_27>(
      new Extension_27(
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
  ): Extensions_26 {
    return this.attachExtension(content, attributes).and();
  }
}
class UniversalAdId_30 extends V<Creative_29> {}
class CreativeExtension_32 extends V<CreativeExtensions_31> {}
class CreativeExtensions_31 extends V<Creative_29> {
  public attachCreativeExtension(
    content: string,
    attributes: {
      type?: string;
    } = {}
  ): CreativeExtension_32 {
    return p<CreativeExtension_32>(
      new CreativeExtension_32(
        "CreativeExtension",
        this,
        { attrs: ["type"] },
        content,
        attributes
      )
    );
  }
  public addCreativeExtension(
    content: string,
    attributes: {
      type?: string;
    } = {}
  ): CreativeExtensions_31 {
    return this.attachCreativeExtension(content, attributes).and();
  }
}
class Duration_34 extends V<Linear_33> {}
class AdParameters_35 extends V<Linear_33> {}
class Mezzanine_37 extends V<MediaFiles_36> {}
class MediaFile_38 extends V<MediaFiles_36> {}
class InteractiveCreativeFile_39 extends V<MediaFiles_36> {}
class MediaFiles_36 extends V<Linear_33> {
  public attachMezzanine(content: string): Mezzanine_37 {
    return p<Mezzanine_37>(new Mezzanine_37("Mezzanine", this, {}, content));
  }
  public addMezzanine(content: string): MediaFiles_36 {
    return this.attachMezzanine(content).and();
  }
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
  ): MediaFile_38 {
    return p<MediaFile_38>(
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
  ): MediaFiles_36 {
    return this.attachMediaFile(content, attributes).and();
  }
  public attachInteractiveCreativeFile(
    content: string
  ): InteractiveCreativeFile_39 {
    return p<InteractiveCreativeFile_39>(
      new InteractiveCreativeFile_39(
        "InteractiveCreativeFile",
        this,
        {},
        content
      )
    );
  }
  public addInteractiveCreativeFile(content: string): MediaFiles_36 {
    return this.attachInteractiveCreativeFile(content).and();
  }
}
class ClickThrough_41 extends V<VideoClicks_40> {}
class ClickTracking_42 extends V<VideoClicks_40> {}
class CustomClick_43 extends V<VideoClicks_40> {}
class VideoClicks_40 extends V<Linear_33> {
  public attachClickThrough(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): ClickThrough_41 {
    return p<ClickThrough_41>(
      new ClickThrough_41(
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
  ): VideoClicks_40 {
    return this.attachClickThrough(content, attributes).and();
  }
  public attachClickTracking(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): ClickTracking_42 {
    return p<ClickTracking_42>(
      new ClickTracking_42(
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
  ): VideoClicks_40 {
    return this.attachClickTracking(content, attributes).and();
  }
  public attachCustomClick(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): CustomClick_43 {
    return p<CustomClick_43>(
      new CustomClick_43(
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
  ): VideoClicks_40 {
    return this.attachCustomClick(content, attributes).and();
  }
}
class Tracking_45 extends V<TrackingEvents_44> {}
class TrackingEvents_44 extends V<Linear_33> {
  public attachTracking(
    content: string,
    attributes: {
      offset?: string;
      event:
        | "mute"
        | "unmute"
        | "pause"
        | "resume"
        | "rewind"
        | "skip"
        | "playerExpand"
        | "playerCollapse"
        | "otherAdInteraction"
        | "start"
        | "firstQuartile"
        | "midpoint"
        | "thirdQuartile"
        | "complete"
        | "acceptInvitationLinear"
        | "timeSpentViewing"
        | "progress";
    }
  ): Tracking_45 {
    return p<Tracking_45>(
      new Tracking_45(
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
        | "mute"
        | "unmute"
        | "pause"
        | "resume"
        | "rewind"
        | "skip"
        | "playerExpand"
        | "playerCollapse"
        | "otherAdInteraction"
        | "start"
        | "firstQuartile"
        | "midpoint"
        | "thirdQuartile"
        | "complete"
        | "acceptInvitationLinear"
        | "timeSpentViewing"
        | "progress";
    }
  ): TrackingEvents_44 {
    return this.attachTracking(content, attributes).and();
  }
}
class StaticResource_48 extends V<Icon_47> {}
class IFrameResource_49 extends V<Icon_47> {}
class HTMLResource_50 extends V<Icon_47> {}
class IconClickThrough_52 extends V<IconClicks_51> {}
class IconClickTracking_53 extends V<IconClicks_51> {}
class IconClicks_51 extends V<Icon_47> {
  public attachIconClickThrough(content: string): IconClickThrough_52 {
    return p<IconClickThrough_52>(
      new IconClickThrough_52("IconClickThrough", this, {}, content)
    );
  }
  public addIconClickThrough(content: string): IconClicks_51 {
    return this.attachIconClickThrough(content).and();
  }
  public attachIconClickTracking(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): IconClickTracking_53 {
    return p<IconClickTracking_53>(
      new IconClickTracking_53(
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
  ): IconClicks_51 {
    return this.attachIconClickTracking(content, attributes).and();
  }
}
class IconViewTracking_54 extends V<Icon_47> {}
class Icon_47 extends V<Icons_46> {
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
  ): StaticResource_48 {
    return p<StaticResource_48>(
      new StaticResource_48(
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
  ): Icon_47 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content: string): IFrameResource_49 {
    return p<IFrameResource_49>(
      new IFrameResource_49("IFrameResource", this, {}, content)
    );
  }
  public addIFrameResource(content: string): Icon_47 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content: string): HTMLResource_50 {
    return p<HTMLResource_50>(
      new HTMLResource_50("HTMLResource", this, {}, content)
    );
  }
  public addHTMLResource(content: string): Icon_47 {
    return this.attachHTMLResource(content).and();
  }
  public attachIconClicks(): IconClicks_51 {
    return p<IconClicks_51>(new IconClicks_51("IconClicks", this, {}));
  }
  public attachIconViewTracking(content: string): IconViewTracking_54 {
    return p<IconViewTracking_54>(
      new IconViewTracking_54("IconViewTracking", this, {}, content)
    );
  }
  public addIconViewTracking(content: string): Icon_47 {
    return this.attachIconViewTracking(content).and();
  }
}
class Icons_46 extends V<Linear_33> {
  public attachIcon(
    attributes: {
      program?: string;
      width?: string;
      height?: string;
      xPosition?: string;
      yPosition?: string;
      duration?: string;
      offset?: string;
      apiFramework?: string;
      pxratio?: string;
    } = {}
  ): Icon_47 {
    return p<Icon_47>(
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
  }
}
class Linear_33 extends V<Creative_29> {
  public attachDuration(content: string): Duration_34 {
    return p<Duration_34>(new Duration_34("Duration", this, {}, content));
  }
  public addDuration(content: string): Linear_33 {
    return this.attachDuration(content).and();
  }
  public attachAdParameters(
    content: string,
    attributes: {
      xmlEncoded?: string;
    } = {}
  ): AdParameters_35 {
    return p<AdParameters_35>(
      new AdParameters_35(
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
  ): Linear_33 {
    return this.attachAdParameters(content, attributes).and();
  }
  public attachMediaFiles(): MediaFiles_36 {
    return p<MediaFiles_36>(new MediaFiles_36("MediaFiles", this, {}));
  }
  public attachVideoClicks(): VideoClicks_40 {
    return p<VideoClicks_40>(new VideoClicks_40("VideoClicks", this, {}));
  }
  public attachTrackingEvents(): TrackingEvents_44 {
    return p<TrackingEvents_44>(
      new TrackingEvents_44("TrackingEvents", this, {})
    );
  }
  public attachIcons(): Icons_46 {
    return p<Icons_46>(new Icons_46("Icons", this, {}));
  }
}
class NonLinearClickThrough_57 extends V<NonLinear_56> {}
class NonLinearClickTracking_58 extends V<NonLinear_56> {}
class NonLinear_56 extends V<NonLinearAds_55> {
  public attachNonLinearClickThrough(
    content: string
  ): NonLinearClickThrough_57 {
    return p<NonLinearClickThrough_57>(
      new NonLinearClickThrough_57("NonLinearClickThrough", this, {}, content)
    );
  }
  public addNonLinearClickThrough(content: string): NonLinear_56 {
    return this.attachNonLinearClickThrough(content).and();
  }
  public attachNonLinearClickTracking(
    content: string
  ): NonLinearClickTracking_58 {
    return p<NonLinearClickTracking_58>(
      new NonLinearClickTracking_58("NonLinearClickTracking", this, {}, content)
    );
  }
  public addNonLinearClickTracking(content: string): NonLinear_56 {
    return this.attachNonLinearClickTracking(content).and();
  }
}
class Tracking_60 extends V<TrackingEvents_59> {}
class TrackingEvents_59 extends V<NonLinearAds_55> {
  public attachTracking(
    content: string,
    attributes: {
      event:
        | "mute"
        | "unmute"
        | "pause"
        | "resume"
        | "rewind"
        | "skip"
        | "playerExpand"
        | "playerCollapse"
        | "otherAdInteraction"
        | "creativeView"
        | "acceptInvitation"
        | "adExpand"
        | "adCollapse"
        | "minimize"
        | "close"
        | "overlayViewDuration";
    }
  ): Tracking_60 {
    return p<Tracking_60>(
      new Tracking_60(
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
        | "mute"
        | "unmute"
        | "pause"
        | "resume"
        | "rewind"
        | "skip"
        | "playerExpand"
        | "playerCollapse"
        | "otherAdInteraction"
        | "creativeView"
        | "acceptInvitation"
        | "adExpand"
        | "adCollapse"
        | "minimize"
        | "close"
        | "overlayViewDuration";
    }
  ): TrackingEvents_59 {
    return this.attachTracking(content, attributes).and();
  }
}
class NonLinearAds_55 extends V<Creative_29> {
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
  }): NonLinear_56 {
    return p<NonLinear_56>(
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
  }
  public attachTrackingEvents(): TrackingEvents_59 {
    return p<TrackingEvents_59>(
      new TrackingEvents_59("TrackingEvents", this, {})
    );
  }
}
class StaticResource_63 extends V<Companion_62> {}
class IFrameResource_64 extends V<Companion_62> {}
class HTMLResource_65 extends V<Companion_62> {}
class AdParameters_66 extends V<Companion_62> {}
class AltText_67 extends V<Companion_62> {}
class CompanionClickThrough_68 extends V<Companion_62> {}
class CompanionClickTracking_69 extends V<Companion_62> {}
class Tracking_71 extends V<TrackingEvents_70> {}
class TrackingEvents_70 extends V<Companion_62> {
  public attachTracking(
    content: string,
    attributes: {
      event: "creativeView";
    }
  ): Tracking_71 {
    return p<Tracking_71>(
      new Tracking_71(
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
  ): TrackingEvents_70 {
    return this.attachTracking(content, attributes).and();
  }
}
class Companion_62 extends V<CompanionAds_61> {
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
  ): StaticResource_63 {
    return p<StaticResource_63>(
      new StaticResource_63(
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
  ): Companion_62 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content: string): IFrameResource_64 {
    return p<IFrameResource_64>(
      new IFrameResource_64("IFrameResource", this, {}, content)
    );
  }
  public addIFrameResource(content: string): Companion_62 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content: string): HTMLResource_65 {
    return p<HTMLResource_65>(
      new HTMLResource_65("HTMLResource", this, {}, content)
    );
  }
  public addHTMLResource(content: string): Companion_62 {
    return this.attachHTMLResource(content).and();
  }
  public attachAdParameters(
    content: string,
    attributes: {
      xmlEncoded?: string;
    } = {}
  ): AdParameters_66 {
    return p<AdParameters_66>(
      new AdParameters_66(
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
  ): Companion_62 {
    return this.attachAdParameters(content, attributes).and();
  }
  public attachAltText(content: string): AltText_67 {
    return p<AltText_67>(new AltText_67("AltText", this, {}, content));
  }
  public addAltText(content: string): Companion_62 {
    return this.attachAltText(content).and();
  }
  public attachCompanionClickThrough(
    content: string
  ): CompanionClickThrough_68 {
    return p<CompanionClickThrough_68>(
      new CompanionClickThrough_68("CompanionClickThrough", this, {}, content)
    );
  }
  public addCompanionClickThrough(content: string): Companion_62 {
    return this.attachCompanionClickThrough(content).and();
  }
  public attachCompanionClickTracking(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): CompanionClickTracking_69 {
    return p<CompanionClickTracking_69>(
      new CompanionClickTracking_69(
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
  ): Companion_62 {
    return this.attachCompanionClickTracking(content, attributes).and();
  }
  public attachTrackingEvents(): TrackingEvents_70 {
    return p<TrackingEvents_70>(
      new TrackingEvents_70("TrackingEvents", this, {})
    );
  }
}
class CompanionAds_61 extends V<Creative_29> {
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
    pxratio?: string;
  }): Companion_62 {
    return p<Companion_62>(
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
  }
}
class Creative_29 extends V<Creatives_28> {
  public attachUniversalAdId(
    content: string,
    attributes: {
      idRegistry: string;
      idValue: string;
    }
  ): UniversalAdId_30 {
    return p<UniversalAdId_30>(
      new UniversalAdId_30(
        "UniversalAdId",
        this,
        { attrs: ["idRegistry", "idValue"] },
        content,
        attributes
      )
    );
  }
  public addUniversalAdId(
    content: string,
    attributes: {
      idRegistry: string;
      idValue: string;
    }
  ): Creative_29 {
    return this.attachUniversalAdId(content, attributes).and();
  }
  public attachCreativeExtensions(): CreativeExtensions_31 {
    return p<CreativeExtensions_31>(
      new CreativeExtensions_31("CreativeExtensions", this, {})
    );
  }
  public attachLinear(
    attributes: {
      skipoffset?: string;
    } = {}
  ): Linear_33 {
    return p<Linear_33>(
      new Linear_33("Linear", this, { attrs: ["skipoffset"] }, attributes)
    );
  }
  public attachNonLinearAds(): NonLinearAds_55 {
    return p<NonLinearAds_55>(new NonLinearAds_55("NonLinearAds", this, {}));
  }
  public attachCompanionAds(attributes: {
    required: "all" | "any" | "none";
  }): CompanionAds_61 {
    return p<CompanionAds_61>(
      new CompanionAds_61(
        "CompanionAds",
        this,
        { attrs: ["required"] },
        attributes
      )
    );
  }
}
class Creatives_28 extends V<InLine_7> {
  public attachCreative(
    attributes: {
      id?: string;
      sequence?: string;
      adId?: string;
      apiFramework?: string;
    } = {}
  ): Creative_29 {
    return p<Creative_29>(
      new Creative_29(
        "Creative",
        this,
        { attrs: ["id", "sequence", "adId", "apiFramework"] },
        attributes
      )
    );
  }
}
class InLine_7 extends V<Ad_6> {
  public attachAdSystem(
    content: string,
    attributes: {
      version?: string;
    } = {}
  ): AdSystem_8 {
    return p<AdSystem_8>(
      new AdSystem_8(
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
  ): InLine_7 {
    return this.attachAdSystem(content, attributes).and();
  }
  public attachAdTitle(content: string): AdTitle_9 {
    return p<AdTitle_9>(new AdTitle_9("AdTitle", this, {}, content));
  }
  public addAdTitle(content: string): InLine_7 {
    return this.attachAdTitle(content).and();
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
  ): InLine_7 {
    return this.attachImpression(content, attributes).and();
  }
  public attachCategory(
    content: string,
    attributes: {
      authority: string;
    }
  ): Category_11 {
    return p<Category_11>(
      new Category_11(
        "Category",
        this,
        { attrs: ["authority"] },
        content,
        attributes
      )
    );
  }
  public addCategory(
    content: string,
    attributes: {
      authority: string;
    }
  ): InLine_7 {
    return this.attachCategory(content, attributes).and();
  }
  public attachDescription(content: string): Description_12 {
    return p<Description_12>(
      new Description_12("Description", this, {}, content)
    );
  }
  public addDescription(content: string): InLine_7 {
    return this.attachDescription(content).and();
  }
  public attachAdvertiser(content: string): Advertiser_13 {
    return p<Advertiser_13>(new Advertiser_13("Advertiser", this, {}, content));
  }
  public addAdvertiser(content: string): InLine_7 {
    return this.attachAdvertiser(content).and();
  }
  public attachPricing(
    content: string,
    attributes: {
      currency: string;
      model: "CPM" | "CPC" | "CPE" | "CPV";
    }
  ): Pricing_14 {
    return p<Pricing_14>(
      new Pricing_14(
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
  ): InLine_7 {
    return this.attachPricing(content, attributes).and();
  }
  public attachSurvey(
    content: string,
    attributes: {
      type?: string;
    } = {}
  ): Survey_15 {
    return p<Survey_15>(
      new Survey_15("Survey", this, { attrs: ["type"] }, content, attributes)
    );
  }
  public addSurvey(
    content: string,
    attributes: {
      type?: string;
    } = {}
  ): InLine_7 {
    return this.attachSurvey(content, attributes).and();
  }
  public attachError(content: string): Error_16 {
    return p<Error_16>(new Error_16("Error", this, {}, content));
  }
  public addError(content: string): InLine_7 {
    return this.attachError(content).and();
  }
  public attachViewableImpression(
    attributes: {
      id?: string;
    } = {}
  ): ViewableImpression_17 {
    return p<ViewableImpression_17>(
      new ViewableImpression_17(
        "ViewableImpression",
        this,
        { attrs: ["id"] },
        attributes
      )
    );
  }
  public attachAdVerifications(): AdVerifications_21 {
    return p<AdVerifications_21>(
      new AdVerifications_21("AdVerifications", this, {})
    );
  }
  public attachExtensions(): Extensions_26 {
    return p<Extensions_26>(new Extensions_26("Extensions", this, {}));
  }
  public attachCreatives(): Creatives_28 {
    return p<Creatives_28>(new Creatives_28("Creatives", this, {}));
  }
}
class Impression_73 extends V<Wrapper_72> {}
class VASTAdTagURI_74 extends V<Wrapper_72> {}
class AdSystem_75 extends V<Wrapper_72> {}
class Pricing_76 extends V<Wrapper_72> {}
class Error_77 extends V<Wrapper_72> {}
class Viewable_79 extends V<ViewableImpression_78> {}
class NotViewable_80 extends V<ViewableImpression_78> {}
class ViewUndetermined_81 extends V<ViewableImpression_78> {}
class ViewableImpression_78 extends V<Wrapper_72> {
  public attachViewable(content: string): Viewable_79 {
    return p<Viewable_79>(new Viewable_79("Viewable", this, {}, content));
  }
  public addViewable(content: string): ViewableImpression_78 {
    return this.attachViewable(content).and();
  }
  public attachNotViewable(content: string): NotViewable_80 {
    return p<NotViewable_80>(
      new NotViewable_80("NotViewable", this, {}, content)
    );
  }
  public addNotViewable(content: string): ViewableImpression_78 {
    return this.attachNotViewable(content).and();
  }
  public attachViewUndetermined(content: string): ViewUndetermined_81 {
    return p<ViewUndetermined_81>(
      new ViewUndetermined_81("ViewUndetermined", this, {}, content)
    );
  }
  public addViewUndetermined(content: string): ViewableImpression_78 {
    return this.attachViewUndetermined(content).and();
  }
}
class ViewableImpression_84 extends V<Verification_83> {}
class Verification_83 extends V<AdVerifications_82> {
  public attachViewableImpression(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): ViewableImpression_84 {
    return p<ViewableImpression_84>(
      new ViewableImpression_84(
        "ViewableImpression",
        this,
        { attrs: ["id"] },
        content,
        attributes
      )
    );
  }
  public addViewableImpression(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): Verification_83 {
    return this.attachViewableImpression(content, attributes).and();
  }
}
class AdVerifications_82 extends V<Wrapper_72> {
  public attachVerification(
    attributes: {
      vendor?: string;
    } = {}
  ): Verification_83 {
    return p<Verification_83>(
      new Verification_83(
        "Verification",
        this,
        { attrs: ["vendor"] },
        attributes
      )
    );
  }
}
class Extension_86 extends V<Extensions_85> {}
class Extensions_85 extends V<Wrapper_72> {
  public attachExtension(
    content: string,
    attributes: {
      type?: string;
    } = {}
  ): Extension_86 {
    return p<Extension_86>(
      new Extension_86(
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
  ): Extensions_85 {
    return this.attachExtension(content, attributes).and();
  }
}
class Tracking_91 extends V<TrackingEvents_90> {}
class TrackingEvents_90 extends V<Linear_89> {
  public attachTracking(
    content: string,
    attributes: {
      offset?: string;
      event:
        | "mute"
        | "unmute"
        | "pause"
        | "resume"
        | "rewind"
        | "skip"
        | "playerExpand"
        | "playerCollapse"
        | "otherAdInteraction"
        | "start"
        | "firstQuartile"
        | "midpoint"
        | "thirdQuartile"
        | "complete"
        | "acceptInvitationLinear"
        | "timeSpentViewing"
        | "progress";
    }
  ): Tracking_91 {
    return p<Tracking_91>(
      new Tracking_91(
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
        | "mute"
        | "unmute"
        | "pause"
        | "resume"
        | "rewind"
        | "skip"
        | "playerExpand"
        | "playerCollapse"
        | "otherAdInteraction"
        | "start"
        | "firstQuartile"
        | "midpoint"
        | "thirdQuartile"
        | "complete"
        | "acceptInvitationLinear"
        | "timeSpentViewing"
        | "progress";
    }
  ): TrackingEvents_90 {
    return this.attachTracking(content, attributes).and();
  }
}
class ClickTracking_93 extends V<VideoClicks_92> {}
class CustomClick_94 extends V<VideoClicks_92> {}
class VideoClicks_92 extends V<Linear_89> {
  public attachClickTracking(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): ClickTracking_93 {
    return p<ClickTracking_93>(
      new ClickTracking_93(
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
  ): VideoClicks_92 {
    return this.attachClickTracking(content, attributes).and();
  }
  public attachCustomClick(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): CustomClick_94 {
    return p<CustomClick_94>(
      new CustomClick_94(
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
  ): VideoClicks_92 {
    return this.attachCustomClick(content, attributes).and();
  }
}
class StaticResource_97 extends V<Icon_96> {}
class IFrameResource_98 extends V<Icon_96> {}
class HTMLResource_99 extends V<Icon_96> {}
class IconClickThrough_101 extends V<IconClicks_100> {}
class IconClickTracking_102 extends V<IconClicks_100> {}
class IconClicks_100 extends V<Icon_96> {
  public attachIconClickThrough(content: string): IconClickThrough_101 {
    return p<IconClickThrough_101>(
      new IconClickThrough_101("IconClickThrough", this, {}, content)
    );
  }
  public addIconClickThrough(content: string): IconClicks_100 {
    return this.attachIconClickThrough(content).and();
  }
  public attachIconClickTracking(content: string): IconClickTracking_102 {
    return p<IconClickTracking_102>(
      new IconClickTracking_102("IconClickTracking", this, {}, content)
    );
  }
  public addIconClickTracking(content: string): IconClicks_100 {
    return this.attachIconClickTracking(content).and();
  }
}
class IconViewTracking_103 extends V<Icon_96> {}
class Icon_96 extends V<Icons_95> {
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
  ): StaticResource_97 {
    return p<StaticResource_97>(
      new StaticResource_97(
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
  ): Icon_96 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content: string): IFrameResource_98 {
    return p<IFrameResource_98>(
      new IFrameResource_98("IFrameResource", this, {}, content)
    );
  }
  public addIFrameResource(content: string): Icon_96 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content: string): HTMLResource_99 {
    return p<HTMLResource_99>(
      new HTMLResource_99("HTMLResource", this, {}, content)
    );
  }
  public addHTMLResource(content: string): Icon_96 {
    return this.attachHTMLResource(content).and();
  }
  public attachIconClicks(): IconClicks_100 {
    return p<IconClicks_100>(new IconClicks_100("IconClicks", this, {}));
  }
  public attachIconViewTracking(content: string): IconViewTracking_103 {
    return p<IconViewTracking_103>(
      new IconViewTracking_103("IconViewTracking", this, {}, content)
    );
  }
  public addIconViewTracking(content: string): Icon_96 {
    return this.attachIconViewTracking(content).and();
  }
}
class Icons_95 extends V<Linear_89> {
  public attachIcon(
    attributes: {
      program?: string;
      width?: string;
      height?: string;
      xPosition?: string;
      yPosition?: string;
      duration?: string;
      offset?: string;
      apiFramework?: string;
      pxratio?: string;
    } = {}
  ): Icon_96 {
    return p<Icon_96>(
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
  }
}
class InteractiveCreativeFile_104 extends V<Linear_89> {}
class Linear_89 extends V<Creative_88> {
  public attachTrackingEvents(): TrackingEvents_90 {
    return p<TrackingEvents_90>(
      new TrackingEvents_90("TrackingEvents", this, {})
    );
  }
  public attachVideoClicks(): VideoClicks_92 {
    return p<VideoClicks_92>(new VideoClicks_92("VideoClicks", this, {}));
  }
  public attachIcons(): Icons_95 {
    return p<Icons_95>(new Icons_95("Icons", this, {}));
  }
  public attachInteractiveCreativeFile(
    content: string
  ): InteractiveCreativeFile_104 {
    return p<InteractiveCreativeFile_104>(
      new InteractiveCreativeFile_104(
        "InteractiveCreativeFile",
        this,
        {},
        content
      )
    );
  }
  public addInteractiveCreativeFile(content: string): Linear_89 {
    return this.attachInteractiveCreativeFile(content).and();
  }
}
class NonLinearClickThrough_107 extends V<NonLinear_106> {}
class NonLinearClickTracking_108 extends V<NonLinear_106> {}
class NonLinear_106 extends V<NonLinearAds_105> {
  public attachNonLinearClickThrough(
    content: string
  ): NonLinearClickThrough_107 {
    return p<NonLinearClickThrough_107>(
      new NonLinearClickThrough_107("NonLinearClickThrough", this, {}, content)
    );
  }
  public addNonLinearClickThrough(content: string): NonLinear_106 {
    return this.attachNonLinearClickThrough(content).and();
  }
  public attachNonLinearClickTracking(
    content: string
  ): NonLinearClickTracking_108 {
    return p<NonLinearClickTracking_108>(
      new NonLinearClickTracking_108(
        "NonLinearClickTracking",
        this,
        {},
        content
      )
    );
  }
  public addNonLinearClickTracking(content: string): NonLinear_106 {
    return this.attachNonLinearClickTracking(content).and();
  }
}
class Tracking_110 extends V<TrackingEvents_109> {}
class TrackingEvents_109 extends V<NonLinearAds_105> {
  public attachTracking(
    content: string,
    attributes: {
      event:
        | "mute"
        | "unmute"
        | "pause"
        | "resume"
        | "rewind"
        | "skip"
        | "playerExpand"
        | "playerCollapse"
        | "otherAdInteraction"
        | "creativeView"
        | "acceptInvitation"
        | "adExpand"
        | "adCollapse"
        | "minimize"
        | "close"
        | "overlayViewDuration";
    }
  ): Tracking_110 {
    return p<Tracking_110>(
      new Tracking_110(
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
        | "mute"
        | "unmute"
        | "pause"
        | "resume"
        | "rewind"
        | "skip"
        | "playerExpand"
        | "playerCollapse"
        | "otherAdInteraction"
        | "creativeView"
        | "acceptInvitation"
        | "adExpand"
        | "adCollapse"
        | "minimize"
        | "close"
        | "overlayViewDuration";
    }
  ): TrackingEvents_109 {
    return this.attachTracking(content, attributes).and();
  }
}
class NonLinearAds_105 extends V<Creative_88> {
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
  }): NonLinear_106 {
    return p<NonLinear_106>(
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
  }
  public attachTrackingEvents(): TrackingEvents_109 {
    return p<TrackingEvents_109>(
      new TrackingEvents_109("TrackingEvents", this, {})
    );
  }
}
class StaticResource_113 extends V<Companion_112> {}
class IFrameResource_114 extends V<Companion_112> {}
class HTMLResource_115 extends V<Companion_112> {}
class AdParameters_116 extends V<Companion_112> {}
class AltText_117 extends V<Companion_112> {}
class CompanionClickThrough_118 extends V<Companion_112> {}
class CompanionClickTracking_119 extends V<Companion_112> {}
class Tracking_121 extends V<TrackingEvents_120> {}
class TrackingEvents_120 extends V<Companion_112> {
  public attachTracking(
    content: string,
    attributes: {
      event: "creativeView";
    }
  ): Tracking_121 {
    return p<Tracking_121>(
      new Tracking_121(
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
  ): TrackingEvents_120 {
    return this.attachTracking(content, attributes).and();
  }
}
class Companion_112 extends V<CompanionAds_111> {
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
  ): StaticResource_113 {
    return p<StaticResource_113>(
      new StaticResource_113(
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
  ): Companion_112 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content: string): IFrameResource_114 {
    return p<IFrameResource_114>(
      new IFrameResource_114("IFrameResource", this, {}, content)
    );
  }
  public addIFrameResource(content: string): Companion_112 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content: string): HTMLResource_115 {
    return p<HTMLResource_115>(
      new HTMLResource_115("HTMLResource", this, {}, content)
    );
  }
  public addHTMLResource(content: string): Companion_112 {
    return this.attachHTMLResource(content).and();
  }
  public attachAdParameters(
    content: string,
    attributes: {
      xmlEncoded?: string;
    } = {}
  ): AdParameters_116 {
    return p<AdParameters_116>(
      new AdParameters_116(
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
  ): Companion_112 {
    return this.attachAdParameters(content, attributes).and();
  }
  public attachAltText(content: string): AltText_117 {
    return p<AltText_117>(new AltText_117("AltText", this, {}, content));
  }
  public addAltText(content: string): Companion_112 {
    return this.attachAltText(content).and();
  }
  public attachCompanionClickThrough(
    content: string
  ): CompanionClickThrough_118 {
    return p<CompanionClickThrough_118>(
      new CompanionClickThrough_118("CompanionClickThrough", this, {}, content)
    );
  }
  public addCompanionClickThrough(content: string): Companion_112 {
    return this.attachCompanionClickThrough(content).and();
  }
  public attachCompanionClickTracking(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): CompanionClickTracking_119 {
    return p<CompanionClickTracking_119>(
      new CompanionClickTracking_119(
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
  ): Companion_112 {
    return this.attachCompanionClickTracking(content, attributes).and();
  }
  public attachTrackingEvents(): TrackingEvents_120 {
    return p<TrackingEvents_120>(
      new TrackingEvents_120("TrackingEvents", this, {})
    );
  }
}
class CompanionAds_111 extends V<Creative_88> {
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
    logoTile?: string;
    logoTitle?: string;
    logoArtist?: string;
    logoURL?: string;
    pxratio?: string;
  }): Companion_112 {
    return p<Companion_112>(
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
  }
}
class Creative_88 extends V<Creatives_87> {
  public attachLinear(): Linear_89 {
    return p<Linear_89>(new Linear_89("Linear", this, {}));
  }
  public attachNonLinearAds(): NonLinearAds_105 {
    return p<NonLinearAds_105>(new NonLinearAds_105("NonLinearAds", this, {}));
  }
  public attachCompanionAds(attributes: {
    required: "all" | "any" | "none";
  }): CompanionAds_111 {
    return p<CompanionAds_111>(
      new CompanionAds_111(
        "CompanionAds",
        this,
        { attrs: ["required"] },
        attributes
      )
    );
  }
}
class Creatives_87 extends V<Wrapper_72> {
  public attachCreative(
    attributes: {
      id?: string;
      sequence?: string;
      adId?: string;
    } = {}
  ): Creative_88 {
    return p<Creative_88>(
      new Creative_88(
        "Creative",
        this,
        { attrs: ["id", "sequence", "adId"] },
        attributes
      )
    );
  }
}
class Wrapper_72 extends V<Ad_6> {
  public attachImpression(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): Impression_73 {
    return p<Impression_73>(
      new Impression_73(
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
  ): Wrapper_72 {
    return this.attachImpression(content, attributes).and();
  }
  public attachVASTAdTagURI(content: string): VASTAdTagURI_74 {
    return p<VASTAdTagURI_74>(
      new VASTAdTagURI_74("VASTAdTagURI", this, {}, content)
    );
  }
  public addVASTAdTagURI(content: string): Wrapper_72 {
    return this.attachVASTAdTagURI(content).and();
  }
  public attachAdSystem(
    content: string,
    attributes: {
      version?: string;
    } = {}
  ): AdSystem_75 {
    return p<AdSystem_75>(
      new AdSystem_75(
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
  ): Wrapper_72 {
    return this.attachAdSystem(content, attributes).and();
  }
  public attachPricing(
    content: string,
    attributes: {
      currency: string;
      model: "CPM" | "CPC" | "CPE" | "CPV";
    }
  ): Pricing_76 {
    return p<Pricing_76>(
      new Pricing_76(
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
  ): Wrapper_72 {
    return this.attachPricing(content, attributes).and();
  }
  public attachError(content: string): Error_77 {
    return p<Error_77>(new Error_77("Error", this, {}, content));
  }
  public addError(content: string): Wrapper_72 {
    return this.attachError(content).and();
  }
  public attachViewableImpression(
    attributes: {
      id?: string;
    } = {}
  ): ViewableImpression_78 {
    return p<ViewableImpression_78>(
      new ViewableImpression_78(
        "ViewableImpression",
        this,
        { attrs: ["id"] },
        attributes
      )
    );
  }
  public attachAdVerifications(): AdVerifications_82 {
    return p<AdVerifications_82>(
      new AdVerifications_82("AdVerifications", this, {})
    );
  }
  public attachExtensions(): Extensions_85 {
    return p<Extensions_85>(new Extensions_85("Extensions", this, {}));
  }
  public attachCreatives(): Creatives_87 {
    return p<Creatives_87>(new Creatives_87("Creatives", this, {}));
  }
}
class Ad_6 extends V<VAST_4> {
  public attachInLine(): InLine_7 {
    return p<InLine_7>(new InLine_7("InLine", this, {}));
  }
  public attachWrapper(
    attributes: {
      followAdditonalWrappers?: string;
      allowMultipleAds?: string;
      fallbackOnNoAd?: string;
    } = {}
  ): Wrapper_72 {
    return p<Wrapper_72>(
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
  }
}
class VAST_4 extends V<apiv4> {
  public attachError(content: string): Error_5 {
    return p<Error_5>(new Error_5("Error", this, {}, content));
  }
  public addError(content: string): VAST_4 {
    return this.attachError(content).and();
  }
  public attachAd(
    attributes: {
      id?: string;
      sequence?: string;
      conditionalAd?: string;
    } = {}
  ): Ad_6 {
    return p<Ad_6>(
      new Ad_6(
        "Ad",
        this,
        { attrs: ["id", "sequence", "conditionalAd"] },
        attributes
      )
    );
  }
}
class apiv4 extends V<apiv4> {
  public attachVAST(attributes: { version: "4.0" }): VAST_4 {
    return p<VAST_4>(
      new VAST_4("VAST", this, { attrs: ["version"] }, attributes)
    );
  }
  public and() {
    return this;
  }
}

export { apiv4, VAST_4 };
