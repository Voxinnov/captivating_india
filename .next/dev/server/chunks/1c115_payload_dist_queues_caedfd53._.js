module.exports = [
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/config/global.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getJobStatsGlobal",
    ()=>getJobStatsGlobal,
    "jobStatsGlobalSlug",
    ()=>jobStatsGlobalSlug
]);
const jobStatsGlobalSlug = 'payload-jobs-stats';
const getJobStatsGlobal = (config)=>{
    return {
        slug: jobStatsGlobalSlug,
        admin: {
            group: 'System',
            hidden: true
        },
        fields: [
            {
                name: 'stats',
                type: 'json'
            }
        ]
    };
}; //# sourceMappingURL=global.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/utilities/getCurrentDate.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Globals that are used by our integration tests to modify the behavior of the job system during runtime.
 * This is useful to avoid having to wait for the cron jobs to run, or to pause auto-running jobs.
 */ __turbopack_context__.s([
    "_internal_jobSystemGlobals",
    ()=>_internal_jobSystemGlobals,
    "_internal_resetJobSystemGlobals",
    ()=>_internal_resetJobSystemGlobals,
    "getCurrentDate",
    ()=>getCurrentDate
]);
const _internal_jobSystemGlobals = {
    getCurrentDate: ()=>{
        return new Date();
    },
    shouldAutoRun: true,
    shouldAutoSchedule: true
};
function _internal_resetJobSystemGlobals() {
    _internal_jobSystemGlobals.getCurrentDate = ()=>new Date();
    _internal_jobSystemGlobals.shouldAutoRun = true;
    _internal_jobSystemGlobals.shouldAutoSchedule = true;
}
const getCurrentDate = ()=>{
    return _internal_jobSystemGlobals.getCurrentDate();
}; //# sourceMappingURL=getCurrentDate.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/operations/handleSchedules/defaultAfterSchedule.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultAfterSchedule",
    ()=>defaultAfterSchedule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$global$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/config/global.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$getCurrentDate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/utilities/getCurrentDate.js [app-route] (ecmascript)");
;
;
const defaultAfterSchedule = async ({ jobStats, queueable, req })=>{
    const existingQueuesConfig = jobStats?.stats?.scheduledRuns?.queues?.[queueable.scheduleConfig.queue] || {};
    const queueConfig = {
        ...existingQueuesConfig
    };
    if (queueable.taskConfig) {
        ;
        (queueConfig.tasks ??= {})[queueable.taskConfig.slug] = {
            lastScheduledRun: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$getCurrentDate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentDate"])().toISOString()
        };
    } else if (queueable.workflowConfig) {
        ;
        (queueConfig.workflows ??= {})[queueable.workflowConfig.slug] = {
            lastScheduledRun: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$getCurrentDate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentDate"])().toISOString()
        };
    }
    // Add to payload-jobs-stats global regardless of the status
    if (jobStats) {
        await req.payload.db.updateGlobal({
            slug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$global$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jobStatsGlobalSlug"],
            data: {
                ...jobStats || {},
                stats: {
                    ...jobStats?.stats || {},
                    scheduledRuns: {
                        ...jobStats?.stats?.scheduledRuns || {},
                        queues: {
                            ...jobStats?.stats?.scheduledRuns?.queues || {},
                            [queueable.scheduleConfig.queue]: queueConfig
                        }
                    }
                },
                updatedAt: new Date().toISOString()
            },
            req,
            returning: false
        });
    } else {
        await req.payload.db.createGlobal({
            slug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$global$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jobStatsGlobalSlug"],
            data: {
                createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$getCurrentDate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentDate"])().toISOString(),
                stats: {
                    scheduledRuns: {
                        queues: {
                            [queueable.scheduleConfig.queue]: queueConfig
                        }
                    }
                }
            },
            req,
            returning: false
        });
    }
}; //# sourceMappingURL=defaultAfterSchedule.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/operations/handleSchedules/countRunnableOrActiveJobsForQueue.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Gets all queued jobs that can be run. This means they either:
 * - failed but do not have a definitive error => can be retried
 * - are currently processing
 * - have not been started yet
 */ __turbopack_context__.s([
    "countRunnableOrActiveJobsForQueue",
    ()=>countRunnableOrActiveJobsForQueue
]);
async function countRunnableOrActiveJobsForQueue({ onlyScheduled = false, queue, req, taskSlug, workflowSlug }) {
    const and = [
        {
            queue: {
                equals: queue
            }
        },
        {
            completedAt: {
                exists: false
            }
        },
        {
            error: {
                exists: false
            }
        }
    ];
    if (taskSlug) {
        and.push({
            taskSlug: {
                equals: taskSlug
            }
        });
    } else if (workflowSlug) {
        and.push({
            workflowSlug: {
                equals: workflowSlug
            }
        });
    }
    if (onlyScheduled) {
        and.push({
            'meta.scheduled': {
                equals: true
            }
        });
    }
    const runnableOrActiveJobsForQueue = await req.payload.db.count({
        collection: 'payload-jobs',
        req,
        where: {
            and
        }
    });
    return runnableOrActiveJobsForQueue.totalDocs;
} //# sourceMappingURL=countRunnableOrActiveJobsForQueue.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/operations/handleSchedules/defaultBeforeSchedule.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultBeforeSchedule",
    ()=>defaultBeforeSchedule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$handleSchedules$2f$countRunnableOrActiveJobsForQueue$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/operations/handleSchedules/countRunnableOrActiveJobsForQueue.js [app-route] (ecmascript)");
;
const defaultBeforeSchedule = async ({ queueable, req })=>{
    // All tasks in that queue that are either currently processing or can be run
    const runnableOrActiveJobsForQueue = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$handleSchedules$2f$countRunnableOrActiveJobsForQueue$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["countRunnableOrActiveJobsForQueue"])({
        onlyScheduled: true,
        queue: queueable.scheduleConfig.queue,
        req,
        taskSlug: queueable.taskConfig?.slug,
        workflowSlug: queueable.workflowConfig?.slug
    });
    return {
        input: {},
        shouldSchedule: runnableOrActiveJobsForQueue === 0,
        waitUntil: queueable.waitUntil
    };
}; //# sourceMappingURL=defaultBeforeSchedule.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/operations/handleSchedules/getQueuesWithSchedules.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getQueuesWithSchedules",
    ()=>getQueuesWithSchedules
]);
const getQueuesWithSchedules = ({ jobsConfig })=>{
    const tasksWithSchedules = jobsConfig.tasks?.filter((task)=>{
        return task.schedule?.length;
    }) ?? [];
    const workflowsWithSchedules = jobsConfig.workflows?.filter((workflow)=>{
        return workflow.schedule?.length;
    }) ?? [];
    const queuesWithSchedules = {};
    for (const task of tasksWithSchedules){
        for (const schedule of task.schedule ?? []){
            ;
            (queuesWithSchedules[schedule.queue] ??= {
                schedules: []
            }).schedules.push({
                scheduleConfig: schedule,
                taskConfig: task
            });
        }
    }
    for (const workflow of workflowsWithSchedules){
        for (const schedule of workflow.schedule ?? []){
            ;
            (queuesWithSchedules[schedule.queue] ??= {
                schedules: []
            }).schedules.push({
                scheduleConfig: schedule,
                workflowConfig: workflow
            });
        }
    }
    return queuesWithSchedules;
}; //# sourceMappingURL=getQueuesWithSchedules.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/operations/handleSchedules/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkQueueableTimeConstraints",
    ()=>checkQueueableTimeConstraints,
    "handleSchedules",
    ()=>handleSchedules,
    "scheduleQueueable",
    ()=>scheduleQueueable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$croner$40$9$2e$1$2e$0$2f$node_modules$2f$croner$2f$dist$2f$croner$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/croner@9.1.0/node_modules/croner/dist/croner.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$global$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/config/global.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$handleSchedules$2f$defaultAfterSchedule$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/operations/handleSchedules/defaultAfterSchedule.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$handleSchedules$2f$defaultBeforeSchedule$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/operations/handleSchedules/defaultBeforeSchedule.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$handleSchedules$2f$getQueuesWithSchedules$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/operations/handleSchedules/getQueuesWithSchedules.js [app-route] (ecmascript)");
