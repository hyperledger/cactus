/* tslint:disable */
/* eslint-disable */
/**
 * Hyperledger Cactus Plugin - Connector Besu
 * Can perform basic tasks on a Besu ledger
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface BesuTransactionConfig
 */
export interface BesuTransactionConfig {
    [key: string]: object | any;

    /**
     * 
     * @type {string}
     * @memberof BesuTransactionConfig
     */
    rawTransaction?: string;
    /**
     * 
     * @type {string | number}
     * @memberof BesuTransactionConfig
     */
    from?: string | number;
    /**
     * 
     * @type {string}
     * @memberof BesuTransactionConfig
     */
    to?: string;
    /**
     * 
     * @type {string | number}
     * @memberof BesuTransactionConfig
     */
    value?: string | number;
    /**
     * 
     * @type {string | number}
     * @memberof BesuTransactionConfig
     */
    gas?: string | number;
    /**
     * 
     * @type {string | number}
     * @memberof BesuTransactionConfig
     */
    gasPrice?: string | number;
    /**
     * 
     * @type {number}
     * @memberof BesuTransactionConfig
     */
    nonce?: number;
    /**
     * 
     * @type {string}
     * @memberof BesuTransactionConfig
     */
    data?: string;
}
/**
 * 
 * @export
 * @interface ConsistencyStrategy
 */
export interface ConsistencyStrategy {
    /**
     * 
     * @type {ReceiptType}
     * @memberof ConsistencyStrategy
     */
    receiptType: ReceiptType;
    /**
     * The amount of milliseconds to wait for the receipt to arrive to the connector. Defaults to 0 which means to wait for an unlimited amount of time. Note that this wait may be interrupted still by other parts of the infrastructure such as load balancers cutting of HTTP requests after some time even if they are the type that is supposed to be kept alive. The question of re-entrance is a broader topic not in scope to discuss here, but it is important to mention it.
     * @type {number}
     * @memberof ConsistencyStrategy
     */
    timeoutMs?: number;
    /**
     * The number of blocks to wait to be confirmed in addition to the block containing the transaction in question. Note that if the receipt type is set to only wait for node transaction pool ACK and this parameter is set to anything, but zero then the API will not accept the request due to conflicting parameters.
     * @type {number}
     * @memberof ConsistencyStrategy
     */
    blockConfirmations: number;
}
/**
 * 
 * @export
 * @interface DeployContractSolidityBytecodeV1Request
 */
export interface DeployContractSolidityBytecodeV1Request {
    /**
     * The contract name for retrieve the contracts json on the keychain.
     * @type {string}
     * @memberof DeployContractSolidityBytecodeV1Request
     */
    contractName: string;
    /**
     * The application binary interface of the solidity contract
     * @type {Array<any>}
     * @memberof DeployContractSolidityBytecodeV1Request
     */
    contractAbi: Array<any>;
    /**
     * 
     * @type {Array<any>}
     * @memberof DeployContractSolidityBytecodeV1Request
     */
    constructorArgs: Array<any>;
    /**
     * 
     * @type {Web3SigningCredential}
     * @memberof DeployContractSolidityBytecodeV1Request
     */
    web3SigningCredential: Web3SigningCredential;
    /**
     * See https://ethereum.stackexchange.com/a/47556 regarding the maximum length of the bytecode
     * @type {string}
     * @memberof DeployContractSolidityBytecodeV1Request
     */
    bytecode: string;
    /**
     * The keychainId for retrieve the contracts json.
     * @type {string}
     * @memberof DeployContractSolidityBytecodeV1Request
     */
    keychainId: string;
    /**
     * 
     * @type {number}
     * @memberof DeployContractSolidityBytecodeV1Request
     */
    gas?: number;
    /**
     * 
     * @type {string}
     * @memberof DeployContractSolidityBytecodeV1Request
     */
    gasPrice?: string;
    /**
     * The amount of milliseconds to wait for a transaction receipt with theaddress of the contract(which indicates successful deployment) beforegiving up and crashing.
     * @type {number}
     * @memberof DeployContractSolidityBytecodeV1Request
     */
    timeoutMs?: number;
}
/**
 * 
 * @export
 * @interface DeployContractSolidityBytecodeV1Response
 */
