module.exports = [
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "APIError",
    ()=>APIError,
    "APIErrorName",
    ()=>APIErrorName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
;
let APIErrorName = 'APIError';
class ExtendableError extends Error {
    data;
    isOperational;
    isPublic;
    status;
    constructor(message, status, data, isPublic){
        super(message, {
            // show data in cause
            cause: data
        });
        APIErrorName = this.constructor.name;
        this.name = this.constructor.name;
        this.message = message;
        this.status = status;
        this.data = data;
        this.isPublic = isPublic;
        this.isOperational = true; // This is required since bluebird 4 doesn't append it anymore.
        Error.captureStackTrace(this, this.constructor);
    }
}
class APIError extends ExtendableError {
    /**
   * Creates an API error.
   * @param {string} message - Error message.
   * @param {number} status - HTTP status code of error.
   * @param {object} data - response data to be returned.
   * @param {boolean} isPublic - Whether the message should be visible to user or not.
   */ constructor(message, status = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].INTERNAL_SERVER_ERROR, data = null, isPublic){
        super(message, status, data, typeof isPublic === 'boolean' ? isPublic : status !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].INTERNAL_SERVER_ERROR);
    }
} //# sourceMappingURL=APIError.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/Forbidden.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Forbidden",
    ()=>Forbidden
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$70$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+translations@3.70.0/node_modules/@payloadcms/translations/dist/languages/en.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
;
;
class Forbidden extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(t){
        super(t ? t('error:notAllowedToPerformAction') : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$70$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["en"].translations.error.notAllowedToPerformAction, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].FORBIDDEN);
    }
} //# sourceMappingURL=Forbidden.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/AuthenticationError.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthenticationError",
    ()=>AuthenticationError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$70$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+translations@3.70.0/node_modules/@payloadcms/translations/dist/languages/en.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
;
;
class AuthenticationError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(t, loginWithUsername){
        super(t ? `${loginWithUsername ? t('error:usernameOrPasswordIncorrect') : t('error:emailOrPasswordIncorrect')}` : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$70$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["en"].translations.error.emailOrPasswordIncorrect, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].UNAUTHORIZED);
    }
} //# sourceMappingURL=AuthenticationError.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/LockedAuth.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LockedAuth",
    ()=>LockedAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$70$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+translations@3.70.0/node_modules/@payloadcms/translations/dist/languages/en.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
;
;
class LockedAuth extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(t){
        super(t ? t('error:userLocked') : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$70$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["en"].translations.error.userLocked, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].UNAUTHORIZED);
    }
} //# sourceMappingURL=LockedAuth.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/UnverifiedEmail.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UnverifiedEmail",
    ()=>UnverifiedEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$70$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+translations@3.70.0/node_modules/@payloadcms/translations/dist/languages/en.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
;
;
class UnverifiedEmail extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor({ t }){
        super(t ? t('error:unverifiedEmail') : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$70$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["en"].translations.error.unverifiedEmail, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].FORBIDDEN);
    }
} //# sourceMappingURL=UnverifiedEmail.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/ValidationError.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ValidationError",
    ()=>ValidationError,
    "ValidationErrorName",
    ()=>ValidationErrorName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$70$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+translations@3.70.0/node_modules/@payloadcms/translations/dist/languages/en.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
;
;
let ValidationErrorName = 'ValidationError';
class ValidationError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(results, t){
        const message = t ? t('error:followingFieldsInvalid', {
            count: results.errors.length
        }) : results.errors.length === 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$70$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["en"].translations.error.followingFieldsInvalid_one : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$70$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["en"].translations.error.followingFieldsInvalid_other;
        const req = results.req;
        // delete to avoid logging the whole req
        delete results['req'];
        super(`${message} ${results.errors.map((f)=>{
            if (f.label) {
                if (typeof f.label === 'function') {
                    if (!req || !req.i18n || !req.t) {
                        return f.path;
                    }
                    return f.label({
                        i18n: req.i18n,
                        t: req.t
                    });
                }
                if (typeof f.label === 'object') {
                    if (req?.i18n?.language) {
                        return f.label[req.i18n.language];
                    }
                    return f.label[Object.keys(f.label)[0]];
                }
                return f.label;
            }
            return f.path;
        }).join(', ')}`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].BAD_REQUEST, results);
        ValidationErrorName = this.constructor.name;
    }
} //# sourceMappingURL=ValidationError.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/MissingEditorProp.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MissingEditorProp",
    ()=>MissingEditorProp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/config/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
;
class MissingEditorProp extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(field){
        super(`RichText field${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) ? ` "${field.name}"` : ''} is missing the editor prop. For sub-richText fields, the editor props is required, as it would otherwise create infinite recursion.`);
    }
} //# sourceMappingURL=MissingEditorProp.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/QueryError.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryError",
    ()=>QueryError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
;
class QueryError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(results){
        const message = `The following path${results.length === 1 ? '' : 's'} cannot be queried:`;
        super(`${message} ${results.map((err)=>err.path).join(', ')}`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].BAD_REQUEST, results);
    }
} //# sourceMappingURL=QueryError.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/NotFound.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotFound",
    ()=>NotFound
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$70$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+translations@3.70.0/node_modules/@payloadcms/translations/dist/languages/en.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
;
;
class NotFound extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(t){
        super(t ? t('general:notFound') : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$70$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["en"].translations.general.notFound, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].NOT_FOUND);
    }
} //# sourceMappingURL=NotFound.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/FileRetrievalError.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileRetrievalError",
    ()=>FileRetrievalError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
;
class FileRetrievalError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(t, message){
        let msg = t ? t('error:problemUploadingFile') : 'There was a problem while retrieving the file.';
        if (message) {
            msg += ` ${message}`;
        }
        super(msg, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].INTERNAL_SERVER_ERROR);
    }
} //# sourceMappingURL=FileRetrievalError.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/FileUploadError.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileUploadError",
    ()=>FileUploadError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$70$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+translations@3.70.0/node_modules/@payloadcms/translations/dist/languages/en.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
;
;
class FileUploadError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(t){
        super(t ? t('error:problemUploadingFile') : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$70$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["en"].translations.error.problemUploadingFile, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].BAD_REQUEST);
    }
} //# sourceMappingURL=FileUploadError.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/MissingFile.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MissingFile",
    ()=>MissingFile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$70$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+translations@3.70.0/node_modules/@payloadcms/translations/dist/languages/en.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
;
;
class MissingFile extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(t){
        super(t ? t('error:noFilesUploaded') : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$70$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["en"].translations.error.noFilesUploaded, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].BAD_REQUEST);
    }
} //# sourceMappingURL=MissingFile.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/UnauthorizedError.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UnauthorizedError",
    ()=>UnauthorizedError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$70$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+translations@3.70.0/node_modules/@payloadcms/translations/dist/languages/en.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
;
;
class UnauthorizedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(t){
        super(t ? t('error:unauthorized') : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$70$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["en"].translations.error.unauthorized, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].UNAUTHORIZED);
    }
} //# sourceMappingURL=UnauthorizedError.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/ErrorDeletingFile.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorDeletingFile",
    ()=>ErrorDeletingFile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$70$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+translations@3.70.0/node_modules/@payloadcms/translations/dist/languages/en.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
;
;
class ErrorDeletingFile extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(t){
        super(t ? t('error:deletingFile') : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$70$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["en"].translations.error.deletingFile, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].INTERNAL_SERVER_ERROR);
    }
} //# sourceMappingURL=ErrorDeletingFile.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/Locked.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Locked",
    ()=>Locked
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
;
class Locked extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(message){
        super(message, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].LOCKED);
    }
} //# sourceMappingURL=Locked.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/translations/getLocalI18n.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLocalI18n",
    ()=>getLocalI18n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$70$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$init$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+translations@3.70.0/node_modules/@payloadcms/translations/dist/utilities/init.js [app-route] (ecmascript)");
;
const getLocalI18n = async ({ config, language })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$70$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$init$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initI18n"])({
        config: config.i18n,
        context: 'api',
        language
    }); //# sourceMappingURL=getLocalI18n.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/combineQueries.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "combineQueries",
    ()=>combineQueries
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/types.js [app-route] (ecmascript)");
;
const combineQueries = (where, access)=>{
    if (!where && !access) {
        return {};
    }
    const and = where ? [
        where
    ] : [];
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasWhereAccessResult"])(access)) {
        and.push(access);
    }
    return {
        and
    };
}; //# sourceMappingURL=combineQueries.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/getLocalizedPaths.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLocalizedPaths",
    ()=>getLocalizedPaths
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/config/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
;
function getLocalizedPaths({ collectionSlug, fields, globalSlug, incomingPath, locale, overrideAccess = false, parentIsLocalized, payload }) {
    const pathSegments = incomingPath.split('.');
    const localizationConfig = payload.config.localization;
    let paths = [
        {
            collectionSlug,
            complete: false,
            // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
            field: undefined,
            fields,
            globalSlug,
            invalid: false,
            parentIsLocalized: parentIsLocalized,
            path: ''
        }
    ];
    for(let i = 0; i < pathSegments.length; i += 1){
        const segment = pathSegments[i];
        const lastIncompletePath = paths.find(({ complete })=>!complete);
        if (lastIncompletePath) {
            const { path } = lastIncompletePath;
            let currentPath = path ? `${path}.${segment}` : segment;
            let fieldsToSearch;
            let _parentIsLocalized = parentIsLocalized;
            let matchedField;
            if (lastIncompletePath?.field?.type === 'blocks') {
                if (segment === 'blockType') {
                    matchedField = {
                        name: 'blockType',
                        type: 'text'
                    };
                } else {
                    for (const _block of lastIncompletePath.field.blockReferences ?? lastIncompletePath.field.blocks){
                        let block;
                        if (typeof _block === 'string') {
                            block = payload.blocks[_block];
                        } else {
                            block = _block;
                        }
                        matchedField = block.flattenedFields.find((field)=>field.name === segment);
                        if (matchedField) {
                            break;
                        }
                    }
                }
            } else {
                if (lastIncompletePath?.field && 'flattenedFields' in lastIncompletePath.field) {
                    fieldsToSearch = lastIncompletePath.field.flattenedFields;
                } else {
                    fieldsToSearch = lastIncompletePath.fields;
                }
                _parentIsLocalized = parentIsLocalized || lastIncompletePath.field?.localized;
                matchedField = fieldsToSearch.find((field)=>field.name === segment);
            }
            lastIncompletePath.field = matchedField;
            if (currentPath === 'globalType' && globalSlug) {
                lastIncompletePath.path = currentPath;
                lastIncompletePath.complete = true;
                lastIncompletePath.field = {
                    name: 'globalType',
                    type: 'text'
                };
                return paths;
            }
            if (currentPath === 'relationTo') {
                lastIncompletePath.path = currentPath;
                lastIncompletePath.complete = true;
                lastIncompletePath.field = {
                    name: 'relationTo',
                    type: 'select',
                    options: Object.keys(payload.collections)
                };
                return paths;
            }
            if (!matchedField && currentPath === 'id' && i === pathSegments.length - 1) {
                lastIncompletePath.path = currentPath;
                const idField = {
                    name: 'id',
                    type: payload.db.defaultIDType
                };
                lastIncompletePath.field = idField;
                lastIncompletePath.complete = true;
                return paths;
            }
            if (matchedField) {
                if ('hidden' in matchedField && matchedField.hidden && !overrideAccess) {
                    lastIncompletePath.invalid = true;
                }
                const nextSegment = pathSegments[i + 1];
                const currentFieldIsLocalized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldShouldBeLocalized"])({
                    field: matchedField,
                    parentIsLocalized: _parentIsLocalized
                });
                const nextSegmentIsLocale = localizationConfig && localizationConfig.localeCodes.includes(nextSegment) && currentFieldIsLocalized;
                if (nextSegmentIsLocale) {
                    // Skip the next iteration, because it's a locale
                    i += 1;
                    currentPath = `${currentPath}.${nextSegment}`;
                } else if (localizationConfig && currentFieldIsLocalized) {
                    currentPath = `${currentPath}.${locale}`;
                }
                switch(matchedField.type){
                    case 'join':
                    case 'relationship':
                    case 'upload':
                        {
                            // If this is a polymorphic relation,
                            // We only support querying directly (no nested querying)
                            if (matchedField.type !== 'join' && typeof matchedField.relationTo !== 'string') {
                                lastIncompletePath.path = pathSegments.join('.');
                                if (![
                                    matchedField.name,
                                    'relationTo',
                                    'value'
                                ].includes(pathSegments.at(-1))) {
                                    lastIncompletePath.invalid = true;
                                } else {
                                    lastIncompletePath.complete = true;
                                }
                            } else {
                                lastIncompletePath.complete = true;
                                lastIncompletePath.path = currentPath;
                                const nestedPathToQuery = pathSegments.slice(nextSegmentIsLocale ? i + 2 : i + 1).join('.');
                                if (nestedPathToQuery) {
                                    let relatedCollection;
                                    if (matchedField.type === 'join') {
                                        if (Array.isArray(matchedField.collection)) {
                                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]('Not supported');
                                        }
                                        relatedCollection = payload.collections[matchedField.collection].config;
                                    } else {
                                        relatedCollection = payload.collections[matchedField.relationTo].config;
                                    }
                                    const remainingPaths = getLocalizedPaths({
                                        collectionSlug: relatedCollection.slug,
                                        fields: relatedCollection.flattenedFields,
                                        globalSlug,
                                        incomingPath: nestedPathToQuery,
                                        locale,
                                        parentIsLocalized: false,
                                        payload
                                    });
                                    paths = [
                                        ...paths,
                                        ...remainingPaths
                                    ];
                                }
                                return paths;
                            }
                            break;
                        }
                    case 'json':
                    case 'richText':
                        {
                            const upcomingSegments = pathSegments.slice(i + 1).join('.');
                            pathSegments.forEach((path)=>{
                                if (!/^\w+(?:\.\w+)*$/.test(path)) {
                                    lastIncompletePath.invalid = true;
                                }
                            });
                            lastIncompletePath.complete = true;
                            lastIncompletePath.path = upcomingSegments ? `${currentPath}.${upcomingSegments}` : currentPath;
                            return paths;
                        }
                    default:
                        {
                            if (i + 1 === pathSegments.length) {
                                lastIncompletePath.complete = true;
                            }
                            lastIncompletePath.path = currentPath;
                        }
                }
            } else {
                lastIncompletePath.invalid = true;
                lastIncompletePath.path = currentPath;
                return paths;
            }
        }
    }
    return paths;
} //# sourceMappingURL=getLocalizedPaths.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/queryValidation/validateSearchParams.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateSearchParam",
    ()=>validateSearchParam
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/config/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getEntityPermissions$2f$getEntityPermissions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getEntityPermissions/getEntityPermissions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$getLocalizedPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/getLocalizedPaths.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/queryValidation/validateQueryPaths.js [app-route] (ecmascript)");
;
;
;
;
;
async function validateSearchParam({ collectionConfig, constraint, errors, fields, globalConfig, operator, overrideAccess, parentIsLocalized, path: incomingPath, policies, polymorphicJoin, req, val, versionFields }) {
    // Replace GraphQL nested field double underscore formatting
    let sanitizedPath;
    if (incomingPath === '_id') {
        sanitizedPath = 'id';
    } else {
        sanitizedPath = incomingPath.replace(/__/g, '.');
    }
    let paths = [];
    const { slug } = collectionConfig || globalConfig;
    const blockReferencesPermissions = {};
    if (globalConfig && !policies.globals[slug]) {
        policies.globals[slug] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getEntityPermissions$2f$getEntityPermissions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEntityPermissions"])({
            blockReferencesPermissions,
            entity: globalConfig,
            entityType: 'global',
            fetchData: false,
            operations: [
                'read'
            ],
            req
        });
    }
    if (sanitizedPath !== 'id') {
        paths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$getLocalizedPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getLocalizedPaths"])({
            collectionSlug: collectionConfig?.slug,
            fields,
            globalSlug: globalConfig?.slug,
            incomingPath: sanitizedPath,
            locale: req.locale,
            overrideAccess,
            parentIsLocalized,
            payload: req.payload
        });
    }
    const promises = [];
    // Sanitize relation.otherRelation.id to relation.otherRelation
    if (paths.at(-1)?.path === 'id') {
        const previousField = paths.at(-2)?.field;
        if (previousField && (previousField.type === 'relationship' || previousField.type === 'upload') && typeof previousField.relationTo === 'string') {
            paths.pop();
        }
    }
    promises.push(...paths.map(async ({ collectionSlug, field, invalid, path }, i)=>{
        if (invalid) {
            if (!polymorphicJoin) {
                errors.push({
                    path
                });
            }
            return;
        }
        // where: { relatedPosts: { equals: 1}} -> { 'relatedPosts.id': { equals: 1}}
        if (field.type === 'join' && path === incomingPath) {
            constraint[`${path}.id`] = constraint[path];
            delete constraint[path];
        }
        if ('virtual' in field && field.virtual) {
            if (field.virtual === true) {
                errors.push({
                    path
                });
            }
        }
        if (polymorphicJoin && path === 'relationTo') {
            return;
        }
        if (!overrideAccess && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
            if (collectionSlug) {
                if (!policies.collections[collectionSlug]) {
                    policies.collections[collectionSlug] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getEntityPermissions$2f$getEntityPermissions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEntityPermissions"])({
                        blockReferencesPermissions,
                        entity: req.payload.collections[collectionSlug].config,
                        entityType: 'collection',
                        fetchData: false,
                        operations: [
                            'read'
                        ],
                        req: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isolateObjectProperty"])(req, 'transactionID')
                    });
                }
                if ([
                    'hash',
                    'salt'
                ].includes(incomingPath) && collectionConfig.auth && !collectionConfig.auth?.disableLocalStrategy) {
                    errors.push({
                        path: incomingPath
                    });
                }
            }
            let fieldPath = path;
            // remove locale from end of path
            if (path.endsWith(`.${req.locale}`)) {
                fieldPath = path.slice(0, -(req.locale.length + 1));
            }
            // remove ".value" from ends of polymorphic relationship paths
            if ((field.type === 'relationship' || field.type === 'upload') && Array.isArray(field.relationTo)) {
                fieldPath = fieldPath.replace('.value', '');
            }
            const entityType = globalConfig ? 'globals' : 'collections';
            const entitySlug = collectionSlug || globalConfig.slug;
            const segments = fieldPath.split('.');
            let fieldAccess;
            if (versionFields) {
                fieldAccess = policies[entityType][entitySlug].fields;
                if (segments[0] === 'parent' || segments[0] === 'version' || segments[0] === 'snapshot' || segments[0] === 'latest') {
                    segments.shift();
                }
            } else {
                fieldAccess = policies[entityType][entitySlug].fields;
            }
            if (segments.length) {
                segments.forEach((segment)=>{
                    if (fieldAccess[segment]) {
                        if ('fields' in fieldAccess[segment]) {
                            fieldAccess = fieldAccess[segment].fields;
                        } else {
                            fieldAccess = fieldAccess[segment];
                        }
                    }
                });
                if (!fieldAccess?.read?.permission) {
                    errors.push({
                        path: fieldPath
                    });
                }
            }
        }
        if (i > 1) {
            // Remove top collection and reverse array
            // to work backwards from top
            const pathsToQuery = paths.slice(1).reverse();
            pathsToQuery.forEach(({ collectionSlug: pathCollectionSlug, path: subPath }, pathToQueryIndex)=>{
                // On the "deepest" collection,
                // validate query of the relationship
                if (pathToQueryIndex === 0) {
                    promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateQueryPaths"])({
                        collectionConfig: req.payload.collections[pathCollectionSlug].config,
                        errors,
                        globalConfig: undefined,
                        overrideAccess,
                        policies,
                        req,
                        where: {
                            [subPath]: {
                                [operator]: val
                            }
                        }
                    }));
                }
            });
        }
    }));
    await Promise.all(promises);
} //# sourceMappingURL=validateSearchParams.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/queryValidation/validateQueryPaths.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateQueryPaths",
    ()=>validateQueryPaths
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$QueryError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/QueryError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$types$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/types/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateSearchParams$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/queryValidation/validateSearchParams.js [app-route] (ecmascript)");
;
;
;
async function validateQueryPaths({ collectionConfig, errors = [], globalConfig, overrideAccess, policies = {
    collections: {},
    globals: {}
}, polymorphicJoin, req, versionFields, where }) {
    const fields = versionFields || (globalConfig || collectionConfig).flattenedFields;
    if (typeof where === 'object') {
        // We need to determine if the whereKey is an AND, OR, or a schema path
        const promises = [];
        for(const path in where){
            const constraint = where[path];
            if ((path === 'and' || path === 'or') && Array.isArray(constraint)) {
                for (const item of constraint){
                    if (collectionConfig) {
                        promises.push(validateQueryPaths({
                            collectionConfig,
                            errors,
                            overrideAccess,
                            policies,
                            polymorphicJoin,
                            req,
                            versionFields,
                            where: item
                        }));
                    } else {
                        promises.push(validateQueryPaths({
                            errors,
                            globalConfig,
                            overrideAccess,
                            policies,
                            polymorphicJoin,
                            req,
                            versionFields,
                            where: item
                        }));
                    }
                }
            } else if (!Array.isArray(constraint)) {
                for(const operator in constraint){
                    const val = constraint[operator];
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$types$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validOperatorSet"].has(operator)) {
                        promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateSearchParams$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateSearchParam"])({
                            collectionConfig,
                            constraint: where,
                            errors,
                            fields,
                            globalConfig,
                            operator,
                            overrideAccess,
                            path,
                            policies,
                            polymorphicJoin,
                            req,
                            val,
                            versionFields
                        }));
                    }
                }
            }
        }
        await Promise.all(promises);
        if (errors.length > 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$QueryError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["QueryError"](errors);
        }
    }
} //# sourceMappingURL=validateQueryPaths.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/sanitizeWhereQuery.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Currently used only for virtual fields linked with relationships
 */ __turbopack_context__.s([
    "sanitizeWhereQuery",
    ()=>sanitizeWhereQuery
]);
const sanitizeWhereQuery = ({ fields, payload, where })=>{
    for(const key in where){
        const value = where[key];
        if ([
            'and',
            'or'
        ].includes(key.toLowerCase()) && Array.isArray(value)) {
            for (const where of value){
                sanitizeWhereQuery({
                    fields,
                    payload,
                    where
                });
            }
            continue;
        }
        const paths = key.split('.');
        let pathHasChanged = false;
        let currentFields = fields;
        for(let i = 0; i < paths.length; i++){
            const path = paths[i];
            const field = currentFields.find((each)=>each.name === path);
            if (!field) {
                break;
            }
            if ('virtual' in field && field.virtual && typeof field.virtual === 'string') {
                paths[i] = field.virtual;
                pathHasChanged = true;
            }
            if ('flattenedFields' in field) {
                currentFields = field.flattenedFields;
            }
            if ((field.type === 'relationship' || field.type === 'upload') && typeof field.relationTo === 'string') {
                const relatedCollection = payload.collections[field.relationTo];
                if (relatedCollection) {
                    currentFields = relatedCollection.config.flattenedFields;
                }
            }
        }
        if (pathHasChanged) {
            where[paths.join('.')] = where[key];
            delete where[key];
        }
    }
}; //# sourceMappingURL=sanitizeWhereQuery.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/sanitizeJoinQuery.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sanitizeJoinQuery",
    ()=>sanitizeJoinQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/executeAccess.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$QueryError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/QueryError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/combineQueries.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/queryValidation/validateQueryPaths.js [app-route] (ecmascript)");
