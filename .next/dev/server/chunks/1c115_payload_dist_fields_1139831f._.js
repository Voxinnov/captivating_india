module.exports = [
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/config/types.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s([
    "fieldAffectsData",
    ()=>fieldAffectsData,
    "fieldHasMaxDepth",
    ()=>fieldHasMaxDepth,
    "fieldHasSubFields",
    ()=>fieldHasSubFields,
    "fieldIsArrayType",
    ()=>fieldIsArrayType,
    "fieldIsBlockType",
    ()=>fieldIsBlockType,
    "fieldIsGroupType",
    ()=>fieldIsGroupType,
    "fieldIsHiddenOrDisabled",
    ()=>fieldIsHiddenOrDisabled,
    "fieldIsID",
    ()=>fieldIsID,
    "fieldIsLocalized",
    ()=>fieldIsLocalized,
    "fieldIsPresentationalOnly",
    ()=>fieldIsPresentationalOnly,
    "fieldIsSidebar",
    ()=>fieldIsSidebar,
    "fieldIsVirtual",
    ()=>fieldIsVirtual,
    "fieldShouldBeLocalized",
    ()=>fieldShouldBeLocalized,
    "fieldSupportsMany",
    ()=>fieldSupportsMany,
    "groupHasName",
    ()=>groupHasName,
    "optionIsObject",
    ()=>optionIsObject,
    "optionIsValue",
    ()=>optionIsValue,
    "optionsAreObjects",
    ()=>optionsAreObjects,
    "tabHasName",
    ()=>tabHasName,
    "valueIsValueWithRelation",
    ()=>valueIsValueWithRelation
]);
function valueIsValueWithRelation(value) {
    return value !== null && typeof value === 'object' && 'relationTo' in value && 'value' in value;
}
function fieldHasSubFields(field) {
    return field.type === 'group' || field.type === 'array' || field.type === 'row' || field.type === 'collapsible';
}
function fieldIsArrayType(field) {
    return field.type === 'array';
}
function fieldIsBlockType(field) {
    return field.type === 'blocks';
}
function fieldIsGroupType(field) {
    return field.type === 'group';
}
function optionIsObject(option) {
    return typeof option === 'object';
}
function optionsAreObjects(options) {
    return Array.isArray(options) && typeof options?.[0] === 'object';
}
function optionIsValue(option) {
    return typeof option === 'string';
}
function fieldSupportsMany(field) {
    return field.type === 'select' || field.type === 'relationship' || field.type === 'upload';
}
function fieldHasMaxDepth(field) {
    return (field.type === 'upload' || field.type === 'relationship' || field.type === 'join') && typeof field.maxDepth === 'number';
}
function fieldIsPresentationalOnly(field) {
    return field.type === 'ui';
}
function fieldIsSidebar(field) {
    return 'admin' in field && 'position' in field.admin && field.admin.position === 'sidebar';
}
function fieldIsID(field) {
    return 'name' in field && field.name === 'id';
}
function fieldIsHiddenOrDisabled(field) {
    return 'hidden' in field && field.hidden || 'admin' in field && 'disabled' in field.admin && field.admin.disabled;
}
function fieldAffectsData(field) {
    return 'name' in field && !fieldIsPresentationalOnly(field);
}
function tabHasName(tab) {
    return 'name' in tab;
}
function groupHasName(group) {
    return 'name' in group;
}
function fieldIsLocalized(field) {
    return 'localized' in field && field.localized;
}
function fieldShouldBeLocalized({ field, parentIsLocalized }) {
    return 'localized' in field && field.localized && (!parentIsLocalized || process.env.NEXT_PUBLIC_PAYLOAD_COMPATIBILITY_allowLocalizedWithinLocalized === 'true');
}
function fieldIsVirtual(field) {
    return 'virtual' in field && Boolean(field.virtual);
} //# sourceMappingURL=types.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/getDefaultValue.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultValue",
    ()=>getDefaultValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/deepCopyObject.js [app-route] (ecmascript)");
;
const getDefaultValue = async ({ defaultValue, locale, req, user, value })=>{
    if (typeof value !== 'undefined') {
        return value;
    }
    if (defaultValue && typeof defaultValue === 'function') {
        return await defaultValue({
            locale,
            req,
            user
        });
    }
    if (typeof defaultValue === 'object') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(defaultValue);
    }
    return defaultValue;
}; //# sourceMappingURL=getDefaultValue.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/getFieldPaths.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFieldPaths",
    ()=>getFieldPaths,
    "getFieldPathsModified",
    ()=>getFieldPathsModified
]);
function getFieldPaths({ field, index, parentIndexPath, parentPath, parentSchemaPath }) {
    if ('name' in field) {
        return {
            indexPath: `${parentIndexPath ? parentIndexPath + '-' : ''}${index}`,
            path: `${parentPath ? parentPath + '.' : ''}${field.name}`,
            schemaPath: `${parentSchemaPath ? parentSchemaPath + '.' : ''}${field.name}`
        };
    }
    const indexSuffix = `_index-${`${parentIndexPath ? parentIndexPath + '-' : ''}${index}`}`;
    return {
        indexPath: `${parentIndexPath ? parentIndexPath + '-' : ''}${index}`,
        path: `${parentPath ? parentPath + '.' : ''}${indexSuffix}`,
        schemaPath: `${parentSchemaPath ? parentSchemaPath + '.' : ''}${indexSuffix}`
    };
}
function getFieldPathsModified({ field, index, parentIndexPath, parentPath, parentSchemaPath }) {
    const parentPathSegments = parentPath.split('.');
    const parentIsUnnamed = parentPathSegments[parentPathSegments.length - 1].startsWith('_index-');
    const parentWithoutIndex = parentIsUnnamed ? parentPathSegments.slice(0, -1).join('.') : parentPath;
    const parentPathToUse = parentIsUnnamed ? parentWithoutIndex : parentPath;
    if ('name' in field) {
        return {
            indexPath: '',
            path: `${parentPathToUse ? parentPathToUse + '.' : ''}${field.name}`,
            schemaPath: `${parentSchemaPath ? parentSchemaPath + '.' : ''}${field.name}`
        };
    }
    const indexSuffix = `_index-${`${parentIndexPath ? parentIndexPath + '-' : ''}${index}`}`;
    return {
        indexPath: `${parentIndexPath ? parentIndexPath + '-' : ''}${index}`,
        path: `${parentPathToUse ? parentPathToUse + '.' : ''}${indexSuffix}`,
        schemaPath: `${!parentIsUnnamed && parentSchemaPath ? parentSchemaPath + '.' : ''}${indexSuffix}`
    };
} //# sourceMappingURL=getFieldPaths.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterRead/relationshipPopulationPromise.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "relationshipPopulationPromise",
    ()=>relationshipPopulationPromise
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$dataloader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/dataloader.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/config/types.js [app-route] (ecmascript)");
;
;
// TODO: this function is mess, refactor logic
const populate = async ({ currentDepth, data, dataReference, depth, draft, fallbackLocale, field, index, key, locale, overrideAccess, populateArg, req, showHiddenFields })=>{
    const dataToUpdate = dataReference;
    let relation;
    if (field.type === 'join') {
        relation = Array.isArray(field.collection) ? data.relationTo : field.collection;
    } else {
        relation = Array.isArray(field.relationTo) ? data.relationTo : field.relationTo;
    }
    const relatedCollection = req.payload.collections[relation];
    if (relatedCollection) {
        let id;
        if (field.type === 'join' && Array.isArray(field.collection)) {
            id = data.value;
        } else if (field.type !== 'join' && Array.isArray(field.relationTo)) {
            id = data.value;
        } else {
            id = data;
        }
        let relationshipValue;
        const shouldPopulate = depth && currentDepth <= depth;
        if (typeof id !== 'string' && typeof id !== 'number' && typeof id?.toString === 'function' && typeof id !== 'object') {
            id = id.toString();
        }
        if (shouldPopulate) {
            relationshipValue = await req.payloadDataLoader.load((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$dataloader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDataloaderCacheKey"])({
                collectionSlug: relatedCollection.config.slug,
                currentDepth: currentDepth + 1,
                depth,
                docID: id,
                draft,
                fallbackLocale: fallbackLocale,
                locale: locale,
                overrideAccess,
                populate: populateArg,
                select: populateArg?.[relatedCollection.config.slug] ?? relatedCollection.config.defaultPopulate,
                showHiddenFields,
                transactionID: req.transactionID
            }));
        }
        if (!relationshipValue) {
            // ids are visible regardless of access controls
            relationshipValue = id;
        }
        if (typeof index === 'number' && typeof key === 'string') {
            if (field.type !== 'join' && Array.isArray(field.relationTo)) {
                dataToUpdate[field.name][key][index].value = relationshipValue;
            } else {
                if (field.type === 'join' && Array.isArray(field.collection)) {
                    dataToUpdate[field.name][key][index].value = relationshipValue;
                } else {
                    dataToUpdate[field.name][key][index] = relationshipValue;
                }
            }
        } else if (typeof index === 'number' || typeof key === 'string') {
            if (field.type === 'join') {
                if (!Array.isArray(field.collection)) {
                    dataToUpdate[field.name].docs[index ?? key] = relationshipValue;
                } else {
                    dataToUpdate[field.name].docs[index ?? key].value = relationshipValue;
                }
            } else if (Array.isArray(field.relationTo)) {
                dataToUpdate[field.name][index ?? key].value = relationshipValue;
            } else {
                dataToUpdate[field.name][index ?? key] = relationshipValue;
            }
        } else if (field.type !== 'join' && Array.isArray(field.relationTo)) {
            dataToUpdate[field.name].value = relationshipValue;
        } else {
            if (field.type === 'join' && Array.isArray(field.collection)) {
                dataToUpdate[field.name].value = relationshipValue;
            } else {
                dataToUpdate[field.name] = relationshipValue;
            }
        }
    }
};
const relationshipPopulationPromise = async ({ currentDepth, depth, draft, fallbackLocale, field, locale, overrideAccess, parentIsLocalized, populate: populateArg, req, showHiddenFields, siblingDoc })=>{
    const resultingDoc = siblingDoc;
    const populateDepth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldHasMaxDepth"])(field) && field.maxDepth < depth ? field.maxDepth : depth;
    const rowPromises = [];
    if (field.type === 'join' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldSupportsMany"])(field) && field.hasMany) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldShouldBeLocalized"])({
            field,
            parentIsLocalized
        }) && locale === 'all' && typeof siblingDoc[field.name] === 'object' && siblingDoc[field.name] !== null) {
            Object.keys(siblingDoc[field.name]).forEach((localeKey)=>{
                if (Array.isArray(siblingDoc[field.name][localeKey])) {
                    siblingDoc[field.name][localeKey].forEach((_relatedDoc, index)=>{
                        const rowPromise = async ()=>{
                            await populate({
                                currentDepth,
                                data: siblingDoc[field.name][localeKey][index],
                                dataReference: resultingDoc,
                                depth: populateDepth,
                                draft,
                                fallbackLocale,
                                field,
                                index,
                                key: localeKey,
                                locale,
                                overrideAccess,
                                populateArg,
                                req,
                                showHiddenFields
                            });
                        };
                        rowPromises.push(rowPromise());
                    });
                }
            });
        } else if (Array.isArray(siblingDoc[field.name]) || Array.isArray(siblingDoc[field.name]?.docs)) {
            ;
            (Array.isArray(siblingDoc[field.name]) ? siblingDoc[field.name] : siblingDoc[field.name].docs).forEach((relatedDoc, index)=>{
                const rowPromise = async ()=>{
                    if (relatedDoc) {
                        await populate({
                            currentDepth,
                            data: !(field.type === 'join' && Array.isArray(field.collection)) && relatedDoc?.id ? relatedDoc.id : relatedDoc,
                            dataReference: resultingDoc,
                            depth: populateDepth,
                            draft,
                            fallbackLocale,
                            field,
                            index,
                            locale,
                            overrideAccess,
                            populateArg,
                            req,
                            showHiddenFields
                        });
                    }
                };
                rowPromises.push(rowPromise());
            });
        }
    } else if (field.localized && locale === 'all' && typeof siblingDoc[field.name] === 'object' && siblingDoc[field.name] !== null) {
        Object.keys(siblingDoc[field.name]).forEach((localeKey)=>{
            const rowPromise = async ()=>{
                await populate({
                    currentDepth,
                    data: siblingDoc[field.name][localeKey],
                    dataReference: resultingDoc,
                    depth: populateDepth,
                    draft,
                    fallbackLocale,
                    field,
                    key: localeKey,
                    locale,
                    overrideAccess,
                    populateArg,
                    req,
                    showHiddenFields
                });
            };
            rowPromises.push(rowPromise());
        });
        await Promise.all(rowPromises);
    } else if (siblingDoc[field.name]) {
        await populate({
            currentDepth,
            data: siblingDoc[field.name],
            dataReference: resultingDoc,
            depth: populateDepth,
            draft,
            fallbackLocale,
            field,
            locale,
            overrideAccess,
            populateArg,
            req,
            showHiddenFields
        });
    }
    await Promise.all(rowPromises);
}; //# sourceMappingURL=relationshipPopulationPromise.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterRead/virtualFieldPopulationPromise.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "virtualFieldPopulationPromise",
    ()=>virtualFieldPopulationPromise
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$dataloader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/dataloader.js [app-route] (ecmascript)");
;
const virtualFieldPopulationPromise = async ({ name, draft, fallbackLocale, fields, hasMany, locale, overrideAccess, ref, req, segments, showHiddenFields, siblingDoc })=>{
    const currentSegment = segments.shift();
    if (!currentSegment) {
        return;
    }
    const currentValue = ref[currentSegment];
    if (typeof currentValue === 'undefined') {
        return;
    }
    // Final step
    if (segments.length === 0) {
        if (hasMany) {
            if (!Array.isArray(siblingDoc[name])) {
                siblingDoc[name] = [];
            }
            ;
            siblingDoc[name].push(currentValue);
        } else {
            siblingDoc[name] = currentValue;
        }
        return;
    }
    const currentField = fields.find((each)=>each.name === currentSegment);
    if (!currentField) {
        return;
    }
    if (currentField.type === 'group' || currentField.type === 'tab') {
        if (!currentValue || typeof currentValue !== 'object') {
            return;
        }
        return virtualFieldPopulationPromise({
            name,
            draft,
            fallbackLocale,
            fields: currentField.flattenedFields,
            locale,
            overrideAccess,
            ref: currentValue,
            req,
            segments,
            showHiddenFields,
            siblingDoc
        });
    }
    if ((currentField.type === 'relationship' || currentField.type === 'upload') && typeof currentField.relationTo === 'string') {
        const select = {};
        let currentSelectRef = select;
        const currentFields = req.payload.collections[currentField.relationTo]?.config.flattenedFields;
        for(let i = 0; i < segments.length; i++){
            const field = currentFields?.find((each)=>each.name === segments[i]);
            const shouldBreak = i === segments.length - 1 || field?.type === 'relationship' || field?.type === 'upload';
            currentSelectRef[segments[i]] = shouldBreak ? true : {};
            currentSelectRef = currentSelectRef[segments[i]];
            if (shouldBreak) {
                break;
            }
        }
        if (currentField.hasMany) {
            if (!Array.isArray(currentValue)) {
                return;
            }
            const docIDs = currentValue.map((e)=>{
                if (!e) {
                    return null;
                }
                if (typeof e === 'object') {
                    return e.id;
                }
                return e;
            }).filter((e)=>typeof e === 'string' || typeof e === 'number');
            if (segments[0] === 'id' && segments.length === 0) {
                siblingDoc[name] = docIDs;
                return;
            }
            const collectionSlug = currentField.relationTo;
            const populatedDocs = await Promise.all(docIDs.map((docID)=>{
                return req.payloadDataLoader.load((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$dataloader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDataloaderCacheKey"])({
                    collectionSlug,
                    currentDepth: 0,
                    depth: 0,
                    docID,
                    draft,
                    fallbackLocale,
                    locale,
                    overrideAccess,
                    select,
                    showHiddenFields,
                    transactionID: req.transactionID
                }));
            }));
            for (const doc of populatedDocs){
                if (!doc) {
                    continue;
                }
                await virtualFieldPopulationPromise({
                    name,
                    draft,
                    fallbackLocale,
                    fields: req.payload.collections[currentField.relationTo].config.flattenedFields,
                    hasMany: true,
                    locale,
                    overrideAccess,
                    ref: doc,
                    req,
                    segments: [
                        ...segments
                    ],
                    showHiddenFields,
                    siblingDoc
                });
            }
            return;
        }
        let docID;
        if (typeof currentValue === 'object' && currentValue) {
            docID = currentValue.id;
        } else {
            docID = currentValue;
        }
        if (segments[0] === 'id' && segments.length === 0) {
            siblingDoc[name] = docID;
            return;
        }
        if (typeof docID !== 'string' && typeof docID !== 'number') {
            return;
        }
        const populatedDoc = await req.payloadDataLoader.load((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$dataloader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDataloaderCacheKey"])({
            collectionSlug: currentField.relationTo,
            currentDepth: 0,
            depth: 0,
            docID,
            draft,
            fallbackLocale,
            locale,
            overrideAccess,
            select,
            showHiddenFields,
            transactionID: req.transactionID
        }));
        if (!populatedDoc) {
            return;
        }
        return virtualFieldPopulationPromise({
            name,
            draft,
            fallbackLocale,
            fields: req.payload.collections[currentField.relationTo].config.flattenedFields,
            hasMany,
            locale,
            overrideAccess,
            ref: populatedDoc,
            req,
            segments,
            showHiddenFields,
            siblingDoc
        });
    }
}; //# sourceMappingURL=virtualFieldPopulationPromise.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterRead/promise.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "promise",
    ()=>promise
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/MissingEditorProp.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getBlockSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getBlockSelect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$stripUnselectedFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/stripUnselectedFields.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/config/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getDefaultValue$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/getDefaultValue.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getFieldPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/getFieldPaths.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$relationshipPopulationPromise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterRead/relationshipPopulationPromise.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterRead/traverseFields.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$virtualFieldPopulationPromise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterRead/virtualFieldPopulationPromise.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
const promise = async ({ blockData, collection, context, currentDepth, depth, doc, draft, fallbackLocale, field, fieldIndex, fieldPromises, findMany, flattenLocales, global, locale, overrideAccess, parentIndexPath, parentIsLocalized, parentPath, parentSchemaPath, populate, populationPromises, req, select, selectMode, showHiddenFields, siblingDoc, siblingFields, triggerAccessControl = true, triggerHooks = true })=>{
    const { indexPath, path, schemaPath } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getFieldPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFieldPathsModified"])({
        field,
        index: fieldIndex,
        parentIndexPath,
        parentPath,
        parentSchemaPath
    });
    const fieldAffectsDataResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field);
    const pathSegments = path ? path.split('.') : [];
    const schemaPathSegments = schemaPath ? schemaPath.split('.') : [];
    const indexPathSegments = indexPath ? indexPath.split('-').filter(Boolean)?.map(Number) : [];
    let removedFieldValue = false;
    if (fieldAffectsDataResult && field.hidden && typeof siblingDoc[field.name] !== 'undefined' && !showHiddenFields) {
        removedFieldValue = true;
        delete siblingDoc[field.name];
    }
    if (path !== 'id') {
        const shouldContinue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$stripUnselectedFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stripUnselectedFields"])({
            field,
            select: select,
            selectMode: selectMode,
            siblingDoc
        });
        if (!shouldContinue) {
            return;
        }
    }
    const shouldLocalizeField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldShouldBeLocalized"])({
        field,
        parentIsLocalized: parentIsLocalized
    });
    const shouldHoistLocalizedValue = Boolean(flattenLocales && fieldAffectsDataResult && typeof siblingDoc[field.name] === 'object' && siblingDoc[field.name] !== null && shouldLocalizeField && locale !== 'all' && req.payload.config.localization);
    if (fieldAffectsDataResult && shouldHoistLocalizedValue) {
        // replace actual value with localized value before sanitizing
        // { [locale]: fields } -> fields
        const value = siblingDoc[field.name][locale];
        let hoistedValue = value;
        if (fallbackLocale && fallbackLocale !== locale) {
            let fallbackValue;
            const isNullOrUndefined = typeof value === 'undefined' || value === null;
            if (Array.isArray(fallbackLocale)) {
                for (const locale of fallbackLocale){
                    const val = siblingDoc[field.name]?.[locale];
                    if (val !== undefined && val !== null && val !== '') {
                        fallbackValue = val;
                        break;
                    }
                }
            } else {
                fallbackValue = siblingDoc[field.name][fallbackLocale];
            }
            if (fallbackValue) {
                switch(field.type){
                    case 'text':
                    case 'textarea':
                        {
                            if (value === '' || isNullOrUndefined) {
                                hoistedValue = fallbackValue;
                            }
                            break;
                        }
                    default:
                        {
                            if (isNullOrUndefined) {
                                hoistedValue = fallbackValue;
                            }
                            break;
                        }
                }
            }
        }
        siblingDoc[field.name] = hoistedValue;
    }
    // Sanitize outgoing field value
    switch(field.type){
        case 'group':
            {
                // Fill groups with empty objects so fields with hooks within groups can populate
                // themselves virtually as necessary
                if (fieldAffectsDataResult && typeof siblingDoc[field.name] === 'undefined') {
                    siblingDoc[field.name] = {};
                }
                break;
            }
        case 'point':
            {
                const pointDoc = siblingDoc[field.name];
                if (Array.isArray(pointDoc?.coordinates) && pointDoc.coordinates.length === 2) {
                    siblingDoc[field.name] = pointDoc.coordinates;
                } else {
                    siblingDoc[field.name] = undefined;
                }
                break;
            }
        case 'richText':
            {
                if (!field?.editor) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MissingEditorProp"](field) // while we allow disabling editor functionality, you should not have any richText fields defined if you do not have an editor
                    ;
                }
                if (typeof field?.editor === 'function') {
                    throw new Error('Attempted to access unsanitized rich text editor.');
                }
                break;
            }
        case 'tabs':
            {
                field.tabs.forEach((tab)=>{
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tabHasName"])(tab) && (typeof siblingDoc[tab.name] === 'undefined' || siblingDoc[tab.name] === null)) {
                        siblingDoc[tab.name] = {};
                    }
                });
                break;
            }
        default:
            {
                break;
            }
    }
    // If locale is `all`, siblingDoc[field.name] will be an object mapping locales to values - locales won't be flattened.
    // In this case, run the hook for each locale and value pair
    const shouldRunHookOnAllLocales = locale === 'all' && 'name' in field && typeof field.name === 'string' && // If localized values were hoisted, siblingDoc[field.name] will not be an object mapping locales to values
    // => Object.entries(siblingDoc[field.name]) will be the value of a single locale, not all locales
    // => do not run the hook for each locale
    !shouldHoistLocalizedValue && shouldLocalizeField && typeof siblingDoc[field.name] === 'object';
    if (fieldAffectsDataResult) {
        // Execute hooks
        if (triggerHooks && 'hooks' in field && field.hooks?.afterRead) {
            for (const hook of field.hooks.afterRead){
                if (shouldRunHookOnAllLocales) {
                    const localesAndValues = Object.entries(siblingDoc[field.name]);
                    await Promise.all(localesAndValues.map(async ([localeKey, value])=>{
                        const hookedValue = await hook({
                            blockData,
                            collection,
                            context,
                            currentDepth,
                            data: doc,
                            depth,
                            draft,
                            field,
                            findMany,
                            global,
                            indexPath: indexPathSegments,
                            operation: 'read',
                            originalDoc: doc,
                            overrideAccess,
                            path: pathSegments,
                            req,
                            schemaPath: schemaPathSegments,
                            showHiddenFields,
                            siblingData: siblingDoc,
                            siblingFields: siblingFields,
                            value
                        });
                        if (hookedValue !== undefined) {
                            siblingDoc[field.name][localeKey] = hookedValue;
                        }
                    }));
                } else {
                    const hookedValue = await hook({
                        blockData,
                        collection,
                        context,
                        currentDepth,
                        data: doc,
                        depth,
                        draft,
                        field,
                        findMany,
                        global,
                        indexPath: indexPathSegments,
                        operation: 'read',
                        originalDoc: doc,
                        overrideAccess,
                        path: pathSegments,
                        req,
                        schemaPath: schemaPathSegments,
                        showHiddenFields,
                        siblingData: siblingDoc,
                        siblingFields: siblingFields,
                        value: siblingDoc[field.name]
                    });
                    if (hookedValue !== undefined) {
                        siblingDoc[field.name] = hookedValue;
                    }
                }
            }
        }
        if ('virtual' in field && typeof field.virtual === 'string' && (!field.hidden || showHiddenFields)) {
            populationPromises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$virtualFieldPopulationPromise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["virtualFieldPopulationPromise"])({
                name: field.name,
                draft,
                fallbackLocale: fallbackLocale,
                fields: (collection || global).flattenedFields,
                locale: locale,
                overrideAccess,
                ref: doc,
                req,
                segments: field.virtual.split('.'),
                showHiddenFields,
                siblingDoc
            }));
        }
        // Execute access control
        let allowDefaultValue = true;
        if (triggerAccessControl && field.access && field.access.read) {
            const canReadField = overrideAccess ? true : await field.access.read({
                id: doc.id,
                blockData,
                data: doc,
                doc,
                req,
                siblingData: siblingDoc
            });
            if (!canReadField) {
                allowDefaultValue = false;
                delete siblingDoc[field.name];
            }
        }
        // Set defaultValue on the field for globals being returned without being first created
        // or collection documents created prior to having a default.
        if (!removedFieldValue && allowDefaultValue && typeof siblingDoc[field.name] === 'undefined' && typeof field.defaultValue !== 'undefined') {
            siblingDoc[field.name] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getDefaultValue$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDefaultValue"])({
                defaultValue: field.defaultValue,
                locale: locale,
                req,
                user: req.user,
                value: siblingDoc[field.name]
            });
        }
        if (field.type === 'relationship' || field.type === 'upload' || field.type === 'join') {
            populationPromises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$relationshipPopulationPromise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["relationshipPopulationPromise"])({
                currentDepth,
                depth,
                draft,
                fallbackLocale,
                field,
                locale,
                overrideAccess,
                parentIsLocalized: parentIsLocalized,
                populate,
                req,
                showHiddenFields,
                siblingDoc
            }));
        }
    }
    switch(field.type){
        case 'array':
            {
                const rows = siblingDoc[field.name];
                let arraySelect = select?.[field.name];
                if (selectMode === 'include' && typeof arraySelect === 'object') {
                    arraySelect = {
                        ...arraySelect,
                        id: true
                    };
                }
                if (Array.isArray(rows) && rows.length > 0) {
                    rows.forEach((row, rowIndex)=>{
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                            blockData,
                            collection,
                            context,
                            currentDepth,
                            depth,
                            doc,
                            draft,
                            fallbackLocale,
                            fieldPromises,
                            fields: field.fields,
                            findMany,
                            flattenLocales,
                            global,
                            locale,
                            overrideAccess,
                            parentIndexPath: '',
                            parentIsLocalized: parentIsLocalized || field.localized,
                            parentPath: path + '.' + rowIndex,
                            parentSchemaPath: schemaPath,
                            populate,
                            populationPromises,
                            req,
                            select: typeof arraySelect === 'object' ? arraySelect : undefined,
                            selectMode,
                            showHiddenFields,
                            siblingDoc: row || {},
                            triggerAccessControl,
                            triggerHooks
                        });
                    });
                } else if (!shouldHoistLocalizedValue && typeof rows === 'object' && rows !== null) {
                    Object.values(rows).forEach((localeRows)=>{
                        if (Array.isArray(localeRows)) {
                            localeRows.forEach((row, rowIndex)=>{
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                                    blockData,
                                    collection,
                                    context,
                                    currentDepth,
                                    depth,
                                    doc,
                                    draft,
                                    fallbackLocale,
                                    fieldPromises,
                                    fields: field.fields,
                                    findMany,
                                    flattenLocales,
                                    global,
                                    locale,
                                    overrideAccess,
                                    parentIndexPath: '',
                                    parentIsLocalized: parentIsLocalized || field.localized,
                                    parentPath: path + '.' + rowIndex,
                                    parentSchemaPath: schemaPath,
                                    populate,
                                    populationPromises,
                                    req,
                                    showHiddenFields,
                                    siblingDoc: row || {},
                                    triggerAccessControl,
                                    triggerHooks
                                });
                            });
                        }
                    });
                } else if (shouldHoistLocalizedValue && (!rows || rows.length === 0)) {
                    siblingDoc[field.name] = null;
                } else if (field.hidden !== true || showHiddenFields === true) {
                    siblingDoc[field.name] = [];
                }
                break;
            }
        case 'blocks':
            {
                const rows = siblingDoc[field.name];
                if (Array.isArray(rows) && rows.length > 0) {
                    rows.forEach((row, rowIndex)=>{
                        const blockTypeToMatch = row.blockType;
                        const block = req.payload.blocks[blockTypeToMatch] ?? (field.blockReferences ?? field.blocks).find((curBlock)=>typeof curBlock !== 'string' && curBlock.slug === blockTypeToMatch);
                        const { blockSelect, blockSelectMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getBlockSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBlockSelect"])({
                            block: block,
                            // TODO: fix this
                            // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                            select: select?.[field.name],
                            selectMode: selectMode
                        });
                        if (block) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                                blockData: row,
                                collection,
                                context,
                                currentDepth,
                                depth,
                                doc,
                                draft,
                                fallbackLocale,
                                fieldPromises,
                                fields: block.fields,
                                findMany,
                                flattenLocales,
                                global,
                                locale,
                                overrideAccess,
                                parentIndexPath: '',
                                parentIsLocalized: parentIsLocalized || field.localized,
                                parentPath: path + '.' + rowIndex,
                                parentSchemaPath: schemaPath + '.' + block.slug,
                                populate,
                                populationPromises,
                                req,
                                select: typeof blockSelect === 'object' ? blockSelect : undefined,
                                selectMode: blockSelectMode,
                                showHiddenFields,
                                siblingDoc: row || {},
                                triggerAccessControl,
                                triggerHooks
                            });
                        }
                    });
                } else if (!shouldHoistLocalizedValue && typeof rows === 'object' && rows !== null) {
                    Object.values(rows).forEach((localeRows)=>{
                        if (Array.isArray(localeRows)) {
                            localeRows.forEach((row, rowIndex)=>{
                                const blockTypeToMatch = row.blockType;
                                const block = req.payload.blocks[blockTypeToMatch] ?? (field.blockReferences ?? field.blocks).find((curBlock)=>typeof curBlock !== 'string' && curBlock.slug === blockTypeToMatch);
                                if (block) {
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                                        blockData: row,
                                        collection,
                                        context,
                                        currentDepth,
                                        depth,
                                        doc,
                                        draft,
                                        fallbackLocale,
                                        fieldPromises,
                                        fields: block.fields,
                                        findMany,
                                        flattenLocales,
                                        global,
                                        locale,
                                        overrideAccess,
                                        parentIndexPath: '',
                                        parentIsLocalized: parentIsLocalized || field.localized,
                                        parentPath: path + '.' + rowIndex,
                                        parentSchemaPath: schemaPath + '.' + block.slug,
                                        populate,
                                        populationPromises,
                                        req,
                                        showHiddenFields,
                                        siblingDoc: row || {},
                                        triggerAccessControl,
                                        triggerHooks
                                    });
                                }
                            });
                        }
                    });
                } else if (shouldHoistLocalizedValue && (!rows || rows.length === 0)) {
                    siblingDoc[field.name] = null;
                } else if (field.hidden !== true || showHiddenFields === true) {
                    siblingDoc[field.name] = [];
                }
                break;
            }
        case 'collapsible':
        case 'row':
            {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                    blockData,
                    collection,
                    context,
                    currentDepth,
                    depth,
                    doc,
                    draft,
                    fallbackLocale,
                    fieldPromises,
                    fields: field.fields,
                    findMany,
                    flattenLocales,
                    global,
                    locale,
                    overrideAccess,
                    parentIndexPath: indexPath,
                    parentIsLocalized,
                    parentPath,
                    parentSchemaPath: schemaPath,
                    populate,
                    populationPromises,
                    req,
                    select,
                    selectMode,
                    showHiddenFields,
                    siblingDoc,
                    triggerAccessControl,
                    triggerHooks
                });
                break;
            }
        case 'group':
            {
                if (fieldAffectsDataResult) {
                    const groupSelect = typeof select?.[field.name] === 'object' ? select?.[field.name] : undefined;
                    if (shouldLocalizeField && !shouldHoistLocalizedValue) {
                        Object.values(siblingDoc[field.name] || {}).forEach((localizedData)=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                                blockData,
                                collection,
                                context,
                                currentDepth,
                                depth,
                                doc,
                                draft,
                                fallbackLocale,
                                fieldPromises,
                                fields: field.fields,
                                findMany,
                                flattenLocales,
                                global,
                                locale,
                                overrideAccess,
                                parentIndexPath: '',
                                parentIsLocalized: parentIsLocalized || field.localized,
                                parentPath: path,
                                parentSchemaPath: schemaPath,
                                populate,
                                populationPromises,
                                req,
                                select: groupSelect,
                                selectMode,
                                showHiddenFields,
                                siblingDoc: localizedData || {},
                                triggerAccessControl,
                                triggerHooks
                            });
                        });
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                            blockData,
                            collection,
                            context,
                            currentDepth,
                            depth,
                            doc,
                            draft,
                            fallbackLocale,
                            fieldPromises,
                            fields: field.fields,
                            findMany,
                            flattenLocales,
                            global,
                            locale,
                            overrideAccess,
                            parentIndexPath: '',
                            parentIsLocalized: parentIsLocalized || field.localized,
                            parentPath: path,
                            parentSchemaPath: schemaPath,
                            populate,
                            populationPromises,
                            req,
                            select: groupSelect,
                            selectMode,
                            showHiddenFields,
                            siblingDoc: typeof siblingDoc[field.name] !== 'object' ? {} : siblingDoc[field.name],
                            triggerAccessControl,
                            triggerHooks
                        });
                    }
                } else {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                        blockData,
                        collection,
                        context,
                        currentDepth,
                        depth,
                        doc,
                        draft,
                        fallbackLocale,
                        fieldPromises,
                        fields: field.fields,
                        findMany,
                        flattenLocales,
                        global,
                        locale,
                        overrideAccess,
                        parentIndexPath: indexPath,
                        parentIsLocalized,
                        parentPath,
                        parentSchemaPath: schemaPath,
                        populate,
                        populationPromises,
                        req,
                        select,
                        selectMode,
                        showHiddenFields,
                        siblingDoc,
                        triggerAccessControl,
                        triggerHooks
                    });
                }
                break;
            }
        case 'richText':
            {
                if (!field?.editor) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MissingEditorProp"](field) // while we allow disabling editor functionality, you should not have any richText fields defined if you do not have an editor
                    ;
                }
                if (typeof field?.editor === 'function') {
                    throw new Error('Attempted to access unsanitized rich text editor.');
                }
                const editor = field?.editor;
                if (editor?.hooks?.afterRead?.length) {
                    for (const hook of editor.hooks.afterRead){
                        if (shouldRunHookOnAllLocales) {
                            const localesAndValues = Object.entries(siblingDoc[field.name]);
                            await Promise.all(localesAndValues.map(async ([locale, value])=>{
                                const hookedValue = await hook({
                                    collection,
                                    context,
                                    currentDepth,
                                    data: doc,
                                    depth,
                                    draft,
                                    fallbackLocale: fallbackLocale,
                                    field,
                                    fieldPromises,
                                    findMany,
                                    flattenLocales,
                                    global,
                                    indexPath: indexPathSegments,
                                    locale,
                                    operation: 'read',
                                    originalDoc: doc,
                                    overrideAccess,
                                    parentIsLocalized: parentIsLocalized,
                                    path: pathSegments,
                                    populate,
                                    populationPromises,
                                    req,
                                    schemaPath: schemaPathSegments,
                                    showHiddenFields,
                                    siblingData: siblingDoc,
                                    triggerAccessControl,
                                    triggerHooks,
                                    value
                                });
                                if (hookedValue !== undefined) {
                                    siblingDoc[field.name][locale] = hookedValue;
                                }
                            }));
                        } else {
                            const hookedValue = await hook({
                                collection,
                                context,
                                currentDepth,
                                data: doc,
                                depth,
                                draft,
                                fallbackLocale: fallbackLocale,
                                field,
                                fieldPromises,
                                findMany,
                                flattenLocales,
                                global,
                                indexPath: indexPathSegments,
                                locale: locale,
                                operation: 'read',
                                originalDoc: doc,
                                overrideAccess,
                                parentIsLocalized: parentIsLocalized,
                                path: pathSegments,
                                populate,
                                populationPromises,
                                req,
                                schemaPath: schemaPathSegments,
                                showHiddenFields,
                                siblingData: siblingDoc,
                                triggerAccessControl,
                                triggerHooks,
                                value: siblingDoc[field.name]
                            });
                            if (hookedValue !== undefined) {
                                siblingDoc[field.name] = hookedValue;
                            }
                        }
                    }
                }
                break;
            }
        case 'tab':
            {
                const tabDoc = siblingDoc;
                const isNamedTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tabHasName"])(field);
                if (isNamedTab) {
                    const tabSelect = typeof select?.[field.name] === 'object' ? select?.[field.name] : undefined;
                    if (shouldLocalizeField && !shouldHoistLocalizedValue) {
                        Object.values(siblingDoc[field.name] || {}).forEach((localizedData)=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                                blockData,
                                collection,
                                context,
                                currentDepth,
                                depth,
                                doc,
                                draft,
                                fallbackLocale,
                                fieldPromises,
                                fields: field.fields,
                                findMany,
                                flattenLocales,
                                global,
                                locale,
                                overrideAccess,
                                parentIndexPath: '',
                                parentIsLocalized: parentIsLocalized || field.localized,
                                parentPath: path,
                                parentSchemaPath: schemaPath,
                                populate,
                                populationPromises,
                                req,
                                select: tabSelect,
                                selectMode,
                                showHiddenFields,
                                siblingDoc: localizedData || {},
                                triggerAccessControl,
                                triggerHooks
                            });
                        });
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                            blockData,
                            collection,
                            context,
                            currentDepth,
                            depth,
                            doc,
                            draft,
                            fallbackLocale,
                            fieldPromises,
                            fields: field.fields,
                            findMany,
                            flattenLocales,
                            global,
                            locale,
                            overrideAccess,
                            parentIndexPath: '',
                            parentIsLocalized: parentIsLocalized || field.localized,
                            parentPath: path,
                            parentSchemaPath: schemaPath,
                            populate,
                            populationPromises,
                            req,
                            select: tabSelect,
                            selectMode,
                            showHiddenFields,
                            siblingDoc: typeof siblingDoc[field.name] !== 'object' ? {} : siblingDoc[field.name],
                            triggerAccessControl,
                            triggerHooks
                        });
                    }
                } else {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                        blockData,
                        collection,
                        context,
                        currentDepth,
                        depth,
                        doc,
                        draft,
                        fallbackLocale,
                        fieldPromises,
                        fields: field.fields,
                        findMany,
                        flattenLocales,
                        global,
                        locale,
                        overrideAccess,
                        parentIndexPath: isNamedTab ? '' : indexPath,
                        parentIsLocalized: parentIsLocalized || field.localized,
                        parentPath: isNamedTab ? path : parentPath,
                        parentSchemaPath: schemaPath,
                        populate,
                        populationPromises,
                        req,
                        select,
                        selectMode,
                        showHiddenFields,
                        siblingDoc: tabDoc,
                        triggerAccessControl,
                        triggerHooks
                    });
                }
                break;
            }
        case 'tabs':
            {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                    blockData,
                    collection,
                    context,
                    currentDepth,
                    depth,
                    doc,
                    draft,
                    fallbackLocale,
                    fieldPromises,
                    fields: field.tabs.map((tab)=>({
                            ...tab,
                            type: 'tab'
                        })),
                    findMany,
                    flattenLocales,
                    global,
                    locale,
                    overrideAccess,
                    parentIndexPath: indexPath,
                    parentIsLocalized,
                    parentPath: path,
                    parentSchemaPath: schemaPath,
                    populate,
                    populationPromises,
                    req,
                    select,
                    selectMode,
                    showHiddenFields,
                    siblingDoc,
                    triggerAccessControl,
                    triggerHooks
                });
                break;
            }
        default:
            {
                break;
            }
    }
}; //# sourceMappingURL=promise.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterRead/traverseFields.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "traverseFields",
    ()=>traverseFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterRead/promise.js [app-route] (ecmascript)");
