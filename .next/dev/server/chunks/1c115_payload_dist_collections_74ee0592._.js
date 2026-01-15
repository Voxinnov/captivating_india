module.exports = [
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/dataloader.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDataloaderCacheKey",
    ()=>createDataloaderCacheKey,
    "getDataLoader",
    ()=>getDataLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dataloader$40$2$2e$2$2e$3$2f$node_modules$2f$dataloader$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/dataloader@2.2.3/node_modules/dataloader/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isValidID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/isValidID.js [app-route] (ecmascript)");
;
;
// Payload uses `dataloader` to solve the classic GraphQL N+1 problem.
// We keep a list of all documents requested to be populated for any given request
// and then batch together documents within the same collection,
// making only 1 find per each collection, rather than `findByID` per each requested doc.
// This dramatically improves performance for REST and Local API `depth` populations,
// and also ensures complex GraphQL queries perform lightning-fast.
const batchAndLoadDocs = (req)=>async (keys)=>{
        const { payload } = req;
        // Create docs array of same length as keys, using null as value
        // We will replace nulls with injected docs as they are retrieved
        const docs = keys.map(()=>null);
        /**
    * Batch IDs by their `find` args
    * so we can make one find query per combination of collection, depth, locale, and fallbackLocale.
    *
    * Resulting shape will be as follows:
      {
        // key is stringified set of find args
        '[null,"pages",2,0,"es","en",false,false]': [
          // value is array of IDs to find with these args
          'q34tl23462346234524',
          '435523540194324280',
          '2346245j35l3j5234532li',
        ],
        // etc
      };
    *
    **/ const batchByFindArgs = {};
        for (const key of keys){
            const [transactionID, collection, id, depth, currentDepth, locale, fallbackLocale, overrideAccess, showHiddenFields, draft, select, populate] = JSON.parse(key);
            const batchKeyArray = [
                transactionID,
                collection,
                depth,
                currentDepth,
                locale,
                fallbackLocale,
                overrideAccess,
                showHiddenFields,
                draft,
                select,
                populate
            ];
            const batchKey = JSON.stringify(batchKeyArray);
            const idType = payload.collections?.[collection]?.customIDType || payload.db.defaultIDType;
            const sanitizedID = idType === 'number' ? parseFloat(id) : id;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isValidID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isValidID"])(sanitizedID, idType)) {
                batchByFindArgs[batchKey] = [
                    ...batchByFindArgs[batchKey] || [],
                    sanitizedID
                ];
            }
        }
        // Run find requests one after another, so as to not hang transactions
        for (const [batchKey, ids] of Object.entries(batchByFindArgs)){
            const [transactionID, collection, depth, currentDepth, locale, fallbackLocale, overrideAccess, showHiddenFields, draft, select, populate] = JSON.parse(batchKey);
            req.transactionID = transactionID;
            const result = await payload.find({
                collection,
                currentDepth,
                depth,
                disableErrors: true,
                draft,
                fallbackLocale,
                locale,
                overrideAccess: Boolean(overrideAccess),
                pagination: false,
                populate,
                req,
                select,
                showHiddenFields: Boolean(showHiddenFields),
                where: {
                    id: {
                        in: ids
                    }
                }
            });
            // For each returned doc, find index in original keys
            // Inject doc within docs array if index exists
            for (const doc of result.docs){
                const docKey = createDataloaderCacheKey({
                    collectionSlug: collection,
                    currentDepth,
                    depth,
                    docID: doc.id,
                    draft,
                    fallbackLocale,
                    locale,
                    overrideAccess,
                    populate,
                    select,
                    showHiddenFields,
                    transactionID: req.transactionID
                });
                const docsIndex = keys.findIndex((key)=>key === docKey);
                if (docsIndex > -1) {
                    docs[docsIndex] = doc;
                }
            }
        }
        // Return docs array,
        // which has now been injected with all fetched docs
        // and should match the length of the incoming keys arg
        return docs;
    };
const getDataLoader = (req)=>{
    const findQueries = new Map();
    const dataLoader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dataloader$40$2$2e$2$2e$3$2f$node_modules$2f$dataloader$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](batchAndLoadDocs(req));
    dataLoader.find = (args)=>{
        const key = createFindDataloaderCacheKey(args);
        const cached = findQueries.get(key);
        if (cached) {
            return cached;
        }
        const request = req.payload.find(args);
        findQueries.set(key, request);
        return request;
    };
    return dataLoader;
};
const createFindDataloaderCacheKey = ({ collection, currentDepth, depth, disableErrors, draft, includeLockStatus, joins, limit, overrideAccess, page, pagination, populate, req, select, showHiddenFields, sort, where })=>JSON.stringify([
        collection,
        currentDepth,
        depth,
        disableErrors,
        draft,
        includeLockStatus,
        joins,
        limit,
        overrideAccess,
        page,
        pagination,
        populate,
        req?.locale,
        req?.fallbackLocale,
        req?.user?.id,
        req?.transactionID,
        select,
        showHiddenFields,
        sort,
        where
    ]);
const createDataloaderCacheKey = ({ collectionSlug, currentDepth, depth, docID, draft, fallbackLocale, locale, overrideAccess, populate, select, showHiddenFields, transactionID })=>JSON.stringify([
        transactionID,
        collectionSlug,
        docID,
        depth,
        currentDepth,
        locale,
        fallbackLocale,
        overrideAccess,
        showHiddenFields,
        draft,
        select,
        populate
    ]); //# sourceMappingURL=dataloader.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildAfterOperation.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildAfterOperation",
    ()=>buildAfterOperation
]);
const buildAfterOperation = async (operationArgs)=>{
    const { args, collection, operation, result } = operationArgs;
    let newResult = result;
    if (args.collection.config.hooks?.afterOperation?.length) {
        for (const hook of args.collection.config.hooks.afterOperation){
            const hookResult = await hook({
                args,
                collection,
                operation,
                req: args.req,
                result: newResult
            });
            if (hookResult !== undefined) {
                newResult = hookResult;
            }
        }
    }
    return newResult;
}; //# sourceMappingURL=buildAfterOperation.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/types.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Map internal operation names to HookOperationType
__turbopack_context__.s([
    "operationToHookOperation",
    ()=>operationToHookOperation
]);
const operationToHookOperation = {
    count: 'count',
    countVersions: 'countVersions',
    create: 'create',
    delete: 'delete',
    deleteByID: 'delete',
    find: 'read',
    findByID: 'read',
    findDistinct: 'readDistinct',
    findVersionByID: 'read',
    findVersions: 'read',
    forgotPassword: 'forgotPassword',
    login: 'login',
    read: 'read',
    readDistinct: 'readDistinct',
    refresh: 'refresh',
    resetPassword: 'resetPassword',
    restoreVersion: 'restoreVersion',
    unlock: 'unlock',
    update: 'update',
    updateByID: 'update'
}; //# sourceMappingURL=types.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildBeforeOperation.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildBeforeOperation",
    ()=>buildBeforeOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/types.js [app-route] (ecmascript)");
;
async function buildBeforeOperation(operationArgs) {
    const { args, collection, operation } = operationArgs;
    let newArgs = args;
    if (args.collection.config.hooks?.beforeOperation?.length) {
        // TODO: v4 should not need this mapping
        // Map the operation to the hook operation type for backward compatibility
        const hookOperation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operationToHookOperation"][operation];
        for (const hook of args.collection.config.hooks.beforeOperation){
            const hookResult = await hook({
                args: newArgs,
                collection,
                context: args.req.context,
                operation: hookOperation,
                req: args.req
            });
            if (hookResult !== undefined) {
                newArgs = hookResult;
            }
        }
    }
    return newArgs;
} //# sourceMappingURL=buildBeforeOperation.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/count.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "countOperation",
    ()=>countOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/executeAccess.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/combineQueries.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/queryValidation/validateQueryPaths.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$sanitizeWhereQuery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/sanitizeWhereQuery.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$appendNonTrashedFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/appendNonTrashedFilter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/killTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildAfterOperation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildBeforeOperation.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
const countOperation = async (incomingArgs)=>{
    let args = incomingArgs;
    try {
        // /////////////////////////////////////
        // beforeOperation - Collection
        // /////////////////////////////////////
        args = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildBeforeOperation"])({
            args,
            collection: args.collection.config,
            operation: 'count'
        });
        const { collection: { config: collectionConfig }, disableErrors, overrideAccess, req, trash = false, where } = args;
        const { payload } = req;
        // /////////////////////////////////////
        // Access
        // /////////////////////////////////////
        let accessResult;
        if (!overrideAccess) {
            accessResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeAccess"])({
                disableErrors,
                req: req
            }, collectionConfig.access.read);
            // If errors are disabled, and access returns false, return empty results
            if (accessResult === false) {
                return {
                    totalDocs: 0
                };
            }
        }
        let result;
        let fullWhere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineQueries"])(where, accessResult);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$sanitizeWhereQuery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeWhereQuery"])({
            fields: collectionConfig.flattenedFields,
            payload,
            where: fullWhere
        });
        // Exclude trashed documents when trash: false
        fullWhere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$appendNonTrashedFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendNonTrashedFilter"])({
            enableTrash: collectionConfig.trash,
            trash,
            where: fullWhere
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateQueryPaths"])({
            collectionConfig,
            overrideAccess: overrideAccess,
            req: req,
            where: where
        });
        result = await payload.db.count({
            collection: collectionConfig.slug,
            req,
            where: fullWhere
        });
        // /////////////////////////////////////
        // afterOperation - Collection
        // /////////////////////////////////////
        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildAfterOperation"])({
            args,
            collection: collectionConfig,
            operation: 'count',
            result
        });
        // /////////////////////////////////////
        // Return results
        // /////////////////////////////////////
        return result;
    } catch (error) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["killTransaction"])(args.req);
        throw error;
    }
}; //# sourceMappingURL=count.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/local/count.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "countLocal",
    ()=>countLocal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/createLocalReq.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$count$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/count.js [app-route] (ecmascript)");