export interface DeployContractSolidityBytecodeV1Response {
    /**
     * 
     * @type {Web3TransactionReceipt}
     * @memberof DeployContractSolidityBytecodeV1Response
     */
    transactionReceipt: Web3TransactionReceipt;
}
/**
 * 
 * @export
 * @enum {string}
 */
export enum EthContractInvocationType {
    Send = 'SEND',
    Call = 'CALL'
}

/**
 * 
 * @export
 * @interface EvmLog
 */
export interface EvmLog {
    /**
     * 
     * @type {string}
     * @memberof EvmLog
     */
    address: string;
    /**
     * 
     * @type {string}
     * @memberof EvmLog
     */
    data: string;
    /**
     * 
     * @type {string}
     * @memberof EvmLog
     */
    blockHash: string;
    /**
     * 
     * @type {string}
     * @memberof EvmLog
     */
    transactionHash: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof EvmLog
     */
    topics: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof EvmLog
     */
    logIndex: number;
    /**
     * 
     * @type {number}
     * @memberof EvmLog
     */
    transactionIndex: number;
    /**
     * 
     * @type {number}
     * @memberof EvmLog
     */
    blockNumber: number;
}
/**
 * 
 * @export
 * @interface EvmTransaction
 */
export interface EvmTransaction {
    /**
     * 
     * @type {string}
     * @memberof EvmTransaction
     */
    hash?: string;
    /**
     * 
     * @type {number}
     * @memberof EvmTransaction
     */
    nonce?: number;
    /**
     * 
     * @type {any}
     * @memberof EvmTransaction
     */
    blockHash?: any | null;
    /**
     * 
     * @type {any}
     * @memberof EvmTransaction
     */
    blockNumber?: any | null;
    /**
     * 
     * @type {any}
     * @memberof EvmTransaction
     */
    transactionIndex?: any | null;
    /**
     * 
     * @type {string}
     * @memberof EvmTransaction
     */
    from?: string;
    /**
     * 
     * @type {any}
     * @memberof EvmTransaction
     */
    to?: any | null;
    /**
     * 
     * @type {string}
     * @memberof EvmTransaction
     */
    value?: string;
    /**
     * 
     * @type {string}
     * @memberof EvmTransaction
     */
    gasPrice?: string;
    /**
     * 
     * @type {number}
     * @memberof EvmTransaction
     */
    gas?: number;
    /**
     * 
     * @type {string}
     * @memberof EvmTransaction
     */
    input?: string;
}
/**
 * 
 * @export
 * @interface GetBalanceV1Request
 */
export interface GetBalanceV1Request {
    /**
     * 
     * @type {string}
     * @memberof GetBalanceV1Request
     */
    address: string;
    /**
     * 
     * @type {any}
     * @memberof GetBalanceV1Request
     */
    defaultBlock?: any | null;
}
/**
 * 
 * @export
 * @interface GetBalanceV1Response
 */
export interface GetBalanceV1Response {
    /**
     * 
     * @type {string}
     * @memberof GetBalanceV1Response
     */
    balance: string;
}
/**
 * 
 * @export
 * @interface GetPastLogsV1Request
 */
export interface GetPastLogsV1Request {
    /**
     * 
     * @type {any}
     * @memberof GetPastLogsV1Request
     */
    toBlock?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GetPastLogsV1Request
     */
    fromBlock?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GetPastLogsV1Request
     */
    address?: any | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof GetPastLogsV1Request
     */
    topics?: Array<any>;
}
/**
 * 
 * @export
 * @interface GetPastLogsV1Response
 */