;
;
;
;
const sanitizeJoinFieldQuery = async ({ collectionSlug, errors, join, joinsQuery, overrideAccess, promises, req })=>{
    const { joinPath } = join;
    // TODO: fix any's in joinsQuery[joinPath]
    if (joinsQuery[joinPath] === false) {
        return;
    }
    const joinCollectionConfig = req.payload.collections[collectionSlug].config;
    const accessResult = !overrideAccess ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeAccess"])({
        disableErrors: true,
        req
    }, joinCollectionConfig.access.read) : true;
    if (accessResult === false) {
        ;
        joinsQuery[joinPath] = false;
        return;
    }
    if (!joinsQuery[joinPath]) {
        ;
        joinsQuery[joinPath] = {};
    }
    const joinQuery = joinsQuery[joinPath];
    if (!joinQuery.where) {
        joinQuery.where = {};
    }
    if (join.field.where) {
        joinQuery.where = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineQueries"])(joinQuery.where, join.field.where);
    }
    promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateQueryPaths"])({
        collectionConfig: joinCollectionConfig,
        errors,
        overrideAccess,
        polymorphicJoin: Array.isArray(join.field.collection),
        req,
        // incoming where input, but we shouldn't validate generated from the access control.
        where: joinQuery.where
    }));
    if (typeof accessResult === 'object') {
        joinQuery.where = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineQueries"])(joinQuery.where, accessResult);
    }
};
const sanitizeJoinQuery = async ({ collectionConfig, joins: joinsQuery, overrideAccess, req })=>{
    if (joinsQuery === false) {
        return false;
    }
    if (!joinsQuery) {
        joinsQuery = {};
    }
    const errors = [];
    const promises = [];
    for(const collectionSlug in collectionConfig.joins){
        for (const join of collectionConfig.joins[collectionSlug]){
            await sanitizeJoinFieldQuery({
                collectionSlug,
                errors,
                join,
                joinsQuery,
                overrideAccess,
                promises,
                req
            });
        }
    }
    for (const join of collectionConfig.polymorphicJoins){
        for (const collectionSlug of join.field.collection){
            await sanitizeJoinFieldQuery({
                collectionSlug,
                errors,
                join,
                joinsQuery,
                overrideAccess,
                promises,
                req
            });
        }
    }
    await Promise.all(promises);
    if (errors.length > 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$QueryError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["QueryError"](errors);
    }
    return joinsQuery;
}; //# sourceMappingURL=sanitizeJoinQuery.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/types/constants.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validOperatorSet",
    ()=>validOperatorSet,
    "validOperators",
    ()=>validOperators
]);
const validOperators = [
    'equals',
    'contains',
    'not_equals',
    'in',
    'all',
    'not_in',
    'exists',
    'greater_than',
    'greater_than_equal',
    'less_than',
    'less_than_equal',
    'like',
    'not_like',
    'within',
    'intersects',
    'near'
];
const validOperatorSet = new Set(validOperators); //# sourceMappingURL=constants.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/types/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "docHasTimestamps",
    ()=>docHasTimestamps
]);
function docHasTimestamps(doc) {
    return doc?.createdAt && doc?.updatedAt;
} //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/getFileByPath.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFileByPath",
    ()=>getFileByPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$file$2d$type$40$19$2e$3$2e$0$2f$node_modules$2f$file$2d$type$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/file-type@19.3.0/node_modules/file-type/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
;
const mimeTypeEstimate = {
    svg: 'image/svg+xml'
};
const getFileByPath = async (filePath)=>{
    if (typeof filePath !== 'string') {
        return undefined;
    }
    const name = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].basename(filePath);
    const ext = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].extname(filePath).slice(1);
    const [data, stat, type] = await Promise.all([
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readFile(filePath),
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].stat(filePath),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$file$2d$type$40$19$2e$3$2e$0$2f$node_modules$2f$file$2d$type$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fileTypeFromFile"])(filePath)
    ]);
    return {
        name,
        data,
        mimetype: type?.mime || mimeTypeEstimate[ext],
        size: stat.size
    };
}; //# sourceMappingURL=getFileByPath.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/canResizeImage.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canResizeImage",
    ()=>canResizeImage
]);
function canResizeImage(mimeType) {
    return [
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/webp',
        'image/tiff',
        'image/avif'
    ].indexOf(mimeType) > -1;
} //# sourceMappingURL=canResizeImage.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/detectSvgFromXml.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Securely detect if an XML buffer contains a valid SVG document
 */ __turbopack_context__.s([
    "detectSvgFromXml",
    ()=>detectSvgFromXml
]);
function detectSvgFromXml(buffer) {
    try {
        // Limit buffer size to prevent processing large malicious files
        const maxSize = 2048;
        const content = buffer.toString('utf8', 0, Math.min(buffer.length, maxSize));
        // Check for XML declaration and extract encoding if present
        const xmlDeclMatch = content.match(/^<\?xml[^>]*encoding=["']([^"']+)["']/i);
        const declaredEncoding = xmlDeclMatch?.[1]?.toLowerCase();
        // Only support safe encodings
        if (declaredEncoding && ![
            'ascii',
            'utf-8',
            'utf8'
        ].includes(declaredEncoding)) {
            return false;
        }
        // Remove XML declarations, comments, and processing instructions
        const cleanContent = content.replace(/<\?xml[^>]*\?>/gi, '').replace(/<!--[\s\S]*?-->/g, '').replace(/<\?[^>]*\?>/g, '').trim();
        // Find the first actual element (root element)
        const rootElementMatch = cleanContent.match(/^<(\w+)(?:\s|>)/);
        if (!rootElementMatch || rootElementMatch[1] !== 'svg') {
            return false;
        }
        // Validate SVG namespace - must be present for valid SVG
        const svgNamespaceRegex = /xmlns=["']http:\/\/www\.w3\.org\/2000\/svg["']/;
        if (!svgNamespaceRegex.test(content)) {
            return false;
        }
        // Additional validation: ensure it's not malformed
        const svgOpenTag = content.match(/<svg[\s>]/);
        if (!svgOpenTag) {
            return false;
        }
        return true;
    } catch (_error) {
        // If any error occurs during parsing, treat as not SVG
        return false;
    }
} //# sourceMappingURL=detectSvgFromXml.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/getFileTypeFallback.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFileTypeFallback",
    ()=>getFileTypeFallback
]);
const extensionMap = {
    css: 'text/css',
    csv: 'text/csv',
    htm: 'text/html',
    html: 'text/html',
    js: 'application/javascript',
    json: 'application/json',
    md: 'text/markdown',
    svg: 'image/svg+xml',
    xml: 'application/xml',
    yml: 'application/x-yaml'
};
const getFileTypeFallback = (path)=>{
    const ext = path.split('.').pop() || 'txt';
    return {
        ext,
        mime: extensionMap[ext] || 'text/plain'
    };
}; //# sourceMappingURL=getFileTypeFallback.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/validateSvg.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Validate SVG content for security vulnerabilities
 * Detects and blocks malicious patterns commonly used in SVG-based attacks
 */ __turbopack_context__.s([
    "validateSvg",
    ()=>validateSvg
]);
function validateSvg(buffer) {
    try {
        const content = buffer.toString('utf8');
        const dangerousPatterns = [
            // Script tags
            /<script[\s>]/i,
            /<\/script>/i,
            // Event handlers (onclick, onload, onerror, etc.)
            /\son\w+\s*=/i,
            // JavaScript URLs
            /javascript:/i,
            /data:text\/html/i,
            // Foreign objects (can embed HTML)
            /<foreignObject[\s>]/i,
            // Embedded iframes
            /<iframe[\s>]/i,
            // Embedded objects and embeds
            /<object[\s>]/i,
            /<embed[\s>]/i,
            // Base64 encoded scripts (common obfuscation technique)
            /data:image\/svg\+xml;base64,[\w+/]*PHNjcmlwdA/i,
            // XLink href with javascript (deprecated but still dangerous)
            /xlink:href\s*=\s*["']javascript:/i,
            // Import statements
            /@import/i,
            // External resource references that could be dangerous
            /<!ENTITY/i,
            /<!DOCTYPE[^>]*\[/i,
            // Attempt to use CDATA to hide scripts
            /<!\[CDATA\[[\s\S]*<script/i
        ];
        for (const pattern of dangerousPatterns){
            if (pattern.test(content)) {
                return false;
            }
        }
        return true;
    } catch (_error) {
        return false;
    }
} //# sourceMappingURL=validateSvg.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/checkFileRestrictions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RESTRICTED_FILE_EXT_AND_TYPES",
    ()=>RESTRICTED_FILE_EXT_AND_TYPES,
    "checkFileRestrictions",
    ()=>checkFileRestrictions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$file$2d$type$40$19$2e$3$2e$0$2f$node_modules$2f$file$2d$type$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/file-type@19.3.0/node_modules/file-type/core.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ValidationError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/ValidationError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$validateMimeType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/validateMimeType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$validatePDF$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/validatePDF.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$detectSvgFromXml$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/detectSvgFromXml.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$getFileTypeFallback$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/getFileTypeFallback.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$validateSvg$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/validateSvg.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
const RESTRICTED_FILE_EXT_AND_TYPES = [
    {
        extensions: [
            'exe',
            'dll'
        ],
        mimeType: 'application/x-msdownload'
    },
    {
        extensions: [
            'exe',
            'com',
            'app',
            'action'
        ],
        mimeType: 'application/x-executable'
    },
    {
        extensions: [
            'bat',
            'cmd'
        ],
        mimeType: 'application/x-msdos-program'
    },
    {
        extensions: [
            'exe',
            'com'
        ],
        mimeType: 'application/x-ms-dos-executable'
    },
    {
        extensions: [
            'dmg'
        ],
        mimeType: 'application/x-apple-diskimage'
    },
    {
        extensions: [
            'deb'
        ],
        mimeType: 'application/x-debian-package'
    },
    {
        extensions: [
            'rpm'
        ],
        mimeType: 'application/x-redhat-package-manager'
    },
    {
        extensions: [
            'exe',
            'dll'
        ],
        mimeType: 'application/vnd.microsoft.portable-executable'
    },
    {
        extensions: [
            'msi'
        ],
        mimeType: 'application/x-msi'
    },
    {
        extensions: [
            'jar',
            'ear',
            'war'
        ],
        mimeType: 'application/java-archive'
    },
    {
        extensions: [
            'desktop'
        ],
        mimeType: 'application/x-desktop'
    },
    {
        extensions: [
            'cpl'
        ],
        mimeType: 'application/x-cpl'
    },
    {
        extensions: [
            'lnk'
        ],
        mimeType: 'application/x-ms-shortcut'
    },
    {
        extensions: [
            'pkg'
        ],
        mimeType: 'application/x-apple-installer'
    },
    {
        extensions: [
            'htm',
            'html',
            'shtml',
            'xhtml'
        ],
        mimeType: 'text/html'
    },
    {
        extensions: [
            'php',
            'phtml'
        ],
        mimeType: 'application/x-httpd-php'
    },
    {
        extensions: [
            'js',
            'jse'
        ],
        mimeType: 'text/javascript'
    },
    {
        extensions: [
            'jsp'
        ],
        mimeType: 'application/x-jsp'
    },
    {
        extensions: [
            'py'
        ],
        mimeType: 'text/x-python'
    },
    {
        extensions: [
            'rb'
        ],
        mimeType: 'text/x-ruby'
    },
    {
        extensions: [
            'pl'
        ],
        mimeType: 'text/x-perl'
    },
    {
        extensions: [
            'ps1',
            'psc1',
            'psd1',
            'psh',
            'psm1'
        ],
        mimeType: 'application/x-powershell'
    },
    {
        extensions: [
            'vbe',
            'vbs'
        ],
        mimeType: 'application/x-vbscript'
    },
    {
        extensions: [
            'ws',
            'wsc',
            'wsf',
            'wsh'
        ],
        mimeType: 'application/x-ms-wsh'
    },
    {
        extensions: [
            'scr'
        ],
        mimeType: 'application/x-msdownload'
    },
    {
        extensions: [
            'asp',
            'aspx'
        ],
        mimeType: 'application/x-asp'
    },
    {
        extensions: [
            'hta'
        ],
        mimeType: 'application/x-hta'
    },
    {
        extensions: [
            'reg'
        ],
        mimeType: 'application/x-registry'
    },
    {
        extensions: [
            'url'
        ],
        mimeType: 'application/x-url'
    },
    {
        extensions: [
            'workflow'
        ],
        mimeType: 'application/x-workflow'
    },
    {
        extensions: [
            'command'
        ],
        mimeType: 'application/x-command'
    }
];
const checkFileRestrictions = async ({ collection, file, req })=>{
    const errors = [];
    const { upload: uploadConfig } = collection;
    const useTempFiles = req?.payload?.config?.upload?.useTempFiles ?? false;
    const configMimeTypes = uploadConfig && typeof uploadConfig === 'object' && 'mimeTypes' in uploadConfig && Array.isArray(uploadConfig.mimeTypes) ? uploadConfig.mimeTypes : [];
    const allowRestrictedFileTypes = uploadConfig && typeof uploadConfig === 'object' && 'allowRestrictedFileTypes' in uploadConfig ? uploadConfig.allowRestrictedFileTypes : false;
    const expectsDetectableType = (mimeType)=>{
        const textBasedTypes = [
            '/svg',
            'image/svg+xml',
            'image/x-xbitmap',
            'image/x-xpixmap'
        ];
        if (textBasedTypes.includes(mimeType)) {
            return false;
        }
        return mimeType.startsWith('image/') || mimeType.startsWith('video/') || mimeType.startsWith('audio/') || mimeType === 'application/pdf';
    };
    // Skip validation if `allowRestrictedFileTypes` is true
    if (allowRestrictedFileTypes) {
        return;
    }
    // Secondary mimetype check to assess file type from buffer
    if (configMimeTypes.length > 0) {
        let detected = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$file$2d$type$40$19$2e$3$2e$0$2f$node_modules$2f$file$2d$type$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fileTypeFromBuffer"])(file.data);
        const typeFromExtension = file.name.split('.').pop() || '';
        // Handle SVG files that are detected as XML due to <?xml declarations
        if (detected?.mime === 'application/xml' && configMimeTypes.some((type)=>type.includes('image/') && (type.includes('svg') || type === 'image/*'))) {
            const isSvg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$detectSvgFromXml$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["detectSvgFromXml"])(file.data);
            if (isSvg) {
                detected = {
                    ext: 'svg',
                    mime: 'image/svg+xml'
                };
            }
        }
        if (!detected && !useTempFiles) {
            const mimeTypeFromExtension = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$getFileTypeFallback$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFileTypeFallback"])(file.name).mime;
            const extIsValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$validateMimeType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateMimeType"])(mimeTypeFromExtension, configMimeTypes);
            if (!extIsValid) {
                errors.push(`File type ${mimeTypeFromExtension} (from extension ${typeFromExtension}) is not allowed.`);
            } else {
                // SVG security check (text-based files not detectable by buffer)
                if (typeFromExtension.toLowerCase() === 'svg') {
                    const isSafeSvg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$validateSvg$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateSvg"])(file.data);
                    if (!isSafeSvg) {
                        errors.push('SVG file contains potentially harmful content.');
                    }
                }
                // PDF validation
                if (mimeTypeFromExtension === 'application/pdf') {
                    const isValidPDF = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$validatePDF$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validatePDF"])(file.data);
                    if (!isValidPDF) {
                        errors.push('Invalid or corrupted PDF file.');
                    }
                }
            }
            if (expectsDetectableType(mimeTypeFromExtension)) {
                req.payload.logger.warn(`File buffer returned no detectable MIME type for ${file.name}. Falling back to extension-based validation.`);
            }
        }
        const passesMimeTypeCheck = detected?.mime && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$validateMimeType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateMimeType"])(detected.mime, configMimeTypes);
        if (passesMimeTypeCheck && detected?.mime === 'application/pdf') {
            const isValidPDF = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$validatePDF$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validatePDF"])(file?.data);
            if (!isValidPDF) {
                errors.push('Invalid PDF file.');
            }
        }
        if (detected && !passesMimeTypeCheck) {
            errors.push(`Invalid MIME type: ${detected.mime}.`);
        }
    } else {
        const isRestricted = RESTRICTED_FILE_EXT_AND_TYPES.some((type)=>{
            const hasRestrictedExt = type.extensions.some((ext)=>file.name.toLowerCase().endsWith(ext));
            const hasRestrictedMime = type.mimeType === file.mimetype;
            return hasRestrictedExt || hasRestrictedMime;
        });
        if (isRestricted) {
            errors.push(`File type '${file.mimetype}' not allowed ${file.name}: Restricted file type detected -- set 'allowRestrictedFileTypes' to true to skip this check for this Collection.`);
        }
    }
    if (errors.length > 0) {
        req.payload.logger.error(errors.join(', '));
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ValidationError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ValidationError"]({
            errors: [
                {
                    message: errors.join(', '),
                    path: 'file'
                }
            ]
        });
    }
}; //# sourceMappingURL=checkFileRestrictions.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/optionallyAppendMetadata.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "optionallyAppendMetadata",
    ()=>optionallyAppendMetadata
]);
async function optionallyAppendMetadata({ req, sharpFile, withMetadata }) {
    const metadata = await sharpFile.metadata();
    if (withMetadata === true) {
        return sharpFile.withMetadata();
    } else if (typeof withMetadata === 'function') {
        const useMetadata = await withMetadata({
            metadata,
            req
        });
        if (useMetadata) {
            return sharpFile.withMetadata();
        }
    }
    return sharpFile;
} //# sourceMappingURL=optionallyAppendMetadata.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/cropImage.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cropImage",
    ()=>cropImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$optionallyAppendMetadata$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/optionallyAppendMetadata.js [app-route] (ecmascript)");
;
const percentToPixel = (value, dimension)=>{
    return Math.floor(value / 100 * dimension);
};
async function cropImage({ cropData, dimensions, file: fileArg, heightInPixels, req, sharp, widthInPixels, withMetadata }) {
    try {
        const { x, y } = cropData;
        const file = fileArg;
        const fileIsAnimatedType = [
            'image/avif',
            'image/gif',
            'image/webp'
        ].includes(file.mimetype);
        const sharpOptions = {};
        if (fileIsAnimatedType) {
            sharpOptions.animated = true;
        }
        const { height: originalHeight, width: originalWidth } = dimensions;
        const newWidth = Number(widthInPixels);
        const newHeight = Number(heightInPixels);
        const dimensionsChanged = originalWidth !== newWidth || originalHeight !== newHeight;
        if (!dimensionsChanged) {
            let adjustedHeight = originalHeight;
            if (fileIsAnimatedType) {
                const animatedMetadata = await sharp(file.tempFilePath || file.data, sharpOptions).metadata();
                adjustedHeight = animatedMetadata.pages ? animatedMetadata.height : originalHeight;
            }
            return {
                data: file.data,
                info: {
                    height: adjustedHeight,
                    size: file.size,
                    width: originalWidth
                }
            };
        }
        const formattedCropData = {
            height: Number(heightInPixels),
            left: percentToPixel(x, dimensions.width),
            top: percentToPixel(y, dimensions.height),
            width: Number(widthInPixels)
        };
        let cropped = sharp(file.tempFilePath || file.data, sharpOptions).extract(formattedCropData);
        cropped = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$optionallyAppendMetadata$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["optionallyAppendMetadata"])({
            req: req,
            sharpFile: cropped,
            withMetadata: withMetadata
        });
        return await cropped.toBuffer({
            resolveWithObject: true
        });
    } catch (error) {
        console.error(`Error cropping image:`, error);
        throw error;
    }
} //# sourceMappingURL=cropImage.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/safeFetch.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_internal_safeFetchGlobal",
    ()=>_internal_safeFetchGlobal,
    "safeFetch",
    ()=>safeFetch
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$dns__$5b$external$5d$__$28$dns$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dns [external] (dns, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ipaddr$2e$js$40$2$2e$2$2e$0$2f$node_modules$2f$ipaddr$2e$js$2f$lib$2f$ipaddr$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ipaddr.js@2.2.0/node_modules/ipaddr.js/lib/ipaddr.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$undici$40$7$2e$10$2e$0$2f$node_modules$2f$undici$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/undici@7.10.0/node_modules/undici/index.js [app-route] (ecmascript)");
;
;
;
const _internal_safeFetchGlobal = {
    lookup: __TURBOPACK__imported__module__$5b$externals$5d2f$dns__$5b$external$5d$__$28$dns$2c$__cjs$29$__["lookup"]
};
const isSafeIp = (ip)=>{
    try {
        if (!ip) {
            return false;
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ipaddr$2e$js$40$2$2e$2$2e$0$2f$node_modules$2f$ipaddr$2e$js$2f$lib$2f$ipaddr$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].isValid(ip)) {
            return false;
        }
        const parsedIpAddress = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ipaddr$2e$js$40$2$2e$2$2e$0$2f$node_modules$2f$ipaddr$2e$js$2f$lib$2f$ipaddr$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].parse(ip);
        const range = parsedIpAddress.range();
        if (range !== 'unicast') {
            return false // Private IP Range
            ;
        }
    } catch (ignore) {
        return false;
    }
    return true;
};
const ssrfFilterInterceptor = (hostname, options, callback)=>{
    _internal_safeFetchGlobal.lookup(hostname, options, (err, address, family)=>{
        if (err) {
            callback(err, address, family);
        } else {
            let ips = [];
            if (Array.isArray(address)) {
                ips = address.map((a)=>a.address);
            } else {
                ips = [
                    address
                ];
            }
            if (ips.some((ip)=>!isSafeIp(ip))) {
                callback(new Error(`Blocked unsafe attempt to ${hostname}`), address, family);
                return;
            }
            callback(null, address, family);
        }
    });
};
const safeDispatcher = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$undici$40$7$2e$10$2e$0$2f$node_modules$2f$undici$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Agent"]({
    connect: {
        lookup: ssrfFilterInterceptor
    }
});
const safeFetch = async (...args)=>{
    const [unverifiedUrl, options] = args;
    try {
        const url = new URL(unverifiedUrl);
        let hostname = url.hostname;
        // Strip brackets from IPv6 addresses (e.g., "[::1]" => "::1")
        if (hostname.startsWith('[') && hostname.endsWith(']')) {
            hostname = hostname.slice(1, -1);
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ipaddr$2e$js$40$2$2e$2$2e$0$2f$node_modules$2f$ipaddr$2e$js$2f$lib$2f$ipaddr$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].isValid(hostname)) {
            if (!isSafeIp(hostname)) {
                throw new Error(`Blocked unsafe attempt to ${hostname}`);
            }
        }
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$undici$40$7$2e$10$2e$0$2f$node_modules$2f$undici$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetch"])(url, {
            ...options,
            dispatcher: safeDispatcher
        });
    } catch (error) {
        if (error instanceof Error) {
            if (error.cause instanceof Error && error.cause.message.includes('unsafe')) {
                // Errors thrown from within interceptors always have 'fetch error' as the message
                // The desired message we want to bubble up is in the cause
                throw new Error(error.cause.message);
            } else {
                let stringifiedUrl = undefined;
                if (typeof unverifiedUrl === 'string') {
                    stringifiedUrl = unverifiedUrl;
                } else if (unverifiedUrl instanceof URL) {
                    stringifiedUrl = unverifiedUrl.toString();
                } else if (unverifiedUrl instanceof Request) {
                    stringifiedUrl = unverifiedUrl.url;
                }
                throw new Error(`Failed to fetch from ${stringifiedUrl}, ${error.message}`);
            }
        }
        throw error;
    }
}; //# sourceMappingURL=safeFetch.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/getExternalFile.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getExternalFile",
    ()=>getExternalFile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isURLAllowed$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/isURLAllowed.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$safeFetch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/safeFetch.js [app-route] (ecmascript)");
