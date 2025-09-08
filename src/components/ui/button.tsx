import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/button.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=6baab06c"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/macbook/applaa-development/src/components/ui/button.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { Slot } from "/node_modules/.vite/deps/@radix-ui_react-slot.js?v=6baab06c";
import { cva } from "/node_modules/.vite/deps/class-variance-authority.js?v=6baab06c";
import { cn } from "/src/lib/utils.ts";
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        sidebar: "h-16 w-16"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsxDEV(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/button.tsx",
      lineNumber: 71,
      columnNumber: 5
    },
    this
  );
}
_c = Button;
export { Button, buttonVariants };
var _c;
$RefreshReg$(_c, "Button");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/macbook/applaa-development/src/components/ui/button.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/macbook/applaa-development/src/components/ui/button.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBbURJOzs7Ozs7Ozs7Ozs7Ozs7O0FBbERKLFNBQVNBLFlBQVk7QUFDckIsU0FBU0MsV0FBOEI7QUFFdkMsU0FBU0MsVUFBVTtBQUVuQixNQUFNQyxpQkFBaUJGO0FBQUFBLEVBQ3JCO0FBQUEsRUFDQTtBQUFBLElBQ0VHLFVBQVU7QUFBQSxNQUNSQyxTQUFTO0FBQUEsUUFDUEMsU0FDRTtBQUFBLFFBQ0ZDLGFBQ0U7QUFBQSxRQUNGQyxTQUNFO0FBQUEsUUFDRkMsV0FDRTtBQUFBLFFBQ0ZDLE9BQ0U7QUFBQSxRQUNGQyxNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0FDLE1BQU07QUFBQSxRQUNKTixTQUFTO0FBQUEsUUFDVE8sSUFBSTtBQUFBLFFBQ0pDLElBQUk7QUFBQSxRQUNKQyxNQUFNO0FBQUEsUUFDTkMsU0FBUztBQUFBLE1BQ1g7QUFBQSxJQUNGO0FBQUEsSUFDQUMsaUJBQWlCO0FBQUEsTUFDZlosU0FBUztBQUFBLE1BQ1RPLE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUNGO0FBRUEsU0FBU00sT0FBTztBQUFBLEVBQ2RDO0FBQUFBLEVBQ0FkO0FBQUFBLEVBQ0FPO0FBQUFBLEVBQ0FRLFVBQVU7QUFBQSxFQUNWLEdBQUdDO0FBSUgsR0FBRztBQUNILFFBQU1DLE9BQU9GLFVBQVVwQixPQUFPO0FBRTlCLFNBQ0U7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDLGFBQVU7QUFBQSxNQUNWLFdBQVdFLEdBQUdDLGVBQWUsRUFBRUUsU0FBU08sTUFBTU8sVUFBVSxDQUFDLENBQUM7QUFBQSxNQUMxRCxHQUFJRTtBQUFBQTtBQUFBQSxJQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUdZO0FBR2hCO0FBQUNFLEtBbkJRTDtBQXFCVCxTQUFTQSxRQUFRZjtBQUFpQixJQUFBb0I7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIlNsb3QiLCJjdmEiLCJjbiIsImJ1dHRvblZhcmlhbnRzIiwidmFyaWFudHMiLCJ2YXJpYW50IiwiZGVmYXVsdCIsImRlc3RydWN0aXZlIiwib3V0bGluZSIsInNlY29uZGFyeSIsImdob3N0IiwibGluayIsInNpemUiLCJzbSIsImxnIiwiaWNvbiIsInNpZGViYXIiLCJkZWZhdWx0VmFyaWFudHMiLCJCdXR0b24iLCJjbGFzc05hbWUiLCJhc0NoaWxkIiwicHJvcHMiLCJDb21wIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiYnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2xvdCB9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3Qtc2xvdFwiO1xuaW1wb3J0IHsgY3ZhLCB0eXBlIFZhcmlhbnRQcm9wcyB9IGZyb20gXCJjbGFzcy12YXJpYW5jZS1hdXRob3JpdHlcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiLi4vLi4vbGliL3V0aWxzXCI7XG5cbmNvbnN0IGJ1dHRvblZhcmlhbnRzID0gY3ZhKFxuICBcImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiB3aGl0ZXNwYWNlLW5vd3JhcCByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1hbGwgZGlzYWJsZWQ6cG9pbnRlci1ldmVudHMtbm9uZSBkaXNhYmxlZDpvcGFjaXR5LTUwIFsmX3N2Z106cG9pbnRlci1ldmVudHMtbm9uZSBbJl9zdmc6bm90KFtjbGFzcyo9J3NpemUtJ10pXTpzaXplLTQgc2hyaW5rLTAgWyZfc3ZnXTpzaHJpbmstMCBvdXRsaW5lLW5vbmUgZm9jdXMtdmlzaWJsZTpib3JkZXItcmluZyBmb2N1cy12aXNpYmxlOnJpbmctcmluZy81MCBmb2N1cy12aXNpYmxlOnJpbmctWzNweF0gYXJpYS1pbnZhbGlkOnJpbmctZGVzdHJ1Y3RpdmUvMjAgZGFyazphcmlhLWludmFsaWQ6cmluZy1kZXN0cnVjdGl2ZS80MCBhcmlhLWludmFsaWQ6Ym9yZGVyLWRlc3RydWN0aXZlXCIsXG4gIHtcbiAgICB2YXJpYW50czoge1xuICAgICAgdmFyaWFudDoge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIFwiYmctcHJpbWFyeSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBzaGFkb3cteHMgaG92ZXI6YmctcHJpbWFyeS85MFwiLFxuICAgICAgICBkZXN0cnVjdGl2ZTpcbiAgICAgICAgICBcImJnLWRlc3RydWN0aXZlIHRleHQtd2hpdGUgc2hhZG93LXhzIGhvdmVyOmJnLWRlc3RydWN0aXZlLzkwIGZvY3VzLXZpc2libGU6cmluZy1kZXN0cnVjdGl2ZS8yMCBkYXJrOmZvY3VzLXZpc2libGU6cmluZy1kZXN0cnVjdGl2ZS80MCBkYXJrOmJnLWRlc3RydWN0aXZlLzYwXCIsXG4gICAgICAgIG91dGxpbmU6XG4gICAgICAgICAgXCJib3JkZXIgYmctYmFja2dyb3VuZCBzaGFkb3cteHMgaG92ZXI6YmctYWNjZW50IGhvdmVyOnRleHQtYWNjZW50LWZvcmVncm91bmQgZGFyazpiZy1pbnB1dC8zMCBkYXJrOmJvcmRlci1pbnB1dCBkYXJrOmhvdmVyOmJnLWlucHV0LzUwXCIsXG4gICAgICAgIHNlY29uZGFyeTpcbiAgICAgICAgICBcImJnLXNlY29uZGFyeSB0ZXh0LXNlY29uZGFyeS1mb3JlZ3JvdW5kIHNoYWRvdy14cyBob3ZlcjpiZy1zZWNvbmRhcnkvODBcIixcbiAgICAgICAgZ2hvc3Q6XG4gICAgICAgICAgXCJob3ZlcjpiZy1hY2NlbnQgaG92ZXI6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZCBkYXJrOmhvdmVyOmJnLWFjY2VudC81MFwiLFxuICAgICAgICBsaW5rOiBcInRleHQtcHJpbWFyeSB1bmRlcmxpbmUtb2Zmc2V0LTQgaG92ZXI6dW5kZXJsaW5lXCIsXG4gICAgICB9LFxuICAgICAgc2l6ZToge1xuICAgICAgICBkZWZhdWx0OiBcImgtOSBweC00IHB5LTIgaGFzLVs+c3ZnXTpweC0zXCIsXG4gICAgICAgIHNtOiBcImgtOCByb3VuZGVkLW1kIGdhcC0xLjUgcHgtMyBoYXMtWz5zdmddOnB4LTIuNVwiLFxuICAgICAgICBsZzogXCJoLTEwIHJvdW5kZWQtbWQgcHgtNiBoYXMtWz5zdmddOnB4LTRcIixcbiAgICAgICAgaWNvbjogXCJzaXplLTlcIixcbiAgICAgICAgc2lkZWJhcjogXCJoLTE2IHctMTZcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkZWZhdWx0VmFyaWFudHM6IHtcbiAgICAgIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxuICAgICAgc2l6ZTogXCJkZWZhdWx0XCIsXG4gICAgfSxcbiAgfSxcbik7XG5cbmZ1bmN0aW9uIEJ1dHRvbih7XG4gIGNsYXNzTmFtZSxcbiAgdmFyaWFudCxcbiAgc2l6ZSxcbiAgYXNDaGlsZCA9IGZhbHNlLFxuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJidXR0b25cIj4gJlxuICBWYXJpYW50UHJvcHM8dHlwZW9mIGJ1dHRvblZhcmlhbnRzPiAmIHtcbiAgICBhc0NoaWxkPzogYm9vbGVhbjtcbiAgfSkge1xuICBjb25zdCBDb21wID0gYXNDaGlsZCA/IFNsb3QgOiBcImJ1dHRvblwiO1xuXG4gIHJldHVybiAoXG4gICAgPENvbXBcbiAgICAgIGRhdGEtc2xvdD1cImJ1dHRvblwiXG4gICAgICBjbGFzc05hbWU9e2NuKGJ1dHRvblZhcmlhbnRzKHsgdmFyaWFudCwgc2l6ZSwgY2xhc3NOYW1lIH0pKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5leHBvcnQgeyBCdXR0b24sIGJ1dHRvblZhcmlhbnRzIH07XG4iXSwiZmlsZSI6Ii9Vc2Vycy9tYWNib29rL2FwcGxhYS1kZXZlbG9wbWVudC9zcmMvY29tcG9uZW50cy91aS9idXR0b24udHN4In0=