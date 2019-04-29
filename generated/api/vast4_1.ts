/* tslint:disable: class-name object-literal-sort-keys */

///////////////////////////////////////////////////////
//  IMPORTANT: this file is generated, dont edit it
/////////

import V from "../../common/vast-element";

function p<T extends V<any>>(newElem: T): T {
  newElem.parent.childs.push(newElem);
  return newElem;
}

class Error_5 extends V<VAST_4> {}
class AdSystem_8 extends V<InLine_7> {}
class AdTitle_9 extends V<InLine_7> {}
class Impression_10 extends V<InLine_7> {}
class AdServingID_11 extends V<InLine_7> {}
class Category_12 extends V<InLine_7> {}
class Description_13 extends V<InLine_7> {}
class Advertiser_14 extends V<InLine_7> {}
class Pricing_15 extends V<InLine_7> {}
class Survey_16 extends V<InLine_7> {}
class Error_17 extends V<InLine_7> {}
class Expires_18 extends V<InLine_7> {}
class Viewable_20 extends V<ViewableImpression_19> {}
class NotViewable_21 extends V<ViewableImpression_19> {}
class ViewUndetermined_22 extends V<ViewableImpression_19> {}
class ViewableImpression_19 extends V<InLine_7> {
  public attachViewable(content: string): Viewable_20 {
    return p<Viewable_20>(new Viewable_20("Viewable", this, {}, content));
  }
  public addViewable(content: string): ViewableImpression_19 {
    return this.attachViewable(content).and();
  }
  public attachNotViewable(content: string): NotViewable_21 {
    return p<NotViewable_21>(
      new NotViewable_21("NotViewable", this, {}, content)
    );
  }
  public addNotViewable(content: string): ViewableImpression_19 {
    return this.attachNotViewable(content).and();
  }
  public attachViewUndetermined(content: string): ViewUndetermined_22 {
    return p<ViewUndetermined_22>(
      new ViewUndetermined_22("ViewUndetermined", this, {}, content)
    );
  }
  public addViewUndetermined(content: string): ViewableImpression_19 {
    return this.attachViewUndetermined(content).and();
  }
}
class JavaScriptResource_25 extends V<Verification_24> {}
class ExecutableResource_26 extends V<Verification_24> {}
class Tracking_28 extends V<TrackingEvents_27> {}
class TrackingEvents_27 extends V<Verification_24> {
  public attachTracking(
    content: string,
    attributes: {
      offset?: string;
      event: "verificationNotExecuted";
    }
  ): Tracking_28 {
    return p<Tracking_28>(
      new Tracking_28(
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
      event: "verificationNotExecuted";
    }
  ): TrackingEvents_27 {
    return this.attachTracking(content, attributes).and();
  }
}
class VerificationParameters_29 extends V<Verification_24> {}
class Verification_24 extends V<AdVerifications_23> {
  public attachJavaScriptResource(
    content: string,
    attributes: {
      apiFramework: string;
      browserOptional: string;
    }
  ): JavaScriptResource_25 {
    return p<JavaScriptResource_25>(
      new JavaScriptResource_25(
        "JavaScriptResource",
        this,
        { attrs: ["apiFramework", "browserOptional"] },
        content,
        attributes
      )
    );
  }
  public addJavaScriptResource(
    content: string,
    attributes: {
      apiFramework: string;
      browserOptional: string;
    }
  ): Verification_24 {
    return this.attachJavaScriptResource(content, attributes).and();
  }
  public attachExecutableResource(
    content: string,
    attributes: {
      apiFramework: string;
      language?: string;
      type?: string;
    }
  ): ExecutableResource_26 {
    return p<ExecutableResource_26>(
      new ExecutableResource_26(
        "ExecutableResource",
        this,
        { attrs: ["apiFramework", "language", "type"] },
        content,
        attributes
      )
    );
  }
  public addExecutableResource(
    content: string,
    attributes: {
      apiFramework: string;
      language?: string;
      type?: string;
    }
  ): Verification_24 {
    return this.attachExecutableResource(content, attributes).and();
  }
  public attachTrackingEvents(): TrackingEvents_27 {
    return p<TrackingEvents_27>(
      new TrackingEvents_27("TrackingEvents", this, {})
    );
  }
  public attachVerificationParameters(
    content: string
  ): VerificationParameters_29 {
    return p<VerificationParameters_29>(
      new VerificationParameters_29("VerificationParameters", this, {}, content)
    );
  }
  public addVerificationParameters(content: string): Verification_24 {
    return this.attachVerificationParameters(content).and();
  }
}
class AdVerifications_23 extends V<InLine_7> {
  public attachVerification(attributes: { vendor: string }): Verification_24 {
    return p<Verification_24>(
      new Verification_24(
        "Verification",
        this,
        { attrs: ["vendor"] },
        attributes
      )
    );
  }
}
class Extension_31 extends V<Extensions_30> {}
class Extensions_30 extends V<InLine_7> {
  public attachExtension(
    content: string,
    attributes: {
      type?: string;
    } = {}
  ): Extension_31 {
    return p<Extension_31>(
      new Extension_31(
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
  ): Extensions_30 {
    return this.attachExtension(content, attributes).and();
  }
}
class UniversalAdId_34 extends V<Creative_33> {}
class CreativeExtension_36 extends V<CreativeExtensions_35> {}
class CreativeExtensions_35 extends V<Creative_33> {
  public attachCreativeExtension(
    content: string,
    attributes: {
      type?: string;
    } = {}
  ): CreativeExtension_36 {
    return p<CreativeExtension_36>(
      new CreativeExtension_36(
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
  ): CreativeExtensions_35 {
    return this.attachCreativeExtension(content, attributes).and();
  }
}
class Duration_38 extends V<Linear_37> {}
class AdParameters_39 extends V<Linear_37> {}
class Mezzanine_41 extends V<MediaFiles_40> {}
class MediaFile_42 extends V<MediaFiles_40> {}
class InteractiveCreativeFile_43 extends V<MediaFiles_40> {}
class ClosedCaptionFile_45 extends V<ClosedCaptionFiles_44> {}
class ClosedCaptionFiles_44 extends V<MediaFiles_40> {
  public attachClosedCaptionFile(
    content: string,
    attributes: {
      type?: string;
      language?: string;
    } = {}
  ): ClosedCaptionFile_45 {
    return p<ClosedCaptionFile_45>(
      new ClosedCaptionFile_45(
        "ClosedCaptionFile",
        this,
        { attrs: ["type", "language"] },
        content,
        attributes
      )
    );
  }
  public addClosedCaptionFile(
    content: string,
    attributes: {
      type?: string;
      language?: string;
    } = {}
  ): ClosedCaptionFiles_44 {
    return this.attachClosedCaptionFile(content, attributes).and();
  }
}
class MediaFiles_40 extends V<Linear_37> {
  public attachMezzanine(
    content: string,
    attributes: {
      delivery: "progressive" | "streaming";
      type: string;
      width: string;
      height: string;
      codec?: string;
      id?: string;
      fileSize?: string;
      mediaType?: string;
    }
  ): Mezzanine_41 {
    return p<Mezzanine_41>(
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
  }
  public addMezzanine(
    content: string,
    attributes: {
      delivery: "progressive" | "streaming";
      type: string;
      width: string;
      height: string;
      codec?: string;
      id?: string;
      fileSize?: string;
      mediaType?: string;
    }
  ): MediaFiles_40 {
    return this.attachMezzanine(content, attributes).and();
  }
  public attachMediaFile(
    content: string,
    attributes: {
      delivery: "progressive" | "streaming";
      type: string;
      width: string;
      height: string;
      codec?: string;
      id?: string;
      bitrate?: string;
      minBitrate?: string;
      maxBitrate?: string;
      scalable?: string;
      mantainAspectRatio?: string;
      apiFramework?: string;
      fileSize?: string;
      mediaType?: string;
    }
  ): MediaFile_42 {
    return p<MediaFile_42>(
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
  }
  public addMediaFile(
    content: string,
    attributes: {
      delivery: "progressive" | "streaming";
      type: string;
      width: string;
      height: string;
      codec?: string;
      id?: string;
      bitrate?: string;
      minBitrate?: string;
      maxBitrate?: string;
      scalable?: string;
      mantainAspectRatio?: string;
      apiFramework?: string;
      fileSize?: string;
      mediaType?: string;
    }
  ): MediaFiles_40 {
    return this.attachMediaFile(content, attributes).and();
  }
  public attachInteractiveCreativeFile(
    content: string,
    attributes: {
      type?: string;
      apiFramework?: string;
      variableDuration?: string;
    } = {}
  ): InteractiveCreativeFile_43 {
    return p<InteractiveCreativeFile_43>(
      new InteractiveCreativeFile_43(
        "InteractiveCreativeFile",
        this,
        { attrs: ["type", "apiFramework", "variableDuration"] },
        content,
        attributes
      )
    );
  }
  public addInteractiveCreativeFile(
    content: string,
    attributes: {
      type?: string;
      apiFramework?: string;
      variableDuration?: string;
    } = {}
  ): MediaFiles_40 {
    return this.attachInteractiveCreativeFile(content, attributes).and();
  }
  public attachClosedCaptionFiles(): ClosedCaptionFiles_44 {
    return p<ClosedCaptionFiles_44>(
      new ClosedCaptionFiles_44("ClosedCaptionFiles", this, {})
    );
  }
}
class ClickThrough_47 extends V<VideoClicks_46> {}
class ClickTracking_48 extends V<VideoClicks_46> {}
class CustomClick_49 extends V<VideoClicks_46> {}
class VideoClicks_46 extends V<Linear_37> {
  public attachClickThrough(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): ClickThrough_47 {
    return p<ClickThrough_47>(
      new ClickThrough_47(
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
  ): VideoClicks_46 {
    return this.attachClickThrough(content, attributes).and();
  }
  public attachClickTracking(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): ClickTracking_48 {
    return p<ClickTracking_48>(
      new ClickTracking_48(
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
  ): VideoClicks_46 {
    return this.attachClickTracking(content, attributes).and();
  }
  public attachCustomClick(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): CustomClick_49 {
    return p<CustomClick_49>(
      new CustomClick_49(
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
  ): VideoClicks_46 {
    return this.attachCustomClick(content, attributes).and();
  }
}
class Tracking_51 extends V<TrackingEvents_50> {}
class TrackingEvents_50 extends V<Linear_37> {
  public attachTracking(
    content: string,
    attributes: {
      offset?: string;
      event:
        | "loaded"
        | "start"
        | "firstQuartile"
        | "midpoint"
        | "thirdQuartile"
        | "complete"
        | "progress"
        | "closeLinear"
        | "otherAdInteraction"
        | "mute"
        | "unmute"
        | "pause"
        | "resume"
        | "rewind"
        | "skip"
        | "playerExpand"
        | "playerCollapse"
        | "notUsed";
    }
  ): Tracking_51 {
    return p<Tracking_51>(
      new Tracking_51(
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
        | "loaded"
        | "start"
        | "firstQuartile"
        | "midpoint"
        | "thirdQuartile"
        | "complete"
        | "progress"
        | "closeLinear"
        | "otherAdInteraction"
        | "mute"
        | "unmute"
        | "pause"
        | "resume"
        | "rewind"
        | "skip"
        | "playerExpand"
        | "playerCollapse"
        | "notUsed";
    }
  ): TrackingEvents_50 {
    return this.attachTracking(content, attributes).and();
  }
}
class StaticResource_54 extends V<Icon_53> {}
class IFrameResource_55 extends V<Icon_53> {}
class HTMLResource_56 extends V<Icon_53> {}
class IconClickThrough_58 extends V<IconClicks_57> {}
class IconClickTracking_59 extends V<IconClicks_57> {}
class IconClicks_57 extends V<Icon_53> {
  public attachIconClickThrough(content: string): IconClickThrough_58 {
    return p<IconClickThrough_58>(
      new IconClickThrough_58("IconClickThrough", this, {}, content)
    );
  }
  public addIconClickThrough(content: string): IconClicks_57 {
    return this.attachIconClickThrough(content).and();
  }
  public attachIconClickTracking(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): IconClickTracking_59 {
    return p<IconClickTracking_59>(
      new IconClickTracking_59(
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
  ): IconClicks_57 {
    return this.attachIconClickTracking(content, attributes).and();
  }
}
class IconViewTracking_60 extends V<Icon_53> {}
class Icon_53 extends V<Icons_52> {
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
  ): StaticResource_54 {
    return p<StaticResource_54>(
      new StaticResource_54(
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
  ): Icon_53 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content: string): IFrameResource_55 {
    return p<IFrameResource_55>(
      new IFrameResource_55("IFrameResource", this, {}, content)
    );
  }
  public addIFrameResource(content: string): Icon_53 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content: string): HTMLResource_56 {
    return p<HTMLResource_56>(
      new HTMLResource_56("HTMLResource", this, {}, content)
    );
  }
  public addHTMLResource(content: string): Icon_53 {
    return this.attachHTMLResource(content).and();
  }
  public attachIconClicks(): IconClicks_57 {
    return p<IconClicks_57>(new IconClicks_57("IconClicks", this, {}));
  }
  public attachIconViewTracking(content: string): IconViewTracking_60 {
    return p<IconViewTracking_60>(
      new IconViewTracking_60("IconViewTracking", this, {}, content)
    );
  }
  public addIconViewTracking(content: string): Icon_53 {
    return this.attachIconViewTracking(content).and();
  }
}
class Icons_52 extends V<Linear_37> {
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
  ): Icon_53 {
    return p<Icon_53>(
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
  }
}
class Linear_37 extends V<Creative_33> {
  public attachDuration(content: string): Duration_38 {
    return p<Duration_38>(new Duration_38("Duration", this, {}, content));
  }
  public addDuration(content: string): Linear_37 {
    return this.attachDuration(content).and();
  }
  public attachAdParameters(
    content: string,
    attributes: {
      xmlEncoded?: string;
    } = {}
  ): AdParameters_39 {
    return p<AdParameters_39>(
      new AdParameters_39(
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
  ): Linear_37 {
    return this.attachAdParameters(content, attributes).and();
  }
  public attachMediaFiles(): MediaFiles_40 {
    return p<MediaFiles_40>(new MediaFiles_40("MediaFiles", this, {}));
  }
  public attachVideoClicks(): VideoClicks_46 {
    return p<VideoClicks_46>(new VideoClicks_46("VideoClicks", this, {}));
  }
  public attachTrackingEvents(): TrackingEvents_50 {
    return p<TrackingEvents_50>(
      new TrackingEvents_50("TrackingEvents", this, {})
    );
  }
  public attachIcons(): Icons_52 {
    return p<Icons_52>(new Icons_52("Icons", this, {}));
  }
}
class NonLinearClickThrough_63 extends V<NonLinear_62> {}
class NonLinearClickTracking_64 extends V<NonLinear_62> {}
class NonLinear_62 extends V<NonLinearAds_61> {
  public attachNonLinearClickThrough(
    content: string
  ): NonLinearClickThrough_63 {
    return p<NonLinearClickThrough_63>(
      new NonLinearClickThrough_63("NonLinearClickThrough", this, {}, content)
    );
  }
  public addNonLinearClickThrough(content: string): NonLinear_62 {
    return this.attachNonLinearClickThrough(content).and();
  }
  public attachNonLinearClickTracking(
    content: string
  ): NonLinearClickTracking_64 {
    return p<NonLinearClickTracking_64>(
      new NonLinearClickTracking_64("NonLinearClickTracking", this, {}, content)
    );
  }
  public addNonLinearClickTracking(content: string): NonLinear_62 {
    return this.attachNonLinearClickTracking(content).and();
  }
}
class Tracking_66 extends V<TrackingEvents_65> {}
class TrackingEvents_65 extends V<NonLinearAds_61> {
  public attachTracking(
    content: string,
    attributes: {
      event:
        | "creativeView"
        | "acceptInvitation"
        | "adExpand"
        | "adCollapse"
        | "minimize"
        | "close"
        | "overlayViewDuration"
        | "otherAdInteraction"
        | "mute"
        | "unmute"
        | "pause"
        | "resume"
        | "rewind"
        | "skip"
        | "playerExpand"
        | "playerCollapse"
        | "notUsed";
    }
  ): Tracking_66 {
    return p<Tracking_66>(
      new Tracking_66(
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
        | "acceptInvitation"
        | "adExpand"
        | "adCollapse"
        | "minimize"
        | "close"
        | "overlayViewDuration"
        | "otherAdInteraction"
        | "mute"
        | "unmute"
        | "pause"
        | "resume"
        | "rewind"
        | "skip"
        | "playerExpand"
        | "playerCollapse"
        | "notUsed";
    }
  ): TrackingEvents_65 {
    return this.attachTracking(content, attributes).and();
  }
}
class NonLinearAds_61 extends V<Creative_33> {
  public attachNonLinear(attributes: {
    id?: string;
    width: string;
    height: string;
    expandedWidth?: string;
    expandedHeight?: string;
    scalable?: string;
    maintainAspectRatio?: string;
    apiFramework?: string;
    minSuggestedDuration?: string;
  }): NonLinear_62 {
    return p<NonLinear_62>(
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
  }
  public attachTrackingEvents(): TrackingEvents_65 {
    return p<TrackingEvents_65>(
      new TrackingEvents_65("TrackingEvents", this, {})
    );
  }
}
class StaticResource_69 extends V<Companion_68> {}
class IFrameResource_70 extends V<Companion_68> {}
class HTMLResource_71 extends V<Companion_68> {}
class AdParameters_72 extends V<Companion_68> {}
class AltText_73 extends V<Companion_68> {}
class CompanionClickThrough_74 extends V<Companion_68> {}
class CompanionClickTracking_75 extends V<Companion_68> {}
class Tracking_77 extends V<TrackingEvents_76> {}
class TrackingEvents_76 extends V<Companion_68> {
  public attachTracking(
    content: string,
    attributes: {
      event: "creativeView";
    }
  ): Tracking_77 {
    return p<Tracking_77>(
      new Tracking_77(
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
  ): TrackingEvents_76 {
    return this.attachTracking(content, attributes).and();
  }
}
class Companion_68 extends V<CompanionAds_67> {
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
  ): StaticResource_69 {
    return p<StaticResource_69>(
      new StaticResource_69(
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
  ): Companion_68 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content: string): IFrameResource_70 {
    return p<IFrameResource_70>(
      new IFrameResource_70("IFrameResource", this, {}, content)
    );
  }
  public addIFrameResource(content: string): Companion_68 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content: string): HTMLResource_71 {
    return p<HTMLResource_71>(
      new HTMLResource_71("HTMLResource", this, {}, content)
    );
  }
  public addHTMLResource(content: string): Companion_68 {
    return this.attachHTMLResource(content).and();
  }
  public attachAdParameters(
    content: string,
    attributes: {
      xmlEncoded?: string;
    } = {}
  ): AdParameters_72 {
    return p<AdParameters_72>(
      new AdParameters_72(
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
  ): Companion_68 {
    return this.attachAdParameters(content, attributes).and();
  }
  public attachAltText(content: string): AltText_73 {
    return p<AltText_73>(new AltText_73("AltText", this, {}, content));
  }
  public addAltText(content: string): Companion_68 {
    return this.attachAltText(content).and();
  }
  public attachCompanionClickThrough(
    content: string
  ): CompanionClickThrough_74 {
    return p<CompanionClickThrough_74>(
      new CompanionClickThrough_74("CompanionClickThrough", this, {}, content)
    );
  }
  public addCompanionClickThrough(content: string): Companion_68 {
    return this.attachCompanionClickThrough(content).and();
  }
  public attachCompanionClickTracking(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): CompanionClickTracking_75 {
    return p<CompanionClickTracking_75>(
      new CompanionClickTracking_75(
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
  ): Companion_68 {
    return this.attachCompanionClickTracking(content, attributes).and();
  }
  public attachTrackingEvents(): TrackingEvents_76 {
    return p<TrackingEvents_76>(
      new TrackingEvents_76("TrackingEvents", this, {})
    );
  }
}
class CompanionAds_67 extends V<Creative_33> {
  public attachCompanion(attributes: {
    width: string;
    height: string;
    id?: string;
    assetWidth?: string;
    assetHeight?: string;
    expandedWidth?: string;
    expandedHeight?: string;
    apiFramework?: string;
    adSlotID?: string;
    pxratio?: string;
    renderingMode?: "default" | "end-card" | "concurrent";
  }): Companion_68 {
    return p<Companion_68>(
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
  }
}
class Creative_33 extends V<Creatives_32> {
  public attachUniversalAdId(
    content: string,
    attributes: {
      idRegistry: string;
      idValue?: string;
    }
  ): UniversalAdId_34 {
    return p<UniversalAdId_34>(
      new UniversalAdId_34(
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
      idValue?: string;
    }
  ): Creative_33 {
    return this.attachUniversalAdId(content, attributes).and();
  }
  public attachCreativeExtensions(): CreativeExtensions_35 {
    return p<CreativeExtensions_35>(
      new CreativeExtensions_35("CreativeExtensions", this, {})
    );
  }
  public attachLinear(
    attributes: {
      skipoffset?: string;
    } = {}
  ): Linear_37 {
    return p<Linear_37>(
      new Linear_37("Linear", this, { attrs: ["skipoffset"] }, attributes)
    );
  }
  public attachNonLinearAds(): NonLinearAds_61 {
    return p<NonLinearAds_61>(new NonLinearAds_61("NonLinearAds", this, {}));
  }
  public attachCompanionAds(attributes: {
    required: "all" | "any" | "none";
  }): CompanionAds_67 {
    return p<CompanionAds_67>(
      new CompanionAds_67(
        "CompanionAds",
        this,
        { attrs: ["required"] },
        attributes
      )
    );
  }
}
class Creatives_32 extends V<InLine_7> {
  public attachCreative(
    attributes: {
      id?: string;
      sequence?: string;
      adId?: string;
      apiFramework?: string;
    } = {}
  ): Creative_33 {
    return p<Creative_33>(
      new Creative_33(
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
  public attachAdServingID(content: string): AdServingID_11 {
    return p<AdServingID_11>(
      new AdServingID_11("AdServingID", this, {}, content)
    );
  }
  public addAdServingID(content: string): InLine_7 {
    return this.attachAdServingID(content).and();
  }
  public attachCategory(
    content: string,
    attributes: {
      authority: string;
    }
  ): Category_12 {
    return p<Category_12>(
      new Category_12(
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
  public attachDescription(content: string): Description_13 {
    return p<Description_13>(
      new Description_13("Description", this, {}, content)
    );
  }
  public addDescription(content: string): InLine_7 {
    return this.attachDescription(content).and();
  }
  public attachAdvertiser(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): Advertiser_14 {
    return p<Advertiser_14>(
      new Advertiser_14(
        "Advertiser",
        this,
        { attrs: ["id"] },
        content,
        attributes
      )
    );
  }
  public addAdvertiser(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): InLine_7 {
    return this.attachAdvertiser(content, attributes).and();
  }
  public attachPricing(
    content: string,
    attributes: {
      currency: string;
      model: "CPM" | "CPC" | "CPE" | "CPV";
    }
  ): Pricing_15 {
    return p<Pricing_15>(
      new Pricing_15(
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
  ): Survey_16 {
    return p<Survey_16>(
      new Survey_16("Survey", this, { attrs: ["type"] }, content, attributes)
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
  public attachError(content: string): Error_17 {
    return p<Error_17>(new Error_17("Error", this, {}, content));
  }
  public addError(content: string): InLine_7 {
    return this.attachError(content).and();
  }
  public attachExpires(content: string): Expires_18 {
    return p<Expires_18>(new Expires_18("Expires", this, {}, content));
  }
  public addExpires(content: string): InLine_7 {
    return this.attachExpires(content).and();
  }
  public attachViewableImpression(
    attributes: {
      id?: string;
    } = {}
  ): ViewableImpression_19 {
    return p<ViewableImpression_19>(
      new ViewableImpression_19(
        "ViewableImpression",
        this,
        { attrs: ["id"] },
        attributes
      )
    );
  }
  public attachAdVerifications(): AdVerifications_23 {
    return p<AdVerifications_23>(
      new AdVerifications_23("AdVerifications", this, {})
    );
  }
  public attachExtensions(): Extensions_30 {
    return p<Extensions_30>(new Extensions_30("Extensions", this, {}));
  }
  public attachCreatives(): Creatives_32 {
    return p<Creatives_32>(new Creatives_32("Creatives", this, {}));
  }
}
class Impression_79 extends V<Wrapper_78> {}
class VASTAdTagURI_80 extends V<Wrapper_78> {}
class AdSystem_81 extends V<Wrapper_78> {}
class Pricing_82 extends V<Wrapper_78> {}
class Error_83 extends V<Wrapper_78> {}
class Viewable_85 extends V<ViewableImpression_84> {}
class NotViewable_86 extends V<ViewableImpression_84> {}
class ViewUndetermined_87 extends V<ViewableImpression_84> {}
class ViewableImpression_84 extends V<Wrapper_78> {
  public attachViewable(content: string): Viewable_85 {
    return p<Viewable_85>(new Viewable_85("Viewable", this, {}, content));
  }
  public addViewable(content: string): ViewableImpression_84 {
    return this.attachViewable(content).and();
  }
  public attachNotViewable(content: string): NotViewable_86 {
    return p<NotViewable_86>(
      new NotViewable_86("NotViewable", this, {}, content)
    );
  }
  public addNotViewable(content: string): ViewableImpression_84 {
    return this.attachNotViewable(content).and();
  }
  public attachViewUndetermined(content: string): ViewUndetermined_87 {
    return p<ViewUndetermined_87>(
      new ViewUndetermined_87("ViewUndetermined", this, {}, content)
    );
  }
  public addViewUndetermined(content: string): ViewableImpression_84 {
    return this.attachViewUndetermined(content).and();
  }
}
class JavaScriptResource_90 extends V<Verification_89> {}
class ExecutableResource_91 extends V<Verification_89> {}
class Tracking_93 extends V<TrackingEvents_92> {}
class TrackingEvents_92 extends V<Verification_89> {
  public attachTracking(
    content: string,
    attributes: {
      offset?: string;
      event: "verificationNotExecuted";
    }
  ): Tracking_93 {
    return p<Tracking_93>(
      new Tracking_93(
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
      event: "verificationNotExecuted";
    }
  ): TrackingEvents_92 {
    return this.attachTracking(content, attributes).and();
  }
}
class VerificationParameters_94 extends V<Verification_89> {}
class BlockedAdCategories_95 extends V<Verification_89> {}
class Verification_89 extends V<AdVerifications_88> {
  public attachJavaScriptResource(
    content: string,
    attributes: {
      apiFramework: string;
      browserOptional: string;
    }
  ): JavaScriptResource_90 {
    return p<JavaScriptResource_90>(
      new JavaScriptResource_90(
        "JavaScriptResource",
        this,
        { attrs: ["apiFramework", "browserOptional"] },
        content,
        attributes
      )
    );
  }
  public addJavaScriptResource(
    content: string,
    attributes: {
      apiFramework: string;
      browserOptional: string;
    }
  ): Verification_89 {
    return this.attachJavaScriptResource(content, attributes).and();
  }
  public attachExecutableResource(
    content: string,
    attributes: {
      apiFramework: string;
      language?: string;
      type?: string;
    }
  ): ExecutableResource_91 {
    return p<ExecutableResource_91>(
      new ExecutableResource_91(
        "ExecutableResource",
        this,
        { attrs: ["apiFramework", "language", "type"] },
        content,
        attributes
      )
    );
  }
  public addExecutableResource(
    content: string,
    attributes: {
      apiFramework: string;
      language?: string;
      type?: string;
    }
  ): Verification_89 {
    return this.attachExecutableResource(content, attributes).and();
  }
  public attachTrackingEvents(): TrackingEvents_92 {
    return p<TrackingEvents_92>(
      new TrackingEvents_92("TrackingEvents", this, {})
    );
  }
  public attachVerificationParameters(
    content: string
  ): VerificationParameters_94 {
    return p<VerificationParameters_94>(
      new VerificationParameters_94("VerificationParameters", this, {}, content)
    );
  }
  public addVerificationParameters(content: string): Verification_89 {
    return this.attachVerificationParameters(content).and();
  }
  public attachBlockedAdCategories(
    content: string,
    attributes: {
      authority: string;
    }
  ): BlockedAdCategories_95 {
    return p<BlockedAdCategories_95>(
      new BlockedAdCategories_95(
        "BlockedAdCategories",
        this,
        { attrs: ["authority"] },
        content,
        attributes
      )
    );
  }
  public addBlockedAdCategories(
    content: string,
    attributes: {
      authority: string;
    }
  ): Verification_89 {
    return this.attachBlockedAdCategories(content, attributes).and();
  }
}
class AdVerifications_88 extends V<Wrapper_78> {
  public attachVerification(attributes: { vendor: string }): Verification_89 {
    return p<Verification_89>(
      new Verification_89(
        "Verification",
        this,
        { attrs: ["vendor"] },
        attributes
      )
    );
  }
}
class Extension_97 extends V<Extensions_96> {}
class Extensions_96 extends V<Wrapper_78> {
  public attachExtension(
    content: string,
    attributes: {
      type?: string;
    } = {}
  ): Extension_97 {
    return p<Extension_97>(
      new Extension_97(
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
  ): Extensions_96 {
    return this.attachExtension(content, attributes).and();
  }
}
class Tracking_102 extends V<TrackingEvents_101> {}
class TrackingEvents_101 extends V<Linear_100> {
  public attachTracking(
    content: string,
    attributes: {
      offset?: string;
      event:
        | "loaded"
        | "start"
        | "firstQuartile"
        | "midpoint"
        | "thirdQuartile"
        | "complete"
        | "progress"
        | "closeLinear"
        | "otherAdInteraction"
        | "mute"
        | "unmute"
        | "pause"
        | "resume"
        | "rewind"
        | "skip"
        | "playerExpand"
        | "playerCollapse"
        | "notUsed";
    }
  ): Tracking_102 {
    return p<Tracking_102>(
      new Tracking_102(
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
        | "loaded"
        | "start"
        | "firstQuartile"
        | "midpoint"
        | "thirdQuartile"
        | "complete"
        | "progress"
        | "closeLinear"
        | "otherAdInteraction"
        | "mute"
        | "unmute"
        | "pause"
        | "resume"
        | "rewind"
        | "skip"
        | "playerExpand"
        | "playerCollapse"
        | "notUsed";
    }
  ): TrackingEvents_101 {
    return this.attachTracking(content, attributes).and();
  }
}
class ClickTracking_104 extends V<VideoClicks_103> {}
class CustomClick_105 extends V<VideoClicks_103> {}
class VideoClicks_103 extends V<Linear_100> {
  public attachClickTracking(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): ClickTracking_104 {
    return p<ClickTracking_104>(
      new ClickTracking_104(
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
  ): VideoClicks_103 {
    return this.attachClickTracking(content, attributes).and();
  }
  public attachCustomClick(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): CustomClick_105 {
    return p<CustomClick_105>(
      new CustomClick_105(
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
  ): VideoClicks_103 {
    return this.attachCustomClick(content, attributes).and();
  }
}
class StaticResource_108 extends V<Icon_107> {}
class IFrameResource_109 extends V<Icon_107> {}
class HTMLResource_110 extends V<Icon_107> {}
class IconClickThrough_112 extends V<IconClicks_111> {}
class IconClickTracking_113 extends V<IconClicks_111> {}
class IconClicks_111 extends V<Icon_107> {
  public attachIconClickThrough(content: string): IconClickThrough_112 {
    return p<IconClickThrough_112>(
      new IconClickThrough_112("IconClickThrough", this, {}, content)
    );
  }
  public addIconClickThrough(content: string): IconClicks_111 {
    return this.attachIconClickThrough(content).and();
  }
  public attachIconClickTracking(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): IconClickTracking_113 {
    return p<IconClickTracking_113>(
      new IconClickTracking_113(
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
  ): IconClicks_111 {
    return this.attachIconClickTracking(content, attributes).and();
  }
}
class IconViewTracking_114 extends V<Icon_107> {}
class Icon_107 extends V<Icons_106> {
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
  ): StaticResource_108 {
    return p<StaticResource_108>(
      new StaticResource_108(
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
  ): Icon_107 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content: string): IFrameResource_109 {
    return p<IFrameResource_109>(
      new IFrameResource_109("IFrameResource", this, {}, content)
    );
  }
  public addIFrameResource(content: string): Icon_107 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content: string): HTMLResource_110 {
    return p<HTMLResource_110>(
      new HTMLResource_110("HTMLResource", this, {}, content)
    );
  }
  public addHTMLResource(content: string): Icon_107 {
    return this.attachHTMLResource(content).and();
  }
  public attachIconClicks(): IconClicks_111 {
    return p<IconClicks_111>(new IconClicks_111("IconClicks", this, {}));
  }
  public attachIconViewTracking(content: string): IconViewTracking_114 {
    return p<IconViewTracking_114>(
      new IconViewTracking_114("IconViewTracking", this, {}, content)
    );
  }
  public addIconViewTracking(content: string): Icon_107 {
    return this.attachIconViewTracking(content).and();
  }
}
class Icons_106 extends V<Linear_100> {
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
  ): Icon_107 {
    return p<Icon_107>(
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
  }
}
class InteractiveCreativeFile_115 extends V<Linear_100> {}
class Linear_100 extends V<Creative_99> {
  public attachTrackingEvents(): TrackingEvents_101 {
    return p<TrackingEvents_101>(
      new TrackingEvents_101("TrackingEvents", this, {})
    );
  }
  public attachVideoClicks(): VideoClicks_103 {
    return p<VideoClicks_103>(new VideoClicks_103("VideoClicks", this, {}));
  }
  public attachIcons(): Icons_106 {
    return p<Icons_106>(new Icons_106("Icons", this, {}));
  }
  public attachInteractiveCreativeFile(
    content: string,
    attributes: {
      type?: string;
      apiFramework?: string;
      variableDuration?: string;
    } = {}
  ): InteractiveCreativeFile_115 {
    return p<InteractiveCreativeFile_115>(
      new InteractiveCreativeFile_115(
        "InteractiveCreativeFile",
        this,
        { attrs: ["type", "apiFramework", "variableDuration"] },
        content,
        attributes
      )
    );
  }
  public addInteractiveCreativeFile(
    content: string,
    attributes: {
      type?: string;
      apiFramework?: string;
      variableDuration?: string;
    } = {}
  ): Linear_100 {
    return this.attachInteractiveCreativeFile(content, attributes).and();
  }
}
class NonLinearClickThrough_118 extends V<NonLinear_117> {}
class NonLinearClickTracking_119 extends V<NonLinear_117> {}
class NonLinear_117 extends V<NonLinearAds_116> {
  public attachNonLinearClickThrough(
    content: string
  ): NonLinearClickThrough_118 {
    return p<NonLinearClickThrough_118>(
      new NonLinearClickThrough_118("NonLinearClickThrough", this, {}, content)
    );
  }
  public addNonLinearClickThrough(content: string): NonLinear_117 {
    return this.attachNonLinearClickThrough(content).and();
  }
  public attachNonLinearClickTracking(
    content: string
  ): NonLinearClickTracking_119 {
    return p<NonLinearClickTracking_119>(
      new NonLinearClickTracking_119(
        "NonLinearClickTracking",
        this,
        {},
        content
      )
    );
  }
  public addNonLinearClickTracking(content: string): NonLinear_117 {
    return this.attachNonLinearClickTracking(content).and();
  }
}
class Tracking_121 extends V<TrackingEvents_120> {}
class TrackingEvents_120 extends V<NonLinearAds_116> {
  public attachTracking(
    content: string,
    attributes: {
      event:
        | "creativeView"
        | "acceptInvitation"
        | "adExpand"
        | "adCollapse"
        | "minimize"
        | "close"
        | "overlayViewDuration"
        | "otherAdInteraction"
        | "mute"
        | "unmute"
        | "pause"
        | "resume"
        | "rewind"
        | "skip"
        | "playerExpand"
        | "playerCollapse"
        | "notUsed";
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
      event:
        | "creativeView"
        | "acceptInvitation"
        | "adExpand"
        | "adCollapse"
        | "minimize"
        | "close"
        | "overlayViewDuration"
        | "otherAdInteraction"
        | "mute"
        | "unmute"
        | "pause"
        | "resume"
        | "rewind"
        | "skip"
        | "playerExpand"
        | "playerCollapse"
        | "notUsed";
    }
  ): TrackingEvents_120 {
    return this.attachTracking(content, attributes).and();
  }
}
class NonLinearAds_116 extends V<Creative_99> {
  public attachNonLinear(attributes: {
    id?: string;
    width: string;
    height: string;
    expandedWidth?: string;
    expandedHeight?: string;
    scalable?: string;
    maintainAspectRatio?: string;
    apiFramework?: string;
    minSuggestedDuration?: string;
  }): NonLinear_117 {
    return p<NonLinear_117>(
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
  }
  public attachTrackingEvents(): TrackingEvents_120 {
    return p<TrackingEvents_120>(
      new TrackingEvents_120("TrackingEvents", this, {})
    );
  }
}
class StaticResource_124 extends V<Companion_123> {}
class IFrameResource_125 extends V<Companion_123> {}
class HTMLResource_126 extends V<Companion_123> {}
class AdParameters_127 extends V<Companion_123> {}
class AltText_128 extends V<Companion_123> {}
class CompanionClickThrough_129 extends V<Companion_123> {}
class CompanionClickTracking_130 extends V<Companion_123> {}
class Tracking_132 extends V<TrackingEvents_131> {}
class TrackingEvents_131 extends V<Companion_123> {
  public attachTracking(
    content: string,
    attributes: {
      event: "creativeView";
    }
  ): Tracking_132 {
    return p<Tracking_132>(
      new Tracking_132(
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
  ): TrackingEvents_131 {
    return this.attachTracking(content, attributes).and();
  }
}
class Companion_123 extends V<CompanionAds_122> {
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
  ): StaticResource_124 {
    return p<StaticResource_124>(
      new StaticResource_124(
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
  ): Companion_123 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content: string): IFrameResource_125 {
    return p<IFrameResource_125>(
      new IFrameResource_125("IFrameResource", this, {}, content)
    );
  }
  public addIFrameResource(content: string): Companion_123 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content: string): HTMLResource_126 {
    return p<HTMLResource_126>(
      new HTMLResource_126("HTMLResource", this, {}, content)
    );
  }
  public addHTMLResource(content: string): Companion_123 {
    return this.attachHTMLResource(content).and();
  }
  public attachAdParameters(
    content: string,
    attributes: {
      xmlEncoded?: string;
    } = {}
  ): AdParameters_127 {
    return p<AdParameters_127>(
      new AdParameters_127(
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
  ): Companion_123 {
    return this.attachAdParameters(content, attributes).and();
  }
  public attachAltText(content: string): AltText_128 {
    return p<AltText_128>(new AltText_128("AltText", this, {}, content));
  }
  public addAltText(content: string): Companion_123 {
    return this.attachAltText(content).and();
  }
  public attachCompanionClickThrough(
    content: string
  ): CompanionClickThrough_129 {
    return p<CompanionClickThrough_129>(
      new CompanionClickThrough_129("CompanionClickThrough", this, {}, content)
    );
  }
  public addCompanionClickThrough(content: string): Companion_123 {
    return this.attachCompanionClickThrough(content).and();
  }
  public attachCompanionClickTracking(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): CompanionClickTracking_130 {
    return p<CompanionClickTracking_130>(
      new CompanionClickTracking_130(
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
  ): Companion_123 {
    return this.attachCompanionClickTracking(content, attributes).and();
  }
  public attachTrackingEvents(): TrackingEvents_131 {
    return p<TrackingEvents_131>(
      new TrackingEvents_131("TrackingEvents", this, {})
    );
  }
}
class CompanionAds_122 extends V<Creative_99> {
  public attachCompanion(attributes: {
    width: string;
    height: string;
    id?: string;
    assetWidth?: string;
    assetHeight?: string;
    expandedWidth?: string;
    expandedHeight?: string;
    apiFramework?: string;
    adSlotID?: string;
    pxratio?: string;
    renderingMode?: "default" | "end-card" | "concurrent";
  }): Companion_123 {
    return p<Companion_123>(
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
  }
}
class Creative_99 extends V<Creatives_98> {
  public attachLinear(): Linear_100 {
    return p<Linear_100>(new Linear_100("Linear", this, {}));
  }
  public attachNonLinearAds(): NonLinearAds_116 {
    return p<NonLinearAds_116>(new NonLinearAds_116("NonLinearAds", this, {}));
  }
  public attachCompanionAds(attributes: {
    required: "all" | "any" | "none";
  }): CompanionAds_122 {
    return p<CompanionAds_122>(
      new CompanionAds_122(
        "CompanionAds",
        this,
        { attrs: ["required"] },
        attributes
      )
    );
  }
}
class Creatives_98 extends V<Wrapper_78> {
  public attachCreative(
    attributes: {
      id?: string;
      sequence?: string;
      adId?: string;
    } = {}
  ): Creative_99 {
    return p<Creative_99>(
      new Creative_99(
        "Creative",
        this,
        { attrs: ["id", "sequence", "adId"] },
        attributes
      )
    );
  }
}
class Wrapper_78 extends V<Ad_6> {
  public attachImpression(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): Impression_79 {
    return p<Impression_79>(
      new Impression_79(
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
  ): Wrapper_78 {
    return this.attachImpression(content, attributes).and();
  }
  public attachVASTAdTagURI(content: string): VASTAdTagURI_80 {
    return p<VASTAdTagURI_80>(
      new VASTAdTagURI_80("VASTAdTagURI", this, {}, content)
    );
  }
  public addVASTAdTagURI(content: string): Wrapper_78 {
    return this.attachVASTAdTagURI(content).and();
  }
  public attachAdSystem(
    content: string,
    attributes: {
      version?: string;
    } = {}
  ): AdSystem_81 {
    return p<AdSystem_81>(
      new AdSystem_81(
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
  ): Wrapper_78 {
    return this.attachAdSystem(content, attributes).and();
  }
  public attachPricing(
    content: string,
    attributes: {
      currency: string;
      model: "CPM" | "CPC" | "CPE" | "CPV";
    }
  ): Pricing_82 {
    return p<Pricing_82>(
      new Pricing_82(
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
  ): Wrapper_78 {
    return this.attachPricing(content, attributes).and();
  }
  public attachError(content: string): Error_83 {
    return p<Error_83>(new Error_83("Error", this, {}, content));
  }
  public addError(content: string): Wrapper_78 {
    return this.attachError(content).and();
  }
  public attachViewableImpression(
    attributes: {
      id?: string;
    } = {}
  ): ViewableImpression_84 {
    return p<ViewableImpression_84>(
      new ViewableImpression_84(
        "ViewableImpression",
        this,
        { attrs: ["id"] },
        attributes
      )
    );
  }
  public attachAdVerifications(): AdVerifications_88 {
    return p<AdVerifications_88>(
      new AdVerifications_88("AdVerifications", this, {})
    );
  }
  public attachExtensions(): Extensions_96 {
    return p<Extensions_96>(new Extensions_96("Extensions", this, {}));
  }
  public attachCreatives(): Creatives_98 {
    return p<Creatives_98>(new Creatives_98("Creatives", this, {}));
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
  ): Wrapper_78 {
    return p<Wrapper_78>(
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
  }
}
class VAST_4 extends V<apiv4_1> {
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
      adType?: string;
    } = {}
  ): Ad_6 {
    return p<Ad_6>(
      new Ad_6(
        "Ad",
        this,
        { attrs: ["id", "sequence", "conditionalAd", "adType"] },
        attributes
      )
    );
  }
}
class apiv4_1 extends V<apiv4_1> {
  public attachVAST(attributes: { version: "4.1" }): VAST_4 {
    return p<VAST_4>(
      new VAST_4("VAST", this, { attrs: ["version"] }, attributes)
    );
  }
  public and() {
    return this;
  }
}

export { apiv4_1, VAST_4 };