;
;
;
const getExternalFile = async ({ data, req, uploadConfig })=>{
    const { filename, url } = data;
    let trimAuthCookies = true;
    if (typeof url === 'string') {
        let fileURL = url;
        if (!url.startsWith('http')) {
            // URL points to the same server - we can send any cookies safely to our server.
            trimAuthCookies = false;
            const baseUrl = req.headers.get('origin') || `${req.protocol}://${req.headers.get('host')}`;
            fileURL = `${baseUrl}${url}`;
        }
        let cookies = (req.headers.get('cookie') ?? '').split(';');
        if (trimAuthCookies) {
            cookies = cookies.filter((cookie)=>!cookie.trim().startsWith(req.payload.config.cookiePrefix));
        }
        const headers = uploadConfig.externalFileHeaderFilter ? uploadConfig.externalFileHeaderFilter(Object.fromEntries(new Headers(req.headers))) : {
            cookie: cookies.join(';')
        };
        // Check if URL is allowed because of skipSafeFetch allowList
        const skipSafeFetch = uploadConfig.skipSafeFetch === true ? uploadConfig.skipSafeFetch : Array.isArray(uploadConfig.skipSafeFetch) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isURLAllowed$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isURLAllowed"])(fileURL, uploadConfig.skipSafeFetch);
        // Check if URL is allowed because of pasteURL allowList
        const isAllowedPasteUrl = uploadConfig.pasteURL && uploadConfig.pasteURL.allowList && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isURLAllowed$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isURLAllowed"])(fileURL, uploadConfig.pasteURL.allowList);
        let res;
        if (skipSafeFetch || isAllowedPasteUrl) {
            // Allowed
            res = await fetch(fileURL, {
                credentials: 'include',
                headers,
                method: 'GET'
            });
        } else {
            // Default
            res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$safeFetch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeFetch"])(fileURL, {
                credentials: 'include',
                headers,
                method: 'GET'
            });
        }
        if (!res.ok) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`Failed to fetch file from ${fileURL}`, res.status);
        }
        const data = await res.arrayBuffer();
        return {
            name: filename,
            data: Buffer.from(data),
            mimetype: res.headers.get('content-type') || undefined,
            size: Number(res.headers.get('content-length')) || 0
        };
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]('Invalid file url', 400);
}; //# sourceMappingURL=getExternalFile.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/tempFile.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "temporaryFileTask",
    ()=>temporaryFileTask
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$os__$5b$external$5d$__$28$node$3a$os$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:os [external] (node:os, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$10$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/uuid@10.0.0/node_modules/uuid/dist/esm-node/v4.js [app-route] (ecmascript) <export default as v4>");
;
;
;
;
async function runTask(temporaryPath, callback) {
    try {
        return await callback(temporaryPath);
    } finally{
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].rm(temporaryPath, {
            force: true,
            maxRetries: 2,
            recursive: true
        });
    }
}
const temporaryFileTask = async (callback, options = {})=>{
    const filePath = await temporaryFile(options);
    return runTask(filePath, callback);
};
async function temporaryFile(options) {
    if (options.name) {
        if (options.extension !== undefined && options.extension !== null) {
            throw new Error('The `name` and `extension` options are mutually exclusive');
        }
        return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(await temporaryDirectory(), options.name);
    }
    return await getPath() + (options.extension === undefined || options.extension === null ? '' : '.' + options.extension.replace(/^\./, ''));
}
async function temporaryDirectory({ prefix = '' } = {}) {
    const directory = await getPath(prefix);
    await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].mkdir(directory);
    return directory;
}
async function getPath(prefix = '') {
    const temporaryDirectory = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].realpath(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$os__$5b$external$5d$__$28$node$3a$os$2c$__cjs$29$__["default"].tmpdir());
    return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(temporaryDirectory, prefix + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$10$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])());
} //# sourceMappingURL=tempFile.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/getImageSize.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getImageSize",
    ()=>getImageSize
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$image$2d$size$40$2$2e$0$2e$2$2f$node_modules$2f$image$2d$size$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/image-size@2.0.2/node_modules/image-size/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$image$2d$size$40$2$2e$0$2e$2$2f$node_modules$2f$image$2d$size$2f$dist$2f$fromFile$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/image-size@2.0.2/node_modules/image-size/dist/fromFile.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$tempFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/tempFile.js [app-route] (ecmascript)");
;
;
;
;
async function getImageSize(file) {
    if (file?.tempFilePath) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$image$2d$size$40$2$2e$0$2e$2$2f$node_modules$2f$image$2d$size$2f$dist$2f$fromFile$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["imageSizeFromFile"])(file.tempFilePath);
    }
    // Tiff file do not support buffers or streams, so we must write to file first
    // then retrieve dimensions. https://github.com/image-size/image-size/issues/103
    if (file?.mimetype === 'image/tiff') {
        const dimensions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$tempFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["temporaryFileTask"])(async (filepath)=>{
            await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(filepath, file.data);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$image$2d$size$40$2$2e$0$2e$2$2f$node_modules$2f$image$2d$size$2f$dist$2f$fromFile$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["imageSizeFromFile"])(filepath);
        }, {
            extension: 'tiff'
        });
        return dimensions;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$image$2d$size$40$2$2e$0$2e$2$2f$node_modules$2f$image$2d$size$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["imageSize"])(file.data);
} //# sourceMappingURL=getImageSize.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/docWithFilenameExists.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "docWithFilenameExists",
    ()=>docWithFilenameExists
]);
const docWithFilenameExists = async ({ collectionSlug, filename, prefix, req })=>{
    const where = {
        filename: {
            equals: filename
        }
    };
    if (prefix) {
        where.prefix = {
            equals: prefix
        };
    }
    const doc = await req.payload.db.findOne({
        collection: collectionSlug,
        req,
        where
    });
    return !!doc;
}; //# sourceMappingURL=docWithFilenameExists.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/fileExists.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fileExists",
    ()=>fileExists
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
;
const fileExists = async (filename)=>{
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].stat(filename);
        return true;
    } catch (ignore) {
        return false;
    }
}; //# sourceMappingURL=fileExists.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/getSafeFilename.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSafeFileName",
    ()=>getSafeFileName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanitize$2d$filename$40$1$2e$6$2e$3$2f$node_modules$2f$sanitize$2d$filename$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/sanitize-filename@1.6.3/node_modules/sanitize-filename/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$docWithFilenameExists$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/docWithFilenameExists.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fileExists$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/fileExists.js [app-route] (ecmascript)");
;
;
;
const incrementName = (name)=>{
    const extension = name.split('.').pop();
    const baseFilename = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanitize$2d$filename$40$1$2e$6$2e$3$2f$node_modules$2f$sanitize$2d$filename$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(name.substring(0, name.lastIndexOf('.')) || name);
    let incrementedName = baseFilename;
    const regex = /(.*)-(\d+)$/;
    const found = baseFilename.match(regex);
    if (found === null) {
        incrementedName += '-1';
    } else {
        const matchedName = found[1];
        const matchedNumber = found[2];
        const incremented = Number(matchedNumber) + 1;
        incrementedName = `${matchedName}-${incremented}`;
    }
    return `${incrementedName}.${extension}`;
};
async function getSafeFileName({ collectionSlug, desiredFilename, prefix, req, staticPath }) {
    let modifiedFilename = desiredFilename;
    while(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$docWithFilenameExists$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["docWithFilenameExists"])({
        collectionSlug,
        filename: modifiedFilename,
        path: staticPath,
        prefix,
        req
    }) || await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fileExists$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fileExists"])(`${staticPath}/${modifiedFilename}`)){
        modifiedFilename = incrementName(modifiedFilename);
    }
    return modifiedFilename;
} //# sourceMappingURL=getSafeFilename.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/imageResizer.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resizeAndTransformImageSizes",
    ()=>resizeAndTransformImageSizes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$file$2d$type$40$19$2e$3$2e$0$2f$node_modules$2f$file$2d$type$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/file-type@19.3.0/node_modules/file-type/core.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanitize$2d$filename$40$1$2e$6$2e$3$2f$node_modules$2f$sanitize$2d$filename$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/sanitize-filename@1.6.3/node_modules/sanitize-filename/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/isNumber.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fileExists$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/fileExists.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$optionallyAppendMetadata$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/optionallyAppendMetadata.js [app-route] (ecmascript)");
;
;
;
;
;
;
/**
 * Sanitize the image name and extract the extension from the source image
 *
 * @param sourceImage - the source image
 * @returns the sanitized name and extension
 */ const getSanitizedImageData = (sourceImage)=>{
    const extension = sourceImage.split('.').pop();
    const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanitize$2d$filename$40$1$2e$6$2e$3$2f$node_modules$2f$sanitize$2d$filename$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(sourceImage.substring(0, sourceImage.lastIndexOf('.')) || sourceImage);
    return {
        name,
        ext: extension
    };
};
const createImageName = ({ extension, height, outputImageName, width })=>{
    return `${outputImageName}-${width}x${height}.${extension}`;
};
/**
 * Create the result object for the image resize operation based on the
 * provided parameters. If the name is not provided, an empty result object
 * is returned.
 *
 * @param name - the name of the image
 * @param filename - the filename of the image
 * @param width - the width of the image
 * @param height - the height of the image
 * @param filesize - the filesize of the image
 * @param mimeType - the mime type of the image
 * @param sizesToSave - the sizes to save
 * @returns the result object
 */ const createResult = ({ name, filename = null, filesize = null, height = null, mimeType = null, sizesToSave = [], width = null })=>{
    return {
        sizeData: {
            [name]: {
                filename,
                filesize,
                height,
                mimeType,
                width
            }
        },
        sizesToSave
    };
};
/**
 * Determine whether or not to resize the image.
 * - resize using image config
 * - resize using image config with focal adjustments
 * - do not resize at all
 *
 * `imageResizeConfig.withoutEnlargement`:
 * - undefined [default]: uploading images with smaller width AND height than the image size will return null
 * - false: always enlarge images to the image size
 * - true: if the image is smaller than the image size, return the original image
 *
 * `imageResizeConfig.withoutReduction`:
 * - false [default]: always enlarge images to the image size
 * - true: if the image is smaller than the image size, return the original image
 *
 * @return 'omit' | 'resize' | 'resizeWithFocalPoint'
 */ const getImageResizeAction = ({ dimensions: originalImage, hasFocalPoint, imageResizeConfig })=>{
    const { fit, withoutEnlargement, withoutReduction } = imageResizeConfig;
    const targetWidth = imageResizeConfig.width;
    const targetHeight = imageResizeConfig.height;
    // prevent upscaling by default when x and y are both smaller than target image size
    if (targetHeight && targetWidth) {
        const originalImageIsSmallerXAndY = originalImage.width < targetWidth && originalImage.height < targetHeight;
        if (withoutEnlargement === undefined && originalImageIsSmallerXAndY) {
            return 'omit' // prevent image size from being enlarged
            ;
        }
    }
    if (withoutEnlargement === undefined && (!targetWidth || !targetHeight)) {
        if (targetWidth && originalImage.width < targetWidth || targetHeight && originalImage.height < targetHeight) {
            return 'omit';
        }
    }
    const originalImageIsSmallerXOrY = originalImage.width < targetWidth || originalImage.height < targetHeight;
    if (fit === 'contain' || fit === 'inside') {
        return 'resize';
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNumber"])(targetHeight) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNumber"])(targetWidth)) {
        return 'resize';
    }
    const targetAspectRatio = targetWidth / targetHeight;
    const originalAspectRatio = originalImage.width / originalImage.height;
    if (originalAspectRatio === targetAspectRatio) {
        return 'resize';
    }
    if (withoutEnlargement && originalImageIsSmallerXOrY) {
        return 'resize';
    }
    if (withoutReduction && !originalImageIsSmallerXOrY) {
        return 'resize';
    }
    return hasFocalPoint ? 'resizeWithFocalPoint' : 'resize';
};
/**
 * Sanitize the resize config. If the resize config has the `withoutReduction`
 * property set to true, the `fit` and `position` properties will be set to `contain`
 * and `top left` respectively.
 *
 * @param resizeConfig - the resize config
 * @returns a sanitized resize config
 */ const sanitizeResizeConfig = (resizeConfig)=>{
    if (resizeConfig.withoutReduction) {
        return {
            ...resizeConfig,
            // Why fit `contain` should also be set to https://github.com/lovell/sharp/issues/3595
            fit: resizeConfig?.fit || 'contain',
            position: resizeConfig?.position || 'left top'
        };
    }
    return resizeConfig;
};
/**
 * Used to extract height from images, animated or not.
 *
 * @param sharpMetadata - the sharp metadata
 * @returns the height of the image
 */ function extractHeightFromImage(sharpMetadata) {
    if (sharpMetadata?.pages) {
        return sharpMetadata.height / sharpMetadata.pages;
    }
    return sharpMetadata.height;
}
async function resizeAndTransformImageSizes({ config, dimensions, file, mimeType, req, savedFilename, sharp, staticPath, uploadEdits, withMetadata }) {
    const { focalPoint: focalPointEnabled = true, imageSizes } = config.upload;
    // Focal point adjustments
    const incomingFocalPoint = uploadEdits?.focalPoint ? {
        x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNumber"])(uploadEdits.focalPoint.x) ? Math.round(uploadEdits.focalPoint.x) : 50,
        y: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNumber"])(uploadEdits.focalPoint.y) ? Math.round(uploadEdits.focalPoint.y) : 50
    } : undefined;
    const defaultResult = {
        ...focalPointEnabled && incomingFocalPoint && {
            focalPoint: incomingFocalPoint
        },
        sizeData: {},
        sizesToSave: []
    };
    if (!imageSizes || !sharp) {
        return defaultResult;
    }
    // Determine if the file is animated
    const fileIsAnimatedType = [
        'image/avif',
        'image/gif',
        'image/webp'
    ].includes(file.mimetype);
    const sharpOptions = {};
    if (fileIsAnimatedType) {
        sharpOptions.animated = true;
    }
    const sharpBase = sharp(file.tempFilePath || file.data, sharpOptions).rotate() // pass rotate() to auto-rotate based on EXIF data. https://github.com/payloadcms/payload/pull/3081
    ;
    const originalImageMeta = await sharpBase.metadata();
    let adjustedDimensions = {
        ...dimensions
    };
    // Images with an exif orientation of 5, 6, 7, or 8 are auto-rotated by sharp
    // Need to adjust the dimensions to match the original image
    if ([
        5,
        6,
        7,
        8
    ].includes(originalImageMeta.orientation)) {
        adjustedDimensions = {
            ...dimensions,
            height: dimensions.width,
            width: dimensions.height
        };
    }
    const resizeImageMeta = {
        height: extractHeightFromImage(originalImageMeta),
        width: originalImageMeta.width
    };
    const results = await Promise.all(imageSizes.map(async (imageResizeConfig)=>{
        imageResizeConfig = sanitizeResizeConfig(imageResizeConfig);
        const resizeAction = getImageResizeAction({
            dimensions,
            hasFocalPoint: Boolean(incomingFocalPoint),
            imageResizeConfig
        });
        if (resizeAction === 'omit') {
            return createResult({
                name: imageResizeConfig.name
            });
        }
        const imageToResize = sharpBase.clone();
        let resized = imageToResize;
        if (resizeAction === 'resizeWithFocalPoint') {
            let { height: resizeHeight, width: resizeWidth } = imageResizeConfig;
            const originalAspectRatio = adjustedDimensions.width / adjustedDimensions.height;
            // Calculate resizeWidth based on original aspect ratio if it's undefined
            if (resizeHeight && !resizeWidth) {
                resizeWidth = Math.round(resizeHeight * originalAspectRatio);
            }
            // Calculate resizeHeight based on original aspect ratio if it's undefined
            if (resizeWidth && !resizeHeight) {
                resizeHeight = Math.round(resizeWidth / originalAspectRatio);
            }
            if (!resizeHeight) {
                resizeHeight = resizeImageMeta.height;
            }
            if (!resizeWidth) {
                resizeWidth = resizeImageMeta.width;
            }
            const resizeAspectRatio = resizeWidth / resizeHeight;
            const prioritizeHeight = resizeAspectRatio < originalAspectRatio;
            // Scales the image before extracting from it
            resized = imageToResize.resize({
                fastShrinkOnLoad: false,
                height: prioritizeHeight ? resizeHeight : undefined,
                width: prioritizeHeight ? undefined : resizeWidth
            });
            const metadataAppendedFile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$optionallyAppendMetadata$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["optionallyAppendMetadata"])({
                req,
                sharpFile: resized,
                withMetadata: withMetadata
            });
            // Must read from buffer, resized.metadata will return the original image metadata
            const { info } = await metadataAppendedFile.toBuffer({
                resolveWithObject: true
            });
            resizeImageMeta.height = extractHeightFromImage({
                ...originalImageMeta,
                height: info.height
            });
            resizeImageMeta.width = info.width;
            const halfResizeX = resizeWidth / 2;
            const xFocalCenter = resizeImageMeta.width * (incomingFocalPoint.x / 100);
            const calculatedRightPixelBound = xFocalCenter + halfResizeX;
            let leftBound = xFocalCenter - halfResizeX;
            // if the right bound is greater than the image width, adjust the left bound
            // keeping focus on the right
            if (calculatedRightPixelBound > resizeImageMeta.width) {
                leftBound = resizeImageMeta.width - resizeWidth;
            }
            // if the left bound is less than 0, adjust the left bound to 0
            // keeping the focus on the left
            if (leftBound < 0) {
                leftBound = 0;
            }
            const halfResizeY = resizeHeight / 2;
            const yFocalCenter = resizeImageMeta.height * (incomingFocalPoint.y / 100);
            const calculatedBottomPixelBound = yFocalCenter + halfResizeY;
            let topBound = yFocalCenter - halfResizeY;
            // if the bottom bound is greater than the image height, adjust the top bound
            // keeping the image as far right as possible
            if (calculatedBottomPixelBound > resizeImageMeta.height) {
                topBound = resizeImageMeta.height - resizeHeight;
            }
            // if the top bound is less than 0, adjust the top bound to 0
            // keeping the image focus near the top
            if (topBound < 0) {
                topBound = 0;
            }
            resized = resized.extract({
                height: resizeHeight,
                left: Math.floor(leftBound),
                top: Math.floor(topBound),
                width: resizeWidth
            });
        } else {
            resized = imageToResize.resize(imageResizeConfig);
        }
        if (imageResizeConfig.formatOptions) {
            resized = resized.toFormat(imageResizeConfig.formatOptions.format, imageResizeConfig.formatOptions.options);
        }
        if (imageResizeConfig.trimOptions) {
            resized = resized.trim(imageResizeConfig.trimOptions);
        }
        const metadataAppendedFile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$optionallyAppendMetadata$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["optionallyAppendMetadata"])({
            req,
            sharpFile: resized,
            withMetadata: withMetadata
        });
        const { data: bufferData, info: bufferInfo } = await metadataAppendedFile.toBuffer({
            resolveWithObject: true
        });
        const sanitizedImage = getSanitizedImageData(savedFilename);
        if (req.payloadUploadSizes) {
            req.payloadUploadSizes[imageResizeConfig.name] = bufferData;
        }
        const mimeInfo = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$file$2d$type$40$19$2e$3$2e$0$2f$node_modules$2f$file$2d$type$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fileTypeFromBuffer"])(bufferData);
        const imageNameWithDimensions = imageResizeConfig.generateImageName ? imageResizeConfig.generateImageName({
            extension: mimeInfo?.ext || sanitizedImage.ext,
            height: extractHeightFromImage({
                ...originalImageMeta,
                height: bufferInfo.height
            }),
            originalName: sanitizedImage.name,
            sizeName: imageResizeConfig.name,
            width: bufferInfo.width
        }) : createImageName({
            extension: mimeInfo?.ext || sanitizedImage.ext,
            height: extractHeightFromImage({
                ...originalImageMeta,
                height: bufferInfo.height
            }),
            outputImageName: sanitizedImage.name,
            width: bufferInfo.width
        });
        const imagePath = `${staticPath}/${imageNameWithDimensions}`;
        if (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fileExists$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fileExists"])(imagePath)) {
            try {
                await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].unlink(imagePath);
            } catch  {
            // Ignore unlink errors
            }
        }
        const { height, size, width } = bufferInfo;
        return createResult({
            name: imageResizeConfig.name,
            filename: imageNameWithDimensions,
            filesize: size,
            height: fileIsAnimatedType && originalImageMeta.pages ? height / originalImageMeta.pages : height,
            mimeType: mimeInfo?.mime || mimeType,
            sizesToSave: [
                {
                    buffer: bufferData,
                    path: imagePath
                }
            ],
            width
        });
    }));
    return results.reduce((acc, result)=>{
        Object.assign(acc.sizeData, result.sizeData);
        acc.sizesToSave.push(...result.sizesToSave);
        return acc;
    }, {
        ...defaultResult
    });
} //# sourceMappingURL=imageResizer.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/isImage.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isImage",
    ()=>isImage
]);
function isImage(mimeType) {
    return [
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/svg+xml',
        'image/webp',
        'image/avif',
        'image/jxl'
    ].indexOf(mimeType) > -1;
} //# sourceMappingURL=isImage.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/generateFileData.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateFileData",
    ()=>generateFileData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$file$2d$type$40$19$2e$3$2e$0$2f$node_modules$2f$file$2d$type$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/file-type@19.3.0/node_modules/file-type/core.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanitize$2d$filename$40$1$2e$6$2e$3$2f$node_modules$2f$sanitize$2d$filename$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/sanitize-filename@1.6.3/node_modules/sanitize-filename/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$FileRetrievalError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/FileRetrievalError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$FileUploadError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/FileUploadError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/Forbidden.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/MissingFile.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$canResizeImage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/canResizeImage.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$checkFileRestrictions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/checkFileRestrictions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$cropImage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/cropImage.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$getExternalFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/getExternalFile.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$getFileByPath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/getFileByPath.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$getImageSize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/getImageSize.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$getSafeFilename$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/getSafeFilename.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$imageResizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/imageResizer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$isImage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/isImage.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$optionallyAppendMetadata$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/optionallyAppendMetadata.js [app-route] (ecmascript)");
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
const shouldReupload = (uploadEdits, fileData)=>{
    if (!fileData) {
        return false;
    }
    if (uploadEdits.crop || uploadEdits.heightInPixels || uploadEdits.widthInPixels) {
        return true;
    }
    // Since uploadEdits always has focalPoint, compare to the value in the data if it was changed
    if (uploadEdits.focalPoint) {
        const incomingFocalX = uploadEdits.focalPoint.x;
        const incomingFocalY = uploadEdits.focalPoint.y;
        const currentFocalX = 'focalX' in fileData && fileData.focalX;
        const currentFocalY = 'focalY' in fileData && fileData.focalY;
        const isEqual = incomingFocalX === currentFocalX && incomingFocalY === currentFocalY;
        return !isEqual;
    }
    return false;
};
const generateFileData = async ({ collection: { config: collectionConfig }, data, isDuplicating, operation, originalDoc, overwriteExistingFiles, req, throwOnMissingFile })=>{
    if (!collectionConfig.upload) {
        return {
            data,
            files: []
        };
    }
    const { sharp } = req.payload.config;
    let file = req.file;
    const uploadEdits = parseUploadEditsFromReqOrIncomingData({
        data,
        isDuplicating,
        operation,
        originalDoc,
        req
    });
    const { constructorOptions, disableLocalStorage, focalPoint: focalPointEnabled = true, formatOptions, imageSizes, resizeOptions, staticDir, trimOptions, withMetadata } = collectionConfig.upload;
    const staticPath = staticDir;
    const incomingFileData = isDuplicating ? originalDoc : data;
    if (!file && (isDuplicating || shouldReupload(uploadEdits, incomingFileData))) {
        const { filename, url } = incomingFileData;
        if (filename && (filename.includes('../') || filename.includes('..\\'))) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Forbidden"](req.t);
        }
        try {
            if (url && url.startsWith('/') && !disableLocalStorage) {
                const filePath = `${staticPath}/${filename}`;
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$getFileByPath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFileByPath"])(filePath);
                file = response;
                overwriteExistingFiles = true;
            } else if (filename && url) {
                file = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$getExternalFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getExternalFile"])({
                    data: incomingFileData,
                    req,
                    uploadConfig: collectionConfig.upload
                });
                overwriteExistingFiles = true;
            }
        } catch (err) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$FileRetrievalError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FileRetrievalError"](req.t, err instanceof Error ? err.message : undefined);
        }
    }
    if (isDuplicating) {
        overwriteExistingFiles = false;
    }
    if (!file) {
        if (throwOnMissingFile) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MissingFile"](req.t);
        }
        return {
            data,
            files: []
        };
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$checkFileRestrictions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkFileRestrictions"])({
        collection: collectionConfig,
        file,
        req
    });
    if (!disableLocalStorage) {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].mkdir(staticPath, {
            recursive: true
        });
    }
    let newData = data;
    const filesToSave = [];
    const fileData = {};
    const fileIsAnimatedType = [
        'image/avif',
        'image/gif',
        'image/webp'
    ].includes(file.mimetype);
    const cropData = typeof uploadEdits === 'object' && 'crop' in uploadEdits ? uploadEdits.crop : undefined;
    try {
        const fileSupportsResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$canResizeImage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["canResizeImage"])(file.mimetype);
        let fsSafeName;
        let sharpFile;
        let dimensions;
        let fileBuffer;
        let ext;
        let mime;
        const fileHasAdjustments = fileSupportsResize && Boolean(resizeOptions || formatOptions || trimOptions || constructorOptions || file.tempFilePath);
        const sharpOptions = {
            ...constructorOptions
        };
        if (fileIsAnimatedType) {
            sharpOptions.animated = true;
        }
        if (sharp && (fileIsAnimatedType || fileHasAdjustments)) {
            if (file.tempFilePath) {
                sharpFile = sharp(file.tempFilePath, sharpOptions).rotate(); // pass rotate() to auto-rotate based on EXIF data. https://github.com/payloadcms/payload/pull/3081
            } else {
                sharpFile = sharp(file.data, sharpOptions).rotate(); // pass rotate() to auto-rotate based on EXIF data. https://github.com/payloadcms/payload/pull/3081
            }
            if (fileHasAdjustments) {
                if (resizeOptions) {
                    sharpFile = sharpFile.resize(resizeOptions);
                }
                if (formatOptions) {
                    sharpFile = sharpFile.toFormat(formatOptions.format, formatOptions.options);
                }
                if (trimOptions) {
                    sharpFile = sharpFile.trim(trimOptions);
                }
            }
        }
        if (fileSupportsResize || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$isImage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isImage"])(file.mimetype)) {
            dimensions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$getImageSize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getImageSize"])(file);
            fileData.width = dimensions.width;
            fileData.height = dimensions.height;
        }
        if (sharpFile) {
            const metadata = await sharpFile.metadata();
            sharpFile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$optionallyAppendMetadata$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["optionallyAppendMetadata"])({
                req,
                sharpFile,
                withMetadata: withMetadata
            });
            fileBuffer = await sharpFile.toBuffer({
                resolveWithObject: true
            });
            ({ ext, mime } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$file$2d$type$40$19$2e$3$2e$0$2f$node_modules$2f$file$2d$type$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fileTypeFromBuffer"])(fileBuffer.data) // This is getting an incorrect gif height back.
            );
            fileData.width = fileBuffer.info.width;
            fileData.height = fileBuffer.info.height;
            fileData.filesize = fileBuffer.info.size;
            // Animated GIFs + WebP aggregate the height from every frame, so we need to use divide by number of pages
            if (metadata.pages) {
                fileData.height = fileBuffer.info.height / metadata.pages;
                fileData.filesize = fileBuffer.data.length;
            }
        } else {
            mime = file.mimetype;
            fileData.filesize = file.size;
            if (file.name.includes('.')) {
                ext = file.name.split('.').pop()?.split('?')[0];
            } else {
                ext = '';
            }
        }
        // Adjust SVG mime type. fromBuffer modifies it.
        if (mime === 'application/xml' && ext === 'svg') {
            mime = 'image/svg+xml';
        }
        fileData.mimeType = mime;
        const baseFilename = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanitize$2d$filename$40$1$2e$6$2e$3$2f$node_modules$2f$sanitize$2d$filename$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(file.name.substring(0, file.name.lastIndexOf('.')) || file.name);
        fsSafeName = `${baseFilename}${ext ? `.${ext}` : ''}`;
        if (!overwriteExistingFiles) {
            // Extract prefix if present (added by plugin-cloud-storage)
            const prefix = data?.prefix;
            fsSafeName = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$getSafeFilename$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSafeFileName"])({
                collectionSlug: collectionConfig.slug,
                desiredFilename: fsSafeName,
                prefix,
                req,
                staticPath: staticPath
            });
        }
        fileData.filename = fsSafeName;
        let fileForResize = file;
        if (cropData && sharp) {
            const { data: croppedImage, info } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$cropImage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cropImage"])({
                cropData,
                dimensions: dimensions,
                file,
                heightInPixels: uploadEdits.heightInPixels,
                req,
                sharp,
                widthInPixels: uploadEdits.widthInPixels,
                withMetadata
            });
            // Apply resize after cropping to ensure it conforms to resizeOptions
            if (resizeOptions && !resizeOptions.withoutEnlargement) {
                const resizedAfterCrop = await sharp(croppedImage).resize({
                    fit: resizeOptions?.fit || 'cover',
                    height: resizeOptions?.height,
                    position: resizeOptions?.position || 'center',
                    width: resizeOptions?.width
                }).toBuffer({
                    resolveWithObject: true
                });
                filesToSave.push({
                    buffer: resizedAfterCrop.data,
                    path: `${staticPath}/${fsSafeName}`
                });
                fileForResize = {
                    ...fileForResize,
                    data: resizedAfterCrop.data,
                    size: resizedAfterCrop.info.size
                };
                fileData.width = resizedAfterCrop.info.width;
                fileData.height = resizedAfterCrop.info.height;
                if (fileIsAnimatedType) {
                    const metadata = await sharpFile.metadata();
                    fileData.height = metadata.pages ? resizedAfterCrop.info.height / metadata.pages : resizedAfterCrop.info.height;
                }
                fileData.filesize = resizedAfterCrop.info.size;
            } else {
                // If resizeOptions is not present, just save the cropped image
                filesToSave.push({
                    buffer: croppedImage,
                    path: `${staticPath}/${fsSafeName}`
                });
                fileForResize = {
                    ...file,
                    data: croppedImage,
                    size: info.size
                };
                fileData.width = info.width;
                fileData.height = info.height;
                if (fileIsAnimatedType) {
                    const metadata = await sharpFile.metadata();
                    fileData.height = metadata.pages ? info.height / metadata.pages : info.height;
                }
                fileData.filesize = info.size;
            }
            if (file.tempFilePath) {
                await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(file.tempFilePath, croppedImage); // write fileBuffer to the temp path
            } else {
                req.file = fileForResize;
            }
        } else {
            filesToSave.push({
                buffer: fileBuffer?.data || file.data,
                path: `${staticPath}/${fsSafeName}`
            });
            // If using temp files and the image is being resized, write the file to the temp path
            if (fileBuffer?.data || file.data.length > 0) {
                if (file.tempFilePath) {
                    await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(file.tempFilePath, fileBuffer?.data || file.data); // write fileBuffer to the temp path
                } else {
                    // Assign the _possibly modified_ file to the request object
                    req.file = {
                        ...file,
                        data: fileBuffer?.data || file.data,
                        size: fileBuffer?.info.size
                    };
                }
            }
        }
        if (fileSupportsResize && (Array.isArray(imageSizes) || focalPointEnabled !== false)) {
            req.payloadUploadSizes = {};
            const { focalPoint, sizeData, sizesToSave } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$imageResizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resizeAndTransformImageSizes"])({
                config: collectionConfig,
                dimensions: !cropData ? dimensions : {
                    ...dimensions,
                    height: fileData.height,
                    width: fileData.width
                },
                file: fileForResize,
                mimeType: fileData.mimeType,
                req,
                savedFilename: fsSafeName || file.name,
                sharp,
                staticPath: staticPath,
                uploadEdits,
                withMetadata
            });
            fileData.sizes = sizeData;
            fileData.focalX = focalPoint?.x;
            fileData.focalY = focalPoint?.y;
            filesToSave.push(...sizesToSave);
        }
    } catch (err) {
        req.payload.logger.error(err);
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$FileUploadError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FileUploadError"](req.t);
    }
    newData = {
        ...newData,
        ...fileData
    };
    return {
        data: newData,
        files: filesToSave
    };
};
/**
 * Parse upload edits from req or incoming data
 */ function parseUploadEditsFromReqOrIncomingData(args) {
    const { data, isDuplicating, operation, originalDoc, req } = args;
    // Get intended focal point change from query string or incoming data
    const uploadEdits = req.query?.uploadEdits && typeof req.query.uploadEdits === 'object' ? req.query.uploadEdits : {};
    if (uploadEdits.focalPoint) {
        return uploadEdits;
    }
    const incomingData = data;
    const origDoc = originalDoc;
    if (origDoc && 'focalX' in origDoc && 'focalY' in origDoc) {
        // If no change in focal point, return undefined.
        // This prevents a refocal operation triggered from admin, because it always sends the focal point.
        if (incomingData.focalX === origDoc.focalX && incomingData.focalY === origDoc.focalY) {
            return undefined;
        }
        if (isDuplicating) {
            uploadEdits.focalPoint = {
                x: incomingData?.focalX || origDoc.focalX,
                y: incomingData?.focalY || origDoc.focalX
            };
        }
    }
    if (incomingData?.focalX && incomingData?.focalY) {
        uploadEdits.focalPoint = {
            x: incomingData.focalX,
            y: incomingData.focalY
        };
        return uploadEdits;
    }
    // If no focal point is set, default to center
    if (operation === 'create') {
        uploadEdits.focalPoint = {
            x: 50,
            y: 50
        };
    }
    return uploadEdits;
} //# sourceMappingURL=generateFileData.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/unlinkTempFiles.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unlinkTempFiles",
    ()=>unlinkTempFiles
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$mapAsync$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/mapAsync.js [app-route] (ecmascript)");
;
;
const unlinkTempFiles = async ({ collectionConfig, config, req })=>{
    if (config.upload?.useTempFiles && collectionConfig.upload) {
        const { file } = req;
        const fileArray = [
            {
                file
            }
        ];
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$mapAsync$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapAsync"])(fileArray, async ({ file })=>{
            // Still need this check because this will not be populated if using local API
            if (file?.tempFilePath) {
                await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].unlink(file.tempFilePath);
            }
        });
    }
}; //# sourceMappingURL=unlinkTempFiles.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/saveBufferToFile.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "saveBufferToFile",
    ()=>saveBufferToFile
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/stream [external] (stream, cjs)");
;
;
const saveBufferToFile = async (buffer, filePath)=>{
    // Setup readable stream from buffer.
    let streamData = buffer;
    const readStream = new __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["Readable"]();
    readStream._read = ()=>{
        readStream.push(streamData);
        streamData = null;
    };
    // Setup file system writable stream.
    return await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(filePath, buffer);
}; //# sourceMappingURL=saveBufferToFile.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/uploadFiles.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "uploadFiles",
    ()=>uploadFiles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$FileUploadError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/FileUploadError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$saveBufferToFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/saveBufferToFile.js [app-route] (ecmascript)");
