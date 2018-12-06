const Alehos = require('alehos3');

const alehos = new Alehos();

Object.keys(alehos.handlers).forEach(key => alehos.registerHandler(key, (req, cb) => {
    console.log('----------StartLog----------');
    console.log(JSON.stringify(req));
    console.log('----------EndLog------------');
    cb(null);
}));

alehos.registerHandler('reportState', (req, cb) => {
    const properties = [
        {
            "namespace":"Alexa.LockController",
            "name":"lockState",
            "value":"LOCKED",
        }
    ];
    cb(null, properties);
});

alehos.registerHandler('lockControllerUnlock', (req, cb) => {
    const properties = [
        {
            "namespace":"Alexa.LockController",
            "name":"lockState",
            "value":"UNLOCKED",
        }
    ];
    cb(null, properties);
});

alehos.registerHandler('lockControllerLock', (req, cb) => {
    const properties = [
        {
            "namespace":"Alexa.LockController",
            "name":"lockState",
            "value":"LOCKED",
        }
    ];
    cb(null, properties);
});

alehos.registerHandler('discover', (req, cb) => {
    const payload = {
        endpoints: [
            {
                "endpointId": "endpoint-001",
                "manufacturerName": "Sample Manufacturer",
                "friendlyName": "Switch",
                "description": "001 Switch that can only be turned on/off",
                "displayCategories": [
                    "SWITCH"
                ],
                "cookie": {
                    "detail1": "For simplicity, this is the only appliance",
                    "detail2": "that has some values in the additionalApplianceDetails"
                },
                "capabilities": [
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa",
                        "version": "3"
                    },
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa.PowerController",
                        "version": "3",
                        "properties": {
                            "supported": [
                                {
                                    "name": "powerState"
                                }
                            ],
                            "proactivelyReported": true,
                            "retrievable": true
                        }
                    },
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa.EndpointHealth",
                        "version": "3",
                        "properties": {
                            "supported": [
                                {
                                    "name": "connectivity"
                                }
                            ],
                            "proactivelyReported": true,
                            "retrievable": true
                        }
                    }
                ]
            },
            {
                "endpointId": "endpoint-002",
                "manufacturerName": "Sample Manufacturer",
                "friendlyName": "Light",
                "description": "002 Light that is dimmable and can change color and color temperature",
                "displayCategories": [
                    "LIGHT"
                ],
                "cookie": {},
                "capabilities": [
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa",
                        "version": "3"
                    },
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa.PowerController",
                        "version": "3",
                        "properties": {
                            "supported": [
                                {
                                    "name": "powerState"
                                }
                            ],
                            "proactivelyReported": true,
                            "retrievable": true
                        }
                    },
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa.ColorController",
                        "version": "3",
                        "properties": {
                            "supported": [
                                {
                                    "name": "color"
                                }
                            ],
                            "proactivelyReported": true,
                            "retrievable": true
                        }
                    },
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa.ColorTemperatureController",
                        "version": "3",
                        "properties": {
                            "supported": [
                                {
                                    "name": "colorTemperatureInKelvin"
                                }
                            ],
                            "proactivelyReported": true,
                            "retrievable": true
                        }
                    },
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa.BrightnessController",
                        "version": "3",
                        "properties": {
                            "supported": [
                                {
                                    "name": "brightness"
                                }
                            ],
                            "proactivelyReported": true,
                            "retrievable": true
                        }
                    },
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa.PowerLevelController",
                        "version": "3",
                        "properties": {
                            "supported": [
                                {
                                    "name": "powerLevel"
                                }
                            ],
                            "proactivelyReported": true,
                            "retrievable": true
                        }
                    },
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa.PercentageController",
                        "version": "3",
                        "properties": {
                            "supported": [
                                {
                                    "name": "percentage"
                                }
                            ],
                            "proactivelyReported": true,
                            "retrievable": true
                        }
                    },
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa.EndpointHealth",
                        "version": "3",
                        "properties": {
                            "supported": [
                                {
                                    "name": "connectivity"
                                }
                            ],
                            "proactivelyReported": true,
                            "retrievable": true
                        }
                    }
                ]
            },
            {
                "endpointId": "endpoint-003",
                "manufacturerName": "Sample Manufacturer",
                "friendlyName": "White Light",
                "description": "003 Light that is dimmable and can change color temperature only",
                "displayCategories": [
                    "LIGHT"
                ],
                "cookie": {},
                "capabilities": [
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa",
                        "version": "3"
                    },
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa.PowerController",
                        "version": "3",
                        "properties": {
                            "supported": [
                                {
                                    "name": "powerState"
                                }
                            ],
                            "proactivelyReported": true,
                            "retrievable": true
                        }
                    },
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa.ColorTemperatureController",
                        "version": "3",
                        "properties": {
                            "supported": [
                                {
                                    "name": "colorTemperatureInKelvin"
                                }
                            ],
                            "proactivelyReported": true,
                            "retrievable": true
                        }
                    },
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa.BrightnessController",
                        "version": "3",
                        "properties": {
                            "supported": [
                                {
                                    "name": "brightness"
                                }
                            ],
                            "proactivelyReported": true,
                            "retrievable": true
                        }
                    },
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa.PowerLevelController",
                        "version": "3",
                        "properties": {
                            "supported": [
                                {
                                    "name": "powerLevel"
                                }
                            ],
                            "proactivelyReported": true,
                            "retrievable": true
                        }
                    },
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa.PercentageController",
                        "version": "3",
                        "properties": {
                            "supported": [
                                {
                                    "name": "percentage"
                                }
                            ],
                            "proactivelyReported": true,
                            "retrievable": true
                        }
                    },
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa.EndpointHealth",
                        "version": "3",
                        "properties": {
                            "supported": [
                                {
                                    "name": "connectivity"
                                }
                            ],
                            "proactivelyReported": true,
                            "retrievable": true
                        }
                    }
                ]
            },
            {
                "endpointId": "endpoint-004",
                "manufacturerName": "Sample Manufacturer",
                "friendlyName": "Thermostat",
                "description": "004 Thermostat that can change and query temperatures",
                "displayCategories": [
                    "THERMOSTAT"
                ],
                "cookie": {},
                "capabilities": [
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa",
                        "version": "3"
                    },
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa.ThermostatController",
                        "version": "3",
                        "properties": {
                            "supported": [
                                {
                                    "name": "targetSetpoint"
                                },
                                {
                                    "name": "thermostatMode"
                                }
                            ],
                            "proactivelyReported": true,
                            "retrievable": true
                        }
                    },
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa.TemperatureSensor",
                        "version": "3",
                        "properties": {
                            "supported": [
                                {
                                    "name": "temperature"
                                }
                            ],
                            "proactivelyReported": true,
                            "retrievable": true
                        }
                    },
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa.EndpointHealth",
                        "version": "3",
                        "properties": {
                            "supported": [
                                {
                                    "name": "connectivity"
                                }
                            ],
                            "proactivelyReported": true,
                            "retrievable": true
                        }
                    }
                ]
            },
            {
                "endpointId": "endpoint-004-1",
                "manufacturerName": "Sample Manufacturer",
                "friendlyName": "Living Room Thermostat",
                "description": "004-1 Thermostat that can change and query temperatures, supports dual setpoints",
                "displayCategories": [
                    "OTHER"
                ],
                "cookie": {},
                "capabilities": [
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa",
                        "version": "3"
                    },
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa.ThermostatController",
                        "version": "3",
                        "properties": {
                            "supported": [
                                {
                                    "name": "upperSetpoint"
                                },
                                {
                                    "name": "lowerSetpoint"
                                },
                                {
                                    "name": "thermostatMode"
                                }
                            ],
                            "proactivelyReported": true,
                            "retrievable": true
                        }
                    },
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa.TemperatureSensor",
                        "version": "3",
                        "properties": {
                            "supported": [
                                {
                                    "name": "temperature"
                                }
                            ],
                            "proactivelyReported": true,
                            "retrievable": true
                        }
                    },
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa.EndpointHealth",
                        "version": "3",
                        "properties": {
                            "supported": [
                                {
                                    "name": "connectivity"
                                }
                            ],
                            "proactivelyReported": true,
                            "retrievable": true
                        }
                    }
                ]
            },
            {
                "endpointId": "endpoint-005",
                "manufacturerName": "Sample Manufacturer",
                "friendlyName": "玄関",
                "description": "005 Lock that can be locked and can query lock state",
                "displayCategories": [
                    "SMARTLOCK"
                ],
                "cookie": {},
                "capabilities": [
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa",
                        "version": "3"
                    },
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa.LockController",
                        "version": "3",
                        "properties": {
                            "supported": [
                                {
                                    "name": "lockState"
                                }
                            ],
                            "proactivelyReported": true,
                            "retrievable": true
                        }
                    },
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa.EndpointHealth",
                        "version": "3",
                        "properties": {
                            "supported": [
                                {
                                    "name": "connectivity"
                                }
                            ],
                            "proactivelyReported": true,
                            "retrievable": true
                        }
                    }
                ]
            },
            {
                "endpointId": "endpoint-006",
                "manufacturerName": "Sample Manufacturer",
                "friendlyName": "Goodnight",
                "description": "006 Scene that can only be turned on",
                "displayCategories": [
                    "SCENE_TRIGGER"
                ],
                "cookie": {},
                "capabilities": [
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa",
                        "version": "3"
                    },
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa.SceneController",
                        "version": "3",
                        "supportsDeactivation": false,
                        "proactivelyReported": true
                    },
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa.EndpointHealth",
                        "version": "3",
                        "properties": {
                            "supported": [
                                {
                                    "name": "connectivity"
                                }
                            ],
                            "proactivelyReported": true,
                            "retrievable": true
                        }
                    }
                ]
            },
            {
                "endpointId": "endpoint-007",
                "manufacturerName": "Sample Manufacturer",
                "friendlyName": "Watch TV",
                "description": "007 Activity that runs sequentially that can be turned on and off",
                "displayCategories": [
                    "ACTIVITY_TRIGGER"
                ],
                "cookie": {},
                "capabilities": [
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa",
                        "version": "3"
                    },
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa.SceneController",
                        "version": "3",
                        "supportsDeactivation": true,
                        "proactivelyReported": true
                    },
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa.EndpointHealth",
                        "version": "3",
                        "properties": {
                            "supported": [
                                {
                                    "name": "connectivity"
                                }
                            ],
                            "proactivelyReported": true,
                            "retrievable": true
                        }
                    }
                ]
            },
            {
                "endpointId": "endpoint-008",
                "manufacturerName": "Sample Manufacturer",
                "friendlyName": "Baby Camera",
                "description": "008 Camera that streams from an RSTP source",
                "displayCategories": [
                    "CAMERA"
                ],
                "cookie": {},
                "capabilities": [
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa",
                        "version": "3"
                    },
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa.CameraStreamController",
                        "version": "3",
                        "cameraStreamConfigurations": [
                            {
                                "protocols": [
                                    "RTSP"
                                ],
                                "resolutions": [
                                    {
                                        "width": 1280,
                                        "height": 720
                                    }
                                ],
                                "authorizationTypes": [
                                    "NONE"
                                ],
                                "videoCodecs": [
                                    "H264"
                                ],
                                "audioCodecs": [
                                    "AAC"
                                ]
                            }
                        ]
                    },
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa.EndpointHealth",
                        "version": "3",
                        "properties": {
                            "supported": [
                                {
                                    "name": "connectivity"
                                }
                            ],
                            "proactivelyReported": true,
                            "retrievable": true
                        }
                    }
                ]
            },
            {
                "endpointId": "endpoint-009",
                "manufacturerName": "Sample Manufacturer",
                "friendlyName": "TV",
                "description": "009 TV that supports various entertainment controllers",
                "displayCategories": [
                    "OTHER"
                ],
                "cookie": {},
                "capabilities": [
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa",
                        "version": "3"
                    },
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa.ChannelController",
                        "version": "3",
                        "properties": {
                            "supported": [
                                {
                                    "name": "channel"
                                }
                            ],
                            "proactivelyReported": true,
                            "retrievable": true
                        }
                    },
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa.InputController",
                        "version": "3",
                        "properties": {
                            "supported": [
                                {
                                    "name": "input"
                                }
                            ],
                            "proactivelyReported": true,
                            "retrievable": true
                        }
                    },
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa.Speaker",
                        "version": "3",
                        "properties": {
                            "supported": [
                                {
                                    "name": "volume"
                                },
                                {
                                    "name": "muted"
                                }
                            ],
                            "proactivelyReported": true,
                            "retrievable": true
                        }
                    },
                    {
                        "type": "AlexaInterface",
                        "interface": "Alexa.EndpointHealth",
                        "version": "3",
                        "properties": {
                            "supported": [
                                {
                                    "name": "connectivity"
                                }
                            ],
                            "proactivelyReported": true,
                            "retrievable": true
                        }
                    }
                ]
            }
        ]
    };

    cb(null, null, payload);
});

module.exports.handler = function (event, context, cb) {
    console.log('----------RawEventDataStart----------');
    console.log(JSON.stringify(event));
    console.log('----------RawEventDataEnd----------');
    alehos.handle(event, context, cb);
};