;
;
;
async function countLocal(payload, options) {
    const { collection: collectionSlug, disableErrors, overrideAccess = true, trash = false, where } = options;
    const collection = payload.collections[collectionSlug];
    if (!collection) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`The collection with slug ${String(collectionSlug)} can't be found. Count Operation.`);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$count$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["countOperation"])({
        collection,
        disableErrors,
        overrideAccess,
        req: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])(options, payload),
        trash,
        where
    });
} //# sourceMappingURL=count.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/create.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createOperation",
    ()=>createOperation
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$ensureUsernameOrEmail$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/ensureUsernameOrEmail.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/executeAccess.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$sendVerificationEmail$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/sendVerificationEmail.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$strategies$2f$local$2f$register$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/strategies/local/register.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$duplicateDocument$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/duplicateDocument/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterChange/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterRead/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeChange/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeValidate/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$saveVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/saveVersion.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$generateFileData$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/generateFileData.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$unlinkTempFiles$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/unlinkTempFiles.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$uploadFiles$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/uploadFiles.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/commitTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getVersionsConfig.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/initTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/killTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeInternalFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/sanitizeInternalFields.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/sanitizeSelect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildAfterOperation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildBeforeOperation.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const createOperation = async (incomingArgs)=>{
    let args = incomingArgs;
    try {
        const shouldCommit = !args.disableTransaction && await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initTransaction"])(args.req);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$ensureUsernameOrEmail$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureUsernameOrEmail"])({
            authOptions: args.collection.config.auth,
            collectionSlug: args.collection.config.slug,
            data: args.data,
            operation: 'create',
            req: args.req
        });
        // /////////////////////////////////////
        // beforeOperation - Collection
        // /////////////////////////////////////
        args = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildBeforeOperation"])({
            args,
            collection: args.collection.config,
            operation: 'create'
        });
        if (args.publishSpecificLocale) {
            args.req.locale = args.publishSpecificLocale;
        }
        const { autosave = false, collection: { config: collectionConfig }, collection, depth, disableVerificationEmail, draft = false, duplicateFromID, overrideAccess, overwriteExistingFiles = false, populate, publishSpecificLocale, req: { fallbackLocale, locale, payload, payload: { config } }, req, select: incomingSelect, selectedLocales, showHiddenFields } = args;
        let { data } = args;
        const isSavingDraft = Boolean(draft && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasDraftsEnabled"])(collectionConfig));
        let duplicatedFromDocWithLocales = {};
        let duplicatedFromDoc = {};
        if (duplicateFromID) {
            const duplicateResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$duplicateDocument$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDuplicateDocumentData"])({
                id: duplicateFromID,
                collectionConfig,
                draftArg: isSavingDraft,
                overrideAccess,
                req,
                selectedLocales
            });
            duplicatedFromDoc = duplicateResult.duplicatedFromDoc;
            duplicatedFromDocWithLocales = duplicateResult.duplicatedFromDocWithLocales;
        }
        // /////////////////////////////////////
        // Access
        // /////////////////////////////////////
        if (!overrideAccess) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeAccess"])({
                data,
                req
            }, collectionConfig.access.create);
        }
        // /////////////////////////////////////
        // Generate data for all files and sizes
        // /////////////////////////////////////
        const { data: newFileData, files: filesToUpload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$generateFileData$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateFileData"])({
            collection,
            config,
            data,
            isDuplicating: Boolean(duplicateFromID),
            operation: 'create',
            originalDoc: duplicatedFromDoc,
            overwriteExistingFiles,
            req,
            throwOnMissingFile: !isSavingDraft && collection.config.upload.filesRequiredOnCreate !== false
        });
        data = newFileData;
        // /////////////////////////////////////
        // beforeValidate - Fields
        // /////////////////////////////////////
        data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["beforeValidate"])({
            collection: collectionConfig,
            context: req.context,
            data,
            doc: duplicatedFromDoc,
            global: null,
            operation: 'create',
            overrideAccess: overrideAccess,
            req
        });
        // /////////////////////////////////////
        // beforeValidate - Collections
        // /////////////////////////////////////
        if (collectionConfig.hooks.beforeValidate?.length) {
            for (const hook of collectionConfig.hooks.beforeValidate){
                data = await hook({
                    collection: collectionConfig,
                    context: req.context,
                    data,
                    operation: 'create',
                    originalDoc: duplicatedFromDoc,
                    req
                }) || data;
            }
        }
        // /////////////////////////////////////
        // beforeChange - Collection
        // /////////////////////////////////////
        if (collectionConfig.hooks?.beforeChange?.length) {
            for (const hook of collectionConfig.hooks.beforeChange){
                data = await hook({
                    collection: collectionConfig,
                    context: req.context,
                    data,
                    operation: 'create',
                    originalDoc: duplicatedFromDoc,
                    req
                }) || data;
            }
        }
        // /////////////////////////////////////
        // beforeChange - Fields
        // /////////////////////////////////////
        const resultWithLocales = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["beforeChange"])({
            collection: collectionConfig,
            context: req.context,
            data,
            doc: duplicatedFromDoc,
            docWithLocales: duplicatedFromDocWithLocales,
            global: null,
            operation: 'create',
            overrideAccess,
            req,
            skipValidation: isSavingDraft && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasDraftValidationEnabled"])(collectionConfig)
        });
        // /////////////////////////////////////
        // Write files to local storage
        // /////////////////////////////////////
        if (!collectionConfig.upload.disableLocalStorage) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$uploadFiles$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uploadFiles"])(payload, filesToUpload, req);
        }
        // /////////////////////////////////////
        // Create
        // /////////////////////////////////////
        let doc;
        const select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeSelect"])({
            fields: collectionConfig.flattenedFields,
            forceSelect: collectionConfig.forceSelect,
            select: incomingSelect
        });
        if (collectionConfig.auth && !collectionConfig.auth.disableLocalStrategy) {
            if (collectionConfig.auth.verify) {
                resultWithLocales._verified = Boolean(resultWithLocales._verified) || false;
                resultWithLocales._verificationToken = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomBytes(20).toString('hex');
            }
            doc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$strategies$2f$local$2f$register$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerLocalStrategy"])({
                collection: collectionConfig,
                doc: resultWithLocales,
                password: data.password,
                payload: req.payload,
                req
            });
        } else {
            doc = await payload.db.create({
                collection: collectionConfig.slug,
                data: resultWithLocales,
                req
            });
        }
        const verificationToken = doc._verificationToken;
        let result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeInternalFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeInternalFields"])(doc);
        // /////////////////////////////////////
        // Create version
        // /////////////////////////////////////
        if (collectionConfig.versions) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$saveVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["saveVersion"])({
                id: result.id,
                autosave,
                collection: collectionConfig,
                docWithLocales: result,
                operation: 'create',
                payload,
                publishSpecificLocale,
                req
            });
        }
        // /////////////////////////////////////
        // Send verification email if applicable
        // /////////////////////////////////////
        if (collectionConfig.auth && collectionConfig.auth.verify && result.email) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$sendVerificationEmail$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendVerificationEmail"])({
                collection: {
                    config: collectionConfig
                },
                config: payload.config,
                disableEmail: disableVerificationEmail,
                email: payload.email,
                req,
                token: verificationToken,
                user: result
            });
        }
        // /////////////////////////////////////
        // afterRead - Fields
        // /////////////////////////////////////
        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["afterRead"])({
            collection: collectionConfig,
            context: req.context,
            depth: depth,
            doc: result,
            draft,
            fallbackLocale: fallbackLocale,
            global: null,
            locale: locale,
            overrideAccess: overrideAccess,
            populate,
            req,
            select,
            showHiddenFields: showHiddenFields
        });
        // /////////////////////////////////////
        // afterRead - Collection
        // /////////////////////////////////////
        if (collectionConfig.hooks?.afterRead?.length) {
            for (const hook of collectionConfig.hooks.afterRead){
                result = await hook({
                    collection: collectionConfig,
                    context: req.context,
                    doc: result,
                    req
                }) || result;
            }
        }
        // /////////////////////////////////////
        // afterChange - Fields
        // /////////////////////////////////////
        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["afterChange"])({
            collection: collectionConfig,
            context: req.context,
            data,
            doc: result,
            global: null,
            operation: 'create',
            previousDoc: {},
            req
        });
        // /////////////////////////////////////
        // afterChange - Collection
        // /////////////////////////////////////
        if (collectionConfig.hooks?.afterChange?.length) {
            for (const hook of collectionConfig.hooks.afterChange){
                result = await hook({
                    collection: collectionConfig,
                    context: req.context,
                    data,
                    doc: result,
                    operation: 'create',
                    previousDoc: {},
                    req: args.req
                }) || result;
            }
        }
        // /////////////////////////////////////
        // afterOperation - Collection
        // /////////////////////////////////////
        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildAfterOperation"])({
            args,
            collection: collectionConfig,
            operation: 'create',
            result
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$unlinkTempFiles$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unlinkTempFiles"])({
            collectionConfig,
            config,
            req
        });
        // /////////////////////////////////////
        // Return results
        // /////////////////////////////////////
        if (shouldCommit) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["commitTransaction"])(req);
        }
        return result;
    } catch (error) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["killTransaction"])(args.req);
        throw error;
    }
}; //# sourceMappingURL=create.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/local/create.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createLocal",
    ()=>createLocal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/deepCopyObject.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$getFileByPath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/getFileByPath.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/createLocalReq.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$create$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/create.js [app-route] (ecmascript)");