;
;
const uploadFiles = async (payload, files, req)=>{
    try {
        await Promise.all(files.map(async ({ buffer, path })=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$saveBufferToFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["saveBufferToFile"])(buffer, path);
        }));
    } catch (err) {
        payload.logger.error(err);
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$FileUploadError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FileUploadError"](req.t);
    }
}; //# sourceMappingURL=uploadFiles.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/deleteAssociatedFiles.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteAssociatedFiles",
    ()=>deleteAssociatedFiles
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ErrorDeletingFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/ErrorDeletingFile.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fileExists$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/uploads/fileExists.js [app-route] (ecmascript)");
;
;
;
const deleteAssociatedFiles = async ({ collectionConfig, doc, files = [], overrideDelete, req })=>{
    if (!collectionConfig.upload) {
        return;
    }
    if (overrideDelete || files.length > 0) {
        const { staticDir: staticPath } = collectionConfig.upload;
        const fileToDelete = `${staticPath}/${doc.filename}`;
        try {
            if (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fileExists$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fileExists"])(fileToDelete)) {
                await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].unlink(fileToDelete);
            }
        } catch (ignore) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ErrorDeletingFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ErrorDeletingFile"](req.t);
        }
        if (doc.sizes) {
            const sizes = Object.values(doc.sizes);
            // Since forEach will not wait until unlink is finished it could
            // happen that two operations will try to delete the same file.
            // To avoid this it is recommended to use "sync" instead
            for (const size of sizes){
                const sizeToDelete = `${staticPath}/${size.filename}`;
                try {
                    if (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fileExists$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fileExists"])(sizeToDelete)) {
                        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].unlink(sizeToDelete);
                    }
                } catch (ignore) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ErrorDeletingFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ErrorDeletingFile"](req.t);
                }
            }
        }
    }
}; //# sourceMappingURL=deleteAssociatedFiles.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/defaults.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "versionDefaults",
    ()=>versionDefaults
]);
const versionDefaults = {
    autosaveInterval: 2000
}; //# sourceMappingURL=defaults.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/drafts/appendVersionToQueryKey.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appendVersionToQueryKey",
    ()=>appendVersionToQueryKey
]);
const appendVersionToQueryKey = (query = {})=>{
    return Object.entries(query).reduce((res, [key, val])=>{
        if ([
            'AND',
            'and',
            'OR',
            'or'
        ].includes(key) && Array.isArray(val)) {
            return {
                ...res,
                [key.toLowerCase()]: val.map((subQuery)=>appendVersionToQueryKey(subQuery))
            };
        }
        if (key !== 'id') {
            return {
                ...res,
                [`version.${key}`]: val
            };
        }
        return {
            ...res,
            parent: val
        };
    }, {});
}; //# sourceMappingURL=appendVersionToQueryKey.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/getLatestCollectionVersion.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLatestCollectionVersion",
    ()=>getLatestCollectionVersion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/combineQueries.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getVersionsConfig.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$appendVersionToQueryKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/drafts/appendVersionToQueryKey.js [app-route] (ecmascript)");
;
;
;
const getLatestCollectionVersion = async ({ id, config, payload, published, query, req })=>{
    let latestVersion;
    const whereQuery = published ? {
        and: [
            {
                parent: {
                    equals: id
                }
            },
            {
                'version._status': {
                    equals: 'published'
                }
            }
        ]
    } : {
        and: [
            {
                parent: {
                    equals: id
                }
            },
            {
                latest: {
                    equals: true
                }
            }
        ]
    };
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasDraftsEnabled"])(config)) {
        const { docs } = await payload.db.findVersions({
            collection: config.slug,
            limit: 1,
            locale: req?.locale || query.locale,
            pagination: false,
            req,
            sort: '-updatedAt',
            where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineQueries"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$appendVersionToQueryKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendVersionToQueryKey"])(query.where), whereQuery)
        });
        latestVersion = docs[0];
    }
    if (!latestVersion) {
        if (!published) {
            const doc = await payload.db.findOne({
                ...query,
                req
            });
            return doc ?? undefined;
        }
        return undefined;
    }
    latestVersion.version.id = id;
    return latestVersion.version;
}; //# sourceMappingURL=getLatestCollectionVersion.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/drafts/getQueryDraftsSelect.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getQueryDraftsSelect",
    ()=>getQueryDraftsSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getSelectMode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getSelectMode.js [app-route] (ecmascript)");
;
const getQueryDraftsSelect = ({ select })=>{
    if (!select) {
        return;
    }
    const mode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getSelectMode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSelectMode"])(select);
    if (mode === 'include') {
        return {
            parent: true,
            version: select
        };
    }
    return {
        version: select
    };
}; //# sourceMappingURL=getQueryDraftsSelect.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/enforceMaxVersions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "enforceMaxVersions",
    ()=>enforceMaxVersions
]);
const enforceMaxVersions = async ({ id, collection, global: globalConfig, max, payload, req })=>{
    const entityType = collection ? 'collection' : 'global';
    const slug = collection ? collection.slug : globalConfig?.slug;
    try {
        const where = {};
        let oldestAllowedDoc;
        if (collection) {
            where.parent = {
                equals: id
            };
            const query = await payload.db.findVersions({
                collection: collection.slug,
                limit: 1,
                pagination: false,
                req,
                skip: max,
                sort: '-updatedAt',
                where
            });
            [oldestAllowedDoc] = query.docs;
        } else if (globalConfig) {
            const query = await payload.db.findGlobalVersions({
                global: globalConfig.slug,
                limit: 1,
                pagination: false,
                req,
                skip: max,
                sort: '-updatedAt',
                where
            });
            [oldestAllowedDoc] = query.docs;
        }
        if (oldestAllowedDoc?.updatedAt) {
            const deleteQuery = {
                updatedAt: {
                    less_than_equal: oldestAllowedDoc.updatedAt
                }
            };
            if (collection) {
                deleteQuery.parent = {
                    equals: id
                };
            }
            const deleteVersionsArgs = {
                req,
                where: deleteQuery
            };
            if (globalConfig) {
                deleteVersionsArgs.globalSlug = slug;
            } else {
                deleteVersionsArgs.collection = slug;
            }
            await payload.db.deleteVersions(deleteVersionsArgs);
        }
    } catch (err) {
        payload.logger.error(err);
        payload.logger.error(`There was an error cleaning up old versions for the ${entityType} ${slug}`);
    }
}; //# sourceMappingURL=enforceMaxVersions.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/saveSnapshot.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "saveSnapshot",
    ()=>saveSnapshot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/deepCopyObject.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/drafts/getQueryDraftsSelect.js [app-route] (ecmascript)");
;
;
const saveSnapshot = async ({ id, autosave, collection, data, global, payload, publishSpecificLocale, req, select })=>{
    const docData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(data || {});
    docData._status = 'draft';
    if (docData._id) {
        delete docData._id;
    }
    const snapshotDate = new Date().toISOString();
    const sharedCreateVersionArgs = {
        autosave: Boolean(autosave),
        createdAt: snapshotDate,
        publishedLocale: publishSpecificLocale || undefined,
        req,
        returning: false,
        select: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getQueryDraftsSelect"])({
            select
        }),
        updatedAt: snapshotDate,
        versionData: docData
    };
    if (collection && id) {
        return payload.db.createVersion({
            ...sharedCreateVersionArgs,
            collectionSlug: collection.slug,
            parent: id,
            snapshot: true
        });
    }
    if (global) {
        return payload.db.createGlobalVersion({
            ...sharedCreateVersionArgs,
            globalSlug: global.slug,
            snapshot: true
        });
    }
}; //# sourceMappingURL=saveSnapshot.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/saveVersion.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "saveVersion",
    ()=>saveVersion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/deepCopyObject.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getVersionsConfig.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeInternalFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/sanitizeInternalFields.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/drafts/getQueryDraftsSelect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$enforceMaxVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/enforceMaxVersions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$saveSnapshot$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/saveSnapshot.js [app-route] (ecmascript)");
;
;
;
;
;
;
const saveVersion = async ({ id, autosave, collection, docWithLocales, draft, global, operation, payload, publishSpecificLocale, req, select, snapshot })=>{
    let result;
    let createNewVersion = true;
    const now = new Date().toISOString();
    const versionData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(docWithLocales);
    if (draft) {
        versionData._status = 'draft';
    }
    if (collection?.timestamps && draft) {
        versionData.updatedAt = now;
    }
    if (versionData._id) {
        delete versionData._id;
    }
    try {
        if (autosave) {
            let docs;
            const findVersionArgs = {
                limit: 1,
                pagination: false,
                req,
                sort: '-updatedAt'
            };
            if (collection) {
                ;
                ({ docs } = await payload.db.findVersions({
                    ...findVersionArgs,
                    collection: collection.slug,
                    limit: 1,
                    pagination: false,
                    req,
                    where: {
                        parent: {
                            equals: id
                        }
                    }
                }));
            } else {
                ;
                ({ docs } = await payload.db.findGlobalVersions({
                    ...findVersionArgs,
                    global: global.slug,
                    limit: 1,
                    pagination: false,
                    req
                }));
            }
            const [latestVersion] = docs;
            // overwrite the latest version if it's set to autosave
            if (latestVersion && 'autosave' in latestVersion && latestVersion.autosave === true) {
                createNewVersion = false;
                const updateVersionArgs = {
                    id: latestVersion.id,
                    req,
                    versionData: {
                        createdAt: new Date(latestVersion.createdAt).toISOString(),
                        latest: true,
                        parent: id,
                        updatedAt: now,
                        version: {
                            ...versionData
                        }
                    }
                };
                if (collection) {
                    result = await payload.db.updateVersion({
                        ...updateVersionArgs,
                        collection: collection.slug,
                        req
                    });
                } else {
                    result = await payload.db.updateGlobalVersion({
                        ...updateVersionArgs,
                        global: global.slug,
                        req
                    });
                }
            }
        }
        if (createNewVersion) {
            const createVersionArgs = {
                autosave: Boolean(autosave),
                collectionSlug: undefined,
                createdAt: operation === 'restoreVersion' ? versionData.createdAt : now,
                globalSlug: undefined,
                parent: collection ? id : undefined,
                publishedLocale: publishSpecificLocale || undefined,
                req,
                select: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getQueryDraftsSelect"])({
                    select
                }),
                updatedAt: now,
                versionData
            };
            if (collection) {
                createVersionArgs.collectionSlug = collection.slug;
                result = await payload.db.createVersion(createVersionArgs);
            }
            if (global) {
                createVersionArgs.globalSlug = global.slug;
                result = await payload.db.createGlobalVersion(createVersionArgs);
            }
            if (snapshot) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$saveSnapshot$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["saveSnapshot"])({
                    id,
                    autosave,
                    collection,
                    data: snapshot,
                    global,
                    payload,
                    publishSpecificLocale,
                    req,
                    select
                });
            }
        }
    } catch (err) {
        let errorMessage;
        if (collection) {
            errorMessage = `There was an error while saving a version for the ${typeof collection.labels.singular === 'string' ? collection.labels.singular : collection.slug} with ID ${id}.`;
        }
        if (global) {
            errorMessage = `There was an error while saving a version for the global ${typeof global.label === 'string' ? global.label : global.slug}.`;
        }
        payload.logger.error({
            err,
            msg: errorMessage
        });
        return undefined;
    }
    const max = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getVersionsMax"])(collection || global);
    if (createNewVersion && max > 0) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$enforceMaxVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["enforceMaxVersions"])({
            id,
            collection,
            global,
            max,
            payload,
            req
        });
    }
    let createdVersion = result.version;
    createdVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeInternalFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeInternalFields"])(createdVersion);
    createdVersion.id = result.parent;
    return createdVersion;
}; //# sourceMappingURL=saveVersion.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/deleteCollectionVersions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteCollectionVersions",
    ()=>deleteCollectionVersions
]);
const deleteCollectionVersions = async ({ id, slug, payload, req })=>{
    try {
        await payload.db.deleteVersions({
            collection: slug,
            req,
            where: {
                parent: {
                    equals: id
                }
            }
        });
    } catch (err) {
        payload.logger.error({
            err,
            msg: `There was an error removing versions for the deleted ${slug} document with ID ${id}.`
        });
    }
}; //# sourceMappingURL=deleteCollectionVersions.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/deleteScheduledPublishJobs.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteScheduledPublishJobs",
    ()=>deleteScheduledPublishJobs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$collection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/config/collection.js [app-route] (ecmascript)");
;
const deleteScheduledPublishJobs = async ({ id, slug, payload, req })=>{
    try {
        await payload.db.deleteMany({
            collection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$collection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jobsCollectionSlug"],
            req,
            where: {
                and: [
                    // only want to delete jobs have not run yet
                    {
                        completedAt: {
                            exists: false
                        }
                    },
                    {
                        processing: {
                            equals: false
                        }
                    },
                    {
                        'input.doc.value': {
                            equals: id
                        }
                    },
                    {
                        'input.doc.relationTo': {
                            equals: slug
                        }
                    },
                    // data.type narrows scheduled publish jobs in case of another job having input.doc.value
                    {
                        taskSlug: {
                            equals: 'schedulePublish'
                        }
                    }
                ]
            }
        });
    } catch (err) {
        payload.logger.error({
            err,
            msg: `There was an error deleting scheduled publish jobs from the queue for ${slug} document with ID ${id}.`
        });
    }
}; //# sourceMappingURL=deleteScheduledPublishJobs.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/baseFields.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// @ts-strict-ignore
__turbopack_context__.s([
    "baseVersionFields",
    ()=>baseVersionFields,
    "statuses",
    ()=>statuses,
    "versionSnapshotField",
    ()=>versionSnapshotField
]);
const statuses = [
    {
        label: ({ t })=>t('version:draft'),
        value: 'draft'
    },
    {
        label: ({ t })=>t('version:published'),
        value: 'published'
    }
];
const baseVersionFields = [
    {
        name: '_status',
        type: 'select',
        admin: {
            components: {
                Field: false
            },
            disableBulkEdit: true
        },
        defaultValue: 'draft',
        index: true,
        label: ({ t })=>t('version:status'),
        options: statuses
    }
];
const versionSnapshotField = {
    name: 'snapshot',
    type: 'checkbox',
    admin: {
        disableBulkEdit: true,
        disabled: true
    },
    index: true
}; //# sourceMappingURL=baseFields.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/buildCollectionFields.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildVersionCollectionFields",
    ()=>buildVersionCollectionFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getVersionsConfig.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$baseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/baseFields.js [app-route] (ecmascript)");
