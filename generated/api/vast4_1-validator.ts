/* tslint:disable: variable-name object-literal-sort-keys */

///////////////////////////////////////////////////////
//  IMPORTANT: this file is generated, dont edit it
/////////

export const vastValidator4_1 = {
  only: {
    VAST: {
      alo: {
        Ad: {
          uniq: {
            InLine: {
              required: {
                AdSystem: {},
                AdTitle: {},
                AdServingID: {},
                Creatives: {
                  alo: {
                    Creative: {
                      required: {
                        UniversalAdId: { attrsRequired: { idRegistry: null } }
                      },
                      uniq: {
                        Linear: {
                          required: {
                            Duration: {},
                            MediaFiles: {
                              alo: {
                                MediaFile: {
                                  attrsRequired: {
                                    delivery: ["progressive", "streaming"],
                                    type: null,
                                    width: null,
                                    height: null
                                  }
                                }
                              },
                              follow: {
                                Mezzanine: {
                                  attrsRequired: {
                                    delivery: ["progressive", "streaming"],
                                    type: null,
                                    width: null,
                                    height: null
                                  }
                                },
                                InteractiveCreativeFile: {},
                                ClosedCaptionFiles: {
                                  follow: { ClosedCaptionFile: {} }
                                }
                              }
                            }
                          },
                          follow: {
                            AdParameters: {},
                            VideoClicks: {
                              follow: {
                                ClickThrough: {},
                                ClickTracking: {},
                                CustomClick: {}
                              }
                            },
                            TrackingEvents: {
                              follow: {
                                Tracking: {
                                  attrsRequired: {
                                    event: [
                                      "loaded",
                                      "start",
                                      "firstQuartile",
                                      "midpoint",
                                      "thirdQuartile",
                                      "complete",
                                      "progress",
                                      "closeLinear",
                                      "otherAdInteraction",
                                      "mute",
                                      "unmute",
                                      "pause",
                                      "resume",
                                      "rewind",
                                      "skip",
                                      "playerExpand",
                                      "playerCollapse",
                                      "notUsed"
                                    ]
                                  }
                                }
                              }
                            },
                            Icons: {
                              alo: {
                                Icon: {
                                  alo: {
                                    StaticResource: {
                                      attrsRequired: {
                                        creativeType: [
                                          "image/gif",
                                          "image/jpeg",
                                          "image/jpg",
                                          "image/png",
                                          "application/x-javascript",
                                          "application/x-shockwave-flash"
                                        ]
                                      }
                                    },
                                    IFrameResource: {},
                                    HTMLResource: {}
                                  },
                                  follow: {
                                    IconClicks: {
                                      follow: {
                                        IconClickThrough: {},
                                        IconClickTracking: {}
                                      }
                                    },
                                    IconViewTracking: {}
                                  }
                                }
                              }
                            }
                          }
                        },
                        NonLinearAds: {
                          follow: {
                            NonLinear: {
                              follow: {
                                NonLinearClickThrough: {},
                                NonLinearClickTracking: {}
                              },
                              attrsRequired: { width: null, height: null }
                            },
                            TrackingEvents: {
                              follow: {
                                Tracking: {
                                  attrsRequired: {
                                    event: [
                                      "creativeView",
                                      "acceptInvitation",
                                      "adExpand",
                                      "adCollapse",
                                      "minimize",
                                      "close",
                                      "overlayViewDuration",
                                      "otherAdInteraction",
                                      "mute",
                                      "unmute",
                                      "pause",
                                      "resume",
                                      "rewind",
                                      "skip",
                                      "playerExpand",
                                      "playerCollapse",
                                      "notUsed"
                                    ]
                                  }
                                }
                              }
                            }
                          }
                        },
                        CompanionAds: {
                          follow: {
                            Companion: {
                              alo: {
                                StaticResource: {
                                  attrsRequired: {
                                    creativeType: [
                                      "image/gif",
                                      "image/jpeg",
                                      "image/jpg",
                                      "image/png",
                                      "application/x-javascript",
                                      "application/x-shockwave-flash"
                                    ]
                                  }
                                },
                                IFrameResource: {},
                                HTMLResource: {}
                              },
                              follow: {
                                AdParameters: {},
                                AltText: {},
                                CompanionClickThrough: {},
                                CompanionClickTracking: {},
                                TrackingEvents: {
                                  follow: {
                                    Tracking: {
                                      attrsRequired: { event: ["creativeView"] }
                                    }
                                  }
                                }
                              },
                              attrsRequired: { width: null, height: null }
                            }
                          },
                          attrsRequired: { required: ["all", "any", "none"] }
                        }
                      },
                      follow: {
                        CreativeExtensions: {
                          follow: { CreativeExtension: {} }
                        }
                      }
                    }
                  }
                }
              },
              alo: { Impression: {} },
              follow: {
                Category: { attrsRequired: { authority: null } },
                Description: {},
                Advertiser: {},
                Pricing: {
                  attrsRequired: {
                    currency: null,
                    model: ["CPM", "CPC", "CPE", "CPV"]
                  }
                },
                Survey: {},
                Error: {},
                Expires: {},
                ViewableImpression: {
                  follow: {
                    Viewable: {},
                    NotViewable: {},
                    ViewUndetermined: {}
                  }
                },
                AdVerifications: {
                  follow: {
                    Verification: {
                      follow: {
                        JavaScriptResource: {
                          attrsRequired: {
                            apiFramework: null,
                            browserOptional: null
                          }
                        },
                        ExecutableResource: {
                          attrsRequired: { apiFramework: null }
                        },
                        TrackingEvents: {
                          follow: {
                            Tracking: {
                              attrsRequired: {
                                event: ["verificationNotExecuted"]
                              }
                            }
                          }
                        },
                        VerificationParameters: {}
                      },
                      attrsRequired: { vendor: null }
                    }
                  }
                },
                Extensions: { required: { Extension: {} } }
              }
            },
            Wrapper: {
              required: { VASTAdTagURI: {}, AdSystem: {} },
              alo: { Impression: {} },
              follow: {
                Pricing: {
                  attrsRequired: {
                    currency: null,
                    model: ["CPM", "CPC", "CPE", "CPV"]
                  }
                },
                Error: {},
                ViewableImpression: {
                  follow: {
                    Viewable: {},
                    NotViewable: {},
                    ViewUndetermined: {}
                  }
                },
                AdVerifications: {
                  follow: {
                    Verification: {
                      follow: {
                        JavaScriptResource: {
                          attrsRequired: {
                            apiFramework: null,
                            browserOptional: null
                          }
                        },
                        ExecutableResource: {
                          attrsRequired: { apiFramework: null }
                        },
                        TrackingEvents: {
                          follow: {
                            Tracking: {
                              attrsRequired: {
                                event: ["verificationNotExecuted"]
                              }
                            }
                          }
                        },
                        VerificationParameters: {},
                        BlockedAdCategories: {
                          attrsRequired: { authority: null }
                        }
                      },
                      attrsRequired: { vendor: null }
                    }
                  }
                },
                Extensions: { follow: { Extension: {} } },
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
                                    event: [
                                      "loaded",
                                      "start",
                                      "firstQuartile",
                                      "midpoint",
                                      "thirdQuartile",
                                      "complete",
                                      "progress",
                                      "closeLinear",
                                      "otherAdInteraction",
                                      "mute",
                                      "unmute",
                                      "pause",
                                      "resume",
                                      "rewind",
                                      "skip",
                                      "playerExpand",
                                      "playerCollapse",
                                      "notUsed"
                                    ]
                                  }
                                }
                              }
                            },
                            VideoClicks: {
                              follow: { ClickTracking: {}, CustomClick: {} }
                            },
                            Icons: {
                              alo: {
                                Icon: {
                                  alo: {
                                    StaticResource: {
                                      attrsRequired: {
                                        creativeType: [
                                          "image/gif",
                                          "image/jpeg",
                                          "image/jpg",
                                          "image/png",
                                          "application/x-javascript",
                                          "application/x-shockwave-flash"
                                        ]
                                      }
                                    },
                                    IFrameResource: {},
                                    HTMLResource: {}
                                  },
                                  follow: {
                                    IconClicks: {
                                      follow: {
                                        IconClickThrough: {},
                                        IconClickTracking: {}
                                      }
                                    },
                                    IconViewTracking: {}
                                  }
                                }
                              }
                            },
                            InteractiveCreativeFile: {}
                          }
                        },
                        NonLinearAds: {
                          follow: {
                            NonLinear: {
                              follow: {
                                NonLinearClickThrough: {},
                                NonLinearClickTracking: {}
                              },
                              attrsRequired: { width: null, height: null }
                            },
                            TrackingEvents: {
                              follow: {
                                Tracking: {
                                  attrsRequired: {
                                    event: [
                                      "creativeView",
                                      "acceptInvitation",
                                      "adExpand",
                                      "adCollapse",
                                      "minimize",
                                      "close",
                                      "overlayViewDuration",
                                      "otherAdInteraction",
                                      "mute",
                                      "unmute",
                                      "pause",
                                      "resume",
                                      "rewind",
                                      "skip",
                                      "playerExpand",
                                      "playerCollapse",
                                      "notUsed"
                                    ]
                                  }
                                }
                              }
                            }
                          }
                        },
                        CompanionAds: {
                          follow: {
                            Companion: {
                              alo: {
                                StaticResource: {
                                  attrsRequired: {
                                    creativeType: [
                                      "image/gif",
                                      "image/jpeg",
                                      "image/jpg",
                                      "image/png",
                                      "application/x-javascript",
                                      "application/x-shockwave-flash"
                                    ]
                                  }
                                },
                                IFrameResource: {},
                                HTMLResource: {}
                              },
                              follow: {
                                AdParameters: {},
                                AltText: {},
                                CompanionClickThrough: {},
                                CompanionClickTracking: {},
                                TrackingEvents: {
                                  follow: {
                                    Tracking: {
                                      attrsRequired: { event: ["creativeView"] }
                                    }
                                  }
                                }
                              },
                              attrsRequired: { width: null, height: null }
                            }
                          },
                          attrsRequired: { required: ["all", "any", "none"] }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      follow: { Error: {} },
      attrsRequired: { version: ["4.1"] }
    }
  }
};
