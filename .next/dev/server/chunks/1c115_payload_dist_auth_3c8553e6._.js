module.exports = [
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/executeAuthStrategies.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "executeAuthStrategies",
    ()=>executeAuthStrategies
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$logError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/logError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$mergeHeaders$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/mergeHeaders.js [app-route] (ecmascript)");
;
;
const executeAuthStrategies = async (args)=>{
    let result = {
        user: null
    };
    if (!args.payload.authStrategies?.length) {
        return result;
    }
    for (const strategy of args.payload.authStrategies){
        // add the configured AuthStrategy `name` to the strategy function args
        args.strategyName = strategy.name;
        args.isGraphQL = Boolean(args.isGraphQL);
        args.canSetHeaders = Boolean(args.canSetHeaders);
        try {
            const authResult = await strategy.authenticate(args);
            if (authResult.responseHeaders) {
                authResult.responseHeaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$mergeHeaders$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeHeaders"])(result.responseHeaders || new Headers(), authResult.responseHeaders || new Headers());
            }
            result = authResult;
        } catch (err) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$logError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logError"])({
                err,
                payload: args.payload
            });
        }
        if (result.user) {
            return result;
        }
    }
    return result;
}; //# sourceMappingURL=executeAuthStrategies.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/getLoginOptions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLoginOptions",
    ()=>getLoginOptions
]);
const getLoginOptions = (loginWithUsername)=>{
    return {
        canLoginWithEmail: !loginWithUsername || loginWithUsername.allowEmailLogin,
        canLoginWithUsername: Boolean(loginWithUsername)
    };
}; //# sourceMappingURL=getLoginOptions.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/operations/forgotPassword.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "forgotPasswordOperation",
    ()=>forgotPasswordOperation
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/url [external] (url, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildAfterOperation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildBeforeOperation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/Forbidden.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$appendNonTrashedFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/appendNonTrashedFilter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/commitTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatAdminURL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/formatAdminURL.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/initTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/killTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$getLoginOptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/getLoginOptions.js [app-route] (ecmascript)");
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
const forgotPasswordOperation = async (incomingArgs)=>{
    const loginWithUsername = incomingArgs.collection.config.auth.loginWithUsername;
    const { data } = incomingArgs;
    const { canLoginWithEmail, canLoginWithUsername } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$getLoginOptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getLoginOptions"])(loginWithUsername);
    const sanitizedEmail = canLoginWithEmail && (incomingArgs.data.email || '').toLowerCase().trim() || null;
    const sanitizedUsername = 'username' in data && typeof data?.username === 'string' ? data.username.toLowerCase().trim() : null;
    let args = incomingArgs;
    if (incomingArgs.collection.config.auth.disableLocalStrategy) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Forbidden"](incomingArgs.req.t);
    }
    if (!sanitizedEmail && !sanitizedUsername) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`Missing ${loginWithUsername ? 'username' : 'email'}.`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].BAD_REQUEST);
    }
    try {
        const shouldCommit = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initTransaction"])(args.req);
        // /////////////////////////////////////
        // beforeOperation - Collection
        // /////////////////////////////////////
        args = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildBeforeOperation"])({
            args,
            collection: args.collection.config,
            operation: 'forgotPassword'
        });
        const { collection: { config: collectionConfig }, disableEmail, expiration, req: { payload: { config, email }, payload }, req } = args;
        // /////////////////////////////////////
        // Forget password
        // /////////////////////////////////////
        let token = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomBytes(20).toString('hex');
        if (!sanitizedEmail && !sanitizedUsername) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`Missing ${loginWithUsername ? 'username' : 'email'}.`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].BAD_REQUEST);
        }
        let whereConstraint = {};
        if (canLoginWithEmail && sanitizedEmail) {
            whereConstraint = {
                email: {
                    equals: sanitizedEmail
                }
            };
        } else if (canLoginWithUsername && sanitizedUsername) {
            whereConstraint = {
                username: {
                    equals: sanitizedUsername
                }
            };
        }
        // Exclude trashed users unless `trash: true`
        whereConstraint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$appendNonTrashedFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendNonTrashedFilter"])({
            enableTrash: collectionConfig.trash,
            trash: false,
            where: whereConstraint
        });
        let user = await payload.db.findOne({
            collection: collectionConfig.slug,
            req,
            where: whereConstraint
        });
        // We don't want to indicate specifically that an email was not found,
        // as doing so could lead to the exposure of registered emails.
        // Therefore, we prefer to fail silently.
        if (!user) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["commitTransaction"])(args.req);
            return null;
        }
        const resetPasswordExpiration = new Date(Date.now() + (collectionConfig.auth?.forgotPassword?.expiration ?? expiration ?? 3600000)).toISOString();
        user = await payload.update({
            id: user.id,
            collection: collectionConfig.slug,
            data: {
                resetPasswordExpiration,
                resetPasswordToken: token
            },
            req
        });
        if (!disableEmail && user.email) {
            const protocol = new __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["URL"](req.url).protocol // includes the final :
            ;
            const serverURL = config.serverURL !== null && config.serverURL !== '' ? config.serverURL : `${protocol}//${req.headers.get('host')}`;
            const forgotURL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatAdminURL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatAdminURL"])({
                adminRoute: config.routes.admin,
                path: `${config.admin.routes.reset}/${token}`,
                serverURL
            });
            let html = `${req.t('authentication:youAreReceivingResetPassword')}
    <a href="${forgotURL}">${forgotURL}</a>
    ${req.t('authentication:youDidNotRequestPassword')}`;
            if (typeof collectionConfig.auth.forgotPassword?.generateEmailHTML === 'function') {
                html = await collectionConfig.auth.forgotPassword.generateEmailHTML({
                    req,
                    token,
                    user
                });
            }
            let subject = req.t('authentication:resetYourPassword');
            if (typeof collectionConfig.auth.forgotPassword?.generateEmailSubject === 'function') {
                subject = await collectionConfig.auth.forgotPassword.generateEmailSubject({
                    req,
                    token,
                    user
                });
            }
            await email.sendEmail({
                from: `"${email.defaultFromName}" <${email.defaultFromAddress}>`,
                html,
                subject,
                to: user.email
            });
        }
        // /////////////////////////////////////
        // afterForgotPassword - Collection
        // /////////////////////////////////////
        if (collectionConfig.hooks?.afterForgotPassword?.length) {
            for (const hook of collectionConfig.hooks.afterForgotPassword){
                await hook({
                    args,
                    collection: args.collection?.config,
                    context: req.context
                });
            }
        }
        // /////////////////////////////////////
        // afterOperation - Collection
        // /////////////////////////////////////
        token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildAfterOperation"])({
            args,
            collection: args.collection?.config,
            operation: 'forgotPassword',
            result: token
        });
        if (shouldCommit) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["commitTransaction"])(req);
        }
        return token;
    } catch (error) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["killTransaction"])(args.req);
        throw error;
    }
}; //# sourceMappingURL=forgotPassword.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/operations/local/forgotPassword.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "forgotPasswordLocal",
    ()=>forgotPasswordLocal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/createLocalReq.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$forgotPassword$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/operations/forgotPassword.js [app-route] (ecmascript)");
