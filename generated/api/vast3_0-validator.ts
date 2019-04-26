/* tslint:disable: variable-name object-literal-sort-keys */

///////////////////////////////////////////////////////
//  IMPORTANT: this file is generated, dont edit it
/////////

export const vastValidator3_0 = {
  only: {
    VAST: {
      alo: {
        Ad: {
          uniq: {
            InLine: {
              required: {
                AdSystem: {},
                AdTitle: {},
                Creatives: {
                  alo: {
                    Creative: {
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
                              }
                            }
                          },
                          follow: {
                            AdParameters: {},
                            TrackingEvents: {
                              follow: {
                                Tracking: {
                                  attrsRequired: {
                                    event: [
                                      "creativeView",
                                      "start",
                                      "firstQuartile",
                                      "midpoint",
                                      "thirdQuartile",
                                      "complete",
                                      "mute",
                                      "unmute",
                                      "pause",
                                      "rewind",
                                      "resume",
                                      "fullscreen",
                                      "exitFullscreen",
                                      "expand",
                                      "collapse",
                                      "acceptInvitationLinear",
                                      "closeLinear",
                                      "skip",
                                      "progress"
                                    ]
                                  }
                                }
                              }
                            },
                            VideoClicks: {
                              follow: {
                                ClickThrough: {},
                                ClickTracking: {},
                                CustomClick: {}
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
                                  },
                                  attrsRequired: {
                                    program: null,
                                    width: null,
                                    height: null,
                                    xPosition: null,
                                    yPosition: null
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
                        },
                        NonLinearAds: {
                          follow: {
                            NonLinear: {
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
                                NonLinearClickThrough: {},
                                NonLinearClickTracking: {},
                                AdParameters: {}
                              },
                              attrsRequired: { width: null, height: null }
                            },
                            TrackingEvents: {
                              follow: {
                                Tracking: {
                                  attrsRequired: {
                                    event: [
                                      "creativeView",
                                      "start",
                                      "firstQuartile",
                                      "midpoint",
                                      "thirdQuartile",
                                      "complete",
                                      "mute",
                                      "unmute",
                                      "pause",
                                      "rewind",
                                      "resume",
                                      "fullscreen",
                                      "exitFullscreen",
                                      "expand",
                                      "collapse",
                                      "acceptInvitation",
                                      "close",
                                      "progress"
                                    ]
                                  }
                                }
                              }
                            }
                          }
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
                Extensions: { required: { Extension: {} } }
              }
            },
            Wrapper: {
              required: { AdSystem: {}, VASTAdTagURI: {} },
              alo: { Impression: {} },
              follow: {
                Error: {},
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
                                      "creativeView",
                                      "start",
                                      "firstQuartile",
                                      "midpoint",
                                      "thirdQuartile",
                                      "complete",
                                      "mute",
                                      "unmute",
                                      "pause",
                                      "rewind",
                                      "resume",
                                      "fullscreen",
                                      "exitFullscreen",
                                      "expand",
                                      "collapse",
                                      "acceptInvitationLinear",
                                      "closeLinear",
                                      "skip",
                                      "progress"
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
                                  },
                                  attrsRequired: {
                                    program: null,
                                    width: null,
                                    height: null,
                                    xPosition: null,
                                    yPosition: null
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
                        },
                        NonLinearAds: {
                          follow: {
                            NonLinear: {
                              follow: { NonLinearClickTracking: {} },
                              attrsRequired: { width: null, height: null }
                            },
                            TrackingEvents: {
                              follow: {
                                Tracking: {
                                  attrsRequired: {
                                    event: [
                                      "creativeView",
                                      "start",
                                      "firstQuartile",
                                      "midpoint",
                                      "thirdQuartile",
                                      "complete",
                                      "mute",
                                      "unmute",
                                      "pause",
                                      "rewind",
                                      "resume",
                                      "fullscreen",
                                      "exitFullscreen",
                                      "expand",
                                      "collapse",
                                      "acceptInvitation",
                                      "close",
                                      "progress"
                                    ]
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
                Extensions: { required: { Extension: {} } }
              }
            }
          }
        }
      },
      follow: { Error: {} },
      attrsRequired: { version: ["3.0"] }
    }
  }
};
