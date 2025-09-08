import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/tabs.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=6baab06c"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/macbook/applaa-development/src/components/ui/tabs.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=6baab06c"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import * as TabsPrimitive from "/node_modules/.vite/deps/@radix-ui_react-tabs.js?v=6baab06c";
import { cn } from "/src/lib/utils.ts";
const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef(
  _c = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    TabsPrimitive.List,
    {
      ref,
      className: cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/tabs.tsx",
      lineNumber: 31,
      columnNumber: 1
    },
    this
  )
);
_c2 = TabsList;
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = React.forwardRef(
  _c3 = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    TabsPrimitive.Trigger,
    {
      ref,
      className: cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/tabs.tsx",
      lineNumber: 46,
      columnNumber: 1
    },
    this
  )
);
_c4 = TabsTrigger;
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = React.forwardRef(
  _c5 = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    TabsPrimitive.Content,
    {
      ref,
      className: cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/tabs.tsx",
      lineNumber: 61,
      columnNumber: 1
    },
    this
  )
);
_c6 = TabsContent;
TabsContent.displayName = TabsPrimitive.Content.displayName;
export { Tabs, TabsList, TabsTrigger, TabsContent };
var _c, _c2, _c3, _c4, _c5, _c6;
$RefreshReg$(_c, "TabsList$React.forwardRef");
$RefreshReg$(_c2, "TabsList");
$RefreshReg$(_c3, "TabsTrigger$React.forwardRef");
$RefreshReg$(_c4, "TabsTrigger");
$RefreshReg$(_c5, "TabsContent$React.forwardRef");
$RefreshReg$(_c6, "TabsContent");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/macbook/applaa-development/src/components/ui/tabs.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/macbook/applaa-development/src/components/ui/tabs.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBV0U7Ozs7Ozs7Ozs7Ozs7Ozs7QUFYRixZQUFZQSxXQUFXO0FBQ3ZCLFlBQVlDLG1CQUFtQjtBQUUvQixTQUFTQyxVQUFVO0FBRW5CLE1BQU1DLE9BQU9GLGNBQWNHO0FBRTNCLE1BQU1DLFdBQVdMLE1BQU1NO0FBQUFBLEVBR3RCQyxLQUFDQSxDQUFDLEVBQUVDLFdBQVcsR0FBR0MsTUFBTSxHQUFHQyxRQUMxQjtBQUFBLElBQUMsY0FBYztBQUFBLElBQWQ7QUFBQSxNQUNDO0FBQUEsTUFDQSxXQUFXUjtBQUFBQSxRQUNUO0FBQUEsUUFDQU07QUFBQUEsTUFDRjtBQUFBLE1BQ0EsR0FBSUM7QUFBQUE7QUFBQUEsSUFOTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNWTtBQUViO0FBQUNFLE1BWklOO0FBYU5BLFNBQVNPLGNBQWNYLGNBQWNZLEtBQUtEO0FBRTFDLE1BQU1FLGNBQWNkLE1BQU1NO0FBQUFBLEVBR3pCUyxNQUFDQSxDQUFDLEVBQUVQLFdBQVcsR0FBR0MsTUFBTSxHQUFHQyxRQUMxQjtBQUFBLElBQUMsY0FBYztBQUFBLElBQWQ7QUFBQSxNQUNDO0FBQUEsTUFDQSxXQUFXUjtBQUFBQSxRQUNUO0FBQUEsUUFDQU07QUFBQUEsTUFDRjtBQUFBLE1BQ0EsR0FBSUM7QUFBQUE7QUFBQUEsSUFOTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNWTtBQUViO0FBQUNPLE1BWklGO0FBYU5BLFlBQVlGLGNBQWNYLGNBQWNnQixRQUFRTDtBQUVoRCxNQUFNTSxjQUFjbEIsTUFBTU07QUFBQUEsRUFHekJhLE1BQUNBLENBQUMsRUFBRVgsV0FBVyxHQUFHQyxNQUFNLEdBQUdDLFFBQzFCO0FBQUEsSUFBQyxjQUFjO0FBQUEsSUFBZDtBQUFBLE1BQ0M7QUFBQSxNQUNBLFdBQVdSO0FBQUFBLFFBQ1Q7QUFBQSxRQUNBTTtBQUFBQSxNQUNGO0FBQUEsTUFDQSxHQUFJQztBQUFBQTtBQUFBQSxJQU5OO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1ZO0FBRWI7QUFBQ1csTUFaSUY7QUFhTkEsWUFBWU4sY0FBY1gsY0FBY29CLFFBQVFUO0FBRWhELFNBQVNULE1BQU1FLFVBQVVTLGFBQWFJO0FBQWEsSUFBQVgsSUFBQUksS0FBQUksS0FBQUMsS0FBQUcsS0FBQUM7QUFBQUUsYUFBQWYsSUFBQTtBQUFBZSxhQUFBWCxLQUFBO0FBQUFXLGFBQUFQLEtBQUE7QUFBQU8sYUFBQU4sS0FBQTtBQUFBTSxhQUFBSCxLQUFBO0FBQUFHLGFBQUFGLEtBQUEiLCJuYW1lcyI6WyJSZWFjdCIsIlRhYnNQcmltaXRpdmUiLCJjbiIsIlRhYnMiLCJSb290IiwiVGFic0xpc3QiLCJmb3J3YXJkUmVmIiwiX2MiLCJjbGFzc05hbWUiLCJwcm9wcyIsInJlZiIsIl9jMiIsImRpc3BsYXlOYW1lIiwiTGlzdCIsIlRhYnNUcmlnZ2VyIiwiX2MzIiwiX2M0IiwiVHJpZ2dlciIsIlRhYnNDb250ZW50IiwiX2M1IiwiX2M2IiwiQ29udGVudCIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJ0YWJzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0ICogYXMgVGFic1ByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXRhYnNcIlxuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiXG5cbmNvbnN0IFRhYnMgPSBUYWJzUHJpbWl0aXZlLlJvb3RcblxuY29uc3QgVGFic0xpc3QgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBUYWJzUHJpbWl0aXZlLkxpc3Q+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIFRhYnNQcmltaXRpdmUuTGlzdD5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPFRhYnNQcmltaXRpdmUuTGlzdFxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcImlubGluZS1mbGV4IGgtMTAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYmctbXV0ZWQgcC0xIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiLFxuICAgICAgY2xhc3NOYW1lXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKVxuVGFic0xpc3QuZGlzcGxheU5hbWUgPSBUYWJzUHJpbWl0aXZlLkxpc3QuZGlzcGxheU5hbWVcblxuY29uc3QgVGFic1RyaWdnZXIgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBUYWJzUHJpbWl0aXZlLlRyaWdnZXI+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIFRhYnNQcmltaXRpdmUuVHJpZ2dlcj5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPFRhYnNQcmltaXRpdmUuVHJpZ2dlclxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3aGl0ZXNwYWNlLW5vd3JhcCByb3VuZGVkLXNtIHB4LTMgcHktMS41IHRleHQtc20gZm9udC1tZWRpdW0gcmluZy1vZmZzZXQtYmFja2dyb3VuZCB0cmFuc2l0aW9uLWFsbCBmb2N1cy12aXNpYmxlOm91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmctMiBmb2N1cy12aXNpYmxlOnJpbmctcmluZyBmb2N1cy12aXNpYmxlOnJpbmctb2Zmc2V0LTIgZGlzYWJsZWQ6cG9pbnRlci1ldmVudHMtbm9uZSBkaXNhYmxlZDpvcGFjaXR5LTUwIGRhdGEtW3N0YXRlPWFjdGl2ZV06YmctYmFja2dyb3VuZCBkYXRhLVtzdGF0ZT1hY3RpdmVdOnRleHQtZm9yZWdyb3VuZCBkYXRhLVtzdGF0ZT1hY3RpdmVdOnNoYWRvdy1zbVwiLFxuICAgICAgY2xhc3NOYW1lXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKVxuVGFic1RyaWdnZXIuZGlzcGxheU5hbWUgPSBUYWJzUHJpbWl0aXZlLlRyaWdnZXIuZGlzcGxheU5hbWVcblxuY29uc3QgVGFic0NvbnRlbnQgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBUYWJzUHJpbWl0aXZlLkNvbnRlbnQ+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIFRhYnNQcmltaXRpdmUuQ29udGVudD5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPFRhYnNQcmltaXRpdmUuQ29udGVudFxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcIm10LTIgcmluZy1vZmZzZXQtYmFja2dyb3VuZCBmb2N1cy12aXNpYmxlOm91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmctMiBmb2N1cy12aXNpYmxlOnJpbmctcmluZyBmb2N1cy12aXNpYmxlOnJpbmctb2Zmc2V0LTJcIixcbiAgICAgIGNsYXNzTmFtZVxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSlcblRhYnNDb250ZW50LmRpc3BsYXlOYW1lID0gVGFic1ByaW1pdGl2ZS5Db250ZW50LmRpc3BsYXlOYW1lXG5cbmV4cG9ydCB7IFRhYnMsIFRhYnNMaXN0LCBUYWJzVHJpZ2dlciwgVGFic0NvbnRlbnQgfVxuXG5cbiJdLCJmaWxlIjoiL1VzZXJzL21hY2Jvb2svYXBwbGFhLWRldmVsb3BtZW50L3NyYy9jb21wb25lbnRzL3VpL3RhYnMudHN4In0=