;
;
const buildVersionCollectionFields = (config, collection, flatten)=>{
    const fields = [
        {
            name: 'parent',
            type: 'relationship',
            index: true,
            relationTo: collection.slug
        },
        {
            name: 'version',
            type: 'group',
            fields: collection.fields.filter((field)=>!('name' in field) || field.name !== 'id'),
            ...flatten && {
                flattenedFields: collection.flattenedFields.filter((each)=>each.name !== 'id')
            }
        },
        {
            name: 'createdAt',
            type: 'date',
            admin: {
                disabled: true
            },
            index: true
        },
        {
            name: 'updatedAt',
            type: 'date',
            admin: {
                disabled: true
            },
            index: true
        }
    ];
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasDraftsEnabled"])(collection)) {
        if (config.localization) {
            fields.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$baseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["versionSnapshotField"]);
            fields.push({
                name: 'publishedLocale',
                type: 'select',
                admin: {
                    disableBulkEdit: true,
                    disabled: true
                },
                index: true,
                options: config.localization.locales.map((locale)=>{
                    if (typeof locale === 'string') {
                        return locale;
                    }
                    return locale.code;
                })
            });
        }
        fields.push({
            name: 'latest',
            type: 'checkbox',
            admin: {
                disabled: true
            },
            index: true
        });
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasAutosaveEnabled"])(collection)) {
            fields.push({
                name: 'autosave',
                type: 'checkbox',
                index: true
            });
        }
    }
    return fields;
}; //# sourceMappingURL=buildCollectionFields.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/drafts/getQueryDraftsSort.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Takes the incoming sort argument and prefixes it with `versions.` and preserves any `-` prefixes for descending order
 * @param sort
 */ __turbopack_context__.s([
    "getQueryDraftsSort",
    ()=>getQueryDraftsSort
]);
const getQueryDraftsSort = ({ collectionConfig, sort })=>{
    if (!sort) {
        if (collectionConfig.defaultSort) {
            sort = collectionConfig.defaultSort;
        } else {
            sort = '-createdAt';
        }
    }
    if (typeof sort === 'string') {
        sort = [
            sort
        ];
    }
    return sort.map((field)=>{
        let orderBy;
        let direction = '';
        if (field[0] === '-') {
            orderBy = field.substring(1);
            direction = '-';
        } else {
            orderBy = field;
        }
        if (orderBy === 'id') {
            return `${direction}parent`;
        }
        return `${direction}version.${orderBy}`;
    });
}; //# sourceMappingURL=getQueryDraftsSort.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/drafts/replaceWithDraftIfAvailable.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// @ts-strict-ignore
__turbopack_context__.s([
    "replaceWithDraftIfAvailable",
    ()=>replaceWithDraftIfAvailable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/combineQueries.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$types$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/types/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeInternalFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/sanitizeInternalFields.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$appendVersionToQueryKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/drafts/appendVersionToQueryKey.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/drafts/getQueryDraftsSelect.js [app-route] (ecmascript)");
;
;
;
;
;
;
const replaceWithDraftIfAvailable = async ({ accessResult, doc, entity, entityType, req, select })=>{
    const { locale } = req;
    const queryToBuild = {
        and: [
            {
                'version._status': {
                    equals: 'draft'
                }
            }
        ]
    };
    if (entityType === 'collection') {
        queryToBuild.and.push({
            parent: {
                equals: doc.id
            }
        });
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$types$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["docHasTimestamps"])(doc)) {
        queryToBuild.and.push({
            or: [
                {
                    updatedAt: {
                        greater_than: doc.updatedAt
                    }
                },
                {
                    latest: {
                        equals: true
                    }
                }
            ]
        });
    }
    let versionAccessResult;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasWhereAccessResult"])(accessResult)) {
        versionAccessResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$appendVersionToQueryKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendVersionToQueryKey"])(accessResult);
    }
    const findVersionsArgs = {
        collection: entity.slug,
        global: entity.slug,
        limit: 1,
        locale: locale,
        pagination: false,
        req,
        select: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getQueryDraftsSelect"])({
            select
        }),
        sort: '-updatedAt',
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineQueries"])(queryToBuild, versionAccessResult)
    };
    let versionDocs;
    if (entityType === 'global') {
        versionDocs = (await req.payload.db.findGlobalVersions(findVersionsArgs)).docs;
    } else {
        versionDocs = (await req.payload.db.findVersions(findVersionsArgs)).docs;
    }
    let draft = versionDocs[0];
    if (!draft) {
        return doc;
    }
    draft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeInternalFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeInternalFields"])(draft);
    // Patch globalType onto version doc
    if (entityType === 'global' && 'globalType' in doc) {
        // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
        draft.version.globalType = doc.globalType;
    }
    // handle when .version wasn't selected due to projection
    if (!draft.version) {
        draft.version = {};
    }
    // Disregard all other draft content at this point,
    // Only interested in the version itself.
    // Operations will handle firing hooks, etc.
    draft.version.id = doc.id;
    return draft.version;
}; //# sourceMappingURL=replaceWithDraftIfAvailable.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/buildGlobalFields.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildVersionGlobalFields",
    ()=>buildVersionGlobalFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getVersionsConfig.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$baseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/baseFields.js [app-route] (ecmascript)");
;
;
const buildVersionGlobalFields = (config, global, flatten)=>{
    const fields = [
        {
            name: 'version',
            type: 'group',
            fields: global.fields,
            ...flatten && {
                flattenedFields: global.flattenedFields
            }
        },
        {
            name: 'createdAt',
            type: 'date',
            admin: {
                disabled: true
            },
            index: true
        },
        {
            name: 'updatedAt',
            type: 'date',
            admin: {
                disabled: true
            },
            index: true
        }
    ];
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasDraftsEnabled"])(global)) {
        if (config.localization) {
            fields.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$baseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["versionSnapshotField"]);
            fields.push({
                name: 'publishedLocale',
                type: 'select',
                admin: {
                    disableBulkEdit: true,
                    disabled: true
                },
                index: true,
                options: config.localization.locales.map((locale)=>{
                    if (typeof locale === 'string') {
                        return locale;
                    }
                    return locale.code;
                })
            });
        }
        fields.push({
            name: 'latest',
            type: 'checkbox',
            admin: {
                disabled: true
            },
            index: true
        });
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasAutosaveEnabled"])(global)) {
            fields.push({
                name: 'autosave',
                type: 'checkbox',
                index: true
            });
        }
    }
    return fields;
}; //# sourceMappingURL=buildGlobalFields.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/getLatestGlobalVersion.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLatestGlobalVersion",
    ()=>getLatestGlobalVersion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getVersionsConfig.js [app-route] (ecmascript)");
;
const getLatestGlobalVersion = async ({ slug, config, locale, payload, published, req, where })=>{
    let latestVersion;
    const whereQuery = published ? {
        'version._status': {
            equals: 'published'
        }
    } : {
        latest: {
            equals: true
        }
    };
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasDraftsEnabled"])(config)) {
        latestVersion = (await payload.db.findGlobalVersions({
            global: slug,
            limit: 1,
            locale: locale || req?.locale || undefined,
            pagination: false,
            req,
            where: whereQuery
        })).docs[0];
    }
    const global = await payload.db.findGlobal({
        slug,
        locale,
        req,
        where
    });
    const globalExists = Boolean(global);
    if (!latestVersion) {
        return {
            global,
            globalExists
        };
    }
    if (!latestVersion.version.createdAt) {
        latestVersion.version.createdAt = latestVersion.createdAt;
    }
    if (!latestVersion.version.updatedAt) {
        latestVersion.version.updatedAt = latestVersion.updatedAt;
    }
    return {
        global: latestVersion.version,
        globalExists
    };
}; //# sourceMappingURL=getLatestGlobalVersion.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/payloadPackageList.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PAYLOAD_PACKAGE_LIST",
    ()=>PAYLOAD_PACKAGE_LIST
]);
const PAYLOAD_PACKAGE_LIST = [
    'payload',
    '@payloadcms/bundler-vite',
    '@payloadcms/bundler-webpack',
    '@payloadcms/db-d1-sqlite',
    '@payloadcms/db-mongodb',
    '@payloadcms/db-postgres',
    '@payloadcms/db-sqlite',
    '@payloadcms/db-vercel-postgres',
    '@payloadcms/drizzle',
    '@payloadcms/ecommerce',
    '@payloadcms/email-nodemailer',
    '@payloadcms/email-resend',
    '@payloadcms/graphql',
    '@payloadcms/live-preview',
    '@payloadcms/live-preview-react',
    '@payloadcms/live-preview-vue',
    '@payloadcms/kv-redis',
    '@payloadcms/next/utilities',
    '@payloadcms/payload-cloud',
    '@payloadcms/plugin-cloud-storage',
    '@payloadcms/plugin-form-builder',
    '@payloadcms/plugin-import-export',
    '@payloadcms/plugin-mcp',
    '@payloadcms/plugin-multi-tenant',
    '@payloadcms/plugin-nested-docs',
    '@payloadcms/plugin-redirects',
    '@payloadcms/plugin-search',
    '@payloadcms/plugin-seo',
    '@payloadcms/plugin-stripe',
    '@payloadcms/plugin-zapier',
    '@payloadcms/richtext-lexical',
    '@payloadcms/richtext-slate',
    '@payloadcms/sdk',
    '@payloadcms/storage-azure',
    '@payloadcms/storage-gcs',
    '@payloadcms/storage-r2',
    '@payloadcms/storage-s3',
    '@payloadcms/storage-uploadthing',
    '@payloadcms/storage-vercel-blob',
    '@payloadcms/translations',
    '@payloadcms/ui/shared'
]; //# sourceMappingURL=payloadPackageList.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/duplicateDocument/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDuplicateDocumentData",
    ()=>getDuplicateDocumentData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/executeAccess.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/combineQueries.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/Forbidden.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/NotFound.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterRead/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeDuplicate/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/deepCopyObject.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$filterDataToSelectedLocales$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/filterDataToSelectedLocales.js [app-route] (ecmascript)");
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
const getDuplicateDocumentData = async ({ id, collectionConfig, draftArg, overrideAccess, req, selectedLocales })=>{
    const { payload } = req;
    // /////////////////////////////////////
    // Read Access
    // /////////////////////////////////////
    const accessResults = !overrideAccess ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeAccess"])({
        id,
        req
    }, collectionConfig.access.read) : true;
    const hasWherePolicy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasWhereAccessResult"])(accessResults);
    // /////////////////////////////////////
    // Retrieve document
    // /////////////////////////////////////
    const findOneArgs = {
        collection: collectionConfig.slug,
        locale: req.locale,
        req,
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineQueries"])({
            id: {
                equals: id
            }
        }, accessResults)
    };
    let duplicatedFromDocWithLocales = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$getLatestCollectionVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getLatestCollectionVersion"])({
        id,
        config: collectionConfig,
        payload,
        query: findOneArgs,
        req
    });
    if (selectedLocales && selectedLocales.length > 0 && duplicatedFromDocWithLocales) {
        duplicatedFromDocWithLocales = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$filterDataToSelectedLocales$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["filterDataToSelectedLocales"])({
            configBlockReferences: payload.config.blocks,
            docWithLocales: duplicatedFromDocWithLocales,
            fields: collectionConfig.fields,
            selectedLocales
        });
    }
    if (!duplicatedFromDocWithLocales && !hasWherePolicy) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NotFound"](req.t);
    }
    if (!duplicatedFromDocWithLocales && hasWherePolicy) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Forbidden"](req.t);
    }
    // remove the createdAt timestamp and rely on the db to set it
    if ('createdAt' in duplicatedFromDocWithLocales) {
        delete duplicatedFromDocWithLocales.createdAt;
    }
    // remove the id and rely on the db to set it
    if ('id' in duplicatedFromDocWithLocales) {
        delete duplicatedFromDocWithLocales.id;
    }
    duplicatedFromDocWithLocales = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["beforeDuplicate"])({
        id,
        collection: collectionConfig,
        context: req.context,
        doc: duplicatedFromDocWithLocales,
        overrideAccess: overrideAccess,
        req
    });
    const duplicatedFromDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["afterRead"])({
        collection: collectionConfig,
        context: req.context,
        depth: 0,
        doc: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(duplicatedFromDocWithLocales),
        draft: draftArg,
        fallbackLocale: null,
        global: null,
        locale: req.locale,
        overrideAccess: true,
        req,
        showHiddenFields: true
    });
    return {
        duplicatedFromDoc,
        duplicatedFromDocWithLocales
    };
}; //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/preferences/operations/delete.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteOperation",
    ()=>deleteOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/NotFound.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$UnauthorizedError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/UnauthorizedError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/preferences/config.js [app-route] (ecmascript)");
;
;
;
async function deleteOperation(args) {
    const { key, req: { payload }, req, user } = args;
    if (!user) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$UnauthorizedError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnauthorizedError"](req.t);
    }
    const where = {
        and: [
            {
                key: {
                    equals: key
                }
            },
            {
                'user.value': {
                    equals: user.id
                }
            },
            {
                'user.relationTo': {
                    equals: user.collection
                }
            }
        ]
    };
    const result = await payload.db.deleteOne({
        collection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["preferencesCollectionSlug"],
        req,
        where
    });
    if (result) {
        return result;
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NotFound"](req.t);
} //# sourceMappingURL=delete.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/preferences/requestHandlers/delete.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteHandler",
    ()=>deleteHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$operations$2f$delete$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/preferences/operations/delete.js [app-route] (ecmascript)");
;
;
const deleteHandler = async (incomingReq)=>{
    // We cannot import the addDataAndFileToRequest utility here from the 'next' package because of dependency issues
    // However that utility should be used where possible instead of manually appending the data
    let data;
    try {
        data = await incomingReq.json?.();
    } catch (ignore) {
        data = {};
    }
    const reqWithData = incomingReq;
    if (data) {
        reqWithData.data = data;
        // @ts-expect-error
        reqWithData.json = ()=>Promise.resolve(data);
    }
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$operations$2f$delete$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteOperation"])({
        key: reqWithData.routeParams?.key,
        req: reqWithData,
        user: reqWithData.user
    });
    return Response.json({
        ...result,
        message: reqWithData.t('general:deletedSuccessfully')
    }, {
        status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].OK
    });
}; //# sourceMappingURL=delete.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/preferences/operations/findOne.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findOne",
    ()=>findOne
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/preferences/config.js [app-route] (ecmascript)");
;
async function findOne(args) {
    const { key, req: { payload }, req, user } = args;
    if (!user) {
        return null;
    }
    const where = {
        and: [
            {
                key: {
                    equals: key
                }
            },
            {
                'user.value': {
                    equals: user.id
                }
            },
            {
                'user.relationTo': {
                    equals: user.collection
                }
            }
        ]
    };
    const { docs } = await payload.db.find({
        collection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["preferencesCollectionSlug"],
        limit: 1,
        pagination: false,
        req,
        sort: '-updatedAt',
        where
    });
    return docs?.[0] || null;
} //# sourceMappingURL=findOne.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/preferences/requestHandlers/findOne.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findByIDHandler",
    ()=>findByIDHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$operations$2f$findOne$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/preferences/operations/findOne.js [app-route] (ecmascript)");
;
;
const findByIDHandler = async (incomingReq)=>{
    // We cannot import the addDataAndFileToRequest utility here from the 'next' package because of dependency issues
    // However that utility should be used where possible instead of manually appending the data
    let data;
    try {
        data = await incomingReq.json?.();
    } catch (ignore) {
        data = {};
    }
    const reqWithData = incomingReq;
    if (data) {
        reqWithData.data = data;
        // @ts-expect-error
        reqWithData.json = ()=>Promise.resolve(data);
    }
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$operations$2f$findOne$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findOne"])({
        key: reqWithData.routeParams?.key,
        req: reqWithData,
        user: reqWithData.user
    });
    return Response.json({
        ...result ? result : {
            message: reqWithData.t('general:notFound'),
            value: null
        }
    }, {
        status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].OK
    });
}; //# sourceMappingURL=findOne.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/preferences/operations/update.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "update",
    ()=>update
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$UnauthorizedError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/UnauthorizedError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/preferences/config.js [app-route] (ecmascript)");
;
;
async function update(args) {
    const { key, req: { payload }, req, user, value } = args;
    if (!user) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$UnauthorizedError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnauthorizedError"](req.t);
    }
    const where = {
        and: [
            {
                key: {
                    equals: key
                }
            },
            {
                'user.value': {
                    equals: user.id
                }
            },
            {
                'user.relationTo': {
                    equals: user.collection
                }
            }
        ]
    };
    const preference = {
        key,
        user: {
            relationTo: user.collection,
            value: user.id
        },
        value
    };
    return await payload.db.upsert({
        collection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["preferencesCollectionSlug"],
        data: preference,
        req,
        where
    });
} //# sourceMappingURL=update.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/preferences/requestHandlers/update.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateHandler",
    ()=>updateHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$operations$2f$update$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/preferences/operations/update.js [app-route] (ecmascript)");
;
;
const updateHandler = async (incomingReq)=>{
    // We cannot import the addDataAndFileToRequest utility here from the 'next' package because of dependency issues
    // However that utility should be used where possible instead of manually appending the data
    let data;
    try {
        data = await incomingReq.json?.();
    } catch (_err) {
        data = {};
    }
    const reqWithData = incomingReq;
    if (data) {
        reqWithData.data = data;
        // @ts-expect-error
        reqWithData.json = ()=>Promise.resolve(data);
    }
    const doc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$operations$2f$update$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["update"])({
        key: reqWithData.routeParams?.key,
        req: reqWithData,
        user: reqWithData?.user,
        value: reqWithData.data?.value || reqWithData.data
    });
    return Response.json({
        doc,
        message: reqWithData.t('general:updatedSuccessfully')
    }, {
        status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].OK
    });
}; //# sourceMappingURL=update.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/preferences/config.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPreferencesCollection",
    ()=>getPreferencesCollection,
    "preferencesCollectionSlug",
    ()=>preferencesCollectionSlug
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$requestHandlers$2f$delete$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/preferences/requestHandlers/delete.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$requestHandlers$2f$findOne$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/preferences/requestHandlers/findOne.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$requestHandlers$2f$update$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/preferences/requestHandlers/update.js [app-route] (ecmascript)");
;
;
;
const preferenceAccess = ({ req })=>{
    if (!req.user) {
        return false;
    }
    return {
        'user.value': {
            equals: req?.user?.id
        }
    };
};
const preferencesCollectionSlug = 'payload-preferences';
const getPreferencesCollection = (config)=>({
        slug: preferencesCollectionSlug,
        access: {
            delete: preferenceAccess,
            read: preferenceAccess
        },
        admin: {
            hidden: true
        },
        endpoints: [
            {
                handler: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$requestHandlers$2f$findOne$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findByIDHandler"],
                method: 'get',
                path: '/:key'
            },
            {
                handler: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$requestHandlers$2f$delete$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteHandler"],
                method: 'delete',
                path: '/:key'
            },
            {
                handler: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$requestHandlers$2f$update$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateHandler"],
                method: 'post',
                path: '/:key'
            }
        ],
        fields: [
            {
                name: 'user',
                type: 'relationship',
                hooks: {
                    beforeValidate: [
                        ({ req })=>{
                            if (!req?.user) {
                                return null;
                            }
                            return {
                                relationTo: req?.user.collection,
                                value: req?.user.id
                            };
                        }
                    ]
                },
                index: true,
                relationTo: config.collections.filter((collectionConfig)=>collectionConfig.auth).map((collectionConfig)=>collectionConfig.slug),
                required: true
            },
            {
                name: 'key',
                type: 'text',
                index: true
            },
            {
                name: 'value',
                type: 'json',
                validate: (value)=>{
                    if (value) {
                        try {
                            JSON.parse(JSON.stringify(value));
                        } catch  {
                            return 'Invalid JSON';
                        }
                    }
                    return true;
                }
            }
        ],
        lockDocuments: false
    }); //# sourceMappingURL=config.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/preferences/deleteUserPreferences.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteUserPreferences",
    ()=>deleteUserPreferences
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/preferences/config.js [app-route] (ecmascript)");
;
const deleteUserPreferences = async ({ collectionConfig, ids, payload, req })=>{
    if (collectionConfig.auth) {
        await payload.db.deleteMany({
            collection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["preferencesCollectionSlug"],
            req,
            where: {
                or: [
                    {
                        and: [
                            {
                                'user.value': {
                                    in: ids
                                }
                            },
                            {
                                'user.relationTo': {
                                    equals: collectionConfig.slug
                                }
                            }
                        ]
                    },
                    {
                        key: {
                            in: ids.map((id)=>`collection-${collectionConfig.slug}-${id}`)
                        }
                    }
                ]
            }
        });
    } else {
        await payload.db.deleteMany({
            collection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["preferencesCollectionSlug"],
            req,
            where: {
                key: {
                    in: ids.map((id)=>`collection-${collectionConfig.slug}-${id}`)
                }
            }
        });
    }
}; //# sourceMappingURL=deleteUserPreferences.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/locked-documents/config.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLockedDocumentsCollection",
    ()=>getLockedDocumentsCollection,
    "lockedDocumentsCollectionSlug",
    ()=>lockedDocumentsCollectionSlug
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/defaultAccess.js [app-route] (ecmascript)");
;
const lockedDocumentsCollectionSlug = 'payload-locked-documents';
const getLockedDocumentsCollection = (config)=>({
        slug: lockedDocumentsCollectionSlug,
        access: {
            create: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultAccess"],
            delete: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultAccess"],
            read: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultAccess"],
            update: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultAccess"]
        },
        admin: {
            hidden: true
        },
        fields: [
            {
                name: 'document',
                type: 'relationship',
                index: true,
                maxDepth: 0,
                relationTo: [
                    ...config.collections.filter((collectionConfig)=>collectionConfig.lockDocuments !== false).map((collectionConfig)=>collectionConfig.slug)
                ]
            },
            {
                name: 'globalSlug',
                type: 'text',
                index: true
            },
            {
                name: 'user',
                type: 'relationship',
                maxDepth: 1,
                relationTo: config.collections.filter((collectionConfig)=>collectionConfig.auth).map((collectionConfig)=>collectionConfig.slug),
                required: true
            }
        ],
        lockDocuments: false
    }); //# sourceMappingURL=config.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/globals/operations/countGlobalVersions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "countGlobalVersionsOperation",
    ()=>countGlobalVersionsOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/executeAccess.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/combineQueries.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/queryValidation/validateQueryPaths.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildGlobalFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/buildGlobalFields.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/killTransaction.js [app-route] (ecmascript)");
;
;
;
;
;
const countGlobalVersionsOperation = async (args)=>{
    try {
        const { disableErrors, global, overrideAccess, where } = args;
        const req = args.req;
        const { payload } = req;
        // /////////////////////////////////////
        // beforeOperation - Global
        // /////////////////////////////////////
        if (global.hooks?.beforeOperation?.length) {
            for (const hook of global.hooks.beforeOperation){
                args = await hook({
                    args,
                    context: req.context,
                    global,
                    operation: 'countVersions',
                    req
                }) || args;
            }
        }
        // /////////////////////////////////////
        // Access
        // /////////////////////////////////////
        let accessResult;
        if (!overrideAccess) {
            accessResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeAccess"])({
                disableErrors,
                req
            }, global.access.readVersions);
            // If errors are disabled, and access returns false, return empty results
            if (accessResult === false) {
                return {
                    totalDocs: 0
                };
            }
        }
        const fullWhere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineQueries"])(where, accessResult);
        const versionFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildGlobalFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildVersionGlobalFields"])(payload.config, global, true);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateQueryPaths"])({
            globalConfig: global,
            overrideAccess: overrideAccess,
            req,
            versionFields,
            where: where
        });
        const result = await payload.db.countGlobalVersions({
            global: global.slug,
            req,
            where: fullWhere
        });
        // /////////////////////////////////////
        // Return results
        // /////////////////////////////////////
        return result;
    } catch (error) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["killTransaction"])(args.req);
        throw error;
    }
}; //# sourceMappingURL=countGlobalVersions.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/globals/operations/local/countVersions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "countGlobalVersionsLocal",
    ()=>countGlobalVersionsLocal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/createLocalReq.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$countGlobalVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/globals/operations/countGlobalVersions.js [app-route] (ecmascript)");