;
;
;
async function forgotPasswordLocal(payload, options) {
    const { collection: collectionSlug, data, disableEmail, expiration } = options;
    const collection = payload.collections[collectionSlug];
    if (!collection) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`The collection with slug ${String(collectionSlug)} can't be found. Forgot Password Operation.`);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$forgotPassword$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["forgotPasswordOperation"])({
        collection,
        data,
        disableEmail,
        expiration,
        req: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])(options, payload)
    });
} //# sourceMappingURL=forgotPassword.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/getFieldsToSign.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFieldsToSign",
    ()=>getFieldsToSign
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/config/types.js [app-route] (ecmascript)");
;
const traverseFields = ({ data, fields, result })=>{
    fields.forEach((field)=>{
        switch(field.type){
            case 'collapsible':
            case 'row':
                {
                    traverseFields({
                        data,
                        fields: field.fields,
                        result
                    });
                    break;
                }
            case 'group':
                {
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
                        let targetResult;
                        if (typeof field.saveToJWT === 'string') {
                            targetResult = field.saveToJWT;
                            result[field.saveToJWT] = data[field.name];
                        } else if (field.saveToJWT) {
                            targetResult = field.name;
                            result[field.name] = data[field.name];
                        }
                        const groupData = data[field.name];
                        const groupResult = targetResult ? result[targetResult] : result;
                        traverseFields({
                            data: groupData,
                            fields: field.fields,
                            result: groupResult
                        });
                        break;
                    } else {
                        traverseFields({
                            data,
                            fields: field.fields,
                            result
                        });
                        break;
                    }
                }
            case 'tab':
                {
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tabHasName"])(field)) {
                        let targetResult;
                        if (typeof field.saveToJWT === 'string') {
                            targetResult = field.saveToJWT;
                            result[field.saveToJWT] = data[field.name];
                        } else if (field.saveToJWT) {
                            targetResult = field.name;
                            result[field.name] = data[field.name];
                        }
                        const tabData = data[field.name];
                        const tabResult = targetResult ? result[targetResult] : result;
                        traverseFields({
                            data: tabData,
                            fields: field.fields,
                            result: tabResult
                        });
                    } else {
                        traverseFields({
                            data,
                            fields: field.fields,
                            result
                        });
                    }
                    break;
                }
            case 'tabs':
                {
                    traverseFields({
                        data,
                        fields: field.tabs.map((tab)=>({
                                ...tab,
                                type: 'tab'
                            })),
                        result
                    });
                    break;
                }
            default:
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
                    if (field.saveToJWT) {
                        if (typeof field.saveToJWT === 'string') {
                            result[field.saveToJWT] = data[field.name];
                            delete result[field.name];
                        } else {
                            result[field.name] = data[field.name];
                        }
                    } else if (field.saveToJWT === false) {
                        delete result[field.name];
                    }
                }
        }
    });
    return result;
};
const getFieldsToSign = (args)=>{
    const { collectionConfig, email, sid, user } = args;
    const result = {
        id: user?.id,
        collection: collectionConfig.slug,
        email
    };
    if (sid) {
        result.sid = sid;
    }
    traverseFields({
        data: user,
        fields: collectionConfig.fields,
        result
    });
    return result;
}; //# sourceMappingURL=getFieldsToSign.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/isUserLocked.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isUserLocked",
    ()=>isUserLocked
]);
const isUserLocked = (date)=>{
    if (!date) {
        return false;
    }
    return date.getTime() > Date.now();
}; //# sourceMappingURL=isUserLocked.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/jwt.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "jwtSign",
    ()=>jwtSign
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/node/esm/jwt/sign.js [app-route] (ecmascript)");
;
const jwtSign = async ({ fieldsToSign, secret, tokenExpiration })=>{
    const secretKey = new TextEncoder().encode(secret);
    const issuedAt = Math.floor(Date.now() / 1000);
    const exp = issuedAt + tokenExpiration;
    const token = await new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SignJWT"](fieldsToSign).setProtectedHeader({
        alg: 'HS256',
        typ: 'JWT'
    }).setIssuedAt(issuedAt).setExpirationTime(exp).sign(secretKey);
    return {
        exp,
        token
    };
}; //# sourceMappingURL=jwt.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/sessions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addSessionToUser",
    ()=>addSessionToUser,
    "removeExpiredSessions",
    ()=>removeExpiredSessions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$10$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/uuid@10.0.0/node_modules/uuid/dist/esm-node/v4.js [app-route] (ecmascript) <export default as v4>");
;
const removeExpiredSessions = (sessions)=>{
    const now = new Date();
    return sessions.filter(({ expiresAt })=>{
        const expiry = expiresAt instanceof Date ? expiresAt : new Date(expiresAt);
        return expiry > now;
    });
};
const addSessionToUser = async ({ collectionConfig, payload, req, user })=>{
    let sid;
    if (collectionConfig.auth.useSessions) {
        // Add session to user
        sid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$10$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
        const now = new Date();
        const tokenExpInMs = collectionConfig.auth.tokenExpiration * 1000;
        const expiresAt = new Date(now.getTime() + tokenExpInMs);
        const session = {
            id: sid,
            createdAt: now,
            expiresAt
        };
        if (!user.sessions?.length) {
            user.sessions = [
                session
            ];
        } else {
            user.sessions = removeExpiredSessions(user.sessions);
            user.sessions.push(session);
        }
        // Prevent updatedAt from being updated when only adding a session
        user.updatedAt = null;
        await payload.db.updateOne({
            id: user.id,
            collection: collectionConfig.slug,
            data: user,
            req,
            returning: false
        });
        user.collection = collectionConfig.slug;
        user._strategy = 'local-jwt';
    }
    return {
        sid
    };
}; //# sourceMappingURL=sessions.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/strategies/local/authenticate.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// @ts-strict-ignore
__turbopack_context__.s([
    "authenticateLocalStrategy",
    ()=>authenticateLocalStrategy
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
// @ts-expect-error - no types available
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$scmp$40$2$2e$1$2e$0$2f$node_modules$2f$scmp$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/scmp@2.1.0/node_modules/scmp/index.js [app-route] (ecmascript)");
;
;
const authenticateLocalStrategy = async ({ doc, password })=>{
    try {
        const { hash, salt } = doc;
        if (typeof salt === 'string' && typeof hash === 'string') {
            const res = await new Promise((resolve, reject)=>{
                __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].pbkdf2(password, salt, 25000, 512, 'sha256', (e, hashBuffer)=>{
                    if (e) {
                        reject(e);
                    }
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$scmp$40$2$2e$1$2e$0$2f$node_modules$2f$scmp$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(hashBuffer, Buffer.from(hash, 'hex'))) {
                        resolve(doc);
                    } else {
                        reject(new Error('Invalid password'));
                    }
                });
            });
            return res;
        }
        return null;
    } catch (ignore) {
        return null;
    }
}; //# sourceMappingURL=authenticate.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/strategies/local/incrementLoginAttempts.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "incrementLoginAttempts",
    ()=>incrementLoginAttempts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$isUserLocked$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/isUserLocked.js [app-route] (ecmascript)");
