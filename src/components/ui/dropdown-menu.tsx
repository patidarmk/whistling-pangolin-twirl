import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/dropdown-menu.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=6baab06c"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/macbook/applaa-development/src/components/ui/dropdown-menu.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import * as DropdownMenuPrimitive from "/node_modules/.vite/deps/@radix-ui_react-dropdown-menu.js?v=6baab06c";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "/node_modules/.vite/deps/lucide-react.js?v=6baab06c";
import { cn } from "/src/lib/utils.ts";
function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props }, void 0, false, {
    fileName: "/Users/macbook/applaa-development/src/components/ui/dropdown-menu.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c = DropdownMenu;
function DropdownMenuPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(DropdownMenuPrimitive.Portal, { "data-slot": "dropdown-menu-portal", ...props }, void 0, false, {
    fileName: "/Users/macbook/applaa-development/src/components/ui/dropdown-menu.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}
_c2 = DropdownMenuPortal;
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    DropdownMenuPrimitive.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/dropdown-menu.tsx",
      lineNumber: 44,
      columnNumber: 5
    },
    this
  );
}
_c3 = DropdownMenuTrigger;
function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsxDEV(
    DropdownMenuPrimitive.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/dropdown-menu.tsx",
      lineNumber: 58,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "/Users/macbook/applaa-development/src/components/ui/dropdown-menu.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}
_c4 = DropdownMenuContent;
function DropdownMenuGroup({
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(DropdownMenuPrimitive.Group, { "data-slot": "dropdown-menu-group", ...props }, void 0, false, {
    fileName: "/Users/macbook/applaa-development/src/components/ui/dropdown-menu.tsx",
    lineNumber: 75,
    columnNumber: 5
  }, this);
}
_c5 = DropdownMenuGroup;
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    DropdownMenuPrimitive.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-1 rounded-sm px-2 py-1 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/dropdown-menu.tsx",
      lineNumber: 89,
      columnNumber: 5
    },
    this
  );
}
_c6 = DropdownMenuItem;
function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    DropdownMenuPrimitive.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ jsxDEV("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsxDEV(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsxDEV(CheckIcon, { className: "size-4" }, void 0, false, {
          fileName: "/Users/macbook/applaa-development/src/components/ui/dropdown-menu.tsx",
          lineNumber: 120,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "/Users/macbook/applaa-development/src/components/ui/dropdown-menu.tsx",
          lineNumber: 119,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "/Users/macbook/applaa-development/src/components/ui/dropdown-menu.tsx",
          lineNumber: 118,
          columnNumber: 7
        }, this),
        children
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/dropdown-menu.tsx",
      lineNumber: 109,
      columnNumber: 5
    },
    this
  );
}
_c7 = DropdownMenuCheckboxItem;
function DropdownMenuRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    DropdownMenuPrimitive.RadioGroup,
    {
      "data-slot": "dropdown-menu-radio-group",
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/dropdown-menu.tsx",
      lineNumber: 132,
      columnNumber: 5
    },
    this
  );
}
_c8 = DropdownMenuRadioGroup;
function DropdownMenuRadioItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    DropdownMenuPrimitive.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxDEV("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsxDEV(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsxDEV(CircleIcon, { className: "size-2 fill-current" }, void 0, false, {
          fileName: "/Users/macbook/applaa-development/src/components/ui/dropdown-menu.tsx",
          lineNumber: 155,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "/Users/macbook/applaa-development/src/components/ui/dropdown-menu.tsx",
          lineNumber: 154,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "/Users/macbook/applaa-development/src/components/ui/dropdown-menu.tsx",
          lineNumber: 153,
          columnNumber: 7
        }, this),
        children
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/dropdown-menu.tsx",
      lineNumber: 145,
      columnNumber: 5
    },
    this
  );
}
_c9 = DropdownMenuRadioItem;
function DropdownMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    DropdownMenuPrimitive.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": inset,
      className: cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/dropdown-menu.tsx",
      lineNumber: 171,
      columnNumber: 5
    },
    this
  );
}
_c0 = DropdownMenuLabel;
function DropdownMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    DropdownMenuPrimitive.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/dropdown-menu.tsx",
      lineNumber: 188,
      columnNumber: 5
    },
    this
  );
}
_c1 = DropdownMenuSeparator;
function DropdownMenuShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/dropdown-menu.tsx",
      lineNumber: 201,
      columnNumber: 5
    },
    this
  );
}
_c10 = DropdownMenuShortcut;
function DropdownMenuSub({
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(DropdownMenuPrimitive.Sub, { "data-slot": "dropdown-menu-sub", ...props }, void 0, false, {
    fileName: "/Users/macbook/applaa-development/src/components/ui/dropdown-menu.tsx",
    lineNumber: 215,
    columnNumber: 10
  }, this);
}
_c11 = DropdownMenuSub;
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    DropdownMenuPrimitive.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": inset,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxDEV(ChevronRightIcon, { className: "ml-auto size-4" }, void 0, false, {
          fileName: "/Users/macbook/applaa-development/src/components/ui/dropdown-menu.tsx",
          lineNumber: 237,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/dropdown-menu.tsx",
      lineNumber: 227,
      columnNumber: 5
    },
    this
  );
}
_c12 = DropdownMenuSubTrigger;
function DropdownMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    DropdownMenuPrimitive.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/dropdown-menu.tsx",
      lineNumber: 247,
      columnNumber: 5
    },
    this
  );
}
_c13 = DropdownMenuSubContent;
export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent
};
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c0, _c1, _c10, _c11, _c12, _c13;
$RefreshReg$(_c, "DropdownMenu");
$RefreshReg$(_c2, "DropdownMenuPortal");
$RefreshReg$(_c3, "DropdownMenuTrigger");
$RefreshReg$(_c4, "DropdownMenuContent");
$RefreshReg$(_c5, "DropdownMenuGroup");
$RefreshReg$(_c6, "DropdownMenuItem");
$RefreshReg$(_c7, "DropdownMenuCheckboxItem");
$RefreshReg$(_c8, "DropdownMenuRadioGroup");
$RefreshReg$(_c9, "DropdownMenuRadioItem");
$RefreshReg$(_c0, "DropdownMenuLabel");
$RefreshReg$(_c1, "DropdownMenuSeparator");
$RefreshReg$(_c10, "DropdownMenuShortcut");
$RefreshReg$(_c11, "DropdownMenuSub");
$RefreshReg$(_c12, "DropdownMenuSubTrigger");
$RefreshReg$(_c13, "DropdownMenuSubContent");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/macbook/applaa-development/src/components/ui/dropdown-menu.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/macbook/applaa-development/src/components/ui/dropdown-menu.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QTJCLGFBQUF6QixLQUFBO0FBQUF5QixhQUFBckIsS0FBQTtBQUFBcUIsYUFBQWpCLEtBQUE7QUFBQWlCLGFBQUFmLEtBQUE7QUFBQWUsYUFBQWIsS0FBQTtBQUFBYSxhQUFBWCxLQUFBO0FBQUFXLGFBQUFULEtBQUE7QUFBQVMsYUFBQVAsTUFBQTtBQUFBTyxhQUFBTCxNQUFBO0FBQUFLLGFBQUFILE1BQUE7QUFBQUcsYUFBQUQsTUFBQSIsIm5hbWVzIjpbIkRyb3Bkb3duTWVudVByaW1pdGl2ZSIsIkNoZWNrSWNvbiIsIkNoZXZyb25SaWdodEljb24iLCJDaXJjbGVJY29uIiwiY24iLCJEcm9wZG93bk1lbnUiLCJwcm9wcyIsIl9jIiwiRHJvcGRvd25NZW51UG9ydGFsIiwiX2MyIiwiRHJvcGRvd25NZW51VHJpZ2dlciIsIl9jMyIsIkRyb3Bkb3duTWVudUNvbnRlbnQiLCJjbGFzc05hbWUiLCJzaWRlT2Zmc2V0IiwiX2M0IiwiRHJvcGRvd25NZW51R3JvdXAiLCJfYzUiLCJEcm9wZG93bk1lbnVJdGVtIiwiaW5zZXQiLCJ2YXJpYW50IiwiX2M2IiwiRHJvcGRvd25NZW51Q2hlY2tib3hJdGVtIiwiY2hpbGRyZW4iLCJjaGVja2VkIiwiX2M3IiwiRHJvcGRvd25NZW51UmFkaW9Hcm91cCIsIl9jOCIsIkRyb3Bkb3duTWVudVJhZGlvSXRlbSIsIl9jOSIsIkRyb3Bkb3duTWVudUxhYmVsIiwiX2MwIiwiRHJvcGRvd25NZW51U2VwYXJhdG9yIiwiX2MxIiwiRHJvcGRvd25NZW51U2hvcnRjdXQiLCJfYzEwIiwiRHJvcGRvd25NZW51U3ViIiwiX2MxMSIsIkRyb3Bkb3duTWVudVN1YlRyaWdnZXIiLCJfYzEyIiwiRHJvcGRvd25NZW51U3ViQ29udGVudCIsIl9jMTMiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiZHJvcGRvd24tbWVudS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBEcm9wZG93bk1lbnVQcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgeyBDaGVja0ljb24sIENoZXZyb25SaWdodEljb24sIENpcmNsZUljb24gfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmZ1bmN0aW9uIERyb3Bkb3duTWVudSh7XG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLlJvb3Q+KSB7XG4gIHJldHVybiA8RHJvcGRvd25NZW51UHJpbWl0aXZlLlJvb3QgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudVwiIHsuLi5wcm9wc30gLz47XG59XG5cbmZ1bmN0aW9uIERyb3Bkb3duTWVudVBvcnRhbCh7XG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLlBvcnRhbD4pIHtcbiAgcmV0dXJuIChcbiAgICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLlBvcnRhbCBkYXRhLXNsb3Q9XCJkcm9wZG93bi1tZW51LXBvcnRhbFwiIHsuLi5wcm9wc30gLz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gRHJvcGRvd25NZW51VHJpZ2dlcih7XG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLlRyaWdnZXI+KSB7XG4gIHJldHVybiAoXG4gICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5UcmlnZ2VyXG4gICAgICBkYXRhLXNsb3Q9XCJkcm9wZG93bi1tZW51LXRyaWdnZXJcIlxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIERyb3Bkb3duTWVudUNvbnRlbnQoe1xuICBjbGFzc05hbWUsXG4gIHNpZGVPZmZzZXQgPSA0LFxuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5Db250ZW50Pikge1xuICByZXR1cm4gKFxuICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuUG9ydGFsPlxuICAgICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5Db250ZW50XG4gICAgICAgIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtY29udGVudFwiXG4gICAgICAgIHNpZGVPZmZzZXQ9e3NpZGVPZmZzZXR9XG4gICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgXCJiZy1wb3BvdmVyIHRleHQtcG9wb3Zlci1mb3JlZ3JvdW5kIGRhdGEtW3N0YXRlPW9wZW5dOmFuaW1hdGUtaW4gZGF0YS1bc3RhdGU9Y2xvc2VkXTphbmltYXRlLW91dCBkYXRhLVtzdGF0ZT1jbG9zZWRdOmZhZGUtb3V0LTAgZGF0YS1bc3RhdGU9b3Blbl06ZmFkZS1pbi0wIGRhdGEtW3N0YXRlPWNsb3NlZF06em9vbS1vdXQtOTUgZGF0YS1bc3RhdGU9b3Blbl06em9vbS1pbi05NSBkYXRhLVtzaWRlPWJvdHRvbV06c2xpZGUtaW4tZnJvbS10b3AtMiBkYXRhLVtzaWRlPWxlZnRdOnNsaWRlLWluLWZyb20tcmlnaHQtMiBkYXRhLVtzaWRlPXJpZ2h0XTpzbGlkZS1pbi1mcm9tLWxlZnQtMiBkYXRhLVtzaWRlPXRvcF06c2xpZGUtaW4tZnJvbS1ib3R0b20tMiB6LTUwIG1heC1oLSgtLXJhZGl4LWRyb3Bkb3duLW1lbnUtY29udGVudC1hdmFpbGFibGUtaGVpZ2h0KSBtaW4tdy1bOHJlbV0gb3JpZ2luLSgtLXJhZGl4LWRyb3Bkb3duLW1lbnUtY29udGVudC10cmFuc2Zvcm0tb3JpZ2luKSBvdmVyZmxvdy14LWhpZGRlbiBvdmVyZmxvdy15LWF1dG8gcm91bmRlZC1tZCBib3JkZXIgcC0xIHNoYWRvdy1tZFwiLFxuICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgKX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICA8L0Ryb3Bkb3duTWVudVByaW1pdGl2ZS5Qb3J0YWw+XG4gICk7XG59XG5cbmZ1bmN0aW9uIERyb3Bkb3duTWVudUdyb3VwKHtcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuR3JvdXA+KSB7XG4gIHJldHVybiAoXG4gICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5Hcm91cCBkYXRhLXNsb3Q9XCJkcm9wZG93bi1tZW51LWdyb3VwXCIgey4uLnByb3BzfSAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVJdGVtKHtcbiAgY2xhc3NOYW1lLFxuICBpbnNldCxcbiAgdmFyaWFudCA9IFwiZGVmYXVsdFwiLFxuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5JdGVtPiAmIHtcbiAgaW5zZXQ/OiBib29sZWFuO1xuICB2YXJpYW50PzogXCJkZWZhdWx0XCIgfCBcImRlc3RydWN0aXZlXCI7XG59KSB7XG4gIHJldHVybiAoXG4gICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5JdGVtXG4gICAgICBkYXRhLXNsb3Q9XCJkcm9wZG93bi1tZW51LWl0ZW1cIlxuICAgICAgZGF0YS1pbnNldD17aW5zZXR9XG4gICAgICBkYXRhLXZhcmlhbnQ9e3ZhcmlhbnR9XG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcImZvY3VzOmJnLWFjY2VudCBmb2N1czp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIGRhdGEtW3ZhcmlhbnQ9ZGVzdHJ1Y3RpdmVdOnRleHQtZGVzdHJ1Y3RpdmUgZGF0YS1bdmFyaWFudD1kZXN0cnVjdGl2ZV06Zm9jdXM6YmctZGVzdHJ1Y3RpdmUvMTAgZGFyazpkYXRhLVt2YXJpYW50PWRlc3RydWN0aXZlXTpmb2N1czpiZy1kZXN0cnVjdGl2ZS8yMCBkYXRhLVt2YXJpYW50PWRlc3RydWN0aXZlXTpmb2N1czp0ZXh0LWRlc3RydWN0aXZlIGRhdGEtW3ZhcmlhbnQ9ZGVzdHJ1Y3RpdmVdOio6W3N2Z106IXRleHQtZGVzdHJ1Y3RpdmUgWyZfc3ZnOm5vdChbY2xhc3MqPSd0ZXh0LSddKV06dGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHJlbGF0aXZlIGZsZXggY3Vyc29yLWRlZmF1bHQgaXRlbXMtY2VudGVyIGdhcC0xIHJvdW5kZWQtc20gcHgtMiBweS0xIHRleHQtc20gb3V0bGluZS1oaWRkZW4gc2VsZWN0LW5vbmUgZGF0YS1bZGlzYWJsZWRdOnBvaW50ZXItZXZlbnRzLW5vbmUgZGF0YS1bZGlzYWJsZWRdOm9wYWNpdHktNTAgZGF0YS1baW5zZXRdOnBsLTggWyZfc3ZnXTpwb2ludGVyLWV2ZW50cy1ub25lIFsmX3N2Z106c2hyaW5rLTAgWyZfc3ZnOm5vdChbY2xhc3MqPSdzaXplLSddKV06c2l6ZS00XCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gRHJvcGRvd25NZW51Q2hlY2tib3hJdGVtKHtcbiAgY2xhc3NOYW1lLFxuICBjaGlsZHJlbixcbiAgY2hlY2tlZCxcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuQ2hlY2tib3hJdGVtPikge1xuICByZXR1cm4gKFxuICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuQ2hlY2tib3hJdGVtXG4gICAgICBkYXRhLXNsb3Q9XCJkcm9wZG93bi1tZW51LWNoZWNrYm94LWl0ZW1cIlxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJmb2N1czpiZy1hY2NlbnQgZm9jdXM6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZCByZWxhdGl2ZSBmbGV4IGN1cnNvci1kZWZhdWx0IGl0ZW1zLWNlbnRlciBnYXAtMiByb3VuZGVkLXNtIHB5LTEuNSBwci0yIHBsLTggdGV4dC1zbSBvdXRsaW5lLWhpZGRlbiBzZWxlY3Qtbm9uZSBkYXRhLVtkaXNhYmxlZF06cG9pbnRlci1ldmVudHMtbm9uZSBkYXRhLVtkaXNhYmxlZF06b3BhY2l0eS01MCBbJl9zdmddOnBvaW50ZXItZXZlbnRzLW5vbmUgWyZfc3ZnXTpzaHJpbmstMCBbJl9zdmc6bm90KFtjbGFzcyo9J3NpemUtJ10pXTpzaXplLTRcIixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBsZWZ0LTIgZmxleCBzaXplLTMuNSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5JdGVtSW5kaWNhdG9yPlxuICAgICAgICAgIDxDaGVja0ljb24gY2xhc3NOYW1lPVwic2l6ZS00XCIgLz5cbiAgICAgICAgPC9Ecm9wZG93bk1lbnVQcmltaXRpdmUuSXRlbUluZGljYXRvcj5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0Ryb3Bkb3duTWVudVByaW1pdGl2ZS5DaGVja2JveEl0ZW0+XG4gICk7XG59XG5cbmZ1bmN0aW9uIERyb3Bkb3duTWVudVJhZGlvR3JvdXAoe1xuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5SYWRpb0dyb3VwPikge1xuICByZXR1cm4gKFxuICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuUmFkaW9Hcm91cFxuICAgICAgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS1yYWRpby1ncm91cFwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gRHJvcGRvd25NZW51UmFkaW9JdGVtKHtcbiAgY2xhc3NOYW1lLFxuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuUmFkaW9JdGVtPikge1xuICByZXR1cm4gKFxuICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuUmFkaW9JdGVtXG4gICAgICBkYXRhLXNsb3Q9XCJkcm9wZG93bi1tZW51LXJhZGlvLWl0ZW1cIlxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJmb2N1czpiZy1hY2NlbnQgZm9jdXM6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZCByZWxhdGl2ZSBmbGV4IGN1cnNvci1kZWZhdWx0IGl0ZW1zLWNlbnRlciBnYXAtMiByb3VuZGVkLXNtIHB5LTEuNSBwci0yIHBsLTggdGV4dC1zbSBvdXRsaW5lLWhpZGRlbiBzZWxlY3Qtbm9uZSBkYXRhLVtkaXNhYmxlZF06cG9pbnRlci1ldmVudHMtbm9uZSBkYXRhLVtkaXNhYmxlZF06b3BhY2l0eS01MCBbJl9zdmddOnBvaW50ZXItZXZlbnRzLW5vbmUgWyZfc3ZnXTpzaHJpbmstMCBbJl9zdmc6bm90KFtjbGFzcyo9J3NpemUtJ10pXTpzaXplLTRcIixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGxlZnQtMiBmbGV4IHNpemUtMy41IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLkl0ZW1JbmRpY2F0b3I+XG4gICAgICAgICAgPENpcmNsZUljb24gY2xhc3NOYW1lPVwic2l6ZS0yIGZpbGwtY3VycmVudFwiIC8+XG4gICAgICAgIDwvRHJvcGRvd25NZW51UHJpbWl0aXZlLkl0ZW1JbmRpY2F0b3I+XG4gICAgICA8L3NwYW4+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Ecm9wZG93bk1lbnVQcmltaXRpdmUuUmFkaW9JdGVtPlxuICApO1xufVxuXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVMYWJlbCh7XG4gIGNsYXNzTmFtZSxcbiAgaW5zZXQsXG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLkxhYmVsPiAmIHtcbiAgaW5zZXQ/OiBib29sZWFuO1xufSkge1xuICByZXR1cm4gKFxuICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuTGFiZWxcbiAgICAgIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtbGFiZWxcIlxuICAgICAgZGF0YS1pbnNldD17aW5zZXR9XG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcInB4LTIgcHktMS41IHRleHQtc20gZm9udC1tZWRpdW0gZGF0YS1baW5zZXRdOnBsLThcIixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVTZXBhcmF0b3Ioe1xuICBjbGFzc05hbWUsXG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLlNlcGFyYXRvcj4pIHtcbiAgcmV0dXJuIChcbiAgICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLlNlcGFyYXRvclxuICAgICAgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS1zZXBhcmF0b3JcIlxuICAgICAgY2xhc3NOYW1lPXtjbihcImJnLWJvcmRlciAtbXgtMSBteS0xIGgtcHhcIiwgY2xhc3NOYW1lKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVTaG9ydGN1dCh7XG4gIGNsYXNzTmFtZSxcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwic3BhblwiPikge1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICBkYXRhLXNsb3Q9XCJkcm9wZG93bi1tZW51LXNob3J0Y3V0XCJcbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG1sLWF1dG8gdGV4dC14cyB0cmFja2luZy13aWRlc3RcIixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVTdWIoe1xuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5TdWI+KSB7XG4gIHJldHVybiA8RHJvcGRvd25NZW51UHJpbWl0aXZlLlN1YiBkYXRhLXNsb3Q9XCJkcm9wZG93bi1tZW51LXN1YlwiIHsuLi5wcm9wc30gLz47XG59XG5cbmZ1bmN0aW9uIERyb3Bkb3duTWVudVN1YlRyaWdnZXIoe1xuICBjbGFzc05hbWUsXG4gIGluc2V0LFxuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuU3ViVHJpZ2dlcj4gJiB7XG4gIGluc2V0PzogYm9vbGVhbjtcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLlN1YlRyaWdnZXJcbiAgICAgIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtc3ViLXRyaWdnZXJcIlxuICAgICAgZGF0YS1pbnNldD17aW5zZXR9XG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcImZvY3VzOmJnLWFjY2VudCBmb2N1czp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIGRhdGEtW3N0YXRlPW9wZW5dOmJnLWFjY2VudCBkYXRhLVtzdGF0ZT1vcGVuXTp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIGZsZXggY3Vyc29yLWRlZmF1bHQgaXRlbXMtY2VudGVyIHJvdW5kZWQtc20gcHgtMiBweS0xLjUgdGV4dC1zbSBvdXRsaW5lLWhpZGRlbiBzZWxlY3Qtbm9uZSBkYXRhLVtpbnNldF06cGwtOFwiLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxDaGV2cm9uUmlnaHRJY29uIGNsYXNzTmFtZT1cIm1sLWF1dG8gc2l6ZS00XCIgLz5cbiAgICA8L0Ryb3Bkb3duTWVudVByaW1pdGl2ZS5TdWJUcmlnZ2VyPlxuICApO1xufVxuXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVTdWJDb250ZW50KHtcbiAgY2xhc3NOYW1lLFxuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5TdWJDb250ZW50Pikge1xuICByZXR1cm4gKFxuICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuU3ViQ29udGVudFxuICAgICAgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS1zdWItY29udGVudFwiXG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcImJnLXBvcG92ZXIgdGV4dC1wb3BvdmVyLWZvcmVncm91bmQgZGF0YS1bc3RhdGU9b3Blbl06YW5pbWF0ZS1pbiBkYXRhLVtzdGF0ZT1jbG9zZWRdOmFuaW1hdGUtb3V0IGRhdGEtW3N0YXRlPWNsb3NlZF06ZmFkZS1vdXQtMCBkYXRhLVtzdGF0ZT1vcGVuXTpmYWRlLWluLTAgZGF0YS1bc3RhdGU9Y2xvc2VkXTp6b29tLW91dC05NSBkYXRhLVtzdGF0ZT1vcGVuXTp6b29tLWluLTk1IGRhdGEtW3NpZGU9Ym90dG9tXTpzbGlkZS1pbi1mcm9tLXRvcC0yIGRhdGEtW3NpZGU9bGVmdF06c2xpZGUtaW4tZnJvbS1yaWdodC0yIGRhdGEtW3NpZGU9cmlnaHRdOnNsaWRlLWluLWZyb20tbGVmdC0yIGRhdGEtW3NpZGU9dG9wXTpzbGlkZS1pbi1mcm9tLWJvdHRvbS0yIHotNTAgbWluLXctWzhyZW1dIG9yaWdpbi0oLS1yYWRpeC1kcm9wZG93bi1tZW51LWNvbnRlbnQtdHJhbnNmb3JtLW9yaWdpbikgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbWQgYm9yZGVyIHAtMSBzaGFkb3ctbGdcIixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5leHBvcnQge1xuICBEcm9wZG93bk1lbnUsXG4gIERyb3Bkb3duTWVudVBvcnRhbCxcbiAgRHJvcGRvd25NZW51VHJpZ2dlcixcbiAgRHJvcGRvd25NZW51Q29udGVudCxcbiAgRHJvcGRvd25NZW51R3JvdXAsXG4gIERyb3Bkb3duTWVudUxhYmVsLFxuICBEcm9wZG93bk1lbnVJdGVtLFxuICBEcm9wZG93bk1lbnVDaGVja2JveEl0ZW0sXG4gIERyb3Bkb3duTWVudVJhZGlvR3JvdXAsXG4gIERyb3Bkb3duTWVudVJhZGlvSXRlbSxcbiAgRHJvcGRvd25NZW51U2VwYXJhdG9yLFxuICBEcm9wZG93bk1lbnVTaG9ydGN1dCxcbiAgRHJvcGRvd25NZW51U3ViLFxuICBEcm9wZG93bk1lbnVTdWJUcmlnZ2VyLFxuICBEcm9wZG93bk1lbnVTdWJDb250ZW50LFxufTtcbiJdLCJmaWxlIjoiL1VzZXJzL21hY2Jvb2svYXBwbGFhLWRldmVsb3BtZW50L3NyYy9jb21wb25lbnRzL3VpL2Ryb3Bkb3duLW1lbnUudHN4In0=