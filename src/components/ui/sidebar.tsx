import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/sidebar.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=6baab06c"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/macbook/applaa-development/src/components/ui/sidebar.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$(), _s4 = $RefreshSig$(), _s5 = $RefreshSig$(), _s6 = $RefreshSig$(), _s7 = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=6baab06c"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import { Slot } from "/node_modules/.vite/deps/@radix-ui_react-slot.js?v=6baab06c";
import { cva } from "/node_modules/.vite/deps/class-variance-authority.js?v=6baab06c";
import { Menu } from "/node_modules/.vite/deps/lucide-react.js?v=6baab06c";
import { cn } from "/src/lib/utils.ts";
import { Button } from "/src/components/ui/button.tsx";
import { Input } from "/src/components/ui/input.tsx";
import { Separator } from "/src/components/ui/separator.tsx";
import { Skeleton } from "/src/components/ui/skeleton.tsx";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "/src/components/ui/tooltip.tsx";
const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "18rem";
const SIDEBAR_WIDTH_ICON = "5rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
const SidebarContext = React.createContext(null);
function useSidebar() {
  _s();
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}
_s(useSidebar, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}) {
  _s2();
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback(
    (value) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open]
  );
  const toggleSidebar = React.useCallback(() => {
    setOpen((open2) => !open2);
  }, [setOpen]);
  React.useEffect(() => {
    const mql = window.matchMedia("(max-width: 480px)");
    const handleResize = () => {
      if (mql.matches) {
        setOpen(false);
      }
    };
    mql.addEventListener("change", handleResize);
    handleResize();
    return () => mql.removeEventListener("change", handleResize);
  }, [setOpen]);
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);
  const state = open ? "expanded" : "collapsed";
  const contextValue = React.useMemo(
    () => ({
      state,
      open,
      setOpen,
      toggleSidebar
    }),
    [state, open, setOpen, toggleSidebar]
  );
  return /* @__PURE__ */ jsxDEV(SidebarContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsxDEV(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": SIDEBAR_WIDTH,
        "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
        ...style
      },
      className: cn(
        "bg-sidebar",
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        className
      ),
      ...props,
      children
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
      lineNumber: 145,
      columnNumber: 9
    },
    this
  ) }, void 0, false, {
    fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
    lineNumber: 144,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
    lineNumber: 143,
    columnNumber: 5
  }, this);
}
_s2(SidebarProvider, "FmdUuW54461nqA+53uw4tdGSNxE=");
_c = SidebarProvider;
function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}) {
  _s3();
  const { state } = useSidebar();
  if (collapsible === "none") {
    return /* @__PURE__ */ jsxDEV(
      "div",
      {
        "data-slot": "sidebar",
        className: cn(
          "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
          className
        ),
        ...props,
        children
      },
      void 0,
      false,
      {
        fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
        lineNumber: 184,
        columnNumber: 7
      },
      this
    );
  }
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: "group peer text-sidebar-foreground block",
      "data-state": state,
      "data-collapsible": state === "collapsed" ? collapsible : "",
      "data-variant": variant,
      "data-side": side,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            "data-slot": "sidebar-gap",
            className: cn(
              "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
            )
          },
          void 0,
          false,
          {
            fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
            lineNumber: 207,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            "data-slot": "sidebar-container",
            className: cn(
              "fixed inset-y-0 z-10 flex h-svh w-(--sidebar-width) transition-[left,right,width,transform] duration-200 ease-linear",
              side === "left" ? "left-0 translate-x-0 group-data-[collapsible=offcanvas]:translate-x-[-100%]" : "right-0 translate-x-0 group-data-[collapsible=offcanvas]:translate-x-[100%]",
              // Adjust the padding for floating and inset variants.
              variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l border-sidebar-border",
              className
            ),
            ...props,
            children: /* @__PURE__ */ jsxDEV(
              "div",
              {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar-inner",
                className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
                children
              },
              void 0,
              false,
              {
                fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
                lineNumber: 233,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
            lineNumber: 218,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
      lineNumber: 198,
      columnNumber: 5
    },
    this
  );
}
_s3(Sidebar, "g7CNXKa6ZoU7tmvjPpnm8PYZ25M=", false, function() {
  return [useSidebar];
});
_c2 = Sidebar;
function SidebarTrigger({
  onClick,
  ...props
}) {
  _s4();
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsxDEV(Tooltip, { children: [
    /* @__PURE__ */ jsxDEV(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxDEV(
      Button,
      {
        "data-sidebar": "trigger",
        "data-slot": "sidebar-trigger",
        variant: "ghost",
        size: "sidebar",
        className: "cursor-pointer ml-1 hover:bg-accent hover:text-accent-foreground",
        onClick: (event) => {
          onClick?.(event);
          toggleSidebar();
        },
        ...props,
        children: [
          /* @__PURE__ */ jsxDEV(Menu, { className: "size-5" }, void 0, false, {
            fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
            lineNumber: 267,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "sr-only", children: "Toggle Menu" }, void 0, false, {
            fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
            lineNumber: 268,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
        lineNumber: 254,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
      lineNumber: 253,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(TooltipContent, { side: "right", align: "center", children: "Toggle Menu" }, void 0, false, {
      fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
      lineNumber: 271,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
    lineNumber: 252,
    columnNumber: 5
  }, this);
}
_s4(SidebarTrigger, "dRnjPhQbCChcVGr4xvQkpNxnqyg=", false, function() {
  return [useSidebar];
});
_c3 = SidebarTrigger;
function SidebarRail({ className, ...props }) {
  _s5();
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsxDEV(
    "button",
    {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: toggleSidebar,
      title: "Toggle Sidebar",
      className: cn(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
        "in-data-[side=left][data-state=collapsed]_&]:cursor-e-resize in-data-[side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
      lineNumber: 282,
      columnNumber: 5
    },
    this
  );
}
_s5(SidebarRail, "dRnjPhQbCChcVGr4xvQkpNxnqyg=", false, function() {
  return [useSidebar];
});
_c4 = SidebarRail;
function SidebarInset({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: cn(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
      lineNumber: 304,
      columnNumber: 5
    },
    this
  );
}
_c5 = SidebarInset;
function SidebarInput({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    Input,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: cn("bg-background h-8 w-full shadow-none", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
      lineNumber: 321,
      columnNumber: 5
    },
    this
  );
}
_c6 = SidebarInput;
function SidebarHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: cn("flex flex-col gap-2 p-2", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
      lineNumber: 332,
      columnNumber: 5
    },
    this
  );
}
_c7 = SidebarHeader;
function SidebarFooter({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: cn("flex flex-col gap-2 p-2", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
      lineNumber: 343,
      columnNumber: 5
    },
    this
  );
}
_c8 = SidebarFooter;
function SidebarSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    Separator,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: cn("bg-sidebar-border mx-2 w-auto", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
      lineNumber: 357,
      columnNumber: 5
    },
    this
  );
}
_c9 = SidebarSeparator;
function SidebarContent({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
      lineNumber: 368,
      columnNumber: 5
    },
    this
  );
}
_c0 = SidebarContent;
function SidebarGroup({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: cn("relative flex w-full min-w-0 flex-col p-2", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
      lineNumber: 382,
      columnNumber: 5
    },
    this
  );
}
_c1 = SidebarGroup;
function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "div";
  return /* @__PURE__ */ jsxDEV(
    Comp,
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: cn(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
      lineNumber: 399,
      columnNumber: 5
    },
    this
  );
}
_c10 = SidebarGroupLabel;
function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsxDEV(
    Comp,
    {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
      lineNumber: 420,
      columnNumber: 5
    },
    this
  );
}
_c11 = SidebarGroupAction;
function SidebarGroupContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: cn("w-full text-sm", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
      lineNumber: 440,
      columnNumber: 5
    },
    this
  );
}
_c12 = SidebarGroupContent;
function SidebarMenu({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: cn("flex w-full min-w-0 flex-col gap-1", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
      lineNumber: 451,
      columnNumber: 5
    },
    this
  );
}
_c13 = SidebarMenu;
function SidebarMenuItem({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: cn("group/menu-item relative", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
      lineNumber: 462,
      columnNumber: 5
    },
    this
  );
}
_c14 = SidebarMenuItem;
const sidebarMenuButtonVariants = cva(
  // (Only the sidebarMenuButtonVariants constant is updated; the rest of the code remains unchanged)
  // Updated base classes:
  // • Changed flex direction to column and centered items.
  // • Enforced a fixed width (w-20) for consistent space.
  // • Removed text-left and gap changes to ensure the text label appears below the icon.
  "peer/menu-button flex flex-col items-center gap-1 w-16 overflow-hidden p-2 text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0 [&>span]:mt-1",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}) {
  _s6();
  const Comp = asChild ? Slot : "button";
  const { state } = useSidebar();
  const button = /* @__PURE__ */ jsxDEV(
    Comp,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(sidebarMenuButtonVariants({ variant, size }), className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
      lineNumber: 515,
      columnNumber: 3
    },
    this
  );
  if (!tooltip) {
    return button;
  }
  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip
    };
  }
  return /* @__PURE__ */ jsxDEV(Tooltip, { children: [
    /* @__PURE__ */ jsxDEV(TooltipTrigger, { asChild: true, children: button }, void 0, false, {
      fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
      lineNumber: 537,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(
      TooltipContent,
      {
        side: "right",
        align: "center",
        hidden: state !== "collapsed",
        ...tooltip
      },
      void 0,
      false,
      {
        fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
        lineNumber: 538,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
    lineNumber: 536,
    columnNumber: 5
  }, this);
}
_s6(SidebarMenuButton, "g7CNXKa6ZoU7tmvjPpnm8PYZ25M=", false, function() {
  return [useSidebar];
});
_c15 = SidebarMenuButton;
function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsxDEV(
    Comp,
    {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      className: cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
      lineNumber: 560,
      columnNumber: 5
    },
    this
  );
}
_c16 = SidebarMenuAction;
function SidebarMenuBadge({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      className: cn(
        "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
      lineNumber: 585,
      columnNumber: 5
    },
    this
  );
}
_c17 = SidebarMenuBadge;
function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}) {
  _s7();
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: cn("flex h-8 items-center gap-2 rounded-md px-2", className),
      ...props,
      children: [
        showIcon && /* @__PURE__ */ jsxDEV(
          Skeleton,
          {
            className: "size-4 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          },
          void 0,
          false,
          {
            fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
            lineNumber: 622,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          Skeleton,
          {
            className: "h-4 max-w-(--skeleton-width) flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": width
            }
          },
          void 0,
          false,
          {
            fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
            lineNumber: 627,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
      lineNumber: 615,
      columnNumber: 5
    },
    this
  );
}
_s7(SidebarMenuSkeleton, "nKFjX4dxbYo91VAj5VdWQ1XUe3I=");
_c18 = SidebarMenuSkeleton;
function SidebarMenuSub({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV(
    "ul",
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: cn(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
      lineNumber: 642,
      columnNumber: 5
    },
    this
  );
}
_c19 = SidebarMenuSub;
function SidebarMenuSubItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    "li",
    {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: cn("group/menu-sub-item relative", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
      lineNumber: 660,
      columnNumber: 5
    },
    this
  );
}
_c20 = SidebarMenuSubItem;
function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}) {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsxDEV(
    Comp,
    {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/macbook/applaa-development/src/components/ui/sidebar.tsx",
      lineNumber: 683,
      columnNumber: 5
    },
    this
  );
}
_c21 = SidebarMenuSubButton;
export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar
};
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c0, _c1, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21;
$RefreshReg$(_c, "SidebarProvider");
$RefreshReg$(_c2, "Sidebar");
$RefreshReg$(_c3, "SidebarTrigger");
$RefreshReg$(_c4, "SidebarRail");
$RefreshReg$(_c5, "SidebarInset");
$RefreshReg$(_c6, "SidebarInput");
$RefreshReg$(_c7, "SidebarHeader");
$RefreshReg$(_c8, "SidebarFooter");
$RefreshReg$(_c9, "SidebarSeparator");
$RefreshReg$(_c0, "SidebarContent");
$RefreshReg$(_c1, "SidebarGroup");
$RefreshReg$(_c10, "SidebarGroupLabel");
$RefreshReg$(_c11, "SidebarGroupAction");
$RefreshReg$(_c12, "SidebarGroupContent");
$RefreshReg$(_c13, "SidebarMenu");
$RefreshReg$(_c14, "SidebarMenuItem");
$RefreshReg$(_c15, "SidebarMenuButton");
$RefreshReg$(_c16, "SidebarMenuAction");
$RefreshReg$(_c17, "SidebarMenuBadge");
$RefreshReg$(_c18, "SidebarMenuSkeleton");
$RefreshReg$(_c19, "SidebarMenuSub");
$RefreshReg$(_c20, "SidebarMenuSubItem");
$RefreshReg$(_c21, "SidebarMenuSubButton");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/macbook/applaa-development/src/components/ui/sidebar.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/macbook/applaa-development/src/components/ui/sidebar.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUEsRUFDQTNHO0FBQUFBLEVBQ0FpRDtBQUFBQSxFQUNBVztBQUFBQSxFQUNBZjtBQUFBQSxFQUNBbEQ7QUFBQUE7QUFDQSxJQUFBMkMsSUFBQU0sS0FBQUksS0FBQUcsS0FBQUUsS0FBQUUsS0FBQUUsS0FBQUUsS0FBQUUsS0FBQUUsS0FBQUUsS0FBQUksTUFBQUUsTUFBQUUsTUFBQUUsTUFBQUUsTUFBQWMsTUFBQUcsTUFBQUUsTUFBQVEsTUFBQUUsTUFBQUUsTUFBQUU7QUFBQUMsYUFBQXpFLElBQUE7QUFBQXlFLGFBQUFuRSxLQUFBO0FBQUFtRSxhQUFBL0QsS0FBQTtBQUFBK0QsYUFBQTVELEtBQUE7QUFBQTRELGFBQUExRCxLQUFBO0FBQUEwRCxhQUFBeEQsS0FBQTtBQUFBd0QsYUFBQXRELEtBQUE7QUFBQXNELGFBQUFwRCxLQUFBO0FBQUFvRCxhQUFBbEQsS0FBQTtBQUFBa0QsYUFBQWhELEtBQUE7QUFBQWdELGFBQUE5QyxLQUFBO0FBQUE4QyxhQUFBMUMsTUFBQTtBQUFBMEMsYUFBQXhDLE1BQUE7QUFBQXdDLGFBQUF0QyxNQUFBO0FBQUFzQyxhQUFBcEMsTUFBQTtBQUFBb0MsYUFBQWxDLE1BQUE7QUFBQWtDLGFBQUFwQixNQUFBO0FBQUFvQixhQUFBakIsTUFBQTtBQUFBaUIsYUFBQWYsTUFBQTtBQUFBZSxhQUFBUCxNQUFBO0FBQUFPLGFBQUFMLE1BQUE7QUFBQUssYUFBQUgsTUFBQTtBQUFBRyxhQUFBRCxNQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJTbG90IiwiY3ZhIiwiTWVudSIsImNuIiwiQnV0dG9uIiwiSW5wdXQiLCJTZXBhcmF0b3IiLCJTa2VsZXRvbiIsIlRvb2x0aXAiLCJUb29sdGlwQ29udGVudCIsIlRvb2x0aXBQcm92aWRlciIsIlRvb2x0aXBUcmlnZ2VyIiwiU0lERUJBUl9DT09LSUVfTkFNRSIsIlNJREVCQVJfQ09PS0lFX01BWF9BR0UiLCJTSURFQkFSX1dJRFRIIiwiU0lERUJBUl9XSURUSF9JQ09OIiwiU0lERUJBUl9LRVlCT0FSRF9TSE9SVENVVCIsIlNpZGViYXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZVNpZGViYXIiLCJfcyIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRXJyb3IiLCJTaWRlYmFyUHJvdmlkZXIiLCJkZWZhdWx0T3BlbiIsIm9wZW4iLCJvcGVuUHJvcCIsIm9uT3BlbkNoYW5nZSIsInNldE9wZW5Qcm9wIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJjaGlsZHJlbiIsInByb3BzIiwiX3MyIiwiX29wZW4iLCJfc2V0T3BlbiIsInVzZVN0YXRlIiwic2V0T3BlbiIsInVzZUNhbGxiYWNrIiwidmFsdWUiLCJvcGVuU3RhdGUiLCJkb2N1bWVudCIsImNvb2tpZSIsInRvZ2dsZVNpZGViYXIiLCJ1c2VFZmZlY3QiLCJtcWwiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwiaGFuZGxlUmVzaXplIiwibWF0Y2hlcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlS2V5RG93biIsImV2ZW50Iiwia2V5IiwibWV0YUtleSIsImN0cmxLZXkiLCJwcmV2ZW50RGVmYXVsdCIsInN0YXRlIiwiY29udGV4dFZhbHVlIiwidXNlTWVtbyIsIl9jIiwiU2lkZWJhciIsInNpZGUiLCJ2YXJpYW50IiwiY29sbGFwc2libGUiLCJfczMiLCJfYzIiLCJTaWRlYmFyVHJpZ2dlciIsIm9uQ2xpY2siLCJfczQiLCJfYzMiLCJTaWRlYmFyUmFpbCIsIl9zNSIsIl9jNCIsIlNpZGViYXJJbnNldCIsIl9jNSIsIlNpZGViYXJJbnB1dCIsIl9jNiIsIlNpZGViYXJIZWFkZXIiLCJfYzciLCJTaWRlYmFyRm9vdGVyIiwiX2M4IiwiU2lkZWJhclNlcGFyYXRvciIsIl9jOSIsIlNpZGViYXJDb250ZW50IiwiX2MwIiwiU2lkZWJhckdyb3VwIiwiX2MxIiwiU2lkZWJhckdyb3VwTGFiZWwiLCJhc0NoaWxkIiwiQ29tcCIsIl9jMTAiLCJTaWRlYmFyR3JvdXBBY3Rpb24iLCJfYzExIiwiU2lkZWJhckdyb3VwQ29udGVudCIsIl9jMTIiLCJTaWRlYmFyTWVudSIsIl9jMTMiLCJTaWRlYmFyTWVudUl0ZW0iLCJfYzE0Iiwic2lkZWJhck1lbnVCdXR0b25WYXJpYW50cyIsInZhcmlhbnRzIiwiZGVmYXVsdCIsIm91dGxpbmUiLCJzaXplIiwic20iLCJsZyIsImRlZmF1bHRWYXJpYW50cyIsIlNpZGViYXJNZW51QnV0dG9uIiwiaXNBY3RpdmUiLCJ0b29sdGlwIiwiX3M2IiwiYnV0dG9uIiwiX2MxNSIsIlNpZGViYXJNZW51QWN0aW9uIiwic2hvd09uSG92ZXIiLCJfYzE2IiwiU2lkZWJhck1lbnVCYWRnZSIsIl9jMTciLCJTaWRlYmFyTWVudVNrZWxldG9uIiwic2hvd0ljb24iLCJfczciLCJ3aWR0aCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIl9jMTgiLCJTaWRlYmFyTWVudVN1YiIsIl9jMTkiLCJTaWRlYmFyTWVudVN1Ykl0ZW0iLCJfYzIwIiwiU2lkZWJhck1lbnVTdWJCdXR0b24iLCJfYzIxIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbInNpZGViYXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2xvdCB9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3Qtc2xvdFwiO1xuaW1wb3J0IHsgdHlwZSBWYXJpYW50UHJvcHMsIGN2YSB9IGZyb20gXCJjbGFzcy12YXJpYW5jZS1hdXRob3JpdHlcIjtcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xuaW1wb3J0IHsgU2VwYXJhdG9yIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9zZXBhcmF0b3JcIjtcbmltcG9ydCB7IFNrZWxldG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9za2VsZXRvblwiO1xuaW1wb3J0IHtcbiAgVG9vbHRpcCxcbiAgVG9vbHRpcENvbnRlbnQsXG4gIFRvb2x0aXBQcm92aWRlcixcbiAgVG9vbHRpcFRyaWdnZXIsXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdG9vbHRpcFwiO1xuXG5jb25zdCBTSURFQkFSX0NPT0tJRV9OQU1FID0gXCJzaWRlYmFyX3N0YXRlXCI7XG5jb25zdCBTSURFQkFSX0NPT0tJRV9NQVhfQUdFID0gNjAgKiA2MCAqIDI0ICogNztcbmNvbnN0IFNJREVCQVJfV0lEVEggPSBcIjE4cmVtXCI7XG5jb25zdCBTSURFQkFSX1dJRFRIX0lDT04gPSBcIjVyZW1cIjtcbmNvbnN0IFNJREVCQVJfS0VZQk9BUkRfU0hPUlRDVVQgPSBcImJcIjtcblxudHlwZSBTaWRlYmFyQ29udGV4dFByb3BzID0ge1xuICBzdGF0ZTogXCJleHBhbmRlZFwiIHwgXCJjb2xsYXBzZWRcIjtcbiAgb3BlbjogYm9vbGVhbjtcbiAgc2V0T3BlbjogKG9wZW46IGJvb2xlYW4pID0+IHZvaWQ7XG4gIHRvZ2dsZVNpZGViYXI6ICgpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBTaWRlYmFyQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8U2lkZWJhckNvbnRleHRQcm9wcyB8IG51bGw+KG51bGwpO1xuXG5mdW5jdGlvbiB1c2VTaWRlYmFyKCkge1xuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChTaWRlYmFyQ29udGV4dCk7XG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInVzZVNpZGViYXIgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIFNpZGViYXJQcm92aWRlci5cIik7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cblxuZnVuY3Rpb24gU2lkZWJhclByb3ZpZGVyKHtcbiAgZGVmYXVsdE9wZW4gPSB0cnVlLFxuICBvcGVuOiBvcGVuUHJvcCxcbiAgb25PcGVuQ2hhbmdlOiBzZXRPcGVuUHJvcCxcbiAgY2xhc3NOYW1lLFxuICBzdHlsZSxcbiAgY2hpbGRyZW4sXG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczxcImRpdlwiPiAmIHtcbiAgZGVmYXVsdE9wZW4/OiBib29sZWFuO1xuICBvcGVuPzogYm9vbGVhbjtcbiAgb25PcGVuQ2hhbmdlPzogKG9wZW46IGJvb2xlYW4pID0+IHZvaWQ7XG59KSB7XG4gIC8vIFRoaXMgaXMgdGhlIGludGVybmFsIHN0YXRlIG9mIHRoZSBzaWRlYmFyLlxuICAvLyBXZSB1c2Ugb3BlblByb3AgYW5kIHNldE9wZW5Qcm9wIGZvciBjb250cm9sIGZyb20gb3V0c2lkZSB0aGUgY29tcG9uZW50LlxuICBjb25zdCBbX29wZW4sIF9zZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGRlZmF1bHRPcGVuKTtcbiAgY29uc3Qgb3BlbiA9IG9wZW5Qcm9wID8/IF9vcGVuO1xuICBjb25zdCBzZXRPcGVuID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKHZhbHVlOiBib29sZWFuIHwgKCh2YWx1ZTogYm9vbGVhbikgPT4gYm9vbGVhbikpID0+IHtcbiAgICAgIGNvbnN0IG9wZW5TdGF0ZSA9IHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiID8gdmFsdWUob3BlbikgOiB2YWx1ZTtcbiAgICAgIGlmIChzZXRPcGVuUHJvcCkge1xuICAgICAgICBzZXRPcGVuUHJvcChvcGVuU3RhdGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3NldE9wZW4ob3BlblN0YXRlKTtcbiAgICAgIH1cblxuICAgICAgLy8gVGhpcyBzZXRzIHRoZSBjb29raWUgdG8ga2VlcCB0aGUgc2lkZWJhciBzdGF0ZS5cbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke1NJREVCQVJfQ09PS0lFX05BTUV9PSR7b3BlblN0YXRlfTsgcGF0aD0vOyBtYXgtYWdlPSR7U0lERUJBUl9DT09LSUVfTUFYX0FHRX1gO1xuICAgIH0sXG4gICAgW3NldE9wZW5Qcm9wLCBvcGVuXSxcbiAgKTtcblxuICAvLyBIZWxwZXIgdG8gdG9nZ2xlIHRoZSBzaWRlYmFyLlxuICBjb25zdCB0b2dnbGVTaWRlYmFyID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldE9wZW4oKG9wZW4pID0+ICFvcGVuKTtcbiAgfSwgW3NldE9wZW5dKTtcblxuICAvLyBBdXRvLWNvbGxhcHNlIG9uIHNtYWxsIHNjcmVlbnNcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBtcWwgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDQ4MHB4KVwiKTtcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gICAgICBpZiAobXFsLm1hdGNoZXMpIHtcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIG1xbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGhhbmRsZVJlc2l6ZSk7XG4gICAgaGFuZGxlUmVzaXplKCk7IC8vIENoZWNrIGluaXRpYWwgc2l6ZVxuXG4gICAgcmV0dXJuICgpID0+IG1xbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGhhbmRsZVJlc2l6ZSk7XG4gIH0sIFtzZXRPcGVuXSk7XG5cbiAgLy8gQWRkcyBhIGtleWJvYXJkIHNob3J0Y3V0IHRvIHRvZ2dsZSB0aGUgc2lkZWJhci5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGV2ZW50LmtleSA9PT0gU0lERUJBUl9LRVlCT0FSRF9TSE9SVENVVCAmJlxuICAgICAgICAoZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5KVxuICAgICAgKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRvZ2dsZVNpZGViYXIoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4gIH0sIFt0b2dnbGVTaWRlYmFyXSk7XG5cbiAgLy8gV2UgYWRkIGEgc3RhdGUgc28gdGhhdCB3ZSBjYW4gZG8gZGF0YS1zdGF0ZT1cImV4cGFuZGVkXCIgb3IgXCJjb2xsYXBzZWRcIi5cbiAgLy8gVGhpcyBtYWtlcyBpdCBlYXNpZXIgdG8gc3R5bGUgdGhlIHNpZGViYXIgd2l0aCBUYWlsd2luZCBjbGFzc2VzLlxuICBjb25zdCBzdGF0ZSA9IG9wZW4gPyBcImV4cGFuZGVkXCIgOiBcImNvbGxhcHNlZFwiO1xuXG4gIGNvbnN0IGNvbnRleHRWYWx1ZSA9IFJlYWN0LnVzZU1lbW88U2lkZWJhckNvbnRleHRQcm9wcz4oXG4gICAgKCkgPT4gKHtcbiAgICAgIHN0YXRlLFxuICAgICAgb3BlbixcbiAgICAgIHNldE9wZW4sXG4gICAgICB0b2dnbGVTaWRlYmFyLFxuICAgIH0pLFxuICAgIFtzdGF0ZSwgb3Blbiwgc2V0T3BlbiwgdG9nZ2xlU2lkZWJhcl0sXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2lkZWJhckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHRWYWx1ZX0+XG4gICAgICA8VG9vbHRpcFByb3ZpZGVyIGRlbGF5RHVyYXRpb249ezB9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgZGF0YS1zbG90PVwic2lkZWJhci13cmFwcGVyXCJcbiAgICAgICAgICBzdHlsZT17XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiLS1zaWRlYmFyLXdpZHRoXCI6IFNJREVCQVJfV0lEVEgsXG4gICAgICAgICAgICAgIFwiLS1zaWRlYmFyLXdpZHRoLWljb25cIjogU0lERUJBUl9XSURUSF9JQ09OLFxuICAgICAgICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgICAgIH0gYXMgUmVhY3QuQ1NTUHJvcGVydGllc1xuICAgICAgICAgIH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgICAgXCJiZy1zaWRlYmFyXCIsXG4gICAgICAgICAgICBcImdyb3VwL3NpZGViYXItd3JhcHBlciBoYXMtZGF0YS1bdmFyaWFudD1pbnNldF06Ymctc2lkZWJhciBmbGV4IG1pbi1oLXN2aCB3LWZ1bGxcIixcbiAgICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICApfVxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1Rvb2x0aXBQcm92aWRlcj5cbiAgICA8L1NpZGViYXJDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5mdW5jdGlvbiBTaWRlYmFyKHtcbiAgc2lkZSA9IFwibGVmdFwiLFxuICB2YXJpYW50ID0gXCJzaWRlYmFyXCIsXG4gIGNvbGxhcHNpYmxlID0gXCJvZmZjYW52YXNcIixcbiAgY2xhc3NOYW1lLFxuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwiZGl2XCI+ICYge1xuICBzaWRlPzogXCJsZWZ0XCIgfCBcInJpZ2h0XCI7XG4gIHZhcmlhbnQ/OiBcInNpZGViYXJcIiB8IFwiZmxvYXRpbmdcIiB8IFwiaW5zZXRcIjtcbiAgY29sbGFwc2libGU/OiBcIm9mZmNhbnZhc1wiIHwgXCJpY29uXCIgfCBcIm5vbmVcIjtcbn0pIHtcbiAgY29uc3QgeyBzdGF0ZSB9ID0gdXNlU2lkZWJhcigpO1xuXG4gIGlmIChjb2xsYXBzaWJsZSA9PT0gXCJub25lXCIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBkYXRhLXNsb3Q9XCJzaWRlYmFyXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICBcImJnLXNpZGViYXIgdGV4dC1zaWRlYmFyLWZvcmVncm91bmQgZmxleCBoLWZ1bGwgdy0oLS1zaWRlYmFyLXdpZHRoKSBmbGV4LWNvbFwiLFxuICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgKX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJncm91cCBwZWVyIHRleHQtc2lkZWJhci1mb3JlZ3JvdW5kIGJsb2NrXCJcbiAgICAgIGRhdGEtc3RhdGU9e3N0YXRlfVxuICAgICAgZGF0YS1jb2xsYXBzaWJsZT17c3RhdGUgPT09IFwiY29sbGFwc2VkXCIgPyBjb2xsYXBzaWJsZSA6IFwiXCJ9XG4gICAgICBkYXRhLXZhcmlhbnQ9e3ZhcmlhbnR9XG4gICAgICBkYXRhLXNpZGU9e3NpZGV9XG4gICAgICBkYXRhLXNsb3Q9XCJzaWRlYmFyXCJcbiAgICA+XG4gICAgICB7LyogVGhpcyBpcyB3aGF0IGhhbmRsZXMgdGhlIHNpZGViYXIgZ2FwICovfVxuICAgICAgPGRpdlxuICAgICAgICBkYXRhLXNsb3Q9XCJzaWRlYmFyLWdhcFwiXG4gICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgXCJyZWxhdGl2ZSB3LSgtLXNpZGViYXItd2lkdGgpIGJnLXRyYW5zcGFyZW50IHRyYW5zaXRpb24tW3dpZHRoXSBkdXJhdGlvbi0yMDAgZWFzZS1saW5lYXJcIixcbiAgICAgICAgICBcImdyb3VwLWRhdGEtW2NvbGxhcHNpYmxlPW9mZmNhbnZhc106dy0wXCIsXG4gICAgICAgICAgXCJncm91cC1kYXRhLVtzaWRlPXJpZ2h0XTpyb3RhdGUtMTgwXCIsXG4gICAgICAgICAgdmFyaWFudCA9PT0gXCJmbG9hdGluZ1wiIHx8IHZhcmlhbnQgPT09IFwiaW5zZXRcIlxuICAgICAgICAgICAgPyBcImdyb3VwLWRhdGEtW2NvbGxhcHNpYmxlPWljb25dOnctW2NhbGModmFyKC0tc2lkZWJhci13aWR0aC1pY29uKSsoLS1zcGFjaW5nKDQpKSldXCJcbiAgICAgICAgICAgIDogXCJncm91cC1kYXRhLVtjb2xsYXBzaWJsZT1pY29uXTp3LSgtLXNpZGViYXItd2lkdGgtaWNvbilcIixcbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgICA8ZGl2XG4gICAgICAgIGRhdGEtc2xvdD1cInNpZGViYXItY29udGFpbmVyXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICBcImZpeGVkIGluc2V0LXktMCB6LTEwIGZsZXggaC1zdmggdy0oLS1zaWRlYmFyLXdpZHRoKSB0cmFuc2l0aW9uLVtsZWZ0LHJpZ2h0LHdpZHRoLHRyYW5zZm9ybV0gZHVyYXRpb24tMjAwIGVhc2UtbGluZWFyXCIsXG4gICAgICAgICAgc2lkZSA9PT0gXCJsZWZ0XCJcbiAgICAgICAgICAgID8gXCJsZWZ0LTAgdHJhbnNsYXRlLXgtMCBncm91cC1kYXRhLVtjb2xsYXBzaWJsZT1vZmZjYW52YXNdOnRyYW5zbGF0ZS14LVstMTAwJV1cIlxuICAgICAgICAgICAgOiBcInJpZ2h0LTAgdHJhbnNsYXRlLXgtMCBncm91cC1kYXRhLVtjb2xsYXBzaWJsZT1vZmZjYW52YXNdOnRyYW5zbGF0ZS14LVsxMDAlXVwiLFxuICAgICAgICAgIC8vIEFkanVzdCB0aGUgcGFkZGluZyBmb3IgZmxvYXRpbmcgYW5kIGluc2V0IHZhcmlhbnRzLlxuICAgICAgICAgIHZhcmlhbnQgPT09IFwiZmxvYXRpbmdcIiB8fCB2YXJpYW50ID09PSBcImluc2V0XCJcbiAgICAgICAgICAgID8gXCJwLTIgZ3JvdXAtZGF0YS1bY29sbGFwc2libGU9aWNvbl06dy1bY2FsYyh2YXIoLS1zaWRlYmFyLXdpZHRoLWljb24pKygtLXNwYWNpbmcoNCkpKzJweCldXCJcbiAgICAgICAgICAgIDogXCJncm91cC1kYXRhLVtjb2xsYXBzaWJsZT1pY29uXTp3LSgtLXNpZGViYXItd2lkdGgtaWNvbikgZ3JvdXAtZGF0YS1bc2lkZT1sZWZ0XTpib3JkZXItciBncm91cC1kYXRhLVtzaWRlPXJpZ2h0XTpib3JkZXItbCBib3JkZXItc2lkZWJhci1ib3JkZXJcIixcbiAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICl9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGRhdGEtc2lkZWJhcj1cInNpZGViYXJcIlxuICAgICAgICAgIGRhdGEtc2xvdD1cInNpZGViYXItaW5uZXJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXNpZGViYXIgZ3JvdXAtZGF0YS1bdmFyaWFudD1mbG9hdGluZ106Ym9yZGVyLXNpZGViYXItYm9yZGVyIGZsZXggaC1mdWxsIHctZnVsbCBmbGV4LWNvbCBncm91cC1kYXRhLVt2YXJpYW50PWZsb2F0aW5nXTpyb3VuZGVkLWxnIGdyb3VwLWRhdGEtW3ZhcmlhbnQ9ZmxvYXRpbmddOmJvcmRlciBncm91cC1kYXRhLVt2YXJpYW50PWZsb2F0aW5nXTpzaGFkb3ctc21cIlxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBTaWRlYmFyVHJpZ2dlcih7XG4gIG9uQ2xpY2ssXG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgQnV0dG9uPikge1xuICBjb25zdCB7IHRvZ2dsZVNpZGViYXIgfSA9IHVzZVNpZGViYXIoKTtcblxuICByZXR1cm4gKFxuICAgIDxUb29sdGlwPlxuICAgICAgPFRvb2x0aXBUcmlnZ2VyIGFzQ2hpbGQ+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkYXRhLXNpZGViYXI9XCJ0cmlnZ2VyXCJcbiAgICAgICAgICBkYXRhLXNsb3Q9XCJzaWRlYmFyLXRyaWdnZXJcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgc2l6ZT1cInNpZGViYXJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIG1sLTEgaG92ZXI6YmctYWNjZW50IGhvdmVyOnRleHQtYWNjZW50LWZvcmVncm91bmRcIlxuICAgICAgICAgIC8vIGNsYXNzTmFtZT17Y24oXCJoaWRkZW5cIiwgY2xhc3NOYW1lKX1cbiAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIG9uQ2xpY2s/LihldmVudCk7XG4gICAgICAgICAgICB0b2dnbGVTaWRlYmFyKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICA8TWVudSBjbGFzc05hbWU9XCJzaXplLTVcIiAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Ub2dnbGUgTWVudTwvc3Bhbj5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L1Rvb2x0aXBUcmlnZ2VyPlxuICAgICAgPFRvb2x0aXBDb250ZW50IHNpZGU9XCJyaWdodFwiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIFRvZ2dsZSBNZW51XG4gICAgICA8L1Rvb2x0aXBDb250ZW50PlxuICAgIDwvVG9vbHRpcD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU2lkZWJhclJhaWwoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwiYnV0dG9uXCI+KSB7XG4gIGNvbnN0IHsgdG9nZ2xlU2lkZWJhciB9ID0gdXNlU2lkZWJhcigpO1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgZGF0YS1zaWRlYmFyPVwicmFpbFwiXG4gICAgICBkYXRhLXNsb3Q9XCJzaWRlYmFyLXJhaWxcIlxuICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBTaWRlYmFyXCJcbiAgICAgIHRhYkluZGV4PXstMX1cbiAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNpZGViYXJ9XG4gICAgICB0aXRsZT1cIlRvZ2dsZSBTaWRlYmFyXCJcbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwiaG92ZXI6YWZ0ZXI6Ymctc2lkZWJhci1ib3JkZXIgYWJzb2x1dGUgaW5zZXQteS0wIHotMjAgaGlkZGVuIHctNCAtdHJhbnNsYXRlLXgtMS8yIHRyYW5zaXRpb24tYWxsIGVhc2UtbGluZWFyIGdyb3VwLWRhdGEtW3NpZGU9bGVmdF06LXJpZ2h0LTQgZ3JvdXAtZGF0YS1bc2lkZT1yaWdodF06bGVmdC0wIGFmdGVyOmFic29sdXRlIGFmdGVyOmluc2V0LXktMCBhZnRlcjpsZWZ0LTEvMiBhZnRlcjp3LVsycHhdIHNtOmZsZXhcIixcbiAgICAgICAgXCJpbi1kYXRhLVtzaWRlPWxlZnRdW2RhdGEtc3RhdGU9Y29sbGFwc2VkXV8mXTpjdXJzb3ItZS1yZXNpemUgaW4tZGF0YS1bc2lkZT1yaWdodF1bZGF0YS1zdGF0ZT1jb2xsYXBzZWRdXyZdOmN1cnNvci13LXJlc2l6ZVwiLFxuICAgICAgICBcImhvdmVyOmdyb3VwLWRhdGEtW2NvbGxhcHNpYmxlPW9mZmNhbnZhc106Ymctc2lkZWJhciBncm91cC1kYXRhLVtjb2xsYXBzaWJsZT1vZmZjYW52YXNdOnRyYW5zbGF0ZS14LTAgZ3JvdXAtZGF0YS1bY29sbGFwc2libGU9b2ZmY2FudmFzXTphZnRlcjpsZWZ0LWZ1bGxcIixcbiAgICAgICAgXCJbW2RhdGEtc2lkZT1sZWZ0XVtkYXRhLWNvbGxhcHNpYmxlPW9mZmNhbnZhc11fJl06LXJpZ2h0LTJcIixcbiAgICAgICAgXCJbW2RhdGEtc2lkZT1yaWdodF1bZGF0YS1jb2xsYXBzaWJsZT1vZmZjYW52YXNdXyZdOi1sZWZ0LTJcIixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBTaWRlYmFySW5zZXQoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwibWFpblwiPikge1xuICByZXR1cm4gKFxuICAgIDxtYWluXG4gICAgICBkYXRhLXNsb3Q9XCJzaWRlYmFyLWluc2V0XCJcbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwiYmctYmFja2dyb3VuZCByZWxhdGl2ZSBmbGV4IHctZnVsbCBmbGV4LTEgZmxleC1jb2xcIixcbiAgICAgICAgXCJtZDpwZWVyLWRhdGEtW3ZhcmlhbnQ9aW5zZXRdOm0tMiBtZDpwZWVyLWRhdGEtW3ZhcmlhbnQ9aW5zZXRdOm1sLTAgbWQ6cGVlci1kYXRhLVt2YXJpYW50PWluc2V0XTpyb3VuZGVkLXhsIG1kOnBlZXItZGF0YS1bdmFyaWFudD1pbnNldF06c2hhZG93LXNtIG1kOnBlZXItZGF0YS1bdmFyaWFudD1pbnNldF06cGVlci1kYXRhLVtzdGF0ZT1jb2xsYXBzZWRdOm1sLTJcIixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBTaWRlYmFySW5wdXQoe1xuICBjbGFzc05hbWUsXG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgSW5wdXQ+KSB7XG4gIHJldHVybiAoXG4gICAgPElucHV0XG4gICAgICBkYXRhLXNsb3Q9XCJzaWRlYmFyLWlucHV0XCJcbiAgICAgIGRhdGEtc2lkZWJhcj1cImlucHV0XCJcbiAgICAgIGNsYXNzTmFtZT17Y24oXCJiZy1iYWNrZ3JvdW5kIGgtOCB3LWZ1bGwgc2hhZG93LW5vbmVcIiwgY2xhc3NOYW1lKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBTaWRlYmFySGVhZGVyKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBSZWFjdC5Db21wb25lbnRQcm9wczxcImRpdlwiPikge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGRhdGEtc2xvdD1cInNpZGViYXItaGVhZGVyXCJcbiAgICAgIGRhdGEtc2lkZWJhcj1cImhlYWRlclwiXG4gICAgICBjbGFzc05hbWU9e2NuKFwiZmxleCBmbGV4LWNvbCBnYXAtMiBwLTJcIiwgY2xhc3NOYW1lKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBTaWRlYmFyRm9vdGVyKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBSZWFjdC5Db21wb25lbnRQcm9wczxcImRpdlwiPikge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGRhdGEtc2xvdD1cInNpZGViYXItZm9vdGVyXCJcbiAgICAgIGRhdGEtc2lkZWJhcj1cImZvb3RlclwiXG4gICAgICBjbGFzc05hbWU9e2NuKFwiZmxleCBmbGV4LWNvbCBnYXAtMiBwLTJcIiwgY2xhc3NOYW1lKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBTaWRlYmFyU2VwYXJhdG9yKHtcbiAgY2xhc3NOYW1lLFxuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFNlcGFyYXRvcj4pIHtcbiAgcmV0dXJuIChcbiAgICA8U2VwYXJhdG9yXG4gICAgICBkYXRhLXNsb3Q9XCJzaWRlYmFyLXNlcGFyYXRvclwiXG4gICAgICBkYXRhLXNpZGViYXI9XCJzZXBhcmF0b3JcIlxuICAgICAgY2xhc3NOYW1lPXtjbihcImJnLXNpZGViYXItYm9yZGVyIG14LTIgdy1hdXRvXCIsIGNsYXNzTmFtZSl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU2lkZWJhckNvbnRlbnQoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwiZGl2XCI+KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgZGF0YS1zbG90PVwic2lkZWJhci1jb250ZW50XCJcbiAgICAgIGRhdGEtc2lkZWJhcj1cImNvbnRlbnRcIlxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJmbGV4IG1pbi1oLTAgZmxleC0xIGZsZXgtY29sIGdhcC0yIG92ZXJmbG93LWF1dG8gZ3JvdXAtZGF0YS1bY29sbGFwc2libGU9aWNvbl06b3ZlcmZsb3ctaGlkZGVuXCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU2lkZWJhckdyb3VwKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBSZWFjdC5Db21wb25lbnRQcm9wczxcImRpdlwiPikge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGRhdGEtc2xvdD1cInNpZGViYXItZ3JvdXBcIlxuICAgICAgZGF0YS1zaWRlYmFyPVwiZ3JvdXBcIlxuICAgICAgY2xhc3NOYW1lPXtjbihcInJlbGF0aXZlIGZsZXggdy1mdWxsIG1pbi13LTAgZmxleC1jb2wgcC0yXCIsIGNsYXNzTmFtZSl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU2lkZWJhckdyb3VwTGFiZWwoe1xuICBjbGFzc05hbWUsXG4gIGFzQ2hpbGQgPSBmYWxzZSxcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwiZGl2XCI+ICYgeyBhc0NoaWxkPzogYm9vbGVhbiB9KSB7XG4gIGNvbnN0IENvbXAgPSBhc0NoaWxkID8gU2xvdCA6IFwiZGl2XCI7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29tcFxuICAgICAgZGF0YS1zbG90PVwic2lkZWJhci1ncm91cC1sYWJlbFwiXG4gICAgICBkYXRhLXNpZGViYXI9XCJncm91cC1sYWJlbFwiXG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcInRleHQtc2lkZWJhci1mb3JlZ3JvdW5kLzcwIHJpbmctc2lkZWJhci1yaW5nIGZsZXggaC04IHNocmluay0wIGl0ZW1zLWNlbnRlciByb3VuZGVkLW1kIHB4LTIgdGV4dC14cyBmb250LW1lZGl1bSBvdXRsaW5lLWhpZGRlbiB0cmFuc2l0aW9uLVttYXJnaW4sb3BhY2l0eV0gZHVyYXRpb24tMjAwIGVhc2UtbGluZWFyIGZvY3VzLXZpc2libGU6cmluZy0yIFsmPnN2Z106c2l6ZS00IFsmPnN2Z106c2hyaW5rLTBcIixcbiAgICAgICAgXCJncm91cC1kYXRhLVtjb2xsYXBzaWJsZT1pY29uXTotbXQtOCBncm91cC1kYXRhLVtjb2xsYXBzaWJsZT1pY29uXTpvcGFjaXR5LTBcIixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBTaWRlYmFyR3JvdXBBY3Rpb24oe1xuICBjbGFzc05hbWUsXG4gIGFzQ2hpbGQgPSBmYWxzZSxcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwiYnV0dG9uXCI+ICYgeyBhc0NoaWxkPzogYm9vbGVhbiB9KSB7XG4gIGNvbnN0IENvbXAgPSBhc0NoaWxkID8gU2xvdCA6IFwiYnV0dG9uXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29tcFxuICAgICAgZGF0YS1zbG90PVwic2lkZWJhci1ncm91cC1hY3Rpb25cIlxuICAgICAgZGF0YS1zaWRlYmFyPVwiZ3JvdXAtYWN0aW9uXCJcbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwidGV4dC1zaWRlYmFyLWZvcmVncm91bmQgcmluZy1zaWRlYmFyLXJpbmcgaG92ZXI6Ymctc2lkZWJhci1hY2NlbnQgaG92ZXI6dGV4dC1zaWRlYmFyLWFjY2VudC1mb3JlZ3JvdW5kIGFic29sdXRlIHRvcC0zLjUgcmlnaHQtMyBmbGV4IGFzcGVjdC1zcXVhcmUgdy01IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIHAtMCBvdXRsaW5lLWhpZGRlbiB0cmFuc2l0aW9uLXRyYW5zZm9ybSBmb2N1cy12aXNpYmxlOnJpbmctMiBbJj5zdmddOnNpemUtNCBbJj5zdmddOnNocmluay0wXCIsXG4gICAgICAgIC8vIEluY3JlYXNlcyB0aGUgaGl0IGFyZWEgb2YgdGhlIGJ1dHRvbiBvbiBtb2JpbGUuXG4gICAgICAgIFwiYWZ0ZXI6YWJzb2x1dGUgYWZ0ZXI6LWluc2V0LTIgbWQ6YWZ0ZXI6aGlkZGVuXCIsXG4gICAgICAgIFwiZ3JvdXAtZGF0YS1bY29sbGFwc2libGU9aWNvbl06aGlkZGVuXCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU2lkZWJhckdyb3VwQ29udGVudCh7XG4gIGNsYXNzTmFtZSxcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwiZGl2XCI+KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgZGF0YS1zbG90PVwic2lkZWJhci1ncm91cC1jb250ZW50XCJcbiAgICAgIGRhdGEtc2lkZWJhcj1cImdyb3VwLWNvbnRlbnRcIlxuICAgICAgY2xhc3NOYW1lPXtjbihcInctZnVsbCB0ZXh0LXNtXCIsIGNsYXNzTmFtZSl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU2lkZWJhck1lbnUoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwidWxcIj4pIHtcbiAgcmV0dXJuIChcbiAgICA8dWxcbiAgICAgIGRhdGEtc2xvdD1cInNpZGViYXItbWVudVwiXG4gICAgICBkYXRhLXNpZGViYXI9XCJtZW51XCJcbiAgICAgIGNsYXNzTmFtZT17Y24oXCJmbGV4IHctZnVsbCBtaW4tdy0wIGZsZXgtY29sIGdhcC0xXCIsIGNsYXNzTmFtZSl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU2lkZWJhck1lbnVJdGVtKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBSZWFjdC5Db21wb25lbnRQcm9wczxcImxpXCI+KSB7XG4gIHJldHVybiAoXG4gICAgPGxpXG4gICAgICBkYXRhLXNsb3Q9XCJzaWRlYmFyLW1lbnUtaXRlbVwiXG4gICAgICBkYXRhLXNpZGViYXI9XCJtZW51LWl0ZW1cIlxuICAgICAgY2xhc3NOYW1lPXtjbihcImdyb3VwL21lbnUtaXRlbSByZWxhdGl2ZVwiLCBjbGFzc05hbWUpfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmNvbnN0IHNpZGViYXJNZW51QnV0dG9uVmFyaWFudHMgPSBjdmEoXG4gIC8vIChPbmx5IHRoZSBzaWRlYmFyTWVudUJ1dHRvblZhcmlhbnRzIGNvbnN0YW50IGlzIHVwZGF0ZWQ7IHRoZSByZXN0IG9mIHRoZSBjb2RlIHJlbWFpbnMgdW5jaGFuZ2VkKVxuICAvLyBVcGRhdGVkIGJhc2UgY2xhc3NlczpcbiAgLy8g4oCiIENoYW5nZWQgZmxleCBkaXJlY3Rpb24gdG8gY29sdW1uIGFuZCBjZW50ZXJlZCBpdGVtcy5cbiAgLy8g4oCiIEVuZm9yY2VkIGEgZml4ZWQgd2lkdGggKHctMjApIGZvciBjb25zaXN0ZW50IHNwYWNlLlxuICAvLyDigKIgUmVtb3ZlZCB0ZXh0LWxlZnQgYW5kIGdhcCBjaGFuZ2VzIHRvIGVuc3VyZSB0aGUgdGV4dCBsYWJlbCBhcHBlYXJzIGJlbG93IHRoZSBpY29uLlxuICBcInBlZXIvbWVudS1idXR0b24gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTEgdy0xNiBvdmVyZmxvdy1oaWRkZW4gcC0yIHRleHQtc20gb3V0bGluZS1oaWRkZW4gcmluZy1zaWRlYmFyLXJpbmcgdHJhbnNpdGlvbi1bd2lkdGgsaGVpZ2h0LHBhZGRpbmddIGhvdmVyOmJnLXNpZGViYXItYWNjZW50IGhvdmVyOnRleHQtc2lkZWJhci1hY2NlbnQtZm9yZWdyb3VuZCBmb2N1cy12aXNpYmxlOnJpbmctMiBhY3RpdmU6Ymctc2lkZWJhci1hY2NlbnQgYWN0aXZlOnRleHQtc2lkZWJhci1hY2NlbnQtZm9yZWdyb3VuZCBkaXNhYmxlZDpwb2ludGVyLWV2ZW50cy1ub25lIGRpc2FibGVkOm9wYWNpdHktNTAgYXJpYS1kaXNhYmxlZDpwb2ludGVyLWV2ZW50cy1ub25lIGFyaWEtZGlzYWJsZWQ6b3BhY2l0eS01MCBkYXRhLVthY3RpdmU9dHJ1ZV06Ymctc2lkZWJhci1hY2NlbnQgZGF0YS1bYWN0aXZlPXRydWVdOmZvbnQtbWVkaXVtIGRhdGEtW2FjdGl2ZT10cnVlXTp0ZXh0LXNpZGViYXItYWNjZW50LWZvcmVncm91bmQgWyY+c3ZnXTpzaXplLTQgWyY+c3ZnXTpzaHJpbmstMCBbJj5zcGFuXTptdC0xXCIsXG4gIHtcbiAgICB2YXJpYW50czoge1xuICAgICAgdmFyaWFudDoge1xuICAgICAgICBkZWZhdWx0OiBcImhvdmVyOmJnLXNpZGViYXItYWNjZW50IGhvdmVyOnRleHQtc2lkZWJhci1hY2NlbnQtZm9yZWdyb3VuZFwiLFxuICAgICAgICBvdXRsaW5lOlxuICAgICAgICAgIFwiYmctYmFja2dyb3VuZCBzaGFkb3ctWzBfMF8wXzFweF9oc2wodmFyKC0tc2lkZWJhci1ib3JkZXIpKV0gaG92ZXI6Ymctc2lkZWJhci1hY2NlbnQgaG92ZXI6dGV4dC1zaWRlYmFyLWFjY2VudC1mb3JlZ3JvdW5kIGhvdmVyOnNoYWRvdy1bMF8wXzBfMXB4X2hzbCh2YXIoLS1zaWRlYmFyLWFjY2VudCkpXVwiLFxuICAgICAgfSxcbiAgICAgIHNpemU6IHtcbiAgICAgICAgZGVmYXVsdDogXCJoLTggdGV4dC1zbVwiLFxuICAgICAgICBzbTogXCJoLTcgdGV4dC14c1wiLFxuICAgICAgICBsZzogXCJoLTEyIHRleHQtc21cIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkZWZhdWx0VmFyaWFudHM6IHtcbiAgICAgIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxuICAgICAgc2l6ZTogXCJkZWZhdWx0XCIsXG4gICAgfSxcbiAgfSxcbik7XG5cbmZ1bmN0aW9uIFNpZGViYXJNZW51QnV0dG9uKHtcbiAgYXNDaGlsZCA9IGZhbHNlLFxuICBpc0FjdGl2ZSA9IGZhbHNlLFxuICB2YXJpYW50ID0gXCJkZWZhdWx0XCIsXG4gIHNpemUgPSBcImRlZmF1bHRcIixcbiAgdG9vbHRpcCxcbiAgY2xhc3NOYW1lLFxuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJidXR0b25cIj4gJiB7XG4gIGFzQ2hpbGQ/OiBib29sZWFuO1xuICBpc0FjdGl2ZT86IGJvb2xlYW47XG4gIHRvb2x0aXA/OiBzdHJpbmcgfCBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgVG9vbHRpcENvbnRlbnQ+O1xufSAmIFZhcmlhbnRQcm9wczx0eXBlb2Ygc2lkZWJhck1lbnVCdXR0b25WYXJpYW50cz4pIHtcbiAgY29uc3QgQ29tcCA9IGFzQ2hpbGQgPyBTbG90IDogXCJidXR0b25cIjtcbiAgY29uc3QgeyBzdGF0ZSB9ID0gdXNlU2lkZWJhcigpO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IChcbiAgICA8Q29tcFxuICAgICAgZGF0YS1zbG90PVwic2lkZWJhci1tZW51LWJ1dHRvblwiXG4gICAgICBkYXRhLXNpZGViYXI9XCJtZW51LWJ1dHRvblwiXG4gICAgICBkYXRhLXNpemU9e3NpemV9XG4gICAgICBkYXRhLWFjdGl2ZT17aXNBY3RpdmV9XG4gICAgICBjbGFzc05hbWU9e2NuKHNpZGViYXJNZW51QnV0dG9uVmFyaWFudHMoeyB2YXJpYW50LCBzaXplIH0pLCBjbGFzc05hbWUpfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG5cbiAgaWYgKCF0b29sdGlwKSB7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdG9vbHRpcCA9PT0gXCJzdHJpbmdcIikge1xuICAgIHRvb2x0aXAgPSB7XG4gICAgICBjaGlsZHJlbjogdG9vbHRpcCxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8VG9vbHRpcD5cbiAgICAgIDxUb29sdGlwVHJpZ2dlciBhc0NoaWxkPntidXR0b259PC9Ub29sdGlwVHJpZ2dlcj5cbiAgICAgIDxUb29sdGlwQ29udGVudFxuICAgICAgICBzaWRlPVwicmlnaHRcIlxuICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgIGhpZGRlbj17c3RhdGUgIT09IFwiY29sbGFwc2VkXCJ9XG4gICAgICAgIHsuLi50b29sdGlwfVxuICAgICAgLz5cbiAgICA8L1Rvb2x0aXA+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNpZGViYXJNZW51QWN0aW9uKHtcbiAgY2xhc3NOYW1lLFxuICBhc0NoaWxkID0gZmFsc2UsXG4gIHNob3dPbkhvdmVyID0gZmFsc2UsXG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczxcImJ1dHRvblwiPiAmIHtcbiAgYXNDaGlsZD86IGJvb2xlYW47XG4gIHNob3dPbkhvdmVyPzogYm9vbGVhbjtcbn0pIHtcbiAgY29uc3QgQ29tcCA9IGFzQ2hpbGQgPyBTbG90IDogXCJidXR0b25cIjtcblxuICByZXR1cm4gKFxuICAgIDxDb21wXG4gICAgICBkYXRhLXNsb3Q9XCJzaWRlYmFyLW1lbnUtYWN0aW9uXCJcbiAgICAgIGRhdGEtc2lkZWJhcj1cIm1lbnUtYWN0aW9uXCJcbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwidGV4dC1zaWRlYmFyLWZvcmVncm91bmQgcmluZy1zaWRlYmFyLXJpbmcgaG92ZXI6Ymctc2lkZWJhci1hY2NlbnQgaG92ZXI6dGV4dC1zaWRlYmFyLWFjY2VudC1mb3JlZ3JvdW5kIHBlZXItaG92ZXIvbWVudS1idXR0b246dGV4dC1zaWRlYmFyLWFjY2VudC1mb3JlZ3JvdW5kIGFic29sdXRlIHRvcC0xLjUgcmlnaHQtMSBmbGV4IGFzcGVjdC1zcXVhcmUgdy01IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIHAtMCBvdXRsaW5lLWhpZGRlbiB0cmFuc2l0aW9uLXRyYW5zZm9ybSBmb2N1cy12aXNpYmxlOnJpbmctMiBbJj5zdmddOnNpemUtNCBbJj5zdmddOnNocmluay0wXCIsXG4gICAgICAgIC8vIEluY3JlYXNlcyB0aGUgaGl0IGFyZWEgb2YgdGhlIGJ1dHRvbiBvbiBtb2JpbGUuXG4gICAgICAgIFwiYWZ0ZXI6YWJzb2x1dGUgYWZ0ZXI6LWluc2V0LTIgbWQ6YWZ0ZXI6aGlkZGVuXCIsXG4gICAgICAgIFwicGVlci1kYXRhLVtzaXplPXNtXS9tZW51LWJ1dHRvbjp0b3AtMVwiLFxuICAgICAgICBcInBlZXItZGF0YS1bc2l6ZT1kZWZhdWx0XS9tZW51LWJ1dHRvbjp0b3AtMS41XCIsXG4gICAgICAgIFwicGVlci1kYXRhLVtzaXplPWxnXS9tZW51LWJ1dHRvbjp0b3AtMi41XCIsXG4gICAgICAgIFwiZ3JvdXAtZGF0YS1bY29sbGFwc2libGU9aWNvbl06aGlkZGVuXCIsXG4gICAgICAgIHNob3dPbkhvdmVyICYmXG4gICAgICAgICAgXCJwZWVyLWRhdGEtW2FjdGl2ZT10cnVlXS9tZW51LWJ1dHRvbjp0ZXh0LXNpZGViYXItYWNjZW50LWZvcmVncm91bmQgZ3JvdXAtZm9jdXMtd2l0aGluL21lbnUtaXRlbTpvcGFjaXR5LTEwMCBncm91cC1ob3Zlci9tZW51LWl0ZW06b3BhY2l0eS0xMDAgZGF0YS1bc3RhdGU9b3Blbl06b3BhY2l0eS0xMDAgbWQ6b3BhY2l0eS0wXCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU2lkZWJhck1lbnVCYWRnZSh7XG4gIGNsYXNzTmFtZSxcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwiZGl2XCI+KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgZGF0YS1zbG90PVwic2lkZWJhci1tZW51LWJhZGdlXCJcbiAgICAgIGRhdGEtc2lkZWJhcj1cIm1lbnUtYmFkZ2VcIlxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJ0ZXh0LXNpZGViYXItZm9yZWdyb3VuZCBwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIHJpZ2h0LTEgZmxleCBoLTUgbWluLXctNSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBweC0xIHRleHQteHMgZm9udC1tZWRpdW0gdGFidWxhci1udW1zIHNlbGVjdC1ub25lXCIsXG4gICAgICAgIFwicGVlci1ob3Zlci9tZW51LWJ1dHRvbjp0ZXh0LXNpZGViYXItYWNjZW50LWZvcmVncm91bmQgcGVlci1kYXRhLVthY3RpdmU9dHJ1ZV0vbWVudS1idXR0b246dGV4dC1zaWRlYmFyLWFjY2VudC1mb3JlZ3JvdW5kXCIsXG4gICAgICAgIFwicGVlci1kYXRhLVtzaXplPXNtXS9tZW51LWJ1dHRvbjp0b3AtMVwiLFxuICAgICAgICBcInBlZXItZGF0YS1bc2l6ZT1kZWZhdWx0XS9tZW51LWJ1dHRvbjp0b3AtMS41XCIsXG4gICAgICAgIFwicGVlci1kYXRhLVtzaXplPWxnXS9tZW51LWJ1dHRvbjp0b3AtMi41XCIsXG4gICAgICAgIFwiZ3JvdXAtZGF0YS1bY29sbGFwc2libGU9aWNvbl06aGlkZGVuXCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU2lkZWJhck1lbnVTa2VsZXRvbih7XG4gIGNsYXNzTmFtZSxcbiAgc2hvd0ljb24gPSBmYWxzZSxcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwiZGl2XCI+ICYge1xuICBzaG93SWNvbj86IGJvb2xlYW47XG59KSB7XG4gIC8vIFJhbmRvbSB3aWR0aCBiZXR3ZWVuIDUwIHRvIDkwJS5cbiAgY29uc3Qgd2lkdGggPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gYCR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNDApICsgNTB9JWA7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGRhdGEtc2xvdD1cInNpZGViYXItbWVudS1za2VsZXRvblwiXG4gICAgICBkYXRhLXNpZGViYXI9XCJtZW51LXNrZWxldG9uXCJcbiAgICAgIGNsYXNzTmFtZT17Y24oXCJmbGV4IGgtOCBpdGVtcy1jZW50ZXIgZ2FwLTIgcm91bmRlZC1tZCBweC0yXCIsIGNsYXNzTmFtZSl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAge3Nob3dJY29uICYmIChcbiAgICAgICAgPFNrZWxldG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2l6ZS00IHJvdW5kZWQtbWRcIlxuICAgICAgICAgIGRhdGEtc2lkZWJhcj1cIm1lbnUtc2tlbGV0b24taWNvblwiXG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPFNrZWxldG9uXG4gICAgICAgIGNsYXNzTmFtZT1cImgtNCBtYXgtdy0oLS1za2VsZXRvbi13aWR0aCkgZmxleC0xXCJcbiAgICAgICAgZGF0YS1zaWRlYmFyPVwibWVudS1za2VsZXRvbi10ZXh0XCJcbiAgICAgICAgc3R5bGU9e1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiLS1za2VsZXRvbi13aWR0aFwiOiB3aWR0aCxcbiAgICAgICAgICB9IGFzIFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU2lkZWJhck1lbnVTdWIoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwidWxcIj4pIHtcbiAgcmV0dXJuIChcbiAgICA8dWxcbiAgICAgIGRhdGEtc2xvdD1cInNpZGViYXItbWVudS1zdWJcIlxuICAgICAgZGF0YS1zaWRlYmFyPVwibWVudS1zdWJcIlxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJib3JkZXItc2lkZWJhci1ib3JkZXIgbXgtMy41IGZsZXggbWluLXctMCB0cmFuc2xhdGUteC1weCBmbGV4LWNvbCBnYXAtMSBib3JkZXItbCBweC0yLjUgcHktMC41XCIsXG4gICAgICAgIFwiZ3JvdXAtZGF0YS1bY29sbGFwc2libGU9aWNvbl06aGlkZGVuXCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU2lkZWJhck1lbnVTdWJJdGVtKHtcbiAgY2xhc3NOYW1lLFxuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJsaVwiPikge1xuICByZXR1cm4gKFxuICAgIDxsaVxuICAgICAgZGF0YS1zbG90PVwic2lkZWJhci1tZW51LXN1Yi1pdGVtXCJcbiAgICAgIGRhdGEtc2lkZWJhcj1cIm1lbnUtc3ViLWl0ZW1cIlxuICAgICAgY2xhc3NOYW1lPXtjbihcImdyb3VwL21lbnUtc3ViLWl0ZW0gcmVsYXRpdmVcIiwgY2xhc3NOYW1lKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBTaWRlYmFyTWVudVN1YkJ1dHRvbih7XG4gIGFzQ2hpbGQgPSBmYWxzZSxcbiAgc2l6ZSA9IFwibWRcIixcbiAgaXNBY3RpdmUgPSBmYWxzZSxcbiAgY2xhc3NOYW1lLFxuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJhXCI+ICYge1xuICBhc0NoaWxkPzogYm9vbGVhbjtcbiAgc2l6ZT86IFwic21cIiB8IFwibWRcIjtcbiAgaXNBY3RpdmU/OiBib29sZWFuO1xufSkge1xuICBjb25zdCBDb21wID0gYXNDaGlsZCA/IFNsb3QgOiBcImFcIjtcblxuICByZXR1cm4gKFxuICAgIDxDb21wXG4gICAgICBkYXRhLXNsb3Q9XCJzaWRlYmFyLW1lbnUtc3ViLWJ1dHRvblwiXG4gICAgICBkYXRhLXNpZGViYXI9XCJtZW51LXN1Yi1idXR0b25cIlxuICAgICAgZGF0YS1zaXplPXtzaXplfVxuICAgICAgZGF0YS1hY3RpdmU9e2lzQWN0aXZlfVxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJ0ZXh0LXNpZGViYXItZm9yZWdyb3VuZCByaW5nLXNpZGViYXItcmluZyBob3ZlcjpiZy1zaWRlYmFyLWFjY2VudCBob3Zlcjp0ZXh0LXNpZGViYXItYWNjZW50LWZvcmVncm91bmQgYWN0aXZlOmJnLXNpZGViYXItYWNjZW50IGFjdGl2ZTp0ZXh0LXNpZGViYXItYWNjZW50LWZvcmVncm91bmQgWyY+c3ZnXTp0ZXh0LXNpZGViYXItYWNjZW50LWZvcmVncm91bmQgZmxleCBoLTcgbWluLXctMCAtdHJhbnNsYXRlLXgtcHggaXRlbXMtY2VudGVyIGdhcC0yIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLW1kIHB4LTIgb3V0bGluZS1oaWRkZW4gZm9jdXMtdmlzaWJsZTpyaW5nLTIgZGlzYWJsZWQ6cG9pbnRlci1ldmVudHMtbm9uZSBkaXNhYmxlZDpvcGFjaXR5LTUwIGFyaWEtZGlzYWJsZWQ6cG9pbnRlci1ldmVudHMtbm9uZSBhcmlhLWRpc2FibGVkOm9wYWNpdHktNTAgWyY+c3BhbjpsYXN0LWNoaWxkXTp0cnVuY2F0ZSBbJj5zdmddOnNpemUtNCBbJj5zdmddOnNocmluay0wXCIsXG4gICAgICAgIFwiZGF0YS1bYWN0aXZlPXRydWVdOmJnLXNpZGViYXItYWNjZW50IGRhdGEtW2FjdGl2ZT10cnVlXTp0ZXh0LXNpZGViYXItYWNjZW50LWZvcmVncm91bmRcIixcbiAgICAgICAgc2l6ZSA9PT0gXCJzbVwiICYmIFwidGV4dC14c1wiLFxuICAgICAgICBzaXplID09PSBcIm1kXCIgJiYgXCJ0ZXh0LXNtXCIsXG4gICAgICAgIFwiZ3JvdXAtZGF0YS1bY29sbGFwc2libGU9aWNvbl06aGlkZGVuXCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZXhwb3J0IHtcbiAgU2lkZWJhcixcbiAgU2lkZWJhckNvbnRlbnQsXG4gIFNpZGViYXJGb290ZXIsXG4gIFNpZGViYXJHcm91cCxcbiAgU2lkZWJhckdyb3VwQWN0aW9uLFxuICBTaWRlYmFyR3JvdXBDb250ZW50LFxuICBTaWRlYmFyR3JvdXBMYWJlbCxcbiAgU2lkZWJhckhlYWRlcixcbiAgU2lkZWJhcklucHV0LFxuICBTaWRlYmFySW5zZXQsXG4gIFNpZGViYXJNZW51LFxuICBTaWRlYmFyTWVudUFjdGlvbixcbiAgU2lkZWJhck1lbnVCYWRnZSxcbiAgU2lkZWJhck1lbnVCdXR0b24sXG4gIFNpZGViYXJNZW51SXRlbSxcbiAgU2lkZWJhck1lbnVTa2VsZXRvbixcbiAgU2lkZWJhck1lbnVTdWIsXG4gIFNpZGViYXJNZW51U3ViQnV0dG9uLFxuICBTaWRlYmFyTWVudVN1Ykl0ZW0sXG4gIFNpZGViYXJQcm92aWRlcixcbiAgU2lkZWJhclJhaWwsXG4gIFNpZGViYXJTZXBhcmF0b3IsXG4gIFNpZGViYXJUcmlnZ2VyLFxuICB1c2VTaWRlYmFyLFxufTtcbiJdLCJmaWxlIjoiL1VzZXJzL21hY2Jvb2svYXBwbGFhLWRldmVsb3BtZW50L3NyYy9jb21wb25lbnRzL3VpL3NpZGViYXIudHN4In0=