;
const incrementLoginAttempts = async ({ collection, payload, req, user })=>{
    const { auth: { lockTime, maxLoginAttempts } } = collection;
    const currentTime = Date.now();
    let updatedLockUntil = null;
    let updatedLoginAttempts = null;
    if (user.lockUntil && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$isUserLocked$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isUserLocked"])(new Date(user.lockUntil))) {
        // Expired lock, restart count at 1
        const updatedUser = await payload.db.updateOne({
            id: user.id,
            collection: collection.slug,
            data: {
                lockUntil: null,
                loginAttempts: 1
            },
            req,
            select: {
                lockUntil: true,
                loginAttempts: true
            }
        });
        updatedLockUntil = updatedUser.lockUntil;
        updatedLoginAttempts = updatedUser.loginAttempts;
        user.lockUntil = updatedLockUntil;
    } else {
        const data = {
            loginAttempts: {
                $inc: 1
            }
        };
        const willReachMaxAttempts = typeof user.loginAttempts === 'number' && user.loginAttempts + 1 >= maxLoginAttempts;
        // Lock the account if at max attempts and not already locked
        if (willReachMaxAttempts) {
            const lockUntil = new Date(currentTime + lockTime).toISOString();
            data.lockUntil = lockUntil;
        }
        const updatedUser = await payload.db.updateOne({
            id: user.id,
            collection: collection.slug,
            data,
            select: {
                lockUntil: true,
                loginAttempts: true
            }
        });
        updatedLockUntil = updatedUser.lockUntil;
        updatedLoginAttempts = updatedUser.loginAttempts;
    }
    if (updatedLoginAttempts === null) {
        throw new Error('Failed to update login attempts or lockUntil for user');
    }
    // Check updated latest lockUntil and loginAttempts in case there were parallel updates
    const reachedMaxAttemptsForCurrentUser = typeof updatedLoginAttempts === 'number' && updatedLoginAttempts - 1 >= maxLoginAttempts;
    const reachedMaxAttemptsForNextUser = typeof updatedLoginAttempts === 'number' && updatedLoginAttempts >= maxLoginAttempts;
    if (reachedMaxAttemptsForCurrentUser) {
        user.lockUntil = updatedLockUntil;
    }
    user.loginAttempts = updatedLoginAttempts - 1; // -1, as the updated increment is applied for the *next* login attempt, not the current one
    if (reachedMaxAttemptsForNextUser && (!updatedLockUntil || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$isUserLocked$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isUserLocked"])(new Date(updatedLockUntil)))) {
        // If lockUntil reached max login attempts due to multiple parallel attempts but user was not locked yet,
        const newLockUntil = new Date(currentTime + lockTime).toISOString();
        await payload.db.updateOne({
            id: user.id,
            collection: collection.slug,
            data: {
                lockUntil: newLockUntil
            },
            returning: false
        });
        if (reachedMaxAttemptsForCurrentUser) {
            user.lockUntil = newLockUntil;
        }
        if (collection.auth.useSessions) {
            // Remove all active sessions that have been created in a 20 second window. This protects
            // against brute force attacks - example: 99 incorrect, 1 correct parallel login attempts.
            // The correct login attempt will be finished first, as it's faster due to not having to perform
            // an additional db update here.
            // However, this request (the incorrect login attempt request) can kill the successful login attempt here.
            // Fetch user sessions separately (do not do this in the updateOne select in order to preserve the returning: true db call optimization)
            const currentUser = await payload.db.findOne({
                collection: collection.slug,
                select: {
                    sessions: true
                },
                where: {
                    id: {
                        equals: user.id
                    }
                }
            });
            if (currentUser?.sessions?.length) {
                // Does not hurt also removing expired sessions
                currentUser.sessions = currentUser.sessions.filter((session)=>{
                    const sessionCreatedAt = new Date(session.createdAt);
                    const twentySecondsAgo = new Date(currentTime - 20000);
                    // Remove sessions created within the last 20 seconds
                    return sessionCreatedAt <= twentySecondsAgo;
                });
                user.sessions = currentUser.sessions;
                // Ensure updatedAt date is always updated
                user.updatedAt = new Date().toISOString();
                await payload.db.updateOne({
                    id: user.id,
                    collection: collection.slug,
                    data: user,
                    returning: false
                });
            }
        }
    }
}; //# sourceMappingURL=incrementLoginAttempts.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/strategies/local/resetLoginAttempts.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resetLoginAttempts",
    ()=>resetLoginAttempts
]);
const resetLoginAttempts = async ({ collection, doc, payload, req })=>{
    if (!('lockUntil' in doc && typeof doc.lockUntil === 'string') && (!('loginAttempts' in doc) || doc.loginAttempts === 0)) {
        return;
    }
    await payload.db.updateOne({
        id: doc.id,
        collection: collection.slug,
        data: {
            lockUntil: null,
            loginAttempts: 0
        },
        req,
        returning: false
    });
}; //# sourceMappingURL=resetLoginAttempts.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/operations/login.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkLoginPermission",
    ()=>checkLoginPermission,
    "loginOperation",
    ()=>loginOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildAfterOperation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildBeforeOperation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$AuthenticationError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/AuthenticationError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$LockedAuth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/LockedAuth.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$UnverifiedEmail$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/UnverifiedEmail.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ValidationError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/ValidationError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterRead/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/Forbidden.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$appendNonTrashedFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/appendNonTrashedFilter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/killTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeInternalFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/sanitizeInternalFields.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$getFieldsToSign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/getFieldsToSign.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$getLoginOptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/getLoginOptions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$isUserLocked$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/isUserLocked.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$jwt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/jwt.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$sessions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/sessions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$strategies$2f$local$2f$authenticate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/strategies/local/authenticate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$strategies$2f$local$2f$incrementLoginAttempts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/strategies/local/incrementLoginAttempts.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$strategies$2f$local$2f$resetLoginAttempts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/strategies/local/resetLoginAttempts.js [app-route] (ecmascript)");
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
const checkLoginPermission = ({ loggingInWithUsername, req, user })=>{
    if (!user) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$AuthenticationError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AuthenticationError"](req.t, Boolean(loggingInWithUsername));
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$isUserLocked$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isUserLocked"])(new Date(user.lockUntil))) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$LockedAuth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LockedAuth"](req.t);
    }
};
const loginOperation = async (incomingArgs)=>{
    let args = incomingArgs;
    if (args.collection.config.auth.disableLocalStrategy) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Forbidden"](args.req.t);
    }
    try {
        // /////////////////////////////////////
        // beforeOperation - Collection
        // /////////////////////////////////////
        args = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildBeforeOperation"])({
            args,
            collection: args.collection.config,
            operation: 'login'
        });
        const { collection: { config: collectionConfig }, data, depth, overrideAccess, req, req: { fallbackLocale, locale, payload, payload: { secret } }, showHiddenFields } = args;
        // /////////////////////////////////////
        // Login
        // /////////////////////////////////////
        const { email: unsanitizedEmail, password } = data;
        const loginWithUsername = collectionConfig.auth.loginWithUsername;
        const sanitizedEmail = typeof unsanitizedEmail === 'string' ? unsanitizedEmail.toLowerCase().trim() : null;
        const sanitizedUsername = 'username' in data && typeof data?.username === 'string' ? data.username.toLowerCase().trim() : null;
        const { canLoginWithEmail, canLoginWithUsername } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$getLoginOptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getLoginOptions"])(loginWithUsername);
        // cannot login with email, did not provide username
        if (!canLoginWithEmail && !sanitizedUsername) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ValidationError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ValidationError"]({
                collection: collectionConfig.slug,
                errors: [
                    {
                        message: req.i18n.t('validation:required'),
                        path: 'username'
                    }
                ]
            });
        }
        // cannot login with username, did not provide email
        if (!canLoginWithUsername && !sanitizedEmail) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ValidationError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ValidationError"]({
                collection: collectionConfig.slug,
                errors: [
                    {
                        message: req.i18n.t('validation:required'),
                        path: 'email'
                    }
                ]
            });
        }
        // can login with either email or username, did not provide either
        if (!sanitizedUsername && !sanitizedEmail) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ValidationError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ValidationError"]({
                collection: collectionConfig.slug,
                errors: [
                    {
                        message: req.i18n.t('validation:required'),
                        path: 'email'
                    },
                    {
                        message: req.i18n.t('validation:required'),
                        path: 'username'
                    }
                ]
            });
        }
        // did not provide password for login
        if (typeof password !== 'string' || password.trim() === '') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ValidationError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ValidationError"]({
                collection: collectionConfig.slug,
                errors: [
                    {
                        message: req.i18n.t('validation:required'),
                        path: 'password'
                    }
                ]
            });
        }
        let whereConstraint = {};
        const emailConstraint = {
            email: {
                equals: sanitizedEmail
            }
        };
        const usernameConstraint = {
            username: {
                equals: sanitizedUsername
            }
        };
        if (canLoginWithEmail && canLoginWithUsername && (sanitizedUsername || sanitizedEmail)) {
            if (sanitizedUsername) {
                whereConstraint = {
                    or: [
                        usernameConstraint,
                        {
                            email: {
                                equals: sanitizedUsername
                            }
                        }
                    ]
                };
            } else {
                whereConstraint = {
                    or: [
                        emailConstraint,
                        {
                            username: {
                                equals: sanitizedEmail
                            }
                        }
                    ]
                };
            }
        } else if (canLoginWithEmail && sanitizedEmail) {
            whereConstraint = emailConstraint;
        } else if (canLoginWithUsername && sanitizedUsername) {
            whereConstraint = usernameConstraint;
        }
        // Exclude trashed users
        whereConstraint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$appendNonTrashedFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendNonTrashedFilter"])({
            enableTrash: collectionConfig.trash,
            trash: false,
            where: whereConstraint
        });
        let user = await payload.db.findOne({
            collection: collectionConfig.slug,
            req,
            where: whereConstraint
        });
        checkLoginPermission({
            loggingInWithUsername: Boolean(canLoginWithUsername && sanitizedUsername),
            req,
            user
        });
        user.collection = collectionConfig.slug;
        user._strategy = 'local-jwt';
        const authResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$strategies$2f$local$2f$authenticate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authenticateLocalStrategy"])({
            doc: user,
            password
        });
        user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeInternalFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeInternalFields"])(user);
        const maxLoginAttemptsEnabled = args.collection.config.auth.maxLoginAttempts > 0;
        if (!authResult) {
            if (maxLoginAttemptsEnabled) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$strategies$2f$local$2f$incrementLoginAttempts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["incrementLoginAttempts"])({
                    collection: collectionConfig,
                    payload: req.payload,
                    req,
                    user
                });
                // Re-check login permissions and max attempts after incrementing attempts, in case parallel updates occurred
                checkLoginPermission({
                    loggingInWithUsername: Boolean(canLoginWithUsername && sanitizedUsername),
                    req,
                    user
                });
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$AuthenticationError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AuthenticationError"](req.t);
        }
        if (collectionConfig.auth.verify && user._verified === false) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$UnverifiedEmail$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnverifiedEmail"]({
                t: req.t
            });
        }
        /*
     * Correct password accepted - re‑check that the account didn't
     * get locked by parallel bad attempts in the meantime.
     */ if (maxLoginAttemptsEnabled) {
            const { lockUntil, loginAttempts } = await payload.db.findOne({
                collection: collectionConfig.slug,
                req,
                select: {
                    lockUntil: true,
                    loginAttempts: true
                },
                where: {
                    id: {
                        equals: user.id
                    }
                }
            });
            user.lockUntil = lockUntil;
            user.loginAttempts = loginAttempts;
            checkLoginPermission({
                req,
                user
            });
        }
        const fieldsToSignArgs = {
            collectionConfig,
            email: sanitizedEmail,
            user
        };
        const { sid } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$sessions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addSessionToUser"])({
            collectionConfig,
            payload,
            req,
            user
        });
        if (sid) {
            fieldsToSignArgs.sid = sid;
        }
        const fieldsToSign = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$getFieldsToSign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFieldsToSign"])(fieldsToSignArgs);
        if (maxLoginAttemptsEnabled) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$strategies$2f$local$2f$resetLoginAttempts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resetLoginAttempts"])({
                collection: collectionConfig,
                doc: user,
                payload: req.payload,
                req
            });
        }
        // /////////////////////////////////////
        // beforeLogin - Collection
        // /////////////////////////////////////
        if (collectionConfig.hooks?.beforeLogin?.length) {
            for (const hook of collectionConfig.hooks.beforeLogin){
                user = await hook({
                    collection: args.collection?.config,
                    context: args.req.context,
                    req: args.req,
                    user
                }) || user;
            }
        }
        const { exp, token } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$jwt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwtSign"])({
            fieldsToSign,
            secret,
            tokenExpiration: collectionConfig.auth.tokenExpiration
        });
        req.user = user;
        // /////////////////////////////////////
        // afterLogin - Collection
        // /////////////////////////////////////
        if (collectionConfig.hooks?.afterLogin?.length) {
            for (const hook of collectionConfig.hooks.afterLogin){
                user = await hook({
                    collection: args.collection?.config,
                    context: args.req.context,
                    req: args.req,
                    token,
                    user
                }) || user;
            }
        }
        // /////////////////////////////////////
        // afterRead - Fields
        // /////////////////////////////////////
        user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["afterRead"])({
            collection: collectionConfig,
            context: req.context,
            depth: depth,
            doc: user,
            // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
            draft: undefined,
            fallbackLocale: fallbackLocale,
            global: null,
            locale: locale,
            overrideAccess: overrideAccess,
            req,
            showHiddenFields: showHiddenFields
        });
        // /////////////////////////////////////
        // afterRead - Collection
        // /////////////////////////////////////
        if (collectionConfig.hooks?.afterRead?.length) {
            for (const hook of collectionConfig.hooks.afterRead){
                user = await hook({
                    collection: args.collection?.config,
                    context: req.context,
                    doc: user,
                    req
                }) || user;
            }
        }
        let result = {
            exp,
            token,
            user
        };
        // /////////////////////////////////////
        // afterOperation - Collection
        // /////////////////////////////////////
        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildAfterOperation"])({
            args,
            collection: args.collection?.config,
            operation: 'login',
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
}; //# sourceMappingURL=login.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/operations/local/login.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loginLocal",
    ()=>loginLocal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/createLocalReq.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$login$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/operations/login.js [app-route] (ecmascript)");
