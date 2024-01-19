export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DVmvvjip.js","app":"_app/immutable/entry/app.mOsFy-37.js","imports":["_app/immutable/entry/start.DVmvvjip.js","_app/immutable/chunks/entry.rfhwLhrg.js","_app/immutable/chunks/scheduler.bX6PUre-.js","_app/immutable/chunks/index.qaMdkIhf.js","_app/immutable/entry/app.mOsFy-37.js","_app/immutable/chunks/scheduler.bX6PUre-.js","_app/immutable/chunks/index.MJuC4Xhz.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
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
				id: "/costs",
				pattern: /^\/costs\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/costs/new",
				pattern: /^\/costs\/new\/?$/,
				params: [],
				page: { layouts: [0,,], errors: [1,2,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/costs/upload",
				pattern: /^\/costs\/upload\/?$/,
				params: [],
				page: { layouts: [0,,], errors: [1,3,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