;
const traverseFields = ({ blockData, collection, context, currentDepth, depth, doc, draft, fallbackLocale, fieldPromises, fields, findMany, flattenLocales, global, locale, overrideAccess, parentIndexPath, parentIsLocalized, parentPath, parentSchemaPath, populate, populationPromises, req, select, selectMode, showHiddenFields, siblingDoc, triggerAccessControl = true, triggerHooks = true })=>{
    fields.forEach((field, fieldIndex)=>{
        fieldPromises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["promise"])({
            blockData,
            collection,
            context,
            currentDepth,
            depth,
            doc,
            draft,
            fallbackLocale,
            field,
            fieldIndex,
            fieldPromises,
            findMany,
            flattenLocales,
            global,
            locale,
            overrideAccess,
            parentIndexPath,
            parentIsLocalized,
            parentPath,
            parentSchemaPath,
            populate,
            populationPromises,
            req,
            select,
            selectMode,
            showHiddenFields,
            siblingDoc,
            siblingFields: fields,
            triggerAccessControl,
            triggerHooks
        }));
    });
}; //# sourceMappingURL=traverseFields.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterRead/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "afterRead",
    ()=>afterRead
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getSelectMode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getSelectMode.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterRead/traverseFields.js [app-route] (ecmascript)");
;
;
async function afterRead(args) {
    const { collection, context, currentDepth: incomingCurrentDepth, depth: incomingDepth, doc: incomingDoc, draft, fallbackLocale, findMany, flattenLocales = true, global, locale, overrideAccess, populate, req, select, showHiddenFields } = args;
    const fieldPromises = [];
    const populationPromises = [];
    let depth = incomingDepth || incomingDepth === 0 ? parseInt(String(incomingDepth), 10) : req.payload.config.defaultDepth;
    if (depth > req.payload.config.maxDepth) {
        depth = req.payload.config.maxDepth;
    }
    const currentDepth = incomingCurrentDepth || 1;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
        collection,
        context,
        currentDepth,
        depth,
        doc: incomingDoc,
        draft,
        fallbackLocale,
        fieldPromises,
        fields: collection?.fields || global?.fields,
        findMany: findMany,
        flattenLocales,
        global,
        locale,
        overrideAccess,
        parentIndexPath: '',
        parentIsLocalized: false,
        parentPath: '',
        parentSchemaPath: '',
        populate,
        populationPromises,
        req,
        select,
        selectMode: select ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getSelectMode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSelectMode"])(select) : undefined,
        showHiddenFields,
        siblingDoc: incomingDoc
    });
    /**
   * Await all field and population promises in parallel.
   * A field promise is able to add more field promises to the fieldPromises array, which will not be
   * awaited in the first run.
   * This is why we need to loop again to process the new field promises, until there are no more field promises left.
   */ let iterations = 0;
    while(fieldPromises.length > 0 || populationPromises.length > 0){
        const currentFieldPromises = fieldPromises.splice(0, fieldPromises.length);
        const currentPopulationPromises = populationPromises.splice(0, populationPromises.length);
        await Promise.all(currentFieldPromises);
        await Promise.all(currentPopulationPromises);
        iterations++;
        if (iterations >= 100) {
            throw new Error('Infinite afterRead promise loop detected. A hook is likely adding field promises in an infinitely recursive way.');
        }
    }
    return incomingDoc;
} //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/validations.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "array",
    ()=>array,
    "blocks",
    ()=>blocks,
    "checkbox",
    ()=>checkbox,
    "code",
    ()=>code,
    "confirmPassword",
    ()=>confirmPassword,
    "date",
    ()=>date,
    "email",
    ()=>email,
    "json",
    ()=>json,
    "number",
    ()=>number,
    "password",
    ()=>password,
    "point",
    ()=>point,
    "radio",
    ()=>radio,
    "relationship",
    ()=>relationship,
    "richText",
    ()=>richText,
    "select",
    ()=>select,
    "text",
    ()=>text,
    "textarea",
    ()=>textarea,
    "upload",
    ()=>upload,
    "username",
    ()=>username,
    "validateBlocksFilterOptions",
    ()=>validateBlocksFilterOptions,
    "validations",
    ()=>validations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ajv$40$8$2e$17$2e$1$2f$node_modules$2f$ajv$2f$dist$2f$ajv$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/ajv.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bson$2d$objectid$40$2$2e$0$2e$4$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/bson-objectid@2.0.4/node_modules/bson-objectid/objectid.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/isNumber.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isValidID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/isValidID.js [app-route] (ecmascript)");