export interface GetPastLogsV1Response {
    /**
     * 
     * @type {Array<EvmLog>}
     * @memberof GetPastLogsV1Response
     */
    logs: Array<EvmLog>;
}
/**
 * 
 * @export
 * @interface GetTransactionV1Request
 */
export interface GetTransactionV1Request {
    /**
     * 
     * @type {string}
     * @memberof GetTransactionV1Request
     */
    transactionHash: string;
}
/**
 * 
 * @export
 * @interface GetTransactionV1Response
 */
export interface GetTransactionV1Response {
    /**
     * 
     * @type {EvmTransaction}
     * @memberof GetTransactionV1Response
     */
    transaction: EvmTransaction;
}
/**
 * 
 * @export
 * @interface InvokeContractV1Request
 */
export interface InvokeContractV1Request {
    /**
     * 
     * @type {string}
     * @memberof InvokeContractV1Request
     */
    contractName: string;
    /**
     * 
     * @type {Web3SigningCredential}
     * @memberof InvokeContractV1Request
     */
    signingCredential: Web3SigningCredential;
    /**
     * 
     * @type {EthContractInvocationType}
     * @memberof InvokeContractV1Request
     */
    invocationType: EthContractInvocationType;
    /**
     * The name of the contract method to invoke.
     * @type {string}
     * @memberof InvokeContractV1Request
     */
    methodName: string;
    /**
     * The list of arguments to pass in to the contract method being invoked.
     * @type {Array<any>}
     * @memberof InvokeContractV1Request
     */
    params: Array<any>;
    /**
     * The application binary interface of the solidity contract, optional parameter
     * @type {Array<any>}
     * @memberof InvokeContractV1Request
     */
    contractAbi?: Array<any>;
    /**
     * Address of the solidity contract, optional parameter
     * @type {string}
     * @memberof InvokeContractV1Request
     */
    contractAddress?: string;
    /**
     * 
     * @type {string | number}
     * @memberof InvokeContractV1Request
     */
    value?: string | number;
    /**
     * 
     * @type {string | number}
     * @memberof InvokeContractV1Request
     */
    gas?: string | number;
    /**
     * 
     * @type {string | number}
     * @memberof InvokeContractV1Request
     */
    gasPrice?: string | number;
    /**
     * 
     * @type {number}
     * @memberof InvokeContractV1Request
     */
    nonce?: number;
    /**
     * The amount of milliseconds to wait for a transaction receipt beforegiving up and crashing. Only has any effect if the invocation type is SEND
     * @type {number}
     * @memberof InvokeContractV1Request
     */
    timeoutMs?: number;
    /**
     * The keychainId for retrieve the contracts json.
     * @type {string}
     * @memberof InvokeContractV1Request
     */
    keychainId?: string;
}
/**
 * 
 * @export
 * @interface InvokeContractV1Response
 */
export interface InvokeContractV1Response {
    /**
     * 
     * @type {Web3TransactionReceipt}
     * @memberof InvokeContractV1Response
     */
    transactionReceipt?: Web3TransactionReceipt;
    /**
     * 
     * @type {any}
     * @memberof InvokeContractV1Response
     */
    callOutput?: any | null;
    /**
     * 
     * @type {boolean}
     * @memberof InvokeContractV1Response
     */
    success: boolean;
}
/**
 * Enumerates the possible types of receipts that can be waited for by someone or something that has requested the execution of a transaction on a ledger.
 * @export
 * @enum {string}
 */
export enum ReceiptType {
    NodeTxPoolAck = 'NODE_TX_POOL_ACK',
    LedgerBlockAck = 'LEDGER_BLOCK_ACK'
}

/**
 * 
 * @export
 * @interface RunTransactionRequest
 */