;
;
;
;
;
async function handleSchedules({ allQueues = false, queue: _queue, req }) {
    const queue = _queue ?? 'default';
    const jobsConfig = req.payload.config.jobs;
    const queuesWithSchedules = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$handleSchedules$2f$getQueuesWithSchedules$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getQueuesWithSchedules"])({
        jobsConfig
    });
    if (Object.keys(queuesWithSchedules).length === 0) {
        // No schedules defined => return early, before fetching jobsStatsGlobal, as the global may not even exist
        return {
            errored: [],
            queued: [],
            skipped: []
        };
    }
    const stats = await req.payload.db.findGlobal({
        slug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$global$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jobStatsGlobalSlug"],
        req
    });
    /**
   * Almost last step! Tasks and Workflows added here just need to be constraint-checked (e.g max. 1 running task etc.),
   * before we can queue them
   */ const queueables = [];
    // Need to know when that particular job was last scheduled in that particular queue
    for (const [queueName, { schedules }] of Object.entries(queuesWithSchedules)){
        if (!allQueues && queueName !== queue) {
            continue;
        }
        for (const schedulable of schedules){
            const queuable = checkQueueableTimeConstraints({
                queue: queueName,
                scheduleConfig: schedulable.scheduleConfig,
                stats,
                taskConfig: schedulable.taskConfig,
                workflowConfig: schedulable.workflowConfig
            });
            if (queuable) {
                queueables.push(queuable);
            }
        }
    }
    const queued = [];
    const skipped = [];
    const errored = [];
    /**
   * Now queue, but check for constraints (= beforeSchedule) first.
   * Default constraint (= defaultBeforeSchedule): max. 1 running / scheduled task or workflow per queue
   */ for (const queueable of queueables){
        const { status } = await scheduleQueueable({
            queueable,
            req,
            stats
        });
        switch(status){
            case 'error':
                errored.push(queueable);
                break;
            case 'skipped':
                skipped.push(queueable);
                break;
            case 'success':
                queued.push(queueable);
                break;
        }
    }
    return {
        errored,
        queued,
        skipped
    };
}
function checkQueueableTimeConstraints({ queue, scheduleConfig, stats, taskConfig, workflowConfig }) {
    const queueScheduleStats = stats?.stats?.scheduledRuns?.queues?.[queue];
    const lastScheduledRun = taskConfig ? queueScheduleStats?.tasks?.[taskConfig.slug]?.lastScheduledRun : queueScheduleStats?.workflows?.[workflowConfig?.slug ?? '']?.lastScheduledRun;
    const nextRun = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$croner$40$9$2e$1$2e$0$2f$node_modules$2f$croner$2f$dist$2f$croner$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Cron"](scheduleConfig.cron).nextRun(lastScheduledRun ?? undefined);
    if (!nextRun) {
        return false;
    }
    return {
        scheduleConfig,
        taskConfig,
        waitUntil: nextRun,
        workflowConfig
    };
}
async function scheduleQueueable({ queueable, req, stats }) {
    if (!queueable.taskConfig && !queueable.workflowConfig) {
        return {
            status: 'error'
        };
    }
    const beforeScheduleFn = queueable.scheduleConfig.hooks?.beforeSchedule;
    const afterScheduleFN = queueable.scheduleConfig.hooks?.afterSchedule;
    try {
        const beforeScheduleResult = await (beforeScheduleFn ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$handleSchedules$2f$defaultBeforeSchedule$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultBeforeSchedule"])({
            // @ts-expect-error we know defaultBeforeSchedule will never call itself => pass null
            defaultBeforeSchedule: beforeScheduleFn ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$handleSchedules$2f$defaultBeforeSchedule$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultBeforeSchedule"] : null,
            jobStats: stats,
            queueable,
            req
        });
        if (!beforeScheduleResult.shouldSchedule) {
            await (afterScheduleFN ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$handleSchedules$2f$defaultAfterSchedule$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultAfterSchedule"])({
                // @ts-expect-error we know defaultAfterchedule will never call itself => pass null
                defaultAfterSchedule: afterScheduleFN ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$handleSchedules$2f$defaultAfterSchedule$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultAfterSchedule"] : null,
                jobStats: stats,
                queueable,
                req,
                status: 'skipped'
            });
            return {
                status: 'skipped'
            };
        }
        const job = await req.payload.jobs.queue({
            input: beforeScheduleResult.input ?? {},
            meta: {
                scheduled: true
            },
            queue: queueable.scheduleConfig.queue,
            req,
            task: queueable?.taskConfig?.slug,
            waitUntil: beforeScheduleResult.waitUntil,
            workflow: queueable.workflowConfig?.slug
        });
        await (afterScheduleFN ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$handleSchedules$2f$defaultAfterSchedule$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultAfterSchedule"])({
            // @ts-expect-error we know defaultAfterchedule will never call itself => pass null
            defaultAfterSchedule: afterScheduleFN ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$handleSchedules$2f$defaultAfterSchedule$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultAfterSchedule"] : null,
            job,
            jobStats: stats,
            queueable,
            req,
            status: 'success'
        });
        return {
            status: 'success'
        };
    } catch (error) {
        await (afterScheduleFN ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$handleSchedules$2f$defaultAfterSchedule$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultAfterSchedule"])({
            // @ts-expect-error we know defaultAfterchedule will never call itself => pass null
            defaultAfterSchedule: afterScheduleFN ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$handleSchedules$2f$defaultAfterSchedule$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultAfterSchedule"] : null,
            error: error,
            jobStats: stats,
            queueable,
            req,
            status: 'error'
        });
        return {
            status: 'error'
        };
    }
} //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/errors/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JobCancelledError",
    ()=>JobCancelledError,
    "TaskError",
    ()=>TaskError,
    "WorkflowError",
    ()=>WorkflowError
]);
class TaskError extends Error {
    args;
    constructor(args){
        super(args.message);
        this.args = args;
    }
}
class WorkflowError extends Error {
    args;
    constructor(args){
        super(args.message);
        this.args = args;
    }
}
class JobCancelledError extends Error {
    args;
    constructor(args){
        super(`Job ${args.job.id} was cancelled`);
        this.args = args;
    }
} //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/utilities/updateJob.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateJob",
    ()=>updateJob,
    "updateJobs",
    ()=>updateJobs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$collection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/config/collection.js [app-route] (ecmascript)");
;
async function updateJob(args) {
    const result = await updateJobs(args);
    if (result) {
        return result[0];
    }
}
async function updateJobs({ id, data, depth, disableTransaction, limit: limitArg, req, returning, sort, where: whereArg }) {
    const limit = id ? 1 : limitArg;
    const where = id ? {
        id: {
            equals: id
        }
    } : whereArg;
    if (depth || req.payload.config?.jobs?.runHooks) {
        const result = await req.payload.update({
            id,
            collection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$collection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jobsCollectionSlug"],
            data,
            depth,
            disableTransaction,
            limit,
            req,
            where
        });
        if (returning === false || !result) {
            return null;
        }
        return result.docs;
    }
    const jobReq = {
        transactionID: req.payload.db.name !== 'mongoose' ? await req.payload.db.beginTransaction() : undefined
    };
    if (typeof data.updatedAt === 'undefined') {
        // Ensure updatedAt date is always updated
        data.updatedAt = new Date().toISOString();
    }
    const args = id ? {
        id,
        data,
        req: jobReq,
        returning
    } : {
        data,
        limit,
        req: jobReq,
        returning,
        sort,
        where: where
    };
    const updatedJobs = await req.payload.db.updateJobs(args);
    if (req.payload.db.name !== 'mongoose' && jobReq.transactionID) {
        await req.payload.db.commitTransaction(jobReq.transactionID);
    }
    if (returning === false || !updatedJobs?.length) {
        return null;
    }
    return updatedJobs.map((updatedJob)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$collection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jobAfterRead"])({
            config: req.payload.config,
            doc: updatedJob
        });
    });
} //# sourceMappingURL=updateJob.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/operations/runJobs/runJob/getUpdateJobFunction.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUpdateJobFunction",
    ()=>getUpdateJobFunction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$errors$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/errors/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$updateJob$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/utilities/updateJob.js [app-route] (ecmascript)");
