export declare const vastValidator4_0: {
    only: {
        VAST: {
            alo: {
                Ad: {
                    uniq: {
                        InLine: {
                            required: {
                                AdSystem: {};
                                AdTitle: {};
                                Creatives: {
                                    alo: {
                                        Creative: {
                                            required: {
                                                UniversalAdId: {
                                                    attrsRequired: {
                                                        idRegistry: any;
                                                        idValue: any;
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
                                                                Mezzanine: {};
                                                                InteractiveCreativeFile: {};
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
                                                JavaScriptResource: {};
                                                FlashResource: {};
                                                ViewableImpression: {};
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
                                                ViewableImpression: {};
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
                                                                    follow: {
                                                                        StaticResource: {
                                                                            attrsRequired: {
                                                                                creativeType: string[];
                                                                            };
                                                                        };
                                                                        IFrameResource: {};
                                                                        HTMLResource: {};
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
                                                            follow: {
                                                                StaticResource: {
                                                                    attrsRequired: {
                                                                        creativeType: string[];
                                                                    };
                                                                };
                                                                IFrameResource: {};
                                                                HTMLResource: {};
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
