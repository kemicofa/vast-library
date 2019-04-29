export declare const vastValidator2_0: {
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
                                                        TrackingEvents: {
                                                            follow: {
                                                                Tracking: {
                                                                    attrsRequired: {
                                                                        event: string[];
                                                                    };
                                                                };
                                                            };
                                                        };
                                                        AdParameters: {};
                                                        VideoClicks: {
                                                            follow: {
                                                                ClickThrough: {};
                                                                ClickTracking: {};
                                                                CustomClick: {};
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
                                                                TrackingEvents: {
                                                                    follow: {
                                                                        Tracking: {
                                                                            attrsRequired: {
                                                                                event: string[];
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                                CompanionClickThrough: {};
                                                                AltText: {};
                                                                AdParameters: {};
                                                            };
                                                            attrsRequired: {
                                                                width: any;
                                                                height: any;
                                                            };
                                                        };
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
                                                        NonLinearClickThrough: {};
                                                        AdParameters: {};
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
                                                                ClickThrough: {};
                                                                ClickTracking: {};
                                                                CustomClick: {};
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
                                                                TrackingEvents: {
                                                                    follow: {
                                                                        Tracking: {
                                                                            attrsRequired: {
                                                                                event: string[];
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                                CompanionClickThrough: {};
                                                                AltText: {};
                                                                AdParameters: {};
                                                            };
                                                            attrsRequired: {
                                                                width: any;
                                                                height: any;
                                                            };
                                                        };
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
                            };
                            alo: {
                                Impression: {};
                            };
                            follow: {
                                Error: {};
                                Extensions: {
                                    required: {
                                        Extension: {};
                                    };
                                };
                            };
                        };
                    };
                    attrsRequired: {
                        id: any;
                    };
                };
            };
            attrsRequired: {
                version: string[];
            };
        };
    };
};
