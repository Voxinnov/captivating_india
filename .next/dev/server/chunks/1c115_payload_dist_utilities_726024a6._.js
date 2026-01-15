module.exports = [
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/logError.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "logError",
    ()=>logError
]);
const logError = ({ err, payload })=>{
    let level = 'error';
    if (err && typeof err === 'object' && 'name' in err && typeof err.name === 'string' && typeof payload.config.loggingLevels[err.name] !== 'undefined') {
        level = payload.config.loggingLevels[err.name];
    }
    if (level) {
        const logObject = {};
        if (level === 'info') {
            logObject.msg = typeof err === 'object' && 'message' in err ? err.message : 'Error';
        } else {
            logObject.err = err;
        }
        payload.logger[level](logObject);
    }
}; //# sourceMappingURL=logError.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/mergeHeaders.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeHeaders",
    ()=>mergeHeaders
]);
const mergeHeaders = (sourceHeaders, destinationHeaders)=>{
    // Create a new Headers object
    const combinedHeaders = new Headers(destinationHeaders);
    // Append sourceHeaders to combinedHeaders
    sourceHeaders.forEach((value, key)=>{
        combinedHeaders.append(key, value);
    });
    return combinedHeaders;
}; //# sourceMappingURL=mergeHeaders.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/isValidID.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isValidID",
    ()=>isValidID
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bson$2d$objectid$40$2$2e$0$2e$4$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/bson-objectid@2.0.4/node_modules/bson-objectid/objectid.js [app-route] (ecmascript)");
;
const ObjectId = 'default' in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bson$2d$objectid$40$2$2e$0$2e$4$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bson$2d$objectid$40$2$2e$0$2e$4$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].default : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bson$2d$objectid$40$2$2e$0$2e$4$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
const isValidID = (value, type)=>{
    if (type === 'text' && value) {
        if ([
            'object',
            'string'
        ].includes(typeof value)) {
            const isObjectID = ObjectId.isValid(value);
            return typeof value === 'string' || isObjectID;
        }
        return false;
    }
    if (typeof value === 'number' && !Number.isNaN(value)) {
        return true;
    }
    if (type === 'ObjectID') {
        return ObjectId.isValid(String(value));
    }
}; //# sourceMappingURL=isValidID.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/sanitizeFallbackLocale.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Sanitizes fallbackLocale based on a provided fallbackLocale, locale and localization config
 *
 * Handles the following scenarios:
 * - determines if a fallback locale should be used
 * - determines if a locale specific fallback should be used in place of the default locale
 * - sets the fallbackLocale to 'null' if no fallback locale should be used
 */ __turbopack_context__.s([
    "sanitizeFallbackLocale",
    ()=>sanitizeFallbackLocale
]);
const sanitizeFallbackLocale = ({ fallbackLocale, locale, localization })=>{
    if (fallbackLocale === undefined || fallbackLocale === null) {
        if (localization && localization.fallback) {
            // Check for locale specific fallback
            const localeSpecificFallback = localization.locales.length ? localization.locales.find((localeConfig)=>localeConfig.code === locale)?.fallbackLocale : undefined;
            if (localeSpecificFallback) {
                return localeSpecificFallback;
            }
            return localization.defaultLocale;
        }
        return false;
    } else if (Array.isArray(fallbackLocale)) {
        return fallbackLocale.filter((localeCode)=>localization.localeCodes.includes(localeCode));
    } else if (fallbackLocale) {
        if ([
            'false',
            'none',
            'null'
        ].includes(fallbackLocale)) {
            return false;
        }
        if (localization.localeCodes.includes(fallbackLocale)) {
            return fallbackLocale;
        }
    }
    return false;
}; //# sourceMappingURL=sanitizeFallbackLocale.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/createLocalReq.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createLocalReq",
    ()=>createLocalReq
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$dataloader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/dataloader.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$translations$2f$getLocalI18n$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/translations/getLocalI18n.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeFallbackLocale$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/sanitizeFallbackLocale.js [app-route] (ecmascript)");
;
;
;
function getRequestContext(req = {
    context: null
}, context = {}) {
    if (req.context) {
        if (Object.keys(req.context).length === 0 && req.context.constructor === Object) {
            // if req.context is `{}` avoid unnecessary spread
            return context;
        } else {
            return {
                ...req.context,
                ...context
            };
        }
    } else {
        return context;
    }
}
const attachFakeURLProperties = (req, urlSuffix)=>{
    /**
   * *NOTE*
   * If no URL is provided, the local API was called outside
   * the context of a request. Therefore we create a fake URL object.
   * `ts-expect-error` is used below for properties that are 'read-only'.
   * Since they do not exist yet we can safely ignore the error.
   */ let urlObject;
    function getURLObject() {
        if (urlObject) {
            return urlObject;
        }
        const fallbackURL = `http://${req.host || 'localhost'}${urlSuffix || ''}`;
        const urlToUse = req?.url || req.payload?.config?.serverURL ? `${req.payload?.config.serverURL}${urlSuffix || ''}` : fallbackURL;
        try {
            urlObject = new URL(urlToUse);
        } catch (_err) {
            req.payload?.logger.error(`Failed to create URL object from URL: ${urlToUse}, falling back to ${fallbackURL}`);
            urlObject = new URL(fallbackURL);
        }
        return urlObject;
    }
    if (!req.host) {
        req.host = getURLObject().host;
    }
    if (!req.protocol) {
        req.protocol = getURLObject().protocol;
    }
    if (!req.pathname) {
        req.pathname = getURLObject().pathname;
    }
    if (!req.searchParams) {
        // @ts-expect-error eslint-disable-next-line no-param-reassign
        req.searchParams = getURLObject().searchParams;
    }
    if (!req.origin) {
        // @ts-expect-error eslint-disable-next-line no-param-reassign
        req.origin = getURLObject().origin;
    }
    if (!req?.url) {
        // @ts-expect-error eslint-disable-next-line no-param-reassign
        req.url = getURLObject().href;
    }
};
const createLocalReq = async ({ context, fallbackLocale, locale: localeArg, req = {}, urlSuffix, user }, payload)=>{
    const localization = payload.config?.localization;
    if (localization) {
        const locale = localeArg === '*' ? 'all' : localeArg;
        const defaultLocale = localization.defaultLocale;
        const localeCandidate = locale || req?.locale || req?.query?.locale;
        req.locale = localeCandidate && typeof localeCandidate === 'string' ? localeCandidate : defaultLocale;
        const sanitizedFallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeFallbackLocale$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeFallbackLocale"])({
            fallbackLocale: fallbackLocale,
            locale: req.locale,
            localization
        });
        req.fallbackLocale = sanitizedFallback;
    }
    const i18n = req?.i18n || await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$translations$2f$getLocalI18n$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getLocalI18n"])({
        config: payload.config,
        language: payload.config.i18n.fallbackLanguage
    });
    if (!req.headers) {
        req.headers = new Headers();
    }
    req.context = getRequestContext(req, context);
    req.payloadAPI = req?.payloadAPI || 'local';
    req.payload = payload;
    req.i18n = i18n;
    req.t = i18n.t;
    req.user = user || req?.user || null;
    req.payloadDataLoader = req?.payloadDataLoader || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$dataloader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDataLoader"])(req);
    req.routeParams = req?.routeParams || {};
    req.query = req?.query || {};
    attachFakeURLProperties(req, urlSuffix);
    return req;
}; //# sourceMappingURL=createLocalReq.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/appendNonTrashedFilter.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appendNonTrashedFilter",
    ()=>appendNonTrashedFilter
]);
const appendNonTrashedFilter = ({ deletedAtPath = 'deletedAt', enableTrash, trash, where })=>{
    if (!enableTrash || trash) {
        return where;
    }
    const notTrashedFilter = {
        [deletedAtPath]: {
            exists: false
        }
    };
    if (where?.and) {
        return {
            ...where,
            and: [
                ...where.and,
                notTrashedFilter
            ]
        };
    }
    return {
        and: [
            notTrashedFilter,
            ...where ? [
                where
            ] : []
        ]
    };
}; //# sourceMappingURL=appendNonTrashedFilter.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/commitTransaction.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * complete a transaction calling adapter db.commitTransaction and delete the transactionID from req
 */ __turbopack_context__.s([
    "commitTransaction",
    ()=>commitTransaction
]);
async function commitTransaction(req) {
    const { payload, transactionID } = req;
    await payload.db.commitTransaction(transactionID);
    delete req.transactionID;
} //# sourceMappingURL=commitTransaction.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/formatAdminURL.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatAdminURL",
    ()=>formatAdminURL
]);
const formatAdminURL = (args)=>{
    const { adminRoute, apiRoute, includeBasePath: includeBasePathArg, path = '', relative = false, serverURL } = args;
    const basePath = process.env.NEXT_BASE_PATH || args.basePath || '';
    const routePath = adminRoute || apiRoute;
    const segments = [
        routePath && routePath !== '/' && routePath,
        path && path
    ].filter(Boolean);
    const pathname = segments.join('') || '/';
    const pathnameWithBase = (basePath + pathname).replace(/\/$/, '') || '/';
    const includeBasePath = includeBasePathArg ?? (adminRoute ? false : true);
    if (relative || !serverURL) {
        if (includeBasePath && basePath) {
            return pathnameWithBase;
        }
        return pathname;
    }
    const serverURLObj = new URL(serverURL);
    return new URL(pathnameWithBase, serverURLObj.origin).toString();
}; //# sourceMappingURL=formatAdminURL.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/initTransaction.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Starts a new transaction using the db adapter with a random id and then assigns it to the req.transaction
 * @returns true if beginning a transaction and false when req already has a transaction to use
 */ __turbopack_context__.s([
    "initTransaction",
    ()=>initTransaction
]);
async function initTransaction(req) {
    const { payload, transactionID } = req;
    if (transactionID instanceof Promise) {
        // wait for whoever else is already creating the transaction
        await transactionID;
        return false;
    }
    if (transactionID) {
        // we already have a transaction, we're not in charge of committing it
        return false;
    }
    if (typeof payload.db.beginTransaction === 'function') {
        // create a new transaction
        req.transactionID = payload.db.beginTransaction().then((transactionID)=>{
            if (transactionID) {
                req.transactionID = transactionID;
            }
            return transactionID;
        });
        return !!await req.transactionID;
    }
    return false;
} //# sourceMappingURL=initTransaction.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/killTransaction.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Rollback the transaction from the req using the db adapter and removes it from the req
 */ __turbopack_context__.s([
    "killTransaction",
    ()=>killTransaction
]);
async function killTransaction(req) {
    const { payload, transactionID } = req;
    if (transactionID && !(transactionID instanceof Promise)) {
        try {
            await payload.db.rollbackTransaction(req.transactionID);
        } catch (ignore) {
        // swallow any errors while attempting to rollback
        }
        delete req.transactionID;
    }
} //# sourceMappingURL=killTransaction.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getSelectMode.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSelectMode",
    ()=>getSelectMode
]);
const getSelectMode = (select)=>{
    for(const key in select){
        const selectValue = select[key];
        if (selectValue === false) {
            return 'exclude';
        }
        if (typeof selectValue === 'object') {
            return getSelectMode(selectValue);
        }
    }
    return 'include';
}; //# sourceMappingURL=getSelectMode.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getBlockSelect.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * This is used for the Select API to determine the select level of a block.
 * It will ensure that `id` and `blockType` are always included in the select object.
 * @returns { blockSelect: boolean | SelectType, blockSelectMode: SelectMode }
 */ __turbopack_context__.s([
    "getBlockSelect",
    ()=>getBlockSelect
]);
const getBlockSelect = ({ block, select, selectMode })=>{
    if (typeof select === 'object') {
        let blockSelectMode = selectMode;
        const blocksSelect = {
            ...select
        };
        let blockSelect = blocksSelect[block.slug];
        // sanitize `{ blocks: { cta: false }}` to `{ blocks: { cta: { id: true, blockType: true }}}`
        if (selectMode === 'exclude' && blockSelect === false) {
            blockSelectMode = 'include';
            blockSelect = {
                id: true,
                blockType: true
            };
        } else if (selectMode === 'include') {
            if (!blockSelect) {
                blockSelect = {};
            }
            if (typeof blockSelect === 'object') {
                blockSelect = {
                    ...blockSelect
                };
                blockSelect['id'] = true;
                blockSelect['blockType'] = true;
            }
        }
        return {
            blockSelect: blockSelect,
            blockSelectMode
        };
    }
    return {
        blockSelect: select,
        blockSelectMode: selectMode
    };
}; //# sourceMappingURL=getBlockSelect.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/stripUnselectedFields.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stripUnselectedFields",
    ()=>stripUnselectedFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/config/types.js [app-route] (ecmascript)");
;
const stripUnselectedFields = ({ field, select, selectMode, siblingDoc })=>{
    let shouldContinue = true;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) && select && selectMode && field.name) {
        if (selectMode === 'include') {
            if (!select[field.name]) {
                delete siblingDoc[field.name];
                shouldContinue = false;
            }
        }
        if (selectMode === 'exclude') {
            if (select[field.name] === false) {
                delete siblingDoc[field.name];
                shouldContinue = false;
            }
        }
    }
    return shouldContinue;
}; //# sourceMappingURL=stripUnselectedFields.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/deepCopyObject.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */ /*
Main deepCopyObject handling - from rfdc: https://github.com/davidmarkclements/rfdc/blob/master/index.js