export interface RunTransactionRequest {
    /**
     * 
     * @type {Web3SigningCredential}
     * @memberof RunTransactionRequest
     */
    web3SigningCredential: Web3SigningCredential;
    /**
     * 
     * @type {BesuTransactionConfig}
     * @memberof RunTransactionRequest
     */
    transactionConfig: BesuTransactionConfig;
    /**
     * 
     * @type {ConsistencyStrategy}
     * @memberof RunTransactionRequest
     */
    consistencyStrategy: ConsistencyStrategy;
}
/**
 * 
 * @export
 * @interface RunTransactionResponse
 */
export interface RunTransactionResponse {
    /**
     * 
     * @type {Web3TransactionReceipt}
     * @memberof RunTransactionResponse
     */
    transactionReceipt: Web3TransactionReceipt;
}
/**
 * 
 * @export
 * @interface SignTransactionRequest
 */
export interface SignTransactionRequest {
    /**
     * 
     * @type {string}
     * @memberof SignTransactionRequest
     */
    keychainId: string;
    /**
     * 
     * @type {string}
     * @memberof SignTransactionRequest
     */
    keychainRef: string;
    /**
     * The transaction hash of ledger will be used to fetch the contain.
     * @type {string}
     * @memberof SignTransactionRequest
     */
    transactionHash: string;
}
/**
 * 
 * @export
 * @interface SignTransactionResponse
 */
export interface SignTransactionResponse {
    /**
     * The signatures of ledger from the corresponding transaction hash.
     * @type {string}
     * @memberof SignTransactionResponse
     */
    signature: string;
}
/**
 * 
 * @export
 * @interface SolidityContractJsonArtifact
 */
export interface SolidityContractJsonArtifact {
    /**
     * 
     * @type {string}
     * @memberof SolidityContractJsonArtifact
     */
    contractName: string;
    /**
     * 
     * @type {string}
     * @memberof SolidityContractJsonArtifact
     */
    metadata?: string;
    /**
     * 
     * @type {string}
     * @memberof SolidityContractJsonArtifact
     */
    bytecode?: string;
    /**
     * 
     * @type {string}
     * @memberof SolidityContractJsonArtifact
     */
    deployedBytecode?: string;
    /**
     * 
     * @type {string}
     * @memberof SolidityContractJsonArtifact
     */
    sourceMap?: string;
    /**
     * 
     * @type {string}
     * @memberof SolidityContractJsonArtifact
     */
    deployedSourceMap?: string;
    /**
     * 
     * @type {string}
     * @memberof SolidityContractJsonArtifact
     */
    sourcePath?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof SolidityContractJsonArtifact
     */
    compiler?: { [key: string]: object; };
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof SolidityContractJsonArtifact
     */
    functionHashes?: { [key: string]: object; };
    /**
     * 
     * @type {object}
     * @memberof SolidityContractJsonArtifact
     */
    gasEstimates?: object;
}
/**
 * 
 * @export
 * @enum {string}
 */
export enum WatchBlocksV1 {
    Subscribe = 'org.hyperledger.cactus.api.async.besu.WatchBlocksV1.Subscribe',
    Next = 'org.hyperledger.cactus.api.async.besu.WatchBlocksV1.Next',
    Unsubscribe = 'org.hyperledger.cactus.api.async.besu.WatchBlocksV1.Unsubscribe',
    Error = 'org.hyperledger.cactus.api.async.besu.WatchBlocksV1.Error',
    Complete = 'org.hyperledger.cactus.api.async.besu.WatchBlocksV1.Complete'
}

/**
 * 
 * @export
 * @interface WatchBlocksV1Progress
 */
export interface WatchBlocksV1Progress {
    /**
     * 
     * @type {Web3BlockHeader}
     * @memberof WatchBlocksV1Progress
     */
    blockHeader: Web3BlockHeader;
}
/**
 * 
 * @export
 * @interface Web3BlockHeader
 */
