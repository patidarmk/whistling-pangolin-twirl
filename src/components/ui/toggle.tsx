import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/toggle.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=6baab06c"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/macbook/applaa-development/src/components/ui/toggle.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
"use client";
import * as TogglePrimitive from "/node_modules/.vite/deps/@radix-ui_react-toggle.js?v=6baab06c";
import { cva } from "/node_modules/.vite/deps/class-variance-authority.js?v=6baab06c";
import { cn } from "/src/lib/utils.ts";
const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Toggle({
  className,
  variant,
  size,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    TogglePrimitive.Root,
    {
      "data-slot": "toggle",
      className: cn(toggleVariants({ variant, size, className })),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/toggle.tsx",
      lineNumber: 58,
      columnNumber: 5
    },
    this
  );
}
_c = Toggle;
export { Toggle, toggleVariants };
var _c;
$RefreshReg$(_c, "Toggle");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/macbook/applaa-development/src/components/ui/toggle.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/macbook/applaa-development/src/components/ui/toggle.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBc0NJOzs7Ozs7Ozs7Ozs7Ozs7O0FBdENKO0FBR0EsWUFBWUEscUJBQXFCO0FBQ2pDLFNBQVNDLFdBQThCO0FBRXZDLFNBQVNDLFVBQVU7QUFFbkIsTUFBTUMsaUJBQWlCRjtBQUFBQSxFQUNyQjtBQUFBLEVBQ0E7QUFBQSxJQUNFRyxVQUFVO0FBQUEsTUFDUkMsU0FBUztBQUFBLFFBQ1BDLFNBQVM7QUFBQSxRQUNUQyxTQUNFO0FBQUEsTUFDSjtBQUFBLE1BQ0FDLE1BQU07QUFBQSxRQUNKRixTQUFTO0FBQUEsUUFDVEcsSUFBSTtBQUFBLFFBQ0pDLElBQUk7QUFBQSxNQUNOO0FBQUEsSUFDRjtBQUFBLElBQ0FDLGlCQUFpQjtBQUFBLE1BQ2ZOLFNBQVM7QUFBQSxNQUNURyxNQUFNO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFDRjtBQUVBLFNBQVNJLE9BQU87QUFBQSxFQUNkQztBQUFBQSxFQUNBUjtBQUFBQSxFQUNBRztBQUFBQSxFQUNBLEdBQUdNO0FBRStCLEdBQUc7QUFDckMsU0FDRTtBQUFBLElBQUMsZ0JBQWdCO0FBQUEsSUFBaEI7QUFBQSxNQUNDLGFBQVU7QUFBQSxNQUNWLFdBQVdaLEdBQUdDLGVBQWUsRUFBRUUsU0FBU0csTUFBTUssVUFBVSxDQUFDLENBQUM7QUFBQSxNQUMxRCxHQUFJQztBQUFBQTtBQUFBQSxJQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUdZO0FBR2hCO0FBQUNDLEtBZFFIO0FBZ0JULFNBQVNBLFFBQVFUO0FBQWlCLElBQUFZO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJUb2dnbGVQcmltaXRpdmUiLCJjdmEiLCJjbiIsInRvZ2dsZVZhcmlhbnRzIiwidmFyaWFudHMiLCJ2YXJpYW50IiwiZGVmYXVsdCIsIm91dGxpbmUiLCJzaXplIiwic20iLCJsZyIsImRlZmF1bHRWYXJpYW50cyIsIlRvZ2dsZSIsImNsYXNzTmFtZSIsInByb3BzIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsidG9nZ2xlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBUb2dnbGVQcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC10b2dnbGVcIjtcbmltcG9ydCB7IGN2YSwgdHlwZSBWYXJpYW50UHJvcHMgfSBmcm9tIFwiY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5XCI7XG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmNvbnN0IHRvZ2dsZVZhcmlhbnRzID0gY3ZhKFxuICBcImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW0gaG92ZXI6YmctbXV0ZWQgaG92ZXI6dGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGRpc2FibGVkOnBvaW50ZXItZXZlbnRzLW5vbmUgZGlzYWJsZWQ6b3BhY2l0eS01MCBkYXRhLVtzdGF0ZT1vbl06YmctYWNjZW50IGRhdGEtW3N0YXRlPW9uXTp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIFsmX3N2Z106cG9pbnRlci1ldmVudHMtbm9uZSBbJl9zdmc6bm90KFtjbGFzcyo9J3NpemUtJ10pXTpzaXplLTQgWyZfc3ZnXTpzaHJpbmstMCBmb2N1cy12aXNpYmxlOmJvcmRlci1yaW5nIGZvY3VzLXZpc2libGU6cmluZy1yaW5nLzUwIGZvY3VzLXZpc2libGU6cmluZy1bM3B4XSBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1bY29sb3IsYm94LXNoYWRvd10gYXJpYS1pbnZhbGlkOnJpbmctZGVzdHJ1Y3RpdmUvMjAgZGFyazphcmlhLWludmFsaWQ6cmluZy1kZXN0cnVjdGl2ZS80MCBhcmlhLWludmFsaWQ6Ym9yZGVyLWRlc3RydWN0aXZlIHdoaXRlc3BhY2Utbm93cmFwXCIsXG4gIHtcbiAgICB2YXJpYW50czoge1xuICAgICAgdmFyaWFudDoge1xuICAgICAgICBkZWZhdWx0OiBcImJnLXRyYW5zcGFyZW50XCIsXG4gICAgICAgIG91dGxpbmU6XG4gICAgICAgICAgXCJib3JkZXIgYm9yZGVyLWlucHV0IGJnLXRyYW5zcGFyZW50IHNoYWRvdy14cyBob3ZlcjpiZy1hY2NlbnQgaG92ZXI6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZFwiLFxuICAgICAgfSxcbiAgICAgIHNpemU6IHtcbiAgICAgICAgZGVmYXVsdDogXCJoLTkgcHgtMiBtaW4tdy05XCIsXG4gICAgICAgIHNtOiBcImgtOCBweC0xLjUgbWluLXctOFwiLFxuICAgICAgICBsZzogXCJoLTEwIHB4LTIuNSBtaW4tdy0xMFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRlZmF1bHRWYXJpYW50czoge1xuICAgICAgdmFyaWFudDogXCJkZWZhdWx0XCIsXG4gICAgICBzaXplOiBcImRlZmF1bHRcIixcbiAgICB9LFxuICB9LFxuKTtcblxuZnVuY3Rpb24gVG9nZ2xlKHtcbiAgY2xhc3NOYW1lLFxuICB2YXJpYW50LFxuICBzaXplLFxuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFRvZ2dsZVByaW1pdGl2ZS5Sb290PiAmXG4gIFZhcmlhbnRQcm9wczx0eXBlb2YgdG9nZ2xlVmFyaWFudHM+KSB7XG4gIHJldHVybiAoXG4gICAgPFRvZ2dsZVByaW1pdGl2ZS5Sb290XG4gICAgICBkYXRhLXNsb3Q9XCJ0b2dnbGVcIlxuICAgICAgY2xhc3NOYW1lPXtjbih0b2dnbGVWYXJpYW50cyh7IHZhcmlhbnQsIHNpemUsIGNsYXNzTmFtZSB9KSl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZXhwb3J0IHsgVG9nZ2xlLCB0b2dnbGVWYXJpYW50cyB9O1xuIl0sImZpbGUiOiIvVXNlcnMvbWFjYm9vay9hcHBsYWEtZGV2ZWxvcG1lbnQvc3JjL2NvbXBvbmVudHMvdWkvdG9nZ2xlLnRzeCJ9