Copyright 2019 "David Mark Clements <david.mark.clements@gmail.com>"

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
*/ __turbopack_context__.s([
    "deepCopyObject",
    ()=>deepCopyObject,
    "deepCopyObjectComplex",
    ()=>deepCopyObjectComplex,
    "deepCopyObjectSimple",
    ()=>deepCopyObjectSimple,
    "deepCopyObjectSimpleWithoutReactComponents",
    ()=>deepCopyObjectSimpleWithoutReactComponents
]);
function copyBuffer(cur) {
    if (cur instanceof Buffer) {
        return Buffer.from(cur);
    }
    return new cur.constructor(cur.buffer.slice(), cur.byteOffset, cur.length);
}
const constructorHandlers = new Map();
constructorHandlers.set(Date, (o)=>new Date(o));
constructorHandlers.set(Map, (o, fn)=>new Map(cloneArray(Array.from(o), fn)));
constructorHandlers.set(Set, (o, fn)=>new Set(cloneArray(Array.from(o), fn)));
constructorHandlers.set(RegExp, (regex)=>new RegExp(regex.source, regex.flags));
let handler = null;
function cloneArray(a, fn) {
    const keys = Object.keys(a);
    const a2 = new Array(keys.length);
    for(let i = 0; i < keys.length; i++){
        const k = keys[i];
        const cur = a[k];
        if (typeof cur !== 'object' || cur === null) {
            a2[k] = cur;
        } else if (cur instanceof RegExp) {
            a2[k] = new RegExp(cur.source, cur.flags);
        } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
            a2[k] = handler(cur, fn);
        } else if (ArrayBuffer.isView(cur)) {
            a2[k] = copyBuffer(cur);
        } else {
            a2[k] = fn(cur);
        }
    }
    return a2;
}
const deepCopyObject = (o)=>{
    if (typeof o !== 'object' || o === null) {
        return o;
    }
    if (Array.isArray(o)) {
        return cloneArray(o, deepCopyObject);
    }
    if (o instanceof RegExp) {
        return new RegExp(o.source, o.flags);
    }
    if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) {
        return handler(o, deepCopyObject);
    }
    const o2 = {};
    for(const k in o){
        if (Object.hasOwnProperty.call(o, k) === false) {
            continue;
        }
        const cur = o[k];
        if (typeof cur !== 'object' || cur === null) {
            o2[k] = cur;
        } else if (cur instanceof RegExp) {
            o2[k] = new RegExp(cur.source, cur.flags);
        } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
            o2[k] = handler(cur, deepCopyObject);
        } else if (ArrayBuffer.isView(cur)) {
            o2[k] = copyBuffer(cur);
        } else {
            o2[k] = deepCopyObject(cur);
        }
    }
    return o2;
};
function deepCopyObjectSimple(value, filterUndefined = false) {
    if (typeof value !== 'object' || value === null) {
        return value;
    } else if (Array.isArray(value)) {
        return value.map((e)=>typeof e !== 'object' || e === null ? e : deepCopyObjectSimple(e, filterUndefined));
    } else {
        if (value instanceof Date) {
            return new Date(value);
        }
        const ret = {};
        for(const k in value){
            const v = value[k];
            if (filterUndefined && v === undefined) {
                continue;
            }
            ret[k] = typeof v !== 'object' || v === null ? v : deepCopyObjectSimple(v, filterUndefined);
        }
        return ret;
    }
}
function deepCopyObjectSimpleWithoutReactComponents(value) {
    if (typeof value === 'object' && value !== null && '$$typeof' in value && typeof value.$$typeof === 'symbol') {
        return undefined;
    } else if (typeof value !== 'object' || value === null) {
        return value;
    } else if (Array.isArray(value)) {
        return value.map((e)=>typeof e !== 'object' || e === null ? e : deepCopyObjectSimpleWithoutReactComponents(e));
    } else {
        // Handle File objects by returning them as-is (don't serialize to plain object)
        if (value instanceof File) {
            return value;
        }
        if (value instanceof Date) {
            return new Date(value);
        }
        const ret = {};
        for(const k in value){
            const v = value[k];
            ret[k] = typeof v !== 'object' || v === null ? v : deepCopyObjectSimpleWithoutReactComponents(v);
        }
        return ret;
    }
}
function deepCopyObjectComplex(object, cache = new WeakMap()) {
    if (object === null) {
        return null;
    }
    if (cache.has(object)) {
        return cache.get(object);
    }
    // Handle File
    if (object instanceof File) {
        return object;
    }
    // Handle Date
    if (object instanceof Date) {
        return new Date(object.getTime());
    }
    // Handle RegExp
    if (object instanceof RegExp) {
        return new RegExp(object.source, object.flags);
    }
    // Handle Map
    if (object instanceof Map) {
        const clonedMap = new Map();
        cache.set(object, clonedMap);
        for (const [key, value] of object.entries()){
            clonedMap.set(key, deepCopyObjectComplex(value, cache));
        }
        return clonedMap;
    }
    // Handle Set
    if (object instanceof Set) {
        const clonedSet = new Set();
        cache.set(object, clonedSet);
        for (const value of object.values()){
            clonedSet.add(deepCopyObjectComplex(value, cache));
        }
        return clonedSet;
    }
    // Handle Array and Object
    if (typeof object === 'object' && object !== null) {
        if ('$$typeof' in object && typeof object.$$typeof === 'symbol') {
            return object;
        }
        const clonedObject = Array.isArray(object) ? [] : Object.create(Object.getPrototypeOf(object));
        cache.set(object, clonedObject);
        for(const key in object){
            if (Object.prototype.hasOwnProperty.call(object, key) || Object.getOwnPropertySymbols(object).includes(key)) {
                clonedObject[key] = deepCopyObjectComplex(object[key], cache);
            }
        }
        return clonedObject;
    }
    // Handle all other cases
    return object;
} //# sourceMappingURL=deepCopyObject.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/sanitizeInternalFields.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sanitizeInternalFields",
    ()=>sanitizeInternalFields
]);
const sanitizeInternalFields = (incomingDoc)=>{
    // Create a new object to hold the sanitized fields
    const newDoc = {};
    for(const key in incomingDoc){
        const val = incomingDoc[key];
        if (key === '_id') {
            newDoc['id'] = val;
        } else if (key !== '__v') {
            newDoc[key] = val;
        }
    }
    return newDoc;
}; //# sourceMappingURL=sanitizeInternalFields.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/isNumber.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNumber",
    ()=>isNumber
]);
function isNumber(value) {
    if (value === null || value === undefined || typeof value === 'string' && value.trim() === '') {
        return false;
    }
    return !Number.isNaN(Number(value));
} //# sourceMappingURL=isNumber.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getEntityPermissions/entityDocExists.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "entityDocExists",
    ()=>entityDocExists
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/combineQueries.js [app-route] (ecmascript)");
;
async function entityDocExists({ id, slug, entityType, locale, operation, req, where }) {
    if (entityType === 'global') {
        const global = await req.payload.db.findGlobal({
            slug,
            locale,
            req,
            select: {},
            where
        });
        const hasGlobalDoc = Boolean(global && Object.keys(global).length > 0);
        return hasGlobalDoc;
    }
    if (entityType === 'collection' && id) {
        if (operation === 'readVersions') {
            const count = await req.payload.db.countVersions({
                collection: slug,
                locale,
                req,
                where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineQueries"])(where, {
                    parent: {
                        equals: id
                    }
                })
            });
            return count.totalDocs > 0;
        }
        const count = await req.payload.db.count({
            collection: slug,
            locale,
            req,
            where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineQueries"])(where, {
                id: {
                    equals: id
                }
            })
        });
        return count.totalDocs > 0;
    }
    return false;
} //# sourceMappingURL=entityDocExists.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getEntityPermissions/populateFieldPermissions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "populateFieldPermissions",
    ()=>populateFieldPermissions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/config/types.js [app-route] (ecmascript)");