;
;
const ObjectId = 'default' in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bson$2d$objectid$40$2$2e$0$2e$4$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bson$2d$objectid$40$2$2e$0$2e$4$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].default : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bson$2d$objectid$40$2$2e$0$2e$4$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
;
;
const text = (value, { hasMany, maxLength: fieldMaxLength, maxRows, minLength, minRows, req: { payload: { config }, t }, required })=>{
    let maxLength;
    if (!required) {
        if (value === undefined || value === null) {
            return true;
        }
    }
    if (hasMany === true) {
        const lengthValidationResult = validateArrayLength(value, {
            maxRows,
            minRows,
            required,
            t
        });
        if (typeof lengthValidationResult === 'string') {
            return lengthValidationResult;
        }
    }
    if (typeof config?.defaultMaxTextLength === 'number') {
        maxLength = config.defaultMaxTextLength;
    }
    if (typeof fieldMaxLength === 'number') {
        maxLength = fieldMaxLength;
    }
    const stringsToValidate = Array.isArray(value) ? value : [
        value
    ];
    for (const stringValue of stringsToValidate){
        const length = stringValue?.length || 0;
        if (typeof maxLength === 'number' && length > maxLength) {
            return t('validation:shorterThanMax', {
                label: t('general:value'),
                maxLength,
                stringValue
            });
        }
        if (typeof minLength === 'number' && length < minLength) {
            return t('validation:longerThanMin', {
                label: t('general:value'),
                minLength,
                stringValue
            });
        }
    }
    if (required) {
        if (!(typeof value === 'string' || Array.isArray(value)) || value?.length === 0) {
            return t('validation:required');
        }
    }
    return true;
};
const password = (value, { maxLength: fieldMaxLength, minLength = 3, req: { payload: { config }, t }, required })=>{
    let maxLength;
    if (typeof config?.defaultMaxTextLength === 'number') {
        maxLength = config.defaultMaxTextLength;
    }
    if (typeof fieldMaxLength === 'number') {
        maxLength = fieldMaxLength;
    }
    if (value && maxLength && value.length > maxLength) {
        return t('validation:shorterThanMax', {
            maxLength
        });
    }
    if (value && minLength && value.length < minLength) {
        return t('validation:longerThanMin', {
            minLength
        });
    }
    if (required && !value) {
        return t('validation:required');
    }
    return true;
};
const confirmPassword = (value, { req: { t }, required, siblingData })=>{
    if (required && !value) {
        return t('validation:required');
    }
    if (value && value !== siblingData.password) {
        return t('fields:passwordsDoNotMatch');
    }
    return true;
};
const email = (value, { collectionSlug, req: { payload: { collections, config }, t }, required, siblingData })=>{
    if (collectionSlug) {
        const collection = collections?.[collectionSlug]?.config ?? config.collections.find(({ slug })=>slug === collectionSlug) // If this is run on the client, `collections` will be undefined, but `config.collections` will be available
        ;
        if (collection.auth.loginWithUsername && !collection.auth.loginWithUsername?.requireUsername && !collection.auth.loginWithUsername?.requireEmail) {
            if (!value && !siblingData?.username) {
                return t('validation:required');
            }
        }
    }
    /**
   * Disallows emails with double quotes (e.g., "user"@example.com, user@"example.com", "user@example.com")
   * Rejects spaces anywhere in the email (e.g., user @example.com, user@ example.com, user name@example.com)
   * Prevents consecutive dots in the local or domain part (e.g., user..name@example.com, user@example..com)
   * Disallows domains that start or end with a hyphen (e.g., user@-example.com, user@example-.com)
   * Allows standard email formats (e.g., user@example.com, user.name+alias@example.co.uk, user-name@example.org)
   * Allows domains with consecutive hyphens as long as they are not leading/trailing (e.g., user@ex--ample.com)
   * Supports multiple subdomains (e.g., user@sub.domain.example.com)
   */ const emailRegex = /^(?!.*\.\.)[\w!#$%&'*+/=?^`{|}~-](?:[\w!#$%&'*+/=?^`{|}~.-]*[\w!#$%&'*+/=?^`{|}~-])?@[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)*\.[a-z]{2,}$/i;
    if (value && !emailRegex.test(value) || !value && required) {
        return t('validation:emailAddress');
    }
    return true;
};
const username = (value, { collectionSlug, req: { payload: { collections, config }, t }, required, siblingData })=>{
    let maxLength;
    if (collectionSlug) {
        const collection = collections?.[collectionSlug]?.config ?? config.collections.find(({ slug })=>slug === collectionSlug) // If this is run on the client, `collections` will be undefined, but `config.collections` will be available
        ;
        if (collection.auth.loginWithUsername && !collection.auth.loginWithUsername?.requireUsername && !collection.auth.loginWithUsername?.requireEmail) {
            if (!value && !siblingData?.email) {
                return t('validation:required');
            }
        }
    }
    if (typeof config?.defaultMaxTextLength === 'number') {
        maxLength = config.defaultMaxTextLength;
    }
    if (value && maxLength && value.length > maxLength) {
        return t('validation:shorterThanMax', {
            maxLength
        });
    }
    if (!value && required) {
        return t('validation:required');
    }
    return true;
};
const textarea = (value, { maxLength: fieldMaxLength, minLength, req: { payload: { config }, t }, required })=>{
    let maxLength;
    if (typeof config?.defaultMaxTextLength === 'number') {
        maxLength = config.defaultMaxTextLength;
    }
    if (typeof fieldMaxLength === 'number') {
        maxLength = fieldMaxLength;
    }
    if (value && maxLength && value.length > maxLength) {
        return t('validation:shorterThanMax', {
            maxLength
        });
    }
    if (value && minLength && value.length < minLength) {
        return t('validation:longerThanMin', {
            minLength
        });
    }
    if (required && !value) {
        return t('validation:required');
    }
    return true;
};
const code = (value, { req: { t }, required })=>{
    if (required && value === undefined) {
        return t('validation:required');
    }
    return true;
};
const json = (value, { jsonError, jsonSchema, req: { t }, required })=>{
    const isNotEmpty = (value)=>{
        if (value === undefined || value === null) {
            return false;
        }
        if (Array.isArray(value) && value.length === 0) {
            return false;
        }
        if (typeof value === 'object' && Object.keys(value).length === 0) {
            return false;
        }
        return true;
    };
    const fetchSchema = ({ schema, uri })=>{
        if (uri && schema) {
            return schema;
        }
        return fetch(uri).then((response)=>{
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then((_json)=>{
            const json = _json;
            const jsonSchemaSanitizations = {
                id: undefined,
                $id: json.id,
                $schema: 'http://json-schema.org/draft-07/schema#'
            };
            return Object.assign(json, jsonSchemaSanitizations);
        });
    };
    if (required && !value) {
        return t('validation:required');
    }
    if (jsonError !== undefined) {
        return t('validation:invalidInput');
    }
    if (jsonSchema && isNotEmpty(value)) {
        try {
            jsonSchema.schema = fetchSchema(jsonSchema);
            const { schema } = jsonSchema;
            // @ts-expect-error missing types
            const ajv = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ajv$40$8$2e$17$2e$1$2f$node_modules$2f$ajv$2f$dist$2f$ajv$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]();
            if (!ajv.validate(schema, value)) {
                return ajv.errorsText();
            }
        } catch (error) {
            return error instanceof Error ? error.message : 'Unknown error';
        }
    }
    return true;
};
const checkbox = (value, { req: { t }, required })=>{
    if (value && typeof value !== 'boolean' || required && typeof value !== 'boolean') {
        return t('validation:trueOrFalse');
    }
    return true;
};
const date = (value, { name, req: { t }, required, siblingData, timezone })=>{
    const validDate = value && !isNaN(Date.parse(value.toString()));
    // We need to also check for the timezone data based on this field's config
    // We cannot do this inside the timezone field validation as it's visually hidden
    const hasRequiredTimezone = timezone && required;
    const selectedTimezone = siblingData?.[`${name}_tz`];
    // Always resolve to true if the field is not required, as timezone may be optional too then
    const validTimezone = hasRequiredTimezone ? Boolean(selectedTimezone) : true;
    if (validDate && validTimezone) {
        return true;
    }
    if (validDate && !validTimezone) {
        return t('validation:timezoneRequired');
    }
    if (value) {
        return t('validation:notValidDate', {
            value
        });
    }
    if (required) {
        return t('validation:required');
    }
    return true;
};
const richText = async (value, options)=>{
    if (!options?.editor) {
        throw new Error('richText field has no editor property.');
    }
    if (typeof options?.editor === 'function') {
        throw new Error('Attempted to access unsanitized rich text editor.');
    }
    const editor = options?.editor;
    return editor.validate(value, options);
};
const validateArrayLength = (value, options)=>{
    const { maxRows, minRows, required, t } = options;
    const arrayLength = Array.isArray(value) ? value.length : value || 0;
    if (!required && arrayLength === 0) {
        return true;
    }
    if (minRows && arrayLength < minRows) {
        return t('validation:requiresAtLeast', {
            count: minRows,
            label: t('general:rows')
        });
    }
    if (maxRows && arrayLength > maxRows) {
        return t('validation:requiresNoMoreThan', {
            count: maxRows,
            label: t('general:rows')
        });
    }
    if (required && !arrayLength) {
        return t('validation:requiresAtLeast', {
            count: 1,
            label: t('general:row')
        });
    }
    return true;
};
const number = (value, { hasMany, max, maxRows, min, minRows, req: { t }, required })=>{
    if (hasMany === true) {
        const lengthValidationResult = validateArrayLength(value, {
            maxRows,
            minRows,
            required,
            t
        });
        if (typeof lengthValidationResult === 'string') {
            return lengthValidationResult;
        }
    }
    if (!value && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNumber"])(value)) {
        // if no value is present, validate based on required
        if (required) {
            return t('validation:required');
        }
        if (!required) {
            return true;
        }
    }
    const numbersToValidate = Array.isArray(value) ? value : [
        value
    ];
    for (const number of numbersToValidate){
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNumber"])(number)) {
            return t('validation:enterNumber');
        }
        const numberValue = parseFloat(number);
        if (typeof max === 'number' && numberValue > max) {
            return t('validation:greaterThanMax', {
                label: t('general:value'),
                max,
                value
            });
        }
        if (typeof min === 'number' && numberValue < min) {
            return t('validation:lessThanMin', {
                label: t('general:value'),
                min,
                value
            });
        }
    }
    return true;
};
const array = (value, { maxRows, minRows, req: { t }, required })=>{
    return validateArrayLength(value, {
        maxRows,
        minRows,
        required,
        t
    });
};
async function validateBlocksFilterOptions({ id, data, filterOptions, req, siblingData, value }) {
    const allBlockSlugs = Array.isArray(value) ? value.map((b)=>b.blockType).filter((s)=>Boolean(s)) : [];
    // if undefined => all blocks allowed
    let allowedBlockSlugs = undefined;
    if (typeof filterOptions === 'function') {
        const result = await filterOptions({
            id: id,
            data,
            req,
            siblingData,
            user: req.user
        });
        if (result !== true && Array.isArray(result)) {
            allowedBlockSlugs = result;
        }
    } else if (Array.isArray(filterOptions)) {
        allowedBlockSlugs = filterOptions;
    }
    const invalidBlockSlugs = [];
    if (allowedBlockSlugs) {
        for (const blockSlug of allBlockSlugs){
            if (!allowedBlockSlugs.includes(blockSlug)) {
                invalidBlockSlugs.push(blockSlug);
            }
        }
    }
    return {
        allBlockSlugs,
        allowedBlockSlugs,
        invalidBlockSlugs
    };
}
const blocks = async (value, { id, data, filterOptions, maxRows, minRows, req: { t }, req, required, siblingData })=>{
    const lengthValidationResult = validateArrayLength(value, {
        maxRows,
        minRows,
        required,
        t
    });
    if (typeof lengthValidationResult === 'string') {
        return lengthValidationResult;
    }
    if (filterOptions) {
        const { invalidBlockSlugs } = await validateBlocksFilterOptions({
            id,
            data,
            filterOptions,
            req,
            siblingData,
            value
        });
        if (invalidBlockSlugs?.length) {
            return t('validation:invalidBlocks', {
                blocks: invalidBlockSlugs.join(', ')
            });
        }
    }
    return true;
};
const validateFilterOptions = async (value, { id, blockData, data, filterOptions, relationTo, req, req: { t, user }, siblingData })=>{
    if (typeof filterOptions !== 'undefined' && value) {
        const options = {};
        const falseCollections = [];
        const collections = !Array.isArray(relationTo) ? [
            relationTo
        ] : relationTo;
        const values = Array.isArray(value) ? value : [
            value
        ];
        for (const collection of collections){
            try {
                let optionFilter = typeof filterOptions === 'function' ? await filterOptions({
                    id: id,
                    blockData,
                    data,
                    relationTo: collection,
                    req,
                    siblingData,
                    user
                }) : filterOptions;
                if (optionFilter === true) {
                    optionFilter = null;
                }
                const valueIDs = [];
                values.forEach((val)=>{
                    if (typeof val === 'object') {
                        if (val?.value) {
                            valueIDs.push(val.value);
                        } else if (ObjectId.isValid(val)) {
                            valueIDs.push(new ObjectId(val).toHexString());
                        }
                    }
                    if (typeof val === 'string' || typeof val === 'number') {
                        valueIDs.push(val);
                    }
                });
                if (valueIDs.length > 0) {
                    const findWhere = {
                        and: [
                            {
                                id: {
                                    in: valueIDs
                                }
                            }
                        ]
                    };
                    // @ts-expect-error - I don't understand why optionFilter is inferred as `false | Where | null` instead of `boolean | Where | null`
                    if (optionFilter && optionFilter !== true) {
                        findWhere.and?.push(optionFilter);
                    }
                    if (optionFilter === false) {
                        falseCollections.push(collection);
                    }
                    const result = await req.payloadDataLoader.find({
                        collection,
                        depth: 0,
                        limit: 0,
                        pagination: false,
                        req,
                        where: findWhere
                    });
                    options[collection] = result.docs.map((doc)=>doc.id);
                } else {
                    options[collection] = [];
                }
            } catch (err) {
                req.payload.logger.error({
                    err,
                    msg: `Error validating filter options for collection ${collection}`
                });
                options[collection] = [];
            }
        }
        const invalidRelationships = values.filter((val)=>{
            let collection;
            let requestedID;
            if (typeof relationTo === 'string') {
                collection = relationTo;
                if (typeof val === 'string' || typeof val === 'number') {
                    requestedID = val;
                }
                if (typeof val === 'object' && ObjectId.isValid(val)) {
                    requestedID = new ObjectId(val).toHexString();
                }
            }
            if (Array.isArray(relationTo) && typeof val === 'object' && val?.relationTo) {
                collection = val.relationTo;
                requestedID = val.value;
            }
            if (falseCollections.find((slug)=>relationTo === slug)) {
                return true;
            }
            if (!options[collection]) {
                return true;
            }
            return options[collection].indexOf(requestedID) === -1;
        });
        if (invalidRelationships.length > 0) {
            return invalidRelationships.reduce((err, invalid, i)=>{
                return `${err} ${JSON.stringify(invalid)}${invalidRelationships.length === i + 1 ? ',' : ''} `;
            }, t('validation:invalidSelections'));
        }
        return true;
    }
    return true;
};
const upload = async (value, options)=>{
    const { event, maxRows, minRows, relationTo, req: { payload, t }, required } = options;
    if ((!value && typeof value !== 'number' || Array.isArray(value) && value.length === 0) && required) {
        return t('validation:required');
    }
    if (Array.isArray(value) && value.length > 0) {
        if (minRows && value.length < minRows) {
            return t('validation:lessThanMin', {
                label: t('general:rows'),
                min: minRows,
                value: value.length
            });
        }
        if (maxRows && value.length > maxRows) {
            return t('validation:greaterThanMax', {
                label: t('general:rows'),
                max: maxRows,
                value: value.length
            });
        }
    }
    if (typeof value !== 'undefined' && value !== null) {
        const values = Array.isArray(value) ? value : [
            value
        ];
        const invalidRelationships = values.filter((val)=>{
            let collectionSlug;
            let requestedID;
            if (typeof relationTo === 'string') {
                collectionSlug = relationTo;
                // custom id
                if (val || typeof val === 'number') {
                    requestedID = val;
                }
            }
            if (Array.isArray(relationTo) && typeof val === 'object' && val?.relationTo) {
                collectionSlug = val.relationTo;
                requestedID = val.value;
            }
            if (requestedID === null) {
                return false;
            }
            const idType = payload.collections[collectionSlug]?.customIDType || payload?.db?.defaultIDType || 'text';
            return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isValidID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isValidID"])(requestedID, idType);
        });
        if (invalidRelationships.length > 0) {
            return `This relationship field has the following invalid relationships: ${invalidRelationships.map((err, invalid)=>{
                return `${err} ${JSON.stringify(invalid)}`;
            }).join(', ')}`;
        }
    }
    if (event === 'onChange') {
        return true;
    }
    return validateFilterOptions(value, options);
};
const relationship = async (value, options)=>{
    const { event, maxRows, minRows, relationTo, req: { payload, t }, required } = options;
    if ((!value && typeof value !== 'number' || Array.isArray(value) && value.length === 0) && required) {
        return t('validation:required');
    }
    if (Array.isArray(value) && value.length > 0) {
        if (minRows && value.length < minRows) {
            return t('validation:lessThanMin', {
                label: t('general:rows'),
                min: minRows,
                value: value.length
            });
        }
        if (maxRows && value.length > maxRows) {
            return t('validation:greaterThanMax', {
                label: t('general:rows'),
                max: maxRows,
                value: value.length
            });
        }
    }
    if (typeof value !== 'undefined' && value !== null) {
        const values = Array.isArray(value) ? value : [
            value
        ];
        const invalidRelationships = values.filter((val)=>{
            let collectionSlug;
            let requestedID;
            if (typeof relationTo === 'string') {
                collectionSlug = relationTo;
                // custom id
                if (val || typeof val === 'number') {
                    requestedID = val;
                }
            }
            if (Array.isArray(relationTo) && typeof val === 'object' && val?.relationTo) {
                collectionSlug = val.relationTo;
                requestedID = val.value;
            }
            if (requestedID === null) {
                return false;
            }
            const idType = payload.collections[collectionSlug]?.customIDType || payload?.db?.defaultIDType || 'text';
            return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isValidID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isValidID"])(requestedID, idType);
        });
        if (invalidRelationships.length > 0) {
            return `This relationship field has the following invalid relationships: ${invalidRelationships.map((err, invalid)=>{
                return `${err} ${JSON.stringify(invalid)}`;
            }).join(', ')}`;
        }
    }
    if (event === 'onChange') {
        return true;
    }
    return validateFilterOptions(value, options);
};
const select = (value, { data, filterOptions, hasMany, options, req, req: { t }, required, siblingData })=>{
    const filteredOptions = typeof filterOptions === 'function' ? filterOptions({
        data,
        options,
        req,
        siblingData
    }) : options;
    if (Array.isArray(value) && value.some((input)=>!filteredOptions.some((option)=>option === input || typeof option !== 'string' && option?.value === input))) {
        return t('validation:invalidSelection');
    }
    if (typeof value === 'string' && !filteredOptions.some((option)=>option === value || typeof option !== 'string' && option.value === value)) {
        return t('validation:invalidSelection');
    }
    if (required && (typeof value === 'undefined' || value === null || hasMany && Array.isArray(value) && value?.length === 0)) {
        return t('validation:required');
    }
    return true;
};
const radio = (value, { options, req: { t }, required })=>{
    if (value) {
        const valueMatchesOption = options.some((option)=>option === value || typeof option !== 'string' && option.value === value);
        return valueMatchesOption || t('validation:invalidSelection');
    }
    return required ? t('validation:required') : true;
};
const point = (value = [
    '',
    ''
], { req: { t }, required })=>{
    if (value === null) {
        if (required) {
            return t('validation:required');
        }
        return true;
    }
    const lng = parseFloat(String(value[0]));
    const lat = parseFloat(String(value[1]));
    if (required && (value[0] && value[1] && typeof lng !== 'number' && typeof lat !== 'number' || Number.isNaN(lng) || Number.isNaN(lat) || Array.isArray(value) && value.length !== 2)) {
        return t('validation:requiresTwoNumbers');
    }
    if (value[1] && Number.isNaN(lng) || value[0] && Number.isNaN(lat)) {
        return t('validation:invalidInput');
    }
    // Validate longitude bounds (-180 to 180)
    if (value[0] && !Number.isNaN(lng) && (lng < -180 || lng > 180)) {
        return t('validation:longitudeOutOfBounds');
    }
    // Validate latitude bounds (-90 to 90)
    if (value[1] && !Number.isNaN(lat) && (lat < -90 || lat > 90)) {
        return t('validation:latitudeOutOfBounds');
    }
    return true;
};
const validations = {
    array,
    blocks,
    checkbox,
    code,
    confirmPassword,
    date,
    email,
    json,
    number,
    password,
    point,
    radio,
    relationship,
    richText,
    select,
    text,
    textarea,
    upload
}; //# sourceMappingURL=validations.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeDuplicate/promise.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "promise",
    ()=>promise
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/config/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getFieldPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/getFieldPaths.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeDuplicate/traverseFields.js [app-route] (ecmascript)");
;
;
;
const promise = async ({ id, blockData, collection, context, doc, field, fieldIndex, overrideAccess, parentIndexPath, parentIsLocalized, parentPath, parentSchemaPath, req, siblingDoc, siblingFields })=>{
    const { indexPath, path, schemaPath } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getFieldPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFieldPathsModified"])({
        field,
        index: fieldIndex,
        parentIndexPath,
        parentPath,
        parentSchemaPath
    });
    const { localization } = req.payload.config;
    const pathSegments = path ? path.split('.') : [];
    const schemaPathSegments = schemaPath ? schemaPath.split('.') : [];
    const indexPathSegments = indexPath ? indexPath.split('-').filter(Boolean)?.map(Number) : [];
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
        let fieldData = siblingDoc?.[field.name];
        const fieldIsLocalized = localization && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldShouldBeLocalized"])({
            field,
            parentIsLocalized
        });
        // Run field beforeDuplicate hooks.
        // These hooks are responsible for resetting the `id` field values of array and block rows. See `baseIDField`.
        if (Array.isArray('hooks' in field && field.hooks?.beforeDuplicate)) {
            if (fieldIsLocalized) {
                const localeData = {};
                for (const locale of localization.localeCodes){
                    const beforeDuplicateArgs = {
                        blockData,
                        collection,
                        context,
                        data: doc,
                        field,
                        global: undefined,
                        indexPath: indexPathSegments,
                        path: pathSegments,
                        previousSiblingDoc: siblingDoc,
                        previousValue: siblingDoc[field.name]?.[locale],
                        req,
                        schemaPath: schemaPathSegments,
                        siblingData: siblingDoc,
                        siblingDocWithLocales: siblingDoc,
                        siblingFields: siblingFields,
                        value: siblingDoc[field.name]?.[locale]
                    };
                    let hookResult;
                    if ('hooks' in field && field.hooks?.beforeDuplicate) {
                        for (const hook of field.hooks.beforeDuplicate){
                            hookResult = await hook(beforeDuplicateArgs);
                        }
                    }
                    if (typeof hookResult !== 'undefined') {
                        localeData[locale] = hookResult;
                    }
                }
                siblingDoc[field.name] = localeData;
            } else {
                const beforeDuplicateArgs = {
                    blockData,
                    collection,
                    context,
                    data: doc,
                    field,
                    global: undefined,
                    indexPath: indexPathSegments,
                    path: pathSegments,
                    previousSiblingDoc: siblingDoc,
                    previousValue: siblingDoc[field.name],
                    req,
                    schemaPath: schemaPathSegments,
                    siblingData: siblingDoc,
                    siblingDocWithLocales: siblingDoc,
                    siblingFields: siblingFields,
                    value: siblingDoc[field.name]
                };
                let hookResult;
                if ('hooks' in field && field.hooks?.beforeDuplicate) {
                    for (const hook of field.hooks.beforeDuplicate){
                        hookResult = await hook(beforeDuplicateArgs);
                    }
                }
                if (typeof hookResult !== 'undefined') {
                    siblingDoc[field.name] = hookResult;
                }
            }
        }
        // First, for any localized fields, we will loop over locales
        // and if locale data is present, traverse the sub fields.
        // There are only a few different fields where this is possible.
        if (fieldIsLocalized) {
            if (typeof fieldData !== 'object' || fieldData === null) {
                siblingDoc[field.name] = {};
                fieldData = siblingDoc[field.name];
            }
            const promises = [];
            localization.localeCodes.forEach((locale)=>{
                if (fieldData[locale]) {
                    switch(field.type){
                        case 'array':
                            {
                                const rows = fieldData[locale];
                                if (Array.isArray(rows)) {
                                    const promises = [];
                                    rows.forEach((row, rowIndex)=>{
                                        promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                                            id,
                                            blockData,
                                            collection,
                                            context,
                                            doc,
                                            fields: field.fields,
                                            overrideAccess,
                                            parentIndexPath: '',
                                            parentIsLocalized: parentIsLocalized || field.localized,
                                            parentPath: path + '.' + rowIndex,
                                            parentSchemaPath: schemaPath,
                                            req,
                                            siblingDoc: row
                                        }));
                                    });
                                }
                                break;
                            }
                        case 'blocks':
                            {
                                const rows = fieldData[locale];
                                if (Array.isArray(rows)) {
                                    const promises = [];
                                    rows.forEach((row, rowIndex)=>{
                                        const blockTypeToMatch = row.blockType;
                                        const block = req.payload.blocks[blockTypeToMatch] ?? (field.blockReferences ?? field.blocks).find((curBlock)=>typeof curBlock !== 'string' && curBlock.slug === blockTypeToMatch);
                                        promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                                            id,
                                            blockData: row,
                                            collection,
                                            context,
                                            doc,
                                            fields: block.fields,
                                            overrideAccess,
                                            parentIndexPath: '',
                                            parentIsLocalized: parentIsLocalized || field.localized,
                                            parentPath: path + '.' + rowIndex,
                                            parentSchemaPath: schemaPath + '.' + block.slug,
                                            req,
                                            siblingDoc: row
                                        }));
                                    });
                                }
                                break;
                            }
                        case 'group':
                        case 'tab':
                            {
                                promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                                    id,
                                    blockData,
                                    collection,
                                    context,
                                    doc,
                                    fields: field.fields,
                                    overrideAccess,
                                    parentIndexPath: '',
                                    parentIsLocalized: parentIsLocalized || field.localized,
                                    parentPath: path,
                                    parentSchemaPath: schemaPath,
                                    req,
                                    siblingDoc: fieldData[locale]
                                }));
                                break;
                            }
                    }
                }
            });
            await Promise.all(promises);
        } else {
            // If the field is not localized, but it affects data,
            // we need to further traverse its children
            // so the child fields can run beforeDuplicate hooks
            switch(field.type){
                case 'array':
                    {
                        const rows = siblingDoc[field.name];
                        if (Array.isArray(rows)) {
                            const promises = [];
                            rows.forEach((row, rowIndex)=>{
                                promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                                    id,
                                    blockData,
                                    collection,
                                    context,
                                    doc,
                                    fields: field.fields,
                                    overrideAccess,
                                    parentIndexPath: '',
                                    parentIsLocalized: parentIsLocalized || field.localized,
                                    parentPath: path + '.' + rowIndex,
                                    parentSchemaPath: schemaPath,
                                    req,
                                    siblingDoc: row
                                }));
                            });
                            await Promise.all(promises);
                        }
                        break;
                    }
                case 'blocks':
                    {
                        const rows = siblingDoc[field.name];
                        if (Array.isArray(rows)) {
                            const promises = [];
                            rows.forEach((row, rowIndex)=>{
                                const blockTypeToMatch = row.blockType;
                                const block = req.payload.blocks[blockTypeToMatch] ?? (field.blockReferences ?? field.blocks).find((curBlock)=>typeof curBlock !== 'string' && curBlock.slug === blockTypeToMatch);
                                if (block) {
                                    ;
                                    row.blockType = blockTypeToMatch;
                                    promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                                        id,
                                        blockData: row,
                                        collection,
                                        context,
                                        doc,
                                        fields: block.fields,
                                        overrideAccess,
                                        parentIndexPath: '',
                                        parentIsLocalized: parentIsLocalized || field.localized,
                                        parentPath: path + '.' + rowIndex,
                                        parentSchemaPath: schemaPath + '.' + block.slug,
                                        req,
                                        siblingDoc: row
                                    }));
                                }
                            });
                            await Promise.all(promises);
                        }
                        break;
                    }
                case 'group':
                    {
                        if (typeof siblingDoc[field.name] !== 'object') {
                            siblingDoc[field.name] = {};
                        }
                        const groupDoc = siblingDoc[field.name];
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                            id,
                            blockData,
                            collection,
                            context,
                            doc,
                            fields: field.fields,
                            overrideAccess,
                            parentIndexPath: '',
                            parentIsLocalized: parentIsLocalized || field.localized,
                            parentPath: path,
                            parentSchemaPath: schemaPath,
                            req,
                            siblingDoc: groupDoc
                        });
                        break;
                    }
                case 'tab':
                    {
                        if (typeof siblingDoc[field.name] !== 'object') {
                            siblingDoc[field.name] = {};
                        }
                        const tabDoc = siblingDoc[field.name];
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                            id,
                            blockData,
                            collection,
                            context,
                            doc,
                            fields: field.fields,
                            overrideAccess,
                            parentIndexPath: '',
                            parentIsLocalized: parentIsLocalized || field.localized,
                            parentPath: path,
                            parentSchemaPath: schemaPath,
                            req,
                            siblingDoc: tabDoc
                        });
                        break;
                    }
            }
        }
    } else {
        // Finally, we traverse fields which do not affect data here - collapsibles, rows, unnamed groups
        switch(field.type){
            case 'collapsible':
            case 'group':
            case 'row':
                {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                        id,
                        blockData,
                        collection,
                        context,
                        doc,
                        fields: field.fields,
                        overrideAccess,
                        parentIndexPath: indexPath,
                        parentIsLocalized,
                        parentPath,
                        parentSchemaPath: schemaPath,
                        req,
                        siblingDoc
                    });
                    break;
                }
            // Unnamed Tab
            // @ts-expect-error `fieldAffectsData` inferred return type doesn't account for TabAsField
            case 'tab':
                {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                        id,
                        blockData,
                        collection,
                        context,
                        doc,
                        // @ts-expect-error `fieldAffectsData` inferred return type doesn't account for TabAsField
                        fields: field.fields,
                        overrideAccess,
                        parentIndexPath: indexPath,
                        parentIsLocalized,
                        parentPath,
                        parentSchemaPath: schemaPath,
                        req,
                        siblingDoc
                    });
                    break;
                }
            case 'tabs':
                {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                        id,
                        blockData,
                        collection,
                        context,
                        doc,
                        fields: field.tabs.map((tab)=>({
                                ...tab,
                                type: 'tab'
                            })),
                        overrideAccess,
                        parentIndexPath: indexPath,
                        parentIsLocalized,
                        parentPath: path,
                        parentSchemaPath: schemaPath,
                        req,
                        siblingDoc
                    });
                    break;
                }
            default:
                {
                    break;
                }
        }
    }
}; //# sourceMappingURL=promise.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeDuplicate/traverseFields.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "traverseFields",
    ()=>traverseFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeDuplicate/promise.js [app-route] (ecmascript)");