;
;
;
;
;
async function createLocal(payload, options) {
    const { collection: collectionSlug, data, depth, disableTransaction, disableVerificationEmail, draft, duplicateFromID, file, filePath, overrideAccess = true, overwriteExistingFiles = false, populate, select, showHiddenFields } = options;
    const collection = payload.collections[collectionSlug];
    if (!collection) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`The collection with slug ${String(collectionSlug)} can't be found. Create Operation.`);
    }
    const req = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])(options, payload);
    req.file = file ?? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$getFileByPath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFileByPath"])(filePath);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$create$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createOperation"])({
        collection,
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(data),
        depth,
        disableTransaction,
        disableVerificationEmail,
        draft,
        duplicateFromID,
        overrideAccess,
        overwriteExistingFiles,
        populate,
        req,
        select,
        showHiddenFields
    });
} //# sourceMappingURL=create.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/delete.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteOperation",
    ()=>deleteOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/executeAccess.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/combineQueries.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/queryValidation/validateQueryPaths.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$sanitizeWhereQuery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/sanitizeWhereQuery.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterRead/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$deleteUserPreferences$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/preferences/deleteUserPreferences.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$deleteAssociatedFiles$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/deleteAssociatedFiles.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$appendNonTrashedFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/appendNonTrashedFilter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$checkDocumentLockStatus$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/checkDocumentLockStatus.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/commitTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getVersionsConfig.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/initTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isErrorPublic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/isErrorPublic.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/killTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/sanitizeSelect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$deleteCollectionVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/deleteCollectionVersions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$deleteScheduledPublishJobs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/deleteScheduledPublishJobs.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildAfterOperation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildBeforeOperation.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const deleteOperation = async (incomingArgs)=>{
    let args = incomingArgs;
    try {
        const shouldCommit = !args.disableTransaction && await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initTransaction"])(args.req);
        // /////////////////////////////////////
        // beforeOperation - Collection
        // /////////////////////////////////////
        args = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildBeforeOperation"])({
            args,
            collection: args.collection.config,
            operation: 'delete'
        });
        const { collection: { config: collectionConfig }, depth, overrideAccess, overrideLock, populate, req: { fallbackLocale, locale, payload: { config }, payload }, req, select: incomingSelect, showHiddenFields, trash = false, where } = args;
        if (!where) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("Missing 'where' query of documents to delete.", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].BAD_REQUEST);
        }
        // /////////////////////////////////////
        // Access
        // /////////////////////////////////////
        let accessResult;
        if (!overrideAccess) {
            accessResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeAccess"])({
                req
            }, collectionConfig.access.delete);
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateQueryPaths"])({
            collectionConfig,
            overrideAccess: overrideAccess,
            req,
            where
        });
        let fullWhere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineQueries"])(where, accessResult);
        // Exclude trashed documents when trash: false
        fullWhere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$appendNonTrashedFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendNonTrashedFilter"])({
            enableTrash: collectionConfig.trash,
            trash,
            where: fullWhere
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$sanitizeWhereQuery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeWhereQuery"])({
            fields: collectionConfig.flattenedFields,
            payload,
            where: fullWhere
        });
        const select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeSelect"])({
            fields: collectionConfig.flattenedFields,
            forceSelect: collectionConfig.forceSelect,
            select: incomingSelect
        });
        // /////////////////////////////////////
        // Retrieve documents
        // /////////////////////////////////////
        const { docs } = await payload.db.find({
            collection: collectionConfig.slug,
            locale: locale,
            req,
            select,
            where: fullWhere
        });
        const errors = [];
        const promises = docs.map(async (doc)=>{
            let result;
            const { id } = doc;
            try {
                // /////////////////////////////////////
                // Handle potentially locked documents
                // /////////////////////////////////////
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$checkDocumentLockStatus$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkDocumentLockStatus"])({
                    id,
                    collectionSlug: collectionConfig.slug,
                    lockErrorMessage: `Document with ID ${id} is currently locked and cannot be deleted.`,
                    overrideLock,
                    req
                });
                // /////////////////////////////////////
                // beforeDelete - Collection
                // /////////////////////////////////////
                if (collectionConfig.hooks?.beforeDelete?.length) {
                    for (const hook of collectionConfig.hooks.beforeDelete){
                        await hook({
                            id,
                            collection: collectionConfig,
                            context: req.context,
                            req
                        });
                    }
                }
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$deleteAssociatedFiles$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteAssociatedFiles"])({
                    collectionConfig,
                    config,
                    doc,
                    overrideDelete: true,
                    req
                });
                // /////////////////////////////////////
                // Delete versions
                // /////////////////////////////////////
                if (collectionConfig.versions) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$deleteCollectionVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteCollectionVersions"])({
                        id,
                        slug: collectionConfig.slug,
                        payload,
                        req
                    });
                }
                // /////////////////////////////////////
                // Delete scheduled posts
                // /////////////////////////////////////
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasScheduledPublishEnabled"])(collectionConfig)) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$deleteScheduledPublishJobs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteScheduledPublishJobs"])({
                        id,
                        slug: collectionConfig.slug,
                        payload,
                        req
                    });
                }
                // /////////////////////////////////////
                // Delete document
                // /////////////////////////////////////
                await payload.db.deleteOne({
                    collection: collectionConfig.slug,
                    req,
                    returning: false,
                    where: {
                        id: {
                            equals: id
                        }
                    }
                });
                // /////////////////////////////////////
                // afterRead - Fields
                // /////////////////////////////////////
                result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["afterRead"])({
                    collection: collectionConfig,
                    context: req.context,
                    depth: depth,
                    doc: result || doc,
                    // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
                    draft: undefined,
                    fallbackLocale: fallbackLocale,
                    global: null,
                    locale: locale,
                    overrideAccess: overrideAccess,
                    populate,
                    req,
                    select,
                    showHiddenFields: showHiddenFields
                });
                // /////////////////////////////////////
                // afterRead - Collection
                // /////////////////////////////////////
                if (collectionConfig.hooks?.afterRead?.length) {
                    for (const hook of collectionConfig.hooks.afterRead){
                        result = await hook({
                            collection: collectionConfig,
                            context: req.context,
                            doc: result || doc,
                            req
                        }) || result;
                    }
                }
                // /////////////////////////////////////
                // afterDelete - Collection
                // /////////////////////////////////////
                if (collectionConfig.hooks?.afterDelete?.length) {
                    for (const hook of collectionConfig.hooks.afterDelete){
                        result = await hook({
                            id,
                            collection: collectionConfig,
                            context: req.context,
                            doc: result,
                            req
                        }) || result;
                    }
                }
                // /////////////////////////////////////
                // 8. Return results
                // /////////////////////////////////////
                return result;
            } catch (error) {
                const isPublic = error instanceof Error ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isErrorPublic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isErrorPublic"])(error, config) : false;
                errors.push({
                    id: doc.id,
                    isPublic,
                    message: error instanceof Error ? error.message : 'Unknown error'
                });
            }
            return null;
        });
        const awaitedDocs = await Promise.all(promises);
        // /////////////////////////////////////
        // Delete Preferences
        // /////////////////////////////////////
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$deleteUserPreferences$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteUserPreferences"])({
            collectionConfig,
            ids: docs.map(({ id })=>id),
            payload,
            req
        });
        let result = {
            docs: awaitedDocs.filter(Boolean),
            errors
        };
        // /////////////////////////////////////
        // afterOperation - Collection
        // /////////////////////////////////////
        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildAfterOperation"])({
            args,
            collection: collectionConfig,
            operation: 'delete',
            result
        });
        if (shouldCommit) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["commitTransaction"])(req);
        }
        return result;
    } catch (error) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["killTransaction"])(args.req);
        throw error;
    }
}; //# sourceMappingURL=delete.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/deleteByID.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteByIDOperation",
    ()=>deleteByIDOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/executeAccess.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/combineQueries.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/Forbidden.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/NotFound.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterRead/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$deleteUserPreferences$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/preferences/deleteUserPreferences.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$deleteAssociatedFiles$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/deleteAssociatedFiles.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$appendNonTrashedFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/appendNonTrashedFilter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$checkDocumentLockStatus$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/checkDocumentLockStatus.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/commitTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getVersionsConfig.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/initTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/killTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/sanitizeSelect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$deleteCollectionVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/deleteCollectionVersions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$deleteScheduledPublishJobs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/deleteScheduledPublishJobs.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildAfterOperation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildBeforeOperation.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const deleteByIDOperation = async (incomingArgs)=>{
    let args = incomingArgs;
    try {
        const shouldCommit = !args.disableTransaction && await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initTransaction"])(args.req);
        // /////////////////////////////////////
        // beforeOperation - Collection
        // /////////////////////////////////////
        args = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildBeforeOperation"])({
            args,
            collection: args.collection.config,
            operation: 'delete'
        });
        const { id, collection: { config: collectionConfig }, depth, overrideAccess, overrideLock, populate, req: { fallbackLocale, locale, payload: { config }, payload }, req, select: incomingSelect, showHiddenFields, trash = false } = args;
        // /////////////////////////////////////
        // Access
        // /////////////////////////////////////
        const accessResults = !overrideAccess ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeAccess"])({
            id,
            req
        }, collectionConfig.access.delete) : true;
        const hasWhereAccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasWhereAccessResult"])(accessResults);
        // /////////////////////////////////////
        // beforeDelete - Collection
        // /////////////////////////////////////
        if (collectionConfig.hooks?.beforeDelete?.length) {
            for (const hook of collectionConfig.hooks.beforeDelete){
                await hook({
                    id,
                    collection: collectionConfig,
                    context: req.context,
                    req
                });
            }
        }
        // /////////////////////////////////////
        // Retrieve document
        // /////////////////////////////////////
        let where = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineQueries"])({
            id: {
                equals: id
            }
        }, accessResults);
        // Exclude trashed documents when trash: false
        where = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$appendNonTrashedFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendNonTrashedFilter"])({
            enableTrash: collectionConfig.trash,
            trash,
            where
        });
        const docToDelete = await req.payload.db.findOne({
            collection: collectionConfig.slug,
            locale: req.locale,
            req,
            where
        });
        if (!docToDelete && !hasWhereAccess) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NotFound"](req.t);
        }
        if (!docToDelete && hasWhereAccess) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Forbidden"](req.t);
        }
        // /////////////////////////////////////
        // Handle potentially locked documents
        // /////////////////////////////////////
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$checkDocumentLockStatus$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkDocumentLockStatus"])({
            id,
            collectionSlug: collectionConfig.slug,
            lockErrorMessage: `Document with ID ${id} is currently locked and cannot be deleted.`,
            overrideLock,
            req
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$deleteAssociatedFiles$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteAssociatedFiles"])({
            collectionConfig,
            config,
            doc: docToDelete,
            overrideDelete: true,
            req
        });
        // /////////////////////////////////////
        // Delete versions
        // /////////////////////////////////////
        if (collectionConfig.versions) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$deleteCollectionVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteCollectionVersions"])({
                id,
                slug: collectionConfig.slug,
                payload,
                req
            });
        }
        // /////////////////////////////////////
        // Delete scheduled posts
        // /////////////////////////////////////
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasScheduledPublishEnabled"])(collectionConfig)) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$deleteScheduledPublishJobs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteScheduledPublishJobs"])({
                id,
                slug: collectionConfig.slug,
                payload,
                req
            });
        }
        const select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeSelect"])({
            fields: collectionConfig.flattenedFields,
            forceSelect: collectionConfig.forceSelect,
            select: incomingSelect
        });
        // /////////////////////////////////////
        // Delete document
        // /////////////////////////////////////
        let result = await req.payload.db.deleteOne({
            collection: collectionConfig.slug,
            req,
            select,
            where: {
                id: {
                    equals: id
                }
            }
        });
        // /////////////////////////////////////
        // Delete Preferences
        // /////////////////////////////////////
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$deleteUserPreferences$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteUserPreferences"])({
            collectionConfig,
            ids: [
                id
            ],
            payload,
            req
        });
        // /////////////////////////////////////
        // afterRead - Fields
        // /////////////////////////////////////
        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["afterRead"])({
            collection: collectionConfig,
            context: req.context,
            depth: depth,
            doc: result,
            draft: undefined,
            fallbackLocale: fallbackLocale,
            global: null,
            locale: locale,
            overrideAccess: overrideAccess,
            populate,
            req,
            select,
            showHiddenFields: showHiddenFields
        });
        // /////////////////////////////////////
        // afterRead - Collection
        // /////////////////////////////////////
        if (collectionConfig.hooks?.afterRead?.length) {
            for (const hook of collectionConfig.hooks.afterRead){
                result = await hook({
                    collection: collectionConfig,
                    context: req.context,
                    doc: result,
                    req
                }) || result;
            }
        }
        // /////////////////////////////////////
        // afterDelete - Collection
        // /////////////////////////////////////
        if (collectionConfig.hooks?.afterDelete?.length) {
            for (const hook of collectionConfig.hooks.afterDelete){
                result = await hook({
                    id,
                    collection: collectionConfig,
                    context: req.context,
                    doc: result,
                    req
                }) || result;
            }
        }
        // /////////////////////////////////////
        // afterOperation - Collection
        // /////////////////////////////////////
        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildAfterOperation"])({
            args,
            collection: collectionConfig,
            operation: 'deleteByID',
            result
        });
        // /////////////////////////////////////
        // 8. Return results
        // /////////////////////////////////////
        if (shouldCommit) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["commitTransaction"])(req);
        }
        return result;
    } catch (error) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["killTransaction"])(args.req);
        throw error;
    }
}; //# sourceMappingURL=deleteByID.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/local/delete.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteLocal",
    ()=>deleteLocal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/createLocalReq.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$delete$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/delete.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$deleteByID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/deleteByID.js [app-route] (ecmascript)");
;
;
;
;
async function deleteLocal(payload, options) {
    const { id, collection: collectionSlug, depth, disableTransaction, overrideAccess = true, overrideLock, populate, select, showHiddenFields, trash = false, where } = options;
    const collection = payload.collections[collectionSlug];
    if (!collection) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`The collection with slug ${String(collectionSlug)} can't be found. Delete Operation.`);
    }
    const args = {
        id,
        collection,
        depth,
        disableTransaction,
        overrideAccess,
        overrideLock,
        populate,
        req: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])(options, payload),
        select,
        showHiddenFields,
        trash,
        where
    };
    if (options.id) {
        // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$deleteByID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteByIDOperation"])(args);
    }
    // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$delete$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteOperation"])(args);
}
;
 //# sourceMappingURL=delete.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/duplicate.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "duplicateOperation",
    ()=>duplicateOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$create$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/create.js [app-route] (ecmascript)");
;
const duplicateOperation = async (incomingArgs)=>{
    const { id, ...args } = incomingArgs;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$create$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createOperation"])({
        ...args,
        data: incomingArgs?.data || {},
        duplicateFromID: id
    });
}; //# sourceMappingURL=duplicate.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/local/duplicate.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "duplicateLocal",
    ()=>duplicateLocal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/createLocalReq.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$duplicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/duplicate.js [app-route] (ecmascript)");
;
;
;
async function duplicateLocal(payload, options) {
    const { id, collection: collectionSlug, data, depth, disableTransaction, draft, overrideAccess = true, populate, select, selectedLocales, showHiddenFields } = options;
    const collection = payload.collections[collectionSlug];
    if (!collection) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`The collection with slug ${String(collectionSlug)} can't be found. Duplicate Operation.`);
    }
    if (collection.config.disableDuplicate === true) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`The collection with slug ${String(collectionSlug)} cannot be duplicated.`, 400);
    }
    const req = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])(options, payload);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$duplicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["duplicateOperation"])({
        id,
        collection,
        data,
        depth,
        disableTransaction,
        draft,
        overrideAccess,
        populate,
        req,
        select,
        selectedLocales,
        showHiddenFields
    });
} //# sourceMappingURL=duplicate.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/sanitizeSortQuery.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sanitizeSortQuery",
    ()=>sanitizeSortQuery
]);
const sanitizeSort = ({ fields, sort })=>{
    let sortProperty = sort;
    let desc = false;
    if (sort.indexOf('-') === 0) {
        desc = true;
        sortProperty = sortProperty.substring(1);
    }
    const segments = sortProperty.split('.');
    for (const segment of segments){
        const field = fields.find((each)=>each.name === segment);
        if (!field) {
            return sort;
        }
        if ('fields' in field) {
            fields = field.flattenedFields;
            continue;
        }
        if ('virtual' in field && typeof field.virtual === 'string') {
            return `${desc ? '-' : ''}${field.virtual}`;
        }
    }
    return sort;
};
const sanitizeSortQuery = ({ fields, sort })=>{
    if (!sort) {
        return undefined;
    }
    if (Array.isArray(sort)) {
        return sort.map((sort)=>sanitizeSort({
                fields,
                sort
            }));
    }
    return sanitizeSort({
        fields,
        sort
    });
}; //# sourceMappingURL=sanitizeSortQuery.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/find.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findOperation",
    ()=>findOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/executeAccess.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/combineQueries.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/queryValidation/validateQueryPaths.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$sanitizeJoinQuery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/sanitizeJoinQuery.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$sanitizeWhereQuery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/sanitizeWhereQuery.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterRead/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$locked$2d$documents$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/locked-documents/config.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$appendNonTrashedFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/appendNonTrashedFilter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getVersionsConfig.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/killTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/sanitizeSelect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildCollectionFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/buildCollectionFields.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$appendVersionToQueryKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/drafts/appendVersionToQueryKey.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/drafts/getQueryDraftsSelect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSort$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/drafts/getQueryDraftsSort.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildAfterOperation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildBeforeOperation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$sanitizeSortQuery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/sanitizeSortQuery.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const lockDurationDefault = 300 // Default 5 minutes in seconds