;
const isThenable = (value)=>value != null && typeof value.then === 'function';
/**
 * Helper to set a permission value that might be a promise.
 * If it's a promise, creates a chained promise that resolves to update the target,
 * stores the promise temporarily, and adds it to the promises array for later resolution.
 */ const setPermission = (target, operation, value, promises)=>{
    if (isThenable(value)) {
        // Create a single permission object that will be mutated in place
        // This ensures all references (including cached blocks) see the resolved value
        const permissionObj = {
            permission: value
        };
        target[operation] = permissionObj;
        const permissionPromise = value.then((result)=>{
            // Mutate the permission property in place so all references see the update
            permissionObj.permission = result;
        });
        promises.push(permissionPromise);
    } else {
        target[operation] = {
            permission: value
        };
    }
};
const populateFieldPermissions = ({ id, blockReferencesPermissions, data, fields, operations, parentPermissionsObject, permissionsObject, promises, req })=>{
    for (const field of fields){
        // Set up permissions for all operations
        for (const operation of operations){
            const parentPermissionForOperation = parentPermissionsObject[operation]?.permission;
            // Fields don't have all operations of a collection
            if (operation === 'delete' || operation === 'readVersions' || operation === 'unlock') {
                continue;
            }
            if ('name' in field && field.name) {
                if (!permissionsObject[field.name]) {
                    permissionsObject[field.name] = {};
                }
                const fieldPermissions = permissionsObject[field.name];
                if ('access' in field && field.access && typeof field.access[operation] === 'function') {
                    const accessResult = field.access[operation]({
                        id,
                        data,
                        doc: data,
                        req
                    });
                    // Handle both sync and async access results
                    if (isThenable(accessResult)) {
                        const booleanPromise = accessResult.then((result)=>Boolean(result));
                        setPermission(fieldPermissions, operation, booleanPromise, promises);
                    } else {
                        setPermission(fieldPermissions, operation, Boolean(accessResult), promises);
                    }
                } else {
                    // Inherit from parent (which might be a promise)
                    setPermission(fieldPermissions, operation, parentPermissionForOperation, promises);
                }
            }
        }
        // Handle named fields with nested content
        if ('name' in field && field.name) {
            const fieldPermissions = permissionsObject[field.name];
            if ('fields' in field && field.fields) {
                if (!fieldPermissions.fields) {
                    fieldPermissions.fields = {};
                }
                populateFieldPermissions({
                    id,
                    blockReferencesPermissions,
                    data,
                    fields: field.fields,
                    operations,
                    parentPermissionsObject: fieldPermissions,
                    permissionsObject: fieldPermissions.fields,
                    promises,
                    req
                });
            }
            if ('blocks' in field && field.blocks?.length || 'blockReferences' in field && field.blockReferences?.length) {
                if (!fieldPermissions.blocks) {
                    fieldPermissions.blocks = {};
                }
                const blocksPermissions = fieldPermissions.blocks;
                // Set up permissions for all operations for all blocks
                for (const operation of operations){
                    // Fields don't have all operations of a collection
                    if (operation === 'delete' || operation === 'readVersions' || operation === 'unlock') {
                        continue;
                    }
                    const parentPermissionForOperation = parentPermissionsObject[operation]?.permission;
                    for (const _block of field.blockReferences ?? field.blocks){
                        const block = typeof _block === 'string' ? req.payload.blocks[_block] : _block;
                        // Skip if block doesn't exist (invalid block reference)
                        if (!block) {
                            continue;
                        }
                        // Handle block references - check if we've seen this block before
                        if (typeof _block === 'string') {
                            const blockReferencePermissions = blockReferencesPermissions[_block];
                            if (blockReferencePermissions) {
                                // Reference the cached permissions (may be a promise or resolved object)
                                blocksPermissions[block.slug] = blockReferencePermissions;
                                continue;
                            }
                        }
                        // Initialize block permissions object if needed
                        if (!blocksPermissions[block.slug]) {
                            blocksPermissions[block.slug] = {};
                        }
                        const blockPermission = blocksPermissions[block.slug];
                        // Set permission for this operation
                        if (!blockPermission[operation]) {
                            const fieldPermission = fieldPermissions[operation]?.permission ?? parentPermissionForOperation;
                            // Inherit from field permission (which might be a promise)
                            setPermission(blockPermission, operation, fieldPermission, promises);
                        }
                    }
                }
                // Process nested content for each unique block (once per block, not once per operation)
                const processedBlocks = new Set();
                for (const _block of field.blockReferences ?? field.blocks){
                    const block = typeof _block === 'string' ? req.payload.blocks[_block] : _block;
                    // Skip if block doesn't exist (invalid block reference)
                    if (!block || processedBlocks.has(block.slug)) {
                        continue;
                    }
                    processedBlocks.add(block.slug);
                    const blockPermission = blocksPermissions[block.slug];
                    if (!blockPermission) {
                        continue;
                    }
                    if (!blockPermission.fields) {
                        blockPermission.fields = {};
                    }
                    // Handle block references with caching - store as promise that will be resolved later
                    if (typeof _block === 'string' && !blockReferencesPermissions[_block]) {
                        // Mark this block as being processed by storing a reference
                        blockReferencesPermissions[_block] = blockPermission;
                    }
                    // Recursively process block fields synchronously
                    populateFieldPermissions({
                        id,
                        blockReferencesPermissions,
                        data,
                        fields: block.fields,
                        operations,
                        parentPermissionsObject: blockPermission,
                        permissionsObject: blockPermission.fields,
                        promises,
                        req
                    });
                }
            }
        }
        // Handle unnamed group fields
        if ('fields' in field && field.fields && !('name' in field && field.name)) {
            // Field does not have a name => same parentPermissionsObject
            populateFieldPermissions({
                id,
                blockReferencesPermissions,
                data,
                fields: field.fields,
                operations,
                // Field does not have a name here => use parent permissions object
                parentPermissionsObject,
                permissionsObject,
                promises,
                req
            });
        }
        // Handle tabs fields
        if (field.type === 'tabs') {
            // Process tabs for all operations
            for (const operation of operations){
                // Fields don't have all operations of a collection
                if (operation === 'delete' || operation === 'readVersions' || operation === 'unlock') {
                    continue;
                }
                const parentPermissionForOperation = parentPermissionsObject[operation]?.permission;
                for (const tab of field.tabs){
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tabHasName"])(tab)) {
                        if (!permissionsObject[tab.name]) {
                            permissionsObject[tab.name] = {
                                fields: {}
                            };
                        }
                        const tabPermissions = permissionsObject[tab.name];
                        if (!tabPermissions[operation]) {
                            // Inherit from parent (which might be a promise)
                            setPermission(tabPermissions, operation, parentPermissionForOperation, promises);
                        }
                    }
                }
            }
            for (const tab of field.tabs){
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tabHasName"])(tab)) {
                    const tabPermissions = permissionsObject[tab.name];
                    if (!tabPermissions.fields) {
                        tabPermissions.fields = {};
                    }
                    populateFieldPermissions({
                        id,
                        blockReferencesPermissions,
                        data,
                        fields: tab.fields,
                        operations,
                        parentPermissionsObject: tabPermissions,
                        permissionsObject: tabPermissions.fields,
                        promises,
                        req
                    });
                } else {
                    // Tab does not have a name => same parentPermissionsObject
                    populateFieldPermissions({
                        id,
                        blockReferencesPermissions,
                        data,
                        fields: tab.fields,
                        operations,
                        // Tab does not have a name here => use parent permissions object
                        parentPermissionsObject,
                        permissionsObject,
                        promises,
                        req
                    });
                }
            }
        }
    }
}; //# sourceMappingURL=populateFieldPermissions.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getEntityPermissions/getEntityPermissions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEntityPermissions",
    ()=>getEntityPermissions
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/util [external] (util, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getEntityPermissions$2f$entityDocExists$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getEntityPermissions/entityDocExists.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getEntityPermissions$2f$populateFieldPermissions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getEntityPermissions/populateFieldPermissions.js [app-route] (ecmascript)");
;
;
;
const topLevelCollectionPermissions = [
    'create',
    'delete',
    'read',
    'readVersions',
    'update',
    'unlock'
];
const topLevelGlobalPermissions = [
    'read',
    'readVersions',
    'update'
];
async function getEntityPermissions(args) {
    const { id, blockReferencesPermissions, data: _data, entity, entityType, fetchData, operations, req } = args;
    const { locale: _locale, user } = req;
    const locale = _locale ? _locale : undefined;
    if (fetchData && entityType === 'collection' && !id) {
        throw new Error('ID is required when fetching data for a collection');
    }
    const hasData = _data && Object.keys(_data).length > 0;
    const data = hasData ? _data : fetchData ? await (async ()=>{
        if (entityType === 'global') {
            return req.payload.findGlobal({
                slug: entity.slug,
                depth: 0,
                fallbackLocale: null,
                locale,
                overrideAccess: true,
                req
            });
        }
        if (entityType === 'collection') {
            return req.payload.findByID({
                id: id,
                collection: entity.slug,
                depth: 0,
                fallbackLocale: null,
                locale,
                overrideAccess: true,
                req,
                trash: true
            });
        }
    })() : undefined;
    const isLoggedIn = !!user;
    const fieldsPermissions = {};
    const entityPermissions = {
        fields: fieldsPermissions
    };
    const promises = [];
    // Phase 1: Resolve all access functions to get where queries
    const accessResults = [];
    for (const _operation of operations){
        const operation = _operation;
        const accessFunction = entity.access[operation];
        if (entityType === 'collection' && topLevelCollectionPermissions.includes(operation) || entityType === 'global' && topLevelGlobalPermissions.includes(operation)) {
            if (typeof accessFunction === 'function') {
                accessResults.push({
                    operation,
                    result: Promise.resolve(accessFunction({
                        id,
                        data,
                        req
                    }))
                });
            } else {
                entityPermissions[operation] = {
                    permission: isLoggedIn
                };
            }
        }
    }
    // Await all access functions in parallel
    const resolvedAccessResults = await Promise.all(accessResults.map(async (item)=>({
            operation: item.operation,
            result: await item.result
        })));
    // Phase 2: Process where queries with cache and resolve in parallel
    const whereQueryCache = [];
    const wherePromises = [];
    for (const { operation, result: accessResult } of resolvedAccessResults){
        if (typeof accessResult === 'object') {
            processWhereQuery({
                id,
                slug: entity.slug,
                accessResult,
                entityPermissions,
                entityType,
                fetchData,
                locale,
                operation,
                req,
                wherePromises,
                whereQueryCache
            });
        } else if (entityPermissions[operation]?.permission !== false) {
            entityPermissions[operation] = {
                permission: !!accessResult
            };
        }
    }
    // Await all where query DB calls in parallel
    await Promise.all(wherePromises);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getEntityPermissions$2f$populateFieldPermissions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["populateFieldPermissions"])({
        blockReferencesPermissions,
        data,
        fields: entity.fields,
        operations,
        parentPermissionsObject: entityPermissions,
        permissionsObject: fieldsPermissions,
        promises,
        req
    });
    /**
   * Await all promises in parallel.
   * A promise can add more promises to the promises array (group of fields calls populateFieldPermissions again in their own promise), which will not be
   * awaited in the first run.
   * This is why we need to loop again to process the new promises, until there are no more promises left.
   */ let iterations = 0;
    while(promises.length > 0){
        const currentPromises = promises.splice(0, promises.length);
        await Promise.all(currentPromises);
        iterations++;
        if (iterations >= 100) {
            throw new Error('Infinite getEntityPermissions promise loop detected.');
        }
    }
    return entityPermissions;
}
const processWhereQuery = ({ id, slug, accessResult, entityPermissions, entityType, fetchData, locale, operation, req, wherePromises, whereQueryCache })=>{
    if (fetchData) {
        // Check cache for identical where query using deep comparison
        let cached = whereQueryCache.find((entry)=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["isDeepStrictEqual"])(entry.where, accessResult));
        if (!cached) {
            // Cache miss - start DB query (don't await)
            cached = {
                result: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getEntityPermissions$2f$entityDocExists$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entityDocExists"])({
                    id,
                    slug,
                    entityType,
                    locale,
                    operation,
                    req,
                    where: accessResult
                }),
                where: accessResult
            };
            whereQueryCache.push(cached);
        }
        // Defer resolution to Promise.all (cache hits reuse same promise)
        wherePromises.push(cached.result.then((hasPermission)=>{
            entityPermissions[operation] = {
                permission: hasPermission,
                where: accessResult
            };
        }));
    } else {
        // TODO: 4.0: Investigate defaulting to `false` here, if where query is returned but ignored as we don't
        // have the document data available. This seems more secure.
        // Alternatively, we could set permission to a third state, like 'unknown'.
        // Even after calling sanitizePermissions, the permissions will still be true if the where query is returned but ignored as we don't have the document data available.
        entityPermissions[operation] = {
            permission: true,
            where: accessResult
        };
    }
}; //# sourceMappingURL=getEntityPermissions.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Creates a proxy for the given object that has its own property
 */ __turbopack_context__.s([
    "isolateObjectProperty",
    ()=>isolateObjectProperty
]);
function isolateObjectProperty(object, key) {
    const keys = Array.isArray(key) ? key : [
        key
    ];
    const delegate = {};
    // Initialize delegate with the keys, if they exist in the original object
    for (const k of keys){
        if (k in object) {
            delegate[k] = object[k];
        }
    }
    const handler = {
        deleteProperty (target, p) {
            return Reflect.deleteProperty(keys.includes(p) ? delegate : target, p);
        },
        get (target, p, receiver) {
            return Reflect.get(keys.includes(p) ? delegate : target, p, receiver);
        },
        has (target, p) {
            return Reflect.has(keys.includes(p) ? delegate : target, p);
        },
        set (target, p, newValue, receiver) {
            if (keys.includes(p)) {
                // in case of transactionID we must ignore any receiver, because
                // "If provided and target does not have a setter for propertyKey, the property will be set on receiver instead."
                return Reflect.set(delegate, p, newValue);
            } else {
                return Reflect.set(target, p, newValue, receiver);
            }
        }
    };
    return new Proxy(object, handler);
} //# sourceMappingURL=isolateObjectProperty.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/filterDataToSelectedLocales.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterDataToSelectedLocales",
    ()=>filterDataToSelectedLocales
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/config/types.js [app-route] (ecmascript)");
;
function filterDataToSelectedLocales({ configBlockReferences, docWithLocales, fields, parentIsLocalized = false, selectedLocales }) {
    if (!docWithLocales || typeof docWithLocales !== 'object') {
        return docWithLocales;
    }
    const result = {};
    for (const field of fields){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
            const fieldIsLocalized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldShouldBeLocalized"])({
                field,
                parentIsLocalized
            });
            switch(field.type){
                case 'array':
                    {
                        if (Array.isArray(docWithLocales[field.name])) {
                            result[field.name] = docWithLocales[field.name].map((item)=>filterDataToSelectedLocales({
                                    configBlockReferences,
                                    docWithLocales: item,
                                    fields: field.fields,
                                    parentIsLocalized: fieldIsLocalized,
                                    selectedLocales
                                }));
                        }
                        break;
                    }
                case 'blocks':
                    {
                        if (field.name in docWithLocales && Array.isArray(docWithLocales[field.name])) {
                            result[field.name] = docWithLocales[field.name].map((blockData)=>{
                                let block;
                                if (configBlockReferences && field.blockReferences) {
                                    for (const blockOrReference of field.blockReferences){
                                        if (typeof blockOrReference === 'string') {
                                            block = configBlockReferences.find((b)=>b.slug === blockData.blockType);
                                        } else {
                                            block = blockOrReference;
                                        }
                                    }
                                } else if (field.blocks) {
                                    block = field.blocks.find((b)=>b.slug === blockData.blockType);
                                }
                                if (block) {
                                    return filterDataToSelectedLocales({
                                        configBlockReferences,
                                        docWithLocales: blockData,
                                        fields: block?.fields || [],
                                        parentIsLocalized: fieldIsLocalized,
                                        selectedLocales
                                    });
                                }
                                return blockData;
                            });
                        }
                        break;
                    }
                case 'group':
                    {
                        // Named groups create a nested data structure
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) && field.name in docWithLocales && typeof docWithLocales[field.name] === 'object') {
                            result[field.name] = filterDataToSelectedLocales({
                                configBlockReferences,
                                docWithLocales: docWithLocales[field.name],
                                fields: field.fields,
                                parentIsLocalized: fieldIsLocalized,
                                selectedLocales
                            });
                        } else {
                            // Unnamed groups pass through the same data level
                            const nestedResult = filterDataToSelectedLocales({
                                configBlockReferences,
                                docWithLocales,
                                fields: field.fields,
                                parentIsLocalized,
                                selectedLocales
                            });
                            Object.assign(result, nestedResult);
                        }
                        break;
                    }
                default:
                    {
                        // For all other data-affecting fields (text, number, select, etc.)
                        if (field.name in docWithLocales) {
                            const value = docWithLocales[field.name];
                            // If the field is localized and has locale data
                            if (fieldIsLocalized && value && typeof value === 'object' && !Array.isArray(value)) {
                                // If selectedLocales is provided, filter to only those locales
                                if (selectedLocales && selectedLocales.length > 0) {
                                    const filtered = {};
                                    for (const locale of selectedLocales){
                                        if (locale in value) {
                                            filtered[locale] = value[locale];
                                        }
                                    }
                                    if (Object.keys(filtered).length > 0) {
                                        result[field.name] = filtered;
                                    }
                                } else {
                                    // If no selectedLocales, include all locales
                                    result[field.name] = value;
                                }
                            } else {
                                // Non-localized field or non-object value
                                result[field.name] = value;
                            }
                        }
                        break;
                    }
            }
        } else {
            // Layout-only fields that don't affect data structure
            switch(field.type){
                case 'collapsible':
                case 'row':
                    {
                        // These pass through the same data level
                        const nestedResult = filterDataToSelectedLocales({
                            configBlockReferences,
                            docWithLocales,
                            fields: field.fields,
                            parentIsLocalized,
                            selectedLocales
                        });
                        Object.assign(result, nestedResult);
                        break;
                    }
                case 'tabs':
                    {
                        for (const tab of field.tabs){
                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tabHasName"])(tab)) {
                                // Named tabs create a nested data structure
                                if (tab.name in docWithLocales && typeof docWithLocales[tab.name] === 'object') {
                                    result[tab.name] = filterDataToSelectedLocales({
                                        configBlockReferences,
                                        docWithLocales: docWithLocales[tab.name],
                                        fields: tab.fields,
                                        parentIsLocalized,
                                        selectedLocales
                                    });
                                }
                            } else {
                                // Unnamed tabs pass through the same data level
                                const nestedResult = filterDataToSelectedLocales({
                                    configBlockReferences,
                                    docWithLocales,
                                    fields: tab.fields,
                                    parentIsLocalized,
                                    selectedLocales
                                });
                                Object.assign(result, nestedResult);
                            }
                        }
                        break;
                    }
            }
        }
    }
    return result;
} //# sourceMappingURL=filterDataToSelectedLocales.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getVersionsConfig.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAutosaveInterval",
    ()=>getAutosaveInterval,
    "getVersionsMax",
    ()=>getVersionsMax,
    "hasAutosaveEnabled",
    ()=>hasAutosaveEnabled,
    "hasDraftValidationEnabled",
    ()=>hasDraftValidationEnabled,
    "hasDraftsEnabled",
    ()=>hasDraftsEnabled,
    "hasScheduledPublishEnabled",
    ()=>hasScheduledPublishEnabled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$defaults$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/defaults.js [app-route] (ecmascript)");
;
const hasDraftsEnabled = (config)=>{
    return Boolean(config?.versions && typeof config.versions === 'object' && config.versions.drafts);
};
const hasAutosaveEnabled = (config)=>{
    return Boolean(config?.versions && typeof config.versions === 'object' && config.versions.drafts && typeof config.versions.drafts === 'object' && config.versions.drafts.autosave);
};
const hasDraftValidationEnabled = (config)=>{
    return Boolean(config?.versions && typeof config.versions === 'object' && config.versions.drafts && typeof config.versions.drafts === 'object' && config.versions.drafts.validate);
};
const hasScheduledPublishEnabled = (config)=>{
    return Boolean(config?.versions && typeof config.versions === 'object' && config.versions.drafts && typeof config.versions.drafts === 'object' && config.versions.drafts.schedulePublish);
};
const getVersionsMax = (config)=>{
    if (!config?.versions || typeof config.versions !== 'object') {
        return 0;
    }
    // Collections have maxPerDoc, globals have max
    if ('maxPerDoc' in config.versions) {
        return config.versions.maxPerDoc ?? 0;
    }
    if ('max' in config.versions) {
        return config.versions.max ?? 0;
    }
    return 0;
};
const getAutosaveInterval = (config)=>{
    let interval = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$defaults$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["versionDefaults"].autosaveInterval;
    if (config?.versions && typeof config.versions === 'object' && config.versions.drafts && typeof config.versions.drafts === 'object' && config.versions.drafts.autosave && typeof config.versions.drafts.autosave === 'object') {
        interval = config.versions.drafts.autosave.interval ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$defaults$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["versionDefaults"].autosaveInterval;
    }
    return interval;
}; //# sourceMappingURL=getVersionsConfig.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/isReactComponent.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isReactClientComponent",
    ()=>isReactClientComponent,
    "isReactComponentOrFunction",
    ()=>isReactComponentOrFunction,
    "isReactServerComponentOrFunction",
    ()=>isReactServerComponentOrFunction
]);
const clientRefSymbol = Symbol.for('react.client.reference');
function isReactServerComponentOrFunction(component) {
    return typeof component === 'function' && component.$$typeof !== clientRefSymbol;
}
function isReactClientComponent(component) {
    return typeof component === 'function' && component.$$typeof === clientRefSymbol;
}
function isReactComponentOrFunction(component) {
    return typeof component === 'function';
} //# sourceMappingURL=isReactComponent.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/isPlainObject.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPlainObject",
    ()=>isPlainObject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isReactComponent$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/isReactComponent.js [app-route] (ecmascript)");
;
function isPlainObject(o) {
    // Is this a React component?
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isReactComponent$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isReactComponentOrFunction"])(o)) {
        return false;
    }
    // from https://github.com/fastify/deepmerge/blob/master/index.js#L77
    return typeof o === 'object' && o !== null && !(o instanceof RegExp) && !(o instanceof Date);
} //# sourceMappingURL=isPlainObject.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/deepMerge.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deepMergeWithCombinedArrays",
    ()=>deepMergeWithCombinedArrays,
    "deepMergeWithReactComponents",
    ()=>deepMergeWithReactComponents,
    "deepMergeWithSourceArrays",
    ()=>deepMergeWithSourceArrays
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$deepmerge$40$4$2e$3$2e$1$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isPlainObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/isPlainObject.js [app-route] (ecmascript)");
;
;
;
function deepMergeWithCombinedArrays(obj1, obj2, options = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$deepmerge$40$4$2e$3$2e$1$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(obj1, obj2, {
        arrayMerge: (target, source, options)=>{
            const destination = target.slice();
            source.forEach((item, index)=>{
                if (typeof destination[index] === 'undefined') {
                    destination[index] = options?.cloneUnlessOtherwiseSpecified(item, options);
                } else if (options?.isMergeableObject(item)) {
                    destination[index] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$deepmerge$40$4$2e$3$2e$1$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(target[index], item, options);
                } else if (target.indexOf(item) === -1) {
                    destination.push(item);
                }
            });
            return destination;
        },
        ...options
    });
}
function deepMergeWithSourceArrays(obj1, obj2) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$deepmerge$40$4$2e$3$2e$1$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(obj1, obj2, {
        arrayMerge: (_, source)=>source
    });
}
function deepMergeWithReactComponents(obj1, obj2) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$deepmerge$40$4$2e$3$2e$1$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(obj1, obj2, {
        isMergeableObject: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isPlainObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPlainObject"]
    });
} //# sourceMappingURL=deepMerge.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getTranslatedLabel.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTranslatedLabel",
    ()=>getTranslatedLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$70$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+translations@3.70.0/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js [app-route] (ecmascript)");
