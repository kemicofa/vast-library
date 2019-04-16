
// this file is generated, dont edit it

/* tslint:disable: class-name */
import VastElement from '../../src/vast-element';

interface VastInfos {
  attrs?: Array<string>;
  required?: boolean;
  uniq?: boolean;
  alo?: boolean;
};


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
      
  public attachViewable(content: string): Viewable_18 {
    const newElem = new Viewable_18('Viewable', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addViewable(content: string): this {
    return this.attachViewable(content: string).and();
  }
  public attachNotViewable(content: string): NotViewable_19 {
    const newElem = new NotViewable_19('NotViewable', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addNotViewable(content: string): this {
    return this.attachNotViewable(content: string).and();
  }
  public attachViewUndetermined(content: string): ViewUndetermined_20 {
    const newElem = new ViewUndetermined_20('ViewUndetermined', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addViewUndetermined(content: string): this {
    return this.attachViewUndetermined(content: string).and();
  }
    }
class JavaScriptResource_23 extends VastElement<Verification_22> {}
class FlashResource_24 extends VastElement<Verification_22> {}
class ViewableImpression_25 extends VastElement<Verification_22> {}
class Verification_22 extends VastElement<AdVerifications_21> {
      
  public attachJavaScriptResource(content: string, attributes :["apiFramework"]): JavaScriptResource_23 {
    const newElem = new JavaScriptResource_23('JavaScriptResource', this, {"attrs":["apiFramework"]} : VastInfos, content: string, attributes :["apiFramework"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addJavaScriptResource(content: string, attributes :["apiFramework"]): this {
    return this.attachJavaScriptResource(content: string, attributes :["apiFramework"]).and();
  }
  public attachFlashResource(content: string, attributes :["apiFramework"]): FlashResource_24 {
    const newElem = new FlashResource_24('FlashResource', this, {"attrs":["apiFramework"]} : VastInfos, content: string, attributes :["apiFramework"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addFlashResource(content: string, attributes :["apiFramework"]): this {
    return this.attachFlashResource(content: string, attributes :["apiFramework"]).and();
  }
  public attachViewableImpression(content: string, attributes :["id"]): ViewableImpression_25 {
    const newElem = new ViewableImpression_25('ViewableImpression', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addViewableImpression(content: string, attributes :["id"]): this {
    return this.attachViewableImpression(content: string, attributes :["id"]).and();
  }
    }
class AdVerifications_21 extends VastElement<InLine_7> {
      
  public attachVerification(attributes): Verification_22 {
    const newElem = new Verification_22('Verification', this, {"attrs":["vendor"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class Extension_27 extends VastElement<Extensions_26> {}
class Extensions_26 extends VastElement<InLine_7> {
      
  public attachExtension(content: string, attributes :["type"]): Extension_27 {
    const newElem = new Extension_27('Extension', this, {"attrs":["type"]} : VastInfos, content: string, attributes :["type"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addExtension(content: string, attributes :["type"]): this {
    return this.attachExtension(content: string, attributes :["type"]).and();
  }
    }
class UniversalAdId_30 extends VastElement<Creative_29> {}
class CreativeExtension_32 extends VastElement<CreativeExtensions_31> {}
class CreativeExtensions_31 extends VastElement<Creative_29> {
      
  public attachCreativeExtension(content: string, attributes :["type"]): CreativeExtension_32 {
    const newElem = new CreativeExtension_32('CreativeExtension', this, {"attrs":["type"]} : VastInfos, content: string, attributes :["type"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addCreativeExtension(content: string, attributes :["type"]): this {
    return this.attachCreativeExtension(content: string, attributes :["type"]).and();
  }
    }
class Duration_34 extends VastElement<Linear_33> {}
class AdParameters_35 extends VastElement<Linear_33> {}
class Mezzanine_37 extends VastElement<MediaFiles_36> {}
class MediaFile_38 extends VastElement<MediaFiles_36> {}
class InteractiveCreativeFile_39 extends VastElement<MediaFiles_36> {}
class MediaFiles_36 extends VastElement<Linear_33> {
      
  public attachMezzanine(content: string): Mezzanine_37 {
    const newElem = new Mezzanine_37('Mezzanine', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addMezzanine(content: string): this {
    return this.attachMezzanine(content: string).and();
  }
  public attachMediaFile(content: string, attributes :["id",{"delivery":["progressive","streaming"]},{"type":null},"bitrate","minBitrate","maxBitrate",{"width":null},{"height":null},"scalable","mantainAspectRatio","codec","apiFramework"]): MediaFile_38 {
    const newElem = new MediaFile_38('MediaFile', this, {"attrs":["id","delivery","type","bitrate","minBitrate","maxBitrate","width","height","scalable","mantainAspectRatio","codec","apiFramework"]} : VastInfos, content: string, attributes :["id",{"delivery":["progressive","streaming"]},{"type":null},"bitrate","minBitrate","maxBitrate",{"width":null},{"height":null},"scalable","mantainAspectRatio","codec","apiFramework"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addMediaFile(content: string, attributes :["id",{"delivery":["progressive","streaming"]},{"type":null},"bitrate","minBitrate","maxBitrate",{"width":null},{"height":null},"scalable","mantainAspectRatio","codec","apiFramework"]): this {
    return this.attachMediaFile(content: string, attributes :["id",{"delivery":["progressive","streaming"]},{"type":null},"bitrate","minBitrate","maxBitrate",{"width":null},{"height":null},"scalable","mantainAspectRatio","codec","apiFramework"]).and();
  }
  public attachInteractiveCreativeFile(content: string): InteractiveCreativeFile_39 {
    const newElem = new InteractiveCreativeFile_39('InteractiveCreativeFile', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addInteractiveCreativeFile(content: string): this {
    return this.attachInteractiveCreativeFile(content: string).and();
  }
    }
class ClickThrough_41 extends VastElement<VideoClicks_40> {}
class ClickTracking_42 extends VastElement<VideoClicks_40> {}
class CustomClick_43 extends VastElement<VideoClicks_40> {}
class VideoClicks_40 extends VastElement<Linear_33> {
      
  public attachClickThrough(content: string, attributes :["id"]): ClickThrough_41 {
    const newElem = new ClickThrough_41('ClickThrough', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addClickThrough(content: string, attributes :["id"]): this {
    return this.attachClickThrough(content: string, attributes :["id"]).and();
  }
  public attachClickTracking(content: string, attributes :["id"]): ClickTracking_42 {
    const newElem = new ClickTracking_42('ClickTracking', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addClickTracking(content: string, attributes :["id"]): this {
    return this.attachClickTracking(content: string, attributes :["id"]).and();
  }
  public attachCustomClick(content: string, attributes :["id"]): CustomClick_43 {
    const newElem = new CustomClick_43('CustomClick', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addCustomClick(content: string, attributes :["id"]): this {
    return this.attachCustomClick(content: string, attributes :["id"]).and();
  }
    }
class Tracking_45 extends VastElement<TrackingEvents_44> {}
class TrackingEvents_44 extends VastElement<Linear_33> {
      
  public attachTracking(content: string, attributes :["offset",{"event":["mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","otherAdInteraction","start","firstQuartile","midpoint","thirdQuartile","complete","acceptInvitationLinear","timeSpentViewing","progress"]}]): Tracking_45 {
    const newElem = new Tracking_45('Tracking', this, {"attrs":["offset","event"]} : VastInfos, content: string, attributes :["offset",{"event":["mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","otherAdInteraction","start","firstQuartile","midpoint","thirdQuartile","complete","acceptInvitationLinear","timeSpentViewing","progress"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content: string, attributes :["offset",{"event":["mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","otherAdInteraction","start","firstQuartile","midpoint","thirdQuartile","complete","acceptInvitationLinear","timeSpentViewing","progress"]}]): this {
    return this.attachTracking(content: string, attributes :["offset",{"event":["mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","otherAdInteraction","start","firstQuartile","midpoint","thirdQuartile","complete","acceptInvitationLinear","timeSpentViewing","progress"]}]).and();
  }
    }
class StaticResource_48 extends VastElement<Icon_47> {}
class IFrameResource_49 extends VastElement<Icon_47> {}
class HTMLResource_50 extends VastElement<Icon_47> {}
class IconClickThrough_52 extends VastElement<IconClicks_51> {}
class IconClickTracking_53 extends VastElement<IconClicks_51> {}
class IconClicks_51 extends VastElement<Icon_47> {
      
  public attachIconClickThrough(content: string): IconClickThrough_52 {
    const newElem = new IconClickThrough_52('IconClickThrough', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addIconClickThrough(content: string): this {
    return this.attachIconClickThrough(content: string).and();
  }
  public attachIconClickTracking(content: string, attributes :["id"]): IconClickTracking_53 {
    const newElem = new IconClickTracking_53('IconClickTracking', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addIconClickTracking(content: string, attributes :["id"]): this {
    return this.attachIconClickTracking(content: string, attributes :["id"]).and();
  }
    }
class IconViewTracking_54 extends VastElement<Icon_47> {}
class Icon_47 extends VastElement<Icons_46> {
      
  public attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): StaticResource_48 {
    const newElem = new StaticResource_48('StaticResource', this, {"attrs":["creativeType"]} : VastInfos, content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): this {
    return this.attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]).and();
  }
  public attachIFrameResource(content: string): IFrameResource_49 {
    const newElem = new IFrameResource_49('IFrameResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content: string): this {
    return this.attachIFrameResource(content: string).and();
  }
  public attachHTMLResource(content: string): HTMLResource_50 {
    const newElem = new HTMLResource_50('HTMLResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content: string): this {
    return this.attachHTMLResource(content: string).and();
  }
  public attachIconClicks(): IconClicks_51 {
    const newElem = new IconClicks_51('IconClicks', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachIconViewTracking(content: string): IconViewTracking_54 {
    const newElem = new IconViewTracking_54('IconViewTracking', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addIconViewTracking(content: string): this {
    return this.attachIconViewTracking(content: string).and();
  }
    }
class Icons_46 extends VastElement<Linear_33> {
      
  public attachIcon(attributes): Icon_47 {
    const newElem = new Icon_47('Icon', this, {"attrs":["program","width","height","xPosition","yPosition","duration","offset","apiFramework","pxratio"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class Linear_33 extends VastElement<Creative_29> {
      
  public attachDuration(content: string): Duration_34 {
    const newElem = new Duration_34('Duration', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addDuration(content: string): this {
    return this.attachDuration(content: string).and();
  }
  public attachAdParameters(content: string, attributes :["xmlEncoded"]): AdParameters_35 {
    const newElem = new AdParameters_35('AdParameters', this, {"attrs":["xmlEncoded"]} : VastInfos, content: string, attributes :["xmlEncoded"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdParameters(content: string, attributes :["xmlEncoded"]): this {
    return this.attachAdParameters(content: string, attributes :["xmlEncoded"]).and();
  }
  public attachMediaFiles(): MediaFiles_36 {
    const newElem = new MediaFiles_36('MediaFiles', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachVideoClicks(): VideoClicks_40 {
    const newElem = new VideoClicks_40('VideoClicks', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachTrackingEvents(): TrackingEvents_44 {
    const newElem = new TrackingEvents_44('TrackingEvents', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachIcons(): Icons_46 {
    const newElem = new Icons_46('Icons', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
    }
class NonLinearClickThrough_57 extends VastElement<NonLinear_56> {}
class NonLinearClickTracking_58 extends VastElement<NonLinear_56> {}
class NonLinear_56 extends VastElement<NonLinearAds_55> {
      
  public attachNonLinearClickThrough(content: string): NonLinearClickThrough_57 {
    const newElem = new NonLinearClickThrough_57('NonLinearClickThrough', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addNonLinearClickThrough(content: string): this {
    return this.attachNonLinearClickThrough(content: string).and();
  }
  public attachNonLinearClickTracking(content: string): NonLinearClickTracking_58 {
    const newElem = new NonLinearClickTracking_58('NonLinearClickTracking', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addNonLinearClickTracking(content: string): this {
    return this.attachNonLinearClickTracking(content: string).and();
  }
    }
class Tracking_60 extends VastElement<TrackingEvents_59> {}
class TrackingEvents_59 extends VastElement<NonLinearAds_55> {
      
  public attachTracking(content: string, attributes :[{"event":["mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","otherAdInteraction","creativeView","acceptInvitation","adExpand","adCollapse","minimize","close","overlayViewDuration"]}]): Tracking_60 {
    const newElem = new Tracking_60('Tracking', this, {"attrs":["event"]} : VastInfos, content: string, attributes :[{"event":["mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","otherAdInteraction","creativeView","acceptInvitation","adExpand","adCollapse","minimize","close","overlayViewDuration"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content: string, attributes :[{"event":["mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","otherAdInteraction","creativeView","acceptInvitation","adExpand","adCollapse","minimize","close","overlayViewDuration"]}]): this {
    return this.attachTracking(content: string, attributes :[{"event":["mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","otherAdInteraction","creativeView","acceptInvitation","adExpand","adCollapse","minimize","close","overlayViewDuration"]}]).and();
  }
    }
class NonLinearAds_55 extends VastElement<Creative_29> {
      
  public attachNonLinear(attributes): NonLinear_56 {
    const newElem = new NonLinear_56('NonLinear', this, {"attrs":["id","width","height","expandedWidth","expandedHeight","scalable","maintainAspectRatio","minSuggestedDuration","apiFramework"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public attachTrackingEvents(): TrackingEvents_59 {
    const newElem = new TrackingEvents_59('TrackingEvents', this, {} : VastInfos );
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
      
  public attachTracking(content: string, attributes :[{"event":["creativeView"]}]): Tracking_71 {
    const newElem = new Tracking_71('Tracking', this, {"attrs":["event"]} : VastInfos, content: string, attributes :[{"event":["creativeView"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content: string, attributes :[{"event":["creativeView"]}]): this {
    return this.attachTracking(content: string, attributes :[{"event":["creativeView"]}]).and();
  }
    }
class Companion_62 extends VastElement<CompanionAds_61> {
      
  public attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): StaticResource_63 {
    const newElem = new StaticResource_63('StaticResource', this, {"attrs":["creativeType"]} : VastInfos, content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): this {
    return this.attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]).and();
  }
  public attachIFrameResource(content: string): IFrameResource_64 {
    const newElem = new IFrameResource_64('IFrameResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content: string): this {
    return this.attachIFrameResource(content: string).and();
  }
  public attachHTMLResource(content: string): HTMLResource_65 {
    const newElem = new HTMLResource_65('HTMLResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content: string): this {
    return this.attachHTMLResource(content: string).and();
  }
  public attachAdParameters(content: string, attributes :["xmlEncoded"]): AdParameters_66 {
    const newElem = new AdParameters_66('AdParameters', this, {"attrs":["xmlEncoded"]} : VastInfos, content: string, attributes :["xmlEncoded"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdParameters(content: string, attributes :["xmlEncoded"]): this {
    return this.attachAdParameters(content: string, attributes :["xmlEncoded"]).and();
  }
  public attachAltText(content: string): AltText_67 {
    const newElem = new AltText_67('AltText', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addAltText(content: string): this {
    return this.attachAltText(content: string).and();
  }
  public attachCompanionClickThrough(content: string): CompanionClickThrough_68 {
    const newElem = new CompanionClickThrough_68('CompanionClickThrough', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addCompanionClickThrough(content: string): this {
    return this.attachCompanionClickThrough(content: string).and();
  }
  public attachCompanionClickTracking(content: string, attributes :["id"]): CompanionClickTracking_69 {
    const newElem = new CompanionClickTracking_69('CompanionClickTracking', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addCompanionClickTracking(content: string, attributes :["id"]): this {
    return this.attachCompanionClickTracking(content: string, attributes :["id"]).and();
  }
  public attachTrackingEvents(): TrackingEvents_70 {
    const newElem = new TrackingEvents_70('TrackingEvents', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
    }
class CompanionAds_61 extends VastElement<Creative_29> {
      
  public attachCompanion(attributes): Companion_62 {
    const newElem = new Companion_62('Companion', this, {"attrs":["id","width","height","assetWidth","assetHeight","expandedWidth","expandedHeight","apiFramework","adSlotID","pxratio"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class Creative_29 extends VastElement<Creatives_28> {
      
  public attachUniversalAdId(content: string, attributes :[{"idRegistry":null},{"idValue":null}]): UniversalAdId_30 {
    const newElem = new UniversalAdId_30('UniversalAdId', this, {"attrs":["idRegistry","idValue"]} : VastInfos, content: string, attributes :[{"idRegistry":null},{"idValue":null}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addUniversalAdId(content: string, attributes :[{"idRegistry":null},{"idValue":null}]): this {
    return this.attachUniversalAdId(content: string, attributes :[{"idRegistry":null},{"idValue":null}]).and();
  }
  public attachCreativeExtensions(): CreativeExtensions_31 {
    const newElem = new CreativeExtensions_31('CreativeExtensions', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachLinear(attributes): Linear_33 {
    const newElem = new Linear_33('Linear', this, {"attrs":["skipoffset"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public attachNonLinearAds(): NonLinearAds_55 {
    const newElem = new NonLinearAds_55('NonLinearAds', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachCompanionAds(attributes): CompanionAds_61 {
    const newElem = new CompanionAds_61('CompanionAds', this, {"attrs":["required"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class Creatives_28 extends VastElement<InLine_7> {
      
  public attachCreative(attributes): Creative_29 {
    const newElem = new Creative_29('Creative', this, {"attrs":["id","sequence","adId","apiFramework"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class InLine_7 extends VastElement<Ad_6> {
      
  public attachAdSystem(content: string, attributes :["version"]): AdSystem_8 {
    const newElem = new AdSystem_8('AdSystem', this, {"attrs":["version"]} : VastInfos, content: string, attributes :["version"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdSystem(content: string, attributes :["version"]): this {
    return this.attachAdSystem(content: string, attributes :["version"]).and();
  }
  public attachAdTitle(content: string): AdTitle_9 {
    const newElem = new AdTitle_9('AdTitle', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdTitle(content: string): this {
    return this.attachAdTitle(content: string).and();
  }
  public attachImpression(content: string, attributes :["id"]): Impression_10 {
    const newElem = new Impression_10('Impression', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addImpression(content: string, attributes :["id"]): this {
    return this.attachImpression(content: string, attributes :["id"]).and();
  }
  public attachCategory(content: string, attributes :[{"authority":null}]): Category_11 {
    const newElem = new Category_11('Category', this, {"attrs":["authority"]} : VastInfos, content: string, attributes :[{"authority":null}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addCategory(content: string, attributes :[{"authority":null}]): this {
    return this.attachCategory(content: string, attributes :[{"authority":null}]).and();
  }
  public attachDescription(content: string): Description_12 {
    const newElem = new Description_12('Description', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addDescription(content: string): this {
    return this.attachDescription(content: string).and();
  }
  public attachAdvertiser(content: string): Advertiser_13 {
    const newElem = new Advertiser_13('Advertiser', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdvertiser(content: string): this {
    return this.attachAdvertiser(content: string).and();
  }
  public attachPricing(content: string, attributes :[{"currency":null},{"model":["CPM","CPC","CPE","CPV"]}]): Pricing_14 {
    const newElem = new Pricing_14('Pricing', this, {"attrs":["currency","model"]} : VastInfos, content: string, attributes :[{"currency":null},{"model":["CPM","CPC","CPE","CPV"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addPricing(content: string, attributes :[{"currency":null},{"model":["CPM","CPC","CPE","CPV"]}]): this {
    return this.attachPricing(content: string, attributes :[{"currency":null},{"model":["CPM","CPC","CPE","CPV"]}]).and();
  }
  public attachSurvey(content: string, attributes :["type"]): Survey_15 {
    const newElem = new Survey_15('Survey', this, {"attrs":["type"]} : VastInfos, content: string, attributes :["type"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addSurvey(content: string, attributes :["type"]): this {
    return this.attachSurvey(content: string, attributes :["type"]).and();
  }
  public attachError(content: string): Error_16 {
    const newElem = new Error_16('Error', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addError(content: string): this {
    return this.attachError(content: string).and();
  }
  public attachViewableImpression(attributes): ViewableImpression_17 {
    const newElem = new ViewableImpression_17('ViewableImpression', this, {"attrs":["id"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public attachAdVerifications(): AdVerifications_21 {
    const newElem = new AdVerifications_21('AdVerifications', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachExtensions(): Extensions_26 {
    const newElem = new Extensions_26('Extensions', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachCreatives(): Creatives_28 {
    const newElem = new Creatives_28('Creatives', this, {} : VastInfos );
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
      
  public attachViewable(content: string): Viewable_79 {
    const newElem = new Viewable_79('Viewable', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addViewable(content: string): this {
    return this.attachViewable(content: string).and();
  }
  public attachNotViewable(content: string): NotViewable_80 {
    const newElem = new NotViewable_80('NotViewable', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addNotViewable(content: string): this {
    return this.attachNotViewable(content: string).and();
  }
  public attachViewUndetermined(content: string): ViewUndetermined_81 {
    const newElem = new ViewUndetermined_81('ViewUndetermined', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addViewUndetermined(content: string): this {
    return this.attachViewUndetermined(content: string).and();
  }
    }
class ViewableImpression_84 extends VastElement<Verification_83> {}
class Verification_83 extends VastElement<AdVerifications_82> {
      
  public attachViewableImpression(content: string, attributes :["id"]): ViewableImpression_84 {
    const newElem = new ViewableImpression_84('ViewableImpression', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addViewableImpression(content: string, attributes :["id"]): this {
    return this.attachViewableImpression(content: string, attributes :["id"]).and();
  }
    }
class AdVerifications_82 extends VastElement<Wrapper_72> {
      
  public attachVerification(attributes): Verification_83 {
    const newElem = new Verification_83('Verification', this, {"attrs":["vendor"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class Extension_86 extends VastElement<Extensions_85> {}
class Extensions_85 extends VastElement<Wrapper_72> {
      
  public attachExtension(content: string, attributes :["type"]): Extension_86 {
    const newElem = new Extension_86('Extension', this, {"attrs":["type"]} : VastInfos, content: string, attributes :["type"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addExtension(content: string, attributes :["type"]): this {
    return this.attachExtension(content: string, attributes :["type"]).and();
  }
    }
class Tracking_91 extends VastElement<TrackingEvents_90> {}
class TrackingEvents_90 extends VastElement<Linear_89> {
      
  public attachTracking(content: string, attributes :["offset",{"event":["mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","otherAdInteraction","start","firstQuartile","midpoint","thirdQuartile","complete","acceptInvitationLinear","timeSpentViewing","progress"]}]): Tracking_91 {
    const newElem = new Tracking_91('Tracking', this, {"attrs":["offset","event"]} : VastInfos, content: string, attributes :["offset",{"event":["mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","otherAdInteraction","start","firstQuartile","midpoint","thirdQuartile","complete","acceptInvitationLinear","timeSpentViewing","progress"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content: string, attributes :["offset",{"event":["mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","otherAdInteraction","start","firstQuartile","midpoint","thirdQuartile","complete","acceptInvitationLinear","timeSpentViewing","progress"]}]): this {
    return this.attachTracking(content: string, attributes :["offset",{"event":["mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","otherAdInteraction","start","firstQuartile","midpoint","thirdQuartile","complete","acceptInvitationLinear","timeSpentViewing","progress"]}]).and();
  }
    }
class ClickTracking_93 extends VastElement<VideoClicks_92> {}
class CustomClick_94 extends VastElement<VideoClicks_92> {}
class VideoClicks_92 extends VastElement<Linear_89> {
      
  public attachClickTracking(content: string, attributes :["id"]): ClickTracking_93 {
    const newElem = new ClickTracking_93('ClickTracking', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addClickTracking(content: string, attributes :["id"]): this {
    return this.attachClickTracking(content: string, attributes :["id"]).and();
  }
  public attachCustomClick(content: string, attributes :["id"]): CustomClick_94 {
    const newElem = new CustomClick_94('CustomClick', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addCustomClick(content: string, attributes :["id"]): this {
    return this.attachCustomClick(content: string, attributes :["id"]).and();
  }
    }
class StaticResource_97 extends VastElement<Icon_96> {}
class IFrameResource_98 extends VastElement<Icon_96> {}
class HTMLResource_99 extends VastElement<Icon_96> {}
class IconClickThrough_101 extends VastElement<IconClicks_100> {}
class IconClickTracking_102 extends VastElement<IconClicks_100> {}
class IconClicks_100 extends VastElement<Icon_96> {
      
  public attachIconClickThrough(content: string): IconClickThrough_101 {
    const newElem = new IconClickThrough_101('IconClickThrough', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addIconClickThrough(content: string): this {
    return this.attachIconClickThrough(content: string).and();
  }
  public attachIconClickTracking(content: string): IconClickTracking_102 {
    const newElem = new IconClickTracking_102('IconClickTracking', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addIconClickTracking(content: string): this {
    return this.attachIconClickTracking(content: string).and();
  }
    }
class IconViewTracking_103 extends VastElement<Icon_96> {}
class Icon_96 extends VastElement<Icons_95> {
      
  public attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): StaticResource_97 {
    const newElem = new StaticResource_97('StaticResource', this, {"attrs":["creativeType"]} : VastInfos, content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): this {
    return this.attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]).and();
  }
  public attachIFrameResource(content: string): IFrameResource_98 {
    const newElem = new IFrameResource_98('IFrameResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content: string): this {
    return this.attachIFrameResource(content: string).and();
  }
  public attachHTMLResource(content: string): HTMLResource_99 {
    const newElem = new HTMLResource_99('HTMLResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content: string): this {
    return this.attachHTMLResource(content: string).and();
  }
  public attachIconClicks(): IconClicks_100 {
    const newElem = new IconClicks_100('IconClicks', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachIconViewTracking(content: string): IconViewTracking_103 {
    const newElem = new IconViewTracking_103('IconViewTracking', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addIconViewTracking(content: string): this {
    return this.attachIconViewTracking(content: string).and();
  }
    }
class Icons_95 extends VastElement<Linear_89> {
      
  public attachIcon(attributes): Icon_96 {
    const newElem = new Icon_96('Icon', this, {"attrs":["program","width","height","xPosition","yPosition","duration","offset","apiFramework","pxratio"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class InteractiveCreativeFile_104 extends VastElement<Linear_89> {}
class Linear_89 extends VastElement<Creative_88> {
      
  public attachTrackingEvents(): TrackingEvents_90 {
    const newElem = new TrackingEvents_90('TrackingEvents', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachVideoClicks(): VideoClicks_92 {
    const newElem = new VideoClicks_92('VideoClicks', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachIcons(): Icons_95 {
    const newElem = new Icons_95('Icons', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachInteractiveCreativeFile(content: string): InteractiveCreativeFile_104 {
    const newElem = new InteractiveCreativeFile_104('InteractiveCreativeFile', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addInteractiveCreativeFile(content: string): this {
    return this.attachInteractiveCreativeFile(content: string).and();
  }
    }
class NonLinearClickThrough_107 extends VastElement<NonLinear_106> {}
class NonLinearClickTracking_108 extends VastElement<NonLinear_106> {}
class NonLinear_106 extends VastElement<NonLinearAds_105> {
      
  public attachNonLinearClickThrough(content: string): NonLinearClickThrough_107 {
    const newElem = new NonLinearClickThrough_107('NonLinearClickThrough', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addNonLinearClickThrough(content: string): this {
    return this.attachNonLinearClickThrough(content: string).and();
  }
  public attachNonLinearClickTracking(content: string): NonLinearClickTracking_108 {
    const newElem = new NonLinearClickTracking_108('NonLinearClickTracking', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addNonLinearClickTracking(content: string): this {
    return this.attachNonLinearClickTracking(content: string).and();
  }
    }
class Tracking_110 extends VastElement<TrackingEvents_109> {}
class TrackingEvents_109 extends VastElement<NonLinearAds_105> {
      
  public attachTracking(content: string, attributes :[{"event":["mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","otherAdInteraction","creativeView","acceptInvitation","adExpand","adCollapse","minimize","close","overlayViewDuration"]}]): Tracking_110 {
    const newElem = new Tracking_110('Tracking', this, {"attrs":["event"]} : VastInfos, content: string, attributes :[{"event":["mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","otherAdInteraction","creativeView","acceptInvitation","adExpand","adCollapse","minimize","close","overlayViewDuration"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content: string, attributes :[{"event":["mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","otherAdInteraction","creativeView","acceptInvitation","adExpand","adCollapse","minimize","close","overlayViewDuration"]}]): this {
    return this.attachTracking(content: string, attributes :[{"event":["mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","otherAdInteraction","creativeView","acceptInvitation","adExpand","adCollapse","minimize","close","overlayViewDuration"]}]).and();
  }
    }
class NonLinearAds_105 extends VastElement<Creative_88> {
      
  public attachNonLinear(attributes): NonLinear_106 {
    const newElem = new NonLinear_106('NonLinear', this, {"attrs":["id","width","height","expandedWidth","expandedHeight","scalable","maintainAspectRatio","minSuggestedDuration","apiFramework"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public attachTrackingEvents(): TrackingEvents_109 {
    const newElem = new TrackingEvents_109('TrackingEvents', this, {} : VastInfos );
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
      
  public attachTracking(content: string, attributes :[{"event":["creativeView"]}]): Tracking_121 {
    const newElem = new Tracking_121('Tracking', this, {"attrs":["event"]} : VastInfos, content: string, attributes :[{"event":["creativeView"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content: string, attributes :[{"event":["creativeView"]}]): this {
    return this.attachTracking(content: string, attributes :[{"event":["creativeView"]}]).and();
  }
    }
class Companion_112 extends VastElement<CompanionAds_111> {
      
  public attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): StaticResource_113 {
    const newElem = new StaticResource_113('StaticResource', this, {"attrs":["creativeType"]} : VastInfos, content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): this {
    return this.attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]).and();
  }
  public attachIFrameResource(content: string): IFrameResource_114 {
    const newElem = new IFrameResource_114('IFrameResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content: string): this {
    return this.attachIFrameResource(content: string).and();
  }
  public attachHTMLResource(content: string): HTMLResource_115 {
    const newElem = new HTMLResource_115('HTMLResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content: string): this {
    return this.attachHTMLResource(content: string).and();
  }
  public attachAdParameters(content: string, attributes :["xmlEncoded"]): AdParameters_116 {
    const newElem = new AdParameters_116('AdParameters', this, {"attrs":["xmlEncoded"]} : VastInfos, content: string, attributes :["xmlEncoded"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdParameters(content: string, attributes :["xmlEncoded"]): this {
    return this.attachAdParameters(content: string, attributes :["xmlEncoded"]).and();
  }
  public attachAltText(content: string): AltText_117 {
    const newElem = new AltText_117('AltText', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addAltText(content: string): this {
    return this.attachAltText(content: string).and();
  }
  public attachCompanionClickThrough(content: string): CompanionClickThrough_118 {
    const newElem = new CompanionClickThrough_118('CompanionClickThrough', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addCompanionClickThrough(content: string): this {
    return this.attachCompanionClickThrough(content: string).and();
  }
  public attachCompanionClickTracking(content: string, attributes :["id"]): CompanionClickTracking_119 {
    const newElem = new CompanionClickTracking_119('CompanionClickTracking', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addCompanionClickTracking(content: string, attributes :["id"]): this {
    return this.attachCompanionClickTracking(content: string, attributes :["id"]).and();
  }
  public attachTrackingEvents(): TrackingEvents_120 {
    const newElem = new TrackingEvents_120('TrackingEvents', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
    }
class CompanionAds_111 extends VastElement<Creative_88> {
      
  public attachCompanion(attributes): Companion_112 {
    const newElem = new Companion_112('Companion', this, {"attrs":["id","width","height","assetWidth","assetHeight","expandedWidth","expandedHeight","apiFramework","adSlotID","logoTile","logoTitle","logoArtist","logoURL","pxratio"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class Creative_88 extends VastElement<Creatives_87> {
      
  public attachLinear(): Linear_89 {
    const newElem = new Linear_89('Linear', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachNonLinearAds(): NonLinearAds_105 {
    const newElem = new NonLinearAds_105('NonLinearAds', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachCompanionAds(attributes): CompanionAds_111 {
    const newElem = new CompanionAds_111('CompanionAds', this, {"attrs":["required"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class Creatives_87 extends VastElement<Wrapper_72> {
      
  public attachCreative(attributes): Creative_88 {
    const newElem = new Creative_88('Creative', this, {"attrs":["id","sequence","adId"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class Wrapper_72 extends VastElement<Ad_6> {
      
  public attachImpression(content: string, attributes :["id"]): Impression_73 {
    const newElem = new Impression_73('Impression', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addImpression(content: string, attributes :["id"]): this {
    return this.attachImpression(content: string, attributes :["id"]).and();
  }
  public attachVASTAdTagURI(content: string): VASTAdTagURI_74 {
    const newElem = new VASTAdTagURI_74('VASTAdTagURI', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addVASTAdTagURI(content: string): this {
    return this.attachVASTAdTagURI(content: string).and();
  }
  public attachAdSystem(content: string, attributes :["version"]): AdSystem_75 {
    const newElem = new AdSystem_75('AdSystem', this, {"attrs":["version"]} : VastInfos, content: string, attributes :["version"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdSystem(content: string, attributes :["version"]): this {
    return this.attachAdSystem(content: string, attributes :["version"]).and();
  }
  public attachPricing(content: string, attributes :[{"currency":null},{"model":["CPM","CPC","CPE","CPV"]}]): Pricing_76 {
    const newElem = new Pricing_76('Pricing', this, {"attrs":["currency","model"]} : VastInfos, content: string, attributes :[{"currency":null},{"model":["CPM","CPC","CPE","CPV"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addPricing(content: string, attributes :[{"currency":null},{"model":["CPM","CPC","CPE","CPV"]}]): this {
    return this.attachPricing(content: string, attributes :[{"currency":null},{"model":["CPM","CPC","CPE","CPV"]}]).and();
  }
  public attachError(content: string): Error_77 {
    const newElem = new Error_77('Error', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addError(content: string): this {
    return this.attachError(content: string).and();
  }
  public attachViewableImpression(attributes): ViewableImpression_78 {
    const newElem = new ViewableImpression_78('ViewableImpression', this, {"attrs":["id"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public attachAdVerifications(): AdVerifications_82 {
    const newElem = new AdVerifications_82('AdVerifications', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachExtensions(): Extensions_85 {
    const newElem = new Extensions_85('Extensions', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachCreatives(): Creatives_87 {
    const newElem = new Creatives_87('Creatives', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
    }
class Ad_6 extends VastElement<VAST_4> {
      
  public attachInLine(): InLine_7 {
    const newElem = new InLine_7('InLine', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachWrapper(attributes): Wrapper_72 {
    const newElem = new Wrapper_72('Wrapper', this, {"attrs":["followAdditonalWrappers","allowMultipleAds","fallbackOnNoAd"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class VAST_4 extends VastElement<apiv4> {
      
  public attachError(content: string): Error_5 {
    const newElem = new Error_5('Error', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addError(content: string): this {
    return this.attachError(content: string).and();
  }
  public attachAd(attributes): Ad_6 {
    const newElem = new Ad_6('Ad', this, {"attrs":["id","sequence","conditionalAd"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class apiv4 extends VastElement<apiv4> {
      
  public attachVAST(attributes): VAST_4 {
    const newElem = new VAST_4('VAST', this, {"attrs":["version"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }


export const validator = {"only":{"VAST":{"alo":{"Ad":{"uniq":{"InLine":{"required":{"AdSystem":{},"AdTitle":{},"Creatives":{"alo":{"Creative":{"required":{"UniversalAdId":{"attrsRequired":{"idRegistry":null,"idValue":null}}},"uniq":{"Linear":{"required":{"Duration":{},"MediaFiles":{"alo":{"MediaFile":{"attrsRequired":{"delivery":["progressive","streaming"],"type":null,"width":null,"height":null}}},"follow":{"Mezzanine":{},"InteractiveCreativeFile":{}}}},"follow":{"AdParameters":{},"VideoClicks":{"follow":{"ClickThrough":{},"ClickTracking":{},"CustomClick":{}}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","otherAdInteraction","start","firstQuartile","midpoint","thirdQuartile","complete","acceptInvitationLinear","timeSpentViewing","progress"]}}}},"Icons":{"alo":{"Icon":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"IconClicks":{"follow":{"IconClickThrough":{},"IconClickTracking":{}}},"IconViewTracking":{}}}}}}},"NonLinearAds":{"follow":{"NonLinear":{"follow":{"NonLinearClickThrough":{},"NonLinearClickTracking":{}},"attrsRequired":{"width":null,"height":null}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","otherAdInteraction","creativeView","acceptInvitation","adExpand","adCollapse","minimize","close","overlayViewDuration"]}}}}}},"CompanionAds":{"follow":{"Companion":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"AdParameters":{},"AltText":{},"CompanionClickThrough":{},"CompanionClickTracking":{},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView"]}}}}},"attrsRequired":{"width":null,"height":null}}},"attrsRequired":{"required":["all","any","none"]}}},"follow":{"CreativeExtensions":{"follow":{"CreativeExtension":{}}}}}}}},"alo":{"Impression":{}},"follow":{"Category":{"attrsRequired":{"authority":null}},"Description":{},"Advertiser":{},"Pricing":{"attrsRequired":{"currency":null,"model":["CPM","CPC","CPE","CPV"]}},"Survey":{},"Error":{},"ViewableImpression":{"follow":{"Viewable":{},"NotViewable":{},"ViewUndetermined":{}}},"AdVerifications":{"follow":{"Verification":{"follow":{"JavaScriptResource":{},"FlashResource":{},"ViewableImpression":{}}}}},"Extensions":{"required":{"Extension":{}}}}},"Wrapper":{"required":{"VASTAdTagURI":{},"AdSystem":{}},"alo":{"Impression":{}},"follow":{"Pricing":{"attrsRequired":{"currency":null,"model":["CPM","CPC","CPE","CPV"]}},"Error":{},"ViewableImpression":{"follow":{"Viewable":{},"NotViewable":{},"ViewUndetermined":{}}},"AdVerifications":{"follow":{"Verification":{"follow":{"ViewableImpression":{}}}}},"Extensions":{"follow":{"Extension":{}}},"Creatives":{"follow":{"Creative":{"uniq":{"Linear":{"follow":{"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","otherAdInteraction","start","firstQuartile","midpoint","thirdQuartile","complete","acceptInvitationLinear","timeSpentViewing","progress"]}}}},"VideoClicks":{"follow":{"ClickTracking":{},"CustomClick":{}}},"Icons":{"alo":{"Icon":{"follow":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{},"IconClicks":{"follow":{"IconClickThrough":{},"IconClickTracking":{}}},"IconViewTracking":{}}}}},"InteractiveCreativeFile":{}}},"NonLinearAds":{"follow":{"NonLinear":{"follow":{"NonLinearClickThrough":{},"NonLinearClickTracking":{}},"attrsRequired":{"width":null,"height":null}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","otherAdInteraction","creativeView","acceptInvitation","adExpand","adCollapse","minimize","close","overlayViewDuration"]}}}}}},"CompanionAds":{"follow":{"Companion":{"follow":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{},"AdParameters":{},"AltText":{},"CompanionClickThrough":{},"CompanionClickTracking":{},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView"]}}}}},"attrsRequired":{"width":null,"height":null}}},"attrsRequired":{"required":["all","any","none"]}}}}}}}}}}},"follow":{"Error":{}},"attrsRequired":{"version":["4.0"]}}}};

export apiv4;
