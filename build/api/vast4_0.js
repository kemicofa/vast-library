// @flow
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
class Category_11 extends VastElement {
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
class Description_12 extends VastElement {
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
class Advertiser_13 extends VastElement {
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
class Pricing_14 extends VastElement {
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
class Survey_15 extends VastElement {
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
class Error_16 extends VastElement {
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
class Viewable_18 extends VastElement {
  /**
   * @param {string} n
   * @param {ViewableImpression_17} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NotViewable_19 extends VastElement {
  /**
   * @param {string} n
   * @param {ViewableImpression_17} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ViewUndetermined_20 extends VastElement {
  /**
   * @param {string} n
   * @param {ViewableImpression_17} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ViewableImpression_17 extends VastElement {
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
   * @returns {Viewable_18} 
   */
  attachViewable(content) {
    const newElem = new Viewable_18('Viewable', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {ViewableImpression_17} 
   */
  addViewable(content) {
    return this.attachViewable(content).and();
  }
  /** 
   * @param {string} content
   * @returns {NotViewable_19} 
   */
  attachNotViewable(content) {
    const newElem = new NotViewable_19('NotViewable', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {ViewableImpression_17} 
   */
  addNotViewable(content) {
    return this.attachNotViewable(content).and();
  }
  /** 
   * @param {string} content
   * @returns {ViewUndetermined_20} 
   */
  attachViewUndetermined(content) {
    const newElem = new ViewUndetermined_20('ViewUndetermined', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {ViewableImpression_17} 
   */
  addViewUndetermined(content) {
    return this.attachViewUndetermined(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class JavaScriptResource_23 extends VastElement {
  /**
   * @param {string} n
   * @param {Verification_22} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class FlashResource_24 extends VastElement {
  /**
   * @param {string} n
   * @param {Verification_22} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ViewableImpression_25 extends VastElement {
  /**
   * @param {string} n
   * @param {Verification_22} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Verification_22 extends VastElement {
  /**
   * @param {string} n
   * @param {AdVerifications_21} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{apiFramework: string}} attributes
   * @returns {JavaScriptResource_23} 
   */
  attachJavaScriptResource(content, attributes) {
    const newElem = new JavaScriptResource_23('JavaScriptResource', this, {"attrs":["apiFramework"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{apiFramework: string}} attributes
   * @returns {Verification_22} 
   */
  addJavaScriptResource(content, attributes) {
    return this.attachJavaScriptResource(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @param {{apiFramework: string}} attributes
   * @returns {FlashResource_24} 
   */
  attachFlashResource(content, attributes) {
    const newElem = new FlashResource_24('FlashResource', this, {"attrs":["apiFramework"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{apiFramework: string}} attributes
   * @returns {Verification_22} 
   */
  addFlashResource(content, attributes) {
    return this.attachFlashResource(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {ViewableImpression_25} 
   */
  attachViewableImpression(content, attributes) {
    const newElem = new ViewableImpression_25('ViewableImpression', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {Verification_22} 
   */
  addViewableImpression(content, attributes) {
    return this.attachViewableImpression(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdVerifications_21 extends VastElement {
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
   * @returns {Verification_22} 
   */
  attachVerification(attributes) {
    const newElem = new Verification_22('Verification', this, {"attrs":["vendor"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Extension_27 extends VastElement {
  /**
   * @param {string} n
   * @param {Extensions_26} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Extensions_26 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** @description required in Vast 4
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {Extension_27} 
   */
  attachExtension(content, attributes) {
    const newElem = new Extension_27('Extension', this, {"attrs":["type"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 4
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {Extensions_26} 
   */
  addExtension(content, attributes) {
    return this.attachExtension(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class UniversalAdId_30 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_29} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CreativeExtension_32 extends VastElement {
  /**
   * @param {string} n
   * @param {CreativeExtensions_31} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CreativeExtensions_31 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_29} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {CreativeExtension_32} 
   */
  attachCreativeExtension(content, attributes) {
    const newElem = new CreativeExtension_32('CreativeExtension', this, {"attrs":["type"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {CreativeExtensions_31} 
   */
  addCreativeExtension(content, attributes) {
    return this.attachCreativeExtension(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Duration_34 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_33} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdParameters_35 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_33} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Mezzanine_37 extends VastElement {
  /**
   * @param {string} n
   * @param {MediaFiles_36} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class MediaFile_38 extends VastElement {
  /**
   * @param {string} n
   * @param {MediaFiles_36} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class InteractiveCreativeFile_39 extends VastElement {
  /**
   * @param {string} n
   * @param {MediaFiles_36} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class MediaFiles_36 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_33} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @returns {Mezzanine_37} 
   */
  attachMezzanine(content) {
    const newElem = new Mezzanine_37('Mezzanine', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {MediaFiles_36} 
   */
  addMezzanine(content) {
    return this.attachMezzanine(content).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string, delivery:("progressive"|"streaming"), type: string, bitrate: string, minBitrate: string, maxBitrate: string, width: string, height: string, scalable: string, mantainAspectRatio: string, codec: string, apiFramework: string}} attributes
   * @returns {MediaFile_38} 
   */
  attachMediaFile(content, attributes) {
    const newElem = new MediaFile_38('MediaFile', this, {"attrs":["id","delivery","type","bitrate","minBitrate","maxBitrate","width","height","scalable","mantainAspectRatio","codec","apiFramework"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string, delivery:("progressive"|"streaming"), type: string, bitrate: string, minBitrate: string, maxBitrate: string, width: string, height: string, scalable: string, mantainAspectRatio: string, codec: string, apiFramework: string}} attributes
   * @returns {MediaFiles_36} 
   */
  addMediaFile(content, attributes) {
    return this.attachMediaFile(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {InteractiveCreativeFile_39} 
   */
  attachInteractiveCreativeFile(content) {
    const newElem = new InteractiveCreativeFile_39('InteractiveCreativeFile', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {MediaFiles_36} 
   */
  addInteractiveCreativeFile(content) {
    return this.attachInteractiveCreativeFile(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ClickThrough_41 extends VastElement {
  /**
   * @param {string} n
   * @param {VideoClicks_40} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ClickTracking_42 extends VastElement {
  /**
   * @param {string} n
   * @param {VideoClicks_40} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CustomClick_43 extends VastElement {
  /**
   * @param {string} n
   * @param {VideoClicks_40} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class VideoClicks_40 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_33} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {ClickThrough_41} 
   */
  attachClickThrough(content, attributes) {
    const newElem = new ClickThrough_41('ClickThrough', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {VideoClicks_40} 
   */
  addClickThrough(content, attributes) {
    return this.attachClickThrough(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {ClickTracking_42} 
   */
  attachClickTracking(content, attributes) {
    const newElem = new ClickTracking_42('ClickTracking', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {VideoClicks_40} 
   */
  addClickTracking(content, attributes) {
    return this.attachClickTracking(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {CustomClick_43} 
   */
  attachCustomClick(content, attributes) {
    const newElem = new CustomClick_43('CustomClick', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {VideoClicks_40} 
   */
  addCustomClick(content, attributes) {
    return this.attachCustomClick(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Tracking_45 extends VastElement {
  /**
   * @param {string} n
   * @param {TrackingEvents_44} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class TrackingEvents_44 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_33} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{offset: string, event:("mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"otherAdInteraction"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"acceptInvitationLinear"|"timeSpentViewing"|"progress")}} attributes
   * @returns {Tracking_45} 
   */
  attachTracking(content, attributes) {
    const newElem = new Tracking_45('Tracking', this, {"attrs":["offset","event"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{offset: string, event:("mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"otherAdInteraction"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"acceptInvitationLinear"|"timeSpentViewing"|"progress")}} attributes
   * @returns {TrackingEvents_44} 
   */
  addTracking(content, attributes) {
    return this.attachTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class StaticResource_48 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_47} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IFrameResource_49 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_47} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class HTMLResource_50 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_47} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IconClickThrough_52 extends VastElement {
  /**
   * @param {string} n
   * @param {IconClicks_51} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IconClickTracking_53 extends VastElement {
  /**
   * @param {string} n
   * @param {IconClicks_51} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IconClicks_51 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_47} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @returns {IconClickThrough_52} 
   */
  attachIconClickThrough(content) {
    const newElem = new IconClickThrough_52('IconClickThrough', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {IconClicks_51} 
   */
  addIconClickThrough(content) {
    return this.attachIconClickThrough(content).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {IconClickTracking_53} 
   */
  attachIconClickTracking(content, attributes) {
    const newElem = new IconClickTracking_53('IconClickTracking', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {IconClicks_51} 
   */
  addIconClickTracking(content, attributes) {
    return this.attachIconClickTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IconViewTracking_54 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_47} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Icon_47 extends VastElement {
  /**
   * @param {string} n
   * @param {Icons_46} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_48} 
   */
  attachStaticResource(content, attributes) {
    const newElem = new StaticResource_48('StaticResource', this, {"attrs":["creativeType"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {Icon_47} 
   */
  addStaticResource(content, attributes) {
    return this.attachStaticResource(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {IFrameResource_49} 
   */
  attachIFrameResource(content) {
    const newElem = new IFrameResource_49('IFrameResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Icon_47} 
   */
  addIFrameResource(content) {
    return this.attachIFrameResource(content).and();
  }
  /** 
   * @param {string} content
   * @returns {HTMLResource_50} 
   */
  attachHTMLResource(content) {
    const newElem = new HTMLResource_50('HTMLResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Icon_47} 
   */
  addHTMLResource(content) {
    return this.attachHTMLResource(content).and();
  }
  /** 
   * @returns {IconClicks_51} 
   */
  attachIconClicks() {
    const newElem = new IconClicks_51('IconClicks', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {IconViewTracking_54} 
   */
  attachIconViewTracking(content) {
    const newElem = new IconViewTracking_54('IconViewTracking', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Icon_47} 
   */
  addIconViewTracking(content) {
    return this.attachIconViewTracking(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Icons_46 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_33} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{program: string, width: string, height: string, xPosition: string, yPosition: string, duration: string, offset: string, apiFramework: string, pxratio: string}} attributes
   * @returns {Icon_47} 
   */
  attachIcon(attributes) {
    const newElem = new Icon_47('Icon', this, {"attrs":["program","width","height","xPosition","yPosition","duration","offset","apiFramework","pxratio"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Linear_33 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_29} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** @description required in Vast 4
   * @param {string} content
   * @returns {Duration_34} 
   */
  attachDuration(content) {
    const newElem = new Duration_34('Duration', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 4
   * @param {string} content
   * @returns {Linear_33} 
   */
  addDuration(content) {
    return this.attachDuration(content).and();
  }
  /** 
   * @param {string} content
   * @param {{xmlEncoded: string}} attributes
   * @returns {AdParameters_35} 
   */
  attachAdParameters(content, attributes) {
    const newElem = new AdParameters_35('AdParameters', this, {"attrs":["xmlEncoded"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{xmlEncoded: string}} attributes
   * @returns {Linear_33} 
   */
  addAdParameters(content, attributes) {
    return this.attachAdParameters(content, attributes).and();
  }
  /** @description required in Vast 4
   * @returns {MediaFiles_36} 
   */
  attachMediaFiles() {
    const newElem = new MediaFiles_36('MediaFiles', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {VideoClicks_40} 
   */
  attachVideoClicks() {
    const newElem = new VideoClicks_40('VideoClicks', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {TrackingEvents_44} 
   */
  attachTrackingEvents() {
    const newElem = new TrackingEvents_44('TrackingEvents', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {Icons_46} 
   */
  attachIcons() {
    const newElem = new Icons_46('Icons', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class StaticResource_57 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinear_56} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IFrameResource_58 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinear_56} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class HTMLResource_59 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinear_56} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinearClickThrough_60 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinear_56} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinearClickTracking_61 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinear_56} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinear_56 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinearAds_55} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_57} 
   */
  attachStaticResource(content, attributes) {
    const newElem = new StaticResource_57('StaticResource', this, {"attrs":["creativeType"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {NonLinear_56} 
   */
  addStaticResource(content, attributes) {
    return this.attachStaticResource(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {IFrameResource_58} 
   */
  attachIFrameResource(content) {
    const newElem = new IFrameResource_58('IFrameResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {NonLinear_56} 
   */
  addIFrameResource(content) {
    return this.attachIFrameResource(content).and();
  }
  /** 
   * @param {string} content
   * @returns {HTMLResource_59} 
   */
  attachHTMLResource(content) {
    const newElem = new HTMLResource_59('HTMLResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {NonLinear_56} 
   */
  addHTMLResource(content) {
    return this.attachHTMLResource(content).and();
  }
  /** 
   * @param {string} content
   * @returns {NonLinearClickThrough_60} 
   */
  attachNonLinearClickThrough(content) {
    const newElem = new NonLinearClickThrough_60('NonLinearClickThrough', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {NonLinear_56} 
   */
  addNonLinearClickThrough(content) {
    return this.attachNonLinearClickThrough(content).and();
  }
  /** 
   * @param {string} content
   * @returns {NonLinearClickTracking_61} 
   */
  attachNonLinearClickTracking(content) {
    const newElem = new NonLinearClickTracking_61('NonLinearClickTracking', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {NonLinear_56} 
   */
  addNonLinearClickTracking(content) {
    return this.attachNonLinearClickTracking(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Tracking_63 extends VastElement {
  /**
   * @param {string} n
   * @param {TrackingEvents_62} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class TrackingEvents_62 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinearAds_55} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{event:("mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"otherAdInteraction"|"creativeView"|"acceptInvitation"|"adExpand"|"adCollapse"|"minimize"|"close"|"overlayViewDuration")}} attributes
   * @returns {Tracking_63} 
   */
  attachTracking(content, attributes) {
    const newElem = new Tracking_63('Tracking', this, {"attrs":["event"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{event:("mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"otherAdInteraction"|"creativeView"|"acceptInvitation"|"adExpand"|"adCollapse"|"minimize"|"close"|"overlayViewDuration")}} attributes
   * @returns {TrackingEvents_62} 
   */
  addTracking(content, attributes) {
    return this.attachTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinearAds_55 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_29} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{id: string, width: string, height: string, expandedWidth: string, expandedHeight: string, scalable: string, maintainAspectRatio: string, minSuggestedDuration: string, apiFramework: string}} attributes
   * @returns {NonLinear_56} 
   */
  attachNonLinear(attributes) {
    const newElem = new NonLinear_56('NonLinear', this, {"attrs":["id","width","height","expandedWidth","expandedHeight","scalable","maintainAspectRatio","minSuggestedDuration","apiFramework"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {TrackingEvents_62} 
   */
  attachTrackingEvents() {
    const newElem = new TrackingEvents_62('TrackingEvents', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class StaticResource_66 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_65} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IFrameResource_67 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_65} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class HTMLResource_68 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_65} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdParameters_69 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_65} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AltText_70 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_65} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CompanionClickThrough_71 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_65} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CompanionClickTracking_72 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_65} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Tracking_74 extends VastElement {
  /**
   * @param {string} n
   * @param {TrackingEvents_73} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class TrackingEvents_73 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_65} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView")}} attributes
   * @returns {Tracking_74} 
   */
  attachTracking(content, attributes) {
    const newElem = new Tracking_74('Tracking', this, {"attrs":["event"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView")}} attributes
   * @returns {TrackingEvents_73} 
   */
  addTracking(content, attributes) {
    return this.attachTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Companion_65 extends VastElement {
  /**
   * @param {string} n
   * @param {CompanionAds_64} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_66} 
   */
  attachStaticResource(content, attributes) {
    const newElem = new StaticResource_66('StaticResource', this, {"attrs":["creativeType"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {Companion_65} 
   */
  addStaticResource(content, attributes) {
    return this.attachStaticResource(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {IFrameResource_67} 
   */
  attachIFrameResource(content) {
    const newElem = new IFrameResource_67('IFrameResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_65} 
   */
  addIFrameResource(content) {
    return this.attachIFrameResource(content).and();
  }
  /** 
   * @param {string} content
   * @returns {HTMLResource_68} 
   */
  attachHTMLResource(content) {
    const newElem = new HTMLResource_68('HTMLResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_65} 
   */
  addHTMLResource(content) {
    return this.attachHTMLResource(content).and();
  }
  /** 
   * @param {string} content
   * @param {{xmlEncoded: string}} attributes
   * @returns {AdParameters_69} 
   */
  attachAdParameters(content, attributes) {
    const newElem = new AdParameters_69('AdParameters', this, {"attrs":["xmlEncoded"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{xmlEncoded: string}} attributes
   * @returns {Companion_65} 
   */
  addAdParameters(content, attributes) {
    return this.attachAdParameters(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {AltText_70} 
   */
  attachAltText(content) {
    const newElem = new AltText_70('AltText', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_65} 
   */
  addAltText(content) {
    return this.attachAltText(content).and();
  }
  /** 
   * @param {string} content
   * @returns {CompanionClickThrough_71} 
   */
  attachCompanionClickThrough(content) {
    const newElem = new CompanionClickThrough_71('CompanionClickThrough', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_65} 
   */
  addCompanionClickThrough(content) {
    return this.attachCompanionClickThrough(content).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {CompanionClickTracking_72} 
   */
  attachCompanionClickTracking(content, attributes) {
    const newElem = new CompanionClickTracking_72('CompanionClickTracking', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {Companion_65} 
   */
  addCompanionClickTracking(content, attributes) {
    return this.attachCompanionClickTracking(content, attributes).and();
  }
  /** 
   * @returns {TrackingEvents_73} 
   */
  attachTrackingEvents() {
    const newElem = new TrackingEvents_73('TrackingEvents', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CompanionAds_64 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_29} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{id: string, width: string, height: string, assetWidth: string, assetHeight: string, expandedWidth: string, expandedHeight: string, apiFramework: string, adSlotID: string, pxratio: string}} attributes
   * @returns {Companion_65} 
   */
  attachCompanion(attributes) {
    const newElem = new Companion_65('Companion', this, {"attrs":["id","width","height","assetWidth","assetHeight","expandedWidth","expandedHeight","apiFramework","adSlotID","pxratio"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Creative_29 extends VastElement {
  /**
   * @param {string} n
   * @param {Creatives_28} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** @description required in Vast 4
   * @param {string} content
   * @param {{idRegistry: string, idValue: string}} attributes
   * @returns {UniversalAdId_30} 
   */
  attachUniversalAdId(content, attributes) {
    const newElem = new UniversalAdId_30('UniversalAdId', this, {"attrs":["idRegistry","idValue"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 4
   * @param {string} content
   * @param {{idRegistry: string, idValue: string}} attributes
   * @returns {Creative_29} 
   */
  addUniversalAdId(content, attributes) {
    return this.attachUniversalAdId(content, attributes).and();
  }
  /** 
   * @returns {CreativeExtensions_31} 
   */
  attachCreativeExtensions() {
    const newElem = new CreativeExtensions_31('CreativeExtensions', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {{skipoffset: string}} attributes
   * @returns {Linear_33} 
   */
  attachLinear(attributes) {
    const newElem = new Linear_33('Linear', this, {"attrs":["skipoffset"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {NonLinearAds_55} 
   */
  attachNonLinearAds() {
    const newElem = new NonLinearAds_55('NonLinearAds', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {{required:("all"|"any"|"none")}} attributes
   * @returns {CompanionAds_64} 
   */
  attachCompanionAds(attributes) {
    const newElem = new CompanionAds_64('CompanionAds', this, {"attrs":["required"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Creatives_28 extends VastElement {
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
   * @returns {Creative_29} 
   */
  attachCreative(attributes) {
    const newElem = new Creative_29('Creative', this, {"attrs":["id","sequence","adId","apiFramework"]} /*: Infos*/, attributes);
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
  /** @description required in Vast 4
   * @param {string} content
   * @param {{version: string}} attributes
   * @returns {AdSystem_8} 
   */
  attachAdSystem(content, attributes) {
    const newElem = new AdSystem_8('AdSystem', this, {"attrs":["version"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 4
   * @param {string} content
   * @param {{version: string}} attributes
   * @returns {InLine_7} 
   */
  addAdSystem(content, attributes) {
    return this.attachAdSystem(content, attributes).and();
  }
  /** @description required in Vast 4
   * @param {string} content
   * @returns {AdTitle_9} 
   */
  attachAdTitle(content) {
    const newElem = new AdTitle_9('AdTitle', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 4
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
  /** 
   * @param {string} content
   * @param {{authority: string}} attributes
   * @returns {Category_11} 
   */
  attachCategory(content, attributes) {
    const newElem = new Category_11('Category', this, {"attrs":["authority"]} /*: Infos*/, content, attributes);
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
   * @returns {Description_12} 
   */
  attachDescription(content) {
    const newElem = new Description_12('Description', this, {} /*: Infos*/, content);
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
   * @returns {Advertiser_13} 
   */
  attachAdvertiser(content) {
    const newElem = new Advertiser_13('Advertiser', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {InLine_7} 
   */
  addAdvertiser(content) {
    return this.attachAdvertiser(content).and();
  }
  /** 
   * @param {string} content
   * @param {{currency: string, model:("CPM"|"CPC"|"CPE"|"CPV")}} attributes
   * @returns {Pricing_14} 
   */
  attachPricing(content, attributes) {
    const newElem = new Pricing_14('Pricing', this, {"attrs":["currency","model"]} /*: Infos*/, content, attributes);
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
   * @returns {Survey_15} 
   */
  attachSurvey(content, attributes) {
    const newElem = new Survey_15('Survey', this, {"attrs":["type"]} /*: Infos*/, content, attributes);
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
   * @returns {Error_16} 
   */
  attachError(content) {
    const newElem = new Error_16('Error', this, {} /*: Infos*/, content);
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
   * @param {{id: string}} attributes
   * @returns {ViewableImpression_17} 
   */
  attachViewableImpression(attributes) {
    const newElem = new ViewableImpression_17('ViewableImpression', this, {"attrs":["id"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {AdVerifications_21} 
   */
  attachAdVerifications() {
    const newElem = new AdVerifications_21('AdVerifications', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {Extensions_26} 
   */
  attachExtensions() {
    const newElem = new Extensions_26('Extensions', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 4
   * @returns {Creatives_28} 
   */
  attachCreatives() {
    const newElem = new Creatives_28('Creatives', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Impression_76 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_75} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class VASTAdTagURI_77 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_75} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdSystem_78 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_75} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Pricing_79 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_75} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Error_80 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_75} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Viewable_82 extends VastElement {
  /**
   * @param {string} n
   * @param {ViewableImpression_81} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NotViewable_83 extends VastElement {
  /**
   * @param {string} n
   * @param {ViewableImpression_81} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ViewUndetermined_84 extends VastElement {
  /**
   * @param {string} n
   * @param {ViewableImpression_81} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ViewableImpression_81 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_75} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @returns {Viewable_82} 
   */
  attachViewable(content) {
    const newElem = new Viewable_82('Viewable', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {ViewableImpression_81} 
   */
  addViewable(content) {
    return this.attachViewable(content).and();
  }
  /** 
   * @param {string} content
   * @returns {NotViewable_83} 
   */
  attachNotViewable(content) {
    const newElem = new NotViewable_83('NotViewable', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {ViewableImpression_81} 
   */
  addNotViewable(content) {
    return this.attachNotViewable(content).and();
  }
  /** 
   * @param {string} content
   * @returns {ViewUndetermined_84} 
   */
  attachViewUndetermined(content) {
    const newElem = new ViewUndetermined_84('ViewUndetermined', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {ViewableImpression_81} 
   */
  addViewUndetermined(content) {
    return this.attachViewUndetermined(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ViewableImpression_87 extends VastElement {
  /**
   * @param {string} n
   * @param {Verification_86} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Verification_86 extends VastElement {
  /**
   * @param {string} n
   * @param {AdVerifications_85} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {ViewableImpression_87} 
   */
  attachViewableImpression(content, attributes) {
    const newElem = new ViewableImpression_87('ViewableImpression', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {Verification_86} 
   */
  addViewableImpression(content, attributes) {
    return this.attachViewableImpression(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdVerifications_85 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_75} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{vendor: string}} attributes
   * @returns {Verification_86} 
   */
  attachVerification(attributes) {
    const newElem = new Verification_86('Verification', this, {"attrs":["vendor"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Extension_89 extends VastElement {
  /**
   * @param {string} n
   * @param {Extensions_88} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Extensions_88 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_75} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {Extension_89} 
   */
  attachExtension(content, attributes) {
    const newElem = new Extension_89('Extension', this, {"attrs":["type"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {Extensions_88} 
   */
  addExtension(content, attributes) {
    return this.attachExtension(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Tracking_94 extends VastElement {
  /**
   * @param {string} n
   * @param {TrackingEvents_93} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class TrackingEvents_93 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_92} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{offset: string, event:("mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"otherAdInteraction"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"acceptInvitationLinear"|"timeSpentViewing"|"progress")}} attributes
   * @returns {Tracking_94} 
   */
  attachTracking(content, attributes) {
    const newElem = new Tracking_94('Tracking', this, {"attrs":["offset","event"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{offset: string, event:("mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"otherAdInteraction"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"acceptInvitationLinear"|"timeSpentViewing"|"progress")}} attributes
   * @returns {TrackingEvents_93} 
   */
  addTracking(content, attributes) {
    return this.attachTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ClickTracking_96 extends VastElement {
  /**
   * @param {string} n
   * @param {VideoClicks_95} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CustomClick_97 extends VastElement {
  /**
   * @param {string} n
   * @param {VideoClicks_95} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class VideoClicks_95 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_92} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {ClickTracking_96} 
   */
  attachClickTracking(content, attributes) {
    const newElem = new ClickTracking_96('ClickTracking', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {VideoClicks_95} 
   */
  addClickTracking(content, attributes) {
    return this.attachClickTracking(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {CustomClick_97} 
   */
  attachCustomClick(content, attributes) {
    const newElem = new CustomClick_97('CustomClick', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {VideoClicks_95} 
   */
  addCustomClick(content, attributes) {
    return this.attachCustomClick(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class StaticResource_100 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_99} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IFrameResource_101 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_99} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class HTMLResource_102 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_99} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IconClickThrough_104 extends VastElement {
  /**
   * @param {string} n
   * @param {IconClicks_103} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IconClickTracking_105 extends VastElement {
  /**
   * @param {string} n
   * @param {IconClicks_103} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IconClicks_103 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_99} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @returns {IconClickThrough_104} 
   */
  attachIconClickThrough(content) {
    const newElem = new IconClickThrough_104('IconClickThrough', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {IconClicks_103} 
   */
  addIconClickThrough(content) {
    return this.attachIconClickThrough(content).and();
  }
  /** 
   * @param {string} content
   * @returns {IconClickTracking_105} 
   */
  attachIconClickTracking(content) {
    const newElem = new IconClickTracking_105('IconClickTracking', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {IconClicks_103} 
   */
  addIconClickTracking(content) {
    return this.attachIconClickTracking(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IconViewTracking_106 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_99} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Icon_99 extends VastElement {
  /**
   * @param {string} n
   * @param {Icons_98} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_100} 
   */
  attachStaticResource(content, attributes) {
    const newElem = new StaticResource_100('StaticResource', this, {"attrs":["creativeType"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {Icon_99} 
   */
  addStaticResource(content, attributes) {
    return this.attachStaticResource(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {IFrameResource_101} 
   */
  attachIFrameResource(content) {
    const newElem = new IFrameResource_101('IFrameResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Icon_99} 
   */
  addIFrameResource(content) {
    return this.attachIFrameResource(content).and();
  }
  /** 
   * @param {string} content
   * @returns {HTMLResource_102} 
   */
  attachHTMLResource(content) {
    const newElem = new HTMLResource_102('HTMLResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Icon_99} 
   */
  addHTMLResource(content) {
    return this.attachHTMLResource(content).and();
  }
  /** 
   * @returns {IconClicks_103} 
   */
  attachIconClicks() {
    const newElem = new IconClicks_103('IconClicks', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {IconViewTracking_106} 
   */
  attachIconViewTracking(content) {
    const newElem = new IconViewTracking_106('IconViewTracking', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Icon_99} 
   */
  addIconViewTracking(content) {
    return this.attachIconViewTracking(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Icons_98 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_92} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{program: string, width: string, height: string, xPosition: string, yPosition: string, duration: string, offset: string, apiFramework: string, pxratio: string}} attributes
   * @returns {Icon_99} 
   */
  attachIcon(attributes) {
    const newElem = new Icon_99('Icon', this, {"attrs":["program","width","height","xPosition","yPosition","duration","offset","apiFramework","pxratio"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class InteractiveCreativeFile_107 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_92} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Linear_92 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_91} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @returns {TrackingEvents_93} 
   */
  attachTrackingEvents() {
    const newElem = new TrackingEvents_93('TrackingEvents', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {VideoClicks_95} 
   */
  attachVideoClicks() {
    const newElem = new VideoClicks_95('VideoClicks', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {Icons_98} 
   */
  attachIcons() {
    const newElem = new Icons_98('Icons', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {InteractiveCreativeFile_107} 
   */
  attachInteractiveCreativeFile(content) {
    const newElem = new InteractiveCreativeFile_107('InteractiveCreativeFile', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Linear_92} 
   */
  addInteractiveCreativeFile(content) {
    return this.attachInteractiveCreativeFile(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinearClickThrough_110 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinear_109} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinearClickTracking_111 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinear_109} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinear_109 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinearAds_108} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @returns {NonLinearClickThrough_110} 
   */
  attachNonLinearClickThrough(content) {
    const newElem = new NonLinearClickThrough_110('NonLinearClickThrough', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {NonLinear_109} 
   */
  addNonLinearClickThrough(content) {
    return this.attachNonLinearClickThrough(content).and();
  }
  /** 
   * @param {string} content
   * @returns {NonLinearClickTracking_111} 
   */
  attachNonLinearClickTracking(content) {
    const newElem = new NonLinearClickTracking_111('NonLinearClickTracking', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {NonLinear_109} 
   */
  addNonLinearClickTracking(content) {
    return this.attachNonLinearClickTracking(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Tracking_113 extends VastElement {
  /**
   * @param {string} n
   * @param {TrackingEvents_112} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class TrackingEvents_112 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinearAds_108} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{event:("mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"otherAdInteraction"|"creativeView"|"acceptInvitation"|"adExpand"|"adCollapse"|"minimize"|"close"|"overlayViewDuration")}} attributes
   * @returns {Tracking_113} 
   */
  attachTracking(content, attributes) {
    const newElem = new Tracking_113('Tracking', this, {"attrs":["event"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{event:("mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"otherAdInteraction"|"creativeView"|"acceptInvitation"|"adExpand"|"adCollapse"|"minimize"|"close"|"overlayViewDuration")}} attributes
   * @returns {TrackingEvents_112} 
   */
  addTracking(content, attributes) {
    return this.attachTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinearAds_108 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_91} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @returns {NonLinear_109} 
   */
  attachNonLinear() {
    const newElem = new NonLinear_109('NonLinear', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {TrackingEvents_112} 
   */
  attachTrackingEvents() {
    const newElem = new TrackingEvents_112('TrackingEvents', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class StaticResource_116 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_115} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IFrameResource_117 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_115} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class HTMLResource_118 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_115} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdParameters_119 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_115} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AltText_120 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_115} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CompanionClickThrough_121 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_115} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CompanionClickTracking_122 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_115} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Tracking_124 extends VastElement {
  /**
   * @param {string} n
   * @param {TrackingEvents_123} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class TrackingEvents_123 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_115} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView")}} attributes
   * @returns {Tracking_124} 
   */
  attachTracking(content, attributes) {
    const newElem = new Tracking_124('Tracking', this, {"attrs":["event"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView")}} attributes
   * @returns {TrackingEvents_123} 
   */
  addTracking(content, attributes) {
    return this.attachTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Companion_115 extends VastElement {
  /**
   * @param {string} n
   * @param {CompanionAds_114} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_116} 
   */
  attachStaticResource(content, attributes) {
    const newElem = new StaticResource_116('StaticResource', this, {"attrs":["creativeType"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {Companion_115} 
   */
  addStaticResource(content, attributes) {
    return this.attachStaticResource(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {IFrameResource_117} 
   */
  attachIFrameResource(content) {
    const newElem = new IFrameResource_117('IFrameResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_115} 
   */
  addIFrameResource(content) {
    return this.attachIFrameResource(content).and();
  }
  /** 
   * @param {string} content
   * @returns {HTMLResource_118} 
   */
  attachHTMLResource(content) {
    const newElem = new HTMLResource_118('HTMLResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_115} 
   */
  addHTMLResource(content) {
    return this.attachHTMLResource(content).and();
  }
  /** 
   * @param {string} content
   * @param {{xmlEncoded: string}} attributes
   * @returns {AdParameters_119} 
   */
  attachAdParameters(content, attributes) {
    const newElem = new AdParameters_119('AdParameters', this, {"attrs":["xmlEncoded"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{xmlEncoded: string}} attributes
   * @returns {Companion_115} 
   */
  addAdParameters(content, attributes) {
    return this.attachAdParameters(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {AltText_120} 
   */
  attachAltText(content) {
    const newElem = new AltText_120('AltText', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_115} 
   */
  addAltText(content) {
    return this.attachAltText(content).and();
  }
  /** 
   * @param {string} content
   * @returns {CompanionClickThrough_121} 
   */
  attachCompanionClickThrough(content) {
    const newElem = new CompanionClickThrough_121('CompanionClickThrough', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_115} 
   */
  addCompanionClickThrough(content) {
    return this.attachCompanionClickThrough(content).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {CompanionClickTracking_122} 
   */
  attachCompanionClickTracking(content, attributes) {
    const newElem = new CompanionClickTracking_122('CompanionClickTracking', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {Companion_115} 
   */
  addCompanionClickTracking(content, attributes) {
    return this.attachCompanionClickTracking(content, attributes).and();
  }
  /** 
   * @returns {TrackingEvents_123} 
   */
  attachTrackingEvents() {
    const newElem = new TrackingEvents_123('TrackingEvents', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CompanionAds_114 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_91} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{id: string, width: string, height: string, assetWidth: string, assetHeight: string, expandedWidth: string, expandedHeight: string, apiFramework: string, adSlotID: string, logoTile: string, logoTitle: string, logoArtist: string, logoURL: string, pxratio: string}} attributes
   * @returns {Companion_115} 
   */
  attachCompanion(attributes) {
    const newElem = new Companion_115('Companion', this, {"attrs":["id","width","height","assetWidth","assetHeight","expandedWidth","expandedHeight","apiFramework","adSlotID","logoTile","logoTitle","logoArtist","logoURL","pxratio"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Creative_91 extends VastElement {
  /**
   * @param {string} n
   * @param {Creatives_90} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @returns {Linear_92} 
   */
  attachLinear() {
    const newElem = new Linear_92('Linear', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {NonLinearAds_108} 
   */
  attachNonLinearAds() {
    const newElem = new NonLinearAds_108('NonLinearAds', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {{required:("all"|"any"|"none")}} attributes
   * @returns {CompanionAds_114} 
   */
  attachCompanionAds(attributes) {
    const newElem = new CompanionAds_114('CompanionAds', this, {"attrs":["required"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Creatives_90 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_75} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{id: string, sequence: string, adId: string}} attributes
   * @returns {Creative_91} 
   */
  attachCreative(attributes) {
    const newElem = new Creative_91('Creative', this, {"attrs":["id","sequence","adId"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Wrapper_75 extends VastElement {
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
   * @returns {Impression_76} 
   */
  attachImpression(content, attributes) {
    const newElem = new Impression_76('Impression', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {Wrapper_75} 
   */
  addImpression(content, attributes) {
    return this.attachImpression(content, attributes).and();
  }
  /** @description required in Vast 4
   * @param {string} content
   * @returns {VASTAdTagURI_77} 
   */
  attachVASTAdTagURI(content) {
    const newElem = new VASTAdTagURI_77('VASTAdTagURI', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 4
   * @param {string} content
   * @returns {Wrapper_75} 
   */
  addVASTAdTagURI(content) {
    return this.attachVASTAdTagURI(content).and();
  }
  /** @description required in Vast 4
   * @param {string} content
   * @param {{version: string}} attributes
   * @returns {AdSystem_78} 
   */
  attachAdSystem(content, attributes) {
    const newElem = new AdSystem_78('AdSystem', this, {"attrs":["version"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 4
   * @param {string} content
   * @param {{version: string}} attributes
   * @returns {Wrapper_75} 
   */
  addAdSystem(content, attributes) {
    return this.attachAdSystem(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @param {{currency: string, model:("CPM"|"CPC"|"CPE"|"CPV")}} attributes
   * @returns {Pricing_79} 
   */
  attachPricing(content, attributes) {
    const newElem = new Pricing_79('Pricing', this, {"attrs":["currency","model"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{currency: string, model:("CPM"|"CPC"|"CPE"|"CPV")}} attributes
   * @returns {Wrapper_75} 
   */
  addPricing(content, attributes) {
    return this.attachPricing(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {Error_80} 
   */
  attachError(content) {
    const newElem = new Error_80('Error', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Wrapper_75} 
   */
  addError(content) {
    return this.attachError(content).and();
  }
  /** 
   * @param {{id: string}} attributes
   * @returns {ViewableImpression_81} 
   */
  attachViewableImpression(attributes) {
    const newElem = new ViewableImpression_81('ViewableImpression', this, {"attrs":["id"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {AdVerifications_85} 
   */
  attachAdVerifications() {
    const newElem = new AdVerifications_85('AdVerifications', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {Extensions_88} 
   */
  attachExtensions() {
    const newElem = new Extensions_88('Extensions', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {Creatives_90} 
   */
  attachCreatives() {
    const newElem = new Creatives_90('Creatives', this, {} /*: Infos*/ );
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
   * @returns {Wrapper_75} 
   */
  attachWrapper(attributes) {
    const newElem = new Wrapper_75('Wrapper', this, {"attrs":["followAdditonalWrappers","allowMultipleAds","fallbackOnNoAd"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class VAST_4 extends VastElement {
  /**
   * @param {string} n
   * @param {apiv4} p
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
   * @param {{id: string, sequence: string, conditionalAd: string}} attributes
   * @returns {Ad_6} 
   */
  attachAd(attributes) {
    const newElem = new Ad_6('Ad', this, {"attrs":["id","sequence","conditionalAd"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class apiv4 extends VastElement {
  /**
   * @param {string} n
   * @param {apiv4} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{version:("4.0")}} attributes
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


const validator = {"only":{"VAST":{"alo":{"Ad":{"uniq":{"InLine":{"required":{"AdSystem":{},"AdTitle":{},"Creatives":{"alo":{"Creative":{"required":{"UniversalAdId":{"attrsRequired":{"idRegistry":null,"idValue":null}}},"uniq":{"Linear":{"required":{"Duration":{},"MediaFiles":{"alo":{"MediaFile":{"attrsRequired":{"delivery":["progressive","streaming"],"type":null,"width":null,"height":null}}},"follow":{"Mezzanine":{},"InteractiveCreativeFile":{}}}},"follow":{"AdParameters":{},"VideoClicks":{"follow":{"ClickThrough":{},"ClickTracking":{},"CustomClick":{}}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","otherAdInteraction","start","firstQuartile","midpoint","thirdQuartile","complete","acceptInvitationLinear","timeSpentViewing","progress"]}}}},"Icons":{"alo":{"Icon":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"IconClicks":{"follow":{"IconClickThrough":{},"IconClickTracking":{}}},"IconViewTracking":{}}}}}}},"NonLinearAds":{"follow":{"NonLinear":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"NonLinearClickThrough":{},"NonLinearClickTracking":{}},"attrsRequired":{"width":null,"height":null}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","otherAdInteraction","creativeView","acceptInvitation","adExpand","adCollapse","minimize","close","overlayViewDuration"]}}}}}},"CompanionAds":{"follow":{"Companion":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"AdParameters":{},"AltText":{},"CompanionClickThrough":{},"CompanionClickTracking":{},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView"]}}}}},"attrsRequired":{"width":null,"height":null}}},"attrsRequired":{"required":["all","any","none"]}}},"follow":{"CreativeExtensions":{"follow":{"CreativeExtension":{}}}}}}}},"alo":{"Impression":{}},"follow":{"Category":{"attrsRequired":{"authority":null}},"Description":{},"Advertiser":{},"Pricing":{"attrsRequired":{"currency":null,"model":["CPM","CPC","CPE","CPV"]}},"Survey":{},"Error":{},"ViewableImpression":{"follow":{"Viewable":{},"NotViewable":{},"ViewUndetermined":{}}},"AdVerifications":{"follow":{"Verification":{"follow":{"JavaScriptResource":{},"FlashResource":{},"ViewableImpression":{}}}}},"Extensions":{"required":{"Extension":{}}}}},"Wrapper":{"required":{"VASTAdTagURI":{},"AdSystem":{}},"alo":{"Impression":{}},"follow":{"Pricing":{"attrsRequired":{"currency":null,"model":["CPM","CPC","CPE","CPV"]}},"Error":{},"ViewableImpression":{"follow":{"Viewable":{},"NotViewable":{},"ViewUndetermined":{}}},"AdVerifications":{"follow":{"Verification":{"follow":{"ViewableImpression":{}}}}},"Extensions":{"follow":{"Extension":{}}},"Creatives":{"follow":{"Creative":{"uniq":{"Linear":{"follow":{"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","otherAdInteraction","start","firstQuartile","midpoint","thirdQuartile","complete","acceptInvitationLinear","timeSpentViewing","progress"]}}}},"VideoClicks":{"follow":{"ClickTracking":{},"CustomClick":{}}},"Icons":{"alo":{"Icon":{"follow":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{},"IconClicks":{"follow":{"IconClickThrough":{},"IconClickTracking":{}}},"IconViewTracking":{}}}}},"InteractiveCreativeFile":{}}},"NonLinearAds":{"follow":{"NonLinear":{"follow":{"NonLinearClickThrough":{},"NonLinearClickTracking":{}}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","otherAdInteraction","creativeView","acceptInvitation","adExpand","adCollapse","minimize","close","overlayViewDuration"]}}}}}},"CompanionAds":{"follow":{"Companion":{"follow":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{},"AdParameters":{},"AltText":{},"CompanionClickThrough":{},"CompanionClickTracking":{},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView"]}}}}},"attrsRequired":{"width":null,"height":null}}},"attrsRequired":{"required":["all","any","none"]}}}}}}}}}}},"follow":{"Error":{}},"attrsRequired":{"version":["4.0"]}}}};

module.exports = {
  apiv4,
  validator
};