;
const getTranslatedLabel = (label, i18n)=>{
    if (typeof label === 'function') {
        return label({
            i18n: i18n,
            t: i18n.t
        });
    }
    if (typeof label === 'object') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$70$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTranslation"])(label, i18n);
    }
    return label;
}; //# sourceMappingURL=getTranslatedLabel.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/validateMimeType.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateMimeType",
    ()=>validateMimeType
]);
const validateMimeType = (mimeType, allowedMimeTypes)=>{
    if (allowedMimeTypes.length === 0) {
        return true;
    }
    const cleanedMimeTypes = allowedMimeTypes.map((v)=>v.replace('*', ''));
    return cleanedMimeTypes.some((cleanedMimeType)=>mimeType.startsWith(cleanedMimeType));
}; //# sourceMappingURL=validateMimeType.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/validatePDF.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validatePDF",
    ()=>validatePDF
]);
function validatePDF(buffer) {
    // Check for PDF header
    const header = buffer.subarray(0, 8).toString('latin1');
    if (!header.startsWith('%PDF-')) {
        return false;
    }
    // Check for EOF marker and xref table
    const endSize = Math.min(1024, buffer.length);
    const end = buffer.subarray(buffer.length - endSize).toString('latin1');
    if (!end.includes('%%EOF') || !end.includes('xref')) {
        return false;
    }
    return true;
} //# sourceMappingURL=validatePDF.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/isURLAllowed.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isURLAllowed",
    ()=>isURLAllowed
]);
const isURLAllowed = (url, allowList)=>{
    try {
        const parsedUrl = new URL(url);
        return allowList.some((allowItem)=>{
            return Object.entries(allowItem).every(([key, value])=>{
                // Skip undefined or null values
                if (!value) {
                    return true;
                }
                // Compare protocol with colon
                if (key === 'protocol') {
                    return typeof value === 'string' && parsedUrl.protocol === `${value}:`;
                }
                if (key === 'pathname') {
                    // Convert wildcards to a regex
                    const regexPattern = value.replace(/\*\*/g, '.*') // Match any path
                    .replace(/\*/g, '[^/]*') // Match any part of a path segment
                    .replace(/\/$/, '(/)?') // Allow optional trailing slash
                    ;
                    const regex = new RegExp(`^${regexPattern}$`);
                    return regex.test(parsedUrl.pathname);
                }
                // Default comparison for all other properties (hostname, port, search)
                return parsedUrl[key] === value;
            });
        });
    } catch  {
        return false // If the URL is invalid, deny by default
        ;
    }
}; //# sourceMappingURL=isURLAllowed.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/mapAsync.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mapAsync",
    ()=>mapAsync
]);
async function mapAsync(arr, callbackfn) {
    return Promise.all(arr.map(callbackfn));
} //# sourceMappingURL=mapAsync.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/sanitizeSelect.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sanitizeSelect",
    ()=>sanitizeSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$70$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$deepMergeSimple$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+translations@3.70.0/node_modules/@payloadcms/translations/dist/utilities/deepMergeSimple.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getSelectMode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getSelectMode.js [app-route] (ecmascript)");
;
;
// Transform post.title -> post, post.category.title -> post
const stripVirtualPathToCurrentCollection = ({ fields, path, versions })=>{
    const resultSegments = [];
    if (versions) {
        resultSegments.push('version');
        const versionField = fields.find((each)=>each.name === 'version');
        if (versionField && versionField.type === 'group') {
            fields = versionField.flattenedFields;
        }
    }
    for (const segment of path.split('.')){
        const field = fields.find((each)=>each.name === segment);
        if (!field) {
            continue;
        }
        resultSegments.push(segment);
        if (field.type === 'relationship' || field.type === 'upload') {
            return resultSegments.join('.');
        }
    }
    return resultSegments.join('.');
};
const getAllVirtualRelations = ({ fields })=>{
    const result = [];
    for (const field of fields){
        if ('virtual' in field && typeof field.virtual === 'string') {
            result.push(field.virtual);
        } else if (field.type === 'group' || field.type === 'tab') {
            const nestedResult = getAllVirtualRelations({
                fields: field.flattenedFields
            });
            for (const nestedItem of nestedResult){
                result.push(nestedItem);
            }
        }
    }
    return result;
};
const resolveVirtualRelationsToSelect = ({ fields, selectValue, topLevelFields, versions })=>{
    const result = [];
    if (selectValue === true) {
        for (const item of getAllVirtualRelations({
            fields
        })){
            result.push(stripVirtualPathToCurrentCollection({
                fields: topLevelFields,
                path: item,
                versions
            }));
        }
    } else {
        for(const fieldName in selectValue){
            const field = fields.find((each)=>each.name === fieldName);
            if (!field) {
                continue;
            }
            if ('virtual' in field && typeof field.virtual === 'string') {
                result.push(stripVirtualPathToCurrentCollection({
                    fields: topLevelFields,
                    path: field.virtual,
                    versions
                }));
            } else if (field.type === 'group' || field.type === 'tab') {
                for (const item of resolveVirtualRelationsToSelect({
                    fields: field.flattenedFields,
                    selectValue: selectValue[fieldName],
                    topLevelFields,
                    versions
                })){
                    result.push(stripVirtualPathToCurrentCollection({
                        fields: topLevelFields,
                        path: item,
                        versions
                    }));
                }
            }
        }
    }
    return result;
};
const sanitizeSelect = ({ fields, forceSelect, select, versions })=>{
    if (!select) {
        return select;
    }
    const selectMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getSelectMode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSelectMode"])(select);
    if (selectMode === 'exclude') {
        return select;
    }
    if (forceSelect) {
        select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$70$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$deepMergeSimple$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepMergeSimple"])(select, forceSelect);
    }
    if (select) {
        const virtualRelations = resolveVirtualRelationsToSelect({
            fields,
            selectValue: select,
            topLevelFields: fields,
            versions: versions ?? false
        });
        for (const path of virtualRelations){
            let currentRef = select;
            const segments = path.split('.');
            for(let i = 0; i < segments.length; i++){
                const isLast = segments.length - 1 === i;
                const segment = segments[i];
                if (isLast) {
                    currentRef[segment] = true;
                } else {
                    if (!(segment in currentRef)) {
                        currentRef[segment] = {};
                        currentRef = currentRef[segment];
                    }
                }
            }
        }
    }
    return select;
}; //# sourceMappingURL=sanitizeSelect.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/checkDocumentLockStatus.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkDocumentLockStatus",
    ()=>checkDocumentLockStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Locked$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/Locked.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$locked$2d$documents$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/locked-documents/config.js [app-route] (ecmascript)");
;
;
const checkDocumentLockStatus = async ({ id, collectionSlug, globalSlug, lockDurationDefault = 300, lockErrorMessage, overrideLock = true, req })=>{
    const { payload } = req;
    // Retrieve the lockDocuments property for either collection or global
    const lockDocumentsProp = collectionSlug ? payload.collections?.[collectionSlug]?.config?.lockDocuments : payload.config?.globals?.find((g)=>g.slug === globalSlug)?.lockDocuments;
    const isLockingEnabled = lockDocumentsProp !== false;
    let lockedDocumentQuery = {};
    if (collectionSlug) {
        lockedDocumentQuery = {
            and: [
                {
                    'document.relationTo': {
                        equals: collectionSlug
                    }
                },
                {
                    'document.value': {
                        equals: id
                    }
                }
            ]
        };
    } else if (globalSlug) {
        lockedDocumentQuery = {
            globalSlug: {
                equals: globalSlug
            }
        };
    } else {
        throw new Error('Either collectionSlug or globalSlug must be provided.');
    }
    if (!isLockingEnabled) {
        return;
    }
    // Only perform lock checks if overrideLock is false and locking is enabled
    if (!overrideLock) {
        const defaultLockErrorMessage = collectionSlug ? `Document with ID ${id} is currently locked by another user and cannot be modified.` : `Global document with slug "${globalSlug}" is currently locked by another user and cannot be modified.`;
        const finalLockErrorMessage = lockErrorMessage || defaultLockErrorMessage;
        const lockedDocumentResult = await payload.db.find({
            collection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$locked$2d$documents$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["lockedDocumentsCollectionSlug"],
            limit: 1,
            pagination: false,
            sort: '-updatedAt',
            where: lockedDocumentQuery
        });
        // If there's a locked document, check lock conditions
        const lockedDoc = lockedDocumentResult?.docs[0];
        if (lockedDoc) {
            const lastEditedAt = new Date(lockedDoc?.updatedAt).getTime();
            const now = new Date().getTime();
            const lockDuration = typeof lockDocumentsProp === 'object' ? lockDocumentsProp.duration : lockDurationDefault;
            const lockDurationInMilliseconds = lockDuration * 1000;
            const currentUserId = req.user?.id;
            // document is locked by another user and the lock hasn't expired
            if (lockedDoc.user?.value !== currentUserId && now - lastEditedAt <= lockDurationInMilliseconds) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Locked$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Locked"](finalLockErrorMessage);
            }
        }
    }
    // Perform the delete operation regardless of overrideLock status
    await payload.db.deleteMany({
        collection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$locked$2d$documents$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["lockedDocumentsCollectionSlug"],
        // Not passing req fails on postgres
        req: payload.db.name === 'mongoose' ? undefined : req,
        where: lockedDocumentQuery
    });
}; //# sourceMappingURL=checkDocumentLockStatus.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/isErrorPublic.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isErrorPublic",
    ()=>isErrorPublic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
