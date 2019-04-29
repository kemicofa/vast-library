import V from "../../src/vast-element";
declare class Error_4 extends V<VAST_3> {
}
declare class AdSystem_7 extends V<InLine_6> {
}
declare class AdTitle_8 extends V<InLine_6> {
}
declare class Description_9 extends V<InLine_6> {
}
declare class Advertiser_10 extends V<InLine_6> {
}
declare class Pricing_11 extends V<InLine_6> {
}
declare class Survey_12 extends V<InLine_6> {
}
declare class Error_13 extends V<InLine_6> {
}
declare class Impression_14 extends V<InLine_6> {
}
declare class CreativeExtension_18 extends V<CreativeExtensions_17> {
}
declare class CreativeExtensions_17 extends V<Creative_16> {
    attachCreativeExtension(content: string): CreativeExtension_18;
    addCreativeExtension(content: string): CreativeExtensions_17;
}
declare class AdParameters_20 extends V<Linear_19> {
}
declare class Duration_21 extends V<Linear_19> {
}
declare class MediaFile_23 extends V<MediaFiles_22> {
}
declare class MediaFiles_22 extends V<Linear_19> {
    attachMediaFile(content: string, attributes: {
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
    }): MediaFile_23;
    addMediaFile(content: string, attributes: {
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
    }): MediaFiles_22;
}
declare class Tracking_25 extends V<TrackingEvents_24> {
}
declare class TrackingEvents_24 extends V<Linear_19> {
    attachTracking(content: string, attributes: {
        offset?: string;
        event: "creativeView" | "start" | "firstQuartile" | "midpoint" | "thirdQuartile" | "complete" | "mute" | "unmute" | "pause" | "rewind" | "resume" | "fullscreen" | "exitFullscreen" | "expand" | "collapse" | "acceptInvitationLinear" | "closeLinear" | "skip" | "progress";
    }): Tracking_25;
    addTracking(content: string, attributes: {
        offset?: string;
        event: "creativeView" | "start" | "firstQuartile" | "midpoint" | "thirdQuartile" | "complete" | "mute" | "unmute" | "pause" | "rewind" | "resume" | "fullscreen" | "exitFullscreen" | "expand" | "collapse" | "acceptInvitationLinear" | "closeLinear" | "skip" | "progress";
    }): TrackingEvents_24;
}
declare class ClickThrough_27 extends V<VideoClicks_26> {
}
declare class ClickTracking_28 extends V<VideoClicks_26> {
}
declare class CustomClick_29 extends V<VideoClicks_26> {
}
declare class VideoClicks_26 extends V<Linear_19> {
    attachClickThrough(content: string, attributes?: {
        id?: string;
    }): ClickThrough_27;
    addClickThrough(content: string, attributes?: {
        id?: string;
    }): VideoClicks_26;
    attachClickTracking(content: string, attributes?: {
        id?: string;
    }): ClickTracking_28;
    addClickTracking(content: string, attributes?: {
        id?: string;
    }): VideoClicks_26;
    attachCustomClick(content: string, attributes?: {
        id?: string;
    }): CustomClick_29;
    addCustomClick(content: string, attributes?: {
        id?: string;
    }): VideoClicks_26;
}
declare class StaticResource_32 extends V<Icon_31> {
}
declare class IFrameResource_33 extends V<Icon_31> {
}
declare class HTMLResource_34 extends V<Icon_31> {
}
declare class IconClickThrough_36 extends V<IconClicks_35> {
}
declare class IconClickTracking_37 extends V<IconClicks_35> {
}
declare class IconClicks_35 extends V<Icon_31> {
    attachIconClickThrough(content: string): IconClickThrough_36;
    addIconClickThrough(content: string): IconClicks_35;
    attachIconClickTracking(content: string, attributes?: {
        id?: string;
    }): IconClickTracking_37;
    addIconClickTracking(content: string, attributes?: {
        id?: string;
    }): IconClicks_35;
}
declare class IconViewTracking_38 extends V<Icon_31> {
}
declare class Icon_31 extends V<Icons_30> {
    attachStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): StaticResource_32;
    addStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): Icon_31;
    attachIFrameResource(content: string): IFrameResource_33;
    addIFrameResource(content: string): Icon_31;
    attachHTMLResource(content: string): HTMLResource_34;
    addHTMLResource(content: string): Icon_31;
    attachIconClicks(): IconClicks_35;
    attachIconViewTracking(content: string): IconViewTracking_38;
    addIconViewTracking(content: string): Icon_31;
}
declare class Icons_30 extends V<Linear_19> {
    attachIcon(attributes: {
        program: string;
        width: string;
        height: string;
        xPosition: string;
        yPosition: string;
        duration?: string;
        offset?: string;
        apiFramework?: string;
    }): Icon_31;
}
declare class Linear_19 extends V<Creative_16> {
    attachAdParameters(content: string, attributes?: {
        xmlEncoded?: string;
    }): AdParameters_20;
    addAdParameters(content: string, attributes?: {
        xmlEncoded?: string;
    }): Linear_19;
    attachDuration(content: string): Duration_21;
    addDuration(content: string): Linear_19;
    attachMediaFiles(): MediaFiles_22;
    attachTrackingEvents(): TrackingEvents_24;
    attachVideoClicks(): VideoClicks_26;
    attachIcons(): Icons_30;
}
declare class StaticResource_41 extends V<Companion_40> {
}
declare class IFrameResource_42 extends V<Companion_40> {
}
declare class HTMLResource_43 extends V<Companion_40> {
}
declare class AdParameters_44 extends V<Companion_40> {
}
declare class AltText_45 extends V<Companion_40> {
}
declare class CompanionClickThrough_46 extends V<Companion_40> {
}
declare class CompanionClickTracking_47 extends V<Companion_40> {
}
declare class Tracking_49 extends V<TrackingEvents_48> {
}
declare class TrackingEvents_48 extends V<Companion_40> {
    attachTracking(content: string, attributes: {
        event: "creativeView";
    }): Tracking_49;
    addTracking(content: string, attributes: {
        event: "creativeView";
    }): TrackingEvents_48;
}
declare class Companion_40 extends V<CompanionAds_39> {
    attachStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): StaticResource_41;
    addStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): Companion_40;
    attachIFrameResource(content: string): IFrameResource_42;
    addIFrameResource(content: string): Companion_40;
    attachHTMLResource(content: string): HTMLResource_43;
    addHTMLResource(content: string): Companion_40;
    attachAdParameters(content: string, attributes?: {
        xmlEncoded?: string;
    }): AdParameters_44;
    addAdParameters(content: string, attributes?: {
        xmlEncoded?: string;
    }): Companion_40;
    attachAltText(content: string): AltText_45;
    addAltText(content: string): Companion_40;
    attachCompanionClickThrough(content: string): CompanionClickThrough_46;
    addCompanionClickThrough(content: string): Companion_40;
    attachCompanionClickTracking(content: string, attributes?: {
        id?: string;
    }): CompanionClickTracking_47;
    addCompanionClickTracking(content: string, attributes?: {
        id?: string;
    }): Companion_40;
    attachTrackingEvents(): TrackingEvents_48;
}
declare class CompanionAds_39 extends V<Creative_16> {
    attachCompanion(attributes: {
        id?: string;
        width: string;
        height: string;
        assetWidth?: string;
        assetHeight?: string;
        expandedWidth?: string;
        expandedHeight?: string;
        apiFramework?: string;
        adSlotID?: string;
    }): Companion_40;
}
declare class StaticResource_52 extends V<NonLinear_51> {
}
declare class IFrameResource_53 extends V<NonLinear_51> {
}
declare class HTMLResource_54 extends V<NonLinear_51> {
}
declare class NonLinearClickThrough_55 extends V<NonLinear_51> {
}
declare class NonLinearClickTracking_56 extends V<NonLinear_51> {
}
declare class AdParameters_57 extends V<NonLinear_51> {
}
declare class NonLinear_51 extends V<NonLinearAds_50> {
    attachStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): StaticResource_52;
    addStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): NonLinear_51;
    attachIFrameResource(content: string): IFrameResource_53;
    addIFrameResource(content: string): NonLinear_51;
    attachHTMLResource(content: string): HTMLResource_54;
    addHTMLResource(content: string): NonLinear_51;
    attachNonLinearClickThrough(content: string): NonLinearClickThrough_55;
    addNonLinearClickThrough(content: string): NonLinear_51;
    attachNonLinearClickTracking(content: string, attributes?: {
        id?: string;
    }): NonLinearClickTracking_56;
    addNonLinearClickTracking(content: string, attributes?: {
        id?: string;
    }): NonLinear_51;
    attachAdParameters(content: string, attributes?: {
        xmlEncoded?: string;
    }): AdParameters_57;
    addAdParameters(content: string, attributes?: {
        xmlEncoded?: string;
    }): NonLinear_51;
}
declare class Tracking_59 extends V<TrackingEvents_58> {
}
declare class TrackingEvents_58 extends V<NonLinearAds_50> {
    attachTracking(content: string, attributes: {
        offset?: string;
        event: "creativeView" | "start" | "firstQuartile" | "midpoint" | "thirdQuartile" | "complete" | "mute" | "unmute" | "pause" | "rewind" | "resume" | "fullscreen" | "exitFullscreen" | "expand" | "collapse" | "acceptInvitation" | "close" | "progress";
    }): Tracking_59;
    addTracking(content: string, attributes: {
        offset?: string;
        event: "creativeView" | "start" | "firstQuartile" | "midpoint" | "thirdQuartile" | "complete" | "mute" | "unmute" | "pause" | "rewind" | "resume" | "fullscreen" | "exitFullscreen" | "expand" | "collapse" | "acceptInvitation" | "close" | "progress";
    }): TrackingEvents_58;
}
declare class NonLinearAds_50 extends V<Creative_16> {
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
    }): NonLinear_51;
    attachTrackingEvents(): TrackingEvents_58;
}
declare class Creative_16 extends V<Creatives_15> {
    attachCreativeExtensions(): CreativeExtensions_17;
    attachLinear(attributes?: {
        skipoffset?: string;
    }): Linear_19;
    attachCompanionAds(attributes: {
        required: "all" | "any" | "none";
    }): CompanionAds_39;
    attachNonLinearAds(): NonLinearAds_50;
}
declare class Creatives_15 extends V<InLine_6> {
    attachCreative(attributes?: {
        id?: string;
        sequence?: string;
        adID?: string;
        apiFramework?: string;
    }): Creative_16;
}
declare class Extension_61 extends V<Extensions_60> {
}
declare class Extensions_60 extends V<InLine_6> {
    attachExtension(content: string, attributes?: {
        type?: string;
    }): Extension_61;
    addExtension(content: string, attributes?: {
        type?: string;
    }): Extensions_60;
}
declare class InLine_6 extends V<Ad_5> {
    attachAdSystem(content: string, attributes?: {
        version?: string;
    }): AdSystem_7;
    addAdSystem(content: string, attributes?: {
        version?: string;
    }): InLine_6;
    attachAdTitle(content: string): AdTitle_8;
    addAdTitle(content: string): InLine_6;
    attachDescription(content: string): Description_9;
    addDescription(content: string): InLine_6;
    attachAdvertiser(content: string): Advertiser_10;
    addAdvertiser(content: string): InLine_6;
    attachPricing(content: string, attributes: {
        currency: string;
        model: "CPM" | "CPC" | "CPE" | "CPV";
    }): Pricing_11;
    addPricing(content: string, attributes: {
        currency: string;
        model: "CPM" | "CPC" | "CPE" | "CPV";
    }): InLine_6;
    attachSurvey(content: string): Survey_12;
    addSurvey(content: string): InLine_6;
    attachError(content: string): Error_13;
    addError(content: string): InLine_6;
    attachImpression(content: string, attributes?: {
        id?: string;
    }): Impression_14;
    addImpression(content: string, attributes?: {
        id?: string;
    }): InLine_6;
    attachCreatives(): Creatives_15;
    attachExtensions(): Extensions_60;
}
declare class AdSystem_63 extends V<Wrapper_62> {
}
declare class VASTAdTagURI_64 extends V<Wrapper_62> {
}
declare class Error_65 extends V<Wrapper_62> {
}
declare class Impression_66 extends V<Wrapper_62> {
}
declare class Tracking_71 extends V<TrackingEvents_70> {
}
declare class TrackingEvents_70 extends V<Linear_69> {
    attachTracking(content: string, attributes: {
        offset?: string;
        event: "creativeView" | "start" | "firstQuartile" | "midpoint" | "thirdQuartile" | "complete" | "mute" | "unmute" | "pause" | "rewind" | "resume" | "fullscreen" | "exitFullscreen" | "expand" | "collapse" | "acceptInvitationLinear" | "closeLinear" | "skip" | "progress";
    }): Tracking_71;
    addTracking(content: string, attributes: {
        offset?: string;
        event: "creativeView" | "start" | "firstQuartile" | "midpoint" | "thirdQuartile" | "complete" | "mute" | "unmute" | "pause" | "rewind" | "resume" | "fullscreen" | "exitFullscreen" | "expand" | "collapse" | "acceptInvitationLinear" | "closeLinear" | "skip" | "progress";
    }): TrackingEvents_70;
}
declare class ClickTracking_73 extends V<VideoClicks_72> {
}
declare class CustomClick_74 extends V<VideoClicks_72> {
}
declare class VideoClicks_72 extends V<Linear_69> {
    attachClickTracking(content: string, attributes?: {
        id?: string;
    }): ClickTracking_73;
    addClickTracking(content: string, attributes?: {
        id?: string;
    }): VideoClicks_72;
    attachCustomClick(content: string, attributes?: {
        id?: string;
    }): CustomClick_74;
    addCustomClick(content: string, attributes?: {
        id?: string;
    }): VideoClicks_72;
}
declare class StaticResource_77 extends V<Icon_76> {
}
declare class IFrameResource_78 extends V<Icon_76> {
}
declare class HTMLResource_79 extends V<Icon_76> {
}
declare class IconClickThrough_81 extends V<IconClicks_80> {
}
declare class IconClickTracking_82 extends V<IconClicks_80> {
}
declare class IconClicks_80 extends V<Icon_76> {
    attachIconClickThrough(content: string): IconClickThrough_81;
    addIconClickThrough(content: string): IconClicks_80;
    attachIconClickTracking(content: string): IconClickTracking_82;
    addIconClickTracking(content: string): IconClicks_80;
}
declare class IconViewTracking_83 extends V<Icon_76> {
}
declare class Icon_76 extends V<Icons_75> {
    attachStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): StaticResource_77;
    addStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): Icon_76;
    attachIFrameResource(content: string): IFrameResource_78;
    addIFrameResource(content: string): Icon_76;
    attachHTMLResource(content: string): HTMLResource_79;
    addHTMLResource(content: string): Icon_76;
    attachIconClicks(): IconClicks_80;
    attachIconViewTracking(content: string): IconViewTracking_83;
    addIconViewTracking(content: string): Icon_76;
}
declare class Icons_75 extends V<Linear_69> {
    attachIcon(attributes: {
        program: string;
        width: string;
        height: string;
        xPosition: string;
        yPosition: string;
        duration?: string;
        offset?: string;
        apiFramework?: string;
    }): Icon_76;
}
declare class Linear_69 extends V<Creative_68> {
    attachTrackingEvents(): TrackingEvents_70;
    attachVideoClicks(): VideoClicks_72;
    attachIcons(): Icons_75;
}
declare class StaticResource_86 extends V<Companion_85> {
}
declare class IFrameResource_87 extends V<Companion_85> {
}
declare class HTMLResource_88 extends V<Companion_85> {
}
declare class AdParameters_89 extends V<Companion_85> {
}
declare class AltText_90 extends V<Companion_85> {
}
declare class CompanionClickThrough_91 extends V<Companion_85> {
}
declare class CompanionClickTracking_92 extends V<Companion_85> {
}
declare class Tracking_94 extends V<TrackingEvents_93> {
}
declare class TrackingEvents_93 extends V<Companion_85> {
    attachTracking(content: string, attributes: {
        event: "creativeView";
    }): Tracking_94;
    addTracking(content: string, attributes: {
        event: "creativeView";
    }): TrackingEvents_93;
}
declare class Companion_85 extends V<CompanionAds_84> {
    attachStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): StaticResource_86;
    addStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): Companion_85;
    attachIFrameResource(content: string): IFrameResource_87;
    addIFrameResource(content: string): Companion_85;
    attachHTMLResource(content: string): HTMLResource_88;
    addHTMLResource(content: string): Companion_85;
    attachAdParameters(content: string, attributes?: {
        xmlEncoded?: string;
    }): AdParameters_89;
    addAdParameters(content: string, attributes?: {
        xmlEncoded?: string;
    }): Companion_85;
    attachAltText(content: string): AltText_90;
    addAltText(content: string): Companion_85;
    attachCompanionClickThrough(content: string): CompanionClickThrough_91;
    addCompanionClickThrough(content: string): Companion_85;
    attachCompanionClickTracking(content: string): CompanionClickTracking_92;
    addCompanionClickTracking(content: string): Companion_85;
    attachTrackingEvents(): TrackingEvents_93;
}
declare class CompanionAds_84 extends V<Creative_68> {
    attachCompanion(attributes: {
        id?: string;
        width: string;
        height: string;
        assetWidth?: string;
        assetHeight?: string;
        expandedWidth?: string;
        expandedHeight?: string;
        apiFramework?: string;
        adSlotID?: string;
    }): Companion_85;
}
declare class NonLinearClickTracking_97 extends V<NonLinear_96> {
}
declare class NonLinear_96 extends V<NonLinearAds_95> {
    attachNonLinearClickTracking(content: string): NonLinearClickTracking_97;
    addNonLinearClickTracking(content: string): NonLinear_96;
}
declare class Tracking_99 extends V<TrackingEvents_98> {
}
declare class TrackingEvents_98 extends V<NonLinearAds_95> {
    attachTracking(content: string, attributes: {
        offset?: string;
        event: "creativeView" | "start" | "firstQuartile" | "midpoint" | "thirdQuartile" | "complete" | "mute" | "unmute" | "pause" | "rewind" | "resume" | "fullscreen" | "exitFullscreen" | "expand" | "collapse" | "acceptInvitation" | "close" | "progress";
    }): Tracking_99;
    addTracking(content: string, attributes: {
        offset?: string;
        event: "creativeView" | "start" | "firstQuartile" | "midpoint" | "thirdQuartile" | "complete" | "mute" | "unmute" | "pause" | "rewind" | "resume" | "fullscreen" | "exitFullscreen" | "expand" | "collapse" | "acceptInvitation" | "close" | "progress";
    }): TrackingEvents_98;
}
declare class NonLinearAds_95 extends V<Creative_68> {
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
    }): NonLinear_96;
    attachTrackingEvents(): TrackingEvents_98;
}
declare class Creative_68 extends V<Creatives_67> {
    attachLinear(): Linear_69;
    attachCompanionAds(attributes: {
        required: "all" | "any" | "none";
    }): CompanionAds_84;
    attachNonLinearAds(): NonLinearAds_95;
}
declare class Creatives_67 extends V<Wrapper_62> {
    attachCreative(attributes?: {
        id?: string;
        sequence?: string;
        adID?: string;
    }): Creative_68;
}
declare class Extension_101 extends V<Extensions_100> {
}
declare class Extensions_100 extends V<Wrapper_62> {
    attachExtension(content: string, attributes?: {
        type?: string;
    }): Extension_101;
    addExtension(content: string, attributes?: {
        type?: string;
    }): Extensions_100;
}
declare class Wrapper_62 extends V<Ad_5> {
    attachAdSystem(content: string, attributes?: {
        version?: string;
    }): AdSystem_63;
    addAdSystem(content: string, attributes?: {
        version?: string;
    }): Wrapper_62;
    attachVASTAdTagURI(content: string): VASTAdTagURI_64;
    addVASTAdTagURI(content: string): Wrapper_62;
    attachError(content: string): Error_65;
    addError(content: string): Wrapper_62;
    attachImpression(content: string, attributes?: {
        id?: string;
    }): Impression_66;
    addImpression(content: string, attributes?: {
        id?: string;
    }): Wrapper_62;
    attachCreatives(): Creatives_67;
    attachExtensions(): Extensions_100;
}
declare class Ad_5 extends V<VAST_3> {
    attachInLine(): InLine_6;
    attachWrapper(attributes?: {
        followAdditonalWrappers?: string;
        allowMultipleAds?: string;
        fallbackOnNoAd?: string;
    }): Wrapper_62;
}
declare class VAST_3 extends V<apiv3> {
    attachError(content: string): Error_4;
    addError(content: string): VAST_3;
    attachAd(attributes?: {
        id?: string;
        sequence?: string;
    }): Ad_5;
}
declare class apiv3 extends V<apiv3> {
    attachVAST(attributes: {
        version: "3.0";
    }): VAST_3;
    and(): this;
}
export { apiv3, VAST_3 };
