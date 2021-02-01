export default [
    {
            title: "Fetch Biller List",
            description: "Hello 0",
            path_parameters: [
              {
                name: "X-Setu-Product-Instance-ID",
                type: "string",
                required: true,
                description: "Identifier for product instance",
              },
            ],
            header_parameters: [
              {
                name: "X-Setu-Product-Instance-ID",
                type: "string",
                required: true,
                description: "Identifier for product instance",
              },
            ],
            request_body_schema: {
              type: "application/json",
              input_parameters: [
                {
                  name: "payment",
                  required: true,
                  type: "object",
                  description:
                    "Unique transaction reference ID for a payment in the payer app system",
                },
              ],
            },
            success_response_schema: {},
            responses: { 200: {
              "data": {
                  "name": "W3H325-ElectricBill",
                  "paymentLink": {},
                  "platformBillID": 365967071101584800
              },
              "status": 0,
              "success": true
          },
          400: {
              "error": {
                  "errors": [],
                  "traceID": "string",
                  "code": "string",
                  "detail": "string",
                  "docURL": "string",
                  "title": "string"
              },
              "status": 0,
              "success": true
          },
          401: {
              "error": {
                  "errors": [],
                  "traceID": "string",
                  "code": "string",
                  "detail": "string",
                  "docURL": "string",
                  "title": "string"
              },
              "status": 0,
              "success": true
          },
          403: {
              "error": {
                  "errors": [],
                  "traceID": "string",
                  "code": "string",
                  "detail": "string",
                  "docURL": "string",
                  "title": "string"
              },
              "status": 0,
              "success": true
          },
          405: {
              "error": {
                  "errors": [],
                  "traceID": "string",
                  "code": "string",
                  "detail": "string",
                  "docURL": "string",
                  "title": "string"
              },
              "status": 0,
              "success": true
          },
          429: {
              "error": {
                  "errors": [],
                  "traceID": "string",
                  "code": "string",
                  "detail": "string",
                  "docURL": "string",
                  "title": "string"
              },
              "status": 0,
              "success": true
          },
          500: {
              "error": {
                  "errors": [],
                  "traceID": "string",
                  "code": "string",
                  "detail": "string",
                  "docURL": "string",
                  "title": "string"
              },
              "status": 0,
              "success": true
          },
          502: {
              "error": {
                  "errors": [],
                  "traceID": "string",
                  "code": "string",
                  "detail": "string",
                  "docURL": "string",
                  "title": "string"
              },
              "status": 0,
              "success": true
          },
      
      
      }
      , //responses
            request_sample: {payload: {
              amount: {
                currencyCode: "INR",
                value: 10000,
              },
              amountExactness: "EXACT",
              billerBillID: "EB-1123-345324",
              dueDate: "2020-05-15T12:23:50Z",
              expiryDate: "2020-05-15T12:23:50Z",
              name: "W3H325-ElectricBill",
              settlement: {
                parts: [],
                primaryAccount: {},
              },
            }}, //payload
          
    },
    {
      title: "Fetch Biller List",
      description: "Hello 0",
      path_parameters: [
        {
          name: "X-Setu-Product-Instance-ID",
          type: "string",
          required: true,
          description: "Identifier for product instance",
        },
      ],
      header_parameters: [
        {
          name: "X-Setu-Product-Instance-ID",
          type: "string",
          required: true,
          description: "Identifier for product instance",
        },
      ],
      request_body_schema: {
        type: "application/json",
        input_parameters: [
          {
            name: "payment",
            required: true,
            type: "object",
            description:
              "Unique transaction reference ID for a payment in the payer app system",
          },
        ],
      },
      success_response_schema: {},
      responses: { 200: {
        "data": {
            "name": "W3H325-ElectricBill",
            "paymentLink": {},
            "platformBillID": 365967071101584800
        },
        "status": 0,
        "success": true
    },
    400: {
        "error": {
            "errors": [],
            "traceID": "string",
            "code": "string",
            "detail": "string",
            "docURL": "string",
            "title": "string"
        },
        "status": 0,
        "success": true
    },
    401: {
        "error": {
            "errors": [],
            "traceID": "string",
            "code": "string",
            "detail": "string",
            "docURL": "string",
            "title": "string"
        },
        "status": 0,
        "success": true
    },
    403: {
        "error": {
            "errors": [],
            "traceID": "string",
            "code": "string",
            "detail": "string",
            "docURL": "string",
            "title": "string"
        },
        "status": 0,
        "success": true
    },
    405: {
        "error": {
            "errors": [],
            "traceID": "string",
            "code": "string",
            "detail": "string",
            "docURL": "string",
            "title": "string"
        },
        "status": 0,
        "success": true
    },
    429: {
        "error": {
            "errors": [],
            "traceID": "string",
            "code": "string",
            "detail": "string",
            "docURL": "string",
            "title": "string"
        },
        "status": 0,
        "success": true
    },
    500: {
        "error": {
            "errors": [],
            "traceID": "string",
            "code": "string",
            "detail": "string",
            "docURL": "string",
            "title": "string"
        },
        "status": 0,
        "success": true
    },
    502: {
        "error": {
            "errors": [],
            "traceID": "string",
            "code": "string",
            "detail": "string",
            "docURL": "string",
            "title": "string"
        },
        "status": 0,
        "success": true
    },


}
, //responses
      request_sample: {payload: {
        amount: {
          currencyCode: "INR",
          value: 10000,
        },
        amountExactness: "EXACT",
        billerBillID: "EB-1123-345324",
        dueDate: "2020-05-15T12:23:50Z",
        expiryDate: "2020-05-15T12:23:50Z",
        name: "W3H325-ElectricBill",
        settlement: {
          parts: [],
          primaryAccount: {},
        },
      }}, //payload
    },
  ];