;
;
function getUpdateJobFunction(job, req) {
    return async (jobData)=>{
        const updatedJob = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$updateJob$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateJob"])({
            id: job.id,
            data: jobData,
            depth: req.payload.config.jobs.depth,
            disableTransaction: true,
            req
        });
        if (!updatedJob) {
            return job;
        }
        // Update job object like this to modify the original object - that way, incoming changes (e.g. taskStatus field that will be re-generated through the hook) will be reflected in the calling function
        for(const key in updatedJob){
            if (key === 'log') {
                // Add all new log entries to the original job.log object. Do not delete any existing log entries.
                // Do not update existing log entries, as existing log entries should be immutable.
                for (const logEntry of updatedJob?.log ?? []){
                    if (!job.log || !job.log.some((entry)=>entry.id === logEntry.id)) {
                        ;
                        (job.log ??= []).push(logEntry);
                    }
                }
            } else {
                ;
                job[key] = updatedJob[key];
            }
        }
        if (updatedJob?.error?.cancelled) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$errors$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JobCancelledError"]({
                job
            });
        }
        return updatedJob;
    };
} //# sourceMappingURL=getUpdateJobFunction.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/operations/runJobs/runJob/importHandlerPath.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTaskHandlerFromConfig",
    ()=>getTaskHandlerFromConfig,
    "importHandlerPath",
    ()=>importHandlerPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dynamicImport$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/dynamicImport.js [app-route] (ecmascript)");
;
async function importHandlerPath(path) {
    let runner;
    const [runnerPath, runnerImportName] = path.split('#');
    let runnerModule;
    try {
        runnerModule = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dynamicImport$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dynamicImport"])(runnerPath);
    } catch (e) {
        throw new Error(`Error importing job queue handler module for path ${path}. This is an advanced feature that may require a sophisticated build pipeline, especially when using it in production or within Next.js, e.g. by calling opening the /api/payload-jobs/run endpoint. You will have to transpile the handler files separately and ensure they are available in the same location when the job is run. If you're using an endpoint to execute your jobs, it's recommended to define your handlers as functions directly in your Payload Config, or use import paths handlers outside of Next.js. Import Error: \n${e instanceof Error ? e.message : 'Unknown error'}`);
    }
    // If the path has indicated an #exportName, try to get it
    if (runnerImportName && runnerModule[runnerImportName]) {
        runner = runnerModule[runnerImportName];
    }
    // If there is a default export, use it
    if (!runner && runnerModule.default) {
        runner = runnerModule.default;
    }
    // Finally, use whatever was imported
    if (!runner) {
        runner = runnerModule;
    }
    return runner;
}
async function getTaskHandlerFromConfig(taskConfig) {
    if (!taskConfig) {
        throw new Error('Task config is required to get the task handler');
    }
    if (typeof taskConfig.handler === 'function') {
        return taskConfig.handler;
    } else {
        return await importHandlerPath(taskConfig.handler);
    }
} //# sourceMappingURL=importHandlerPath.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/errors/calculateBackoffWaitUntil.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateBackoffWaitUntil",
    ()=>calculateBackoffWaitUntil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$getCurrentDate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/utilities/getCurrentDate.js [app-route] (ecmascript)");
;
function calculateBackoffWaitUntil({ retriesConfig, totalTried }) {
    let waitUntil = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$getCurrentDate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentDate"])();
    if (typeof retriesConfig === 'object') {
        if (retriesConfig.backoff) {
            if (retriesConfig.backoff.type === 'fixed') {
                waitUntil = retriesConfig.backoff.delay ? new Date((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$getCurrentDate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentDate"])().getTime() + retriesConfig.backoff.delay) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$getCurrentDate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentDate"])();
            } else if (retriesConfig.backoff.type === 'exponential') {
                // 2 ^ (attempts - 1) * delay (current attempt is not included in totalTried, thus no need for -1)
                const delay = retriesConfig.backoff.delay ? retriesConfig.backoff.delay : 0;
                waitUntil = new Date((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$getCurrentDate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentDate"])().getTime() + Math.pow(2, totalTried) * delay);
            }
        }
    }
    /*
  const differenceInMSBetweenNowAndWaitUntil = waitUntil.getTime() - getCurrentDate().getTime()

  const differenceInSBetweenNowAndWaitUntil = differenceInMSBetweenNowAndWaitUntil / 1000
  console.log('Calculated backoff', {
    differenceInMSBetweenNowAndWaitUntil,
    differenceInSBetweenNowAndWaitUntil,
    retriesConfig,
    totalTried,
  })*/ return waitUntil;
} //# sourceMappingURL=calculateBackoffWaitUntil.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/errors/getWorkflowRetryBehavior.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getWorkflowRetryBehavior",
    ()=>getWorkflowRetryBehavior
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$errors$2f$calculateBackoffWaitUntil$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/errors/calculateBackoffWaitUntil.js [app-route] (ecmascript)");
;
function getWorkflowRetryBehavior({ job, retriesConfig }) {
    const maxWorkflowRetries = typeof retriesConfig === 'object' ? retriesConfig.attempts : retriesConfig;
    if (maxWorkflowRetries !== undefined && maxWorkflowRetries !== null && job.totalTried >= maxWorkflowRetries) {
        return {
            hasFinalError: true,
            maxWorkflowRetries
        };
    }
    if (!retriesConfig) {
        // No retries provided => assuming no task reached max retries, we can retry
        return {
            hasFinalError: false,
            maxWorkflowRetries: undefined,
            waitUntil: undefined
        };
    }
    // Job will retry. Let's determine when!
    const waitUntil = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$errors$2f$calculateBackoffWaitUntil$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculateBackoffWaitUntil"])({
        retriesConfig,
        totalTried: job.totalTried ?? 0
    });
    return {
        hasFinalError: false,
        maxWorkflowRetries,
        waitUntil
    };
} //# sourceMappingURL=getWorkflowRetryBehavior.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/errors/handleTaskError.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleTaskError",
    ()=>handleTaskError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bson$2d$objectid$40$2$2e$0$2e$4$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/bson-objectid@2.0.4/node_modules/bson-objectid/objectid.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$getCurrentDate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/utilities/getCurrentDate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$errors$2f$calculateBackoffWaitUntil$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/errors/calculateBackoffWaitUntil.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$errors$2f$getWorkflowRetryBehavior$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/errors/getWorkflowRetryBehavior.js [app-route] (ecmascript)");
