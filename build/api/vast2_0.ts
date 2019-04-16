
// this file is generated, dont edit it

/* tslint:disable: class-name */
import VastElement from '../../src/vast-element';

interface VastInfos {
  attrs?: Array<string>;
  required?: boolean;
  uniq?: boolean;
  alo?: boolean;
};


class AdSystem_5 extends VastElement<InLine_4> {}
class AdTitle_6 extends VastElement<InLine_4> {}
class Description_7 extends VastElement<InLine_4> {}
class Survey_8 extends VastElement<InLine_4> {}
class Error_9 extends VastElement<InLine_4> {}
class Impression_10 extends VastElement<InLine_4> {}
class Duration_14 extends VastElement<Linear_13> {}
class Tracking_16 extends VastElement<TrackingEvents_15> {}
class TrackingEvents_15 extends VastElement<Linear_13> {
      
  public attachTracking(content: string, attributes :[{"event":["creativeView","start","midpoint","firstQuartile","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","expand","collapse","acceptInvitation","close"]}]): Tracking_16 {
    const newElem = new Tracking_16('Tracking', this, {"attrs":["event"]} : VastInfos, content: string, attributes :[{"event":["creativeView","start","midpoint","firstQuartile","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","expand","collapse","acceptInvitation","close"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content: string, attributes :[{"event":["creativeView","start","midpoint","firstQuartile","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","expand","collapse","acceptInvitation","close"]}]): this {
    return this.attachTracking(content: string, attributes :[{"event":["creativeView","start","midpoint","firstQuartile","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","expand","collapse","acceptInvitation","close"]}]).and();
  }
    }
class AdParameters_17 extends VastElement<Linear_13> {}
class ClickThrough_19 extends VastElement<VideoClicks_18> {}
class ClickTracking_20 extends VastElement<VideoClicks_18> {}
class CustomClick_21 extends VastElement<VideoClicks_18> {}
class VideoClicks_18 extends VastElement<Linear_13> {
      
  public attachClickThrough(content: string): ClickThrough_19 {
    const newElem = new ClickThrough_19('ClickThrough', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addClickThrough(content: string): this {
    return this.attachClickThrough(content: string).and();
  }
  public attachClickTracking(content: string): ClickTracking_20 {
    const newElem = new ClickTracking_20('ClickTracking', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addClickTracking(content: string): this {
    return this.attachClickTracking(content: string).and();
  }
  public attachCustomClick(content: string, attributes :["id"]): CustomClick_21 {
    const newElem = new CustomClick_21('CustomClick', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addCustomClick(content: string, attributes :["id"]): this {
    return this.attachCustomClick(content: string, attributes :["id"]).and();
  }
    }
class MediaFile_23 extends VastElement<MediaFiles_22> {}
class MediaFiles_22 extends VastElement<Linear_13> {
      
  public attachMediaFile(content: string, attributes :["id",{"delivery":["progressive","streaming"]},{"type":null},"bitrate",{"width":null},{"height":null},"scalable","mantainAspectRatio","apiFramework"]): MediaFile_23 {
    const newElem = new MediaFile_23('MediaFile', this, {"attrs":["id","delivery","type","bitrate","width","height","scalable","mantainAspectRatio","apiFramework"]} : VastInfos, content: string, attributes :["id",{"delivery":["progressive","streaming"]},{"type":null},"bitrate",{"width":null},{"height":null},"scalable","mantainAspectRatio","apiFramework"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addMediaFile(content: string, attributes :["id",{"delivery":["progressive","streaming"]},{"type":null},"bitrate",{"width":null},{"height":null},"scalable","mantainAspectRatio","apiFramework"]): this {
    return this.attachMediaFile(content: string, attributes :["id",{"delivery":["progressive","streaming"]},{"type":null},"bitrate",{"width":null},{"height":null},"scalable","mantainAspectRatio","apiFramework"]).and();
  }
    }
class Linear_13 extends VastElement<Creative_12> {
      
  public attachDuration(content: string): Duration_14 {
    const newElem = new Duration_14('Duration', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addDuration(content: string): this {
    return this.attachDuration(content: string).and();
  }
  public attachTrackingEvents(): TrackingEvents_15 {
    const newElem = new TrackingEvents_15('TrackingEvents', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachAdParameters(content: string): AdParameters_17 {
    const newElem = new AdParameters_17('AdParameters', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdParameters(content: string): this {
    return this.attachAdParameters(content: string).and();
  }
  public attachVideoClicks(): VideoClicks_18 {
    const newElem = new VideoClicks_18('VideoClicks', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachMediaFiles(): MediaFiles_22 {
    const newElem = new MediaFiles_22('MediaFiles', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
    }
class StaticResource_26 extends VastElement<Companion_25> {}
class IFrameResource_27 extends VastElement<Companion_25> {}
class HTMLResource_28 extends VastElement<Companion_25> {}
class Tracking_30 extends VastElement<TrackingEvents_29> {}
class TrackingEvents_29 extends VastElement<Companion_25> {
      
  public attachTracking(content: string, attributes :[{"event":["creativeView"]}]): Tracking_30 {
    const newElem = new Tracking_30('Tracking', this, {"attrs":["event"]} : VastInfos, content: string, attributes :[{"event":["creativeView"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content: string, attributes :[{"event":["creativeView"]}]): this {
    return this.attachTracking(content: string, attributes :[{"event":["creativeView"]}]).and();
  }
    }
class CompanionClickThrough_31 extends VastElement<Companion_25> {}
class AltText_32 extends VastElement<Companion_25> {}
class AdParameters_33 extends VastElement<Companion_25> {}
class Companion_25 extends VastElement<CompanionAds_24> {
      
  public attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): StaticResource_26 {
    const newElem = new StaticResource_26('StaticResource', this, {"attrs":["creativeType"]} : VastInfos, content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): this {
    return this.attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]).and();
  }
  public attachIFrameResource(content: string): IFrameResource_27 {
    const newElem = new IFrameResource_27('IFrameResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content: string): this {
    return this.attachIFrameResource(content: string).and();
  }
  public attachHTMLResource(content: string): HTMLResource_28 {
    const newElem = new HTMLResource_28('HTMLResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content: string): this {
    return this.attachHTMLResource(content: string).and();
  }
  public attachTrackingEvents(): TrackingEvents_29 {
    const newElem = new TrackingEvents_29('TrackingEvents', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachCompanionClickThrough(content: string): CompanionClickThrough_31 {
    const newElem = new CompanionClickThrough_31('CompanionClickThrough', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addCompanionClickThrough(content: string): this {
    return this.attachCompanionClickThrough(content: string).and();
  }
  public attachAltText(content: string): AltText_32 {
    const newElem = new AltText_32('AltText', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addAltText(content: string): this {
    return this.attachAltText(content: string).and();
  }
  public attachAdParameters(content: string): AdParameters_33 {
    const newElem = new AdParameters_33('AdParameters', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdParameters(content: string): this {
    return this.attachAdParameters(content: string).and();
  }
    }
class CompanionAds_24 extends VastElement<Creative_12> {
      
  public attachCompanion(attributes): Companion_25 {
    const newElem = new Companion_25('Companion', this, {"attrs":["id","width","height","expandedWidth","expandedHeight","apiFramework"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class StaticResource_36 extends VastElement<NonLinear_35> {}
class IFrameResource_37 extends VastElement<NonLinear_35> {}
class HTMLResource_38 extends VastElement<NonLinear_35> {}
class NonLinear_35 extends VastElement<NonLinearAds_34> {
      
  public attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): StaticResource_36 {
    const newElem = new StaticResource_36('StaticResource', this, {"attrs":["creativeType"]} : VastInfos, content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): this {
    return this.attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]).and();
  }
  public attachIFrameResource(content: string): IFrameResource_37 {
    const newElem = new IFrameResource_37('IFrameResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content: string): this {
    return this.attachIFrameResource(content: string).and();
  }
  public attachHTMLResource(content: string): HTMLResource_38 {
    const newElem = new HTMLResource_38('HTMLResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content: string): this {
    return this.attachHTMLResource(content: string).and();
  }
    }
class Tracking_40 extends VastElement<TrackingEvents_39> {}
class TrackingEvents_39 extends VastElement<NonLinearAds_34> {
      
  public attachTracking(content: string, attributes :[{"event":["creativeView","start","midpoint","firstQuartile","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","expand","collapse","acceptInvitation","close"]}]): Tracking_40 {
    const newElem = new Tracking_40('Tracking', this, {"attrs":["event"]} : VastInfos, content: string, attributes :[{"event":["creativeView","start","midpoint","firstQuartile","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","expand","collapse","acceptInvitation","close"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content: string, attributes :[{"event":["creativeView","start","midpoint","firstQuartile","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","expand","collapse","acceptInvitation","close"]}]): this {
    return this.attachTracking(content: string, attributes :[{"event":["creativeView","start","midpoint","firstQuartile","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","expand","collapse","acceptInvitation","close"]}]).and();
  }
    }
class NonLinearClickThrough_41 extends VastElement<NonLinearAds_34> {}
class AdParameters_42 extends VastElement<NonLinearAds_34> {}
class NonLinearAds_34 extends VastElement<Creative_12> {
      
  public attachNonLinear(attributes): NonLinear_35 {
    const newElem = new NonLinear_35('NonLinear', this, {"attrs":["id","width","height","expandedWidth","expandedHeight","scalable","maintainAspectRatio","minSuggestedDuration","apiFramework"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public attachTrackingEvents(): TrackingEvents_39 {
    const newElem = new TrackingEvents_39('TrackingEvents', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachNonLinearClickThrough(content: string): NonLinearClickThrough_41 {
    const newElem = new NonLinearClickThrough_41('NonLinearClickThrough', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addNonLinearClickThrough(content: string): this {
    return this.attachNonLinearClickThrough(content: string).and();
  }
  public attachAdParameters(content: string): AdParameters_42 {
    const newElem = new AdParameters_42('AdParameters', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdParameters(content: string): this {
    return this.attachAdParameters(content: string).and();
  }
    }
class Creative_12 extends VastElement<Creatives_11> {
      
  public attachLinear(): Linear_13 {
    const newElem = new Linear_13('Linear', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachCompanionAds(): CompanionAds_24 {
    const newElem = new CompanionAds_24('CompanionAds', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachNonLinearAds(): NonLinearAds_34 {
    const newElem = new NonLinearAds_34('NonLinearAds', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
    }
class Creatives_11 extends VastElement<InLine_4> {
      
  public attachCreative(attributes): Creative_12 {
    const newElem = new Creative_12('Creative', this, {"attrs":["id","sequence","adID"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class Extension_44 extends VastElement<Extensions_43> {}
class Extensions_43 extends VastElement<InLine_4> {
      
  public attachExtension(content: string, attributes :["type"]): Extension_44 {
    const newElem = new Extension_44('Extension', this, {"attrs":["type"]} : VastInfos, content: string, attributes :["type"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addExtension(content: string, attributes :["type"]): this {
    return this.attachExtension(content: string, attributes :["type"]).and();
  }
    }
class InLine_4 extends VastElement<Ad_3> {
      
  public attachAdSystem(content: string, attributes :["version"]): AdSystem_5 {
    const newElem = new AdSystem_5('AdSystem', this, {"attrs":["version"]} : VastInfos, content: string, attributes :["version"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdSystem(content: string, attributes :["version"]): this {
    return this.attachAdSystem(content: string, attributes :["version"]).and();
  }
  public attachAdTitle(content: string): AdTitle_6 {
    const newElem = new AdTitle_6('AdTitle', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdTitle(content: string): this {
    return this.attachAdTitle(content: string).and();
  }
  public attachDescription(content: string): Description_7 {
    const newElem = new Description_7('Description', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addDescription(content: string): this {
    return this.attachDescription(content: string).and();
  }
  public attachSurvey(content: string): Survey_8 {
    const newElem = new Survey_8('Survey', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addSurvey(content: string): this {
    return this.attachSurvey(content: string).and();
  }
  public attachError(content: string): Error_9 {
    const newElem = new Error_9('Error', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addError(content: string): this {
    return this.attachError(content: string).and();
  }
  public attachImpression(content: string, attributes :["id"]): Impression_10 {
    const newElem = new Impression_10('Impression', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addImpression(content: string, attributes :["id"]): this {
    return this.attachImpression(content: string, attributes :["id"]).and();
  }
  public attachCreatives(): Creatives_11 {
    const newElem = new Creatives_11('Creatives', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachExtensions(): Extensions_43 {
    const newElem = new Extensions_43('Extensions', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
    }
class AdSystem_46 extends VastElement<Wrapper_45> {}
class VASTAdTagURI_47 extends VastElement<Wrapper_45> {}
class Error_48 extends VastElement<Wrapper_45> {}
class Impression_49 extends VastElement<Wrapper_45> {}
class Tracking_54 extends VastElement<TrackingEvents_53> {}
class TrackingEvents_53 extends VastElement<Linear_52> {
      
  public attachTracking(content: string, attributes :[{"event":["creativeView","start","midpoint","firstQuartile","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","expand","collapse","acceptInvitation","close"]}]): Tracking_54 {
    const newElem = new Tracking_54('Tracking', this, {"attrs":["event"]} : VastInfos, content: string, attributes :[{"event":["creativeView","start","midpoint","firstQuartile","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","expand","collapse","acceptInvitation","close"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content: string, attributes :[{"event":["creativeView","start","midpoint","firstQuartile","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","expand","collapse","acceptInvitation","close"]}]): this {
    return this.attachTracking(content: string, attributes :[{"event":["creativeView","start","midpoint","firstQuartile","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","expand","collapse","acceptInvitation","close"]}]).and();
  }
    }
class ClickThrough_56 extends VastElement<VideoClicks_55> {}
class ClickTracking_57 extends VastElement<VideoClicks_55> {}
class CustomClick_58 extends VastElement<VideoClicks_55> {}
class VideoClicks_55 extends VastElement<Linear_52> {
      
  public attachClickThrough(content: string): ClickThrough_56 {
    const newElem = new ClickThrough_56('ClickThrough', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addClickThrough(content: string): this {
    return this.attachClickThrough(content: string).and();
  }
  public attachClickTracking(content: string): ClickTracking_57 {
    const newElem = new ClickTracking_57('ClickTracking', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addClickTracking(content: string): this {
    return this.attachClickTracking(content: string).and();
  }
  public attachCustomClick(content: string, attributes :["id"]): CustomClick_58 {
    const newElem = new CustomClick_58('CustomClick', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addCustomClick(content: string, attributes :["id"]): this {
    return this.attachCustomClick(content: string, attributes :["id"]).and();
  }
    }
class Linear_52 extends VastElement<Creative_51> {
      
  public attachTrackingEvents(): TrackingEvents_53 {
    const newElem = new TrackingEvents_53('TrackingEvents', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachVideoClicks(): VideoClicks_55 {
    const newElem = new VideoClicks_55('VideoClicks', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
    }
class StaticResource_61 extends VastElement<Companion_60> {}
class IFrameResource_62 extends VastElement<Companion_60> {}
class HTMLResource_63 extends VastElement<Companion_60> {}
class Tracking_65 extends VastElement<TrackingEvents_64> {}
class TrackingEvents_64 extends VastElement<Companion_60> {
      
  public attachTracking(content: string, attributes :[{"event":["creativeView"]}]): Tracking_65 {
    const newElem = new Tracking_65('Tracking', this, {"attrs":["event"]} : VastInfos, content: string, attributes :[{"event":["creativeView"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content: string, attributes :[{"event":["creativeView"]}]): this {
    return this.attachTracking(content: string, attributes :[{"event":["creativeView"]}]).and();
  }
    }
class CompanionClickThrough_66 extends VastElement<Companion_60> {}
class AltText_67 extends VastElement<Companion_60> {}
class AdParameters_68 extends VastElement<Companion_60> {}
class Companion_60 extends VastElement<CompanionAds_59> {
      
  public attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): StaticResource_61 {
    const newElem = new StaticResource_61('StaticResource', this, {"attrs":["creativeType"]} : VastInfos, content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): this {
    return this.attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]).and();
  }
  public attachIFrameResource(content: string): IFrameResource_62 {
    const newElem = new IFrameResource_62('IFrameResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content: string): this {
    return this.attachIFrameResource(content: string).and();
  }
  public attachHTMLResource(content: string): HTMLResource_63 {
    const newElem = new HTMLResource_63('HTMLResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content: string): this {
    return this.attachHTMLResource(content: string).and();
  }
  public attachTrackingEvents(): TrackingEvents_64 {
    const newElem = new TrackingEvents_64('TrackingEvents', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachCompanionClickThrough(content: string): CompanionClickThrough_66 {
    const newElem = new CompanionClickThrough_66('CompanionClickThrough', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addCompanionClickThrough(content: string): this {
    return this.attachCompanionClickThrough(content: string).and();
  }
  public attachAltText(content: string): AltText_67 {
    const newElem = new AltText_67('AltText', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addAltText(content: string): this {
    return this.attachAltText(content: string).and();
  }
  public attachAdParameters(content: string): AdParameters_68 {
    const newElem = new AdParameters_68('AdParameters', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdParameters(content: string): this {
    return this.attachAdParameters(content: string).and();
  }
    }
class CompanionAds_59 extends VastElement<Creative_51> {
      
  public attachCompanion(attributes): Companion_60 {
    const newElem = new Companion_60('Companion', this, {"attrs":["id","width","height","expandedWidth","expandedHeight","apiFramework"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class StaticResource_71 extends VastElement<NonLinear_70> {}
class IFrameResource_72 extends VastElement<NonLinear_70> {}
class HTMLResource_73 extends VastElement<NonLinear_70> {}
class NonLinear_70 extends VastElement<NonLinearAds_69> {
      
  public attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): StaticResource_71 {
    const newElem = new StaticResource_71('StaticResource', this, {"attrs":["creativeType"]} : VastInfos, content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): this {
    return this.attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]).and();
  }
  public attachIFrameResource(content: string): IFrameResource_72 {
    const newElem = new IFrameResource_72('IFrameResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content: string): this {
    return this.attachIFrameResource(content: string).and();
  }
  public attachHTMLResource(content: string): HTMLResource_73 {
    const newElem = new HTMLResource_73('HTMLResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content: string): this {
    return this.attachHTMLResource(content: string).and();
  }
    }
class Tracking_75 extends VastElement<TrackingEvents_74> {}
class TrackingEvents_74 extends VastElement<NonLinearAds_69> {
      
  public attachTracking(content: string, attributes :[{"event":["creativeView","start","midpoint","firstQuartile","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","expand","collapse","acceptInvitation","close"]}]): Tracking_75 {
    const newElem = new Tracking_75('Tracking', this, {"attrs":["event"]} : VastInfos, content: string, attributes :[{"event":["creativeView","start","midpoint","firstQuartile","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","expand","collapse","acceptInvitation","close"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content: string, attributes :[{"event":["creativeView","start","midpoint","firstQuartile","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","expand","collapse","acceptInvitation","close"]}]): this {
    return this.attachTracking(content: string, attributes :[{"event":["creativeView","start","midpoint","firstQuartile","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","expand","collapse","acceptInvitation","close"]}]).and();
  }
    }
class NonLinearAds_69 extends VastElement<Creative_51> {
      
  public attachNonLinear(attributes): NonLinear_70 {
    const newElem = new NonLinear_70('NonLinear', this, {"attrs":["id","width","height","expandedWidth","expandedHeight","scalable","maintainAspectRatio","minSuggestedDuration","apiFramework"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public attachTrackingEvents(): TrackingEvents_74 {
    const newElem = new TrackingEvents_74('TrackingEvents', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
    }
class Creative_51 extends VastElement<Creatives_50> {
      
  public attachLinear(): Linear_52 {
    const newElem = new Linear_52('Linear', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachCompanionAds(): CompanionAds_59 {
    const newElem = new CompanionAds_59('CompanionAds', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachNonLinearAds(): NonLinearAds_69 {
    const newElem = new NonLinearAds_69('NonLinearAds', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
    }
class Creatives_50 extends VastElement<Wrapper_45> {
      
  public attachCreative(attributes): Creative_51 {
    const newElem = new Creative_51('Creative', this, {"attrs":["id","sequence","adID"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class Extension_77 extends VastElement<Extensions_76> {}
class Extensions_76 extends VastElement<Wrapper_45> {
      
  public attachExtension(content: string, attributes :["type"]): Extension_77 {
    const newElem = new Extension_77('Extension', this, {"attrs":["type"]} : VastInfos, content: string, attributes :["type"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addExtension(content: string, attributes :["type"]): this {
    return this.attachExtension(content: string, attributes :["type"]).and();
  }
    }
class Wrapper_45 extends VastElement<Ad_3> {
      
  public attachAdSystem(content: string, attributes :["version"]): AdSystem_46 {
    const newElem = new AdSystem_46('AdSystem', this, {"attrs":["version"]} : VastInfos, content: string, attributes :["version"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdSystem(content: string, attributes :["version"]): this {
    return this.attachAdSystem(content: string, attributes :["version"]).and();
  }
  public attachVASTAdTagURI(content: string): VASTAdTagURI_47 {
    const newElem = new VASTAdTagURI_47('VASTAdTagURI', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addVASTAdTagURI(content: string): this {
    return this.attachVASTAdTagURI(content: string).and();
  }
  public attachError(content: string): Error_48 {
    const newElem = new Error_48('Error', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addError(content: string): this {
    return this.attachError(content: string).and();
  }
  public attachImpression(content: string, attributes :["id"]): Impression_49 {
    const newElem = new Impression_49('Impression', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addImpression(content: string, attributes :["id"]): this {
    return this.attachImpression(content: string, attributes :["id"]).and();
  }
  public attachCreatives(): Creatives_50 {
    const newElem = new Creatives_50('Creatives', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachExtensions(): Extensions_76 {
    const newElem = new Extensions_76('Extensions', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
    }
class Ad_3 extends VastElement<VAST_2> {
      
  public attachInLine(): InLine_4 {
    const newElem = new InLine_4('InLine', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachWrapper(): Wrapper_45 {
    const newElem = new Wrapper_45('Wrapper', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
    }
class VAST_2 extends VastElement<apiv2> {
      
  public attachAd(attributes): Ad_3 {
    const newElem = new Ad_3('Ad', this, {"attrs":["id"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class apiv2 extends VastElement<apiv2> {
      
  public attachVAST(attributes): VAST_2 {
    const newElem = new VAST_2('VAST', this, {"attrs":["version"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }


export const validator = {"only":{"VAST":{"alo":{"Ad":{"uniq":{"InLine":{"required":{"AdSystem":{},"AdTitle":{},"Creatives":{"alo":{"Creative":{"uniq":{"Linear":{"required":{"Duration":{},"MediaFiles":{"alo":{"MediaFile":{"attrsRequired":{"delivery":["progressive","streaming"],"type":null,"width":null,"height":null}}}}},"follow":{"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView","start","midpoint","firstQuartile","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","expand","collapse","acceptInvitation","close"]}}}},"AdParameters":{},"VideoClicks":{"follow":{"ClickThrough":{},"ClickTracking":{},"CustomClick":{}}}}},"CompanionAds":{"follow":{"Companion":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView"]}}}},"CompanionClickThrough":{},"AltText":{},"AdParameters":{}},"attrsRequired":{"width":null,"height":null}}}},"NonLinearAds":{"follow":{"NonLinear":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"attrsRequired":{"width":null,"height":null}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView","start","midpoint","firstQuartile","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","expand","collapse","acceptInvitation","close"]}}}},"NonLinearClickThrough":{},"AdParameters":{}}}}}}}},"alo":{"Impression":{}},"follow":{"Description":{},"Survey":{},"Error":{},"Extensions":{"required":{"Extension":{}}}}},"Wrapper":{"required":{"AdSystem":{},"VASTAdTagURI":{},"Creatives":{"follow":{"Creative":{"uniq":{"Linear":{"follow":{"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView","start","midpoint","firstQuartile","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","expand","collapse","acceptInvitation","close"]}}}},"VideoClicks":{"follow":{"ClickThrough":{},"ClickTracking":{},"CustomClick":{}}}}},"CompanionAds":{"follow":{"Companion":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView"]}}}},"CompanionClickThrough":{},"AltText":{},"AdParameters":{}},"attrsRequired":{"width":null,"height":null}}}},"NonLinearAds":{"follow":{"NonLinear":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"attrsRequired":{"width":null,"height":null}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView","start","midpoint","firstQuartile","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","expand","collapse","acceptInvitation","close"]}}}}}}}}}}},"alo":{"Impression":{}},"follow":{"Error":{},"Extensions":{"required":{"Extension":{}}}}}},"attrsRequired":{"id":null}}},"attrsRequired":{"version":["2.0"]}}}};

export apiv2;