export interface Web3BlockHeader {
    /**
     * 
     * @type {number}
     * @memberof Web3BlockHeader
     */
    number: number;
    /**
     * 
     * @type {string}
     * @memberof Web3BlockHeader
     */
    hash: string;
    /**
     * 
     * @type {string}
     * @memberof Web3BlockHeader
     */
    parentHash: string;
    /**
     * 
     * @type {string}
     * @memberof Web3BlockHeader
     */
    nonce: string;
    /**
     * 
     * @type {string}
     * @memberof Web3BlockHeader
     */
    sha3Uncles: string;
    /**
     * 
     * @type {string}
     * @memberof Web3BlockHeader
     */
    logsBloom: string;
    /**
     * 
     * @type {string}
     * @memberof Web3BlockHeader
     */
    transactionRoot: string;
    /**
     * 
     * @type {string}
     * @memberof Web3BlockHeader
     */
    stateRoot: string;
    /**
     * 
     * @type {string}
     * @memberof Web3BlockHeader
     */
    receiptRoot: string;
    /**
     * 
     * @type {string}
     * @memberof Web3BlockHeader
     */
    miner: string;
    /**
     * 
     * @type {string}
     * @memberof Web3BlockHeader
     */
    extraData: string;
    /**
     * 
     * @type {number}
     * @memberof Web3BlockHeader
     */
    gasLimit: number;
    /**
     * 
     * @type {number}
     * @memberof Web3BlockHeader
     */
    gasUsed: number;
    /**
     * 
     * @type {string | number}
     * @memberof Web3BlockHeader
     */
    timestamp: string | number;
}
/**
 * @type Web3SigningCredential
 * @export
 */
export type Web3SigningCredential = Web3SigningCredentialCactusKeychainRef | Web3SigningCredentialNone | Web3SigningCredentialPrivateKeyHex;

/**
 * 
 * @export
 * @interface Web3SigningCredentialCactusKeychainRef
 */
export interface Web3SigningCredentialCactusKeychainRef {
    /**
     * 
     * @type {Web3SigningCredentialType}
     * @memberof Web3SigningCredentialCactusKeychainRef
     */
    type: Web3SigningCredentialType;
    /**
     * The ethereum account (public key) that the credential  belongs to. Basically the username in the traditional  terminology of authentication.
     * @type {string}
     * @memberof Web3SigningCredentialCactusKeychainRef
     */
    ethAccount: string;
    /**
     * The key to use when looking up the the keychain entry holding the secret pointed to by the  keychainEntryKey parameter.
     * @type {string}
     * @memberof Web3SigningCredentialCactusKeychainRef
     */
    keychainEntryKey: string;
    /**
     * The keychain ID to use when looking up the the keychain plugin instance that will be used to retrieve the secret pointed to by the keychainEntryKey parameter.
     * @type {string}
     * @memberof Web3SigningCredentialCactusKeychainRef
     */
    keychainId: string;
}
/**
 * Using this denotes that there is no signing required because the transaction is pre-signed.
 * @export
 * @interface Web3SigningCredentialNone
 */
export interface Web3SigningCredentialNone {
    /**
     * 
     * @type {Web3SigningCredentialType}
     * @memberof Web3SigningCredentialNone
     */
    type: Web3SigningCredentialType;
}
/**
 * 
 * @export
 * @interface Web3SigningCredentialPrivateKeyHex
 */
export interface Web3SigningCredentialPrivateKeyHex {
    /**
     * 
     * @type {Web3SigningCredentialType}
     * @memberof Web3SigningCredentialPrivateKeyHex
     */
    type: Web3SigningCredentialType;
    /**
     * The ethereum account (public key) that the credential belongs to. Basically the username in the traditional terminology of authentication.
     * @type {string}
     * @memberof Web3SigningCredentialPrivateKeyHex
     */
    ethAccount: string;
    /**
     * The HEX encoded private key of an eth account.
     * @type {string}
     * @memberof Web3SigningCredentialPrivateKeyHex
     */
    secret: string;
}
/**
 * 
 * @export
 * @enum {string}
 */
export enum Web3SigningCredentialType {
    CactusKeychainRef = 'CACTUS_KEYCHAIN_REF',
    GethKeychainPassword = 'GETH_KEYCHAIN_PASSWORD',
    PrivateKeyHex = 'PRIVATE_KEY_HEX',
    None = 'NONE'
}