;
;
;
async function loginLocal(payload, options) {
    const { collection: collectionSlug, data, depth, overrideAccess = true, showHiddenFields } = options;
    const collection = payload.collections[collectionSlug];
    if (!collection) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`The collection with slug ${String(collectionSlug)} can't be found. Login Operation.`);
    }
    const args = {
        collection,
        data,
        depth,
        overrideAccess,
        req: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])(options, payload),
        showHiddenFields
    };
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$login$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loginOperation"])(args);
    if (collection.config.auth.removeTokenFromResponses) {
        delete result.token;
    }
    return result;
} //# sourceMappingURL=login.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/strategies/local/generatePasswordSaltHash.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generatePasswordSaltHash",
    ()=>generatePasswordSaltHash
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ValidationError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/ValidationError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$validations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/validations.js [app-route] (ecmascript)");
;
;
;
function randomBytes() {
    return new Promise((resolve, reject)=>__TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomBytes(32, (err, saltBuffer)=>err ? reject(err) : resolve(saltBuffer)));
}
function pbkdf2Promisified(password, salt) {
    return new Promise((resolve, reject)=>__TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].pbkdf2(password, salt, 25000, 512, 'sha256', (err, hashRaw)=>err ? reject(err) : resolve(hashRaw)));
}
const generatePasswordSaltHash = async ({ collection, password: passwordToSet, req })=>{
    const validationResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$validations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["password"])(passwordToSet, {
        name: 'password',
        type: 'text',
        blockData: {},
        data: {},
        event: 'submit',
        path: [
            'password'
        ],
        preferences: {
            fields: {}
        },
        req,
        required: true,
        siblingData: {}
    });
    if (typeof validationResult === 'string') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ValidationError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ValidationError"]({
            collection: collection?.slug,
            errors: [
                {
                    message: validationResult,
                    path: 'password'
                }
            ]
        });
    }
    const saltBuffer = await randomBytes();
    const salt = saltBuffer.toString('hex');
    const hashRaw = await pbkdf2Promisified(passwordToSet, salt);
    const hash = hashRaw.toString('hex');
    return {
        hash,
        salt
    };
}; //# sourceMappingURL=generatePasswordSaltHash.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/operations/resetPassword.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resetPasswordOperation",
    ()=>resetPasswordOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildAfterOperation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildBeforeOperation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/Forbidden.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$appendNonTrashedFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/appendNonTrashedFilter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/commitTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/initTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/killTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$getFieldsToSign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/getFieldsToSign.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$jwt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/jwt.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$sessions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/sessions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$strategies$2f$local$2f$authenticate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/strategies/local/authenticate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$strategies$2f$local$2f$generatePasswordSaltHash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/strategies/local/generatePasswordSaltHash.js [app-route] (ecmascript)");
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
const resetPasswordOperation = async (args)=>{
    const { collection: { config: collectionConfig }, data, depth, overrideAccess, req: { payload: { secret }, payload }, req } = args;
    if (!Object.prototype.hasOwnProperty.call(data, 'token') || !Object.prototype.hasOwnProperty.call(data, 'password')) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]('Missing required data.', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].BAD_REQUEST);
    }
    if (collectionConfig.auth.disableLocalStrategy) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Forbidden"](req.t);
    }
    try {
        const shouldCommit = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initTransaction"])(req);
        args = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildBeforeOperation"])({
            args,
            collection: args.collection.config,
            operation: 'resetPassword'
        });
        // /////////////////////////////////////
        // Reset Password
        // /////////////////////////////////////
        const where = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$appendNonTrashedFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendNonTrashedFilter"])({
            enableTrash: Boolean(collectionConfig.trash),
            trash: false,
            where: {
                resetPasswordExpiration: {
                    greater_than: new Date().toISOString()
                },
                resetPasswordToken: {
                    equals: data.token
                }
            }
        });
        const user = await payload.db.findOne({
            collection: collectionConfig.slug,
            req,
            where
        });
        if (!user) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]('Token is either invalid or has expired.', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].FORBIDDEN);
        }
        // TODO: replace this method
        const { hash, salt } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$strategies$2f$local$2f$generatePasswordSaltHash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generatePasswordSaltHash"])({
            collection: collectionConfig,
            password: data.password,
            req
        });
        user.salt = salt;
        user.hash = hash;
        user.resetPasswordExpiration = new Date().toISOString();
        if (collectionConfig.auth.verify) {
            user._verified = Boolean(user._verified);
        }
        // /////////////////////////////////////
        // beforeValidate - Collection
        // /////////////////////////////////////
        if (collectionConfig.hooks?.beforeValidate?.length) {
            for (const hook of collectionConfig.hooks.beforeValidate){
                await hook({
                    collection: args.collection?.config,
                    context: req.context,
                    data: user,
                    operation: 'update',
                    req
                });
            }
        }
        // /////////////////////////////////////
        // Update new password
        // /////////////////////////////////////
        // Ensure updatedAt date is always updated
        user.updatedAt = new Date().toISOString();
        const doc = await payload.db.updateOne({
            id: user.id,
            collection: collectionConfig.slug,
            data: user,
            req
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$strategies$2f$local$2f$authenticate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authenticateLocalStrategy"])({
            doc,
            password: data.password
        });
        const fieldsToSignArgs = {
            collectionConfig,
            email: user.email,
            user
        };
        const { sid } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$sessions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addSessionToUser"])({
            collectionConfig,
            payload,
            req,
            user
        });
        if (sid) {
            fieldsToSignArgs.sid = sid;
        }
        const fieldsToSign = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$getFieldsToSign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFieldsToSign"])(fieldsToSignArgs);
        // /////////////////////////////////////
        // beforeLogin - Collection
        // /////////////////////////////////////
        let userBeforeLogin = user;
        if (collectionConfig.hooks?.beforeLogin?.length) {
            for (const hook of collectionConfig.hooks.beforeLogin){
                userBeforeLogin = await hook({
                    collection: args.collection?.config,
                    context: args.req.context,
                    req: args.req,
                    user: userBeforeLogin
                }) || userBeforeLogin;
            }
        }
        const { token } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$jwt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwtSign"])({
            fieldsToSign,
            secret,
            tokenExpiration: collectionConfig.auth.tokenExpiration
        });
        req.user = userBeforeLogin;
        // /////////////////////////////////////
        // afterLogin - Collection
        // /////////////////////////////////////
        if (collectionConfig.hooks?.afterLogin?.length) {
            for (const hook of collectionConfig.hooks.afterLogin){
                userBeforeLogin = await hook({
                    collection: args.collection?.config,
                    context: args.req.context,
                    req: args.req,
                    token,
                    user: userBeforeLogin
                }) || userBeforeLogin;
            }
        }
        const fullUser = await payload.findByID({
            id: user.id,
            collection: collectionConfig.slug,
            depth,
            overrideAccess,
            req,
            trash: false
        });
        if (shouldCommit) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["commitTransaction"])(req);
        }
        if (fullUser) {
            fullUser.collection = collectionConfig.slug;
            fullUser._strategy = 'local-jwt';
        }
        let result = {
            token,
            user: fullUser
        };
        // /////////////////////////////////////
        // afterOperation - Collection
        // /////////////////////////////////////
        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildAfterOperation"])({
            args,
            collection: args.collection?.config,
            operation: 'resetPassword',
            result
        });
        return result;
    } catch (error) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["killTransaction"])(req);
        throw error;
    }
}; //# sourceMappingURL=resetPassword.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/operations/local/resetPassword.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resetPasswordLocal",
    ()=>resetPasswordLocal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/createLocalReq.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$resetPassword$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/operations/resetPassword.js [app-route] (ecmascript)");
