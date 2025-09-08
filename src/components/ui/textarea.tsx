import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/textarea.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=6baab06c"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/macbook/applaa-development/src/components/ui/textarea.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { cn } from "/src/lib/utils.ts";
function Textarea({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    "textarea",
    {
      className: cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/textarea.tsx",
      lineNumber: 29,
      columnNumber: 5
    },
    this
  );
}
_c = Textarea;
export { Textarea };
var _c;
$RefreshReg$(_c, "Textarea");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/macbook/applaa-development/src/components/ui/textarea.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/macbook/applaa-development/src/components/ui/textarea.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBU0k7Ozs7Ozs7Ozs7Ozs7Ozs7QUFQSixTQUFTQSxVQUFVO0FBRW5CLFNBQVNDLFNBQVM7QUFBQSxFQUNoQkM7QUFBQUEsRUFDQSxHQUFHQztBQUM2QixHQUFHO0FBQ25DLFNBQ0U7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDLFdBQVdIO0FBQUFBLFFBQ1Q7QUFBQSxRQUNBRTtBQUFBQSxNQUNGO0FBQUEsTUFDQSxHQUFJQztBQUFBQTtBQUFBQSxJQUxOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtZO0FBR2hCO0FBQUNDLEtBYlFIO0FBZVQsU0FBU0E7QUFBVyxJQUFBRztBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiY24iLCJUZXh0YXJlYSIsImNsYXNzTmFtZSIsInByb3BzIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsidGV4dGFyZWEudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCIuLi8uLi9saWIvdXRpbHNcIjtcblxuZnVuY3Rpb24gVGV4dGFyZWEoe1xuICBjbGFzc05hbWUsXG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczxcInRleHRhcmVhXCI+KSB7XG4gIHJldHVybiAoXG4gICAgPHRleHRhcmVhXG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcImZsZXggbWluLWgtWzgwcHhdIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItaW5wdXQgYmctYmFja2dyb3VuZCBweC0zIHB5LTIgdGV4dC1zbSByaW5nLW9mZnNldC1iYWNrZ3JvdW5kIHBsYWNlaG9sZGVyOnRleHQtbXV0ZWQtZm9yZWdyb3VuZCBmb2N1cy12aXNpYmxlOm91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmctMiBmb2N1cy12aXNpYmxlOnJpbmctcmluZyBmb2N1cy12aXNpYmxlOnJpbmctb2Zmc2V0LTIgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIGRpc2FibGVkOm9wYWNpdHktNTBcIixcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCB7IFRleHRhcmVhIH07Il0sImZpbGUiOiIvVXNlcnMvbWFjYm9vay9hcHBsYWEtZGV2ZWxvcG1lbnQvc3JjL2NvbXBvbmVudHMvdWkvdGV4dGFyZWEudHN4In0=