;
;
;
;
const ObjectId = 'default' in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bson$2d$objectid$40$2$2e$0$2e$4$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bson$2d$objectid$40$2$2e$0$2e$4$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].default : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bson$2d$objectid$40$2$2e$0$2e$4$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
async function handleTaskError({ error, req, silent = false, updateJob }) {
    const { executedAt, input, job, output, parent, retriesConfig, taskConfig, taskID, taskSlug, taskStatus, workflowConfig } = error.args;
    if (taskConfig?.onFail) {
        await taskConfig.onFail({
            input,
            job,
            req,
            taskStatus
        });
    }
    const errorJSON = {
        name: error.name,
        cancelled: Boolean('cancelled' in error && error.cancelled),
        message: error.message,
        stack: error.stack
    };
    const currentDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$getCurrentDate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentDate"])();
    if (job.waitUntil) {
        // Check if waitUntil is in the past
        const waitUntil = new Date(job.waitUntil);
        if (waitUntil < currentDate) {
            // Outdated waitUntil, remove it
            delete job.waitUntil;
        }
    }
    let maxRetries = 0;
    if (retriesConfig?.attempts === undefined || retriesConfig?.attempts === null) {
        // Inherit retries from workflow config, if they are undefined and the workflow config has retries configured
        if (workflowConfig.retries !== undefined && workflowConfig.retries !== null) {
            maxRetries = typeof workflowConfig.retries === 'object' ? typeof workflowConfig.retries.attempts === 'number' ? workflowConfig.retries.attempts : 0 : workflowConfig.retries;
        } else {
            maxRetries = 0;
        }
    } else {
        maxRetries = retriesConfig.attempts;
    }
    const taskLogToPush = {
        id: new ObjectId().toHexString(),
        completedAt: currentDate.toISOString(),
        error: errorJSON,
        executedAt: executedAt.toISOString(),
        input,
        output: output ?? {},
        parent: req.payload.config.jobs.addParentToTaskLog ? parent : undefined,
        state: 'failed',
        taskID,
        taskSlug
    };
    if (!taskStatus?.complete && (taskStatus?.totalTried ?? 0) >= maxRetries) {
        /**
     * Task reached max retries => workflow will not retry
     */ await updateJob({
            error: errorJSON,
            hasError: true,
            log: {
                $push: taskLogToPush
            },
            processing: false,
            totalTried: (job.totalTried ?? 0) + 1,
            waitUntil: job.waitUntil
        });
        if (!silent || typeof silent === 'object' && !silent.error) {
            req.payload.logger.error({
                err: error,
                job,
                msg: `Error running task ${taskID}. Attempt ${job.totalTried} - max retries reached`,
                taskSlug
            });
        }
        return {
            hasFinalError: true
        };
    }
    /**
   * Task can retry:
   * - If workflow can retry, allow it to retry
   * - If workflow reached max retries, do not retry and set final error
   */ // First set task waitUntil - if the workflow waitUntil is later, it will be updated later
    const taskWaitUntil = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$errors$2f$calculateBackoffWaitUntil$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculateBackoffWaitUntil"])({
        retriesConfig,
        totalTried: taskStatus?.totalTried ?? 0
    });
    // Update job's waitUntil only if this waitUntil is later than the current one
    if (!job.waitUntil || taskWaitUntil > new Date(job.waitUntil)) {
        job.waitUntil = taskWaitUntil.toISOString();
    }
    const { hasFinalError, maxWorkflowRetries, waitUntil } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$errors$2f$getWorkflowRetryBehavior$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getWorkflowRetryBehavior"])({
        job,
        retriesConfig: workflowConfig.retries
    });
    if (!silent || typeof silent === 'object' && !silent.error) {
        req.payload.logger.error({
            err: error,
            job,
            msg: `Error running task ${taskID}. Attempt ${job.totalTried + 1}${maxWorkflowRetries !== undefined ? '/' + (maxWorkflowRetries + 1) : ''}`,
            taskSlug
        });
    }
    // Update job's waitUntil only if this waitUntil is later than the current one
    if (waitUntil && (!job.waitUntil || waitUntil > new Date(job.waitUntil))) {
        job.waitUntil = waitUntil.toISOString();
    }
    // Tasks update the job if they error - but in case there is an unhandled error (e.g. in the workflow itself, not in a task)
    // we need to ensure the job is updated to reflect the error
    await updateJob({
        error: hasFinalError ? errorJSON : undefined,
        hasError: hasFinalError,
        log: {
            $push: taskLogToPush
        },
        processing: false,
        totalTried: (job.totalTried ?? 0) + 1,
        waitUntil: job.waitUntil
    });
    return {
        hasFinalError
    };
} //# sourceMappingURL=handleTaskError.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/errors/handleWorkflowError.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleWorkflowError",
    ()=>handleWorkflowError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$getCurrentDate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/utilities/getCurrentDate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$errors$2f$getWorkflowRetryBehavior$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/errors/getWorkflowRetryBehavior.js [app-route] (ecmascript)");
;
;
async function handleWorkflowError({ error, req, silent = false, updateJob }) {
    const { job, workflowConfig } = error.args;
    const errorJSON = {
        name: error.name,
        cancelled: Boolean('cancelled' in error && error.cancelled),
        message: error.message,
        stack: error.stack
    };
    const { hasFinalError, maxWorkflowRetries, waitUntil } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$errors$2f$getWorkflowRetryBehavior$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getWorkflowRetryBehavior"])({
        job,
        retriesConfig: workflowConfig.retries
    });
    if (!hasFinalError) {
        if (job.waitUntil) {
            // Check if waitUntil is in the past
            const waitUntil = new Date(job.waitUntil);
            if (waitUntil < (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$getCurrentDate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentDate"])()) {
                // Outdated waitUntil, remove it
                delete job.waitUntil;
            }
        }
        // Update job's waitUntil only if this waitUntil is later than the current one
        if (waitUntil && (!job.waitUntil || waitUntil > new Date(job.waitUntil))) {
            job.waitUntil = waitUntil.toISOString();
        }
    }
    const jobLabel = job.workflowSlug || `Task: ${job.taskSlug}`;
    if (!silent || typeof silent === 'object' && !silent.error) {
        req.payload.logger.error({
            err: error,
            msg: `Error running job ${jobLabel} id: ${job.id} attempt ${job.totalTried + 1}${maxWorkflowRetries !== undefined ? '/' + (maxWorkflowRetries + 1) : ''}`
        });
    }
    // Tasks update the job if they error - but in case there is an unhandled error (e.g. in the workflow itself, not in a task)
    // we need to ensure the job is updated to reflect the error
    await updateJob({
        error: errorJSON,
        hasError: hasFinalError,
        processing: false,
        totalTried: (job.totalTried ?? 0) + 1,
        waitUntil: job.waitUntil
    });
    return {
        hasFinalError
    };
} //# sourceMappingURL=handleWorkflowError.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/operations/runJobs/runJob/getRunTaskFunction.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRunTaskFunction",
    ()=>getRunTaskFunction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bson$2d$objectid$40$2$2e$0$2e$4$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/bson-objectid@2.0.4/node_modules/bson-objectid/objectid.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$errors$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/errors/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$getCurrentDate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/utilities/getCurrentDate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$importHandlerPath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/operations/runJobs/runJob/importHandlerPath.js [app-route] (ecmascript)");