export const payload = {
    payload: {
      amount: {
        currencyCode: "INR",
        value: 10000,
      },
      amountExactness: "EXACT",
      billerBillID: "EB-1123-345324",
      dueDate: "2020-05-15T12:23:50Z",
      expiryDate: "2020-05-15T12:23:50Z",
      name: "W3H325-ElectricBill",
      settlement: {
        parts: [],
        primaryAccount: {},
      },
    },
  };

export const status = {
    200: {
        "data": {
            "name": "W3H325-ElectricBill",
            "paymentLink": {},
            "platformBillID": 365967071101584800
        },
        "status": 0,
        "success": true
    },
    400: {
        "error": {
            "errors": [],
            "traceID": "string",
            "code": "string",
            "detail": "string",
            "docURL": "string",
            "title": "string"
        },
        "status": 0,
        "success": true
    },
    401: {
        "error": {
            "errors": [],
            "traceID": "string",
            "code": "string",
            "detail": "string",
            "docURL": "string",
            "title": "string"
        },
        "status": 0,
        "success": true
    },
    403: {
        "error": {
            "errors": [],
            "traceID": "string",
            "code": "string",
            "detail": "string",
            "docURL": "string",
            "title": "string"
        },
        "status": 0,
        "success": true
    },
    405: {
        "error": {
            "errors": [],
            "traceID": "string",
            "code": "string",
            "detail": "string",
            "docURL": "string",
            "title": "string"
        },
        "status": 0,
        "success": true
    },
    429: {
        "error": {
            "errors": [],
            "traceID": "string",
            "code": "string",
            "detail": "string",
            "docURL": "string",
            "title": "string"
        },
        "status": 0,
        "success": true
    },
    500: {
        "error": {
            "errors": [],
            "traceID": "string",
            "code": "string",
            "detail": "string",
            "docURL": "string",
            "title": "string"
        },
        "status": 0,
        "success": true
    },
    502: {
        "error": {
            "errors": [],
            "traceID": "string",
            "code": "string",
            "detail": "string",
            "docURL": "string",
            "title": "string"
        },
        "status": 0,
        "success": true
    },


}
