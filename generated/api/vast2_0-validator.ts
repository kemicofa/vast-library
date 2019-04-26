/* tslint:disable: variable-name object-literal-sort-keys */

///////////////////////////////////////////////////////
//  IMPORTANT: this file is generated, dont edit it
/////////

export const vastValidator2_0 = {
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
                            TrackingEvents: {
                              follow: {
                                Tracking: {
                                  attrsRequired: {
                                    event: [
                                      "creativeView",
                                      "start",
                                      "midpoint",
                                      "firstQuartile",
                                      "thirdQuartile",
                                      "complete",
                                      "mute",
                                      "unmute",
                                      "pause",
                                      "rewind",
                                      "resume",
                                      "fullscreen",
                                      "expand",
                                      "collapse",
                                      "acceptInvitation",
                                      "close"
                                    ]
                                  }
                                }
                              }
                            },
                            AdParameters: {},
                            VideoClicks: {
                              follow: {
                                ClickThrough: {},
                                ClickTracking: {},
                                CustomClick: {}
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
                                TrackingEvents: {
                                  follow: {
                                    Tracking: {
                                      attrsRequired: { event: ["creativeView"] }
                                    }
                                  }
                                },
                                CompanionClickThrough: {},
                                AltText: {},
                                AdParameters: {}
                              },
                              attrsRequired: { width: null, height: null }
                            }
                          }
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
                              attrsRequired: { width: null, height: null }
                            },
                            TrackingEvents: {
                              follow: {
                                Tracking: {
                                  attrsRequired: {
                                    event: [
                                      "creativeView",
                                      "start",
                                      "midpoint",
                                      "firstQuartile",
                                      "thirdQuartile",
                                      "complete",
                                      "mute",
                                      "unmute",
                                      "pause",
                                      "rewind",
                                      "resume",
                                      "fullscreen",
                                      "expand",
                                      "collapse",
                                      "acceptInvitation",
                                      "close"
                                    ]
                                  }
                                }
                              }
                            },
                            NonLinearClickThrough: {},
                            AdParameters: {}
                          }
                        }
                      }
                    }
                  }
                }
              },
              alo: { Impression: {} },
              follow: {
                Description: {},
                Survey: {},
                Error: {},
                Extensions: { required: { Extension: {} } }
              }
            },
            Wrapper: {
              required: {
                AdSystem: {},
                VASTAdTagURI: {},
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
                                      "midpoint",
                                      "firstQuartile",
                                      "thirdQuartile",
                                      "complete",
                                      "mute",
                                      "unmute",
                                      "pause",
                                      "rewind",
                                      "resume",
                                      "fullscreen",
                                      "expand",
                                      "collapse",
                                      "acceptInvitation",
                                      "close"
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
                                TrackingEvents: {
                                  follow: {
                                    Tracking: {
                                      attrsRequired: { event: ["creativeView"] }
                                    }
                                  }
                                },
                                CompanionClickThrough: {},
                                AltText: {},
                                AdParameters: {}
                              },
                              attrsRequired: { width: null, height: null }
                            }
                          }
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
                              attrsRequired: { width: null, height: null }
                            },
                            TrackingEvents: {
                              follow: {
                                Tracking: {
                                  attrsRequired: {
                                    event: [
                                      "creativeView",
                                      "start",
                                      "midpoint",
                                      "firstQuartile",
                                      "thirdQuartile",
                                      "complete",
                                      "mute",
                                      "unmute",
                                      "pause",
                                      "rewind",
                                      "resume",
                                      "fullscreen",
                                      "expand",
                                      "collapse",
                                      "acceptInvitation",
                                      "close"
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
                }
              },
              alo: { Impression: {} },
              follow: { Error: {}, Extensions: { required: { Extension: {} } } }
            }
          },
          attrsRequired: { id: null }
        }
      },
      attrsRequired: { version: ["2.0"] }
    }
  }
};