;
const traverseFields = async ({ id, blockData, collection, context, doc, fields, overrideAccess, parentIndexPath, parentIsLocalized, parentPath, parentSchemaPath, req, siblingDoc })=>{
    const promises = [];
    fields.forEach((field, fieldIndex)=>{
        promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["promise"])({
            id,
            blockData,
            collection,
            context,
            doc,
            field,
            fieldIndex,
            overrideAccess,
            parentIndexPath,
            parentIsLocalized,
            parentPath,
            parentSchemaPath,
            req,
            siblingDoc,
            siblingFields: fields
        }));
    });
    await Promise.all(promises);
}; //# sourceMappingURL=traverseFields.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeDuplicate/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "beforeDuplicate",
    ()=>beforeDuplicate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeDuplicate/traverseFields.js [app-route] (ecmascript)");
;
const beforeDuplicate = async ({ id, collection, context, doc, overrideAccess, req })=>{
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
        id,
        collection,
        context,
        doc,
        fields: collection.fields,
        overrideAccess,
        parentIndexPath: '',
        parentIsLocalized: false,
        parentPath: '',
        parentSchemaPath: '',
        req,
        siblingDoc: doc
    });
    return doc;
}; //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterChange/promise.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "promise",
    ()=>promise
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/MissingEditorProp.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/config/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getFieldPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/getFieldPaths.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterChange/traverseFields.js [app-route] (ecmascript)");
;
;
;
;
const promise = async ({ blockData, collection, context, data, doc, field, fieldIndex, global, operation, parentIndexPath, parentIsLocalized, parentPath, parentSchemaPath, previousDoc, previousSiblingDoc, req, siblingData, siblingDoc, siblingFields })=>{
    const { indexPath, path, schemaPath } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getFieldPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFieldPathsModified"])({
        field,
        index: fieldIndex,
        parentIndexPath,
        parentPath,
        parentSchemaPath
    });
    const pathSegments = path ? path.split('.') : [];
    const schemaPathSegments = schemaPath ? schemaPath.split('.') : [];
    const indexPathSegments = indexPath ? indexPath.split('-').filter(Boolean)?.map(Number) : [];
    const getNestedValue = (data, path)=>path.reduce((acc, key)=>acc && acc[key] !== undefined ? acc[key] : undefined, data);
    const previousValData = previousSiblingDoc && Object.keys(previousSiblingDoc).length > 0 ? previousSiblingDoc : previousDoc;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
        // Execute hooks
        if ('hooks' in field && field.hooks?.afterChange) {
            for (const hook of field.hooks.afterChange){
                const hookedValue = await hook({
                    blockData,
                    collection,
                    context,
                    data,
                    field,
                    global,
                    indexPath: indexPathSegments,
                    operation,
                    originalDoc: doc,
                    path: pathSegments,
                    previousDoc,
                    previousSiblingDoc,
                    previousValue: getNestedValue(previousValData, pathSegments) ?? previousValData?.[field.name],
                    req,
                    schemaPath: schemaPathSegments,
                    siblingData,
                    siblingFields: siblingFields,
                    value: getNestedValue(siblingDoc, pathSegments) ?? siblingDoc?.[field.name]
                });
                if (hookedValue !== undefined) {
                    siblingDoc[field.name] = hookedValue;
                }
            }
        }
    }
    // Traverse subfields
    switch(field.type){
        case 'array':
            {
                const rows = siblingDoc[field.name];
                if (Array.isArray(rows)) {
                    const promises = [];
                    rows.forEach((row, rowIndex)=>{
                        promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                            blockData,
                            collection,
                            context,
                            data,
                            doc,
                            fields: field.fields,
                            global,
                            operation,
                            parentIndexPath: '',
                            parentIsLocalized: parentIsLocalized || field.localized,
                            parentPath: path + '.' + rowIndex,
                            parentSchemaPath: schemaPath,
                            previousDoc,
                            previousSiblingDoc: previousDoc?.[field.name]?.[rowIndex] || {},
                            req,
                            siblingData: siblingData?.[field.name]?.[rowIndex] || {},
                            siblingDoc: row ? {
                                ...row
                            } : {}
                        }));
                    });
                    await Promise.all(promises);
                }
                break;
            }
        case 'blocks':
            {
                const rows = siblingDoc[field.name];
                if (Array.isArray(rows)) {
                    const promises = [];
                    rows.forEach((row, rowIndex)=>{
                        const blockTypeToMatch = row.blockType;
                        const block = req.payload.blocks[blockTypeToMatch] ?? (field.blockReferences ?? field.blocks).find((curBlock)=>typeof curBlock !== 'string' && curBlock.slug === blockTypeToMatch);
                        if (block) {
                            promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                                blockData: siblingData?.[field.name]?.[rowIndex],
                                collection,
                                context,
                                data,
                                doc,
                                fields: block.fields,
                                global,
                                operation,
                                parentIndexPath: '',
                                parentIsLocalized: parentIsLocalized || field.localized,
                                parentPath: path + '.' + rowIndex,
                                parentSchemaPath: schemaPath + '.' + block.slug,
                                previousDoc,
                                previousSiblingDoc: previousValData?.[field.name]?.[rowIndex] || {},
                                req,
                                siblingData: siblingData?.[field.name]?.[rowIndex] || {},
                                siblingDoc: row ? {
                                    ...row
                                } : {}
                            }));
                        }
                    });
                    await Promise.all(promises);
                }
                break;
            }
        case 'collapsible':
        case 'row':
            {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                    blockData,
                    collection,
                    context,
                    data,
                    doc,
                    fields: field.fields,
                    global,
                    operation,
                    parentIndexPath: indexPath,
                    parentIsLocalized,
                    parentPath,
                    parentSchemaPath: schemaPath,
                    previousDoc,
                    previousSiblingDoc: {
                        ...previousSiblingDoc
                    },
                    req,
                    siblingData: siblingData || {},
                    siblingDoc: {
                        ...siblingDoc
                    }
                });
                break;
            }
        case 'group':
            {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                        blockData,
                        collection,
                        context,
                        data,
                        doc,
                        fields: field.fields,
                        global,
                        operation,
                        parentIndexPath: '',
                        parentIsLocalized: parentIsLocalized || field.localized,
                        parentPath: path,
                        parentSchemaPath: schemaPath,
                        previousDoc,
                        previousSiblingDoc: previousDoc?.[field.name] || {},
                        req,
                        siblingData: siblingData?.[field.name] || {},
                        siblingDoc: siblingDoc?.[field.name] || {}
                    });
                } else {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                        blockData,
                        collection,
                        context,
                        data,
                        doc,
                        fields: field.fields,
                        global,
                        operation,
                        parentIndexPath: indexPath,
                        parentIsLocalized,
                        parentPath,
                        parentSchemaPath: schemaPath,
                        previousDoc,
                        previousSiblingDoc: {
                            ...previousSiblingDoc
                        },
                        req,
                        siblingData: siblingData || {},
                        siblingDoc: {
                            ...siblingDoc
                        }
                    });
                }
                break;
            }
        case 'richText':
            {
                if (!field?.editor) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MissingEditorProp"](field) // while we allow disabling editor functionality, you should not have any richText fields defined if you do not have an editor
                    ;
                }
                if (typeof field.editor === 'function') {
                    throw new Error('Attempted to access unsanitized rich text editor.');
                }
                const editor = field.editor;
                if (editor?.hooks?.afterChange?.length) {
                    for (const hook of editor.hooks.afterChange){
                        const hookedValue = await hook({
                            collection,
                            context,
                            data,
                            field,
                            global,
                            indexPath: indexPathSegments,
                            operation,
                            originalDoc: doc,
                            parentIsLocalized,
                            path: pathSegments,
                            previousDoc,
                            previousSiblingDoc,
                            previousValue: previousDoc?.[field.name],
                            req,
                            schemaPath: schemaPathSegments,
                            siblingData,
                            value: siblingDoc?.[field.name]
                        });
                        if (hookedValue !== undefined) {
                            siblingDoc[field.name] = hookedValue;
                        }
                    }
                }
                break;
            }
        case 'tab':
            {
                let tabSiblingData = siblingData;
                let tabSiblingDoc = siblingDoc;
                let tabPreviousSiblingDoc = siblingDoc;
                const isNamedTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tabHasName"])(field);
                if (isNamedTab) {
                    tabSiblingData = siblingData?.[field.name] ?? {};
                    tabSiblingDoc = siblingDoc?.[field.name] ?? {};
                    tabPreviousSiblingDoc = previousDoc?.[field.name] ?? {};
                }
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                    blockData,
                    collection,
                    context,
                    data,
                    doc,
                    fields: field.fields,
                    global,
                    operation,
                    parentIndexPath: isNamedTab ? '' : indexPath,
                    parentIsLocalized: parentIsLocalized || field.localized,
                    parentPath: isNamedTab ? path : parentPath,
                    parentSchemaPath: schemaPath,
                    previousDoc,
                    previousSiblingDoc: tabPreviousSiblingDoc,
                    req,
                    siblingData: tabSiblingData,
                    siblingDoc: tabSiblingDoc
                });
                break;
            }
        case 'tabs':
            {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                    blockData,
                    collection,
                    context,
                    data,
                    doc,
                    fields: field.tabs.map((tab)=>({
                            ...tab,
                            type: 'tab'
                        })),
                    global,
                    operation,
                    parentIndexPath: indexPath,
                    parentIsLocalized,
                    parentPath: path,
                    parentSchemaPath: schemaPath,
                    previousDoc,
                    previousSiblingDoc: {
                        ...previousSiblingDoc
                    },
                    req,
                    siblingData: siblingData || {},
                    siblingDoc: {
                        ...siblingDoc
                    }
                });
                break;
            }
        default:
            {
                break;
            }
    }
}; //# sourceMappingURL=promise.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterChange/traverseFields.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "traverseFields",
    ()=>traverseFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterChange/promise.js [app-route] (ecmascript)");
