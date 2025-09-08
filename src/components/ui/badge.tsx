import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/badge.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=6baab06c"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/macbook/applaa-development/src/components/ui/badge.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { cva } from "/node_modules/.vite/deps/class-variance-authority.js?v=6baab06c";
import { cn } from "/src/lib/utils.ts";
const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsxDEV("div", { className: cn(badgeVariants({ variant }), className), ...props }, void 0, false, {
    fileName: "/Users/macbook/applaa-development/src/components/ui/badge.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}
_c = Badge;
export { Badge, badgeVariants };
var _c;
$RefreshReg$(_c, "Badge");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/macbook/applaa-development/src/components/ui/badge.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/macbook/applaa-development/src/components/ui/badge.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBK0JJOzs7Ozs7Ozs7Ozs7Ozs7O0FBOUJKLFNBQVNBLFdBQThCO0FBRXZDLFNBQVNDLFVBQVU7QUFFbkIsTUFBTUMsZ0JBQWdCRjtBQUFBQSxFQUNwQjtBQUFBLEVBQ0E7QUFBQSxJQUNFRyxVQUFVO0FBQUEsTUFDUkMsU0FBUztBQUFBLFFBQ1BDLFNBQ0U7QUFBQSxRQUNGQyxXQUNFO0FBQUEsUUFDRkMsYUFDRTtBQUFBLFFBQ0ZDLFNBQVM7QUFBQSxNQUNYO0FBQUEsSUFDRjtBQUFBLElBQ0FDLGlCQUFpQjtBQUFBLE1BQ2ZMLFNBQVM7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUNGO0FBTUEsU0FBU00sTUFBTSxFQUFFQyxXQUFXUCxTQUFTLEdBQUdRLE1BQWtCLEdBQUc7QUFDM0QsU0FDRSx1QkFBQyxTQUFJLFdBQVdYLEdBQUdDLGNBQWMsRUFBRUUsUUFBUSxDQUFDLEdBQUdPLFNBQVMsR0FBRyxHQUFJQyxTQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXFFO0FBRXpFO0FBQUNDLEtBSlFIO0FBTVQsU0FBU0EsT0FBT1I7QUFBZ0IsSUFBQVc7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbImN2YSIsImNuIiwiYmFkZ2VWYXJpYW50cyIsInZhcmlhbnRzIiwidmFyaWFudCIsImRlZmF1bHQiLCJzZWNvbmRhcnkiLCJkZXN0cnVjdGl2ZSIsIm91dGxpbmUiLCJkZWZhdWx0VmFyaWFudHMiLCJCYWRnZSIsImNsYXNzTmFtZSIsInByb3BzIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiYmFkZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3ZhLCB0eXBlIFZhcmlhbnRQcm9wcyB9IGZyb20gXCJjbGFzcy12YXJpYW5jZS1hdXRob3JpdHlcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcblxuY29uc3QgYmFkZ2VWYXJpYW50cyA9IGN2YShcbiAgXCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcm91bmRlZC1tZCBib3JkZXIgcHgtMi41IHB5LTAuNSB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdHJhbnNpdGlvbi1jb2xvcnMgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXJpbmcgZm9jdXM6cmluZy1vZmZzZXQtMlwiLFxuICB7XG4gICAgdmFyaWFudHM6IHtcbiAgICAgIHZhcmlhbnQ6IHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBcImJvcmRlci10cmFuc3BhcmVudCBiZy1wcmltYXJ5IHRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kIHNoYWRvdyBob3ZlcjpiZy1wcmltYXJ5LzgwXCIsXG4gICAgICAgIHNlY29uZGFyeTpcbiAgICAgICAgICBcImJvcmRlci10cmFuc3BhcmVudCBiZy1zZWNvbmRhcnkgdGV4dC1zZWNvbmRhcnktZm9yZWdyb3VuZCBob3ZlcjpiZy1zZWNvbmRhcnkvODBcIixcbiAgICAgICAgZGVzdHJ1Y3RpdmU6XG4gICAgICAgICAgXCJib3JkZXItdHJhbnNwYXJlbnQgYmctZGVzdHJ1Y3RpdmUgdGV4dC1kZXN0cnVjdGl2ZS1mb3JlZ3JvdW5kIHNoYWRvdyBob3ZlcjpiZy1kZXN0cnVjdGl2ZS84MFwiLFxuICAgICAgICBvdXRsaW5lOiBcInRleHQtZm9yZWdyb3VuZFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRlZmF1bHRWYXJpYW50czoge1xuICAgICAgdmFyaWFudDogXCJkZWZhdWx0XCIsXG4gICAgfSxcbiAgfSxcbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFkZ2VQcm9wc1xuICBleHRlbmRzIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PixcbiAgICBWYXJpYW50UHJvcHM8dHlwZW9mIGJhZGdlVmFyaWFudHM+IHt9XG5cbmZ1bmN0aW9uIEJhZGdlKHsgY2xhc3NOYW1lLCB2YXJpYW50LCAuLi5wcm9wcyB9OiBCYWRnZVByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NuKGJhZGdlVmFyaWFudHMoeyB2YXJpYW50IH0pLCBjbGFzc05hbWUpfSB7Li4ucHJvcHN9IC8+XG4gICk7XG59XG5cbmV4cG9ydCB7IEJhZGdlLCBiYWRnZVZhcmlhbnRzIH07XG4iXSwiZmlsZSI6Ii9Vc2Vycy9tYWNib29rL2FwcGxhYS1kZXZlbG9wbWVudC9zcmMvY29tcG9uZW50cy91aS9iYWRnZS50c3gifQ==