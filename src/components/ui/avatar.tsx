import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/avatar.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=6baab06c"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/macbook/applaa-development/src/components/ui/avatar.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=6baab06c"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import * as AvatarPrimitive from "/node_modules/.vite/deps/@radix-ui_react-avatar.js?v=6baab06c";
import { cn } from "/src/lib/utils.ts";
const Avatar = React.forwardRef(
  _c = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    AvatarPrimitive.Root,
    {
      ref,
      className: cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/avatar.tsx",
      lineNumber: 29,
      columnNumber: 1
    },
    this
  )
);
_c2 = Avatar;
Avatar.displayName = AvatarPrimitive.Root.displayName;
const AvatarImage = React.forwardRef(
  _c3 = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    AvatarPrimitive.Image,
    {
      ref,
      className: cn("aspect-square h-full w-full", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/avatar.tsx",
      lineNumber: 44,
      columnNumber: 1
    },
    this
  )
);
_c4 = AvatarImage;
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
const AvatarFallback = React.forwardRef(
  _c5 = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    AvatarPrimitive.Fallback,
    {
      ref,
      className: cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/avatar.tsx",
      lineNumber: 56,
      columnNumber: 1
    },
    this
  )
);
_c6 = AvatarFallback;
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
export { Avatar, AvatarImage, AvatarFallback };
var _c, _c2, _c3, _c4, _c5, _c6;
$RefreshReg$(_c, "Avatar$React.forwardRef");
$RefreshReg$(_c2, "Avatar");
$RefreshReg$(_c3, "AvatarImage$React.forwardRef");
$RefreshReg$(_c4, "AvatarImage");
$RefreshReg$(_c5, "AvatarFallback$React.forwardRef");
$RefreshReg$(_c6, "AvatarFallback");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/macbook/applaa-development/src/components/ui/avatar.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/macbook/applaa-development/src/components/ui/avatar.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBU0U7Ozs7Ozs7Ozs7Ozs7Ozs7QUFURixZQUFZQSxXQUFXO0FBQ3ZCLFlBQVlDLHFCQUFxQjtBQUVqQyxTQUFTQyxVQUFVO0FBRW5CLE1BQU1DLFNBQVNILE1BQU1JO0FBQUFBLEVBR3BCQyxLQUFDQSxDQUFDLEVBQUVDLFdBQVcsR0FBR0MsTUFBTSxHQUFHQyxRQUMxQjtBQUFBLElBQUMsZ0JBQWdCO0FBQUEsSUFBaEI7QUFBQSxNQUNDO0FBQUEsTUFDQSxXQUFXTjtBQUFBQSxRQUNUO0FBQUEsUUFDQUk7QUFBQUEsTUFDRjtBQUFBLE1BQ0EsR0FBSUM7QUFBQUE7QUFBQUEsSUFOTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNWTtBQUViO0FBQUNFLE1BWklOO0FBYU5BLE9BQU9PLGNBQWNULGdCQUFnQlUsS0FBS0Q7QUFFMUMsTUFBTUUsY0FBY1osTUFBTUk7QUFBQUEsRUFHekJTLE1BQUNBLENBQUMsRUFBRVAsV0FBVyxHQUFHQyxNQUFNLEdBQUdDLFFBQzFCO0FBQUEsSUFBQyxnQkFBZ0I7QUFBQSxJQUFoQjtBQUFBLE1BQ0M7QUFBQSxNQUNBLFdBQVdOLEdBQUcsK0JBQStCSSxTQUFTO0FBQUEsTUFDdEQsR0FBSUM7QUFBQUE7QUFBQUEsSUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFHWTtBQUViO0FBQUNPLE1BVElGO0FBVU5BLFlBQVlGLGNBQWNULGdCQUFnQmMsTUFBTUw7QUFFaEQsTUFBTU0saUJBQWlCaEIsTUFBTUk7QUFBQUEsRUFHNUJhLE1BQUNBLENBQUMsRUFBRVgsV0FBVyxHQUFHQyxNQUFNLEdBQUdDLFFBQzFCO0FBQUEsSUFBQyxnQkFBZ0I7QUFBQSxJQUFoQjtBQUFBLE1BQ0M7QUFBQSxNQUNBLFdBQVdOO0FBQUFBLFFBQ1Q7QUFBQSxRQUNBSTtBQUFBQSxNQUNGO0FBQUEsTUFDQSxHQUFJQztBQUFBQTtBQUFBQSxJQU5OO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1ZO0FBRWI7QUFBQ1csTUFaSUY7QUFhTkEsZUFBZU4sY0FBY1QsZ0JBQWdCa0IsU0FBU1Q7QUFFdEQsU0FBU1AsUUFBUVMsYUFBYUk7QUFBZ0IsSUFBQVgsSUFBQUksS0FBQUksS0FBQUMsS0FBQUcsS0FBQUM7QUFBQUUsYUFBQWYsSUFBQTtBQUFBZSxhQUFBWCxLQUFBO0FBQUFXLGFBQUFQLEtBQUE7QUFBQU8sYUFBQU4sS0FBQTtBQUFBTSxhQUFBSCxLQUFBO0FBQUFHLGFBQUFGLEtBQUEiLCJuYW1lcyI6WyJSZWFjdCIsIkF2YXRhclByaW1pdGl2ZSIsImNuIiwiQXZhdGFyIiwiZm9yd2FyZFJlZiIsIl9jIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJyZWYiLCJfYzIiLCJkaXNwbGF5TmFtZSIsIlJvb3QiLCJBdmF0YXJJbWFnZSIsIl9jMyIsIl9jNCIsIkltYWdlIiwiQXZhdGFyRmFsbGJhY2siLCJfYzUiLCJfYzYiLCJGYWxsYmFjayIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJhdmF0YXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgKiBhcyBBdmF0YXJQcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1hdmF0YXJcIlxuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiXG5cbmNvbnN0IEF2YXRhciA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIEF2YXRhclByaW1pdGl2ZS5Sb290PixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBBdmF0YXJQcmltaXRpdmUuUm9vdD5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPEF2YXRhclByaW1pdGl2ZS5Sb290XG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwicmVsYXRpdmUgZmxleCBoLTEwIHctMTAgc2hyaW5rLTAgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtZnVsbFwiLFxuICAgICAgY2xhc3NOYW1lXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKVxuQXZhdGFyLmRpc3BsYXlOYW1lID0gQXZhdGFyUHJpbWl0aXZlLlJvb3QuZGlzcGxheU5hbWVcblxuY29uc3QgQXZhdGFySW1hZ2UgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBBdmF0YXJQcmltaXRpdmUuSW1hZ2U+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIEF2YXRhclByaW1pdGl2ZS5JbWFnZT5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPEF2YXRhclByaW1pdGl2ZS5JbWFnZVxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXCJhc3BlY3Qtc3F1YXJlIGgtZnVsbCB3LWZ1bGxcIiwgY2xhc3NOYW1lKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKVxuQXZhdGFySW1hZ2UuZGlzcGxheU5hbWUgPSBBdmF0YXJQcmltaXRpdmUuSW1hZ2UuZGlzcGxheU5hbWVcblxuY29uc3QgQXZhdGFyRmFsbGJhY2sgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBBdmF0YXJQcmltaXRpdmUuRmFsbGJhY2s+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIEF2YXRhclByaW1pdGl2ZS5GYWxsYmFjaz5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPEF2YXRhclByaW1pdGl2ZS5GYWxsYmFja1xuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcImZsZXggaC1mdWxsIHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGJnLW11dGVkXCIsXG4gICAgICBjbGFzc05hbWVcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpXG5BdmF0YXJGYWxsYmFjay5kaXNwbGF5TmFtZSA9IEF2YXRhclByaW1pdGl2ZS5GYWxsYmFjay5kaXNwbGF5TmFtZVxuXG5leHBvcnQgeyBBdmF0YXIsIEF2YXRhckltYWdlLCBBdmF0YXJGYWxsYmFjayB9XG5cblxuIl0sImZpbGUiOiIvVXNlcnMvbWFjYm9vay9hcHBsYWEtZGV2ZWxvcG1lbnQvc3JjL2NvbXBvbmVudHMvdWkvYXZhdGFyLnRzeCJ9