/**
 * 
 * @export
 * @interface Web3TransactionReceipt
 */
export interface Web3TransactionReceipt {
    [key: string]: object | any;

    /**
     * 
     * @type {boolean}
     * @memberof Web3TransactionReceipt
     */
    status: boolean;
    /**
     * 
     * @type {string}
     * @memberof Web3TransactionReceipt
     */
    transactionHash: string;
    /**
     * 
     * @type {number}
     * @memberof Web3TransactionReceipt
     */
    transactionIndex: number;
    /**
     * 
     * @type {string}
     * @memberof Web3TransactionReceipt
     */
    blockHash: string;
    /**
     * 
     * @type {number}
     * @memberof Web3TransactionReceipt
     */
    blockNumber: number;
    /**
     * 
     * @type {number}
     * @memberof Web3TransactionReceipt
     */
    gasUsed: number;
    /**
     * 
     * @type {string}
     * @memberof Web3TransactionReceipt
     */
    contractAddress?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Web3TransactionReceipt
     */
    from: string;
    /**
     * 
     * @type {string}
     * @memberof Web3TransactionReceipt
     */
    to: string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Deploys the bytecode of a Solidity contract.
         * @param {DeployContractSolidityBytecodeV1Request} [deployContractSolidityBytecodeV1Request] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1BesuDeployContractSolidityBytecode: async (deployContractSolidityBytecodeV1Request?: DeployContractSolidityBytecodeV1Request, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/plugins/@hyperledger/cactus-plugin-ledger-connector-besu/deploy-contract-solidity-bytecode`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(deployContractSolidityBytecodeV1Request, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Invokes a contract on a besu ledger
         * @param {InvokeContractV1Request} [invokeContractV1Request] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1BesuInvokeContract: async (invokeContractV1Request?: InvokeContractV1Request, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/plugins/@hyperledger/cactus-plugin-ledger-connector-besu/invoke-contract`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(invokeContractV1Request, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Executes a transaction on a besu ledger
         * @param {RunTransactionRequest} [runTransactionRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1BesuRunTransaction: async (runTransactionRequest?: RunTransactionRequest, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/plugins/@hyperledger/cactus-plugin-ledger-connector-besu/run-transaction`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(runTransactionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get the Prometheus Metrics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPrometheusExporterMetricsV1: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/plugins/@hyperledger/cactus-plugin-ledger-connector-besu/get-prometheus-exporter-metrics`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Obtain signatures of ledger from the corresponding transaction hash.
         * @summary Obtain signatures of ledger from the corresponding transaction hash.
         * @param {SignTransactionRequest} signTransactionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signTransactionV1: async (signTransactionRequest: SignTransactionRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'signTransactionRequest' is not null or undefined
            assertParamExists('signTransactionV1', 'signTransactionRequest', signTransactionRequest)
            const localVarPath = `/api/v1/plugins/@hyperledger/cactus-plugin-ledger-connector-besu/sign-transaction`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(signTransactionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Deploys the bytecode of a Solidity contract.
         * @param {DeployContractSolidityBytecodeV1Request} [deployContractSolidityBytecodeV1Request] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1BesuDeployContractSolidityBytecode(deployContractSolidityBytecodeV1Request?: DeployContractSolidityBytecodeV1Request, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeployContractSolidityBytecodeV1Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1BesuDeployContractSolidityBytecode(deployContractSolidityBytecodeV1Request, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Invokes a contract on a besu ledger
         * @param {InvokeContractV1Request} [invokeContractV1Request] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1BesuInvokeContract(invokeContractV1Request?: InvokeContractV1Request, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InvokeContractV1Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1BesuInvokeContract(invokeContractV1Request, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Executes a transaction on a besu ledger
         * @param {RunTransactionRequest} [runTransactionRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1BesuRunTransaction(runTransactionRequest?: RunTransactionRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RunTransactionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1BesuRunTransaction(runTransactionRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get the Prometheus Metrics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPrometheusExporterMetricsV1(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPrometheusExporterMetricsV1(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Obtain signatures of ledger from the corresponding transaction hash.
         * @summary Obtain signatures of ledger from the corresponding transaction hash.
         * @param {SignTransactionRequest} signTransactionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async signTransactionV1(signTransactionRequest: SignTransactionRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SignTransactionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.signTransactionV1(signTransactionRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @summary Deploys the bytecode of a Solidity contract.
         * @param {DeployContractSolidityBytecodeV1Request} [deployContractSolidityBytecodeV1Request] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1BesuDeployContractSolidityBytecode(deployContractSolidityBytecodeV1Request?: DeployContractSolidityBytecodeV1Request, options?: any): AxiosPromise<DeployContractSolidityBytecodeV1Response> {
            return localVarFp.apiV1BesuDeployContractSolidityBytecode(deployContractSolidityBytecodeV1Request, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Invokes a contract on a besu ledger
         * @param {InvokeContractV1Request} [invokeContractV1Request] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1BesuInvokeContract(invokeContractV1Request?: InvokeContractV1Request, options?: any): AxiosPromise<InvokeContractV1Response> {
            return localVarFp.apiV1BesuInvokeContract(invokeContractV1Request, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Executes a transaction on a besu ledger
         * @param {RunTransactionRequest} [runTransactionRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1BesuRunTransaction(runTransactionRequest?: RunTransactionRequest, options?: any): AxiosPromise<RunTransactionResponse> {
            return localVarFp.apiV1BesuRunTransaction(runTransactionRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get the Prometheus Metrics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPrometheusExporterMetricsV1(options?: any): AxiosPromise<string> {
            return localVarFp.getPrometheusExporterMetricsV1(options).then((request) => request(axios, basePath));
        },
        /**
         * Obtain signatures of ledger from the corresponding transaction hash.
         * @summary Obtain signatures of ledger from the corresponding transaction hash.
         * @param {SignTransactionRequest} signTransactionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signTransactionV1(signTransactionRequest: SignTransactionRequest, options?: any): AxiosPromise<SignTransactionResponse> {
            return localVarFp.signTransactionV1(signTransactionRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary Deploys the bytecode of a Solidity contract.
     * @param {DeployContractSolidityBytecodeV1Request} [deployContractSolidityBytecodeV1Request] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiV1BesuDeployContractSolidityBytecode(deployContractSolidityBytecodeV1Request?: DeployContractSolidityBytecodeV1Request, options?: any) {
        return DefaultApiFp(this.configuration).apiV1BesuDeployContractSolidityBytecode(deployContractSolidityBytecodeV1Request, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Invokes a contract on a besu ledger
     * @param {InvokeContractV1Request} [invokeContractV1Request] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiV1BesuInvokeContract(invokeContractV1Request?: InvokeContractV1Request, options?: any) {
        return DefaultApiFp(this.configuration).apiV1BesuInvokeContract(invokeContractV1Request, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Executes a transaction on a besu ledger
     * @param {RunTransactionRequest} [runTransactionRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiV1BesuRunTransaction(runTransactionRequest?: RunTransactionRequest, options?: any) {
        return DefaultApiFp(this.configuration).apiV1BesuRunTransaction(runTransactionRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get the Prometheus Metrics
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getPrometheusExporterMetricsV1(options?: any) {
        return DefaultApiFp(this.configuration).getPrometheusExporterMetricsV1(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Obtain signatures of ledger from the corresponding transaction hash.
     * @summary Obtain signatures of ledger from the corresponding transaction hash.
     * @param {SignTransactionRequest} signTransactionRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public signTransactionV1(signTransactionRequest: SignTransactionRequest, options?: any) {
        return DefaultApiFp(this.configuration).signTransactionV1(signTransactionRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


