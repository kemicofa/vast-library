
// this file is generated, dont edit it

/*::
type Infos = {
  attrs?: Array<string>,
  required?: boolean,
  uniq?: boolean,
  alo?: boolean,
};
*/

const VastElement = require('../../lib/vast-element');

class Error_5 extends VastElement {
  /**
   * @param {string} n
   * @param {VAST_4} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdSystem_8 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdTitle_9 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Impression_10 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdServingID_11 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Category_12 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Description_13 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Advertiser_14 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Pricing_15 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Survey_16 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Error_17 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Expires_18 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Viewable_20 extends VastElement {
  /**
   * @param {string} n
   * @param {ViewableImpression_19} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NotViewable_21 extends VastElement {
  /**
   * @param {string} n
   * @param {ViewableImpression_19} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ViewUndetermined_22 extends VastElement {
  /**
   * @param {string} n
   * @param {ViewableImpression_19} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ViewableImpression_19 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @returns {Viewable_20} 
   */
  attachViewable(content) {
    const newElem = new Viewable_20('Viewable', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {ViewableImpression_19} 
   */
  addViewable(content) {
    return this.attachViewable(content).and();
  }
  /** 
   * @param {string} content
   * @returns {NotViewable_21} 
   */
  attachNotViewable(content) {
    const newElem = new NotViewable_21('NotViewable', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {ViewableImpression_19} 
   */
  addNotViewable(content) {
    return this.attachNotViewable(content).and();
  }
  /** 
   * @param {string} content
   * @returns {ViewUndetermined_22} 
   */
  attachViewUndetermined(content) {
    const newElem = new ViewUndetermined_22('ViewUndetermined', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {ViewableImpression_19} 
   */
  addViewUndetermined(content) {
    return this.attachViewUndetermined(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class JavaScriptResource_25 extends VastElement {
  /**
   * @param {string} n
   * @param {Verification_24} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ExecutableResource_26 extends VastElement {
  /**
   * @param {string} n
   * @param {Verification_24} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Tracking_28 extends VastElement {
  /**
   * @param {string} n
   * @param {TrackingEvents_27} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class TrackingEvents_27 extends VastElement {
  /**
   * @param {string} n
   * @param {Verification_24} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{offset: string, event:("verificationNotExecuted")}} attributes
   * @returns {Tracking_28} 
   */
  attachTracking(content, attributes) {
    const newElem = new Tracking_28('Tracking', this, {"attrs":["offset","event"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{offset: string, event:("verificationNotExecuted")}} attributes
   * @returns {TrackingEvents_27} 
   */
  addTracking(content, attributes) {
    return this.attachTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class VerificationParameters_29 extends VastElement {
  /**
   * @param {string} n
   * @param {Verification_24} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Verification_24 extends VastElement {
  /**
   * @param {string} n
   * @param {AdVerifications_23} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{apiFramework: string, browserOptional: string}} attributes
   * @returns {JavaScriptResource_25} 
   */
  attachJavaScriptResource(content, attributes) {
    const newElem = new JavaScriptResource_25('JavaScriptResource', this, {"attrs":["apiFramework","browserOptional"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{apiFramework: string, browserOptional: string}} attributes
   * @returns {Verification_24} 
   */
  addJavaScriptResource(content, attributes) {
    return this.attachJavaScriptResource(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @param {{apiFramework: string, language: string, type: string}} attributes
   * @returns {ExecutableResource_26} 
   */
  attachExecutableResource(content, attributes) {
    const newElem = new ExecutableResource_26('ExecutableResource', this, {"attrs":["apiFramework","language","type"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{apiFramework: string, language: string, type: string}} attributes
   * @returns {Verification_24} 
   */
  addExecutableResource(content, attributes) {
    return this.attachExecutableResource(content, attributes).and();
  }
  /** 
   * @returns {TrackingEvents_27} 
   */
  attachTrackingEvents() {
    const newElem = new TrackingEvents_27('TrackingEvents', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {VerificationParameters_29} 
   */
  attachVerificationParameters(content) {
    const newElem = new VerificationParameters_29('VerificationParameters', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Verification_24} 
   */
  addVerificationParameters(content) {
    return this.attachVerificationParameters(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdVerifications_23 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{vendor: string}} attributes
   * @returns {Verification_24} 
   */
  attachVerification(attributes) {
    const newElem = new Verification_24('Verification', this, {"attrs":["vendor"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Extension_31 extends VastElement {
  /**
   * @param {string} n
   * @param {Extensions_30} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Extensions_30 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** @description required in Vast 4_1
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {Extension_31} 
   */
  attachExtension(content, attributes) {
    const newElem = new Extension_31('Extension', this, {"attrs":["type"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 4_1
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {Extensions_30} 
   */
  addExtension(content, attributes) {
    return this.attachExtension(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class UniversalAdId_34 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_33} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CreativeExtension_36 extends VastElement {
  /**
   * @param {string} n
   * @param {CreativeExtensions_35} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CreativeExtensions_35 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_33} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {CreativeExtension_36} 
   */
  attachCreativeExtension(content, attributes) {
    const newElem = new CreativeExtension_36('CreativeExtension', this, {"attrs":["type"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {CreativeExtensions_35} 
   */
  addCreativeExtension(content, attributes) {
    return this.attachCreativeExtension(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Duration_38 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_37} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdParameters_39 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_37} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Mezzanine_41 extends VastElement {
  /**
   * @param {string} n
   * @param {MediaFiles_40} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class MediaFile_42 extends VastElement {
  /**
   * @param {string} n
   * @param {MediaFiles_40} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class InteractiveCreativeFile_43 extends VastElement {
  /**
   * @param {string} n
   * @param {MediaFiles_40} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ClosedCaptionFile_45 extends VastElement {
  /**
   * @param {string} n
   * @param {ClosedCaptionFiles_44} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ClosedCaptionFiles_44 extends VastElement {
  /**
   * @param {string} n
   * @param {MediaFiles_40} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{type: string, language: string}} attributes
   * @returns {ClosedCaptionFile_45} 
   */
  attachClosedCaptionFile(content, attributes) {
    const newElem = new ClosedCaptionFile_45('ClosedCaptionFile', this, {"attrs":["type","language"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{type: string, language: string}} attributes
   * @returns {ClosedCaptionFiles_44} 
   */
  addClosedCaptionFile(content, attributes) {
    return this.attachClosedCaptionFile(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class MediaFiles_40 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_37} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{delivery:("progressive"|"streaming"), type: string, width: string, height: string, codec: string, id: string, fileSize: string, mediaType: string}} attributes
   * @returns {Mezzanine_41} 
   */
  attachMezzanine(content, attributes) {
    const newElem = new Mezzanine_41('Mezzanine', this, {"attrs":["delivery","type","width","height","codec","id","fileSize","mediaType"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{delivery:("progressive"|"streaming"), type: string, width: string, height: string, codec: string, id: string, fileSize: string, mediaType: string}} attributes
   * @returns {MediaFiles_40} 
   */
  addMezzanine(content, attributes) {
    return this.attachMezzanine(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @param {{delivery:("progressive"|"streaming"), type: string, width: string, height: string, codec: string, id: string, bitrate: string, minBitrate: string, maxBitrate: string, scalable: string, mantainAspectRatio: string, apiFramework: string, fileSize: string, mediaType: string}} attributes
   * @returns {MediaFile_42} 
   */
  attachMediaFile(content, attributes) {
    const newElem = new MediaFile_42('MediaFile', this, {"attrs":["delivery","type","width","height","codec","id","bitrate","minBitrate","maxBitrate","scalable","mantainAspectRatio","apiFramework","fileSize","mediaType"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{delivery:("progressive"|"streaming"), type: string, width: string, height: string, codec: string, id: string, bitrate: string, minBitrate: string, maxBitrate: string, scalable: string, mantainAspectRatio: string, apiFramework: string, fileSize: string, mediaType: string}} attributes
   * @returns {MediaFiles_40} 
   */
  addMediaFile(content, attributes) {
    return this.attachMediaFile(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @param {{type: string, apiFramework: string, variableDuration: string}} attributes
   * @returns {InteractiveCreativeFile_43} 
   */
  attachInteractiveCreativeFile(content, attributes) {
    const newElem = new InteractiveCreativeFile_43('InteractiveCreativeFile', this, {"attrs":["type","apiFramework","variableDuration"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{type: string, apiFramework: string, variableDuration: string}} attributes
   * @returns {MediaFiles_40} 
   */
  addInteractiveCreativeFile(content, attributes) {
    return this.attachInteractiveCreativeFile(content, attributes).and();
  }
  /** 
   * @returns {ClosedCaptionFiles_44} 
   */
  attachClosedCaptionFiles() {
    const newElem = new ClosedCaptionFiles_44('ClosedCaptionFiles', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ClickThrough_47 extends VastElement {
  /**
   * @param {string} n
   * @param {VideoClicks_46} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ClickTracking_48 extends VastElement {
  /**
   * @param {string} n
   * @param {VideoClicks_46} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CustomClick_49 extends VastElement {
  /**
   * @param {string} n
   * @param {VideoClicks_46} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class VideoClicks_46 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_37} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {ClickThrough_47} 
   */
  attachClickThrough(content, attributes) {
    const newElem = new ClickThrough_47('ClickThrough', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {VideoClicks_46} 
   */
  addClickThrough(content, attributes) {
    return this.attachClickThrough(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {ClickTracking_48} 
   */
  attachClickTracking(content, attributes) {
    const newElem = new ClickTracking_48('ClickTracking', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {VideoClicks_46} 
   */
  addClickTracking(content, attributes) {
    return this.attachClickTracking(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {CustomClick_49} 
   */
  attachCustomClick(content, attributes) {
    const newElem = new CustomClick_49('CustomClick', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {VideoClicks_46} 
   */
  addCustomClick(content, attributes) {
    return this.attachCustomClick(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Tracking_51 extends VastElement {
  /**
   * @param {string} n
   * @param {TrackingEvents_50} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class TrackingEvents_50 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_37} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{offset: string, event:("loaded"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"progress"|"closeLinear"|"otherAdInteraction"|"mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"notUsed")}} attributes
   * @returns {Tracking_51} 
   */
  attachTracking(content, attributes) {
    const newElem = new Tracking_51('Tracking', this, {"attrs":["offset","event"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{offset: string, event:("loaded"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"progress"|"closeLinear"|"otherAdInteraction"|"mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"notUsed")}} attributes
   * @returns {TrackingEvents_50} 
   */
  addTracking(content, attributes) {
    return this.attachTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class StaticResource_54 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_53} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IFrameResource_55 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_53} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class HTMLResource_56 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_53} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IconClickThrough_58 extends VastElement {
  /**
   * @param {string} n
   * @param {IconClicks_57} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IconClickTracking_59 extends VastElement {
  /**
   * @param {string} n
   * @param {IconClicks_57} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IconClicks_57 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_53} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @returns {IconClickThrough_58} 
   */
  attachIconClickThrough(content) {
    const newElem = new IconClickThrough_58('IconClickThrough', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {IconClicks_57} 
   */
  addIconClickThrough(content) {
    return this.attachIconClickThrough(content).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {IconClickTracking_59} 
   */
  attachIconClickTracking(content, attributes) {
    const newElem = new IconClickTracking_59('IconClickTracking', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {IconClicks_57} 
   */
  addIconClickTracking(content, attributes) {
    return this.attachIconClickTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IconViewTracking_60 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_53} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Icon_53 extends VastElement {
  /**
   * @param {string} n
   * @param {Icons_52} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_54} 
   */
  attachStaticResource(content, attributes) {
    const newElem = new StaticResource_54('StaticResource', this, {"attrs":["creativeType"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {Icon_53} 
   */
  addStaticResource(content, attributes) {
    return this.attachStaticResource(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {IFrameResource_55} 
   */
  attachIFrameResource(content) {
    const newElem = new IFrameResource_55('IFrameResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Icon_53} 
   */
  addIFrameResource(content) {
    return this.attachIFrameResource(content).and();
  }
  /** 
   * @param {string} content
   * @returns {HTMLResource_56} 
   */
  attachHTMLResource(content) {
    const newElem = new HTMLResource_56('HTMLResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Icon_53} 
   */
  addHTMLResource(content) {
    return this.attachHTMLResource(content).and();
  }
  /** 
   * @returns {IconClicks_57} 
   */
  attachIconClicks() {
    const newElem = new IconClicks_57('IconClicks', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {IconViewTracking_60} 
   */
  attachIconViewTracking(content) {
    const newElem = new IconViewTracking_60('IconViewTracking', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Icon_53} 
   */
  addIconViewTracking(content) {
    return this.attachIconViewTracking(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Icons_52 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_37} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{program: string, width: string, height: string, xPosition: string, yPosition: string, duration: string, offset: string, apiFramework: string, pxratio: string}} attributes
   * @returns {Icon_53} 
   */
  attachIcon(attributes) {
    const newElem = new Icon_53('Icon', this, {"attrs":["program","width","height","xPosition","yPosition","duration","offset","apiFramework","pxratio"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Linear_37 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_33} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** @description required in Vast 4_1
   * @param {string} content
   * @returns {Duration_38} 
   */
  attachDuration(content) {
    const newElem = new Duration_38('Duration', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 4_1
   * @param {string} content
   * @returns {Linear_37} 
   */
  addDuration(content) {
    return this.attachDuration(content).and();
  }
  /** 
   * @param {string} content
   * @param {{xmlEncoded: string}} attributes
   * @returns {AdParameters_39} 
   */
  attachAdParameters(content, attributes) {
    const newElem = new AdParameters_39('AdParameters', this, {"attrs":["xmlEncoded"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{xmlEncoded: string}} attributes
   * @returns {Linear_37} 
   */
  addAdParameters(content, attributes) {
    return this.attachAdParameters(content, attributes).and();
  }
  /** @description required in Vast 4_1
   * @returns {MediaFiles_40} 
   */
  attachMediaFiles() {
    const newElem = new MediaFiles_40('MediaFiles', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {VideoClicks_46} 
   */
  attachVideoClicks() {
    const newElem = new VideoClicks_46('VideoClicks', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {TrackingEvents_50} 
   */
  attachTrackingEvents() {
    const newElem = new TrackingEvents_50('TrackingEvents', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {Icons_52} 
   */
  attachIcons() {
    const newElem = new Icons_52('Icons', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinearClickThrough_63 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinear_62} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinearClickTracking_64 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinear_62} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinear_62 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinearAds_61} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @returns {NonLinearClickThrough_63} 
   */
  attachNonLinearClickThrough(content) {
    const newElem = new NonLinearClickThrough_63('NonLinearClickThrough', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {NonLinear_62} 
   */
  addNonLinearClickThrough(content) {
    return this.attachNonLinearClickThrough(content).and();
  }
  /** 
   * @param {string} content
   * @returns {NonLinearClickTracking_64} 
   */
  attachNonLinearClickTracking(content) {
    const newElem = new NonLinearClickTracking_64('NonLinearClickTracking', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {NonLinear_62} 
   */
  addNonLinearClickTracking(content) {
    return this.attachNonLinearClickTracking(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Tracking_66 extends VastElement {
  /**
   * @param {string} n
   * @param {TrackingEvents_65} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class TrackingEvents_65 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinearAds_61} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView"|"acceptInvitation"|"adExpand"|"adCollapse"|"minimize"|"close"|"overlayViewDuration"|"otherAdInteraction"|"mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"notUsed")}} attributes
   * @returns {Tracking_66} 
   */
  attachTracking(content, attributes) {
    const newElem = new Tracking_66('Tracking', this, {"attrs":["event"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView"|"acceptInvitation"|"adExpand"|"adCollapse"|"minimize"|"close"|"overlayViewDuration"|"otherAdInteraction"|"mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"notUsed")}} attributes
   * @returns {TrackingEvents_65} 
   */
  addTracking(content, attributes) {
    return this.attachTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinearAds_61 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_33} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{id: string, width: string, height: string, expandedWidth: string, expandedHeight: string, scalable: string, maintainAspectRatio: string, apiFramework: string, minSuggestedDuration: string}} attributes
   * @returns {NonLinear_62} 
   */
  attachNonLinear(attributes) {
    const newElem = new NonLinear_62('NonLinear', this, {"attrs":["id","width","height","expandedWidth","expandedHeight","scalable","maintainAspectRatio","apiFramework","minSuggestedDuration"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {TrackingEvents_65} 
   */
  attachTrackingEvents() {
    const newElem = new TrackingEvents_65('TrackingEvents', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class StaticResource_69 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_68} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IFrameResource_70 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_68} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class HTMLResource_71 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_68} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdParameters_72 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_68} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AltText_73 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_68} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CompanionClickThrough_74 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_68} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CompanionClickTracking_75 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_68} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Tracking_77 extends VastElement {
  /**
   * @param {string} n
   * @param {TrackingEvents_76} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class TrackingEvents_76 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_68} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView")}} attributes
   * @returns {Tracking_77} 
   */
  attachTracking(content, attributes) {
    const newElem = new Tracking_77('Tracking', this, {"attrs":["event"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView")}} attributes
   * @returns {TrackingEvents_76} 
   */
  addTracking(content, attributes) {
    return this.attachTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Companion_68 extends VastElement {
  /**
   * @param {string} n
   * @param {CompanionAds_67} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_69} 
   */
  attachStaticResource(content, attributes) {
    const newElem = new StaticResource_69('StaticResource', this, {"attrs":["creativeType"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {Companion_68} 
   */
  addStaticResource(content, attributes) {
    return this.attachStaticResource(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {IFrameResource_70} 
   */
  attachIFrameResource(content) {
    const newElem = new IFrameResource_70('IFrameResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_68} 
   */
  addIFrameResource(content) {
    return this.attachIFrameResource(content).and();
  }
  /** 
   * @param {string} content
   * @returns {HTMLResource_71} 
   */
  attachHTMLResource(content) {
    const newElem = new HTMLResource_71('HTMLResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_68} 
   */
  addHTMLResource(content) {
    return this.attachHTMLResource(content).and();
  }
  /** 
   * @param {string} content
   * @param {{xmlEncoded: string}} attributes
   * @returns {AdParameters_72} 
   */
  attachAdParameters(content, attributes) {
    const newElem = new AdParameters_72('AdParameters', this, {"attrs":["xmlEncoded"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{xmlEncoded: string}} attributes
   * @returns {Companion_68} 
   */
  addAdParameters(content, attributes) {
    return this.attachAdParameters(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {AltText_73} 
   */
  attachAltText(content) {
    const newElem = new AltText_73('AltText', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_68} 
   */
  addAltText(content) {
    return this.attachAltText(content).and();
  }
  /** 
   * @param {string} content
   * @returns {CompanionClickThrough_74} 
   */
  attachCompanionClickThrough(content) {
    const newElem = new CompanionClickThrough_74('CompanionClickThrough', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_68} 
   */
  addCompanionClickThrough(content) {
    return this.attachCompanionClickThrough(content).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {CompanionClickTracking_75} 
   */
  attachCompanionClickTracking(content, attributes) {
    const newElem = new CompanionClickTracking_75('CompanionClickTracking', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {Companion_68} 
   */
  addCompanionClickTracking(content, attributes) {
    return this.attachCompanionClickTracking(content, attributes).and();
  }
  /** 
   * @returns {TrackingEvents_76} 
   */
  attachTrackingEvents() {
    const newElem = new TrackingEvents_76('TrackingEvents', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CompanionAds_67 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_33} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{width: string, height: string, id: string, assetWidth: string, assetHeight: string, expandedWidth: string, expandedHeight: string, apiFramework: string, adSlotID: string, pxratio: string, renderingMode: string}} attributes
   * @returns {Companion_68} 
   */
  attachCompanion(attributes) {
    const newElem = new Companion_68('Companion', this, {"attrs":["width","height","id","assetWidth","assetHeight","expandedWidth","expandedHeight","apiFramework","adSlotID","pxratio","renderingMode"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Creative_33 extends VastElement {
  /**
   * @param {string} n
   * @param {Creatives_32} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** @description required in Vast 4_1
   * @param {string} content
   * @param {{idRegistry: string, idValue: string}} attributes
   * @returns {UniversalAdId_34} 
   */
  attachUniversalAdId(content, attributes) {
    const newElem = new UniversalAdId_34('UniversalAdId', this, {"attrs":["idRegistry","idValue"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 4_1
   * @param {string} content
   * @param {{idRegistry: string, idValue: string}} attributes
   * @returns {Creative_33} 
   */
  addUniversalAdId(content, attributes) {
    return this.attachUniversalAdId(content, attributes).and();
  }
  /** 
   * @returns {CreativeExtensions_35} 
   */
  attachCreativeExtensions() {
    const newElem = new CreativeExtensions_35('CreativeExtensions', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {{skipoffset: string}} attributes
   * @returns {Linear_37} 
   */
  attachLinear(attributes) {
    const newElem = new Linear_37('Linear', this, {"attrs":["skipoffset"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {NonLinearAds_61} 
   */
  attachNonLinearAds() {
    const newElem = new NonLinearAds_61('NonLinearAds', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {{required:("all"|"any"|"none")}} attributes
   * @returns {CompanionAds_67} 
   */
  attachCompanionAds(attributes) {
    const newElem = new CompanionAds_67('CompanionAds', this, {"attrs":["required"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Creatives_32 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{id: string, sequence: string, adId: string, apiFramework: string}} attributes
   * @returns {Creative_33} 
   */
  attachCreative(attributes) {
    const newElem = new Creative_33('Creative', this, {"attrs":["id","sequence","adId","apiFramework"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class InLine_7 extends VastElement {
  /**
   * @param {string} n
   * @param {Ad_6} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** @description required in Vast 4_1
   * @param {string} content
   * @param {{version: string}} attributes
   * @returns {AdSystem_8} 
   */
  attachAdSystem(content, attributes) {
    const newElem = new AdSystem_8('AdSystem', this, {"attrs":["version"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 4_1
   * @param {string} content
   * @param {{version: string}} attributes
   * @returns {InLine_7} 
   */
  addAdSystem(content, attributes) {
    return this.attachAdSystem(content, attributes).and();
  }
  /** @description required in Vast 4_1
   * @param {string} content
   * @returns {AdTitle_9} 
   */
  attachAdTitle(content) {
    const newElem = new AdTitle_9('AdTitle', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 4_1
   * @param {string} content
   * @returns {InLine_7} 
   */
  addAdTitle(content) {
    return this.attachAdTitle(content).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {Impression_10} 
   */
  attachImpression(content, attributes) {
    const newElem = new Impression_10('Impression', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {InLine_7} 
   */
  addImpression(content, attributes) {
    return this.attachImpression(content, attributes).and();
  }
  /** @description required in Vast 4_1
   * @param {string} content
   * @returns {AdServingID_11} 
   */
  attachAdServingID(content) {
    const newElem = new AdServingID_11('AdServingID', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 4_1
   * @param {string} content
   * @returns {InLine_7} 
   */
  addAdServingID(content) {
    return this.attachAdServingID(content).and();
  }
  /** 
   * @param {string} content
   * @param {{authority: string}} attributes
   * @returns {Category_12} 
   */
  attachCategory(content, attributes) {
    const newElem = new Category_12('Category', this, {"attrs":["authority"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{authority: string}} attributes
   * @returns {InLine_7} 
   */
  addCategory(content, attributes) {
    return this.attachCategory(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {Description_13} 
   */
  attachDescription(content) {
    const newElem = new Description_13('Description', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {InLine_7} 
   */
  addDescription(content) {
    return this.attachDescription(content).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {Advertiser_14} 
   */
  attachAdvertiser(content, attributes) {
    const newElem = new Advertiser_14('Advertiser', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {InLine_7} 
   */
  addAdvertiser(content, attributes) {
    return this.attachAdvertiser(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @param {{currency: string, model:("CPM"|"CPC"|"CPE"|"CPV")}} attributes
   * @returns {Pricing_15} 
   */
  attachPricing(content, attributes) {
    const newElem = new Pricing_15('Pricing', this, {"attrs":["currency","model"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{currency: string, model:("CPM"|"CPC"|"CPE"|"CPV")}} attributes
   * @returns {InLine_7} 
   */
  addPricing(content, attributes) {
    return this.attachPricing(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {Survey_16} 
   */
  attachSurvey(content, attributes) {
    const newElem = new Survey_16('Survey', this, {"attrs":["type"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {InLine_7} 
   */
  addSurvey(content, attributes) {
    return this.attachSurvey(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {Error_17} 
   */
  attachError(content) {
    const newElem = new Error_17('Error', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {InLine_7} 
   */
  addError(content) {
    return this.attachError(content).and();
  }
  /** 
   * @param {string} content
   * @returns {Expires_18} 
   */
  attachExpires(content) {
    const newElem = new Expires_18('Expires', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {InLine_7} 
   */
  addExpires(content) {
    return this.attachExpires(content).and();
  }
  /** 
   * @param {{id: string}} attributes
   * @returns {ViewableImpression_19} 
   */
  attachViewableImpression(attributes) {
    const newElem = new ViewableImpression_19('ViewableImpression', this, {"attrs":["id"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {AdVerifications_23} 
   */
  attachAdVerifications() {
    const newElem = new AdVerifications_23('AdVerifications', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {Extensions_30} 
   */
  attachExtensions() {
    const newElem = new Extensions_30('Extensions', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 4_1
   * @returns {Creatives_32} 
   */
  attachCreatives() {
    const newElem = new Creatives_32('Creatives', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Impression_79 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_78} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class VASTAdTagURI_80 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_78} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdSystem_81 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_78} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Pricing_82 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_78} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Error_83 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_78} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Viewable_85 extends VastElement {
  /**
   * @param {string} n
   * @param {ViewableImpression_84} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NotViewable_86 extends VastElement {
  /**
   * @param {string} n
   * @param {ViewableImpression_84} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ViewUndetermined_87 extends VastElement {
  /**
   * @param {string} n
   * @param {ViewableImpression_84} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ViewableImpression_84 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_78} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @returns {Viewable_85} 
   */
  attachViewable(content) {
    const newElem = new Viewable_85('Viewable', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {ViewableImpression_84} 
   */
  addViewable(content) {
    return this.attachViewable(content).and();
  }
  /** 
   * @param {string} content
   * @returns {NotViewable_86} 
   */
  attachNotViewable(content) {
    const newElem = new NotViewable_86('NotViewable', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {ViewableImpression_84} 
   */
  addNotViewable(content) {
    return this.attachNotViewable(content).and();
  }
  /** 
   * @param {string} content
   * @returns {ViewUndetermined_87} 
   */
  attachViewUndetermined(content) {
    const newElem = new ViewUndetermined_87('ViewUndetermined', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {ViewableImpression_84} 
   */
  addViewUndetermined(content) {
    return this.attachViewUndetermined(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class JavaScriptResource_90 extends VastElement {
  /**
   * @param {string} n
   * @param {Verification_89} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ExecutableResource_91 extends VastElement {
  /**
   * @param {string} n
   * @param {Verification_89} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Tracking_93 extends VastElement {
  /**
   * @param {string} n
   * @param {TrackingEvents_92} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class TrackingEvents_92 extends VastElement {
  /**
   * @param {string} n
   * @param {Verification_89} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{offset: string, event:("verificationNotExecuted")}} attributes
   * @returns {Tracking_93} 
   */
  attachTracking(content, attributes) {
    const newElem = new Tracking_93('Tracking', this, {"attrs":["offset","event"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{offset: string, event:("verificationNotExecuted")}} attributes
   * @returns {TrackingEvents_92} 
   */
  addTracking(content, attributes) {
    return this.attachTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class VerificationParameters_94 extends VastElement {
  /**
   * @param {string} n
   * @param {Verification_89} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class BlockedAdCategories_95 extends VastElement {
  /**
   * @param {string} n
   * @param {Verification_89} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Verification_89 extends VastElement {
  /**
   * @param {string} n
   * @param {AdVerifications_88} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{apiFramework: string, browserOptional: string}} attributes
   * @returns {JavaScriptResource_90} 
   */
  attachJavaScriptResource(content, attributes) {
    const newElem = new JavaScriptResource_90('JavaScriptResource', this, {"attrs":["apiFramework","browserOptional"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{apiFramework: string, browserOptional: string}} attributes
   * @returns {Verification_89} 
   */
  addJavaScriptResource(content, attributes) {
    return this.attachJavaScriptResource(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @param {{apiFramework: string, language: string, type: string}} attributes
   * @returns {ExecutableResource_91} 
   */
  attachExecutableResource(content, attributes) {
    const newElem = new ExecutableResource_91('ExecutableResource', this, {"attrs":["apiFramework","language","type"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{apiFramework: string, language: string, type: string}} attributes
   * @returns {Verification_89} 
   */
  addExecutableResource(content, attributes) {
    return this.attachExecutableResource(content, attributes).and();
  }
  /** 
   * @returns {TrackingEvents_92} 
   */
  attachTrackingEvents() {
    const newElem = new TrackingEvents_92('TrackingEvents', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {VerificationParameters_94} 
   */
  attachVerificationParameters(content) {
    const newElem = new VerificationParameters_94('VerificationParameters', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Verification_89} 
   */
  addVerificationParameters(content) {
    return this.attachVerificationParameters(content).and();
  }
  /** 
   * @param {string} content
   * @param {{authority: string}} attributes
   * @returns {BlockedAdCategories_95} 
   */
  attachBlockedAdCategories(content, attributes) {
    const newElem = new BlockedAdCategories_95('BlockedAdCategories', this, {"attrs":["authority"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{authority: string}} attributes
   * @returns {Verification_89} 
   */
  addBlockedAdCategories(content, attributes) {
    return this.attachBlockedAdCategories(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdVerifications_88 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_78} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{vendor: string}} attributes
   * @returns {Verification_89} 
   */
  attachVerification(attributes) {
    const newElem = new Verification_89('Verification', this, {"attrs":["vendor"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Extension_97 extends VastElement {
  /**
   * @param {string} n
   * @param {Extensions_96} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Extensions_96 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_78} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {Extension_97} 
   */
  attachExtension(content, attributes) {
    const newElem = new Extension_97('Extension', this, {"attrs":["type"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {Extensions_96} 
   */
  addExtension(content, attributes) {
    return this.attachExtension(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Tracking_102 extends VastElement {
  /**
   * @param {string} n
   * @param {TrackingEvents_101} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class TrackingEvents_101 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_100} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{offset: string, event:("loaded"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"progress"|"closeLinear"|"otherAdInteraction"|"mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"notUsed")}} attributes
   * @returns {Tracking_102} 
   */
  attachTracking(content, attributes) {
    const newElem = new Tracking_102('Tracking', this, {"attrs":["offset","event"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{offset: string, event:("loaded"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"progress"|"closeLinear"|"otherAdInteraction"|"mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"notUsed")}} attributes
   * @returns {TrackingEvents_101} 
   */
  addTracking(content, attributes) {
    return this.attachTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ClickTracking_104 extends VastElement {
  /**
   * @param {string} n
   * @param {VideoClicks_103} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CustomClick_105 extends VastElement {
  /**
   * @param {string} n
   * @param {VideoClicks_103} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class VideoClicks_103 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_100} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {ClickTracking_104} 
   */
  attachClickTracking(content, attributes) {
    const newElem = new ClickTracking_104('ClickTracking', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {VideoClicks_103} 
   */
  addClickTracking(content, attributes) {
    return this.attachClickTracking(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {CustomClick_105} 
   */
  attachCustomClick(content, attributes) {
    const newElem = new CustomClick_105('CustomClick', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {VideoClicks_103} 
   */
  addCustomClick(content, attributes) {
    return this.attachCustomClick(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class StaticResource_108 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_107} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IFrameResource_109 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_107} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class HTMLResource_110 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_107} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IconClickThrough_112 extends VastElement {
  /**
   * @param {string} n
   * @param {IconClicks_111} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IconClickTracking_113 extends VastElement {
  /**
   * @param {string} n
   * @param {IconClicks_111} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IconClicks_111 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_107} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @returns {IconClickThrough_112} 
   */
  attachIconClickThrough(content) {
    const newElem = new IconClickThrough_112('IconClickThrough', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {IconClicks_111} 
   */
  addIconClickThrough(content) {
    return this.attachIconClickThrough(content).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {IconClickTracking_113} 
   */
  attachIconClickTracking(content, attributes) {
    const newElem = new IconClickTracking_113('IconClickTracking', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {IconClicks_111} 
   */
  addIconClickTracking(content, attributes) {
    return this.attachIconClickTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IconViewTracking_114 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_107} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Icon_107 extends VastElement {
  /**
   * @param {string} n
   * @param {Icons_106} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_108} 
   */
  attachStaticResource(content, attributes) {
    const newElem = new StaticResource_108('StaticResource', this, {"attrs":["creativeType"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {Icon_107} 
   */
  addStaticResource(content, attributes) {
    return this.attachStaticResource(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {IFrameResource_109} 
   */
  attachIFrameResource(content) {
    const newElem = new IFrameResource_109('IFrameResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Icon_107} 
   */
  addIFrameResource(content) {
    return this.attachIFrameResource(content).and();
  }
  /** 
   * @param {string} content
   * @returns {HTMLResource_110} 
   */
  attachHTMLResource(content) {
    const newElem = new HTMLResource_110('HTMLResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Icon_107} 
   */
  addHTMLResource(content) {
    return this.attachHTMLResource(content).and();
  }
  /** 
   * @returns {IconClicks_111} 
   */
  attachIconClicks() {
    const newElem = new IconClicks_111('IconClicks', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {IconViewTracking_114} 
   */
  attachIconViewTracking(content) {
    const newElem = new IconViewTracking_114('IconViewTracking', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Icon_107} 
   */
  addIconViewTracking(content) {
    return this.attachIconViewTracking(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Icons_106 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_100} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{program: string, width: string, height: string, xPosition: string, yPosition: string, duration: string, offset: string, apiFramework: string, pxratio: string}} attributes
   * @returns {Icon_107} 
   */
  attachIcon(attributes) {
    const newElem = new Icon_107('Icon', this, {"attrs":["program","width","height","xPosition","yPosition","duration","offset","apiFramework","pxratio"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class InteractiveCreativeFile_115 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_100} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Linear_100 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_99} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @returns {TrackingEvents_101} 
   */
  attachTrackingEvents() {
    const newElem = new TrackingEvents_101('TrackingEvents', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {VideoClicks_103} 
   */
  attachVideoClicks() {
    const newElem = new VideoClicks_103('VideoClicks', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {Icons_106} 
   */
  attachIcons() {
    const newElem = new Icons_106('Icons', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{type: string, apiFramework: string, variableDuration: string}} attributes
   * @returns {InteractiveCreativeFile_115} 
   */
  attachInteractiveCreativeFile(content, attributes) {
    const newElem = new InteractiveCreativeFile_115('InteractiveCreativeFile', this, {"attrs":["type","apiFramework","variableDuration"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{type: string, apiFramework: string, variableDuration: string}} attributes
   * @returns {Linear_100} 
   */
  addInteractiveCreativeFile(content, attributes) {
    return this.attachInteractiveCreativeFile(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinearClickThrough_118 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinear_117} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinearClickTracking_119 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinear_117} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinear_117 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinearAds_116} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @returns {NonLinearClickThrough_118} 
   */
  attachNonLinearClickThrough(content) {
    const newElem = new NonLinearClickThrough_118('NonLinearClickThrough', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {NonLinear_117} 
   */
  addNonLinearClickThrough(content) {
    return this.attachNonLinearClickThrough(content).and();
  }
  /** 
   * @param {string} content
   * @returns {NonLinearClickTracking_119} 
   */
  attachNonLinearClickTracking(content) {
    const newElem = new NonLinearClickTracking_119('NonLinearClickTracking', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {NonLinear_117} 
   */
  addNonLinearClickTracking(content) {
    return this.attachNonLinearClickTracking(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Tracking_121 extends VastElement {
  /**
   * @param {string} n
   * @param {TrackingEvents_120} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class TrackingEvents_120 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinearAds_116} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView"|"acceptInvitation"|"adExpand"|"adCollapse"|"minimize"|"close"|"overlayViewDuration"|"otherAdInteraction"|"mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"notUsed")}} attributes
   * @returns {Tracking_121} 
   */
  attachTracking(content, attributes) {
    const newElem = new Tracking_121('Tracking', this, {"attrs":["event"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView"|"acceptInvitation"|"adExpand"|"adCollapse"|"minimize"|"close"|"overlayViewDuration"|"otherAdInteraction"|"mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"notUsed")}} attributes
   * @returns {TrackingEvents_120} 
   */
  addTracking(content, attributes) {
    return this.attachTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinearAds_116 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_99} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{id: string, width: string, height: string, expandedWidth: string, expandedHeight: string, scalable: string, maintainAspectRatio: string, apiFramework: string, minSuggestedDuration: string}} attributes
   * @returns {NonLinear_117} 
   */
  attachNonLinear(attributes) {
    const newElem = new NonLinear_117('NonLinear', this, {"attrs":["id","width","height","expandedWidth","expandedHeight","scalable","maintainAspectRatio","apiFramework","minSuggestedDuration"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {TrackingEvents_120} 
   */
  attachTrackingEvents() {
    const newElem = new TrackingEvents_120('TrackingEvents', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class StaticResource_124 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_123} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IFrameResource_125 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_123} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class HTMLResource_126 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_123} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdParameters_127 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_123} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AltText_128 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_123} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CompanionClickThrough_129 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_123} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CompanionClickTracking_130 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_123} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Tracking_132 extends VastElement {
  /**
   * @param {string} n
   * @param {TrackingEvents_131} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class TrackingEvents_131 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_123} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView")}} attributes
   * @returns {Tracking_132} 
   */
  attachTracking(content, attributes) {
    const newElem = new Tracking_132('Tracking', this, {"attrs":["event"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView")}} attributes
   * @returns {TrackingEvents_131} 
   */
  addTracking(content, attributes) {
    return this.attachTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Companion_123 extends VastElement {
  /**
   * @param {string} n
   * @param {CompanionAds_122} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_124} 
   */
  attachStaticResource(content, attributes) {
    const newElem = new StaticResource_124('StaticResource', this, {"attrs":["creativeType"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {Companion_123} 
   */
  addStaticResource(content, attributes) {
    return this.attachStaticResource(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {IFrameResource_125} 
   */
  attachIFrameResource(content) {
    const newElem = new IFrameResource_125('IFrameResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_123} 
   */
  addIFrameResource(content) {
    return this.attachIFrameResource(content).and();
  }
  /** 
   * @param {string} content
   * @returns {HTMLResource_126} 
   */
  attachHTMLResource(content) {
    const newElem = new HTMLResource_126('HTMLResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_123} 
   */
  addHTMLResource(content) {
    return this.attachHTMLResource(content).and();
  }
  /** 
   * @param {string} content
   * @param {{xmlEncoded: string}} attributes
   * @returns {AdParameters_127} 
   */
  attachAdParameters(content, attributes) {
    const newElem = new AdParameters_127('AdParameters', this, {"attrs":["xmlEncoded"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{xmlEncoded: string}} attributes
   * @returns {Companion_123} 
   */
  addAdParameters(content, attributes) {
    return this.attachAdParameters(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {AltText_128} 
   */
  attachAltText(content) {
    const newElem = new AltText_128('AltText', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_123} 
   */
  addAltText(content) {
    return this.attachAltText(content).and();
  }
  /** 
   * @param {string} content
   * @returns {CompanionClickThrough_129} 
   */
  attachCompanionClickThrough(content) {
    const newElem = new CompanionClickThrough_129('CompanionClickThrough', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_123} 
   */
  addCompanionClickThrough(content) {
    return this.attachCompanionClickThrough(content).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {CompanionClickTracking_130} 
   */
  attachCompanionClickTracking(content, attributes) {
    const newElem = new CompanionClickTracking_130('CompanionClickTracking', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {Companion_123} 
   */
  addCompanionClickTracking(content, attributes) {
    return this.attachCompanionClickTracking(content, attributes).and();
  }
  /** 
   * @returns {TrackingEvents_131} 
   */
  attachTrackingEvents() {
    const newElem = new TrackingEvents_131('TrackingEvents', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CompanionAds_122 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_99} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{width: string, height: string, id: string, assetWidth: string, assetHeight: string, expandedWidth: string, expandedHeight: string, apiFramework: string, adSlotID: string, pxratio: string, renderingMode: string}} attributes
   * @returns {Companion_123} 
   */
  attachCompanion(attributes) {
    const newElem = new Companion_123('Companion', this, {"attrs":["width","height","id","assetWidth","assetHeight","expandedWidth","expandedHeight","apiFramework","adSlotID","pxratio","renderingMode"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Creative_99 extends VastElement {
  /**
   * @param {string} n
   * @param {Creatives_98} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @returns {Linear_100} 
   */
  attachLinear() {
    const newElem = new Linear_100('Linear', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {NonLinearAds_116} 
   */
  attachNonLinearAds() {
    const newElem = new NonLinearAds_116('NonLinearAds', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {{required:("all"|"any"|"none")}} attributes
   * @returns {CompanionAds_122} 
   */
  attachCompanionAds(attributes) {
    const newElem = new CompanionAds_122('CompanionAds', this, {"attrs":["required"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Creatives_98 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_78} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{id: string, sequence: string, adId: string}} attributes
   * @returns {Creative_99} 
   */
  attachCreative(attributes) {
    const newElem = new Creative_99('Creative', this, {"attrs":["id","sequence","adId"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Wrapper_78 extends VastElement {
  /**
   * @param {string} n
   * @param {Ad_6} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {Impression_79} 
   */
  attachImpression(content, attributes) {
    const newElem = new Impression_79('Impression', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {Wrapper_78} 
   */
  addImpression(content, attributes) {
    return this.attachImpression(content, attributes).and();
  }
  /** @description required in Vast 4_1
   * @param {string} content
   * @returns {VASTAdTagURI_80} 
   */
  attachVASTAdTagURI(content) {
    const newElem = new VASTAdTagURI_80('VASTAdTagURI', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 4_1
   * @param {string} content
   * @returns {Wrapper_78} 
   */
  addVASTAdTagURI(content) {
    return this.attachVASTAdTagURI(content).and();
  }
  /** @description required in Vast 4_1
   * @param {string} content
   * @param {{version: string}} attributes
   * @returns {AdSystem_81} 
   */
  attachAdSystem(content, attributes) {
    const newElem = new AdSystem_81('AdSystem', this, {"attrs":["version"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 4_1
   * @param {string} content
   * @param {{version: string}} attributes
   * @returns {Wrapper_78} 
   */
  addAdSystem(content, attributes) {
    return this.attachAdSystem(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @param {{currency: string, model:("CPM"|"CPC"|"CPE"|"CPV")}} attributes
   * @returns {Pricing_82} 
   */
  attachPricing(content, attributes) {
    const newElem = new Pricing_82('Pricing', this, {"attrs":["currency","model"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{currency: string, model:("CPM"|"CPC"|"CPE"|"CPV")}} attributes
   * @returns {Wrapper_78} 
   */
  addPricing(content, attributes) {
    return this.attachPricing(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {Error_83} 
   */
  attachError(content) {
    const newElem = new Error_83('Error', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Wrapper_78} 
   */
  addError(content) {
    return this.attachError(content).and();
  }
  /** 
   * @param {{id: string}} attributes
   * @returns {ViewableImpression_84} 
   */
  attachViewableImpression(attributes) {
    const newElem = new ViewableImpression_84('ViewableImpression', this, {"attrs":["id"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {AdVerifications_88} 
   */
  attachAdVerifications() {
    const newElem = new AdVerifications_88('AdVerifications', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {Extensions_96} 
   */
  attachExtensions() {
    const newElem = new Extensions_96('Extensions', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {Creatives_98} 
   */
  attachCreatives() {
    const newElem = new Creatives_98('Creatives', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Ad_6 extends VastElement {
  /**
   * @param {string} n
   * @param {VAST_4} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @returns {InLine_7} 
   */
  attachInLine() {
    const newElem = new InLine_7('InLine', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {{followAdditonalWrappers: string, allowMultipleAds: string, fallbackOnNoAd: string}} attributes
   * @returns {Wrapper_78} 
   */
  attachWrapper(attributes) {
    const newElem = new Wrapper_78('Wrapper', this, {"attrs":["followAdditonalWrappers","allowMultipleAds","fallbackOnNoAd"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class VAST_4 extends VastElement {
  /**
   * @param {string} n
   * @param {apiv4_1} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @returns {Error_5} 
   */
  attachError(content) {
    const newElem = new Error_5('Error', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {VAST_4} 
   */
  addError(content) {
    return this.attachError(content).and();
  }
  /** 
   * @param {{id: string, sequence: string, conditionalAd: string, adType: string}} attributes
   * @returns {Ad_6} 
   */
  attachAd(attributes) {
    const newElem = new Ad_6('Ad', this, {"attrs":["id","sequence","conditionalAd","adType"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class apiv4_1 extends VastElement {
  /**
   * @param {string} n
   * @param {apiv4_1} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{version:("4.1")}} attributes
   * @returns {VAST_4} 
   */
  attachVAST(attributes) {
    const newElem = new VAST_4('VAST', this, {"attrs":["version"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent || this; }
  back() { return this.and().and(); }
}


const validator = {"only":{"VAST":{"alo":{"Ad":{"uniq":{"InLine":{"required":{"AdSystem":{},"AdTitle":{},"AdServingID":{},"Creatives":{"alo":{"Creative":{"required":{"UniversalAdId":{"attrsRequired":{"idRegistry":null}}},"uniq":{"Linear":{"required":{"Duration":{},"MediaFiles":{"alo":{"MediaFile":{"attrsRequired":{"delivery":["progressive","streaming"],"type":null,"width":null,"height":null}}},"follow":{"Mezzanine":{"attrsRequired":{"delivery":["progressive","streaming"],"type":null,"width":null,"height":null}},"InteractiveCreativeFile":{},"ClosedCaptionFiles":{"follow":{"ClosedCaptionFile":{}}}}}},"follow":{"AdParameters":{},"VideoClicks":{"follow":{"ClickThrough":{},"ClickTracking":{},"CustomClick":{}}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["loaded","start","firstQuartile","midpoint","thirdQuartile","complete","progress","closeLinear","otherAdInteraction","mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","notUsed"]}}}},"Icons":{"alo":{"Icon":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"IconClicks":{"follow":{"IconClickThrough":{},"IconClickTracking":{}}},"IconViewTracking":{}}}}}}},"NonLinearAds":{"follow":{"NonLinear":{"follow":{"NonLinearClickThrough":{},"NonLinearClickTracking":{}},"attrsRequired":{"width":null,"height":null}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView","acceptInvitation","adExpand","adCollapse","minimize","close","overlayViewDuration","otherAdInteraction","mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","notUsed"]}}}}}},"CompanionAds":{"follow":{"Companion":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"AdParameters":{},"AltText":{},"CompanionClickThrough":{},"CompanionClickTracking":{},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView"]}}}}},"attrsRequired":{"width":null,"height":null}}},"attrsRequired":{"required":["all","any","none"]}}},"follow":{"CreativeExtensions":{"follow":{"CreativeExtension":{}}}}}}}},"alo":{"Impression":{}},"follow":{"Category":{"attrsRequired":{"authority":null}},"Description":{},"Advertiser":{},"Pricing":{"attrsRequired":{"currency":null,"model":["CPM","CPC","CPE","CPV"]}},"Survey":{},"Error":{},"Expires":{},"ViewableImpression":{"follow":{"Viewable":{},"NotViewable":{},"ViewUndetermined":{}}},"AdVerifications":{"follow":{"Verification":{"follow":{"JavaScriptResource":{"attrsRequired":{"apiFramework":null,"browserOptional":null}},"ExecutableResource":{"attrsRequired":{"apiFramework":null}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["verificationNotExecuted"]}}}},"VerificationParameters":{}},"attrsRequired":{"vendor":null}}}},"Extensions":{"required":{"Extension":{}}}}},"Wrapper":{"required":{"VASTAdTagURI":{},"AdSystem":{}},"alo":{"Impression":{}},"follow":{"Pricing":{"attrsRequired":{"currency":null,"model":["CPM","CPC","CPE","CPV"]}},"Error":{},"ViewableImpression":{"follow":{"Viewable":{},"NotViewable":{},"ViewUndetermined":{}}},"AdVerifications":{"follow":{"Verification":{"follow":{"JavaScriptResource":{"attrsRequired":{"apiFramework":null,"browserOptional":null}},"ExecutableResource":{"attrsRequired":{"apiFramework":null}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["verificationNotExecuted"]}}}},"VerificationParameters":{},"BlockedAdCategories":{"attrsRequired":{"authority":null}}},"attrsRequired":{"vendor":null}}}},"Extensions":{"follow":{"Extension":{}}},"Creatives":{"follow":{"Creative":{"uniq":{"Linear":{"follow":{"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["loaded","start","firstQuartile","midpoint","thirdQuartile","complete","progress","closeLinear","otherAdInteraction","mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","notUsed"]}}}},"VideoClicks":{"follow":{"ClickTracking":{},"CustomClick":{}}},"Icons":{"alo":{"Icon":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"IconClicks":{"follow":{"IconClickThrough":{},"IconClickTracking":{}}},"IconViewTracking":{}}}}},"InteractiveCreativeFile":{}}},"NonLinearAds":{"follow":{"NonLinear":{"follow":{"NonLinearClickThrough":{},"NonLinearClickTracking":{}},"attrsRequired":{"width":null,"height":null}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView","acceptInvitation","adExpand","adCollapse","minimize","close","overlayViewDuration","otherAdInteraction","mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","notUsed"]}}}}}},"CompanionAds":{"follow":{"Companion":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"AdParameters":{},"AltText":{},"CompanionClickThrough":{},"CompanionClickTracking":{},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView"]}}}}},"attrsRequired":{"width":null,"height":null}}},"attrsRequired":{"required":["all","any","none"]}}}}}}}}}}},"follow":{"Error":{}},"attrsRequired":{"version":["4.1"]}}}};

module.exports = {
  apiv4_1,
  validator
};