;
const findOperation = async (incomingArgs)=>{
    let args = incomingArgs;
    try {
        // /////////////////////////////////////
        // beforeOperation - Collection
        // /////////////////////////////////////
        args = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildBeforeOperation"])({
            args,
            collection: args.collection.config,
            operation: 'read'
        });
        const { collection: { config: collectionConfig }, collection, currentDepth, depth, disableErrors, draft: draftsEnabled, includeLockStatus, joins, limit, overrideAccess, page, pagination = true, populate, select: incomingSelect, showHiddenFields, sort: incomingSort, trash = false, where } = args;
        const req = args.req;
        const { fallbackLocale, locale, payload } = req;
        const select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeSelect"])({
            fields: collectionConfig.flattenedFields,
            forceSelect: collectionConfig.forceSelect,
            select: incomingSelect
        });
        // /////////////////////////////////////
        // Access
        // /////////////////////////////////////
        let accessResult;
        if (!overrideAccess) {
            accessResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeAccess"])({
                disableErrors,
                req
            }, collectionConfig.access.read);
            // If errors are disabled, and access returns false, return empty results
            if (accessResult === false) {
                return {
                    docs: [],
                    hasNextPage: false,
                    hasPrevPage: false,
                    limit: limit,
                    nextPage: null,
                    page: 1,
                    pagingCounter: 1,
                    prevPage: null,
                    totalDocs: 0,
                    totalPages: 1
                };
            }
        }
        // /////////////////////////////////////
        // Find
        // /////////////////////////////////////
        const usePagination = pagination && limit !== 0;
        const sanitizedLimit = limit ?? (usePagination ? 10 : 0);
        const sanitizedPage = page || 1;
        let result;
        let fullWhere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineQueries"])(where, accessResult);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$sanitizeWhereQuery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeWhereQuery"])({
            fields: collectionConfig.flattenedFields,
            payload,
            where: fullWhere
        });
        // Exclude trashed documents when trash: false
        fullWhere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$appendNonTrashedFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendNonTrashedFilter"])({
            enableTrash: collectionConfig.trash,
            trash,
            where: fullWhere
        });
        const sort = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$sanitizeSortQuery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeSortQuery"])({
            fields: collection.config.flattenedFields,
            sort: incomingSort
        });
        const sanitizedJoins = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$sanitizeJoinQuery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeJoinQuery"])({
            collectionConfig,
            joins,
            overrideAccess: overrideAccess,
            req
        });
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasDraftsEnabled"])(collectionConfig) && draftsEnabled) {
            fullWhere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$appendVersionToQueryKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendVersionToQueryKey"])(fullWhere);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateQueryPaths"])({
                collectionConfig: collection.config,
                overrideAccess: overrideAccess,
                req,
                versionFields: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildCollectionFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildVersionCollectionFields"])(payload.config, collection.config, true),
                where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$appendVersionToQueryKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendVersionToQueryKey"])(where)
            });
            result = await payload.db.queryDrafts({
                collection: collectionConfig.slug,
                joins: req.payloadAPI === 'GraphQL' ? false : sanitizedJoins,
                limit: sanitizedLimit,
                locale: locale,
                page: sanitizedPage,
                pagination: usePagination,
                req,
                select: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getQueryDraftsSelect"])({
                    select
                }),
                sort: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSort$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getQueryDraftsSort"])({
                    collectionConfig,
                    sort
                }),
                where: fullWhere
            });
        } else {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateQueryPaths"])({
                collectionConfig,
                overrideAccess: overrideAccess,
                req,
                where: where
            });
            result = await payload.db.find({
                collection: collectionConfig.slug,
                draftsEnabled,
                joins: req.payloadAPI === 'GraphQL' ? false : sanitizedJoins,
                limit: sanitizedLimit,
                locale: locale,
                page: sanitizedPage,
                pagination,
                req,
                select,
                sort,
                where: fullWhere
            });
        }
        if (includeLockStatus) {
            try {
                const lockDocumentsProp = collectionConfig?.lockDocuments;
                const lockDuration = typeof lockDocumentsProp === 'object' ? lockDocumentsProp.duration : lockDurationDefault;
                const lockDurationInMilliseconds = lockDuration * 1000;
                const now = new Date().getTime();
                const lockedDocuments = await payload.find({
                    collection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$locked$2d$documents$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["lockedDocumentsCollectionSlug"],
                    depth: 1,
                    limit: sanitizedLimit,
                    overrideAccess: false,
                    pagination: false,
                    req,
                    where: {
                        and: [
                            {
                                'document.relationTo': {
                                    equals: collectionConfig.slug
                                }
                            },
                            {
                                'document.value': {
                                    in: result.docs.map((doc)=>doc.id)
                                }
                            },
                            // Query where the lock is newer than the current time minus lock time
                            {
                                updatedAt: {
                                    greater_than: new Date(now - lockDurationInMilliseconds)
                                }
                            }
                        ]
                    }
                });
                const lockedDocs = Array.isArray(lockedDocuments?.docs) ? lockedDocuments.docs : [];
                // Filter out stale locks
                const validLockedDocs = lockedDocs.filter((lock)=>{
                    const lastEditedAt = new Date(lock?.updatedAt).getTime();
                    return lastEditedAt + lockDurationInMilliseconds > now;
                });
                for (const doc of result.docs){
                    const lockedDoc = validLockedDocs.find((lock)=>lock?.document?.value === doc.id);
                    doc._isLocked = !!lockedDoc;
                    doc._userEditing = lockedDoc ? lockedDoc?.user?.value : null;
                }
            } catch (_err) {
                for (const doc of result.docs){
                    doc._isLocked = false;
                    doc._userEditing = null;
                }
            }
        }
        // /////////////////////////////////////
        // beforeRead - Collection
        // /////////////////////////////////////
        if (collectionConfig?.hooks?.beforeRead?.length) {
            result.docs = await Promise.all(result.docs.map(async (doc)=>{
                let docRef = doc;
                for (const hook of collectionConfig.hooks.beforeRead){
                    docRef = await hook({
                        collection: collectionConfig,
                        context: req.context,
                        doc: docRef,
                        query: fullWhere,
                        req
                    }) || docRef;
                }
                return docRef;
            }));
        }
        // /////////////////////////////////////
        // afterRead - Fields
        // /////////////////////////////////////
        result.docs = await Promise.all(result.docs.map(async (doc)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["afterRead"])({
                collection: collectionConfig,
                context: req.context,
                currentDepth,
                depth: depth,
                doc,
                draft: draftsEnabled,
                fallbackLocale: fallbackLocale,
                findMany: true,
                global: null,
                locale: locale,
                overrideAccess: overrideAccess,
                populate,
                req,
                select,
                showHiddenFields: showHiddenFields
            })));
        // /////////////////////////////////////
        // afterRead - Collection
        // /////////////////////////////////////
        if (collectionConfig?.hooks?.afterRead?.length) {
            result.docs = await Promise.all(result.docs.map(async (doc)=>{
                let docRef = doc;
                for (const hook of collectionConfig.hooks.afterRead){
                    docRef = await hook({
                        collection: collectionConfig,
                        context: req.context,
                        doc: docRef,
                        findMany: true,
                        query: fullWhere,
                        req
                    }) || doc;
                }
                return docRef;
            }));
        }
        // /////////////////////////////////////
        // afterOperation - Collection
        // /////////////////////////////////////
        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildAfterOperation"])({
            args,
            collection: collectionConfig,
            operation: 'find',
            result
        });
        // /////////////////////////////////////
        // Return results
        // /////////////////////////////////////
        return result;
    } catch (error) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["killTransaction"])(args.req);
        throw error;
    }
}; //# sourceMappingURL=find.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/local/find.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findLocal",
    ()=>findLocal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/createLocalReq.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$find$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/find.js [app-route] (ecmascript)");
;
;
;
async function findLocal(payload, options) {
    const { collection: collectionSlug, currentDepth, depth, disableErrors, draft = false, includeLockStatus, joins, limit, overrideAccess = true, page, pagination = true, populate, select, showHiddenFields, sort, trash = false, where } = options;
    const collection = payload.collections[collectionSlug];
    if (!collection) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`The collection with slug ${String(collectionSlug)} can't be found. Find Operation.`);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$find$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findOperation"])({
        collection,
        currentDepth,
        depth,
        disableErrors,
        draft,
        includeLockStatus,
        joins,
        limit,
        overrideAccess,
        page,
        pagination,
        populate,
        req: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])(options, payload),
        select,
        showHiddenFields,
        sort,
        trash,
        where
    });
} //# sourceMappingURL=find.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/findByID.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findByIDOperation",
    ()=>findByIDOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/executeAccess.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/combineQueries.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$sanitizeJoinQuery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/sanitizeJoinQuery.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$sanitizeWhereQuery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/sanitizeWhereQuery.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/NotFound.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterRead/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/queryValidation/validateQueryPaths.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$locked$2d$documents$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/locked-documents/config.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$appendNonTrashedFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/appendNonTrashedFilter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getVersionsConfig.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/killTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/sanitizeSelect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$replaceWithDraftIfAvailable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/drafts/replaceWithDraftIfAvailable.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildAfterOperation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildBeforeOperation.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const findByIDOperation = async (incomingArgs)=>{
    let args = incomingArgs;
    try {
        // /////////////////////////////////////
        // beforeOperation - Collection
        // /////////////////////////////////////
        args = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildBeforeOperation"])({
            args,
            collection: args.collection.config,
            operation: 'read'
        });
        const { id, collection: { config: collectionConfig }, currentDepth, depth, disableErrors, draft: replaceWithVersion = false, flattenLocales, includeLockStatus, joins, overrideAccess = false, populate, req: { fallbackLocale, locale, t }, req, select: incomingSelect, showHiddenFields, trash = false } = args;
        const select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeSelect"])({
            fields: collectionConfig.flattenedFields,
            forceSelect: collectionConfig.forceSelect,
            select: incomingSelect
        });
        // /////////////////////////////////////
        // Access
        // /////////////////////////////////////
        const accessResult = !overrideAccess ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeAccess"])({
            id,
            disableErrors,
            req
        }, collectionConfig.access.read) : true;
        // If errors are disabled, and access returns false, return null
        if (accessResult === false) {
            return null;
        }
        const where = {
            id: {
                equals: id
            }
        };
        let fullWhere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineQueries"])(where, accessResult);
        // Exclude trashed documents when trash: false
        fullWhere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$appendNonTrashedFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendNonTrashedFilter"])({
            enableTrash: collectionConfig.trash,
            trash,
            where: fullWhere
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$sanitizeWhereQuery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeWhereQuery"])({
            fields: collectionConfig.flattenedFields,
            payload: args.req.payload,
            where: fullWhere
        });
        const sanitizedJoins = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$sanitizeJoinQuery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeJoinQuery"])({
            collectionConfig,
            joins,
            overrideAccess,
            req
        });
        // execute only if there's a custom ID and potentially overwriten access on id
        if (req.payload.collections[collectionConfig.slug].customIDType) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateQueryPaths"])({
                collectionConfig,
                overrideAccess,
                req,
                where
            });
        }
        // /////////////////////////////////////
        // Find by ID
        // /////////////////////////////////////
        const findOneArgs = {
            collection: collectionConfig.slug,
            draftsEnabled: replaceWithVersion,
            joins: req.payloadAPI === 'GraphQL' ? false : sanitizedJoins,
            locale: locale,
            req: {
                transactionID: req.transactionID
            },
            select,
            where: fullWhere
        };
        if (!findOneArgs.where?.and?.[0]?.id) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NotFound"](t);
        }
        const docFromDB = await req.payload.db.findOne(findOneArgs);
        if (!docFromDB && !args.data) {
            if (!disableErrors) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NotFound"](req.t);
            }
            return null;
        }
        let result = args.data ?? docFromDB;
        // /////////////////////////////////////
        // Include Lock Status if required
        // /////////////////////////////////////
        if (includeLockStatus && id) {
            let lockStatus = null;
            try {
                const lockDocumentsProp = collectionConfig?.lockDocuments;
                const lockDurationDefault = 300 // Default 5 minutes in seconds
                ;
                const lockDuration = typeof lockDocumentsProp === 'object' ? lockDocumentsProp.duration : lockDurationDefault;
                const lockDurationInMilliseconds = lockDuration * 1000;
                const lockedDocument = await req.payload.find({
                    collection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$locked$2d$documents$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["lockedDocumentsCollectionSlug"],
                    depth: 1,
                    limit: 1,
                    overrideAccess: false,
                    pagination: false,
                    req,
                    where: {
                        and: [
                            {
                                'document.relationTo': {
                                    equals: collectionConfig.slug
                                }
                            },
                            {
                                'document.value': {
                                    equals: id
                                }
                            },
                            // Query where the lock is newer than the current time minus lock time
                            {
                                updatedAt: {
                                    greater_than: new Date(new Date().getTime() - lockDurationInMilliseconds)
                                }
                            }
                        ]
                    }
                });
                if (lockedDocument && lockedDocument.docs.length > 0) {
                    lockStatus = lockedDocument.docs[0];
                }
            } catch  {
            // swallow error
            }
            result._isLocked = !!lockStatus;
            result._userEditing = lockStatus?.user?.value ?? null;
        }
        // /////////////////////////////////////
        // Replace document with draft if available
        // /////////////////////////////////////
        if (replaceWithVersion && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasDraftsEnabled"])(collectionConfig)) {
            result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$replaceWithDraftIfAvailable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["replaceWithDraftIfAvailable"])({
                accessResult,
                doc: result,
                entity: collectionConfig,
                entityType: 'collection',
                overrideAccess,
                req,
                select
            });
        }
        // /////////////////////////////////////
        // beforeRead - Collection
        // /////////////////////////////////////
        if (collectionConfig.hooks?.beforeRead?.length) {
            for (const hook of collectionConfig.hooks.beforeRead){
                result = await hook({
                    collection: collectionConfig,
                    context: req.context,
                    doc: result,
                    query: findOneArgs.where,
                    req
                }) || result;
            }
        }
        // /////////////////////////////////////
        // afterRead - Fields
        // /////////////////////////////////////
        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["afterRead"])({
            collection: collectionConfig,
            context: req.context,
            currentDepth,
            depth: depth,
            doc: result,
            draft: replaceWithVersion,
            fallbackLocale: fallbackLocale,
            flattenLocales,
            global: null,
            locale: locale,
            overrideAccess,
            populate,
            req,
            select,
            showHiddenFields: showHiddenFields
        });
        // /////////////////////////////////////
        // afterRead - Collection
        // /////////////////////////////////////
        if (collectionConfig.hooks?.afterRead?.length) {
            for (const hook of collectionConfig.hooks.afterRead){
                result = await hook({
                    collection: collectionConfig,
                    context: req.context,
                    doc: result,
                    query: findOneArgs.where,
                    req
                }) || result;
            }
        }
        // /////////////////////////////////////
        // afterOperation - Collection
        // /////////////////////////////////////
        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildAfterOperation"])({
            args,
            collection: collectionConfig,
            operation: 'findByID',
            result
        });
        // /////////////////////////////////////
        // Return results
        // /////////////////////////////////////
        return result;
    } catch (error) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["killTransaction"])(args.req);
        throw error;
    }
}; //# sourceMappingURL=findByID.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/local/findByID.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findByIDLocal",
    ()=>findByIDLocal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/createLocalReq.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$findByID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/findByID.js [app-route] (ecmascript)");