;
;
;
async function countGlobalVersionsLocal(payload, options) {
    const { disableErrors, global: globalSlug, overrideAccess = true, where } = options;
    const global = payload.globals.config.find(({ slug })=>slug === globalSlug);
    if (!global) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`The global with slug ${String(globalSlug)} can't be found. Count Global Versions Operation.`);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$countGlobalVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["countGlobalVersionsOperation"])({
        disableErrors,
        global,
        overrideAccess,
        req: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])(options, payload),
        where
    });
} //# sourceMappingURL=countVersions.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/globals/operations/findOne.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findOneOperation",
    ()=>findOneOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/executeAccess.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/NotFound.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterRead/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$locked$2d$documents$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/locked-documents/config.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getSelectMode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getSelectMode.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getVersionsConfig.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/killTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/sanitizeSelect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$replaceWithDraftIfAvailable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/drafts/replaceWithDraftIfAvailable.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
const findOneOperation = async (args)=>{
    const { slug, depth, draft: replaceWithVersion = false, flattenLocales, globalConfig, includeLockStatus, overrideAccess = false, populate, req: { fallbackLocale, locale }, req, select: incomingSelect, showHiddenFields } = args;
    try {
        // /////////////////////////////////////
        // beforeOperation - Global
        // /////////////////////////////////////
        if (globalConfig.hooks?.beforeOperation?.length) {
            for (const hook of globalConfig.hooks.beforeOperation){
                args = await hook({
                    args,
                    context: args.req.context,
                    global: globalConfig,
                    operation: 'read',
                    req: args.req
                }) || args;
            }
        }
        // /////////////////////////////////////
        // Retrieve and execute access
        // /////////////////////////////////////
        let accessResult;
        if (!overrideAccess) {
            accessResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeAccess"])({
                req
            }, globalConfig.access.read);
        }
        if (accessResult === false) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NotFound"](req.t);
        }
        const select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeSelect"])({
            fields: globalConfig.flattenedFields,
            forceSelect: globalConfig.forceSelect,
            select: incomingSelect
        });
        // /////////////////////////////////////
        // Perform database operation
        // /////////////////////////////////////
        const docFromDB = await req.payload.db.findGlobal({
            slug,
            locale: locale,
            req,
            select,
            where: overrideAccess ? undefined : accessResult
        });
        // Check if no document was returned (Postgres returns {} instead of null)
        const hasDoc = docFromDB && Object.keys(docFromDB).length > 0;
        if (!hasDoc && !args.data && !overrideAccess && accessResult !== true) {
            return {};
        }
        let doc = args.data ?? (hasDoc ? docFromDB : null) ?? {};
        // /////////////////////////////////////
        // Include Lock Status if required
        // /////////////////////////////////////
        if (includeLockStatus && slug) {
            let lockStatus = null;
            try {
                const lockDocumentsProp = globalConfig?.lockDocuments;
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
                                globalSlug: {
                                    equals: slug
                                }
                            },
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
            doc._isLocked = !!lockStatus;
            doc._userEditing = lockStatus?.user?.value ?? null;
        }
        // /////////////////////////////////////
        // Replace document with draft if available
        // /////////////////////////////////////
        if (replaceWithVersion && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasDraftsEnabled"])(globalConfig)) {
            doc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$replaceWithDraftIfAvailable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["replaceWithDraftIfAvailable"])({
                accessResult,
                doc,
                entity: globalConfig,
                entityType: 'global',
                overrideAccess,
                req,
                select
            });
        }
        // /////////////////////////////////////
        // Execute before global hook
        // /////////////////////////////////////
        if (globalConfig.hooks?.beforeRead?.length) {
            for (const hook of globalConfig.hooks.beforeRead){
                doc = await hook({
                    context: req.context,
                    doc,
                    global: globalConfig,
                    req
                }) || doc;
            }
        }
        // /////////////////////////////////////
        // Execute globalType field if not selected
        // /////////////////////////////////////
        if (select && doc.globalType) {
            const selectMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getSelectMode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSelectMode"])(select);
            if (selectMode === 'include' && !select['globalType'] || selectMode === 'exclude' && select['globalType'] === false) {
                delete doc['globalType'];
            }
        }
        // /////////////////////////////////////
        // Execute field-level hooks and access
        // /////////////////////////////////////
        doc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["afterRead"])({
            collection: null,
            context: req.context,
            depth: depth,
            doc,
            draft: replaceWithVersion,
            fallbackLocale: fallbackLocale,
            flattenLocales,
            global: globalConfig,
            locale: locale,
            overrideAccess,
            populate,
            req,
            select,
            showHiddenFields: showHiddenFields
        });
        // /////////////////////////////////////
        // Execute after global hook
        // /////////////////////////////////////
        if (globalConfig.hooks?.afterRead?.length) {
            for (const hook of globalConfig.hooks.afterRead){
                doc = await hook({
                    context: req.context,
                    doc,
                    global: globalConfig,
                    req
                }) || doc;
            }
        }
        // /////////////////////////////////////
        // Return results
        // /////////////////////////////////////
        return doc;
    } catch (error) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["killTransaction"])(req);
        throw error;
    }
}; //# sourceMappingURL=findOne.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/globals/operations/local/findOne.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findOneGlobalLocal",
    ()=>findOneGlobalLocal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/createLocalReq.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$findOne$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/globals/operations/findOne.js [app-route] (ecmascript)");
;
;
;
async function findOneGlobalLocal(payload, options) {
    const { slug: globalSlug, data, depth, draft = false, flattenLocales, includeLockStatus, overrideAccess = true, populate, select, showHiddenFields } = options;
    const globalConfig = payload.globals.config.find((config)=>config.slug === globalSlug);
    if (!globalConfig) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`The global with slug ${String(globalSlug)} can't be found.`);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$findOne$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findOneOperation"])({
        slug: globalSlug,
        data,
        depth,
        draft,
        flattenLocales,
        globalConfig,
        includeLockStatus,
        overrideAccess,
        populate,
        req: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])(options, payload),
        select,
        showHiddenFields
    });
} //# sourceMappingURL=findOne.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/globals/operations/findVersionByID.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findVersionByIDOperation",
    ()=>findVersionByIDOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/executeAccess.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/combineQueries.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/Forbidden.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/NotFound.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterRead/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/deepCopyObject.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/killTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/sanitizeSelect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildGlobalFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/buildGlobalFields.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/drafts/getQueryDraftsSelect.js [app-route] (ecmascript)");
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
    const { id, currentDepth, depth, disableErrors, globalConfig, overrideAccess, populate, req: { fallbackLocale, locale, payload }, req, select: incomingSelect, showHiddenFields } = args;
    try {
        // /////////////////////////////////////
        // Access
        // /////////////////////////////////////
        const accessResults = !overrideAccess ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeAccess"])({
            id,
            disableErrors,
            req
        }, globalConfig.access.readVersions) : true;
        // If errors are disabled, and access returns false, return null
        if (accessResults === false) {
            return null;
        }
        const hasWhereAccess = typeof accessResults === 'object';
        const select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeSelect"])({
            fields: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildGlobalFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildVersionGlobalFields"])(payload.config, globalConfig, true),
            forceSelect: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getQueryDraftsSelect"])({
                select: globalConfig.forceSelect
            }),
            select: incomingSelect,
            versions: true
        });
        const findGlobalVersionsArgs = {
            global: globalConfig.slug,
            limit: 1,
            locale: locale,
            req,
            select,
            where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineQueries"])({
                id: {
                    equals: id
                }
            }, accessResults)
        };
        // /////////////////////////////////////
        // Find by ID
        // /////////////////////////////////////
        if (!findGlobalVersionsArgs.where?.and?.[0]?.id) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NotFound"](req.t);
        }
        const { docs: results } = await payload.db.findGlobalVersions(findGlobalVersionsArgs);
        if (!results || results?.length === 0) {
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
        // Clone the result - it may have come back memoized
        let result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(results[0]);
        if (!result.version) {
            result.version = {};
        }
        // Patch globalType onto version doc
        result.version.globalType = globalConfig.slug;
        // /////////////////////////////////////
        // beforeRead - Collection
        // /////////////////////////////////////
        if (globalConfig.hooks?.beforeRead?.length) {
            for (const hook of globalConfig.hooks.beforeRead){
                result = await hook({
                    context: req.context,
                    doc: result.version,
                    global: globalConfig,
                    req
                }) || result.version;
            }
        }
        // /////////////////////////////////////
        // afterRead - Fields
        // /////////////////////////////////////
        result.version = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["afterRead"])({
            collection: null,
            context: req.context,
            currentDepth,
            depth: depth,
            doc: result.version,
            draft: undefined,
            fallbackLocale: fallbackLocale,
            global: globalConfig,
            locale: locale,
            overrideAccess: overrideAccess,
            populate,
            req,
            select: typeof select?.version === 'object' ? select.version : undefined,
            showHiddenFields: showHiddenFields
        });
        // /////////////////////////////////////
        // afterRead - Global
        // /////////////////////////////////////
        if (globalConfig.hooks?.afterRead?.length) {
            for (const hook of globalConfig.hooks.afterRead){
                result.version = await hook({
                    context: req.context,
                    doc: result.version,
                    global: globalConfig,
                    query: findGlobalVersionsArgs.where,
                    req
                }) || result.version;
            }
        }
        return result;
    } catch (error) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["killTransaction"])(req);
        throw error;
    }
}; //# sourceMappingURL=findVersionByID.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/globals/operations/local/findVersionByID.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findGlobalVersionByIDLocal",
    ()=>findGlobalVersionByIDLocal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/createLocalReq.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$findVersionByID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/globals/operations/findVersionByID.js [app-route] (ecmascript)");
;
;
;
async function findGlobalVersionByIDLocal(payload, options) {
    const { id, slug: globalSlug, depth, disableErrors = false, overrideAccess = true, populate, select, showHiddenFields } = options;
    const globalConfig = payload.globals.config.find((config)=>config.slug === globalSlug);
    if (!globalConfig) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`The global with slug ${String(globalSlug)} can't be found.`);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$findVersionByID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findVersionByIDOperation"])({
        id,
        depth,
        disableErrors,
        globalConfig,
        overrideAccess,
        populate,
        req: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])(options, payload),
        select,
        showHiddenFields
    });
} //# sourceMappingURL=findVersionByID.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/globals/operations/findVersions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findVersionsOperation",
    ()=>findVersionsOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/executeAccess.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/combineQueries.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/database/queryValidation/validateQueryPaths.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterRead/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/killTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeInternalFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/sanitizeInternalFields.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/sanitizeSelect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildGlobalFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/buildGlobalFields.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/drafts/getQueryDraftsSelect.js [app-route] (ecmascript)");
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
    const { depth, globalConfig, limit, overrideAccess, page, pagination = true, populate, select: incomingSelect, showHiddenFields, sort, where } = args;
    const req = args.req;
    const { fallbackLocale, locale, payload } = req;
    const versionFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildGlobalFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildVersionGlobalFields"])(payload.config, globalConfig, true);
    try {
        // /////////////////////////////////////
        // Access
        // /////////////////////////////////////
        const accessResults = !overrideAccess ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeAccess"])({
            req
        }, globalConfig.access.readVersions) : true;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateQueryPaths"])({
            globalConfig,
            overrideAccess: overrideAccess,
            req,
            versionFields,
            where: where
        });
        const fullWhere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineQueries"])(where, accessResults);
        const select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeSelect"])({
            fields: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildGlobalFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildVersionGlobalFields"])(payload.config, globalConfig, true),
            forceSelect: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getQueryDraftsSelect"])({
                select: globalConfig.forceSelect
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
        const paginatedDocs = await payload.db.findGlobalVersions({
            global: globalConfig.slug,
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
        // afterRead - Fields
        // /////////////////////////////////////
        let result = {
            ...paginatedDocs,
            docs: await Promise.all(paginatedDocs.docs.map(async (data)=>{
                if (!data.version) {
                    // Fallback if not selected
                    ;
                    data.version = {};
                }
                return {
                    ...data,
                    version: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["afterRead"])({
                        collection: null,
                        context: req.context,
                        depth: depth,
                        doc: {
                            ...data.version,
                            // Patch globalType onto version doc
                            globalType: globalConfig.slug
                        },
                        draft: undefined,
                        fallbackLocale: fallbackLocale,
                        findMany: true,
                        global: globalConfig,
                        locale: locale,
                        overrideAccess: overrideAccess,
                        populate,
                        req,
                        select,
                        showHiddenFields: showHiddenFields
                    })
                };
            }))
        };
        // /////////////////////////////////////
        // afterRead - Global
        // /////////////////////////////////////
        if (globalConfig.hooks?.afterRead?.length) {
            result.docs = await Promise.all(result.docs.map(async (doc)=>{
                const docRef = doc;
                for (const hook of globalConfig.hooks.afterRead){
                    docRef.version = await hook({
                        context: req.context,
                        doc: doc.version,
                        findMany: true,
                        global: globalConfig,
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
        result = {
            ...result,
            docs: result.docs.map((doc)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeInternalFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeInternalFields"])(doc))
        };
        return result;
    } catch (error) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["killTransaction"])(req);
        throw error;
    }
}; //# sourceMappingURL=findVersions.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/globals/operations/local/findVersions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findGlobalVersionsLocal",
    ()=>findGlobalVersionsLocal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/createLocalReq.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$findVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/globals/operations/findVersions.js [app-route] (ecmascript)");
;
;
;
async function findGlobalVersionsLocal(payload, options) {
    const { slug: globalSlug, depth, limit, overrideAccess = true, page, pagination = true, populate, select, showHiddenFields, sort, where } = options;
    const globalConfig = payload.globals.config.find((config)=>config.slug === globalSlug);
    if (!globalConfig) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`The global with slug ${String(globalSlug)} can't be found.`);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$findVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findVersionsOperation"])({
        depth,
        globalConfig,
        limit,
        overrideAccess,
        page,
        pagination,
        populate,
        req: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])(options, payload),
        select,
        showHiddenFields,
        sort,
        where
    });
} //# sourceMappingURL=findVersions.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/globals/operations/restoreVersion.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "restoreVersionOperation",
    ()=>restoreVersionOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/executeAccess.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/NotFound.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterChange/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterRead/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/commitTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/initTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/killTransaction.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
const restoreVersionOperation = async (args)=>{
    const { id, depth, draft, globalConfig, overrideAccess, populate, showHiddenFields } = args;
    const req = args.req;
    const { fallbackLocale, locale, payload } = req;
    try {
        const shouldCommit = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initTransaction"])(req);
        // /////////////////////////////////////
        // beforeOperation - Global
        // /////////////////////////////////////
        if (globalConfig.hooks?.beforeOperation?.length) {
            for (const hook of globalConfig.hooks.beforeOperation){
                args = await hook({
                    args,
                    context: req.context,
                    global: globalConfig,
                    operation: 'restoreVersion',
                    req
                }) || args;
            }
        }
        // /////////////////////////////////////
        // Access
        // /////////////////////////////////////
        if (!overrideAccess) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeAccess"])({
                req
            }, globalConfig.access.update);
        }
        // /////////////////////////////////////
        // Retrieve original raw version
        // /////////////////////////////////////
        const { docs: versionDocs } = await payload.db.findGlobalVersions({
            global: globalConfig.slug,
            limit: 1,
            req,
            where: {
                id: {
                    equals: id
                }
            }
        });
        if (!versionDocs || versionDocs.length === 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NotFound"](req.t);
        }
        const rawVersion = versionDocs[0];
        // Patch globalType onto version doc
        rawVersion.version.globalType = globalConfig.slug;
        // Overwrite draft status if draft is true
        if (draft) {
            rawVersion.version._status = 'draft';
        }
        // /////////////////////////////////////
        // fetch previousDoc
        // /////////////////////////////////////
        const previousDoc = await payload.findGlobal({
            slug: globalConfig.slug,
            depth,
            req
        });
        // /////////////////////////////////////
        // Update global
        // /////////////////////////////////////
        const global = await payload.db.findGlobal({
            slug: globalConfig.slug,
            req
        });
        let result = rawVersion.version;
        if (global) {
            // Ensure updatedAt date is always updated
            result.updatedAt = new Date().toISOString();
            result = await payload.db.updateGlobal({
                slug: globalConfig.slug,
                data: result,
                req
            });
            const now = new Date().toISOString();
            result = await payload.db.createGlobalVersion({
                autosave: false,
                createdAt: result.createdAt ? new Date(result.createdAt).toISOString() : now,
                globalSlug: globalConfig.slug,
                req,
                updatedAt: draft ? now : new Date(result.updatedAt).toISOString(),
                versionData: result
            });
        } else {
            result = await payload.db.createGlobal({
                slug: globalConfig.slug,
                data: result,
                req
            });
        }
        // /////////////////////////////////////
        // afterRead - Fields
        // /////////////////////////////////////
        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["afterRead"])({
            collection: null,
            context: req.context,
            depth: depth,
            doc: result,
            draft: undefined,
            fallbackLocale: fallbackLocale,
            global: globalConfig,
            locale: locale,
            overrideAccess: overrideAccess,
            populate,
            req,
            showHiddenFields: showHiddenFields
        });
        // /////////////////////////////////////
        // afterRead - Global
        // /////////////////////////////////////
        if (globalConfig.hooks?.afterRead?.length) {
            for (const hook of globalConfig.hooks.afterRead){
                result = await hook({
                    context: req.context,
                    doc: result,
                    global: globalConfig,
                    req
                }) || result;
            }
        }
        // /////////////////////////////////////
        // afterChange - Fields
        // /////////////////////////////////////
        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["afterChange"])({
            collection: null,
            context: req.context,
            data: result,
            doc: result,
            global: globalConfig,
            operation: 'update',
            previousDoc,
            req
        });
        // /////////////////////////////////////
        // afterChange - Global
        // /////////////////////////////////////
        if (globalConfig.hooks?.afterChange?.length) {
            for (const hook of globalConfig.hooks.afterChange){
                result = await hook({
                    context: req.context,
                    data: result,
                    doc: result,
                    global: globalConfig,
                    previousDoc,
                    req
                }) || result;
            }
        }
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
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/globals/operations/local/restoreVersion.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "restoreGlobalVersionLocal",
    ()=>restoreGlobalVersionLocal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/createLocalReq.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$restoreVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/globals/operations/restoreVersion.js [app-route] (ecmascript)");
;
;
;
async function restoreGlobalVersionLocal(payload, options) {
    const { id, slug: globalSlug, depth, overrideAccess = true, populate, showHiddenFields } = options;
    const globalConfig = payload.globals.config.find((config)=>config.slug === globalSlug);
    if (!globalConfig) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`The global with slug ${String(globalSlug)} can't be found.`);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$restoreVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["restoreVersionOperation"])({
        id,
        depth,
        globalConfig,
        overrideAccess,
        populate,
        req: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])(options, payload),
        showHiddenFields
    });
} //# sourceMappingURL=restoreVersion.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/globals/operations/update.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateOperation",
    ()=>updateOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/executeAccess.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterChange/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/afterRead/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeChange/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/hooks/beforeValidate/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/deepCopyObject.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$checkDocumentLockStatus$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/checkDocumentLockStatus.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/commitTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getSelectMode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getSelectMode.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/getVersionsConfig.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/initTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/killTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/sanitizeSelect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$getLatestGlobalVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/getLatestGlobalVersion.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$saveVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/saveVersion.js [app-route] (ecmascript)");
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
const updateOperation = async (args)=>{
    if (args.publishSpecificLocale) {
        args.req.locale = args.publishSpecificLocale;
    }
    const { slug, autosave, depth, disableTransaction, draft: draftArg, globalConfig, overrideAccess, overrideLock, populate, publishSpecificLocale, req: { fallbackLocale, locale, payload }, req, select: incomingSelect, showHiddenFields } = args;
    try {
        const shouldCommit = !disableTransaction && await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initTransaction"])(req);
        // /////////////////////////////////////
        // beforeOperation - Global
        // /////////////////////////////////////
        if (globalConfig.hooks?.beforeOperation?.length) {
            for (const hook of globalConfig.hooks.beforeOperation){
                args = await hook({
                    args,
                    context: args.req.context,
                    global: globalConfig,
                    operation: 'update',
                    req: args.req
                }) || args;
            }
        }
        let { data } = args;
        const isSavingDraft = Boolean(draftArg && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasDraftsEnabled"])(globalConfig)) && data._status !== 'published';
        // /////////////////////////////////////
        // 1. Retrieve and execute access
        // /////////////////////////////////////
        const accessResults = !overrideAccess ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeAccess"])({
            data,
            req
        }, globalConfig.access.update) : true;
        // /////////////////////////////////////
        // Retrieve document
        // /////////////////////////////////////
        const query = overrideAccess ? undefined : accessResults;
        // /////////////////////////////////////
        // 2. Retrieve document
        // /////////////////////////////////////
        const globalVersionResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$getLatestGlobalVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getLatestGlobalVersion"])({
            slug,
            config: globalConfig,
            locale: locale,
            payload,
            req,
            where: query
        });
        const { global, globalExists } = globalVersionResult || {};
        let globalJSON = {};
        if (globalVersionResult && globalVersionResult.global) {
            globalJSON = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(global);
            if (globalJSON._id) {
                delete globalJSON._id;
            }
        }
        const originalDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["afterRead"])({
            collection: null,
            context: req.context,
            depth: 0,
            doc: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(globalJSON),
            draft: draftArg,
            fallbackLocale: fallbackLocale,
            global: globalConfig,
            locale: locale,
            overrideAccess: true,
            req,
            showHiddenFields: showHiddenFields
        });
        // ///////////////////////////////////////////
        // Handle potentially locked global documents
        // ///////////////////////////////////////////
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$checkDocumentLockStatus$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkDocumentLockStatus"])({
            globalSlug: slug,
            lockErrorMessage: `Global with slug "${slug}" is currently locked by another user and cannot be updated.`,
            overrideLock,
            req
        });
        // /////////////////////////////////////
        // beforeValidate - Fields
        // /////////////////////////////////////
        data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["beforeValidate"])({
            collection: null,
            context: req.context,
            data,
            doc: originalDoc,
            global: globalConfig,
            operation: 'update',
            overrideAccess: overrideAccess,
            req
        });
        // /////////////////////////////////////
        // beforeValidate - Global
        // /////////////////////////////////////
        if (globalConfig.hooks?.beforeValidate?.length) {
            for (const hook of globalConfig.hooks.beforeValidate){
                data = await hook({
                    context: req.context,
                    data,
                    global: globalConfig,
                    originalDoc,
                    req
                }) || data;
            }
        }
        // /////////////////////////////////////
        // beforeChange - Global
        // /////////////////////////////////////
        if (globalConfig.hooks?.beforeChange?.length) {
            for (const hook of globalConfig.hooks.beforeChange){
                data = await hook({
                    context: req.context,
                    data,
                    global: globalConfig,
                    originalDoc,
                    req
                }) || data;
            }
        }
        // /////////////////////////////////////
        // beforeChange - Fields
        // /////////////////////////////////////
        const beforeChangeArgs = {
            collection: null,
            context: req.context,
            data,
            doc: originalDoc,
            docWithLocales: globalJSON,
            global: globalConfig,
            operation: 'update',
            req,
            skipValidation: isSavingDraft && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getVersionsConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasDraftValidationEnabled"])(globalConfig)
        };
        let result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["beforeChange"])(beforeChangeArgs);
        let snapshotToSave;
        if (payload.config.localization && globalConfig.versions) {
            if (publishSpecificLocale) {
                snapshotToSave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(result);
                // the published data to save to the main document
                result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["beforeChange"])({
                    ...beforeChangeArgs,
                    docWithLocales: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$getLatestGlobalVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getLatestGlobalVersion"])({
                        slug,
                        config: globalConfig,
                        payload,
                        published: true,
                        req,
                        where: query
                    }))?.global || {}
                });
            }
        }
        // /////////////////////////////////////
        // Update
        // /////////////////////////////////////
        const select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeSelect"])({
            fields: globalConfig.flattenedFields,
            forceSelect: globalConfig.forceSelect,
            select: incomingSelect
        });
        if (!isSavingDraft) {
            const now = new Date().toISOString();
            // Ensure global has createdAt
            if (!result.createdAt) {
                result.createdAt = now;
            }
            // Ensure updatedAt date is always updated
            result.updatedAt = now;
            if (globalExists) {
                result = await payload.db.updateGlobal({
                    slug,
                    data: result,
                    req,
                    select
                });
            } else {
                result = await payload.db.createGlobal({
                    slug,
                    data: result,
                    req
                });
            }
        }
        // /////////////////////////////////////
        // Create version
        // /////////////////////////////////////
        if (globalConfig.versions) {
            const { globalType } = result;
            result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$saveVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["saveVersion"])({
                autosave,
                docWithLocales: result,
                draft: isSavingDraft,
                global: globalConfig,
                operation: 'update',
                payload,
                publishSpecificLocale,
                req,
                select,
                snapshot: snapshotToSave
            });
            result = {
                ...result,
                globalType
            };
        }
        // /////////////////////////////////////
        // Execute globalType field if not selected
        // /////////////////////////////////////
        if (select && result.globalType) {
            const selectMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getSelectMode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSelectMode"])(select);
            if (selectMode === 'include' && !select['globalType'] || selectMode === 'exclude' && select['globalType'] === false) {
                delete result['globalType'];
            }
        }
        // /////////////////////////////////////
        // afterRead - Fields
        // /////////////////////////////////////
        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["afterRead"])({
            collection: null,
            context: req.context,
            depth: depth,
            doc: result,
            draft: draftArg,
            fallbackLocale: null,
            global: globalConfig,
            locale: locale,
            overrideAccess: overrideAccess,
            populate,
            req,
            select,
            showHiddenFields: showHiddenFields
        });
        // /////////////////////////////////////
        // afterRead - Global
        // /////////////////////////////////////
        if (globalConfig.hooks?.afterRead?.length) {
            for (const hook of globalConfig.hooks.afterRead){
                result = await hook({
                    context: req.context,
                    doc: result,
                    global: globalConfig,
                    req
                }) || result;
            }
        }
        // /////////////////////////////////////
        // afterChange - Fields
        // /////////////////////////////////////
        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["afterChange"])({
            collection: null,
            context: req.context,
            data,
            doc: result,
            global: globalConfig,
            operation: 'update',
            previousDoc: originalDoc,
            req
        });
        // /////////////////////////////////////
        // afterChange - Global
        // /////////////////////////////////////
        if (globalConfig.hooks?.afterChange?.length) {
            for (const hook of globalConfig.hooks.afterChange){
                result = await hook({
                    context: req.context,
                    data,
                    doc: result,
                    global: globalConfig,
                    previousDoc: originalDoc,
                    req
                }) || result;
            }
        }
        // /////////////////////////////////////
        // Return results
        // /////////////////////////////////////
        if (shouldCommit) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["commitTransaction"])(req);
        }
        return result;
    } catch (error) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["killTransaction"])(req);
        throw error;
    }
}; //# sourceMappingURL=update.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/globals/operations/local/update.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateGlobalLocal",
    ()=>updateGlobalLocal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/deepCopyObject.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/createLocalReq.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$update$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/globals/operations/update.js [app-route] (ecmascript)");