;
;
;
;
const ObjectId = 'default' in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bson$2d$objectid$40$2$2e$0$2e$4$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bson$2d$objectid$40$2$2e$0$2e$4$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].default : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bson$2d$objectid$40$2$2e$0$2e$4$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
const getRunTaskFunction = (job, workflowConfig, req, isInline, updateJob, parent)=>{
    const jobConfig = req.payload.config.jobs;
    const runTask = (taskSlug)=>async (taskID, { input, retries, task })=>{
            const executedAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$getCurrentDate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentDate"])();
            let taskConfig;
            if (!isInline) {
                taskConfig = jobConfig.tasks?.length && jobConfig.tasks.find((t)=>t.slug === taskSlug);
                if (!taskConfig) {
                    throw new Error(`Task ${taskSlug} not found in workflow ${job.workflowSlug}`);
                }
            }
            const retriesConfigFromPropsNormalized = retries == undefined || retries == null ? {} : typeof retries === 'number' ? {
                attempts: retries
            } : retries;
            const retriesConfigFromTaskConfigNormalized = taskConfig ? typeof taskConfig.retries === 'number' ? {
                attempts: taskConfig.retries
            } : taskConfig.retries : {};
            const finalRetriesConfig = {
                ...retriesConfigFromTaskConfigNormalized,
                ...retriesConfigFromPropsNormalized
            };
            const taskStatus = job?.taskStatus?.[taskSlug] ? job.taskStatus[taskSlug][taskID] : null;
            // Handle restoration of task if it succeeded in a previous run
            if (taskStatus && taskStatus.complete === true) {
                let shouldRestore = true;
                if (finalRetriesConfig?.shouldRestore === false) {
                    shouldRestore = false;
                } else if (typeof finalRetriesConfig?.shouldRestore === 'function') {
                    shouldRestore = await finalRetriesConfig.shouldRestore({
                        input,
                        job,
                        req,
                        taskStatus
                    });
                }
                if (shouldRestore) {
                    return taskStatus.output;
                }
            }
            const runner = isInline ? task : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$importHandlerPath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTaskHandlerFromConfig"])(taskConfig);
            if (!runner || typeof runner !== 'function') {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$errors$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TaskError"]({
                    executedAt,
                    input,
                    job,
                    message: isInline ? `Inline task with ID ${taskID} does not have a valid handler.` : `Task with slug ${taskSlug} in workflow ${job.workflowSlug} does not have a valid handler.`,
                    parent,
                    retriesConfig: finalRetriesConfig,
                    taskConfig,
                    taskID,
                    taskSlug,
                    taskStatus,
                    workflowConfig
                });
            }
            let taskHandlerResult;
            let output = {};
            try {
                taskHandlerResult = await runner({
                    inlineTask: getRunTaskFunction(job, workflowConfig, req, true, updateJob, {
                        taskID,
                        taskSlug
                    }),
                    input,
                    job: job,
                    req,
                    tasks: getRunTaskFunction(job, workflowConfig, req, false, updateJob, {
                        taskID,
                        taskSlug
                    })
                });
            } catch (err) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$errors$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TaskError"]({
                    executedAt,
                    input: input,
                    job,
                    message: err.message || 'Task handler threw an error',
                    output,
                    parent,
                    retriesConfig: finalRetriesConfig,
                    taskConfig,
                    taskID,
                    taskSlug,
                    taskStatus,
                    workflowConfig
                });
            }
            if (taskHandlerResult.state === 'failed') {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$errors$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TaskError"]({
                    executedAt,
                    input: input,
                    job,
                    message: taskHandlerResult.errorMessage ?? 'Task handler returned a failed state',
                    output,
                    parent,
                    retriesConfig: finalRetriesConfig,
                    taskConfig,
                    taskID,
                    taskSlug,
                    taskStatus,
                    workflowConfig
                });
            } else {
                output = taskHandlerResult.output;
            }
            if (taskConfig?.onSuccess) {
                await taskConfig.onSuccess({
                    input,
                    job,
                    req,
                    taskStatus
                });
            }
            const newLogItem = {
                id: new ObjectId().toHexString(),
                completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$getCurrentDate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentDate"])().toISOString(),
                executedAt: executedAt.toISOString(),
                input,
                output,
                parent: jobConfig.addParentToTaskLog ? parent : undefined,
                state: 'succeeded',
                taskID,
                taskSlug
            };
            await updateJob({
                log: {
                    $push: newLogItem
                },
                // Set to null to skip main row update on postgres. 2 => 1 db round trips
                updatedAt: null
            });
            return output;
        };
    if (isInline) {
        return runTask('inline');
    } else {
        const tasks = {};
        for (const task of jobConfig.tasks ?? []){
            tasks[task.slug] = runTask(task.slug);
        }
        return tasks;
    }
}; //# sourceMappingURL=getRunTaskFunction.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/operations/runJobs/runJob/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "runJob",
    ()=>runJob
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$errors$2f$handleTaskError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/errors/handleTaskError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$errors$2f$handleWorkflowError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/errors/handleWorkflowError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$errors$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/errors/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$getCurrentDate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/utilities/getCurrentDate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$getRunTaskFunction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/operations/runJobs/runJob/getRunTaskFunction.js [app-route] (ecmascript)");
;
;
;
;
;
const runJob = async ({ job, req, silent, updateJob, workflowConfig, workflowHandler })=>{
    // Run the job
    try {
        await workflowHandler({
            inlineTask: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$getRunTaskFunction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRunTaskFunction"])(job, workflowConfig, req, true, updateJob),
            job,
            req,
            tasks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$getRunTaskFunction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRunTaskFunction"])(job, workflowConfig, req, false, updateJob)
        });
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$errors$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JobCancelledError"]) {
            throw error // Job cancellation is handled in a top-level error handler, as higher up code may themselves throw this error
            ;
        }
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$errors$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TaskError"]) {
            const { hasFinalError } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$errors$2f$handleTaskError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleTaskError"])({
                error,
                req,
                silent,
                updateJob
            });
            return {
                status: hasFinalError ? 'error-reached-max-retries' : 'error'
            };
        }
        const { hasFinalError } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$errors$2f$handleWorkflowError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleWorkflowError"])({
            error: error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$errors$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WorkflowError"] ? error : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$errors$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WorkflowError"]({
                job,
                message: typeof error === 'object' && error && 'message' in error ? error.message : 'An unhandled error occurred',
                workflowConfig
            }),
            req,
            silent,
            updateJob
        });
        return {
            status: hasFinalError ? 'error-reached-max-retries' : 'error'
        };
    }
    // Workflow has completed successfully
    // Do not update the job log here, as that would result in unnecessary db calls when using postgres.
    // Solely updating simple fields here will result in optimized db calls.
    // Job log modifications are already updated at the end of the runTask function.
    await updateJob({
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$getCurrentDate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentDate"])().toISOString(),
        processing: false,
        totalTried: (job.totalTried ?? 0) + 1
    });
    return {
        status: 'success'
    };
}; //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/operations/runJobs/runJSONJob/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "runJSONJob",
    ()=>runJSONJob
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$errors$2f$handleWorkflowError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/errors/handleWorkflowError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$errors$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/errors/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$getCurrentDate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/utilities/getCurrentDate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$getRunTaskFunction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/operations/runJobs/runJob/getRunTaskFunction.js [app-route] (ecmascript)");
;
;
;
;
const runJSONJob = async ({ job, req, silent = false, updateJob, workflowConfig, workflowHandler })=>{
    const stepsToRun = [];
    for (const step of workflowHandler){
        if ('task' in step) {
            if (job?.taskStatus?.[step.task]?.[step.id]?.complete) {
                continue;
            }
        } else {
            if (job?.taskStatus?.['inline']?.[step.id]?.complete) {
                continue;
            }
        }
        if (step.condition && !step.condition({
            job
        })) {
            continue;
        }
        stepsToRun.push(step);
    }
    const tasks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$getRunTaskFunction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRunTaskFunction"])(job, workflowConfig, req, false, updateJob);
    const inlineTask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$getRunTaskFunction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRunTaskFunction"])(job, workflowConfig, req, true, updateJob);
    // Run the job
    try {
        await Promise.all(stepsToRun.map(async (step)=>{
            if ('task' in step) {
                await tasks[step.task](step.id, {
                    input: step.input ? step.input({
                        job
                    }) : {},
                    retries: step.retries
                });
            } else {
                await inlineTask(step.id, {
                    retries: step.retries,
                    task: step.inlineTask
                });
            }
        }));
    } catch (error) {
        const { hasFinalError } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$errors$2f$handleWorkflowError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleWorkflowError"])({
            error: error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$errors$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WorkflowError"] ? error : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$errors$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WorkflowError"]({
                job,
                message: typeof error === 'object' && error && 'message' in error ? error.message : 'An unhandled error occurred',
                workflowConfig
            }),
            silent,
            req,
            updateJob
        });
        return {
            status: hasFinalError ? 'error-reached-max-retries' : 'error'
        };
    }
    // Check if workflow has completed
    let workflowCompleted = false;
    for (const [slug, map] of Object.entries(job.taskStatus)){
        for (const [id, taskStatus] of Object.entries(map)){
            if (taskStatus.complete) {
                const step = workflowHandler.find((step)=>{
                    if ('task' in step) {
                        return step.task === slug && step.id === id;
                    } else {
                        return step.id === id && slug === 'inline';
                    }
                });
                if (step?.completesJob) {
                    workflowCompleted = true;
                    break;
                }
            }
        }
    }
    if (workflowCompleted) {
        await updateJob({
            completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$getCurrentDate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentDate"])().toISOString(),
            processing: false,
            totalTried: (job.totalTried ?? 0) + 1
        });
        return {
            status: 'success'
        };
    } else {
        // Retry the job - no need to bump processing or totalTried as this does not count as a retry. A condition of a different task might have just opened up!
        return await runJSONJob({
            job,
            req,
            updateJob,
            workflowConfig,
            workflowHandler
        });
    }
}; //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/operations/runJobs/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "runJobs",
    ()=>runJobs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/Forbidden.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$collection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/config/collection.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$errors$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/errors/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$getCurrentDate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/utilities/getCurrentDate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$updateJob$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/utilities/updateJob.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$getUpdateJobFunction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/operations/runJobs/runJob/getUpdateJobFunction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$importHandlerPath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/operations/runJobs/runJob/importHandlerPath.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/operations/runJobs/runJob/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJSONJob$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/operations/runJobs/runJSONJob/index.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const runJobs = async (args)=>{
    const { id, allQueues = false, limit = 10, overrideAccess, processingOrder, queue = 'default', req, req: { payload, payload: { config: { jobs: jobsConfig } } }, sequential, silent = false, where: whereFromProps } = args;
    if (!overrideAccess) {
        /**
     * By default, jobsConfig.access.run will be `defaultAccess` which is a function that returns `true` if the user is logged in.
     */ const accessFn = jobsConfig?.access?.run ?? (()=>true);
        const hasAccess = await accessFn({
            req
        });
        if (!hasAccess) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Forbidden"](req.t);
        }
    }
    const and = [
        {
            completedAt: {
                exists: false
            }
        },
        {
            hasError: {
                not_equals: true
            }
        },
        {
            processing: {
                equals: false
            }
        },
        {
            or: [
                {
                    waitUntil: {
                        exists: false
                    }
                },
                {
                    waitUntil: {
                        less_than: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$getCurrentDate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentDate"])().toISOString()
                    }
                }
            ]
        }
    ];
    if (allQueues !== true) {
        and.push({
            queue: {
                equals: queue ?? 'default'
            }
        });
    }
    if (whereFromProps) {
        and.push(whereFromProps);
    }
    // Find all jobs and ensure we set job to processing: true as early as possible to reduce the chance of
    // the same job being picked up by another worker
    let jobs = [];
    if (id) {
        // Only one job to run
        const job = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$updateJob$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateJob"])({
            id,
            data: {
                processing: true
            },
            depth: jobsConfig.depth,
            disableTransaction: true,
            req,
            returning: true
        });
        if (job) {
            jobs = [
                job
            ];
        }
    } else {
        let defaultProcessingOrder = payload.collections[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$collection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jobsCollectionSlug"]]?.config.defaultSort ?? 'createdAt';
        const processingOrderConfig = jobsConfig.processingOrder;
        if (typeof processingOrderConfig === 'function') {
            defaultProcessingOrder = await processingOrderConfig(args);
        } else if (typeof processingOrderConfig === 'object' && !Array.isArray(processingOrderConfig)) {
            if (!allQueues && queue && processingOrderConfig.queues && processingOrderConfig.queues[queue]) {
                defaultProcessingOrder = processingOrderConfig.queues[queue];
            } else if (processingOrderConfig.default) {
                defaultProcessingOrder = processingOrderConfig.default;
            }
        } else if (typeof processingOrderConfig === 'string') {
            defaultProcessingOrder = processingOrderConfig;
        }
        const updatedDocs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$updateJob$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateJobs"])({
            data: {
                processing: true
            },
            depth: jobsConfig.depth,
            disableTransaction: true,
            limit,
            req,
            returning: true,
            sort: processingOrder ?? defaultProcessingOrder,
            where: {
                and
            }
        });
        if (updatedDocs) {
            jobs = updatedDocs;
        }
    }
    /**
   * Just for logging purposes, we want to know how many jobs are new and how many are existing (= already been tried).
   * This is only for logs - in the end we still want to run all jobs, regardless of whether they are new or existing.
   */ const { existingJobs, newJobs } = jobs.reduce((acc, job)=>{
        if (job.totalTried > 0) {
            acc.existingJobs.push(job);
        } else {
            acc.newJobs.push(job);
        }
        return acc;
    }, {
        existingJobs: [],
        newJobs: []
    });
    if (!jobs.length) {
        return {
            noJobsRemaining: true,
            remainingJobsFromQueried: 0
        };
    }
    if (!silent || typeof silent === 'object' && !silent.info) {
        payload.logger.info({
            msg: `Running ${jobs.length} jobs.`,
            new: newJobs?.length,
            retrying: existingJobs?.length
        });
    }
    const successfullyCompletedJobs = [];
    const runSingleJob = async (job)=>{
        if (!job.workflowSlug && !job.taskSlug) {
            throw new Error('Job must have either a workflowSlug or a taskSlug');
        }
        const jobReq = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isolateObjectProperty"])(req, 'transactionID');
        const workflowConfig = job.workflowSlug && jobsConfig.workflows?.length ? jobsConfig.workflows.find(({ slug })=>slug === job.workflowSlug) : {
            slug: 'singleTask',
            handler: async ({ job, tasks })=>{
                await tasks[job.taskSlug]('1', {
                    input: job.input
                });
            }
        };
        if (!workflowConfig) {
            return {
                id: job.id,
                result: {
                    status: 'error'
                }
            } // Skip jobs with no workflow configuration
            ;
        }
        try {
            const updateJob = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$getUpdateJobFunction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUpdateJobFunction"])(job, jobReq);
            // the runner will either be passed to the config
            // OR it will be a path, which we will need to import via eval to avoid
            // Next.js compiler dynamic import expression errors
            let workflowHandler;
            if (typeof workflowConfig.handler === 'function' || typeof workflowConfig.handler === 'object' && Array.isArray(workflowConfig.handler)) {
                workflowHandler = workflowConfig.handler;
            } else {
                workflowHandler = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$importHandlerPath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["importHandlerPath"])(workflowConfig.handler);
                if (!workflowHandler) {
                    const jobLabel = job.workflowSlug || `Task: ${job.taskSlug}`;
                    const errorMessage = `Can't find runner while importing with the path ${workflowConfig.handler} in job type ${jobLabel}.`;
                    if (!silent || typeof silent === 'object' && !silent.error) {
                        payload.logger.error(errorMessage);
                    }
                    await updateJob({
                        error: {
                            error: errorMessage
                        },
                        hasError: true,
                        processing: false
                    });
                    return {
                        id: job.id,
                        result: {
                            status: 'error-reached-max-retries'
                        }
                    };
                }
            }
            if (typeof workflowHandler === 'function') {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runJob"])({
                    job,
                    req: jobReq,
                    silent,
                    updateJob,
                    workflowConfig,
                    workflowHandler
                });
                if (result.status === 'success') {
                    successfullyCompletedJobs.push(job.id);
                }
                return {
                    id: job.id,
                    result
                };
            } else {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJSONJob$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runJSONJob"])({
                    job,
                    req: jobReq,
                    silent,
                    updateJob,
                    workflowConfig,
                    workflowHandler
                });
                if (result.status === 'success') {
                    successfullyCompletedJobs.push(job.id);
                }
                return {
                    id: job.id,
                    result
                };
            }
        } catch (error) {
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$errors$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JobCancelledError"]) {
                return {
                    id: job.id,
                    result: {
                        status: 'error-reached-max-retries'
                    }
                };
            }
            throw error;
        }
    };
    let resultsArray = [];
    if (sequential) {
        for (const job of jobs){
            const result = await runSingleJob(job);
            if (result) {
                resultsArray.push(result);
            }
        }
    } else {
        const jobPromises = jobs.map(runSingleJob);
        resultsArray = await Promise.all(jobPromises);
    }
    if (jobsConfig.deleteJobOnComplete && successfullyCompletedJobs.length) {
        try {
            if (jobsConfig.runHooks) {
                await payload.delete({
                    collection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$collection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jobsCollectionSlug"],
                    depth: 0,
                    disableTransaction: true,
                    where: {
                        id: {
                            in: successfullyCompletedJobs
                        }
                    }
                });
            } else {
                await payload.db.deleteMany({
                    collection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$collection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jobsCollectionSlug"],
                    where: {
                        id: {
                            in: successfullyCompletedJobs
                        }
                    }
                });
            }
        } catch (err) {
            if (!silent || typeof silent === 'object' && !silent.error) {
                payload.logger.error({
                    err,
                    msg: `Failed to delete jobs ${successfullyCompletedJobs.join(', ')} on complete`
                });
            }
        }
    }
    const resultsObject = resultsArray.reduce((acc, cur)=>{
        if (cur !== null) {
            // Check if there's a valid result to include
            acc[cur.id] = cur.result;
        }
        return acc;
    }, {});
    let remainingJobsFromQueried = 0;
    for(const jobID in resultsObject){
        const jobResult = resultsObject[jobID];
        if (jobResult?.status === 'error') {
            remainingJobsFromQueried++; // Can be retried
        }
    }
    return {
        jobStatus: resultsObject,
        remainingJobsFromQueried
    };
}; //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/endpoints/run.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "configHasJobs",
    ()=>configHasJobs,
    "runJobsEndpoint",
    ()=>runJobsEndpoint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/operations/runJobs/index.js [app-route] (ecmascript)");