;
;
;
async function findByIDLocal(payload, options) {
    const { id, collection: collectionSlug, currentDepth, data, depth, disableErrors = false, draft = false, flattenLocales, includeLockStatus, joins, overrideAccess = true, populate, select, showHiddenFields, trash = false } = options;
    const collection = payload.collections[collectionSlug];
    if (!collection) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`The collection with slug ${String(collectionSlug)} can't be found. Find By ID Operation.`);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$findByID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findByIDOperation"])({
        id,
        collection,
        currentDepth,
        data,
        depth,
        disableErrors,
        draft,
        flattenLocales,
        includeLockStatus,
        joins,
        overrideAccess,
        populate,
        req: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])(options, payload),
        select,
        showHiddenFields,
        trash
    });
} //# sourceMappingURL=findByID.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/findDistinct.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findDistinctOperation",
    ()=>findDistinctOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__b__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export b as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/executeAccess.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/combineQueries.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/queryValidation/validateQueryPaths.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$sanitizeWhereQuery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/sanitizeWhereQuery.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/Forbidden.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$relationshipPopulationPromise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterRead/relationshipPopulationPromise.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$appendNonTrashedFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/appendNonTrashedFilter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getFieldByPath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getFieldByPath.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/killTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildAfterOperation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildBeforeOperation.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
const findDistinctOperation = async (incomingArgs)=>{
    let args = incomingArgs;
    try {
        // /////////////////////////////////////
        // beforeOperation - Collection
        // /////////////////////////////////////
        args = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildBeforeOperation"])({
            args,
            collection: args.collection.config,
            operation: 'readDistinct'
        });
        const { collection: { config: collectionConfig }, disableErrors, overrideAccess, populate, showHiddenFields = false, trash = false, where } = args;
        const req = args.req;
        const { locale, payload } = req;
        // /////////////////////////////////////
        // Access
        // /////////////////////////////////////
        let accessResult;
        if (!overrideAccess) {
            accessResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeAccess"])({
                disableErrors,
                req
            }, collectionConfig.access.read);
            // If errors are disabled, and access returns false, return empty results
            if (accessResult === false) {
                return {
                    hasNextPage: false,
                    hasPrevPage: false,
                    limit: args.limit || 0,
                    nextPage: null,
                    page: 1,
                    pagingCounter: 1,
                    prevPage: null,
                    totalDocs: 0,
                    totalPages: 0,
                    values: []
                };
            }
        }
        // /////////////////////////////////////
        // Find Distinct
        // /////////////////////////////////////
        let fullWhere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineQueries"])(where, accessResult);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$sanitizeWhereQuery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeWhereQuery"])({
            fields: collectionConfig.flattenedFields,
            payload,
            where: fullWhere
        });
        // Exclude trashed documents when trash: false
        fullWhere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$appendNonTrashedFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendNonTrashedFilter"])({
            enableTrash: collectionConfig.trash,
            trash,
            where: fullWhere
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateQueryPaths"])({
            collectionConfig,
            overrideAccess: overrideAccess,
            req,
            where: where ?? {}
        });
        const fieldResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getFieldByPath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFieldByPath"])({
            config: payload.config,
            fields: collectionConfig.flattenedFields,
            includeRelationships: true,
            path: args.field
        });
        if (!fieldResult) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`Field ${args.field} was not found in the collection ${collectionConfig.slug}`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__b__as__default$3e$__["default"].BAD_REQUEST);
        }
        if (fieldResult.field.hidden && !showHiddenFields) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Forbidden"](req.t);
        }
        if (fieldResult.field.access?.read) {
            const hasAccess = await fieldResult.field.access.read({
                req
            });
            if (!hasAccess) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Forbidden"](req.t);
            }
        }
        if ('virtual' in fieldResult.field && fieldResult.field.virtual) {
            if (typeof fieldResult.field.virtual !== 'string') {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`Cannot findDistinct by a virtual field that isn't linked to a relationship field.`);
            }
            let relationPath = '';
            let currentFields = collectionConfig.flattenedFields;
            const fieldPathSegments = fieldResult.field.virtual.split('.');
            for (const segment of fieldResult.field.virtual.split('.')){
                relationPath = `${relationPath}${segment}`;
                fieldPathSegments.shift();
                const field = currentFields.find((e)=>e.name === segment);
                if ((field.type === 'relationship' || field.type === 'upload') && typeof field.relationTo === 'string') {
                    break;
                }
                if ('flattenedFields' in field) {
                    currentFields = field.flattenedFields;
                }
            }
            const path = `${relationPath}.${fieldPathSegments.join('.')}`;
            const result = await payload.findDistinct({
                collection: collectionConfig.slug,
                depth: args.depth,
                disableErrors,
                field: path,
                limit: args.limit,
                locale,
                overrideAccess,
                page: args.page,
                populate,
                req,
                showHiddenFields,
                sort: args.sort,
                trash,
                where
            });
            for (const val of result.values){
                val[args.field] = val[path];
                delete val[path];
            }
            return result;
        }
        let result = await payload.db.findDistinct({
            collection: collectionConfig.slug,
            field: args.field,
            limit: args.limit,
            locale: locale,
            page: args.page,
            req,
            sort: args.sort,
            where: fullWhere
        });
        if ((fieldResult.field.type === 'relationship' || fieldResult.field.type === 'upload') && args.depth) {
            const populationPromises = [];
            const sanitizedField = {
                ...fieldResult.field
            };
            if (fieldResult.field.hasMany) {
                sanitizedField.hasMany = false;
            }
            for (const doc of result.values){
                populationPromises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$relationshipPopulationPromise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["relationshipPopulationPromise"])({
                    currentDepth: 0,
                    depth: args.depth,
                    draft: false,
                    fallbackLocale: req.fallbackLocale || null,
                    field: sanitizedField,
                    locale: req.locale || null,
                    overrideAccess: args.overrideAccess ?? true,
                    parentIsLocalized: false,
                    populate,
                    req,
                    showHiddenFields: false,
                    siblingDoc: doc
                }));
            }
            await Promise.all(populationPromises);
        }
        // /////////////////////////////////////
        // afterOperation - Collection
        // /////////////////////////////////////
        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildAfterOperation"])({
            args,
            collection: collectionConfig,
            operation: 'findDistinct',
            result
        });
        // /////////////////////////////////////
        // Return results
        // /////////////////////////////////////
        return result;
    } catch (error) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["killTransaction"])(args.req);
        throw error;
    }
}; //# sourceMappingURL=findDistinct.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/local/findDistinct.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findDistinct",
    ()=>findDistinct
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/createLocalReq.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$findDistinct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/findDistinct.js [app-route] (ecmascript)");
;
;
async function findDistinct(payload, options) {
    const { collection: collectionSlug, depth = 0, disableErrors, field, limit, overrideAccess = true, page, populate, showHiddenFields, sort, trash = false, where } = options;
    const collection = payload.collections[collectionSlug];
    if (!collection) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`The collection with slug ${String(collectionSlug)} can't be found. Find Operation.`);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$findDistinct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findDistinctOperation"])({
        collection,
        depth,
        disableErrors,
        field,
        limit,
        overrideAccess,
        page,
        populate,
        req: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])(options, payload),
        showHiddenFields,
        sort,
        trash,
        where
    });
} //# sourceMappingURL=findDistinct.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/findVersionByID.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findVersionByIDOperation",
    ()=>findVersionByIDOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/executeAccess.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/combineQueries.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/Forbidden.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/NotFound.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterRead/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$appendNonTrashedFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/appendNonTrashedFilter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/killTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/sanitizeSelect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildCollectionFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/buildCollectionFields.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/drafts/getQueryDraftsSelect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildAfterOperation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildBeforeOperation.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
const findVersionByIDOperation = async (args)=>{
    const { id, collection: { config: collectionConfig }, currentDepth, depth, disableErrors, overrideAccess, populate, req: { fallbackLocale, locale, payload }, req, select: incomingSelect, showHiddenFields, trash = false } = args;
    if (!id) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]('Missing ID of version.', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].BAD_REQUEST);
    }
    try {
        // /////////////////////////////////////
        // beforeOperation - Collection
        // /////////////////////////////////////
        args = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildBeforeOperation"])({
            args,
            collection: collectionConfig,
            operation: 'findVersionByID'
        });
        // /////////////////////////////////////
        // Access
        // /////////////////////////////////////
        const accessResults = !overrideAccess ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeAccess"])({
            id,
            disableErrors,
            req
        }, collectionConfig.access.readVersions) : true;
        // If errors are disabled, and access returns false, return null
        if (accessResults === false) {
            return null;
        }
        const hasWhereAccess = typeof accessResults === 'object';
        const where = {
            id: {
                equals: id
            }
        };
        let fullWhere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineQueries"])(where, accessResults);
        fullWhere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$appendNonTrashedFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendNonTrashedFilter"])({
            deletedAtPath: 'version.deletedAt',
            enableTrash: collectionConfig.trash,
            trash,
            where: fullWhere
        });
        // /////////////////////////////////////
        // Find by ID
        // /////////////////////////////////////
        const select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeSelect"])({
            fields: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildCollectionFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildVersionCollectionFields"])(payload.config, collectionConfig, true),
            forceSelect: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getQueryDraftsSelect"])({
                select: collectionConfig.forceSelect
            }),
            select: incomingSelect,
            versions: true
        });
        const versionsQuery = await payload.db.findVersions({
            collection: collectionConfig.slug,
            limit: 1,
            locale: locale,
            pagination: false,
            req,
            select,
            where: fullWhere
        });
        let result = versionsQuery.docs[0];
        if (!result) {
            if (!disableErrors) {
                if (!hasWhereAccess) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NotFound"](req.t);
                }
                if (hasWhereAccess) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Forbidden"](req.t);
                }
            }
            return null;
        }
        if (!result.version) {
            // Fallback if not selected
            ;
            result.version = {};
        }
        // /////////////////////////////////////
        // beforeRead - Collection
        // /////////////////////////////////////
        if (collectionConfig.hooks?.beforeRead?.length) {
            for (const hook of collectionConfig.hooks.beforeRead){
                result.version = await hook({
                    collection: collectionConfig,
                    context: req.context,
                    doc: result.version,
                    query: fullWhere,
                    req
                }) || result.version;
            }
        }
        // /////////////////////////////////////
        // afterRead - Fields
        // /////////////////////////////////////
        result.version = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["afterRead"])({
            collection: collectionConfig,
            context: req.context,
            currentDepth,
            depth: depth,
            doc: result.version,
            // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
            draft: undefined,
            fallbackLocale: fallbackLocale,
            global: null,
            locale: locale,
            overrideAccess: overrideAccess,
            populate,
            req,
            select: typeof select?.version === 'object' ? select.version : undefined,
            showHiddenFields: showHiddenFields
        });
        // /////////////////////////////////////
        // afterRead - Collection
        // /////////////////////////////////////
        if (collectionConfig.hooks?.afterRead?.length) {
            for (const hook of collectionConfig.hooks.afterRead){
                result.version = await hook({
                    collection: collectionConfig,
                    context: req.context,
                    doc: result.version,
                    query: fullWhere,
                    req
                }) || result.version;
            }
        }
        // /////////////////////////////////////
        // afterOperation - Collection
        // /////////////////////////////////////
        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildAfterOperation"])({
            args,
            collection: collectionConfig,
            operation: 'findVersionByID',
            result
        });
        // /////////////////////////////////////
        // Return results
        // /////////////////////////////////////
        return result;
    } catch (error) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["killTransaction"])(req);
        throw error;
    }
}; //# sourceMappingURL=findVersionByID.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/local/findVersionByID.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findVersionByIDLocal",
    ()=>findVersionByIDLocal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/createLocalReq.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$findVersionByID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/findVersionByID.js [app-route] (ecmascript)");
