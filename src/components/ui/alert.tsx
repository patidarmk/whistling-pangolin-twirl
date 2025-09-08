import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/alert.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=6baab06c"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/macbook/applaa-development/src/components/ui/alert.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { cva } from "/node_modules/.vite/deps/class-variance-authority.js?v=6baab06c";
import { cn } from "/src/lib/utils.ts";
const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Alert({
  className,
  variant,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-slot": "alert",
      role: "alert",
      className: cn(alertVariants({ variant }), className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/alert.tsx",
      lineNumber: 47,
      columnNumber: 5
    },
    this
  );
}
_c = Alert;
function AlertTitle({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-slot": "alert-title",
      className: cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/alert.tsx",
      lineNumber: 58,
      columnNumber: 5
    },
    this
  );
}
_c2 = AlertTitle;
function AlertDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-slot": "alert-description",
      className: cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/alert.tsx",
      lineNumber: 74,
      columnNumber: 5
    },
    this
  );
}
_c3 = AlertDescription;
export { Alert, AlertTitle, AlertDescription };
var _c, _c2, _c3;
$RefreshReg$(_c, "Alert");
$RefreshReg$(_c2, "AlertTitle");
$RefreshReg$(_c3, "AlertDescription");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/macbook/applaa-development/src/components/ui/alert.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/macbook/applaa-development/src/components/ui/alert.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBMkJJOzs7Ozs7Ozs7Ozs7Ozs7O0FBMUJKLFNBQVNBLFdBQThCO0FBRXZDLFNBQVNDLFVBQVU7QUFFbkIsTUFBTUMsZ0JBQWdCRjtBQUFBQSxFQUNwQjtBQUFBLEVBQ0E7QUFBQSxJQUNFRyxVQUFVO0FBQUEsTUFDUkMsU0FBUztBQUFBLFFBQ1BDLFNBQVM7QUFBQSxRQUNUQyxhQUNFO0FBQUEsTUFDSjtBQUFBLElBQ0Y7QUFBQSxJQUNBQyxpQkFBaUI7QUFBQSxNQUNmSCxTQUFTO0FBQUEsSUFDWDtBQUFBLEVBQ0Y7QUFDRjtBQUVBLFNBQVNJLE1BQU07QUFBQSxFQUNiQztBQUFBQSxFQUNBTDtBQUFBQSxFQUNBLEdBQUdNO0FBQzZELEdBQUc7QUFDbkUsU0FDRTtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0MsYUFBVTtBQUFBLE1BQ1YsTUFBSztBQUFBLE1BQ0wsV0FBV1QsR0FBR0MsY0FBYyxFQUFFRSxRQUFRLENBQUMsR0FBR0ssU0FBUztBQUFBLE1BQ25ELEdBQUlDO0FBQUFBO0FBQUFBLElBSk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSVk7QUFHaEI7QUFBQ0MsS0FiUUg7QUFlVCxTQUFTSSxXQUFXLEVBQUVILFdBQVcsR0FBR0MsTUFBbUMsR0FBRztBQUN4RSxTQUNFO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQyxhQUFVO0FBQUEsTUFDVixXQUFXVDtBQUFBQSxRQUNUO0FBQUEsUUFDQVE7QUFBQUEsTUFDRjtBQUFBLE1BQ0EsR0FBSUM7QUFBQUE7QUFBQUEsSUFOTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNWTtBQUdoQjtBQUFDRyxNQVhRRDtBQWFULFNBQVNFLGlCQUFpQjtBQUFBLEVBQ3hCTDtBQUFBQSxFQUNBLEdBQUdDO0FBQ3dCLEdBQUc7QUFDOUIsU0FDRTtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0MsYUFBVTtBQUFBLE1BQ1YsV0FBV1Q7QUFBQUEsUUFDVDtBQUFBLFFBQ0FRO0FBQUFBLE1BQ0Y7QUFBQSxNQUNBLEdBQUlDO0FBQUFBO0FBQUFBLElBTk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTVk7QUFHaEI7QUFBQ0ssTUFkUUQ7QUFnQlQsU0FBU04sT0FBT0ksWUFBWUU7QUFBbUIsSUFBQUgsSUFBQUUsS0FBQUU7QUFBQUMsYUFBQUwsSUFBQTtBQUFBSyxhQUFBSCxLQUFBO0FBQUFHLGFBQUFELEtBQUEiLCJuYW1lcyI6WyJjdmEiLCJjbiIsImFsZXJ0VmFyaWFudHMiLCJ2YXJpYW50cyIsInZhcmlhbnQiLCJkZWZhdWx0IiwiZGVzdHJ1Y3RpdmUiLCJkZWZhdWx0VmFyaWFudHMiLCJBbGVydCIsImNsYXNzTmFtZSIsInByb3BzIiwiX2MiLCJBbGVydFRpdGxlIiwiX2MyIiwiQWxlcnREZXNjcmlwdGlvbiIsIl9jMyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJhbGVydC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGN2YSwgdHlwZSBWYXJpYW50UHJvcHMgfSBmcm9tIFwiY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5XCI7XG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmNvbnN0IGFsZXJ0VmFyaWFudHMgPSBjdmEoXG4gIFwicmVsYXRpdmUgdy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIHB4LTQgcHktMyB0ZXh0LXNtIGdyaWQgaGFzLVs+c3ZnXTpncmlkLWNvbHMtW2NhbGModmFyKC0tc3BhY2luZykqNClfMWZyXSBncmlkLWNvbHMtWzBfMWZyXSBoYXMtWz5zdmddOmdhcC14LTMgZ2FwLXktMC41IGl0ZW1zLXN0YXJ0IFsmPnN2Z106c2l6ZS00IFsmPnN2Z106dHJhbnNsYXRlLXktMC41IFsmPnN2Z106dGV4dC1jdXJyZW50XCIsXG4gIHtcbiAgICB2YXJpYW50czoge1xuICAgICAgdmFyaWFudDoge1xuICAgICAgICBkZWZhdWx0OiBcImJnLWNhcmQgdGV4dC1jYXJkLWZvcmVncm91bmRcIixcbiAgICAgICAgZGVzdHJ1Y3RpdmU6XG4gICAgICAgICAgXCJ0ZXh0LWRlc3RydWN0aXZlIGJnLWNhcmQgWyY+c3ZnXTp0ZXh0LWN1cnJlbnQgKjpkYXRhLVtzbG90PWFsZXJ0LWRlc2NyaXB0aW9uXTp0ZXh0LWRlc3RydWN0aXZlLzkwXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZGVmYXVsdFZhcmlhbnRzOiB7XG4gICAgICB2YXJpYW50OiBcImRlZmF1bHRcIixcbiAgICB9LFxuICB9LFxuKTtcblxuZnVuY3Rpb24gQWxlcnQoe1xuICBjbGFzc05hbWUsXG4gIHZhcmlhbnQsXG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczxcImRpdlwiPiAmIFZhcmlhbnRQcm9wczx0eXBlb2YgYWxlcnRWYXJpYW50cz4pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBkYXRhLXNsb3Q9XCJhbGVydFwiXG4gICAgICByb2xlPVwiYWxlcnRcIlxuICAgICAgY2xhc3NOYW1lPXtjbihhbGVydFZhcmlhbnRzKHsgdmFyaWFudCB9KSwgY2xhc3NOYW1lKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBBbGVydFRpdGxlKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBSZWFjdC5Db21wb25lbnRQcm9wczxcImRpdlwiPikge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGRhdGEtc2xvdD1cImFsZXJ0LXRpdGxlXCJcbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwiY29sLXN0YXJ0LTIgbGluZS1jbGFtcC0xIG1pbi1oLTQgZm9udC1tZWRpdW0gdHJhY2tpbmctdGlnaHRcIixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBBbGVydERlc2NyaXB0aW9uKHtcbiAgY2xhc3NOYW1lLFxuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJkaXZcIj4pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBkYXRhLXNsb3Q9XCJhbGVydC1kZXNjcmlwdGlvblwiXG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcInRleHQtbXV0ZWQtZm9yZWdyb3VuZCBjb2wtc3RhcnQtMiBncmlkIGp1c3RpZnktaXRlbXMtc3RhcnQgZ2FwLTEgdGV4dC1zbSBbJl9wXTpsZWFkaW5nLXJlbGF4ZWRcIixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5leHBvcnQgeyBBbGVydCwgQWxlcnRUaXRsZSwgQWxlcnREZXNjcmlwdGlvbiB9O1xuIl0sImZpbGUiOiIvVXNlcnMvbWFjYm9vay9hcHBsYWEtZGV2ZWxvcG1lbnQvc3JjL2NvbXBvbmVudHMvdWkvYWxlcnQudHN4In0=