;
function isErrorPublic(error, config) {
    const payloadError = error;
    if (config.debug) {
        return true;
    }
    if (payloadError.isPublic === true) {
        return true;
    }
    if (payloadError.isPublic === false) {
        return false;
    }
    if (payloadError.status && payloadError.status !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].INTERNAL_SERVER_ERROR) {
        return true;
    }
    return false;
} //# sourceMappingURL=isErrorPublic.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/dynamicImport.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dynamicImport",
    ()=>dynamicImport
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/url [external] (url, cjs)");
;
;
async function dynamicImport(modulePathOrSpecifier) {
    // Convert absolute file paths to file:// URLs, but leave package specifiers as-is
    const importPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].isAbsolute(modulePathOrSpecifier) ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["pathToFileURL"])(modulePathOrSpecifier).href : modulePathOrSpecifier;
    // Vitest runs tests in a VM context where eval'd dynamic imports fail with
    // ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING. Use direct import in test environment.
    if (process.env.VITEST) {
        return await Promise.resolve().then(()=>{
            const e = new Error("Cannot find module as expression is too dynamic");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        });
    }
    // Without the eval, the Next.js bundler will throw this error when encountering the import statement:
    // ⚠ Compiled with warnings in X.Xs
    // Critical dependency: the request of a dependency is an expression
    return await eval(`import('${importPath}')`);
} //# sourceMappingURL=dynamicImport.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getFieldByPath.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Get the field by its schema path, e.g. group.title, array.group.title
 * If there were any localized on the path, `pathHasLocalized` will be true and `localizedPath` will look like:
 * `group.<locale>.title` // group is localized here
 */ __turbopack_context__.s([
    "getFieldByPath",
    ()=>getFieldByPath
]);
const getFieldByPath = ({ config, fields, includeRelationships = false, localizedPath = '', path })=>{
    let currentFields = fields;
    let currentField = null;
    const segments = path.split('.');
    let pathHasLocalized = false;
    while(segments.length > 0){
        const segment = segments.shift();
        localizedPath = `${localizedPath ? `${localizedPath}.` : ''}${segment}`;
        const field = currentFields.find((each)=>each.name === segment);
        if (!field) {
            return null;
        }
        if (field.localized) {
            pathHasLocalized = true;
            localizedPath = `${localizedPath}.<locale>`;
        }
        if ('flattenedFields' in field) {
            currentFields = field.flattenedFields;
        }
        if (config && includeRelationships && (field.type === 'relationship' || field.type === 'upload') && !Array.isArray(field.relationTo)) {
            const flattenedFields = config.collections.find((e)=>e.slug === field.relationTo)?.flattenedFields;
            if (flattenedFields) {
                currentFields = flattenedFields;
            }
            if (segments.length === 1 && segments[0] === 'id') {
                return {
                    field,
                    localizedPath,
                    pathHasLocalized
                };
            }
        }
        if ('blocks' in field && segments.length > 0) {
            const blockSlug = segments[0];
            const block = field.blocks.find((b)=>b.slug === blockSlug);
            if (block) {
                segments.shift();
                localizedPath = `${localizedPath}.${blockSlug}`;
                if (segments.length === 0) {
                    return null;
                }
                return getFieldByPath({
                    config,
                    fields: block.flattenedFields,
                    includeRelationships,
                    localizedPath,
                    path: segments.join('.')
                });
            }
        }
        currentField = field;
    }
    if (!currentField) {
        return null;
    }
    return {
        field: currentField,
        localizedPath,
        pathHasLocalized
    };
}; //# sourceMappingURL=getFieldByPath.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/sanitizePermissions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "recursivelySanitizeCollections",
    ()=>recursivelySanitizeCollections,
    "recursivelySanitizeGlobals",
    ()=>recursivelySanitizeGlobals,
    "sanitizePermissions",
    ()=>sanitizePermissions
]);
function checkAndSanitizeFieldsPermssions(data) {
    let allFieldPermissionsTrue = true;
    for(const key in data){
        if (typeof data[key] === 'object') {
            if (!checkAndSanitizePermissions(data[key])) {
                allFieldPermissionsTrue = false;
            } else {
                ;
                data[key] = true;
            }
        } else if (data[key] !== true) {
            allFieldPermissionsTrue = false;
        }
    }
    // If all values are true or it's an empty object, return true
    return allFieldPermissionsTrue;
}
/**
 * Check if all permissions in a FieldPermissions, CollectionPermission or GlobalPermission object are true.
 * If nested fields or blocks are present, the function will recursively check those as well.
 */ function checkAndSanitizePermissions(_data) {
    const data = _data;
    /**
   * Check blocks permissions
   */ let blocksPermissions = true;
    if ('blocks' in data && data.blocks) {
        for(const blockSlug in data.blocks){
            if (typeof data.blocks[blockSlug] === 'object') {
                for(const key in data.blocks[blockSlug]){
                    /**
           * Check fields in nested blocks
           */ if (key === 'fields') {
                        if (data.blocks[blockSlug].fields) {
                            if (!checkAndSanitizeFieldsPermssions(data.blocks[blockSlug].fields)) {
                                blocksPermissions = false;
                            } else {
                                ;
                                data.blocks[blockSlug].fields = true;
                            }
                        }
                    } else {
                        if (typeof data.blocks[blockSlug][key] === 'object') {
                            /**
               * Check Permissions in nested blocks
               */ if (isPermissionObject(data.blocks[blockSlug][key])) {
                                if (data.blocks[blockSlug][key]['permission'] === true && !('where' in data.blocks[blockSlug][key])) {
                                    // If the permission is true and there is no where clause, set the key to true
                                    data.blocks[blockSlug][key] = true;
                                    continue;
                                } else if (data.blocks[blockSlug][key]['permission'] === true && 'where' in data.blocks[blockSlug][key]) {
                                    // otherwise do nothing so we can keep the where clause
                                    blocksPermissions = false;
                                } else {
                                    blocksPermissions = false;
                                    data.blocks[blockSlug][key] = false;
                                    delete data.blocks[blockSlug][key];
                                    continue;
                                }
                            } else {
                                throw new Error('Unexpected object in block permissions');
                            }
                        }
                    }
                }
            } else if (data.blocks[blockSlug] !== true) {
                // If any value is not true, return false
                blocksPermissions = false;
                delete data.blocks[blockSlug];
            }
        }
        if (blocksPermissions) {
            ;
            data.blocks = true;
        }
    }
    /**
   * Check nested Fields permissions
   */ let fieldsPermissions = true;
    if (data.fields) {
        if (!checkAndSanitizeFieldsPermssions(data.fields)) {
            fieldsPermissions = false;
        } else {
            ;
            data.fields = true;
        }
    }
    /**
   * Check other Permissions objects (e.g. read, write)
   */ let otherPermissions = true;
    for(const key in data){
        if (key === 'fields' || key === 'blocks') {
            continue;
        }
        if (typeof data[key] === 'object') {
            if (isPermissionObject(data[key])) {
                if (data[key]['permission'] === true && !('where' in data[key])) {
                    // If the permission is true and there is no where clause, set the key to true
                    data[key] = true;
                    continue;
                } else if (data[key]['permission'] === true && 'where' in data[key]) {
                    // otherwise do nothing so we can keep the where clause
                    otherPermissions = false;
                } else {
                    otherPermissions = false;
                    data[key] = false;
                    delete data[key];
                    continue;
                }
            } else {
                // eslint-disable-next-line no-console
                console.error('Unexpected object in fields permissions', data, 'key:', key);
                throw new Error('Unexpected object in fields permissions');
            }
        } else if (data[key] !== true) {
            // If any value is not true, return false
            otherPermissions = false;
        }
    }
    // If all values are true or it's an empty object, return true
    return fieldsPermissions && blocksPermissions && otherPermissions;
}
/**
 * Check if an object is a permission object.
 */ function isPermissionObject(data) {
    return typeof data === 'object' && 'permission' in data && typeof data['permission'] === 'boolean';
}
/**
 * Recursively remove empty objects from an object.
 */ function cleanEmptyObjects(obj) {
    Object.keys(obj).forEach((key)=>{
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            // Recursive call
            cleanEmptyObjects(obj[key]);
            if (Object.keys(obj[key]).length === 0) {
                // Delete the key if the object is empty
                delete obj[key];
            }
        } else if (obj[key] === null || obj[key] === undefined) {
            delete obj[key];
        }
    });
}
function recursivelySanitizeCollections(obj) {
    if (typeof obj !== 'object') {
        return;
    }
    const collectionPermissions = Object.values(obj);
    for (const collectionPermission of collectionPermissions){
        checkAndSanitizePermissions(collectionPermission);
    }
}
function recursivelySanitizeGlobals(obj) {
    if (typeof obj !== 'object') {
        return;
    }
    const globalPermissions = Object.values(obj);
    for (const globalPermission of globalPermissions){
        checkAndSanitizePermissions(globalPermission);
    }
}
function sanitizePermissions(data) {
    if (data.canAccessAdmin === false) {
        delete data.canAccessAdmin;
    }
    if (data.collections) {
        recursivelySanitizeCollections(data.collections);
    }
    if (data.globals) {
        recursivelySanitizeGlobals(data.globals);
    }
    // Run clean up of empty objects at the end
    cleanEmptyObjects(data);
    return data;
} //# sourceMappingURL=sanitizePermissions.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/parseCookies.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseCookies",
    ()=>parseCookies
]);
const parseCookies = (headers)=>{
    const list = new Map();
    const rc = headers.get('Cookie');
    if (rc) {
        rc.split(';').forEach((cookie)=>{
            const parts = cookie.split('=');
            const key = parts.shift()?.trim();
            const encodedValue = parts.join('=');
            try {
                const decodedValue = decodeURI(encodedValue);
                list.set(key, decodedValue);
            } catch  {
            // ignore invalid encoded values
            }
        });
    }
    return list;
}; //# sourceMappingURL=parseCookies.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/findUp.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findUp",
    ()=>findUp,
    "findUpSync",
    ()=>findUpSync,
    "pathExistsAndIsAccessible",
    ()=>pathExistsAndIsAccessible,
    "pathExistsAndIsAccessibleSync",
    ()=>pathExistsAndIsAccessibleSync
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
function findUpSync({ condition, dir, fileNames }) {
    const { root } = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].parse(dir);
    while(true){
        if (fileNames?.length) {
            let found = false;
            for (const fileName of fileNames){
                const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(dir, fileName);
                const exists = pathExistsAndIsAccessibleSync(filePath);
                if (exists) {
                    if (!condition) {
                        return filePath;
                    }
                    found = true;
                    break;
                }
            }
            if (!found && dir !== root) {
                dir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(dir); // Move up one directory level.
                continue;
            }
        }
        const result = condition?.(dir);
        if (result === true) {
            return dir;
        }
        if (typeof result === 'string' && result?.length) {
            return result;
        }
        if (dir === root) {
            return null // Reached the root directory without a match.
            ;
        }
        dir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(dir); // Move up one directory level.
    }
}
async function findUp({ condition, dir, fileNames }) {
    const { root } = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].parse(dir);
    while(true){
        if (fileNames?.length) {
            let found = false;
            for (const fileName of fileNames){
                const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(dir, fileName);
                const exists = await pathExistsAndIsAccessible(filePath);
                if (exists) {
                    if (!condition) {
                        return filePath;
                    }
                    found = true;
                    break;
                }
            }
            if (!found && dir !== root) {
                dir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(dir); // Move up one directory level.
                continue;
            }
        }
        const result = await condition?.(dir);
        if (result === true) {
            return dir;
        }
        if (typeof result === 'string' && result?.length) {
            return result;
        }
        if (dir === root) {
            return null // Reached the root directory without a match.
            ;
        }
        dir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(dir); // Move up one directory level.
    }
}
function pathExistsAndIsAccessibleSync(path) {
    try {
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].accessSync(path);
        return true;
    } catch  {
        return false;
    }
}
async function pathExistsAndIsAccessible(path) {
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].promises.access(path);
        return true;
    } catch  {
        return false;
    }
} //# sourceMappingURL=findUp.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/dependencies/isError.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  This source code has been taken and modified from https://github.com/vercel/next.js/blob/be87132327ea28acd4bf7af09a401bac2374cb64/packages/next/src/lib/is-error.ts

  License:

  The MIT License (MIT)

  Copyright (c) 2024 Vercel, Inc.

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/ __turbopack_context__.s([
    "isError",
    ()=>isError
]);
function isError(err) {
    return typeof err === 'object' && err !== null && 'name' in err && 'message' in err;
} //# sourceMappingURL=isError.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/dependencies/realPath.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  This source code has been taken from https://github.com/vercel/next.js/blob/39498d604c3b25d92a483153fe648a7ee456fbda/packages/next/src/lib/realpath.ts

  License:

  The MIT License (MIT)

  Copyright (c) 2024 Vercel, Inc.

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/ __turbopack_context__.s([
    "realpathSync",
    ()=>realpathSync
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
;
const isWindows = process.platform === 'win32';
const realpathSync = ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].realpathSync : "TURBOPACK unreachable"; //# sourceMappingURL=realPath.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/dependencies/resolveFrom.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  This source code has been taken and modified from https://github.com/vercel/next.js/blob/39498d604c3b25d92a483153fe648a7ee456fbda/packages/next/src/lib/resolve-from.ts

  License:

  The MIT License (MIT)

  Copyright (c) 2024 Vercel, Inc.

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/ // source: https://github.com/sindresorhus/resolve-from
__turbopack_context__.s([
    "resolveFrom",
    ()=>resolveFrom
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$module__$5b$external$5d$__$28$module$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/module [external] (module, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$isError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/dependencies/isError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$realPath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/dependencies/realPath.js [app-route] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/dependencies/resolveFrom.js")}`;
    }
};
;
;
;
;
const resolveFrom = (fromDirectory, moduleId, silent)=>{
    if (typeof fromDirectory !== 'string') {
        throw new TypeError(`Expected \`fromDir\` to be of type \`string\`, got \`${typeof fromDirectory}\``);
    }
    if (typeof moduleId !== 'string') {
        throw new TypeError(`Expected \`moduleId\` to be of type \`string\`, got \`${typeof moduleId}\``);
    }
    try {
        fromDirectory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$realPath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["realpathSync"])(fromDirectory);
    } catch (error) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$isError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isError"])(error) && error.code === 'ENOENT') {
            fromDirectory = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(fromDirectory);
        } else if (silent) {
            return;
        } else {
            throw error;
        }
    }
    const fromFile = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(fromDirectory, 'noop.js');
    const require = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$module__$5b$external$5d$__$28$module$2c$__cjs$29$__["createRequire"])(__TURBOPACK__import$2e$meta__.url);
    const Module = __turbopack_context__.r("[externals]/module [external] (module, cjs)");
    const resolveFileName = ()=>{
        return Module._resolveFilename(moduleId, {
            id: fromFile,
            filename: fromFile,
            paths: Module._nodeModulePaths(fromDirectory)
        });
    };
    if (silent) {
        try {
            return resolveFileName();
        } catch (ignore) {
            return;
        }
    }
    return resolveFileName();
}; //# sourceMappingURL=resolveFrom.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/dependencies/getDependencies.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  This source code has been taken and modified from https://github.com/vercel/next.js/blob/41a80533f900467e1b788bd2673abe2dca20be6a/packages/next/src/lib/has-necessary-dependencies.ts

  License:

  The MIT License (MIT)

  Copyright (c) 2024 Vercel, Inc.

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/ __turbopack_context__.s([
    "getDependencies",
    ()=>getDependencies
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/url [external] (url, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$findUp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/findUp.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$resolveFrom$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/dependencies/resolveFrom.js [app-route] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/dependencies/getDependencies.js")}`;
    }
};
;
;
;
;
;
const filename = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["fileURLToPath"])(__TURBOPACK__import$2e$meta__.url);
const dirname = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(filename);
const payloadPkgDirname = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(dirname, '../../../') // pkg dir (outside src)
;
const resolvedCwd = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(process.cwd());
async function getDependencies(baseDir, requiredPackages) {
    const resolutions = new Map();
    const missingPackages = [];
    await Promise.all(requiredPackages.map(async (pkg)=>{
        try {
            const pkgPath = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].realpath((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$resolveFrom$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveFrom"])(baseDir, pkg));
            const pkgDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(pkgPath);
            let packageJsonFilePath = null;
            const foundPackageJsonDir = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$findUp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findUp"])({
                dir: pkgDir,
                fileNames: [
                    'package.json'
                ]
            });
            if (foundPackageJsonDir) {
                const resolvedFoundPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(foundPackageJsonDir);
                if (resolvedFoundPath.startsWith(resolvedCwd) || resolvedFoundPath.startsWith(payloadPkgDirname)) {
                    // We don't want to match node modules outside the user's project. Checking for both process.cwd and dirname is a reliable way to do this.
                    packageJsonFilePath = resolvedFoundPath;
                }
            }
            // No need to check if packageJsonFilePath exists - findUp checks that for us
            if (packageJsonFilePath) {
                // parse version
                const packageJson = JSON.parse(await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].readFile(packageJsonFilePath, 'utf8'));
                const version = packageJson.version;
                resolutions.set(pkg, {
                    path: packageJsonFilePath,
                    version
                });
            } else {
                return missingPackages.push(pkg);
            }
        } catch (_) {
            return missingPackages.push(pkg);
        }
    }));
    return {
        missing: missingPackages,
        resolved: resolutions
    };
} //# sourceMappingURL=getDependencies.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/dependencies/versionUtils.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compareVersions",
    ()=>compareVersions,
    "parseVersion",
    ()=>parseVersion
]);
function parseVersion(version) {
    const [mainVersion, ...preReleases] = version.split('-');
    const parts = mainVersion.split('.').map(Number);
    return {
        parts,
        preReleases
    };
}
function extractNumbers(str) {
    const matches = str.match(/\d+/g) || [];
    return matches.map(Number);
}
function comparePreRelease(v1, v2) {
    const num1 = extractNumbers(v1);
    const num2 = extractNumbers(v2);
    for(let i = 0; i < Math.max(num1.length, num2.length); i++){
        if ((num1[i] || 0) < (num2[i] || 0)) {
            return -1;
        }
        if ((num1[i] || 0) > (num2[i] || 0)) {
            return 1;
        }
    }
    // If numeric parts are equal, compare the whole string
    if (v1 < v2) {
        return -1;
    }
    if (v1 > v2) {
        return 1;
    }
    return 0;
}
function compareVersions(compare, to, customVersionParser) {
    const { parts: parts1, preReleases: preReleases1 } = customVersionParser ? customVersionParser(compare) : parseVersion(compare);
    const { parts: parts2, preReleases: preReleases2 } = customVersionParser ? customVersionParser(to) : parseVersion(to);
    // Compare main version parts
    for(let i = 0; i < Math.max(parts1.length, parts2.length); i++){
        if ((parts1[i] || 0) > (parts2[i] || 0)) {
            return 'greater';
        }
        if ((parts1[i] || 0) < (parts2[i] || 0)) {
            return 'lower';
        }
    }
    // Compare pre-release parts if main versions are equal
    if (preReleases1?.length || preReleases2?.length) {
        for(let i = 0; i < Math.max(preReleases1.length, preReleases2.length); i++){
            if (!preReleases1[i]) {
                return 'greater';
            }
            if (!preReleases2[i]) {
                return 'lower';
            }
            const result = comparePreRelease(preReleases1[i], preReleases2[i]);
            if (result !== 0) {
                return result === 1 ? 'greater' : 'lower';
            }
        // Equal => continue for loop to check for next pre-release part
        }
    }
    return 'equal';
} //# sourceMappingURL=versionUtils.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/dependencies/dependencyChecker.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkDependencies",
    ()=>checkDependencies
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/url [external] (url, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$getDependencies$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/dependencies/getDependencies.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$versionUtils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/dependencies/versionUtils.js [app-route] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/dependencies/dependencyChecker.js")}`;
    }
};
;
;
;
;
const filename = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["fileURLToPath"])(__TURBOPACK__import$2e$meta__.url);
const dirname = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(filename);
async function checkDependencies({ dependencyGroups, dependencyVersions }) {
    if (dependencyGroups?.length) {
        for (const dependencyGroup of dependencyGroups){
            const resolvedDependencies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$getDependencies$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDependencies"])(dirname, dependencyGroup.dependencies);
            // Go through each resolved dependency. If any dependency has a mismatching version, throw an error
            const foundVersions = {};
            for (const [_pkg, { version }] of resolvedDependencies.resolved){
                if (!Object.keys(foundVersions).includes(version)) {
                    foundVersions[version] = _pkg;
                }
            }
            if (Object.keys(foundVersions).length > 1) {
                const targetVersion = dependencyGroup.targetVersion ?? resolvedDependencies.resolved.get(dependencyGroup.targetVersionDependency)?.version;
                if (targetVersion) {
                    const formattedVersionsWithPackageNameString = Object.entries(foundVersions).filter(([version])=>version !== targetVersion).map(([version, pkg])=>`${pkg}@${version} (Please change this to ${targetVersion})`).join(', ');
                    throw new Error(`Mismatching "${dependencyGroup.name}" dependency versions found: ${formattedVersionsWithPackageNameString}. All "${dependencyGroup.name}" packages must have the same version. This is an error with your set-up, not a bug in Payload. Please go to your package.json and ensure all "${dependencyGroup.name}" packages have the same version.`);
                } else {
                    const formattedVersionsWithPackageNameString = Object.entries(foundVersions).map(([version, pkg])=>`${pkg}@${version}`).join(', ');
                    throw new Error(`Mismatching "${dependencyGroup.name}" dependency versions found: ${formattedVersionsWithPackageNameString}. All "${dependencyGroup.name}" packages must have the same version. This is an error with your set-up, not a bug in Payload. Please go to your package.json and ensure all "${dependencyGroup.name}" packages have the same version.`);
                }
            }
        }
    }
    if (dependencyVersions && Object.keys(dependencyVersions).length) {
        const resolvedDependencies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$getDependencies$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDependencies"])(dirname, Object.keys(dependencyVersions));
        for (const [dependency, settings] of Object.entries(dependencyVersions)){
            const resolvedDependency = resolvedDependencies.resolved.get(dependency);
            if (!resolvedDependency) {
                if (!settings.required) {
                    continue;
                }
                throw new Error(`Dependency ${dependency} not found. Please ensure it is installed.`);
            }
            if (settings.version) {
                const settingsVersionToCheck = settings.version.startsWith('>=') ? settings.version.slice(2) : settings.version;
                const versionCompareResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$versionUtils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["compareVersions"])(resolvedDependency.version, settingsVersionToCheck, settings.customVersionParser);
                if (settings.version.startsWith('>=')) {
                    if (versionCompareResult === 'lower') {
                        throw new Error(`Dependency ${dependency} is on version ${resolvedDependency.version}, but ${settings.version} or greater is required. Please update this dependency.`);
                    }
                } else if (versionCompareResult === 'lower' || versionCompareResult === 'greater') {
                    throw new Error(`Dependency ${dependency} is on version ${resolvedDependency.version}, but ${settings.version} is required. Please update this dependency.`);
                }
            }
        }
    }
} //# sourceMappingURL=dependencyChecker.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/isNextBuild.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Utility function to determine if the code is being executed during the Next.js build process.
 */ __turbopack_context__.s([
    "isNextBuild",
    ()=>isNextBuild
]);
function isNextBuild() {
    return process.env.NEXT_PHASE === 'phase-production-build' || process.env.npm_lifecycle_event === 'build';
} //# sourceMappingURL=isNextBuild.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/logger.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultLoggerOptions",
    ()=>defaultLoggerOptions,
    "getLogger",
    ()=>getLogger,
    "prettySyncLoggerDestination",
    ()=>prettySyncLoggerDestination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pino$40$9$2e$14$2e$0$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pino@9.14.0/node_modules/pino/pino.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pino$2d$pretty$40$13$2e$1$2e$2$2f$node_modules$2f$pino$2d$pretty$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pino-pretty@13.1.2/node_modules/pino-pretty/index.js [app-route] (ecmascript)");
