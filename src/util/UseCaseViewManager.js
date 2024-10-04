import { onBeforeRouteLeave,useRouter } from "vue-router";
import { h, ref, computed, mergeProps, shallowRef, toHandlers, onBeforeMount, getCurrentInstance, resolveDynamicComponent } from "vue";

// Loader Component - render function
const Loader = h("div", { style: "min-height:100px;" }, "");

// Use Case Views' Transpiler
function transpileViews(views) {
	if (views.length === 0) {
		throw new Error("Invalid UseCase Views Array");
	}
	// Template Refs
	const $refs = ref({});
	// UseCase Views Collection
	const ucViews = views.reduce(function (collection, view) {
			// Define Template Ref
			// view.props.ref = defineTemplateRef(view);
			// Add view definition to collection
			collection.set(view.name, {
				name: view.name,
				$ref: ref(null),
				component: shallowRef(view.component),
				props: view.props,
				handlers: view.handlers || {}
			});
		return collection;
	}, new Map());

	return { $refs, ucViews };
}

function useUseCaseViewManager(views, onInitialized, onError, initView = "") {
	// Get Instance of UseCase HOC
	const usecase = getCurrentInstance();
    console.log(usecase);
	if (!usecase) {
		throw new Error("Unable to get UseCase Instance");
	}

	const { $refs, ucViews } = transpileViews(views);
	// Loader View (definition)
	const loaderView = { title: "", component: Loader, props: {}, handlers: {} };
	// Active View State
	const theActiveView = ref(ucViews.has(initView ?? "") ? ucViews.get(initView) : loaderView);
	// Active View Getter
	const activeView = computed(function () {
		if (!!theActiveView.value && !!theActiveView.value.name) {
			return { name: theActiveView.value.name, $ref: theActiveView.value.$ref };
		} else {
			return undefined;
		}
	});

	const router = useRouter();
	/** Activates specified View
	 * @param {string} view The view name */
	function activateView(view) {
		if (!ucViews.has(view)) {
			throw new Error(`View to activate "${view}" does not exist`);
		}
		theActiveView.value = ucViews.get(view);
		// if (usecase.props.modal === true) {
		// 	usecase.emit("update:title", theActiveView.value.title);
		// } else if (isRef(route.meta.title)) {
		// 	route.meta.title.value = theActiveView.value.title;
		// }
	}

	// UseCase Render Function
	function render() {
			return h(resolveDynamicComponent(theActiveView.value.component), mergeProps(theActiveView.value.props, toHandlers(theActiveView.value.handlers)));
	}

	// Life Cycle Hooks
	onBeforeMount(initialize);
	onBeforeRouteLeave(routeLeaving);

	// Life Cycle Methods
	// Initialize Usecase
	async function initialize() {
		try {
			onInitialized("initailized");
		} catch (error) {
			onError(error, "Initialize");
		}
	}
    // Route Leaving
	function routeLeaving(to, from, next) {
		next();
	}

	function close() {
		console.log("CCC")
			router.go(-1);
		}

	// Return Methods
	return {
		activateView,
		close,
		render,
		activeView,
		$refs: computed(() => $refs.value),
	};
}

export { useUseCaseViewManager };
