import V from "../../src/vast-element";
declare class AdSystem_5 extends V<InLine_4> {
}
declare class AdTitle_6 extends V<InLine_4> {
}
declare class Description_7 extends V<InLine_4> {
}
declare class Survey_8 extends V<InLine_4> {
}
declare class Error_9 extends V<InLine_4> {
}
declare class Impression_10 extends V<InLine_4> {
}
declare class Duration_14 extends V<Linear_13> {
}
declare class Tracking_16 extends V<TrackingEvents_15> {
}
declare class TrackingEvents_15 extends V<Linear_13> {
    attachTracking(content: string, attributes: {
        event: "creativeView" | "start" | "midpoint" | "firstQuartile" | "thirdQuartile" | "complete" | "mute" | "unmute" | "pause" | "rewind" | "resume" | "fullscreen" | "expand" | "collapse" | "acceptInvitation" | "close";
    }): Tracking_16;
    addTracking(content: string, attributes: {
        event: "creativeView" | "start" | "midpoint" | "firstQuartile" | "thirdQuartile" | "complete" | "mute" | "unmute" | "pause" | "rewind" | "resume" | "fullscreen" | "expand" | "collapse" | "acceptInvitation" | "close";
    }): TrackingEvents_15;
}
declare class AdParameters_17 extends V<Linear_13> {
}
declare class ClickThrough_19 extends V<VideoClicks_18> {
}
declare class ClickTracking_20 extends V<VideoClicks_18> {
}
declare class CustomClick_21 extends V<VideoClicks_18> {
}
declare class VideoClicks_18 extends V<Linear_13> {
    attachClickThrough(content: string): ClickThrough_19;
    addClickThrough(content: string): VideoClicks_18;
    attachClickTracking(content: string): ClickTracking_20;
    addClickTracking(content: string): VideoClicks_18;
    attachCustomClick(content: string, attributes?: {
        id?: string;
    }): CustomClick_21;
    addCustomClick(content: string, attributes?: {
        id?: string;
    }): VideoClicks_18;
}
declare class MediaFile_23 extends V<MediaFiles_22> {
}
declare class MediaFiles_22 extends V<Linear_13> {
    attachMediaFile(content: string, attributes: {
        id?: string;
        delivery: "progressive" | "streaming";
        type: string;
        bitrate?: string;
        width: string;
        height: string;
        scalable?: string;
        mantainAspectRatio?: string;
        apiFramework?: string;
    }): MediaFile_23;
    addMediaFile(content: string, attributes: {
        id?: string;
        delivery: "progressive" | "streaming";
        type: string;
        bitrate?: string;
        width: string;
        height: string;
        scalable?: string;
        mantainAspectRatio?: string;
        apiFramework?: string;
    }): MediaFiles_22;
}
declare class Linear_13 extends V<Creative_12> {
    attachDuration(content: string): Duration_14;
    addDuration(content: string): Linear_13;
    attachTrackingEvents(): TrackingEvents_15;
    attachAdParameters(content: string): AdParameters_17;
    addAdParameters(content: string): Linear_13;
    attachVideoClicks(): VideoClicks_18;
    attachMediaFiles(): MediaFiles_22;
}
declare class StaticResource_26 extends V<Companion_25> {
}
declare class IFrameResource_27 extends V<Companion_25> {
}
declare class HTMLResource_28 extends V<Companion_25> {
}
declare class Tracking_30 extends V<TrackingEvents_29> {
}
declare class TrackingEvents_29 extends V<Companion_25> {
    attachTracking(content: string, attributes: {
        event: "creativeView";
    }): Tracking_30;
    addTracking(content: string, attributes: {
        event: "creativeView";
    }): TrackingEvents_29;
}
declare class CompanionClickThrough_31 extends V<Companion_25> {
}
declare class AltText_32 extends V<Companion_25> {
}
declare class AdParameters_33 extends V<Companion_25> {
}
declare class Companion_25 extends V<CompanionAds_24> {
    attachStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): StaticResource_26;
    addStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): Companion_25;
    attachIFrameResource(content: string): IFrameResource_27;
    addIFrameResource(content: string): Companion_25;
    attachHTMLResource(content: string): HTMLResource_28;
    addHTMLResource(content: string): Companion_25;
    attachTrackingEvents(): TrackingEvents_29;
    attachCompanionClickThrough(content: string): CompanionClickThrough_31;
    addCompanionClickThrough(content: string): Companion_25;
    attachAltText(content: string): AltText_32;
    addAltText(content: string): Companion_25;
    attachAdParameters(content: string): AdParameters_33;
    addAdParameters(content: string): Companion_25;
}
declare class CompanionAds_24 extends V<Creative_12> {
    attachCompanion(attributes: {
        id?: string;
        width: string;
        height: string;
        expandedWidth?: string;
        expandedHeight?: string;
        apiFramework?: string;
    }): Companion_25;
}
declare class StaticResource_36 extends V<NonLinear_35> {
}
declare class IFrameResource_37 extends V<NonLinear_35> {
}
declare class HTMLResource_38 extends V<NonLinear_35> {
}
declare class NonLinear_35 extends V<NonLinearAds_34> {
    attachStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): StaticResource_36;
    addStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): NonLinear_35;
    attachIFrameResource(content: string): IFrameResource_37;
    addIFrameResource(content: string): NonLinear_35;
    attachHTMLResource(content: string): HTMLResource_38;
    addHTMLResource(content: string): NonLinear_35;
}
declare class Tracking_40 extends V<TrackingEvents_39> {
}
declare class TrackingEvents_39 extends V<NonLinearAds_34> {
    attachTracking(content: string, attributes: {
        event: "creativeView" | "start" | "midpoint" | "firstQuartile" | "thirdQuartile" | "complete" | "mute" | "unmute" | "pause" | "rewind" | "resume" | "fullscreen" | "expand" | "collapse" | "acceptInvitation" | "close";
    }): Tracking_40;
    addTracking(content: string, attributes: {
        event: "creativeView" | "start" | "midpoint" | "firstQuartile" | "thirdQuartile" | "complete" | "mute" | "unmute" | "pause" | "rewind" | "resume" | "fullscreen" | "expand" | "collapse" | "acceptInvitation" | "close";
    }): TrackingEvents_39;
}
declare class NonLinearClickThrough_41 extends V<NonLinearAds_34> {
}
declare class AdParameters_42 extends V<NonLinearAds_34> {
}
declare class NonLinearAds_34 extends V<Creative_12> {
    attachNonLinear(attributes: {
        id?: string;
        width: string;
        height: string;
        expandedWidth?: string;
        expandedHeight?: string;
        scalable?: string;
        maintainAspectRatio?: string;
        minSuggestedDuration?: string;
        apiFramework?: string;
    }): NonLinear_35;
    attachTrackingEvents(): TrackingEvents_39;
    attachNonLinearClickThrough(content: string): NonLinearClickThrough_41;
    addNonLinearClickThrough(content: string): NonLinearAds_34;
    attachAdParameters(content: string): AdParameters_42;
    addAdParameters(content: string): NonLinearAds_34;
}
declare class Creative_12 extends V<Creatives_11> {
    attachLinear(): Linear_13;
    attachCompanionAds(): CompanionAds_24;
    attachNonLinearAds(): NonLinearAds_34;
}
declare class Creatives_11 extends V<InLine_4> {
    attachCreative(attributes?: {
        id?: string;
        sequence?: string;
        adID?: string;
    }): Creative_12;
}
declare class Extension_44 extends V<Extensions_43> {
}
declare class Extensions_43 extends V<InLine_4> {
    attachExtension(content: string, attributes?: {
        type?: string;
    }): Extension_44;
    addExtension(content: string, attributes?: {
        type?: string;
    }): Extensions_43;
}
declare class InLine_4 extends V<Ad_3> {
    attachAdSystem(content: string, attributes?: {
        version?: string;
    }): AdSystem_5;
    addAdSystem(content: string, attributes?: {
        version?: string;
    }): InLine_4;
    attachAdTitle(content: string): AdTitle_6;
    addAdTitle(content: string): InLine_4;
    attachDescription(content: string): Description_7;
    addDescription(content: string): InLine_4;
    attachSurvey(content: string): Survey_8;
    addSurvey(content: string): InLine_4;
    attachError(content: string): Error_9;
    addError(content: string): InLine_4;
    attachImpression(content: string, attributes?: {
        id?: string;
    }): Impression_10;
    addImpression(content: string, attributes?: {
        id?: string;
    }): InLine_4;
    attachCreatives(): Creatives_11;
    attachExtensions(): Extensions_43;
}
declare class AdSystem_46 extends V<Wrapper_45> {
}
declare class VASTAdTagURI_47 extends V<Wrapper_45> {
}
declare class Error_48 extends V<Wrapper_45> {
}
declare class Impression_49 extends V<Wrapper_45> {
}
declare class Tracking_54 extends V<TrackingEvents_53> {
}
declare class TrackingEvents_53 extends V<Linear_52> {
    attachTracking(content: string, attributes: {
        event: "creativeView" | "start" | "midpoint" | "firstQuartile" | "thirdQuartile" | "complete" | "mute" | "unmute" | "pause" | "rewind" | "resume" | "fullscreen" | "expand" | "collapse" | "acceptInvitation" | "close";
    }): Tracking_54;
    addTracking(content: string, attributes: {
        event: "creativeView" | "start" | "midpoint" | "firstQuartile" | "thirdQuartile" | "complete" | "mute" | "unmute" | "pause" | "rewind" | "resume" | "fullscreen" | "expand" | "collapse" | "acceptInvitation" | "close";
    }): TrackingEvents_53;
}
declare class ClickThrough_56 extends V<VideoClicks_55> {
}
declare class ClickTracking_57 extends V<VideoClicks_55> {
}
declare class CustomClick_58 extends V<VideoClicks_55> {
}
declare class VideoClicks_55 extends V<Linear_52> {
    attachClickThrough(content: string): ClickThrough_56;
    addClickThrough(content: string): VideoClicks_55;
    attachClickTracking(content: string): ClickTracking_57;
    addClickTracking(content: string): VideoClicks_55;
    attachCustomClick(content: string, attributes?: {
        id?: string;
    }): CustomClick_58;
    addCustomClick(content: string, attributes?: {
        id?: string;
    }): VideoClicks_55;
}
declare class Linear_52 extends V<Creative_51> {
    attachTrackingEvents(): TrackingEvents_53;
    attachVideoClicks(): VideoClicks_55;
}
declare class StaticResource_61 extends V<Companion_60> {
}
declare class IFrameResource_62 extends V<Companion_60> {
}
declare class HTMLResource_63 extends V<Companion_60> {
}
declare class Tracking_65 extends V<TrackingEvents_64> {
}
declare class TrackingEvents_64 extends V<Companion_60> {
    attachTracking(content: string, attributes: {
        event: "creativeView";
    }): Tracking_65;
    addTracking(content: string, attributes: {
        event: "creativeView";
    }): TrackingEvents_64;
}
declare class CompanionClickThrough_66 extends V<Companion_60> {
}
declare class AltText_67 extends V<Companion_60> {
}
declare class AdParameters_68 extends V<Companion_60> {
}
declare class Companion_60 extends V<CompanionAds_59> {
    attachStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): StaticResource_61;
    addStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): Companion_60;
    attachIFrameResource(content: string): IFrameResource_62;
    addIFrameResource(content: string): Companion_60;
    attachHTMLResource(content: string): HTMLResource_63;
    addHTMLResource(content: string): Companion_60;
    attachTrackingEvents(): TrackingEvents_64;
    attachCompanionClickThrough(content: string): CompanionClickThrough_66;
    addCompanionClickThrough(content: string): Companion_60;
    attachAltText(content: string): AltText_67;
    addAltText(content: string): Companion_60;
    attachAdParameters(content: string): AdParameters_68;
    addAdParameters(content: string): Companion_60;
}
declare class CompanionAds_59 extends V<Creative_51> {
    attachCompanion(attributes: {
        id?: string;
        width: string;
        height: string;
        expandedWidth?: string;
        expandedHeight?: string;
        apiFramework?: string;
    }): Companion_60;
}
declare class StaticResource_71 extends V<NonLinear_70> {
}
declare class IFrameResource_72 extends V<NonLinear_70> {
}
declare class HTMLResource_73 extends V<NonLinear_70> {
}
declare class NonLinear_70 extends V<NonLinearAds_69> {
    attachStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): StaticResource_71;
    addStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): NonLinear_70;
    attachIFrameResource(content: string): IFrameResource_72;
    addIFrameResource(content: string): NonLinear_70;
    attachHTMLResource(content: string): HTMLResource_73;
    addHTMLResource(content: string): NonLinear_70;
}
declare class Tracking_75 extends V<TrackingEvents_74> {
}
declare class TrackingEvents_74 extends V<NonLinearAds_69> {
    attachTracking(content: string, attributes: {
        event: "creativeView" | "start" | "midpoint" | "firstQuartile" | "thirdQuartile" | "complete" | "mute" | "unmute" | "pause" | "rewind" | "resume" | "fullscreen" | "expand" | "collapse" | "acceptInvitation" | "close";
    }): Tracking_75;
    addTracking(content: string, attributes: {
        event: "creativeView" | "start" | "midpoint" | "firstQuartile" | "thirdQuartile" | "complete" | "mute" | "unmute" | "pause" | "rewind" | "resume" | "fullscreen" | "expand" | "collapse" | "acceptInvitation" | "close";
    }): TrackingEvents_74;
}
declare class NonLinearAds_69 extends V<Creative_51> {
    attachNonLinear(attributes: {
        id?: string;
        width: string;
        height: string;
        expandedWidth?: string;
        expandedHeight?: string;
        scalable?: string;
        maintainAspectRatio?: string;
        minSuggestedDuration?: string;
        apiFramework?: string;
    }): NonLinear_70;
    attachTrackingEvents(): TrackingEvents_74;
}
declare class Creative_51 extends V<Creatives_50> {
    attachLinear(): Linear_52;
    attachCompanionAds(): CompanionAds_59;
    attachNonLinearAds(): NonLinearAds_69;
}
declare class Creatives_50 extends V<Wrapper_45> {
    attachCreative(attributes?: {
        id?: string;
        sequence?: string;
        adID?: string;
    }): Creative_51;
}
declare class Extension_77 extends V<Extensions_76> {
}
declare class Extensions_76 extends V<Wrapper_45> {
    attachExtension(content: string, attributes?: {
        type?: string;
    }): Extension_77;
    addExtension(content: string, attributes?: {
        type?: string;
    }): Extensions_76;
}
declare class Wrapper_45 extends V<Ad_3> {
    attachAdSystem(content: string, attributes?: {
        version?: string;
    }): AdSystem_46;
    addAdSystem(content: string, attributes?: {
        version?: string;
    }): Wrapper_45;
    attachVASTAdTagURI(content: string): VASTAdTagURI_47;
    addVASTAdTagURI(content: string): Wrapper_45;
    attachError(content: string): Error_48;
    addError(content: string): Wrapper_45;
    attachImpression(content: string, attributes?: {
        id?: string;
    }): Impression_49;
    addImpression(content: string, attributes?: {
        id?: string;
    }): Wrapper_45;
    attachCreatives(): Creatives_50;
    attachExtensions(): Extensions_76;
}
declare class Ad_3 extends V<VAST_2> {
    attachInLine(): InLine_4;
    attachWrapper(): Wrapper_45;
}
declare class VAST_2 extends V<apiv2> {
    attachAd(attributes: {
        id: string;
    }): Ad_3;
}
declare class apiv2 extends V<apiv2> {
    attachVAST(attributes: {
        version: "2.0";
    }): VAST_2;
    and(): this;
}
export { apiv2, VAST_2 };