;
;
;
async function resetPasswordLocal(payload, options) {
    const { collection: collectionSlug, data, overrideAccess } = options;
    const collection = payload.collections[collectionSlug];
    if (!collection) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`The collection with slug ${String(collectionSlug)} can't be found. Reset Password Operation.`);
    }
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$resetPassword$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resetPasswordOperation"])({
        collection,
        data,
        overrideAccess,
        req: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])(options, payload)
    });
    if (collection.config.auth.removeTokenFromResponses) {
        delete result.token;
    }
    return result;
} //# sourceMappingURL=resetPassword.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/types.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasWhereAccessResult",
    ()=>hasWhereAccessResult
]);
function hasWhereAccessResult(result) {
    return result && typeof result === 'object';
} //# sourceMappingURL=types.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/executeAccess.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "executeAccess",
    ()=>executeAccess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/Forbidden.js [app-route] (ecmascript)");
;
const executeAccess = async ({ id, data, disableErrors, isReadingStaticFile = false, req }, access)=>{
    if (access) {
        const resolvedConstraint = await access({
            id,
            data,
            isReadingStaticFile,
            req
        });
        if (!resolvedConstraint) {
            if (!disableErrors) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Forbidden"](req.t);
            }
        }
        return resolvedConstraint;
    }
    if (req.user) {
        return true;
    }
    if (!disableErrors) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Forbidden"](req.t);
    }
    return false;
}; //# sourceMappingURL=executeAccess.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/operations/unlock.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unlockOperation",
    ()=>unlockOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildAfterOperation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/utilities/buildBeforeOperation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/combineQueries.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/Forbidden.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$appendNonTrashedFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/appendNonTrashedFilter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/commitTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/initTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/killTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/executeAccess.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$getLoginOptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/getLoginOptions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$strategies$2f$local$2f$resetLoginAttempts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/strategies/local/resetLoginAttempts.js [app-route] (ecmascript)");
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
const unlockOperation = async (args)=>{
    const { collection: { config: collectionConfig }, overrideAccess, req: { locale }, req } = args;
    const loginWithUsername = collectionConfig.auth.loginWithUsername;
    const { canLoginWithEmail, canLoginWithUsername } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$getLoginOptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getLoginOptions"])(loginWithUsername);
    const sanitizedEmail = canLoginWithEmail && (args.data?.email || '').toLowerCase().trim();
    const sanitizedUsername = canLoginWithUsername && 'username' in args.data && typeof args.data.username === 'string' && args.data.username.toLowerCase().trim() || null;
    if (collectionConfig.auth.disableLocalStrategy) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Forbidden"](req.t);
    }
    if (!sanitizedEmail && !sanitizedUsername) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`Missing ${collectionConfig.auth.loginWithUsername ? 'username' : 'email'}.`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].BAD_REQUEST);
    }
    try {
        args = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildBeforeOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildBeforeOperation"])({
            args,
            collection: args.collection.config,
            operation: 'unlock'
        });
        const shouldCommit = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initTransaction"])(req);
        let whereConstraint = {};
        // /////////////////////////////////////
        // Access
        // /////////////////////////////////////
        if (!overrideAccess) {
            const accessResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeAccess"])({
                req
            }, collectionConfig.access.unlock);
            if (accessResult && typeof accessResult === 'object') {
                whereConstraint = accessResult;
            }
        }
        // /////////////////////////////////////
        // Unlock
        // /////////////////////////////////////
        if (canLoginWithEmail && sanitizedEmail) {
            whereConstraint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineQueries"])(whereConstraint, {
                email: {
                    equals: sanitizedEmail
                }
            });
        } else if (canLoginWithUsername && sanitizedUsername) {
            whereConstraint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineQueries"])(whereConstraint, {
                username: {
                    equals: sanitizedUsername
                }
            });
        }
        // Exclude trashed users unless `trash: true`
        whereConstraint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$appendNonTrashedFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendNonTrashedFilter"])({
            enableTrash: Boolean(collectionConfig.trash),
            trash: false,
            where: whereConstraint
        });
        const user = await req.payload.db.findOne({
            collection: collectionConfig.slug,
            locale: locale,
            req,
            where: whereConstraint
        });
        let result = null;
        if (user) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$strategies$2f$local$2f$resetLoginAttempts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resetLoginAttempts"])({
                collection: collectionConfig,
                doc: user,
                payload: req.payload,
                req
            });
            result = true;
        } else {
            result = null;
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Forbidden"](req.t);
        }
        if (shouldCommit) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["commitTransaction"])(req);
        }
        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$utilities$2f$buildAfterOperation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildAfterOperation"])({
            args,
            collection: args.collection.config,
            operation: 'unlock',
            result
        });
        return Boolean(result);
    } catch (error) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["killTransaction"])(req);
        throw error;
    }
}; //# sourceMappingURL=unlock.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/operations/local/unlock.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unlockLocal",
    ()=>unlockLocal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/createLocalReq.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$unlock$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/operations/unlock.js [app-route] (ecmascript)");
