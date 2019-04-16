
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
      
  public attachViewable(content: string): Viewable_20 {
    const newElem = new Viewable_20('Viewable', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addViewable(content: string): this {
    return this.attachViewable(content: string).and();
  }
  public attachNotViewable(content: string): NotViewable_21 {
    const newElem = new NotViewable_21('NotViewable', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addNotViewable(content: string): this {
    return this.attachNotViewable(content: string).and();
  }
  public attachViewUndetermined(content: string): ViewUndetermined_22 {
    const newElem = new ViewUndetermined_22('ViewUndetermined', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addViewUndetermined(content: string): this {
    return this.attachViewUndetermined(content: string).and();
  }
    }
class JavaScriptResource_25 extends VastElement<Verification_24> {}
class ExecutableResource_26 extends VastElement<Verification_24> {}
class Tracking_28 extends VastElement<TrackingEvents_27> {}
class TrackingEvents_27 extends VastElement<Verification_24> {
      
  public attachTracking(content: string, attributes :["offset",{"event":["verificationNotExecuted"]}]): Tracking_28 {
    const newElem = new Tracking_28('Tracking', this, {"attrs":["offset","event"]} : VastInfos, content: string, attributes :["offset",{"event":["verificationNotExecuted"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content: string, attributes :["offset",{"event":["verificationNotExecuted"]}]): this {
    return this.attachTracking(content: string, attributes :["offset",{"event":["verificationNotExecuted"]}]).and();
  }
    }
class VerificationParameters_29 extends VastElement<Verification_24> {}
class Verification_24 extends VastElement<AdVerifications_23> {
      
  public attachJavaScriptResource(content: string, attributes :[{"apiFramework":null},{"browserOptional":null}]): JavaScriptResource_25 {
    const newElem = new JavaScriptResource_25('JavaScriptResource', this, {"attrs":["apiFramework","browserOptional"]} : VastInfos, content: string, attributes :[{"apiFramework":null},{"browserOptional":null}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addJavaScriptResource(content: string, attributes :[{"apiFramework":null},{"browserOptional":null}]): this {
    return this.attachJavaScriptResource(content: string, attributes :[{"apiFramework":null},{"browserOptional":null}]).and();
  }
  public attachExecutableResource(content: string, attributes :[{"apiFramework":null},"language","type"]): ExecutableResource_26 {
    const newElem = new ExecutableResource_26('ExecutableResource', this, {"attrs":["apiFramework","language","type"]} : VastInfos, content: string, attributes :[{"apiFramework":null},"language","type"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addExecutableResource(content: string, attributes :[{"apiFramework":null},"language","type"]): this {
    return this.attachExecutableResource(content: string, attributes :[{"apiFramework":null},"language","type"]).and();
  }
  public attachTrackingEvents(): TrackingEvents_27 {
    const newElem = new TrackingEvents_27('TrackingEvents', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachVerificationParameters(content: string): VerificationParameters_29 {
    const newElem = new VerificationParameters_29('VerificationParameters', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addVerificationParameters(content: string): this {
    return this.attachVerificationParameters(content: string).and();
  }
    }
class AdVerifications_23 extends VastElement<InLine_7> {
      
  public attachVerification(attributes): Verification_24 {
    const newElem = new Verification_24('Verification', this, {"attrs":["vendor"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class Extension_31 extends VastElement<Extensions_30> {}
class Extensions_30 extends VastElement<InLine_7> {
      
  public attachExtension(content: string, attributes :["type"]): Extension_31 {
    const newElem = new Extension_31('Extension', this, {"attrs":["type"]} : VastInfos, content: string, attributes :["type"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addExtension(content: string, attributes :["type"]): this {
    return this.attachExtension(content: string, attributes :["type"]).and();
  }
    }
class UniversalAdId_34 extends VastElement<Creative_33> {}
class CreativeExtension_36 extends VastElement<CreativeExtensions_35> {}
class CreativeExtensions_35 extends VastElement<Creative_33> {
      
  public attachCreativeExtension(content: string, attributes :["type"]): CreativeExtension_36 {
    const newElem = new CreativeExtension_36('CreativeExtension', this, {"attrs":["type"]} : VastInfos, content: string, attributes :["type"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addCreativeExtension(content: string, attributes :["type"]): this {
    return this.attachCreativeExtension(content: string, attributes :["type"]).and();
  }
    }
class Duration_38 extends VastElement<Linear_37> {}
class AdParameters_39 extends VastElement<Linear_37> {}
class Mezzanine_41 extends VastElement<MediaFiles_40> {}
class MediaFile_42 extends VastElement<MediaFiles_40> {}
class InteractiveCreativeFile_43 extends VastElement<MediaFiles_40> {}
class ClosedCaptionFile_45 extends VastElement<ClosedCaptionFiles_44> {}
class ClosedCaptionFiles_44 extends VastElement<MediaFiles_40> {
      
  public attachClosedCaptionFile(content: string, attributes :["type","language"]): ClosedCaptionFile_45 {
    const newElem = new ClosedCaptionFile_45('ClosedCaptionFile', this, {"attrs":["type","language"]} : VastInfos, content: string, attributes :["type","language"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addClosedCaptionFile(content: string, attributes :["type","language"]): this {
    return this.attachClosedCaptionFile(content: string, attributes :["type","language"]).and();
  }
    }
class MediaFiles_40 extends VastElement<Linear_37> {
      
  public attachMezzanine(content: string, attributes :[{"delivery":["progressive","streaming"]},{"type":null},{"width":null},{"height":null},"codec","id","fileSize","mediaType"]): Mezzanine_41 {
    const newElem = new Mezzanine_41('Mezzanine', this, {"attrs":["delivery","type","width","height","codec","id","fileSize","mediaType"]} : VastInfos, content: string, attributes :[{"delivery":["progressive","streaming"]},{"type":null},{"width":null},{"height":null},"codec","id","fileSize","mediaType"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addMezzanine(content: string, attributes :[{"delivery":["progressive","streaming"]},{"type":null},{"width":null},{"height":null},"codec","id","fileSize","mediaType"]): this {
    return this.attachMezzanine(content: string, attributes :[{"delivery":["progressive","streaming"]},{"type":null},{"width":null},{"height":null},"codec","id","fileSize","mediaType"]).and();
  }
  public attachMediaFile(content: string, attributes :[{"delivery":["progressive","streaming"]},{"type":null},{"width":null},{"height":null},"codec","id","bitrate","minBitrate","maxBitrate","scalable","mantainAspectRatio","apiFramework","fileSize","mediaType"]): MediaFile_42 {
    const newElem = new MediaFile_42('MediaFile', this, {"attrs":["delivery","type","width","height","codec","id","bitrate","minBitrate","maxBitrate","scalable","mantainAspectRatio","apiFramework","fileSize","mediaType"]} : VastInfos, content: string, attributes :[{"delivery":["progressive","streaming"]},{"type":null},{"width":null},{"height":null},"codec","id","bitrate","minBitrate","maxBitrate","scalable","mantainAspectRatio","apiFramework","fileSize","mediaType"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addMediaFile(content: string, attributes :[{"delivery":["progressive","streaming"]},{"type":null},{"width":null},{"height":null},"codec","id","bitrate","minBitrate","maxBitrate","scalable","mantainAspectRatio","apiFramework","fileSize","mediaType"]): this {
    return this.attachMediaFile(content: string, attributes :[{"delivery":["progressive","streaming"]},{"type":null},{"width":null},{"height":null},"codec","id","bitrate","minBitrate","maxBitrate","scalable","mantainAspectRatio","apiFramework","fileSize","mediaType"]).and();
  }
  public attachInteractiveCreativeFile(content: string, attributes :["type","apiFramework","variableDuration"]): InteractiveCreativeFile_43 {
    const newElem = new InteractiveCreativeFile_43('InteractiveCreativeFile', this, {"attrs":["type","apiFramework","variableDuration"]} : VastInfos, content: string, attributes :["type","apiFramework","variableDuration"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addInteractiveCreativeFile(content: string, attributes :["type","apiFramework","variableDuration"]): this {
    return this.attachInteractiveCreativeFile(content: string, attributes :["type","apiFramework","variableDuration"]).and();
  }
  public attachClosedCaptionFiles(): ClosedCaptionFiles_44 {
    const newElem = new ClosedCaptionFiles_44('ClosedCaptionFiles', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
    }
class ClickThrough_47 extends VastElement<VideoClicks_46> {}
class ClickTracking_48 extends VastElement<VideoClicks_46> {}
class CustomClick_49 extends VastElement<VideoClicks_46> {}
class VideoClicks_46 extends VastElement<Linear_37> {
      
  public attachClickThrough(content: string, attributes :["id"]): ClickThrough_47 {
    const newElem = new ClickThrough_47('ClickThrough', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addClickThrough(content: string, attributes :["id"]): this {
    return this.attachClickThrough(content: string, attributes :["id"]).and();
  }
  public attachClickTracking(content: string, attributes :["id"]): ClickTracking_48 {
    const newElem = new ClickTracking_48('ClickTracking', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addClickTracking(content: string, attributes :["id"]): this {
    return this.attachClickTracking(content: string, attributes :["id"]).and();
  }
  public attachCustomClick(content: string, attributes :["id"]): CustomClick_49 {
    const newElem = new CustomClick_49('CustomClick', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addCustomClick(content: string, attributes :["id"]): this {
    return this.attachCustomClick(content: string, attributes :["id"]).and();
  }
    }
class Tracking_51 extends VastElement<TrackingEvents_50> {}
class TrackingEvents_50 extends VastElement<Linear_37> {
      
  public attachTracking(content: string, attributes :["offset",{"event":["loaded","start","firstQuartile","midpoint","thirdQuartile","complete","progress","closeLinear","otherAdInteraction","mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","notUsed"]}]): Tracking_51 {
    const newElem = new Tracking_51('Tracking', this, {"attrs":["offset","event"]} : VastInfos, content: string, attributes :["offset",{"event":["loaded","start","firstQuartile","midpoint","thirdQuartile","complete","progress","closeLinear","otherAdInteraction","mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","notUsed"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content: string, attributes :["offset",{"event":["loaded","start","firstQuartile","midpoint","thirdQuartile","complete","progress","closeLinear","otherAdInteraction","mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","notUsed"]}]): this {
    return this.attachTracking(content: string, attributes :["offset",{"event":["loaded","start","firstQuartile","midpoint","thirdQuartile","complete","progress","closeLinear","otherAdInteraction","mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","notUsed"]}]).and();
  }
    }
class StaticResource_54 extends VastElement<Icon_53> {}
class IFrameResource_55 extends VastElement<Icon_53> {}
class HTMLResource_56 extends VastElement<Icon_53> {}
class IconClickThrough_58 extends VastElement<IconClicks_57> {}
class IconClickTracking_59 extends VastElement<IconClicks_57> {}
class IconClicks_57 extends VastElement<Icon_53> {
      
  public attachIconClickThrough(content: string): IconClickThrough_58 {
    const newElem = new IconClickThrough_58('IconClickThrough', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addIconClickThrough(content: string): this {
    return this.attachIconClickThrough(content: string).and();
  }
  public attachIconClickTracking(content: string, attributes :["id"]): IconClickTracking_59 {
    const newElem = new IconClickTracking_59('IconClickTracking', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addIconClickTracking(content: string, attributes :["id"]): this {
    return this.attachIconClickTracking(content: string, attributes :["id"]).and();
  }
    }
class IconViewTracking_60 extends VastElement<Icon_53> {}
class Icon_53 extends VastElement<Icons_52> {
      
  public attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): StaticResource_54 {
    const newElem = new StaticResource_54('StaticResource', this, {"attrs":["creativeType"]} : VastInfos, content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): this {
    return this.attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]).and();
  }
  public attachIFrameResource(content: string): IFrameResource_55 {
    const newElem = new IFrameResource_55('IFrameResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content: string): this {
    return this.attachIFrameResource(content: string).and();
  }
  public attachHTMLResource(content: string): HTMLResource_56 {
    const newElem = new HTMLResource_56('HTMLResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content: string): this {
    return this.attachHTMLResource(content: string).and();
  }
  public attachIconClicks(): IconClicks_57 {
    const newElem = new IconClicks_57('IconClicks', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachIconViewTracking(content: string): IconViewTracking_60 {
    const newElem = new IconViewTracking_60('IconViewTracking', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addIconViewTracking(content: string): this {
    return this.attachIconViewTracking(content: string).and();
  }
    }
class Icons_52 extends VastElement<Linear_37> {
      
  public attachIcon(attributes): Icon_53 {
    const newElem = new Icon_53('Icon', this, {"attrs":["program","width","height","xPosition","yPosition","duration","offset","apiFramework","pxratio"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class Linear_37 extends VastElement<Creative_33> {
      
  public attachDuration(content: string): Duration_38 {
    const newElem = new Duration_38('Duration', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addDuration(content: string): this {
    return this.attachDuration(content: string).and();
  }
  public attachAdParameters(content: string, attributes :["xmlEncoded"]): AdParameters_39 {
    const newElem = new AdParameters_39('AdParameters', this, {"attrs":["xmlEncoded"]} : VastInfos, content: string, attributes :["xmlEncoded"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdParameters(content: string, attributes :["xmlEncoded"]): this {
    return this.attachAdParameters(content: string, attributes :["xmlEncoded"]).and();
  }
  public attachMediaFiles(): MediaFiles_40 {
    const newElem = new MediaFiles_40('MediaFiles', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachVideoClicks(): VideoClicks_46 {
    const newElem = new VideoClicks_46('VideoClicks', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachTrackingEvents(): TrackingEvents_50 {
    const newElem = new TrackingEvents_50('TrackingEvents', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachIcons(): Icons_52 {
    const newElem = new Icons_52('Icons', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
    }
class NonLinearClickThrough_63 extends VastElement<NonLinear_62> {}
class NonLinearClickTracking_64 extends VastElement<NonLinear_62> {}
class NonLinear_62 extends VastElement<NonLinearAds_61> {
      
  public attachNonLinearClickThrough(content: string): NonLinearClickThrough_63 {
    const newElem = new NonLinearClickThrough_63('NonLinearClickThrough', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addNonLinearClickThrough(content: string): this {
    return this.attachNonLinearClickThrough(content: string).and();
  }
  public attachNonLinearClickTracking(content: string): NonLinearClickTracking_64 {
    const newElem = new NonLinearClickTracking_64('NonLinearClickTracking', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addNonLinearClickTracking(content: string): this {
    return this.attachNonLinearClickTracking(content: string).and();
  }
    }
class Tracking_66 extends VastElement<TrackingEvents_65> {}
class TrackingEvents_65 extends VastElement<NonLinearAds_61> {
      
  public attachTracking(content: string, attributes :[{"event":["creativeView","acceptInvitation","adExpand","adCollapse","minimize","close","overlayViewDuration","otherAdInteraction","mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","notUsed"]}]): Tracking_66 {
    const newElem = new Tracking_66('Tracking', this, {"attrs":["event"]} : VastInfos, content: string, attributes :[{"event":["creativeView","acceptInvitation","adExpand","adCollapse","minimize","close","overlayViewDuration","otherAdInteraction","mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","notUsed"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content: string, attributes :[{"event":["creativeView","acceptInvitation","adExpand","adCollapse","minimize","close","overlayViewDuration","otherAdInteraction","mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","notUsed"]}]): this {
    return this.attachTracking(content: string, attributes :[{"event":["creativeView","acceptInvitation","adExpand","adCollapse","minimize","close","overlayViewDuration","otherAdInteraction","mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","notUsed"]}]).and();
  }
    }
class NonLinearAds_61 extends VastElement<Creative_33> {
      
  public attachNonLinear(attributes): NonLinear_62 {
    const newElem = new NonLinear_62('NonLinear', this, {"attrs":["id","width","height","expandedWidth","expandedHeight","scalable","maintainAspectRatio","apiFramework","minSuggestedDuration"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public attachTrackingEvents(): TrackingEvents_65 {
    const newElem = new TrackingEvents_65('TrackingEvents', this, {} : VastInfos );
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
      
  public attachTracking(content: string, attributes :[{"event":["creativeView"]}]): Tracking_77 {
    const newElem = new Tracking_77('Tracking', this, {"attrs":["event"]} : VastInfos, content: string, attributes :[{"event":["creativeView"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content: string, attributes :[{"event":["creativeView"]}]): this {
    return this.attachTracking(content: string, attributes :[{"event":["creativeView"]}]).and();
  }
    }
class Companion_68 extends VastElement<CompanionAds_67> {
      
  public attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): StaticResource_69 {
    const newElem = new StaticResource_69('StaticResource', this, {"attrs":["creativeType"]} : VastInfos, content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): this {
    return this.attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]).and();
  }
  public attachIFrameResource(content: string): IFrameResource_70 {
    const newElem = new IFrameResource_70('IFrameResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content: string): this {
    return this.attachIFrameResource(content: string).and();
  }
  public attachHTMLResource(content: string): HTMLResource_71 {
    const newElem = new HTMLResource_71('HTMLResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content: string): this {
    return this.attachHTMLResource(content: string).and();
  }
  public attachAdParameters(content: string, attributes :["xmlEncoded"]): AdParameters_72 {
    const newElem = new AdParameters_72('AdParameters', this, {"attrs":["xmlEncoded"]} : VastInfos, content: string, attributes :["xmlEncoded"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdParameters(content: string, attributes :["xmlEncoded"]): this {
    return this.attachAdParameters(content: string, attributes :["xmlEncoded"]).and();
  }
  public attachAltText(content: string): AltText_73 {
    const newElem = new AltText_73('AltText', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addAltText(content: string): this {
    return this.attachAltText(content: string).and();
  }
  public attachCompanionClickThrough(content: string): CompanionClickThrough_74 {
    const newElem = new CompanionClickThrough_74('CompanionClickThrough', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addCompanionClickThrough(content: string): this {
    return this.attachCompanionClickThrough(content: string).and();
  }
  public attachCompanionClickTracking(content: string, attributes :["id"]): CompanionClickTracking_75 {
    const newElem = new CompanionClickTracking_75('CompanionClickTracking', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addCompanionClickTracking(content: string, attributes :["id"]): this {
    return this.attachCompanionClickTracking(content: string, attributes :["id"]).and();
  }
  public attachTrackingEvents(): TrackingEvents_76 {
    const newElem = new TrackingEvents_76('TrackingEvents', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
    }
class CompanionAds_67 extends VastElement<Creative_33> {
      
  public attachCompanion(attributes): Companion_68 {
    const newElem = new Companion_68('Companion', this, {"attrs":["width","height","id","assetWidth","assetHeight","expandedWidth","expandedHeight","apiFramework","adSlotID","pxratio","renderingMode"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class Creative_33 extends VastElement<Creatives_32> {
      
  public attachUniversalAdId(content: string, attributes :[{"idRegistry":null},"idValue"]): UniversalAdId_34 {
    const newElem = new UniversalAdId_34('UniversalAdId', this, {"attrs":["idRegistry","idValue"]} : VastInfos, content: string, attributes :[{"idRegistry":null},"idValue"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addUniversalAdId(content: string, attributes :[{"idRegistry":null},"idValue"]): this {
    return this.attachUniversalAdId(content: string, attributes :[{"idRegistry":null},"idValue"]).and();
  }
  public attachCreativeExtensions(): CreativeExtensions_35 {
    const newElem = new CreativeExtensions_35('CreativeExtensions', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachLinear(attributes): Linear_37 {
    const newElem = new Linear_37('Linear', this, {"attrs":["skipoffset"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public attachNonLinearAds(): NonLinearAds_61 {
    const newElem = new NonLinearAds_61('NonLinearAds', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachCompanionAds(attributes): CompanionAds_67 {
    const newElem = new CompanionAds_67('CompanionAds', this, {"attrs":["required"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class Creatives_32 extends VastElement<InLine_7> {
      
  public attachCreative(attributes): Creative_33 {
    const newElem = new Creative_33('Creative', this, {"attrs":["id","sequence","adId","apiFramework"]} : VastInfos, attributes);
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
  public attachAdServingID(content: string): AdServingID_11 {
    const newElem = new AdServingID_11('AdServingID', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdServingID(content: string): this {
    return this.attachAdServingID(content: string).and();
  }
  public attachCategory(content: string, attributes :[{"authority":null}]): Category_12 {
    const newElem = new Category_12('Category', this, {"attrs":["authority"]} : VastInfos, content: string, attributes :[{"authority":null}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addCategory(content: string, attributes :[{"authority":null}]): this {
    return this.attachCategory(content: string, attributes :[{"authority":null}]).and();
  }
  public attachDescription(content: string): Description_13 {
    const newElem = new Description_13('Description', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addDescription(content: string): this {
    return this.attachDescription(content: string).and();
  }
  public attachAdvertiser(content: string, attributes :["id"]): Advertiser_14 {
    const newElem = new Advertiser_14('Advertiser', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdvertiser(content: string, attributes :["id"]): this {
    return this.attachAdvertiser(content: string, attributes :["id"]).and();
  }
  public attachPricing(content: string, attributes :[{"currency":null},{"model":["CPM","CPC","CPE","CPV"]}]): Pricing_15 {
    const newElem = new Pricing_15('Pricing', this, {"attrs":["currency","model"]} : VastInfos, content: string, attributes :[{"currency":null},{"model":["CPM","CPC","CPE","CPV"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addPricing(content: string, attributes :[{"currency":null},{"model":["CPM","CPC","CPE","CPV"]}]): this {
    return this.attachPricing(content: string, attributes :[{"currency":null},{"model":["CPM","CPC","CPE","CPV"]}]).and();
  }
  public attachSurvey(content: string, attributes :["type"]): Survey_16 {
    const newElem = new Survey_16('Survey', this, {"attrs":["type"]} : VastInfos, content: string, attributes :["type"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addSurvey(content: string, attributes :["type"]): this {
    return this.attachSurvey(content: string, attributes :["type"]).and();
  }
  public attachError(content: string): Error_17 {
    const newElem = new Error_17('Error', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addError(content: string): this {
    return this.attachError(content: string).and();
  }
  public attachExpires(content: string): Expires_18 {
    const newElem = new Expires_18('Expires', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addExpires(content: string): this {
    return this.attachExpires(content: string).and();
  }
  public attachViewableImpression(attributes): ViewableImpression_19 {
    const newElem = new ViewableImpression_19('ViewableImpression', this, {"attrs":["id"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public attachAdVerifications(): AdVerifications_23 {
    const newElem = new AdVerifications_23('AdVerifications', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachExtensions(): Extensions_30 {
    const newElem = new Extensions_30('Extensions', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachCreatives(): Creatives_32 {
    const newElem = new Creatives_32('Creatives', this, {} : VastInfos );
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
      
  public attachViewable(content: string): Viewable_85 {
    const newElem = new Viewable_85('Viewable', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addViewable(content: string): this {
    return this.attachViewable(content: string).and();
  }
  public attachNotViewable(content: string): NotViewable_86 {
    const newElem = new NotViewable_86('NotViewable', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addNotViewable(content: string): this {
    return this.attachNotViewable(content: string).and();
  }
  public attachViewUndetermined(content: string): ViewUndetermined_87 {
    const newElem = new ViewUndetermined_87('ViewUndetermined', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addViewUndetermined(content: string): this {
    return this.attachViewUndetermined(content: string).and();
  }
    }
class JavaScriptResource_90 extends VastElement<Verification_89> {}
class ExecutableResource_91 extends VastElement<Verification_89> {}
class Tracking_93 extends VastElement<TrackingEvents_92> {}
class TrackingEvents_92 extends VastElement<Verification_89> {
      
  public attachTracking(content: string, attributes :["offset",{"event":["verificationNotExecuted"]}]): Tracking_93 {
    const newElem = new Tracking_93('Tracking', this, {"attrs":["offset","event"]} : VastInfos, content: string, attributes :["offset",{"event":["verificationNotExecuted"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content: string, attributes :["offset",{"event":["verificationNotExecuted"]}]): this {
    return this.attachTracking(content: string, attributes :["offset",{"event":["verificationNotExecuted"]}]).and();
  }
    }
class VerificationParameters_94 extends VastElement<Verification_89> {}
class BlockedAdCategories_95 extends VastElement<Verification_89> {}
class Verification_89 extends VastElement<AdVerifications_88> {
      
  public attachJavaScriptResource(content: string, attributes :[{"apiFramework":null},{"browserOptional":null}]): JavaScriptResource_90 {
    const newElem = new JavaScriptResource_90('JavaScriptResource', this, {"attrs":["apiFramework","browserOptional"]} : VastInfos, content: string, attributes :[{"apiFramework":null},{"browserOptional":null}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addJavaScriptResource(content: string, attributes :[{"apiFramework":null},{"browserOptional":null}]): this {
    return this.attachJavaScriptResource(content: string, attributes :[{"apiFramework":null},{"browserOptional":null}]).and();
  }
  public attachExecutableResource(content: string, attributes :[{"apiFramework":null},"language","type"]): ExecutableResource_91 {
    const newElem = new ExecutableResource_91('ExecutableResource', this, {"attrs":["apiFramework","language","type"]} : VastInfos, content: string, attributes :[{"apiFramework":null},"language","type"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addExecutableResource(content: string, attributes :[{"apiFramework":null},"language","type"]): this {
    return this.attachExecutableResource(content: string, attributes :[{"apiFramework":null},"language","type"]).and();
  }
  public attachTrackingEvents(): TrackingEvents_92 {
    const newElem = new TrackingEvents_92('TrackingEvents', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachVerificationParameters(content: string): VerificationParameters_94 {
    const newElem = new VerificationParameters_94('VerificationParameters', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addVerificationParameters(content: string): this {
    return this.attachVerificationParameters(content: string).and();
  }
  public attachBlockedAdCategories(content: string, attributes :[{"authority":null}]): BlockedAdCategories_95 {
    const newElem = new BlockedAdCategories_95('BlockedAdCategories', this, {"attrs":["authority"]} : VastInfos, content: string, attributes :[{"authority":null}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addBlockedAdCategories(content: string, attributes :[{"authority":null}]): this {
    return this.attachBlockedAdCategories(content: string, attributes :[{"authority":null}]).and();
  }
    }
class AdVerifications_88 extends VastElement<Wrapper_78> {
      
  public attachVerification(attributes): Verification_89 {
    const newElem = new Verification_89('Verification', this, {"attrs":["vendor"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class Extension_97 extends VastElement<Extensions_96> {}
class Extensions_96 extends VastElement<Wrapper_78> {
      
  public attachExtension(content: string, attributes :["type"]): Extension_97 {
    const newElem = new Extension_97('Extension', this, {"attrs":["type"]} : VastInfos, content: string, attributes :["type"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addExtension(content: string, attributes :["type"]): this {
    return this.attachExtension(content: string, attributes :["type"]).and();
  }
    }
class Tracking_102 extends VastElement<TrackingEvents_101> {}
class TrackingEvents_101 extends VastElement<Linear_100> {
      
  public attachTracking(content: string, attributes :["offset",{"event":["loaded","start","firstQuartile","midpoint","thirdQuartile","complete","progress","closeLinear","otherAdInteraction","mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","notUsed"]}]): Tracking_102 {
    const newElem = new Tracking_102('Tracking', this, {"attrs":["offset","event"]} : VastInfos, content: string, attributes :["offset",{"event":["loaded","start","firstQuartile","midpoint","thirdQuartile","complete","progress","closeLinear","otherAdInteraction","mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","notUsed"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content: string, attributes :["offset",{"event":["loaded","start","firstQuartile","midpoint","thirdQuartile","complete","progress","closeLinear","otherAdInteraction","mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","notUsed"]}]): this {
    return this.attachTracking(content: string, attributes :["offset",{"event":["loaded","start","firstQuartile","midpoint","thirdQuartile","complete","progress","closeLinear","otherAdInteraction","mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","notUsed"]}]).and();
  }
    }
class ClickTracking_104 extends VastElement<VideoClicks_103> {}
class CustomClick_105 extends VastElement<VideoClicks_103> {}
class VideoClicks_103 extends VastElement<Linear_100> {
      
  public attachClickTracking(content: string, attributes :["id"]): ClickTracking_104 {
    const newElem = new ClickTracking_104('ClickTracking', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addClickTracking(content: string, attributes :["id"]): this {
    return this.attachClickTracking(content: string, attributes :["id"]).and();
  }
  public attachCustomClick(content: string, attributes :["id"]): CustomClick_105 {
    const newElem = new CustomClick_105('CustomClick', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addCustomClick(content: string, attributes :["id"]): this {
    return this.attachCustomClick(content: string, attributes :["id"]).and();
  }
    }
class StaticResource_108 extends VastElement<Icon_107> {}
class IFrameResource_109 extends VastElement<Icon_107> {}
class HTMLResource_110 extends VastElement<Icon_107> {}
class IconClickThrough_112 extends VastElement<IconClicks_111> {}
class IconClickTracking_113 extends VastElement<IconClicks_111> {}
class IconClicks_111 extends VastElement<Icon_107> {
      
  public attachIconClickThrough(content: string): IconClickThrough_112 {
    const newElem = new IconClickThrough_112('IconClickThrough', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addIconClickThrough(content: string): this {
    return this.attachIconClickThrough(content: string).and();
  }
  public attachIconClickTracking(content: string, attributes :["id"]): IconClickTracking_113 {
    const newElem = new IconClickTracking_113('IconClickTracking', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addIconClickTracking(content: string, attributes :["id"]): this {
    return this.attachIconClickTracking(content: string, attributes :["id"]).and();
  }
    }
class IconViewTracking_114 extends VastElement<Icon_107> {}
class Icon_107 extends VastElement<Icons_106> {
      
  public attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): StaticResource_108 {
    const newElem = new StaticResource_108('StaticResource', this, {"attrs":["creativeType"]} : VastInfos, content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): this {
    return this.attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]).and();
  }
  public attachIFrameResource(content: string): IFrameResource_109 {
    const newElem = new IFrameResource_109('IFrameResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content: string): this {
    return this.attachIFrameResource(content: string).and();
  }
  public attachHTMLResource(content: string): HTMLResource_110 {
    const newElem = new HTMLResource_110('HTMLResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content: string): this {
    return this.attachHTMLResource(content: string).and();
  }
  public attachIconClicks(): IconClicks_111 {
    const newElem = new IconClicks_111('IconClicks', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachIconViewTracking(content: string): IconViewTracking_114 {
    const newElem = new IconViewTracking_114('IconViewTracking', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addIconViewTracking(content: string): this {
    return this.attachIconViewTracking(content: string).and();
  }
    }
class Icons_106 extends VastElement<Linear_100> {
      
  public attachIcon(attributes): Icon_107 {
    const newElem = new Icon_107('Icon', this, {"attrs":["program","width","height","xPosition","yPosition","duration","offset","apiFramework","pxratio"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class InteractiveCreativeFile_115 extends VastElement<Linear_100> {}
class Linear_100 extends VastElement<Creative_99> {
      
  public attachTrackingEvents(): TrackingEvents_101 {
    const newElem = new TrackingEvents_101('TrackingEvents', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachVideoClicks(): VideoClicks_103 {
    const newElem = new VideoClicks_103('VideoClicks', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachIcons(): Icons_106 {
    const newElem = new Icons_106('Icons', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachInteractiveCreativeFile(content: string, attributes :["type","apiFramework","variableDuration"]): InteractiveCreativeFile_115 {
    const newElem = new InteractiveCreativeFile_115('InteractiveCreativeFile', this, {"attrs":["type","apiFramework","variableDuration"]} : VastInfos, content: string, attributes :["type","apiFramework","variableDuration"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addInteractiveCreativeFile(content: string, attributes :["type","apiFramework","variableDuration"]): this {
    return this.attachInteractiveCreativeFile(content: string, attributes :["type","apiFramework","variableDuration"]).and();
  }
    }
class NonLinearClickThrough_118 extends VastElement<NonLinear_117> {}
class NonLinearClickTracking_119 extends VastElement<NonLinear_117> {}
class NonLinear_117 extends VastElement<NonLinearAds_116> {
      
  public attachNonLinearClickThrough(content: string): NonLinearClickThrough_118 {
    const newElem = new NonLinearClickThrough_118('NonLinearClickThrough', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addNonLinearClickThrough(content: string): this {
    return this.attachNonLinearClickThrough(content: string).and();
  }
  public attachNonLinearClickTracking(content: string): NonLinearClickTracking_119 {
    const newElem = new NonLinearClickTracking_119('NonLinearClickTracking', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addNonLinearClickTracking(content: string): this {
    return this.attachNonLinearClickTracking(content: string).and();
  }
    }
class Tracking_121 extends VastElement<TrackingEvents_120> {}
class TrackingEvents_120 extends VastElement<NonLinearAds_116> {
      
  public attachTracking(content: string, attributes :[{"event":["creativeView","acceptInvitation","adExpand","adCollapse","minimize","close","overlayViewDuration","otherAdInteraction","mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","notUsed"]}]): Tracking_121 {
    const newElem = new Tracking_121('Tracking', this, {"attrs":["event"]} : VastInfos, content: string, attributes :[{"event":["creativeView","acceptInvitation","adExpand","adCollapse","minimize","close","overlayViewDuration","otherAdInteraction","mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","notUsed"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content: string, attributes :[{"event":["creativeView","acceptInvitation","adExpand","adCollapse","minimize","close","overlayViewDuration","otherAdInteraction","mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","notUsed"]}]): this {
    return this.attachTracking(content: string, attributes :[{"event":["creativeView","acceptInvitation","adExpand","adCollapse","minimize","close","overlayViewDuration","otherAdInteraction","mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","notUsed"]}]).and();
  }
    }
class NonLinearAds_116 extends VastElement<Creative_99> {
      
  public attachNonLinear(attributes): NonLinear_117 {
    const newElem = new NonLinear_117('NonLinear', this, {"attrs":["id","width","height","expandedWidth","expandedHeight","scalable","maintainAspectRatio","apiFramework","minSuggestedDuration"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public attachTrackingEvents(): TrackingEvents_120 {
    const newElem = new TrackingEvents_120('TrackingEvents', this, {} : VastInfos );
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
      
  public attachTracking(content: string, attributes :[{"event":["creativeView"]}]): Tracking_132 {
    const newElem = new Tracking_132('Tracking', this, {"attrs":["event"]} : VastInfos, content: string, attributes :[{"event":["creativeView"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content: string, attributes :[{"event":["creativeView"]}]): this {
    return this.attachTracking(content: string, attributes :[{"event":["creativeView"]}]).and();
  }
    }
class Companion_123 extends VastElement<CompanionAds_122> {
      
  public attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): StaticResource_124 {
    const newElem = new StaticResource_124('StaticResource', this, {"attrs":["creativeType"]} : VastInfos, content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): this {
    return this.attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]).and();
  }
  public attachIFrameResource(content: string): IFrameResource_125 {
    const newElem = new IFrameResource_125('IFrameResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content: string): this {
    return this.attachIFrameResource(content: string).and();
  }
  public attachHTMLResource(content: string): HTMLResource_126 {
    const newElem = new HTMLResource_126('HTMLResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content: string): this {
    return this.attachHTMLResource(content: string).and();
  }
  public attachAdParameters(content: string, attributes :["xmlEncoded"]): AdParameters_127 {
    const newElem = new AdParameters_127('AdParameters', this, {"attrs":["xmlEncoded"]} : VastInfos, content: string, attributes :["xmlEncoded"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdParameters(content: string, attributes :["xmlEncoded"]): this {
    return this.attachAdParameters(content: string, attributes :["xmlEncoded"]).and();
  }
  public attachAltText(content: string): AltText_128 {
    const newElem = new AltText_128('AltText', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addAltText(content: string): this {
    return this.attachAltText(content: string).and();
  }
  public attachCompanionClickThrough(content: string): CompanionClickThrough_129 {
    const newElem = new CompanionClickThrough_129('CompanionClickThrough', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addCompanionClickThrough(content: string): this {
    return this.attachCompanionClickThrough(content: string).and();
  }
  public attachCompanionClickTracking(content: string, attributes :["id"]): CompanionClickTracking_130 {
    const newElem = new CompanionClickTracking_130('CompanionClickTracking', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addCompanionClickTracking(content: string, attributes :["id"]): this {
    return this.attachCompanionClickTracking(content: string, attributes :["id"]).and();
  }
  public attachTrackingEvents(): TrackingEvents_131 {
    const newElem = new TrackingEvents_131('TrackingEvents', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
    }
class CompanionAds_122 extends VastElement<Creative_99> {
      
  public attachCompanion(attributes): Companion_123 {
    const newElem = new Companion_123('Companion', this, {"attrs":["width","height","id","assetWidth","assetHeight","expandedWidth","expandedHeight","apiFramework","adSlotID","pxratio","renderingMode"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class Creative_99 extends VastElement<Creatives_98> {
      
  public attachLinear(): Linear_100 {
    const newElem = new Linear_100('Linear', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachNonLinearAds(): NonLinearAds_116 {
    const newElem = new NonLinearAds_116('NonLinearAds', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachCompanionAds(attributes): CompanionAds_122 {
    const newElem = new CompanionAds_122('CompanionAds', this, {"attrs":["required"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class Creatives_98 extends VastElement<Wrapper_78> {
      
  public attachCreative(attributes): Creative_99 {
    const newElem = new Creative_99('Creative', this, {"attrs":["id","sequence","adId"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class Wrapper_78 extends VastElement<Ad_6> {
      
  public attachImpression(content: string, attributes :["id"]): Impression_79 {
    const newElem = new Impression_79('Impression', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addImpression(content: string, attributes :["id"]): this {
    return this.attachImpression(content: string, attributes :["id"]).and();
  }
  public attachVASTAdTagURI(content: string): VASTAdTagURI_80 {
    const newElem = new VASTAdTagURI_80('VASTAdTagURI', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addVASTAdTagURI(content: string): this {
    return this.attachVASTAdTagURI(content: string).and();
  }
  public attachAdSystem(content: string, attributes :["version"]): AdSystem_81 {
    const newElem = new AdSystem_81('AdSystem', this, {"attrs":["version"]} : VastInfos, content: string, attributes :["version"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdSystem(content: string, attributes :["version"]): this {
    return this.attachAdSystem(content: string, attributes :["version"]).and();
  }
  public attachPricing(content: string, attributes :[{"currency":null},{"model":["CPM","CPC","CPE","CPV"]}]): Pricing_82 {
    const newElem = new Pricing_82('Pricing', this, {"attrs":["currency","model"]} : VastInfos, content: string, attributes :[{"currency":null},{"model":["CPM","CPC","CPE","CPV"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addPricing(content: string, attributes :[{"currency":null},{"model":["CPM","CPC","CPE","CPV"]}]): this {
    return this.attachPricing(content: string, attributes :[{"currency":null},{"model":["CPM","CPC","CPE","CPV"]}]).and();
  }
  public attachError(content: string): Error_83 {
    const newElem = new Error_83('Error', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addError(content: string): this {
    return this.attachError(content: string).and();
  }
  public attachViewableImpression(attributes): ViewableImpression_84 {
    const newElem = new ViewableImpression_84('ViewableImpression', this, {"attrs":["id"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public attachAdVerifications(): AdVerifications_88 {
    const newElem = new AdVerifications_88('AdVerifications', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachExtensions(): Extensions_96 {
    const newElem = new Extensions_96('Extensions', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachCreatives(): Creatives_98 {
    const newElem = new Creatives_98('Creatives', this, {} : VastInfos );
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
  public attachWrapper(attributes): Wrapper_78 {
    const newElem = new Wrapper_78('Wrapper', this, {"attrs":["followAdditonalWrappers","allowMultipleAds","fallbackOnNoAd"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class VAST_4 extends VastElement<apiv4_1> {
      
  public attachError(content: string): Error_5 {
    const newElem = new Error_5('Error', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addError(content: string): this {
    return this.attachError(content: string).and();
  }
  public attachAd(attributes): Ad_6 {
    const newElem = new Ad_6('Ad', this, {"attrs":["id","sequence","conditionalAd","adType"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class apiv4_1 extends VastElement<apiv4_1> {
      
  public attachVAST(attributes): VAST_4 {
    const newElem = new VAST_4('VAST', this, {"attrs":["version"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }


export const validator = {"only":{"VAST":{"alo":{"Ad":{"uniq":{"InLine":{"required":{"AdSystem":{},"AdTitle":{},"AdServingID":{},"Creatives":{"alo":{"Creative":{"required":{"UniversalAdId":{"attrsRequired":{"idRegistry":null}}},"uniq":{"Linear":{"required":{"Duration":{},"MediaFiles":{"alo":{"MediaFile":{"attrsRequired":{"delivery":["progressive","streaming"],"type":null,"width":null,"height":null}}},"follow":{"Mezzanine":{"attrsRequired":{"delivery":["progressive","streaming"],"type":null,"width":null,"height":null}},"InteractiveCreativeFile":{},"ClosedCaptionFiles":{"follow":{"ClosedCaptionFile":{}}}}}},"follow":{"AdParameters":{},"VideoClicks":{"follow":{"ClickThrough":{},"ClickTracking":{},"CustomClick":{}}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["loaded","start","firstQuartile","midpoint","thirdQuartile","complete","progress","closeLinear","otherAdInteraction","mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","notUsed"]}}}},"Icons":{"alo":{"Icon":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"IconClicks":{"follow":{"IconClickThrough":{},"IconClickTracking":{}}},"IconViewTracking":{}}}}}}},"NonLinearAds":{"follow":{"NonLinear":{"follow":{"NonLinearClickThrough":{},"NonLinearClickTracking":{}},"attrsRequired":{"width":null,"height":null}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView","acceptInvitation","adExpand","adCollapse","minimize","close","overlayViewDuration","otherAdInteraction","mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","notUsed"]}}}}}},"CompanionAds":{"follow":{"Companion":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"AdParameters":{},"AltText":{},"CompanionClickThrough":{},"CompanionClickTracking":{},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView"]}}}}},"attrsRequired":{"width":null,"height":null}}},"attrsRequired":{"required":["all","any","none"]}}},"follow":{"CreativeExtensions":{"follow":{"CreativeExtension":{}}}}}}}},"alo":{"Impression":{}},"follow":{"Category":{"attrsRequired":{"authority":null}},"Description":{},"Advertiser":{},"Pricing":{"attrsRequired":{"currency":null,"model":["CPM","CPC","CPE","CPV"]}},"Survey":{},"Error":{},"Expires":{},"ViewableImpression":{"follow":{"Viewable":{},"NotViewable":{},"ViewUndetermined":{}}},"AdVerifications":{"follow":{"Verification":{"follow":{"JavaScriptResource":{"attrsRequired":{"apiFramework":null,"browserOptional":null}},"ExecutableResource":{"attrsRequired":{"apiFramework":null}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["verificationNotExecuted"]}}}},"VerificationParameters":{}},"attrsRequired":{"vendor":null}}}},"Extensions":{"required":{"Extension":{}}}}},"Wrapper":{"required":{"VASTAdTagURI":{},"AdSystem":{}},"alo":{"Impression":{}},"follow":{"Pricing":{"attrsRequired":{"currency":null,"model":["CPM","CPC","CPE","CPV"]}},"Error":{},"ViewableImpression":{"follow":{"Viewable":{},"NotViewable":{},"ViewUndetermined":{}}},"AdVerifications":{"follow":{"Verification":{"follow":{"JavaScriptResource":{"attrsRequired":{"apiFramework":null,"browserOptional":null}},"ExecutableResource":{"attrsRequired":{"apiFramework":null}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["verificationNotExecuted"]}}}},"VerificationParameters":{},"BlockedAdCategories":{"attrsRequired":{"authority":null}}},"attrsRequired":{"vendor":null}}}},"Extensions":{"follow":{"Extension":{}}},"Creatives":{"follow":{"Creative":{"uniq":{"Linear":{"follow":{"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["loaded","start","firstQuartile","midpoint","thirdQuartile","complete","progress","closeLinear","otherAdInteraction","mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","notUsed"]}}}},"VideoClicks":{"follow":{"ClickTracking":{},"CustomClick":{}}},"Icons":{"alo":{"Icon":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"IconClicks":{"follow":{"IconClickThrough":{},"IconClickTracking":{}}},"IconViewTracking":{}}}}},"InteractiveCreativeFile":{}}},"NonLinearAds":{"follow":{"NonLinear":{"follow":{"NonLinearClickThrough":{},"NonLinearClickTracking":{}},"attrsRequired":{"width":null,"height":null}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView","acceptInvitation","adExpand","adCollapse","minimize","close","overlayViewDuration","otherAdInteraction","mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","notUsed"]}}}}}},"CompanionAds":{"follow":{"Companion":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"AdParameters":{},"AltText":{},"CompanionClickThrough":{},"CompanionClickTracking":{},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView"]}}}}},"attrsRequired":{"width":null,"height":null}}},"attrsRequired":{"required":["all","any","none"]}}}}}}}}}}},"follow":{"Error":{}},"attrsRequired":{"version":["4.1"]}}}};

export apiv4_1;
