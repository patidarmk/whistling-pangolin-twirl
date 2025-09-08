import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/label.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=6baab06c"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/macbook/applaa-development/src/components/ui/label.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import * as LabelPrimitive from "/node_modules/.vite/deps/@radix-ui_react-label.js?v=6baab06c";
import { cn } from "/src/lib/utils.ts";
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/label.tsx",
      lineNumber: 30,
      columnNumber: 5
    },
    this
  );
}
_c = Label;
export { Label };
var _c;
$RefreshReg$(_c, "Label");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/macbook/applaa-development/src/components/ui/label.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/macbook/applaa-development/src/components/ui/label.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBVUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFUSixZQUFZQSxvQkFBb0I7QUFFaEMsU0FBU0MsVUFBVTtBQUVuQixTQUFTQyxNQUFNO0FBQUEsRUFDYkM7QUFBQUEsRUFDQSxHQUFHQztBQUM2QyxHQUFHO0FBQ25ELFNBQ0U7QUFBQSxJQUFDLGVBQWU7QUFBQSxJQUFmO0FBQUEsTUFDQyxhQUFVO0FBQUEsTUFDVixXQUFXSDtBQUFBQSxRQUNUO0FBQUEsUUFDQUU7QUFBQUEsTUFDRjtBQUFBLE1BQ0EsR0FBSUM7QUFBQUE7QUFBQUEsSUFOTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNWTtBQUdoQjtBQUFDQyxLQWRRSDtBQWdCVCxTQUFTQTtBQUFRLElBQUFHO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJMYWJlbFByaW1pdGl2ZSIsImNuIiwiTGFiZWwiLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbImxhYmVsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIExhYmVsUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtbGFiZWxcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiLi4vLi4vbGliL3V0aWxzXCI7XG5cbmZ1bmN0aW9uIExhYmVsKHtcbiAgY2xhc3NOYW1lLFxuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIExhYmVsUHJpbWl0aXZlLlJvb3Q+KSB7XG4gIHJldHVybiAoXG4gICAgPExhYmVsUHJpbWl0aXZlLlJvb3RcbiAgICAgIGRhdGEtc2xvdD1cImxhYmVsXCJcbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1zbSBsZWFkaW5nLW5vbmUgZm9udC1tZWRpdW0gc2VsZWN0LW5vbmUgZ3JvdXAtZGF0YS1bZGlzYWJsZWQ9dHJ1ZV06cG9pbnRlci1ldmVudHMtbm9uZSBncm91cC1kYXRhLVtkaXNhYmxlZD10cnVlXTpvcGFjaXR5LTUwIHBlZXItZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIHBlZXItZGlzYWJsZWQ6b3BhY2l0eS01MFwiLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCB7IExhYmVsIH07XG4iXSwiZmlsZSI6Ii9Vc2Vycy9tYWNib29rL2FwcGxhYS1kZXZlbG9wbWVudC9zcmMvY29tcG9uZW50cy91aS9sYWJlbC50c3gifQ==