;
const traverseFields = async ({ blockData, collection, context, data, doc, fields, global, operation, parentIndexPath, parentIsLocalized, parentPath, parentSchemaPath, previousDoc, previousSiblingDoc, req, siblingData, siblingDoc, siblingFields })=>{
    const promises = [];
    fields.forEach((field, fieldIndex)=>{
        promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["promise"])({
            blockData,
            collection,
            context,
            data,
            doc,
            field,
            fieldIndex,
            global,
            operation,
            parentIndexPath,
            parentIsLocalized: parentIsLocalized,
            parentPath,
            parentSchemaPath,
            previousDoc,
            previousSiblingDoc,
            req,
            siblingData,
            siblingDoc,
            siblingFields
        }));
    });
    await Promise.all(promises);
}; //# sourceMappingURL=traverseFields.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterChange/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "afterChange",
    ()=>afterChange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterChange/traverseFields.js [app-route] (ecmascript)");
;
const afterChange = async ({ collection, context, data, doc: incomingDoc, global, operation, previousDoc, req })=>{
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
        collection,
        context,
        data,
        doc: incomingDoc,
        fields: collection?.fields || global?.fields,
        global,
        operation,
        parentIndexPath: '',
        parentIsLocalized: false,
        parentPath: '',
        parentSchemaPath: '',
        previousDoc,
        previousSiblingDoc: previousDoc,
        req,
        siblingData: data,
        siblingDoc: incomingDoc
    });
    return incomingDoc;
}; //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeChange/getExistingRowDoc.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * If there is an incoming row id,
 * and it matches the existing sibling doc id,
 * this is an existing row, so it should be merged.
 * Otherwise, return an empty object.
 */ __turbopack_context__.s([
    "getExistingRowDoc",
    ()=>getExistingRowDoc
]);
const getExistingRowDoc = (incomingRow, existingRows)=>{
    if (incomingRow.id && Array.isArray(existingRows)) {
        const matchedExistingRow = existingRows.find((existingRow)=>{
            if (typeof existingRow === 'object' && 'id' in existingRow) {
                if (existingRow.id === incomingRow.id) {
                    return existingRow;
                }
            }
            return false;
        });
        if (matchedExistingRow) {
            return matchedExistingRow;
        }
    }
    return {};
}; //# sourceMappingURL=getExistingRowDoc.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeChange/promise.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "promise",
    ()=>promise
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/MissingEditorProp.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$validations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/validations.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepMerge$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/deepMerge.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getTranslatedLabel$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getTranslatedLabel.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/config/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getFieldPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/getFieldPaths.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$getExistingRowDoc$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeChange/getExistingRowDoc.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeChange/traverseFields.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
function buildFieldLabel(parentLabel, label) {
    if (!label) {
        return parentLabel;
    }
    const capitalizedLabel = label.charAt(0).toUpperCase() + label.slice(1);
    return parentLabel && capitalizedLabel ? `${parentLabel} > ${capitalizedLabel}` : capitalizedLabel || parentLabel;
}
const promise = async ({ id, blockData, collection, context, data, doc, docWithLocales, errors, field, fieldIndex, fieldLabelPath, global, mergeLocaleActions, operation, overrideAccess, parentIndexPath, parentIsLocalized, parentPath, parentSchemaPath, req, siblingData, siblingDoc, siblingDocWithLocales, siblingFields, skipValidation })=>{
    const { indexPath, path, schemaPath } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getFieldPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFieldPathsModified"])({
        field,
        index: fieldIndex,
        parentIndexPath,
        parentPath,
        parentSchemaPath
    });
    const { localization } = req.payload.config;
    const defaultLocale = localization ? localization?.defaultLocale : 'en';
    const operationLocale = req.locale || defaultLocale;
    const pathSegments = path ? path.split('.') : [];
    const schemaPathSegments = schemaPath ? schemaPath.split('.') : [];
    const indexPathSegments = indexPath ? indexPath.split('-').filter(Boolean)?.map(Number) : [];
    const passesCondition = field.admin?.condition ? Boolean(field.admin.condition(data, siblingData, {
        blockData: blockData,
        operation,
        path: pathSegments,
        user: req.user
    })) : true;
    let skipValidationFromHere = skipValidation || !passesCondition;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
        // skip validation if the field is localized and the incoming data is null
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldShouldBeLocalized"])({
            field,
            parentIsLocalized
        }) && operationLocale !== defaultLocale) {
            if ([
                'array',
                'blocks'
            ].includes(field.type) && siblingData[field.name] === null) {
                skipValidationFromHere = true;
            }
        }
        // Execute hooks
        if ('hooks' in field && field.hooks?.beforeChange) {
            for (const hook of field.hooks.beforeChange){
                const hookedValue = await hook({
                    blockData,
                    collection,
                    context,
                    data,
                    field,
                    global,
                    indexPath: indexPathSegments,
                    operation,
                    originalDoc: doc,
                    path: pathSegments,
                    previousSiblingDoc: siblingDoc,
                    previousValue: siblingDoc[field.name],
                    req,
                    schemaPath: schemaPathSegments,
                    siblingData,
                    siblingDocWithLocales,
                    siblingFields: siblingFields,
                    value: siblingData[field.name]
                });
                if (hookedValue !== undefined) {
                    siblingData[field.name] = hookedValue;
                }
            }
        }
        // Validate
        if (!skipValidationFromHere && 'validate' in field && field.validate) {
            const valueToValidate = siblingData[field.name];
            let jsonError;
            if (field.type === 'json' && typeof siblingData[field.name] === 'string') {
                try {
                    JSON.parse(siblingData[field.name]);
                } catch (e) {
                    jsonError = e;
                }
            }
            const validateFn = field.validate;
            const validationResult = await validateFn(valueToValidate, {
                ...field,
                id,
                blockData: blockData,
                collectionSlug: collection?.slug,
                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepMerge$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["deepMergeWithSourceArrays"])(doc, data),
                event: 'submit',
                // @ts-expect-error
                jsonError,
                operation,
                overrideAccess,
                path: pathSegments,
                preferences: {
                    fields: {}
                },
                previousValue: siblingDoc[field.name],
                req,
                siblingData: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepMerge$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["deepMergeWithSourceArrays"])(siblingDoc, siblingData)
            });
            if (typeof validationResult === 'string') {
                let filterOptionsError = false;
                if (field.type === 'blocks' && field.filterOptions) {
                    // Re-run filteroptions. If the validation error is due to filteroptions, we need to add error paths to all the blocks
                    // that are no longer valid
                    const validationResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$validations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateBlocksFilterOptions"])({
                        id,
                        data,
                        filterOptions: field.filterOptions,
                        req,
                        siblingData,
                        value: siblingData[field.name]
                    });
                    if (validationResult?.invalidBlockSlugs?.length) {
                        filterOptionsError = true;
                        let rowIndex = -1;
                        for (const block of siblingData[field.name]){
                            rowIndex++;
                            if (validationResult.invalidBlockSlugs.includes(block.blockType)) {
                                const blockConfigOrSlug = (field.blockReferences ?? field.blocks).find((blockFromField)=>typeof blockFromField === 'string' ? blockFromField === block.blockType : blockFromField.slug === block.blockType);
                                const blockConfig = typeof blockConfigOrSlug !== 'string' ? blockConfigOrSlug : req.payload.config?.blocks?.[blockConfigOrSlug];
                                const blockLabelPath = field?.label === false ? fieldLabelPath : buildFieldLabel(fieldLabelPath, `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getTranslatedLabel$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTranslatedLabel"])(field?.label || field?.name, req.i18n)} > ${req.t('fields:block')} ${rowIndex + 1} (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getTranslatedLabel$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTranslatedLabel"])(blockConfig?.labels?.singular || block.blockType, req.i18n)})`);
                                errors.push({
                                    label: blockLabelPath,
                                    message: req.t('validation:invalidBlock', {
                                        block: block.blockType
                                    }),
                                    path: `${path}.${rowIndex}.id`
                                });
                            }
                        }
                    }
                }
                if (!filterOptionsError) {
                    // If the error is due to block filterOptions, we want to push the errors for each individual block, not the blocks
                    // field itself => only push the error if the field is not a block field with validation failure due to filterOptions
                    const fieldLabel = buildFieldLabel(fieldLabelPath, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getTranslatedLabel$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTranslatedLabel"])(field?.label || field?.name, req.i18n));
                    errors.push({
                        label: fieldLabel,
                        message: validationResult,
                        path
                    });
                }
            }
        }
        // Push merge locale action if applicable
        if (localization && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldShouldBeLocalized"])({
            field,
            parentIsLocalized
        })) {
            mergeLocaleActions.push(()=>{
                const localeData = {};
                for (const locale of localization.localeCodes){
                    const fieldValue = locale === req.locale ? siblingData[field.name] : siblingDocWithLocales?.[field.name]?.[locale];
                    // update locale value if it's not undefined
                    if (typeof fieldValue !== 'undefined') {
                        localeData[locale] = fieldValue;
                    }
                }
                // If there are locales with data, set the data
                if (Object.keys(localeData).length > 0) {
                    siblingData[field.name] = localeData;
                }
            });
        }
    }
    switch(field.type){
        case 'array':
            {
                const rows = siblingData[field.name];
                if (Array.isArray(rows)) {
                    const promises = [];
                    rows.forEach((row, rowIndex)=>{
                        promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                            id,
                            blockData,
                            collection,
                            context,
                            data,
                            doc,
                            docWithLocales,
                            errors,
                            fieldLabelPath: field?.label === false ? fieldLabelPath : buildFieldLabel(fieldLabelPath, `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getTranslatedLabel$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTranslatedLabel"])(field?.label || field?.name, req.i18n)} ${rowIndex + 1}`),
                            fields: field.fields,
                            global,
                            mergeLocaleActions,
                            operation,
                            overrideAccess,
                            parentIndexPath: '',
                            parentIsLocalized: parentIsLocalized || field.localized,
                            parentPath: path + '.' + rowIndex,
                            parentSchemaPath: schemaPath,
                            req,
                            siblingData: row,
                            siblingDoc: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$getExistingRowDoc$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getExistingRowDoc"])(row, siblingDoc[field.name]),
                            siblingDocWithLocales: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$getExistingRowDoc$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getExistingRowDoc"])(row, siblingDocWithLocales?.[field.name]),
                            skipValidation: skipValidationFromHere
                        }));
                    });
                    await Promise.all(promises);
                }
                break;
            }
        case 'blocks':
            {
                const rows = siblingData[field.name];
                if (Array.isArray(rows)) {
                    const promises = [];
                    rows.forEach((row, rowIndex)=>{
                        const rowSiblingDoc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$getExistingRowDoc$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getExistingRowDoc"])(row, siblingDoc[field.name]);
                        const rowSiblingDocWithLocales = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$getExistingRowDoc$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getExistingRowDoc"])(row, siblingDocWithLocales ? siblingDocWithLocales[field.name] : {});
                        const blockTypeToMatch = row.blockType || rowSiblingDoc.blockType;
                        const block = req.payload.blocks[blockTypeToMatch] ?? (field.blockReferences ?? field.blocks).find((curBlock)=>typeof curBlock !== 'string' && curBlock.slug === blockTypeToMatch);
                        const blockLabelPath = field?.label === false ? fieldLabelPath : buildFieldLabel(fieldLabelPath, `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getTranslatedLabel$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTranslatedLabel"])(field?.label || field?.name, req.i18n)} > ${req.t('fields:block')} ${rowIndex + 1} (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getTranslatedLabel$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTranslatedLabel"])(block?.labels?.singular || blockTypeToMatch, req.i18n)})`);
                        if (block) {
                            promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                                id,
                                blockData: row,
                                collection,
                                context,
                                data,
                                doc,
                                docWithLocales,
                                errors,
                                fieldLabelPath: blockLabelPath,
                                fields: block.fields,
                                global,
                                mergeLocaleActions,
                                operation,
                                overrideAccess,
                                parentIndexPath: '',
                                parentIsLocalized: parentIsLocalized || field.localized,
                                parentPath: path + '.' + rowIndex,
                                parentSchemaPath: schemaPath + '.' + block.slug,
                                req,
                                siblingData: row,
                                siblingDoc: rowSiblingDoc,
                                siblingDocWithLocales: rowSiblingDocWithLocales,
                                skipValidation: skipValidationFromHere
                            }));
                        }
                    });
                    await Promise.all(promises);
                }
                break;
            }
        case 'collapsible':
        case 'row':
            {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                    id,
                    blockData,
                    collection,
                    context,
                    data,
                    doc,
                    docWithLocales,
                    errors,
                    fieldLabelPath: field.type === 'row' || field?.label === false ? fieldLabelPath : buildFieldLabel(fieldLabelPath, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getTranslatedLabel$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTranslatedLabel"])(field?.label || field?.type, req.i18n)),
                    fields: field.fields,
                    global,
                    mergeLocaleActions,
                    operation,
                    overrideAccess,
                    parentIndexPath: indexPath,
                    parentIsLocalized,
                    parentPath,
                    parentSchemaPath: schemaPath,
                    req,
                    siblingData,
                    siblingDoc,
                    siblingDocWithLocales: siblingDocWithLocales,
                    skipValidation: skipValidationFromHere
                });
                break;
            }
        case 'group':
            {
                let groupSiblingData = siblingData;
                let groupSiblingDoc = siblingDoc;
                let groupSiblingDocWithLocales = siblingDocWithLocales;
                const isNamedGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field);
                if (isNamedGroup) {
                    if (typeof siblingData[field.name] !== 'object') {
                        siblingData[field.name] = {};
                    }
                    if (typeof siblingDoc[field.name] !== 'object') {
                        siblingDoc[field.name] = {};
                    }
                    if (typeof siblingDocWithLocales[field.name] !== 'object') {
                        siblingDocWithLocales[field.name] = {};
                    }
                    if (typeof siblingData[field.name] !== 'object') {
                        siblingData[field.name] = {};
                    }
                    if (typeof siblingDoc[field.name] !== 'object') {
                        siblingDoc[field.name] = {};
                    }
                    if (typeof siblingDocWithLocales[field.name] !== 'object') {
                        siblingDocWithLocales[field.name] = {};
                    }
                    groupSiblingData = siblingData[field.name];
                    groupSiblingDoc = siblingDoc[field.name];
                    groupSiblingDocWithLocales = siblingDocWithLocales[field.name];
                }
                const fallbackLabel = field?.label || (isNamedGroup ? field.name : field?.type);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                    id,
                    blockData,
                    collection,
                    context,
                    data,
                    doc,
                    docWithLocales,
                    errors,
                    fieldLabelPath: field?.label === false ? fieldLabelPath : buildFieldLabel(fieldLabelPath, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getTranslatedLabel$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTranslatedLabel"])(fallbackLabel, req.i18n)),
                    fields: field.fields,
                    global,
                    mergeLocaleActions,
                    operation,
                    overrideAccess,
                    parentIndexPath: isNamedGroup ? '' : indexPath,
                    parentIsLocalized: parentIsLocalized || field.localized,
                    parentPath: isNamedGroup ? path : parentPath,
                    parentSchemaPath: schemaPath,
                    req,
                    siblingData: groupSiblingData,
                    siblingDoc: groupSiblingDoc,
                    siblingDocWithLocales: groupSiblingDocWithLocales,
                    skipValidation: skipValidationFromHere
                });
                break;
            }
        case 'point':
            {
                // Transform point data for storage
                if (Array.isArray(siblingData[field.name]) && siblingData[field.name][0] !== null && siblingData[field.name][1] !== null) {
                    siblingData[field.name] = {
                        type: 'Point',
                        coordinates: [
                            parseFloat(siblingData[field.name][0]),
                            parseFloat(siblingData[field.name][1])
                        ]
                    };
                }
                break;
            }
        case 'richText':
            {
                if (!field?.editor) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MissingEditorProp"](field) // while we allow disabling editor functionality, you should not have any richText fields defined if you do not have an editor
                    ;
                }
                if (typeof field?.editor === 'function') {
                    throw new Error('Attempted to access unsanitized rich text editor.');
                }
                const editor = field?.editor;
                if (editor?.hooks?.beforeChange?.length) {
                    for (const hook of editor.hooks.beforeChange){
                        const hookedValue = await hook({
                            collection,
                            context,
                            data,
                            docWithLocales,
                            errors,
                            field,
                            fieldLabelPath: field?.label === false ? fieldLabelPath : buildFieldLabel(fieldLabelPath, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getTranslatedLabel$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTranslatedLabel"])(field?.label || field?.name, req.i18n)),
                            global,
                            indexPath: indexPathSegments,
                            mergeLocaleActions,
                            operation,
                            originalDoc: doc,
                            overrideAccess,
                            parentIsLocalized,
                            path: pathSegments,
                            previousSiblingDoc: siblingDoc,
                            previousValue: siblingDoc[field.name],
                            req,
                            schemaPath: schemaPathSegments,
                            siblingData,
                            siblingDocWithLocales,
                            skipValidation,
                            value: siblingData[field.name]
                        });
                        if (hookedValue !== undefined) {
                            siblingData[field.name] = hookedValue;
                        }
                    }
                }
                break;
            }
        case 'tab':
            {
                let tabSiblingData = siblingData;
                let tabSiblingDoc = siblingDoc;
                let tabSiblingDocWithLocales = siblingDocWithLocales;
                const isNamedTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tabHasName"])(field);
                if (isNamedTab) {
                    if (typeof siblingData[field.name] !== 'object') {
                        siblingData[field.name] = {};
                    }
                    if (typeof siblingDoc[field.name] !== 'object') {
                        siblingDoc[field.name] = {};
                    }
                    if (typeof siblingDocWithLocales[field.name] !== 'object') {
                        siblingDocWithLocales[field.name] = {};
                    }
                    tabSiblingData = siblingData[field.name];
                    tabSiblingDoc = siblingDoc[field.name];
                    tabSiblingDocWithLocales = siblingDocWithLocales[field.name];
                }
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                    id,
                    blockData,
                    collection,
                    context,
                    data,
                    doc,
                    docWithLocales,
                    errors,
                    fieldLabelPath: field?.label === false ? fieldLabelPath : buildFieldLabel(fieldLabelPath, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getTranslatedLabel$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTranslatedLabel"])(field?.label || field.name, req.i18n)),
                    fields: field.fields,
                    global,
                    mergeLocaleActions,
                    operation,
                    overrideAccess,
                    parentIndexPath: isNamedTab ? '' : indexPath,
                    parentIsLocalized: parentIsLocalized || field.localized,
                    parentPath: isNamedTab ? path : parentPath,
                    parentSchemaPath: schemaPath,
                    req,
                    siblingData: tabSiblingData,
                    siblingDoc: tabSiblingDoc,
                    siblingDocWithLocales: tabSiblingDocWithLocales,
                    skipValidation: skipValidationFromHere
                });
                break;
            }
        case 'tabs':
            {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                    id,
                    blockData,
                    collection,
                    context,
                    data,
                    doc,
                    docWithLocales,
                    errors,
                    fieldLabelPath: field?.label === false ? fieldLabelPath : buildFieldLabel(fieldLabelPath, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getTranslatedLabel$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTranslatedLabel"])(field?.label || '', req.i18n)),
                    fields: field.tabs.map((tab)=>({
                            ...tab,
                            type: 'tab'
                        })),
                    global,
                    mergeLocaleActions,
                    operation,
                    overrideAccess,
                    parentIndexPath: indexPath,
                    parentIsLocalized,
                    parentPath: path,
                    parentSchemaPath: schemaPath,
                    req,
                    siblingData,
                    siblingDoc,
                    siblingDocWithLocales: siblingDocWithLocales,
                    skipValidation: skipValidationFromHere
                });
                break;
            }
        default:
            {
                break;
            }
    }
}; //# sourceMappingURL=promise.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeChange/traverseFields.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "traverseFields",
    ()=>traverseFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeChange/promise.js [app-route] (ecmascript)");