;
const runJobsEndpoint = {
    handler: async (req)=>{
        const jobsConfig = req.payload.config.jobs;
        if (!configHasJobs(jobsConfig)) {
            return Response.json({
                message: 'No jobs to run.'
            }, {
                status: 200
            });
        }
        const accessFn = jobsConfig.access?.run ?? (()=>true);
        const hasAccess = await accessFn({
            req
        });
        if (!hasAccess) {
            return Response.json({
                message: req.i18n.t('error:unauthorized')
            }, {
                status: 401
            });
        }
        const { allQueues, disableScheduling: disableSchedulingParam, limit, queue, silent: silentParam } = req.query;
        const silent = silentParam === 'true';
        const shouldHandleSchedules = disableSchedulingParam !== 'true';
        const runAllQueues = allQueues && !(typeof allQueues === 'string' && allQueues === 'false');
        if (shouldHandleSchedules && jobsConfig.scheduling) {
            // If should handle schedules and schedules are defined
            await req.payload.jobs.handleSchedules({
                allQueues: runAllQueues,
                queue,
                req
            });
        }
        const runJobsArgs = {
            queue,
            req,
            // Access is validated above, so it's safe to override here
            allQueues: runAllQueues,
            overrideAccess: true,
            silent
        };
        if (typeof queue === 'string') {
            runJobsArgs.queue = queue;
        }
        const parsedLimit = Number(limit);
        if (!isNaN(parsedLimit)) {
            runJobsArgs.limit = parsedLimit;
        }
        let noJobsRemaining = false;
        let remainingJobsFromQueried = 0;
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runJobs"])(runJobsArgs);
            noJobsRemaining = !!result.noJobsRemaining;
            remainingJobsFromQueried = result.remainingJobsFromQueried;
        } catch (err) {
            req.payload.logger.error({
                err,
                msg: 'There was an error running jobs:',
                queue: runJobsArgs.queue
            });
            return Response.json({
                message: req.i18n.t('error:unknown'),
                noJobsRemaining: true,
                remainingJobsFromQueried
            }, {
                status: 500
            });
        }
        return Response.json({
            message: req.i18n.t('general:success'),
            noJobsRemaining,
            remainingJobsFromQueried
        }, {
            status: 200
        });
    },
    method: 'get',
    path: '/run'
};
const configHasJobs = (jobsConfig)=>{
    return Boolean(jobsConfig.tasks?.length || jobsConfig.workflows?.length);
}; //# sourceMappingURL=run.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/endpoints/handleSchedules.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleSchedulesJobsEndpoint",
    ()=>handleSchedulesJobsEndpoint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$handleSchedules$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/operations/handleSchedules/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$endpoints$2f$run$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/endpoints/run.js [app-route] (ecmascript)");
