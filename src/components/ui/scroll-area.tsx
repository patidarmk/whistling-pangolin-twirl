import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/scroll-area.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=6baab06c"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/macbook/applaa-development/src/components/ui/scroll-area.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=6baab06c"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import * as ScrollAreaPrimitive from "/node_modules/.vite/deps/@radix-ui_react-scroll-area.js?v=6baab06c";
import { cn } from "/src/lib/utils.ts";
const ScrollArea = React.forwardRef(
  _c = ({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    ScrollAreaPrimitive.Root,
    {
      ref,
      className: cn("relative overflow-hidden", className),
      ...props,
      children: [
        /* @__PURE__ */ jsxDEV(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]", children }, void 0, false, {
          fileName: "/Users/macbook/applaa-development/src/components/ui/scroll-area.tsx",
          lineNumber: 34,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ jsxDEV(ScrollBar, {}, void 0, false, {
          fileName: "/Users/macbook/applaa-development/src/components/ui/scroll-area.tsx",
          lineNumber: 37,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ jsxDEV(ScrollAreaPrimitive.Corner, {}, void 0, false, {
          fileName: "/Users/macbook/applaa-development/src/components/ui/scroll-area.tsx",
          lineNumber: 38,
          columnNumber: 5
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/scroll-area.tsx",
      lineNumber: 29,
      columnNumber: 1
    },
    this
  )
);
_c2 = ScrollArea;
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
const ScrollBar = React.forwardRef(
  _c3 = ({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsxDEV(
    ScrollAreaPrimitive.ScrollAreaScrollbar,
    {
      ref,
      orientation,
      className: cn(
        "flex touch-none select-none transition-colors",
        orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
        orientation === "horizontal" && "h-2.5 border-t border-t-transparent p-[1px]",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxDEV(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" }, void 0, false, {
        fileName: "/Users/macbook/applaa-development/src/components/ui/scroll-area.tsx",
        lineNumber: 60,
        columnNumber: 5
      }, this)
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/scroll-area.tsx",
      lineNumber: 47,
      columnNumber: 1
    },
    this
  )
);
_c4 = ScrollBar;
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;
export { ScrollArea, ScrollBar };
var _c, _c2, _c3, _c4;
$RefreshReg$(_c, "ScrollArea$React.forwardRef");
$RefreshReg$(_c2, "ScrollArea");
$RefreshReg$(_c3, "ScrollBar$React.forwardRef");
$RefreshReg$(_c4, "ScrollBar");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/macbook/applaa-development/src/components/ui/scroll-area.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/macbook/applaa-development/src/components/ui/scroll-area.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBY0k7Ozs7Ozs7Ozs7Ozs7Ozs7QUFkSixZQUFZQSxXQUFXO0FBQ3ZCLFlBQVlDLHlCQUF5QjtBQUVyQyxTQUFTQyxVQUFVO0FBRW5CLE1BQU1DLGFBQWFILE1BQU1JO0FBQUFBLEVBR3hCQyxLQUFDQSxDQUFDLEVBQUVDLFdBQVdDLFVBQVUsR0FBR0MsTUFBTSxHQUFHQyxRQUNwQztBQUFBLElBQUMsb0JBQW9CO0FBQUEsSUFBcEI7QUFBQSxNQUNDO0FBQUEsTUFDQSxXQUFXUCxHQUFHLDRCQUE0QkksU0FBUztBQUFBLE1BQ25ELEdBQUlFO0FBQUFBLE1BRUo7QUFBQSwrQkFBQyxvQkFBb0IsVUFBcEIsRUFBNkIsV0FBVSxtQ0FDckNELFlBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUVBO0FBQUEsUUFDQSx1QkFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBVTtBQUFBLFFBQ1YsdUJBQUMsb0JBQW9CLFFBQXBCLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUEyQjtBQUFBO0FBQUE7QUFBQSxJQVQ3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFVQTtBQUNEO0FBQUVHLE1BZkdQO0FBZ0JOQSxXQUFXUSxjQUFjVixvQkFBb0JXLEtBQUtEO0FBRWxELE1BQU1FLFlBQVliLE1BQU1JO0FBQUFBLEVBR3ZCVSxNQUFDQSxDQUFDLEVBQUVSLFdBQVdTLGNBQWMsWUFBWSxHQUFHUCxNQUFNLEdBQUdDLFFBQ3BEO0FBQUEsSUFBQyxvQkFBb0I7QUFBQSxJQUFwQjtBQUFBLE1BQ0M7QUFBQSxNQUNBO0FBQUEsTUFDQSxXQUFXUDtBQUFBQSxRQUNUO0FBQUEsUUFDQWEsZ0JBQWdCLGNBQ2Q7QUFBQSxRQUNGQSxnQkFBZ0IsZ0JBQ2Q7QUFBQSxRQUNGVDtBQUFBQSxNQUNGO0FBQUEsTUFDQSxHQUFJRTtBQUFBQSxNQUVKLGlDQUFDLG9CQUFvQixpQkFBcEIsRUFBb0MsV0FBVSw0Q0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUF1RjtBQUFBO0FBQUEsSUFiekY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBY0E7QUFDRDtBQUFFUSxNQW5CR0g7QUFvQk5BLFVBQVVGLGNBQWNWLG9CQUFvQmdCLG9CQUFvQk47QUFFaEUsU0FBU1IsWUFBWVU7QUFBWSxJQUFBUixJQUFBSyxLQUFBSSxLQUFBRTtBQUFBRSxhQUFBYixJQUFBO0FBQUFhLGFBQUFSLEtBQUE7QUFBQVEsYUFBQUosS0FBQTtBQUFBSSxhQUFBRixLQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJTY3JvbGxBcmVhUHJpbWl0aXZlIiwiY24iLCJTY3JvbGxBcmVhIiwiZm9yd2FyZFJlZiIsIl9jIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJwcm9wcyIsInJlZiIsIl9jMiIsImRpc3BsYXlOYW1lIiwiUm9vdCIsIlNjcm9sbEJhciIsIl9jMyIsIm9yaWVudGF0aW9uIiwiX2M0IiwiU2Nyb2xsQXJlYVNjcm9sbGJhciIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJzY3JvbGwtYXJlYS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBTY3JvbGxBcmVhUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3Qtc2Nyb2xsLWFyZWFcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcblxuY29uc3QgU2Nyb2xsQXJlYSA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIFNjcm9sbEFyZWFQcmltaXRpdmUuUm9vdD4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgU2Nyb2xsQXJlYVByaW1pdGl2ZS5Sb290PlxuPigoeyBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPFNjcm9sbEFyZWFQcmltaXRpdmUuUm9vdFxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXCJyZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIiwgY2xhc3NOYW1lKX1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICA8U2Nyb2xsQXJlYVByaW1pdGl2ZS5WaWV3cG9ydCBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIHJvdW5kZWQtW2luaGVyaXRdXCI+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9TY3JvbGxBcmVhUHJpbWl0aXZlLlZpZXdwb3J0PlxuICAgIDxTY3JvbGxCYXIgLz5cbiAgICA8U2Nyb2xsQXJlYVByaW1pdGl2ZS5Db3JuZXIgLz5cbiAgPC9TY3JvbGxBcmVhUHJpbWl0aXZlLlJvb3Q+XG4pKTtcblNjcm9sbEFyZWEuZGlzcGxheU5hbWUgPSBTY3JvbGxBcmVhUHJpbWl0aXZlLlJvb3QuZGlzcGxheU5hbWU7XG5cbmNvbnN0IFNjcm9sbEJhciA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIFNjcm9sbEFyZWFQcmltaXRpdmUuU2Nyb2xsQXJlYVNjcm9sbGJhcj4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgU2Nyb2xsQXJlYVByaW1pdGl2ZS5TY3JvbGxBcmVhU2Nyb2xsYmFyPlxuPigoeyBjbGFzc05hbWUsIG9yaWVudGF0aW9uID0gXCJ2ZXJ0aWNhbFwiLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPFNjcm9sbEFyZWFQcmltaXRpdmUuU2Nyb2xsQXJlYVNjcm9sbGJhclxuICAgIHJlZj17cmVmfVxuICAgIG9yaWVudGF0aW9uPXtvcmllbnRhdGlvbn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJmbGV4IHRvdWNoLW5vbmUgc2VsZWN0LW5vbmUgdHJhbnNpdGlvbi1jb2xvcnNcIixcbiAgICAgIG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgJiZcbiAgICAgICAgXCJoLWZ1bGwgdy0yLjUgYm9yZGVyLWwgYm9yZGVyLWwtdHJhbnNwYXJlbnQgcC1bMXB4XVwiLFxuICAgICAgb3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiICYmXG4gICAgICAgIFwiaC0yLjUgYm9yZGVyLXQgYm9yZGVyLXQtdHJhbnNwYXJlbnQgcC1bMXB4XVwiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICA+XG4gICAgPFNjcm9sbEFyZWFQcmltaXRpdmUuU2Nyb2xsQXJlYVRodW1iIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgtMSByb3VuZGVkLWZ1bGwgYmctYm9yZGVyXCIgLz5cbiAgPC9TY3JvbGxBcmVhUHJpbWl0aXZlLlNjcm9sbEFyZWFTY3JvbGxiYXI+XG4pKTtcblNjcm9sbEJhci5kaXNwbGF5TmFtZSA9IFNjcm9sbEFyZWFQcmltaXRpdmUuU2Nyb2xsQXJlYVNjcm9sbGJhci5kaXNwbGF5TmFtZTtcblxuZXhwb3J0IHsgU2Nyb2xsQXJlYSwgU2Nyb2xsQmFyIH07XG4iXSwiZmlsZSI6Ii9Vc2Vycy9tYWNib29rL2FwcGxhYS1kZXZlbG9wbWVudC9zcmMvY29tcG9uZW50cy91aS9zY3JvbGwtYXJlYS50c3gifQ==