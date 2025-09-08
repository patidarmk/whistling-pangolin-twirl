import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/select.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=6baab06c"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/macbook/applaa-development/src/components/ui/select.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import * as SelectPrimitive from "/node_modules/.vite/deps/@radix-ui_react-select.js?v=6baab06c";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "/node_modules/.vite/deps/lucide-react.js?v=6baab06c";
import { cn } from "/src/lib/utils.ts";
function Select({
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(SelectPrimitive.Root, { "data-slot": "select", ...props }, void 0, false, {
    fileName: "/Users/macbook/applaa-development/src/components/ui/select.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c = Select;
function SelectGroup({
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(SelectPrimitive.Group, { "data-slot": "select-group", ...props }, void 0, false, {
    fileName: "/Users/macbook/applaa-development/src/components/ui/select.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_c2 = SelectGroup;
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(SelectPrimitive.Value, { "data-slot": "select-value", ...props }, void 0, false, {
    fileName: "/Users/macbook/applaa-development/src/components/ui/select.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_c3 = SelectValue;
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    SelectPrimitive.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": size,
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxDEV(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsxDEV(ChevronDownIcon, { className: "size-4 opacity-50" }, void 0, false, {
          fileName: "/Users/macbook/applaa-development/src/components/ui/select.tsx",
          lineNumber: 64,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "/Users/macbook/applaa-development/src/components/ui/select.tsx",
          lineNumber: 63,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/select.tsx",
      lineNumber: 53,
      columnNumber: 5
    },
    this
  );
}
_c4 = SelectTrigger;
function MiniSelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    SelectPrimitive.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": size,
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/select.tsx",
      lineNumber: 79,
      columnNumber: 5
    },
    this
  );
}
_c5 = MiniSelectTrigger;
function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxDEV(
    SelectPrimitive.Content,
    {
      "data-slot": "select-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      ...props,
      children: [
        /* @__PURE__ */ jsxDEV(SelectScrollUpButton, {}, void 0, false, {
          fileName: "/Users/macbook/applaa-development/src/components/ui/select.tsx",
          lineNumber: 114,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV(
          SelectPrimitive.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children
          },
          void 0,
          false,
          {
            fileName: "/Users/macbook/applaa-development/src/components/ui/select.tsx",
            lineNumber: 115,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(SelectScrollDownButton, {}, void 0, false, {
          fileName: "/Users/macbook/applaa-development/src/components/ui/select.tsx",
          lineNumber: 124,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/select.tsx",
      lineNumber: 103,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "/Users/macbook/applaa-development/src/components/ui/select.tsx",
    lineNumber: 102,
    columnNumber: 5
  }, this);
}
_c6 = SelectContent;
function SelectLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    SelectPrimitive.Label,
    {
      "data-slot": "select-label",
      className: cn("text-muted-foreground px-2 py-1.5 text-xs", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/select.tsx",
      lineNumber: 135,
      columnNumber: 5
    },
    this
  );
}
_c7 = SelectLabel;
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    SelectPrimitive.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxDEV("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsxDEV(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsxDEV(CheckIcon, { className: "size-4" }, void 0, false, {
          fileName: "/Users/macbook/applaa-development/src/components/ui/select.tsx",
          lineNumber: 159,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "/Users/macbook/applaa-development/src/components/ui/select.tsx",
          lineNumber: 158,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "/Users/macbook/applaa-development/src/components/ui/select.tsx",
          lineNumber: 157,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(SelectPrimitive.ItemText, { children }, void 0, false, {
          fileName: "/Users/macbook/applaa-development/src/components/ui/select.tsx",
          lineNumber: 162,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/select.tsx",
      lineNumber: 149,
      columnNumber: 5
    },
    this
  );
}
_c8 = SelectItem;
function SelectSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    SelectPrimitive.Separator,
    {
      "data-slot": "select-separator",
      className: cn("bg-border pointer-events-none -mx-1 my-1 h-px", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/select.tsx",
      lineNumber: 172,
      columnNumber: 5
    },
    this
  );
}
_c9 = SelectSeparator;
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    SelectPrimitive.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxDEV(ChevronUpIcon, { className: "size-4" }, void 0, false, {
        fileName: "/Users/macbook/applaa-development/src/components/ui/select.tsx",
        lineNumber: 193,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/select.tsx",
      lineNumber: 185,
      columnNumber: 5
    },
    this
  );
}
_c0 = SelectScrollUpButton;
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    SelectPrimitive.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxDEV(ChevronDownIcon, { className: "size-4" }, void 0, false, {
        fileName: "/Users/macbook/applaa-development/src/components/ui/select.tsx",
        lineNumber: 211,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/select.tsx",
      lineNumber: 203,
      columnNumber: 5
    },
    this
  );
}
_c1 = SelectScrollDownButton;
export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  MiniSelectTrigger,
  SelectValue
};
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c0, _c1;
$RefreshReg$(_c, "Select");
$RefreshReg$(_c2, "SelectGroup");
$RefreshReg$(_c3, "SelectValue");
$RefreshReg$(_c4, "SelectTrigger");
$RefreshReg$(_c5, "MiniSelectTrigger");
$RefreshReg$(_c6, "SelectContent");
$RefreshReg$(_c7, "SelectLabel");
$RefreshReg$(_c8, "SelectItem");
$RefreshReg$(_c9, "SelectSeparator");
$RefreshReg$(_c0, "SelectScrollUpButton");
$RefreshReg$(_c1, "SelectScrollDownButton");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/macbook/applaa-development/src/components/ui/select.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/macbook/applaa-development/src/components/ui/select.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFrQlQ7QUFBQSxFQUNFekI7QUFBQUEsRUFDQWM7QUFBQUEsRUFDQVg7QUFBQUEsRUFDQWdCO0FBQUFBLEVBQ0FGO0FBQUFBLEVBQ0FRO0FBQUFBLEVBQ0FGO0FBQUFBLEVBQ0FGO0FBQUFBLEVBQ0FkO0FBQUFBLEVBQ0FLO0FBQUFBLEVBQ0FQO0FBQUFBO0FBQ0EsSUFBQUgsSUFBQUUsS0FBQUUsS0FBQUssS0FBQUUsS0FBQUcsS0FBQUUsS0FBQUUsS0FBQUUsS0FBQUUsS0FBQUU7QUFBQUMsYUFBQXpCLElBQUE7QUFBQXlCLGFBQUF2QixLQUFBO0FBQUF1QixhQUFBckIsS0FBQTtBQUFBcUIsYUFBQWhCLEtBQUE7QUFBQWdCLGFBQUFkLEtBQUE7QUFBQWMsYUFBQVgsS0FBQTtBQUFBVyxhQUFBVCxLQUFBO0FBQUFTLGFBQUFQLEtBQUE7QUFBQU8sYUFBQUwsS0FBQTtBQUFBSyxhQUFBSCxLQUFBO0FBQUFHLGFBQUFELEtBQUEiLCJuYW1lcyI6WyJTZWxlY3RQcmltaXRpdmUiLCJDaGVja0ljb24iLCJDaGV2cm9uRG93bkljb24iLCJDaGV2cm9uVXBJY29uIiwiY24iLCJTZWxlY3QiLCJwcm9wcyIsIl9jIiwiU2VsZWN0R3JvdXAiLCJfYzIiLCJTZWxlY3RWYWx1ZSIsIl9jMyIsIlNlbGVjdFRyaWdnZXIiLCJjbGFzc05hbWUiLCJzaXplIiwiY2hpbGRyZW4iLCJfYzQiLCJNaW5pU2VsZWN0VHJpZ2dlciIsIl9jNSIsIlNlbGVjdENvbnRlbnQiLCJwb3NpdGlvbiIsIl9jNiIsIlNlbGVjdExhYmVsIiwiX2M3IiwiU2VsZWN0SXRlbSIsIl9jOCIsIlNlbGVjdFNlcGFyYXRvciIsIl9jOSIsIlNlbGVjdFNjcm9sbFVwQnV0dG9uIiwiX2MwIiwiU2VsZWN0U2Nyb2xsRG93bkJ1dHRvbiIsIl9jMSIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJzZWxlY3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgU2VsZWN0UHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3Qtc2VsZWN0XCI7XG5pbXBvcnQgeyBDaGVja0ljb24sIENoZXZyb25Eb3duSWNvbiwgQ2hldnJvblVwSWNvbiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiLi4vLi4vbGliL3V0aWxzXCI7XG5cbmZ1bmN0aW9uIFNlbGVjdCh7XG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgU2VsZWN0UHJpbWl0aXZlLlJvb3Q+KSB7XG4gIHJldHVybiA8U2VsZWN0UHJpbWl0aXZlLlJvb3QgZGF0YS1zbG90PVwic2VsZWN0XCIgey4uLnByb3BzfSAvPjtcbn1cblxuZnVuY3Rpb24gU2VsZWN0R3JvdXAoe1xuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFNlbGVjdFByaW1pdGl2ZS5Hcm91cD4pIHtcbiAgcmV0dXJuIDxTZWxlY3RQcmltaXRpdmUuR3JvdXAgZGF0YS1zbG90PVwic2VsZWN0LWdyb3VwXCIgey4uLnByb3BzfSAvPjtcbn1cblxuZnVuY3Rpb24gU2VsZWN0VmFsdWUoe1xuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFNlbGVjdFByaW1pdGl2ZS5WYWx1ZT4pIHtcbiAgcmV0dXJuIDxTZWxlY3RQcmltaXRpdmUuVmFsdWUgZGF0YS1zbG90PVwic2VsZWN0LXZhbHVlXCIgey4uLnByb3BzfSAvPjtcbn1cblxuZnVuY3Rpb24gU2VsZWN0VHJpZ2dlcih7XG4gIGNsYXNzTmFtZSxcbiAgc2l6ZSA9IFwiZGVmYXVsdFwiLFxuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBTZWxlY3RQcmltaXRpdmUuVHJpZ2dlcj4gJiB7XG4gIHNpemU/OiBcInNtXCIgfCBcImRlZmF1bHRcIjtcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8U2VsZWN0UHJpbWl0aXZlLlRyaWdnZXJcbiAgICAgIGRhdGEtc2xvdD1cInNlbGVjdC10cmlnZ2VyXCJcbiAgICAgIGRhdGEtc2l6ZT17c2l6ZX1cbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwiYm9yZGVyLWlucHV0IGRhdGEtW3BsYWNlaG9sZGVyXTp0ZXh0LW11dGVkLWZvcmVncm91bmQgWyZfc3ZnOm5vdChbY2xhc3MqPSd0ZXh0LSddKV06dGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGZvY3VzLXZpc2libGU6Ym9yZGVyLXJpbmcgZm9jdXMtdmlzaWJsZTpyaW5nLXJpbmcvNTAgYXJpYS1pbnZhbGlkOnJpbmctZGVzdHJ1Y3RpdmUvMjAgZGFyazphcmlhLWludmFsaWQ6cmluZy1kZXN0cnVjdGl2ZS80MCBhcmlhLWludmFsaWQ6Ym9yZGVyLWRlc3RydWN0aXZlIGRhcms6YmctaW5wdXQvMzAgZGFyazpob3ZlcjpiZy1pbnB1dC81MCBmbGV4IHctZml0IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTIgcm91bmRlZC1tZCBib3JkZXIgYmctdHJhbnNwYXJlbnQgcHgtMyBweS0yIHRleHQtc20gd2hpdGVzcGFjZS1ub3dyYXAgc2hhZG93LXhzIHRyYW5zaXRpb24tW2NvbG9yLGJveC1zaGFkb3ddIG91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmctWzNweF0gZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIGRpc2FibGVkOm9wYWNpdHktNTAgZGF0YS1bc2l6ZT1kZWZhdWx0XTpoLTkgZGF0YS1bc2l6ZT1zbV06aC04ICo6ZGF0YS1bc2xvdD1zZWxlY3QtdmFsdWVdOmxpbmUtY2xhbXAtMSAqOmRhdGEtW3Nsb3Q9c2VsZWN0LXZhbHVlXTpmbGV4ICo6ZGF0YS1bc2xvdD1zZWxlY3QtdmFsdWVdOml0ZW1zLWNlbnRlciAqOmRhdGEtW3Nsb3Q9c2VsZWN0LXZhbHVlXTpnYXAtMiBbJl9zdmddOnBvaW50ZXItZXZlbnRzLW5vbmUgWyZfc3ZnXTpzaHJpbmstMCBbJl9zdmc6bm90KFtjbGFzcyo9J3NpemUtJ10pXTpzaXplLTRcIixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICA8U2VsZWN0UHJpbWl0aXZlLkljb24gYXNDaGlsZD5cbiAgICAgICAgPENoZXZyb25Eb3duSWNvbiBjbGFzc05hbWU9XCJzaXplLTQgb3BhY2l0eS01MFwiIC8+XG4gICAgICA8L1NlbGVjdFByaW1pdGl2ZS5JY29uPlxuICAgIDwvU2VsZWN0UHJpbWl0aXZlLlRyaWdnZXI+XG4gICk7XG59XG5cbmZ1bmN0aW9uIE1pbmlTZWxlY3RUcmlnZ2VyKHtcbiAgY2xhc3NOYW1lLFxuICBzaXplID0gXCJkZWZhdWx0XCIsXG4gIGNoaWxkcmVuLFxuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFNlbGVjdFByaW1pdGl2ZS5UcmlnZ2VyPiAmIHtcbiAgc2l6ZT86IFwic21cIiB8IFwiZGVmYXVsdFwiO1xufSkge1xuICByZXR1cm4gKFxuICAgIDxTZWxlY3RQcmltaXRpdmUuVHJpZ2dlclxuICAgICAgZGF0YS1zbG90PVwic2VsZWN0LXRyaWdnZXJcIlxuICAgICAgZGF0YS1zaXplPXtzaXplfVxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJib3JkZXItaW5wdXQgZGF0YS1bcGxhY2Vob2xkZXJdOnRleHQtbXV0ZWQtZm9yZWdyb3VuZCBbJl9zdmc6bm90KFtjbGFzcyo9J3RleHQtJ10pXTp0ZXh0LW11dGVkLWZvcmVncm91bmQgZm9jdXMtdmlzaWJsZTpib3JkZXItcmluZyBmb2N1cy12aXNpYmxlOnJpbmctcmluZy81MCBhcmlhLWludmFsaWQ6cmluZy1kZXN0cnVjdGl2ZS8yMCBkYXJrOmFyaWEtaW52YWxpZDpyaW5nLWRlc3RydWN0aXZlLzQwIGFyaWEtaW52YWxpZDpib3JkZXItZGVzdHJ1Y3RpdmUgZGFyazpiZy1pbnB1dC8zMCBkYXJrOmhvdmVyOmJnLWlucHV0LzUwIGZsZXggdy1maXQgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtMiByb3VuZGVkLW1kIGJvcmRlciBiZy10cmFuc3BhcmVudCBweC0zIHB5LTIgdGV4dC1zbSB3aGl0ZXNwYWNlLW5vd3JhcCBzaGFkb3cteHMgdHJhbnNpdGlvbi1bY29sb3IsYm94LXNoYWRvd10gb3V0bGluZS1ub25lIGZvY3VzLXZpc2libGU6cmluZy1bM3B4XSBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgZGlzYWJsZWQ6b3BhY2l0eS01MCBkYXRhLVtzaXplPWRlZmF1bHRdOmgtOSBkYXRhLVtzaXplPXNtXTpoLTggKjpkYXRhLVtzbG90PXNlbGVjdC12YWx1ZV06bGluZS1jbGFtcC0xICo6ZGF0YS1bc2xvdD1zZWxlY3QtdmFsdWVdOmZsZXggKjpkYXRhLVtzbG90PXNlbGVjdC12YWx1ZV06aXRlbXMtY2VudGVyICo6ZGF0YS1bc2xvdD1zZWxlY3QtdmFsdWVdOmdhcC0yIFsmX3N2Z106cG9pbnRlci1ldmVudHMtbm9uZSBbJl9zdmddOnNocmluay0wIFsmX3N2Zzpub3QoW2NsYXNzKj0nc2l6ZS0nXSldOnNpemUtNFwiLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIHsvKiA8U2VsZWN0UHJpbWl0aXZlLkljb24gYXNDaGlsZD5cbiAgICAgICAgPENoZXZyb25Eb3duSWNvbiBjbGFzc05hbWU9XCJzaXplLTQgb3BhY2l0eS01MFwiIC8+XG4gICAgICA8L1NlbGVjdFByaW1pdGl2ZS5JY29uPiAqL31cbiAgICA8L1NlbGVjdFByaW1pdGl2ZS5UcmlnZ2VyPlxuICApO1xufVxuZnVuY3Rpb24gU2VsZWN0Q29udGVudCh7XG4gIGNsYXNzTmFtZSxcbiAgY2hpbGRyZW4sXG4gIHBvc2l0aW9uID0gXCJwb3BwZXJcIixcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBTZWxlY3RQcmltaXRpdmUuQ29udGVudD4pIHtcbiAgcmV0dXJuIChcbiAgICA8U2VsZWN0UHJpbWl0aXZlLlBvcnRhbD5cbiAgICAgIDxTZWxlY3RQcmltaXRpdmUuQ29udGVudFxuICAgICAgICBkYXRhLXNsb3Q9XCJzZWxlY3QtY29udGVudFwiXG4gICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgXCJiZy1wb3BvdmVyIHRleHQtcG9wb3Zlci1mb3JlZ3JvdW5kIGRhdGEtW3N0YXRlPW9wZW5dOmFuaW1hdGUtaW4gZGF0YS1bc3RhdGU9Y2xvc2VkXTphbmltYXRlLW91dCBkYXRhLVtzdGF0ZT1jbG9zZWRdOmZhZGUtb3V0LTAgZGF0YS1bc3RhdGU9b3Blbl06ZmFkZS1pbi0wIGRhdGEtW3N0YXRlPWNsb3NlZF06em9vbS1vdXQtOTUgZGF0YS1bc3RhdGU9b3Blbl06em9vbS1pbi05NSBkYXRhLVtzaWRlPWJvdHRvbV06c2xpZGUtaW4tZnJvbS10b3AtMiBkYXRhLVtzaWRlPWxlZnRdOnNsaWRlLWluLWZyb20tcmlnaHQtMiBkYXRhLVtzaWRlPXJpZ2h0XTpzbGlkZS1pbi1mcm9tLWxlZnQtMiBkYXRhLVtzaWRlPXRvcF06c2xpZGUtaW4tZnJvbS1ib3R0b20tMiByZWxhdGl2ZSB6LTUwIG1heC1oLSgtLXJhZGl4LXNlbGVjdC1jb250ZW50LWF2YWlsYWJsZS1oZWlnaHQpIG1pbi13LVs4cmVtXSBvcmlnaW4tKC0tcmFkaXgtc2VsZWN0LWNvbnRlbnQtdHJhbnNmb3JtLW9yaWdpbikgb3ZlcmZsb3cteC1oaWRkZW4gb3ZlcmZsb3cteS1hdXRvIHJvdW5kZWQtbWQgYm9yZGVyIHNoYWRvdy1tZFwiLFxuICAgICAgICAgIHBvc2l0aW9uID09PSBcInBvcHBlclwiICYmXG4gICAgICAgICAgICBcImRhdGEtW3NpZGU9Ym90dG9tXTp0cmFuc2xhdGUteS0xIGRhdGEtW3NpZGU9bGVmdF06LXRyYW5zbGF0ZS14LTEgZGF0YS1bc2lkZT1yaWdodF06dHJhbnNsYXRlLXgtMSBkYXRhLVtzaWRlPXRvcF06LXRyYW5zbGF0ZS15LTFcIixcbiAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICl9XG4gICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICA8U2VsZWN0U2Nyb2xsVXBCdXR0b24gLz5cbiAgICAgICAgPFNlbGVjdFByaW1pdGl2ZS5WaWV3cG9ydFxuICAgICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgICBcInAtMVwiLFxuICAgICAgICAgICAgcG9zaXRpb24gPT09IFwicG9wcGVyXCIgJiZcbiAgICAgICAgICAgICAgXCJoLVt2YXIoLS1yYWRpeC1zZWxlY3QtdHJpZ2dlci1oZWlnaHQpXSB3LWZ1bGwgbWluLXctW3ZhcigtLXJhZGl4LXNlbGVjdC10cmlnZ2VyLXdpZHRoKV0gc2Nyb2xsLW15LTFcIixcbiAgICAgICAgICApfVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1NlbGVjdFByaW1pdGl2ZS5WaWV3cG9ydD5cbiAgICAgICAgPFNlbGVjdFNjcm9sbERvd25CdXR0b24gLz5cbiAgICAgIDwvU2VsZWN0UHJpbWl0aXZlLkNvbnRlbnQ+XG4gICAgPC9TZWxlY3RQcmltaXRpdmUuUG9ydGFsPlxuICApO1xufVxuXG5mdW5jdGlvbiBTZWxlY3RMYWJlbCh7XG4gIGNsYXNzTmFtZSxcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBTZWxlY3RQcmltaXRpdmUuTGFiZWw+KSB7XG4gIHJldHVybiAoXG4gICAgPFNlbGVjdFByaW1pdGl2ZS5MYWJlbFxuICAgICAgZGF0YS1zbG90PVwic2VsZWN0LWxhYmVsXCJcbiAgICAgIGNsYXNzTmFtZT17Y24oXCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgcHgtMiBweS0xLjUgdGV4dC14c1wiLCBjbGFzc05hbWUpfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNlbGVjdEl0ZW0oe1xuICBjbGFzc05hbWUsXG4gIGNoaWxkcmVuLFxuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFNlbGVjdFByaW1pdGl2ZS5JdGVtPikge1xuICByZXR1cm4gKFxuICAgIDxTZWxlY3RQcmltaXRpdmUuSXRlbVxuICAgICAgZGF0YS1zbG90PVwic2VsZWN0LWl0ZW1cIlxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJmb2N1czpiZy1hY2NlbnQgZm9jdXM6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZCBbJl9zdmc6bm90KFtjbGFzcyo9J3RleHQtJ10pXTp0ZXh0LW11dGVkLWZvcmVncm91bmQgcmVsYXRpdmUgZmxleCB3LWZ1bGwgY3Vyc29yLWRlZmF1bHQgaXRlbXMtY2VudGVyIGdhcC0yIHJvdW5kZWQtc20gcHktMS41IHByLTggcGwtMiB0ZXh0LXNtIG91dGxpbmUtaGlkZGVuIHNlbGVjdC1ub25lIGRhdGEtW2Rpc2FibGVkXTpwb2ludGVyLWV2ZW50cy1ub25lIGRhdGEtW2Rpc2FibGVkXTpvcGFjaXR5LTUwIFsmX3N2Z106cG9pbnRlci1ldmVudHMtbm9uZSBbJl9zdmddOnNocmluay0wIFsmX3N2Zzpub3QoW2NsYXNzKj0nc2l6ZS0nXSldOnNpemUtNCAqOltzcGFuXTpsYXN0OmZsZXggKjpbc3Bhbl06bGFzdDppdGVtcy1jZW50ZXIgKjpbc3Bhbl06bGFzdDpnYXAtMlwiLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTIgZmxleCBzaXplLTMuNSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPFNlbGVjdFByaW1pdGl2ZS5JdGVtSW5kaWNhdG9yPlxuICAgICAgICAgIDxDaGVja0ljb24gY2xhc3NOYW1lPVwic2l6ZS00XCIgLz5cbiAgICAgICAgPC9TZWxlY3RQcmltaXRpdmUuSXRlbUluZGljYXRvcj5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxTZWxlY3RQcmltaXRpdmUuSXRlbVRleHQ+e2NoaWxkcmVufTwvU2VsZWN0UHJpbWl0aXZlLkl0ZW1UZXh0PlxuICAgIDwvU2VsZWN0UHJpbWl0aXZlLkl0ZW0+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNlbGVjdFNlcGFyYXRvcih7XG4gIGNsYXNzTmFtZSxcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBTZWxlY3RQcmltaXRpdmUuU2VwYXJhdG9yPikge1xuICByZXR1cm4gKFxuICAgIDxTZWxlY3RQcmltaXRpdmUuU2VwYXJhdG9yXG4gICAgICBkYXRhLXNsb3Q9XCJzZWxlY3Qtc2VwYXJhdG9yXCJcbiAgICAgIGNsYXNzTmFtZT17Y24oXCJiZy1ib3JkZXIgcG9pbnRlci1ldmVudHMtbm9uZSAtbXgtMSBteS0xIGgtcHhcIiwgY2xhc3NOYW1lKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBTZWxlY3RTY3JvbGxVcEJ1dHRvbih7XG4gIGNsYXNzTmFtZSxcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBTZWxlY3RQcmltaXRpdmUuU2Nyb2xsVXBCdXR0b24+KSB7XG4gIHJldHVybiAoXG4gICAgPFNlbGVjdFByaW1pdGl2ZS5TY3JvbGxVcEJ1dHRvblxuICAgICAgZGF0YS1zbG90PVwic2VsZWN0LXNjcm9sbC11cC1idXR0b25cIlxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJmbGV4IGN1cnNvci1kZWZhdWx0IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS0xXCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPENoZXZyb25VcEljb24gY2xhc3NOYW1lPVwic2l6ZS00XCIgLz5cbiAgICA8L1NlbGVjdFByaW1pdGl2ZS5TY3JvbGxVcEJ1dHRvbj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU2VsZWN0U2Nyb2xsRG93bkJ1dHRvbih7XG4gIGNsYXNzTmFtZSxcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBTZWxlY3RQcmltaXRpdmUuU2Nyb2xsRG93bkJ1dHRvbj4pIHtcbiAgcmV0dXJuIChcbiAgICA8U2VsZWN0UHJpbWl0aXZlLlNjcm9sbERvd25CdXR0b25cbiAgICAgIGRhdGEtc2xvdD1cInNlbGVjdC1zY3JvbGwtZG93bi1idXR0b25cIlxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJmbGV4IGN1cnNvci1kZWZhdWx0IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS0xXCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPENoZXZyb25Eb3duSWNvbiBjbGFzc05hbWU9XCJzaXplLTRcIiAvPlxuICAgIDwvU2VsZWN0UHJpbWl0aXZlLlNjcm9sbERvd25CdXR0b24+XG4gICk7XG59XG5cbmV4cG9ydCB7XG4gIFNlbGVjdCxcbiAgU2VsZWN0Q29udGVudCxcbiAgU2VsZWN0R3JvdXAsXG4gIFNlbGVjdEl0ZW0sXG4gIFNlbGVjdExhYmVsLFxuICBTZWxlY3RTY3JvbGxEb3duQnV0dG9uLFxuICBTZWxlY3RTY3JvbGxVcEJ1dHRvbixcbiAgU2VsZWN0U2VwYXJhdG9yLFxuICBTZWxlY3RUcmlnZ2VyLFxuICBNaW5pU2VsZWN0VHJpZ2dlcixcbiAgU2VsZWN0VmFsdWUsXG59O1xuIl0sImZpbGUiOiIvVXNlcnMvbWFjYm9vay9hcHBsYWEtZGV2ZWxvcG1lbnQvc3JjL2NvbXBvbmVudHMvdWkvc2VsZWN0LnRzeCJ9