;
const traverseFields = async ({ id, blockData, collection, context, data, doc, docWithLocales, errors, fieldLabelPath, fields, global, mergeLocaleActions, operation, overrideAccess, parentIndexPath, parentIsLocalized, parentPath, parentSchemaPath, req, siblingData, siblingDoc, siblingDocWithLocales, skipValidation })=>{
    const promises = [];
    fields.forEach((field, fieldIndex)=>{
        promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["promise"])({
            id,
            blockData,
            collection,
            context,
            data,
            doc,
            docWithLocales,
            errors,
            field,
            fieldIndex,
            fieldLabelPath,
            global,
            mergeLocaleActions,
            operation,
            overrideAccess,
            parentIndexPath,
            parentIsLocalized: parentIsLocalized,
            parentPath,
            parentSchemaPath,
            req,
            siblingData,
            siblingDoc,
            siblingDocWithLocales,
            siblingFields: fields,
            skipValidation: skipValidation
        }));
    });
    await Promise.all(promises);
}; //# sourceMappingURL=traverseFields.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeChange/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "beforeChange",
    ()=>beforeChange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ValidationError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/ValidationError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/deepCopyObject.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeChange/traverseFields.js [app-route] (ecmascript)");
;
;
;
const beforeChange = async ({ id, collection, context, data: incomingData, doc, docWithLocales, global, operation, overrideAccess, req, skipValidation })=>{
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(incomingData);
    const mergeLocaleActions = [];
    const errors = [];
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
        id,
        collection,
        context,
        data,
        doc,
        docWithLocales,
        errors,
        fieldLabelPath: '',
        fields: collection?.fields || global?.fields,
        global,
        mergeLocaleActions,
        operation,
        overrideAccess: overrideAccess,
        parentIndexPath: '',
        parentIsLocalized: false,
        parentPath: '',
        parentSchemaPath: '',
        req,
        siblingData: data,
        siblingDoc: doc,
        siblingDocWithLocales: docWithLocales,
        skipValidation
    });
    if (errors.length > 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ValidationError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ValidationError"]({
            id,
            collection: collection?.slug,
            errors,
            global: global?.slug,
            req
        }, req.t);
    }
    for (const action of mergeLocaleActions){
        await action();
    }
    return data;
}; //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeChange/cloneDataFromOriginalDoc.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cloneDataFromOriginalDoc",
    ()=>cloneDataFromOriginalDoc
]);
const cloneDataFromOriginalDoc = (originalDocData)=>{
    if (Array.isArray(originalDocData)) {
        return originalDocData.map((row)=>{
            if (typeof row === 'object' && row != null) {
                return {
                    ...row
                };
            }
            return row;
        });
    }
    if (typeof originalDocData === 'object' && originalDocData !== null) {
        return {
            ...originalDocData
        };
    }
    return originalDocData;
}; //# sourceMappingURL=cloneDataFromOriginalDoc.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeValidate/getFallbackValue.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFallbackValue",
    ()=>getFallbackValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getDefaultValue$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/getDefaultValue.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$cloneDataFromOriginalDoc$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeChange/cloneDataFromOriginalDoc.js [app-route] (ecmascript)");