;
;
;
async function findVersionByIDLocal(payload, options) {
    const { id, collection: collectionSlug, depth, disableErrors = false, overrideAccess = true, populate, select, showHiddenFields, trash = false } = options;
    const collection = payload.collections[collectionSlug];
    if (!collection) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`The collection with slug ${String(collectionSlug)} can't be found. Find Version By ID Operation.`);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$findVersionByID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findVersionByIDOperation"])({
        id,
        collection,
        depth,
        disableErrors,
        overrideAccess,
        populate,
        req: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])(options, payload),
        select,
        showHiddenFields,
        trash
    });
} //# sourceMappingURL=findVersionByID.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/findVersions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findVersionsOperation",
    ()=>findVersionsOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/executeAccess.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/combineQueries.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/queryValidation/validateQueryPaths.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$sanitizeWhereQuery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/sanitizeWhereQuery.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterRead/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$appendNonTrashedFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/appendNonTrashedFilter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/killTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeInternalFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/sanitizeInternalFields.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/sanitizeSelect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildCollectionFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/buildCollectionFields.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/drafts/getQueryDraftsSelect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildAfterOperation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildBeforeOperation.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
const findVersionsOperation = async (args)=>{
    try {
        // /////////////////////////////////////
        // beforeOperation - Collection
        // /////////////////////////////////////
        args = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildBeforeOperation"])({
            args,
            collection: args.collection.config,
            operation: 'findVersions'
        });
        const { collection: { config: collectionConfig }, depth, limit, overrideAccess, page, pagination = true, populate, select: incomingSelect, showHiddenFields, sort, trash = false, where } = args;
        const req = args.req;
        const { fallbackLocale, locale, payload } = req;
        // /////////////////////////////////////
        // Access
        // /////////////////////////////////////
        let accessResults;
        if (!overrideAccess) {
            accessResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeAccess"])({
                req
            }, collectionConfig.access.readVersions);
        }
        const versionFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildCollectionFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildVersionCollectionFields"])(payload.config, collectionConfig, true);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateQueryPaths"])({
            collectionConfig,
            overrideAccess: overrideAccess,
            req,
            versionFields,
            where: where
        });
        let fullWhere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineQueries"])(where, accessResults);
        // Exclude trashed documents when trash: false
        fullWhere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$appendNonTrashedFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendNonTrashedFilter"])({
            deletedAtPath: 'version.deletedAt',
            enableTrash: collectionConfig.trash,
            trash,
            where: fullWhere
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$sanitizeWhereQuery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeWhereQuery"])({
            fields: versionFields,
            payload,
            where: fullWhere
        });
        const select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeSelect"])({
            fields: versionFields,
            forceSelect: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getQueryDraftsSelect"])({
                select: collectionConfig.forceSelect
            }),
            select: incomingSelect,
            versions: true
        });
        // /////////////////////////////////////
        // Find
        // /////////////////////////////////////
        const usePagination = pagination && limit !== 0;
        const sanitizedLimit = limit ?? (usePagination ? 10 : 0);
        const sanitizedPage = page || 1;
        const paginatedDocs = await payload.db.findVersions({
            collection: collectionConfig.slug,
            limit: sanitizedLimit,
            locale: locale,
            page: sanitizedPage,
            pagination,
            req,
            select,
            sort,
            where: fullWhere
        });
        // /////////////////////////////////////
        // beforeRead - Collection
        // /////////////////////////////////////
        let result = paginatedDocs;
        result.docs = await Promise.all(paginatedDocs.docs.map(async (doc)=>{
            const docRef = doc;
            // Fallback if not selected
            if (!docRef.version) {
                ;
                docRef.version = {};
            }
            if (collectionConfig.hooks?.beforeRead?.length) {
                for (const hook of collectionConfig.hooks.beforeRead){
                    docRef.version = await hook({
                        collection: collectionConfig,
                        context: req.context,
                        doc: docRef.version,
                        query: fullWhere,
                        req
                    }) || docRef.version;
                }
            }
            return docRef;
        }));
        // /////////////////////////////////////
        // afterRead - Fields
        // /////////////////////////////////////
        result.docs = await Promise.all(result.docs.map(async (data)=>{
            data.version = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["afterRead"])({
                collection: collectionConfig,
                context: req.context,
                depth: depth,
                doc: data.version,
                // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
                draft: undefined,
                fallbackLocale: fallbackLocale,
                findMany: true,
                global: null,
                locale: locale,
                overrideAccess: overrideAccess,
                populate,
                req,
                select: typeof select?.version === 'object' ? select.version : undefined,
                showHiddenFields: showHiddenFields
            });
            return data;
        }));
        // /////////////////////////////////////
        // afterRead - Collection
        // /////////////////////////////////////
        if (collectionConfig.hooks.afterRead?.length) {
            result.docs = await Promise.all(result.docs.map(async (doc)=>{
                const docRef = doc;
                for (const hook of collectionConfig.hooks.afterRead){
                    docRef.version = await hook({
                        collection: collectionConfig,
                        context: req.context,
                        doc: doc.version,
                        findMany: true,
                        query: fullWhere,
                        req
                    }) || doc.version;
                }
                return docRef;
            }));
        }
        // /////////////////////////////////////
        // Return results
        // /////////////////////////////////////
        result.docs = result.docs.map((doc)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeInternalFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeInternalFields"])(doc));
        // /////////////////////////////////////
        // afterOperation - Collection
        // /////////////////////////////////////
        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildAfterOperation"])({
            args,
            collection: collectionConfig,
            operation: 'findVersions',
            result
        });
        return result;
    } catch (error) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["killTransaction"])(args.req);
        throw error;
    }
}; //# sourceMappingURL=findVersions.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/local/findVersions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findVersionsLocal",
    ()=>findVersionsLocal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/createLocalReq.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$findVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/findVersions.js [app-route] (ecmascript)");
;
;
;
async function findVersionsLocal(payload, options) {
    const { collection: collectionSlug, depth, limit, overrideAccess = true, page, pagination = true, populate, select, showHiddenFields, sort, trash = false, where } = options;
    const collection = payload.collections[collectionSlug];
    if (!collection) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`The collection with slug ${String(collectionSlug)} can't be found. Find Versions Operation.`);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$findVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findVersionsOperation"])({
        collection,
        depth,
        limit,
        overrideAccess,
        page,
        pagination,
        populate,
        req: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])(options, payload),
        select,
        showHiddenFields,
        sort,
        trash,
        where
    });
} //# sourceMappingURL=findVersions.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/restoreVersion.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "restoreVersionOperation",
    ()=>restoreVersionOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/executeAccess.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/combineQueries.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/Forbidden.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/NotFound.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterChange/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterRead/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeChange/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeValidate/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/commitTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/deepCopyObject.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getVersionsConfig.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/initTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/killTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/sanitizeSelect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$getLatestCollectionVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/getLatestCollectionVersion.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$saveVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/saveVersion.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildAfterOperation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildBeforeOperation.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const restoreVersionOperation = async (args)=>{
    const { id, collection: { config: collectionConfig }, depth, draft: draftArg = false, overrideAccess = false, populate, req, req: { fallbackLocale, locale, payload }, select: incomingSelect, showHiddenFields } = args;
    try {
        const shouldCommit = !args.disableTransaction && await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initTransaction"])(args.req);
        // /////////////////////////////////////
        // beforeOperation - Collection
        // /////////////////////////////////////
        args = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildBeforeOperation"])({
            args,
            collection: args.collection.config,
            operation: 'restoreVersion'
        });
        if (!id) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]('Missing ID of version to restore.', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].BAD_REQUEST);
        }
        // /////////////////////////////////////
        // Retrieve original raw version
        // /////////////////////////////////////
        const { docs: versionDocs } = await req.payload.db.findVersions({
            collection: collectionConfig.slug,
            limit: 1,
            locale: locale,
            pagination: false,
            req,
            where: {
                id: {
                    equals: id
                }
            }
        });
        const [rawVersionToRestore] = versionDocs;
        if (!rawVersionToRestore) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NotFound"](req.t);
        }
        const { parent: parentDocID, version: versionToRestoreWithLocales } = rawVersionToRestore;
        // /////////////////////////////////////
        // Access
        // /////////////////////////////////////
        const accessResults = !overrideAccess ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeAccess"])({
            id: parentDocID,
            req
        }, collectionConfig.access.update) : true;
        const hasWherePolicy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasWhereAccessResult"])(accessResults);
        // /////////////////////////////////////
        // Retrieve document
        // /////////////////////////////////////
        const findOneArgs = {
            collection: collectionConfig.slug,
            locale: locale,
            req,
            where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineQueries"])({
                id: {
                    equals: parentDocID
                }
            }, accessResults)
        };
        // Get the document from the non versioned collection
        const doc = await req.payload.db.findOne(findOneArgs);
        if (!doc && !hasWherePolicy) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NotFound"](req.t);
        }
        if (!doc && hasWherePolicy) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Forbidden"](req.t);
        }
        if (collectionConfig.trash && doc?.deletedAt) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`Cannot restore a version of a trashed document (ID: ${parentDocID}). Restore the document first.`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].FORBIDDEN);
        }
        // /////////////////////////////////////
        // fetch previousDoc
        // /////////////////////////////////////
        const prevDocWithLocales = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$getLatestCollectionVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getLatestCollectionVersion"])({
            id: parentDocID,
            config: collectionConfig,
            payload,
            query: findOneArgs,
            req
        });
        // originalDoc with hoisted localized data
        const originalDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["afterRead"])({
            collection: collectionConfig,
            context: req.context,
            depth: 0,
            doc: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(prevDocWithLocales),
            draft: draftArg,
            fallbackLocale: null,
            global: null,
            locale: locale,
            overrideAccess: true,
            req,
            showHiddenFields: true
        });
        // version data with hoisted localized data
        const prevVersionDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["afterRead"])({
            collection: collectionConfig,
            context: req.context,
            depth: 0,
            doc: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(rawVersionToRestore.version),
            draft: draftArg,
            fallbackLocale: null,
            global: null,
            locale: locale,
            overrideAccess: true,
            req,
            showHiddenFields: true
        });
        // /////////////////////////////////////
        // beforeValidate - Fields
        // /////////////////////////////////////
        let data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["beforeValidate"])({
            id: parentDocID,
            collection: collectionConfig,
            context: req.context,
            data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(prevVersionDoc),
            doc: originalDoc,
            global: null,
            operation: 'update',
            overrideAccess,
            req
        });
        // /////////////////////////////////////
        // beforeValidate - Collection
        // /////////////////////////////////////
        if (collectionConfig.hooks?.beforeValidate?.length) {
            for (const hook of collectionConfig.hooks.beforeValidate){
                data = await hook({
                    collection: collectionConfig,
                    context: req.context,
                    data,
                    operation: 'update',
                    originalDoc,
                    req
                }) || data;
            }
        }
        // /////////////////////////////////////
        // beforeChange - Collection
        // /////////////////////////////////////
        if (collectionConfig.hooks?.beforeChange?.length) {
            for (const hook of collectionConfig.hooks.beforeChange){
                data = await hook({
                    collection: collectionConfig,
                    context: req.context,
                    data,
                    operation: 'update',
                    originalDoc,
                    req
                }) || data;
            }
        }
        // /////////////////////////////////////
        // beforeChange - Fields
        // /////////////////////////////////////
        let result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["beforeChange"])({
            id: parentDocID,
            collection: collectionConfig,
            context: req.context,
            data: {
                ...data,
                id: parentDocID
            },
            doc: originalDoc,
            docWithLocales: versionToRestoreWithLocales,
            global: null,
            operation: 'update',
            overrideAccess,
            req,
            skipValidation: draftArg && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasDraftValidationEnabled"])(collectionConfig)
        });
        // /////////////////////////////////////
        // Update
        // /////////////////////////////////////
        const select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeSelect"])({
            fields: collectionConfig.flattenedFields,
            forceSelect: collectionConfig.forceSelect,
            select: incomingSelect
        });
        // Ensure updatedAt date is always updated
        result.updatedAt = new Date().toISOString();
        // Ensure status respects restoreAsDraft arg
        result._status = draftArg ? 'draft' : result._status;
        if (!draftArg) {
            result = await req.payload.db.updateOne({
                id: parentDocID,
                collection: collectionConfig.slug,
                data: result,
                req,
                select
            });
        }
        // /////////////////////////////////////
        // Save restored doc as a new version
        // /////////////////////////////////////
        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$saveVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["saveVersion"])({
            id: parentDocID,
            autosave: false,
            collection: collectionConfig,
            docWithLocales: result,
            draft: draftArg,
            operation: 'restoreVersion',
            payload,
            req,
            select
        });
        // /////////////////////////////////////
        // afterRead - Fields
        // /////////////////////////////////////
        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["afterRead"])({
            collection: collectionConfig,
            context: req.context,
            depth: depth,
            doc: result,
            // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
            draft: undefined,
            fallbackLocale: fallbackLocale,
            global: null,
            locale: locale,
            overrideAccess,
            populate,
            req,
            select,
            showHiddenFields: showHiddenFields
        });
        // /////////////////////////////////////
        // afterRead - Collection
        // /////////////////////////////////////
        if (collectionConfig.hooks?.afterRead?.length) {
            for (const hook of collectionConfig.hooks.afterRead){
                result = await hook({
                    collection: collectionConfig,
                    context: req.context,
                    doc: result,
                    req
                }) || result;
            }
        }
        // /////////////////////////////////////
        // afterChange - Fields
        // /////////////////////////////////////
        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["afterChange"])({
            collection: collectionConfig,
            context: req.context,
            data: result,
            doc: result,
            global: null,
            operation: 'update',
            previousDoc: prevDocWithLocales,
            req
        });
        // /////////////////////////////////////
        // afterChange - Collection
        // /////////////////////////////////////
        if (collectionConfig.hooks?.afterChange?.length) {
            for (const hook of collectionConfig.hooks.afterChange){
                result = await hook({
                    collection: collectionConfig,
                    context: req.context,
                    data: result,
                    doc: result,
                    operation: 'update',
                    previousDoc: prevDocWithLocales,
                    req
                }) || result;
            }
        }
        // /////////////////////////////////////
        // afterOperation - Collection
        // /////////////////////////////////////
        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildAfterOperation"])({
            args,
            collection: collectionConfig,
            operation: 'restoreVersion',
            result
        });
        if (shouldCommit) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["commitTransaction"])(req);
        }
        return result;
    } catch (error) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["killTransaction"])(req);
        throw error;
    }
}; //# sourceMappingURL=restoreVersion.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/local/restoreVersion.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "restoreVersionLocal",
    ()=>restoreVersionLocal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/createLocalReq.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$restoreVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/restoreVersion.js [app-route] (ecmascript)");
