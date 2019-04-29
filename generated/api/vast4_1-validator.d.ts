export declare const vastValidator4_1: {
    only: {
        VAST: {
            alo: {
                Ad: {
                    uniq: {
                        InLine: {
                            required: {
                                AdSystem: {};
                                AdTitle: {};
                                AdServingID: {};
                                Creatives: {
                                    alo: {
                                        Creative: {
                                            required: {
                                                UniversalAdId: {
                                                    attrsRequired: {
                                                        idRegistry: any;
                                                    };
                                                };
                                            };
                                            uniq: {
                                                Linear: {
                                                    required: {
                                                        Duration: {};
                                                        MediaFiles: {
                                                            alo: {
                                                                MediaFile: {
                                                                    attrsRequired: {
                                                                        delivery: string[];
                                                                        type: any;
                                                                        width: any;
                                                                        height: any;
                                                                    };
                                                                };
                                                            };
                                                            follow: {
                                                                Mezzanine: {
                                                                    attrsRequired: {
                                                                        delivery: string[];
                                                                        type: any;
                                                                        width: any;
                                                                        height: any;
                                                                    };
                                                                };
                                                                InteractiveCreativeFile: {};
                                                                ClosedCaptionFiles: {
                                                                    follow: {
                                                                        ClosedCaptionFile: {};
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                    follow: {
                                                        AdParameters: {};
                                                        VideoClicks: {
                                                            follow: {
                                                                ClickThrough: {};
                                                                ClickTracking: {};
                                                                CustomClick: {};
                                                            };
                                                        };
                                                        TrackingEvents: {
                                                            follow: {
                                                                Tracking: {
                                                                    attrsRequired: {
                                                                        event: string[];
                                                                    };
                                                                };
                                                            };
                                                        };
                                                        Icons: {
                                                            alo: {
                                                                Icon: {
                                                                    alo: {
                                                                        StaticResource: {
                                                                            attrsRequired: {
                                                                                creativeType: string[];
                                                                            };
                                                                        };
                                                                        IFrameResource: {};
                                                                        HTMLResource: {};
                                                                    };
                                                                    follow: {
                                                                        IconClicks: {
                                                                            follow: {
                                                                                IconClickThrough: {};
                                                                                IconClickTracking: {};
                                                                            };
                                                                        };
                                                                        IconViewTracking: {};
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                                NonLinearAds: {
                                                    follow: {
                                                        NonLinear: {
                                                            follow: {
                                                                NonLinearClickThrough: {};
                                                                NonLinearClickTracking: {};
                                                            };
                                                            attrsRequired: {
                                                                width: any;
                                                                height: any;
                                                            };
                                                        };
                                                        TrackingEvents: {
                                                            follow: {
                                                                Tracking: {
                                                                    attrsRequired: {
                                                                        event: string[];
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                                CompanionAds: {
                                                    follow: {
                                                        Companion: {
                                                            alo: {
                                                                StaticResource: {
                                                                    attrsRequired: {
                                                                        creativeType: string[];
                                                                    };
                                                                };
                                                                IFrameResource: {};
                                                                HTMLResource: {};
                                                            };
                                                            follow: {
                                                                AdParameters: {};
                                                                AltText: {};
                                                                CompanionClickThrough: {};
                                                                CompanionClickTracking: {};
                                                                TrackingEvents: {
                                                                    follow: {
                                                                        Tracking: {
                                                                            attrsRequired: {
                                                                                event: string[];
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                            attrsRequired: {
                                                                width: any;
                                                                height: any;
                                                            };
                                                        };
                                                    };
                                                    attrsRequired: {
                                                        required: string[];
                                                    };
                                                };
                                            };
                                            follow: {
                                                CreativeExtensions: {
                                                    follow: {
                                                        CreativeExtension: {};
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            alo: {
                                Impression: {};
                            };
                            follow: {
                                Category: {
                                    attrsRequired: {
                                        authority: any;
                                    };
                                };
                                Description: {};
                                Advertiser: {};
                                Pricing: {
                                    attrsRequired: {
                                        currency: any;
                                        model: string[];
                                    };
                                };
                                Survey: {};
                                Error: {};
                                Expires: {};
                                ViewableImpression: {
                                    follow: {
                                        Viewable: {};
                                        NotViewable: {};
                                        ViewUndetermined: {};
                                    };
                                };
                                AdVerifications: {
                                    follow: {
                                        Verification: {
                                            follow: {
                                                JavaScriptResource: {
                                                    attrsRequired: {
                                                        apiFramework: any;
                                                        browserOptional: any;
                                                    };
                                                };
                                                ExecutableResource: {
                                                    attrsRequired: {
                                                        apiFramework: any;
                                                    };
                                                };
                                                TrackingEvents: {
                                                    follow: {
                                                        Tracking: {
                                                            attrsRequired: {
                                                                event: string[];
                                                            };
                                                        };
                                                    };
                                                };
                                                VerificationParameters: {};
                                            };
                                            attrsRequired: {
                                                vendor: any;
                                            };
                                        };
                                    };
                                };
                                Extensions: {
                                    required: {
                                        Extension: {};
                                    };
                                };
                            };
                        };
                        Wrapper: {
                            required: {
                                VASTAdTagURI: {};
                                AdSystem: {};
                            };
                            alo: {
                                Impression: {};
                            };
                            follow: {
                                Pricing: {
                                    attrsRequired: {
                                        currency: any;
                                        model: string[];
                                    };
                                };
                                Error: {};
                                ViewableImpression: {
                                    follow: {
                                        Viewable: {};
                                        NotViewable: {};
                                        ViewUndetermined: {};
                                    };
                                };
                                AdVerifications: {
                                    follow: {
                                        Verification: {
                                            follow: {
                                                JavaScriptResource: {
                                                    attrsRequired: {
                                                        apiFramework: any;
                                                        browserOptional: any;
                                                    };
                                                };
                                                ExecutableResource: {
                                                    attrsRequired: {
                                                        apiFramework: any;
                                                    };
                                                };
                                                TrackingEvents: {
                                                    follow: {
                                                        Tracking: {
                                                            attrsRequired: {
                                                                event: string[];
                                                            };
                                                        };
                                                    };
                                                };
                                                VerificationParameters: {};
                                                BlockedAdCategories: {
                                                    attrsRequired: {
                                                        authority: any;
                                                    };
                                                };
                                            };
                                            attrsRequired: {
                                                vendor: any;
                                            };
                                        };
                                    };
                                };
                                Extensions: {
                                    follow: {
                                        Extension: {};
                                    };
                                };
                                Creatives: {
                                    follow: {
                                        Creative: {
                                            uniq: {
                                                Linear: {
                                                    follow: {
                                                        TrackingEvents: {
                                                            follow: {
                                                                Tracking: {
                                                                    attrsRequired: {
                                                                        event: string[];
                                                                    };
                                                                };
                                                            };
                                                        };
                                                        VideoClicks: {
                                                            follow: {
                                                                ClickTracking: {};
                                                                CustomClick: {};
                                                            };
                                                        };
                                                        Icons: {
                                                            alo: {
                                                                Icon: {
                                                                    alo: {
                                                                        StaticResource: {
                                                                            attrsRequired: {
                                                                                creativeType: string[];
                                                                            };
                                                                        };
                                                                        IFrameResource: {};
                                                                        HTMLResource: {};
                                                                    };
                                                                    follow: {
                                                                        IconClicks: {
                                                                            follow: {
                                                                                IconClickThrough: {};
                                                                                IconClickTracking: {};
                                                                            };
                                                                        };
                                                                        IconViewTracking: {};
                                                                    };
                                                                };
                                                            };
                                                        };
                                                        InteractiveCreativeFile: {};
                                                    };
                                                };
                                                NonLinearAds: {
                                                    follow: {
                                                        NonLinear: {
                                                            follow: {
                                                                NonLinearClickThrough: {};
                                                                NonLinearClickTracking: {};
                                                            };
                                                            attrsRequired: {
                                                                width: any;
                                                                height: any;
                                                            };
                                                        };
                                                        TrackingEvents: {
                                                            follow: {
                                                                Tracking: {
                                                                    attrsRequired: {
                                                                        event: string[];
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                                CompanionAds: {
                                                    follow: {
                                                        Companion: {
                                                            alo: {
                                                                StaticResource: {
                                                                    attrsRequired: {
                                                                        creativeType: string[];
                                                                    };
                                                                };
                                                                IFrameResource: {};
                                                                HTMLResource: {};
                                                            };
                                                            follow: {
                                                                AdParameters: {};
                                                                AltText: {};
                                                                CompanionClickThrough: {};
                                                                CompanionClickTracking: {};
                                                                TrackingEvents: {
                                                                    follow: {
                                                                        Tracking: {
                                                                            attrsRequired: {
                                                                                event: string[];
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                            attrsRequired: {
                                                                width: any;
                                                                height: any;
                                                            };
                                                        };
                                                    };
                                                    attrsRequired: {
                                                        required: string[];
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            follow: {
                Error: {};
            };
            attrsRequired: {
                version: string[];
            };
        };
    };
};
