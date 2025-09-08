import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/popover.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=6baab06c"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/macbook/applaa-development/src/components/ui/popover.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=6baab06c"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import * as PopoverPrimitive from "/node_modules/.vite/deps/@radix-ui_react-popover.js?v=6baab06c";
import { cn } from "/src/lib/utils.ts";
const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverContent = React.forwardRef(
  _c = ({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxDEV(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsxDEV(
    PopoverPrimitive.Content,
    {
      ref,
      align,
      sideOffset,
      className: cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/popover.tsx",
      lineNumber: 34,
      columnNumber: 5
    },
    this
  ) }, void 0, false, {
    fileName: "/Users/macbook/applaa-development/src/components/ui/popover.tsx",
    lineNumber: 33,
    columnNumber: 1
  }, this)
);
_c2 = PopoverContent;
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
export { Popover, PopoverTrigger, PopoverContent };
var _c, _c2;
$RefreshReg$(_c, "PopoverContent$React.forwardRef");
$RefreshReg$(_c2, "PopoverContent");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/macbook/applaa-development/src/components/ui/popover.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/macbook/applaa-development/src/components/ui/popover.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBY0k7Ozs7Ozs7Ozs7Ozs7Ozs7QUFkSixZQUFZQSxXQUFXO0FBQ3ZCLFlBQVlDLHNCQUFzQjtBQUVsQyxTQUFTQyxVQUFVO0FBRW5CLE1BQU1DLFVBQVVGLGlCQUFpQkc7QUFFakMsTUFBTUMsaUJBQWlCSixpQkFBaUJLO0FBRXhDLE1BQU1DLGlCQUFpQlAsTUFBTVE7QUFBQUEsRUFHNUJDLEtBQUNBLENBQUMsRUFBRUMsV0FBV0MsUUFBUSxVQUFVQyxhQUFhLEdBQUcsR0FBR0MsTUFBTSxHQUFHQyxRQUM1RCx1QkFBQyxpQkFBaUIsUUFBakIsRUFDQztBQUFBLElBQUMsaUJBQWlCO0FBQUEsSUFBakI7QUFBQSxNQUNDO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBLFdBQVdaO0FBQUFBLFFBQ1Q7QUFBQSxRQUNBUTtBQUFBQSxNQUNGO0FBQUEsTUFDQSxHQUFJRztBQUFBQTtBQUFBQSxJQVJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVFZLEtBVGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVdBO0FBQ0Q7QUFBRUUsTUFoQkdSO0FBaUJOQSxlQUFlUyxjQUFjZixpQkFBaUJnQixRQUFRRDtBQUV0RCxTQUFTYixTQUFTRSxnQkFBZ0JFO0FBQWlCLElBQUFFLElBQUFNO0FBQUFHLGFBQUFULElBQUE7QUFBQVMsYUFBQUgsS0FBQSIsIm5hbWVzIjpbIlJlYWN0IiwiUG9wb3ZlclByaW1pdGl2ZSIsImNuIiwiUG9wb3ZlciIsIlJvb3QiLCJQb3BvdmVyVHJpZ2dlciIsIlRyaWdnZXIiLCJQb3BvdmVyQ29udGVudCIsImZvcndhcmRSZWYiLCJfYyIsImNsYXNzTmFtZSIsImFsaWduIiwic2lkZU9mZnNldCIsInByb3BzIiwicmVmIiwiX2MyIiwiZGlzcGxheU5hbWUiLCJDb250ZW50IiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbInBvcG92ZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgUG9wb3ZlclByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXBvcG92ZXJcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcblxuY29uc3QgUG9wb3ZlciA9IFBvcG92ZXJQcmltaXRpdmUuUm9vdDtcblxuY29uc3QgUG9wb3ZlclRyaWdnZXIgPSBQb3BvdmVyUHJpbWl0aXZlLlRyaWdnZXI7XG5cbmNvbnN0IFBvcG92ZXJDb250ZW50ID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgUG9wb3ZlclByaW1pdGl2ZS5Db250ZW50PixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBQb3BvdmVyUHJpbWl0aXZlLkNvbnRlbnQ+XG4+KCh7IGNsYXNzTmFtZSwgYWxpZ24gPSBcImNlbnRlclwiLCBzaWRlT2Zmc2V0ID0gNCwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxQb3BvdmVyUHJpbWl0aXZlLlBvcnRhbD5cbiAgICA8UG9wb3ZlclByaW1pdGl2ZS5Db250ZW50XG4gICAgICByZWY9e3JlZn1cbiAgICAgIGFsaWduPXthbGlnbn1cbiAgICAgIHNpZGVPZmZzZXQ9e3NpZGVPZmZzZXR9XG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcInotNTAgdy03MiByb3VuZGVkLW1kIGJvcmRlciBiZy1wb3BvdmVyIHAtNCB0ZXh0LXBvcG92ZXItZm9yZWdyb3VuZCBzaGFkb3ctbWQgb3V0bGluZS1ub25lIGRhdGEtW3N0YXRlPW9wZW5dOmFuaW1hdGUtaW4gZGF0YS1bc3RhdGU9Y2xvc2VkXTphbmltYXRlLW91dCBkYXRhLVtzdGF0ZT1jbG9zZWRdOmZhZGUtb3V0LTAgZGF0YS1bc3RhdGU9b3Blbl06ZmFkZS1pbi0wIGRhdGEtW3N0YXRlPWNsb3NlZF06em9vbS1vdXQtOTUgZGF0YS1bc3RhdGU9b3Blbl06em9vbS1pbi05NSBkYXRhLVtzaWRlPWJvdHRvbV06c2xpZGUtaW4tZnJvbS10b3AtMiBkYXRhLVtzaWRlPWxlZnRdOnNsaWRlLWluLWZyb20tcmlnaHQtMiBkYXRhLVtzaWRlPXJpZ2h0XTpzbGlkZS1pbi1mcm9tLWxlZnQtMiBkYXRhLVtzaWRlPXRvcF06c2xpZGUtaW4tZnJvbS1ib3R0b20tMlwiLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gIDwvUG9wb3ZlclByaW1pdGl2ZS5Qb3J0YWw+XG4pKTtcblBvcG92ZXJDb250ZW50LmRpc3BsYXlOYW1lID0gUG9wb3ZlclByaW1pdGl2ZS5Db250ZW50LmRpc3BsYXlOYW1lO1xuXG5leHBvcnQgeyBQb3BvdmVyLCBQb3BvdmVyVHJpZ2dlciwgUG9wb3ZlckNvbnRlbnQgfTtcbiJdLCJmaWxlIjoiL1VzZXJzL21hY2Jvb2svYXBwbGFhLWRldmVsb3BtZW50L3NyYy9jb21wb25lbnRzL3VpL3BvcG92ZXIudHN4In0=