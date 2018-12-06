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
                "endpointId": "endpoint-002",
                "manufacturerName": "Sample Manufacturer",
                "friendlyName": "でんき",
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
                            "proactivelyReported": false,
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
                            "proactivelyReported": false,
                            "retrievable": true
                        }
                    }
                ]
            },
            {
                "endpointId": "endpoint-009",
                "manufacturerName": "Sample Manufacturer",
                "friendlyName": "テレビ",
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
