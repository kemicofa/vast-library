
// this file is generated, dont edit it

/* tslint:disable: class-name */
import VastElement from '../../src/vast-element';

interface VastInfos {
  attrs?: Array<string>;
  required?: boolean;
  uniq?: boolean;
  alo?: boolean;
};


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
    const newElem = new CreativeExtension_18('CreativeExtension', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addCreativeExtension(content: string): this {
    return this.attachCreativeExtension(content: string).and();
  }
    }
class AdParameters_20 extends VastElement<Linear_19> {}
class Duration_21 extends VastElement<Linear_19> {}
class MediaFile_23 extends VastElement<MediaFiles_22> {}
class MediaFiles_22 extends VastElement<Linear_19> {
      
  public attachMediaFile(content: string, attributes :["id",{"delivery":["progressive","streaming"]},{"type":null},"bitrate","minBitrate","maxBitrate",{"width":null},{"height":null},"scalable","mantainAspectRatio","codec","apiFramework"]): MediaFile_23 {
    const newElem = new MediaFile_23('MediaFile', this, {"attrs":["id","delivery","type","bitrate","minBitrate","maxBitrate","width","height","scalable","mantainAspectRatio","codec","apiFramework"]} : VastInfos, content: string, attributes :["id",{"delivery":["progressive","streaming"]},{"type":null},"bitrate","minBitrate","maxBitrate",{"width":null},{"height":null},"scalable","mantainAspectRatio","codec","apiFramework"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addMediaFile(content: string, attributes :["id",{"delivery":["progressive","streaming"]},{"type":null},"bitrate","minBitrate","maxBitrate",{"width":null},{"height":null},"scalable","mantainAspectRatio","codec","apiFramework"]): this {
    return this.attachMediaFile(content: string, attributes :["id",{"delivery":["progressive","streaming"]},{"type":null},"bitrate","minBitrate","maxBitrate",{"width":null},{"height":null},"scalable","mantainAspectRatio","codec","apiFramework"]).and();
  }
    }
class Tracking_25 extends VastElement<TrackingEvents_24> {}
class TrackingEvents_24 extends VastElement<Linear_19> {
      
  public attachTracking(content: string, attributes :["offset",{"event":["creativeView","start","firstQuartile","midpoint","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","exitFullscreen","expand","collapse","acceptInvitationLinear","closeLinear","skip","progress"]}]): Tracking_25 {
    const newElem = new Tracking_25('Tracking', this, {"attrs":["offset","event"]} : VastInfos, content: string, attributes :["offset",{"event":["creativeView","start","firstQuartile","midpoint","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","exitFullscreen","expand","collapse","acceptInvitationLinear","closeLinear","skip","progress"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content: string, attributes :["offset",{"event":["creativeView","start","firstQuartile","midpoint","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","exitFullscreen","expand","collapse","acceptInvitationLinear","closeLinear","skip","progress"]}]): this {
    return this.attachTracking(content: string, attributes :["offset",{"event":["creativeView","start","firstQuartile","midpoint","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","exitFullscreen","expand","collapse","acceptInvitationLinear","closeLinear","skip","progress"]}]).and();
  }
    }
class ClickThrough_27 extends VastElement<VideoClicks_26> {}
class ClickTracking_28 extends VastElement<VideoClicks_26> {}
class CustomClick_29 extends VastElement<VideoClicks_26> {}
class VideoClicks_26 extends VastElement<Linear_19> {
      
  public attachClickThrough(content: string, attributes :["id"]): ClickThrough_27 {
    const newElem = new ClickThrough_27('ClickThrough', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addClickThrough(content: string, attributes :["id"]): this {
    return this.attachClickThrough(content: string, attributes :["id"]).and();
  }
  public attachClickTracking(content: string, attributes :["id"]): ClickTracking_28 {
    const newElem = new ClickTracking_28('ClickTracking', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addClickTracking(content: string, attributes :["id"]): this {
    return this.attachClickTracking(content: string, attributes :["id"]).and();
  }
  public attachCustomClick(content: string, attributes :["id"]): CustomClick_29 {
    const newElem = new CustomClick_29('CustomClick', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addCustomClick(content: string, attributes :["id"]): this {
    return this.attachCustomClick(content: string, attributes :["id"]).and();
  }
    }
class StaticResource_32 extends VastElement<Icon_31> {}
class IFrameResource_33 extends VastElement<Icon_31> {}
class HTMLResource_34 extends VastElement<Icon_31> {}
class IconClickThrough_36 extends VastElement<IconClicks_35> {}
class IconClickTracking_37 extends VastElement<IconClicks_35> {}
class IconClicks_35 extends VastElement<Icon_31> {
      
  public attachIconClickThrough(content: string): IconClickThrough_36 {
    const newElem = new IconClickThrough_36('IconClickThrough', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addIconClickThrough(content: string): this {
    return this.attachIconClickThrough(content: string).and();
  }
  public attachIconClickTracking(content: string, attributes :["id"]): IconClickTracking_37 {
    const newElem = new IconClickTracking_37('IconClickTracking', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addIconClickTracking(content: string, attributes :["id"]): this {
    return this.attachIconClickTracking(content: string, attributes :["id"]).and();
  }
    }
class IconViewTracking_38 extends VastElement<Icon_31> {}
class Icon_31 extends VastElement<Icons_30> {
      
  public attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): StaticResource_32 {
    const newElem = new StaticResource_32('StaticResource', this, {"attrs":["creativeType"]} : VastInfos, content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): this {
    return this.attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]).and();
  }
  public attachIFrameResource(content: string): IFrameResource_33 {
    const newElem = new IFrameResource_33('IFrameResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content: string): this {
    return this.attachIFrameResource(content: string).and();
  }
  public attachHTMLResource(content: string): HTMLResource_34 {
    const newElem = new HTMLResource_34('HTMLResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content: string): this {
    return this.attachHTMLResource(content: string).and();
  }
  public attachIconClicks(): IconClicks_35 {
    const newElem = new IconClicks_35('IconClicks', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachIconViewTracking(content: string): IconViewTracking_38 {
    const newElem = new IconViewTracking_38('IconViewTracking', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addIconViewTracking(content: string): this {
    return this.attachIconViewTracking(content: string).and();
  }
    }
class Icons_30 extends VastElement<Linear_19> {
      
  public attachIcon(attributes): Icon_31 {
    const newElem = new Icon_31('Icon', this, {"attrs":["program","width","height","xPosition","yPosition","duration","offset","apiFramework"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class Linear_19 extends VastElement<Creative_16> {
      
  public attachAdParameters(content: string, attributes :["xmlEncoded"]): AdParameters_20 {
    const newElem = new AdParameters_20('AdParameters', this, {"attrs":["xmlEncoded"]} : VastInfos, content: string, attributes :["xmlEncoded"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdParameters(content: string, attributes :["xmlEncoded"]): this {
    return this.attachAdParameters(content: string, attributes :["xmlEncoded"]).and();
  }
  public attachDuration(content: string): Duration_21 {
    const newElem = new Duration_21('Duration', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addDuration(content: string): this {
    return this.attachDuration(content: string).and();
  }
  public attachMediaFiles(): MediaFiles_22 {
    const newElem = new MediaFiles_22('MediaFiles', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachTrackingEvents(): TrackingEvents_24 {
    const newElem = new TrackingEvents_24('TrackingEvents', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachVideoClicks(): VideoClicks_26 {
    const newElem = new VideoClicks_26('VideoClicks', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachIcons(): Icons_30 {
    const newElem = new Icons_30('Icons', this, {} : VastInfos );
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
      
  public attachTracking(content: string, attributes :[{"event":["creativeView"]}]): Tracking_49 {
    const newElem = new Tracking_49('Tracking', this, {"attrs":["event"]} : VastInfos, content: string, attributes :[{"event":["creativeView"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content: string, attributes :[{"event":["creativeView"]}]): this {
    return this.attachTracking(content: string, attributes :[{"event":["creativeView"]}]).and();
  }
    }
class Companion_40 extends VastElement<CompanionAds_39> {
      
  public attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): StaticResource_41 {
    const newElem = new StaticResource_41('StaticResource', this, {"attrs":["creativeType"]} : VastInfos, content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): this {
    return this.attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]).and();
  }
  public attachIFrameResource(content: string): IFrameResource_42 {
    const newElem = new IFrameResource_42('IFrameResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content: string): this {
    return this.attachIFrameResource(content: string).and();
  }
  public attachHTMLResource(content: string): HTMLResource_43 {
    const newElem = new HTMLResource_43('HTMLResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content: string): this {
    return this.attachHTMLResource(content: string).and();
  }
  public attachAdParameters(content: string, attributes :["xmlEncoded"]): AdParameters_44 {
    const newElem = new AdParameters_44('AdParameters', this, {"attrs":["xmlEncoded"]} : VastInfos, content: string, attributes :["xmlEncoded"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdParameters(content: string, attributes :["xmlEncoded"]): this {
    return this.attachAdParameters(content: string, attributes :["xmlEncoded"]).and();
  }
  public attachAltText(content: string): AltText_45 {
    const newElem = new AltText_45('AltText', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addAltText(content: string): this {
    return this.attachAltText(content: string).and();
  }
  public attachCompanionClickThrough(content: string): CompanionClickThrough_46 {
    const newElem = new CompanionClickThrough_46('CompanionClickThrough', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addCompanionClickThrough(content: string): this {
    return this.attachCompanionClickThrough(content: string).and();
  }
  public attachCompanionClickTracking(content: string, attributes :["id"]): CompanionClickTracking_47 {
    const newElem = new CompanionClickTracking_47('CompanionClickTracking', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addCompanionClickTracking(content: string, attributes :["id"]): this {
    return this.attachCompanionClickTracking(content: string, attributes :["id"]).and();
  }
  public attachTrackingEvents(): TrackingEvents_48 {
    const newElem = new TrackingEvents_48('TrackingEvents', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
    }
class CompanionAds_39 extends VastElement<Creative_16> {
      
  public attachCompanion(attributes): Companion_40 {
    const newElem = new Companion_40('Companion', this, {"attrs":["id","width","height","assetWidth","assetHeight","expandedWidth","expandedHeight","apiFramework","adSlotID"]} : VastInfos, attributes);
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
      
  public attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): StaticResource_52 {
    const newElem = new StaticResource_52('StaticResource', this, {"attrs":["creativeType"]} : VastInfos, content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): this {
    return this.attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]).and();
  }
  public attachIFrameResource(content: string): IFrameResource_53 {
    const newElem = new IFrameResource_53('IFrameResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content: string): this {
    return this.attachIFrameResource(content: string).and();
  }
  public attachHTMLResource(content: string): HTMLResource_54 {
    const newElem = new HTMLResource_54('HTMLResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content: string): this {
    return this.attachHTMLResource(content: string).and();
  }
  public attachNonLinearClickThrough(content: string): NonLinearClickThrough_55 {
    const newElem = new NonLinearClickThrough_55('NonLinearClickThrough', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addNonLinearClickThrough(content: string): this {
    return this.attachNonLinearClickThrough(content: string).and();
  }
  public attachNonLinearClickTracking(content: string, attributes :["id"]): NonLinearClickTracking_56 {
    const newElem = new NonLinearClickTracking_56('NonLinearClickTracking', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addNonLinearClickTracking(content: string, attributes :["id"]): this {
    return this.attachNonLinearClickTracking(content: string, attributes :["id"]).and();
  }
  public attachAdParameters(content: string, attributes :["xmlEncoded"]): AdParameters_57 {
    const newElem = new AdParameters_57('AdParameters', this, {"attrs":["xmlEncoded"]} : VastInfos, content: string, attributes :["xmlEncoded"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdParameters(content: string, attributes :["xmlEncoded"]): this {
    return this.attachAdParameters(content: string, attributes :["xmlEncoded"]).and();
  }
    }
class Tracking_59 extends VastElement<TrackingEvents_58> {}
class TrackingEvents_58 extends VastElement<NonLinearAds_50> {
      
  public attachTracking(content: string, attributes :["offset",{"event":["creativeView","start","firstQuartile","midpoint","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","exitFullscreen","expand","collapse","acceptInvitation","close","progress"]}]): Tracking_59 {
    const newElem = new Tracking_59('Tracking', this, {"attrs":["offset","event"]} : VastInfos, content: string, attributes :["offset",{"event":["creativeView","start","firstQuartile","midpoint","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","exitFullscreen","expand","collapse","acceptInvitation","close","progress"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content: string, attributes :["offset",{"event":["creativeView","start","firstQuartile","midpoint","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","exitFullscreen","expand","collapse","acceptInvitation","close","progress"]}]): this {
    return this.attachTracking(content: string, attributes :["offset",{"event":["creativeView","start","firstQuartile","midpoint","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","exitFullscreen","expand","collapse","acceptInvitation","close","progress"]}]).and();
  }
    }
class NonLinearAds_50 extends VastElement<Creative_16> {
      
  public attachNonLinear(attributes): NonLinear_51 {
    const newElem = new NonLinear_51('NonLinear', this, {"attrs":["id","width","height","expandedWidth","expandedHeight","scalable","maintainAspectRatio","minSuggestedDuration","apiFramework"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public attachTrackingEvents(): TrackingEvents_58 {
    const newElem = new TrackingEvents_58('TrackingEvents', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
    }
class Creative_16 extends VastElement<Creatives_15> {
      
  public attachCreativeExtensions(): CreativeExtensions_17 {
    const newElem = new CreativeExtensions_17('CreativeExtensions', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachLinear(attributes): Linear_19 {
    const newElem = new Linear_19('Linear', this, {"attrs":["skipoffset"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public attachCompanionAds(attributes): CompanionAds_39 {
    const newElem = new CompanionAds_39('CompanionAds', this, {"attrs":["required"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public attachNonLinearAds(): NonLinearAds_50 {
    const newElem = new NonLinearAds_50('NonLinearAds', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
    }
class Creatives_15 extends VastElement<InLine_6> {
      
  public attachCreative(attributes): Creative_16 {
    const newElem = new Creative_16('Creative', this, {"attrs":["id","sequence","adID","apiFramework"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class Extension_61 extends VastElement<Extensions_60> {}
class Extensions_60 extends VastElement<InLine_6> {
      
  public attachExtension(content: string, attributes :["type"]): Extension_61 {
    const newElem = new Extension_61('Extension', this, {"attrs":["type"]} : VastInfos, content: string, attributes :["type"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addExtension(content: string, attributes :["type"]): this {
    return this.attachExtension(content: string, attributes :["type"]).and();
  }
    }
class InLine_6 extends VastElement<Ad_5> {
      
  public attachAdSystem(content: string, attributes :["version"]): AdSystem_7 {
    const newElem = new AdSystem_7('AdSystem', this, {"attrs":["version"]} : VastInfos, content: string, attributes :["version"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdSystem(content: string, attributes :["version"]): this {
    return this.attachAdSystem(content: string, attributes :["version"]).and();
  }
  public attachAdTitle(content: string): AdTitle_8 {
    const newElem = new AdTitle_8('AdTitle', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdTitle(content: string): this {
    return this.attachAdTitle(content: string).and();
  }
  public attachDescription(content: string): Description_9 {
    const newElem = new Description_9('Description', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addDescription(content: string): this {
    return this.attachDescription(content: string).and();
  }
  public attachAdvertiser(content: string): Advertiser_10 {
    const newElem = new Advertiser_10('Advertiser', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdvertiser(content: string): this {
    return this.attachAdvertiser(content: string).and();
  }
  public attachPricing(content: string, attributes :[{"currency":null},{"model":["CPM","CPC","CPE","CPV"]}]): Pricing_11 {
    const newElem = new Pricing_11('Pricing', this, {"attrs":["currency","model"]} : VastInfos, content: string, attributes :[{"currency":null},{"model":["CPM","CPC","CPE","CPV"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addPricing(content: string, attributes :[{"currency":null},{"model":["CPM","CPC","CPE","CPV"]}]): this {
    return this.attachPricing(content: string, attributes :[{"currency":null},{"model":["CPM","CPC","CPE","CPV"]}]).and();
  }
  public attachSurvey(content: string): Survey_12 {
    const newElem = new Survey_12('Survey', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addSurvey(content: string): this {
    return this.attachSurvey(content: string).and();
  }
  public attachError(content: string): Error_13 {
    const newElem = new Error_13('Error', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addError(content: string): this {
    return this.attachError(content: string).and();
  }
  public attachImpression(content: string, attributes :["id"]): Impression_14 {
    const newElem = new Impression_14('Impression', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addImpression(content: string, attributes :["id"]): this {
    return this.attachImpression(content: string, attributes :["id"]).and();
  }
  public attachCreatives(): Creatives_15 {
    const newElem = new Creatives_15('Creatives', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachExtensions(): Extensions_60 {
    const newElem = new Extensions_60('Extensions', this, {} : VastInfos );
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
      
  public attachTracking(content: string, attributes :["offset",{"event":["creativeView","start","firstQuartile","midpoint","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","exitFullscreen","expand","collapse","acceptInvitationLinear","closeLinear","skip","progress"]}]): Tracking_71 {
    const newElem = new Tracking_71('Tracking', this, {"attrs":["offset","event"]} : VastInfos, content: string, attributes :["offset",{"event":["creativeView","start","firstQuartile","midpoint","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","exitFullscreen","expand","collapse","acceptInvitationLinear","closeLinear","skip","progress"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content: string, attributes :["offset",{"event":["creativeView","start","firstQuartile","midpoint","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","exitFullscreen","expand","collapse","acceptInvitationLinear","closeLinear","skip","progress"]}]): this {
    return this.attachTracking(content: string, attributes :["offset",{"event":["creativeView","start","firstQuartile","midpoint","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","exitFullscreen","expand","collapse","acceptInvitationLinear","closeLinear","skip","progress"]}]).and();
  }
    }
class ClickTracking_73 extends VastElement<VideoClicks_72> {}
class CustomClick_74 extends VastElement<VideoClicks_72> {}
class VideoClicks_72 extends VastElement<Linear_69> {
      
  public attachClickTracking(content: string, attributes :["id"]): ClickTracking_73 {
    const newElem = new ClickTracking_73('ClickTracking', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addClickTracking(content: string, attributes :["id"]): this {
    return this.attachClickTracking(content: string, attributes :["id"]).and();
  }
  public attachCustomClick(content: string, attributes :["id"]): CustomClick_74 {
    const newElem = new CustomClick_74('CustomClick', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addCustomClick(content: string, attributes :["id"]): this {
    return this.attachCustomClick(content: string, attributes :["id"]).and();
  }
    }
class StaticResource_77 extends VastElement<Icon_76> {}
class IFrameResource_78 extends VastElement<Icon_76> {}
class HTMLResource_79 extends VastElement<Icon_76> {}
class IconClickThrough_81 extends VastElement<IconClicks_80> {}
class IconClickTracking_82 extends VastElement<IconClicks_80> {}
class IconClicks_80 extends VastElement<Icon_76> {
      
  public attachIconClickThrough(content: string): IconClickThrough_81 {
    const newElem = new IconClickThrough_81('IconClickThrough', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addIconClickThrough(content: string): this {
    return this.attachIconClickThrough(content: string).and();
  }
  public attachIconClickTracking(content: string): IconClickTracking_82 {
    const newElem = new IconClickTracking_82('IconClickTracking', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addIconClickTracking(content: string): this {
    return this.attachIconClickTracking(content: string).and();
  }
    }
class IconViewTracking_83 extends VastElement<Icon_76> {}
class Icon_76 extends VastElement<Icons_75> {
      
  public attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): StaticResource_77 {
    const newElem = new StaticResource_77('StaticResource', this, {"attrs":["creativeType"]} : VastInfos, content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): this {
    return this.attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]).and();
  }
  public attachIFrameResource(content: string): IFrameResource_78 {
    const newElem = new IFrameResource_78('IFrameResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content: string): this {
    return this.attachIFrameResource(content: string).and();
  }
  public attachHTMLResource(content: string): HTMLResource_79 {
    const newElem = new HTMLResource_79('HTMLResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content: string): this {
    return this.attachHTMLResource(content: string).and();
  }
  public attachIconClicks(): IconClicks_80 {
    const newElem = new IconClicks_80('IconClicks', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachIconViewTracking(content: string): IconViewTracking_83 {
    const newElem = new IconViewTracking_83('IconViewTracking', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addIconViewTracking(content: string): this {
    return this.attachIconViewTracking(content: string).and();
  }
    }
class Icons_75 extends VastElement<Linear_69> {
      
  public attachIcon(attributes): Icon_76 {
    const newElem = new Icon_76('Icon', this, {"attrs":["program","width","height","xPosition","yPosition","duration","offset","apiFramework"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class Linear_69 extends VastElement<Creative_68> {
      
  public attachTrackingEvents(): TrackingEvents_70 {
    const newElem = new TrackingEvents_70('TrackingEvents', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachVideoClicks(): VideoClicks_72 {
    const newElem = new VideoClicks_72('VideoClicks', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachIcons(): Icons_75 {
    const newElem = new Icons_75('Icons', this, {} : VastInfos );
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
      
  public attachTracking(content: string, attributes :[{"event":["creativeView"]}]): Tracking_94 {
    const newElem = new Tracking_94('Tracking', this, {"attrs":["event"]} : VastInfos, content: string, attributes :[{"event":["creativeView"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content: string, attributes :[{"event":["creativeView"]}]): this {
    return this.attachTracking(content: string, attributes :[{"event":["creativeView"]}]).and();
  }
    }
class Companion_85 extends VastElement<CompanionAds_84> {
      
  public attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): StaticResource_86 {
    const newElem = new StaticResource_86('StaticResource', this, {"attrs":["creativeType"]} : VastInfos, content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]): this {
    return this.attachStaticResource(content: string, attributes :[{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}]).and();
  }
  public attachIFrameResource(content: string): IFrameResource_87 {
    const newElem = new IFrameResource_87('IFrameResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content: string): this {
    return this.attachIFrameResource(content: string).and();
  }
  public attachHTMLResource(content: string): HTMLResource_88 {
    const newElem = new HTMLResource_88('HTMLResource', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content: string): this {
    return this.attachHTMLResource(content: string).and();
  }
  public attachAdParameters(content: string, attributes :["xmlEncoded"]): AdParameters_89 {
    const newElem = new AdParameters_89('AdParameters', this, {"attrs":["xmlEncoded"]} : VastInfos, content: string, attributes :["xmlEncoded"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdParameters(content: string, attributes :["xmlEncoded"]): this {
    return this.attachAdParameters(content: string, attributes :["xmlEncoded"]).and();
  }
  public attachAltText(content: string): AltText_90 {
    const newElem = new AltText_90('AltText', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addAltText(content: string): this {
    return this.attachAltText(content: string).and();
  }
  public attachCompanionClickThrough(content: string): CompanionClickThrough_91 {
    const newElem = new CompanionClickThrough_91('CompanionClickThrough', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addCompanionClickThrough(content: string): this {
    return this.attachCompanionClickThrough(content: string).and();
  }
  public attachCompanionClickTracking(content: string): CompanionClickTracking_92 {
    const newElem = new CompanionClickTracking_92('CompanionClickTracking', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addCompanionClickTracking(content: string): this {
    return this.attachCompanionClickTracking(content: string).and();
  }
  public attachTrackingEvents(): TrackingEvents_93 {
    const newElem = new TrackingEvents_93('TrackingEvents', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
    }
class CompanionAds_84 extends VastElement<Creative_68> {
      
  public attachCompanion(attributes): Companion_85 {
    const newElem = new Companion_85('Companion', this, {"attrs":["id","width","height","assetWidth","assetHeight","expandedWidth","expandedHeight","apiFramework","adSlotID"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class NonLinearClickTracking_97 extends VastElement<NonLinear_96> {}
class NonLinear_96 extends VastElement<NonLinearAds_95> {
      
  public attachNonLinearClickTracking(content: string): NonLinearClickTracking_97 {
    const newElem = new NonLinearClickTracking_97('NonLinearClickTracking', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addNonLinearClickTracking(content: string): this {
    return this.attachNonLinearClickTracking(content: string).and();
  }
    }
class Tracking_99 extends VastElement<TrackingEvents_98> {}
class TrackingEvents_98 extends VastElement<NonLinearAds_95> {
      
  public attachTracking(content: string, attributes :["offset",{"event":["creativeView","start","firstQuartile","midpoint","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","exitFullscreen","expand","collapse","acceptInvitation","close","progress"]}]): Tracking_99 {
    const newElem = new Tracking_99('Tracking', this, {"attrs":["offset","event"]} : VastInfos, content: string, attributes :["offset",{"event":["creativeView","start","firstQuartile","midpoint","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","exitFullscreen","expand","collapse","acceptInvitation","close","progress"]}]);
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(content: string, attributes :["offset",{"event":["creativeView","start","firstQuartile","midpoint","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","exitFullscreen","expand","collapse","acceptInvitation","close","progress"]}]): this {
    return this.attachTracking(content: string, attributes :["offset",{"event":["creativeView","start","firstQuartile","midpoint","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","exitFullscreen","expand","collapse","acceptInvitation","close","progress"]}]).and();
  }
    }
class NonLinearAds_95 extends VastElement<Creative_68> {
      
  public attachNonLinear(attributes): NonLinear_96 {
    const newElem = new NonLinear_96('NonLinear', this, {"attrs":["id","width","height","expandedWidth","expandedHeight","scalable","maintainAspectRatio","minSuggestedDuration","apiFramework"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public attachTrackingEvents(): TrackingEvents_98 {
    const newElem = new TrackingEvents_98('TrackingEvents', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
    }
class Creative_68 extends VastElement<Creatives_67> {
      
  public attachLinear(): Linear_69 {
    const newElem = new Linear_69('Linear', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachCompanionAds(attributes): CompanionAds_84 {
    const newElem = new CompanionAds_84('CompanionAds', this, {"attrs":["required"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  public attachNonLinearAds(): NonLinearAds_95 {
    const newElem = new NonLinearAds_95('NonLinearAds', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
    }
class Creatives_67 extends VastElement<Wrapper_62> {
      
  public attachCreative(attributes): Creative_68 {
    const newElem = new Creative_68('Creative', this, {"attrs":["id","sequence","adID"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class Extension_101 extends VastElement<Extensions_100> {}
class Extensions_100 extends VastElement<Wrapper_62> {
      
  public attachExtension(content: string, attributes :["type"]): Extension_101 {
    const newElem = new Extension_101('Extension', this, {"attrs":["type"]} : VastInfos, content: string, attributes :["type"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addExtension(content: string, attributes :["type"]): this {
    return this.attachExtension(content: string, attributes :["type"]).and();
  }
    }
class Wrapper_62 extends VastElement<Ad_5> {
      
  public attachAdSystem(content: string, attributes :["version"]): AdSystem_63 {
    const newElem = new AdSystem_63('AdSystem', this, {"attrs":["version"]} : VastInfos, content: string, attributes :["version"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdSystem(content: string, attributes :["version"]): this {
    return this.attachAdSystem(content: string, attributes :["version"]).and();
  }
  public attachVASTAdTagURI(content: string): VASTAdTagURI_64 {
    const newElem = new VASTAdTagURI_64('VASTAdTagURI', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addVASTAdTagURI(content: string): this {
    return this.attachVASTAdTagURI(content: string).and();
  }
  public attachError(content: string): Error_65 {
    const newElem = new Error_65('Error', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addError(content: string): this {
    return this.attachError(content: string).and();
  }
  public attachImpression(content: string, attributes :["id"]): Impression_66 {
    const newElem = new Impression_66('Impression', this, {"attrs":["id"]} : VastInfos, content: string, attributes :["id"]);
    this.childs.push(newElem);
    return newElem;
  }
  public addImpression(content: string, attributes :["id"]): this {
    return this.attachImpression(content: string, attributes :["id"]).and();
  }
  public attachCreatives(): Creatives_67 {
    const newElem = new Creatives_67('Creatives', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachExtensions(): Extensions_100 {
    const newElem = new Extensions_100('Extensions', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
    }
class Ad_5 extends VastElement<VAST_3> {
      
  public attachInLine(): InLine_6 {
    const newElem = new InLine_6('InLine', this, {} : VastInfos );
    this.childs.push(newElem);
    return newElem;
  }
  public attachWrapper(attributes): Wrapper_62 {
    const newElem = new Wrapper_62('Wrapper', this, {"attrs":["followAdditonalWrappers","allowMultipleAds","fallbackOnNoAd"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class VAST_3 extends VastElement<apiv3> {
      
  public attachError(content: string): Error_4 {
    const newElem = new Error_4('Error', this, {} : VastInfos, content: string);
    this.childs.push(newElem);
    return newElem;
  }
  public addError(content: string): this {
    return this.attachError(content: string).and();
  }
  public attachAd(attributes): Ad_5 {
    const newElem = new Ad_5('Ad', this, {"attrs":["id","sequence"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }
class apiv3 extends VastElement<apiv3> {
      
  public attachVAST(attributes): VAST_3 {
    const newElem = new VAST_3('VAST', this, {"attrs":["version"]} : VastInfos, attributes);
    this.childs.push(newElem);
    return newElem;
  }
    }


export const validator = {"only":{"VAST":{"alo":{"Ad":{"uniq":{"InLine":{"required":{"AdSystem":{},"AdTitle":{},"Creatives":{"alo":{"Creative":{"uniq":{"Linear":{"required":{"Duration":{},"MediaFiles":{"alo":{"MediaFile":{"attrsRequired":{"delivery":["progressive","streaming"],"type":null,"width":null,"height":null}}}}},"follow":{"AdParameters":{},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView","start","firstQuartile","midpoint","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","exitFullscreen","expand","collapse","acceptInvitationLinear","closeLinear","skip","progress"]}}}},"VideoClicks":{"follow":{"ClickThrough":{},"ClickTracking":{},"CustomClick":{}}},"Icons":{"alo":{"Icon":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"IconClicks":{"follow":{"IconClickThrough":{},"IconClickTracking":{}}},"IconViewTracking":{}},"attrsRequired":{"program":null,"width":null,"height":null,"xPosition":null,"yPosition":null}}}}}},"CompanionAds":{"follow":{"Companion":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"AdParameters":{},"AltText":{},"CompanionClickThrough":{},"CompanionClickTracking":{},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView"]}}}}},"attrsRequired":{"width":null,"height":null}}},"attrsRequired":{"required":["all","any","none"]}},"NonLinearAds":{"follow":{"NonLinear":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"NonLinearClickThrough":{},"NonLinearClickTracking":{},"AdParameters":{}},"attrsRequired":{"width":null,"height":null}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView","start","firstQuartile","midpoint","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","exitFullscreen","expand","collapse","acceptInvitation","close","progress"]}}}}}}},"follow":{"CreativeExtensions":{"follow":{"CreativeExtension":{}}}}}}}},"alo":{"Impression":{}},"follow":{"Description":{},"Advertiser":{},"Pricing":{"attrsRequired":{"currency":null,"model":["CPM","CPC","CPE","CPV"]}},"Survey":{},"Error":{},"Extensions":{"required":{"Extension":{}}}}},"Wrapper":{"required":{"AdSystem":{},"VASTAdTagURI":{}},"alo":{"Impression":{}},"follow":{"Error":{},"Creatives":{"follow":{"Creative":{"uniq":{"Linear":{"follow":{"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView","start","firstQuartile","midpoint","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","exitFullscreen","expand","collapse","acceptInvitationLinear","closeLinear","skip","progress"]}}}},"VideoClicks":{"follow":{"ClickTracking":{},"CustomClick":{}}},"Icons":{"alo":{"Icon":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"IconClicks":{"follow":{"IconClickThrough":{},"IconClickTracking":{}}},"IconViewTracking":{}},"attrsRequired":{"program":null,"width":null,"height":null,"xPosition":null,"yPosition":null}}}}}},"CompanionAds":{"follow":{"Companion":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"AdParameters":{},"AltText":{},"CompanionClickThrough":{},"CompanionClickTracking":{},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView"]}}}}},"attrsRequired":{"width":null,"height":null}}},"attrsRequired":{"required":["all","any","none"]}},"NonLinearAds":{"follow":{"NonLinear":{"follow":{"NonLinearClickTracking":{}},"attrsRequired":{"width":null,"height":null}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView","start","firstQuartile","midpoint","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","exitFullscreen","expand","collapse","acceptInvitation","close","progress"]}}}}}}}}}},"Extensions":{"required":{"Extension":{}}}}}}}},"follow":{"Error":{}},"attrsRequired":{"version":["3.0"]}}}};

export apiv3;