;
;
;
async function unlockLocal(payload, options) {
    const { collection: collectionSlug, data, overrideAccess = true } = options;
    const collection = payload.collections[collectionSlug];
    if (!collection) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`The collection with slug ${String(collectionSlug)} can't be found. Unlock Operation.`);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$unlock$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unlockOperation"])({
        collection,
        data,
        overrideAccess,
        req: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])(options, payload)
    });
} //# sourceMappingURL=unlock.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/operations/verifyEmail.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "verifyEmailOperation",
    ()=>verifyEmailOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/Forbidden.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$appendNonTrashedFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/appendNonTrashedFilter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/commitTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/initTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/killTransaction.js [app-route] (ecmascript)");
;
;
;
;
;
;
const verifyEmailOperation = async (args)=>{
    const { collection, req, token } = args;
    if (collection.config.auth.disableLocalStrategy) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Forbidden"](req.t);
    }
    if (!Object.prototype.hasOwnProperty.call(args, 'token')) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]('Missing required data.', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].BAD_REQUEST);
    }
    try {
        const shouldCommit = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initTransaction"])(req);
        const where = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$appendNonTrashedFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendNonTrashedFilter"])({
            enableTrash: Boolean(collection.config.trash),
            trash: false,
            where: {
                _verificationToken: {
                    equals: token
                }
            }
        });
        const user = await req.payload.db.findOne({
            collection: collection.config.slug,
            req,
            where
        });
        if (!user) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]('Verification token is invalid.', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].FORBIDDEN);
        }
        // Ensure updatedAt date is always updated
        user.updatedAt = new Date().toISOString();
        await req.payload.db.updateOne({
            id: user.id,
            collection: collection.config.slug,
            data: {
                ...user,
                _verificationToken: null,
                _verified: true
            },
            req,
            returning: false
        });
        if (shouldCommit) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["commitTransaction"])(req);
        }
        return true;
    } catch (error) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["killTransaction"])(req);
        throw error;
    }
}; //# sourceMappingURL=verifyEmail.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/operations/local/verifyEmail.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "verifyEmailLocal",
    ()=>verifyEmailLocal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/createLocalReq.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$verifyEmail$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/operations/verifyEmail.js [app-route] (ecmascript)");
;
;
;
async function verifyEmailLocal(payload, options) {
    const { collection: collectionSlug, token } = options;
    const collection = payload.collections[collectionSlug];
    if (!collection) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`The collection with slug ${String(collectionSlug)} can't be found. Verify Email Operation.`);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$verifyEmail$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyEmailOperation"])({
        collection,
        req: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])(options, payload),
        token
    });
} //# sourceMappingURL=verifyEmail.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/ensureUsernameOrEmail.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ensureUsernameOrEmail",
    ()=>ensureUsernameOrEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ValidationError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/ValidationError.js [app-route] (ecmascript)");
