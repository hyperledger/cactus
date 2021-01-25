/**
 * Hyperledger Cactus Plugin - HTLC-Eth Besu
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class NewContractObj {
    'outputAmount'?: number;
    'expiration'?: number;
    'hashLock'?: string;
    'receiver'?: string;
    'outputNetwork'?: string;
    'outputAddress'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "outputAmount",
            "baseName": "outputAmount",
            "type": "number",
            "format": "uint256"
        },
        {
            "name": "expiration",
            "baseName": "expiration",
            "type": "number",
            "format": "uint256"
        },
        {
            "name": "hashLock",
            "baseName": "hashLock",
            "type": "string",
            "format": "bytes32"
        },
        {
            "name": "receiver",
            "baseName": "receiver",
            "type": "string",
            "format": ""
        },
        {
            "name": "outputNetwork",
            "baseName": "outputNetwork",
            "type": "string",
            "format": ""
        },
        {
            "name": "outputAddress",
            "baseName": "outputAddress",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NewContractObj.attributeTypeMap;
    }
    
    public constructor() {
    }
}