;
;
const handleSchedulesJobsEndpoint = {
    handler: async (req)=>{
        const jobsConfig = req.payload.config.jobs;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$endpoints$2f$run$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["configHasJobs"])(jobsConfig)) {
            return Response.json({
                message: 'No jobs to schedule.'
            }, {
                status: 200
            });
        }
        const accessFn = jobsConfig.access?.run ?? (()=>true);
        const hasAccess = await accessFn({
            req
        });
        if (!hasAccess) {
            return Response.json({
                message: req.i18n.t('error:unauthorized')
            }, {
                status: 401
            });
        }
        if (!jobsConfig.scheduling) {
            // There is no reason to call the handleSchedules endpoint if the stats global is not enabled (= no schedules defined)
            return Response.json({
                message: 'Cannot handle schedules because no tasks or workflows with schedules are defined.'
            }, {
                status: 500
            });
        }
        const { allQueues, queue } = req.query;
        const runAllQueues = allQueues && !(typeof allQueues === 'string' && allQueues === 'false');
        const { errored, queued, skipped } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$handleSchedules$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleSchedules"])({
            allQueues: runAllQueues,
            queue,
            req
        });
        return Response.json({
            errored,
            message: req.i18n.t('general:success'),
            queued,
            skipped
        }, {
            status: 200
        });
    },
    method: 'get',
    path: '/handle-schedules'
}; //# sourceMappingURL=handleSchedules.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/utilities/getJobTaskStatus.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getJobTaskStatus",
    ()=>getJobTaskStatus
]);
const getJobTaskStatus = ({ jobLog })=>{
    const taskStatus = {};
    if (!jobLog || !Array.isArray(jobLog)) {
        return taskStatus;
    }
    // First, add (in order) the steps from the config to
    // our status map
    for (const loggedJob of jobLog){
        if (!taskStatus[loggedJob.taskSlug]) {
            taskStatus[loggedJob.taskSlug] = {};
        }
        if (!taskStatus[loggedJob.taskSlug]?.[loggedJob.taskID]) {
            taskStatus[loggedJob.taskSlug][loggedJob.taskID] = {
                complete: loggedJob.state === 'succeeded',
                input: loggedJob.input,
                output: loggedJob.output,
                taskSlug: loggedJob.taskSlug,
                totalTried: 1
            };
        } else {
            const newTaskStatus = taskStatus[loggedJob.taskSlug][loggedJob.taskID];
            newTaskStatus.totalTried += 1;
            if (loggedJob.state === 'succeeded') {
                newTaskStatus.complete = true;
                // As the task currently saved in taskStatus has likely failed and thus has no
                // Output data, we need to update it with the new data from the successful task
                newTaskStatus.output = loggedJob.output;
                newTaskStatus.input = loggedJob.input;
                newTaskStatus.taskSlug = loggedJob.taskSlug;
            }
            taskStatus[loggedJob.taskSlug][loggedJob.taskID] = newTaskStatus;
        }
    }
    return taskStatus;
}; //# sourceMappingURL=getJobTaskStatus.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/config/collection.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultJobsCollection",
    ()=>getDefaultJobsCollection,
    "jobAfterRead",
    ()=>jobAfterRead,
    "jobsCollectionSlug",
    ()=>jobsCollectionSlug
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$endpoints$2f$handleSchedules$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/endpoints/handleSchedules.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$endpoints$2f$run$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/endpoints/run.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$getJobTaskStatus$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/utilities/getJobTaskStatus.js [app-route] (ecmascript)");
;
;
;
const jobsCollectionSlug = 'payload-jobs';
const getDefaultJobsCollection = (jobsConfig)=>{
    const workflowSlugs = new Set();
    const taskSlugs = new Set([
        'inline'
    ]);
    if (jobsConfig.workflows?.length) {
        jobsConfig.workflows.forEach((workflow)=>{
            workflowSlugs.add(workflow.slug);
        });
    }
    if (jobsConfig.tasks?.length) {
        jobsConfig.tasks.forEach((task)=>{
            if (workflowSlugs.has(task.slug)) {
                throw new Error(`Task slug "${task.slug}" is already used by a workflow. No tasks are allowed to have the same slug as a workflow.`);
            }
            taskSlugs.add(task.slug);
        });
    }
    const logFields = [
        {
            name: 'executedAt',
            type: 'date',
            required: true
        },
        {
            name: 'completedAt',
            type: 'date',
            required: true
        },
        {
            name: 'taskSlug',
            type: 'select',
            options: [
                ...taskSlugs
            ],
            required: true
        },
        {
            name: 'taskID',
            type: 'text',
            required: true
        },
        /**
     * @todo make required in 4.0
     */ {
            name: 'input',
            type: 'json'
        },
        {
            name: 'output',
            type: 'json'
        },
        {
            name: 'state',
            type: 'radio',
            options: [
                'failed',
                'succeeded'
            ],
            required: true
        },
        {
            name: 'error',
            type: 'json',
            admin: {
                condition: (_, data)=>data.state === 'failed'
            },
            required: true
        }
    ];
    if (jobsConfig.addParentToTaskLog) {
        logFields.push({
            name: 'parent',
            type: 'group',
            fields: [
                {
                    name: 'taskSlug',
                    type: 'select',
                    options: [
                        ...taskSlugs
                    ]
                },
                {
                    name: 'taskID',
                    type: 'text'
                }
            ]
        });
    }
    const jobsCollection = {
        slug: jobsCollectionSlug,
        admin: {
            group: 'System',
            hidden: true
        },
        endpoints: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$endpoints$2f$run$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runJobsEndpoint"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$endpoints$2f$handleSchedules$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleSchedulesJobsEndpoint"]
        ],
        fields: [
            {
                name: 'input',
                type: 'json',
                admin: {
                    description: 'Input data provided to the job'
                }
            },
            {
                name: 'taskStatus',
                type: 'json',
                virtual: true
            },
            {
                type: 'tabs',
                tabs: [
                    {
                        fields: [
                            {
                                name: 'completedAt',
                                type: 'date',
                                index: true
                            },
                            {
                                name: 'totalTried',
                                type: 'number',
                                defaultValue: 0,
                                index: true
                            },
                            {
                                name: 'hasError',
                                type: 'checkbox',
                                admin: {
                                    description: 'If hasError is true this job will not be retried'
                                },
                                defaultValue: false,
                                index: true
                            },
                            {
                                name: 'error',
                                type: 'json',
                                admin: {
                                    condition: (data)=>data.hasError,
                                    description: 'If hasError is true, this is the error that caused it'
                                }
                            },
                            {
                                name: 'log',
                                type: 'array',
                                admin: {
                                    description: 'Task execution log'
                                },
                                fields: logFields
                            }
                        ],
                        label: 'Status'
                    }
                ]
            },
            // only include the workflowSlugs field if workflows exist
            ...workflowSlugs.size > 0 ? [
                {
                    name: 'workflowSlug',
                    type: 'select',
                    admin: {
                        position: 'sidebar'
                    },
                    index: true,
                    options: [
                        ...workflowSlugs
                    ]
                }
            ] : [],
            {
                name: 'taskSlug',
                type: 'select',
                admin: {
                    position: 'sidebar'
                },
                index: true,
                options: [
                    ...taskSlugs
                ],
                required: false
            },
            {
                name: 'queue',
                type: 'text',
                admin: {
                    position: 'sidebar'
                },
                defaultValue: 'default',
                index: true
            },
            {
                name: 'waitUntil',
                type: 'date',
                admin: {
                    date: {
                        pickerAppearance: 'dayAndTime'
                    }
                },
                index: true
            },
            {
                name: 'processing',
                type: 'checkbox',
                admin: {
                    position: 'sidebar'
                },
                defaultValue: false,
                index: true
            }
        ],
        hooks: {
            afterRead: [
                ({ doc, req })=>{
                    // This hook is used to add the virtual `tasks` field to the document, that is computed from the `log` field
                    return jobAfterRead({
                        config: req.payload.config,
                        doc
                    });
                }
            ],
            /**
       * If another update comes in after a job as already been cancelled, we need to make sure that update doesn't
       * change the state of the job.
       */ beforeChange: [
                ({ data, originalDoc })=>{
                    if (originalDoc?.error?.cancelled) {
                        data.processing = false;
                        data.hasError = true;
                        delete data.completedAt;
                        delete data.waitUntil;
                    }
                    return data;
                }
            ]
        },
        lockDocuments: false
    };
    if (jobsConfig.stats) {
        // TODO: In 4.0, this should be added by default.
        // The meta field can be used to store arbitrary data about the job. The scheduling system uses this to store
        // `scheduled: true` to indicate that the job was queued by the scheduling system.
        jobsCollection.fields.push({
            name: 'meta',
            type: 'json'
        });
    }
    return jobsCollection;
};
function jobAfterRead({ config, doc }) {
    doc.taskStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$getJobTaskStatus$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getJobTaskStatus"])({
        jobLog: doc.log || []
    });
    doc.input = doc.input || {};
    doc.taskStatus = doc.taskStatus || {};
    return doc;
} //# sourceMappingURL=collection.js.map
}),
"[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/localAPI.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getJobsLocalAPI",
    ()=>getJobsLocalAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/utilities/createLocalReq.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/errors/Forbidden.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$collection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/config/collection.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$handleSchedules$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/operations/handleSchedules/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/operations/runJobs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$updateJob$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.70.0_graphql@16.12.0_typescript@5.9.3/node_modules/payload/dist/queues/utilities/updateJob.js [app-route] (ecmascript)");
