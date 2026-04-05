import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".well-known/assetlinks.json","admin/config.yml","admin/index.html","app/.well-known/assetlinks.json","favicon.png","faviconlarge.png","manifest.json","manifest.webmanifest","media/uploads/FB_IMG_1694186653441.jpg","media/uploads/IMG-20220709-WA0078.jpg","media/uploads/IMG-20220709-WA0079.jpg","media/uploads/IMG-20220709-WA0080.jpg","media/uploads/IMG-20230421-WA0031.jpg","month-images/1.png","month-images/10.png","month-images/11.png","month-images/12.png","month-images/2.png","month-images/3.png","month-images/4.png","month-images/5.png","month-images/6.png","month-images/7.png","month-images/8.png","month-images/9.png","mosque.png","mosquenews.png","prayermosque.png","sw.js","swish-QR-large.png"]),
	mimeTypes: {".json":"application/json",".yml":"text/yaml",".html":"text/html",".png":"image/png",".webmanifest":"application/manifest+json",".jpg":"image/jpeg",".js":"application/javascript"},
	_: {
		client: {"start":"_app/immutable/entry/start.bfd4b399.js","app":"_app/immutable/entry/app.dc6b627a.js","imports":["_app/immutable/entry/start.bfd4b399.js","_app/immutable/chunks/scheduler.c6c84ab1.js","_app/immutable/chunks/singletons.db242351.js","_app/immutable/chunks/index.70414d7a.js","_app/immutable/entry/app.dc6b627a.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/scheduler.c6c84ab1.js","_app/immutable/chunks/index.935cddb8.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js')),
			__memo(() => import('../server/nodes/7.js')),
			__memo(() => import('../server/nodes/8.js')),
			__memo(() => import('../server/nodes/9.js')),
			__memo(() => import('../server/nodes/10.js')),
			__memo(() => import('../server/nodes/11.js')),
			__memo(() => import('../server/nodes/12.js')),
			__memo(() => import('../server/nodes/13.js')),
			__memo(() => import('../server/nodes/14.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/api/getDailyAyah",
				pattern: /^\/api\/getDailyAyah\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/api/getDailyAyah/_server.js'))
			},
			{
				id: "/api/getDayPrayerTimes",
				pattern: /^\/api\/getDayPrayerTimes\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/api/getDayPrayerTimes/_server.js'))
			},
			{
				id: "/api/getMonthPrayerTimes",
				pattern: /^\/api\/getMonthPrayerTimes\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/api/getMonthPrayerTimes/_server.js'))
			},
			{
				id: "/api/getMonthsPrayerImage",
				pattern: /^\/api\/getMonthsPrayerImage\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/api/getMonthsPrayerImage/_server.js'))
			},
			{
				id: "/api/getMonthsPrayerTime",
				pattern: /^\/api\/getMonthsPrayerTime\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/api/getMonthsPrayerTime/_server.js'))
			},
			{
				id: "/api/getNewestNewsPost",
				pattern: /^\/api\/getNewestNewsPost\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/api/getNewestNewsPost/_server.js'))
			},
			{
				id: "/api/getNewsPosts",
				pattern: /^\/api\/getNewsPosts\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/api/getNewsPosts/_server.js'))
			},
			{
				id: "/api/getNextPrayerTime",
				pattern: /^\/api\/getNextPrayerTime\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/api/getNextPrayerTime/_server.js'))
			},
			{
				id: "/api/getTodayPrayerTimes",
				pattern: /^\/api\/getTodayPrayerTimes\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/api/getTodayPrayerTimes/_server.js'))
			},
			{
				id: "/api/getTommorowPrayerTimes",
				pattern: /^\/api\/getTommorowPrayerTimes\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/api/getTommorowPrayerTimes/_server.js'))
			},
			{
				id: "/api/getYear",
				pattern: /^\/api\/getYear\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/api/getYear/_server.js'))
			},
			{
				id: "/api/getYesterdayPrayerTimes",
				pattern: /^\/api\/getYesterdayPrayerTimes\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/api/getYesterdayPrayerTimes/_server.js'))
			},
			{
				id: "/app",
				pattern: /^\/app\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/app/bonetider",
				pattern: /^\/app\/bonetider\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/app/donera",
				pattern: /^\/app\/donera\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/app/installningar",
				pattern: /^\/app\/installningar\/?$/,
				params: [],
				page: { layouts: [0,2,,], errors: [1,,3,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/app/kontakt",
				pattern: /^\/app\/kontakt\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/app/mer",
				pattern: /^\/app\/mer\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/app/nyheter",
				pattern: /^\/app\/nyheter\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/app/nyheter/[slug]",
				pattern: /^\/app\/nyheter\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/privacy-policy",
				pattern: /^\/privacy-policy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/temp",
				pattern: /^\/temp\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
