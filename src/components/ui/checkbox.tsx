import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/checkbox.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=6baab06c"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/macbook/applaa-development/src/components/ui/checkbox.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import * as CheckboxPrimitive from "/node_modules/.vite/deps/@radix-ui_react-checkbox.js?v=6baab06c";
import { CheckIcon } from "/node_modules/.vite/deps/lucide-react.js?v=6baab06c";
import { cn } from "/src/lib/utils.ts";
function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    CheckboxPrimitive.Root,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxDEV(
        CheckboxPrimitive.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: /* @__PURE__ */ jsxDEV(CheckIcon, { className: "size-3.5" }, void 0, false, {
            fileName: "/Users/macbook/applaa-development/src/components/ui/checkbox.tsx",
            lineNumber: 43,
            columnNumber: 9
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/Users/macbook/applaa-development/src/components/ui/checkbox.tsx",
          lineNumber: 39,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/checkbox.tsx",
      lineNumber: 31,
      columnNumber: 5
    },
    this
  );
}
_c = Checkbox;
export { Checkbox };
var _c;
$RefreshReg$(_c, "Checkbox");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/macbook/applaa-development/src/components/ui/checkbox.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/macbook/applaa-development/src/components/ui/checkbox.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBdUJROzs7Ozs7Ozs7Ozs7Ozs7O0FBdEJSLFlBQVlBLHVCQUF1QjtBQUNuQyxTQUFTQyxpQkFBaUI7QUFFMUIsU0FBU0MsVUFBVTtBQUVuQixTQUFTQyxTQUFTO0FBQUEsRUFDaEJDO0FBQUFBLEVBQ0EsR0FBR0M7QUFDZ0QsR0FBRztBQUN0RCxTQUNFO0FBQUEsSUFBQyxrQkFBa0I7QUFBQSxJQUFsQjtBQUFBLE1BQ0MsYUFBVTtBQUFBLE1BQ1YsV0FBV0g7QUFBQUEsUUFDVDtBQUFBLFFBQ0FFO0FBQUFBLE1BQ0Y7QUFBQSxNQUNBLEdBQUlDO0FBQUFBLE1BRUo7QUFBQSxRQUFDLGtCQUFrQjtBQUFBLFFBQWxCO0FBQUEsVUFDQyxhQUFVO0FBQUEsVUFDVixXQUFVO0FBQUEsVUFFVixpQ0FBQyxhQUFVLFdBQVUsY0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBK0I7QUFBQTtBQUFBLFFBSmpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtBO0FBQUE7QUFBQSxJQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQWNBO0FBRUo7QUFBQ0MsS0FyQlFIO0FBdUJULFNBQVNBO0FBQVcsSUFBQUc7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIkNoZWNrYm94UHJpbWl0aXZlIiwiQ2hlY2tJY29uIiwiY24iLCJDaGVja2JveCIsImNsYXNzTmFtZSIsInByb3BzIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiY2hlY2tib3gudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgQ2hlY2tib3hQcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1jaGVja2JveFwiO1xuaW1wb3J0IHsgQ2hlY2tJY29uIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuXG5mdW5jdGlvbiBDaGVja2JveCh7XG4gIGNsYXNzTmFtZSxcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBDaGVja2JveFByaW1pdGl2ZS5Sb290Pikge1xuICByZXR1cm4gKFxuICAgIDxDaGVja2JveFByaW1pdGl2ZS5Sb290XG4gICAgICBkYXRhLXNsb3Q9XCJjaGVja2JveFwiXG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcInBlZXIgYm9yZGVyLWlucHV0IGRhcms6YmctaW5wdXQvMzAgZGF0YS1bc3RhdGU9Y2hlY2tlZF06YmctcHJpbWFyeSBkYXRhLVtzdGF0ZT1jaGVja2VkXTp0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBkYXJrOmRhdGEtW3N0YXRlPWNoZWNrZWRdOmJnLXByaW1hcnkgZGF0YS1bc3RhdGU9Y2hlY2tlZF06Ym9yZGVyLXByaW1hcnkgZm9jdXMtdmlzaWJsZTpib3JkZXItcmluZyBmb2N1cy12aXNpYmxlOnJpbmctcmluZy81MCBhcmlhLWludmFsaWQ6cmluZy1kZXN0cnVjdGl2ZS8yMCBkYXJrOmFyaWEtaW52YWxpZDpyaW5nLWRlc3RydWN0aXZlLzQwIGFyaWEtaW52YWxpZDpib3JkZXItZGVzdHJ1Y3RpdmUgc2l6ZS00IHNocmluay0wIHJvdW5kZWQtWzRweF0gYm9yZGVyIHNoYWRvdy14cyB0cmFuc2l0aW9uLXNoYWRvdyBvdXRsaW5lLW5vbmUgZm9jdXMtdmlzaWJsZTpyaW5nLVszcHhdIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZCBkaXNhYmxlZDpvcGFjaXR5LTUwXCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPENoZWNrYm94UHJpbWl0aXZlLkluZGljYXRvclxuICAgICAgICBkYXRhLXNsb3Q9XCJjaGVja2JveC1pbmRpY2F0b3JcIlxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWN1cnJlbnQgdHJhbnNpdGlvbi1ub25lXCJcbiAgICAgID5cbiAgICAgICAgPENoZWNrSWNvbiBjbGFzc05hbWU9XCJzaXplLTMuNVwiIC8+XG4gICAgICA8L0NoZWNrYm94UHJpbWl0aXZlLkluZGljYXRvcj5cbiAgICA8L0NoZWNrYm94UHJpbWl0aXZlLlJvb3Q+XG4gICk7XG59XG5cbmV4cG9ydCB7IENoZWNrYm94IH07XG4iXSwiZmlsZSI6Ii9Vc2Vycy9tYWNib29rL2FwcGxhYS1kZXZlbG9wbWVudC9zcmMvY29tcG9uZW50cy91aS9jaGVja2JveC50c3gifQ==