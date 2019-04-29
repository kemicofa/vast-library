import V from "../../src/vast-element";
declare class Error_5 extends V<VAST_4> {
}
declare class AdSystem_8 extends V<InLine_7> {
}
declare class AdTitle_9 extends V<InLine_7> {
}
declare class Impression_10 extends V<InLine_7> {
}
declare class AdServingID_11 extends V<InLine_7> {
}
declare class Category_12 extends V<InLine_7> {
}
declare class Description_13 extends V<InLine_7> {
}
declare class Advertiser_14 extends V<InLine_7> {
}
declare class Pricing_15 extends V<InLine_7> {
}
declare class Survey_16 extends V<InLine_7> {
}
declare class Error_17 extends V<InLine_7> {
}
declare class Expires_18 extends V<InLine_7> {
}
declare class Viewable_20 extends V<ViewableImpression_19> {
}
declare class NotViewable_21 extends V<ViewableImpression_19> {
}
declare class ViewUndetermined_22 extends V<ViewableImpression_19> {
}
declare class ViewableImpression_19 extends V<InLine_7> {
    attachViewable(content: string): Viewable_20;
    addViewable(content: string): ViewableImpression_19;
    attachNotViewable(content: string): NotViewable_21;
    addNotViewable(content: string): ViewableImpression_19;
    attachViewUndetermined(content: string): ViewUndetermined_22;
    addViewUndetermined(content: string): ViewableImpression_19;
}
declare class JavaScriptResource_25 extends V<Verification_24> {
}
declare class ExecutableResource_26 extends V<Verification_24> {
}
declare class Tracking_28 extends V<TrackingEvents_27> {
}
declare class TrackingEvents_27 extends V<Verification_24> {
    attachTracking(content: string, attributes: {
        offset?: string;
        event: "verificationNotExecuted";
    }): Tracking_28;
    addTracking(content: string, attributes: {
        offset?: string;
        event: "verificationNotExecuted";
    }): TrackingEvents_27;
}
declare class VerificationParameters_29 extends V<Verification_24> {
}
declare class Verification_24 extends V<AdVerifications_23> {
    attachJavaScriptResource(content: string, attributes: {
        apiFramework: string;
        browserOptional: string;
    }): JavaScriptResource_25;
    addJavaScriptResource(content: string, attributes: {
        apiFramework: string;
        browserOptional: string;
    }): Verification_24;
    attachExecutableResource(content: string, attributes: {
        apiFramework: string;
        language?: string;
        type?: string;
    }): ExecutableResource_26;
    addExecutableResource(content: string, attributes: {
        apiFramework: string;
        language?: string;
        type?: string;
    }): Verification_24;
    attachTrackingEvents(): TrackingEvents_27;
    attachVerificationParameters(content: string): VerificationParameters_29;
    addVerificationParameters(content: string): Verification_24;
}
declare class AdVerifications_23 extends V<InLine_7> {
    attachVerification(attributes: {
        vendor: string;
    }): Verification_24;
}
declare class Extension_31 extends V<Extensions_30> {
}
declare class Extensions_30 extends V<InLine_7> {
    attachExtension(content: string, attributes?: {
        type?: string;
    }): Extension_31;
    addExtension(content: string, attributes?: {
        type?: string;
    }): Extensions_30;
}
declare class UniversalAdId_34 extends V<Creative_33> {
}
declare class CreativeExtension_36 extends V<CreativeExtensions_35> {
}
declare class CreativeExtensions_35 extends V<Creative_33> {
    attachCreativeExtension(content: string, attributes?: {
        type?: string;
    }): CreativeExtension_36;
    addCreativeExtension(content: string, attributes?: {
        type?: string;
    }): CreativeExtensions_35;
}
declare class Duration_38 extends V<Linear_37> {
}
declare class AdParameters_39 extends V<Linear_37> {
}
declare class Mezzanine_41 extends V<MediaFiles_40> {
}
declare class MediaFile_42 extends V<MediaFiles_40> {
}
declare class InteractiveCreativeFile_43 extends V<MediaFiles_40> {
}
declare class ClosedCaptionFile_45 extends V<ClosedCaptionFiles_44> {
}
declare class ClosedCaptionFiles_44 extends V<MediaFiles_40> {
    attachClosedCaptionFile(content: string, attributes?: {
        type?: string;
        language?: string;
    }): ClosedCaptionFile_45;
    addClosedCaptionFile(content: string, attributes?: {
        type?: string;
        language?: string;
    }): ClosedCaptionFiles_44;
}
declare class MediaFiles_40 extends V<Linear_37> {
    attachMezzanine(content: string, attributes: {
        delivery: "progressive" | "streaming";
        type: string;
        width: string;
        height: string;
        codec?: string;
        id?: string;
        fileSize?: string;
        mediaType?: string;
    }): Mezzanine_41;
    addMezzanine(content: string, attributes: {
        delivery: "progressive" | "streaming";
        type: string;
        width: string;
        height: string;
        codec?: string;
        id?: string;
        fileSize?: string;
        mediaType?: string;
    }): MediaFiles_40;
    attachMediaFile(content: string, attributes: {
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
    }): MediaFile_42;
    addMediaFile(content: string, attributes: {
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
    }): MediaFiles_40;
    attachInteractiveCreativeFile(content: string, attributes?: {
        type?: string;
        apiFramework?: string;
        variableDuration?: string;
    }): InteractiveCreativeFile_43;
    addInteractiveCreativeFile(content: string, attributes?: {
        type?: string;
        apiFramework?: string;
        variableDuration?: string;
    }): MediaFiles_40;
    attachClosedCaptionFiles(): ClosedCaptionFiles_44;
}
declare class ClickThrough_47 extends V<VideoClicks_46> {
}
declare class ClickTracking_48 extends V<VideoClicks_46> {
}
declare class CustomClick_49 extends V<VideoClicks_46> {
}
declare class VideoClicks_46 extends V<Linear_37> {
    attachClickThrough(content: string, attributes?: {
        id?: string;
    }): ClickThrough_47;
    addClickThrough(content: string, attributes?: {
        id?: string;
    }): VideoClicks_46;
    attachClickTracking(content: string, attributes?: {
        id?: string;
    }): ClickTracking_48;
    addClickTracking(content: string, attributes?: {
        id?: string;
    }): VideoClicks_46;
    attachCustomClick(content: string, attributes?: {
        id?: string;
    }): CustomClick_49;
    addCustomClick(content: string, attributes?: {
        id?: string;
    }): VideoClicks_46;
}
declare class Tracking_51 extends V<TrackingEvents_50> {
}
declare class TrackingEvents_50 extends V<Linear_37> {
    attachTracking(content: string, attributes: {
        offset?: string;
        event: "loaded" | "start" | "firstQuartile" | "midpoint" | "thirdQuartile" | "complete" | "progress" | "closeLinear" | "otherAdInteraction" | "mute" | "unmute" | "pause" | "resume" | "rewind" | "skip" | "playerExpand" | "playerCollapse" | "notUsed";
    }): Tracking_51;
    addTracking(content: string, attributes: {
        offset?: string;
        event: "loaded" | "start" | "firstQuartile" | "midpoint" | "thirdQuartile" | "complete" | "progress" | "closeLinear" | "otherAdInteraction" | "mute" | "unmute" | "pause" | "resume" | "rewind" | "skip" | "playerExpand" | "playerCollapse" | "notUsed";
    }): TrackingEvents_50;
}
declare class StaticResource_54 extends V<Icon_53> {
}
declare class IFrameResource_55 extends V<Icon_53> {
}
declare class HTMLResource_56 extends V<Icon_53> {
}
declare class IconClickThrough_58 extends V<IconClicks_57> {
}
declare class IconClickTracking_59 extends V<IconClicks_57> {
}
declare class IconClicks_57 extends V<Icon_53> {
    attachIconClickThrough(content: string): IconClickThrough_58;
    addIconClickThrough(content: string): IconClicks_57;
    attachIconClickTracking(content: string, attributes?: {
        id?: string;
    }): IconClickTracking_59;
    addIconClickTracking(content: string, attributes?: {
        id?: string;
    }): IconClicks_57;
}
declare class IconViewTracking_60 extends V<Icon_53> {
}
declare class Icon_53 extends V<Icons_52> {
    attachStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): StaticResource_54;
    addStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): Icon_53;
    attachIFrameResource(content: string): IFrameResource_55;
    addIFrameResource(content: string): Icon_53;
    attachHTMLResource(content: string): HTMLResource_56;
    addHTMLResource(content: string): Icon_53;
    attachIconClicks(): IconClicks_57;
    attachIconViewTracking(content: string): IconViewTracking_60;
    addIconViewTracking(content: string): Icon_53;
}
declare class Icons_52 extends V<Linear_37> {
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
    }): Icon_53;
}
declare class Linear_37 extends V<Creative_33> {
    attachDuration(content: string): Duration_38;
    addDuration(content: string): Linear_37;
    attachAdParameters(content: string, attributes?: {
        xmlEncoded?: string;
    }): AdParameters_39;
    addAdParameters(content: string, attributes?: {
        xmlEncoded?: string;
    }): Linear_37;
    attachMediaFiles(): MediaFiles_40;
    attachVideoClicks(): VideoClicks_46;
    attachTrackingEvents(): TrackingEvents_50;
    attachIcons(): Icons_52;
}
declare class NonLinearClickThrough_63 extends V<NonLinear_62> {
}
declare class NonLinearClickTracking_64 extends V<NonLinear_62> {
}
declare class NonLinear_62 extends V<NonLinearAds_61> {
    attachNonLinearClickThrough(content: string): NonLinearClickThrough_63;
    addNonLinearClickThrough(content: string): NonLinear_62;
    attachNonLinearClickTracking(content: string): NonLinearClickTracking_64;
    addNonLinearClickTracking(content: string): NonLinear_62;
}
declare class Tracking_66 extends V<TrackingEvents_65> {
}
declare class TrackingEvents_65 extends V<NonLinearAds_61> {
    attachTracking(content: string, attributes: {
        event: "creativeView" | "acceptInvitation" | "adExpand" | "adCollapse" | "minimize" | "close" | "overlayViewDuration" | "otherAdInteraction" | "mute" | "unmute" | "pause" | "resume" | "rewind" | "skip" | "playerExpand" | "playerCollapse" | "notUsed";
    }): Tracking_66;
    addTracking(content: string, attributes: {
        event: "creativeView" | "acceptInvitation" | "adExpand" | "adCollapse" | "minimize" | "close" | "overlayViewDuration" | "otherAdInteraction" | "mute" | "unmute" | "pause" | "resume" | "rewind" | "skip" | "playerExpand" | "playerCollapse" | "notUsed";
    }): TrackingEvents_65;
}
declare class NonLinearAds_61 extends V<Creative_33> {
    attachNonLinear(attributes: {
        id?: string;
        width: string;
        height: string;
        expandedWidth?: string;
        expandedHeight?: string;
        scalable?: string;
        maintainAspectRatio?: string;
        apiFramework?: string;
        minSuggestedDuration?: string;
    }): NonLinear_62;
    attachTrackingEvents(): TrackingEvents_65;
}
declare class StaticResource_69 extends V<Companion_68> {
}
declare class IFrameResource_70 extends V<Companion_68> {
}
declare class HTMLResource_71 extends V<Companion_68> {
}
declare class AdParameters_72 extends V<Companion_68> {
}
declare class AltText_73 extends V<Companion_68> {
}
declare class CompanionClickThrough_74 extends V<Companion_68> {
}
declare class CompanionClickTracking_75 extends V<Companion_68> {
}
declare class Tracking_77 extends V<TrackingEvents_76> {
}
declare class TrackingEvents_76 extends V<Companion_68> {
    attachTracking(content: string, attributes: {
        event: "creativeView";
    }): Tracking_77;
    addTracking(content: string, attributes: {
        event: "creativeView";
    }): TrackingEvents_76;
}
declare class Companion_68 extends V<CompanionAds_67> {
    attachStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): StaticResource_69;
    addStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): Companion_68;
    attachIFrameResource(content: string): IFrameResource_70;
    addIFrameResource(content: string): Companion_68;
    attachHTMLResource(content: string): HTMLResource_71;
    addHTMLResource(content: string): Companion_68;
    attachAdParameters(content: string, attributes?: {
        xmlEncoded?: string;
    }): AdParameters_72;
    addAdParameters(content: string, attributes?: {
        xmlEncoded?: string;
    }): Companion_68;
    attachAltText(content: string): AltText_73;
    addAltText(content: string): Companion_68;
    attachCompanionClickThrough(content: string): CompanionClickThrough_74;
    addCompanionClickThrough(content: string): Companion_68;
    attachCompanionClickTracking(content: string, attributes?: {
        id?: string;
    }): CompanionClickTracking_75;
    addCompanionClickTracking(content: string, attributes?: {
        id?: string;
    }): Companion_68;
    attachTrackingEvents(): TrackingEvents_76;
}
declare class CompanionAds_67 extends V<Creative_33> {
    attachCompanion(attributes: {
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
    }): Companion_68;
}
declare class Creative_33 extends V<Creatives_32> {
    attachUniversalAdId(content: string, attributes: {
        idRegistry: string;
        idValue?: string;
    }): UniversalAdId_34;
    addUniversalAdId(content: string, attributes: {
        idRegistry: string;
        idValue?: string;
    }): Creative_33;
    attachCreativeExtensions(): CreativeExtensions_35;
    attachLinear(attributes?: {
        skipoffset?: string;
    }): Linear_37;
    attachNonLinearAds(): NonLinearAds_61;
    attachCompanionAds(attributes: {
        required: "all" | "any" | "none";
    }): CompanionAds_67;
}
declare class Creatives_32 extends V<InLine_7> {
    attachCreative(attributes?: {
        id?: string;
        sequence?: string;
        adId?: string;
        apiFramework?: string;
    }): Creative_33;
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
    attachAdServingID(content: string): AdServingID_11;
    addAdServingID(content: string): InLine_7;
    attachCategory(content: string, attributes: {
        authority: string;
    }): Category_12;
    addCategory(content: string, attributes: {
        authority: string;
    }): InLine_7;
    attachDescription(content: string): Description_13;
    addDescription(content: string): InLine_7;
    attachAdvertiser(content: string, attributes?: {
        id?: string;
    }): Advertiser_14;
    addAdvertiser(content: string, attributes?: {
        id?: string;
    }): InLine_7;
    attachPricing(content: string, attributes: {
        currency: string;
        model: "CPM" | "CPC" | "CPE" | "CPV";
    }): Pricing_15;
    addPricing(content: string, attributes: {
        currency: string;
        model: "CPM" | "CPC" | "CPE" | "CPV";
    }): InLine_7;
    attachSurvey(content: string, attributes?: {
        type?: string;
    }): Survey_16;
    addSurvey(content: string, attributes?: {
        type?: string;
    }): InLine_7;
    attachError(content: string): Error_17;
    addError(content: string): InLine_7;
    attachExpires(content: string): Expires_18;
    addExpires(content: string): InLine_7;
    attachViewableImpression(attributes?: {
        id?: string;
    }): ViewableImpression_19;
    attachAdVerifications(): AdVerifications_23;
    attachExtensions(): Extensions_30;
    attachCreatives(): Creatives_32;
}
declare class Impression_79 extends V<Wrapper_78> {
}
declare class VASTAdTagURI_80 extends V<Wrapper_78> {
}
declare class AdSystem_81 extends V<Wrapper_78> {
}
declare class Pricing_82 extends V<Wrapper_78> {
}
declare class Error_83 extends V<Wrapper_78> {
}
declare class Viewable_85 extends V<ViewableImpression_84> {
}
declare class NotViewable_86 extends V<ViewableImpression_84> {
}
declare class ViewUndetermined_87 extends V<ViewableImpression_84> {
}
declare class ViewableImpression_84 extends V<Wrapper_78> {
    attachViewable(content: string): Viewable_85;
    addViewable(content: string): ViewableImpression_84;
    attachNotViewable(content: string): NotViewable_86;
    addNotViewable(content: string): ViewableImpression_84;
    attachViewUndetermined(content: string): ViewUndetermined_87;
    addViewUndetermined(content: string): ViewableImpression_84;
}
declare class JavaScriptResource_90 extends V<Verification_89> {
}
declare class ExecutableResource_91 extends V<Verification_89> {
}
declare class Tracking_93 extends V<TrackingEvents_92> {
}
declare class TrackingEvents_92 extends V<Verification_89> {
    attachTracking(content: string, attributes: {
        offset?: string;
        event: "verificationNotExecuted";
    }): Tracking_93;
    addTracking(content: string, attributes: {
        offset?: string;
        event: "verificationNotExecuted";
    }): TrackingEvents_92;
}
declare class VerificationParameters_94 extends V<Verification_89> {
}
declare class BlockedAdCategories_95 extends V<Verification_89> {
}
declare class Verification_89 extends V<AdVerifications_88> {
    attachJavaScriptResource(content: string, attributes: {
        apiFramework: string;
        browserOptional: string;
    }): JavaScriptResource_90;
    addJavaScriptResource(content: string, attributes: {
        apiFramework: string;
        browserOptional: string;
    }): Verification_89;
    attachExecutableResource(content: string, attributes: {
        apiFramework: string;
        language?: string;
        type?: string;
    }): ExecutableResource_91;
    addExecutableResource(content: string, attributes: {
        apiFramework: string;
        language?: string;
        type?: string;
    }): Verification_89;
    attachTrackingEvents(): TrackingEvents_92;
    attachVerificationParameters(content: string): VerificationParameters_94;
    addVerificationParameters(content: string): Verification_89;
    attachBlockedAdCategories(content: string, attributes: {
        authority: string;
    }): BlockedAdCategories_95;
    addBlockedAdCategories(content: string, attributes: {
        authority: string;
    }): Verification_89;
}
declare class AdVerifications_88 extends V<Wrapper_78> {
    attachVerification(attributes: {
        vendor: string;
    }): Verification_89;
}
declare class Extension_97 extends V<Extensions_96> {
}
declare class Extensions_96 extends V<Wrapper_78> {
    attachExtension(content: string, attributes?: {
        type?: string;
    }): Extension_97;
    addExtension(content: string, attributes?: {
        type?: string;
    }): Extensions_96;
}
declare class Tracking_102 extends V<TrackingEvents_101> {
}
declare class TrackingEvents_101 extends V<Linear_100> {
    attachTracking(content: string, attributes: {
        offset?: string;
        event: "loaded" | "start" | "firstQuartile" | "midpoint" | "thirdQuartile" | "complete" | "progress" | "closeLinear" | "otherAdInteraction" | "mute" | "unmute" | "pause" | "resume" | "rewind" | "skip" | "playerExpand" | "playerCollapse" | "notUsed";
    }): Tracking_102;
    addTracking(content: string, attributes: {
        offset?: string;
        event: "loaded" | "start" | "firstQuartile" | "midpoint" | "thirdQuartile" | "complete" | "progress" | "closeLinear" | "otherAdInteraction" | "mute" | "unmute" | "pause" | "resume" | "rewind" | "skip" | "playerExpand" | "playerCollapse" | "notUsed";
    }): TrackingEvents_101;
}
declare class ClickTracking_104 extends V<VideoClicks_103> {
}
declare class CustomClick_105 extends V<VideoClicks_103> {
}
declare class VideoClicks_103 extends V<Linear_100> {
    attachClickTracking(content: string, attributes?: {
        id?: string;
    }): ClickTracking_104;
    addClickTracking(content: string, attributes?: {
        id?: string;
    }): VideoClicks_103;
    attachCustomClick(content: string, attributes?: {
        id?: string;
    }): CustomClick_105;
    addCustomClick(content: string, attributes?: {
        id?: string;
    }): VideoClicks_103;
}
declare class StaticResource_108 extends V<Icon_107> {
}
declare class IFrameResource_109 extends V<Icon_107> {
}
declare class HTMLResource_110 extends V<Icon_107> {
}
declare class IconClickThrough_112 extends V<IconClicks_111> {
}
declare class IconClickTracking_113 extends V<IconClicks_111> {
}
declare class IconClicks_111 extends V<Icon_107> {
    attachIconClickThrough(content: string): IconClickThrough_112;
    addIconClickThrough(content: string): IconClicks_111;
    attachIconClickTracking(content: string, attributes?: {
        id?: string;
    }): IconClickTracking_113;
    addIconClickTracking(content: string, attributes?: {
        id?: string;
    }): IconClicks_111;
}
declare class IconViewTracking_114 extends V<Icon_107> {
}
declare class Icon_107 extends V<Icons_106> {
    attachStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): StaticResource_108;
    addStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): Icon_107;
    attachIFrameResource(content: string): IFrameResource_109;
    addIFrameResource(content: string): Icon_107;
    attachHTMLResource(content: string): HTMLResource_110;
    addHTMLResource(content: string): Icon_107;
    attachIconClicks(): IconClicks_111;
    attachIconViewTracking(content: string): IconViewTracking_114;
    addIconViewTracking(content: string): Icon_107;
}
declare class Icons_106 extends V<Linear_100> {
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
    }): Icon_107;
}
declare class InteractiveCreativeFile_115 extends V<Linear_100> {
}
declare class Linear_100 extends V<Creative_99> {
    attachTrackingEvents(): TrackingEvents_101;
    attachVideoClicks(): VideoClicks_103;
    attachIcons(): Icons_106;
    attachInteractiveCreativeFile(content: string, attributes?: {
        type?: string;
        apiFramework?: string;
        variableDuration?: string;
    }): InteractiveCreativeFile_115;
    addInteractiveCreativeFile(content: string, attributes?: {
        type?: string;
        apiFramework?: string;
        variableDuration?: string;
    }): Linear_100;
}
declare class NonLinearClickThrough_118 extends V<NonLinear_117> {
}
declare class NonLinearClickTracking_119 extends V<NonLinear_117> {
}
declare class NonLinear_117 extends V<NonLinearAds_116> {
    attachNonLinearClickThrough(content: string): NonLinearClickThrough_118;
    addNonLinearClickThrough(content: string): NonLinear_117;
    attachNonLinearClickTracking(content: string): NonLinearClickTracking_119;
    addNonLinearClickTracking(content: string): NonLinear_117;
}
declare class Tracking_121 extends V<TrackingEvents_120> {
}
declare class TrackingEvents_120 extends V<NonLinearAds_116> {
    attachTracking(content: string, attributes: {
        event: "creativeView" | "acceptInvitation" | "adExpand" | "adCollapse" | "minimize" | "close" | "overlayViewDuration" | "otherAdInteraction" | "mute" | "unmute" | "pause" | "resume" | "rewind" | "skip" | "playerExpand" | "playerCollapse" | "notUsed";
    }): Tracking_121;
    addTracking(content: string, attributes: {
        event: "creativeView" | "acceptInvitation" | "adExpand" | "adCollapse" | "minimize" | "close" | "overlayViewDuration" | "otherAdInteraction" | "mute" | "unmute" | "pause" | "resume" | "rewind" | "skip" | "playerExpand" | "playerCollapse" | "notUsed";
    }): TrackingEvents_120;
}
declare class NonLinearAds_116 extends V<Creative_99> {
    attachNonLinear(attributes: {
        id?: string;
        width: string;
        height: string;
        expandedWidth?: string;
        expandedHeight?: string;
        scalable?: string;
        maintainAspectRatio?: string;
        apiFramework?: string;
        minSuggestedDuration?: string;
    }): NonLinear_117;
    attachTrackingEvents(): TrackingEvents_120;
}
declare class StaticResource_124 extends V<Companion_123> {
}
declare class IFrameResource_125 extends V<Companion_123> {
}
declare class HTMLResource_126 extends V<Companion_123> {
}
declare class AdParameters_127 extends V<Companion_123> {
}
declare class AltText_128 extends V<Companion_123> {
}
declare class CompanionClickThrough_129 extends V<Companion_123> {
}
declare class CompanionClickTracking_130 extends V<Companion_123> {
}
declare class Tracking_132 extends V<TrackingEvents_131> {
}
declare class TrackingEvents_131 extends V<Companion_123> {
    attachTracking(content: string, attributes: {
        event: "creativeView";
    }): Tracking_132;
    addTracking(content: string, attributes: {
        event: "creativeView";
    }): TrackingEvents_131;
}
declare class Companion_123 extends V<CompanionAds_122> {
    attachStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): StaticResource_124;
    addStaticResource(content: string, attributes: {
        creativeType: "image/gif" | "image/jpeg" | "image/jpg" | "image/png" | "application/x-javascript" | "application/x-shockwave-flash";
    }): Companion_123;
    attachIFrameResource(content: string): IFrameResource_125;
    addIFrameResource(content: string): Companion_123;
    attachHTMLResource(content: string): HTMLResource_126;
    addHTMLResource(content: string): Companion_123;
    attachAdParameters(content: string, attributes?: {
        xmlEncoded?: string;
    }): AdParameters_127;
    addAdParameters(content: string, attributes?: {
        xmlEncoded?: string;
    }): Companion_123;
    attachAltText(content: string): AltText_128;
    addAltText(content: string): Companion_123;
    attachCompanionClickThrough(content: string): CompanionClickThrough_129;
    addCompanionClickThrough(content: string): Companion_123;
    attachCompanionClickTracking(content: string, attributes?: {
        id?: string;
    }): CompanionClickTracking_130;
    addCompanionClickTracking(content: string, attributes?: {
        id?: string;
    }): Companion_123;
    attachTrackingEvents(): TrackingEvents_131;
}
declare class CompanionAds_122 extends V<Creative_99> {
    attachCompanion(attributes: {
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
    }): Companion_123;
}
declare class Creative_99 extends V<Creatives_98> {
    attachLinear(): Linear_100;
    attachNonLinearAds(): NonLinearAds_116;
    attachCompanionAds(attributes: {
        required: "all" | "any" | "none";
    }): CompanionAds_122;
}
declare class Creatives_98 extends V<Wrapper_78> {
    attachCreative(attributes?: {
        id?: string;
        sequence?: string;
        adId?: string;
    }): Creative_99;
}
declare class Wrapper_78 extends V<Ad_6> {
    attachImpression(content: string, attributes?: {
        id?: string;
    }): Impression_79;
    addImpression(content: string, attributes?: {
        id?: string;
    }): Wrapper_78;
    attachVASTAdTagURI(content: string): VASTAdTagURI_80;
    addVASTAdTagURI(content: string): Wrapper_78;
    attachAdSystem(content: string, attributes?: {
        version?: string;
    }): AdSystem_81;
    addAdSystem(content: string, attributes?: {
        version?: string;
    }): Wrapper_78;
    attachPricing(content: string, attributes: {
        currency: string;
        model: "CPM" | "CPC" | "CPE" | "CPV";
    }): Pricing_82;
    addPricing(content: string, attributes: {
        currency: string;
        model: "CPM" | "CPC" | "CPE" | "CPV";
    }): Wrapper_78;
    attachError(content: string): Error_83;
    addError(content: string): Wrapper_78;
    attachViewableImpression(attributes?: {
        id?: string;
    }): ViewableImpression_84;
    attachAdVerifications(): AdVerifications_88;
    attachExtensions(): Extensions_96;
    attachCreatives(): Creatives_98;
}
declare class Ad_6 extends V<VAST_4> {
    attachInLine(): InLine_7;
    attachWrapper(attributes?: {
        followAdditonalWrappers?: string;
        allowMultipleAds?: string;
        fallbackOnNoAd?: string;
    }): Wrapper_78;
}
declare class VAST_4 extends V<apiv4_1> {
    attachError(content: string): Error_5;
    addError(content: string): VAST_4;
    attachAd(attributes?: {
        id?: string;
        sequence?: string;
        conditionalAd?: string;
        adType?: string;
    }): Ad_6;
}
declare class apiv4_1 extends V<apiv4_1> {
    attachVAST(attributes: {
        version: "4.1";
    }): VAST_4;
    and(): this;
}
export { apiv4_1, VAST_4 };