;
;
const prettyOptions = {
    colorize: true,
    ignore: 'pid,hostname',
    translateTime: 'SYS:HH:MM:ss'
};
const prettySyncLoggerDestination = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pino$2d$pretty$40$13$2e$1$2e$2$2f$node_modules$2f$pino$2d$pretty$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["build"])({
    ...prettyOptions,
    destination: 1,
    sync: true
});
const defaultLoggerOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pino$2d$pretty$40$13$2e$1$2e$2$2f$node_modules$2f$pino$2d$pretty$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["build"])(prettyOptions);
const getLogger = (name = 'payload', logger)=>{
    if (!logger) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pino$40$9$2e$14$2e$0$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pino"])(defaultLoggerOptions);
    }
    // Synchronous logger used by bin scripts
    if (logger === 'sync') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pino$40$9$2e$14$2e$0$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pino"])(prettySyncLoggerDestination);
    }
    // Check if logger is an object
    if ('options' in logger) {
        const { destination, options } = logger;
        if (!options.name) {
            options.name = name;
        }
        if (!options.enabled) {
            options.enabled = process.env.DISABLE_LOGGING !== 'true';
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pino$40$9$2e$14$2e$0$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pino"])(options, destination);
    } else {
        // Instantiated logger
        return logger;
    }
}; //# sourceMappingURL=logger.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/telemetry/conf/envPaths.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// @ts-strict-ignore
/**
 * Taken from https://github.com/sindresorhus/env-paths/blob/main/index.js
 *
 * MIT License
 *
 * Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */ __turbopack_context__.s([
    "envPaths",
    ()=>envPaths
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$os__$5b$external$5d$__$28$node$3a$os$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:os [external] (node:os, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:process [external] (node:process, cjs)");
;
;
;
const homedir = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$os__$5b$external$5d$__$28$node$3a$os$2c$__cjs$29$__["default"].homedir();
const tmpdir = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$os__$5b$external$5d$__$28$node$3a$os$2c$__cjs$29$__["default"].tmpdir();
const { env } = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"];
const macos = (name)=>{
    const library = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(homedir, 'Library');
    return {
        cache: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(library, 'Caches', name),
        config: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(library, 'Preferences', name),
        data: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(library, 'Application Support', name),
        log: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(library, 'Logs', name),
        temp: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(tmpdir, name)
    };
};
const windows = (name)=>{
    const appData = env.APPDATA || __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(homedir, 'AppData', 'Roaming');
    const localAppData = env.LOCALAPPDATA || __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(homedir, 'AppData', 'Local');
    return {
        // Data/config/cache/log are invented by me as Windows isn't opinionated about this
        cache: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(localAppData, name, 'Cache'),
        config: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(appData, name, 'Config'),
        data: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(localAppData, name, 'Data'),
        log: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(localAppData, name, 'Log'),
        temp: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(tmpdir, name)
    };
};
// https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html
const linux = (name)=>{
    const username = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].basename(homedir);
    return {
        cache: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(env.XDG_CACHE_HOME || __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(homedir, '.cache'), name),
        config: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(env.XDG_CONFIG_HOME || __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(homedir, '.config'), name),
        data: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(env.XDG_DATA_HOME || __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(homedir, '.local', 'share'), name),
        // https://wiki.debian.org/XDGBaseDirectorySpecification#state
        log: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(env.XDG_STATE_HOME || __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(homedir, '.local', 'state'), name),
        temp: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(tmpdir, username, name)
    };
};
function envPaths(name, { suffix = 'nodejs' } = {}) {
    if (typeof name !== 'string') {
        throw new TypeError(`Expected a string, got ${typeof name}`);
    }
    if (suffix) {
        // Add suffix to prevent possible conflict with native apps
        name += `-${suffix}`;
    }
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"].platform === 'darwin') {
        return macos(name);
    }
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"].platform === 'win32') {
        return windows(name);
    }
    return linux(name);
} //# sourceMappingURL=envPaths.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/telemetry/conf/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Taken & simplified from https://github.com/sindresorhus/conf/blob/main/source/index.ts
 *
 * MIT License
 *
 * Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */ __turbopack_context__.s([
    "Conf",
    ()=>Conf
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$assert__$5b$external$5d$__$28$node$3a$assert$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:assert [external] (node:assert, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$conf$2f$envPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/telemetry/conf/envPaths.js [app-route] (ecmascript)");
;
;
;
;
const createPlainObject = ()=>Object.create(null);
const checkValueType = (key, value)=>{
    const nonJsonTypes = new Set([
        'function',
        'symbol',
        'undefined'
    ]);
    const type = typeof value;
    if (nonJsonTypes.has(type)) {
        throw new TypeError(`Setting a value of type \`${type}\` for key \`${key}\` is not allowed as it's not supported by JSON`);
    }
};
class Conf {
    #options;
    _deserialize = (value)=>JSON.parse(value);
    _serialize = (value)=>JSON.stringify(value, undefined, '\t');
    events;
    path;
    constructor(){
        const options = {
            configFileMode: 0o666,
            configName: 'config',
            fileExtension: 'json',
            projectSuffix: 'nodejs'
        };
        const cwd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$conf$2f$envPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["envPaths"])('payload', {
            suffix: options.projectSuffix
        }).config;
        this.#options = options;
        this.events = new EventTarget();
        const fileExtension = options.fileExtension ? `.${options.fileExtension}` : '';
        this.path = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].resolve(cwd, `${options.configName ?? 'config'}${fileExtension}`);
        const fileStore = this.store;
        const store = Object.assign(createPlainObject(), fileStore);
        try {
            __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$assert__$5b$external$5d$__$28$node$3a$assert$2c$__cjs$29$__["default"].deepEqual(fileStore, store);
        } catch  {
            this.store = store;
        }
    }
    _ensureDirectory() {
        // Ensure the directory exists as it could have been deleted in the meantime.
        __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].mkdirSync(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].dirname(this.path), {
            recursive: true
        });
    }
    _write(value) {
        const data = this._serialize(value);
        __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].writeFileSync(this.path, data, {
            mode: this.#options.configFileMode
        });
    }
    /**
   Delete an item.

   @param key - The key of the item to delete.
   */ delete(key) {
        const { store } = this;
        delete store[key];
        this.store = store;
    }
    /**
   Get an item.

   @param key - The key of the item to get.
   */ get(key) {
        const { store } = this;
        return store[key];
    }
    /**
   Set an item or multiple items at once.

   @param key - You can use [dot-notation](https://github.com/sindresorhus/dot-prop) in a key to access nested properties. Or a hashmap of items to set at once.
   @param value - Must be JSON serializable. Trying to set the type `undefined`, `function`, or `symbol` will result in a `TypeError`.
   */ set(key, value) {
        if (typeof key !== 'string' && typeof key !== 'object') {
            throw new TypeError(`Expected \`key\` to be of type \`string\` or \`object\`, got ${typeof key}`);
        }
        if (typeof key !== 'object' && value === undefined) {
            throw new TypeError('Use `delete()` to clear values');
        }
        const { store } = this;
        const set = (key, value)=>{
            checkValueType(key, value);
            store[key] = value;
        };
        if (typeof key === 'object') {
            const object = key;
            for (const [key, value] of Object.entries(object)){
                set(key, value);
            }
        } else {
            set(key, value);
        }
        this.store = store;
    }
    *[Symbol.iterator]() {
        for (const [key, value] of Object.entries(this.store)){
            yield [
                key,
                value
            ];
        }
    }
    get size() {
        return Object.keys(this.store).length;
    }
    get store() {
        try {
            const dataString = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].readFileSync(this.path, 'utf8');
            const deserializedData = this._deserialize(dataString);
            return Object.assign(createPlainObject(), deserializedData);
        } catch (error) {
            if (error?.code === 'ENOENT') {
                this._ensureDirectory();
                return createPlainObject();
            }
            throw error;
        }
    }
    set store(value) {
        this._ensureDirectory();
        this._write(value);
        this.events.dispatchEvent(new Event('change'));
    }
} //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/telemetry/oneWayHash.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "oneWayHash",
    ()=>oneWayHash
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
const oneWayHash = (data, secret)=>{
    const hash = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHash"])('sha256');
    // prepend value with payload secret. This ensure one-way.
    hash.update(secret);
    // Update is an append operation, not a replacement. The secret from the prior
    // update is still present!
    hash.update(data);
    return hash.digest('hex');
}; //# sourceMappingURL=oneWayHash.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/telemetry/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLocalizationInfo",
    ()=>getLocalizationInfo,
    "getPayloadVersion",
    ()=>getPayloadVersion,
    "sendEvent",
    ()=>sendEvent
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/child_process [external] (child_process, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ci$2d$info$40$4$2e$3$2e$1$2f$node_modules$2f$ci$2d$info$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ci-info@4.3.1/node_modules/ci-info/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/url [external] (url, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$findUp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/findUp.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$conf$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/telemetry/conf/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$oneWayHash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/telemetry/oneWayHash.js [app-route] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/telemetry/index.js")}`;
    }
};
;
;
;
;
;
;
;
;
;
let baseEvent = null;
const sendEvent = async ({ event, payload })=>{
    try {
        if (payload.config.telemetry !== false) {
            const { packageJSON, packageJSONPath } = await getPackageJSON();
            // Only generate the base event once
            if (!baseEvent) {
                const { projectID, source: projectIDSource } = getProjectID(payload, packageJSON);
                baseEvent = {
                    ciName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ci$2d$info$40$4$2e$3$2e$1$2f$node_modules$2f$ci$2d$info$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].isCI ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ci$2d$info$40$4$2e$3$2e$1$2f$node_modules$2f$ci$2d$info$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].name : null,
                    envID: getEnvID(),
                    isCI: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ci$2d$info$40$4$2e$3$2e$1$2f$node_modules$2f$ci$2d$info$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].isCI,
                    nodeEnv: ("TURBOPACK compile-time value", "development") || 'development',
                    nodeVersion: process.version,
                    payloadVersion: getPayloadVersion(packageJSON),
                    projectID,
                    projectIDSource,
                    ...getLocalizationInfo(payload),
                    dbAdapter: payload.db.name,
                    emailAdapter: payload.email?.name || null,
                    uploadAdapters: payload.config.upload.adapters
                };
            }
            if (process.env.PAYLOAD_TELEMETRY_DEBUG) {
                payload.logger.info({
                    event: {
                        ...baseEvent,
                        ...event,
                        packageJSONPath
                    },
                    msg: 'Telemetry Event'
                });
                return;
            }
            await fetch('https://telemetry.payloadcms.com/events', {
                body: JSON.stringify({
                    ...baseEvent,
                    ...event
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'post'
            });
        }
    } catch (_) {
    // Eat any errors in sending telemetry event
    }
};
/**
 * This is a quasi-persistent identifier used to dedupe recurring events. It's
 * generated from random data and completely anonymous.
 */ const getEnvID = ()=>{
    const conf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$conf$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Conf"]();
    const ENV_ID = 'envID';
    const val = conf.get(ENV_ID);
    if (val) {
        return val;
    }
    const generated = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomBytes"])(32).toString('hex');
    conf.set(ENV_ID, generated);
    return generated;
};
const getProjectID = (payload, packageJSON)=>{
    const gitID = getGitID(payload);
    if (gitID) {
        return {
            projectID: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$oneWayHash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["oneWayHash"])(gitID, payload.secret),
            source: 'git'
        };
    }
    const packageJSONID = getPackageJSONID(payload, packageJSON);
    if (packageJSONID) {
        return {
            projectID: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$oneWayHash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["oneWayHash"])(packageJSONID, payload.secret),
            source: 'packageJSON'
        };
    }
    const serverURL = payload.config.serverURL;
    if (serverURL) {
        return {
            projectID: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$oneWayHash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["oneWayHash"])(serverURL, payload.secret),
            source: 'serverURL'
        };
    }
    const cwd = process.cwd();
    return {
        projectID: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$oneWayHash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["oneWayHash"])(cwd, payload.secret),
        source: 'cwd'
    };
};
const getGitID = (payload)=>{
    try {
        const originBuffer = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__["execSync"])('git config --local --get remote.origin.url', {
            stdio: 'pipe',
            timeout: 1000
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$oneWayHash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["oneWayHash"])(String(originBuffer).trim(), payload.secret);
    } catch (_) {
        return null;
    }
};
const getPackageJSON = async ()=>{
    let packageJSONPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(process.cwd(), 'package.json');
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(packageJSONPath)) {
        // Old logic
        const filename = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["fileURLToPath"])(__TURBOPACK__import$2e$meta__.url);
        const dirname = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(filename);
        packageJSONPath = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$findUp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findUp"])({
            dir: dirname,
            fileNames: [
                'package.json'
            ]
        });
    }
    const jsonContentString = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].promises.readFile(packageJSONPath, 'utf-8');
    const jsonContent = JSON.parse(jsonContentString);
    return {
        packageJSON: jsonContent,
        packageJSONPath
    };
};
const getPackageJSONID = (payload, packageJSON)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$oneWayHash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["oneWayHash"])(packageJSON.name, payload.secret);
};
const getPayloadVersion = (packageJSON)=>{
    return packageJSON?.dependencies?.payload ?? '';
};
const getLocalizationInfo = (payload)=>{
    if (!payload.config.localization) {
        return {
            locales: [],
            localizationDefaultLocale: null,
            localizationEnabled: false
        };
    }
    return {
        locales: payload.config.localization.localeCodes,
        localizationDefaultLocale: payload.config.localization.defaultLocale,
        localizationEnabled: true
    };
}; //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/telemetry/events/serverInit.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serverInit",
    ()=>serverInit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/telemetry/index.js [app-route] (ecmascript)");
