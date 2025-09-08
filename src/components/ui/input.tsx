import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/input.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=6baab06c"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/macbook/applaa-development/src/components/ui/input.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { cn } from "/src/lib/utils.ts";
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsxDEV(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/input.tsx",
      lineNumber: 26,
      columnNumber: 5
    },
    this
  );
}
_c = Input;
export { Input };
var _c;
$RefreshReg$(_c, "Input");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/macbook/applaa-development/src/components/ui/input.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/macbook/applaa-development/src/components/ui/input.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBTUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFKSixTQUFTQSxVQUFVO0FBRW5CLFNBQVNDLE1BQU0sRUFBRUMsV0FBV0MsTUFBTSxHQUFHQyxNQUFxQyxHQUFHO0FBQzNFLFNBQ0U7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDO0FBQUEsTUFDQSxhQUFVO0FBQUEsTUFDVixXQUFXSjtBQUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBRTtBQUFBQSxNQUNGO0FBQUEsTUFDQSxHQUFJRTtBQUFBQTtBQUFBQSxJQVROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVNZO0FBR2hCO0FBQUNDLEtBZFFKO0FBZ0JULFNBQVNBO0FBQVEsSUFBQUk7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbImNuIiwiSW5wdXQiLCJjbGFzc05hbWUiLCJ0eXBlIiwicHJvcHMiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJpbnB1dC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiLi4vLi4vbGliL3V0aWxzXCI7XG5cbmZ1bmN0aW9uIElucHV0KHsgY2xhc3NOYW1lLCB0eXBlLCAuLi5wcm9wcyB9OiBSZWFjdC5Db21wb25lbnRQcm9wczxcImlucHV0XCI+KSB7XG4gIHJldHVybiAoXG4gICAgPGlucHV0XG4gICAgICB0eXBlPXt0eXBlfVxuICAgICAgZGF0YS1zbG90PVwiaW5wdXRcIlxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJmaWxlOnRleHQtZm9yZWdyb3VuZCBwbGFjZWhvbGRlcjp0ZXh0LW11dGVkLWZvcmVncm91bmQgc2VsZWN0aW9uOmJnLXByaW1hcnkgc2VsZWN0aW9uOnRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kIGRhcms6YmctaW5wdXQvMzAgYm9yZGVyLWlucHV0IGZsZXggaC05IHctZnVsbCBtaW4tdy0wIHJvdW5kZWQtbWQgYm9yZGVyIGJnLXRyYW5zcGFyZW50IHB4LTMgcHktMSB0ZXh0LWJhc2Ugc2hhZG93LXhzIHRyYW5zaXRpb24tW2NvbG9yLGJveC1zaGFkb3ddIG91dGxpbmUtbm9uZSBmaWxlOmlubGluZS1mbGV4IGZpbGU6aC03IGZpbGU6Ym9yZGVyLTAgZmlsZTpiZy10cmFuc3BhcmVudCBmaWxlOnRleHQtc20gZmlsZTpmb250LW1lZGl1bSBkaXNhYmxlZDpwb2ludGVyLWV2ZW50cy1ub25lIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZCBkaXNhYmxlZDpvcGFjaXR5LTUwIG1kOnRleHQtc21cIixcbiAgICAgICAgXCJmb2N1cy12aXNpYmxlOmJvcmRlci1yaW5nIGZvY3VzLXZpc2libGU6cmluZy1yaW5nLzUwIGZvY3VzLXZpc2libGU6cmluZy1bM3B4XVwiLFxuICAgICAgICBcImFyaWEtaW52YWxpZDpyaW5nLWRlc3RydWN0aXZlLzIwIGRhcms6YXJpYS1pbnZhbGlkOnJpbmctZGVzdHJ1Y3RpdmUvNDAgYXJpYS1pbnZhbGlkOmJvcmRlci1kZXN0cnVjdGl2ZVwiLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCB7IElucHV0IH07XG4iXSwiZmlsZSI6Ii9Vc2Vycy9tYWNib29rL2FwcGxhYS1kZXZlbG9wbWVudC9zcmMvY29tcG9uZW50cy91aS9pbnB1dC50c3gifQ==