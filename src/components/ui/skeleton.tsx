import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/skeleton.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=6baab06c"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/macbook/applaa-development/src/components/ui/skeleton.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { cn } from "/src/lib/utils.ts";
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("bg-accent animate-pulse rounded-md", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/skeleton.tsx",
      lineNumber: 24,
      columnNumber: 5
    },
    this
  );
}
_c = Skeleton;
export { Skeleton };
var _c;
$RefreshReg$(_c, "Skeleton");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/macbook/applaa-development/src/components/ui/skeleton.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/macbook/applaa-development/src/components/ui/skeleton.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBSUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFKSixTQUFTQSxVQUFVO0FBRW5CLFNBQVNDLFNBQVMsRUFBRUMsV0FBVyxHQUFHQyxNQUFtQyxHQUFHO0FBQ3RFLFNBQ0U7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDLGFBQVU7QUFBQSxNQUNWLFdBQVdILEdBQUcsc0NBQXNDRSxTQUFTO0FBQUEsTUFDN0QsR0FBSUM7QUFBQUE7QUFBQUEsSUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFHWTtBQUdoQjtBQUFDQyxLQVJRSDtBQVVULFNBQVNBO0FBQVcsSUFBQUc7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbImNuIiwiU2tlbGV0b24iLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbInNrZWxldG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuXG5mdW5jdGlvbiBTa2VsZXRvbih7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJkaXZcIj4pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBkYXRhLXNsb3Q9XCJza2VsZXRvblwiXG4gICAgICBjbGFzc05hbWU9e2NuKFwiYmctYWNjZW50IGFuaW1hdGUtcHVsc2Ugcm91bmRlZC1tZFwiLCBjbGFzc05hbWUpfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCB7IFNrZWxldG9uIH07XG4iXSwiZmlsZSI6Ii9Vc2Vycy9tYWNib29rL2FwcGxhYS1kZXZlbG9wbWVudC9zcmMvY29tcG9uZW50cy91aS9za2VsZXRvbi50c3gifQ==