;
const ensureUsernameOrEmail = ({ authOptions: { disableLocalStrategy, loginWithUsername }, collectionSlug, data, operation, originalDoc, req })=>{
    // neither username or email are required
    // and neither are provided
    // so we need to manually validate
    if (!disableLocalStrategy && loginWithUsername && !loginWithUsername.requireEmail && !loginWithUsername.requireUsername) {
        let missingFields = false;
        if (operation === 'create' && !data.email && !data.username) {
            missingFields = true;
        } else if (operation === 'update') {
            // prevent clearing both email and username
            if ('email' in data && !data.email && 'username' in data && !data.username) {
                missingFields = true;
            }
            // prevent clearing email if no username
            if ('email' in data && !data.email && !originalDoc.username && !data?.username) {
                missingFields = true;
            }
            // prevent clearing username if no email
            if ('username' in data && !data.username && !originalDoc.email && !data?.email) {
                missingFields = true;
            }
        }
        if (missingFields) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ValidationError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ValidationError"]({
                collection: collectionSlug,
                errors: [
                    {
                        message: 'Username or email is required',
                        path: 'username'
                    },
                    {
                        message: 'Username or email is required',
                        path: 'email'
                    }
                ]
            }, req.t);
        }
    }
    return;
}; //# sourceMappingURL=ensureUsernameOrEmail.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/sendVerificationEmail.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendVerificationEmail",
    ()=>sendVerificationEmail
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/url [external] (url, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatAdminURL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/formatAdminURL.js [app-route] (ecmascript)");
;
;
async function sendVerificationEmail(args) {
    // Verify token from e-mail
    const { collection: { config: collectionConfig }, config, disableEmail, email, req, token, user } = args;
    if (!disableEmail) {
        const protocol = new __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["URL"](req.url).protocol // includes the final :
        ;
        const serverURL = config.serverURL !== null && config.serverURL !== '' ? config.serverURL : `${protocol}//${req.headers.get('host')}`;
        const verificationURL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatAdminURL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatAdminURL"])({
            adminRoute: config.routes.admin,
            path: `/${collectionConfig.slug}/verify/${token}`,
            serverURL
        });
        let html = `${req.t('authentication:newAccountCreated', {
            serverURL: config.serverURL,
            verificationURL
        })}`;
        const verify = collectionConfig.auth.verify;
        // Allow config to override email content
        if (typeof verify.generateEmailHTML === 'function') {
            html = await verify.generateEmailHTML({
                req,
                token,
                user
            });
        }
        let subject = req.t('authentication:verifyYourEmail');
        // Allow config to override email subject
        if (typeof verify.generateEmailSubject === 'function') {
            subject = await verify.generateEmailSubject({
                req,
                token,
                user
            });
        }
        await email.sendEmail({
            from: `"${email.defaultFromName}" <${email.defaultFromAddress}>`,
            html,
            subject,
            to: user.email
        });
    }
} //# sourceMappingURL=sendVerificationEmail.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/strategies/local/register.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "registerLocalStrategy",
    ()=>registerLocalStrategy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ValidationError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/ValidationError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$getLoginOptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/getLoginOptions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$strategies$2f$local$2f$generatePasswordSaltHash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/strategies/local/generatePasswordSaltHash.js [app-route] (ecmascript)");
;
;
;
const registerLocalStrategy = async ({ collection, doc, password, payload, req })=>{
    const loginWithUsername = collection?.auth?.loginWithUsername;
    const { canLoginWithEmail, canLoginWithUsername } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$getLoginOptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getLoginOptions"])(loginWithUsername);
    let whereConstraint;
    if (!canLoginWithUsername) {
        whereConstraint = {
            email: {
                equals: doc.email
            }
        };
    } else {
        whereConstraint = {
            or: []
        };
        if (canLoginWithEmail && doc.email) {
            whereConstraint.or?.push({
                email: {
                    equals: doc.email
                }
            });
        }
        if (doc.username) {
            whereConstraint.or?.push({
                username: {
                    equals: doc.username
                }
            });
        }
    }
    const existingUser = await payload.find({
        collection: collection.slug,
        depth: 0,
        limit: 1,
        pagination: false,
        req,
        where: whereConstraint
    });
    if (existingUser.docs.length > 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ValidationError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ValidationError"]({
            collection: collection.slug,
            errors: [
                canLoginWithUsername ? {
                    message: req.t('error:usernameAlreadyRegistered'),
                    path: 'username'
                } : {
                    message: req.t('error:userEmailAlreadyRegistered'),
                    path: 'email'
                }
            ]
        });
    }
    const { hash, salt } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$strategies$2f$local$2f$generatePasswordSaltHash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generatePasswordSaltHash"])({
        collection,
        password,
        req
    });
    const sanitizedDoc = {
        ...doc
    };
    if (sanitizedDoc.password) {
        delete sanitizedDoc.password;
    }
    return payload.db.create({
        collection: collection.slug,
        data: {
            ...sanitizedDoc,
            hash,
            salt
        },
        req
    });
}; //# sourceMappingURL=register.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/defaultAccess.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultAccess",
    ()=>defaultAccess
]);
const defaultAccess = ({ req: { user } })=>Boolean(user); //# sourceMappingURL=defaultAccess.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/crypto.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decrypt",
    ()=>decrypt,
    "encrypt",
    ()=>encrypt
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
const algorithm = 'aes-256-ctr';
function encrypt(text) {
    const iv = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomBytes(16);
    // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
    const secret = this.secret;
    const cipher = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createCipheriv(algorithm, secret, iv);
    const encrypted = cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
    const ivString = iv.toString('hex');
    return `${ivString}${encrypted}`;
}
function decrypt(hash) {
    const iv = hash.slice(0, 32);
    const content = hash.slice(32);
    // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
    const secret = this.secret;
    const decipher = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createDecipheriv(algorithm, secret, Buffer.from(iv, 'hex'));
    return decipher.update(content, 'hex', 'utf8') + decipher.final('utf8');
} //# sourceMappingURL=crypto.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/getAccessResults.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAccessResults",
    ()=>getAccessResults
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getEntityPermissions$2f$getEntityPermissions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getEntityPermissions/getEntityPermissions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizePermissions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/sanitizePermissions.js [app-route] (ecmascript)");
;
;
async function getAccessResults({ req }) {
    const results = {
        collections: {},
        globals: {}
    };
    const { payload, user } = req;
    const isLoggedIn = !!user;
    const userCollectionConfig = user && user.collection ? payload?.collections?.[user.collection]?.config : null;
    if (userCollectionConfig && payload.config.admin.user === user?.collection) {
        results.canAccessAdmin = userCollectionConfig.access.admin ? await userCollectionConfig.access.admin({
            req
        }) : isLoggedIn;
    } else {
        results.canAccessAdmin = false;
    }
    const blockReferencesPermissions = {};
    await Promise.all(payload.config.collections.map(async (collection)=>{
        const collectionOperations = [
            'create',
            'read',
            'update',
            'delete'
        ];
        if (collection.auth && typeof collection.auth.maxLoginAttempts !== 'undefined' && collection.auth.maxLoginAttempts !== 0) {
            collectionOperations.push('unlock');
        }
        if (collection.versions) {
            collectionOperations.push('readVersions');
        }
        const collectionPermissions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getEntityPermissions$2f$getEntityPermissions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEntityPermissions"])({
            blockReferencesPermissions,
            entity: collection,
            entityType: 'collection',
            fetchData: false,
            operations: collectionOperations,
            req
        });
        results.collections[collection.slug] = collectionPermissions;
    }));
    await Promise.all(payload.config.globals.map(async (global)=>{
        const globalOperations = [
            'read',
            'update'
        ];
        if (global.versions) {
            globalOperations.push('readVersions');
        }
        const globalPermissions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getEntityPermissions$2f$getEntityPermissions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEntityPermissions"])({
            blockReferencesPermissions,
            entity: global,
            entityType: 'global',
            fetchData: false,
            operations: globalOperations,
            req
        });
        results.globals[global.slug] = globalPermissions;
    }));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizePermissions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizePermissions"])(results);
} //# sourceMappingURL=getAccessResults.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/operations/auth.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/killTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAuthStrategies$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/executeAuthStrategies.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$getAccessResults$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/getAccessResults.js [app-route] (ecmascript)");
;
;
;
const auth = async (args)=>{
    const { canSetHeaders, headers } = args;
    const req = args.req;
    const { payload } = req;
    try {
        const { responseHeaders, user } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAuthStrategies$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeAuthStrategies"])({
            canSetHeaders,
            headers,
            payload
        });
        req.user = user;
        req.responseHeaders = responseHeaders;
        const permissions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$getAccessResults$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAccessResults"])({
            req
        });
        return {
            permissions,
            responseHeaders,
            user
        };
    } catch (error) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["killTransaction"])(req);
        throw error;
    }
}; //# sourceMappingURL=auth.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/operations/local/auth.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authLocal",
    ()=>authLocal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/createLocalReq.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/operations/auth.js [app-route] (ecmascript)");