;
const serverInit = (payload)=>{
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendEvent"])({
        event: {
            type: 'server-init'
        },
        payload
    });
}; //# sourceMappingURL=serverInit.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/traverseFields.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "traverseFields",
    ()=>traverseFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/config/types.js [app-route] (ecmascript)");
;
const traverseArrayOrBlocksField = ({ callback, callbackStack, config, data, field, fillEmpty, leavesFirst, parentIsLocalized, parentPath, parentRef })=>{
    if (fillEmpty) {
        if (field.type === 'array') {
            traverseFields({
                callback,
                callbackStack,
                config,
                fields: field.fields,
                isTopLevel: false,
                leavesFirst,
                parentIsLocalized: parentIsLocalized || field.localized,
                parentPath: `${parentPath}${field.name}.`,
                parentRef
            });
        }
        if (field.type === 'blocks') {
            for (const _block of field.blockReferences ?? field.blocks){
                // TODO: iterate over blocks mapped to block slug in v4, or pass through payload.blocks
                const block = typeof _block === 'string' ? config?.blocks?.find((b)=>b.slug === _block) : _block;
                if (block) {
                    traverseFields({
                        callback,
                        callbackStack,
                        config,
                        fields: block.fields,
                        isTopLevel: false,
                        leavesFirst,
                        parentIsLocalized: parentIsLocalized || field.localized,
                        parentPath: `${parentPath}${field.name}.`,
                        parentRef
                    });
                }
            }
        }
        return;
    }
    for (const ref of data){
        let fields;
        if (field.type === 'blocks' && typeof ref?.blockType === 'string') {
            // TODO: iterate over blocks mapped to block slug in v4, or pass through payload.blocks
            const block = field.blockReferences ? config?.blocks?.find((b)=>b.slug === ref.blockType) ?? field.blockReferences.find((b)=>typeof b !== 'string' && b.slug === ref.blockType) : field.blocks.find((b)=>b.slug === ref.blockType);
            fields = block?.fields;
        } else if (field.type === 'array') {
            fields = field.fields;
        }
        if (fields) {
            traverseFields({
                callback,
                callbackStack,
                config,
                fields,
                fillEmpty,
                isTopLevel: false,
                leavesFirst,
                parentIsLocalized: parentIsLocalized || field.localized,
                parentPath: `${parentPath}${field.name}.`,
                parentRef,
                ref
            });
        }
    }
};
const traverseFields = ({ callback, callbackStack: _callbackStack = [], config, fields, fillEmpty = true, isTopLevel = true, leavesFirst = false, parentIsLocalized, parentPath = '', parentRef = {}, ref = {} })=>{
    const fieldsMatched = fields.some((field)=>{
        let callbackStack = [];
        if (!isTopLevel) {
            callbackStack = _callbackStack;
        }
        let skip = false;
        const next = ()=>{
            skip = true;
        };
        if (!ref || typeof ref !== 'object') {
            return;
        }
        if (!leavesFirst && callback && callback({
            field,
            next,
            parentIsLocalized: parentIsLocalized,
            parentPath,
            parentRef,
            ref
        })) {
            return true;
        } else if (leavesFirst) {
            callbackStack.push(()=>callback({
                    field,
                    next,
                    parentIsLocalized: parentIsLocalized,
                    parentPath,
                    parentRef,
                    ref
                }));
        }
        if (skip) {
            return false;
        }
        // avoid mutation of ref for all fields
        let currentRef = ref;
        let currentParentRef = parentRef;
        if (field.type === 'tabs' && 'tabs' in field) {
            for (const tab of field.tabs){
                let tabRef = ref;
                if (skip) {
                    return false;
                }
                if ('name' in tab && tab.name) {
                    if (!ref[tab.name] || typeof ref[tab.name] !== 'object') {
                        if (fillEmpty) {
                            if (tab.localized) {
                                ;
                                ref[tab.name] = {
                                    en: {}
                                };
                            } else {
                                ;
                                ref[tab.name] = {};
                            }
                        } else {
                            continue;
                        }
                    }
                    if (callback && !leavesFirst && callback({
                        field: {
                            ...tab,
                            type: 'tab'
                        },
                        next,
                        parentIsLocalized: parentIsLocalized,
                        parentPath,
                        parentRef: currentParentRef,
                        ref: tabRef
                    })) {
                        return true;
                    } else if (leavesFirst) {
                        callbackStack.push(()=>callback({
                                field: {
                                    ...tab,
                                    type: 'tab'
                                },
                                next,
                                parentIsLocalized: parentIsLocalized,
                                parentPath,
                                parentRef: currentParentRef,
                                ref: tabRef
                            }));
                    }
                    tabRef = tabRef[tab.name];
                    if (tab.localized) {
                        for(const key in tabRef){
                            if (tabRef[key] && typeof tabRef[key] === 'object') {
                                traverseFields({
                                    callback,
                                    callbackStack,
                                    config,
                                    fields: tab.fields,
                                    fillEmpty,
                                    isTopLevel: false,
                                    leavesFirst,
                                    parentIsLocalized: true,
                                    parentPath: `${parentPath}${tab.name}.`,
                                    parentRef: currentParentRef,
                                    ref: tabRef[key]
                                });
                            }
                        }
                    }
                } else {
                    if (callback && !leavesFirst && callback({
                        field: {
                            ...tab,
                            type: 'tab'
                        },
                        next,
                        parentIsLocalized: parentIsLocalized,
                        parentPath,
                        parentRef: currentParentRef,
                        ref: tabRef
                    })) {
                        return true;
                    } else if (leavesFirst) {
                        callbackStack.push(()=>callback({
                                field: {
                                    ...tab,
                                    type: 'tab'
                                },
                                next,
                                parentIsLocalized: parentIsLocalized,
                                parentPath,
                                parentRef: currentParentRef,
                                ref: tabRef
                            }));
                    }
                }
                if (!tab.localized) {
                    traverseFields({
                        callback,
                        callbackStack,
                        config,
                        fields: tab.fields,
                        fillEmpty,
                        isTopLevel: false,
                        leavesFirst,
                        parentIsLocalized: false,
                        parentPath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tabHasName"])(tab) ? `${parentPath}${tab.name}` : parentPath,
                        parentRef: currentParentRef,
                        ref: tabRef
                    });
                }
                if (skip) {
                    return false;
                }
            }
            return;
        }
        if (field.type === 'tab' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldHasSubFields"])(field) || field.type === 'blocks') {
            if ('name' in field && field.name) {
                currentParentRef = currentRef;
                if (!ref[field.name]) {
                    if (fillEmpty) {
                        if (field.type === 'group' || field.type === 'tab') {
                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldShouldBeLocalized"])({
                                field,
                                parentIsLocalized: parentIsLocalized
                            })) {
                                ;
                                ref[field.name] = {
                                    en: {}
                                };
                            } else {
                                ;
                                ref[field.name] = {};
                            }
                        } else if (field.type === 'array' || field.type === 'blocks') {
                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldShouldBeLocalized"])({
                                field,
                                parentIsLocalized: parentIsLocalized
                            })) {
                                ;
                                ref[field.name] = {
                                    en: []
                                };
                            } else {
                                ;
                                ref[field.name] = [];
                            }
                        }
                    } else {
                        return;
                    }
                }
                currentRef = ref[field.name];
            }
            if ((field.type === 'tab' || field.type === 'group') && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldShouldBeLocalized"])({
                field,
                parentIsLocalized: parentIsLocalized
            }) && currentRef && typeof currentRef === 'object') {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
                    for(const key in currentRef){
                        if (currentRef[key]) {
                            traverseFields({
                                callback,
                                callbackStack,
                                config,
                                fields: field.fields,
                                fillEmpty,
                                isTopLevel: false,
                                leavesFirst,
                                parentIsLocalized: true,
                                parentPath: field.name ? `${parentPath}${field.name}.` : parentPath,
                                parentRef: currentParentRef,
                                ref: currentRef[key]
                            });
                        }
                    }
                } else {
                    traverseFields({
                        callback,
                        callbackStack,
                        config,
                        fields: field.fields,
                        fillEmpty,
                        isTopLevel: false,
                        leavesFirst,
                        parentIsLocalized,
                        parentRef: currentParentRef,
                        ref: currentRef
                    });
                }
                return;
            }
            if ((field.type === 'blocks' || field.type === 'array') && currentRef && typeof currentRef === 'object') {
                // TODO: `?? field.localized ?? false` shouldn't be necessary, but right now it
                // is so that all fields are correctly traversed in copyToLocale and
                // therefore pass the localization integration tests.
                // I tried replacing the `!parentIsLocalized` condition with `parentIsLocalized === false`
                // in `fieldShouldBeLocalized`, but several tests failed. We must be calling it with incorrect
                // parameters somewhere.
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldShouldBeLocalized"])({
                    field,
                    parentIsLocalized: parentIsLocalized ?? false
                })) {
                    if (Array.isArray(currentRef)) {
                        traverseArrayOrBlocksField({
                            callback,
                            callbackStack,
                            config,
                            data: currentRef,
                            field,
                            fillEmpty,
                            leavesFirst,
                            parentIsLocalized: true,
                            parentPath,
                            parentRef: currentParentRef
                        });
                    } else {
                        for(const key in currentRef){
                            const localeData = currentRef[key];
                            if (!Array.isArray(localeData)) {
                                continue;
                            }
                            traverseArrayOrBlocksField({
                                callback,
                                callbackStack,
                                config,
                                data: localeData,
                                field,
                                fillEmpty,
                                leavesFirst,
                                parentIsLocalized: true,
                                parentPath,
                                parentRef: currentParentRef
                            });
                        }
                    }
                } else if (Array.isArray(currentRef)) {
                    traverseArrayOrBlocksField({
                        callback,
                        callbackStack,
                        config,
                        data: currentRef,
                        field,
                        fillEmpty,
                        leavesFirst,
                        parentIsLocalized: parentIsLocalized,
                        parentPath,
                        parentRef: currentParentRef
                    });
                }
            } else if (currentRef && typeof currentRef === 'object' && 'fields' in field) {
                traverseFields({
                    callback,
                    callbackStack,
                    config,
                    fields: field.fields,
                    fillEmpty,
                    isTopLevel: false,
                    leavesFirst,
                    parentIsLocalized,
                    parentPath: 'name' in field && field.name ? `${parentPath}${field.name}.` : parentPath,
                    parentRef: currentParentRef,
                    ref: currentRef
                });
            }
        }
        if (isTopLevel) {
            callbackStack.reverse().forEach((cb)=>{
                cb();
            });
        }
    });
    // Fallback: Handle dot-notation paths when no fields matched
    if (!fieldsMatched && ref && typeof ref === 'object') {
        Object.keys(ref).forEach((key)=>{
            if (key.includes('.')) {
                // Split on first dot only
                const firstDotIndex = key.indexOf('.');
                const fieldName = key.substring(0, firstDotIndex);
                const remainingPath = key.substring(firstDotIndex + 1);
                // Create nested structure for this field
                if (!ref[fieldName]) {
                    ;
                    ref[fieldName] = {};
                }
                const nestedRef = ref[fieldName];
                // Move the value to the nested structure
                nestedRef[remainingPath] = ref[key];
                delete ref[key];
                // Recursively process the newly created nested structure
                // The field traversal will naturally handle it if the field exists in the schema
                traverseFields({
                    callback,
                    callbackStack: _callbackStack,
                    config,
                    fields,
                    fillEmpty,
                    isTopLevel: false,
                    leavesFirst,
                    parentIsLocalized,
                    parentPath,
                    parentRef,
                    ref
                });
            }
        });
    }
}; //# sourceMappingURL=traverseFields.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/addLocalesToRequest.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addLocalesToRequestFromData",
    ()=>addLocalesToRequestFromData,
    "sanitizeLocales",
    ()=>sanitizeLocales
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeFallbackLocale$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/sanitizeFallbackLocale.js [app-route] (ecmascript)");
;
function addLocalesToRequestFromData(req) {
    const { data, payload: { config } } = req;
    if (data) {
        const localeOnReq = req.locale;
        const fallbackLocaleOnReq = req.fallbackLocale;
        let localeFromData;
        let fallbackLocaleFromData;
        if (!localeOnReq && data?.locale && typeof data.locale === 'string') {
            localeFromData = data.locale;
        }
        if (!fallbackLocaleOnReq) {
            if (data?.['fallback-locale'] && typeof data?.['fallback-locale'] === 'string') {
                fallbackLocaleFromData = data['fallback-locale'];
            }
            if (data?.['fallbackLocale'] && typeof data?.['fallbackLocale'] === 'string') {
                fallbackLocaleFromData = data['fallbackLocale'];
            }
        }
        if (!localeOnReq || !fallbackLocaleOnReq) {
            const { fallbackLocale, locale } = sanitizeLocales({
                fallbackLocale: fallbackLocaleFromData,
                locale: localeFromData,
                localization: config.localization
            });
            if (localeFromData) {
                req.locale = locale;
            }
            if (fallbackLocaleFromData) {
                req.fallbackLocale = fallbackLocale;
            }
        }
    }
}
const sanitizeLocales = ({ fallbackLocale, locale, localization })=>{
    // Check if localization has fallback enabled or if a fallback locale is provided
    if (localization) {
        fallbackLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeFallbackLocale$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeFallbackLocale"])({
            fallbackLocale,
            locale,
            localization
        });
    }
    if ([
        '*',
        'all'
    ].includes(locale)) {
        locale = 'all';
    } else if (localization && !localization.localeCodes.includes(locale) && localization.fallback) {
        locale = localization.defaultLocale;
    }
    return {
        fallbackLocale,
        locale
    };
}; //# sourceMappingURL=addLocalesToRequest.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getRequestLanguage.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRequestLanguage",
    ()=>getRequestLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$70$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$languages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+translations@3.70.0/node_modules/@payloadcms/translations/dist/utilities/languages.js [app-route] (ecmascript)");
;
const getRequestLanguage = ({ config, cookies, headers })=>{
    const supportedLanguageKeys = Object.keys(config.i18n.supportedLanguages);
    const langCookie = cookies.get(`${config.cookiePrefix || 'payload'}-lng`);
    const languageFromCookie = typeof langCookie === 'string' ? langCookie : langCookie?.value;
    if (languageFromCookie && supportedLanguageKeys.includes(languageFromCookie)) {
        return languageFromCookie;
    }
    const languageFromHeader = headers.get('Accept-Language') ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$70$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$languages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extractHeaderLanguage"])(headers.get('Accept-Language')) : undefined;
    if (languageFromHeader && supportedLanguageKeys.includes(languageFromHeader)) {
        return languageFromHeader;
    }
    return config.i18n.fallbackLanguage;
}; //# sourceMappingURL=getRequestLanguage.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/createPayloadRequest.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPayloadRequest",
    ()=>createPayloadRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$70$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$init$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+translations@3.70.0/node_modules/@payloadcms/translations/dist/utilities/init.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$qs$2d$esm$40$7$2e$0$2e$2$2f$node_modules$2f$qs$2d$esm$2f$lib$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/qs-esm@7.0.2/node_modules/qs-esm/lib/parse.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAuthStrategies$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/executeAuthStrategies.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$dataloader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/dataloader.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$addLocalesToRequest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/addLocalesToRequest.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatAdminURL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/formatAdminURL.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getRequestLanguage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getRequestLanguage.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$parseCookies$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/parseCookies.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