;
;
async function getFallbackValue({ field, req, siblingDoc }) {
    let fallbackValue = undefined;
    if ('name' in field && field.name) {
        if (typeof siblingDoc[field.name] !== 'undefined') {
            fallbackValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$cloneDataFromOriginalDoc$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cloneDataFromOriginalDoc"])(siblingDoc[field.name]);
        } else if ('defaultValue' in field && typeof field.defaultValue !== 'undefined') {
            fallbackValue = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getDefaultValue$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDefaultValue"])({
                defaultValue: field.defaultValue,
                locale: req.locale || '',
                req,
                user: req.user
            });
        }
    }
    return fallbackValue;
} //# sourceMappingURL=getFallbackValue.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeValidate/promise.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "promise",
    ()=>promise
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/MissingEditorProp.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/config/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getFieldPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/getFieldPaths.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$getExistingRowDoc$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeChange/getExistingRowDoc.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$getFallbackValue$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeValidate/getFallbackValue.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeValidate/traverseFields.js [app-route] (ecmascript)");
;
;
;
;
;
;
const promise = async ({ id, blockData, collection, context, data, doc, field, fieldIndex, global, operation, overrideAccess, parentIndexPath, parentIsLocalized, parentPath, parentSchemaPath, req, siblingData, siblingDoc, siblingFields })=>{
    const { indexPath, path, schemaPath } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getFieldPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFieldPathsModified"])({
        field,
        index: fieldIndex,
        parentIndexPath,
        parentPath,
        parentSchemaPath
    });
    const pathSegments = path ? path.split('.') : [];
    const schemaPathSegments = schemaPath ? schemaPath.split('.') : [];
    const indexPathSegments = indexPath ? indexPath.split('-').filter(Boolean)?.map(Number) : [];
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
        if (field.name === 'id') {
            if (field.type === 'number' && typeof siblingData[field.name] === 'string') {
                const value = siblingData[field.name];
                siblingData[field.name] = parseFloat(value);
            }
            if (field.type === 'text' && typeof siblingData[field.name]?.toString === 'function' && typeof siblingData[field.name] !== 'string') {
                siblingData[field.name] = siblingData[field.name].toString();
            }
        }
        // Sanitize incoming data
        switch(field.type){
            case 'array':
            case 'blocks':
                {
                    // Handle cases of arrays being intentionally set to 0
                    if (siblingData[field.name] === '0' || siblingData[field.name] === 0) {
                        siblingData[field.name] = [];
                    }
                    break;
                }
            case 'checkbox':
                {
                    if (siblingData[field.name] === 'true') {
                        siblingData[field.name] = true;
                    }
                    if (siblingData[field.name] === 'false') {
                        siblingData[field.name] = false;
                    }
                    if (siblingData[field.name] === '') {
                        siblingData[field.name] = false;
                    }
                    break;
                }
            case 'number':
                {
                    if (typeof siblingData[field.name] === 'string') {
                        const value = siblingData[field.name];
                        const trimmed = value.trim();
                        siblingData[field.name] = trimmed.length === 0 ? null : parseFloat(trimmed);
                    }
                    break;
                }
            case 'point':
                {
                    if (Array.isArray(siblingData[field.name])) {
                        siblingData[field.name] = siblingData[field.name].map((coordinate, i)=>{
                            if (typeof coordinate === 'string') {
                                const value = siblingData[field.name][i];
                                const trimmed = value.trim();
                                return trimmed.length === 0 ? null : parseFloat(trimmed);
                            }
                            return coordinate;
                        });
                    }
                    break;
                }
            case 'relationship':
            case 'upload':
                {
                    if (siblingData[field.name] === '' || siblingData[field.name] === 'none' || siblingData[field.name] === 'null' || siblingData[field.name] === null) {
                        if (field.hasMany === true) {
                            siblingData[field.name] = [];
                        } else {
                            siblingData[field.name] = null;
                        }
                    }
                    const value = siblingData[field.name];
                    if (Array.isArray(field.relationTo)) {
                        if (Array.isArray(value)) {
                            value.forEach((relatedDoc, i)=>{
                                const relatedCollection = req.payload.collections?.[relatedDoc.relationTo]?.config;
                                if (typeof relatedDoc.value === 'object' && relatedDoc.value && 'id' in relatedDoc.value) {
                                    relatedDoc.value = relatedDoc.value.id;
                                }
                                if (relatedCollection?.fields) {
                                    const relationshipIDField = relatedCollection.fields.find((collectionField)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(collectionField) && collectionField.name === 'id');
                                    if (relationshipIDField?.type === 'number') {
                                        siblingData[field.name][i] = {
                                            ...relatedDoc,
                                            value: parseFloat(relatedDoc.value)
                                        };
                                    }
                                }
                            });
                        }
                        if (field.hasMany !== true && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["valueIsValueWithRelation"])(value)) {
                            const relatedCollection = req.payload.collections?.[value.relationTo]?.config;
                            if (typeof value.value === 'object' && value.value && 'id' in value.value) {
                                value.value = value.value.id;
                            }
                            if (relatedCollection?.fields) {
                                const relationshipIDField = relatedCollection.fields.find((collectionField)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(collectionField) && collectionField.name === 'id');
                                if (relationshipIDField?.type === 'number') {
                                    siblingData[field.name] = {
                                        ...value,
                                        value: parseFloat(value.value)
                                    };
                                }
                            }
                        }
                    } else {
                        if (Array.isArray(value)) {
                            value.forEach((relatedDoc, i)=>{
                                const relatedCollection = Array.isArray(field.relationTo) ? undefined : req.payload.collections?.[field.relationTo]?.config;
                                if (typeof relatedDoc === 'object' && relatedDoc && 'id' in relatedDoc) {
                                    value[i] = relatedDoc.id;
                                }
                                if (relatedCollection?.fields) {
                                    const relationshipIDField = relatedCollection.fields.find((collectionField)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(collectionField) && collectionField.name === 'id');
                                    if (relationshipIDField?.type === 'number') {
                                        siblingData[field.name][i] = parseFloat(relatedDoc);
                                    }
                                }
                            });
                        }
                        if (field.hasMany !== true && value) {
                            const relatedCollection = req.payload.collections?.[field.relationTo]?.config;
                            if (typeof value === 'object' && value && 'id' in value) {
                                siblingData[field.name] = value.id;
                            }
                            if (relatedCollection?.fields) {
                                const relationshipIDField = relatedCollection.fields.find((collectionField)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(collectionField) && collectionField.name === 'id');
                                if (relationshipIDField?.type === 'number') {
                                    siblingData[field.name] = parseFloat(value);
                                }
                            }
                        }
                    }
                    break;
                }
            case 'richText':
                {
                    if (typeof siblingData[field.name] === 'string') {
                        try {
                            const richTextJSON = JSON.parse(siblingData[field.name]);
                            siblingData[field.name] = richTextJSON;
                        } catch  {
                        // Disregard this data as it is not valid.
                        // Will be reported to user by field validation
                        }
                    }
                    break;
                }
            default:
                {
                    break;
                }
        }
        // ensure the fallback value is only computed one time
        // either here or when access control returns false
        const fallbackResult = {
            executed: false,
            value: undefined
        };
        if (typeof siblingData[field.name] === 'undefined') {
            fallbackResult.value = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$getFallbackValue$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFallbackValue"])({
                field,
                req,
                siblingDoc
            });
            fallbackResult.executed = true;
        }
        // Execute hooks
        if ('hooks' in field && field.hooks?.beforeValidate) {
            for (const hook of field.hooks.beforeValidate){
                const hookedValue = await hook({
                    blockData,
                    collection,
                    context,
                    data: data,
                    field,
                    global,
                    indexPath: indexPathSegments,
                    operation,
                    originalDoc: doc,
                    overrideAccess,
                    path: pathSegments,
                    previousSiblingDoc: siblingDoc,
                    previousValue: siblingDoc[field.name],
                    req,
                    schemaPath: schemaPathSegments,
                    siblingData,
                    siblingFields: siblingFields,
                    value: typeof siblingData[field.name] === 'undefined' ? fallbackResult.value : siblingData[field.name]
                });
                if (hookedValue !== undefined) {
                    siblingData[field.name] = hookedValue;
                }
            }
        }
        // Execute access control
        if (field.access && field.access[operation]) {
            const result = overrideAccess ? true : await field.access[operation]({
                id,
                blockData,
                data: data,
                doc,
                req,
                siblingData
            });
            if (!result) {
                delete siblingData[field.name];
            }
        }
        if (typeof siblingData[field.name] === 'undefined') {
            siblingData[field.name] = !fallbackResult.executed ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$getFallbackValue$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFallbackValue"])({
                field,
                req,
                siblingDoc
            }) : fallbackResult.value;
        }
    }
    // Traverse subfields
    switch(field.type){
        case 'array':
            {
                const rows = siblingData[field.name];
                if (Array.isArray(rows)) {
                    const promises = [];
                    rows.forEach((row, rowIndex)=>{
                        promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                            id,
                            blockData,
                            collection,
                            context,
                            data,
                            doc,
                            fields: field.fields,
                            global,
                            operation,
                            overrideAccess,
                            parentIndexPath: '',
                            parentIsLocalized: parentIsLocalized || field.localized,
                            parentPath: path + '.' + rowIndex,
                            parentSchemaPath: schemaPath,
                            req,
                            siblingData: row,
                            siblingDoc: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$getExistingRowDoc$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getExistingRowDoc"])(row, siblingDoc[field.name])
                        }));
                    });
                    await Promise.all(promises);
                }
                break;
            }
        case 'blocks':
            {
                const rows = siblingData[field.name];
                if (Array.isArray(rows)) {
                    const promises = [];
                    rows.forEach((row, rowIndex)=>{
                        const rowSiblingDoc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$getExistingRowDoc$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getExistingRowDoc"])(row, siblingDoc[field.name]);
                        const blockTypeToMatch = row.blockType || rowSiblingDoc.blockType;
                        const block = req.payload.blocks[blockTypeToMatch] ?? (field.blockReferences ?? field.blocks).find((curBlock)=>typeof curBlock !== 'string' && curBlock.slug === blockTypeToMatch);
                        if (block) {
                            ;
                            row.blockType = blockTypeToMatch;
                            promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                                id,
                                blockData: row,
                                collection,
                                context,
                                data,
                                doc,
                                fields: block.fields,
                                global,
                                operation,
                                overrideAccess,
                                parentIndexPath: '',
                                parentIsLocalized: parentIsLocalized || field.localized,
                                parentPath: path + '.' + rowIndex,
                                parentSchemaPath: schemaPath + '.' + block.slug,
                                req,
                                siblingData: row,
                                siblingDoc: rowSiblingDoc
                            }));
                        }
                    });
                    await Promise.all(promises);
                }
                break;
            }
        case 'collapsible':
        case 'row':
            {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                    id,
                    blockData,
                    collection,
                    context,
                    data,
                    doc,
                    fields: field.fields,
                    global,
                    operation,
                    overrideAccess,
                    parentIndexPath: indexPath,
                    parentIsLocalized,
                    parentPath,
                    parentSchemaPath: schemaPath,
                    req,
                    siblingData,
                    siblingDoc
                });
                break;
            }
        case 'group':
            {
                let groupSiblingData = siblingData;
                let groupSiblingDoc = siblingDoc;
                const isNamedGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field);
                if (isNamedGroup) {
                    if (typeof siblingData[field.name] !== 'object') {
                        siblingData[field.name] = {};
                    }
                    if (typeof siblingDoc[field.name] !== 'object') {
                        siblingDoc[field.name] = {};
                    }
                    groupSiblingData = siblingData[field.name];
                    groupSiblingDoc = siblingDoc[field.name];
                }
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                    id,
                    blockData,
                    collection,
                    context,
                    data,
                    doc,
                    fields: field.fields,
                    global,
                    operation,
                    overrideAccess,
                    parentIndexPath: isNamedGroup ? '' : indexPath,
                    parentIsLocalized: parentIsLocalized || field.localized,
                    parentPath: isNamedGroup ? path : parentPath,
                    parentSchemaPath: schemaPath,
                    req,
                    siblingData: groupSiblingData,
                    siblingDoc: groupSiblingDoc
                });
                break;
            }
        case 'richText':
            {
                if (!field?.editor) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MissingEditorProp"](field) // while we allow disabling editor functionality, you should not have any richText fields defined if you do not have an editor
                    ;
                }
                if (typeof field?.editor === 'function') {
                    throw new Error('Attempted to access unsanitized rich text editor.');
                }
                const editor = field?.editor;
                if (editor?.hooks?.beforeValidate?.length) {
                    for (const hook of editor.hooks.beforeValidate){
                        const hookedValue = await hook({
                            collection,
                            context,
                            data: data,
                            field,
                            global,
                            indexPath: indexPathSegments,
                            operation,
                            originalDoc: doc,
                            overrideAccess,
                            parentIsLocalized,
                            path: pathSegments,
                            previousSiblingDoc: siblingDoc,
                            previousValue: siblingData[field.name],
                            req,
                            schemaPath: schemaPathSegments,
                            siblingData,
                            value: siblingData[field.name]
                        });
                        if (hookedValue !== undefined) {
                            siblingData[field.name] = hookedValue;
                        }
                    }
                }
                break;
            }
        case 'tab':
            {
                let tabSiblingData;
                let tabSiblingDoc;
                const isNamedTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tabHasName"])(field);
                if (isNamedTab) {
                    if (typeof siblingData[field.name] !== 'object') {
                        siblingData[field.name] = {};
                    }
                    if (typeof siblingDoc[field.name] !== 'object') {
                        siblingDoc[field.name] = {};
                    }
                    tabSiblingData = siblingData[field.name];
                    tabSiblingDoc = siblingDoc[field.name];
                } else {
                    tabSiblingData = siblingData;
                    tabSiblingDoc = siblingDoc;
                }
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                    id,
                    blockData,
                    collection,
                    context,
                    data,
                    doc,
                    fields: field.fields,
                    global,
                    operation,
                    overrideAccess,
                    parentIndexPath: isNamedTab ? '' : indexPath,
                    parentIsLocalized: parentIsLocalized || field.localized,
                    parentPath: isNamedTab ? path : parentPath,
                    parentSchemaPath: schemaPath,
                    req,
                    siblingData: tabSiblingData,
                    siblingDoc: tabSiblingDoc
                });
                break;
            }
        case 'tabs':
            {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                    id,
                    blockData,
                    collection,
                    context,
                    data,
                    doc,
                    fields: field.tabs.map((tab)=>({
                            ...tab,
                            type: 'tab'
                        })),
                    global,
                    operation,
                    overrideAccess,
                    parentIndexPath: indexPath,
                    parentIsLocalized,
                    parentPath: path,
                    parentSchemaPath: schemaPath,
                    req,
                    siblingData,
                    siblingDoc
                });
                break;
            }
        default:
            {
                break;
            }
    }
}; //# sourceMappingURL=promise.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeValidate/traverseFields.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "traverseFields",
    ()=>traverseFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeValidate/promise.js [app-route] (ecmascript)");