;
;
const authLocal = async (payload, options)=>{
    const { headers, req } = options;
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auth"])({
        canSetHeaders: Boolean(options.canSetHeaders),
        headers,
        req: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])({
            req
        }, payload)
    });
}; //# sourceMappingURL=auth.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/strategies/apiKey.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "APIKeyAuthentication",
    ()=>APIKeyAuthentication
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
const APIKeyAuthentication = (collectionConfig)=>async ({ headers, isGraphQL = false, payload })=>{
        const authHeader = headers.get('Authorization');
        if (authHeader?.startsWith(`${collectionConfig.slug} API-Key `)) {
            const apiKey = authHeader.replace(`${collectionConfig.slug} API-Key `, '');
            // TODO: V4 remove extra algorithm check
            // api keys saved prior to v3.46.0 will have sha1
            const sha1APIKeyIndex = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHmac('sha1', payload.secret).update(apiKey).digest('hex');
            const sha256APIKeyIndex = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHmac('sha256', payload.secret).update(apiKey).digest('hex');
            const apiKeyConstraints = [
                {
                    apiKeyIndex: {
                        equals: sha1APIKeyIndex
                    }
                },
                {
                    apiKeyIndex: {
                        equals: sha256APIKeyIndex
                    }
                }
            ];
            try {
                const where = {};
                if (collectionConfig.auth?.verify) {
                    where.and = [
                        {
                            or: apiKeyConstraints
                        },
                        {
                            _verified: {
                                not_equals: false
                            }
                        }
                    ];
                } else {
                    where.or = apiKeyConstraints;
                }
                const userQuery = await payload.find({
                    collection: collectionConfig.slug,
                    depth: isGraphQL ? 0 : collectionConfig.auth.depth,
                    limit: 1,
                    overrideAccess: true,
                    pagination: false,
                    where
                });
                if (userQuery.docs && userQuery.docs.length > 0) {
                    const user = userQuery.docs[0];
                    user.collection = collectionConfig.slug;
                    user._strategy = 'api-key';
                    return {
                        user: user
                    };
                }
            } catch (ignore) {
                return {
                    user: null
                };
            }
        }
        return {
            user: null
        };
    }; //# sourceMappingURL=apiKey.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/extractJWT.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractJWT",
    ()=>extractJWT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$parseCookies$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/parseCookies.js [app-route] (ecmascript)");
;
const extractionMethods = {
    Bearer: ({ headers })=>{
        const jwtFromHeader = headers.get('Authorization');
        // allow RFC6750 OAuth 2.0 compliant Bearer tokens
        // in addition to the payload default JWT format
        if (jwtFromHeader?.startsWith('Bearer ')) {
            return jwtFromHeader.replace('Bearer ', '');
        }
        return null;
    },
    cookie: ({ headers, payload })=>{
        const origin = headers.get('Origin');
        const cookies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$parseCookies$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseCookies"])(headers);
        const tokenCookieName = `${payload.config.cookiePrefix}-token`;
        const cookieToken = cookies.get(tokenCookieName);
        if (!cookieToken) {
            return null;
        }
        if (!origin || payload.config.csrf.length === 0 || payload.config.csrf.indexOf(origin) > -1) {
            return cookieToken;
        }
        return null;
    },
    JWT: ({ headers })=>{
        const jwtFromHeader = headers.get('Authorization');
        if (jwtFromHeader?.startsWith('JWT ')) {
            return jwtFromHeader.replace('JWT ', '');
        }
        return null;
    }
};
const extractJWT = (args)=>{
    const { headers, payload } = args;
    const extractionOrder = payload.config.auth.jwtOrder;
    for (const extractionStrategy of extractionOrder){
        const result = extractionMethods[extractionStrategy]({
            headers,
            payload
        });
        if (result) {
            return result;
        }
    }
    return null;
}; //# sourceMappingURL=extractJWT.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/strategies/jwt.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JWTAuthentication",
    ()=>JWTAuthentication
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/node/esm/jwt/verify.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$extractJWT$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/extractJWT.js [app-route] (ecmascript)");
;
;
async function autoLogin({ isGraphQL, payload, strategyName = 'local-jwt' }) {
    if (typeof payload?.config?.admin?.autoLogin !== 'object' || payload.config.admin?.autoLogin.prefillOnly || !payload?.config?.admin?.autoLogin || !payload.config.admin?.autoLogin.email && !payload.config.admin?.autoLogin.username) {
        return {
            user: null
        };
    }
    const collection = payload.collections[payload.config.admin.user];
    const where = {
        or: []
    };
    if (payload.config.admin?.autoLogin.email) {
        where.or?.push({
            email: {
                equals: payload.config.admin?.autoLogin.email
            }
        });
    } else if (payload.config.admin?.autoLogin.username) {
        where.or?.push({
            username: {
                equals: payload.config.admin?.autoLogin.username
            }
        });
    }
    const user = (await payload.find({
        collection: collection.config.slug,
        depth: isGraphQL ? 0 : collection.config.auth.depth,
        limit: 1,
        pagination: false,
        where
    })).docs[0];
    if (!user) {
        return {
            user: null
        };
    }
    user.collection = collection.config.slug;
    user._strategy = strategyName;
    return {
        user
    };
}
const JWTAuthentication = async ({ headers, isGraphQL = false, payload, strategyName = 'local-jwt' })=>{
    try {
        const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$extractJWT$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extractJWT"])({
            headers,
            payload
        });
        if (!token) {
            if (headers.get('DisableAutologin') !== 'true') {
                return await autoLogin({
                    isGraphQL,
                    payload,
                    strategyName
                });
            }
            return {
                user: null
            };
        }
        const secretKey = new TextEncoder().encode(payload.secret);
        const { payload: decodedPayload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwtVerify"])(token, secretKey);
        const collection = payload.collections[decodedPayload.collection];
        const user = await payload.findByID({
            id: decodedPayload.id,
            collection: decodedPayload.collection,
            depth: isGraphQL ? 0 : collection.config.auth.depth
        });
        if (user && (!collection.config.auth.verify || user._verified)) {
            if (collection.config.auth.useSessions) {
                const existingSession = (user.sessions || []).find(({ id })=>id === decodedPayload.sid);
                if (!existingSession || !decodedPayload.sid) {
                    return {
                        user: null
                    };
                }
                user._sid = decodedPayload.sid;
            }
            user.collection = collection.config.slug;
            user._strategy = strategyName;
            return {
                user
            };
        } else {
            if (headers.get('DisableAutologin') !== 'true') {
                return await autoLogin({
                    isGraphQL,
                    payload,
                    strategyName
                });
            }
            return {
                user: null
            };
        }
    } catch (ignore) {
        if (headers.get('DisableAutologin') !== 'true') {
            return await autoLogin({
                isGraphQL,
                payload,
                strategyName
            });
        }
        return {
            user: null
        };
    }
}; //# sourceMappingURL=jwt.js.map
}),
];

//# sourceMappingURL=1c115_payload_dist_auth_3c8553e6._.js.map