;
;
;
async function restoreVersionLocal(payload, options) {
    const { id, collection: collectionSlug, depth, overrideAccess = true, populate, select, showHiddenFields } = options;
    const collection = payload.collections[collectionSlug];
    if (!collection) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`The collection with slug ${String(collectionSlug)} can't be found. Restore Version Operation.`);
    }
    const args = {
        id,
        collection,
        depth,
        overrideAccess,
        payload,
        populate,
        req: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])(options, payload),
        select,
        showHiddenFields
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$restoreVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["restoreVersionOperation"])(args);
} //# sourceMappingURL=restoreVersion.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/update.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateDocument",
    ()=>updateDocument
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$ensureUsernameOrEmail$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/ensureUsernameOrEmail.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$strategies$2f$local$2f$generatePasswordSaltHash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/strategies/local/generatePasswordSaltHash.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/combineQueries.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterChange/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterRead/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeChange/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeValidate/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/deepCopyObject.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$saveVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/saveVersion.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$deleteAssociatedFiles$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/deleteAssociatedFiles.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$uploadFiles$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/uploadFiles.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$checkDocumentLockStatus$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/checkDocumentLockStatus.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getVersionsConfig.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$getLatestCollectionVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/getLatestCollectionVersion.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
const updateDocument = async ({ id, accessResults, autosave, collectionConfig, config, data, depth, docWithLocales, draftArg, fallbackLocale, filesToUpload, locale, overrideAccess, overrideLock, payload, populate, publishSpecificLocale, req, select, showHiddenFields })=>{
    const password = data?.password;
    const isSavingDraft = Boolean(draftArg && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasDraftsEnabled"])(collectionConfig)) && data._status !== 'published';
    const shouldSavePassword = Boolean(password && collectionConfig.auth && (!collectionConfig.auth.disableLocalStrategy || typeof collectionConfig.auth.disableLocalStrategy === 'object' && collectionConfig.auth.disableLocalStrategy.enableFields) && !isSavingDraft);
    // /////////////////////////////////////
    // Handle potentially locked documents
    // /////////////////////////////////////
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$checkDocumentLockStatus$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkDocumentLockStatus"])({
        id,
        collectionSlug: collectionConfig.slug,
        lockErrorMessage: `Document with ID ${id} is currently locked by another user and cannot be updated.`,
        overrideLock,
        req
    });
    const originalDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["afterRead"])({
        collection: collectionConfig,
        context: req.context,
        depth: 0,
        doc: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(docWithLocales),
        draft: draftArg,
        fallbackLocale: id ? null : fallbackLocale,
        global: null,
        locale,
        overrideAccess: true,
        req,
        showHiddenFields: true
    });
    const isRestoringDraftFromTrash = Boolean(originalDoc?.deletedAt) && data?._status !== 'published';
    if (collectionConfig.auth) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$ensureUsernameOrEmail$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureUsernameOrEmail"])({
            authOptions: collectionConfig.auth,
            collectionSlug: collectionConfig.slug,
            data,
            operation: 'update',
            originalDoc,
            req
        });
    }
    // /////////////////////////////////////
    // Delete any associated files
    // /////////////////////////////////////
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$deleteAssociatedFiles$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteAssociatedFiles"])({
        collectionConfig,
        config,
        doc: docWithLocales,
        files: filesToUpload,
        overrideDelete: false,
        req
    });
    // /////////////////////////////////////
    // beforeValidate - Fields
    // /////////////////////////////////////
    data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["beforeValidate"])({
        id,
        collection: collectionConfig,
        context: req.context,
        data,
        doc: originalDoc,
        global: null,
        operation: 'update',
        overrideAccess,
        req
    });
    // /////////////////////////////////////
    // beforeValidate - Collection
    // /////////////////////////////////////
    if (collectionConfig.hooks?.beforeValidate?.length) {
        for (const hook of collectionConfig.hooks.beforeValidate){
            data = await hook({
                collection: collectionConfig,
                context: req.context,
                data,
                operation: 'update',
                originalDoc,
                req
            }) || data;
        }
    }
    // /////////////////////////////////////
    // Write files to local storage
    // /////////////////////////////////////
    if (!collectionConfig.upload.disableLocalStorage) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$uploadFiles$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uploadFiles"])(payload, filesToUpload, req);
    }
    // /////////////////////////////////////
    // beforeChange - Collection
    // /////////////////////////////////////
    if (collectionConfig.hooks?.beforeChange?.length) {
        for (const hook of collectionConfig.hooks.beforeChange){
            data = await hook({
                collection: collectionConfig,
                context: req.context,
                data,
                operation: 'update',
                originalDoc,
                req
            }) || data;
        }
    }
    // /////////////////////////////////////
    // beforeChange - Fields
    // /////////////////////////////////////
    const beforeChangeArgs = {
        id,
        collection: collectionConfig,
        context: req.context,
        data: {
            ...data,
            id
        },
        doc: originalDoc,
        docWithLocales,
        global: null,
        operation: 'update',
        overrideAccess,
        req,
        skipValidation: isSavingDraft && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasDraftValidationEnabled"])(collectionConfig) || // Skip validation for trash operations since they're just metadata updates
        collectionConfig.trash && (Boolean(data?.deletedAt) || isRestoringDraftFromTrash)
    };
    let result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["beforeChange"])(beforeChangeArgs);
    let snapshotToSave;
    if (config.localization && collectionConfig.versions) {
        if (publishSpecificLocale) {
            snapshotToSave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(result);
            // the published data to save to the main document
            result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["beforeChange"])({
                ...beforeChangeArgs,
                docWithLocales: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$getLatestCollectionVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getLatestCollectionVersion"])({
                    id,
                    config: collectionConfig,
                    payload,
                    published: true,
                    query: {
                        collection: collectionConfig.slug,
                        locale,
                        req,
                        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineQueries"])({
                            id: {
                                equals: id
                            }
                        }, accessResults)
                    },
                    req
                }) || {}
            });
        }
    }
    // /////////////////////////////////////
    // Handle potential password update
    // /////////////////////////////////////
    const dataToUpdate = {
        ...result
    };
    if (shouldSavePassword && typeof password === 'string') {
        const { hash, salt } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$strategies$2f$local$2f$generatePasswordSaltHash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generatePasswordSaltHash"])({
            collection: collectionConfig,
            password,
            req
        });
        dataToUpdate.salt = salt;
        dataToUpdate.hash = hash;
        delete dataToUpdate.password;
        delete data.password;
    }
    // /////////////////////////////////////
    // Update
    // /////////////////////////////////////
    if (!isSavingDraft) {
        // Ensure updatedAt date is always updated
        dataToUpdate.updatedAt = new Date().toISOString();
        result = await req.payload.db.updateOne({
            id,
            collection: collectionConfig.slug,
            data: dataToUpdate,
            locale,
            req
        });
    }
    // /////////////////////////////////////
    // Create version
    // /////////////////////////////////////
    if (collectionConfig.versions) {
        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$saveVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["saveVersion"])({
            id,
            autosave,
            collection: collectionConfig,
            docWithLocales: result,
            draft: isSavingDraft,
            operation: 'update',
            payload,
            publishSpecificLocale,
            req,
            snapshot: snapshotToSave
        });
    }
    // /////////////////////////////////////
    // afterRead - Fields
    // /////////////////////////////////////
    result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["afterRead"])({
        collection: collectionConfig,
        context: req.context,
        depth,
        doc: result,
        draft: draftArg,
        fallbackLocale,
        global: null,
        locale,
        overrideAccess,
        populate,
        req,
        select,
        showHiddenFields
    });
    // /////////////////////////////////////
    // afterRead - Collection
    // /////////////////////////////////////
    if (collectionConfig.hooks?.afterRead?.length) {
        for (const hook of collectionConfig.hooks.afterRead){
            result = await hook({
                collection: collectionConfig,
                context: req.context,
                doc: result,
                req
            }) || result;
        }
    }
    // /////////////////////////////////////
    // afterChange - Fields
    // /////////////////////////////////////
    result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["afterChange"])({
        collection: collectionConfig,
        context: req.context,
        data,
        doc: result,
        global: null,
        operation: 'update',
        previousDoc: originalDoc,
        req
    });
    // /////////////////////////////////////
    // afterChange - Collection
    // /////////////////////////////////////
    if (collectionConfig.hooks?.afterChange?.length) {
        for (const hook of collectionConfig.hooks.afterChange){
            result = await hook({
                collection: collectionConfig,
                context: req.context,
                data,
                doc: result,
                operation: 'update',
                previousDoc: originalDoc,
                req
            }) || result;
        }
    }
    return result;
}; //# sourceMappingURL=update.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/update.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateOperation",
    ()=>updateOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/executeAccess.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/combineQueries.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/queryValidation/validateQueryPaths.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$sanitizeWhereQuery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/sanitizeWhereQuery.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/deepCopyObject.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$generateFileData$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/generateFileData.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$unlinkTempFiles$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/unlinkTempFiles.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$appendNonTrashedFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/appendNonTrashedFilter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/commitTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getVersionsConfig.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/initTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isErrorPublic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/isErrorPublic.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/killTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/sanitizeSelect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildCollectionFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/buildCollectionFields.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$appendVersionToQueryKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/drafts/appendVersionToQueryKey.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSort$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/drafts/getQueryDraftsSort.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildAfterOperation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildBeforeOperation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$sanitizeSortQuery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/sanitizeSortQuery.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$update$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/update.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const updateOperation = async (incomingArgs)=>{
    let args = incomingArgs;
    if (args.collection.config.disableBulkEdit && !args.overrideAccess) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`Collection ${args.collection.config.slug} has disabled bulk edit`, 403);
    }
    try {
        const shouldCommit = !args.disableTransaction && await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initTransaction"])(args.req);
        // /////////////////////////////////////
        // beforeOperation - Collection
        // /////////////////////////////////////
        args = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildBeforeOperation"])({
            args,
            collection: args.collection.config,
            operation: 'update'
        });
        const { autosave = false, collection: { config: collectionConfig }, collection, depth, draft: draftArg = false, limit = 0, overrideAccess, overrideLock, overwriteExistingFiles = false, populate, publishSpecificLocale, req: { fallbackLocale, locale, payload: { config }, payload }, req, select: incomingSelect, showHiddenFields, sort: incomingSort, trash = false, where } = args;
        if (!where) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("Missing 'where' query of documents to update.", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].BAD_REQUEST);
        }
        const { data: bulkUpdateData } = args;
        const shouldSaveDraft = Boolean(draftArg && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasDraftsEnabled"])(collectionConfig));
        // /////////////////////////////////////
        // Access
        // /////////////////////////////////////
        let accessResult;
        if (!overrideAccess) {
            accessResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeAccess"])({
                req
            }, collectionConfig.access.update);
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateQueryPaths"])({
            collectionConfig,
            overrideAccess: overrideAccess,
            req,
            where
        });
        // /////////////////////////////////////
        // Retrieve documents
        // /////////////////////////////////////
        let fullWhere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineQueries"])(where, accessResult);
        const isTrashAttempt = collectionConfig.trash && typeof bulkUpdateData === 'object' && bulkUpdateData !== null && 'deletedAt' in bulkUpdateData && bulkUpdateData.deletedAt != null;
        // Enforce delete access if performing a soft-delete (trash)
        if (isTrashAttempt && !overrideAccess) {
            const deleteAccessResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeAccess"])({
                req
            }, collectionConfig.access.delete);
            fullWhere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineQueries"])(fullWhere, deleteAccessResult);
        }
        // Exclude trashed documents when trash: false
        fullWhere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$appendNonTrashedFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendNonTrashedFilter"])({
            enableTrash: collectionConfig.trash,
            trash,
            where: fullWhere
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$sanitizeWhereQuery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeWhereQuery"])({
            fields: collectionConfig.flattenedFields,
            payload,
            where: fullWhere
        });
        const sort = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$sanitizeSortQuery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeSortQuery"])({
            fields: collection.config.flattenedFields,
            sort: incomingSort
        });
        let docs;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasDraftsEnabled"])(collectionConfig) && shouldSaveDraft) {
            const versionsWhere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$appendVersionToQueryKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendVersionToQueryKey"])(fullWhere);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateQueryPaths"])({
                collectionConfig: collection.config,
                overrideAccess: overrideAccess,
                req,
                versionFields: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildCollectionFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildVersionCollectionFields"])(payload.config, collection.config, true),
                where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$appendVersionToQueryKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendVersionToQueryKey"])(where)
            });
            const query = await payload.db.queryDrafts({
                collection: collectionConfig.slug,
                limit,
                locale: locale,
                pagination: false,
                req,
                sort: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSort$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getQueryDraftsSort"])({
                    collectionConfig,
                    sort
                }),
                where: versionsWhere
            });
            docs = query.docs;
        } else {
            const query = await payload.db.find({
                collection: collectionConfig.slug,
                limit,
                locale: locale,
                pagination: false,
                req,
                sort,
                where: fullWhere
            });
            docs = query.docs;
        }
        // /////////////////////////////////////
        // Generate data for all files and sizes
        // /////////////////////////////////////
        const { data, files: filesToUpload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$generateFileData$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateFileData"])({
            collection,
            config,
            data: bulkUpdateData,
            operation: 'update',
            overwriteExistingFiles,
            req,
            throwOnMissingFile: false
        });
        const errors = [];
        const promises = docs.map(async (docWithLocales)=>{
            const { id } = docWithLocales;
            try {
                const select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeSelect"])({
                    fields: collectionConfig.flattenedFields,
                    forceSelect: collectionConfig.forceSelect,
                    select: incomingSelect
                });
                // ///////////////////////////////////////////////
                // Update document, runs all document level hooks
                // ///////////////////////////////////////////////
                const updatedDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$update$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateDocument"])({
                    id,
                    accessResults: accessResult,
                    autosave,
                    collectionConfig,
                    config,
                    data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(data),
                    depth: depth,
                    docWithLocales,
                    draftArg,
                    fallbackLocale: fallbackLocale,
                    filesToUpload,
                    locale: locale,
                    overrideAccess: overrideAccess,
                    overrideLock: overrideLock,
                    payload,
                    populate,
                    publishSpecificLocale,
                    req,
                    select: select,
                    showHiddenFields: showHiddenFields
                });
                return updatedDoc;
            } catch (error) {
                const isPublic = error instanceof Error ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isErrorPublic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isErrorPublic"])(error, config) : false;
                errors.push({
                    id,
                    isPublic,
                    message: error instanceof Error ? error.message : 'Unknown error'
                });
            }
            return null;
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$unlinkTempFiles$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unlinkTempFiles"])({
            collectionConfig,
            config,
            req
        });
        const awaitedDocs = await Promise.all(promises);
        let result = {
            docs: awaitedDocs.filter(Boolean),
            errors
        };
        // /////////////////////////////////////
        // afterOperation - Collection
        // /////////////////////////////////////
        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildAfterOperation"])({
            args,
            collection: collectionConfig,
            operation: 'update',
            // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
            result
        });
        if (shouldCommit) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["commitTransaction"])(req);
        }
        // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
        return result;
    } catch (error) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["killTransaction"])(args.req);
        throw error;
    }
}; //# sourceMappingURL=update.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/updateByID.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateByIDOperation",
    ()=>updateByIDOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/executeAccess.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/combineQueries.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/Forbidden.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/NotFound.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/deepCopyObject.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$generateFileData$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/generateFileData.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$unlinkTempFiles$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/unlinkTempFiles.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$appendNonTrashedFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/appendNonTrashedFilter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/commitTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/initTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/killTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/sanitizeSelect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$getLatestCollectionVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/getLatestCollectionVersion.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildAfterOperation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildBeforeOperation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$update$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/update.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const updateByIDOperation = async (incomingArgs)=>{
    let args = incomingArgs;
    try {
        const shouldCommit = !args.disableTransaction && await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initTransaction"])(args.req);
        // /////////////////////////////////////
        // beforeOperation - Collection
        // /////////////////////////////////////
        args = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildBeforeOperation"])({
            args,
            collection: args.collection.config,
            operation: 'update'
        });
        if (args.publishSpecificLocale) {
            args.req.locale = args.publishSpecificLocale;
        }
        const { id, autosave = false, collection: { config: collectionConfig }, collection, depth, draft: draftArg = false, overrideAccess, overrideLock, overwriteExistingFiles = false, populate, publishSpecificLocale, req: { fallbackLocale, locale, payload: { config }, payload }, req, select: incomingSelect, showHiddenFields, trash = false } = args;
        if (!id) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]('Missing ID of document to update.', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].BAD_REQUEST);
        }
        const { data } = args;
        // /////////////////////////////////////
        // Access
        // /////////////////////////////////////
        const accessResults = !overrideAccess ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeAccess"])({
            id,
            data,
            req
        }, collectionConfig.access.update) : true;
        const hasWherePolicy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasWhereAccessResult"])(accessResults);
        // /////////////////////////////////////
        // Retrieve document
        // /////////////////////////////////////
        const where = {
            id: {
                equals: id
            }
        };
        let fullWhere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineQueries"])(where, accessResults);
        const isTrashAttempt = collectionConfig.trash && typeof data === 'object' && data !== null && 'deletedAt' in data && data.deletedAt != null;
        if (isTrashAttempt && !overrideAccess) {
            const deleteAccessResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeAccess"])({
                req
            }, collectionConfig.access.delete);
            fullWhere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineQueries"])(fullWhere, deleteAccessResult);
        }
        // Exclude trashed documents when trash: false
        fullWhere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$appendNonTrashedFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendNonTrashedFilter"])({
            enableTrash: collectionConfig.trash,
            trash,
            where: fullWhere
        });
        const findOneArgs = {
            collection: collectionConfig.slug,
            locale: locale,
            req,
            where: fullWhere
        };
        const docWithLocales = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$getLatestCollectionVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getLatestCollectionVersion"])({
            id,
            config: collectionConfig,
            payload,
            query: findOneArgs,
            req
        });
        if (!docWithLocales && !hasWherePolicy) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NotFound"](req.t);
        }
        if (!docWithLocales && hasWherePolicy) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Forbidden"](req.t);
        }
        if (!docWithLocales) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NotFound"](req.t);
        }
        // /////////////////////////////////////
        // Generate data for all files and sizes
        // /////////////////////////////////////
        const { data: newFileData, files: filesToUpload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$generateFileData$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateFileData"])({
            collection,
            config,
            data,
            operation: 'update',
            overwriteExistingFiles,
            req,
            throwOnMissingFile: false
        });
        const select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeSelect"])({
            fields: collectionConfig.flattenedFields,
            forceSelect: collectionConfig.forceSelect,
            select: incomingSelect
        });
        // ///////////////////////////////////////////////
        // Update document, runs all document level hooks
        // ///////////////////////////////////////////////
        let result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$update$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateDocument"])({
            id,
            accessResults,
            autosave,
            collectionConfig,
            config,
            data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(newFileData),
            depth: depth,
            docWithLocales,
            draftArg,
            fallbackLocale: fallbackLocale,
            filesToUpload,
            locale: locale,
            overrideAccess: overrideAccess,
            overrideLock: overrideLock,
            payload,
            populate,
            publishSpecificLocale,
            req,
            select: select,
            showHiddenFields: showHiddenFields
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$unlinkTempFiles$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unlinkTempFiles"])({
            collectionConfig,
            config,
            req
        });
        // /////////////////////////////////////
        // afterOperation - Collection
        // /////////////////////////////////////
        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildAfterOperation"])({
            args,
            collection: collectionConfig,
            operation: 'updateByID',
            result
        });
        // /////////////////////////////////////
        // Return results
        // /////////////////////////////////////
        if (shouldCommit) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["commitTransaction"])(req);
        }
        return result;
    } catch (error) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["killTransaction"])(args.req);
        throw error;
    }
}; //# sourceMappingURL=updateByID.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/local/update.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateLocal",
    ()=>updateLocal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$getFileByPath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/getFileByPath.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/createLocalReq.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$update$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/update.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$updateByID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/updateByID.js [app-route] (ecmascript)");
