import V from "../../src/vast-element";
declare class Error_5 extends V<VAST_4> {
}
declare class AdSystem_8 extends V<InLine_7> {
}
declare class AdTitle_9 extends V<InLine_7> {
}
declare class Impression_10 extends V<InLine_7> {
}
declare class Category_11 extends V<InLine_7> {
}
declare class Description_12 extends V<InLine_7> {
}
declare class Advertiser_13 extends V<InLine_7> {
}
declare class Pricing_14 extends V<InLine_7> {
}
declare class Survey_15 extends V<InLine_7> {
}
declare class Error_16 extends V<InLine_7> {
}
declare class Viewable_18 extends V<ViewableImpression_17> {
}
declare class NotViewable_19 extends V<ViewableImpression_17> {
}
declare class ViewUndetermined_20 extends V<ViewableImpression_17> {
}
declare class ViewableImpression_17 extends V<InLine_7> {
    attachViewable(content: string): Viewable_18;
    addViewable(content: string): ViewableImpression_17;
    attachNotViewable(content: string): NotViewable_19;
    addNotViewable(content: string): ViewableImpression_17;
    attachViewUndetermined(content: string): ViewUndetermined_20;
    addViewUndetermined(content: string): ViewableImpression_17;
}
declare class JavaScriptResource_23 extends V<Verification_22> {
}
declare class FlashResource_24 extends V<Verification_22> {
}
declare class ViewableImpression_25 extends V<Verification_22> {
}
declare class Verification_22 extends V<AdVerifications_21> {
    attachJavaScriptResource(content: string, attributes?: {
        apiFramework?: string;
    }): JavaScriptResource_23;
    addJavaScriptResource(content: string, attributes?: {
        apiFramework?: string;
    }): Verification_22;
    attachFlashResource(content: string, attributes?: {
        apiFramework?: string;
    }): FlashResource_24;
    addFlashResource(content: string, attributes?: {
        apiFramework?: string;
    }): Verification_22;
    attachViewableImpression(content: string, attributes?: {
        id?: string;
    }): ViewableImpression_25;
    addViewableImpression(content: string, attributes?: {
        id?: string;
    }): Verification_22;
}
declare class AdVerifications_21 extends V<InLine_7> {
    attachVerification(attributes?: {
        vendor?: string;
    }): Verification_22;
}
declare class Extension_27 extends V<Extensions_26> {
}
declare class Extensions_26 extends V<InLine_7> {
    attachExtension(content: string, attributes?: {
        type?: string;
    }): Extension_27;
    addExtension(content: string, attributes?: {
        type?: string;
    }): Extensions_26;
}
declare class UniversalAdId_30 extends V<Creative_29> {
}
declare class CreativeExtension_32 extends V<CreativeExtensions_31> {
}
declare class CreativeExtensions_31 extends V<Creative_29> {
    attachCreativeExtension(content: string, attributes?: {
        type?: string;
    }): CreativeExtension_32;
    addCreativeExtension(content: string, attributes?: {
        type?: string;
    }): CreativeExtensions_31;
}
declare class Duration_34 extends V<Linear_33> {
}
declare class AdParameters_35 extends V<Linear_33> {
}
declare class Mezzanine_37 extends V<MediaFiles_36> {
}
declare class MediaFile_38 extends V<MediaFiles_36> {
}
declare class InteractiveCreativeFile_39 extends V<MediaFiles_36> {
}
declare class MediaFiles_36 extends V<Linear_33> {
    attachMezzanine(content: string): Mezzanine_37;
    addMezzanine(content: string): MediaFiles_36;
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
    }): MediaFile_38;
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
    }): MediaFiles_36;
    attachInteractiveCreativeFile(content: string): InteractiveCreativeFile_39;
    addInteractiveCreativeFile(content: string): MediaFiles_36;
}
declare class ClickThrough_41 extends V<VideoClicks_40> {
}
declare class ClickTracking_42 extends V<VideoClicks_40> {
}
declare class CustomClick_43 extends V<VideoClicks_40> {
}
declare class VideoClicks_40 extends V<Linear_33> {
    attachClickThrough(content: string, attributes?: {
        id?: string;
    }): ClickThrough_41;
    addClickThrough(content: string, attributes?: {
        id?: string;
    }): VideoClicks_40;
    attachClickTracking(content: string, attributes?: {
        id?: string;
    }): ClickTracking_42;
    addClickTracking(content: string, attributes?: {
        id?: string;
    }): VideoClicks_40;
    attachCustomClick(content: string, attributes?: {
        id?: string;
    }): CustomClick_43;
    addCustomClick(content: string, attributes?: {
        id?: string;
    }): VideoClicks_40;
}
declare class Tracking_45 extends V<TrackingEvents_44> {
}
declare class TrackingEvents_44 extends V<Linear_33> {
    attachTracking(content: string, attributes: {
        offset?: string;
        event: "mute" | "unmute" | "pause" | "resume" | "rewind" | "skip" | "playerExpand" | "playerCollapse" | "otherAdInteraction" | "start" | "firstQuartile" | "midpoint" | "thirdQuartile" | "complete" | "acceptInvitationLinear" | "timeSpentViewing" | "progress";
    }): Tracking_45;
    addTracking(content: string, attributes: {
        offset?: string;
        event: "mute" | "unmute" | "pause" | "resume" | "rewind" | "skip" | "playerExpand" | "playerCollapse" | "otherAdInteraction" | "start" | "firstQuartile" | "midpoint" | "thirdQuartile" | "complete" | "acceptInvitationLinear" | "timeSpentViewing" | "progress";
    }): TrackingEvents_44;
}
declare class StaticResource_48 extends V<Icon_47> {
}
declare class IFrameResource_49 extends V<Icon_47> {
}
declare class HTMLResource_50 extends V<Icon_47> {
}
declare class IconClickThrough_52 extends V<IconClicks_51> {
}
declare class IconClickTracking_53 extends V<IconClicks_51> {
}
declare class IconClicks_51 extends V<Icon_47> {
    attachIconClickThrough(content: string): IconClickThrough_52;
    addIconClickThrough(content: string): IconClicks_51;
    attachIconClickTracking(content: string, attributes?: {
        id?: string;
    }): IconClickTracking_53;
    addIconClickTracking(content: string, attributes?: {
        id?: string;
    }): IconClicks_51;
}
declare class IconViewTracking_54 extends V<Icon_47> {
}
declare class Icon_47 extends V<Icons_46> {
    attachStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): StaticResource_48;
    addStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): Icon_47;
    attachIFrameResource(content: string): IFrameResource_49;
    addIFrameResource(content: string): Icon_47;
    attachHTMLResource(content: string): HTMLResource_50;
    addHTMLResource(content: string): Icon_47;
    attachIconClicks(): IconClicks_51;
    attachIconViewTracking(content: string): IconViewTracking_54;
    addIconViewTracking(content: string): Icon_47;
}
declare class Icons_46 extends V<Linear_33> {
    attachIcon(attributes?: {
        program?: string;
        width?: string;
        height?: string;
        xPosition?: string;
        yPosition?: string;
        duration?: string;
        offset?: string;
        apiFramework?: string;
        pxratio?: string;
    }): Icon_47;
}
declare class Linear_33 extends V<Creative_29> {
    attachDuration(content: string): Duration_34;
    addDuration(content: string): Linear_33;
    attachAdParameters(content: string, attributes?: {
        xmlEncoded?: string;
    }): AdParameters_35;
    addAdParameters(content: string, attributes?: {
        xmlEncoded?: string;
    }): Linear_33;
    attachMediaFiles(): MediaFiles_36;
    attachVideoClicks(): VideoClicks_40;
    attachTrackingEvents(): TrackingEvents_44;
    attachIcons(): Icons_46;
}
declare class NonLinearClickThrough_57 extends V<NonLinear_56> {
}
declare class NonLinearClickTracking_58 extends V<NonLinear_56> {
}
declare class NonLinear_56 extends V<NonLinearAds_55> {
    attachNonLinearClickThrough(content: string): NonLinearClickThrough_57;
    addNonLinearClickThrough(content: string): NonLinear_56;
    attachNonLinearClickTracking(content: string): NonLinearClickTracking_58;
    addNonLinearClickTracking(content: string): NonLinear_56;
}
declare class Tracking_60 extends V<TrackingEvents_59> {
}
declare class TrackingEvents_59 extends V<NonLinearAds_55> {
    attachTracking(content: string, attributes: {
        event: "mute" | "unmute" | "pause" | "resume" | "rewind" | "skip" | "playerExpand" | "playerCollapse" | "otherAdInteraction" | "creativeView" | "acceptInvitation" | "adExpand" | "adCollapse" | "minimize" | "close" | "overlayViewDuration";
    }): Tracking_60;
    addTracking(content: string, attributes: {
        event: "mute" | "unmute" | "pause" | "resume" | "rewind" | "skip" | "playerExpand" | "playerCollapse" | "otherAdInteraction" | "creativeView" | "acceptInvitation" | "adExpand" | "adCollapse" | "minimize" | "close" | "overlayViewDuration";
    }): TrackingEvents_59;
}
declare class NonLinearAds_55 extends V<Creative_29> {
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
    }): NonLinear_56;
    attachTrackingEvents(): TrackingEvents_59;
}
declare class StaticResource_63 extends V<Companion_62> {
}
declare class IFrameResource_64 extends V<Companion_62> {
}
declare class HTMLResource_65 extends V<Companion_62> {
}
declare class AdParameters_66 extends V<Companion_62> {
}
declare class AltText_67 extends V<Companion_62> {
}
declare class CompanionClickThrough_68 extends V<Companion_62> {
}
declare class CompanionClickTracking_69 extends V<Companion_62> {
}
declare class Tracking_71 extends V<TrackingEvents_70> {
}
declare class TrackingEvents_70 extends V<Companion_62> {
    attachTracking(content: string, attributes: {
        event: "creativeView";
    }): Tracking_71;
    addTracking(content: string, attributes: {
        event: "creativeView";
    }): TrackingEvents_70;
}
declare class Companion_62 extends V<CompanionAds_61> {
    attachStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): StaticResource_63;
    addStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): Companion_62;
    attachIFrameResource(content: string): IFrameResource_64;
    addIFrameResource(content: string): Companion_62;
    attachHTMLResource(content: string): HTMLResource_65;
    addHTMLResource(content: string): Companion_62;
    attachAdParameters(content: string, attributes?: {
        xmlEncoded?: string;
    }): AdParameters_66;
    addAdParameters(content: string, attributes?: {
        xmlEncoded?: string;
    }): Companion_62;
    attachAltText(content: string): AltText_67;
    addAltText(content: string): Companion_62;
    attachCompanionClickThrough(content: string): CompanionClickThrough_68;
    addCompanionClickThrough(content: string): Companion_62;
    attachCompanionClickTracking(content: string, attributes?: {
        id?: string;
    }): CompanionClickTracking_69;
    addCompanionClickTracking(content: string, attributes?: {
        id?: string;
    }): Companion_62;
    attachTrackingEvents(): TrackingEvents_70;
}
declare class CompanionAds_61 extends V<Creative_29> {
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
        pxratio?: string;
    }): Companion_62;
}
declare class Creative_29 extends V<Creatives_28> {
    attachUniversalAdId(content: string, attributes: {
        idRegistry: string;
        idValue: string;
    }): UniversalAdId_30;
    addUniversalAdId(content: string, attributes: {
        idRegistry: string;
        idValue: string;
    }): Creative_29;
    attachCreativeExtensions(): CreativeExtensions_31;
    attachLinear(attributes?: {
        skipoffset?: string;
    }): Linear_33;
    attachNonLinearAds(): NonLinearAds_55;
    attachCompanionAds(attributes: {
        required: "all" | "any" | "none";
    }): CompanionAds_61;
}
declare class Creatives_28 extends V<InLine_7> {
    attachCreative(attributes?: {
        id?: string;
        sequence?: string;
        adId?: string;
        apiFramework?: string;
    }): Creative_29;
}
declare class InLine_7 extends V<Ad_6> {
    attachAdSystem(content: string, attributes?: {
        version?: string;
    }): AdSystem_8;
    addAdSystem(content: string, attributes?: {
        version?: string;
    }): InLine_7;
    attachAdTitle(content: string): AdTitle_9;
    addAdTitle(content: string): InLine_7;
    attachImpression(content: string, attributes?: {
        id?: string;
    }): Impression_10;
    addImpression(content: string, attributes?: {
        id?: string;
    }): InLine_7;
    attachCategory(content: string, attributes: {
        authority: string;
    }): Category_11;
    addCategory(content: string, attributes: {
        authority: string;
    }): InLine_7;
    attachDescription(content: string): Description_12;
    addDescription(content: string): InLine_7;
    attachAdvertiser(content: string): Advertiser_13;
    addAdvertiser(content: string): InLine_7;
    attachPricing(content: string, attributes: {
        currency: string;
        model: "CPM" | "CPC" | "CPE" | "CPV";
    }): Pricing_14;
    addPricing(content: string, attributes: {
        currency: string;
        model: "CPM" | "CPC" | "CPE" | "CPV";
    }): InLine_7;
    attachSurvey(content: string, attributes?: {
        type?: string;
    }): Survey_15;
    addSurvey(content: string, attributes?: {
        type?: string;
    }): InLine_7;
    attachError(content: string): Error_16;
    addError(content: string): InLine_7;
    attachViewableImpression(attributes?: {
        id?: string;
    }): ViewableImpression_17;
    attachAdVerifications(): AdVerifications_21;
    attachExtensions(): Extensions_26;
    attachCreatives(): Creatives_28;
}
declare class Impression_73 extends V<Wrapper_72> {
}
declare class VASTAdTagURI_74 extends V<Wrapper_72> {
}
declare class AdSystem_75 extends V<Wrapper_72> {
}
declare class Pricing_76 extends V<Wrapper_72> {
}
declare class Error_77 extends V<Wrapper_72> {
}
declare class Viewable_79 extends V<ViewableImpression_78> {
}
declare class NotViewable_80 extends V<ViewableImpression_78> {
}
declare class ViewUndetermined_81 extends V<ViewableImpression_78> {
}
declare class ViewableImpression_78 extends V<Wrapper_72> {
    attachViewable(content: string): Viewable_79;
    addViewable(content: string): ViewableImpression_78;
    attachNotViewable(content: string): NotViewable_80;
    addNotViewable(content: string): ViewableImpression_78;
    attachViewUndetermined(content: string): ViewUndetermined_81;
    addViewUndetermined(content: string): ViewableImpression_78;
}
declare class ViewableImpression_84 extends V<Verification_83> {
}
declare class Verification_83 extends V<AdVerifications_82> {
    attachViewableImpression(content: string, attributes?: {
        id?: string;
    }): ViewableImpression_84;
    addViewableImpression(content: string, attributes?: {
        id?: string;
    }): Verification_83;
}
declare class AdVerifications_82 extends V<Wrapper_72> {
    attachVerification(attributes?: {
        vendor?: string;
    }): Verification_83;
}
declare class Extension_86 extends V<Extensions_85> {
}
declare class Extensions_85 extends V<Wrapper_72> {
    attachExtension(content: string, attributes?: {
        type?: string;
    }): Extension_86;
    addExtension(content: string, attributes?: {
        type?: string;
    }): Extensions_85;
}
declare class Tracking_91 extends V<TrackingEvents_90> {
}
declare class TrackingEvents_90 extends V<Linear_89> {
    attachTracking(content: string, attributes: {
        offset?: string;
        event: "mute" | "unmute" | "pause" | "resume" | "rewind" | "skip" | "playerExpand" | "playerCollapse" | "otherAdInteraction" | "start" | "firstQuartile" | "midpoint" | "thirdQuartile" | "complete" | "acceptInvitationLinear" | "timeSpentViewing" | "progress";
    }): Tracking_91;
    addTracking(content: string, attributes: {
        offset?: string;
        event: "mute" | "unmute" | "pause" | "resume" | "rewind" | "skip" | "playerExpand" | "playerCollapse" | "otherAdInteraction" | "start" | "firstQuartile" | "midpoint" | "thirdQuartile" | "complete" | "acceptInvitationLinear" | "timeSpentViewing" | "progress";
    }): TrackingEvents_90;
}
declare class ClickTracking_93 extends V<VideoClicks_92> {
}
declare class CustomClick_94 extends V<VideoClicks_92> {
}
declare class VideoClicks_92 extends V<Linear_89> {
    attachClickTracking(content: string, attributes?: {
        id?: string;
    }): ClickTracking_93;
    addClickTracking(content: string, attributes?: {
        id?: string;
    }): VideoClicks_92;
    attachCustomClick(content: string, attributes?: {
        id?: string;
    }): CustomClick_94;
    addCustomClick(content: string, attributes?: {
        id?: string;
    }): VideoClicks_92;
}
declare class StaticResource_97 extends V<Icon_96> {
}
declare class IFrameResource_98 extends V<Icon_96> {
}
declare class HTMLResource_99 extends V<Icon_96> {
}
declare class IconClickThrough_101 extends V<IconClicks_100> {
}
declare class IconClickTracking_102 extends V<IconClicks_100> {
}
declare class IconClicks_100 extends V<Icon_96> {
    attachIconClickThrough(content: string): IconClickThrough_101;
    addIconClickThrough(content: string): IconClicks_100;
    attachIconClickTracking(content: string): IconClickTracking_102;
    addIconClickTracking(content: string): IconClicks_100;
}
declare class IconViewTracking_103 extends V<Icon_96> {
}
declare class Icon_96 extends V<Icons_95> {
    attachStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): StaticResource_97;
    addStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): Icon_96;
    attachIFrameResource(content: string): IFrameResource_98;
    addIFrameResource(content: string): Icon_96;
    attachHTMLResource(content: string): HTMLResource_99;
    addHTMLResource(content: string): Icon_96;
    attachIconClicks(): IconClicks_100;
    attachIconViewTracking(content: string): IconViewTracking_103;
    addIconViewTracking(content: string): Icon_96;
}
declare class Icons_95 extends V<Linear_89> {
    attachIcon(attributes?: {
        program?: string;
        width?: string;
        height?: string;
        xPosition?: string;
        yPosition?: string;
        duration?: string;
        offset?: string;
        apiFramework?: string;
        pxratio?: string;
    }): Icon_96;
}
declare class InteractiveCreativeFile_104 extends V<Linear_89> {
}
declare class Linear_89 extends V<Creative_88> {
    attachTrackingEvents(): TrackingEvents_90;
    attachVideoClicks(): VideoClicks_92;
    attachIcons(): Icons_95;
    attachInteractiveCreativeFile(content: string): InteractiveCreativeFile_104;
    addInteractiveCreativeFile(content: string): Linear_89;
}
declare class NonLinearClickThrough_107 extends V<NonLinear_106> {
}
declare class NonLinearClickTracking_108 extends V<NonLinear_106> {
}
declare class NonLinear_106 extends V<NonLinearAds_105> {
    attachNonLinearClickThrough(content: string): NonLinearClickThrough_107;
    addNonLinearClickThrough(content: string): NonLinear_106;
    attachNonLinearClickTracking(content: string): NonLinearClickTracking_108;
    addNonLinearClickTracking(content: string): NonLinear_106;
}
declare class Tracking_110 extends V<TrackingEvents_109> {
}
declare class TrackingEvents_109 extends V<NonLinearAds_105> {
    attachTracking(content: string, attributes: {
        event: "mute" | "unmute" | "pause" | "resume" | "rewind" | "skip" | "playerExpand" | "playerCollapse" | "otherAdInteraction" | "creativeView" | "acceptInvitation" | "adExpand" | "adCollapse" | "minimize" | "close" | "overlayViewDuration";
    }): Tracking_110;
    addTracking(content: string, attributes: {
        event: "mute" | "unmute" | "pause" | "resume" | "rewind" | "skip" | "playerExpand" | "playerCollapse" | "otherAdInteraction" | "creativeView" | "acceptInvitation" | "adExpand" | "adCollapse" | "minimize" | "close" | "overlayViewDuration";
    }): TrackingEvents_109;
}
declare class NonLinearAds_105 extends V<Creative_88> {
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
    }): NonLinear_106;
    attachTrackingEvents(): TrackingEvents_109;
}
declare class StaticResource_113 extends V<Companion_112> {
}
declare class IFrameResource_114 extends V<Companion_112> {
}
declare class HTMLResource_115 extends V<Companion_112> {
}
declare class AdParameters_116 extends V<Companion_112> {
}
declare class AltText_117 extends V<Companion_112> {
}
declare class CompanionClickThrough_118 extends V<Companion_112> {
}
declare class CompanionClickTracking_119 extends V<Companion_112> {
}
declare class Tracking_121 extends V<TrackingEvents_120> {
}
declare class TrackingEvents_120 extends V<Companion_112> {
    attachTracking(content: string, attributes: {
        event: "creativeView";
    }): Tracking_121;
    addTracking(content: string, attributes: {
        event: "creativeView";
    }): TrackingEvents_120;
}
declare class Companion_112 extends V<CompanionAds_111> {
    attachStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): StaticResource_113;
    addStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): Companion_112;
    attachIFrameResource(content: string): IFrameResource_114;
    addIFrameResource(content: string): Companion_112;
    attachHTMLResource(content: string): HTMLResource_115;
    addHTMLResource(content: string): Companion_112;
    attachAdParameters(content: string, attributes?: {
        xmlEncoded?: string;
    }): AdParameters_116;
    addAdParameters(content: string, attributes?: {
        xmlEncoded?: string;
    }): Companion_112;
    attachAltText(content: string): AltText_117;
    addAltText(content: string): Companion_112;
    attachCompanionClickThrough(content: string): CompanionClickThrough_118;
    addCompanionClickThrough(content: string): Companion_112;
    attachCompanionClickTracking(content: string, attributes?: {
        id?: string;
    }): CompanionClickTracking_119;
    addCompanionClickTracking(content: string, attributes?: {
        id?: string;
    }): Companion_112;
    attachTrackingEvents(): TrackingEvents_120;
}
declare class CompanionAds_111 extends V<Creative_88> {
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
        logoTile?: string;
        logoTitle?: string;
        logoArtist?: string;
        logoURL?: string;
        pxratio?: string;
    }): Companion_112;
}
declare class Creative_88 extends V<Creatives_87> {
    attachLinear(): Linear_89;
    attachNonLinearAds(): NonLinearAds_105;
    attachCompanionAds(attributes: {
        required: "all" | "any" | "none";
    }): CompanionAds_111;
}
declare class Creatives_87 extends V<Wrapper_72> {
    attachCreative(attributes?: {
        id?: string;
        sequence?: string;
        adId?: string;
    }): Creative_88;
}
declare class Wrapper_72 extends V<Ad_6> {
    attachImpression(content: string, attributes?: {
        id?: string;
    }): Impression_73;
    addImpression(content: string, attributes?: {
        id?: string;
    }): Wrapper_72;
    attachVASTAdTagURI(content: string): VASTAdTagURI_74;
    addVASTAdTagURI(content: string): Wrapper_72;
    attachAdSystem(content: string, attributes?: {
        version?: string;
    }): AdSystem_75;
    addAdSystem(content: string, attributes?: {
        version?: string;
    }): Wrapper_72;
    attachPricing(content: string, attributes: {
        currency: string;
        model: "CPM" | "CPC" | "CPE" | "CPV";
    }): Pricing_76;
    addPricing(content: string, attributes: {
        currency: string;
        model: "CPM" | "CPC" | "CPE" | "CPV";
    }): Wrapper_72;
    attachError(content: string): Error_77;
    addError(content: string): Wrapper_72;
    attachViewableImpression(attributes?: {
        id?: string;
    }): ViewableImpression_78;
    attachAdVerifications(): AdVerifications_82;
    attachExtensions(): Extensions_85;
    attachCreatives(): Creatives_87;
}
declare class Ad_6 extends V<VAST_4> {
    attachInLine(): InLine_7;
    attachWrapper(attributes?: {
        followAdditonalWrappers?: string;
        allowMultipleAds?: string;
        fallbackOnNoAd?: string;
    }): Wrapper_72;
}
declare class VAST_4 extends V<apiv4> {
    attachError(content: string): Error_5;
    addError(content: string): VAST_4;
    attachAd(attributes?: {
        id?: string;
        sequence?: string;
        conditionalAd?: string;
    }): Ad_6;
}
declare class apiv4 extends V<apiv4> {
    attachVAST(attributes: {
        version: "4.0";
    }): VAST_4;
    and(): this;
}
export { apiv4, VAST_4 };