;
;
;
;
;
const getJobsLocalAPI = (payload)=>({
        handleSchedules: async (args)=>{
            const newReq = args?.req ?? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])({}, payload);
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$handleSchedules$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleSchedules"])({
                allQueues: args?.allQueues,
                queue: args?.queue,
                req: newReq
            });
        },
        queue: async (args)=>{
            const overrideAccess = args?.overrideAccess !== false;
            const req = args.req ?? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])({}, payload);
            if (!overrideAccess) {
                /**
       * By default, jobsConfig.access.queue will be `defaultAccess` which is a function that returns `true` if the user is logged in.
       */ const accessFn = payload.config.jobs?.access?.queue ?? (()=>true);
                const hasAccess = await accessFn({
                    req
                });
                if (!hasAccess) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Forbidden"](req.t);
                }
            }
            let queue = undefined;
            // If user specifies queue, use that
            if (args.queue) {
                queue = args.queue;
            } else if (args.workflow) {
                // Otherwise, if there is a workflow specified, and it has a default queue to use,
                // use that
                const workflow = payload.config.jobs?.workflows?.find(({ slug })=>slug === args.workflow);
                if (workflow?.queue) {
                    queue = workflow.queue;
                }
            }
            const data = {
                input: args.input
            };
            if (queue) {
                data.queue = queue;
            }
            if (args.waitUntil) {
                data.waitUntil = args.waitUntil?.toISOString();
            }
            if (args.workflow) {
                data.workflowSlug = args.workflow;
            }
            if (args.task) {
                data.taskSlug = args.task;
            }
            if (args.meta) {
                data.meta = args.meta;
            }
            // Type assertion is still needed here
            if (payload?.config?.jobs?.depth || payload?.config?.jobs?.runHooks) {
                return await payload.create({
                    collection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$collection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jobsCollectionSlug"],
                    data,
                    depth: payload.config.jobs.depth ?? 0,
                    overrideAccess,
                    req
                });
            } else {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$collection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jobAfterRead"])({
                    config: payload.config,
                    doc: await payload.db.create({
                        collection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$collection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jobsCollectionSlug"],
                        data,
                        req
                    })
                });
            }
        },
        run: async (args)=>{
            const newReq = args?.req ?? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])({}, payload);
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runJobs"])({
                allQueues: args?.allQueues,
                limit: args?.limit,
                overrideAccess: args?.overrideAccess !== false,
                processingOrder: args?.processingOrder,
                queue: args?.queue,
                req: newReq,
                sequential: args?.sequential,
                silent: args?.silent,
                where: args?.where
            });
        },
        runByID: async (args)=>{
            const newReq = args.req ?? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])({}, payload);
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runJobs"])({
                id: args.id,
                overrideAccess: args.overrideAccess !== false,
                req: newReq,
                silent: args.silent
            });
        },
        cancel: async (args)=>{
            const req = args.req ?? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])({}, payload);
            const overrideAccess = args.overrideAccess !== false;
            if (!overrideAccess) {
                /**
       * By default, jobsConfig.access.cancel will be `defaultAccess` which is a function that returns `true` if the user is logged in.
       */ const accessFn = payload.config.jobs?.access?.cancel ?? (()=>true);
                const hasAccess = await accessFn({
                    req
                });
                if (!hasAccess) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Forbidden"](req.t);
                }
            }
            const and = [
                args.where,
                {
                    completedAt: {
                        exists: false
                    }
                },
                {
                    hasError: {
                        not_equals: true
                    }
                }
            ];
            if (args.queue) {
                and.push({
                    queue: {
                        equals: args.queue
                    }
                });
            }
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$updateJob$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateJobs"])({
                data: {
                    completedAt: null,
                    error: {
                        cancelled: true
                    },
                    hasError: true,
                    processing: false,
                    waitUntil: null
                },
                depth: 0,
                disableTransaction: true,
                req,
                returning: false,
                where: {
                    and
                }
            });
        },
        cancelByID: async (args)=>{
            const req = args.req ?? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])({}, payload);
            const overrideAccess = args.overrideAccess !== false;
            if (!overrideAccess) {
                /**
       * By default, jobsConfig.access.cancel will be `defaultAccess` which is a function that returns `true` if the user is logged in.
       */ const accessFn = payload.config.jobs?.access?.cancel ?? (()=>true);
                const hasAccess = await accessFn({
                    req
                });
                if (!hasAccess) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Forbidden"](req.t);
                }
            }
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$70$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$updateJob$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateJob"])({
                id: args.id,
                data: {
                    completedAt: null,
                    error: {
                        cancelled: true
                    },
                    hasError: true,
                    processing: false,
                    waitUntil: null
                },
                depth: 0,
                disableTransaction: true,
                req,
                returning: false
            });
        }
    }); //# sourceMappingURL=localAPI.js.map
}),
];

//# sourceMappingURL=1c115_payload_dist_queues_caedfd53._.js.map