/* tslint:disable: class-name */

///////////////////////////////////////////////////////
//  IMPORTANT: this file is generated, dont edit it
/////////

import VastElement from '../../src/vast-element';

class Error_5 extends VastElement<VAST_4> {}
class AdSystem_8 extends VastElement<InLine_7> {}
class AdTitle_9 extends VastElement<InLine_7> {}
class Impression_10 extends VastElement<InLine_7> {}
class AdServingID_11 extends VastElement<InLine_7> {}
class Category_12 extends VastElement<InLine_7> {}
class Description_13 extends VastElement<InLine_7> {}
class Advertiser_14 extends VastElement<InLine_7> {}
class Pricing_15 extends VastElement<InLine_7> {}
class Survey_16 extends VastElement<InLine_7> {}
class Error_17 extends VastElement<InLine_7> {}
class Expires_18 extends VastElement<InLine_7> {}
class Viewable_20 extends VastElement<ViewableImpression_19> {}
class NotViewable_21 extends VastElement<ViewableImpression_19> {}
class ViewUndetermined_22 extends VastElement<ViewableImpression_19> {}
class ViewableImpression_19 extends VastElement<InLine_7> {
  public attachViewable(content): Viewable_20 {
    const newElem = new Viewable_20('Viewable', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addViewable(content): ViewableImpression_19 {
    return this.attachViewable(content).and();
  }
  public attachNotViewable(content): NotViewable_21 {
    const newElem = new NotViewable_21('NotViewable', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addNotViewable(content): ViewableImpression_19 {
    return this.attachNotViewable(content).and();
  }
  public attachViewUndetermined(content): ViewUndetermined_22 {
    const newElem = new ViewUndetermined_22('ViewUndetermined', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addViewUndetermined(content): ViewableImpression_19 {
    return this.attachViewUndetermined(content).and();
  }
}
class JavaScriptResource_25 extends VastElement<Verification_24> {}
class ExecutableResource_26 extends VastElement<Verification_24> {}
class Tracking_28 extends VastElement<TrackingEvents_27> {}
class TrackingEvents_27 extends VastElement<Verification_24> {
  public attachTracking(content, attributes): Tracking_28 {
    const newElem = new Tracking_28('Tracking', this, {"attrs":["offset","event"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content, attributes): TrackingEvents_27 {
    return this.attachTracking(content, attributes).and();
  }
}
class VerificationParameters_29 extends VastElement<Verification_24> {}
class Verification_24 extends VastElement<AdVerifications_23> {
  public attachJavaScriptResource(content, attributes): JavaScriptResource_25 {
    const newElem = new JavaScriptResource_25('JavaScriptResource', this, {"attrs":["apiFramework","browserOptional"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addJavaScriptResource(content, attributes): Verification_24 {
    return this.attachJavaScriptResource(content, attributes).and();
  }
  public attachExecutableResource(content, attributes): ExecutableResource_26 {
    const newElem = new ExecutableResource_26('ExecutableResource', this, {"attrs":["apiFramework","language","type"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addExecutableResource(content, attributes): Verification_24 {
    return this.attachExecutableResource(content, attributes).and();
  }
  public attachTrackingEvents(): TrackingEvents_27 {
    const newElem = new TrackingEvents_27('TrackingEvents', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachVerificationParameters(content): VerificationParameters_29 {
    const newElem = new VerificationParameters_29('VerificationParameters', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addVerificationParameters(content): Verification_24 {
    return this.attachVerificationParameters(content).and();
  }
}
class AdVerifications_23 extends VastElement<InLine_7> {
  public attachVerification(attributes:[{"vendor":null}]): Verification_24 {
    const newElem = new Verification_24('Verification', this, {"attrs":["vendor"]}, attributes:[{"vendor":null}]);
    this.childs.push(newElem);
    return newElem;
  }
}
class Extension_31 extends VastElement<Extensions_30> {}
class Extensions_30 extends VastElement<InLine_7> {
  public attachExtension(content, attributes): Extension_31 {
    const newElem = new Extension_31('Extension', this, {"attrs":["type"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addExtension(content, attributes): Extensions_30 {
    return this.attachExtension(content, attributes).and();
  }
}
class UniversalAdId_34 extends VastElement<Creative_33> {}
class CreativeExtension_36 extends VastElement<CreativeExtensions_35> {}
class CreativeExtensions_35 extends VastElement<Creative_33> {
  public attachCreativeExtension(content, attributes): CreativeExtension_36 {
    const newElem = new CreativeExtension_36('CreativeExtension', this, {"attrs":["type"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addCreativeExtension(content, attributes): CreativeExtensions_35 {
    return this.attachCreativeExtension(content, attributes).and();
  }
}
class Duration_38 extends VastElement<Linear_37> {}
class AdParameters_39 extends VastElement<Linear_37> {}
class Mezzanine_41 extends VastElement<MediaFiles_40> {}
class MediaFile_42 extends VastElement<MediaFiles_40> {}
class InteractiveCreativeFile_43 extends VastElement<MediaFiles_40> {}
class ClosedCaptionFile_45 extends VastElement<ClosedCaptionFiles_44> {}
class ClosedCaptionFiles_44 extends VastElement<MediaFiles_40> {
  public attachClosedCaptionFile(content, attributes): ClosedCaptionFile_45 {
    const newElem = new ClosedCaptionFile_45('ClosedCaptionFile', this, {"attrs":["type","language"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addClosedCaptionFile(content, attributes): ClosedCaptionFiles_44 {
    return this.attachClosedCaptionFile(content, attributes).and();
  }
}
class MediaFiles_40 extends VastElement<Linear_37> {
  public attachMezzanine(content, attributes): Mezzanine_41 {
    const newElem = new Mezzanine_41('Mezzanine', this, {"attrs":["delivery","type","width","height","codec","id","fileSize","mediaType"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addMezzanine(content, attributes): MediaFiles_40 {
    return this.attachMezzanine(content, attributes).and();
  }
  public attachMediaFile(content, attributes): MediaFile_42 {
    const newElem = new MediaFile_42('MediaFile', this, {"attrs":["delivery","type","width","height","codec","id","bitrate","minBitrate","maxBitrate","scalable","mantainAspectRatio","apiFramework","fileSize","mediaType"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addMediaFile(content, attributes): MediaFiles_40 {
    return this.attachMediaFile(content, attributes).and();
  }
  public attachInteractiveCreativeFile(content, attributes): InteractiveCreativeFile_43 {
    const newElem = new InteractiveCreativeFile_43('InteractiveCreativeFile', this, {"attrs":["type","apiFramework","variableDuration"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addInteractiveCreativeFile(content, attributes): MediaFiles_40 {
    return this.attachInteractiveCreativeFile(content, attributes).and();
  }
  public attachClosedCaptionFiles(): ClosedCaptionFiles_44 {
    const newElem = new ClosedCaptionFiles_44('ClosedCaptionFiles', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
}
class ClickThrough_47 extends VastElement<VideoClicks_46> {}
class ClickTracking_48 extends VastElement<VideoClicks_46> {}
class CustomClick_49 extends VastElement<VideoClicks_46> {}
class VideoClicks_46 extends VastElement<Linear_37> {
  public attachClickThrough(content, attributes): ClickThrough_47 {
    const newElem = new ClickThrough_47('ClickThrough', this, {"attrs":["id"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addClickThrough(content, attributes): VideoClicks_46 {
    return this.attachClickThrough(content, attributes).and();
  }
  public attachClickTracking(content, attributes): ClickTracking_48 {
    const newElem = new ClickTracking_48('ClickTracking', this, {"attrs":["id"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addClickTracking(content, attributes): VideoClicks_46 {
    return this.attachClickTracking(content, attributes).and();
  }
  public attachCustomClick(content, attributes): CustomClick_49 {
    const newElem = new CustomClick_49('CustomClick', this, {"attrs":["id"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addCustomClick(content, attributes): VideoClicks_46 {
    return this.attachCustomClick(content, attributes).and();
  }
}
class Tracking_51 extends VastElement<TrackingEvents_50> {}
class TrackingEvents_50 extends VastElement<Linear_37> {
  public attachTracking(content, attributes): Tracking_51 {
    const newElem = new Tracking_51('Tracking', this, {"attrs":["offset","event"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content, attributes): TrackingEvents_50 {
    return this.attachTracking(content, attributes).and();
  }
}
class StaticResource_54 extends VastElement<Icon_53> {}
class IFrameResource_55 extends VastElement<Icon_53> {}
class HTMLResource_56 extends VastElement<Icon_53> {}
class IconClickThrough_58 extends VastElement<IconClicks_57> {}
class IconClickTracking_59 extends VastElement<IconClicks_57> {}
class IconClicks_57 extends VastElement<Icon_53> {
  public attachIconClickThrough(content): IconClickThrough_58 {
    const newElem = new IconClickThrough_58('IconClickThrough', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addIconClickThrough(content): IconClicks_57 {
    return this.attachIconClickThrough(content).and();
  }
  public attachIconClickTracking(content, attributes): IconClickTracking_59 {
    const newElem = new IconClickTracking_59('IconClickTracking', this, {"attrs":["id"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addIconClickTracking(content, attributes): IconClicks_57 {
    return this.attachIconClickTracking(content, attributes).and();
  }
}
class IconViewTracking_60 extends VastElement<Icon_53> {}
class Icon_53 extends VastElement<Icons_52> {
  public attachStaticResource(content, attributes): StaticResource_54 {
    const newElem = new StaticResource_54('StaticResource', this, {"attrs":["creativeType"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(content, attributes): Icon_53 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content): IFrameResource_55 {
    const newElem = new IFrameResource_55('IFrameResource', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content): Icon_53 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content): HTMLResource_56 {
    const newElem = new HTMLResource_56('HTMLResource', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content): Icon_53 {
    return this.attachHTMLResource(content).and();
  }
  public attachIconClicks(): IconClicks_57 {
    const newElem = new IconClicks_57('IconClicks', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachIconViewTracking(content): IconViewTracking_60 {
    const newElem = new IconViewTracking_60('IconViewTracking', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addIconViewTracking(content): Icon_53 {
    return this.attachIconViewTracking(content).and();
  }
}
class Icons_52 extends VastElement<Linear_37> {
  public attachIcon(attributes:["program","width","height","xPosition","yPosition","duration","offset","apiFramework","pxratio"]): Icon_53 {
    const newElem = new Icon_53('Icon', this, {"attrs":["program","width","height","xPosition","yPosition","duration","offset","apiFramework","pxratio"]}, attributes:["program","width","height","xPosition","yPosition","duration","offset","apiFramework","pxratio"]);
    this.childs.push(newElem);
    return newElem;
  }
}
class Linear_37 extends VastElement<Creative_33> {
  public attachDuration(content): Duration_38 {
    const newElem = new Duration_38('Duration', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addDuration(content): Linear_37 {
    return this.attachDuration(content).and();
  }
  public attachAdParameters(content, attributes): AdParameters_39 {
    const newElem = new AdParameters_39('AdParameters', this, {"attrs":["xmlEncoded"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdParameters(content, attributes): Linear_37 {
    return this.attachAdParameters(content, attributes).and();
  }
  public attachMediaFiles(): MediaFiles_40 {
    const newElem = new MediaFiles_40('MediaFiles', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachVideoClicks(): VideoClicks_46 {
    const newElem = new VideoClicks_46('VideoClicks', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachTrackingEvents(): TrackingEvents_50 {
    const newElem = new TrackingEvents_50('TrackingEvents', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachIcons(): Icons_52 {
    const newElem = new Icons_52('Icons', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
}
class NonLinearClickThrough_63 extends VastElement<NonLinear_62> {}
class NonLinearClickTracking_64 extends VastElement<NonLinear_62> {}
class NonLinear_62 extends VastElement<NonLinearAds_61> {
  public attachNonLinearClickThrough(content): NonLinearClickThrough_63 {
    const newElem = new NonLinearClickThrough_63('NonLinearClickThrough', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addNonLinearClickThrough(content): NonLinear_62 {
    return this.attachNonLinearClickThrough(content).and();
  }
  public attachNonLinearClickTracking(content): NonLinearClickTracking_64 {
    const newElem = new NonLinearClickTracking_64('NonLinearClickTracking', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addNonLinearClickTracking(content): NonLinear_62 {
    return this.attachNonLinearClickTracking(content).and();
  }
}
class Tracking_66 extends VastElement<TrackingEvents_65> {}
class TrackingEvents_65 extends VastElement<NonLinearAds_61> {
  public attachTracking(content, attributes): Tracking_66 {
    const newElem = new Tracking_66('Tracking', this, {"attrs":["event"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content, attributes): TrackingEvents_65 {
    return this.attachTracking(content, attributes).and();
  }
}
class NonLinearAds_61 extends VastElement<Creative_33> {
  public attachNonLinear(attributes:["id",{"width":null},{"height":null},"expandedWidth","expandedHeight","scalable","maintainAspectRatio","apiFramework","minSuggestedDuration"]): NonLinear_62 {
    const newElem = new NonLinear_62('NonLinear', this, {"attrs":["id","width","height","expandedWidth","expandedHeight","scalable","maintainAspectRatio","apiFramework","minSuggestedDuration"]}, attributes:["id",{"width":null},{"height":null},"expandedWidth","expandedHeight","scalable","maintainAspectRatio","apiFramework","minSuggestedDuration"]);
    this.childs.push(newElem);
    return newElem;
  }
  public attachTrackingEvents(): TrackingEvents_65 {
    const newElem = new TrackingEvents_65('TrackingEvents', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
}
class StaticResource_69 extends VastElement<Companion_68> {}
class IFrameResource_70 extends VastElement<Companion_68> {}
class HTMLResource_71 extends VastElement<Companion_68> {}
class AdParameters_72 extends VastElement<Companion_68> {}
class AltText_73 extends VastElement<Companion_68> {}
class CompanionClickThrough_74 extends VastElement<Companion_68> {}
class CompanionClickTracking_75 extends VastElement<Companion_68> {}
class Tracking_77 extends VastElement<TrackingEvents_76> {}
class TrackingEvents_76 extends VastElement<Companion_68> {
  public attachTracking(content, attributes): Tracking_77 {
    const newElem = new Tracking_77('Tracking', this, {"attrs":["event"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content, attributes): TrackingEvents_76 {
    return this.attachTracking(content, attributes).and();
  }
}
class Companion_68 extends VastElement<CompanionAds_67> {
  public attachStaticResource(content, attributes): StaticResource_69 {
    const newElem = new StaticResource_69('StaticResource', this, {"attrs":["creativeType"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(content, attributes): Companion_68 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content): IFrameResource_70 {
    const newElem = new IFrameResource_70('IFrameResource', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content): Companion_68 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content): HTMLResource_71 {
    const newElem = new HTMLResource_71('HTMLResource', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content): Companion_68 {
    return this.attachHTMLResource(content).and();
  }
  public attachAdParameters(content, attributes): AdParameters_72 {
    const newElem = new AdParameters_72('AdParameters', this, {"attrs":["xmlEncoded"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdParameters(content, attributes): Companion_68 {
    return this.attachAdParameters(content, attributes).and();
  }
  public attachAltText(content): AltText_73 {
    const newElem = new AltText_73('AltText', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addAltText(content): Companion_68 {
    return this.attachAltText(content).and();
  }
  public attachCompanionClickThrough(content): CompanionClickThrough_74 {
    const newElem = new CompanionClickThrough_74('CompanionClickThrough', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addCompanionClickThrough(content): Companion_68 {
    return this.attachCompanionClickThrough(content).and();
  }
  public attachCompanionClickTracking(content, attributes): CompanionClickTracking_75 {
    const newElem = new CompanionClickTracking_75('CompanionClickTracking', this, {"attrs":["id"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addCompanionClickTracking(content, attributes): Companion_68 {
    return this.attachCompanionClickTracking(content, attributes).and();
  }
  public attachTrackingEvents(): TrackingEvents_76 {
    const newElem = new TrackingEvents_76('TrackingEvents', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
}
class CompanionAds_67 extends VastElement<Creative_33> {
  public attachCompanion(attributes:[{"width":null},{"height":null},"id","assetWidth","assetHeight","expandedWidth","expandedHeight","apiFramework","adSlotID","pxratio","renderingMode"]): Companion_68 {
    const newElem = new Companion_68('Companion', this, {"attrs":["width","height","id","assetWidth","assetHeight","expandedWidth","expandedHeight","apiFramework","adSlotID","pxratio","renderingMode"]}, attributes:[{"width":null},{"height":null},"id","assetWidth","assetHeight","expandedWidth","expandedHeight","apiFramework","adSlotID","pxratio","renderingMode"]);
    this.childs.push(newElem);
    return newElem;
  }
}
class Creative_33 extends VastElement<Creatives_32> {
  public attachUniversalAdId(content, attributes): UniversalAdId_34 {
    const newElem = new UniversalAdId_34('UniversalAdId', this, {"attrs":["idRegistry","idValue"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addUniversalAdId(content, attributes): Creative_33 {
    return this.attachUniversalAdId(content, attributes).and();
  }
  public attachCreativeExtensions(): CreativeExtensions_35 {
    const newElem = new CreativeExtensions_35('CreativeExtensions', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachLinear(attributes:["skipoffset"]): Linear_37 {
    const newElem = new Linear_37('Linear', this, {"attrs":["skipoffset"]}, attributes:["skipoffset"]);
    this.childs.push(newElem);
    return newElem;
  }
  public attachNonLinearAds(): NonLinearAds_61 {
    const newElem = new NonLinearAds_61('NonLinearAds', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachCompanionAds(attributes:[{"required":["all","any","none"]}]): CompanionAds_67 {
    const newElem = new CompanionAds_67('CompanionAds', this, {"attrs":["required"]}, attributes:[{"required":["all","any","none"]}]);
    this.childs.push(newElem);
    return newElem;
  }
}
class Creatives_32 extends VastElement<InLine_7> {
  public attachCreative(attributes:["id","sequence","adId","apiFramework"]): Creative_33 {
    const newElem = new Creative_33('Creative', this, {"attrs":["id","sequence","adId","apiFramework"]}, attributes:["id","sequence","adId","apiFramework"]);
    this.childs.push(newElem);
    return newElem;
  }
}
class InLine_7 extends VastElement<Ad_6> {
  public attachAdSystem(content, attributes): AdSystem_8 {
    const newElem = new AdSystem_8('AdSystem', this, {"attrs":["version"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdSystem(content, attributes): InLine_7 {
    return this.attachAdSystem(content, attributes).and();
  }
  public attachAdTitle(content): AdTitle_9 {
    const newElem = new AdTitle_9('AdTitle', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdTitle(content): InLine_7 {
    return this.attachAdTitle(content).and();
  }
  public attachImpression(content, attributes): Impression_10 {
    const newElem = new Impression_10('Impression', this, {"attrs":["id"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addImpression(content, attributes): InLine_7 {
    return this.attachImpression(content, attributes).and();
  }
  public attachAdServingID(content): AdServingID_11 {
    const newElem = new AdServingID_11('AdServingID', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdServingID(content): InLine_7 {
    return this.attachAdServingID(content).and();
  }
  public attachCategory(content, attributes): Category_12 {
    const newElem = new Category_12('Category', this, {"attrs":["authority"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addCategory(content, attributes): InLine_7 {
    return this.attachCategory(content, attributes).and();
  }
  public attachDescription(content): Description_13 {
    const newElem = new Description_13('Description', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addDescription(content): InLine_7 {
    return this.attachDescription(content).and();
  }
  public attachAdvertiser(content, attributes): Advertiser_14 {
    const newElem = new Advertiser_14('Advertiser', this, {"attrs":["id"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdvertiser(content, attributes): InLine_7 {
    return this.attachAdvertiser(content, attributes).and();
  }
  public attachPricing(content, attributes): Pricing_15 {
    const newElem = new Pricing_15('Pricing', this, {"attrs":["currency","model"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addPricing(content, attributes): InLine_7 {
    return this.attachPricing(content, attributes).and();
  }
  public attachSurvey(content, attributes): Survey_16 {
    const newElem = new Survey_16('Survey', this, {"attrs":["type"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addSurvey(content, attributes): InLine_7 {
    return this.attachSurvey(content, attributes).and();
  }
  public attachError(content): Error_17 {
    const newElem = new Error_17('Error', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addError(content): InLine_7 {
    return this.attachError(content).and();
  }
  public attachExpires(content): Expires_18 {
    const newElem = new Expires_18('Expires', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addExpires(content): InLine_7 {
    return this.attachExpires(content).and();
  }
  public attachViewableImpression(attributes:["id"]): ViewableImpression_19 {
    const newElem = new ViewableImpression_19('ViewableImpression', this, {"attrs":["id"]}, attributes:["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public attachAdVerifications(): AdVerifications_23 {
    const newElem = new AdVerifications_23('AdVerifications', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachExtensions(): Extensions_30 {
    const newElem = new Extensions_30('Extensions', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachCreatives(): Creatives_32 {
    const newElem = new Creatives_32('Creatives', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
}
class Impression_79 extends VastElement<Wrapper_78> {}
class VASTAdTagURI_80 extends VastElement<Wrapper_78> {}
class AdSystem_81 extends VastElement<Wrapper_78> {}
class Pricing_82 extends VastElement<Wrapper_78> {}
class Error_83 extends VastElement<Wrapper_78> {}
class Viewable_85 extends VastElement<ViewableImpression_84> {}
class NotViewable_86 extends VastElement<ViewableImpression_84> {}
class ViewUndetermined_87 extends VastElement<ViewableImpression_84> {}
class ViewableImpression_84 extends VastElement<Wrapper_78> {
  public attachViewable(content): Viewable_85 {
    const newElem = new Viewable_85('Viewable', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addViewable(content): ViewableImpression_84 {
    return this.attachViewable(content).and();
  }
  public attachNotViewable(content): NotViewable_86 {
    const newElem = new NotViewable_86('NotViewable', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addNotViewable(content): ViewableImpression_84 {
    return this.attachNotViewable(content).and();
  }
  public attachViewUndetermined(content): ViewUndetermined_87 {
    const newElem = new ViewUndetermined_87('ViewUndetermined', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addViewUndetermined(content): ViewableImpression_84 {
    return this.attachViewUndetermined(content).and();
  }
}
class JavaScriptResource_90 extends VastElement<Verification_89> {}
class ExecutableResource_91 extends VastElement<Verification_89> {}
class Tracking_93 extends VastElement<TrackingEvents_92> {}
class TrackingEvents_92 extends VastElement<Verification_89> {
  public attachTracking(content, attributes): Tracking_93 {
    const newElem = new Tracking_93('Tracking', this, {"attrs":["offset","event"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content, attributes): TrackingEvents_92 {
    return this.attachTracking(content, attributes).and();
  }
}
class VerificationParameters_94 extends VastElement<Verification_89> {}
class BlockedAdCategories_95 extends VastElement<Verification_89> {}
class Verification_89 extends VastElement<AdVerifications_88> {
  public attachJavaScriptResource(content, attributes): JavaScriptResource_90 {
    const newElem = new JavaScriptResource_90('JavaScriptResource', this, {"attrs":["apiFramework","browserOptional"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addJavaScriptResource(content, attributes): Verification_89 {
    return this.attachJavaScriptResource(content, attributes).and();
  }
  public attachExecutableResource(content, attributes): ExecutableResource_91 {
    const newElem = new ExecutableResource_91('ExecutableResource', this, {"attrs":["apiFramework","language","type"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addExecutableResource(content, attributes): Verification_89 {
    return this.attachExecutableResource(content, attributes).and();
  }
  public attachTrackingEvents(): TrackingEvents_92 {
    const newElem = new TrackingEvents_92('TrackingEvents', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachVerificationParameters(content): VerificationParameters_94 {
    const newElem = new VerificationParameters_94('VerificationParameters', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addVerificationParameters(content): Verification_89 {
    return this.attachVerificationParameters(content).and();
  }
  public attachBlockedAdCategories(content, attributes): BlockedAdCategories_95 {
    const newElem = new BlockedAdCategories_95('BlockedAdCategories', this, {"attrs":["authority"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addBlockedAdCategories(content, attributes): Verification_89 {
    return this.attachBlockedAdCategories(content, attributes).and();
  }
}
class AdVerifications_88 extends VastElement<Wrapper_78> {
  public attachVerification(attributes:[{"vendor":null}]): Verification_89 {
    const newElem = new Verification_89('Verification', this, {"attrs":["vendor"]}, attributes:[{"vendor":null}]);
    this.childs.push(newElem);
    return newElem;
  }
}
class Extension_97 extends VastElement<Extensions_96> {}
class Extensions_96 extends VastElement<Wrapper_78> {
  public attachExtension(content, attributes): Extension_97 {
    const newElem = new Extension_97('Extension', this, {"attrs":["type"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addExtension(content, attributes): Extensions_96 {
    return this.attachExtension(content, attributes).and();
  }
}
class Tracking_102 extends VastElement<TrackingEvents_101> {}
class TrackingEvents_101 extends VastElement<Linear_100> {
  public attachTracking(content, attributes): Tracking_102 {
    const newElem = new Tracking_102('Tracking', this, {"attrs":["offset","event"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content, attributes): TrackingEvents_101 {
    return this.attachTracking(content, attributes).and();
  }
}
class ClickTracking_104 extends VastElement<VideoClicks_103> {}
class CustomClick_105 extends VastElement<VideoClicks_103> {}
class VideoClicks_103 extends VastElement<Linear_100> {
  public attachClickTracking(content, attributes): ClickTracking_104 {
    const newElem = new ClickTracking_104('ClickTracking', this, {"attrs":["id"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addClickTracking(content, attributes): VideoClicks_103 {
    return this.attachClickTracking(content, attributes).and();
  }
  public attachCustomClick(content, attributes): CustomClick_105 {
    const newElem = new CustomClick_105('CustomClick', this, {"attrs":["id"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addCustomClick(content, attributes): VideoClicks_103 {
    return this.attachCustomClick(content, attributes).and();
  }
}
class StaticResource_108 extends VastElement<Icon_107> {}
class IFrameResource_109 extends VastElement<Icon_107> {}
class HTMLResource_110 extends VastElement<Icon_107> {}
class IconClickThrough_112 extends VastElement<IconClicks_111> {}
class IconClickTracking_113 extends VastElement<IconClicks_111> {}
class IconClicks_111 extends VastElement<Icon_107> {
  public attachIconClickThrough(content): IconClickThrough_112 {
    const newElem = new IconClickThrough_112('IconClickThrough', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addIconClickThrough(content): IconClicks_111 {
    return this.attachIconClickThrough(content).and();
  }
  public attachIconClickTracking(content, attributes): IconClickTracking_113 {
    const newElem = new IconClickTracking_113('IconClickTracking', this, {"attrs":["id"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addIconClickTracking(content, attributes): IconClicks_111 {
    return this.attachIconClickTracking(content, attributes).and();
  }
}
class IconViewTracking_114 extends VastElement<Icon_107> {}
class Icon_107 extends VastElement<Icons_106> {
  public attachStaticResource(content, attributes): StaticResource_108 {
    const newElem = new StaticResource_108('StaticResource', this, {"attrs":["creativeType"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(content, attributes): Icon_107 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content): IFrameResource_109 {
    const newElem = new IFrameResource_109('IFrameResource', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content): Icon_107 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content): HTMLResource_110 {
    const newElem = new HTMLResource_110('HTMLResource', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content): Icon_107 {
    return this.attachHTMLResource(content).and();
  }
  public attachIconClicks(): IconClicks_111 {
    const newElem = new IconClicks_111('IconClicks', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachIconViewTracking(content): IconViewTracking_114 {
    const newElem = new IconViewTracking_114('IconViewTracking', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addIconViewTracking(content): Icon_107 {
    return this.attachIconViewTracking(content).and();
  }
}
class Icons_106 extends VastElement<Linear_100> {
  public attachIcon(attributes:["program","width","height","xPosition","yPosition","duration","offset","apiFramework","pxratio"]): Icon_107 {
    const newElem = new Icon_107('Icon', this, {"attrs":["program","width","height","xPosition","yPosition","duration","offset","apiFramework","pxratio"]}, attributes:["program","width","height","xPosition","yPosition","duration","offset","apiFramework","pxratio"]);
    this.childs.push(newElem);
    return newElem;
  }
}
class InteractiveCreativeFile_115 extends VastElement<Linear_100> {}
class Linear_100 extends VastElement<Creative_99> {
  public attachTrackingEvents(): TrackingEvents_101 {
    const newElem = new TrackingEvents_101('TrackingEvents', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachVideoClicks(): VideoClicks_103 {
    const newElem = new VideoClicks_103('VideoClicks', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachIcons(): Icons_106 {
    const newElem = new Icons_106('Icons', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachInteractiveCreativeFile(content, attributes): InteractiveCreativeFile_115 {
    const newElem = new InteractiveCreativeFile_115('InteractiveCreativeFile', this, {"attrs":["type","apiFramework","variableDuration"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addInteractiveCreativeFile(content, attributes): Linear_100 {
    return this.attachInteractiveCreativeFile(content, attributes).and();
  }
}
class NonLinearClickThrough_118 extends VastElement<NonLinear_117> {}
class NonLinearClickTracking_119 extends VastElement<NonLinear_117> {}
class NonLinear_117 extends VastElement<NonLinearAds_116> {
  public attachNonLinearClickThrough(content): NonLinearClickThrough_118 {
    const newElem = new NonLinearClickThrough_118('NonLinearClickThrough', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addNonLinearClickThrough(content): NonLinear_117 {
    return this.attachNonLinearClickThrough(content).and();
  }
  public attachNonLinearClickTracking(content): NonLinearClickTracking_119 {
    const newElem = new NonLinearClickTracking_119('NonLinearClickTracking', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addNonLinearClickTracking(content): NonLinear_117 {
    return this.attachNonLinearClickTracking(content).and();
  }
}
class Tracking_121 extends VastElement<TrackingEvents_120> {}
class TrackingEvents_120 extends VastElement<NonLinearAds_116> {
  public attachTracking(content, attributes): Tracking_121 {
    const newElem = new Tracking_121('Tracking', this, {"attrs":["event"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content, attributes): TrackingEvents_120 {
    return this.attachTracking(content, attributes).and();
  }
}
class NonLinearAds_116 extends VastElement<Creative_99> {
  public attachNonLinear(attributes:["id",{"width":null},{"height":null},"expandedWidth","expandedHeight","scalable","maintainAspectRatio","apiFramework","minSuggestedDuration"]): NonLinear_117 {
    const newElem = new NonLinear_117('NonLinear', this, {"attrs":["id","width","height","expandedWidth","expandedHeight","scalable","maintainAspectRatio","apiFramework","minSuggestedDuration"]}, attributes:["id",{"width":null},{"height":null},"expandedWidth","expandedHeight","scalable","maintainAspectRatio","apiFramework","minSuggestedDuration"]);
    this.childs.push(newElem);
    return newElem;
  }
  public attachTrackingEvents(): TrackingEvents_120 {
    const newElem = new TrackingEvents_120('TrackingEvents', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
}
class StaticResource_124 extends VastElement<Companion_123> {}
class IFrameResource_125 extends VastElement<Companion_123> {}
class HTMLResource_126 extends VastElement<Companion_123> {}
class AdParameters_127 extends VastElement<Companion_123> {}
class AltText_128 extends VastElement<Companion_123> {}
class CompanionClickThrough_129 extends VastElement<Companion_123> {}
class CompanionClickTracking_130 extends VastElement<Companion_123> {}
class Tracking_132 extends VastElement<TrackingEvents_131> {}
class TrackingEvents_131 extends VastElement<Companion_123> {
  public attachTracking(content, attributes): Tracking_132 {
    const newElem = new Tracking_132('Tracking', this, {"attrs":["event"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content, attributes): TrackingEvents_131 {
    return this.attachTracking(content, attributes).and();
  }
}
class Companion_123 extends VastElement<CompanionAds_122> {
  public attachStaticResource(content, attributes): StaticResource_124 {
    const newElem = new StaticResource_124('StaticResource', this, {"attrs":["creativeType"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(content, attributes): Companion_123 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content): IFrameResource_125 {
    const newElem = new IFrameResource_125('IFrameResource', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content): Companion_123 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content): HTMLResource_126 {
    const newElem = new HTMLResource_126('HTMLResource', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content): Companion_123 {
    return this.attachHTMLResource(content).and();
  }
  public attachAdParameters(content, attributes): AdParameters_127 {
    const newElem = new AdParameters_127('AdParameters', this, {"attrs":["xmlEncoded"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdParameters(content, attributes): Companion_123 {
    return this.attachAdParameters(content, attributes).and();
  }
  public attachAltText(content): AltText_128 {
    const newElem = new AltText_128('AltText', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addAltText(content): Companion_123 {
    return this.attachAltText(content).and();
  }
  public attachCompanionClickThrough(content): CompanionClickThrough_129 {
    const newElem = new CompanionClickThrough_129('CompanionClickThrough', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addCompanionClickThrough(content): Companion_123 {
    return this.attachCompanionClickThrough(content).and();
  }
  public attachCompanionClickTracking(content, attributes): CompanionClickTracking_130 {
    const newElem = new CompanionClickTracking_130('CompanionClickTracking', this, {"attrs":["id"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addCompanionClickTracking(content, attributes): Companion_123 {
    return this.attachCompanionClickTracking(content, attributes).and();
  }
  public attachTrackingEvents(): TrackingEvents_131 {
    const newElem = new TrackingEvents_131('TrackingEvents', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
}
class CompanionAds_122 extends VastElement<Creative_99> {
  public attachCompanion(attributes:[{"width":null},{"height":null},"id","assetWidth","assetHeight","expandedWidth","expandedHeight","apiFramework","adSlotID","pxratio","renderingMode"]): Companion_123 {
    const newElem = new Companion_123('Companion', this, {"attrs":["width","height","id","assetWidth","assetHeight","expandedWidth","expandedHeight","apiFramework","adSlotID","pxratio","renderingMode"]}, attributes:[{"width":null},{"height":null},"id","assetWidth","assetHeight","expandedWidth","expandedHeight","apiFramework","adSlotID","pxratio","renderingMode"]);
    this.childs.push(newElem);
    return newElem;
  }
}
class Creative_99 extends VastElement<Creatives_98> {
  public attachLinear(): Linear_100 {
    const newElem = new Linear_100('Linear', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachNonLinearAds(): NonLinearAds_116 {
    const newElem = new NonLinearAds_116('NonLinearAds', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachCompanionAds(attributes:[{"required":["all","any","none"]}]): CompanionAds_122 {
    const newElem = new CompanionAds_122('CompanionAds', this, {"attrs":["required"]}, attributes:[{"required":["all","any","none"]}]);
    this.childs.push(newElem);
    return newElem;
  }
}
class Creatives_98 extends VastElement<Wrapper_78> {
  public attachCreative(attributes:["id","sequence","adId"]): Creative_99 {
    const newElem = new Creative_99('Creative', this, {"attrs":["id","sequence","adId"]}, attributes:["id","sequence","adId"]);
    this.childs.push(newElem);
    return newElem;
  }
}
class Wrapper_78 extends VastElement<Ad_6> {
  public attachImpression(content, attributes): Impression_79 {
    const newElem = new Impression_79('Impression', this, {"attrs":["id"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addImpression(content, attributes): Wrapper_78 {
    return this.attachImpression(content, attributes).and();
  }
  public attachVASTAdTagURI(content): VASTAdTagURI_80 {
    const newElem = new VASTAdTagURI_80('VASTAdTagURI', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addVASTAdTagURI(content): Wrapper_78 {
    return this.attachVASTAdTagURI(content).and();
  }
  public attachAdSystem(content, attributes): AdSystem_81 {
    const newElem = new AdSystem_81('AdSystem', this, {"attrs":["version"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdSystem(content, attributes): Wrapper_78 {
    return this.attachAdSystem(content, attributes).and();
  }
  public attachPricing(content, attributes): Pricing_82 {
    const newElem = new Pricing_82('Pricing', this, {"attrs":["currency","model"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addPricing(content, attributes): Wrapper_78 {
    return this.attachPricing(content, attributes).and();
  }
  public attachError(content): Error_83 {
    const newElem = new Error_83('Error', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addError(content): Wrapper_78 {
    return this.attachError(content).and();
  }
  public attachViewableImpression(attributes:["id"]): ViewableImpression_84 {
    const newElem = new ViewableImpression_84('ViewableImpression', this, {"attrs":["id"]}, attributes:["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public attachAdVerifications(): AdVerifications_88 {
    const newElem = new AdVerifications_88('AdVerifications', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachExtensions(): Extensions_96 {
    const newElem = new Extensions_96('Extensions', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachCreatives(): Creatives_98 {
    const newElem = new Creatives_98('Creatives', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
}
class Ad_6 extends VastElement<VAST_4> {
  public attachInLine(): InLine_7 {
    const newElem = new InLine_7('InLine', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachWrapper(attributes:["followAdditonalWrappers","allowMultipleAds","fallbackOnNoAd"]): Wrapper_78 {
    const newElem = new Wrapper_78('Wrapper', this, {"attrs":["followAdditonalWrappers","allowMultipleAds","fallbackOnNoAd"]}, attributes:["followAdditonalWrappers","allowMultipleAds","fallbackOnNoAd"]);
    this.childs.push(newElem);
    return newElem;
  }
}
class VAST_4 extends VastElement<apiv4_1> {
  public attachError(content): Error_5 {
    const newElem = new Error_5('Error', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addError(content): VAST_4 {
    return this.attachError(content).and();
  }
  public attachAd(attributes:["id","sequence","conditionalAd","adType"]): Ad_6 {
    const newElem = new Ad_6('Ad', this, {"attrs":["id","sequence","conditionalAd","adType"]}, attributes:["id","sequence","conditionalAd","adType"]);
    this.childs.push(newElem);
    return newElem;
  }
}
class apiv4_1 extends VastElement<apiv4_1> {
  public attachVAST(attributes:[{"version":["4.1"]}]): VAST_4 {
    const newElem = new VAST_4('VAST', this, {"attrs":["version"]}, attributes:[{"version":["4.1"]}]);
    this.childs.push(newElem);
    return newElem;
  }
}


export const validator = {"only":{"VAST":{"alo":{"Ad":{"uniq":{"InLine":{"required":{"AdSystem":{},"AdTitle":{},"AdServingID":{},"Creatives":{"alo":{"Creative":{"required":{"UniversalAdId":{"attrsRequired":{"idRegistry":null}}},"uniq":{"Linear":{"required":{"Duration":{},"MediaFiles":{"alo":{"MediaFile":{"attrsRequired":{"delivery":["progressive","streaming"],"type":null,"width":null,"height":null}}},"follow":{"Mezzanine":{"attrsRequired":{"delivery":["progressive","streaming"],"type":null,"width":null,"height":null}},"InteractiveCreativeFile":{},"ClosedCaptionFiles":{"follow":{"ClosedCaptionFile":{}}}}}},"follow":{"AdParameters":{},"VideoClicks":{"follow":{"ClickThrough":{},"ClickTracking":{},"CustomClick":{}}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["loaded","start","firstQuartile","midpoint","thirdQuartile","complete","progress","closeLinear","otherAdInteraction","mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","notUsed"]}}}},"Icons":{"alo":{"Icon":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"IconClicks":{"follow":{"IconClickThrough":{},"IconClickTracking":{}}},"IconViewTracking":{}}}}}}},"NonLinearAds":{"follow":{"NonLinear":{"follow":{"NonLinearClickThrough":{},"NonLinearClickTracking":{}},"attrsRequired":{"width":null,"height":null}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView","acceptInvitation","adExpand","adCollapse","minimize","close","overlayViewDuration","otherAdInteraction","mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","notUsed"]}}}}}},"CompanionAds":{"follow":{"Companion":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"AdParameters":{},"AltText":{},"CompanionClickThrough":{},"CompanionClickTracking":{},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView"]}}}}},"attrsRequired":{"width":null,"height":null}}},"attrsRequired":{"required":["all","any","none"]}}},"follow":{"CreativeExtensions":{"follow":{"CreativeExtension":{}}}}}}}},"alo":{"Impression":{}},"follow":{"Category":{"attrsRequired":{"authority":null}},"Description":{},"Advertiser":{},"Pricing":{"attrsRequired":{"currency":null,"model":["CPM","CPC","CPE","CPV"]}},"Survey":{},"Error":{},"Expires":{},"ViewableImpression":{"follow":{"Viewable":{},"NotViewable":{},"ViewUndetermined":{}}},"AdVerifications":{"follow":{"Verification":{"follow":{"JavaScriptResource":{"attrsRequired":{"apiFramework":null,"browserOptional":null}},"ExecutableResource":{"attrsRequired":{"apiFramework":null}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["verificationNotExecuted"]}}}},"VerificationParameters":{}},"attrsRequired":{"vendor":null}}}},"Extensions":{"required":{"Extension":{}}}}},"Wrapper":{"required":{"VASTAdTagURI":{},"AdSystem":{}},"alo":{"Impression":{}},"follow":{"Pricing":{"attrsRequired":{"currency":null,"model":["CPM","CPC","CPE","CPV"]}},"Error":{},"ViewableImpression":{"follow":{"Viewable":{},"NotViewable":{},"ViewUndetermined":{}}},"AdVerifications":{"follow":{"Verification":{"follow":{"JavaScriptResource":{"attrsRequired":{"apiFramework":null,"browserOptional":null}},"ExecutableResource":{"attrsRequired":{"apiFramework":null}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["verificationNotExecuted"]}}}},"VerificationParameters":{},"BlockedAdCategories":{"attrsRequired":{"authority":null}}},"attrsRequired":{"vendor":null}}}},"Extensions":{"follow":{"Extension":{}}},"Creatives":{"follow":{"Creative":{"uniq":{"Linear":{"follow":{"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["loaded","start","firstQuartile","midpoint","thirdQuartile","complete","progress","closeLinear","otherAdInteraction","mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","notUsed"]}}}},"VideoClicks":{"follow":{"ClickTracking":{},"CustomClick":{}}},"Icons":{"alo":{"Icon":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"IconClicks":{"follow":{"IconClickThrough":{},"IconClickTracking":{}}},"IconViewTracking":{}}}}},"InteractiveCreativeFile":{}}},"NonLinearAds":{"follow":{"NonLinear":{"follow":{"NonLinearClickThrough":{},"NonLinearClickTracking":{}},"attrsRequired":{"width":null,"height":null}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView","acceptInvitation","adExpand","adCollapse","minimize","close","overlayViewDuration","otherAdInteraction","mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","notUsed"]}}}}}},"CompanionAds":{"follow":{"Companion":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"AdParameters":{},"AltText":{},"CompanionClickThrough":{},"CompanionClickTracking":{},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView"]}}}}},"attrsRequired":{"width":null,"height":null}}},"attrsRequired":{"required":["all","any","none"]}}}}}}}}}}},"follow":{"Error":{}},"attrsRequired":{"version":["4.1"]}}}};

export { apiv4_1 };