;
;
;
;
async function updateGlobalLocal(payload, options) {
    const { slug: globalSlug, data, depth, draft, overrideAccess = true, overrideLock, populate, publishSpecificLocale, select, showHiddenFields } = options;
    const globalConfig = payload.globals.config.find((config)=>config.slug === globalSlug);
    if (!globalConfig) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`The global with slug ${String(globalSlug)} can't be found.`);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$update$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateOperation"])({
        slug: globalSlug,
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(data),
        depth,
        draft,
        globalConfig,
        overrideAccess,
        overrideLock,
        populate,
        publishSpecificLocale: publishSpecificLocale,
        req: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])(options, payload),
        select,
        showHiddenFields
    });
} //# sourceMappingURL=update.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/bin/generateImportMap/iterateFields.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-unused-expressions */ __turbopack_context__.s([
    "genImportMapIterateFields",
    ()=>genImportMapIterateFields
]);
function hasKey(obj, key) {
    return obj != null && Object.prototype.hasOwnProperty.call(obj, key);
}
const defaultUIFieldComponentKeys = [
    'Cell',
    'Description',
    'Field',
    'Filter'
];
function genImportMapIterateFields({ addToImportMap, baseDir, config, fields, importMap, imports }) {
    for (const field of fields){
        if ('fields' in field) {
            genImportMapIterateFields({
                addToImportMap,
                baseDir,
                config,
                fields: field.fields,
                importMap,
                imports
            });
        } else if (field.type === 'blocks') {
            genImportMapIterateFields({
                addToImportMap,
                baseDir,
                config,
                fields: field.blocks.filter((block)=>typeof block !== 'string'),
                importMap,
                imports
            });
        } else if (field.type === 'tabs') {
            genImportMapIterateFields({
                addToImportMap,
                baseDir,
                config,
                fields: field.tabs,
                importMap,
                imports
            });
        } else if (field.type === 'richText') {
            if (field?.editor && typeof field.editor === 'object' && field.editor.generateImportMap && typeof field.editor.generateImportMap === 'function') {
                field.editor.generateImportMap({
                    addToImportMap,
                    baseDir,
                    config,
                    importMap,
                    imports
                });
            }
        } else if (field.type === 'ui') {
            if (field?.admin?.components) {
                // Render any extra, untyped components
                for(const key in field.admin.components){
                    if (key in defaultUIFieldComponentKeys) {
                        continue;
                    }
                    addToImportMap(field.admin.components[key]);
                }
            }
        }
        hasKey(field?.admin, 'jsx') && addToImportMap(field.admin.jsx); // For Blocks
        hasKey(field?.admin?.components, 'Label') && addToImportMap(field.admin.components.Label);
        hasKey(field?.admin?.components, 'Block') && addToImportMap(field.admin.components.Block);
        hasKey(field?.admin?.components, 'Cell') && addToImportMap(field?.admin?.components?.Cell);
        hasKey(field?.admin?.components, 'Description') && addToImportMap(field?.admin?.components?.Description);
        hasKey(field?.admin?.components, 'Field') && addToImportMap(field?.admin?.components?.Field);
        hasKey(field?.admin?.components, 'Filter') && addToImportMap(field?.admin?.components?.Filter);
        hasKey(field?.admin?.components, 'Error') && addToImportMap(field?.admin?.components?.Error);
        hasKey(field?.admin?.components, 'afterInput') && addToImportMap(field?.admin?.components?.afterInput);
        hasKey(field?.admin?.components, 'beforeInput') && addToImportMap(field?.admin?.components?.beforeInput);
        hasKey(field?.admin?.components, 'RowLabel') && addToImportMap(field?.admin?.components?.RowLabel);
        hasKey(field?.admin?.components, 'Diff') && addToImportMap(field?.admin?.components?.Diff);
    }
} //# sourceMappingURL=iterateFields.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/bin/generateImportMap/iterateCollections.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "iterateCollections",
    ()=>iterateCollections
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/bin/generateImportMap/iterateFields.js [app-route] (ecmascript)");
;
function iterateCollections({ addToImportMap, baseDir, collections, config, importMap, imports }) {
    for (const collection of collections){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["genImportMapIterateFields"])({
            addToImportMap,
            baseDir,
            config,
            fields: collection.fields,
            importMap,
            imports
        });
        addToImportMap(collection.admin?.components?.afterList);
        addToImportMap(collection.admin?.components?.listMenuItems);
        addToImportMap(collection.admin?.components?.afterListTable);
        addToImportMap(collection.admin?.components?.beforeList);
        addToImportMap(collection.admin?.components?.beforeListTable);
        addToImportMap(collection.admin?.components?.Description);
        addToImportMap(collection.admin?.components?.edit?.beforeDocumentControls);
        addToImportMap(collection.admin?.components?.edit?.editMenuItems);
        addToImportMap(collection.admin?.components?.edit?.PreviewButton);
        addToImportMap(collection.admin?.components?.edit?.PublishButton);
        addToImportMap(collection.admin?.components?.edit?.SaveButton);
        addToImportMap(collection.admin?.components?.edit?.SaveDraftButton);
        addToImportMap(collection.admin?.components?.edit?.Upload);
        if (collection.upload?.admin?.components?.controls) {
            addToImportMap(collection.upload?.admin?.components?.controls);
        }
        if (collection.admin?.components?.views?.edit) {
            for (const editViewConfig of Object.values(collection.admin?.components?.views?.edit)){
                if ('Component' in editViewConfig) {
                    addToImportMap(editViewConfig?.Component);
                }
                if ('actions' in editViewConfig) {
                    addToImportMap(editViewConfig?.actions);
                }
                if ('tab' in editViewConfig) {
                    addToImportMap(editViewConfig?.tab?.Component);
                    addToImportMap(editViewConfig?.tab?.Pill);
                }
            }
        }
        addToImportMap(collection.admin?.components?.views?.list?.Component);
        addToImportMap(collection.admin?.components?.views?.list?.actions);
    }
} //# sourceMappingURL=iterateCollections.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/bin/generateImportMap/iterateGlobals.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "iterateGlobals",
    ()=>iterateGlobals
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/bin/generateImportMap/iterateFields.js [app-route] (ecmascript)");
;
function iterateGlobals({ addToImportMap, baseDir, config, globals, importMap, imports }) {
    for (const global of globals){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["genImportMapIterateFields"])({
            addToImportMap,
            baseDir,
            config,
            fields: global.fields,
            importMap,
            imports
        });
        addToImportMap(global.admin?.components?.elements?.beforeDocumentControls);
        addToImportMap(global.admin?.components?.elements?.Description);
        addToImportMap(global.admin?.components?.elements?.PreviewButton);
        addToImportMap(global.admin?.components?.elements?.PublishButton);
        addToImportMap(global.admin?.components?.elements?.SaveButton);
        addToImportMap(global.admin?.components?.elements?.SaveDraftButton);
        if (global.admin?.components?.views?.edit) {
            for (const editViewConfig of Object.values(global.admin?.components?.views?.edit)){
                if ('Component' in editViewConfig) {
                    addToImportMap(editViewConfig?.Component);
                }
                if ('actions' in editViewConfig) {
                    addToImportMap(editViewConfig?.actions);
                }
                if ('tab' in editViewConfig) {
                    addToImportMap(editViewConfig?.tab?.Component);
                    addToImportMap(editViewConfig?.tab?.Pill);
                }
            }
        }
    }
} //# sourceMappingURL=iterateGlobals.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/bin/generateImportMap/iterateConfig.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "iterateConfig",
    ()=>iterateConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateCollections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/bin/generateImportMap/iterateCollections.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/bin/generateImportMap/iterateFields.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateGlobals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/bin/generateImportMap/iterateGlobals.js [app-route] (ecmascript)");
;
;
;
function iterateConfig({ addToImportMap, baseDir, config, importMap, imports }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateCollections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["iterateCollections"])({
        addToImportMap,
        baseDir,
        collections: config.collections,
        config,
        importMap,
        imports
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateGlobals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["iterateGlobals"])({
        addToImportMap,
        baseDir,
        config,
        globals: config.globals,
        importMap,
        imports
    });
    if (config?.blocks) {
        const blocks = Object.values(config.blocks);
        if (blocks?.length) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["genImportMapIterateFields"])({
                addToImportMap,
                baseDir,
                config,
                fields: blocks,
                importMap,
                imports
            });
        }
    }
    if (typeof config.admin?.avatar === 'object') {
        addToImportMap(config.admin?.avatar?.Component);
    }
    addToImportMap(config.admin?.components?.Nav);
    addToImportMap(config.admin?.components?.header);
    addToImportMap(config.admin?.components?.logout?.Button);
    addToImportMap(config.admin?.components?.settingsMenu);
    addToImportMap(config.admin?.components?.graphics?.Icon);
    addToImportMap(config.admin?.components?.graphics?.Logo);
    addToImportMap(config.admin?.components?.actions);
    addToImportMap(config.admin?.components?.afterDashboard);
    addToImportMap(config.admin?.components?.afterLogin);
    addToImportMap(config.admin?.components?.afterNavLinks);
    addToImportMap(config.admin?.components?.beforeDashboard);
    addToImportMap(config.admin?.components?.beforeLogin);
    addToImportMap(config.admin?.components?.beforeNavLinks);
    addToImportMap(config.admin?.components?.providers);
    if (config.admin?.components?.views) {
        if (Object.keys(config.admin?.components?.views)?.length) {
            for(const key in config.admin?.components?.views){
                const adminViewConfig = config.admin?.components?.views[key];
                addToImportMap(adminViewConfig?.Component);
            }
        }
    }
    if (config.admin?.dashboard?.widgets?.length) {
        for (const dashboardWidget of config.admin.dashboard.widgets){
            addToImportMap(dashboardWidget.ComponentPath);
        }
    }
    if (config?.admin?.importMap?.generators?.length) {
        for (const generator of config.admin.importMap.generators){
            generator({
                addToImportMap,
                baseDir,
                config,
                importMap,
                imports
            });
        }
    }
    if (config?.admin?.dependencies) {
        for (const dependency of Object.values(config.admin.dependencies)){
            addToImportMap(dependency.path);
        }
    }
/*
  if (
    config?.editor &&
    typeof config.editor === 'object' &&
    config.editor.generateImportMap &&
    typeof config.editor.generateImportMap === 'function'
  ) {
    config.editor.generateImportMap({
      addToImportMap,
      baseDir,
      componentMap,
      config,
      importMap,
    })
  }*/ // No need to do that here since in the sanitized editor config, this root editor is already added to the field editor - and we already process that in iterateFields
} //# sourceMappingURL=iterateConfig.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/bin/generateImportMap/utilities/parsePayloadComponent.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parsePayloadComponent",
    ()=>parsePayloadComponent
]);
function parsePayloadComponent(PayloadComponent) {
    if (!PayloadComponent) {
        return null;
    }
    const pathAndMaybeExport = typeof PayloadComponent === 'string' ? PayloadComponent : PayloadComponent.path;
    let path;
    let exportName;
    if (pathAndMaybeExport.includes('#')) {
        ;
        [path, exportName] = pathAndMaybeExport.split('#', 2);
    } else {
        path = pathAndMaybeExport;
        exportName = 'default';
    }
    if (typeof PayloadComponent === 'object' && PayloadComponent.exportName) {
        exportName = PayloadComponent.exportName;
    }
    return {
        exportName,
        path
    };
} //# sourceMappingURL=parsePayloadComponent.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/bin/generateImportMap/utilities/addPayloadComponentToImportMap.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addPayloadComponentToImportMap",
    ()=>addPayloadComponentToImportMap
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$utilities$2f$parsePayloadComponent$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/bin/generateImportMap/utilities/parsePayloadComponent.js [app-route] (ecmascript)");
;
;
;
/**
 * Normalizes the component path based on the import map's base directory path.
 */ function getAdjustedComponentPath(importMapToBaseDirPath, componentPath) {
    // Normalize input paths to use forward slashes
    const normalizedBasePath = importMapToBaseDirPath.replace(/\\/g, '/');
    const normalizedComponentPath = componentPath.replace(/\\/g, '/');
    // Base path starts with './' - preserve the './' prefix
    // => import map is in a subdirectory of the base directory, or in the same directory as the base directory
    if (normalizedBasePath.startsWith('./')) {
        // Remove './' from component path if it exists
        const cleanComponentPath = normalizedComponentPath.startsWith('./') ? normalizedComponentPath.substring(2) : normalizedComponentPath;
        // Join the paths to preserve the './' prefix
        return `${normalizedBasePath}${cleanComponentPath}`;
    }
    return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].posix.join(normalizedBasePath, normalizedComponentPath);
}
function addPayloadComponentToImportMap({ importMap, importMapToBaseDirPath, imports, payloadComponent }) {
    if (!payloadComponent) {
        return null;
    }
    const { exportName, path: componentPath } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$utilities$2f$parsePayloadComponent$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parsePayloadComponent"])(payloadComponent);
    if (importMap[componentPath + '#' + exportName]) {
        return null;
    }
    const importIdentifier = exportName + '_' + __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash('md5').update(componentPath).digest('hex');
    importMap[componentPath + '#' + exportName] = importIdentifier;
    const isRelativePath = componentPath.startsWith('.') || componentPath.startsWith('/');
    if (isRelativePath) {
        const adjustedComponentPath = getAdjustedComponentPath(importMapToBaseDirPath, componentPath);
        imports[importIdentifier] = {
            path: adjustedComponentPath,
            specifier: exportName
        };
        return {
            path: adjustedComponentPath,
            specifier: exportName
        };
    } else {
        // Tsconfig alias or package import, e.g. '@payloadcms/ui' or '@/components/MyComponent'
        imports[importIdentifier] = {
            path: componentPath,
            specifier: exportName
        };
        return {
            path: componentPath,
            specifier: exportName
        };
    }
} //# sourceMappingURL=addPayloadComponentToImportMap.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/bin/generateImportMap/utilities/getImportMapToBaseDirPath.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getImportMapToBaseDirPath",
    ()=>getImportMapToBaseDirPath
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
function getImportMapToBaseDirPath({ baseDir, importMapPath }) {
    const importMapDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(importMapPath);
    // 1. Direct relative path from `importMapDir` -> `baseDir`
    let relativePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].relative(importMapDir, baseDir).replace(/\\/g, '/');
    // 2. If they're the same directory, path.relative will be "", so use "./"
    if (!relativePath) {
        relativePath = './';
    } else if (!relativePath.startsWith('.') && !relativePath.startsWith('/')) {
        relativePath = `./${relativePath}`;
    }
    // 3. For consistency ensure a trailing slash
    if (!relativePath.endsWith('/')) {
        relativePath += '/';
    }
    return relativePath;
} //# sourceMappingURL=getImportMapToBaseDirPath.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/bin/generateImportMap/utilities/resolveImportMapFilePath.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveImportMapFilePath",
    ()=>resolveImportMapFilePath
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
async function pathOrFileExists(path) {
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].access(path);
        return true;
    } catch  {
        return false;
    }
}
async function resolveImportMapFilePath({ adminRoute = '/admin', importMapFile, rootDir }) {
    let importMapFilePath = undefined;
    if (importMapFile?.length) {
        if (!await pathOrFileExists(importMapFile)) {
            try {
                await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(importMapFile, '', {
                    flag: 'wx'
                });
            } catch (err) {
                return new Error(`Could not find the import map file at ${importMapFile}${err instanceof Error && err?.message ? `: ${err.message}` : ''}`);
            }
        }
        importMapFilePath = importMapFile;
    } else {
        const appLocation = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(rootDir, `app/(payload)${adminRoute}/`);
        const srcAppLocation = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(rootDir, `src/app/(payload)${adminRoute}/`);
        if (appLocation && await pathOrFileExists(appLocation)) {
            importMapFilePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(appLocation, 'importMap.js');
            if (!await pathOrFileExists(importMapFilePath)) {
                await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(importMapFilePath, '', {
                    flag: 'wx'
                });
            }
        } else if (srcAppLocation && await pathOrFileExists(srcAppLocation)) {
            importMapFilePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(srcAppLocation, 'importMap.js');
            if (!await pathOrFileExists(importMapFilePath)) {
                await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(importMapFilePath, '', {
                    flag: 'wx'
                });
            }
        } else {
            return new Error(`Could not find Payload import map folder. Looked in ${appLocation} and ${srcAppLocation}`);
        }
    }
    return importMapFilePath;
} //# sourceMappingURL=resolveImportMapFilePath.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/bin/generateImportMap/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable no-console */ __turbopack_context__.s([
    "generateImportMap",
    ()=>generateImportMap,
    "writeImportMap",
    ()=>writeImportMap
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:process [external] (node:process, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/bin/generateImportMap/iterateConfig.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$utilities$2f$addPayloadComponentToImportMap$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/bin/generateImportMap/utilities/addPayloadComponentToImportMap.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$utilities$2f$getImportMapToBaseDirPath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/bin/generateImportMap/utilities/getImportMapToBaseDirPath.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$utilities$2f$resolveImportMapFilePath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/bin/generateImportMap/utilities/resolveImportMapFilePath.js [app-route] (ecmascript)");
;
;
;
;
;
;
async function generateImportMap(config, options) {
    const shouldLog = options?.log ?? true;
    if (shouldLog) {
        console.log('Generating import map');
    }
    const importMap = {};
    const imports = {};
    // Determine the root directory of the project - usually the directory where the src or app folder is located
    const rootDir = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"].env.ROOT_DIR ?? __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"].cwd();
    const baseDir = config.admin.importMap.baseDir ?? __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"].cwd();
    const importMapFilePath = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$utilities$2f$resolveImportMapFilePath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveImportMapFilePath"])({
        adminRoute: config.routes.admin,
        importMapFile: config?.admin?.importMap?.importMapFile,
        rootDir
    });
    if (importMapFilePath instanceof Error) {
        if (options?.ignoreResolveError) {
            return;
        } else {
            throw importMapFilePath;
        }
    }
    const importMapToBaseDirPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$utilities$2f$getImportMapToBaseDirPath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getImportMapToBaseDirPath"])({
        baseDir,
        importMapPath: importMapFilePath
    });
    const addToImportMap = (payloadComponent)=>{
        if (!payloadComponent) {
            return;
        }
        if (typeof payloadComponent !== 'object' && typeof payloadComponent !== 'string') {
            console.error(payloadComponent);
            throw new Error('addToImportMap > Payload component must be an object or a string');
        }
        if (Array.isArray(payloadComponent)) {
            for (const component of payloadComponent){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$utilities$2f$addPayloadComponentToImportMap$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addPayloadComponentToImportMap"])({
                    importMap,
                    importMapToBaseDirPath,
                    imports,
                    payloadComponent: component
                });
            }
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$utilities$2f$addPayloadComponentToImportMap$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addPayloadComponentToImportMap"])({
                importMap,
                importMapToBaseDirPath,
                imports,
                payloadComponent
            });
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["iterateConfig"])({
        addToImportMap,
        baseDir: config.admin.importMap.baseDir,
        config,
        importMap,
        imports
    });
    await writeImportMap({
        componentMap: importMap,
        force: options?.force,
        importMap: imports,
        importMapFilePath,
        log: shouldLog
    });
}
async function writeImportMap({ componentMap, force, importMap, importMapFilePath, log }) {
    const imports = [];
    for (const [identifier, { path, specifier }] of Object.entries(importMap)){
        imports.push(`import { ${specifier} as ${identifier} } from '${path}'`);
    }
    const mapKeys = [];
    for (const [userPath, identifier] of Object.entries(componentMap)){
        mapKeys.push(`  "${userPath}": ${identifier}`);
    }
    const importMapOutputFile = `${imports.join('\n')}

export const importMap = {
${mapKeys.join(',\n')}
}
`;
    if (!force) {
        // Read current import map and check in the IMPORTS if there are any new imports. If not, don't write the file.
        const currentImportMap = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readFile(importMapFilePath, 'utf-8');
        if (currentImportMap?.trim() === importMapOutputFile?.trim()) {
            if (log) {
                console.log('No new imports found, skipping writing import map');
            }
            return;
        }
    }
    if (log) {
        console.log('Writing import map to', importMapFilePath);
    }
    await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(importMapFilePath, importMapOutputFile);
} //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/checkPayloadDependencies.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkPayloadDependencies",
    ()=>checkPayloadDependencies
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$dependencyChecker$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/dependencies/dependencyChecker.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$payloadPackageList$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/versions/payloadPackageList.js [app-route] (ecmascript)");
;
;
function checkPayloadDependencies() {
    const dependencies = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$payloadPackageList$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PAYLOAD_PACKAGE_LIST"]
    ];
    if (process.env.PAYLOAD_CI_DEPENDENCY_CHECKER !== 'true') {
        dependencies.push('@payloadcms/plugin-sentry');
    }
    // First load. First check if there are mismatching dependency versions of payload packages
    void (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$dependencyChecker$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkDependencies"])({
        dependencyGroups: [
            {
                name: 'payload',
                dependencies,
                targetVersionDependency: 'payload'
            }
        ]
    });
} //# sourceMappingURL=checkPayloadDependencies.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/email/defaults.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "emailDefaults",
    ()=>emailDefaults
]);
const emailDefaults = {
    defaultFromAddress: 'info@payloadcms.com',
    defaultFromName: 'Payload'
}; //# sourceMappingURL=defaults.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/email/getStringifiedToAddress.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getStringifiedToAddress",
    ()=>getStringifiedToAddress
]);
const getStringifiedToAddress = (message)=>{
    let stringifiedTo;
    if (typeof message.to === 'string') {
        stringifiedTo = message.to;
    } else if (Array.isArray(message.to)) {
        stringifiedTo = message.to.map((to)=>{
            if (typeof to === 'string') {
                return to;
            } else if (to.address) {
                return to.address;
            }
            return '';
        }).join(', ');
    } else if (message.to?.address) {
        stringifiedTo = message.to.address;
    }
    return stringifiedTo;
}; //# sourceMappingURL=getStringifiedToAddress.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/email/consoleEmailAdapter.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "consoleEmailAdapter",
    ()=>consoleEmailAdapter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$email$2f$defaults$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/email/defaults.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$email$2f$getStringifiedToAddress$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/email/getStringifiedToAddress.js [app-route] (ecmascript)");
