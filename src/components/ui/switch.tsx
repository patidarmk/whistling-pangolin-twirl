import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/switch.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=6baab06c"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/macbook/applaa-development/src/components/ui/switch.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import * as SwitchPrimitive from "/node_modules/.vite/deps/@radix-ui_react-switch.js?v=6baab06c";
import { cn } from "/src/lib/utils.ts";
function Switch({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    SwitchPrimitive.Root,
    {
      "data-slot": "switch",
      className: cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxDEV(
        SwitchPrimitive.Thumb,
        {
          "data-slot": "switch-thumb",
          className: cn(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )
        },
        void 0,
        false,
        {
          fileName: "/Users/macbook/applaa-development/src/components/ui/switch.tsx",
          lineNumber: 38,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/switch.tsx",
      lineNumber: 30,
      columnNumber: 5
    },
    this
  );
}
_c = Switch;
export { Switch };
var _c;
$RefreshReg$(_c, "Switch");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/macbook/applaa-development/src/components/ui/switch.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/macbook/applaa-development/src/components/ui/switch.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBa0JNOzs7Ozs7Ozs7Ozs7Ozs7O0FBakJOLFlBQVlBLHFCQUFxQjtBQUVqQyxTQUFTQyxVQUFVO0FBRW5CLFNBQVNDLE9BQU87QUFBQSxFQUNkQztBQUFBQSxFQUNBLEdBQUdDO0FBQzhDLEdBQUc7QUFDcEQsU0FDRTtBQUFBLElBQUMsZ0JBQWdCO0FBQUEsSUFBaEI7QUFBQSxNQUNDLGFBQVU7QUFBQSxNQUNWLFdBQVdIO0FBQUFBLFFBQ1Q7QUFBQSxRQUNBRTtBQUFBQSxNQUNGO0FBQUEsTUFDQSxHQUFJQztBQUFBQSxNQUVKO0FBQUEsUUFBQyxnQkFBZ0I7QUFBQSxRQUFoQjtBQUFBLFVBQ0MsYUFBVTtBQUFBLFVBQ1YsV0FBV0g7QUFBQUEsWUFDVDtBQUFBLFVBQ0Y7QUFBQTtBQUFBLFFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSUk7QUFBQTtBQUFBLElBWk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBY0E7QUFFSjtBQUFDSSxLQXJCUUg7QUF1QlQsU0FBU0E7QUFBUyxJQUFBRztBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiU3dpdGNoUHJpbWl0aXZlIiwiY24iLCJTd2l0Y2giLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbInN3aXRjaC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBTd2l0Y2hQcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1zd2l0Y2hcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcblxuZnVuY3Rpb24gU3dpdGNoKHtcbiAgY2xhc3NOYW1lLFxuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFN3aXRjaFByaW1pdGl2ZS5Sb290Pikge1xuICByZXR1cm4gKFxuICAgIDxTd2l0Y2hQcmltaXRpdmUuUm9vdFxuICAgICAgZGF0YS1zbG90PVwic3dpdGNoXCJcbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwicGVlciBkYXRhLVtzdGF0ZT1jaGVja2VkXTpiZy1wcmltYXJ5IGRhdGEtW3N0YXRlPXVuY2hlY2tlZF06YmctaW5wdXQgZm9jdXMtdmlzaWJsZTpib3JkZXItcmluZyBmb2N1cy12aXNpYmxlOnJpbmctcmluZy81MCBkYXJrOmRhdGEtW3N0YXRlPXVuY2hlY2tlZF06YmctaW5wdXQvODAgaW5saW5lLWZsZXggaC1bMS4xNXJlbV0gdy04IHNocmluay0wIGl0ZW1zLWNlbnRlciByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBzaGFkb3cteHMgdHJhbnNpdGlvbi1hbGwgb3V0bGluZS1ub25lIGZvY3VzLXZpc2libGU6cmluZy1bM3B4XSBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgZGlzYWJsZWQ6b3BhY2l0eS01MFwiLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxTd2l0Y2hQcmltaXRpdmUuVGh1bWJcbiAgICAgICAgZGF0YS1zbG90PVwic3dpdGNoLXRodW1iXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICBcImJnLWJhY2tncm91bmQgZGFyazpkYXRhLVtzdGF0ZT11bmNoZWNrZWRdOmJnLWZvcmVncm91bmQgZGFyazpkYXRhLVtzdGF0ZT1jaGVja2VkXTpiZy1wcmltYXJ5LWZvcmVncm91bmQgcG9pbnRlci1ldmVudHMtbm9uZSBibG9jayBzaXplLTQgcm91bmRlZC1mdWxsIHJpbmctMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkYXRhLVtzdGF0ZT1jaGVja2VkXTp0cmFuc2xhdGUteC1bY2FsYygxMDAlLTJweCldIGRhdGEtW3N0YXRlPXVuY2hlY2tlZF06dHJhbnNsYXRlLXgtMFwiLFxuICAgICAgICApfVxuICAgICAgLz5cbiAgICA8L1N3aXRjaFByaW1pdGl2ZS5Sb290PlxuICApO1xufVxuXG5leHBvcnQgeyBTd2l0Y2ggfTtcbiJdLCJmaWxlIjoiL1VzZXJzL21hY2Jvb2svYXBwbGFhLWRldmVsb3BtZW50L3NyYy9jb21wb25lbnRzL3VpL3N3aXRjaC50c3gifQ==