;
const traverseFields = async ({ id, blockData, collection, context, data, doc, fields, global, operation, overrideAccess, parentIndexPath, parentIsLocalized, parentPath, parentSchemaPath, req, siblingData, siblingDoc })=>{
    const promises = [];
    fields.forEach((field, fieldIndex)=>{
        promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["promise"])({
            id,
            blockData,
            collection,
            context,
            data,
            doc,
            field,
            fieldIndex,
            global,
            operation,
            overrideAccess,
            parentIndexPath,
            parentIsLocalized: parentIsLocalized,
            parentPath,
            parentSchemaPath,
            req,
            siblingData,
            siblingDoc,
            siblingFields: fields
        }));
    });
    await Promise.all(promises);
}; //# sourceMappingURL=traverseFields.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeValidate/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "beforeValidate",
    ()=>beforeValidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeValidate/traverseFields.js [app-route] (ecmascript)");
;
const beforeValidate = async ({ id, collection, context, data: incomingData, doc, global, operation, overrideAccess, req })=>{
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
        id,
        collection,
        context,
        data: incomingData,
        doc,
        fields: collection?.fields || global?.fields,
        global,
        operation,
        overrideAccess,
        parentIndexPath: '',
        parentIsLocalized: false,
        parentPath: '',
        parentSchemaPath: '',
        req,
        siblingData: incomingData,
        siblingDoc: doc
    });
    return incomingData;
}; //# sourceMappingURL=index.js.map
}),
];

//# sourceMappingURL=1c115_payload_dist_fields_1139831f._.js.map