;
;
;
;
;
async function updateLocal(payload, options) {
    const { id, autosave, collection: collectionSlug, data, depth, disableTransaction, draft, file, filePath, limit, overrideAccess = true, overrideLock, overwriteExistingFiles = false, populate, publishSpecificLocale, select, showHiddenFields, sort, trash = false, where } = options;
    const collection = payload.collections[collectionSlug];
    if (!collection) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`The collection with slug ${String(collectionSlug)} can't be found. Update Operation.`);
    }
    const req = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])(options, payload);
    req.file = file ?? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$getFileByPath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFileByPath"])(filePath);
    const args = {
        id,
        autosave,
        collection,
        data,
        depth,
        disableTransaction,
        draft,
        limit,
        overrideAccess,
        overrideLock,
        overwriteExistingFiles,
        payload,
        populate,
        publishSpecificLocale,
        req,
        select,
        showHiddenFields,
        sort,
        trash,
        where
    };
    if (options.id) {
        // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$updateByID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateByIDOperation"])(args);
    }
    // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$update$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateOperation"])(args);
}
;
 //# sourceMappingURL=update.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/countVersions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "countVersionsOperation",
    ()=>countVersionsOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/executeAccess.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/combineQueries.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/queryValidation/validateQueryPaths.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$sanitizeWhereQuery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/sanitizeWhereQuery.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildCollectionFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/buildCollectionFields.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/killTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildAfterOperation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildBeforeOperation.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
const countVersionsOperation = async (incomingArgs)=>{
    let args = incomingArgs;
    try {
        // /////////////////////////////////////
        // beforeOperation - Collection
        // /////////////////////////////////////
        args = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildBeforeOperation"])({
            args,
            collection: args.collection.config,
            operation: 'countVersions'
        });
        const { collection: { config: collectionConfig }, disableErrors, overrideAccess, req, where } = args;
        const { locale, payload } = req;
        // /////////////////////////////////////
        // Access
        // /////////////////////////////////////
        let accessResult;
        if (!overrideAccess) {
            accessResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeAccess"])({
                disableErrors,
                req: req
            }, collectionConfig.access.readVersions);
            // If errors are disabled, and access returns false, return empty results
            if (accessResult === false) {
                return {
                    totalDocs: 0
                };
            }
        }
        let result;
        const fullWhere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineQueries"])(where, accessResult);
        const versionFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildCollectionFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildVersionCollectionFields"])(payload.config, collectionConfig, true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$sanitizeWhereQuery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeWhereQuery"])({
            fields: versionFields,
            payload,
            where: fullWhere
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateQueryPaths"])({
            collectionConfig,
            overrideAccess: overrideAccess,
            req: req,
            versionFields,
            where: where
        });
        result = await payload.db.countVersions({
            collection: collectionConfig.slug,
            locale: locale,
            req,
            where: fullWhere
        });
        // /////////////////////////////////////
        // afterOperation - Collection
        // /////////////////////////////////////
        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildAfterOperation"])({
            args,
            collection: collectionConfig,
            operation: 'countVersions',
            result
        });
        // /////////////////////////////////////
        // Return results
        // /////////////////////////////////////
        return result;
    } catch (error) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["killTransaction"])(args.req);
        throw error;
    }
}; //# sourceMappingURL=countVersions.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/local/countVersions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "countVersionsLocal",
    ()=>countVersionsLocal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/createLocalReq.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$countVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/countVersions.js [app-route] (ecmascript)");
;
;
;
async function countVersionsLocal(payload, options) {
    const { collection: collectionSlug, disableErrors, overrideAccess = true, where } = options;
    const collection = payload.collections[collectionSlug];
    if (!collection) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`The collection with slug ${String(collectionSlug)} can't be found. Count Versions Operation.`);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$countVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["countVersionsOperation"])({
        collection,
        disableErrors,
        overrideAccess,
        req: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])(options, payload),
        where
    });
} //# sourceMappingURL=countVersions.js.map
}),
];

//# sourceMappingURL=1c115_payload_dist_collections_74ee0592._.js.map