import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/tooltip.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=6baab06c"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/macbook/applaa-development/src/components/ui/tooltip.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
"use client";
import * as TooltipPrimitive from "/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=6baab06c";
import { cn } from "/src/lib/utils.ts";
function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    TooltipPrimitive.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration,
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/tooltip.tsx",
      lineNumber: 32,
      columnNumber: 5
    },
    this
  );
}
_c = TooltipProvider;
function Tooltip({
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(TooltipProvider, { children: /* @__PURE__ */ jsxDEV(TooltipPrimitive.Root, { "data-slot": "tooltip", ...props }, void 0, false, {
    fileName: "/Users/macbook/applaa-development/src/components/ui/tooltip.tsx",
    lineNumber: 45,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/macbook/applaa-development/src/components/ui/tooltip.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
_c2 = Tooltip;
function TooltipTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(TooltipPrimitive.Trigger, { "data-slot": "tooltip-trigger", ...props }, void 0, false, {
    fileName: "/Users/macbook/applaa-development/src/components/ui/tooltip.tsx",
    lineNumber: 53,
    columnNumber: 10
  }, this);
}
_c3 = TooltipTrigger;
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsxDEV(
    TooltipPrimitive.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(
        "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxDEV(TooltipPrimitive.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" }, void 0, false, {
          fileName: "/Users/macbook/applaa-development/src/components/ui/tooltip.tsx",
          lineNumber: 74,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/tooltip.tsx",
      lineNumber: 64,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "/Users/macbook/applaa-development/src/components/ui/tooltip.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
}
_c4 = TooltipContent;
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
var _c, _c2, _c3, _c4;
$RefreshReg$(_c, "TooltipProvider");
$RefreshReg$(_c2, "Tooltip");
$RefreshReg$(_c3, "TooltipTrigger");
$RefreshReg$(_c4, "TooltipContent");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/macbook/applaa-development/src/components/ui/tooltip.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/macbook/applaa-development/src/components/ui/tooltip.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBWUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFaSjtBQUdBLFlBQVlBLHNCQUFzQjtBQUVsQyxTQUFTQyxVQUFVO0FBRW5CLFNBQVNDLGdCQUFnQjtBQUFBLEVBQ3ZCQyxnQkFBZ0I7QUFBQSxFQUNoQixHQUFHQztBQUNtRCxHQUFHO0FBQ3pELFNBQ0U7QUFBQSxJQUFDLGlCQUFpQjtBQUFBLElBQWpCO0FBQUEsTUFDQyxhQUFVO0FBQUEsTUFDVjtBQUFBLE1BQ0EsR0FBSUE7QUFBQUE7QUFBQUEsSUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFHWTtBQUdoQjtBQUFDQyxLQVhRSDtBQWFULFNBQVNJLFFBQVE7QUFBQSxFQUNmLEdBQUdGO0FBQytDLEdBQUc7QUFDckQsU0FDRSx1QkFBQyxtQkFDQyxpQ0FBQyxpQkFBaUIsTUFBakIsRUFBc0IsYUFBVSxXQUFVLEdBQUlBLFNBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBcUQsS0FEdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVBO0FBRUo7QUFBQ0csTUFSUUQ7QUFVVCxTQUFTRSxlQUFlO0FBQUEsRUFDdEIsR0FBR0o7QUFDa0QsR0FBRztBQUN4RCxTQUFPLHVCQUFDLGlCQUFpQixTQUFqQixFQUF5QixhQUFVLG1CQUFrQixHQUFJQSxTQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWdFO0FBQ3pFO0FBQUNLLE1BSlFEO0FBTVQsU0FBU0UsZUFBZTtBQUFBLEVBQ3RCQztBQUFBQSxFQUNBQyxhQUFhO0FBQUEsRUFDYkM7QUFBQUEsRUFDQSxHQUFHVDtBQUNrRCxHQUFHO0FBQ3hELFNBQ0UsdUJBQUMsaUJBQWlCLFFBQWpCLEVBQ0M7QUFBQSxJQUFDLGlCQUFpQjtBQUFBLElBQWpCO0FBQUEsTUFDQyxhQUFVO0FBQUEsTUFDVjtBQUFBLE1BQ0EsV0FBV0g7QUFBQUEsUUFDVDtBQUFBLFFBQ0FVO0FBQUFBLE1BQ0Y7QUFBQSxNQUNBLEdBQUlQO0FBQUFBLE1BRUhTO0FBQUFBO0FBQUFBLFFBQ0QsdUJBQUMsaUJBQWlCLE9BQWpCLEVBQXVCLFdBQVUsa0dBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBZ0k7QUFBQTtBQUFBO0FBQUEsSUFWbEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBV0EsS0FaRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBYUE7QUFFSjtBQUFDQyxNQXRCUUo7QUF3QlQsU0FBU0osU0FBU0UsZ0JBQWdCRSxnQkFBZ0JSO0FBQWtCLElBQUFHLElBQUFFLEtBQUFFLEtBQUFLO0FBQUFDLGFBQUFWLElBQUE7QUFBQVUsYUFBQVIsS0FBQTtBQUFBUSxhQUFBTixLQUFBO0FBQUFNLGFBQUFELEtBQUEiLCJuYW1lcyI6WyJUb29sdGlwUHJpbWl0aXZlIiwiY24iLCJUb29sdGlwUHJvdmlkZXIiLCJkZWxheUR1cmF0aW9uIiwicHJvcHMiLCJfYyIsIlRvb2x0aXAiLCJfYzIiLCJUb29sdGlwVHJpZ2dlciIsIl9jMyIsIlRvb2x0aXBDb250ZW50IiwiY2xhc3NOYW1lIiwic2lkZU9mZnNldCIsImNoaWxkcmVuIiwiX2M0IiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbInRvb2x0aXAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgdHlwZSAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgVG9vbHRpcFByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXRvb2x0aXBcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcblxuZnVuY3Rpb24gVG9vbHRpcFByb3ZpZGVyKHtcbiAgZGVsYXlEdXJhdGlvbiA9IDAsXG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgVG9vbHRpcFByaW1pdGl2ZS5Qcm92aWRlcj4pIHtcbiAgcmV0dXJuIChcbiAgICA8VG9vbHRpcFByaW1pdGl2ZS5Qcm92aWRlclxuICAgICAgZGF0YS1zbG90PVwidG9vbHRpcC1wcm92aWRlclwiXG4gICAgICBkZWxheUR1cmF0aW9uPXtkZWxheUR1cmF0aW9ufVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFRvb2x0aXAoe1xuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFRvb2x0aXBQcmltaXRpdmUuUm9vdD4pIHtcbiAgcmV0dXJuIChcbiAgICA8VG9vbHRpcFByb3ZpZGVyPlxuICAgICAgPFRvb2x0aXBQcmltaXRpdmUuUm9vdCBkYXRhLXNsb3Q9XCJ0b29sdGlwXCIgey4uLnByb3BzfSAvPlxuICAgIDwvVG9vbHRpcFByb3ZpZGVyPlxuICApO1xufVxuXG5mdW5jdGlvbiBUb29sdGlwVHJpZ2dlcih7XG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgVG9vbHRpcFByaW1pdGl2ZS5UcmlnZ2VyPikge1xuICByZXR1cm4gPFRvb2x0aXBQcmltaXRpdmUuVHJpZ2dlciBkYXRhLXNsb3Q9XCJ0b29sdGlwLXRyaWdnZXJcIiB7Li4ucHJvcHN9IC8+O1xufVxuXG5mdW5jdGlvbiBUb29sdGlwQ29udGVudCh7XG4gIGNsYXNzTmFtZSxcbiAgc2lkZU9mZnNldCA9IDAsXG4gIGNoaWxkcmVuLFxuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFRvb2x0aXBQcmltaXRpdmUuQ29udGVudD4pIHtcbiAgcmV0dXJuIChcbiAgICA8VG9vbHRpcFByaW1pdGl2ZS5Qb3J0YWw+XG4gICAgICA8VG9vbHRpcFByaW1pdGl2ZS5Db250ZW50XG4gICAgICAgIGRhdGEtc2xvdD1cInRvb2x0aXAtY29udGVudFwiXG4gICAgICAgIHNpZGVPZmZzZXQ9e3NpZGVPZmZzZXR9XG4gICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgXCJiZy1wcmltYXJ5IHRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kIGFuaW1hdGUtaW4gZmFkZS1pbi0wIHpvb20taW4tOTUgZGF0YS1bc3RhdGU9Y2xvc2VkXTphbmltYXRlLW91dCBkYXRhLVtzdGF0ZT1jbG9zZWRdOmZhZGUtb3V0LTAgZGF0YS1bc3RhdGU9Y2xvc2VkXTp6b29tLW91dC05NSBkYXRhLVtzaWRlPWJvdHRvbV06c2xpZGUtaW4tZnJvbS10b3AtMiBkYXRhLVtzaWRlPWxlZnRdOnNsaWRlLWluLWZyb20tcmlnaHQtMiBkYXRhLVtzaWRlPXJpZ2h0XTpzbGlkZS1pbi1mcm9tLWxlZnQtMiBkYXRhLVtzaWRlPXRvcF06c2xpZGUtaW4tZnJvbS1ib3R0b20tMiB6LTUwIHctZml0IG9yaWdpbi0oLS1yYWRpeC10b29sdGlwLWNvbnRlbnQtdHJhbnNmb3JtLW9yaWdpbikgcm91bmRlZC1tZCBweC0zIHB5LTEuNSB0ZXh0LXhzIHRleHQtYmFsYW5jZVwiLFxuICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgKX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxUb29sdGlwUHJpbWl0aXZlLkFycm93IGNsYXNzTmFtZT1cImJnLXByaW1hcnkgZmlsbC1wcmltYXJ5IHotNTAgc2l6ZS0yLjUgdHJhbnNsYXRlLXktW2NhbGMoLTUwJV8tXzJweCldIHJvdGF0ZS00NSByb3VuZGVkLVsycHhdXCIgLz5cbiAgICAgIDwvVG9vbHRpcFByaW1pdGl2ZS5Db250ZW50PlxuICAgIDwvVG9vbHRpcFByaW1pdGl2ZS5Qb3J0YWw+XG4gICk7XG59XG5cbmV4cG9ydCB7IFRvb2x0aXAsIFRvb2x0aXBUcmlnZ2VyLCBUb29sdGlwQ29udGVudCwgVG9vbHRpcFByb3ZpZGVyIH07XG4iXSwiZmlsZSI6Ii9Vc2Vycy9tYWNib29rL2FwcGxhYS1kZXZlbG9wbWVudC9zcmMvY29tcG9uZW50cy91aS90b29sdGlwLnRzeCJ9