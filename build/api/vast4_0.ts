/* tslint:disable: class-name */

///////////////////////////////////////////////////////
//  IMPORTANT: this file is generated, dont edit it
/////////

import VastElement from '../../src/vast-element';

class Error_5 extends VastElement<VAST_4> {}
class AdSystem_8 extends VastElement<InLine_7> {}
class AdTitle_9 extends VastElement<InLine_7> {}
class Impression_10 extends VastElement<InLine_7> {}
class Category_11 extends VastElement<InLine_7> {}
class Description_12 extends VastElement<InLine_7> {}
class Advertiser_13 extends VastElement<InLine_7> {}
class Pricing_14 extends VastElement<InLine_7> {}
class Survey_15 extends VastElement<InLine_7> {}
class Error_16 extends VastElement<InLine_7> {}
class Viewable_18 extends VastElement<ViewableImpression_17> {}
class NotViewable_19 extends VastElement<ViewableImpression_17> {}
class ViewUndetermined_20 extends VastElement<ViewableImpression_17> {}
class ViewableImpression_17 extends VastElement<InLine_7> {
  public attachViewable(content): Viewable_18 {
    const newElem = new Viewable_18('Viewable', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addViewable(content): ViewableImpression_17 {
    return this.attachViewable(content).and();
  }
  public attachNotViewable(content): NotViewable_19 {
    const newElem = new NotViewable_19('NotViewable', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addNotViewable(content): ViewableImpression_17 {
    return this.attachNotViewable(content).and();
  }
  public attachViewUndetermined(content): ViewUndetermined_20 {
    const newElem = new ViewUndetermined_20('ViewUndetermined', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addViewUndetermined(content): ViewableImpression_17 {
    return this.attachViewUndetermined(content).and();
  }
}
class JavaScriptResource_23 extends VastElement<Verification_22> {}
class FlashResource_24 extends VastElement<Verification_22> {}
class ViewableImpression_25 extends VastElement<Verification_22> {}
class Verification_22 extends VastElement<AdVerifications_21> {
  public attachJavaScriptResource(content, attributes): JavaScriptResource_23 {
    const newElem = new JavaScriptResource_23('JavaScriptResource', this, {"attrs":["apiFramework"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addJavaScriptResource(content, attributes): Verification_22 {
    return this.attachJavaScriptResource(content, attributes).and();
  }
  public attachFlashResource(content, attributes): FlashResource_24 {
    const newElem = new FlashResource_24('FlashResource', this, {"attrs":["apiFramework"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addFlashResource(content, attributes): Verification_22 {
    return this.attachFlashResource(content, attributes).and();
  }
  public attachViewableImpression(content, attributes): ViewableImpression_25 {
    const newElem = new ViewableImpression_25('ViewableImpression', this, {"attrs":["id"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addViewableImpression(content, attributes): Verification_22 {
    return this.attachViewableImpression(content, attributes).and();
  }
}
class AdVerifications_21 extends VastElement<InLine_7> {
  public attachVerification(attributes:["vendor"]): Verification_22 {
    const newElem = new Verification_22('Verification', this, {"attrs":["vendor"]}, attributes:["vendor"]);
    this.childs.push(newElem);
    return newElem;
  }
}
class Extension_27 extends VastElement<Extensions_26> {}
class Extensions_26 extends VastElement<InLine_7> {
  public attachExtension(content, attributes): Extension_27 {
    const newElem = new Extension_27('Extension', this, {"attrs":["type"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addExtension(content, attributes): Extensions_26 {
    return this.attachExtension(content, attributes).and();
  }
}
class UniversalAdId_30 extends VastElement<Creative_29> {}
class CreativeExtension_32 extends VastElement<CreativeExtensions_31> {}
class CreativeExtensions_31 extends VastElement<Creative_29> {
  public attachCreativeExtension(content, attributes): CreativeExtension_32 {
    const newElem = new CreativeExtension_32('CreativeExtension', this, {"attrs":["type"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addCreativeExtension(content, attributes): CreativeExtensions_31 {
    return this.attachCreativeExtension(content, attributes).and();
  }
}
class Duration_34 extends VastElement<Linear_33> {}
class AdParameters_35 extends VastElement<Linear_33> {}
class Mezzanine_37 extends VastElement<MediaFiles_36> {}
class MediaFile_38 extends VastElement<MediaFiles_36> {}
class InteractiveCreativeFile_39 extends VastElement<MediaFiles_36> {}
class MediaFiles_36 extends VastElement<Linear_33> {
  public attachMezzanine(content): Mezzanine_37 {
    const newElem = new Mezzanine_37('Mezzanine', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addMezzanine(content): MediaFiles_36 {
    return this.attachMezzanine(content).and();
  }
  public attachMediaFile(content, attributes): MediaFile_38 {
    const newElem = new MediaFile_38('MediaFile', this, {"attrs":["id","delivery","type","bitrate","minBitrate","maxBitrate","width","height","scalable","mantainAspectRatio","codec","apiFramework"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addMediaFile(content, attributes): MediaFiles_36 {
    return this.attachMediaFile(content, attributes).and();
  }
  public attachInteractiveCreativeFile(content): InteractiveCreativeFile_39 {
    const newElem = new InteractiveCreativeFile_39('InteractiveCreativeFile', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addInteractiveCreativeFile(content): MediaFiles_36 {
    return this.attachInteractiveCreativeFile(content).and();
  }
}
class ClickThrough_41 extends VastElement<VideoClicks_40> {}
class ClickTracking_42 extends VastElement<VideoClicks_40> {}
class CustomClick_43 extends VastElement<VideoClicks_40> {}
class VideoClicks_40 extends VastElement<Linear_33> {
  public attachClickThrough(content, attributes): ClickThrough_41 {
    const newElem = new ClickThrough_41('ClickThrough', this, {"attrs":["id"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addClickThrough(content, attributes): VideoClicks_40 {
    return this.attachClickThrough(content, attributes).and();
  }
  public attachClickTracking(content, attributes): ClickTracking_42 {
    const newElem = new ClickTracking_42('ClickTracking', this, {"attrs":["id"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addClickTracking(content, attributes): VideoClicks_40 {
    return this.attachClickTracking(content, attributes).and();
  }
  public attachCustomClick(content, attributes): CustomClick_43 {
    const newElem = new CustomClick_43('CustomClick', this, {"attrs":["id"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addCustomClick(content, attributes): VideoClicks_40 {
    return this.attachCustomClick(content, attributes).and();
  }
}
class Tracking_45 extends VastElement<TrackingEvents_44> {}
class TrackingEvents_44 extends VastElement<Linear_33> {
  public attachTracking(content, attributes): Tracking_45 {
    const newElem = new Tracking_45('Tracking', this, {"attrs":["offset","event"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content, attributes): TrackingEvents_44 {
    return this.attachTracking(content, attributes).and();
  }
}
class StaticResource_48 extends VastElement<Icon_47> {}
class IFrameResource_49 extends VastElement<Icon_47> {}
class HTMLResource_50 extends VastElement<Icon_47> {}
class IconClickThrough_52 extends VastElement<IconClicks_51> {}
class IconClickTracking_53 extends VastElement<IconClicks_51> {}
class IconClicks_51 extends VastElement<Icon_47> {
  public attachIconClickThrough(content): IconClickThrough_52 {
    const newElem = new IconClickThrough_52('IconClickThrough', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addIconClickThrough(content): IconClicks_51 {
    return this.attachIconClickThrough(content).and();
  }
  public attachIconClickTracking(content, attributes): IconClickTracking_53 {
    const newElem = new IconClickTracking_53('IconClickTracking', this, {"attrs":["id"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addIconClickTracking(content, attributes): IconClicks_51 {
    return this.attachIconClickTracking(content, attributes).and();
  }
}
class IconViewTracking_54 extends VastElement<Icon_47> {}
class Icon_47 extends VastElement<Icons_46> {
  public attachStaticResource(content, attributes): StaticResource_48 {
    const newElem = new StaticResource_48('StaticResource', this, {"attrs":["creativeType"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(content, attributes): Icon_47 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content): IFrameResource_49 {
    const newElem = new IFrameResource_49('IFrameResource', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content): Icon_47 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content): HTMLResource_50 {
    const newElem = new HTMLResource_50('HTMLResource', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content): Icon_47 {
    return this.attachHTMLResource(content).and();
  }
  public attachIconClicks(): IconClicks_51 {
    const newElem = new IconClicks_51('IconClicks', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachIconViewTracking(content): IconViewTracking_54 {
    const newElem = new IconViewTracking_54('IconViewTracking', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addIconViewTracking(content): Icon_47 {
    return this.attachIconViewTracking(content).and();
  }
}
class Icons_46 extends VastElement<Linear_33> {
  public attachIcon(attributes:["program","width","height","xPosition","yPosition","duration","offset","apiFramework","pxratio"]): Icon_47 {
    const newElem = new Icon_47('Icon', this, {"attrs":["program","width","height","xPosition","yPosition","duration","offset","apiFramework","pxratio"]}, attributes:["program","width","height","xPosition","yPosition","duration","offset","apiFramework","pxratio"]);
    this.childs.push(newElem);
    return newElem;
  }
}
class Linear_33 extends VastElement<Creative_29> {
  public attachDuration(content): Duration_34 {
    const newElem = new Duration_34('Duration', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addDuration(content): Linear_33 {
    return this.attachDuration(content).and();
  }
  public attachAdParameters(content, attributes): AdParameters_35 {
    const newElem = new AdParameters_35('AdParameters', this, {"attrs":["xmlEncoded"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdParameters(content, attributes): Linear_33 {
    return this.attachAdParameters(content, attributes).and();
  }
  public attachMediaFiles(): MediaFiles_36 {
    const newElem = new MediaFiles_36('MediaFiles', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachVideoClicks(): VideoClicks_40 {
    const newElem = new VideoClicks_40('VideoClicks', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachTrackingEvents(): TrackingEvents_44 {
    const newElem = new TrackingEvents_44('TrackingEvents', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachIcons(): Icons_46 {
    const newElem = new Icons_46('Icons', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
}
class NonLinearClickThrough_57 extends VastElement<NonLinear_56> {}
class NonLinearClickTracking_58 extends VastElement<NonLinear_56> {}
class NonLinear_56 extends VastElement<NonLinearAds_55> {
  public attachNonLinearClickThrough(content): NonLinearClickThrough_57 {
    const newElem = new NonLinearClickThrough_57('NonLinearClickThrough', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addNonLinearClickThrough(content): NonLinear_56 {
    return this.attachNonLinearClickThrough(content).and();
  }
  public attachNonLinearClickTracking(content): NonLinearClickTracking_58 {
    const newElem = new NonLinearClickTracking_58('NonLinearClickTracking', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addNonLinearClickTracking(content): NonLinear_56 {
    return this.attachNonLinearClickTracking(content).and();
  }
}
class Tracking_60 extends VastElement<TrackingEvents_59> {}
class TrackingEvents_59 extends VastElement<NonLinearAds_55> {
  public attachTracking(content, attributes): Tracking_60 {
    const newElem = new Tracking_60('Tracking', this, {"attrs":["event"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content, attributes): TrackingEvents_59 {
    return this.attachTracking(content, attributes).and();
  }
}
class NonLinearAds_55 extends VastElement<Creative_29> {
  public attachNonLinear(attributes:["id",{"width":null},{"height":null},"expandedWidth","expandedHeight","scalable","maintainAspectRatio","minSuggestedDuration","apiFramework"]): NonLinear_56 {
    const newElem = new NonLinear_56('NonLinear', this, {"attrs":["id","width","height","expandedWidth","expandedHeight","scalable","maintainAspectRatio","minSuggestedDuration","apiFramework"]}, attributes:["id",{"width":null},{"height":null},"expandedWidth","expandedHeight","scalable","maintainAspectRatio","minSuggestedDuration","apiFramework"]);
    this.childs.push(newElem);
    return newElem;
  }
  public attachTrackingEvents(): TrackingEvents_59 {
    const newElem = new TrackingEvents_59('TrackingEvents', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
}
class StaticResource_63 extends VastElement<Companion_62> {}
class IFrameResource_64 extends VastElement<Companion_62> {}
class HTMLResource_65 extends VastElement<Companion_62> {}
class AdParameters_66 extends VastElement<Companion_62> {}
class AltText_67 extends VastElement<Companion_62> {}
class CompanionClickThrough_68 extends VastElement<Companion_62> {}
class CompanionClickTracking_69 extends VastElement<Companion_62> {}
class Tracking_71 extends VastElement<TrackingEvents_70> {}
class TrackingEvents_70 extends VastElement<Companion_62> {
  public attachTracking(content, attributes): Tracking_71 {
    const newElem = new Tracking_71('Tracking', this, {"attrs":["event"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content, attributes): TrackingEvents_70 {
    return this.attachTracking(content, attributes).and();
  }
}
class Companion_62 extends VastElement<CompanionAds_61> {
  public attachStaticResource(content, attributes): StaticResource_63 {
    const newElem = new StaticResource_63('StaticResource', this, {"attrs":["creativeType"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(content, attributes): Companion_62 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content): IFrameResource_64 {
    const newElem = new IFrameResource_64('IFrameResource', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content): Companion_62 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content): HTMLResource_65 {
    const newElem = new HTMLResource_65('HTMLResource', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content): Companion_62 {
    return this.attachHTMLResource(content).and();
  }
  public attachAdParameters(content, attributes): AdParameters_66 {
    const newElem = new AdParameters_66('AdParameters', this, {"attrs":["xmlEncoded"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdParameters(content, attributes): Companion_62 {
    return this.attachAdParameters(content, attributes).and();
  }
  public attachAltText(content): AltText_67 {
    const newElem = new AltText_67('AltText', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addAltText(content): Companion_62 {
    return this.attachAltText(content).and();
  }
  public attachCompanionClickThrough(content): CompanionClickThrough_68 {
    const newElem = new CompanionClickThrough_68('CompanionClickThrough', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addCompanionClickThrough(content): Companion_62 {
    return this.attachCompanionClickThrough(content).and();
  }
  public attachCompanionClickTracking(content, attributes): CompanionClickTracking_69 {
    const newElem = new CompanionClickTracking_69('CompanionClickTracking', this, {"attrs":["id"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addCompanionClickTracking(content, attributes): Companion_62 {
    return this.attachCompanionClickTracking(content, attributes).and();
  }
  public attachTrackingEvents(): TrackingEvents_70 {
    const newElem = new TrackingEvents_70('TrackingEvents', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
}
class CompanionAds_61 extends VastElement<Creative_29> {
  public attachCompanion(attributes:["id",{"width":null},{"height":null},"assetWidth","assetHeight","expandedWidth","expandedHeight","apiFramework","adSlotID","pxratio"]): Companion_62 {
    const newElem = new Companion_62('Companion', this, {"attrs":["id","width","height","assetWidth","assetHeight","expandedWidth","expandedHeight","apiFramework","adSlotID","pxratio"]}, attributes:["id",{"width":null},{"height":null},"assetWidth","assetHeight","expandedWidth","expandedHeight","apiFramework","adSlotID","pxratio"]);
    this.childs.push(newElem);
    return newElem;
  }
}
class Creative_29 extends VastElement<Creatives_28> {
  public attachUniversalAdId(content, attributes): UniversalAdId_30 {
    const newElem = new UniversalAdId_30('UniversalAdId', this, {"attrs":["idRegistry","idValue"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addUniversalAdId(content, attributes): Creative_29 {
    return this.attachUniversalAdId(content, attributes).and();
  }
  public attachCreativeExtensions(): CreativeExtensions_31 {
    const newElem = new CreativeExtensions_31('CreativeExtensions', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachLinear(attributes:["skipoffset"]): Linear_33 {
    const newElem = new Linear_33('Linear', this, {"attrs":["skipoffset"]}, attributes:["skipoffset"]);
    this.childs.push(newElem);
    return newElem;
  }
  public attachNonLinearAds(): NonLinearAds_55 {
    const newElem = new NonLinearAds_55('NonLinearAds', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachCompanionAds(attributes:[{"required":["all","any","none"]}]): CompanionAds_61 {
    const newElem = new CompanionAds_61('CompanionAds', this, {"attrs":["required"]}, attributes:[{"required":["all","any","none"]}]);
    this.childs.push(newElem);
    return newElem;
  }
}
class Creatives_28 extends VastElement<InLine_7> {
  public attachCreative(attributes:["id","sequence","adId","apiFramework"]): Creative_29 {
    const newElem = new Creative_29('Creative', this, {"attrs":["id","sequence","adId","apiFramework"]}, attributes:["id","sequence","adId","apiFramework"]);
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
  public attachCategory(content, attributes): Category_11 {
    const newElem = new Category_11('Category', this, {"attrs":["authority"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addCategory(content, attributes): InLine_7 {
    return this.attachCategory(content, attributes).and();
  }
  public attachDescription(content): Description_12 {
    const newElem = new Description_12('Description', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addDescription(content): InLine_7 {
    return this.attachDescription(content).and();
  }
  public attachAdvertiser(content): Advertiser_13 {
    const newElem = new Advertiser_13('Advertiser', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdvertiser(content): InLine_7 {
    return this.attachAdvertiser(content).and();
  }
  public attachPricing(content, attributes): Pricing_14 {
    const newElem = new Pricing_14('Pricing', this, {"attrs":["currency","model"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addPricing(content, attributes): InLine_7 {
    return this.attachPricing(content, attributes).and();
  }
  public attachSurvey(content, attributes): Survey_15 {
    const newElem = new Survey_15('Survey', this, {"attrs":["type"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addSurvey(content, attributes): InLine_7 {
    return this.attachSurvey(content, attributes).and();
  }
  public attachError(content): Error_16 {
    const newElem = new Error_16('Error', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addError(content): InLine_7 {
    return this.attachError(content).and();
  }
  public attachViewableImpression(attributes:["id"]): ViewableImpression_17 {
    const newElem = new ViewableImpression_17('ViewableImpression', this, {"attrs":["id"]}, attributes:["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public attachAdVerifications(): AdVerifications_21 {
    const newElem = new AdVerifications_21('AdVerifications', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachExtensions(): Extensions_26 {
    const newElem = new Extensions_26('Extensions', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachCreatives(): Creatives_28 {
    const newElem = new Creatives_28('Creatives', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
}
class Impression_73 extends VastElement<Wrapper_72> {}
class VASTAdTagURI_74 extends VastElement<Wrapper_72> {}
class AdSystem_75 extends VastElement<Wrapper_72> {}
class Pricing_76 extends VastElement<Wrapper_72> {}
class Error_77 extends VastElement<Wrapper_72> {}
class Viewable_79 extends VastElement<ViewableImpression_78> {}
class NotViewable_80 extends VastElement<ViewableImpression_78> {}
class ViewUndetermined_81 extends VastElement<ViewableImpression_78> {}
class ViewableImpression_78 extends VastElement<Wrapper_72> {
  public attachViewable(content): Viewable_79 {
    const newElem = new Viewable_79('Viewable', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addViewable(content): ViewableImpression_78 {
    return this.attachViewable(content).and();
  }
  public attachNotViewable(content): NotViewable_80 {
    const newElem = new NotViewable_80('NotViewable', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addNotViewable(content): ViewableImpression_78 {
    return this.attachNotViewable(content).and();
  }
  public attachViewUndetermined(content): ViewUndetermined_81 {
    const newElem = new ViewUndetermined_81('ViewUndetermined', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addViewUndetermined(content): ViewableImpression_78 {
    return this.attachViewUndetermined(content).and();
  }
}
class ViewableImpression_84 extends VastElement<Verification_83> {}
class Verification_83 extends VastElement<AdVerifications_82> {
  public attachViewableImpression(content, attributes): ViewableImpression_84 {
    const newElem = new ViewableImpression_84('ViewableImpression', this, {"attrs":["id"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addViewableImpression(content, attributes): Verification_83 {
    return this.attachViewableImpression(content, attributes).and();
  }
}
class AdVerifications_82 extends VastElement<Wrapper_72> {
  public attachVerification(attributes:["vendor"]): Verification_83 {
    const newElem = new Verification_83('Verification', this, {"attrs":["vendor"]}, attributes:["vendor"]);
    this.childs.push(newElem);
    return newElem;
  }
}
class Extension_86 extends VastElement<Extensions_85> {}
class Extensions_85 extends VastElement<Wrapper_72> {
  public attachExtension(content, attributes): Extension_86 {
    const newElem = new Extension_86('Extension', this, {"attrs":["type"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addExtension(content, attributes): Extensions_85 {
    return this.attachExtension(content, attributes).and();
  }
}
class Tracking_91 extends VastElement<TrackingEvents_90> {}
class TrackingEvents_90 extends VastElement<Linear_89> {
  public attachTracking(content, attributes): Tracking_91 {
    const newElem = new Tracking_91('Tracking', this, {"attrs":["offset","event"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content, attributes): TrackingEvents_90 {
    return this.attachTracking(content, attributes).and();
  }
}
class ClickTracking_93 extends VastElement<VideoClicks_92> {}
class CustomClick_94 extends VastElement<VideoClicks_92> {}
class VideoClicks_92 extends VastElement<Linear_89> {
  public attachClickTracking(content, attributes): ClickTracking_93 {
    const newElem = new ClickTracking_93('ClickTracking', this, {"attrs":["id"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addClickTracking(content, attributes): VideoClicks_92 {
    return this.attachClickTracking(content, attributes).and();
  }
  public attachCustomClick(content, attributes): CustomClick_94 {
    const newElem = new CustomClick_94('CustomClick', this, {"attrs":["id"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addCustomClick(content, attributes): VideoClicks_92 {
    return this.attachCustomClick(content, attributes).and();
  }
}
class StaticResource_97 extends VastElement<Icon_96> {}
class IFrameResource_98 extends VastElement<Icon_96> {}
class HTMLResource_99 extends VastElement<Icon_96> {}
class IconClickThrough_101 extends VastElement<IconClicks_100> {}
class IconClickTracking_102 extends VastElement<IconClicks_100> {}
class IconClicks_100 extends VastElement<Icon_96> {
  public attachIconClickThrough(content): IconClickThrough_101 {
    const newElem = new IconClickThrough_101('IconClickThrough', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addIconClickThrough(content): IconClicks_100 {
    return this.attachIconClickThrough(content).and();
  }
  public attachIconClickTracking(content): IconClickTracking_102 {
    const newElem = new IconClickTracking_102('IconClickTracking', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addIconClickTracking(content): IconClicks_100 {
    return this.attachIconClickTracking(content).and();
  }
}
class IconViewTracking_103 extends VastElement<Icon_96> {}
class Icon_96 extends VastElement<Icons_95> {
  public attachStaticResource(content, attributes): StaticResource_97 {
    const newElem = new StaticResource_97('StaticResource', this, {"attrs":["creativeType"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(content, attributes): Icon_96 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content): IFrameResource_98 {
    const newElem = new IFrameResource_98('IFrameResource', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content): Icon_96 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content): HTMLResource_99 {
    const newElem = new HTMLResource_99('HTMLResource', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content): Icon_96 {
    return this.attachHTMLResource(content).and();
  }
  public attachIconClicks(): IconClicks_100 {
    const newElem = new IconClicks_100('IconClicks', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachIconViewTracking(content): IconViewTracking_103 {
    const newElem = new IconViewTracking_103('IconViewTracking', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addIconViewTracking(content): Icon_96 {
    return this.attachIconViewTracking(content).and();
  }
}
class Icons_95 extends VastElement<Linear_89> {
  public attachIcon(attributes:["program","width","height","xPosition","yPosition","duration","offset","apiFramework","pxratio"]): Icon_96 {
    const newElem = new Icon_96('Icon', this, {"attrs":["program","width","height","xPosition","yPosition","duration","offset","apiFramework","pxratio"]}, attributes:["program","width","height","xPosition","yPosition","duration","offset","apiFramework","pxratio"]);
    this.childs.push(newElem);
    return newElem;
  }
}
class InteractiveCreativeFile_104 extends VastElement<Linear_89> {}
class Linear_89 extends VastElement<Creative_88> {
  public attachTrackingEvents(): TrackingEvents_90 {
    const newElem = new TrackingEvents_90('TrackingEvents', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachVideoClicks(): VideoClicks_92 {
    const newElem = new VideoClicks_92('VideoClicks', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachIcons(): Icons_95 {
    const newElem = new Icons_95('Icons', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachInteractiveCreativeFile(content): InteractiveCreativeFile_104 {
    const newElem = new InteractiveCreativeFile_104('InteractiveCreativeFile', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addInteractiveCreativeFile(content): Linear_89 {
    return this.attachInteractiveCreativeFile(content).and();
  }
}
class NonLinearClickThrough_107 extends VastElement<NonLinear_106> {}
class NonLinearClickTracking_108 extends VastElement<NonLinear_106> {}
class NonLinear_106 extends VastElement<NonLinearAds_105> {
  public attachNonLinearClickThrough(content): NonLinearClickThrough_107 {
    const newElem = new NonLinearClickThrough_107('NonLinearClickThrough', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addNonLinearClickThrough(content): NonLinear_106 {
    return this.attachNonLinearClickThrough(content).and();
  }
  public attachNonLinearClickTracking(content): NonLinearClickTracking_108 {
    const newElem = new NonLinearClickTracking_108('NonLinearClickTracking', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addNonLinearClickTracking(content): NonLinear_106 {
    return this.attachNonLinearClickTracking(content).and();
  }
}
class Tracking_110 extends VastElement<TrackingEvents_109> {}
class TrackingEvents_109 extends VastElement<NonLinearAds_105> {
  public attachTracking(content, attributes): Tracking_110 {
    const newElem = new Tracking_110('Tracking', this, {"attrs":["event"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content, attributes): TrackingEvents_109 {
    return this.attachTracking(content, attributes).and();
  }
}
class NonLinearAds_105 extends VastElement<Creative_88> {
  public attachNonLinear(attributes:["id",{"width":null},{"height":null},"expandedWidth","expandedHeight","scalable","maintainAspectRatio","minSuggestedDuration","apiFramework"]): NonLinear_106 {
    const newElem = new NonLinear_106('NonLinear', this, {"attrs":["id","width","height","expandedWidth","expandedHeight","scalable","maintainAspectRatio","minSuggestedDuration","apiFramework"]}, attributes:["id",{"width":null},{"height":null},"expandedWidth","expandedHeight","scalable","maintainAspectRatio","minSuggestedDuration","apiFramework"]);
    this.childs.push(newElem);
    return newElem;
  }
  public attachTrackingEvents(): TrackingEvents_109 {
    const newElem = new TrackingEvents_109('TrackingEvents', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
}
class StaticResource_113 extends VastElement<Companion_112> {}
class IFrameResource_114 extends VastElement<Companion_112> {}
class HTMLResource_115 extends VastElement<Companion_112> {}
class AdParameters_116 extends VastElement<Companion_112> {}
class AltText_117 extends VastElement<Companion_112> {}
class CompanionClickThrough_118 extends VastElement<Companion_112> {}
class CompanionClickTracking_119 extends VastElement<Companion_112> {}
class Tracking_121 extends VastElement<TrackingEvents_120> {}
class TrackingEvents_120 extends VastElement<Companion_112> {
  public attachTracking(content, attributes): Tracking_121 {
    const newElem = new Tracking_121('Tracking', this, {"attrs":["event"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content, attributes): TrackingEvents_120 {
    return this.attachTracking(content, attributes).and();
  }
}
class Companion_112 extends VastElement<CompanionAds_111> {
  public attachStaticResource(content, attributes): StaticResource_113 {
    const newElem = new StaticResource_113('StaticResource', this, {"attrs":["creativeType"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(content, attributes): Companion_112 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content): IFrameResource_114 {
    const newElem = new IFrameResource_114('IFrameResource', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content): Companion_112 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content): HTMLResource_115 {
    const newElem = new HTMLResource_115('HTMLResource', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content): Companion_112 {
    return this.attachHTMLResource(content).and();
  }
  public attachAdParameters(content, attributes): AdParameters_116 {
    const newElem = new AdParameters_116('AdParameters', this, {"attrs":["xmlEncoded"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdParameters(content, attributes): Companion_112 {
    return this.attachAdParameters(content, attributes).and();
  }
  public attachAltText(content): AltText_117 {
    const newElem = new AltText_117('AltText', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addAltText(content): Companion_112 {
    return this.attachAltText(content).and();
  }
  public attachCompanionClickThrough(content): CompanionClickThrough_118 {
    const newElem = new CompanionClickThrough_118('CompanionClickThrough', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addCompanionClickThrough(content): Companion_112 {
    return this.attachCompanionClickThrough(content).and();
  }
  public attachCompanionClickTracking(content, attributes): CompanionClickTracking_119 {
    const newElem = new CompanionClickTracking_119('CompanionClickTracking', this, {"attrs":["id"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addCompanionClickTracking(content, attributes): Companion_112 {
    return this.attachCompanionClickTracking(content, attributes).and();
  }
  public attachTrackingEvents(): TrackingEvents_120 {
    const newElem = new TrackingEvents_120('TrackingEvents', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
}
class CompanionAds_111 extends VastElement<Creative_88> {
  public attachCompanion(attributes:["id",{"width":null},{"height":null},"assetWidth","assetHeight","expandedWidth","expandedHeight","apiFramework","adSlotID","logoTile","logoTitle","logoArtist","logoURL","pxratio"]): Companion_112 {
    const newElem = new Companion_112('Companion', this, {"attrs":["id","width","height","assetWidth","assetHeight","expandedWidth","expandedHeight","apiFramework","adSlotID","logoTile","logoTitle","logoArtist","logoURL","pxratio"]}, attributes:["id",{"width":null},{"height":null},"assetWidth","assetHeight","expandedWidth","expandedHeight","apiFramework","adSlotID","logoTile","logoTitle","logoArtist","logoURL","pxratio"]);
    this.childs.push(newElem);
    return newElem;
  }
}
class Creative_88 extends VastElement<Creatives_87> {
  public attachLinear(): Linear_89 {
    const newElem = new Linear_89('Linear', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachNonLinearAds(): NonLinearAds_105 {
    const newElem = new NonLinearAds_105('NonLinearAds', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachCompanionAds(attributes:[{"required":["all","any","none"]}]): CompanionAds_111 {
    const newElem = new CompanionAds_111('CompanionAds', this, {"attrs":["required"]}, attributes:[{"required":["all","any","none"]}]);
    this.childs.push(newElem);
    return newElem;
  }
}
class Creatives_87 extends VastElement<Wrapper_72> {
  public attachCreative(attributes:["id","sequence","adId"]): Creative_88 {
    const newElem = new Creative_88('Creative', this, {"attrs":["id","sequence","adId"]}, attributes:["id","sequence","adId"]);
    this.childs.push(newElem);
    return newElem;
  }
}
class Wrapper_72 extends VastElement<Ad_6> {
  public attachImpression(content, attributes): Impression_73 {
    const newElem = new Impression_73('Impression', this, {"attrs":["id"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addImpression(content, attributes): Wrapper_72 {
    return this.attachImpression(content, attributes).and();
  }
  public attachVASTAdTagURI(content): VASTAdTagURI_74 {
    const newElem = new VASTAdTagURI_74('VASTAdTagURI', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addVASTAdTagURI(content): Wrapper_72 {
    return this.attachVASTAdTagURI(content).and();
  }
  public attachAdSystem(content, attributes): AdSystem_75 {
    const newElem = new AdSystem_75('AdSystem', this, {"attrs":["version"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdSystem(content, attributes): Wrapper_72 {
    return this.attachAdSystem(content, attributes).and();
  }
  public attachPricing(content, attributes): Pricing_76 {
    const newElem = new Pricing_76('Pricing', this, {"attrs":["currency","model"]}, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public addPricing(content, attributes): Wrapper_72 {
    return this.attachPricing(content, attributes).and();
  }
  public attachError(content): Error_77 {
    const newElem = new Error_77('Error', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addError(content): Wrapper_72 {
    return this.attachError(content).and();
  }
  public attachViewableImpression(attributes:["id"]): ViewableImpression_78 {
    const newElem = new ViewableImpression_78('ViewableImpression', this, {"attrs":["id"]}, attributes:["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public attachAdVerifications(): AdVerifications_82 {
    const newElem = new AdVerifications_82('AdVerifications', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachExtensions(): Extensions_85 {
    const newElem = new Extensions_85('Extensions', this, {} );
    this.childs.push(newElem);
    return newElem;
  }
  public attachCreatives(): Creatives_87 {
    const newElem = new Creatives_87('Creatives', this, {} );
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
  public attachWrapper(attributes:["followAdditonalWrappers","allowMultipleAds","fallbackOnNoAd"]): Wrapper_72 {
    const newElem = new Wrapper_72('Wrapper', this, {"attrs":["followAdditonalWrappers","allowMultipleAds","fallbackOnNoAd"]}, attributes:["followAdditonalWrappers","allowMultipleAds","fallbackOnNoAd"]);
    this.childs.push(newElem);
    return newElem;
  }
}
class VAST_4 extends VastElement<apiv4> {
  public attachError(content): Error_5 {
    const newElem = new Error_5('Error', this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addError(content): VAST_4 {
    return this.attachError(content).and();
  }
  public attachAd(attributes:["id","sequence","conditionalAd"]): Ad_6 {
    const newElem = new Ad_6('Ad', this, {"attrs":["id","sequence","conditionalAd"]}, attributes:["id","sequence","conditionalAd"]);
    this.childs.push(newElem);
    return newElem;
  }
}
class apiv4 extends VastElement<apiv4> {
  public attachVAST(attributes:[{"version":["4.0"]}]): VAST_4 {
    const newElem = new VAST_4('VAST', this, {"attrs":["version"]}, attributes:[{"version":["4.0"]}]);
    this.childs.push(newElem);
    return newElem;
  }
}


export const validator = {"only":{"VAST":{"alo":{"Ad":{"uniq":{"InLine":{"required":{"AdSystem":{},"AdTitle":{},"Creatives":{"alo":{"Creative":{"required":{"UniversalAdId":{"attrsRequired":{"idRegistry":null,"idValue":null}}},"uniq":{"Linear":{"required":{"Duration":{},"MediaFiles":{"alo":{"MediaFile":{"attrsRequired":{"delivery":["progressive","streaming"],"type":null,"width":null,"height":null}}},"follow":{"Mezzanine":{},"InteractiveCreativeFile":{}}}},"follow":{"AdParameters":{},"VideoClicks":{"follow":{"ClickThrough":{},"ClickTracking":{},"CustomClick":{}}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","otherAdInteraction","start","firstQuartile","midpoint","thirdQuartile","complete","acceptInvitationLinear","timeSpentViewing","progress"]}}}},"Icons":{"alo":{"Icon":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"IconClicks":{"follow":{"IconClickThrough":{},"IconClickTracking":{}}},"IconViewTracking":{}}}}}}},"NonLinearAds":{"follow":{"NonLinear":{"follow":{"NonLinearClickThrough":{},"NonLinearClickTracking":{}},"attrsRequired":{"width":null,"height":null}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","otherAdInteraction","creativeView","acceptInvitation","adExpand","adCollapse","minimize","close","overlayViewDuration"]}}}}}},"CompanionAds":{"follow":{"Companion":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"AdParameters":{},"AltText":{},"CompanionClickThrough":{},"CompanionClickTracking":{},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView"]}}}}},"attrsRequired":{"width":null,"height":null}}},"attrsRequired":{"required":["all","any","none"]}}},"follow":{"CreativeExtensions":{"follow":{"CreativeExtension":{}}}}}}}},"alo":{"Impression":{}},"follow":{"Category":{"attrsRequired":{"authority":null}},"Description":{},"Advertiser":{},"Pricing":{"attrsRequired":{"currency":null,"model":["CPM","CPC","CPE","CPV"]}},"Survey":{},"Error":{},"ViewableImpression":{"follow":{"Viewable":{},"NotViewable":{},"ViewUndetermined":{}}},"AdVerifications":{"follow":{"Verification":{"follow":{"JavaScriptResource":{},"FlashResource":{},"ViewableImpression":{}}}}},"Extensions":{"required":{"Extension":{}}}}},"Wrapper":{"required":{"VASTAdTagURI":{},"AdSystem":{}},"alo":{"Impression":{}},"follow":{"Pricing":{"attrsRequired":{"currency":null,"model":["CPM","CPC","CPE","CPV"]}},"Error":{},"ViewableImpression":{"follow":{"Viewable":{},"NotViewable":{},"ViewUndetermined":{}}},"AdVerifications":{"follow":{"Verification":{"follow":{"ViewableImpression":{}}}}},"Extensions":{"follow":{"Extension":{}}},"Creatives":{"follow":{"Creative":{"uniq":{"Linear":{"follow":{"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","otherAdInteraction","start","firstQuartile","midpoint","thirdQuartile","complete","acceptInvitationLinear","timeSpentViewing","progress"]}}}},"VideoClicks":{"follow":{"ClickTracking":{},"CustomClick":{}}},"Icons":{"alo":{"Icon":{"follow":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{},"IconClicks":{"follow":{"IconClickThrough":{},"IconClickTracking":{}}},"IconViewTracking":{}}}}},"InteractiveCreativeFile":{}}},"NonLinearAds":{"follow":{"NonLinear":{"follow":{"NonLinearClickThrough":{},"NonLinearClickTracking":{}},"attrsRequired":{"width":null,"height":null}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","otherAdInteraction","creativeView","acceptInvitation","adExpand","adCollapse","minimize","close","overlayViewDuration"]}}}}}},"CompanionAds":{"follow":{"Companion":{"follow":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{},"AdParameters":{},"AltText":{},"CompanionClickThrough":{},"CompanionClickTracking":{},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView"]}}}}},"attrsRequired":{"width":null,"height":null}}},"attrsRequired":{"required":["all","any","none"]}}}}}}}}}}},"follow":{"Error":{}},"attrsRequired":{"version":["4.0"]}}}};

export { apiv4 };
