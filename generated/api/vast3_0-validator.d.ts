export declare const vastValidator3_0: {
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
                                                        };
                                                    };
                                                    follow: {
                                                        AdParameters: {};
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
                                                                ClickThrough: {};
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
                                                                    attrsRequired: {
                                                                        program: any;
                                                                        width: any;
                                                                        height: any;
                                                                        xPosition: any;
                                                                        yPosition: any;
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
                                                NonLinearAds: {
                                                    follow: {
                                                        NonLinear: {
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
                                                                NonLinearClickThrough: {};
                                                                NonLinearClickTracking: {};
                                                                AdParameters: {};
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
                                Extensions: {
                                    required: {
                                        Extension: {};
                                    };
                                };
                            };
                        };
                        Wrapper: {
                            required: {
                                AdSystem: {};
                                VASTAdTagURI: {};
                            };
                            alo: {
                                Impression: {};
                            };
                            follow: {
                                Error: {};
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
                                                                    attrsRequired: {
                                                                        program: any;
                                                                        width: any;
                                                                        height: any;
                                                                        xPosition: any;
                                                                        yPosition: any;
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
                                                NonLinearAds: {
                                                    follow: {
                                                        NonLinear: {
                                                            follow: {
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