;
;
const consoleEmailAdapter = ({ payload })=>({
        name: 'console',
        defaultFromAddress: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$email$2f$defaults$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["emailDefaults"].defaultFromAddress,
        defaultFromName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$email$2f$defaults$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["emailDefaults"].defaultFromName,
        sendEmail: async (message)=>{
            const stringifiedTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$email$2f$getStringifiedToAddress$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getStringifiedToAddress"])(message);
            const res = `Email attempted without being configured. To: '${stringifiedTo}', Subject: '${message.subject}'`;
            payload.logger.info({
                msg: res
            });
            return Promise.resolve();
        }
    }); //# sourceMappingURL=consoleEmailAdapter.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */ /* eslint-disable @typescript-eslint/ban-ts-comment */ __turbopack_context__.s([
    "BasePayload",
    ()=>BasePayload,
    "default",
    ()=>__TURBOPACK__default__export__,
    "getPayload",
    ()=>getPayload,
    "reload",
    ()=>reload
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/child_process [external] (child_process, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:url [external] (node:url, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ws$40$8$2e$18$2e$3$2f$node_modules$2f$ws$2f$wrapper$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ws@8.18.3/node_modules/ws/wrapper.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$local$2f$forgotPassword$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/operations/local/forgotPassword.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$local$2f$login$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/operations/local/login.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$local$2f$resetPassword$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/operations/local/resetPassword.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$local$2f$unlock$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/operations/local/unlock.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$local$2f$verifyEmail$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/operations/local/verifyEmail.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$count$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/local/count.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$create$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/local/create.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$delete$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/local/delete.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$duplicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/local/duplicate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$find$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/local/find.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$findByID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/local/findByID.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$findDistinct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/local/findDistinct.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$findVersionByID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/local/findVersionByID.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$findVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/local/findVersions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$restoreVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/local/restoreVersion.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$update$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/local/update.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$local$2f$countVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/globals/operations/local/countVersions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$local$2f$findOne$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/globals/operations/local/findOne.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$local$2f$findVersionByID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/globals/operations/local/findVersionByID.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$local$2f$findVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/globals/operations/local/findVersions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$local$2f$restoreVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/globals/operations/local/restoreVersion.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$local$2f$update$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/globals/operations/local/update.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$croner$40$9$2e$1$2e$0$2f$node_modules$2f$croner$2f$dist$2f$croner$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/croner@9.1.0/node_modules/croner/dist/croner.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$crypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/crypto.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$local$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/operations/local/auth.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$strategies$2f$apiKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/strategies/apiKey.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$strategies$2f$jwt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/auth/strategies/jwt.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/bin/generateImportMap/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$checkPayloadDependencies$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/checkPayloadDependencies.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$countVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/collections/operations/local/countVersions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$email$2f$consoleEmailAdapter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/email/consoleEmailAdapter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/fields/config/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$localAPI$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/localAPI.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$getCurrentDate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/utilities/getCurrentDate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatAdminURL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/formatAdminURL.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNextBuild$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/isNextBuild.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$logger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/logger.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$events$2f$serverInit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/telemetry/events/serverInit.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/traverseFields.js [app-route] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/index.js")}`;
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
;
;
;
const filename = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__["fileURLToPath"])(__TURBOPACK__import$2e$meta__.url);
const dirname = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(filename);
let checkedDependencies = false;
class BasePayload {
    /**
   * @description Authorization and Authentication using headers and cookies to run auth user strategies
   * @returns permissions: Permissions
   * @returns user: User
   */ auth = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$local$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authLocal"])(this, options);
    };
    authStrategies;
    blocks = {};
    collections = {};
    config;
    /**
   * @description Performs count operation
   * @param options
   * @returns count of documents satisfying query
   */ count = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$count$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["countLocal"])(this, options);
    };
    /**
   * @description Performs countGlobalVersions operation
   * @param options
   * @returns count of global document versions satisfying query
   */ countGlobalVersions = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$local$2f$countVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["countGlobalVersionsLocal"])(this, options);
    };
    /**
   * @description Performs countVersions operation
   * @param options
   * @returns count of document versions satisfying query
   */ countVersions = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$countVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["countVersionsLocal"])(this, options);
    };
    /**
   * @description Performs create operation
   * @param options
   * @returns created document
   */ create = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$create$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocal"])(this, options);
    };
    crons = [];
    db;
    decrypt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$crypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decrypt"];
    destroy = async ()=>{
        if (this.crons.length) {
            // Remove all crons from the list before stopping them
            const cronsToStop = this.crons.splice(0, this.crons.length);
            await Promise.all(cronsToStop.map((cron)=>cron.stop()));
        }
        if (this.db?.destroy && typeof this.db.destroy === 'function') {
            await this.db.destroy();
        }
    };
    duplicate = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$duplicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["duplicateLocal"])(this, options);
    };
    email;
    // TODO: re-implement or remove?
    // errorHandler: ErrorHandler
    encrypt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$crypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encrypt"];
    extensions;
    /**
   * @description Find documents with criteria
   * @param options
   * @returns documents satisfying query
   */ find = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$find$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findLocal"])(this, options);
    };
    /**
   * @description Find document by ID
   * @param options
   * @returns document with specified ID
   */ findByID = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$findByID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findByIDLocal"])(this, options);
    };
    /**
   * @description Find distinct field values
   * @param options
   * @returns result with distinct field values
   */ findDistinct = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$findDistinct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findDistinct"])(this, options);
    };
    findGlobal = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$local$2f$findOne$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findOneGlobalLocal"])(this, options);
    };
    /**
   * @description Find global version by ID
   * @param options
   * @returns global version with specified ID
   */ findGlobalVersionByID = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$local$2f$findVersionByID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findGlobalVersionByIDLocal"])(this, options);
    };
    /**
   * @description Find global versions with criteria
   * @param options
   * @returns versions satisfying query
   */ findGlobalVersions = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$local$2f$findVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findGlobalVersionsLocal"])(this, options);
    };
    /**
   * @description Find version by ID
   * @param options
   * @returns version with specified ID
   */ findVersionByID = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$findVersionByID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findVersionByIDLocal"])(this, options);
    };
    /**
   * @description Find versions with criteria
   * @param options
   * @returns versions satisfying query
   */ findVersions = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$findVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findVersionsLocal"])(this, options);
    };
    forgotPassword = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$local$2f$forgotPassword$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["forgotPasswordLocal"])(this, options);
    };
    getAdminURL = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatAdminURL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatAdminURL"])({
            adminRoute: this.config.routes.admin,
            path: '',
            serverURL: this.config.serverURL
        });
    getAPIURL = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatAdminURL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatAdminURL"])({
            apiRoute: this.config.routes.api,
            path: '',
            serverURL: this.config.serverURL
        });
    globals;
    importMap;
    jobs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$localAPI$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getJobsLocalAPI"])(this);
    /**
   * Key Value storage
   */ kv;
    logger;
    login = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$local$2f$login$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loginLocal"])(this, options);
    };
    resetPassword = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$local$2f$resetPassword$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resetPasswordLocal"])(this, options);
    };
    /**
   * @description Restore global version by ID
   * @param options
   * @returns version with specified ID
   */ restoreGlobalVersion = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$local$2f$restoreVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["restoreGlobalVersionLocal"])(this, options);
    };
    /**
   * @description Restore version by ID
   * @param options
   * @returns version with specified ID
   */ restoreVersion = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$restoreVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["restoreVersionLocal"])(this, options);
    };
    schema;
    secret;
    sendEmail;
    types;
    unlock = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$local$2f$unlock$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unlockLocal"])(this, options);
    };
    updateGlobal = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$local$2f$update$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateGlobalLocal"])(this, options);
    };
    validationRules;
    verifyEmail = async (options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$local$2f$verifyEmail$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyEmailLocal"])(this, options);
    };
    versions = {};
    async _initializeCrons() {
        if (this.config.jobs.enabled && this.config.jobs.autoRun && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNextBuild$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNextBuild"])()) {
            const DEFAULT_CRON = '* * * * *';
            const DEFAULT_LIMIT = 10;
            const cronJobs = typeof this.config.jobs.autoRun === 'function' ? await this.config.jobs.autoRun(this) : this.config.jobs.autoRun;
            await Promise.all(cronJobs.map((cronConfig)=>{
                const jobAutorunCron = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$croner$40$9$2e$1$2e$0$2f$node_modules$2f$croner$2f$dist$2f$croner$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Cron"](cronConfig.cron ?? DEFAULT_CRON, async ()=>{
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$getCurrentDate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_internal_jobSystemGlobals"].shouldAutoSchedule && !cronConfig.disableScheduling && this.config.jobs.scheduling) {
                        await this.jobs.handleSchedules({
                            allQueues: cronConfig.allQueues,
                            queue: cronConfig.queue
                        });
                    }
                    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$getCurrentDate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_internal_jobSystemGlobals"].shouldAutoRun) {
                        return;
                    }
                    if (typeof this.config.jobs.shouldAutoRun === 'function') {
                        const shouldAutoRun = await this.config.jobs.shouldAutoRun(this);
                        if (!shouldAutoRun) {
                            jobAutorunCron.stop();
                            return;
                        }
                    }
                    await this.jobs.run({
                        allQueues: cronConfig.allQueues,
                        limit: cronConfig.limit ?? DEFAULT_LIMIT,
                        queue: cronConfig.queue,
                        silent: cronConfig.silent
                    });
                }, {
                    // Do not run consecutive crons if previous crons still ongoing
                    protect: true
                });
                this.crons.push(jobAutorunCron);
            }));
        }
    }
    async bin({ args, cwd, log }) {
        return new Promise((resolve, reject)=>{
            const spawned = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__["spawn"])('node', [
                __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(dirname, '../bin.js'),
                ...args
            ], {
                cwd,
                stdio: log || log === undefined ? 'inherit' : 'ignore'
            });
            spawned.on('exit', (code)=>{
                resolve({
                    code: code
                });
            });
            spawned.on('error', (error)=>{
                reject(error);
            });
        });
    }
    delete(options) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$delete$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteLocal"])(this, options);
    }
    /**
   * @description Initializes Payload
   * @param options
   */ async init(options) {
        if (("TURBOPACK compile-time value", "development") !== 'production' && process.env.PAYLOAD_DISABLE_DEPENDENCY_CHECKER !== 'true' && !checkedDependencies) {
            checkedDependencies = true;
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$checkPayloadDependencies$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkPayloadDependencies"])();
        }
        this.importMap = options.importMap;
        if (!options?.config) {
            throw new Error('Error: the payload config is required to initialize payload.');
        }
        this.config = await options.config;
        this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$logger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getLogger"])('payload', this.config.logger);
        if (!this.config.secret) {
            throw new Error('Error: missing secret key. A secret key is needed to secure Payload.');
        }
        this.secret = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash('sha256').update(this.config.secret).digest('hex').slice(0, 32);
        this.globals = {
            config: this.config.globals
        };
        for (const collection of this.config.collections){
            let customIDType = undefined;
            const findCustomID = ({ field })=>{
                if ([
                    'array',
                    'blocks',
                    'group'
                ].includes(field.type) || field.type === 'tab' && 'name' in field) {
                    return true;
                }
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
                    return;
                }
                if (field.name === 'id') {
                    customIDType = field.type;
                    return true;
                }
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                callback: findCustomID,
                config: this.config,
                fields: collection.fields,
                parentIsLocalized: false
            });
            this.collections[collection.slug] = {
                config: collection,
                customIDType
            };
        }
        this.blocks = this.config.blocks.reduce((blocks, block)=>{
            blocks[block.slug] = block;
            return blocks;
        }, {});
        // Generate types on startup
        if (("TURBOPACK compile-time value", "development") !== 'production' && this.config.typescript.autoGenerate !== false) {
            // We cannot run it directly here, as generate-types imports json-schema-to-typescript, which breaks on turbopack.
            // see: https://github.com/vercel/next.js/issues/66723
            void this.bin({
                args: [
                    'generate:types'
                ],
                log: false
            });
        }
        this.db = this.config.db.init({
            payload: this
        });
        this.db.payload = this;
        this.kv = this.config.kv.init({
            payload: this
        });
        if (this.db?.init) {
            await this.db.init();
        }
        if (!options.disableDBConnect && this.db.connect) {
            await this.db.connect();
        }
        // Load email adapter
        if (this.config.email instanceof Promise) {
            const awaitedAdapter = await this.config.email;
            this.email = awaitedAdapter({
                payload: this
            });
        } else if (this.config.email) {
            this.email = this.config.email({
                payload: this
            });
        } else {
            if (process.env.NEXT_PHASE !== 'phase-production-build') {
                this.logger.warn(`No email adapter provided. Email will be written to console. More info at https://payloadcms.com/docs/email/overview.`);
            }
            this.email = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$email$2f$consoleEmailAdapter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["consoleEmailAdapter"])({
                payload: this
            });
        }
        // Warn if image resizing is enabled but sharp is not installed
        if (!this.config.sharp && this.config.collections.some((c)=>c.upload.imageSizes || c.upload.formatOptions)) {
            this.logger.warn(`Image resizing is enabled for one or more collections, but sharp not installed. Please install 'sharp' and pass into the config.`);
        }
        // Warn if user is deploying to Vercel, and any upload collection is missing a storage adapter
        if (process.env.VERCEL) {
            const uploadCollWithoutAdapter = this.config.collections.filter((c)=>c.upload && c.upload.adapter === undefined);
            if (uploadCollWithoutAdapter.length) {
                const slugs = uploadCollWithoutAdapter.map((c)=>c.slug).join(', ');
                this.logger.warn(`Collections with uploads enabled require a storage adapter when deploying to Vercel. Collection(s) without storage adapters: ${slugs}. See https://payloadcms.com/docs/upload/storage-adapters for more info.`);
            }
        }
        this.sendEmail = this.email['sendEmail'];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$events$2f$serverInit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serverInit"])(this);
        // 1. loop over collections, if collection has auth strategy, initialize and push to array
        let jwtStrategyEnabled = false;
        this.authStrategies = this.config.collections.reduce((authStrategies, collection)=>{
            if (collection?.auth) {
                if (collection.auth.strategies.length > 0) {
                    authStrategies.push(...collection.auth.strategies);
                }
                // 2. if api key enabled, push api key strategy into the array
                if (collection.auth?.useAPIKey) {
                    authStrategies.push({
                        name: `${collection.slug}-api-key`,
                        authenticate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$strategies$2f$apiKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIKeyAuthentication"])(collection)
                    });
                }
                // 3. if localStrategy flag is true
                if (!collection.auth.disableLocalStrategy && !jwtStrategyEnabled) {
                    jwtStrategyEnabled = true;
                }
            }
            return authStrategies;
        }, []);
        // 4. if enabled, push jwt strategy into authStrategies last
        if (jwtStrategyEnabled) {
            this.authStrategies.push({
                name: 'local-jwt',
                authenticate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$strategies$2f$jwt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTAuthentication"]
            });
        }
        try {
            if (!options.disableOnInit) {
                if (typeof options.onInit === 'function') {
                    await options.onInit(this);
                }
                if (typeof this.config.onInit === 'function') {
                    await this.config.onInit(this);
                }
            }
        } catch (error) {
            this.logger.error({
                err: error
            }, 'Error running onInit function');
            throw error;
        }
        if (options.cron) {
            await this._initializeCrons();
        }
        return this;
    }
    update(options) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$update$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateLocal"])(this, options);
    }
}
const initialized = new BasePayload();
const __TURBOPACK__default__export__ = initialized;
const reload = async (config, payload, skipImportMapGeneration, options)=>{
    if (typeof payload.db.destroy === 'function') {
        // Only destroy db, as we then later only call payload.db.init and not payload.init
        await payload.db.destroy();
    }
    payload.config = config;
    payload.collections = config.collections.reduce((collections, collection)=>{
        collections[collection.slug] = {
            config: collection,
            customIDType: payload.collections[collection.slug]?.customIDType
        };
        return collections;
    }, {});
    payload.blocks = config.blocks.reduce((blocks, block)=>{
        blocks[block.slug] = block;
        return blocks;
    }, {});
    payload.globals = {
        config: config.globals
    };
    // TODO: support HMR for other props in the future (see payload/src/index init()) that may change on Payload singleton
    // Generate types
    if (config.typescript.autoGenerate !== false) {
        // We cannot run it directly here, as generate-types imports json-schema-to-typescript, which breaks on turbopack.
        // see: https://github.com/vercel/next.js/issues/66723
        void payload.bin({
            args: [
                'generate:types'
            ],
            log: false
        });
    }
    // Generate import map
    if (skipImportMapGeneration !== true && config.admin?.importMap?.autoGenerate !== false) {
        // This may run outside of the admin panel, e.g. in the user's frontend, where we don't have an import map file.
        // We don't want to throw an error in this case, as it would break the user's frontend.
        // => just skip it => ignoreResolveError: true
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateImportMap"])(config, {
            ignoreResolveError: true,
            log: true
        });
    }
    if (payload.db?.init) {
        await payload.db.init();
    }
    if (!options?.disableDBConnect && payload.db.connect) {
        await payload.db.connect({
            hotReload: true
        });
    }
    ;
    /*TURBOPACK member replacement*/ __turbopack_context__.g._payload_clientConfigs = {};
    /*TURBOPACK member replacement*/ __turbopack_context__.g._payload_schemaMap = null;
    /*TURBOPACK member replacement*/ __turbopack_context__.g._payload_clientSchemaMap = null;
    /*TURBOPACK member replacement*/ __turbopack_context__.g._payload_doNotCacheClientConfig = true // This will help refreshing the client config cache more reliably. If you remove this, please test HMR + client config refreshing (do new fields appear in the document?)
    ;
    /*TURBOPACK member replacement*/ __turbopack_context__.g._payload_doNotCacheSchemaMap = true;
    /*TURBOPACK member replacement*/ __turbopack_context__.g._payload_doNotCacheClientSchemaMap = true;
};
let _cached = /*TURBOPACK member replacement*/ __turbopack_context__.g._payload;
if (!_cached) {
    _cached = /*TURBOPACK member replacement*/ __turbopack_context__.g._payload = new Map();
}
const getPayload = async (options)=>{
    if (!options?.config) {
        throw new Error('Error: the payload config is required for getPayload to work.');
    }
    let alreadyCachedSameConfig = false;
    let cached = _cached.get(options.key ?? 'default');
    if (!cached) {
        cached = {
            initializedCrons: Boolean(options.cron),
            payload: null,
            promise: null,
            reload: false,
            ws: null
        };
        _cached.set(options.key ?? 'default', cached);
    } else {
        alreadyCachedSameConfig = true;
    }
    if (alreadyCachedSameConfig) {
        // alreadyCachedSameConfig => already called onInit once, but same config => no need to call onInit again.
        // calling onInit again would only make sense if a different config was passed.
        options.disableOnInit = true;
    }
    if (cached.payload) {
        if (options.cron && !cached.initializedCrons) {
            // getPayload called with crons enabled, but existing cached version does not have crons initialized. => Initialize crons in existing cached version
            cached.initializedCrons = true;
            await cached.payload._initializeCrons();
        }
        if (cached.reload === true) {
            let resolve;
            // getPayload is called multiple times, in parallel. However, we only want to run `await reload` once. By immediately setting cached.reload to a promise,
            // we can ensure that all subsequent calls will wait for the first reload to finish. So if we set it here, the 2nd call of getPayload
            // will reach `if (cached.reload instanceof Promise) {` which then waits for the first reload to finish.
            cached.reload = new Promise((res)=>resolve = res);
            const config = await options.config;
            // Reload the payload instance after a config change (triggered by HMR in development).
            // The second parameter (false) forces import map regeneration rather than deciding based on options.importMap.
            //
            // Why we always regenerate import map: getPayload() may be called from multiple sources (admin panel, frontend, etc.)
            // that share the same cache but may pass different importMap values. Since call order is unpredictable,
            // we cannot rely on options.importMap to determine if regeneration is needed.
            //
            // Example scenario: If the frontend calls getPayload() without importMap first, followed by the admin
            // panel calling it with importMap, we'd incorrectly skip generation for the admin panel's needs.
            // By always regenerating on reload, we ensure the import map stays in sync with the updated config.
            await reload(config, cached.payload, false, options);
            resolve();
        }
        if (cached.reload instanceof Promise) {
            await cached.reload;
        }
        if (options?.importMap) {
            cached.payload.importMap = options.importMap;
        }
        return cached.payload;
    }
    try {
        if (!cached.promise) {
            // no need to await options.config here, as it's already awaited in the BasePayload.init
            cached.promise = new BasePayload().init(options);
        }
        cached.payload = await cached.promise;
        if (!cached.ws && ("TURBOPACK compile-time value", "development") !== 'production' && ("TURBOPACK compile-time value", "development") !== 'test' && process.env.DISABLE_PAYLOAD_HMR !== 'true') {
            try {
                const port = process.env.PORT || '3000';
                const hasHTTPS = process.env.USE_HTTPS === 'true' || process.argv.includes('--experimental-https');
                const protocol = hasHTTPS ? 'wss' : 'ws';
                const path = '/_next/webpack-hmr';
                // The __NEXT_ASSET_PREFIX env variable is set for both assetPrefix and basePath (tested in Next.js 15.1.6)
                const prefix = ("TURBOPACK compile-time value", "") ?? '';
                cached.ws = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ws$40$8$2e$18$2e$3$2f$node_modules$2f$ws$2f$wrapper$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"](process.env.PAYLOAD_HMR_URL_OVERRIDE ?? `${protocol}://localhost:${port}${prefix}${path}`);
                cached.ws.onmessage = (event)=>{
                    if (typeof event.data === 'string') {
                        const data = JSON.parse(event.data);
                        if (data.type === 'serverComponentChanges' || data.action === 'serverComponentChanges') {
                            cached.reload = true;
                        }
                    }
                };
                cached.ws.onerror = (_)=>{
                // swallow any websocket connection error
                };
            } catch (_) {
            // swallow e
            }
        }
    } catch (e) {
        cached.promise = null;
        e.payloadInitError = true;
        throw e;
    }
    if (options?.importMap) {
        cached.payload.importMap = options.importMap;
    }
    return cached.payload;
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
 //# sourceMappingURL=index.js.map
}),
];

//# sourceMappingURL=1c115_payload_dist_487ac5b0._.js.map