const createPayloadRequest = async ({ canSetHeaders, config: configPromise, params, payloadInstanceCacheKey, request })=>{
    const cookies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$parseCookies$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseCookies"])(request.headers);
    const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getPayload"])({
        config: configPromise,
        cron: true,
        key: payloadInstanceCacheKey
    });
    const { config } = payload;
    const localization = config.localization;
    const urlProperties = new URL(request.url);
    const { pathname, searchParams } = urlProperties;
    const isGraphQL = !config.graphQL.disable && pathname === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatAdminURL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatAdminURL"])({
        apiRoute: config.routes.api,
        path: config.routes.graphQL
    });
    const language = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getRequestLanguage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRequestLanguage"])({
        config,
        cookies,
        headers: request.headers
    });
    const i18n = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$70$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$init$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initI18n"])({
        config: config.i18n,
        context: 'api',
        language
    });
    let locale = searchParams.get('locale');
    const { search: queryToParse } = urlProperties;
    const query = queryToParse ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$qs$2d$esm$40$7$2e$0$2e$2$2f$node_modules$2f$qs$2d$esm$2f$lib$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parse"](queryToParse, {
        arrayLimit: 1000,
        depth: 10,
        ignoreQueryPrefix: true
    }) : {};
    const fallbackFromRequest = query.fallbackLocale || searchParams.get('fallback-locale') || searchParams.get('fallbackLocale');
    let fallbackLocale = fallbackFromRequest;
    if (localization) {
        const locales = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$addLocalesToRequest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeLocales"])({
            fallbackLocale: fallbackLocale,
            locale: locale,
            localization
        });
        fallbackLocale = locales.fallbackLocale;
        locale = locales.locale;
    }
    const customRequest = {
        context: {},
        fallbackLocale: fallbackLocale,
        hash: urlProperties.hash,
        host: urlProperties.host,
        href: urlProperties.href,
        i18n,
        locale,
        origin: urlProperties.origin,
        pathname: urlProperties.pathname,
        payload,
        payloadAPI: isGraphQL ? 'GraphQL' : 'REST',
        payloadDataLoader: undefined,
        payloadUploadSizes: {},
        port: urlProperties.port,
        protocol: urlProperties.protocol,
        query,
        routeParams: params || {},
        search: urlProperties.search,
        searchParams: urlProperties.searchParams,
        t: i18n.t,
        transactionID: undefined,
        user: null
    };
    const req = Object.assign(request, customRequest);
    req.payloadDataLoader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$dataloader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDataLoader"])(req);
    const { responseHeaders, user } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAuthStrategies$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeAuthStrategies"])({
        canSetHeaders,
        headers: req.headers,
        isGraphQL,
        payload
    });
    req.user = user;
    if (responseHeaders) {
        req.responseHeaders = responseHeaders;
    }
    return req;
}; //# sourceMappingURL=createPayloadRequest.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/headersWithCors.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "headersWithCors",
    ()=>headersWithCors
]);
const headersWithCors = ({ headers, req })=>{
    const cors = req?.payload?.config.cors;
    const requestOrigin = req?.headers?.get('Origin');
    if (cors) {
        const defaultAllowedHeaders = [
            'Origin',
            'X-Requested-With',
            'Content-Type',
            'Accept',
            'Authorization',
            'Content-Encoding',
            'x-apollo-tracing',
            'X-Payload-HTTP-Method-Override'
        ];
        headers.set('Access-Control-Allow-Methods', 'PUT, PATCH, POST, GET, DELETE, OPTIONS');
        if (typeof cors === 'object' && 'headers' in cors) {
            headers.set('Access-Control-Allow-Headers', [
                ...defaultAllowedHeaders,
                ...cors.headers
            ].filter(Boolean).join(', '));
        } else {
            headers.set('Access-Control-Allow-Headers', defaultAllowedHeaders.join(', '));
        }
        if (cors === '*' || typeof cors === 'object' && 'origins' in cors && cors.origins === '*') {
            headers.set('Access-Control-Allow-Origin', '*');
        } else if (Array.isArray(cors) && cors.indexOf(requestOrigin) > -1 || !Array.isArray(cors) && typeof cors === 'object' && 'origins' in cors && cors.origins.indexOf(requestOrigin) > -1) {
            headers.set('Access-Control-Allow-Credentials', 'true');
            headers.set('Access-Control-Allow-Origin', requestOrigin);
        }
    }
    return headers;
}; //# sourceMappingURL=headersWithCors.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/formatErrors.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatErrors",
    ()=>formatErrors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ValidationError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/ValidationError.js [app-route] (ecmascript)");
;
;
const formatErrors = (incoming)=>{
    if (incoming) {
        // Cannot use `instanceof` to check error type: https://github.com/microsoft/TypeScript/issues/13965
        // Instead, get the prototype of the incoming error and check its constructor name
        const proto = Object.getPrototypeOf(incoming);
        // Payload 'ValidationError' and 'APIError'
        if ((proto.constructor.name === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ValidationError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ValidationErrorName"] || proto.constructor.name === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIErrorName"]) && incoming.data) {
            return {
                errors: [
                    {
                        name: incoming.name,
                        data: incoming.data,
                        message: incoming.message
                    }
                ]
            };
        }
        // Mongoose 'ValidationError': https://mongoosejs.com/docs/api/error.html#Error.ValidationError
        if (proto.constructor.name === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ValidationError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ValidationErrorName"] && 'errors' in incoming && incoming.errors) {
            return {
                errors: Object.keys(incoming.errors).reduce((acc, key)=>{
                    acc.push({
                        field: incoming.errors[key].path,
                        message: incoming.errors[key].message
                    });
                    return acc;
                }, [])
            };
        }
        if (Array.isArray(incoming.message)) {
            return {
                errors: incoming.message
            };
        }
        if (incoming.name) {
            return {
                errors: [
                    {
                        message: incoming.message
                    }
                ]
            };
        }
    }
    return {
        errors: [
            {
                message: 'An unknown error occurred.'
            }
        ]
    };
}; //# sourceMappingURL=formatErrors.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/routeError.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "routeError",
    ()=>routeError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatErrors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/formatErrors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$headersWithCors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/headersWithCors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isErrorPublic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/isErrorPublic.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$logError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/logError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$mergeHeaders$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/mergeHeaders.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
const routeError = async ({ collection, config: configArg, err, req: incomingReq })=>{
    if ('payloadInitError' in err && err.payloadInitError === true) {
        // do not attempt initializing Payload if the error is due to a failed initialization. Otherwise,
        // it will cause an infinite loop of initialization attempts and endless error responses, without
        // actually logging the error, as the error logging code will never be reached.
        console.error(err);
        return Response.json({
            message: 'There was an error initializing Payload'
        }, {
            status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].INTERNAL_SERVER_ERROR
        });
    }
    let payload = incomingReq && 'payload' in incomingReq && incomingReq?.payload;
    if (!payload) {
        try {
            payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getPayload"])({
                config: configArg,
                cron: true
            });
        } catch (ignore) {
            return Response.json({
                message: 'There was an error initializing Payload'
            }, {
                status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].INTERNAL_SERVER_ERROR
            });
        }
    }
    let response = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatErrors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatErrors"])(err);
    let status = err.status || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].INTERNAL_SERVER_ERROR;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$logError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logError"])({
        err,
        payload
    });
    const req = incomingReq;
    req.payload = payload;
    const headers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$headersWithCors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["headersWithCors"])({
        headers: new Headers(),
        req
    });
    const { config } = payload;
    // Internal server errors can contain anything, including potentially sensitive data.
    // Therefore, error details will be hidden from the response unless `config.debug` is `true`
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isErrorPublic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isErrorPublic"])(err, config)) {
        response = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatErrors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatErrors"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]('Something went wrong.'));
    }
    if (config.debug && config.debug === true) {
        response.stack = err.stack;
    }
    if (collection) {
        await collection.config.hooks.afterError?.reduce(async (promise, hook)=>{
            await promise;
            const result = await hook({
                collection: collection.config,
                context: req.context,
                error: err,
                req,
                result: response
            });
            if (result) {
                response = result.response || response;
                status = result.status || status;
            }
        }, Promise.resolve());
    }
    await config.hooks.afterError?.reduce(async (promise, hook)=>{
        await promise;
        const result = await hook({
            collection: collection?.config,
            context: req.context,
            error: err,
            req,
            result: response
        });
        if (result) {
            response = result.response || response;
            status = result.status || status;
        }
    }, Promise.resolve());
    return Response.json(response, {
        headers: req.responseHeaders ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$mergeHeaders$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeHeaders"])(req.responseHeaders, headers) : headers,
        status
    });
}; //# sourceMappingURL=routeError.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/handleEndpoints.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleEndpoints",
    ()=>handleEndpoints
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$path$2d$to$2d$regexp$40$6$2e$3$2e$0$2f$node_modules$2f$path$2d$to$2d$regexp$2f$dist$2e$es2015$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/path-to-regexp@6.3.0/node_modules/path-to-regexp/dist.es2015/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createPayloadRequest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/createPayloadRequest.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatAdminURL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/formatAdminURL.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$headersWithCors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/headersWithCors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$mergeHeaders$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/mergeHeaders.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$routeError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/routeError.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
const notFoundResponse = (req, pathname)=>{
    return Response.json({
        message: `Route not found "${pathname ?? new URL(req.url).pathname}"`
    }, {
        headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$headersWithCors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["headersWithCors"])({
            headers: new Headers(),
            req
        }),
        status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].NOT_FOUND
    });
};
const handleEndpoints = async ({ basePath = '', config: incomingConfig, path, payloadInstanceCacheKey, request })=>{
    let handler;
    let req;
    let collection;
    // This can be used against GET request search params size limit.
    // Instead you can do POST request with a text body as search params.
    // We use this internally for relationships querying on the frontend
    // packages/ui/src/fields/Relationship/index.tsx
    if (request.method.toLowerCase() === 'post' && (request.headers.get('X-Payload-HTTP-Method-Override') === 'GET' || request.headers.get('X-HTTP-Method-Override') === 'GET')) {
        let url = request.url;
        let data = undefined;
        if (request.headers.get('Content-Type') === 'application/x-www-form-urlencoded') {
            const search = await request.text();
            url = `${request.url}?${search}`;
        } else if (request.headers.get('Content-Type') === 'application/json') {
            // May not be supported by every endpoint
            data = await request.json();
            // locale and fallbackLocale is read by createPayloadRequest to populate req.locale and req.fallbackLocale
            // => add to searchParams
            if (data?.locale) {
                url += `?locale=${data.locale}`;
            }
            if (data?.fallbackLocale) {
                url += `&fallbackLocale=${data.depth}`;
            }
        }
        const req = new Request(url, {
            // @ts-expect-error // TODO: check if this is required
            cache: request.cache,
            credentials: request.credentials,
            headers: request.headers,
            method: 'GET',
            signal: request.signal
        });
        if (data) {
            // @ts-expect-error attach data to request - less overhead than using urlencoded
            req.data = data;
        }
        const response = await handleEndpoints({
            basePath,
            config: incomingConfig,
            path,
            payloadInstanceCacheKey,
            request: req
        });
        return response;
    }
    try {
        req = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createPayloadRequest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createPayloadRequest"])({
            canSetHeaders: true,
            config: incomingConfig,
            payloadInstanceCacheKey,
            request
        });
        if (req.method?.toLowerCase() === 'options') {
            return Response.json({}, {
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$headersWithCors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["headersWithCors"])({
                    headers: new Headers(),
                    req
                }),
                status: 200
            });
        }
        const { payload } = req;
        const { config } = payload;
        const pathname = path ?? new URL(req.url).pathname;
        const baseAPIPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatAdminURL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatAdminURL"])({
            apiRoute: config.routes.api,
            path: ''
        });
        if (!pathname.startsWith(baseAPIPath)) {
            return notFoundResponse(req, pathname);
        }
        // /api/posts/route -> /posts/route
        let adjustedPathname = pathname.replace(baseAPIPath, '');
        let isGlobals = false;
        // /globals/header/route -> /header/route
        if (adjustedPathname.startsWith('/globals')) {
            isGlobals = true;
            adjustedPathname = adjustedPathname.replace('/globals', '');
        }
        const segments = adjustedPathname.split('/');
        // remove empty string first element
        segments.shift();
        const firstParam = segments[0];
        let globalConfig;
        // first param can be a global slug or collection slug, find the relevant config
        if (firstParam) {
            if (isGlobals) {
                globalConfig = payload.globals.config.find((each)=>each.slug === firstParam);
            } else if (payload.collections[firstParam]) {
                collection = payload.collections[firstParam];
            }
        }
        let endpoints = config.endpoints;
        if (collection) {
            endpoints = collection.config.endpoints;
            // /posts/route -> /route
            adjustedPathname = adjustedPathname.replace(`/${collection.config.slug}`, '');
        } else if (globalConfig) {
            // /header/route -> /route
            adjustedPathname = adjustedPathname.replace(`/${globalConfig.slug}`, '');
            endpoints = globalConfig.endpoints;
        }
        // sanitize when endpoint.path is '/'
        if (adjustedPathname === '') {
            adjustedPathname = '/';
        }
        if (endpoints === false) {
            return Response.json({
                message: `Cannot ${req.method?.toUpperCase()} ${req.url}`
            }, {
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$headersWithCors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["headersWithCors"])({
                    headers: new Headers(),
                    req
                }),
                status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].NOT_IMPLEMENTED
            });
        }
        // Find the relevant endpoint configuration
        const endpoint = endpoints?.find((endpoint)=>{
            if (endpoint.method !== req.method?.toLowerCase()) {
                return false;
            }
            const pathMatchFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$path$2d$to$2d$regexp$40$6$2e$3$2e$0$2f$node_modules$2f$path$2d$to$2d$regexp$2f$dist$2e$es2015$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["match"])(endpoint.path, {
                decode: decodeURIComponent
            });
            const matchResult = pathMatchFn(adjustedPathname);
            if (!matchResult) {
                return false;
            }
            req.routeParams = matchResult.params;
            // Inject to routeParams the slug as well so it can be used later
            if (collection) {
                req.routeParams.collection = collection.config.slug;
            } else if (globalConfig) {
                req.routeParams.global = globalConfig.slug;
            }
            return true;
        });
        if (endpoint) {
            handler = endpoint.handler;
        }
        if (!handler) {
            return notFoundResponse(req, pathname);
        }
        const response = await handler(req);
        return new Response(response.body, {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$headersWithCors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["headersWithCors"])({
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$mergeHeaders$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeHeaders"])(req.responseHeaders ?? new Headers(), response.headers),
                req
            }),
            status: response.status,
            statusText: response.statusText
        });
    } catch (_err) {
        const err = _err;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$routeError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["routeError"])({
            collection,
            config: incomingConfig,
            err,
            req: req
        });
    }
}; //# sourceMappingURL=handleEndpoints.js.map
}),
];

//# sourceMappingURL=1c115_payload_dist_utilities_726024a6._.js.map