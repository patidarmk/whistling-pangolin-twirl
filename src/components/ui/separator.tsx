import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/separator.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=6baab06c"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/macbook/applaa-development/src/components/ui/separator.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
"use client";
import * as SeparatorPrimitive from "/node_modules/.vite/deps/@radix-ui_react-separator.js?v=6baab06c";
import { cn } from "/src/lib/utils.ts";
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    SeparatorPrimitive.Root,
    {
      "data-slot": "separator-root",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/separator.tsx",
      lineNumber: 34,
      columnNumber: 5
    },
    this
  );
}
_c = Separator;
export { Separator };
var _c;
$RefreshReg$(_c, "Separator");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/macbook/applaa-development/src/components/ui/separator.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/macbook/applaa-development/src/components/ui/separator.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBY0k7Ozs7Ozs7Ozs7Ozs7Ozs7QUFkSjtBQUdBLFlBQVlBLHdCQUF3QjtBQUVwQyxTQUFTQyxVQUFVO0FBRW5CLFNBQVNDLFVBQVU7QUFBQSxFQUNqQkM7QUFBQUEsRUFDQUMsY0FBYztBQUFBLEVBQ2RDLGFBQWE7QUFBQSxFQUNiLEdBQUdDO0FBQ2lELEdBQUc7QUFDdkQsU0FDRTtBQUFBLElBQUMsbUJBQW1CO0FBQUEsSUFBbkI7QUFBQSxNQUNDLGFBQVU7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLE1BQ0EsV0FBV0w7QUFBQUEsUUFDVDtBQUFBLFFBQ0FFO0FBQUFBLE1BQ0Y7QUFBQSxNQUNBLEdBQUlHO0FBQUFBO0FBQUFBLElBUk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBUVk7QUFHaEI7QUFBQ0MsS0FsQlFMO0FBb0JULFNBQVNBO0FBQVksSUFBQUs7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIlNlcGFyYXRvclByaW1pdGl2ZSIsImNuIiwiU2VwYXJhdG9yIiwiY2xhc3NOYW1lIiwib3JpZW50YXRpb24iLCJkZWNvcmF0aXZlIiwicHJvcHMiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJzZXBhcmF0b3IudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgdHlwZSAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgU2VwYXJhdG9yUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3Qtc2VwYXJhdG9yXCI7XG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmZ1bmN0aW9uIFNlcGFyYXRvcih7XG4gIGNsYXNzTmFtZSxcbiAgb3JpZW50YXRpb24gPSBcImhvcml6b250YWxcIixcbiAgZGVjb3JhdGl2ZSA9IHRydWUsXG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgU2VwYXJhdG9yUHJpbWl0aXZlLlJvb3Q+KSB7XG4gIHJldHVybiAoXG4gICAgPFNlcGFyYXRvclByaW1pdGl2ZS5Sb290XG4gICAgICBkYXRhLXNsb3Q9XCJzZXBhcmF0b3Itcm9vdFwiXG4gICAgICBkZWNvcmF0aXZlPXtkZWNvcmF0aXZlfVxuICAgICAgb3JpZW50YXRpb249e29yaWVudGF0aW9ufVxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJiZy1ib3JkZXIgc2hyaW5rLTAgZGF0YS1bb3JpZW50YXRpb249aG9yaXpvbnRhbF06aC1weCBkYXRhLVtvcmllbnRhdGlvbj1ob3Jpem9udGFsXTp3LWZ1bGwgZGF0YS1bb3JpZW50YXRpb249dmVydGljYWxdOmgtZnVsbCBkYXRhLVtvcmllbnRhdGlvbj12ZXJ0aWNhbF06dy1weFwiLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCB7IFNlcGFyYXRvciB9O1xuIl0sImZpbGUiOiIvVXNlcnMvbWFjYm9vay9hcHBsYWEtZGV2ZWxvcG1lbnQvc3JjL2NvbXBvbmVudHMvdWkvc2VwYXJhdG9yLnRzeCJ9