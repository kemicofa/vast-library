# VAST4_1 API Documentation
<a id="VastElement" name="VastElement"></a>
## Class VastElement

_no specific methods see [VastElement](#VastElement)_
<a id="apiv4_1" name="apiv4_1"></a>
## Class apiv4 _extends_ VastElement

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "VAST" child to current "apiv4". Return "VAST" to move on child level.
attachVAST(attributes: {
    version: "4.1"
  }): VAST
```

↘ _go to [VAST](#VAST_4)_

<a id="VAST_4" name="VAST_4"></a>
## Class VAST _extends_ VastElement

This child once is the only one allowed at this level below apiv4 in VAST4_1 spec

child of [apiv4](#apiv4_1) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Error" child to current "VAST". Return "VAST" to stay on same current level.
addError(content: string): VAST
```

↘ _go to [VAST](#VAST_4)_ _(current class)_

```js
// Attach a "Error" child to current "VAST". Return "Error" to move on child level.
attachError(content: string): Error
```

↘ _go to [Error](#Error_5)_ _(last level element)_

```js
// Attach a "Ad" child to current "VAST". Return "Ad" to move on child level.
attachAd(attributes: {
    id?: string, 
    sequence?: string, 
    conditionalAd?: string, 
    adType?: string
  }): Ad
```

↘ _go to [Ad](#Ad_6)_

<a id="Error_5" name="Error_5"></a>
## Class Error _extends_ VastElement

child of [VAST](#VAST_4) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Ad_6" name="Ad_6"></a>
## Class Ad _extends_ VastElement

At last one of this child and/or others are required below VAST in VAST4_1 spec

child of [VAST](#VAST_4) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "InLine" child to current "Ad". Return "InLine" to move on child level.
attachInLine(): InLine
```

↘ _go to [InLine](#InLine_7)_

```js
// Attach a "Wrapper" child to current "Ad". Return "Wrapper" to move on child level.
attachWrapper(attributes: {
    followAdditonalWrappers?: string, 
    allowMultipleAds?: string, 
    fallbackOnNoAd?: string
  }): Wrapper
```

↘ _go to [Wrapper](#Wrapper_78)_

<a id="InLine_7" name="InLine_7"></a>
## Class InLine _extends_ VastElement

An uniq one of this child or others at same level are required below Ad in VAST4_1 spec

child of [Ad](#Ad_6) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "AdSystem" child to current "InLine". Return "InLine" to stay on same current level.
addAdSystem(content: string, attributes: {
    version?: string
  }): InLine
```

↘ _go to [InLine](#InLine_7)_ _(current class)_

```js
// Attach a "AdSystem" child to current "InLine". Return "AdSystem" to move on child level.
attachAdSystem(content: string, attributes: {
    version?: string
  }): AdSystem
```

↘ _go to [AdSystem](#AdSystem_8)_ _(last level element)_

```js
// Add a "AdTitle" child to current "InLine". Return "InLine" to stay on same current level.
addAdTitle(content: string): InLine
```

↘ _go to [InLine](#InLine_7)_ _(current class)_

```js
// Attach a "AdTitle" child to current "InLine". Return "AdTitle" to move on child level.
attachAdTitle(content: string): AdTitle
```

↘ _go to [AdTitle](#AdTitle_9)_ _(last level element)_

```js
// Add a "Impression" child to current "InLine". Return "InLine" to stay on same current level.
addImpression(content: string, attributes: {
    id?: string
  }): InLine
```

↘ _go to [InLine](#InLine_7)_ _(current class)_

```js
// Attach a "Impression" child to current "InLine". Return "Impression" to move on child level.
attachImpression(content: string, attributes: {
    id?: string
  }): Impression
```

↘ _go to [Impression](#Impression_10)_ _(last level element)_

```js
// Add a "AdServingID" child to current "InLine". Return "InLine" to stay on same current level.
addAdServingID(content: string): InLine
```

↘ _go to [InLine](#InLine_7)_ _(current class)_

```js
// Attach a "AdServingID" child to current "InLine". Return "AdServingID" to move on child level.
attachAdServingID(content: string): AdServingID
```

↘ _go to [AdServingID](#AdServingID_11)_ _(last level element)_

```js
// Add a "Category" child to current "InLine". Return "InLine" to stay on same current level.
addCategory(content: string, attributes: {
    authority: string
  }): InLine
```

↘ _go to [InLine](#InLine_7)_ _(current class)_

```js
// Attach a "Category" child to current "InLine". Return "Category" to move on child level.
attachCategory(content: string, attributes: {
    authority: string
  }): Category
```

↘ _go to [Category](#Category_12)_ _(last level element)_

```js
// Add a "Description" child to current "InLine". Return "InLine" to stay on same current level.
addDescription(content: string): InLine
```

↘ _go to [InLine](#InLine_7)_ _(current class)_

```js
// Attach a "Description" child to current "InLine". Return "Description" to move on child level.
attachDescription(content: string): Description
```

↘ _go to [Description](#Description_13)_ _(last level element)_

```js
// Add a "Advertiser" child to current "InLine". Return "InLine" to stay on same current level.
addAdvertiser(content: string, attributes: {
    id?: string
  }): InLine
```

↘ _go to [InLine](#InLine_7)_ _(current class)_

```js
// Attach a "Advertiser" child to current "InLine". Return "Advertiser" to move on child level.
attachAdvertiser(content: string, attributes: {
    id?: string
  }): Advertiser
```

↘ _go to [Advertiser](#Advertiser_14)_ _(last level element)_

```js
// Add a "Pricing" child to current "InLine". Return "InLine" to stay on same current level.
addPricing(content: string, attributes: {
    currency: string, 
    model: "CPM"|"CPC"|"CPE"|"CPV"
  }): InLine
```

↘ _go to [InLine](#InLine_7)_ _(current class)_

```js
// Attach a "Pricing" child to current "InLine". Return "Pricing" to move on child level.
attachPricing(content: string, attributes: {
    currency: string, 
    model: "CPM"|"CPC"|"CPE"|"CPV"
  }): Pricing
```

↘ _go to [Pricing](#Pricing_15)_ _(last level element)_

```js
// Add a "Survey" child to current "InLine". Return "InLine" to stay on same current level.
addSurvey(content: string, attributes: {
    type?: string
  }): InLine
```

↘ _go to [InLine](#InLine_7)_ _(current class)_

```js
// Attach a "Survey" child to current "InLine". Return "Survey" to move on child level.
attachSurvey(content: string, attributes: {
    type?: string
  }): Survey
```

↘ _go to [Survey](#Survey_16)_ _(last level element)_

```js
// Add a "Error" child to current "InLine". Return "InLine" to stay on same current level.
addError(content: string): InLine
```

↘ _go to [InLine](#InLine_7)_ _(current class)_

```js
// Attach a "Error" child to current "InLine". Return "Error" to move on child level.
attachError(content: string): Error
```

↘ _go to [Error](#Error_17)_ _(last level element)_

```js
// Add a "Expires" child to current "InLine". Return "InLine" to stay on same current level.
addExpires(content: string): InLine
```

↘ _go to [InLine](#InLine_7)_ _(current class)_

```js
// Attach a "Expires" child to current "InLine". Return "Expires" to move on child level.
attachExpires(content: string): Expires
```

↘ _go to [Expires](#Expires_18)_ _(last level element)_

```js
// Attach a "ViewableImpression" child to current "InLine". Return "ViewableImpression" to move on child level.
attachViewableImpression(attributes: {
    id?: string
  }): ViewableImpression
```

↘ _go to [ViewableImpression](#ViewableImpression_19)_

```js
// Attach a "AdVerifications" child to current "InLine". Return "AdVerifications" to move on child level.
attachAdVerifications(): AdVerifications
```

↘ _go to [AdVerifications](#AdVerifications_23)_

```js
// Attach a "Extensions" child to current "InLine". Return "Extensions" to move on child level.
attachExtensions(): Extensions
```

↘ _go to [Extensions](#Extensions_30)_

```js
// Attach a "Creatives" child to current "InLine". Return "Creatives" to move on child level.
attachCreatives(): Creatives
```

↘ _go to [Creatives](#Creatives_32)_

<a id="AdSystem_8" name="AdSystem_8"></a>
## Class AdSystem _extends_ VastElement

This child is required below InLine in VAST4_1 spec

child of [InLine](#InLine_7) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="AdTitle_9" name="AdTitle_9"></a>
## Class AdTitle _extends_ VastElement

This child is required below InLine in VAST4_1 spec

child of [InLine](#InLine_7) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Impression_10" name="Impression_10"></a>
## Class Impression _extends_ VastElement

At last one of this child and/or others are required below InLine in VAST4_1 spec

child of [InLine](#InLine_7) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="AdServingID_11" name="AdServingID_11"></a>
## Class AdServingID _extends_ VastElement

This child is required below InLine in VAST4_1 spec

child of [InLine](#InLine_7) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Category_12" name="Category_12"></a>
## Class Category _extends_ VastElement

child of [InLine](#InLine_7) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Description_13" name="Description_13"></a>
## Class Description _extends_ VastElement

child of [InLine](#InLine_7) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Advertiser_14" name="Advertiser_14"></a>
## Class Advertiser _extends_ VastElement

child of [InLine](#InLine_7) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Pricing_15" name="Pricing_15"></a>
## Class Pricing _extends_ VastElement

child of [InLine](#InLine_7) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Survey_16" name="Survey_16"></a>
## Class Survey _extends_ VastElement

child of [InLine](#InLine_7) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Error_17" name="Error_17"></a>
## Class Error _extends_ VastElement

child of [InLine](#InLine_7) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Expires_18" name="Expires_18"></a>
## Class Expires _extends_ VastElement

child of [InLine](#InLine_7) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="ViewableImpression_19" name="ViewableImpression_19"></a>
## Class ViewableImpression _extends_ VastElement

child of [InLine](#InLine_7) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Viewable" child to current "ViewableImpression". Return "ViewableImpression" to stay on same current level.
addViewable(content: string): ViewableImpression
```

↘ _go to [ViewableImpression](#ViewableImpression_19)_ _(current class)_

```js
// Attach a "Viewable" child to current "ViewableImpression". Return "Viewable" to move on child level.
attachViewable(content: string): Viewable
```

↘ _go to [Viewable](#Viewable_20)_ _(last level element)_

```js
// Add a "NotViewable" child to current "ViewableImpression". Return "ViewableImpression" to stay on same current level.
addNotViewable(content: string): ViewableImpression
```

↘ _go to [ViewableImpression](#ViewableImpression_19)_ _(current class)_

```js
// Attach a "NotViewable" child to current "ViewableImpression". Return "NotViewable" to move on child level.
attachNotViewable(content: string): NotViewable
```

↘ _go to [NotViewable](#NotViewable_21)_ _(last level element)_

```js
// Add a "ViewUndetermined" child to current "ViewableImpression". Return "ViewableImpression" to stay on same current level.
addViewUndetermined(content: string): ViewableImpression
```

↘ _go to [ViewableImpression](#ViewableImpression_19)_ _(current class)_

```js
// Attach a "ViewUndetermined" child to current "ViewableImpression". Return "ViewUndetermined" to move on child level.
attachViewUndetermined(content: string): ViewUndetermined
```

↘ _go to [ViewUndetermined](#ViewUndetermined_22)_ _(last level element)_

<a id="Viewable_20" name="Viewable_20"></a>
## Class Viewable _extends_ VastElement

child of [ViewableImpression](#ViewableImpression_19) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="NotViewable_21" name="NotViewable_21"></a>
## Class NotViewable _extends_ VastElement

child of [ViewableImpression](#ViewableImpression_19) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="ViewUndetermined_22" name="ViewUndetermined_22"></a>
## Class ViewUndetermined _extends_ VastElement

child of [ViewableImpression](#ViewableImpression_19) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="AdVerifications_23" name="AdVerifications_23"></a>
## Class AdVerifications _extends_ VastElement

child of [InLine](#InLine_7) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "Verification" child to current "AdVerifications". Return "Verification" to move on child level.
attachVerification(attributes: {
    vendor: string
  }): Verification
```

↘ _go to [Verification](#Verification_24)_

<a id="Verification_24" name="Verification_24"></a>
## Class Verification _extends_ VastElement

child of [AdVerifications](#AdVerifications_23) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "JavaScriptResource" child to current "Verification". Return "Verification" to stay on same current level.
addJavaScriptResource(content: string, attributes: {
    apiFramework: string, 
    browserOptional: string
  }): Verification
```

↘ _go to [Verification](#Verification_24)_ _(current class)_

```js
// Attach a "JavaScriptResource" child to current "Verification". Return "JavaScriptResource" to move on child level.
attachJavaScriptResource(content: string, attributes: {
    apiFramework: string, 
    browserOptional: string
  }): JavaScriptResource
```

↘ _go to [JavaScriptResource](#JavaScriptResource_25)_ _(last level element)_

```js
// Add a "ExecutableResource" child to current "Verification". Return "Verification" to stay on same current level.
addExecutableResource(content: string, attributes: {
    apiFramework: string, 
    language?: string, 
    type?: string
  }): Verification
```

↘ _go to [Verification](#Verification_24)_ _(current class)_

```js
// Attach a "ExecutableResource" child to current "Verification". Return "ExecutableResource" to move on child level.
attachExecutableResource(content: string, attributes: {
    apiFramework: string, 
    language?: string, 
    type?: string
  }): ExecutableResource
```

↘ _go to [ExecutableResource](#ExecutableResource_26)_ _(last level element)_

```js
// Attach a "TrackingEvents" child to current "Verification". Return "TrackingEvents" to move on child level.
attachTrackingEvents(): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_27)_

```js
// Add a "VerificationParameters" child to current "Verification". Return "Verification" to stay on same current level.
addVerificationParameters(content: string): Verification
```

↘ _go to [Verification](#Verification_24)_ _(current class)_

```js
// Attach a "VerificationParameters" child to current "Verification". Return "VerificationParameters" to move on child level.
attachVerificationParameters(content: string): VerificationParameters
```

↘ _go to [VerificationParameters](#VerificationParameters_29)_ _(last level element)_

<a id="JavaScriptResource_25" name="JavaScriptResource_25"></a>
## Class JavaScriptResource _extends_ VastElement

child of [Verification](#Verification_24) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="ExecutableResource_26" name="ExecutableResource_26"></a>
## Class ExecutableResource _extends_ VastElement

child of [Verification](#Verification_24) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="TrackingEvents_27" name="TrackingEvents_27"></a>
## Class TrackingEvents _extends_ VastElement

child of [Verification](#Verification_24) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Tracking" child to current "TrackingEvents". Return "TrackingEvents" to stay on same current level.
addTracking(content: string, attributes: {
    offset?: string, 
    event: "verificationNotExecuted"
  }): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_27)_ _(current class)_

```js
// Attach a "Tracking" child to current "TrackingEvents". Return "Tracking" to move on child level.
attachTracking(content: string, attributes: {
    offset?: string, 
    event: "verificationNotExecuted"
  }): Tracking
```

↘ _go to [Tracking](#Tracking_28)_ _(last level element)_

<a id="Tracking_28" name="Tracking_28"></a>
## Class Tracking _extends_ VastElement

child of [TrackingEvents](#TrackingEvents_27) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="VerificationParameters_29" name="VerificationParameters_29"></a>
## Class VerificationParameters _extends_ VastElement

child of [Verification](#Verification_24) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Extensions_30" name="Extensions_30"></a>
## Class Extensions _extends_ VastElement

child of [InLine](#InLine_7) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Extension" child to current "Extensions". Return "Extensions" to stay on same current level.
addExtension(content: string, attributes: {
    type?: string
  }): Extensions
```

↘ _go to [Extensions](#Extensions_30)_ _(current class)_

```js
// Attach a "Extension" child to current "Extensions". Return "Extension" to move on child level.
attachExtension(content: string, attributes: {
    type?: string
  }): Extension
```

↘ _go to [Extension](#Extension_31)_ _(last level element)_

<a id="Extension_31" name="Extension_31"></a>
## Class Extension _extends_ VastElement

This child is required below Extensions in VAST4_1 spec

child of [Extensions](#Extensions_30) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Creatives_32" name="Creatives_32"></a>
## Class Creatives _extends_ VastElement

This child is required below InLine in VAST4_1 spec

child of [InLine](#InLine_7) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "Creative" child to current "Creatives". Return "Creative" to move on child level.
attachCreative(attributes: {
    id?: string, 
    sequence?: string, 
    adId?: string, 
    apiFramework?: string
  }): Creative
```

↘ _go to [Creative](#Creative_33)_

<a id="Creative_33" name="Creative_33"></a>
## Class Creative _extends_ VastElement

At last one of this child and/or others are required below Creatives in VAST4_1 spec

child of [Creatives](#Creatives_32) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "UniversalAdId" child to current "Creative". Return "Creative" to stay on same current level.
addUniversalAdId(content: string, attributes: {
    idRegistry: string, 
    idValue?: string
  }): Creative
```

↘ _go to [Creative](#Creative_33)_ _(current class)_

```js
// Attach a "UniversalAdId" child to current "Creative". Return "UniversalAdId" to move on child level.
attachUniversalAdId(content: string, attributes: {
    idRegistry: string, 
    idValue?: string
  }): UniversalAdId
```

↘ _go to [UniversalAdId](#UniversalAdId_34)_ _(last level element)_

```js
// Attach a "CreativeExtensions" child to current "Creative". Return "CreativeExtensions" to move on child level.
attachCreativeExtensions(): CreativeExtensions
```

↘ _go to [CreativeExtensions](#CreativeExtensions_35)_

```js
// Attach a "Linear" child to current "Creative". Return "Linear" to move on child level.
attachLinear(attributes: {
    skipoffset?: string
  }): Linear
```

↘ _go to [Linear](#Linear_37)_

```js
// Attach a "NonLinearAds" child to current "Creative". Return "NonLinearAds" to move on child level.
attachNonLinearAds(): NonLinearAds
```

↘ _go to [NonLinearAds](#NonLinearAds_61)_

```js
// Attach a "CompanionAds" child to current "Creative". Return "CompanionAds" to move on child level.
attachCompanionAds(attributes: {
    required: "all"|"any"|"none"
  }): CompanionAds
```

↘ _go to [CompanionAds](#CompanionAds_67)_

<a id="UniversalAdId_34" name="UniversalAdId_34"></a>
## Class UniversalAdId _extends_ VastElement

This child is required below Creative in VAST4_1 spec

child of [Creative](#Creative_33) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="CreativeExtensions_35" name="CreativeExtensions_35"></a>
## Class CreativeExtensions _extends_ VastElement

child of [Creative](#Creative_33) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "CreativeExtension" child to current "CreativeExtensions". Return "CreativeExtensions" to stay on same current level.
addCreativeExtension(content: string, attributes: {
    type?: string
  }): CreativeExtensions
```

↘ _go to [CreativeExtensions](#CreativeExtensions_35)_ _(current class)_

```js
// Attach a "CreativeExtension" child to current "CreativeExtensions". Return "CreativeExtension" to move on child level.
attachCreativeExtension(content: string, attributes: {
    type?: string
  }): CreativeExtension
```

↘ _go to [CreativeExtension](#CreativeExtension_36)_ _(last level element)_

<a id="CreativeExtension_36" name="CreativeExtension_36"></a>
## Class CreativeExtension _extends_ VastElement

child of [CreativeExtensions](#CreativeExtensions_35) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Linear_37" name="Linear_37"></a>
## Class Linear _extends_ VastElement

An uniq one of this child or others at same level are required below Creative in VAST4_1 spec

child of [Creative](#Creative_33) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Duration" child to current "Linear". Return "Linear" to stay on same current level.
addDuration(content: string): Linear
```

↘ _go to [Linear](#Linear_37)_ _(current class)_

```js
// Attach a "Duration" child to current "Linear". Return "Duration" to move on child level.
attachDuration(content: string): Duration
```

↘ _go to [Duration](#Duration_38)_ _(last level element)_

```js
// Add a "AdParameters" child to current "Linear". Return "Linear" to stay on same current level.
addAdParameters(content: string, attributes: {
    xmlEncoded?: string
  }): Linear
```

↘ _go to [Linear](#Linear_37)_ _(current class)_

```js
// Attach a "AdParameters" child to current "Linear". Return "AdParameters" to move on child level.
attachAdParameters(content: string, attributes: {
    xmlEncoded?: string
  }): AdParameters
```

↘ _go to [AdParameters](#AdParameters_39)_ _(last level element)_

```js
// Attach a "MediaFiles" child to current "Linear". Return "MediaFiles" to move on child level.
attachMediaFiles(): MediaFiles
```

↘ _go to [MediaFiles](#MediaFiles_40)_

```js
// Attach a "VideoClicks" child to current "Linear". Return "VideoClicks" to move on child level.
attachVideoClicks(): VideoClicks
```

↘ _go to [VideoClicks](#VideoClicks_46)_

```js
// Attach a "TrackingEvents" child to current "Linear". Return "TrackingEvents" to move on child level.
attachTrackingEvents(): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_50)_

```js
// Attach a "Icons" child to current "Linear". Return "Icons" to move on child level.
attachIcons(): Icons
```

↘ _go to [Icons](#Icons_52)_

<a id="Duration_38" name="Duration_38"></a>
## Class Duration _extends_ VastElement

This child is required below Linear in VAST4_1 spec

child of [Linear](#Linear_37) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="AdParameters_39" name="AdParameters_39"></a>
## Class AdParameters _extends_ VastElement

child of [Linear](#Linear_37) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="MediaFiles_40" name="MediaFiles_40"></a>
## Class MediaFiles _extends_ VastElement

This child is required below Linear in VAST4_1 spec

child of [Linear](#Linear_37) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Mezzanine" child to current "MediaFiles". Return "MediaFiles" to stay on same current level.
addMezzanine(content: string, attributes: {
    delivery: "progressive"|"streaming", 
    type: string, 
    width: string, 
    height: string, 
    codec?: string, 
    id?: string, 
    fileSize?: string, 
    mediaType?: string
  }): MediaFiles
```

↘ _go to [MediaFiles](#MediaFiles_40)_ _(current class)_

```js
// Attach a "Mezzanine" child to current "MediaFiles". Return "Mezzanine" to move on child level.
attachMezzanine(content: string, attributes: {
    delivery: "progressive"|"streaming", 
    type: string, 
    width: string, 
    height: string, 
    codec?: string, 
    id?: string, 
    fileSize?: string, 
    mediaType?: string
  }): Mezzanine
```

↘ _go to [Mezzanine](#Mezzanine_41)_ _(last level element)_

```js
// Add a "MediaFile" child to current "MediaFiles". Return "MediaFiles" to stay on same current level.
addMediaFile(content: string, attributes: {
    delivery: "progressive"|"streaming", 
    type: string, 
    width: string, 
    height: string, 
    codec?: string, 
    id?: string, 
    bitrate?: string, 
    minBitrate?: string, 
    maxBitrate?: string, 
    scalable?: string, 
    mantainAspectRatio?: string, 
    apiFramework?: string, 
    fileSize?: string, 
    mediaType?: string
  }): MediaFiles
```

↘ _go to [MediaFiles](#MediaFiles_40)_ _(current class)_

```js
// Attach a "MediaFile" child to current "MediaFiles". Return "MediaFile" to move on child level.
attachMediaFile(content: string, attributes: {
    delivery: "progressive"|"streaming", 
    type: string, 
    width: string, 
    height: string, 
    codec?: string, 
    id?: string, 
    bitrate?: string, 
    minBitrate?: string, 
    maxBitrate?: string, 
    scalable?: string, 
    mantainAspectRatio?: string, 
    apiFramework?: string, 
    fileSize?: string, 
    mediaType?: string
  }): MediaFile
```

↘ _go to [MediaFile](#MediaFile_42)_ _(last level element)_

```js
// Add a "InteractiveCreativeFile" child to current "MediaFiles". Return "MediaFiles" to stay on same current level.
addInteractiveCreativeFile(content: string, attributes: {
    type?: string, 
    apiFramework?: string, 
    variableDuration?: string
  }): MediaFiles
```

↘ _go to [MediaFiles](#MediaFiles_40)_ _(current class)_

```js
// Attach a "InteractiveCreativeFile" child to current "MediaFiles". Return "InteractiveCreativeFile" to move on child level.
attachInteractiveCreativeFile(content: string, attributes: {
    type?: string, 
    apiFramework?: string, 
    variableDuration?: string
  }): InteractiveCreativeFile
```

↘ _go to [InteractiveCreativeFile](#InteractiveCreativeFile_43)_ _(last level element)_

```js
// Attach a "ClosedCaptionFiles" child to current "MediaFiles". Return "ClosedCaptionFiles" to move on child level.
attachClosedCaptionFiles(): ClosedCaptionFiles
```

↘ _go to [ClosedCaptionFiles](#ClosedCaptionFiles_44)_

<a id="Mezzanine_41" name="Mezzanine_41"></a>
## Class Mezzanine _extends_ VastElement

child of [MediaFiles](#MediaFiles_40) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="MediaFile_42" name="MediaFile_42"></a>
## Class MediaFile _extends_ VastElement

At last one of this child and/or others are required below MediaFiles in VAST4_1 spec

child of [MediaFiles](#MediaFiles_40) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="InteractiveCreativeFile_43" name="InteractiveCreativeFile_43"></a>
## Class InteractiveCreativeFile _extends_ VastElement

child of [MediaFiles](#MediaFiles_40) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="ClosedCaptionFiles_44" name="ClosedCaptionFiles_44"></a>
## Class ClosedCaptionFiles _extends_ VastElement

child of [MediaFiles](#MediaFiles_40) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "ClosedCaptionFile" child to current "ClosedCaptionFiles". Return "ClosedCaptionFiles" to stay on same current level.
addClosedCaptionFile(content: string, attributes: {
    type?: string, 
    language?: string
  }): ClosedCaptionFiles
```

↘ _go to [ClosedCaptionFiles](#ClosedCaptionFiles_44)_ _(current class)_

```js
// Attach a "ClosedCaptionFile" child to current "ClosedCaptionFiles". Return "ClosedCaptionFile" to move on child level.
attachClosedCaptionFile(content: string, attributes: {
    type?: string, 
    language?: string
  }): ClosedCaptionFile
```

↘ _go to [ClosedCaptionFile](#ClosedCaptionFile_45)_ _(last level element)_

<a id="ClosedCaptionFile_45" name="ClosedCaptionFile_45"></a>
## Class ClosedCaptionFile _extends_ VastElement

child of [ClosedCaptionFiles](#ClosedCaptionFiles_44) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="VideoClicks_46" name="VideoClicks_46"></a>
## Class VideoClicks _extends_ VastElement

child of [Linear](#Linear_37) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "ClickThrough" child to current "VideoClicks". Return "VideoClicks" to stay on same current level.
addClickThrough(content: string, attributes: {
    id?: string
  }): VideoClicks
```

↘ _go to [VideoClicks](#VideoClicks_46)_ _(current class)_

```js
// Attach a "ClickThrough" child to current "VideoClicks". Return "ClickThrough" to move on child level.
attachClickThrough(content: string, attributes: {
    id?: string
  }): ClickThrough
```

↘ _go to [ClickThrough](#ClickThrough_47)_ _(last level element)_

```js
// Add a "ClickTracking" child to current "VideoClicks". Return "VideoClicks" to stay on same current level.
addClickTracking(content: string, attributes: {
    id?: string
  }): VideoClicks
```

↘ _go to [VideoClicks](#VideoClicks_46)_ _(current class)_

```js
// Attach a "ClickTracking" child to current "VideoClicks". Return "ClickTracking" to move on child level.
attachClickTracking(content: string, attributes: {
    id?: string
  }): ClickTracking
```

↘ _go to [ClickTracking](#ClickTracking_48)_ _(last level element)_

```js
// Add a "CustomClick" child to current "VideoClicks". Return "VideoClicks" to stay on same current level.
addCustomClick(content: string, attributes: {
    id?: string
  }): VideoClicks
```

↘ _go to [VideoClicks](#VideoClicks_46)_ _(current class)_

```js
// Attach a "CustomClick" child to current "VideoClicks". Return "CustomClick" to move on child level.
attachCustomClick(content: string, attributes: {
    id?: string
  }): CustomClick
```

↘ _go to [CustomClick](#CustomClick_49)_ _(last level element)_

<a id="ClickThrough_47" name="ClickThrough_47"></a>
## Class ClickThrough _extends_ VastElement

child of [VideoClicks](#VideoClicks_46) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="ClickTracking_48" name="ClickTracking_48"></a>
## Class ClickTracking _extends_ VastElement

child of [VideoClicks](#VideoClicks_46) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="CustomClick_49" name="CustomClick_49"></a>
## Class CustomClick _extends_ VastElement

child of [VideoClicks](#VideoClicks_46) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="TrackingEvents_50" name="TrackingEvents_50"></a>
## Class TrackingEvents _extends_ VastElement

child of [Linear](#Linear_37) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Tracking" child to current "TrackingEvents". Return "TrackingEvents" to stay on same current level.
addTracking(content: string, attributes: {
    offset?: string, 
    event: "loaded"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"progress"|"closeLinear"|"otherAdInteraction"|"mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"notUsed"
  }): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_50)_ _(current class)_

```js
// Attach a "Tracking" child to current "TrackingEvents". Return "Tracking" to move on child level.
attachTracking(content: string, attributes: {
    offset?: string, 
    event: "loaded"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"progress"|"closeLinear"|"otherAdInteraction"|"mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"notUsed"
  }): Tracking
```

↘ _go to [Tracking](#Tracking_51)_ _(last level element)_

<a id="Tracking_51" name="Tracking_51"></a>
## Class Tracking _extends_ VastElement

child of [TrackingEvents](#TrackingEvents_50) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Icons_52" name="Icons_52"></a>
## Class Icons _extends_ VastElement

child of [Linear](#Linear_37) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "Icon" child to current "Icons". Return "Icon" to move on child level.
attachIcon(attributes: {
    program?: string, 
    width?: string, 
    height?: string, 
    xPosition?: string, 
    yPosition?: string, 
    duration?: string, 
    offset?: string, 
    apiFramework?: string, 
    pxratio?: string
  }): Icon
```

↘ _go to [Icon](#Icon_53)_

<a id="Icon_53" name="Icon_53"></a>
## Class Icon _extends_ VastElement

At last one of this child and/or others are required below Icons in VAST4_1 spec

child of [Icons](#Icons_52) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "StaticResource" child to current "Icon". Return "Icon" to stay on same current level.
addStaticResource(content: string, attributes: {
    creativeType: "image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash"
  }): Icon
```

↘ _go to [Icon](#Icon_53)_ _(current class)_

```js
// Attach a "StaticResource" child to current "Icon". Return "StaticResource" to move on child level.
attachStaticResource(content: string, attributes: {
    creativeType: "image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash"
  }): StaticResource
```

↘ _go to [StaticResource](#StaticResource_54)_ _(last level element)_

```js
// Add a "IFrameResource" child to current "Icon". Return "Icon" to stay on same current level.
addIFrameResource(content: string): Icon
```

↘ _go to [Icon](#Icon_53)_ _(current class)_

```js
// Attach a "IFrameResource" child to current "Icon". Return "IFrameResource" to move on child level.
attachIFrameResource(content: string): IFrameResource
```

↘ _go to [IFrameResource](#IFrameResource_55)_ _(last level element)_

```js
// Add a "HTMLResource" child to current "Icon". Return "Icon" to stay on same current level.
addHTMLResource(content: string): Icon
```

↘ _go to [Icon](#Icon_53)_ _(current class)_

```js
// Attach a "HTMLResource" child to current "Icon". Return "HTMLResource" to move on child level.
attachHTMLResource(content: string): HTMLResource
```

↘ _go to [HTMLResource](#HTMLResource_56)_ _(last level element)_

```js
// Attach a "IconClicks" child to current "Icon". Return "IconClicks" to move on child level.
attachIconClicks(): IconClicks
```

↘ _go to [IconClicks](#IconClicks_57)_

```js
// Add a "IconViewTracking" child to current "Icon". Return "Icon" to stay on same current level.
addIconViewTracking(content: string): Icon
```

↘ _go to [Icon](#Icon_53)_ _(current class)_

```js
// Attach a "IconViewTracking" child to current "Icon". Return "IconViewTracking" to move on child level.
attachIconViewTracking(content: string): IconViewTracking
```

↘ _go to [IconViewTracking](#IconViewTracking_60)_ _(last level element)_

<a id="StaticResource_54" name="StaticResource_54"></a>
## Class StaticResource _extends_ VastElement

At last one of this child and/or others are required below Icon in VAST4_1 spec

child of [Icon](#Icon_53) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IFrameResource_55" name="IFrameResource_55"></a>
## Class IFrameResource _extends_ VastElement

At last one of this child and/or others are required below Icon in VAST4_1 spec

child of [Icon](#Icon_53) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="HTMLResource_56" name="HTMLResource_56"></a>
## Class HTMLResource _extends_ VastElement

At last one of this child and/or others are required below Icon in VAST4_1 spec

child of [Icon](#Icon_53) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IconClicks_57" name="IconClicks_57"></a>
## Class IconClicks _extends_ VastElement

child of [Icon](#Icon_53) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "IconClickThrough" child to current "IconClicks". Return "IconClicks" to stay on same current level.
addIconClickThrough(content: string): IconClicks
```

↘ _go to [IconClicks](#IconClicks_57)_ _(current class)_

```js
// Attach a "IconClickThrough" child to current "IconClicks". Return "IconClickThrough" to move on child level.
attachIconClickThrough(content: string): IconClickThrough
```

↘ _go to [IconClickThrough](#IconClickThrough_58)_ _(last level element)_

```js
// Add a "IconClickTracking" child to current "IconClicks". Return "IconClicks" to stay on same current level.
addIconClickTracking(content: string, attributes: {
    id?: string
  }): IconClicks
```

↘ _go to [IconClicks](#IconClicks_57)_ _(current class)_

```js
// Attach a "IconClickTracking" child to current "IconClicks". Return "IconClickTracking" to move on child level.
attachIconClickTracking(content: string, attributes: {
    id?: string
  }): IconClickTracking
```

↘ _go to [IconClickTracking](#IconClickTracking_59)_ _(last level element)_

<a id="IconClickThrough_58" name="IconClickThrough_58"></a>
## Class IconClickThrough _extends_ VastElement

child of [IconClicks](#IconClicks_57) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IconClickTracking_59" name="IconClickTracking_59"></a>
## Class IconClickTracking _extends_ VastElement

child of [IconClicks](#IconClicks_57) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IconViewTracking_60" name="IconViewTracking_60"></a>
## Class IconViewTracking _extends_ VastElement

child of [Icon](#Icon_53) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="NonLinearAds_61" name="NonLinearAds_61"></a>
## Class NonLinearAds _extends_ VastElement

An uniq one of this child or others at same level are required below Creative in VAST4_1 spec

child of [Creative](#Creative_33) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "NonLinear" child to current "NonLinearAds". Return "NonLinear" to move on child level.
attachNonLinear(attributes: {
    id?: string, 
    width: string, 
    height: string, 
    expandedWidth?: string, 
    expandedHeight?: string, 
    scalable?: string, 
    maintainAspectRatio?: string, 
    apiFramework?: string, 
    minSuggestedDuration?: string
  }): NonLinear
```

↘ _go to [NonLinear](#NonLinear_62)_

```js
// Attach a "TrackingEvents" child to current "NonLinearAds". Return "TrackingEvents" to move on child level.
attachTrackingEvents(): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_65)_

<a id="NonLinear_62" name="NonLinear_62"></a>
## Class NonLinear _extends_ VastElement

child of [NonLinearAds](#NonLinearAds_61) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "NonLinearClickThrough" child to current "NonLinear". Return "NonLinear" to stay on same current level.
addNonLinearClickThrough(content: string): NonLinear
```

↘ _go to [NonLinear](#NonLinear_62)_ _(current class)_

```js
// Attach a "NonLinearClickThrough" child to current "NonLinear". Return "NonLinearClickThrough" to move on child level.
attachNonLinearClickThrough(content: string): NonLinearClickThrough
```

↘ _go to [NonLinearClickThrough](#NonLinearClickThrough_63)_ _(last level element)_

```js
// Add a "NonLinearClickTracking" child to current "NonLinear". Return "NonLinear" to stay on same current level.
addNonLinearClickTracking(content: string): NonLinear
```

↘ _go to [NonLinear](#NonLinear_62)_ _(current class)_

```js
// Attach a "NonLinearClickTracking" child to current "NonLinear". Return "NonLinearClickTracking" to move on child level.
attachNonLinearClickTracking(content: string): NonLinearClickTracking
```

↘ _go to [NonLinearClickTracking](#NonLinearClickTracking_64)_ _(last level element)_

<a id="NonLinearClickThrough_63" name="NonLinearClickThrough_63"></a>
## Class NonLinearClickThrough _extends_ VastElement

child of [NonLinear](#NonLinear_62) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="NonLinearClickTracking_64" name="NonLinearClickTracking_64"></a>
## Class NonLinearClickTracking _extends_ VastElement

child of [NonLinear](#NonLinear_62) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="TrackingEvents_65" name="TrackingEvents_65"></a>
## Class TrackingEvents _extends_ VastElement

child of [NonLinearAds](#NonLinearAds_61) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Tracking" child to current "TrackingEvents". Return "TrackingEvents" to stay on same current level.
addTracking(content: string, attributes: {
    event: "creativeView"|"acceptInvitation"|"adExpand"|"adCollapse"|"minimize"|"close"|"overlayViewDuration"|"otherAdInteraction"|"mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"notUsed"
  }): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_65)_ _(current class)_

```js
// Attach a "Tracking" child to current "TrackingEvents". Return "Tracking" to move on child level.
attachTracking(content: string, attributes: {
    event: "creativeView"|"acceptInvitation"|"adExpand"|"adCollapse"|"minimize"|"close"|"overlayViewDuration"|"otherAdInteraction"|"mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"notUsed"
  }): Tracking
```

↘ _go to [Tracking](#Tracking_66)_ _(last level element)_

<a id="Tracking_66" name="Tracking_66"></a>
## Class Tracking _extends_ VastElement

child of [TrackingEvents](#TrackingEvents_65) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="CompanionAds_67" name="CompanionAds_67"></a>
## Class CompanionAds _extends_ VastElement

An uniq one of this child or others at same level are required below Creative in VAST4_1 spec

child of [Creative](#Creative_33) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "Companion" child to current "CompanionAds". Return "Companion" to move on child level.
attachCompanion(attributes: {
    width: string, 
    height: string, 
    id?: string, 
    assetWidth?: string, 
    assetHeight?: string, 
    expandedWidth?: string, 
    expandedHeight?: string, 
    apiFramework?: string, 
    adSlotID?: string, 
    pxratio?: string, 
    renderingMode?: "default"|"end-card"|"concurrent"
  }): Companion
```

↘ _go to [Companion](#Companion_68)_

<a id="Companion_68" name="Companion_68"></a>
## Class Companion _extends_ VastElement

child of [CompanionAds](#CompanionAds_67) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "StaticResource" child to current "Companion". Return "Companion" to stay on same current level.
addStaticResource(content: string, attributes: {
    creativeType: "image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash"
  }): Companion
```

↘ _go to [Companion](#Companion_68)_ _(current class)_

```js
// Attach a "StaticResource" child to current "Companion". Return "StaticResource" to move on child level.
attachStaticResource(content: string, attributes: {
    creativeType: "image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash"
  }): StaticResource
```

↘ _go to [StaticResource](#StaticResource_69)_ _(last level element)_

```js
// Add a "IFrameResource" child to current "Companion". Return "Companion" to stay on same current level.
addIFrameResource(content: string): Companion
```

↘ _go to [Companion](#Companion_68)_ _(current class)_

```js
// Attach a "IFrameResource" child to current "Companion". Return "IFrameResource" to move on child level.
attachIFrameResource(content: string): IFrameResource
```

↘ _go to [IFrameResource](#IFrameResource_70)_ _(last level element)_

```js
// Add a "HTMLResource" child to current "Companion". Return "Companion" to stay on same current level.
addHTMLResource(content: string): Companion
```

↘ _go to [Companion](#Companion_68)_ _(current class)_

```js
// Attach a "HTMLResource" child to current "Companion". Return "HTMLResource" to move on child level.
attachHTMLResource(content: string): HTMLResource
```

↘ _go to [HTMLResource](#HTMLResource_71)_ _(last level element)_

```js
// Add a "AdParameters" child to current "Companion". Return "Companion" to stay on same current level.
addAdParameters(content: string, attributes: {
    xmlEncoded?: string
  }): Companion
```

↘ _go to [Companion](#Companion_68)_ _(current class)_

```js
// Attach a "AdParameters" child to current "Companion". Return "AdParameters" to move on child level.
attachAdParameters(content: string, attributes: {
    xmlEncoded?: string
  }): AdParameters
```

↘ _go to [AdParameters](#AdParameters_72)_ _(last level element)_

```js
// Add a "AltText" child to current "Companion". Return "Companion" to stay on same current level.
addAltText(content: string): Companion
```

↘ _go to [Companion](#Companion_68)_ _(current class)_

```js
// Attach a "AltText" child to current "Companion". Return "AltText" to move on child level.
attachAltText(content: string): AltText
```

↘ _go to [AltText](#AltText_73)_ _(last level element)_

```js
// Add a "CompanionClickThrough" child to current "Companion". Return "Companion" to stay on same current level.
addCompanionClickThrough(content: string): Companion
```

↘ _go to [Companion](#Companion_68)_ _(current class)_

```js
// Attach a "CompanionClickThrough" child to current "Companion". Return "CompanionClickThrough" to move on child level.
attachCompanionClickThrough(content: string): CompanionClickThrough
```

↘ _go to [CompanionClickThrough](#CompanionClickThrough_74)_ _(last level element)_

```js
// Add a "CompanionClickTracking" child to current "Companion". Return "Companion" to stay on same current level.
addCompanionClickTracking(content: string, attributes: {
    id?: string
  }): Companion
```

↘ _go to [Companion](#Companion_68)_ _(current class)_

```js
// Attach a "CompanionClickTracking" child to current "Companion". Return "CompanionClickTracking" to move on child level.
attachCompanionClickTracking(content: string, attributes: {
    id?: string
  }): CompanionClickTracking
```

↘ _go to [CompanionClickTracking](#CompanionClickTracking_75)_ _(last level element)_

```js
// Attach a "TrackingEvents" child to current "Companion". Return "TrackingEvents" to move on child level.
attachTrackingEvents(): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_76)_

<a id="StaticResource_69" name="StaticResource_69"></a>
## Class StaticResource _extends_ VastElement

At last one of this child and/or others are required below Companion in VAST4_1 spec

child of [Companion](#Companion_68) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IFrameResource_70" name="IFrameResource_70"></a>
## Class IFrameResource _extends_ VastElement

At last one of this child and/or others are required below Companion in VAST4_1 spec

child of [Companion](#Companion_68) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="HTMLResource_71" name="HTMLResource_71"></a>
## Class HTMLResource _extends_ VastElement

At last one of this child and/or others are required below Companion in VAST4_1 spec

child of [Companion](#Companion_68) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="AdParameters_72" name="AdParameters_72"></a>
## Class AdParameters _extends_ VastElement

child of [Companion](#Companion_68) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="AltText_73" name="AltText_73"></a>
## Class AltText _extends_ VastElement

child of [Companion](#Companion_68) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="CompanionClickThrough_74" name="CompanionClickThrough_74"></a>
## Class CompanionClickThrough _extends_ VastElement

child of [Companion](#Companion_68) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="CompanionClickTracking_75" name="CompanionClickTracking_75"></a>
## Class CompanionClickTracking _extends_ VastElement

child of [Companion](#Companion_68) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="TrackingEvents_76" name="TrackingEvents_76"></a>
## Class TrackingEvents _extends_ VastElement

child of [Companion](#Companion_68) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Tracking" child to current "TrackingEvents". Return "TrackingEvents" to stay on same current level.
addTracking(content: string, attributes: {
    event: "creativeView"
  }): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_76)_ _(current class)_

```js
// Attach a "Tracking" child to current "TrackingEvents". Return "Tracking" to move on child level.
attachTracking(content: string, attributes: {
    event: "creativeView"
  }): Tracking
```

↘ _go to [Tracking](#Tracking_77)_ _(last level element)_

<a id="Tracking_77" name="Tracking_77"></a>
## Class Tracking _extends_ VastElement

child of [TrackingEvents](#TrackingEvents_76) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Wrapper_78" name="Wrapper_78"></a>
## Class Wrapper _extends_ VastElement

An uniq one of this child or others at same level are required below Ad in VAST4_1 spec

child of [Ad](#Ad_6) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Impression" child to current "Wrapper". Return "Wrapper" to stay on same current level.
addImpression(content: string, attributes: {
    id?: string
  }): Wrapper
```

↘ _go to [Wrapper](#Wrapper_78)_ _(current class)_

```js
// Attach a "Impression" child to current "Wrapper". Return "Impression" to move on child level.
attachImpression(content: string, attributes: {
    id?: string
  }): Impression
```

↘ _go to [Impression](#Impression_79)_ _(last level element)_

```js
// Add a "VASTAdTagURI" child to current "Wrapper". Return "Wrapper" to stay on same current level.
addVASTAdTagURI(content: string): Wrapper
```

↘ _go to [Wrapper](#Wrapper_78)_ _(current class)_

```js
// Attach a "VASTAdTagURI" child to current "Wrapper". Return "VASTAdTagURI" to move on child level.
attachVASTAdTagURI(content: string): VASTAdTagURI
```

↘ _go to [VASTAdTagURI](#VASTAdTagURI_80)_ _(last level element)_

```js
// Add a "AdSystem" child to current "Wrapper". Return "Wrapper" to stay on same current level.
addAdSystem(content: string, attributes: {
    version?: string
  }): Wrapper
```

↘ _go to [Wrapper](#Wrapper_78)_ _(current class)_

```js
// Attach a "AdSystem" child to current "Wrapper". Return "AdSystem" to move on child level.
attachAdSystem(content: string, attributes: {
    version?: string
  }): AdSystem
```

↘ _go to [AdSystem](#AdSystem_81)_ _(last level element)_

```js
// Add a "Pricing" child to current "Wrapper". Return "Wrapper" to stay on same current level.
addPricing(content: string, attributes: {
    currency: string, 
    model: "CPM"|"CPC"|"CPE"|"CPV"
  }): Wrapper
```

↘ _go to [Wrapper](#Wrapper_78)_ _(current class)_

```js
// Attach a "Pricing" child to current "Wrapper". Return "Pricing" to move on child level.
attachPricing(content: string, attributes: {
    currency: string, 
    model: "CPM"|"CPC"|"CPE"|"CPV"
  }): Pricing
```

↘ _go to [Pricing](#Pricing_82)_ _(last level element)_

```js
// Add a "Error" child to current "Wrapper". Return "Wrapper" to stay on same current level.
addError(content: string): Wrapper
```

↘ _go to [Wrapper](#Wrapper_78)_ _(current class)_

```js
// Attach a "Error" child to current "Wrapper". Return "Error" to move on child level.
attachError(content: string): Error
```

↘ _go to [Error](#Error_83)_ _(last level element)_

```js
// Attach a "ViewableImpression" child to current "Wrapper". Return "ViewableImpression" to move on child level.
attachViewableImpression(attributes: {
    id?: string
  }): ViewableImpression
```

↘ _go to [ViewableImpression](#ViewableImpression_84)_

```js
// Attach a "AdVerifications" child to current "Wrapper". Return "AdVerifications" to move on child level.
attachAdVerifications(): AdVerifications
```

↘ _go to [AdVerifications](#AdVerifications_88)_

```js
// Attach a "Extensions" child to current "Wrapper". Return "Extensions" to move on child level.
attachExtensions(): Extensions
```

↘ _go to [Extensions](#Extensions_96)_

```js
// Attach a "Creatives" child to current "Wrapper". Return "Creatives" to move on child level.
attachCreatives(): Creatives
```

↘ _go to [Creatives](#Creatives_98)_

<a id="Impression_79" name="Impression_79"></a>
## Class Impression _extends_ VastElement

At last one of this child and/or others are required below Wrapper in VAST4_1 spec

child of [Wrapper](#Wrapper_78) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="VASTAdTagURI_80" name="VASTAdTagURI_80"></a>
## Class VASTAdTagURI _extends_ VastElement

This child is required below Wrapper in VAST4_1 spec

child of [Wrapper](#Wrapper_78) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="AdSystem_81" name="AdSystem_81"></a>
## Class AdSystem _extends_ VastElement

This child is required below Wrapper in VAST4_1 spec

child of [Wrapper](#Wrapper_78) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Pricing_82" name="Pricing_82"></a>
## Class Pricing _extends_ VastElement

child of [Wrapper](#Wrapper_78) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Error_83" name="Error_83"></a>
## Class Error _extends_ VastElement

child of [Wrapper](#Wrapper_78) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="ViewableImpression_84" name="ViewableImpression_84"></a>
## Class ViewableImpression _extends_ VastElement

child of [Wrapper](#Wrapper_78) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Viewable" child to current "ViewableImpression". Return "ViewableImpression" to stay on same current level.
addViewable(content: string): ViewableImpression
```

↘ _go to [ViewableImpression](#ViewableImpression_84)_ _(current class)_

```js
// Attach a "Viewable" child to current "ViewableImpression". Return "Viewable" to move on child level.
attachViewable(content: string): Viewable
```

↘ _go to [Viewable](#Viewable_85)_ _(last level element)_

```js
// Add a "NotViewable" child to current "ViewableImpression". Return "ViewableImpression" to stay on same current level.
addNotViewable(content: string): ViewableImpression
```

↘ _go to [ViewableImpression](#ViewableImpression_84)_ _(current class)_

```js
// Attach a "NotViewable" child to current "ViewableImpression". Return "NotViewable" to move on child level.
attachNotViewable(content: string): NotViewable
```

↘ _go to [NotViewable](#NotViewable_86)_ _(last level element)_

```js
// Add a "ViewUndetermined" child to current "ViewableImpression". Return "ViewableImpression" to stay on same current level.
addViewUndetermined(content: string): ViewableImpression
```

↘ _go to [ViewableImpression](#ViewableImpression_84)_ _(current class)_

```js
// Attach a "ViewUndetermined" child to current "ViewableImpression". Return "ViewUndetermined" to move on child level.
attachViewUndetermined(content: string): ViewUndetermined
```

↘ _go to [ViewUndetermined](#ViewUndetermined_87)_ _(last level element)_

<a id="Viewable_85" name="Viewable_85"></a>
## Class Viewable _extends_ VastElement

child of [ViewableImpression](#ViewableImpression_84) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="NotViewable_86" name="NotViewable_86"></a>
## Class NotViewable _extends_ VastElement

child of [ViewableImpression](#ViewableImpression_84) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="ViewUndetermined_87" name="ViewUndetermined_87"></a>
## Class ViewUndetermined _extends_ VastElement

child of [ViewableImpression](#ViewableImpression_84) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="AdVerifications_88" name="AdVerifications_88"></a>
## Class AdVerifications _extends_ VastElement

child of [Wrapper](#Wrapper_78) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "Verification" child to current "AdVerifications". Return "Verification" to move on child level.
attachVerification(attributes: {
    vendor: string
  }): Verification
```

↘ _go to [Verification](#Verification_89)_

<a id="Verification_89" name="Verification_89"></a>
## Class Verification _extends_ VastElement

child of [AdVerifications](#AdVerifications_88) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "JavaScriptResource" child to current "Verification". Return "Verification" to stay on same current level.
addJavaScriptResource(content: string, attributes: {
    apiFramework: string, 
    browserOptional: string
  }): Verification
```

↘ _go to [Verification](#Verification_89)_ _(current class)_

```js
// Attach a "JavaScriptResource" child to current "Verification". Return "JavaScriptResource" to move on child level.
attachJavaScriptResource(content: string, attributes: {
    apiFramework: string, 
    browserOptional: string
  }): JavaScriptResource
```

↘ _go to [JavaScriptResource](#JavaScriptResource_90)_ _(last level element)_

```js
// Add a "ExecutableResource" child to current "Verification". Return "Verification" to stay on same current level.
addExecutableResource(content: string, attributes: {
    apiFramework: string, 
    language?: string, 
    type?: string
  }): Verification
```

↘ _go to [Verification](#Verification_89)_ _(current class)_

```js
// Attach a "ExecutableResource" child to current "Verification". Return "ExecutableResource" to move on child level.
attachExecutableResource(content: string, attributes: {
    apiFramework: string, 
    language?: string, 
    type?: string
  }): ExecutableResource
```

↘ _go to [ExecutableResource](#ExecutableResource_91)_ _(last level element)_

```js
// Attach a "TrackingEvents" child to current "Verification". Return "TrackingEvents" to move on child level.
attachTrackingEvents(): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_92)_

```js
// Add a "VerificationParameters" child to current "Verification". Return "Verification" to stay on same current level.
addVerificationParameters(content: string): Verification
```

↘ _go to [Verification](#Verification_89)_ _(current class)_

```js
// Attach a "VerificationParameters" child to current "Verification". Return "VerificationParameters" to move on child level.
attachVerificationParameters(content: string): VerificationParameters
```

↘ _go to [VerificationParameters](#VerificationParameters_94)_ _(last level element)_

```js
// Add a "BlockedAdCategories" child to current "Verification". Return "Verification" to stay on same current level.
addBlockedAdCategories(content: string, attributes: {
    authority: string
  }): Verification
```

↘ _go to [Verification](#Verification_89)_ _(current class)_

```js
// Attach a "BlockedAdCategories" child to current "Verification". Return "BlockedAdCategories" to move on child level.
attachBlockedAdCategories(content: string, attributes: {
    authority: string
  }): BlockedAdCategories
```

↘ _go to [BlockedAdCategories](#BlockedAdCategories_95)_ _(last level element)_

<a id="JavaScriptResource_90" name="JavaScriptResource_90"></a>
## Class JavaScriptResource _extends_ VastElement

child of [Verification](#Verification_89) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="ExecutableResource_91" name="ExecutableResource_91"></a>
## Class ExecutableResource _extends_ VastElement

child of [Verification](#Verification_89) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="TrackingEvents_92" name="TrackingEvents_92"></a>
## Class TrackingEvents _extends_ VastElement

child of [Verification](#Verification_89) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Tracking" child to current "TrackingEvents". Return "TrackingEvents" to stay on same current level.
addTracking(content: string, attributes: {
    offset?: string, 
    event: "verificationNotExecuted"
  }): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_92)_ _(current class)_

```js
// Attach a "Tracking" child to current "TrackingEvents". Return "Tracking" to move on child level.
attachTracking(content: string, attributes: {
    offset?: string, 
    event: "verificationNotExecuted"
  }): Tracking
```

↘ _go to [Tracking](#Tracking_93)_ _(last level element)_

<a id="Tracking_93" name="Tracking_93"></a>
## Class Tracking _extends_ VastElement

child of [TrackingEvents](#TrackingEvents_92) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="VerificationParameters_94" name="VerificationParameters_94"></a>
## Class VerificationParameters _extends_ VastElement

child of [Verification](#Verification_89) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="BlockedAdCategories_95" name="BlockedAdCategories_95"></a>
## Class BlockedAdCategories _extends_ VastElement

child of [Verification](#Verification_89) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Extensions_96" name="Extensions_96"></a>
## Class Extensions _extends_ VastElement

child of [Wrapper](#Wrapper_78) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Extension" child to current "Extensions". Return "Extensions" to stay on same current level.
addExtension(content: string, attributes: {
    type?: string
  }): Extensions
```

↘ _go to [Extensions](#Extensions_96)_ _(current class)_

```js
// Attach a "Extension" child to current "Extensions". Return "Extension" to move on child level.
attachExtension(content: string, attributes: {
    type?: string
  }): Extension
```

↘ _go to [Extension](#Extension_97)_ _(last level element)_

<a id="Extension_97" name="Extension_97"></a>
## Class Extension _extends_ VastElement

child of [Extensions](#Extensions_96) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Creatives_98" name="Creatives_98"></a>
## Class Creatives _extends_ VastElement

child of [Wrapper](#Wrapper_78) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "Creative" child to current "Creatives". Return "Creative" to move on child level.
attachCreative(attributes: {
    id?: string, 
    sequence?: string, 
    adId?: string
  }): Creative
```

↘ _go to [Creative](#Creative_99)_

<a id="Creative_99" name="Creative_99"></a>
## Class Creative _extends_ VastElement

child of [Creatives](#Creatives_98) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "Linear" child to current "Creative". Return "Linear" to move on child level.
attachLinear(): Linear
```

↘ _go to [Linear](#Linear_100)_

```js
// Attach a "NonLinearAds" child to current "Creative". Return "NonLinearAds" to move on child level.
attachNonLinearAds(): NonLinearAds
```

↘ _go to [NonLinearAds](#NonLinearAds_116)_

```js
// Attach a "CompanionAds" child to current "Creative". Return "CompanionAds" to move on child level.
attachCompanionAds(attributes: {
    required: "all"|"any"|"none"
  }): CompanionAds
```

↘ _go to [CompanionAds](#CompanionAds_122)_

<a id="Linear_100" name="Linear_100"></a>
## Class Linear _extends_ VastElement

An uniq one of this child or others at same level are required below Creative in VAST4_1 spec

child of [Creative](#Creative_99) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "TrackingEvents" child to current "Linear". Return "TrackingEvents" to move on child level.
attachTrackingEvents(): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_101)_

```js
// Attach a "VideoClicks" child to current "Linear". Return "VideoClicks" to move on child level.
attachVideoClicks(): VideoClicks
```

↘ _go to [VideoClicks](#VideoClicks_103)_

```js
// Attach a "Icons" child to current "Linear". Return "Icons" to move on child level.
attachIcons(): Icons
```

↘ _go to [Icons](#Icons_106)_

```js
// Add a "InteractiveCreativeFile" child to current "Linear". Return "Linear" to stay on same current level.
addInteractiveCreativeFile(content: string, attributes: {
    type?: string, 
    apiFramework?: string, 
    variableDuration?: string
  }): Linear
```

↘ _go to [Linear](#Linear_100)_ _(current class)_

```js
// Attach a "InteractiveCreativeFile" child to current "Linear". Return "InteractiveCreativeFile" to move on child level.
attachInteractiveCreativeFile(content: string, attributes: {
    type?: string, 
    apiFramework?: string, 
    variableDuration?: string
  }): InteractiveCreativeFile
```

↘ _go to [InteractiveCreativeFile](#InteractiveCreativeFile_115)_ _(last level element)_

<a id="TrackingEvents_101" name="TrackingEvents_101"></a>
## Class TrackingEvents _extends_ VastElement

child of [Linear](#Linear_100) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Tracking" child to current "TrackingEvents". Return "TrackingEvents" to stay on same current level.
addTracking(content: string, attributes: {
    offset?: string, 
    event: "loaded"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"progress"|"closeLinear"|"otherAdInteraction"|"mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"notUsed"
  }): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_101)_ _(current class)_

```js
// Attach a "Tracking" child to current "TrackingEvents". Return "Tracking" to move on child level.
attachTracking(content: string, attributes: {
    offset?: string, 
    event: "loaded"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"progress"|"closeLinear"|"otherAdInteraction"|"mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"notUsed"
  }): Tracking
```

↘ _go to [Tracking](#Tracking_102)_ _(last level element)_

<a id="Tracking_102" name="Tracking_102"></a>
## Class Tracking _extends_ VastElement

child of [TrackingEvents](#TrackingEvents_101) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="VideoClicks_103" name="VideoClicks_103"></a>
## Class VideoClicks _extends_ VastElement

child of [Linear](#Linear_100) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "ClickTracking" child to current "VideoClicks". Return "VideoClicks" to stay on same current level.
addClickTracking(content: string, attributes: {
    id?: string
  }): VideoClicks
```

↘ _go to [VideoClicks](#VideoClicks_103)_ _(current class)_

```js
// Attach a "ClickTracking" child to current "VideoClicks". Return "ClickTracking" to move on child level.
attachClickTracking(content: string, attributes: {
    id?: string
  }): ClickTracking
```

↘ _go to [ClickTracking](#ClickTracking_104)_ _(last level element)_

```js
// Add a "CustomClick" child to current "VideoClicks". Return "VideoClicks" to stay on same current level.
addCustomClick(content: string, attributes: {
    id?: string
  }): VideoClicks
```

↘ _go to [VideoClicks](#VideoClicks_103)_ _(current class)_

```js
// Attach a "CustomClick" child to current "VideoClicks". Return "CustomClick" to move on child level.
attachCustomClick(content: string, attributes: {
    id?: string
  }): CustomClick
```

↘ _go to [CustomClick](#CustomClick_105)_ _(last level element)_

<a id="ClickTracking_104" name="ClickTracking_104"></a>
## Class ClickTracking _extends_ VastElement

child of [VideoClicks](#VideoClicks_103) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="CustomClick_105" name="CustomClick_105"></a>
## Class CustomClick _extends_ VastElement

child of [VideoClicks](#VideoClicks_103) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Icons_106" name="Icons_106"></a>
## Class Icons _extends_ VastElement

child of [Linear](#Linear_100) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "Icon" child to current "Icons". Return "Icon" to move on child level.
attachIcon(attributes: {
    program?: string, 
    width?: string, 
    height?: string, 
    xPosition?: string, 
    yPosition?: string, 
    duration?: string, 
    offset?: string, 
    apiFramework?: string, 
    pxratio?: string
  }): Icon
```

↘ _go to [Icon](#Icon_107)_

<a id="Icon_107" name="Icon_107"></a>
## Class Icon _extends_ VastElement

At last one of this child and/or others are required below Icons in VAST4_1 spec

child of [Icons](#Icons_106) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "StaticResource" child to current "Icon". Return "Icon" to stay on same current level.
addStaticResource(content: string, attributes: {
    creativeType: "image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash"
  }): Icon
```

↘ _go to [Icon](#Icon_107)_ _(current class)_

```js
// Attach a "StaticResource" child to current "Icon". Return "StaticResource" to move on child level.
attachStaticResource(content: string, attributes: {
    creativeType: "image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash"
  }): StaticResource
```

↘ _go to [StaticResource](#StaticResource_108)_ _(last level element)_

```js
// Add a "IFrameResource" child to current "Icon". Return "Icon" to stay on same current level.
addIFrameResource(content: string): Icon
```

↘ _go to [Icon](#Icon_107)_ _(current class)_

```js
// Attach a "IFrameResource" child to current "Icon". Return "IFrameResource" to move on child level.
attachIFrameResource(content: string): IFrameResource
```

↘ _go to [IFrameResource](#IFrameResource_109)_ _(last level element)_

```js
// Add a "HTMLResource" child to current "Icon". Return "Icon" to stay on same current level.
addHTMLResource(content: string): Icon
```

↘ _go to [Icon](#Icon_107)_ _(current class)_

```js
// Attach a "HTMLResource" child to current "Icon". Return "HTMLResource" to move on child level.
attachHTMLResource(content: string): HTMLResource
```

↘ _go to [HTMLResource](#HTMLResource_110)_ _(last level element)_

```js
// Attach a "IconClicks" child to current "Icon". Return "IconClicks" to move on child level.
attachIconClicks(): IconClicks
```

↘ _go to [IconClicks](#IconClicks_111)_

```js
// Add a "IconViewTracking" child to current "Icon". Return "Icon" to stay on same current level.
addIconViewTracking(content: string): Icon
```

↘ _go to [Icon](#Icon_107)_ _(current class)_

```js
// Attach a "IconViewTracking" child to current "Icon". Return "IconViewTracking" to move on child level.
attachIconViewTracking(content: string): IconViewTracking
```

↘ _go to [IconViewTracking](#IconViewTracking_114)_ _(last level element)_

<a id="StaticResource_108" name="StaticResource_108"></a>
## Class StaticResource _extends_ VastElement

At last one of this child and/or others are required below Icon in VAST4_1 spec

child of [Icon](#Icon_107) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IFrameResource_109" name="IFrameResource_109"></a>
## Class IFrameResource _extends_ VastElement

At last one of this child and/or others are required below Icon in VAST4_1 spec

child of [Icon](#Icon_107) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="HTMLResource_110" name="HTMLResource_110"></a>
## Class HTMLResource _extends_ VastElement

At last one of this child and/or others are required below Icon in VAST4_1 spec

child of [Icon](#Icon_107) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IconClicks_111" name="IconClicks_111"></a>
## Class IconClicks _extends_ VastElement

child of [Icon](#Icon_107) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "IconClickThrough" child to current "IconClicks". Return "IconClicks" to stay on same current level.
addIconClickThrough(content: string): IconClicks
```

↘ _go to [IconClicks](#IconClicks_111)_ _(current class)_

```js
// Attach a "IconClickThrough" child to current "IconClicks". Return "IconClickThrough" to move on child level.
attachIconClickThrough(content: string): IconClickThrough
```

↘ _go to [IconClickThrough](#IconClickThrough_112)_ _(last level element)_

```js
// Add a "IconClickTracking" child to current "IconClicks". Return "IconClicks" to stay on same current level.
addIconClickTracking(content: string, attributes: {
    id?: string
  }): IconClicks
```

↘ _go to [IconClicks](#IconClicks_111)_ _(current class)_

```js
// Attach a "IconClickTracking" child to current "IconClicks". Return "IconClickTracking" to move on child level.
attachIconClickTracking(content: string, attributes: {
    id?: string
  }): IconClickTracking
```

↘ _go to [IconClickTracking](#IconClickTracking_113)_ _(last level element)_

<a id="IconClickThrough_112" name="IconClickThrough_112"></a>
## Class IconClickThrough _extends_ VastElement

child of [IconClicks](#IconClicks_111) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IconClickTracking_113" name="IconClickTracking_113"></a>
## Class IconClickTracking _extends_ VastElement

child of [IconClicks](#IconClicks_111) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IconViewTracking_114" name="IconViewTracking_114"></a>
## Class IconViewTracking _extends_ VastElement

child of [Icon](#Icon_107) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="InteractiveCreativeFile_115" name="InteractiveCreativeFile_115"></a>
## Class InteractiveCreativeFile _extends_ VastElement

child of [Linear](#Linear_100) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="NonLinearAds_116" name="NonLinearAds_116"></a>
## Class NonLinearAds _extends_ VastElement

An uniq one of this child or others at same level are required below Creative in VAST4_1 spec

child of [Creative](#Creative_99) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "NonLinear" child to current "NonLinearAds". Return "NonLinear" to move on child level.
attachNonLinear(attributes: {
    id?: string, 
    width: string, 
    height: string, 
    expandedWidth?: string, 
    expandedHeight?: string, 
    scalable?: string, 
    maintainAspectRatio?: string, 
    apiFramework?: string, 
    minSuggestedDuration?: string
  }): NonLinear
```

↘ _go to [NonLinear](#NonLinear_117)_

```js
// Attach a "TrackingEvents" child to current "NonLinearAds". Return "TrackingEvents" to move on child level.
attachTrackingEvents(): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_120)_

<a id="NonLinear_117" name="NonLinear_117"></a>
## Class NonLinear _extends_ VastElement

child of [NonLinearAds](#NonLinearAds_116) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "NonLinearClickThrough" child to current "NonLinear". Return "NonLinear" to stay on same current level.
addNonLinearClickThrough(content: string): NonLinear
```

↘ _go to [NonLinear](#NonLinear_117)_ _(current class)_

```js
// Attach a "NonLinearClickThrough" child to current "NonLinear". Return "NonLinearClickThrough" to move on child level.
attachNonLinearClickThrough(content: string): NonLinearClickThrough
```

↘ _go to [NonLinearClickThrough](#NonLinearClickThrough_118)_ _(last level element)_

```js
// Add a "NonLinearClickTracking" child to current "NonLinear". Return "NonLinear" to stay on same current level.
addNonLinearClickTracking(content: string): NonLinear
```

↘ _go to [NonLinear](#NonLinear_117)_ _(current class)_

```js
// Attach a "NonLinearClickTracking" child to current "NonLinear". Return "NonLinearClickTracking" to move on child level.
attachNonLinearClickTracking(content: string): NonLinearClickTracking
```

↘ _go to [NonLinearClickTracking](#NonLinearClickTracking_119)_ _(last level element)_

<a id="NonLinearClickThrough_118" name="NonLinearClickThrough_118"></a>
## Class NonLinearClickThrough _extends_ VastElement

child of [NonLinear](#NonLinear_117) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="NonLinearClickTracking_119" name="NonLinearClickTracking_119"></a>
## Class NonLinearClickTracking _extends_ VastElement

child of [NonLinear](#NonLinear_117) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="TrackingEvents_120" name="TrackingEvents_120"></a>
## Class TrackingEvents _extends_ VastElement

child of [NonLinearAds](#NonLinearAds_116) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Tracking" child to current "TrackingEvents". Return "TrackingEvents" to stay on same current level.
addTracking(content: string, attributes: {
    event: "creativeView"|"acceptInvitation"|"adExpand"|"adCollapse"|"minimize"|"close"|"overlayViewDuration"|"otherAdInteraction"|"mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"notUsed"
  }): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_120)_ _(current class)_

```js
// Attach a "Tracking" child to current "TrackingEvents". Return "Tracking" to move on child level.
attachTracking(content: string, attributes: {
    event: "creativeView"|"acceptInvitation"|"adExpand"|"adCollapse"|"minimize"|"close"|"overlayViewDuration"|"otherAdInteraction"|"mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"notUsed"
  }): Tracking
```

↘ _go to [Tracking](#Tracking_121)_ _(last level element)_

<a id="Tracking_121" name="Tracking_121"></a>
## Class Tracking _extends_ VastElement

child of [TrackingEvents](#TrackingEvents_120) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="CompanionAds_122" name="CompanionAds_122"></a>
## Class CompanionAds _extends_ VastElement

An uniq one of this child or others at same level are required below Creative in VAST4_1 spec

child of [Creative](#Creative_99) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "Companion" child to current "CompanionAds". Return "Companion" to move on child level.
attachCompanion(attributes: {
    width: string, 
    height: string, 
    id?: string, 
    assetWidth?: string, 
    assetHeight?: string, 
    expandedWidth?: string, 
    expandedHeight?: string, 
    apiFramework?: string, 
    adSlotID?: string, 
    pxratio?: string, 
    renderingMode?: "default"|"end-card"|"concurrent"
  }): Companion
```

↘ _go to [Companion](#Companion_123)_

<a id="Companion_123" name="Companion_123"></a>
## Class Companion _extends_ VastElement

child of [CompanionAds](#CompanionAds_122) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "StaticResource" child to current "Companion". Return "Companion" to stay on same current level.
addStaticResource(content: string, attributes: {
    creativeType: "image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash"
  }): Companion
```

↘ _go to [Companion](#Companion_123)_ _(current class)_

```js
// Attach a "StaticResource" child to current "Companion". Return "StaticResource" to move on child level.
attachStaticResource(content: string, attributes: {
    creativeType: "image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash"
  }): StaticResource
```

↘ _go to [StaticResource](#StaticResource_124)_ _(last level element)_

```js
// Add a "IFrameResource" child to current "Companion". Return "Companion" to stay on same current level.
addIFrameResource(content: string): Companion
```

↘ _go to [Companion](#Companion_123)_ _(current class)_

```js
// Attach a "IFrameResource" child to current "Companion". Return "IFrameResource" to move on child level.
attachIFrameResource(content: string): IFrameResource
```

↘ _go to [IFrameResource](#IFrameResource_125)_ _(last level element)_

```js
// Add a "HTMLResource" child to current "Companion". Return "Companion" to stay on same current level.
addHTMLResource(content: string): Companion
```

↘ _go to [Companion](#Companion_123)_ _(current class)_

```js
// Attach a "HTMLResource" child to current "Companion". Return "HTMLResource" to move on child level.
attachHTMLResource(content: string): HTMLResource
```

↘ _go to [HTMLResource](#HTMLResource_126)_ _(last level element)_

```js
// Add a "AdParameters" child to current "Companion". Return "Companion" to stay on same current level.
addAdParameters(content: string, attributes: {
    xmlEncoded?: string
  }): Companion
```

↘ _go to [Companion](#Companion_123)_ _(current class)_

```js
// Attach a "AdParameters" child to current "Companion". Return "AdParameters" to move on child level.
attachAdParameters(content: string, attributes: {
    xmlEncoded?: string
  }): AdParameters
```

↘ _go to [AdParameters](#AdParameters_127)_ _(last level element)_

```js
// Add a "AltText" child to current "Companion". Return "Companion" to stay on same current level.
addAltText(content: string): Companion
```

↘ _go to [Companion](#Companion_123)_ _(current class)_

```js
// Attach a "AltText" child to current "Companion". Return "AltText" to move on child level.
attachAltText(content: string): AltText
```

↘ _go to [AltText](#AltText_128)_ _(last level element)_

```js
// Add a "CompanionClickThrough" child to current "Companion". Return "Companion" to stay on same current level.
addCompanionClickThrough(content: string): Companion
```

↘ _go to [Companion](#Companion_123)_ _(current class)_

```js
// Attach a "CompanionClickThrough" child to current "Companion". Return "CompanionClickThrough" to move on child level.
attachCompanionClickThrough(content: string): CompanionClickThrough
```

↘ _go to [CompanionClickThrough](#CompanionClickThrough_129)_ _(last level element)_

```js
// Add a "CompanionClickTracking" child to current "Companion". Return "Companion" to stay on same current level.
addCompanionClickTracking(content: string, attributes: {
    id?: string
  }): Companion
```

↘ _go to [Companion](#Companion_123)_ _(current class)_

```js
// Attach a "CompanionClickTracking" child to current "Companion". Return "CompanionClickTracking" to move on child level.
attachCompanionClickTracking(content: string, attributes: {
    id?: string
  }): CompanionClickTracking
```

↘ _go to [CompanionClickTracking](#CompanionClickTracking_130)_ _(last level element)_

```js
// Attach a "TrackingEvents" child to current "Companion". Return "TrackingEvents" to move on child level.
attachTrackingEvents(): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_131)_

<a id="StaticResource_124" name="StaticResource_124"></a>
## Class StaticResource _extends_ VastElement

At last one of this child and/or others are required below Companion in VAST4_1 spec

child of [Companion](#Companion_123) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IFrameResource_125" name="IFrameResource_125"></a>
## Class IFrameResource _extends_ VastElement

At last one of this child and/or others are required below Companion in VAST4_1 spec

child of [Companion](#Companion_123) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="HTMLResource_126" name="HTMLResource_126"></a>
## Class HTMLResource _extends_ VastElement

At last one of this child and/or others are required below Companion in VAST4_1 spec

child of [Companion](#Companion_123) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="AdParameters_127" name="AdParameters_127"></a>
## Class AdParameters _extends_ VastElement

child of [Companion](#Companion_123) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="AltText_128" name="AltText_128"></a>
## Class AltText _extends_ VastElement

child of [Companion](#Companion_123) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="CompanionClickThrough_129" name="CompanionClickThrough_129"></a>
## Class CompanionClickThrough _extends_ VastElement

child of [Companion](#Companion_123) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="CompanionClickTracking_130" name="CompanionClickTracking_130"></a>
## Class CompanionClickTracking _extends_ VastElement

child of [Companion](#Companion_123) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="TrackingEvents_131" name="TrackingEvents_131"></a>
## Class TrackingEvents _extends_ VastElement

child of [Companion](#Companion_123) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Tracking" child to current "TrackingEvents". Return "TrackingEvents" to stay on same current level.
addTracking(content: string, attributes: {
    event: "creativeView"
  }): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_131)_ _(current class)_

```js
// Attach a "Tracking" child to current "TrackingEvents". Return "Tracking" to move on child level.
attachTracking(content: string, attributes: {
    event: "creativeView"
  }): Tracking
```

↘ _go to [Tracking](#Tracking_132)_ _(last level element)_

<a id="Tracking_132" name="Tracking_132"></a>
## Class Tracking _extends_ VastElement

child of [TrackingEvents](#TrackingEvents_131) ↗

_no specific methods see [VastElement](#VastElement)_