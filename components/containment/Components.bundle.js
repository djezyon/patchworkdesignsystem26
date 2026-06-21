// Components bundle — 50 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

// figma node: 5192:42025 .iOS / Buttons / Blocks / Embedded Action (5 variants)
const __venc_IOSButtonsBlocksEmbeddedAction = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IOSButtonsBlocksEmbeddedAction = p => "emphasized=" + __venc_IOSButtonsBlocksEmbeddedAction(p.emphasized) + '|' + "destructive=" + __venc_IOSButtonsBlocksEmbeddedAction(p.destructive) + '|' + "enabled=" + __venc_IOSButtonsBlocksEmbeddedAction(p.enabled);
function IOSButtonsBlocksEmbeddedAction(_p = {}) {
  const props = {
    ..._p,
    emphasized: _p.emphasized ?? false,
    destructive: _p.destructive ?? false,
    enabled: _p.enabled ?? true,
    action: _p.action ?? "{Action}"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 80,
      borderTop: "0.330px solid rgba(60,60,67,0.36)",
      borderRight: "1px solid rgba(60,60,67,0.36)",
      borderBottom: "1px solid rgba(60,60,67,0.36)",
      borderLeft: "1px solid rgba(60,60,67,0.36)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 8px 10px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "24px",
      color: "var(--patch-color-text-accent-primary)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.action));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 80,
      borderTop: "0.330px solid rgba(60,60,67,0.36)",
      borderRight: "1px solid rgba(60,60,67,0.36)",
      borderBottom: "1px solid rgba(60,60,67,0.36)",
      borderLeft: "1px solid rgba(60,60,67,0.36)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 8px 10px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "24px",
      color: "var(--patch-color-text-disabled)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.action));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 80,
      borderTop: "0.330px solid rgba(60,60,67,0.36)",
      borderRight: "1px solid rgba(60,60,67,0.36)",
      borderBottom: "1px solid rgba(60,60,67,0.36)",
      borderLeft: "1px solid rgba(60,60,67,0.36)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 8px 10px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "24px",
      color: "var(--patch-color-text-error)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.action));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 80,
      borderTop: "0.330px solid rgba(60,60,67,0.36)",
      borderRight: "1px solid rgba(60,60,67,0.36)",
      borderBottom: "1px solid rgba(60,60,67,0.36)",
      borderLeft: "1px solid rgba(60,60,67,0.36)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 8px 10px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "24px",
      color: "var(--patch-color-text-accent-primary)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.action));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 80,
      borderTop: "0.330px solid rgba(60,60,67,0.36)",
      borderRight: "1px solid rgba(60,60,67,0.36)",
      borderBottom: "1px solid rgba(60,60,67,0.36)",
      borderLeft: "1px solid rgba(60,60,67,0.36)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 8px 10px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "24px",
      color: "var(--patch-color-text-error)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.action));
  const __impls = {
    // figma: Emphasized?=No, Destructive?=No, Enabled=Yes
    "emphasized=false|destructive=false|enabled=true": __body0,
    // figma: Emphasized?=No, Destructive?=No, Enabled=No
    "emphasized=false|destructive=false|enabled=false": __body1,
    // figma: Emphasized?=No, Destructive?=Yes, Enabled=Yes
    "emphasized=false|destructive=true|enabled=true": __body2,
    // figma: Emphasized?=Yes, Destructive?=No, Enabled=Yes
    "emphasized=true|destructive=false|enabled=true": __body3,
    // figma: Emphasized?=Yes, Destructive?=Yes, Enabled=Yes
    "emphasized=true|destructive=true|enabled=true": __body4
  };
  return (__impls[__vkey_IOSButtonsBlocksEmbeddedAction(props)] ?? __body0)();
}

// figma node: 5193:38046 iOS / Action Sheet (2 variants)
const __venc_IOSActionSheet = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IOSActionSheet = p => "device=" + __venc_IOSActionSheet(p.device);
function IOSActionSheet(_p = {}) {
  const props = {
    ..._p,
    header: _p.header ?? true,
    device: _p.device ?? "iPad",
    title: _p.title ?? "{Title}",
    description: _p.description ?? true,
    description2: _p.description2 ?? "{Content}",
    cancelButton: _p.cancelButton ?? true
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      height: 586,
      backgroundColor: "rgba(0,0,0,0.4)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "34px 8px 34px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 14,
      backgroundColor: "rgba(255,255,255,0.73)",
      backdropFilter: "blur(80px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.header && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "12px 16px 14px 16px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--label-vibrant-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title), props.description && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--label-vibrant-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.description2)), /*#__PURE__*/React.createElement(IOSButtonsBlocksEmbeddedAction, {
    style: {
      position: "relative",
      height: 56,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    emphasized: false,
    destructive: false,
    enabled: true
  }), /*#__PURE__*/React.createElement(IOSButtonsBlocksEmbeddedAction, {
    style: {
      position: "relative",
      height: 56,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    emphasized: false,
    destructive: false,
    enabled: true
  }), /*#__PURE__*/React.createElement(IOSButtonsBlocksEmbeddedAction, {
    style: {
      position: "relative",
      height: 56,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    emphasized: false,
    destructive: false,
    enabled: true
  }), /*#__PURE__*/React.createElement(IOSButtonsBlocksEmbeddedAction, {
    style: {
      position: "relative",
      height: 56,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    emphasized: false,
    destructive: false,
    enabled: true
  }), /*#__PURE__*/React.createElement(IOSButtonsBlocksEmbeddedAction, {
    style: {
      position: "relative",
      height: 56,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    emphasized: false,
    destructive: false,
    enabled: true
  }), /*#__PURE__*/React.createElement(IOSButtonsBlocksEmbeddedAction, {
    style: {
      position: "relative",
      height: 56,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    emphasized: false,
    destructive: false,
    enabled: true
  }), /*#__PURE__*/React.createElement(IOSButtonsBlocksEmbeddedAction, {
    style: {
      position: "relative",
      height: 56,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    emphasized: false,
    destructive: false,
    enabled: true
  })), props.cancelButton && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 14,
      backgroundColor: "rgba(255,255,255,0.73)",
      backdropFilter: "blur(80px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(IOSButtonsBlocksEmbeddedAction, {
    style: {
      position: "relative",
      height: 56,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    action: "Cancel",
    emphasized: true,
    destructive: false,
    enabled: true
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      boxShadow: "0px 10px 100px 0px rgba(0,0,0,0.3)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      position: "relative",
      color: "rgba(255,255,255,0.9)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 14,
      backgroundColor: "rgba(255,255,255,0.9)",
      backdropFilter: "blur(80px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.header && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "12px 16px 14px 16px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--label-vibrant-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title), props.description && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--label-vibrant-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.description2)), /*#__PURE__*/React.createElement(IOSButtonsBlocksEmbeddedAction, {
    style: {
      position: "relative",
      height: 56,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    emphasized: false,
    destructive: false,
    enabled: true
  }), /*#__PURE__*/React.createElement(IOSButtonsBlocksEmbeddedAction, {
    style: {
      position: "relative",
      height: 56,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    emphasized: false,
    destructive: false,
    enabled: true
  }), /*#__PURE__*/React.createElement(IOSButtonsBlocksEmbeddedAction, {
    style: {
      position: "relative",
      height: 56,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    emphasized: false,
    destructive: false,
    enabled: true
  }), /*#__PURE__*/React.createElement(IOSButtonsBlocksEmbeddedAction, {
    style: {
      position: "relative",
      height: 56,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    emphasized: false,
    destructive: false,
    enabled: true
  }), /*#__PURE__*/React.createElement(IOSButtonsBlocksEmbeddedAction, {
    style: {
      position: "relative",
      height: 56,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    emphasized: false,
    destructive: false,
    enabled: true
  }), /*#__PURE__*/React.createElement(IOSButtonsBlocksEmbeddedAction, {
    style: {
      position: "relative",
      height: 56,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    emphasized: false,
    destructive: false,
    enabled: true
  }), /*#__PURE__*/React.createElement(IOSButtonsBlocksEmbeddedAction, {
    style: {
      position: "relative",
      height: 56,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    emphasized: false,
    destructive: false,
    enabled: true
  })), /*#__PURE__*/React.createElement("svg", {
    width: 47,
    height: 12.999,
    viewBox: "0 0 47 12.999",
    fill: "none",
    style: {
      position: "relative",
      width: 47,
      height: 12.999,
      borderRadius: 13,
      backdropFilter: "blur(80px)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.002 C 1.712 0.002 3.424 -0.007 5.137 0.012 C 6.776 0.03 8.61 0.055 10.205 0.657 C 11.928 1.307 13.069 2.444 14.217 3.781 C 15.043 4.743 16.666 6.796 17.456 7.787 C 18.103 8.599 19.369 10.205 20.061 10.982 C 20.931 11.96 22.006 12.999 23.5 12.999 C 24.995 12.999 26.07 11.96 26.939 10.983 C 27.631 10.207 28.897 8.6 29.544 7.788 C 30.333 6.797 31.956 4.744 32.783 3.782 C 33.933 2.445 35.072 1.308 36.794 0.658 C 38.39 0.058 40.225 0.031 41.863 0.013 C 43.576 -0.006 45.288 0.003 47 0.003",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __impls = {
    // figma: Device=iPhone
    "device=iPhone": __body0,
    // figma: Device=iPad
    "device=iPad": __body1
  };
  return (__impls[__vkey_IOSActionSheet(props)] ?? __body1)();
}

// figma node: 3349:5053 status-badge (8 variants)
const __venc_StatusBadge = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_StatusBadge = p => "status=" + __venc_StatusBadge(p.status);
function StatusBadge(_p = {}) {
  const props = {
    ..._p,
    status: _p.status ?? "awaiting revision"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "rgb(238,221,136)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 8px 2px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "In progress")));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "rgb(255,170,187)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 8px 2px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Deprecated")));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "rgb(255,170,187)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 8px 2px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Outdated")));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "rgb(238,136,102)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 8px 2px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Ready for dev")));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "rgb(68,187,153)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 8px 2px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Implemented")));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "rgb(153,221,255)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 8px 2px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Stable")));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "rgb(68,187,153)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 8px 2px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Awaiting revision")));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "rgb(221,221,221)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 8px 2px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Status?")));
  const __impls = {
    // figma: Status=In progress
    "status=in progress": __body0,
    // figma: Status=Deprecated
    "status=deprecated": __body1,
    // figma: Status=Outdated
    "status=outdated": __body2,
    // figma: Status=Ready for dev
    "status=ready for dev": __body3,
    // figma: Status=Implemented
    "status=implemented": __body4,
    // figma: Status=Stable
    "status=stable": __body5,
    // figma: Status=Awaiting revision
    "status=awaiting revision": __body6,
    // figma: Status=Status
    "status=status": __body7
  };
  return (__impls[__vkey_StatusBadge(props)] ?? __body6)();
}

// figma node: 3347:2335 .status_block (2 variants)
const __venc_StatusBlock = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_StatusBlock = p => "orientation=" + __venc_StatusBlock(p.orientation);
function StatusBlock(_p = {}) {
  const props = {
    ..._p,
    orientation: _p.orientation ?? "old",
    date: _p.date ?? "Value"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "right",
      lineHeight: "16px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Component"), /*#__PURE__*/React.createElement(StatusBadge, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    status: "status"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "right",
      lineHeight: "16px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "This page"), /*#__PURE__*/React.createElement(StatusBadge, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    status: "status"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "right",
      lineHeight: "16px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Last update"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, props.date)));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      justifyContent: "flex-end",
      alignItems: "flex-start",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "right",
      lineHeight: "16px",
      color: "var(--patch-color-gray-800)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Desktop"), /*#__PURE__*/React.createElement(StatusBadge, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    status: "status"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "right",
      lineHeight: "16px",
      color: "var(--patch-color-gray-800)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Android"), /*#__PURE__*/React.createElement(StatusBadge, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    status: "status"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "right",
      lineHeight: "16px",
      color: "var(--patch-color-gray-800)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "iOS"), /*#__PURE__*/React.createElement(StatusBadge, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    status: "status"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "right",
      lineHeight: "16px",
      color: "var(--patch-color-gray-800)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "This page"), /*#__PURE__*/React.createElement(StatusBadge, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    status: "status"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "right",
      lineHeight: "16px",
      color: "var(--patch-color-gray-800)",
      flexShrink: 0
    }
  }, "Last update"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, props.date)));
  const __impls = {
    // figma: Orientation=old
    "orientation=old": __body0,
    // figma: Orientation=default
    "orientation=default": __body1
  };
  return (__impls[__vkey_StatusBlock(props)] ?? __body0)();
}

// figma node: 1126:1942 .title_block
function TitleBlock(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 520,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Euclid Circular B\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "24px",
      color: "rgb(18,18,18)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Title"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(115,115,115)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Description"));
}

// figma node: 3460:2670 Action Sheet
function ActionSheet(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1576,
      height: 852,
      overflow: "hidden",
      backgroundColor: "rgb(245,245,245)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(IOSActionSheet, {
    style: {
      position: "absolute",
      left: 455,
      top: 300
    },
    device: "iPad"
  }), /*#__PURE__*/React.createElement(IOSActionSheet, {
    style: {
      position: "absolute",
      left: 40,
      top: 266,
      width: 375,
      height: 586
    },
    device: "iPhone"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 947,
      top: 446,
      width: 145,
      height: 24,
      fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--warm)"
    }
  }, "Details to come"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 947,
      top: 496,
      width: 519,
      height: 72,
      fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--default)",
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, "TBD if this is:", "\n", "a) Needed in DS (anymore)", "\n", "b) Better than or different enough to an ", /*#__PURE__*/React.createElement("span", {
    style: {
      textDecoration: "underline"
    }
  }, "Activity View")), /*#__PURE__*/React.createElement(StatusBlock, {
    style: {
      position: "absolute",
      left: 1184,
      top: 40,
      width: 352
    },
    date: "2025-10-27",
    orientation: "default"
  }), /*#__PURE__*/React.createElement(TitleBlock, {
    style: {
      position: "absolute",
      left: 40,
      top: 40,
      width: 729,
      height: 92
    },
    text1: "Action Sheet (iOS only)",
    text2: "Part modal, part action: an Action Sheet presents choices related to an action initiated by the user."
  }));
}

// figma node: 2842:2708 .figma_details
function FigmaDetails(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 298,
      borderTop: "1px solid var(--patch-color-gray-300)",
      borderRight: "1px solid var(--patch-color-gray-300)",
      borderBottom: "1px solid var(--patch-color-gray-300)",
      borderLeft: "1px solid var(--patch-color-gray-300)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 0px 16px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 21,
      height: 30.5,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.500,
    height: 9.500,
    viewBox: "0 0 9.500 9.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.5,
      top: 10.5,
      width: 9.5,
      height: 9.5,
      color: "rgb(26,188,254)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4.75 C 0 3.49 0.5 2.282 1.391 1.391 C 2.282 0.5 3.49 0 4.75 0 C 6.01 0 7.218 0.5 8.109 1.391 C 9 2.282 9.5 3.49 9.5 4.75 C 9.5 6.01 9 7.218 8.109 8.109 C 7.218 9 6.01 9.5 4.75 9.5 C 3.49 9.5 2.282 9 1.391 8.109 C 0.5 7.218 0 6.01 0 4.75 L 0 4.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.500,
    height: 9.500,
    viewBox: "0 0 9.500 9.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 20,
      width: 9.5,
      height: 9.5,
      color: "rgb(10,207,131)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4.75 C 0 3.49 0.5 2.282 1.391 1.391 C 2.282 0.5 3.49 0 4.75 0 L 9.5 0 L 9.5 4.75 C 9.5 6.01 9 7.218 8.109 8.109 C 7.218 9 6.01 9.5 4.75 9.5 C 3.49 9.5 2.282 9 1.391 8.109 C 0.5 7.218 0 6.01 0 4.75 L 0 4.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.500,
    height: 9.500,
    viewBox: "0 0 9.500 9.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.5,
      top: 1,
      width: 9.5,
      height: 9.5,
      color: "rgb(255,114,98)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 9.5 L 4.75 9.5 C 6.01 9.5 7.218 9 8.109 8.109 C 9 7.218 9.5 6.01 9.5 4.75 C 9.5 3.49 9 2.282 8.109 1.391 C 7.218 0.5 6.01 0 4.75 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.500,
    height: 9.500,
    viewBox: "0 0 9.500 9.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 9.5,
      height: 9.5,
      color: "rgb(242,78,30)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4.75 C 0 6.01 0.5 7.218 1.391 8.109 C 2.282 9 3.49 9.5 4.75 9.5 L 9.5 9.5 L 9.5 0 L 4.75 0 C 3.49 0 2.282 0.5 1.391 1.391 C 0.5 2.282 0 3.49 0 4.75 L 0 4.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.500,
    height: 9.500,
    viewBox: "0 0 9.500 9.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 10.5,
      width: 9.5,
      height: 9.5,
      color: "rgb(162,89,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4.75 C 0 6.01 0.5 7.218 1.391 8.109 C 2.282 9 3.49 9.5 4.75 9.5 L 9.5 9.5 L 9.5 0 L 4.75 0 C 3.49 0 2.282 0.5 1.391 1.391 C 0.5 2.282 0 3.49 0 4.75 L 0 4.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Content"));
}

// figma node: 5229:9796 Divider
function Divider(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 760,
      height: 388,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(StatusBlock, {
    style: {
      position: "absolute",
      left: 552,
      top: 40,
      width: 168
    },
    date: "2025-10-29",
    orientation: "default"
  }), /*#__PURE__*/React.createElement(TitleBlock, {
    style: {
      position: "absolute",
      left: 40,
      top: 40,
      width: 472
    },
    text1: "Divider",
    text2: "Or separator rule. To, like, separate things."
  }), /*#__PURE__*/React.createElement(FigmaDetails, {
    style: {
      position: "absolute",
      left: 40,
      top: 148,
      width: 472,
      height: 198.5
    },
    text1: "This is a Figma-only component, primarily to help when compiling menus, lists, and flyouts.\nProperties include density (mobile and desktop – see examples) or width (Android).\niOS Grouped Row has separators built in; Android List Item includes an optional Divider. See List."
  }));
}

// figma node: 5193:37073 Android / Forms / Checkbox (6 variants)
const __venc_AndroidFormsCheckbox2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_AndroidFormsCheckbox2 = p => "condition=" + __venc_AndroidFormsCheckbox2(p.condition) + '|' + "disabled=" + __venc_AndroidFormsCheckbox2(p.disabled);
function AndroidFormsCheckbox2(_p = {}) {
  const props = {
    ..._p,
    condition: _p.condition ?? "indeterminate",
    disabled: _p.disabled ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      padding: "15px 15px 15px 15px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 18,
      borderRadius: 2,
      boxShadow: "inset 0 0 0 2px var(--patch-form-color-border-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      color: "var(--patch-color-text-on-accent-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18,
      borderRadius: 2,
      backgroundColor: "var(--patch-color-fill-accent-primary)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 9.400,
    viewBox: "0 0 12 9.400",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 7,
      width: 12,
      height: 9.4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4 9.4 L 0 5.4 L 1.4 4 L 4 6.6 L 10.6 0 L 12 1.4 L 4 9.4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      color: "var(--patch-color-text-on-accent-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18,
      borderRadius: 2,
      backgroundColor: "var(--patch-color-fill-accent-primary)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 2,
    viewBox: "0 0 12 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 11,
      width: 12,
      height: 2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 2 L 0 0 L 12 0 L 12 2 L 0 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      color: "var(--patch-color-text-on-inverse-surface)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18,
      borderRadius: 2,
      backgroundColor: "var(--patch-form-color-fill-secondary)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 9.400,
    viewBox: "0 0 12 9.400",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 7,
      width: 12,
      height: 9.4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4 9.4 L 0 5.4 L 1.4 4 L 4 6.6 L 10.6 0 L 12 1.4 L 4 9.4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      color: "var(--patch-color-text-on-inverse-surface)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18,
      borderRadius: 2,
      backgroundColor: "var(--patch-form-color-fill-secondary)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 2,
    viewBox: "0 0 12 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 11,
      width: 12,
      height: 2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 2 L 0 0 L 12 0 L 12 2 L 0 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      padding: "15px 15px 15px 15px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 18,
      borderRadius: 2,
      boxShadow: "inset 0 0 0 2px var(--patch-form-color-border-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }));
  const __impls = {
    // figma: Condition=Unselected, Disabled?=No
    "condition=unselected|disabled=false": __body0,
    // figma: Condition=Selected, Disabled?=No
    "condition=selected|disabled=false": __body1,
    // figma: Condition=Indeterminate, Disabled?=No
    "condition=indeterminate|disabled=false": __body2,
    // figma: Condition=Selected, Disabled?=Yes
    "condition=selected|disabled=true": __body3,
    // figma: Condition=Indeterminate, Disabled?=Yes
    "condition=indeterminate|disabled=true": __body4,
    // figma: Condition=Unselected, Disabled?=Yes
    "condition=unselected|disabled=true": __body5
  };
  return (__impls[__vkey_AndroidFormsCheckbox2(props)] ?? __body2)();
}

// figma node: 5193:37098 Android / Forms / Radio Button (4 variants)
const __venc_AndroidFormsRadioButton2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_AndroidFormsRadioButton2 = p => "selected=" + __venc_AndroidFormsRadioButton2(p.selected) + '|' + "disabled=" + __venc_AndroidFormsRadioButton2(p.disabled);
function AndroidFormsRadioButton2(_p = {}) {
  const props = {
    ..._p,
    selected: _p.selected ?? true,
    disabled: _p.disabled ?? true
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      padding: "14px 14px 14px 14px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      color: "var(--patch-color-fill-accent-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "relative",
      height: 20,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 10 18 C 5.58 18 2 14.42 2 10 C 2 5.58 5.58 2 10 2 C 14.42 2 18 5.58 18 10 C 18 14.42 14.42 18 10 18 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10 15 C 12.761 15 15 12.761 15 10 C 15 7.239 12.761 5 10 5 C 7.239 5 5 7.239 5 10 C 5 12.761 7.239 15 10 15 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      padding: "14px 14px 14px 14px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      color: "var(--patch-form-color-fill-secondary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "relative",
      height: 20,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 10 18 C 5.58 18 2 14.42 2 10 C 2 5.58 5.58 2 10 2 C 14.42 2 18 5.58 18 10 C 18 14.42 14.42 18 10 18 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10 15 C 12.761 15 15 12.761 15 10 C 15 7.239 12.761 5 10 5 C 7.239 5 5 7.239 5 10 C 5 12.761 7.239 15 10 15 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      padding: "14px 14px 14px 14px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 20,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 2px var(--patch-form-color-border-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      padding: "14px 14px 14px 14px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 20,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 2px var(--patch-form-color-border-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }));
  const __impls = {
    // figma: Selected=Yes, Disabled?=No
    "selected=true|disabled=false": __body0,
    // figma: Selected=Yes, Disabled?=Yes
    "selected=true|disabled=true": __body1,
    // figma: Selected=No, Disabled?=No
    "selected=false|disabled=false": __body2,
    // figma: Selected=No, Disabled?=Yes
    "selected=false|disabled=true": __body3
  };
  return (__impls[__vkey_AndroidFormsRadioButton2(props)] ?? __body1)();
}

// figma node: 5188:8441 icon/placeholder (3 variants)
const __venc_IconPlaceholder9 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconPlaceholder9 = p => "size=" + __venc_IconPlaceholder9(p.size);
function IconPlaceholder9(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "16"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      position: "relative",
      color: "var(--patch-color-text-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 26.354,
    height: 26.354,
    viewBox: "0 0 26.354 26.354",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.823,
      top: 2.823,
      width: 26.354,
      height: 26.354
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.597 24.403 C 1.501 24.28 1.419 24.144 1.354 24 C 0.66 23.686 0.177 22.988 0.177 22.177 L 0.177 4.177 C 0.177 3.366 0.66 2.667 1.354 2.354 C 1.419 2.209 1.501 2.074 1.597 1.95 L 0 0.354 L 0.354 0 L 1.95 1.597 C 2.074 1.501 2.209 1.419 2.354 1.354 C 2.667 0.66 3.366 0.177 4.177 0.177 L 22.177 0.177 C 22.988 0.177 23.686 0.66 24 1.354 C 24.144 1.419 24.28 1.501 24.403 1.597 L 26 0 L 26.354 0.354 L 24.757 1.95 C 24.853 2.074 24.935 2.209 25 2.354 C 25.694 2.667 26.177 3.366 26.177 4.177 L 26.177 22.177 C 26.177 22.988 25.694 23.686 25 24 C 24.935 24.144 24.853 24.28 24.757 24.403 L 26.354 26 L 26 26.354 L 24.403 24.757 C 24.28 24.853 24.144 24.935 24 25 C 23.686 25.694 22.988 26.177 22.177 26.177 L 4.177 26.177 C 3.366 26.177 2.667 25.694 2.354 25 C 2.209 24.935 2.074 24.853 1.95 24.757 L 0.354 26.354 L 0 26 L 1.597 24.403 Z M 23.677 20.843 C 23.33 21.318 22.951 21.768 22.544 22.191 L 23.677 23.323 L 23.677 20.843 Z M 23.323 23.677 L 22.191 22.544 C 21.768 22.951 21.318 23.33 20.843 23.677 L 23.323 23.677 Z M 23.677 19.962 L 23.677 13.427 L 13.78 13.427 L 22.191 21.837 C 22.743 21.262 23.241 20.634 23.677 19.962 Z M 23.677 12.927 L 23.677 6.392 C 23.241 5.719 22.743 5.092 22.191 4.516 L 13.78 12.927 L 23.677 12.927 Z M 24.177 13.427 L 24.177 19.119 C 24.359 18.783 24.526 18.438 24.677 18.084 L 24.677 13.427 L 24.177 13.427 Z M 24.677 12.927 L 24.677 8.27 C 24.526 7.916 24.359 7.571 24.177 7.235 L 24.177 12.927 L 24.677 12.927 Z M 25.177 13.427 L 25.177 16.688 C 25.48 15.651 25.652 14.557 25.674 13.427 L 25.177 13.427 Z M 25.674 12.927 C 25.652 11.796 25.48 10.703 25.177 9.665 L 25.177 12.927 L 25.674 12.927 Z M 12.573 12.927 L 4.163 4.516 C 3.61 5.092 3.112 5.719 2.677 6.392 L 2.677 12.927 L 12.573 12.927 Z M 2.177 12.927 L 2.177 7.235 C 1.995 7.571 1.828 7.916 1.677 8.27 L 1.677 12.927 L 2.177 12.927 Z M 1.677 13.427 L 1.677 18.084 C 1.828 18.438 1.995 18.783 2.177 19.119 L 2.177 13.427 L 1.677 13.427 Z M 1.177 12.927 L 1.177 9.665 C 0.874 10.703 0.701 11.796 0.679 12.927 L 1.177 12.927 Z M 0.679 13.427 C 0.701 14.557 0.874 15.651 1.177 16.688 L 1.177 13.427 L 0.679 13.427 Z M 2.677 13.427 L 2.677 19.962 C 3.112 20.634 3.61 21.262 4.163 21.837 L 12.573 13.427 L 2.677 13.427 Z M 21.837 22.191 L 13.409 13.762 L 13.409 23.677 L 19.962 23.677 C 20.634 23.241 21.262 22.743 21.837 22.191 Z M 12.909 2.677 L 6.392 2.677 C 5.719 3.112 5.092 3.61 4.517 4.163 L 12.909 12.555 L 12.909 2.677 Z M 5.51 2.677 L 3.03 2.677 L 4.163 3.809 C 4.586 3.402 5.036 3.024 5.51 2.677 Z M 3.809 4.163 L 2.677 3.03 L 2.677 5.51 C 3.024 5.036 3.402 4.586 3.809 4.163 Z M 3.03 23.677 L 5.51 23.677 C 5.036 23.33 4.586 22.951 4.163 22.544 L 3.03 23.677 Z M 3.809 22.191 C 3.402 21.768 3.024 21.318 2.677 20.843 L 2.677 23.323 L 3.809 22.191 Z M 4.516 22.191 C 5.092 22.743 5.719 23.241 6.392 23.677 L 12.909 23.677 L 12.909 13.798 L 4.516 22.191 Z M 21.837 4.163 C 21.262 3.61 20.634 3.112 19.962 2.677 L 13.409 2.677 L 13.409 12.591 L 21.837 4.163 Z M 22.544 4.163 C 22.951 4.586 23.33 5.036 23.677 5.51 L 23.677 3.03 L 22.544 4.163 Z M 23.323 2.677 L 20.843 2.677 C 21.318 3.024 21.768 3.402 22.191 3.809 L 23.323 2.677 Z M 16.688 25.177 L 13.409 25.177 L 13.409 25.675 C 14.546 25.654 15.645 25.482 16.688 25.177 Z M 12.909 25.177 L 9.665 25.177 C 10.697 25.478 11.785 25.65 12.909 25.674 L 12.909 25.177 Z M 18.084 24.677 C 18.438 24.526 18.783 24.359 19.119 24.177 L 13.409 24.177 L 13.409 24.677 L 18.084 24.677 Z M 12.909 24.677 L 12.909 24.177 L 7.235 24.177 C 7.571 24.359 7.916 24.526 8.27 24.677 L 12.909 24.677 Z M 19.119 2.177 C 18.783 1.995 18.438 1.828 18.084 1.677 L 13.409 1.677 L 13.409 2.177 L 19.119 2.177 Z M 12.909 2.177 L 12.909 1.677 L 8.27 1.677 C 7.916 1.828 7.571 1.995 7.235 2.177 L 12.909 2.177 Z M 16.688 1.177 C 15.645 0.872 14.546 0.7 13.409 0.679 L 13.409 1.177 L 16.688 1.177 Z M 12.909 1.177 L 12.909 0.68 C 11.785 0.703 10.697 0.875 9.665 1.177 L 12.909 1.177 Z M 8.168 25.177 L 3.177 25.177 C 3.136 25.177 3.096 25.176 3.056 25.173 C 3.33 25.482 3.731 25.677 4.177 25.677 L 9.594 25.677 C 9.106 25.537 8.63 25.37 8.168 25.177 Z M 25.173 23.298 C 25.482 23.023 25.677 22.623 25.677 22.177 L 25.677 16.76 C 25.537 17.247 25.37 17.723 25.177 18.186 L 25.177 23.177 C 25.177 23.218 25.176 23.258 25.173 23.298 Z M 25.677 9.594 L 25.677 4.177 C 25.677 3.731 25.482 3.33 25.173 3.056 C 25.176 3.096 25.177 3.136 25.177 3.177 L 25.177 8.168 C 25.37 8.63 25.537 9.106 25.677 9.594 Z M 24.177 2.677 L 24.177 6.245 C 24.354 6.526 24.521 6.814 24.677 7.109 L 24.677 3.177 C 24.677 3.025 24.654 2.879 24.613 2.741 C 24.475 2.699 24.328 2.677 24.177 2.677 Z M 23.677 2.177 C 23.677 2.025 23.654 1.879 23.613 1.741 C 23.475 1.699 23.328 1.677 23.177 1.677 L 19.245 1.677 C 19.539 1.833 19.827 1.999 20.108 2.177 L 23.677 2.177 Z M 6.245 2.177 C 6.526 1.999 6.814 1.833 7.109 1.677 L 3.177 1.677 C 3.025 1.677 2.879 1.699 2.741 1.741 C 2.699 1.879 2.677 2.025 2.677 2.177 L 6.245 2.177 Z M 1.741 2.741 C 1.699 2.879 1.677 3.025 1.677 3.177 L 1.677 7.109 C 1.833 6.814 1.999 6.526 2.177 6.245 L 2.177 2.677 C 2.025 2.677 1.879 2.699 1.741 2.741 Z M 1.18 3.056 C 0.871 3.33 0.677 3.731 0.677 4.177 L 0.677 9.594 C 0.816 9.106 0.984 8.63 1.177 8.168 L 1.177 3.177 C 1.177 3.136 1.178 3.096 1.18 3.056 Z M 0.677 16.76 L 0.677 22.177 C 0.677 22.623 0.871 23.023 1.18 23.298 C 1.178 23.258 1.177 23.218 1.177 23.177 L 1.177 18.186 C 0.984 17.723 0.816 17.247 0.677 16.76 Z M 2.177 23.677 L 2.177 20.108 C 1.999 19.827 1.833 19.539 1.677 19.245 L 1.677 23.177 C 1.677 23.328 1.699 23.475 1.741 23.613 C 1.879 23.654 2.025 23.677 2.177 23.677 Z M 2.677 24.177 C 2.677 24.328 2.699 24.475 2.741 24.613 C 2.879 24.654 3.025 24.677 3.177 24.677 L 7.109 24.677 C 6.814 24.521 6.526 24.354 6.245 24.177 L 2.677 24.177 Z M 20.108 24.177 C 19.827 24.354 19.539 24.521 19.245 24.677 L 23.177 24.677 C 23.328 24.677 23.475 24.654 23.613 24.613 C 23.654 24.475 23.677 24.328 23.677 24.177 L 20.108 24.177 Z M 24.177 23.677 C 24.328 23.677 24.475 23.654 24.613 23.613 C 24.654 23.475 24.677 23.328 24.677 23.177 L 24.677 19.245 C 24.521 19.539 24.354 19.827 24.177 20.108 L 24.177 23.677 Z M 3.177 1.177 L 8.168 1.177 C 8.63 0.984 9.106 0.816 9.594 0.677 L 4.177 0.677 C 3.731 0.677 3.33 0.871 3.056 1.18 C 3.096 1.178 3.136 1.177 3.177 1.177 Z M 23.177 25.177 L 18.186 25.177 C 17.723 25.37 17.247 25.537 16.76 25.677 L 22.177 25.677 C 22.623 25.677 23.023 25.482 23.298 25.173 C 23.258 25.176 23.218 25.177 23.177 25.177 Z M 22.177 0.677 L 16.76 0.677 C 17.247 0.816 17.723 0.984 18.186 1.177 L 23.177 1.177 C 23.218 1.177 23.258 1.178 23.298 1.18 C 23.023 0.871 22.623 0.677 22.177 0.677 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--patch-color-text-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.348,
    height: 20.348,
    viewBox: "0 0 20.348 20.348",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.823,
      top: 1.829,
      width: 20.348,
      height: 20.348
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.947 1.593 C 2.072 1.496 2.208 1.413 2.353 1.347 C 2.667 0.654 3.366 0.171 4.177 0.171 L 16.177 0.171 C 16.967 0.171 17.65 0.629 17.975 1.294 C 18.145 1.357 18.304 1.442 18.449 1.547 L 19.995 0.001 L 20.348 0.354 L 18.815 1.887 C 18.947 2.044 19.054 2.221 19.133 2.414 C 19.755 2.753 20.177 3.413 20.177 4.171 L 20.177 16.171 C 20.177 16.929 19.755 17.588 19.133 17.928 C 19.054 18.122 18.945 18.301 18.812 18.459 L 20.347 19.995 L 19.994 20.348 L 18.444 18.798 C 18.301 18.901 18.143 18.985 17.975 19.047 C 17.65 19.712 16.967 20.171 16.177 20.171 L 4.177 20.171 C 3.366 20.171 2.667 19.688 2.353 18.994 C 2.209 18.929 2.074 18.847 1.95 18.751 L 0.354 20.347 L 0 19.994 L 1.597 18.397 C 1.501 18.274 1.419 18.138 1.353 17.994 C 0.66 17.68 0.177 16.982 0.177 16.171 L 0.177 4.171 C 0.177 3.36 0.66 2.661 1.353 2.347 C 1.418 2.204 1.499 2.07 1.594 1.947 L 0.001 0.354 L 0.354 0 L 1.947 1.593 Z M 2.677 3.03 L 2.677 3.556 C 2.759 3.463 2.843 3.371 2.928 3.281 L 2.677 3.03 Z M 3.282 2.928 L 3.025 2.671 L 3.562 2.671 C 3.467 2.755 3.374 2.84 3.282 2.928 Z M 3.282 3.635 C 3.069 3.86 2.867 4.095 2.677 4.339 L 2.677 9.921 L 9.567 9.921 L 3.282 3.635 Z M 9.923 9.569 L 9.923 2.671 L 4.345 2.671 C 4.099 2.863 3.862 3.066 3.636 3.281 L 9.923 9.569 Z M 10.423 10.776 L 10.423 17.671 L 16.008 17.671 C 16.253 17.48 16.487 17.279 16.712 17.066 L 10.423 10.776 Z M 17.066 16.712 C 17.281 16.486 17.485 16.249 17.677 16.002 L 17.677 10.421 L 10.774 10.421 L 17.066 16.712 Z M 17.065 17.42 C 16.976 17.505 16.884 17.589 16.791 17.671 L 17.317 17.671 L 17.065 17.42 Z M 17.677 17.324 L 17.419 17.066 C 17.507 16.974 17.593 16.881 17.677 16.785 L 17.677 17.324 Z M 3.562 17.671 L 3.03 17.671 L 3.285 17.416 C 3.376 17.503 3.468 17.588 3.562 17.671 Z M 2.677 17.317 L 2.931 17.063 C 2.845 16.972 2.76 16.879 2.677 16.785 L 2.677 17.317 Z M 4.345 17.671 L 9.923 17.671 L 9.923 10.779 L 3.638 17.063 C 3.864 17.277 4.1 17.48 4.345 17.671 Z M 3.285 16.709 L 9.574 10.421 L 2.677 10.421 L 2.677 16.002 C 2.868 16.248 3.071 16.484 3.285 16.709 Z M 17.677 9.921 L 17.677 4.339 C 17.486 4.094 17.283 3.858 17.069 3.633 L 10.781 9.921 L 17.677 9.921 Z M 10.423 9.572 L 16.716 3.279 C 16.49 3.065 16.254 2.862 16.008 2.671 L 10.423 2.671 L 10.423 9.572 Z M 17.677 3.556 C 17.594 3.462 17.509 3.37 17.423 3.279 L 17.677 3.026 L 17.677 3.556 Z M 17.07 2.926 L 17.325 2.671 L 16.791 2.671 C 16.886 2.754 16.978 2.839 17.07 2.926 Z M 13.226 19.171 L 10.423 19.171 L 10.423 19.668 C 11.401 19.643 12.343 19.47 13.226 19.171 Z M 9.923 19.171 L 7.127 19.171 C 8.008 19.469 8.947 19.642 9.923 19.667 L 9.923 19.171 Z M 14.424 18.671 C 14.726 18.519 15.019 18.352 15.302 18.171 L 10.423 18.171 L 10.423 18.671 L 14.424 18.671 Z M 9.923 18.671 L 9.923 18.171 L 5.051 18.171 C 5.334 18.352 5.627 18.519 5.929 18.671 L 9.923 18.671 Z M 18.177 10.421 L 18.177 15.296 C 18.401 14.947 18.603 14.581 18.781 14.202 L 18.781 10.421 L 18.177 10.421 Z M 18.781 9.921 L 18.781 6.139 C 18.603 5.76 18.401 5.395 18.177 5.045 L 18.177 9.921 L 18.781 9.921 Z M 19.281 10.421 L 19.281 12.892 C 19.516 12.106 19.651 11.277 19.674 10.421 L 19.281 10.421 Z M 19.674 9.921 C 19.651 9.064 19.516 8.236 19.281 7.45 L 19.281 9.921 L 19.674 9.921 Z M 2.177 9.921 L 2.177 5.045 C 1.995 5.328 1.828 5.621 1.677 5.923 L 1.677 9.921 L 2.177 9.921 Z M 1.677 10.421 L 1.677 14.418 C 1.828 14.72 1.995 15.013 2.177 15.296 L 2.177 10.421 L 1.677 10.421 Z M 1.177 9.921 L 1.177 7.121 C 0.878 8.003 0.705 8.944 0.68 9.921 L 1.177 9.921 Z M 0.68 10.421 C 0.705 11.398 0.878 12.338 1.177 13.22 L 1.177 10.421 L 0.68 10.421 Z M 15.302 2.171 C 15.019 1.989 14.726 1.822 14.424 1.671 L 10.423 1.671 L 10.423 2.171 L 15.302 2.171 Z M 9.923 2.171 L 9.923 1.671 L 5.929 1.671 C 5.627 1.822 5.334 1.989 5.051 2.171 L 9.923 2.171 Z M 13.226 1.171 C 12.343 0.871 11.401 0.699 10.423 0.674 L 10.423 1.171 L 13.226 1.171 Z M 9.923 1.171 L 9.923 0.674 C 8.947 0.7 8.008 0.872 7.127 1.171 L 9.923 1.171 Z M 5.813 19.171 L 3.177 19.171 C 3.136 19.171 3.096 19.169 3.055 19.167 C 3.33 19.476 3.731 19.671 4.177 19.671 L 7.046 19.671 C 6.621 19.531 6.21 19.364 5.813 19.171 Z M 19.281 17.186 C 19.527 16.918 19.677 16.562 19.677 16.171 L 19.677 13.302 C 19.563 13.647 19.431 13.985 19.281 14.313 L 19.281 17.171 L 19.281 17.186 Z M 19.677 7.04 L 19.677 4.171 C 19.677 3.779 19.527 3.423 19.281 3.156 L 19.281 3.171 L 19.281 6.029 C 19.431 6.357 19.563 6.694 19.677 7.04 Z M 18.177 2.671 L 18.177 4.17 C 18.394 4.459 18.596 4.76 18.781 5.072 L 18.781 3.171 C 18.781 3.034 18.763 2.901 18.729 2.776 C 18.558 2.708 18.372 2.671 18.177 2.671 Z M 17.677 2.171 C 17.677 2.008 17.651 1.852 17.603 1.705 C 17.499 1.683 17.392 1.671 17.281 1.671 L 15.447 1.671 C 15.698 1.827 15.942 1.994 16.178 2.171 L 17.677 2.171 Z M 4.176 2.171 C 4.411 1.994 4.655 1.827 4.906 1.671 L 3.177 1.671 C 3.025 1.671 2.879 1.693 2.741 1.735 C 2.699 1.873 2.677 2.019 2.677 2.171 L 4.176 2.171 Z M 1.741 2.735 C 1.699 2.873 1.677 3.019 1.677 3.171 L 1.677 4.9 C 1.833 4.649 2 4.405 2.177 4.17 L 2.177 2.671 C 2.025 2.671 1.879 2.693 1.741 2.735 Z M 1.18 3.049 C 0.871 3.324 0.677 3.725 0.677 4.171 L 0.677 7.04 C 0.816 6.615 0.984 6.204 1.177 5.807 L 1.177 3.171 C 1.177 3.13 1.178 3.09 1.18 3.049 Z M 0.677 13.302 L 0.677 16.171 C 0.677 16.617 0.871 17.017 1.18 17.292 C 1.178 17.252 1.177 17.211 1.177 17.171 L 1.177 14.535 C 0.984 14.138 0.816 13.726 0.677 13.302 Z M 2.177 17.671 L 2.177 16.172 C 2 15.936 1.833 15.692 1.677 15.441 L 1.677 17.171 C 1.677 17.322 1.699 17.469 1.741 17.606 C 1.879 17.648 2.025 17.671 2.177 17.671 Z M 2.677 18.171 C 2.677 18.322 2.699 18.469 2.741 18.606 C 2.879 18.648 3.025 18.671 3.177 18.671 L 4.906 18.671 C 4.655 18.515 4.411 18.348 4.176 18.171 L 2.677 18.171 Z M 16.178 18.171 C 15.942 18.348 15.698 18.515 15.447 18.671 L 17.281 18.671 C 17.392 18.671 17.499 18.659 17.603 18.636 C 17.651 18.49 17.677 18.333 17.677 18.171 L 16.178 18.171 Z M 18.177 17.671 C 18.372 17.671 18.558 17.633 18.729 17.566 C 18.763 17.44 18.781 17.307 18.781 17.171 L 18.781 15.269 C 18.596 15.581 18.394 15.883 18.177 16.172 L 18.177 17.671 Z M 3.177 1.171 L 5.813 1.171 C 6.21 0.978 6.621 0.81 7.046 0.671 L 4.177 0.671 C 3.731 0.671 3.33 0.865 3.055 1.174 C 3.096 1.172 3.136 1.171 3.177 1.171 Z M 17.281 19.171 L 14.541 19.171 C 14.144 19.364 13.732 19.531 13.308 19.671 L 16.177 19.671 C 16.621 19.671 17.02 19.478 17.295 19.171 L 17.281 19.171 Z M 16.177 0.671 L 13.308 0.671 C 13.732 0.81 14.144 0.978 14.541 1.171 L 17.281 1.171 L 17.295 1.171 C 17.02 0.864 16.621 0.671 16.177 0.671 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      color: "var(--patch-color-text-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.354,
    height: 14.354,
    viewBox: "0 0 14.354 14.354",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.823,
      top: 0.823,
      width: 14.354,
      height: 14.354
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.354 14.354 L 0 14 L 1.315 12.685 C 1.227 12.536 1.177 12.362 1.177 12.177 C 0.625 12.177 0.177 11.729 0.177 11.177 L 0.177 3.177 C 0.177 2.624 0.625 2.177 1.177 2.177 C 1.177 1.991 1.227 1.818 1.315 1.669 L 0 0.354 L 0.354 0 L 1.669 1.315 C 1.818 1.227 1.991 1.177 2.177 1.177 C 2.177 0.624 2.625 0.177 3.177 0.177 L 11.177 0.177 C 11.729 0.177 12.177 0.624 12.177 1.177 C 12.362 1.177 12.536 1.227 12.685 1.315 L 14 0 L 14.354 0.354 L 13.038 1.669 C 13.126 1.818 13.177 1.991 13.177 2.177 C 13.729 2.177 14.177 2.624 14.177 3.177 L 14.177 11.177 C 14.177 11.729 13.729 12.177 13.177 12.177 C 13.177 12.362 13.126 12.536 13.038 12.685 L 14.354 14 L 14 14.354 L 12.685 13.038 C 12.536 13.126 12.362 13.177 12.177 13.177 C 12.177 13.729 11.729 14.177 11.177 14.177 L 3.177 14.177 C 2.625 14.177 2.177 13.729 2.177 13.177 C 1.991 13.177 1.818 13.126 1.669 13.038 L 0.354 14.354 Z M 0.677 4.574 C 0.817 4.224 0.985 3.888 1.177 3.569 L 1.177 2.677 C 0.901 2.677 0.677 2.901 0.677 3.177 L 0.677 4.574 Z M 0.677 7.177 C 0.677 8.064 0.855 8.91 1.177 9.681 L 1.177 4.672 C 0.855 5.443 0.677 6.289 0.677 7.177 Z M 0.677 9.78 L 0.677 11.177 C 0.677 11.453 0.901 11.677 1.177 11.677 L 1.177 10.784 C 0.985 10.465 0.817 10.129 0.677 9.78 Z M 1.677 11.507 L 1.677 11.677 L 1.815 11.677 C 1.768 11.621 1.722 11.565 1.677 11.507 Z M 2.677 12.539 L 2.677 12.677 L 2.846 12.677 C 2.789 12.632 2.733 12.586 2.677 12.539 Z M 3.711 12.677 L 10.642 12.677 C 10.883 12.525 11.113 12.358 11.33 12.177 L 3.023 12.177 C 3.241 12.358 3.471 12.525 3.711 12.677 Z M 3.569 13.177 L 2.677 13.177 C 2.677 13.453 2.901 13.677 3.177 13.677 L 4.574 13.677 C 4.224 13.537 3.888 13.369 3.569 13.177 Z M 9.78 13.677 L 11.177 13.677 C 11.453 13.677 11.677 13.453 11.677 13.177 L 10.784 13.177 C 10.465 13.369 10.13 13.537 9.78 13.677 Z M 9.681 13.177 L 4.672 13.177 C 5.443 13.499 6.289 13.677 7.177 13.677 C 8.064 13.677 8.91 13.499 9.681 13.177 Z M 11.507 12.677 L 11.677 12.677 L 11.677 12.539 C 11.621 12.586 11.565 12.632 11.507 12.677 Z M 12.539 11.677 L 12.677 11.677 L 12.677 11.507 C 12.632 11.565 12.586 11.621 12.539 11.677 Z M 13.177 10.784 L 13.177 11.677 C 13.453 11.677 13.677 11.453 13.677 11.177 L 13.677 9.78 C 13.537 10.129 13.369 10.465 13.177 10.784 Z M 13.677 7.177 C 13.677 6.289 13.499 5.443 13.177 4.672 L 13.177 9.681 C 13.499 8.91 13.677 8.064 13.677 7.177 Z M 13.677 4.574 L 13.677 3.177 C 13.677 2.901 13.453 2.677 13.177 2.677 L 13.177 3.569 C 13.369 3.888 13.537 4.224 13.677 4.574 Z M 12.677 2.846 L 12.677 2.677 L 12.539 2.677 C 12.586 2.732 12.632 2.789 12.677 2.846 Z M 11.677 1.815 L 11.677 1.677 L 11.507 1.677 C 11.565 1.722 11.621 1.768 11.677 1.815 Z M 10.642 1.677 L 3.711 1.677 C 3.471 1.829 3.241 1.996 3.023 2.177 L 11.33 2.177 C 11.113 1.996 10.883 1.829 10.642 1.677 Z M 10.784 1.177 L 11.677 1.177 C 11.677 0.901 11.453 0.677 11.177 0.677 L 9.78 0.677 C 10.13 0.817 10.465 0.984 10.784 1.177 Z M 7.177 0.677 C 6.289 0.677 5.443 0.855 4.672 1.177 L 9.681 1.177 C 8.91 0.855 8.064 0.677 7.177 0.677 Z M 4.574 0.677 L 3.177 0.677 C 2.901 0.677 2.677 0.901 2.677 1.177 L 3.569 1.177 C 3.888 0.984 4.224 0.817 4.574 0.677 Z M 2.846 1.677 L 2.677 1.677 L 2.677 1.815 C 2.733 1.768 2.789 1.722 2.846 1.677 Z M 1.815 2.677 L 1.677 2.677 L 1.677 2.846 C 1.722 2.789 1.768 2.732 1.815 2.677 Z M 1.677 3.711 L 1.677 10.642 C 1.829 10.883 1.996 11.113 2.177 11.33 L 2.177 3.023 C 1.996 3.241 1.829 3.471 1.677 3.711 Z M 12.177 3.023 L 12.177 11.33 C 12.358 11.113 12.525 10.883 12.677 10.642 L 12.677 3.711 C 12.525 3.471 12.358 3.241 12.177 3.023 Z M 2.177 12.677 C 2.132 12.677 2.089 12.671 2.047 12.66 L 2.177 12.53 L 2.177 12.677 Z M 7.177 7.53 L 3.03 11.677 L 11.323 11.677 L 7.177 7.53 Z M 2.677 11.323 L 6.823 7.177 L 2.677 3.03 L 2.677 11.323 Z M 11.677 11.323 L 11.677 3.03 L 7.53 7.177 L 11.677 11.323 Z M 7.177 6.823 L 11.323 2.677 L 3.03 2.677 L 7.177 6.823 Z M 12.677 2.177 L 12.53 2.177 L 12.66 2.047 C 12.671 2.089 12.677 2.132 12.677 2.177 Z M 12.177 1.823 L 12.306 1.694 C 12.265 1.683 12.222 1.677 12.177 1.677 L 12.177 1.823 Z M 1.694 12.306 L 1.823 12.177 L 1.677 12.177 C 1.677 12.222 1.683 12.265 1.694 12.306 Z M 12.66 12.306 C 12.671 12.265 12.677 12.222 12.677 12.177 L 12.53 12.177 L 12.66 12.306 Z M 12.177 12.53 L 12.306 12.66 C 12.265 12.671 12.222 12.677 12.177 12.677 L 12.177 12.53 Z M 2.177 1.823 L 2.177 1.677 C 2.132 1.677 2.089 1.683 2.047 1.694 L 2.177 1.823 Z M 1.694 2.047 L 1.823 2.177 L 1.677 2.177 C 1.677 2.132 1.683 2.089 1.694 2.047 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: size=32
    "size=32": __body0,
    // figma: size=24
    "size=24": __body1,
    // figma: size=16
    "size=16": __body2
  };
  return (__impls[__vkey_IconPlaceholder9(props)] ?? __body2)();
}

// figma node: 5193:37107 .Android / Lists / Blocks / Lead Edge (4 variants)
const __venc_AndroidListsBlocksLeadEdge2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_AndroidListsBlocksLeadEdge2 = p => "options=" + __venc_AndroidListsBlocksLeadEdge2(p.options);
function AndroidListsBlocksLeadEdge2(_p = {}) {
  const props = {
    ..._p,
    options: _p.options ?? "checkbox"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 48,
      display: "flex",
      flexDirection: "row",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, props.iconOrSwatch ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(AndroidFormsCheckbox2, {
    condition: "unselected",
    disabled: false
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(AndroidFormsRadioButton2, {
    selected: false,
    disabled: false
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  });
  const __impls = {
    // figma: Options=Icon or swatch
    "options=icon or swatch": __body0,
    // figma: Options=Checkbox
    "options=checkbox": __body1,
    // figma: Options=Radio button
    "options=radio button": __body2,
    // figma: Options=Nothing
    "options=nothing": __body3
  };
  return (__impls[__vkey_AndroidListsBlocksLeadEdge2(props)] ?? __body1)();
}

// figma node: 5193:37140 .Android / Lists / Blocks / Secondary Content
function AndroidListsBlocksSecondaryContent(_p = {}) {
  const props = {
    ..._p,
    text: _p.text ?? "{Secondary text}"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "20px",
      color: "var(--patch-color-text-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text));
}

// figma node: 5193:37118 .Android / Lists / Blocks / Supporting Content
function AndroidListsBlocksSupportingContent(_p = {}) {
  const props = {
    ..._p,
    text: _p.text ?? "{Supporting text that runs over at least two lines}"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "var(--patch-color-text-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text));
}

// figma node: 5193:37120 Android / Forms / Switch (4 variants)
const __venc_AndroidFormsSwitch2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_AndroidFormsSwitch2 = p => "selected=" + __venc_AndroidFormsSwitch2(p.selected) + '|' + "disabled=" + __venc_AndroidFormsSwitch2(p.disabled);
function AndroidFormsSwitch2(_p = {}) {
  const props = {
    ..._p,
    selected: _p.selected ?? true,
    disabled: _p.disabled ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 52,
      height: 32,
      overflow: "hidden",
      borderRadius: 9999,
      borderTop: "2px solid var(--patch-color-border-disabled)",
      borderRight: "2px solid var(--patch-color-border-disabled)",
      borderBottom: "2px solid var(--patch-color-border-disabled)",
      borderLeft: "2px solid var(--patch-color-border-disabled)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "relative",
      width: 16,
      overflow: "hidden",
      borderRadius: 9999,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "var(--patch-form-color-fill-tertiary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 8 C 0 3.582 3.582 0 8 0 C 12.418 0 16 3.582 16 8 C 16 12.418 12.418 16 8 16 C 3.582 16 0 12.418 0 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 52,
      height: 32,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-form-color-fill-tertiary)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 4px 4px 4px",
      justifyContent: "flex-end",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-4) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-4) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      position: "relative",
      width: 24,
      overflow: "hidden",
      borderRadius: 9999,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "var(--patch-color-surface-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12 C 0 5.373 5.373 0 12 0 C 18.627 0 24 5.373 24 12 C 24 18.627 18.627 24 12 24 C 5.373 24 0 18.627 0 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 52,
      height: 32,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-surface-primary)",
      borderTop: "2px solid var(--patch-form-color-border-secondary)",
      borderRight: "2px solid var(--patch-form-color-border-secondary)",
      borderBottom: "2px solid var(--patch-form-color-border-secondary)",
      borderLeft: "2px solid var(--patch-form-color-border-secondary)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "relative",
      width: 16,
      overflow: "hidden",
      borderRadius: 9999,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "var(--patch-form-color-fill-secondary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 8 C 0 3.582 3.582 0 8 0 C 12.418 0 16 3.582 16 8 C 16 12.418 12.418 16 8 16 C 3.582 16 0 12.418 0 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 52,
      height: 32,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-accent-primary)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 4px 4px 4px",
      justifyContent: "flex-end",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-4) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-4) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      position: "relative",
      width: 24,
      overflow: "hidden",
      borderRadius: 9999,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "var(--patch-color-surface-fixed)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12 C 0 5.373 5.373 0 12 0 C 18.627 0 24 5.373 24 12 C 24 18.627 18.627 24 12 24 C 5.373 24 0 18.627 0 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Selected?=No, Disabled?=Yes
    "selected=false|disabled=true": __body0,
    // figma: Selected?=Yes, Disabled?=Yes
    "selected=true|disabled=true": __body1,
    // figma: Selected?=No, Disabled?=No
    "selected=false|disabled=false": __body2,
    // figma: Selected?=Yes, Disabled?=No
    "selected=true|disabled=false": __body3
  };
  return (__impls[__vkey_AndroidFormsSwitch2(props)] ?? __body3)();
}

// figma node: 5193:37129 .Android / Lists / Blocks / Trail Edge (5 variants)
const __venc_AndroidListsBlocksTrailEdge2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_AndroidListsBlocksTrailEdge2 = p => "options=" + __venc_AndroidListsBlocksTrailEdge2(p.options);
function AndroidListsBlocksTrailEdge2(_p = {}) {
  const props = {
    ..._p,
    options: _p.options ?? "checkbox",
    value: _p.value ?? "{Label}"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 48,
      display: "flex",
      flexDirection: "row",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(AndroidFormsCheckbox2, {
    condition: "unselected",
    disabled: false
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 48,
      display: "flex",
      flexDirection: "row",
      padding: "0px 12px 0px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "right",
      lineHeight: "20px",
      color: "var(--patch-color-text-secondary)",
      flexShrink: 0
    }
  }, props.value));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 48,
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "calc(var(--patch-object-small) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      padding: "4px 4px 4px 4px",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-4) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-4) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 47,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.348,
    height: 20.348,
    viewBox: "0 0 20.348 20.348",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.823,
      top: 1.829,
      width: 20.348,
      height: 20.348,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.947 1.593 C 2.072 1.496 2.208 1.413 2.353 1.347 C 2.667 0.654 3.366 0.171 4.177 0.171 L 16.177 0.171 C 16.967 0.171 17.65 0.629 17.975 1.294 C 18.145 1.357 18.304 1.442 18.449 1.547 L 19.995 0.001 L 20.348 0.354 L 18.815 1.887 C 18.947 2.044 19.054 2.221 19.133 2.414 C 19.755 2.753 20.177 3.413 20.177 4.171 L 20.177 16.171 C 20.177 16.929 19.755 17.588 19.133 17.928 C 19.054 18.122 18.945 18.301 18.812 18.459 L 20.347 19.995 L 19.994 20.348 L 18.444 18.798 C 18.301 18.901 18.143 18.985 17.975 19.047 C 17.65 19.712 16.967 20.171 16.177 20.171 L 4.177 20.171 C 3.366 20.171 2.667 19.688 2.353 18.994 C 2.209 18.929 2.074 18.847 1.95 18.751 L 0.354 20.347 L 0 19.994 L 1.597 18.397 C 1.501 18.274 1.419 18.138 1.353 17.994 C 0.66 17.68 0.177 16.982 0.177 16.171 L 0.177 4.171 C 0.177 3.36 0.66 2.661 1.353 2.347 C 1.418 2.204 1.499 2.07 1.594 1.947 L 0.001 0.354 L 0.354 0 L 1.947 1.593 Z M 2.677 3.03 L 2.677 3.556 C 2.759 3.463 2.843 3.371 2.928 3.281 L 2.677 3.03 Z M 3.282 2.928 L 3.025 2.671 L 3.562 2.671 C 3.467 2.755 3.374 2.84 3.282 2.928 Z M 3.282 3.635 C 3.069 3.86 2.867 4.095 2.677 4.339 L 2.677 9.921 L 9.567 9.921 L 3.282 3.635 Z M 9.923 9.569 L 9.923 2.671 L 4.345 2.671 C 4.099 2.863 3.862 3.066 3.636 3.281 L 9.923 9.569 Z M 10.423 10.776 L 10.423 17.671 L 16.008 17.671 C 16.253 17.48 16.487 17.279 16.712 17.066 L 10.423 10.776 Z M 17.066 16.712 C 17.281 16.486 17.485 16.249 17.677 16.002 L 17.677 10.421 L 10.774 10.421 L 17.066 16.712 Z M 17.065 17.42 C 16.976 17.505 16.884 17.589 16.791 17.671 L 17.317 17.671 L 17.065 17.42 Z M 17.677 17.324 L 17.419 17.066 C 17.507 16.974 17.593 16.881 17.677 16.785 L 17.677 17.324 Z M 3.562 17.671 L 3.03 17.671 L 3.285 17.416 C 3.376 17.503 3.468 17.588 3.562 17.671 Z M 2.677 17.317 L 2.931 17.063 C 2.845 16.972 2.76 16.879 2.677 16.785 L 2.677 17.317 Z M 4.345 17.671 L 9.923 17.671 L 9.923 10.779 L 3.638 17.063 C 3.864 17.277 4.1 17.48 4.345 17.671 Z M 3.285 16.709 L 9.574 10.421 L 2.677 10.421 L 2.677 16.002 C 2.868 16.248 3.071 16.484 3.285 16.709 Z M 17.677 9.921 L 17.677 4.339 C 17.486 4.094 17.283 3.858 17.069 3.633 L 10.781 9.921 L 17.677 9.921 Z M 10.423 9.572 L 16.716 3.279 C 16.49 3.065 16.254 2.862 16.008 2.671 L 10.423 2.671 L 10.423 9.572 Z M 17.677 3.556 C 17.594 3.462 17.509 3.37 17.423 3.279 L 17.677 3.026 L 17.677 3.556 Z M 17.07 2.926 L 17.325 2.671 L 16.791 2.671 C 16.886 2.754 16.978 2.839 17.07 2.926 Z M 13.226 19.171 L 10.423 19.171 L 10.423 19.668 C 11.401 19.643 12.343 19.47 13.226 19.171 Z M 9.923 19.171 L 7.127 19.171 C 8.008 19.469 8.947 19.642 9.923 19.667 L 9.923 19.171 Z M 14.424 18.671 C 14.726 18.519 15.019 18.352 15.302 18.171 L 10.423 18.171 L 10.423 18.671 L 14.424 18.671 Z M 9.923 18.671 L 9.923 18.171 L 5.051 18.171 C 5.334 18.352 5.627 18.519 5.929 18.671 L 9.923 18.671 Z M 18.177 10.421 L 18.177 15.296 C 18.401 14.947 18.603 14.581 18.781 14.202 L 18.781 10.421 L 18.177 10.421 Z M 18.781 9.921 L 18.781 6.139 C 18.603 5.76 18.401 5.395 18.177 5.045 L 18.177 9.921 L 18.781 9.921 Z M 19.281 10.421 L 19.281 12.892 C 19.516 12.106 19.651 11.277 19.674 10.421 L 19.281 10.421 Z M 19.674 9.921 C 19.651 9.064 19.516 8.236 19.281 7.45 L 19.281 9.921 L 19.674 9.921 Z M 2.177 9.921 L 2.177 5.045 C 1.995 5.328 1.828 5.621 1.677 5.923 L 1.677 9.921 L 2.177 9.921 Z M 1.677 10.421 L 1.677 14.418 C 1.828 14.72 1.995 15.013 2.177 15.296 L 2.177 10.421 L 1.677 10.421 Z M 1.177 9.921 L 1.177 7.121 C 0.878 8.003 0.705 8.944 0.68 9.921 L 1.177 9.921 Z M 0.68 10.421 C 0.705 11.398 0.878 12.338 1.177 13.22 L 1.177 10.421 L 0.68 10.421 Z M 15.302 2.171 C 15.019 1.989 14.726 1.822 14.424 1.671 L 10.423 1.671 L 10.423 2.171 L 15.302 2.171 Z M 9.923 2.171 L 9.923 1.671 L 5.929 1.671 C 5.627 1.822 5.334 1.989 5.051 2.171 L 9.923 2.171 Z M 13.226 1.171 C 12.343 0.871 11.401 0.699 10.423 0.674 L 10.423 1.171 L 13.226 1.171 Z M 9.923 1.171 L 9.923 0.674 C 8.947 0.7 8.008 0.872 7.127 1.171 L 9.923 1.171 Z M 5.813 19.171 L 3.177 19.171 C 3.136 19.171 3.096 19.169 3.055 19.167 C 3.33 19.476 3.731 19.671 4.177 19.671 L 7.046 19.671 C 6.621 19.531 6.21 19.364 5.813 19.171 Z M 19.281 17.186 C 19.527 16.918 19.677 16.562 19.677 16.171 L 19.677 13.302 C 19.563 13.647 19.431 13.985 19.281 14.313 L 19.281 17.171 L 19.281 17.186 Z M 19.677 7.04 L 19.677 4.171 C 19.677 3.779 19.527 3.423 19.281 3.156 L 19.281 3.171 L 19.281 6.029 C 19.431 6.357 19.563 6.694 19.677 7.04 Z M 18.177 2.671 L 18.177 4.17 C 18.394 4.459 18.596 4.76 18.781 5.072 L 18.781 3.171 C 18.781 3.034 18.763 2.901 18.729 2.776 C 18.558 2.708 18.372 2.671 18.177 2.671 Z M 17.677 2.171 C 17.677 2.008 17.651 1.852 17.603 1.705 C 17.499 1.683 17.392 1.671 17.281 1.671 L 15.447 1.671 C 15.698 1.827 15.942 1.994 16.178 2.171 L 17.677 2.171 Z M 4.176 2.171 C 4.411 1.994 4.655 1.827 4.906 1.671 L 3.177 1.671 C 3.025 1.671 2.879 1.693 2.741 1.735 C 2.699 1.873 2.677 2.019 2.677 2.171 L 4.176 2.171 Z M 1.741 2.735 C 1.699 2.873 1.677 3.019 1.677 3.171 L 1.677 4.9 C 1.833 4.649 2 4.405 2.177 4.17 L 2.177 2.671 C 2.025 2.671 1.879 2.693 1.741 2.735 Z M 1.18 3.049 C 0.871 3.324 0.677 3.725 0.677 4.171 L 0.677 7.04 C 0.816 6.615 0.984 6.204 1.177 5.807 L 1.177 3.171 C 1.177 3.13 1.178 3.09 1.18 3.049 Z M 0.677 13.302 L 0.677 16.171 C 0.677 16.617 0.871 17.017 1.18 17.292 C 1.178 17.252 1.177 17.211 1.177 17.171 L 1.177 14.535 C 0.984 14.138 0.816 13.726 0.677 13.302 Z M 2.177 17.671 L 2.177 16.172 C 2 15.936 1.833 15.692 1.677 15.441 L 1.677 17.171 C 1.677 17.322 1.699 17.469 1.741 17.606 C 1.879 17.648 2.025 17.671 2.177 17.671 Z M 2.677 18.171 C 2.677 18.322 2.699 18.469 2.741 18.606 C 2.879 18.648 3.025 18.671 3.177 18.671 L 4.906 18.671 C 4.655 18.515 4.411 18.348 4.176 18.171 L 2.677 18.171 Z M 16.178 18.171 C 15.942 18.348 15.698 18.515 15.447 18.671 L 17.281 18.671 C 17.392 18.671 17.499 18.659 17.603 18.636 C 17.651 18.49 17.677 18.333 17.677 18.171 L 16.178 18.171 Z M 18.177 17.671 C 18.372 17.671 18.558 17.633 18.729 17.566 C 18.763 17.44 18.781 17.307 18.781 17.171 L 18.781 15.269 C 18.596 15.581 18.394 15.883 18.177 16.172 L 18.177 17.671 Z M 3.177 1.171 L 5.813 1.171 C 6.21 0.978 6.621 0.81 7.046 0.671 L 4.177 0.671 C 3.731 0.671 3.33 0.865 3.055 1.174 C 3.096 1.172 3.136 1.171 3.177 1.171 Z M 17.281 19.171 L 14.541 19.171 C 14.144 19.364 13.732 19.531 13.308 19.671 L 16.177 19.671 C 16.621 19.671 17.02 19.478 17.295 19.171 L 17.281 19.171 Z M 16.177 0.671 L 13.308 0.671 C 13.732 0.81 14.144 0.978 14.541 1.171 L 17.281 1.171 L 17.295 1.171 C 17.02 0.864 16.621 0.671 16.177 0.671 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--patch-color-text-accent-primary)",
      flexShrink: 0
    }
  }, "{Value}")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.348,
    height: 20.348,
    viewBox: "0 0 20.348 20.348",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.823,
      top: 1.829,
      width: 20.348,
      height: 20.348,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.947 1.593 C 2.072 1.496 2.208 1.413 2.353 1.347 C 2.667 0.654 3.366 0.171 4.177 0.171 L 16.177 0.171 C 16.967 0.171 17.65 0.629 17.975 1.294 C 18.145 1.357 18.304 1.442 18.449 1.547 L 19.995 0.001 L 20.348 0.354 L 18.815 1.887 C 18.947 2.044 19.054 2.221 19.133 2.414 C 19.755 2.753 20.177 3.413 20.177 4.171 L 20.177 16.171 C 20.177 16.929 19.755 17.588 19.133 17.928 C 19.054 18.122 18.945 18.301 18.812 18.459 L 20.347 19.995 L 19.994 20.348 L 18.444 18.798 C 18.301 18.901 18.143 18.985 17.975 19.047 C 17.65 19.712 16.967 20.171 16.177 20.171 L 4.177 20.171 C 3.366 20.171 2.667 19.688 2.353 18.994 C 2.209 18.929 2.074 18.847 1.95 18.751 L 0.354 20.347 L 0 19.994 L 1.597 18.397 C 1.501 18.274 1.419 18.138 1.353 17.994 C 0.66 17.68 0.177 16.982 0.177 16.171 L 0.177 4.171 C 0.177 3.36 0.66 2.661 1.353 2.347 C 1.418 2.204 1.499 2.07 1.594 1.947 L 0.001 0.354 L 0.354 0 L 1.947 1.593 Z M 2.677 3.03 L 2.677 3.556 C 2.759 3.463 2.843 3.371 2.928 3.281 L 2.677 3.03 Z M 3.282 2.928 L 3.025 2.671 L 3.562 2.671 C 3.467 2.755 3.374 2.84 3.282 2.928 Z M 3.282 3.635 C 3.069 3.86 2.867 4.095 2.677 4.339 L 2.677 9.921 L 9.567 9.921 L 3.282 3.635 Z M 9.923 9.569 L 9.923 2.671 L 4.345 2.671 C 4.099 2.863 3.862 3.066 3.636 3.281 L 9.923 9.569 Z M 10.423 10.776 L 10.423 17.671 L 16.008 17.671 C 16.253 17.48 16.487 17.279 16.712 17.066 L 10.423 10.776 Z M 17.066 16.712 C 17.281 16.486 17.485 16.249 17.677 16.002 L 17.677 10.421 L 10.774 10.421 L 17.066 16.712 Z M 17.065 17.42 C 16.976 17.505 16.884 17.589 16.791 17.671 L 17.317 17.671 L 17.065 17.42 Z M 17.677 17.324 L 17.419 17.066 C 17.507 16.974 17.593 16.881 17.677 16.785 L 17.677 17.324 Z M 3.562 17.671 L 3.03 17.671 L 3.285 17.416 C 3.376 17.503 3.468 17.588 3.562 17.671 Z M 2.677 17.317 L 2.931 17.063 C 2.845 16.972 2.76 16.879 2.677 16.785 L 2.677 17.317 Z M 4.345 17.671 L 9.923 17.671 L 9.923 10.779 L 3.638 17.063 C 3.864 17.277 4.1 17.48 4.345 17.671 Z M 3.285 16.709 L 9.574 10.421 L 2.677 10.421 L 2.677 16.002 C 2.868 16.248 3.071 16.484 3.285 16.709 Z M 17.677 9.921 L 17.677 4.339 C 17.486 4.094 17.283 3.858 17.069 3.633 L 10.781 9.921 L 17.677 9.921 Z M 10.423 9.572 L 16.716 3.279 C 16.49 3.065 16.254 2.862 16.008 2.671 L 10.423 2.671 L 10.423 9.572 Z M 17.677 3.556 C 17.594 3.462 17.509 3.37 17.423 3.279 L 17.677 3.026 L 17.677 3.556 Z M 17.07 2.926 L 17.325 2.671 L 16.791 2.671 C 16.886 2.754 16.978 2.839 17.07 2.926 Z M 13.226 19.171 L 10.423 19.171 L 10.423 19.668 C 11.401 19.643 12.343 19.47 13.226 19.171 Z M 9.923 19.171 L 7.127 19.171 C 8.008 19.469 8.947 19.642 9.923 19.667 L 9.923 19.171 Z M 14.424 18.671 C 14.726 18.519 15.019 18.352 15.302 18.171 L 10.423 18.171 L 10.423 18.671 L 14.424 18.671 Z M 9.923 18.671 L 9.923 18.171 L 5.051 18.171 C 5.334 18.352 5.627 18.519 5.929 18.671 L 9.923 18.671 Z M 18.177 10.421 L 18.177 15.296 C 18.401 14.947 18.603 14.581 18.781 14.202 L 18.781 10.421 L 18.177 10.421 Z M 18.781 9.921 L 18.781 6.139 C 18.603 5.76 18.401 5.395 18.177 5.045 L 18.177 9.921 L 18.781 9.921 Z M 19.281 10.421 L 19.281 12.892 C 19.516 12.106 19.651 11.277 19.674 10.421 L 19.281 10.421 Z M 19.674 9.921 C 19.651 9.064 19.516 8.236 19.281 7.45 L 19.281 9.921 L 19.674 9.921 Z M 2.177 9.921 L 2.177 5.045 C 1.995 5.328 1.828 5.621 1.677 5.923 L 1.677 9.921 L 2.177 9.921 Z M 1.677 10.421 L 1.677 14.418 C 1.828 14.72 1.995 15.013 2.177 15.296 L 2.177 10.421 L 1.677 10.421 Z M 1.177 9.921 L 1.177 7.121 C 0.878 8.003 0.705 8.944 0.68 9.921 L 1.177 9.921 Z M 0.68 10.421 C 0.705 11.398 0.878 12.338 1.177 13.22 L 1.177 10.421 L 0.68 10.421 Z M 15.302 2.171 C 15.019 1.989 14.726 1.822 14.424 1.671 L 10.423 1.671 L 10.423 2.171 L 15.302 2.171 Z M 9.923 2.171 L 9.923 1.671 L 5.929 1.671 C 5.627 1.822 5.334 1.989 5.051 2.171 L 9.923 2.171 Z M 13.226 1.171 C 12.343 0.871 11.401 0.699 10.423 0.674 L 10.423 1.171 L 13.226 1.171 Z M 9.923 1.171 L 9.923 0.674 C 8.947 0.7 8.008 0.872 7.127 1.171 L 9.923 1.171 Z M 5.813 19.171 L 3.177 19.171 C 3.136 19.171 3.096 19.169 3.055 19.167 C 3.33 19.476 3.731 19.671 4.177 19.671 L 7.046 19.671 C 6.621 19.531 6.21 19.364 5.813 19.171 Z M 19.281 17.186 C 19.527 16.918 19.677 16.562 19.677 16.171 L 19.677 13.302 C 19.563 13.647 19.431 13.985 19.281 14.313 L 19.281 17.171 L 19.281 17.186 Z M 19.677 7.04 L 19.677 4.171 C 19.677 3.779 19.527 3.423 19.281 3.156 L 19.281 3.171 L 19.281 6.029 C 19.431 6.357 19.563 6.694 19.677 7.04 Z M 18.177 2.671 L 18.177 4.17 C 18.394 4.459 18.596 4.76 18.781 5.072 L 18.781 3.171 C 18.781 3.034 18.763 2.901 18.729 2.776 C 18.558 2.708 18.372 2.671 18.177 2.671 Z M 17.677 2.171 C 17.677 2.008 17.651 1.852 17.603 1.705 C 17.499 1.683 17.392 1.671 17.281 1.671 L 15.447 1.671 C 15.698 1.827 15.942 1.994 16.178 2.171 L 17.677 2.171 Z M 4.176 2.171 C 4.411 1.994 4.655 1.827 4.906 1.671 L 3.177 1.671 C 3.025 1.671 2.879 1.693 2.741 1.735 C 2.699 1.873 2.677 2.019 2.677 2.171 L 4.176 2.171 Z M 1.741 2.735 C 1.699 2.873 1.677 3.019 1.677 3.171 L 1.677 4.9 C 1.833 4.649 2 4.405 2.177 4.17 L 2.177 2.671 C 2.025 2.671 1.879 2.693 1.741 2.735 Z M 1.18 3.049 C 0.871 3.324 0.677 3.725 0.677 4.171 L 0.677 7.04 C 0.816 6.615 0.984 6.204 1.177 5.807 L 1.177 3.171 C 1.177 3.13 1.178 3.09 1.18 3.049 Z M 0.677 13.302 L 0.677 16.171 C 0.677 16.617 0.871 17.017 1.18 17.292 C 1.178 17.252 1.177 17.211 1.177 17.171 L 1.177 14.535 C 0.984 14.138 0.816 13.726 0.677 13.302 Z M 2.177 17.671 L 2.177 16.172 C 2 15.936 1.833 15.692 1.677 15.441 L 1.677 17.171 C 1.677 17.322 1.699 17.469 1.741 17.606 C 1.879 17.648 2.025 17.671 2.177 17.671 Z M 2.677 18.171 C 2.677 18.322 2.699 18.469 2.741 18.606 C 2.879 18.648 3.025 18.671 3.177 18.671 L 4.906 18.671 C 4.655 18.515 4.411 18.348 4.176 18.171 L 2.677 18.171 Z M 16.178 18.171 C 15.942 18.348 15.698 18.515 15.447 18.671 L 17.281 18.671 C 17.392 18.671 17.499 18.659 17.603 18.636 C 17.651 18.49 17.677 18.333 17.677 18.171 L 16.178 18.171 Z M 18.177 17.671 C 18.372 17.671 18.558 17.633 18.729 17.566 C 18.763 17.44 18.781 17.307 18.781 17.171 L 18.781 15.269 C 18.596 15.581 18.394 15.883 18.177 16.172 L 18.177 17.671 Z M 3.177 1.171 L 5.813 1.171 C 6.21 0.978 6.621 0.81 7.046 0.671 L 4.177 0.671 C 3.731 0.671 3.33 0.865 3.055 1.174 C 3.096 1.172 3.136 1.171 3.177 1.171 Z M 17.281 19.171 L 14.541 19.171 C 14.144 19.364 13.732 19.531 13.308 19.671 L 16.177 19.671 C 16.621 19.671 17.02 19.478 17.295 19.171 L 17.281 19.171 Z M 16.177 0.671 L 13.308 0.671 C 13.732 0.81 14.144 0.978 14.541 1.171 L 17.281 1.171 L 17.295 1.171 C 17.02 0.864 16.621 0.671 16.177 0.671 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 48,
      display: "flex",
      flexDirection: "row",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 52,
      height: 32,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(AndroidFormsSwitch2, {
    selected: false,
    disabled: false
  })));
  const __impls = {
    // figma: Options=Icon
    "options=icon": __body0,
    // figma: Options=Checkbox
    "options=checkbox": __body1,
    // figma: Options=Text
    "options=text": __body2,
    // figma: Options=Flat button
    "options=flat button": __body3,
    // figma: Options=Switch
    "options=switch": __body4
  };
  return (__impls[__vkey_AndroidListsBlocksTrailEdge2(props)] ?? __body1)();
}

// figma node: 5193:16502 icon/checkmark (3 variants)
const __venc_IconCheckmark2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconCheckmark2 = p => "size=" + __venc_IconCheckmark2(p.size);
function IconCheckmark2(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "16"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      position: "relative",
      color: "var(--patch-color-text-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 15,
    viewBox: "0 0 20 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 8,
      width: 20,
      height: 15
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.707 0.293 C 20.098 0.683 20.098 1.317 19.707 1.707 L 6.707 14.707 C 6.317 15.098 5.683 15.098 5.293 14.707 L 0.293 9.707 C -0.098 9.317 -0.098 8.683 0.293 8.293 C 0.683 7.902 1.317 7.902 1.707 8.293 L 6 12.586 L 18.293 0.293 C 18.683 -0.098 19.317 -0.098 19.707 0.293 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--patch-color-text-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 11,
    viewBox: "0 0 15 11",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 6,
      width: 15,
      height: 11
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.78 0.22 C 15.073 0.513 15.073 0.987 14.78 1.28 L 5.28 10.78 C 5.001 11.06 4.553 11.074 4.256 10.814 L 0.256 7.314 C -0.056 7.042 -0.087 6.568 0.186 6.256 C 0.458 5.944 0.932 5.913 1.244 6.186 L 4.716 9.224 L 13.72 0.22 C 14.013 -0.073 14.487 -0.073 14.78 0.22 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      color: "var(--patch-color-text-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.500,
    height: 8,
    viewBox: "0 0 10.500 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.5,
      top: 4,
      width: 10.5,
      height: 8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.28 0.22 C 10.573 0.513 10.573 0.987 10.28 1.28 L 3.78 7.78 C 3.487 8.073 3.013 8.073 2.72 7.78 L 0.22 5.28 C -0.073 4.987 -0.073 4.513 0.22 4.22 C 0.513 3.927 0.987 3.927 1.28 4.22 L 3.25 6.189 L 9.22 0.22 C 9.513 -0.073 9.987 -0.073 10.28 0.22 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: size=32
    "size=32": __body0,
    // figma: size=24
    "size=24": __body1,
    // figma: size=16
    "size=16": __body2
  };
  return (__impls[__vkey_IconCheckmark2(props)] ?? __body2)();
}

// figma node: 5193:13409 icon/minus (3 variants)
const __venc_IconMinus2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconMinus2 = p => "size=" + __venc_IconMinus2(p.size);
function IconMinus2(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "16"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      position: "relative",
      color: "var(--patch-color-text-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24,
    height: 2,
    viewBox: "0 0 24 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 15,
      width: 24,
      height: 2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 1 C 0 0.448 0.448 0 1 0 L 23 0 C 23.552 0 24 0.448 24 1 C 24 1.552 23.552 2 23 2 L 1 2 C 0.448 2 0 1.552 0 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--patch-color-text-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 1.500,
    viewBox: "0 0 18 1.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 11,
      width: 18,
      height: 1.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.75 C 0 0.336 0.336 0 0.75 0 L 17.25 0 C 17.664 0 18 0.336 18 0.75 C 18 1.164 17.664 1.5 17.25 1.5 L 0.75 1.5 C 0.336 1.5 0 1.164 0 0.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      color: "var(--patch-color-text-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 1.500,
    viewBox: "0 0 10 1.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 7.25,
      width: 10,
      height: 1.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.75 C 0 0.336 0.336 0 0.75 0 L 9.25 0 C 9.664 0 10 0.336 10 0.75 C 10 1.164 9.664 1.5 9.25 1.5 L 0.75 1.5 C 0.336 1.5 0 1.164 0 0.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: size=32
    "size=32": __body0,
    // figma: size=24
    "size=24": __body1,
    // figma: size=16
    "size=16": __body2
  };
  return (__impls[__vkey_IconMinus2(props)] ?? __body2)();
}

// figma node: 5193:31938 iOS / Forms / Checkbox (6 variants)
const __venc_IOSFormsCheckbox2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IOSFormsCheckbox2 = p => "condition=" + __venc_IOSFormsCheckbox2(p.condition) + '|' + "disabled=" + __venc_IOSFormsCheckbox2(p.disabled);
function IOSFormsCheckbox2(_p = {}) {
  const props = {
    ..._p,
    condition: _p.condition ?? "indeterminate",
    disabled: _p.disabled ?? true
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 19,
      borderRadius: 4,
      borderTop: "1px solid var(--patch-form-color-border-primary)",
      borderRight: "1px solid var(--patch-form-color-border-primary)",
      borderBottom: "1px solid var(--patch-form-color-border-primary)",
      borderLeft: "1px solid var(--patch-form-color-border-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      borderRadius: 4,
      backgroundColor: "var(--patch-color-fill-accent-primary)",
      display: "flex",
      flexDirection: "column",
      padding: "2px 1px 2px 1px",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto",
      color: "var(--patch-color-text-on-accent-primary)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCheckmark2, {
    size: "16"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 19,
      borderRadius: 4,
      borderTop: "1px solid var(--patch-form-color-border-secondary)",
      borderRight: "1px solid var(--patch-form-color-border-secondary)",
      borderBottom: "1px solid var(--patch-form-color-border-secondary)",
      borderLeft: "1px solid var(--patch-form-color-border-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      borderRadius: 4,
      backgroundColor: "var(--patch-form-color-fill-secondary)",
      display: "flex",
      flexDirection: "column",
      padding: "2px 1px 2px 1px",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto",
      color: "var(--patch-color-text-on-inverse-surface)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCheckmark2, {
    size: "16"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "var(--patch-form-color-fill-secondary)",
      display: "flex",
      flexDirection: "column",
      padding: "2px 2px 2px 2px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto",
      color: "var(--patch-color-text-on-inverse-surface)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconMinus2, {
    size: "16"
  })));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "var(--patch-color-fill-accent-primary)",
      display: "flex",
      flexDirection: "column",
      padding: "2px 2px 2px 2px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto",
      color: "var(--patch-color-text-on-accent-primary)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconMinus2, {
    size: "16"
  })));
  const __impls = {
    // figma: Condition=Unselected, Disabled?=No
    "condition=unselected|disabled=false": __body0,
    // figma: Condition=Selected, Disabled?=No
    "condition=selected|disabled=false": __body1,
    // figma: Condition=Unselected, Disabled?=Yes
    "condition=unselected|disabled=true": __body2,
    // figma: Condition=Selected, Disabled?=Yes
    "condition=selected|disabled=true": __body3,
    // figma: Condition=Indeterminate, Disabled?=Yes
    "condition=indeterminate|disabled=true": __body4,
    // figma: Condition=Indeterminate, Disabled?=No
    "condition=indeterminate|disabled=false": __body5
  };
  return (__impls[__vkey_IOSFormsCheckbox2(props)] ?? __body4)();
}

// figma node: 5193:37368 iOS / Forms / Radio Button (4 variants)
const __venc_IOSFormsRadioButton2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IOSFormsRadioButton2 = p => "selected=" + __venc_IOSFormsRadioButton2(p.selected) + '|' + "disabled=" + __venc_IOSFormsRadioButton2(p.disabled);
function IOSFormsRadioButton2(_p = {}) {
  const props = {
    ..._p,
    selected: _p.selected ?? true,
    disabled: _p.disabled ?? true
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 19,
      borderRadius: 9999,
      borderTop: "1px solid var(--patch-form-color-border-primary)",
      borderRight: "1px solid var(--patch-form-color-border-primary)",
      borderBottom: "1px solid var(--patch-form-color-border-primary)",
      borderLeft: "1px solid var(--patch-form-color-border-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-accent-primary)",
      display: "flex",
      flexDirection: "column",
      padding: "2px 1px 2px 1px",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto",
      color: "var(--patch-color-text-on-accent-primary)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCheckmark2, {
    size: "16"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 19,
      borderRadius: 9999,
      borderTop: "1px solid var(--patch-form-color-border-secondary)",
      borderRight: "1px solid var(--patch-form-color-border-secondary)",
      borderBottom: "1px solid var(--patch-form-color-border-secondary)",
      borderLeft: "1px solid var(--patch-form-color-border-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      borderRadius: 9999,
      backgroundColor: "var(--patch-form-color-fill-secondary)",
      display: "flex",
      flexDirection: "column",
      padding: "2px 1px 2px 1px",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto",
      color: "var(--patch-color-text-on-inverse-surface)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCheckmark2, {
    size: "16"
  })));
  const __impls = {
    // figma: Selected?=No, Disabled?=No
    "selected=false|disabled=false": __body0,
    // figma: Selected?=Yes, Disabled?=No
    "selected=true|disabled=false": __body1,
    // figma: Selected?=No, Disabled?=Yes
    "selected=false|disabled=true": __body2,
    // figma: Selected?=Yes, Disabled?=Yes
    "selected=true|disabled=true": __body3
  };
  return (__impls[__vkey_IOSFormsRadioButton2(props)] ?? __body3)();
}

// figma node: 5698:997 icon/info (3 variants)
const __venc_IconInfo = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconInfo = p => "size=" + __venc_IconInfo(p.size);
function IconInfo(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "16"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      position: "relative",
      color: "var(--patch-color-text-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 26,
    height: 26,
    viewBox: "0 0 26 26",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 26,
      height: 26
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13 10 C 13.552 10 14 10.448 14 11 L 14 18.5 L 16.25 18.5 C 16.664 18.5 17 18.836 17 19.25 C 17 19.664 16.664 20 16.25 20 L 9.75 20 C 9.336 20 9 19.664 9 19.25 C 9 18.836 9.336 18.5 9.75 18.5 L 12 18.5 L 12 11.5 L 9.75 11.5 C 9.336 11.5 9 11.164 9 10.75 C 9 10.336 9.336 10 9.75 10 L 13 10 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13 5 C 13.828 5 14.5 5.672 14.5 6.5 C 14.5 7.328 13.828 8 13 8 C 12.172 8 11.5 7.328 11.5 6.5 C 11.5 5.672 12.172 5 13 5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13 0 C 20.18 0 26 5.82 26 13 C 26 20.18 20.18 26 13 26 C 5.82 26 0 20.18 0 13 C 0 5.82 5.82 0 13 0 Z M 13 2 C 6.925 2 2 6.925 2 13 C 2 19.075 6.925 24 13 24 C 19.075 24 24 19.075 24 13 C 24 6.925 19.075 2 13 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--patch-color-text-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 8 C 10.414 8 10.75 8.336 10.75 8.75 L 10.75 14 L 12.25 14 C 12.526 14 12.75 14.224 12.75 14.5 C 12.75 14.776 12.526 15 12.25 15 L 7.75 15 C 7.474 15 7.25 14.776 7.25 14.5 C 7.25 14.224 7.474 14 7.75 14 L 9.25 14 L 9.25 9 L 7.75 9 C 7.474 9 7.25 8.776 7.25 8.5 C 7.25 8.224 7.474 8 7.75 8 L 10 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10 4 C 10.552 4 11 4.448 11 5 C 11 5.552 10.552 6 10 6 C 9.448 6 9 5.552 9 5 C 9 4.448 9.448 4 10 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 C 0 4.477 4.477 0 10 0 Z M 10 1.5 C 5.306 1.5 1.5 5.306 1.5 10 C 1.5 14.694 5.306 18.5 10 18.5 C 14.694 18.5 18.5 14.694 18.5 10 C 18.5 5.306 14.694 1.5 10 1.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      color: "var(--patch-color-text-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 6 C 7.414 6 7.75 6.336 7.75 6.75 L 7.75 9.5 L 8.5 9.5 C 8.776 9.5 9 9.724 9 10 C 9 10.276 8.776 10.5 8.5 10.5 L 5.5 10.5 C 5.224 10.5 5 10.276 5 10 C 5 9.724 5.224 9.5 5.5 9.5 L 6.25 9.5 L 6.25 7 L 5.5 7 C 5.224 7 5 6.776 5 6.5 C 5 6.224 5.224 6 5.5 6 L 7 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 7 3 C 7.552 3 8 3.448 8 4 C 8 4.552 7.552 5 7 5 C 6.448 5 6 4.552 6 4 C 6 3.448 6.448 3 7 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 7 0 C 10.866 0 14 3.134 14 7 C 14 10.866 10.866 14 7 14 C 3.134 14 0 10.866 0 7 C 0 3.134 3.134 0 7 0 Z M 7 1.5 C 3.962 1.5 1.5 3.962 1.5 7 C 1.5 10.038 3.962 12.5 7 12.5 C 10.038 12.5 12.5 10.038 12.5 7 C 12.5 3.962 10.038 1.5 7 1.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: size=32
    "size=32": __body0,
    // figma: size=24
    "size=24": __body1,
    // figma: size=16
    "size=16": __body2
  };
  return (__impls[__vkey_IconInfo(props)] ?? __body2)();
}

// figma node: 6060:1444 .iOS / Lists / Blocks / Primary Content
function IOSListsBlocksPrimaryContent(_p = {}) {
  const props = {
    ..._p,
    text: _p.text ?? "{Value}",
    infoIcon: _p.infoIcon ?? true
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 78,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "24px",
      color: "var(--patch-color-text-primary)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.text), props.infoIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInfo, {
    size: "24",
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    }
  }))));
}

// figma node: 5193:37412 .iOS / Lists / Blocks / Secondary Content
function IOSListsBlocksSecondaryContent(_p = {}) {
  const props = {
    ..._p,
    text: _p.text ?? "{Secondary text}"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "20px",
      color: "var(--patch-color-text-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text));
}

// figma node: 5193:37388 iOS / Forms / Switch (4 variants)
const __venc_IOSFormsSwitch2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IOSFormsSwitch2 = p => "selected=" + __venc_IOSFormsSwitch2(p.selected) + '|' + "disabled=" + __venc_IOSFormsSwitch2(p.disabled);
function IOSFormsSwitch2(_p = {}) {
  const props = {
    ..._p,
    selected: _p.selected ?? true,
    disabled: _p.disabled ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 51,
      height: 31,
      overflow: "hidden",
      borderRadius: 9999,
      borderTop: "2px solid var(--patch-color-border-disabled)",
      borderRight: "2px solid var(--patch-color-border-disabled)",
      borderBottom: "2px solid var(--patch-color-border-disabled)",
      borderLeft: "2px solid var(--patch-color-border-disabled)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 31,
    viewBox: "0 0 31 31",
    fill: "none",
    style: {
      position: "relative",
      width: 31,
      overflow: "hidden",
      borderRadius: 9999,
      borderTop: "2px solid var(--patch-color-border-disabled)",
      borderRight: "2px solid var(--patch-color-border-disabled)",
      borderBottom: "2px solid var(--patch-color-border-disabled)",
      borderLeft: "2px solid var(--patch-color-border-disabled)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 15.5 C 0 6.94 6.94 0 15.5 0 C 24.06 0 31 6.94 31 15.5 C 31 24.06 24.06 31 15.5 31 C 6.94 31 0 24.06 0 15.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15.5 31 L 15.5 29 C 8.044 29 2 22.956 2 15.5 L 0 15.5 L -2 15.5 C -2 25.165 5.835 33 15.5 33 L 15.5 31 Z M 31 15.5 L 29 15.5 C 29 22.956 22.956 29 15.5 29 L 15.5 31 L 15.5 33 C 25.165 33 33 25.165 33 15.5 L 31 15.5 Z M 15.5 0 L 15.5 2 C 22.956 2 29 8.044 29 15.5 L 31 15.5 L 33 15.5 C 33 5.835 25.165 -2 15.5 -2 L 15.5 0 Z M 15.5 0 L 15.5 -2 C 5.835 -2 -2 5.835 -2 15.5 L 0 15.5 L 2 15.5 C 2 8.044 8.044 2 15.5 2 L 15.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 51,
      height: 31,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-form-color-fill-tertiary)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      justifyContent: "flex-end",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 27,
    viewBox: "0 0 27 27",
    fill: "none",
    style: {
      position: "relative",
      width: 27,
      overflow: "hidden",
      borderRadius: 9999,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "var(--patch-color-surface-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 13.5 C 0 6.044 6.044 0 13.5 0 C 20.956 0 27 6.044 27 13.5 C 27 20.956 20.956 27 13.5 27 C 6.044 27 0 20.956 0 13.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 51,
      height: 31,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-form-color-fill-secondary)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 27,
    viewBox: "0 0 27 27",
    fill: "none",
    style: {
      position: "relative",
      width: 27,
      overflow: "hidden",
      borderRadius: 9999,
      flexShrink: 0,
      alignSelf: "stretch",
      filter: "drop-shadow(0px 0px 1px rgba(0,0,0,0.04)) drop-shadow(0px 3px 8px rgba(0,0,0,0.15)) drop-shadow(0px 3px 1px rgba(0,0,0,0.06))",
      color: "var(--patch-color-surface-fixed)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 13.5 C 0 6.044 6.044 0 13.5 0 C 20.956 0 27 6.044 27 13.5 C 27 20.956 20.956 27 13.5 27 C 6.044 27 0 20.956 0 13.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 51,
      height: 31,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-accent-primary)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      justifyContent: "flex-end",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 27,
    viewBox: "0 0 27 27",
    fill: "none",
    style: {
      position: "relative",
      width: 27,
      overflow: "hidden",
      borderRadius: 9999,
      flexShrink: 0,
      alignSelf: "stretch",
      filter: "drop-shadow(0px 0px 1px rgba(0,0,0,0.04)) drop-shadow(0px 3px 8px rgba(0,0,0,0.15)) drop-shadow(0px 3px 1px rgba(0,0,0,0.06))",
      color: "var(--patch-color-surface-fixed)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 13.5 C 0 6.044 6.044 0 13.5 0 C 20.956 0 27 6.044 27 13.5 C 27 20.956 20.956 27 13.5 27 C 6.044 27 0 20.956 0 13.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Selected?=No, Disabled?=Yes
    "selected=false|disabled=true": __body0,
    // figma: Selected?=Yes, Disabled?=Yes
    "selected=true|disabled=true": __body1,
    // figma: Selected?=No, Disabled?=No
    "selected=false|disabled=false": __body2,
    // figma: Selected?=Yes, Disabled?=No
    "selected=true|disabled=false": __body3
  };
  return (__impls[__vkey_IOSFormsSwitch2(props)] ?? __body3)();
}

// figma node: 5193:14291 icon/chevron-right (3 variants)
const __venc_IconChevronRight6 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconChevronRight6 = p => "size=" + __venc_IconChevronRight6(p.size);
function IconChevronRight6(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "16"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      position: "relative",
      color: "var(--patch-color-text-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 18,
    viewBox: "0 0 10 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 12,
      top: 7,
      width: 10,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.293 17.707 C -0.098 17.317 -0.098 16.683 0.293 16.293 L 7.586 9 L 0.293 1.707 C -0.098 1.317 -0.098 0.683 0.293 0.293 C 0.683 -0.098 1.317 -0.098 1.707 0.293 L 9.707 8.293 C 9.895 8.48 10 8.735 10 9 C 10 9.265 9.895 9.52 9.707 9.707 L 1.707 17.707 C 1.317 18.098 0.683 18.098 0.293 17.707 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--patch-color-text-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 14,
    viewBox: "0 0 8 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 9,
      top: 5,
      width: 8,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.209 0.23 C 0.496 -0.068 0.971 -0.078 1.27 0.209 L 7.77 6.459 C 7.917 6.601 8 6.796 8 7 C 8 7.204 7.917 7.399 7.77 7.541 L 1.27 13.791 C 0.971 14.078 0.496 14.068 0.209 13.77 C -0.078 13.471 -0.068 12.996 0.23 12.709 L 6.168 7 L 0.23 1.291 C -0.068 1.004 -0.078 0.529 0.209 0.23 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      color: "var(--patch-color-text-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 10,
    viewBox: "0 0 6 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 2.984,
      width: 6,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.205 9.765 C -0.08 9.464 -0.066 8.989 0.235 8.705 L 4.158 5 L 0.235 1.295 C -0.066 1.011 -0.08 0.536 0.205 0.235 C 0.489 -0.066 0.964 -0.08 1.265 0.205 L 5.765 4.455 C 5.915 4.596 6 4.794 6 5 C 6 5.206 5.915 5.404 5.765 5.545 L 1.265 9.795 C 0.964 10.08 0.489 10.066 0.205 9.765 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: size=32
    "size=32": __body0,
    // figma: size=24
    "size=24": __body1,
    // figma: size=16
    "size=16": __body2
  };
  return (__impls[__vkey_IconChevronRight6(props)] ?? __body2)();
}

// figma node: 5193:37397 .iOS / Lists / Blocks / Trail Edge (5 variants)
const __venc_IOSListsBlocksTrailEdge2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IOSListsBlocksTrailEdge2 = p => "options=" + __venc_IOSListsBlocksTrailEdge2(p.options);
function IOSListsBlocksTrailEdge2(_p = {}) {
  const props = {
    ..._p,
    options: _p.options ?? "checkbox",
    icon: _p.icon ?? false,
    value: _p.value ?? "{Label}",
    label: _p.label ?? true,
    drillIn: _p.drillIn ?? true,
    checkmark: _p.checkmark ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(IOSFormsCheckbox2, {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    condition: "unselected",
    disabled: false
  }));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(IOSFormsSwitch2, {
    style: {
      position: "relative",
      width: 51,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    selected: false,
    disabled: false
  }));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      padding: "4px 4px 4px 4px",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-4) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-4) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 63,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--patch-color-text-accent-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "{Button}")))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      justifyContent: "flex-end",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "24px",
      color: "var(--patch-color-text-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--patch-color-text-secondary)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), props.checkmark && /*#__PURE__*/React.createElement(IconCheckmark2, {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--patch-color-text-accent-primary)"
    },
    size: "24"
  }), props.drillIn && /*#__PURE__*/React.createElement(IconChevronRight6, {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--patch-color-text-secondary)"
    },
    size: "24"
  }));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      justifyContent: "flex-end",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "24px",
      color: "var(--patch-color-text-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--patch-color-text-secondary)"
    }
  }, props.condition ?? /*#__PURE__*/React.createElement(IconChevronRight6, {
    size: "24"
  })));
  const __impls = {
    // figma: Options=Checkbox
    "options=checkbox": __body0,
    // figma: Options=Switch
    "options=switch": __body1,
    // figma: Options=Flat button
    "options=flat button": __body2,
    // figma: Options=Details
    "options=details": __body3,
    // figma: Options=Disclosure
    "options=disclosure": __body4
  };
  return (__impls[__vkey_IOSListsBlocksTrailEdge2(props)] ?? __body0)();
}

// figma node: 5193:37550 iOS / Lists / Header Row (6 variants)
const __venc_IOSListsHeaderRow = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IOSListsHeaderRow = p => "type=" + __venc_IOSListsHeaderRow(p.type) + '|' + "width=" + __venc_IOSListsHeaderRow(p.width);
function IOSListsHeaderRow(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "default",
    width: _p.width ?? "full",
    text: _p.text ?? "{Header text}"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 8px 16px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "var(--patch-color-text-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      padding: "0px 32px 8px 32px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-32) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-32) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "var(--patch-color-text-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 8px 16px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--patch-color-text-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      padding: "0px 32px 8px 32px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-32) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-32) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--patch-color-text-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 8px 16px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Euclid Circular B\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 20,
      lineHeight: "24px",
      color: "var(--patch-color-text-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      padding: "0px 32px 8px 32px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-32) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-32) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Euclid Circular B\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 20,
      lineHeight: "24px",
      color: "var(--patch-color-text-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text));
  const __impls = {
    // figma: Type=Default, Width=Full
    "type=default|width=full": __body0,
    // figma: Type=Default, Width=Inset
    "type=default|width=inset": __body1,
    // figma: Type=Plain, Width=Full
    "type=plain|width=full": __body2,
    // figma: Type=Plain, Width=Inset
    "type=plain|width=inset": __body3,
    // figma: Type=Prominent, Width=Full
    "type=prominent|width=full": __body4,
    // figma: Type=Prominent, Width=Inset
    "type=prominent|width=inset": __body5
  };
  return (__impls[__vkey_IOSListsHeaderRow(props)] ?? __body0)();
}

// figma node: 5193:37377 .iOS / Lists / Blocks / Lead Edge (3 variants)
const __venc_IOSListsBlocksLeadEdge2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IOSListsBlocksLeadEdge2 = p => "options=" + __venc_IOSListsBlocksLeadEdge2(p.options);
function IOSListsBlocksLeadEdge2(_p = {}) {
  const props = {
    ..._p,
    options: _p.options ?? "checkbox"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IOSFormsCheckbox2, {
    condition: "unselected",
    disabled: false
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IOSFormsRadioButton2, {
    selected: false,
    disabled: false
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.iconOrSwatch ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })));
  const __impls = {
    // figma: Options=Checkbox
    "options=checkbox": __body0,
    // figma: Options=Radio button
    "options=radio button": __body1,
    // figma: Options=Icon or swatch
    "options=icon or swatch": __body2
  };
  return (__impls[__vkey_IOSListsBlocksLeadEdge2(props)] ?? __body0)();
}

// figma node: 5442:6017 .iOS / Lists / Blocks / Trail Edge (5 variants)
const __venc_IOSListsBlocksTrailEdge3 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IOSListsBlocksTrailEdge3 = p => "options=" + __venc_IOSListsBlocksTrailEdge3(p.options);
function IOSListsBlocksTrailEdge3(_p = {}) {
  const props = {
    ..._p,
    options: _p.options ?? "checkbox",
    icon: _p.icon ?? false,
    value: _p.value ?? "{Label}",
    label: _p.label ?? true,
    drillIn: _p.drillIn ?? true,
    checkmark: _p.checkmark ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(IOSFormsCheckbox2, {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    condition: "unselected",
    disabled: false
  }));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(IOSFormsSwitch2, {
    style: {
      position: "relative",
      width: 51,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    selected: false,
    disabled: false
  }));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      padding: "4px 4px 4px 4px",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-4) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-4) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 63,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--patch-color-text-accent-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "{Button}")))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      justifyContent: "flex-end",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "24px",
      color: "var(--patch-color-text-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--patch-color-text-secondary)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), props.checkmark && /*#__PURE__*/React.createElement(IconCheckmark2, {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--patch-color-text-accent-primary)"
    },
    size: "24"
  }), props.drillIn && /*#__PURE__*/React.createElement(IconChevronRight6, {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--patch-color-text-secondary)"
    },
    size: "24"
  }));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      justifyContent: "flex-end",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "24px",
      color: "var(--patch-color-text-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--patch-color-text-secondary)"
    }
  }, props.condition ?? /*#__PURE__*/React.createElement(IconChevronRight6, {
    size: "24"
  })));
  const __impls = {
    // figma: Options=Checkbox
    "options=checkbox": __body0,
    // figma: Options=Switch
    "options=switch": __body1,
    // figma: Options=Flat button
    "options=flat button": __body2,
    // figma: Options=Details
    "options=details": __body3,
    // figma: Options=Disclosure
    "options=disclosure": __body4
  };
  return (__impls[__vkey_IOSListsBlocksTrailEdge3(props)] ?? __body0)();
}

// figma node: 6060:1448 iOS / Lists / Row (4 variants)
const __venc_IOSListsRow = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IOSListsRow = p => "width=" + __venc_IOSListsRow(p.width) + '|' + "height=" + __venc_IOSListsRow(p.height);
function IOSListsRow(_p = {}) {
  const props = {
    ..._p,
    lead: _p.lead ?? true,
    width: _p.width ?? "full",
    height: _p.height ?? "regular",
    trail: _p.trail ?? true,
    secondaryContent: _p.secondaryContent ?? true
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      minHeight: 44,
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 10,
      backgroundColor: "var(--patch-color-surface-primary-variant)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-16) * 1px)",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IOSListsBlocksLeadEdge2, {
    options: "icon or swatch"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "4px 16px 4px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(IOSListsBlocksPrimaryContent, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    infoIcon: false
  }), props.trail && /*#__PURE__*/React.createElement(IOSListsBlocksTrailEdge3, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    options: "details"
  }))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      minHeight: 44,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-16) * 1px)",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IOSListsBlocksLeadEdge2, {
    options: "icon or swatch"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "4px 16px 4px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(IOSListsBlocksPrimaryContent, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    infoIcon: false
  }), props.trail && /*#__PURE__*/React.createElement(IOSListsBlocksTrailEdge3, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    options: "details"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      minHeight: 60,
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 10,
      backgroundColor: "var(--patch-color-surface-primary-variant)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-16) * 1px)",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IOSListsBlocksLeadEdge2, {
    options: "icon or swatch"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "8px 16px 8px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(IOSListsBlocksPrimaryContent, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    infoIcon: false
  }), props.secondaryContent && /*#__PURE__*/React.createElement(IOSListsBlocksSecondaryContent, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  })), props.trail && /*#__PURE__*/React.createElement(IOSListsBlocksTrailEdge3, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    options: "details"
  }))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      minHeight: 60,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-16) * 1px)",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IOSListsBlocksLeadEdge2, {
    options: "icon or swatch"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "8px 16px 8px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(IOSListsBlocksPrimaryContent, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    infoIcon: false
  }), props.secondaryContent && /*#__PURE__*/React.createElement(IOSListsBlocksSecondaryContent, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  })), props.trail && /*#__PURE__*/React.createElement(IOSListsBlocksTrailEdge3, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    options: "details"
  })));
  const __impls = {
    // figma: Width=Inset, Height=Regular
    "width=inset|height=regular": __body0,
    // figma: Width=Full, Height=Regular
    "width=full|height=regular": __body1,
    // figma: Width=Inset, Height=Tall
    "width=inset|height=tall": __body2,
    // figma: Width=Full, Height=Tall
    "width=full|height=tall": __body3
  };
  return (__impls[__vkey_IOSListsRow(props)] ?? __body1)();
}

// figma node: 5193:16361 icon/chevron-down (3 variants)
const __venc_IconChevronDown5 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconChevronDown5 = p => "size=" + __venc_IconChevronDown5(p.size);
function IconChevronDown5(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "16"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      position: "relative",
      color: "var(--patch-color-text-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 10,
    viewBox: "0 0 18 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 12,
      width: 18,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.293 0.293 C 0.683 -0.098 1.317 -0.098 1.707 0.293 L 9 7.586 L 16.293 0.293 C 16.683 -0.098 17.317 -0.098 17.707 0.293 C 18.098 0.683 18.098 1.317 17.707 1.707 L 9.707 9.707 C 9.52 9.895 9.265 10 9 10 C 8.735 10 8.48 9.895 8.293 9.707 L 0.293 1.707 C -0.098 1.317 -0.098 0.683 0.293 0.293 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--patch-color-text-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 8,
    viewBox: "0 0 14 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 9,
      width: 14,
      height: 8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.23 0.209 C 0.529 -0.078 1.004 -0.068 1.291 0.23 L 7 6.168 L 12.709 0.23 C 12.996 -0.068 13.471 -0.078 13.77 0.209 C 14.068 0.496 14.078 0.971 13.791 1.27 L 7.541 7.77 C 7.399 7.917 7.204 8 7 8 C 6.796 8 6.601 7.917 6.459 7.77 L 0.209 1.27 C -0.078 0.971 -0.068 0.496 0.23 0.209 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      color: "var(--patch-color-text-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 6,
    viewBox: "0 0 10 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 6,
      width: 10,
      height: 6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.235 0.205 C 0.536 -0.08 1.011 -0.066 1.295 0.235 L 5 4.158 L 8.705 0.235 C 8.989 -0.066 9.464 -0.08 9.765 0.205 C 10.066 0.489 10.08 0.964 9.795 1.265 L 5.545 5.765 C 5.404 5.915 5.206 6 5 6 C 4.794 6 4.596 5.915 4.455 5.765 L 0.205 1.265 C -0.08 0.964 -0.066 0.489 0.235 0.205 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: size=32
    "size=32": __body0,
    // figma: size=24
    "size=24": __body1,
    // figma: size=16
    "size=16": __body2
  };
  return (__impls[__vkey_IconChevronDown5(props)] ?? __body2)();
}

// figma node: 5496:4093 Swatches / Generic (28 variants)
const __venc_SwatchesGeneric = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_SwatchesGeneric = p => "hue=" + __venc_SwatchesGeneric(p.hue);
function SwatchesGeneric(_p = {}) {
  const props = {
    ..._p,
    hue: _p.hue ?? "black"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      backgroundColor: "rgb(204,204,204)"
    }
  }));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      backgroundColor: "rgb(226,73,64)"
    }
  }));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      backgroundColor: "rgb(104,173,91)"
    }
  }));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      backgroundColor: "rgb(73,148,236)"
    }
  }));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      backgroundColor: "rgb(0,0,0)"
    }
  }));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      backgroundColor: "rgb(255,255,255)"
    }
  }));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      backgroundColor: "rgb(227,157,155)"
    }
  }));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      backgroundColor: "rgb(198,150,214)"
    }
  }));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      backgroundColor: "rgb(159,168,215)"
    }
  }));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      backgroundColor: "rgb(156,200,244)"
    }
  }));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      backgroundColor: "rgb(175,213,171)"
    }
  }));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      backgroundColor: "rgb(252,245,167)"
    }
  }));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      backgroundColor: "rgb(247,206,139)"
    }
  }));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      backgroundColor: "rgb(141,49,171)"
    }
  }));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      backgroundColor: "rgb(67,80,175)"
    }
  }));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      backgroundColor: "rgb(252,237,97)"
    }
  }));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      backgroundColor: "rgb(241,156,56)"
    }
  }));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      backgroundColor: "rgb(153,153,153)"
    }
  }));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      backgroundColor: "rgb(168,45,37)"
    }
  }));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      backgroundColor: "rgb(67,24,134)"
    }
  }));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      backgroundColor: "rgb(29,35,121)"
    }
  }));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      backgroundColor: "rgb(32,70,154)"
    }
  }));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      backgroundColor: "rgb(48,93,41)"
    }
  }));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      backgroundColor: "rgb(241,194,80)"
    }
  }));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      backgroundColor: "rgb(213,91,39)"
    }
  }));
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      backgroundColor: "rgb(102,102,102)"
    }
  }));
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      backgroundColor: "rgb(134,89,31)"
    }
  }));
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      backgroundColor: "rgb(51,51,51)"
    }
  }));
  const __impls = {
    // figma: Hue=Gray Lt
    "hue=gray lt": __body0,
    // figma: Hue=Red
    "hue=red": __body1,
    // figma: Hue=Green
    "hue=green": __body2,
    // figma: Hue=Blue
    "hue=blue": __body3,
    // figma: Hue=Black
    "hue=black": __body4,
    // figma: Hue=White
    "hue=white": __body5,
    // figma: Hue=Red Lt
    "hue=red lt": __body6,
    // figma: Hue=Purple Lt
    "hue=purple lt": __body7,
    // figma: Hue=Navy Lt
    "hue=navy lt": __body8,
    // figma: Hue=Blue Lt
    "hue=blue lt": __body9,
    // figma: Hue=Green Lt
    "hue=green lt": __body10,
    // figma: Hue=Yellow Lt
    "hue=yellow lt": __body11,
    // figma: Hue=Orange Lt
    "hue=orange lt": __body12,
    // figma: Hue=Purple
    "hue=purple": __body13,
    // figma: Hue=Navy
    "hue=navy": __body14,
    // figma: Hue=Yellow
    "hue=yellow": __body15,
    // figma: Hue=Orange
    "hue=orange": __body16,
    // figma: Hue=Gray
    "hue=gray": __body17,
    // figma: Hue=Red Dk
    "hue=red dk": __body18,
    // figma: Hue=Purple Dk
    "hue=purple dk": __body19,
    // figma: Hue=Navy Dk
    "hue=navy dk": __body20,
    // figma: Hue=Blue Dk
    "hue=blue dk": __body21,
    // figma: Hue=Green Dk
    "hue=green dk": __body22,
    // figma: Hue=Yellow Dk
    "hue=yellow dk": __body23,
    // figma: Hue=Orange Dk
    "hue=orange dk": __body24,
    // figma: Hue=Gray Dk
    "hue=gray dk": __body25,
    // figma: Hue=Brown
    "hue=brown": __body26,
    // figma: Hue=Gray Dk Plus
    "hue=gray dk plus": __body27
  };
  return (__impls[__vkey_SwatchesGeneric(props)] ?? __body4)();
}

// figma node: 1400:4420 .text_block
function TextBlock(_p = {}) {
  const props = {
    ..._p,
    content: _p.content ?? true,
    subheading: _p.subheading ?? true,
    sectionHeading: _p.sectionHeading ?? true
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 298,
      borderTop: "1px solid rgb(173,173,173)",
      borderRight: "1px solid rgb(173,173,173)",
      borderBottom: "1px solid rgb(173,173,173)",
      borderLeft: "1px solid rgb(173,173,173)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 0px 16px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.sectionHeading && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Euclid Circular B\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "24px",
      color: "rgb(43,43,43)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "SectionHeading"), props.subheading && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(43,43,43)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Subheading"), props.content && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(43,43,43)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "• ", "Content"));
}

// figma node: 3435:2590 List
function List(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1576,
      height: 1600,
      overflow: "hidden",
      backgroundColor: "rgb(245,245,245)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 1064,
      top: 888,
      width: 119,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Row, full and inset widths"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 1064,
      top: 1229,
      width: 260,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Grouped Row (full width), with Header and Footer Rows"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 552,
      top: 1257,
      width: 125,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "List Item, with Header Row"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 40,
      top: 968,
      width: 292,
      height: 80,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)",
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, "👉", "\n", "These ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, "example"), "s demonstrate the flexibility of the available options for dividers, lead, and trail slots – do not copy."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 1064,
      top: 1489,
      width: 121,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Grouped Row, inset width"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1064,
      top: 736,
      width: 375,
      boxShadow: "inset 0 0 0 1px var(--patch-color-border-secondary)",
      display: "flex",
      flexDirection: "column",
      padding: "16px 0px 16px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      paddingTop: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-16) * 1px)"
    }
  }, /*#__PURE__*/React.createElement(IOSListsRow, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    lead: true,
    width: "full",
    height: "regular"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 60,
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 10,
      backgroundColor: "var(--patch-color-surface-primary-variant)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-16) * 1px)",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      borderTop: "1px solid var(--patch-color-border-secondary)",
      borderRight: "1px solid var(--patch-color-border-secondary)",
      borderBottom: "1px solid var(--patch-color-border-secondary)",
      borderLeft: "1px solid var(--patch-color-border-secondary)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      height: 18,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(SwatchesGeneric, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    },
    hue: "gray lt"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 60,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "8px 16px 8px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(IOSListsBlocksPrimaryContent, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    infoIcon: false
  }), /*#__PURE__*/React.createElement(IOSListsBlocksSecondaryContent, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 85,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      justifyContent: "flex-end",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "24px",
      color: "var(--patch-color-text-secondary)",
      flexShrink: 0
    }
  }, "{Label}"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.348,
    height: 20.348,
    viewBox: "0 0 20.348 20.348",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.823,
      top: 1.829,
      width: 20.348,
      height: 20.348,
      color: "var(--patch-color-text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.947 1.593 C 2.072 1.496 2.208 1.413 2.353 1.347 C 2.667 0.654 3.366 0.171 4.177 0.171 L 16.177 0.171 C 16.967 0.171 17.65 0.629 17.975 1.294 C 18.145 1.357 18.304 1.442 18.449 1.547 L 19.995 0.001 L 20.348 0.354 L 18.815 1.887 C 18.947 2.044 19.054 2.221 19.133 2.414 C 19.755 2.753 20.177 3.413 20.177 4.171 L 20.177 16.171 C 20.177 16.929 19.755 17.588 19.133 17.928 C 19.054 18.122 18.945 18.301 18.812 18.459 L 20.347 19.995 L 19.994 20.348 L 18.444 18.798 C 18.301 18.901 18.143 18.985 17.975 19.047 C 17.65 19.712 16.967 20.171 16.177 20.171 L 4.177 20.171 C 3.366 20.171 2.667 19.688 2.353 18.994 C 2.209 18.929 2.074 18.847 1.95 18.751 L 0.354 20.347 L 0 19.994 L 1.597 18.397 C 1.501 18.274 1.419 18.138 1.353 17.994 C 0.66 17.68 0.177 16.982 0.177 16.171 L 0.177 4.171 C 0.177 3.36 0.66 2.661 1.353 2.347 C 1.418 2.204 1.499 2.07 1.594 1.947 L 0.001 0.354 L 0.354 0 L 1.947 1.593 Z M 2.677 3.03 L 2.677 3.556 C 2.759 3.463 2.843 3.371 2.928 3.281 L 2.677 3.03 Z M 3.282 2.928 L 3.025 2.671 L 3.562 2.671 C 3.467 2.755 3.374 2.84 3.282 2.928 Z M 3.282 3.635 C 3.069 3.86 2.867 4.095 2.677 4.339 L 2.677 9.921 L 9.567 9.921 L 3.282 3.635 Z M 9.923 9.569 L 9.923 2.671 L 4.345 2.671 C 4.099 2.863 3.862 3.066 3.636 3.281 L 9.923 9.569 Z M 10.423 10.776 L 10.423 17.671 L 16.008 17.671 C 16.253 17.48 16.487 17.279 16.712 17.066 L 10.423 10.776 Z M 17.066 16.712 C 17.281 16.486 17.485 16.249 17.677 16.002 L 17.677 10.421 L 10.774 10.421 L 17.066 16.712 Z M 17.065 17.42 C 16.976 17.505 16.884 17.589 16.791 17.671 L 17.317 17.671 L 17.065 17.42 Z M 17.677 17.324 L 17.419 17.066 C 17.507 16.974 17.593 16.881 17.677 16.785 L 17.677 17.324 Z M 3.562 17.671 L 3.03 17.671 L 3.285 17.416 C 3.376 17.503 3.468 17.588 3.562 17.671 Z M 2.677 17.317 L 2.931 17.063 C 2.845 16.972 2.76 16.879 2.677 16.785 L 2.677 17.317 Z M 4.345 17.671 L 9.923 17.671 L 9.923 10.779 L 3.638 17.063 C 3.864 17.277 4.1 17.48 4.345 17.671 Z M 3.285 16.709 L 9.574 10.421 L 2.677 10.421 L 2.677 16.002 C 2.868 16.248 3.071 16.484 3.285 16.709 Z M 17.677 9.921 L 17.677 4.339 C 17.486 4.094 17.283 3.858 17.069 3.633 L 10.781 9.921 L 17.677 9.921 Z M 10.423 9.572 L 16.716 3.279 C 16.49 3.065 16.254 2.862 16.008 2.671 L 10.423 2.671 L 10.423 9.572 Z M 17.677 3.556 C 17.594 3.462 17.509 3.37 17.423 3.279 L 17.677 3.026 L 17.677 3.556 Z M 17.07 2.926 L 17.325 2.671 L 16.791 2.671 C 16.886 2.754 16.978 2.839 17.07 2.926 Z M 13.226 19.171 L 10.423 19.171 L 10.423 19.668 C 11.401 19.643 12.343 19.47 13.226 19.171 Z M 9.923 19.171 L 7.127 19.171 C 8.008 19.469 8.947 19.642 9.923 19.667 L 9.923 19.171 Z M 14.424 18.671 C 14.726 18.519 15.019 18.352 15.302 18.171 L 10.423 18.171 L 10.423 18.671 L 14.424 18.671 Z M 9.923 18.671 L 9.923 18.171 L 5.051 18.171 C 5.334 18.352 5.627 18.519 5.929 18.671 L 9.923 18.671 Z M 18.177 10.421 L 18.177 15.296 C 18.401 14.947 18.603 14.581 18.781 14.202 L 18.781 10.421 L 18.177 10.421 Z M 18.781 9.921 L 18.781 6.139 C 18.603 5.76 18.401 5.395 18.177 5.045 L 18.177 9.921 L 18.781 9.921 Z M 19.281 10.421 L 19.281 12.892 C 19.516 12.106 19.651 11.277 19.674 10.421 L 19.281 10.421 Z M 19.674 9.921 C 19.651 9.064 19.516 8.236 19.281 7.45 L 19.281 9.921 L 19.674 9.921 Z M 2.177 9.921 L 2.177 5.045 C 1.995 5.328 1.828 5.621 1.677 5.923 L 1.677 9.921 L 2.177 9.921 Z M 1.677 10.421 L 1.677 14.418 C 1.828 14.72 1.995 15.013 2.177 15.296 L 2.177 10.421 L 1.677 10.421 Z M 1.177 9.921 L 1.177 7.121 C 0.878 8.003 0.705 8.944 0.68 9.921 L 1.177 9.921 Z M 0.68 10.421 C 0.705 11.398 0.878 12.338 1.177 13.22 L 1.177 10.421 L 0.68 10.421 Z M 15.302 2.171 C 15.019 1.989 14.726 1.822 14.424 1.671 L 10.423 1.671 L 10.423 2.171 L 15.302 2.171 Z M 9.923 2.171 L 9.923 1.671 L 5.929 1.671 C 5.627 1.822 5.334 1.989 5.051 2.171 L 9.923 2.171 Z M 13.226 1.171 C 12.343 0.871 11.401 0.699 10.423 0.674 L 10.423 1.171 L 13.226 1.171 Z M 9.923 1.171 L 9.923 0.674 C 8.947 0.7 8.008 0.872 7.127 1.171 L 9.923 1.171 Z M 5.813 19.171 L 3.177 19.171 C 3.136 19.171 3.096 19.169 3.055 19.167 C 3.33 19.476 3.731 19.671 4.177 19.671 L 7.046 19.671 C 6.621 19.531 6.21 19.364 5.813 19.171 Z M 19.281 17.186 C 19.527 16.918 19.677 16.562 19.677 16.171 L 19.677 13.302 C 19.563 13.647 19.431 13.985 19.281 14.313 L 19.281 17.171 L 19.281 17.186 Z M 19.677 7.04 L 19.677 4.171 C 19.677 3.779 19.527 3.423 19.281 3.156 L 19.281 3.171 L 19.281 6.029 C 19.431 6.357 19.563 6.694 19.677 7.04 Z M 18.177 2.671 L 18.177 4.17 C 18.394 4.459 18.596 4.76 18.781 5.072 L 18.781 3.171 C 18.781 3.034 18.763 2.901 18.729 2.776 C 18.558 2.708 18.372 2.671 18.177 2.671 Z M 17.677 2.171 C 17.677 2.008 17.651 1.852 17.603 1.705 C 17.499 1.683 17.392 1.671 17.281 1.671 L 15.447 1.671 C 15.698 1.827 15.942 1.994 16.178 2.171 L 17.677 2.171 Z M 4.176 2.171 C 4.411 1.994 4.655 1.827 4.906 1.671 L 3.177 1.671 C 3.025 1.671 2.879 1.693 2.741 1.735 C 2.699 1.873 2.677 2.019 2.677 2.171 L 4.176 2.171 Z M 1.741 2.735 C 1.699 2.873 1.677 3.019 1.677 3.171 L 1.677 4.9 C 1.833 4.649 2 4.405 2.177 4.17 L 2.177 2.671 C 2.025 2.671 1.879 2.693 1.741 2.735 Z M 1.18 3.049 C 0.871 3.324 0.677 3.725 0.677 4.171 L 0.677 7.04 C 0.816 6.615 0.984 6.204 1.177 5.807 L 1.177 3.171 C 1.177 3.13 1.178 3.09 1.18 3.049 Z M 0.677 13.302 L 0.677 16.171 C 0.677 16.617 0.871 17.017 1.18 17.292 C 1.178 17.252 1.177 17.211 1.177 17.171 L 1.177 14.535 C 0.984 14.138 0.816 13.726 0.677 13.302 Z M 2.177 17.671 L 2.177 16.172 C 2 15.936 1.833 15.692 1.677 15.441 L 1.677 17.171 C 1.677 17.322 1.699 17.469 1.741 17.606 C 1.879 17.648 2.025 17.671 2.177 17.671 Z M 2.677 18.171 C 2.677 18.322 2.699 18.469 2.741 18.606 C 2.879 18.648 3.025 18.671 3.177 18.671 L 4.906 18.671 C 4.655 18.515 4.411 18.348 4.176 18.171 L 2.677 18.171 Z M 16.178 18.171 C 15.942 18.348 15.698 18.515 15.447 18.671 L 17.281 18.671 C 17.392 18.671 17.499 18.659 17.603 18.636 C 17.651 18.49 17.677 18.333 17.677 18.171 L 16.178 18.171 Z M 18.177 17.671 C 18.372 17.671 18.558 17.633 18.729 17.566 C 18.763 17.44 18.781 17.307 18.781 17.171 L 18.781 15.269 C 18.596 15.581 18.394 15.883 18.177 16.172 L 18.177 17.671 Z M 3.177 1.171 L 5.813 1.171 C 6.21 0.978 6.621 0.81 7.046 0.671 L 4.177 0.671 C 3.731 0.671 3.33 0.865 3.055 1.174 C 3.096 1.172 3.136 1.171 3.177 1.171 Z M 17.281 19.171 L 14.541 19.171 C 14.144 19.364 13.732 19.531 13.308 19.671 L 16.177 19.671 C 16.621 19.671 17.02 19.478 17.295 19.171 L 17.281 19.171 Z M 16.177 0.671 L 13.308 0.671 C 13.732 0.81 14.144 0.978 14.541 1.171 L 17.281 1.171 L 17.295 1.171 C 17.02 0.864 16.621 0.671 16.177 0.671 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 11,
    viewBox: "0 0 15 11",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 6,
      width: 15,
      height: 11,
      color: "var(--patch-color-text-accent-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.78 0.22 C 15.073 0.513 15.073 0.987 14.78 1.28 L 5.28 10.78 C 5.001 11.06 4.553 11.074 4.256 10.814 L 0.256 7.314 C -0.056 7.042 -0.087 6.568 0.186 6.256 C 0.458 5.944 0.932 5.913 1.244 6.186 L 4.716 9.224 L 13.72 0.22 C 14.013 -0.073 14.487 -0.073 14.78 0.22 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 14,
    viewBox: "0 0 8 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 9,
      top: 5,
      width: 8,
      height: 14,
      color: "var(--patch-color-text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.209 0.23 C 0.496 -0.068 0.971 -0.078 1.27 0.209 L 7.77 6.459 C 7.917 6.601 8 6.796 8 7 C 8 7.204 7.917 7.399 7.77 7.541 L 1.27 13.791 C 0.971 14.078 0.496 14.068 0.209 13.77 C -0.078 13.471 -0.068 12.996 0.23 12.709 L 6.168 7 L 0.23 1.291 C -0.068 1.004 -0.078 0.529 0.209 0.23 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1064,
      top: 1309,
      width: 375,
      boxShadow: "inset 0 0 0 1px var(--patch-color-border-secondary)",
      display: "flex",
      flexDirection: "column",
      padding: "16px 0px 16px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      paddingTop: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-16) * 1px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 44,
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "10px 10px 0px 0px",
      backgroundColor: "var(--patch-color-surface-primary-variant)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-16) * 1px)",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 44,
      borderTop: "0.500px solid var(--patch-color-border-primary)",
      borderRight: "0.500px solid var(--patch-color-border-primary)",
      borderBottom: "0.500px solid var(--patch-color-border-primary)",
      borderLeft: "0.500px solid var(--patch-color-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "4px 16px 4px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "24px",
      color: "var(--patch-color-text-primary)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, "First"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconInfo, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    },
    size: "24"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      justifyContent: "flex-end",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "24px",
      color: "var(--patch-color-text-secondary)",
      flexShrink: 0
    }
  }, "{Label}"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.348,
    height: 20.348,
    viewBox: "0 0 20.348 20.348",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.823,
      top: 1.829,
      width: 20.348,
      height: 20.348,
      color: "var(--patch-color-text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.947 1.593 C 2.072 1.496 2.208 1.413 2.353 1.347 C 2.667 0.654 3.366 0.171 4.177 0.171 L 16.177 0.171 C 16.967 0.171 17.65 0.629 17.975 1.294 C 18.145 1.357 18.304 1.442 18.449 1.547 L 19.995 0.001 L 20.348 0.354 L 18.815 1.887 C 18.947 2.044 19.054 2.221 19.133 2.414 C 19.755 2.753 20.177 3.413 20.177 4.171 L 20.177 16.171 C 20.177 16.929 19.755 17.588 19.133 17.928 C 19.054 18.122 18.945 18.301 18.812 18.459 L 20.347 19.995 L 19.994 20.348 L 18.444 18.798 C 18.301 18.901 18.143 18.985 17.975 19.047 C 17.65 19.712 16.967 20.171 16.177 20.171 L 4.177 20.171 C 3.366 20.171 2.667 19.688 2.353 18.994 C 2.209 18.929 2.074 18.847 1.95 18.751 L 0.354 20.347 L 0 19.994 L 1.597 18.397 C 1.501 18.274 1.419 18.138 1.353 17.994 C 0.66 17.68 0.177 16.982 0.177 16.171 L 0.177 4.171 C 0.177 3.36 0.66 2.661 1.353 2.347 C 1.418 2.204 1.499 2.07 1.594 1.947 L 0.001 0.354 L 0.354 0 L 1.947 1.593 Z M 2.677 3.03 L 2.677 3.556 C 2.759 3.463 2.843 3.371 2.928 3.281 L 2.677 3.03 Z M 3.282 2.928 L 3.025 2.671 L 3.562 2.671 C 3.467 2.755 3.374 2.84 3.282 2.928 Z M 3.282 3.635 C 3.069 3.86 2.867 4.095 2.677 4.339 L 2.677 9.921 L 9.567 9.921 L 3.282 3.635 Z M 9.923 9.569 L 9.923 2.671 L 4.345 2.671 C 4.099 2.863 3.862 3.066 3.636 3.281 L 9.923 9.569 Z M 10.423 10.776 L 10.423 17.671 L 16.008 17.671 C 16.253 17.48 16.487 17.279 16.712 17.066 L 10.423 10.776 Z M 17.066 16.712 C 17.281 16.486 17.485 16.249 17.677 16.002 L 17.677 10.421 L 10.774 10.421 L 17.066 16.712 Z M 17.065 17.42 C 16.976 17.505 16.884 17.589 16.791 17.671 L 17.317 17.671 L 17.065 17.42 Z M 17.677 17.324 L 17.419 17.066 C 17.507 16.974 17.593 16.881 17.677 16.785 L 17.677 17.324 Z M 3.562 17.671 L 3.03 17.671 L 3.285 17.416 C 3.376 17.503 3.468 17.588 3.562 17.671 Z M 2.677 17.317 L 2.931 17.063 C 2.845 16.972 2.76 16.879 2.677 16.785 L 2.677 17.317 Z M 4.345 17.671 L 9.923 17.671 L 9.923 10.779 L 3.638 17.063 C 3.864 17.277 4.1 17.48 4.345 17.671 Z M 3.285 16.709 L 9.574 10.421 L 2.677 10.421 L 2.677 16.002 C 2.868 16.248 3.071 16.484 3.285 16.709 Z M 17.677 9.921 L 17.677 4.339 C 17.486 4.094 17.283 3.858 17.069 3.633 L 10.781 9.921 L 17.677 9.921 Z M 10.423 9.572 L 16.716 3.279 C 16.49 3.065 16.254 2.862 16.008 2.671 L 10.423 2.671 L 10.423 9.572 Z M 17.677 3.556 C 17.594 3.462 17.509 3.37 17.423 3.279 L 17.677 3.026 L 17.677 3.556 Z M 17.07 2.926 L 17.325 2.671 L 16.791 2.671 C 16.886 2.754 16.978 2.839 17.07 2.926 Z M 13.226 19.171 L 10.423 19.171 L 10.423 19.668 C 11.401 19.643 12.343 19.47 13.226 19.171 Z M 9.923 19.171 L 7.127 19.171 C 8.008 19.469 8.947 19.642 9.923 19.667 L 9.923 19.171 Z M 14.424 18.671 C 14.726 18.519 15.019 18.352 15.302 18.171 L 10.423 18.171 L 10.423 18.671 L 14.424 18.671 Z M 9.923 18.671 L 9.923 18.171 L 5.051 18.171 C 5.334 18.352 5.627 18.519 5.929 18.671 L 9.923 18.671 Z M 18.177 10.421 L 18.177 15.296 C 18.401 14.947 18.603 14.581 18.781 14.202 L 18.781 10.421 L 18.177 10.421 Z M 18.781 9.921 L 18.781 6.139 C 18.603 5.76 18.401 5.395 18.177 5.045 L 18.177 9.921 L 18.781 9.921 Z M 19.281 10.421 L 19.281 12.892 C 19.516 12.106 19.651 11.277 19.674 10.421 L 19.281 10.421 Z M 19.674 9.921 C 19.651 9.064 19.516 8.236 19.281 7.45 L 19.281 9.921 L 19.674 9.921 Z M 2.177 9.921 L 2.177 5.045 C 1.995 5.328 1.828 5.621 1.677 5.923 L 1.677 9.921 L 2.177 9.921 Z M 1.677 10.421 L 1.677 14.418 C 1.828 14.72 1.995 15.013 2.177 15.296 L 2.177 10.421 L 1.677 10.421 Z M 1.177 9.921 L 1.177 7.121 C 0.878 8.003 0.705 8.944 0.68 9.921 L 1.177 9.921 Z M 0.68 10.421 C 0.705 11.398 0.878 12.338 1.177 13.22 L 1.177 10.421 L 0.68 10.421 Z M 15.302 2.171 C 15.019 1.989 14.726 1.822 14.424 1.671 L 10.423 1.671 L 10.423 2.171 L 15.302 2.171 Z M 9.923 2.171 L 9.923 1.671 L 5.929 1.671 C 5.627 1.822 5.334 1.989 5.051 2.171 L 9.923 2.171 Z M 13.226 1.171 C 12.343 0.871 11.401 0.699 10.423 0.674 L 10.423 1.171 L 13.226 1.171 Z M 9.923 1.171 L 9.923 0.674 C 8.947 0.7 8.008 0.872 7.127 1.171 L 9.923 1.171 Z M 5.813 19.171 L 3.177 19.171 C 3.136 19.171 3.096 19.169 3.055 19.167 C 3.33 19.476 3.731 19.671 4.177 19.671 L 7.046 19.671 C 6.621 19.531 6.21 19.364 5.813 19.171 Z M 19.281 17.186 C 19.527 16.918 19.677 16.562 19.677 16.171 L 19.677 13.302 C 19.563 13.647 19.431 13.985 19.281 14.313 L 19.281 17.171 L 19.281 17.186 Z M 19.677 7.04 L 19.677 4.171 C 19.677 3.779 19.527 3.423 19.281 3.156 L 19.281 3.171 L 19.281 6.029 C 19.431 6.357 19.563 6.694 19.677 7.04 Z M 18.177 2.671 L 18.177 4.17 C 18.394 4.459 18.596 4.76 18.781 5.072 L 18.781 3.171 C 18.781 3.034 18.763 2.901 18.729 2.776 C 18.558 2.708 18.372 2.671 18.177 2.671 Z M 17.677 2.171 C 17.677 2.008 17.651 1.852 17.603 1.705 C 17.499 1.683 17.392 1.671 17.281 1.671 L 15.447 1.671 C 15.698 1.827 15.942 1.994 16.178 2.171 L 17.677 2.171 Z M 4.176 2.171 C 4.411 1.994 4.655 1.827 4.906 1.671 L 3.177 1.671 C 3.025 1.671 2.879 1.693 2.741 1.735 C 2.699 1.873 2.677 2.019 2.677 2.171 L 4.176 2.171 Z M 1.741 2.735 C 1.699 2.873 1.677 3.019 1.677 3.171 L 1.677 4.9 C 1.833 4.649 2 4.405 2.177 4.17 L 2.177 2.671 C 2.025 2.671 1.879 2.693 1.741 2.735 Z M 1.18 3.049 C 0.871 3.324 0.677 3.725 0.677 4.171 L 0.677 7.04 C 0.816 6.615 0.984 6.204 1.177 5.807 L 1.177 3.171 C 1.177 3.13 1.178 3.09 1.18 3.049 Z M 0.677 13.302 L 0.677 16.171 C 0.677 16.617 0.871 17.017 1.18 17.292 C 1.178 17.252 1.177 17.211 1.177 17.171 L 1.177 14.535 C 0.984 14.138 0.816 13.726 0.677 13.302 Z M 2.177 17.671 L 2.177 16.172 C 2 15.936 1.833 15.692 1.677 15.441 L 1.677 17.171 C 1.677 17.322 1.699 17.469 1.741 17.606 C 1.879 17.648 2.025 17.671 2.177 17.671 Z M 2.677 18.171 C 2.677 18.322 2.699 18.469 2.741 18.606 C 2.879 18.648 3.025 18.671 3.177 18.671 L 4.906 18.671 C 4.655 18.515 4.411 18.348 4.176 18.171 L 2.677 18.171 Z M 16.178 18.171 C 15.942 18.348 15.698 18.515 15.447 18.671 L 17.281 18.671 C 17.392 18.671 17.499 18.659 17.603 18.636 C 17.651 18.49 17.677 18.333 17.677 18.171 L 16.178 18.171 Z M 18.177 17.671 C 18.372 17.671 18.558 17.633 18.729 17.566 C 18.763 17.44 18.781 17.307 18.781 17.171 L 18.781 15.269 C 18.596 15.581 18.394 15.883 18.177 16.172 L 18.177 17.671 Z M 3.177 1.171 L 5.813 1.171 C 6.21 0.978 6.621 0.81 7.046 0.671 L 4.177 0.671 C 3.731 0.671 3.33 0.865 3.055 1.174 C 3.096 1.172 3.136 1.171 3.177 1.171 Z M 17.281 19.171 L 14.541 19.171 C 14.144 19.364 13.732 19.531 13.308 19.671 L 16.177 19.671 C 16.621 19.671 17.02 19.478 17.295 19.171 L 17.281 19.171 Z M 16.177 0.671 L 13.308 0.671 C 13.732 0.81 14.144 0.978 14.541 1.171 L 17.281 1.171 L 17.295 1.171 C 17.02 0.864 16.621 0.671 16.177 0.671 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 11,
    viewBox: "0 0 15 11",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 6,
      width: 15,
      height: 11,
      color: "var(--patch-color-text-accent-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.78 0.22 C 15.073 0.513 15.073 0.987 14.78 1.28 L 5.28 10.78 C 5.001 11.06 4.553 11.074 4.256 10.814 L 0.256 7.314 C -0.056 7.042 -0.087 6.568 0.186 6.256 C 0.458 5.944 0.932 5.913 1.244 6.186 L 4.716 9.224 L 13.72 0.22 C 14.013 -0.073 14.487 -0.073 14.78 0.22 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 14,
    viewBox: "0 0 8 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 9,
      top: 5,
      width: 8,
      height: 14,
      color: "var(--patch-color-text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.209 0.23 C 0.496 -0.068 0.971 -0.078 1.27 0.209 L 7.77 6.459 C 7.917 6.601 8 6.796 8 7 C 8 7.204 7.917 7.399 7.77 7.541 L 1.27 13.791 C 0.971 14.078 0.496 14.068 0.209 13.77 C -0.078 13.471 -0.068 12.996 0.23 12.709 L 6.168 7 L 0.23 1.291 C -0.068 1.004 -0.078 0.529 0.209 0.23 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 44,
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--patch-color-surface-primary-variant)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-16) * 1px)",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 44,
      borderTop: "0.500px solid var(--patch-color-border-primary)",
      borderRight: "0.500px solid var(--patch-color-border-primary)",
      borderBottom: "0.500px solid var(--patch-color-border-primary)",
      borderLeft: "0.500px solid var(--patch-color-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "4px 16px 4px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "24px",
      color: "var(--patch-color-text-primary)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, "Middle"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconInfo, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    },
    size: "24"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      justifyContent: "flex-end",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.348,
    height: 20.348,
    viewBox: "0 0 20.348 20.348",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.823,
      top: 1.829,
      width: 20.348,
      height: 20.348,
      color: "var(--patch-color-text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.947 1.593 C 2.072 1.496 2.208 1.413 2.353 1.347 C 2.667 0.654 3.366 0.171 4.177 0.171 L 16.177 0.171 C 16.967 0.171 17.65 0.629 17.975 1.294 C 18.145 1.357 18.304 1.442 18.449 1.547 L 19.995 0.001 L 20.348 0.354 L 18.815 1.887 C 18.947 2.044 19.054 2.221 19.133 2.414 C 19.755 2.753 20.177 3.413 20.177 4.171 L 20.177 16.171 C 20.177 16.929 19.755 17.588 19.133 17.928 C 19.054 18.122 18.945 18.301 18.812 18.459 L 20.347 19.995 L 19.994 20.348 L 18.444 18.798 C 18.301 18.901 18.143 18.985 17.975 19.047 C 17.65 19.712 16.967 20.171 16.177 20.171 L 4.177 20.171 C 3.366 20.171 2.667 19.688 2.353 18.994 C 2.209 18.929 2.074 18.847 1.95 18.751 L 0.354 20.347 L 0 19.994 L 1.597 18.397 C 1.501 18.274 1.419 18.138 1.353 17.994 C 0.66 17.68 0.177 16.982 0.177 16.171 L 0.177 4.171 C 0.177 3.36 0.66 2.661 1.353 2.347 C 1.418 2.204 1.499 2.07 1.594 1.947 L 0.001 0.354 L 0.354 0 L 1.947 1.593 Z M 2.677 3.03 L 2.677 3.556 C 2.759 3.463 2.843 3.371 2.928 3.281 L 2.677 3.03 Z M 3.282 2.928 L 3.025 2.671 L 3.562 2.671 C 3.467 2.755 3.374 2.84 3.282 2.928 Z M 3.282 3.635 C 3.069 3.86 2.867 4.095 2.677 4.339 L 2.677 9.921 L 9.567 9.921 L 3.282 3.635 Z M 9.923 9.569 L 9.923 2.671 L 4.345 2.671 C 4.099 2.863 3.862 3.066 3.636 3.281 L 9.923 9.569 Z M 10.423 10.776 L 10.423 17.671 L 16.008 17.671 C 16.253 17.48 16.487 17.279 16.712 17.066 L 10.423 10.776 Z M 17.066 16.712 C 17.281 16.486 17.485 16.249 17.677 16.002 L 17.677 10.421 L 10.774 10.421 L 17.066 16.712 Z M 17.065 17.42 C 16.976 17.505 16.884 17.589 16.791 17.671 L 17.317 17.671 L 17.065 17.42 Z M 17.677 17.324 L 17.419 17.066 C 17.507 16.974 17.593 16.881 17.677 16.785 L 17.677 17.324 Z M 3.562 17.671 L 3.03 17.671 L 3.285 17.416 C 3.376 17.503 3.468 17.588 3.562 17.671 Z M 2.677 17.317 L 2.931 17.063 C 2.845 16.972 2.76 16.879 2.677 16.785 L 2.677 17.317 Z M 4.345 17.671 L 9.923 17.671 L 9.923 10.779 L 3.638 17.063 C 3.864 17.277 4.1 17.48 4.345 17.671 Z M 3.285 16.709 L 9.574 10.421 L 2.677 10.421 L 2.677 16.002 C 2.868 16.248 3.071 16.484 3.285 16.709 Z M 17.677 9.921 L 17.677 4.339 C 17.486 4.094 17.283 3.858 17.069 3.633 L 10.781 9.921 L 17.677 9.921 Z M 10.423 9.572 L 16.716 3.279 C 16.49 3.065 16.254 2.862 16.008 2.671 L 10.423 2.671 L 10.423 9.572 Z M 17.677 3.556 C 17.594 3.462 17.509 3.37 17.423 3.279 L 17.677 3.026 L 17.677 3.556 Z M 17.07 2.926 L 17.325 2.671 L 16.791 2.671 C 16.886 2.754 16.978 2.839 17.07 2.926 Z M 13.226 19.171 L 10.423 19.171 L 10.423 19.668 C 11.401 19.643 12.343 19.47 13.226 19.171 Z M 9.923 19.171 L 7.127 19.171 C 8.008 19.469 8.947 19.642 9.923 19.667 L 9.923 19.171 Z M 14.424 18.671 C 14.726 18.519 15.019 18.352 15.302 18.171 L 10.423 18.171 L 10.423 18.671 L 14.424 18.671 Z M 9.923 18.671 L 9.923 18.171 L 5.051 18.171 C 5.334 18.352 5.627 18.519 5.929 18.671 L 9.923 18.671 Z M 18.177 10.421 L 18.177 15.296 C 18.401 14.947 18.603 14.581 18.781 14.202 L 18.781 10.421 L 18.177 10.421 Z M 18.781 9.921 L 18.781 6.139 C 18.603 5.76 18.401 5.395 18.177 5.045 L 18.177 9.921 L 18.781 9.921 Z M 19.281 10.421 L 19.281 12.892 C 19.516 12.106 19.651 11.277 19.674 10.421 L 19.281 10.421 Z M 19.674 9.921 C 19.651 9.064 19.516 8.236 19.281 7.45 L 19.281 9.921 L 19.674 9.921 Z M 2.177 9.921 L 2.177 5.045 C 1.995 5.328 1.828 5.621 1.677 5.923 L 1.677 9.921 L 2.177 9.921 Z M 1.677 10.421 L 1.677 14.418 C 1.828 14.72 1.995 15.013 2.177 15.296 L 2.177 10.421 L 1.677 10.421 Z M 1.177 9.921 L 1.177 7.121 C 0.878 8.003 0.705 8.944 0.68 9.921 L 1.177 9.921 Z M 0.68 10.421 C 0.705 11.398 0.878 12.338 1.177 13.22 L 1.177 10.421 L 0.68 10.421 Z M 15.302 2.171 C 15.019 1.989 14.726 1.822 14.424 1.671 L 10.423 1.671 L 10.423 2.171 L 15.302 2.171 Z M 9.923 2.171 L 9.923 1.671 L 5.929 1.671 C 5.627 1.822 5.334 1.989 5.051 2.171 L 9.923 2.171 Z M 13.226 1.171 C 12.343 0.871 11.401 0.699 10.423 0.674 L 10.423 1.171 L 13.226 1.171 Z M 9.923 1.171 L 9.923 0.674 C 8.947 0.7 8.008 0.872 7.127 1.171 L 9.923 1.171 Z M 5.813 19.171 L 3.177 19.171 C 3.136 19.171 3.096 19.169 3.055 19.167 C 3.33 19.476 3.731 19.671 4.177 19.671 L 7.046 19.671 C 6.621 19.531 6.21 19.364 5.813 19.171 Z M 19.281 17.186 C 19.527 16.918 19.677 16.562 19.677 16.171 L 19.677 13.302 C 19.563 13.647 19.431 13.985 19.281 14.313 L 19.281 17.171 L 19.281 17.186 Z M 19.677 7.04 L 19.677 4.171 C 19.677 3.779 19.527 3.423 19.281 3.156 L 19.281 3.171 L 19.281 6.029 C 19.431 6.357 19.563 6.694 19.677 7.04 Z M 18.177 2.671 L 18.177 4.17 C 18.394 4.459 18.596 4.76 18.781 5.072 L 18.781 3.171 C 18.781 3.034 18.763 2.901 18.729 2.776 C 18.558 2.708 18.372 2.671 18.177 2.671 Z M 17.677 2.171 C 17.677 2.008 17.651 1.852 17.603 1.705 C 17.499 1.683 17.392 1.671 17.281 1.671 L 15.447 1.671 C 15.698 1.827 15.942 1.994 16.178 2.171 L 17.677 2.171 Z M 4.176 2.171 C 4.411 1.994 4.655 1.827 4.906 1.671 L 3.177 1.671 C 3.025 1.671 2.879 1.693 2.741 1.735 C 2.699 1.873 2.677 2.019 2.677 2.171 L 4.176 2.171 Z M 1.741 2.735 C 1.699 2.873 1.677 3.019 1.677 3.171 L 1.677 4.9 C 1.833 4.649 2 4.405 2.177 4.17 L 2.177 2.671 C 2.025 2.671 1.879 2.693 1.741 2.735 Z M 1.18 3.049 C 0.871 3.324 0.677 3.725 0.677 4.171 L 0.677 7.04 C 0.816 6.615 0.984 6.204 1.177 5.807 L 1.177 3.171 C 1.177 3.13 1.178 3.09 1.18 3.049 Z M 0.677 13.302 L 0.677 16.171 C 0.677 16.617 0.871 17.017 1.18 17.292 C 1.178 17.252 1.177 17.211 1.177 17.171 L 1.177 14.535 C 0.984 14.138 0.816 13.726 0.677 13.302 Z M 2.177 17.671 L 2.177 16.172 C 2 15.936 1.833 15.692 1.677 15.441 L 1.677 17.171 C 1.677 17.322 1.699 17.469 1.741 17.606 C 1.879 17.648 2.025 17.671 2.177 17.671 Z M 2.677 18.171 C 2.677 18.322 2.699 18.469 2.741 18.606 C 2.879 18.648 3.025 18.671 3.177 18.671 L 4.906 18.671 C 4.655 18.515 4.411 18.348 4.176 18.171 L 2.677 18.171 Z M 16.178 18.171 C 15.942 18.348 15.698 18.515 15.447 18.671 L 17.281 18.671 C 17.392 18.671 17.499 18.659 17.603 18.636 C 17.651 18.49 17.677 18.333 17.677 18.171 L 16.178 18.171 Z M 18.177 17.671 C 18.372 17.671 18.558 17.633 18.729 17.566 C 18.763 17.44 18.781 17.307 18.781 17.171 L 18.781 15.269 C 18.596 15.581 18.394 15.883 18.177 16.172 L 18.177 17.671 Z M 3.177 1.171 L 5.813 1.171 C 6.21 0.978 6.621 0.81 7.046 0.671 L 4.177 0.671 C 3.731 0.671 3.33 0.865 3.055 1.174 C 3.096 1.172 3.136 1.171 3.177 1.171 Z M 17.281 19.171 L 14.541 19.171 C 14.144 19.364 13.732 19.531 13.308 19.671 L 16.177 19.671 C 16.621 19.671 17.02 19.478 17.295 19.171 L 17.281 19.171 Z M 16.177 0.671 L 13.308 0.671 C 13.732 0.81 14.144 0.978 14.541 1.171 L 17.281 1.171 L 17.295 1.171 C 17.02 0.864 16.621 0.671 16.177 0.671 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 11,
    viewBox: "0 0 15 11",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 6,
      width: 15,
      height: 11,
      color: "var(--patch-color-text-accent-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.78 0.22 C 15.073 0.513 15.073 0.987 14.78 1.28 L 5.28 10.78 C 5.001 11.06 4.553 11.074 4.256 10.814 L 0.256 7.314 C -0.056 7.042 -0.087 6.568 0.186 6.256 C 0.458 5.944 0.932 5.913 1.244 6.186 L 4.716 9.224 L 13.72 0.22 C 14.013 -0.073 14.487 -0.073 14.78 0.22 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 14,
    viewBox: "0 0 8 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 9,
      top: 5,
      width: 8,
      height: 14,
      color: "var(--patch-color-text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.209 0.23 C 0.496 -0.068 0.971 -0.078 1.27 0.209 L 7.77 6.459 C 7.917 6.601 8 6.796 8 7 C 8 7.204 7.917 7.399 7.77 7.541 L 1.27 13.791 C 0.971 14.078 0.496 14.068 0.209 13.77 C -0.078 13.471 -0.068 12.996 0.23 12.709 L 6.168 7 L 0.23 1.291 C -0.068 1.004 -0.078 0.529 0.209 0.23 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 44,
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "0px 0px 10px 10px",
      backgroundColor: "var(--patch-color-surface-primary-variant)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-16) * 1px)",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "4px 16px 4px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "24px",
      color: "var(--patch-color-text-primary)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, "Last"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconInfo, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    },
    size: "24"
  })))), /*#__PURE__*/React.createElement(IOSListsBlocksTrailEdge2, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    options: "checkbox"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1064,
      top: 968,
      width: 375,
      boxShadow: "inset 0 0 0 1px var(--patch-color-border-secondary)",
      display: "flex",
      flexDirection: "column",
      padding: "16px 0px 16px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      paddingTop: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-16) * 1px)"
    }
  }, /*#__PURE__*/React.createElement(IOSListsHeaderRow, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text: "{Header row}",
    type: "plain",
    width: "full"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 44,
      borderTop: "0.330px solid var(--patch-color-border-primary)",
      borderRight: "0.330px solid var(--patch-color-border-primary)",
      borderBottom: "0.330px solid var(--patch-color-border-primary)",
      borderLeft: "0.330px solid var(--patch-color-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-16) * 1px)",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.348,
    height: 20.348,
    viewBox: "0 0 20.348 20.348",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.823,
      top: 1.829,
      width: 20.348,
      height: 20.348,
      color: "var(--patch-color-text-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.947 1.593 C 2.072 1.496 2.208 1.413 2.353 1.347 C 2.667 0.654 3.366 0.171 4.177 0.171 L 16.177 0.171 C 16.967 0.171 17.65 0.629 17.975 1.294 C 18.145 1.357 18.304 1.442 18.449 1.547 L 19.995 0.001 L 20.348 0.354 L 18.815 1.887 C 18.947 2.044 19.054 2.221 19.133 2.414 C 19.755 2.753 20.177 3.413 20.177 4.171 L 20.177 16.171 C 20.177 16.929 19.755 17.588 19.133 17.928 C 19.054 18.122 18.945 18.301 18.812 18.459 L 20.347 19.995 L 19.994 20.348 L 18.444 18.798 C 18.301 18.901 18.143 18.985 17.975 19.047 C 17.65 19.712 16.967 20.171 16.177 20.171 L 4.177 20.171 C 3.366 20.171 2.667 19.688 2.353 18.994 C 2.209 18.929 2.074 18.847 1.95 18.751 L 0.354 20.347 L 0 19.994 L 1.597 18.397 C 1.501 18.274 1.419 18.138 1.353 17.994 C 0.66 17.68 0.177 16.982 0.177 16.171 L 0.177 4.171 C 0.177 3.36 0.66 2.661 1.353 2.347 C 1.418 2.204 1.499 2.07 1.594 1.947 L 0.001 0.354 L 0.354 0 L 1.947 1.593 Z M 2.677 3.03 L 2.677 3.556 C 2.759 3.463 2.843 3.371 2.928 3.281 L 2.677 3.03 Z M 3.282 2.928 L 3.025 2.671 L 3.562 2.671 C 3.467 2.755 3.374 2.84 3.282 2.928 Z M 3.282 3.635 C 3.069 3.86 2.867 4.095 2.677 4.339 L 2.677 9.921 L 9.567 9.921 L 3.282 3.635 Z M 9.923 9.569 L 9.923 2.671 L 4.345 2.671 C 4.099 2.863 3.862 3.066 3.636 3.281 L 9.923 9.569 Z M 10.423 10.776 L 10.423 17.671 L 16.008 17.671 C 16.253 17.48 16.487 17.279 16.712 17.066 L 10.423 10.776 Z M 17.066 16.712 C 17.281 16.486 17.485 16.249 17.677 16.002 L 17.677 10.421 L 10.774 10.421 L 17.066 16.712 Z M 17.065 17.42 C 16.976 17.505 16.884 17.589 16.791 17.671 L 17.317 17.671 L 17.065 17.42 Z M 17.677 17.324 L 17.419 17.066 C 17.507 16.974 17.593 16.881 17.677 16.785 L 17.677 17.324 Z M 3.562 17.671 L 3.03 17.671 L 3.285 17.416 C 3.376 17.503 3.468 17.588 3.562 17.671 Z M 2.677 17.317 L 2.931 17.063 C 2.845 16.972 2.76 16.879 2.677 16.785 L 2.677 17.317 Z M 4.345 17.671 L 9.923 17.671 L 9.923 10.779 L 3.638 17.063 C 3.864 17.277 4.1 17.48 4.345 17.671 Z M 3.285 16.709 L 9.574 10.421 L 2.677 10.421 L 2.677 16.002 C 2.868 16.248 3.071 16.484 3.285 16.709 Z M 17.677 9.921 L 17.677 4.339 C 17.486 4.094 17.283 3.858 17.069 3.633 L 10.781 9.921 L 17.677 9.921 Z M 10.423 9.572 L 16.716 3.279 C 16.49 3.065 16.254 2.862 16.008 2.671 L 10.423 2.671 L 10.423 9.572 Z M 17.677 3.556 C 17.594 3.462 17.509 3.37 17.423 3.279 L 17.677 3.026 L 17.677 3.556 Z M 17.07 2.926 L 17.325 2.671 L 16.791 2.671 C 16.886 2.754 16.978 2.839 17.07 2.926 Z M 13.226 19.171 L 10.423 19.171 L 10.423 19.668 C 11.401 19.643 12.343 19.47 13.226 19.171 Z M 9.923 19.171 L 7.127 19.171 C 8.008 19.469 8.947 19.642 9.923 19.667 L 9.923 19.171 Z M 14.424 18.671 C 14.726 18.519 15.019 18.352 15.302 18.171 L 10.423 18.171 L 10.423 18.671 L 14.424 18.671 Z M 9.923 18.671 L 9.923 18.171 L 5.051 18.171 C 5.334 18.352 5.627 18.519 5.929 18.671 L 9.923 18.671 Z M 18.177 10.421 L 18.177 15.296 C 18.401 14.947 18.603 14.581 18.781 14.202 L 18.781 10.421 L 18.177 10.421 Z M 18.781 9.921 L 18.781 6.139 C 18.603 5.76 18.401 5.395 18.177 5.045 L 18.177 9.921 L 18.781 9.921 Z M 19.281 10.421 L 19.281 12.892 C 19.516 12.106 19.651 11.277 19.674 10.421 L 19.281 10.421 Z M 19.674 9.921 C 19.651 9.064 19.516 8.236 19.281 7.45 L 19.281 9.921 L 19.674 9.921 Z M 2.177 9.921 L 2.177 5.045 C 1.995 5.328 1.828 5.621 1.677 5.923 L 1.677 9.921 L 2.177 9.921 Z M 1.677 10.421 L 1.677 14.418 C 1.828 14.72 1.995 15.013 2.177 15.296 L 2.177 10.421 L 1.677 10.421 Z M 1.177 9.921 L 1.177 7.121 C 0.878 8.003 0.705 8.944 0.68 9.921 L 1.177 9.921 Z M 0.68 10.421 C 0.705 11.398 0.878 12.338 1.177 13.22 L 1.177 10.421 L 0.68 10.421 Z M 15.302 2.171 C 15.019 1.989 14.726 1.822 14.424 1.671 L 10.423 1.671 L 10.423 2.171 L 15.302 2.171 Z M 9.923 2.171 L 9.923 1.671 L 5.929 1.671 C 5.627 1.822 5.334 1.989 5.051 2.171 L 9.923 2.171 Z M 13.226 1.171 C 12.343 0.871 11.401 0.699 10.423 0.674 L 10.423 1.171 L 13.226 1.171 Z M 9.923 1.171 L 9.923 0.674 C 8.947 0.7 8.008 0.872 7.127 1.171 L 9.923 1.171 Z M 5.813 19.171 L 3.177 19.171 C 3.136 19.171 3.096 19.169 3.055 19.167 C 3.33 19.476 3.731 19.671 4.177 19.671 L 7.046 19.671 C 6.621 19.531 6.21 19.364 5.813 19.171 Z M 19.281 17.186 C 19.527 16.918 19.677 16.562 19.677 16.171 L 19.677 13.302 C 19.563 13.647 19.431 13.985 19.281 14.313 L 19.281 17.171 L 19.281 17.186 Z M 19.677 7.04 L 19.677 4.171 C 19.677 3.779 19.527 3.423 19.281 3.156 L 19.281 3.171 L 19.281 6.029 C 19.431 6.357 19.563 6.694 19.677 7.04 Z M 18.177 2.671 L 18.177 4.17 C 18.394 4.459 18.596 4.76 18.781 5.072 L 18.781 3.171 C 18.781 3.034 18.763 2.901 18.729 2.776 C 18.558 2.708 18.372 2.671 18.177 2.671 Z M 17.677 2.171 C 17.677 2.008 17.651 1.852 17.603 1.705 C 17.499 1.683 17.392 1.671 17.281 1.671 L 15.447 1.671 C 15.698 1.827 15.942 1.994 16.178 2.171 L 17.677 2.171 Z M 4.176 2.171 C 4.411 1.994 4.655 1.827 4.906 1.671 L 3.177 1.671 C 3.025 1.671 2.879 1.693 2.741 1.735 C 2.699 1.873 2.677 2.019 2.677 2.171 L 4.176 2.171 Z M 1.741 2.735 C 1.699 2.873 1.677 3.019 1.677 3.171 L 1.677 4.9 C 1.833 4.649 2 4.405 2.177 4.17 L 2.177 2.671 C 2.025 2.671 1.879 2.693 1.741 2.735 Z M 1.18 3.049 C 0.871 3.324 0.677 3.725 0.677 4.171 L 0.677 7.04 C 0.816 6.615 0.984 6.204 1.177 5.807 L 1.177 3.171 C 1.177 3.13 1.178 3.09 1.18 3.049 Z M 0.677 13.302 L 0.677 16.171 C 0.677 16.617 0.871 17.017 1.18 17.292 C 1.178 17.252 1.177 17.211 1.177 17.171 L 1.177 14.535 C 0.984 14.138 0.816 13.726 0.677 13.302 Z M 2.177 17.671 L 2.177 16.172 C 2 15.936 1.833 15.692 1.677 15.441 L 1.677 17.171 C 1.677 17.322 1.699 17.469 1.741 17.606 C 1.879 17.648 2.025 17.671 2.177 17.671 Z M 2.677 18.171 C 2.677 18.322 2.699 18.469 2.741 18.606 C 2.879 18.648 3.025 18.671 3.177 18.671 L 4.906 18.671 C 4.655 18.515 4.411 18.348 4.176 18.171 L 2.677 18.171 Z M 16.178 18.171 C 15.942 18.348 15.698 18.515 15.447 18.671 L 17.281 18.671 C 17.392 18.671 17.499 18.659 17.603 18.636 C 17.651 18.49 17.677 18.333 17.677 18.171 L 16.178 18.171 Z M 18.177 17.671 C 18.372 17.671 18.558 17.633 18.729 17.566 C 18.763 17.44 18.781 17.307 18.781 17.171 L 18.781 15.269 C 18.596 15.581 18.394 15.883 18.177 16.172 L 18.177 17.671 Z M 3.177 1.171 L 5.813 1.171 C 6.21 0.978 6.621 0.81 7.046 0.671 L 4.177 0.671 C 3.731 0.671 3.33 0.865 3.055 1.174 C 3.096 1.172 3.136 1.171 3.177 1.171 Z M 17.281 19.171 L 14.541 19.171 C 14.144 19.364 13.732 19.531 13.308 19.671 L 16.177 19.671 C 16.621 19.671 17.02 19.478 17.295 19.171 L 17.281 19.171 Z M 16.177 0.671 L 13.308 0.671 C 13.732 0.81 14.144 0.978 14.541 1.171 L 17.281 1.171 L 17.295 1.171 C 17.02 0.864 16.621 0.671 16.177 0.671 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "0.500px solid var(--patch-color-border-primary)",
      borderRight: "0.500px solid var(--patch-color-border-primary)",
      borderBottom: "0.500px solid var(--patch-color-border-primary)",
      borderLeft: "0.500px solid var(--patch-color-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "4px 16px 4px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "24px",
      color: "var(--patch-color-text-primary)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, "First"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconInfo, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    },
    size: "24"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      justifyContent: "flex-end",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 8,
    viewBox: "0 0 14 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 9,
      width: 14,
      height: 8,
      color: "var(--patch-color-text-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.23 0.209 C 0.529 -0.078 1.004 -0.068 1.291 0.23 L 7 6.168 L 12.709 0.23 C 12.996 -0.068 13.471 -0.078 13.77 0.209 C 14.068 0.496 14.078 0.971 13.791 1.27 L 7.541 7.77 C 7.399 7.917 7.204 8 7 8 C 6.796 8 6.601 7.917 6.459 7.77 L 0.209 1.27 C -0.078 0.971 -0.068 0.496 0.23 0.209 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 60,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-16) * 1px)",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IOSFormsRadioButton2, {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    },
    selected: false,
    disabled: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "0.500px solid var(--patch-color-border-primary)",
      borderRight: "0.500px solid var(--patch-color-border-primary)",
      borderBottom: "0.500px solid var(--patch-color-border-primary)",
      borderLeft: "0.500px solid var(--patch-color-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "8px 16px 8px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "24px",
      color: "var(--patch-color-text-primary)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, "Middle"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconInfo, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    },
    size: "24"
  })))), /*#__PURE__*/React.createElement(IOSListsBlocksSecondaryContent, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  })), /*#__PURE__*/React.createElement(IOSListsBlocksTrailEdge2, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    options: "flat button"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 60,
      borderTop: "0.330px solid var(--patch-color-border-primary)",
      borderRight: "0.330px solid var(--patch-color-border-primary)",
      borderBottom: "0.330px solid var(--patch-color-border-primary)",
      borderLeft: "0.330px solid var(--patch-color-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-16) * 1px)",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IOSFormsCheckbox2, {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    },
    condition: "unselected",
    disabled: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "8px 16px 8px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "24px",
      color: "var(--patch-color-text-primary)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, "Last"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconInfo, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    },
    size: "24"
  })))), /*#__PURE__*/React.createElement(IOSListsBlocksSecondaryContent, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  })), /*#__PURE__*/React.createElement(IOSListsBlocksTrailEdge2, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    options: "switch"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 21,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      padding: "5px 16px 5px 16px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "var(--patch-color-text-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "{Supporting text}")))), /*#__PURE__*/React.createElement(StatusBlock, {
    style: {
      position: "absolute",
      left: 1101,
      top: 40,
      width: 435
    },
    date: "2025-10-29",
    orientation: "default"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 552,
      top: 968,
      width: 360,
      boxShadow: "inset 0 0 0 1px var(--patch-color-border-secondary)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 56,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 4px 4px 4px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-4) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-4) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "20px",
      color: "var(--patch-color-text-primary)",
      flexGrow: 1
    }
  }, "{Header row}")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-12) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-12) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(IconChevronDown5, {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    size: "24"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 56,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 4px 4px 4px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-4) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-4) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(AndroidListsBlocksLeadEdge2, {
    style: {
      position: "relative",
      height: 48,
      flexShrink: 0
    },
    options: "icon or swatch"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 12px 0px 0px",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "20px",
      color: "var(--patch-color-text-primary)",
      flexGrow: 1
    }
  }, "Default"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20
    }
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.667,
    height: 16.667,
    viewBox: "0 0 16.667 16.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.667,
      top: 1.667,
      width: 16.667,
      height: 16.667,
      color: "var(--patch-color-text-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.333 6.667 C 8.679 6.667 8.958 6.946 8.958 7.292 L 8.958 11.667 L 10.208 11.667 C 10.438 11.667 10.625 11.853 10.625 12.083 C 10.625 12.313 10.438 12.5 10.208 12.5 L 6.458 12.5 C 6.228 12.5 6.042 12.313 6.042 12.083 C 6.042 11.853 6.228 11.667 6.458 11.667 L 7.708 11.667 L 7.708 7.5 L 6.458 7.5 C 6.228 7.5 6.042 7.313 6.042 7.083 C 6.042 6.853 6.228 6.667 6.458 6.667 L 8.333 6.667 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.333 3.333 C 8.794 3.333 9.167 3.706 9.167 4.167 C 9.167 4.627 8.794 5 8.333 5 C 7.873 5 7.5 4.627 7.5 4.167 C 7.5 3.706 7.873 3.333 8.333 3.333 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.333 0 C 12.936 0 16.667 3.731 16.667 8.333 C 16.667 12.936 12.936 16.667 8.333 16.667 C 3.731 16.667 0 12.936 0 8.333 C 0 3.731 3.731 0 8.333 0 Z M 8.333 1.25 C 4.421 1.25 1.25 4.421 1.25 8.333 C 1.25 12.245 4.421 15.417 8.333 15.417 C 12.245 15.417 15.417 12.245 15.417 8.333 C 15.417 4.421 12.245 1.25 8.333 1.25 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement(AndroidListsBlocksTrailEdge2, {
    style: {
      position: "relative",
      height: 48,
      flexShrink: 0
    },
    options: "switch"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    height: 1,
    viewBox: "0 0 360 1",
    fill: "none",
    style: {
      position: "relative",
      height: 1,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch",
      color: "var(--patch-color-border-secondary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 360 0 L 360 1 L 0 1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 -1 L -1 -1 L -1 0 L 0 0 Z M 360 0 L 361 0 L 361 -1 L 360 -1 L 360 0 Z M 360 1 L 360 2 L 361 2 L 361 1 L 360 1 Z M 0 1 L -1 1 L -1 2 L 0 2 L 0 1 Z M 0 0 L 0 1 L 360 1 L 360 0 L 360 -1 L 0 -1 L 0 0 Z M 360 0 L 359 0 L 359 1 L 360 1 L 361 1 L 361 0 L 360 0 Z M 360 1 L 360 0 L 0 0 L 0 1 L 0 2 L 360 2 L 360 1 Z M 0 1 L 1 1 L 1 0 L 0 0 L -1 0 L -1 1 L 0 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 72,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 4px 4px 4px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-4) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-4) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(AndroidListsBlocksLeadEdge2, {
    style: {
      position: "relative",
      height: 48,
      flexShrink: 0
    },
    options: "checkbox"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      padding: "8px 12px 8px 0px",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "20px",
      color: "var(--patch-color-text-primary)",
      flexGrow: 1
    }
  }, "Short secondary content"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20
    }
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.667,
    height: 16.667,
    viewBox: "0 0 16.667 16.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.667,
      top: 1.667,
      width: 16.667,
      height: 16.667,
      color: "var(--patch-color-text-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.333 6.667 C 8.679 6.667 8.958 6.946 8.958 7.292 L 8.958 11.667 L 10.208 11.667 C 10.438 11.667 10.625 11.853 10.625 12.083 C 10.625 12.313 10.438 12.5 10.208 12.5 L 6.458 12.5 C 6.228 12.5 6.042 12.313 6.042 12.083 C 6.042 11.853 6.228 11.667 6.458 11.667 L 7.708 11.667 L 7.708 7.5 L 6.458 7.5 C 6.228 7.5 6.042 7.313 6.042 7.083 C 6.042 6.853 6.228 6.667 6.458 6.667 L 8.333 6.667 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.333 3.333 C 8.794 3.333 9.167 3.706 9.167 4.167 C 9.167 4.627 8.794 5 8.333 5 C 7.873 5 7.5 4.627 7.5 4.167 C 7.5 3.706 7.873 3.333 8.333 3.333 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.333 0 C 12.936 0 16.667 3.731 16.667 8.333 C 16.667 12.936 12.936 16.667 8.333 16.667 C 3.731 16.667 0 12.936 0 8.333 C 0 3.731 3.731 0 8.333 0 Z M 8.333 1.25 C 4.421 1.25 1.25 4.421 1.25 8.333 C 1.25 12.245 4.421 15.417 8.333 15.417 C 12.245 15.417 15.417 12.245 15.417 8.333 C 15.417 4.421 12.245 1.25 8.333 1.25 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement(AndroidListsBlocksSecondaryContent, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  })), /*#__PURE__*/React.createElement(AndroidListsBlocksTrailEdge2, {
    style: {
      position: "relative",
      height: 48,
      width: 79,
      flexShrink: 0
    },
    options: "flat button"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 88,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 4px 4px 4px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-4) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-4) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(AndroidListsBlocksLeadEdge2, {
    style: {
      position: "relative",
      height: 48,
      flexShrink: 0
    },
    options: "radio button"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      padding: "12px 12px 12px 0px",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-12) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-12) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "20px",
      color: "var(--patch-color-text-primary)",
      flexGrow: 1
    }
  }, "With longer secondary content"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20
    }
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.667,
    height: 16.667,
    viewBox: "0 0 16.667 16.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.667,
      top: 1.667,
      width: 16.667,
      height: 16.667,
      color: "var(--patch-color-text-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.333 6.667 C 8.679 6.667 8.958 6.946 8.958 7.292 L 8.958 11.667 L 10.208 11.667 C 10.438 11.667 10.625 11.853 10.625 12.083 C 10.625 12.313 10.438 12.5 10.208 12.5 L 6.458 12.5 C 6.228 12.5 6.042 12.313 6.042 12.083 C 6.042 11.853 6.228 11.667 6.458 11.667 L 7.708 11.667 L 7.708 7.5 L 6.458 7.5 C 6.228 7.5 6.042 7.313 6.042 7.083 C 6.042 6.853 6.228 6.667 6.458 6.667 L 8.333 6.667 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.333 3.333 C 8.794 3.333 9.167 3.706 9.167 4.167 C 9.167 4.627 8.794 5 8.333 5 C 7.873 5 7.5 4.627 7.5 4.167 C 7.5 3.706 7.873 3.333 8.333 3.333 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.333 0 C 12.936 0 16.667 3.731 16.667 8.333 C 16.667 12.936 12.936 16.667 8.333 16.667 C 3.731 16.667 0 12.936 0 8.333 C 0 3.731 3.731 0 8.333 0 Z M 8.333 1.25 C 4.421 1.25 1.25 4.421 1.25 8.333 C 1.25 12.245 4.421 15.417 8.333 15.417 C 12.245 15.417 15.417 12.245 15.417 8.333 C 15.417 4.421 12.245 1.25 8.333 1.25 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement(AndroidListsBlocksSupportingContent, {
    style: {
      position: "relative",
      height: 32,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  })), /*#__PURE__*/React.createElement(AndroidListsBlocksTrailEdge2, {
    style: {
      position: "relative",
      height: 48,
      flexShrink: 0
    },
    options: "text"
  })))), /*#__PURE__*/React.createElement(TitleBlock, {
    style: {
      position: "absolute",
      left: 40,
      top: 40,
      width: 728
    },
    text1: "List",
    text2: "An ordered vertical index of actionable text-based items."
  }), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 552,
      top: 400,
      width: 472,
      height: 272
    },
    subheading: false,
    text1: "Properties (Android)",
    text3: "Type: options for row configuration, depending on presence and length of secondary content. (Note that this does not include the Header Row, which is a separate component.)\nState: allows different states of user interaction to be represented.\nLead: an optional slot preceding the text, that can accommodate one of several prescribed sub-components (some examples below). \nTrail: an optional slot following the text, that can accommodate one of several prescribed sub-components (see below).\nDivider: optional separator.\nText: string(s) displayed in the list item."
  }), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 1064,
      top: 400,
      width: 472,
      height: 272
    },
    subheading: false,
    text1: "Properties (iOS)",
    text3: "Position: adaptive styling depending on ordering of Grouped Row items only.\nWidth: full or inset options, the latter including a background fill.\nHeight: two row height options, the taller allowing for (optional) secondary text content.\nLead: an optional slot preceding the text, that can accommodate one of several prescribed sub-components (some examples below).\nTrail: an optional slot following the text, that can accommodate one or more of several prescribed sub-components (see below).\nText: string(s) displayed in the row."
  }), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 1064,
      top: 148,
      width: 472,
      height: 212
    },
    subheading: false,
    text1: "iOS",
    text3: "Both Row and Grouped Row components exist. Row is the Patchwork default.\nGrouped Row has separator rules and specific ordering, and should be used where appropriate – see guidelines.\nA single, standalone Grouped Row instance may make sense if separator rules are needed, but overall, fewer rules are preferred.\nHeader and Footer Rows are separate components."
  }), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 552,
      top: 148,
      width: 472,
      height: 192
    },
    subheading: false,
    text1: "Android",
    text3: "Android’s native behavior is to drill in to subordinate pages. However, a Header row can behave like an accordion instead (see example below) but it is not a different component.\nRow heights vary only according to their content. Note the different supporting text sizes shown below, where the larger truncates and the smaller wraps."
  }), /*#__PURE__*/React.createElement(FigmaDetails, {
    style: {
      position: "absolute",
      left: 40,
      top: 148,
      width: 472,
      height: 218.5
    },
    text1: "Patchwork components for mobile are tweaked from their native originals, and may therefore perform slightly differently to other components.\nAndroid List Item has states; iOS equivalent does not. Any sub-component elements (in the lead and trail slots) will not automatically reflect a List Item’s changed state, and will need to be manually adjusted to match."
  }));
}

// figma node: 5805:896 Desktop / Popover
function DesktopPopover(_p = {}) {
  const props = {
    ..._p,
    header: _p.header ?? "",
    body: _p.body ?? "",
    footer: _p.footer ?? ""
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 200,
      borderRadius: 8,
      backgroundColor: "var(--patch-color-surface-primary-base)",
      boxShadow: "0px 10px 20px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-16) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-16) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    height: 24,
    viewBox: "0 0 168 24",
    fill: "none",
    style: {
      position: "relative",
      height: 24,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 168 0 L 168 24 L 0 24 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    height: 24,
    viewBox: "0 0 168 24",
    fill: "none",
    style: {
      position: "relative",
      height: 24,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 168 0 L 168 24 L 0 24 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    height: 24,
    viewBox: "0 0 168 24",
    fill: "none",
    style: {
      position: "relative",
      height: 24,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 168 0 L 168 24 L 0 24 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 5193:31991 Pointer
function Pointer(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 12,
      position: "relative",
      color: "var(--patch-color-gray-200)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24,
    height: 12,
    viewBox: "0 0 24 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.586 1.414 L 0 12 L 24 12 L 13.414 1.414 C 12.633 0.633 11.367 0.633 10.586 1.414 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 6060:36217 iOS / Popover (16 variants)
const __venc_IOSPopover = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IOSPopover = p => "pointer=" + __venc_IOSPopover(p.pointer);
function IOSPopover(_p = {}) {
  const props = {
    ..._p,
    pointer: _p.pointer ?? "n",
    content: _p.content ?? ""
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 128,
      height: 128,
      boxShadow: "0px 0px 24px 0px rgba(18,18,18,0.16)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 28,
      height: 13,
      flexShrink: 0,
      color: "var(--patch-color-surface-primary-base)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Pointer, {
    style: {
      transform: "scale(1.167, 1.083)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 13,
      backgroundColor: "var(--patch-color-surface-primary-base)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 128,
      height: 128,
      boxShadow: "0px 0px 24px 0px rgba(18,18,18,0.16)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 59,
      height: 13,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 28,
      height: 13,
      color: "var(--patch-color-surface-primary-base)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Pointer, {
    style: {
      transform: "scale(1.167, 1.083)",
      transformOrigin: "0 0"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 13,
      backgroundColor: "var(--patch-color-surface-primary-base)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 128,
      height: 128,
      boxShadow: "0px 0px 24px 0px rgba(18,18,18,0.16)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 13,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 28,
      height: 13,
      color: "var(--patch-color-surface-primary-base)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Pointer, {
    style: {
      transform: "scale(1.167, 1.083)",
      transformOrigin: "0 0"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 13,
      backgroundColor: "var(--patch-color-surface-primary-base)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 128,
      height: 128,
      boxShadow: "0px 0px 24px 0px rgba(18,18,18,0.16)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 13,
      backgroundColor: "var(--patch-color-surface-primary-base)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 13,
      height: 59,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 28,
      height: 13,
      transform: "matrix(0,1,-1,0,13,31)",
      transformOrigin: "0 0",
      color: "var(--patch-color-surface-primary-base)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Pointer, {
    style: {
      transform: "scale(1.167, 1.083)",
      transformOrigin: "0 0"
    }
  }))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 128,
      height: 128,
      boxShadow: "0px 0px 24px 0px rgba(18,18,18,0.16)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 13,
      backgroundColor: "var(--patch-color-surface-primary-base)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 28,
      height: 13,
      transform: "matrix(0,1,-1,0,128,50)",
      transformOrigin: "0 0",
      color: "var(--patch-color-surface-primary-base)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Pointer, {
    style: {
      transform: "scale(1.167, 1.083)",
      transformOrigin: "0 0"
    }
  })));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 128,
      height: 128,
      boxShadow: "0px 0px 24px 0px rgba(18,18,18,0.16)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 13,
      backgroundColor: "var(--patch-color-surface-primary-base)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 13,
      height: 59,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 28,
      height: 13,
      transform: "matrix(0,1,-1,0,13,0)",
      transformOrigin: "0 0",
      color: "var(--patch-color-surface-primary-base)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Pointer, {
    style: {
      transform: "scale(1.167, 1.083)",
      transformOrigin: "0 0"
    }
  }))));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 128,
      height: 128,
      boxShadow: "0px 0px 24px 0px rgba(18,18,18,0.16)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 13,
      backgroundColor: "var(--patch-color-surface-primary-base)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 13,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 28,
      height: 13,
      transform: "matrix(1,0,0,-1,0,13)",
      transformOrigin: "0 0",
      color: "var(--patch-color-surface-primary-base)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Pointer, {
    style: {
      transform: "scale(1.167, 1.083)",
      transformOrigin: "0 0"
    }
  }))));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 128,
      height: 128,
      boxShadow: "0px 0px 24px 0px rgba(18,18,18,0.16)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 13,
      backgroundColor: "var(--patch-color-surface-primary-base)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 59,
      height: 13,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 28,
      height: 13,
      transform: "matrix(1,0,0,-1,0,13)",
      transformOrigin: "0 0",
      color: "var(--patch-color-surface-primary-base)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Pointer, {
    style: {
      transform: "scale(1.167, 1.083)",
      transformOrigin: "0 0"
    }
  }))));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 128,
      height: 128,
      boxShadow: "0px 0px 24px 0px rgba(18,18,18,0.16)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 13,
      backgroundColor: "var(--patch-color-surface-primary-base)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 28,
      height: 13,
      transform: "matrix(1,0,0,-1,0,0)",
      flexShrink: 0,
      color: "var(--patch-color-surface-primary-base)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Pointer, {
    style: {
      transform: "scale(1.167, 1.083)",
      transformOrigin: "0 0"
    }
  })));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 128,
      height: 128,
      boxShadow: "0px 0px 24px 0px rgba(18,18,18,0.16)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 13,
      backgroundColor: "var(--patch-color-surface-primary-base)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 59,
      height: 13,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 28,
      height: 13,
      transform: "matrix(1,0,0,-1,31,13)",
      transformOrigin: "0 0",
      color: "var(--patch-color-surface-primary-base)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Pointer, {
    style: {
      transform: "scale(1.167, 1.083)",
      transformOrigin: "0 0"
    }
  }))));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 128,
      height: 128,
      boxShadow: "0px 0px 24px 0px rgba(18,18,18,0.16)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 13,
      backgroundColor: "var(--patch-color-surface-primary-base)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 13,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 28,
      height: 13,
      transform: "matrix(1,0,0,-1,12,13)",
      transformOrigin: "0 0",
      color: "var(--patch-color-surface-primary-base)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Pointer, {
    style: {
      transform: "scale(1.167, 1.083)",
      transformOrigin: "0 0"
    }
  }))));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 128,
      height: 128,
      boxShadow: "0px 0px 24px 0px rgba(18,18,18,0.16)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 13,
      height: 59,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 28,
      height: 13,
      transform: "matrix(0,-1,1,0,0,28)",
      transformOrigin: "0 0",
      color: "var(--patch-color-surface-primary-base)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Pointer, {
    style: {
      transform: "scale(1.167, 1.083)",
      transformOrigin: "0 0"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 13,
      backgroundColor: "var(--patch-color-surface-primary-base)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 128,
      height: 128,
      boxShadow: "0px 0px 24px 0px rgba(18,18,18,0.16)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 28,
      height: 13,
      transform: "matrix(0,-1,1,0,0,78)",
      transformOrigin: "0 0",
      color: "var(--patch-color-surface-primary-base)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Pointer, {
    style: {
      transform: "scale(1.167, 1.083)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 13,
      backgroundColor: "var(--patch-color-surface-primary-base)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 128,
      height: 128,
      boxShadow: "0px 0px 24px 0px rgba(18,18,18,0.16)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 13,
      height: 59,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 28,
      height: 13,
      transform: "matrix(0,-1,1,0,0,59)",
      transformOrigin: "0 0",
      color: "var(--patch-color-surface-primary-base)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Pointer, {
    style: {
      transform: "scale(1.167, 1.083)",
      transformOrigin: "0 0"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 13,
      backgroundColor: "var(--patch-color-surface-primary-base)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 128,
      height: 128,
      boxShadow: "0px 0px 24px 0px rgba(18,18,18,0.16)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 13,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      top: 0,
      width: 28,
      height: 13,
      color: "var(--patch-color-surface-primary-base)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Pointer, {
    style: {
      transform: "scale(1.167, 1.083)",
      transformOrigin: "0 0"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 13,
      backgroundColor: "var(--patch-color-surface-primary-base)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 128,
      height: 128,
      boxShadow: "0px 0px 24px 0px rgba(18,18,18,0.16)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 59,
      height: 13,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 31,
      top: 0,
      width: 28,
      height: 13,
      color: "var(--patch-color-surface-primary-base)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Pointer, {
    style: {
      transform: "scale(1.167, 1.083)",
      transformOrigin: "0 0"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 13,
      backgroundColor: "var(--patch-color-surface-primary-base)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }));
  const __impls = {
    // figma: Pointer=N
    "pointer=n": __body0,
    // figma: Pointer=NNE
    "pointer=nne": __body1,
    // figma: Pointer=NE
    "pointer=ne": __body2,
    // figma: Pointer=ENE
    "pointer=ene": __body3,
    // figma: Pointer=E
    "pointer=e": __body4,
    // figma: Pointer=ESE
    "pointer=ese": __body5,
    // figma: Pointer=SE
    "pointer=se": __body6,
    // figma: Pointer=SSE
    "pointer=sse": __body7,
    // figma: Pointer=S
    "pointer=s": __body8,
    // figma: Pointer=SSW
    "pointer=ssw": __body9,
    // figma: Pointer=SW
    "pointer=sw": __body10,
    // figma: Pointer=WSW
    "pointer=wsw": __body11,
    // figma: Pointer=W
    "pointer=w": __body12,
    // figma: Pointer=WNW
    "pointer=wnw": __body13,
    // figma: Pointer=NW
    "pointer=nw": __body14,
    // figma: Pointer=NNW
    "pointer=nnw": __body15
  };
  return (__impls[__vkey_IOSPopover(props)] ?? __body0)();
}

// figma node: 3403:5483 Popover
function Popover(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1576,
      height: 800,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(StatusBlock, {
    style: {
      position: "absolute",
      left: 1068,
      top: 40,
      width: 468
    },
    date: "2026-05-01",
    orientation: "default"
  }), /*#__PURE__*/React.createElement(DesktopPopover, {
    style: {
      position: "absolute",
      left: 573,
      top: 340,
      width: 200
    }
  }), /*#__PURE__*/React.createElement(IOSPopover, {
    style: {
      position: "absolute",
      left: 813,
      top: 340,
      width: 183,
      height: 188
    },
    pointer: "sse"
  }), /*#__PURE__*/React.createElement(TitleBlock, {
    style: {
      position: "absolute",
      left: 40,
      top: 40,
      width: 728
    },
    text1: "Popover",
    text2: "A generic overlay container."
  }), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 40,
      top: 148,
      width: 472,
      height: 152
    },
    subheading: false,
    text1: "Usage",
    text3: "Use for compact temporary overlay surfaces presenting various content types.\nOften generically referred to as a dropdown or popup, and more accurately (in Patchwork, at least) as a Flyout. See comparison."
  }), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 552,
      top: 148,
      width: 472,
      height: 132
    },
    subheading: false,
    text1: "Properties",
    text3: "Pointer (iOS only): the position of the pointer in relation to the popover body.\nSlots: default content slots are available."
  }), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 40,
      top: 340,
      width: 472,
      height: 232
    },
    subheading: false,
    text1: "Behavior",
    text3: "Unlike a modal, a popover appears adjacent to the triggering element via some basic positional logic.\nA popover will not disappear when a selection is made from its contents; explicit dismiss functionality should be included. Clicking elsewhere on the screen will close it, however.\nScrollable content needs to be contained inside a dedicated container.\nNon-blocking."
  }), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 1064,
      top: 148,
      width: 472,
      height: 132
    },
    subheading: false,
    text1: "Presentation",
    text3: "Does not appear on an isolation layer.\nFront end implementation has no awareness of its content and includes no padding; it is a container only."
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 573,
      top: 476,
      width: 39,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Desktop"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 813,
      top: 531,
      width: 17,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "iOS"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1064,
      top: 320,
      width: 472,
      borderTop: "1px solid var(--patch-color-gray-300)",
      borderRight: "1px solid var(--patch-color-gray-300)",
      borderBottom: "1px solid var(--patch-color-gray-300)",
      borderLeft: "1px solid var(--patch-color-gray-300)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 0px 16px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 21,
      height: 30.5,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.500,
    height: 9.500,
    viewBox: "0 0 9.500 9.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.5,
      top: 10.5,
      width: 9.5,
      height: 9.5,
      color: "rgb(26,188,254)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4.75 C 0 3.49 0.5 2.282 1.391 1.391 C 2.282 0.5 3.49 0 4.75 0 C 6.01 0 7.218 0.5 8.109 1.391 C 9 2.282 9.5 3.49 9.5 4.75 C 9.5 6.01 9 7.218 8.109 8.109 C 7.218 9 6.01 9.5 4.75 9.5 C 3.49 9.5 2.282 9 1.391 8.109 C 0.5 7.218 0 6.01 0 4.75 L 0 4.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.500,
    height: 9.500,
    viewBox: "0 0 9.500 9.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 20,
      width: 9.5,
      height: 9.5,
      color: "rgb(10,207,131)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4.75 C 0 3.49 0.5 2.282 1.391 1.391 C 2.282 0.5 3.49 0 4.75 0 L 9.5 0 L 9.5 4.75 C 9.5 6.01 9 7.218 8.109 8.109 C 7.218 9 6.01 9.5 4.75 9.5 C 3.49 9.5 2.282 9 1.391 8.109 C 0.5 7.218 0 6.01 0 4.75 L 0 4.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.500,
    height: 9.500,
    viewBox: "0 0 9.500 9.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.5,
      top: 1,
      width: 9.5,
      height: 9.5,
      color: "rgb(255,114,98)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 9.5 L 4.75 9.5 C 6.01 9.5 7.218 9 8.109 8.109 C 9 7.218 9.5 6.01 9.5 4.75 C 9.5 3.49 9 2.282 8.109 1.391 C 7.218 0.5 6.01 0 4.75 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.500,
    height: 9.500,
    viewBox: "0 0 9.500 9.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 9.5,
      height: 9.5,
      color: "rgb(242,78,30)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4.75 C 0 6.01 0.5 7.218 1.391 8.109 C 2.282 9 3.49 9.5 4.75 9.5 L 9.5 9.5 L 9.5 0 L 4.75 0 C 3.49 0 2.282 0.5 1.391 1.391 C 0.5 2.282 0 3.49 0 4.75 L 0 4.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.500,
    height: 9.500,
    viewBox: "0 0 9.500 9.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 10.5,
      width: 9.5,
      height: 9.5,
      color: "rgb(162,89,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4.75 C 0 6.01 0.5 7.218 1.391 8.109 C 2.282 9 3.49 9.5 4.75 9.5 L 9.5 9.5 L 9.5 0 L 4.75 0 C 3.49 0 2.282 0.5 1.391 1.391 C 0.5 2.282 0 3.49 0 4.75 L 0 4.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--patch-color-gray-800)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Slot characteristics and visibility are editable.")));
}

// figma node: 5703:1240 .iOS / Sheets / Blocks / Edge Icon
function IOSSheetsBlocksEdgeIcon3(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32,
      height: 32
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "32"
  })));
}

// figma node: 5193:14264 icon/chevron-left (3 variants)
const __venc_IconChevronLeft3 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconChevronLeft3 = p => "size=" + __venc_IconChevronLeft3(p.size);
function IconChevronLeft3(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "16"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      position: "relative",
      color: "var(--patch-color-text-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 18,
    viewBox: "0 0 10 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 10,
      top: 7,
      width: 10,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.707 0.293 C 10.098 0.683 10.098 1.317 9.707 1.707 L 2.414 9 L 9.707 16.293 C 10.098 16.683 10.098 17.317 9.707 17.707 C 9.317 18.098 8.683 18.098 8.293 17.707 L 0.293 9.707 C 0.105 9.52 0 9.265 0 9 C 0 8.735 0.105 8.48 0.293 8.293 L 8.293 0.293 C 8.683 -0.098 9.317 -0.098 9.707 0.293 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--patch-color-text-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 14,
    viewBox: "0 0 8 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 5,
      width: 8,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.791 0.23 C 8.078 0.529 8.068 1.004 7.77 1.291 L 1.832 7 L 7.77 12.709 C 8.068 12.996 8.078 13.471 7.791 13.77 C 7.504 14.068 7.029 14.078 6.73 13.791 L 0.23 7.541 C 0.083 7.399 0 7.204 0 7 C 0 6.796 0.083 6.601 0.23 6.459 L 6.73 0.209 C 7.029 -0.078 7.504 -0.068 7.791 0.23 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      color: "var(--patch-color-text-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 10,
    viewBox: "0 0 6 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 2.984,
      width: 6,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.795 9.765 C 6.08 9.464 6.066 8.989 5.765 8.705 L 1.842 5 L 5.765 1.295 C 6.066 1.011 6.08 0.536 5.795 0.235 C 5.511 -0.066 5.036 -0.08 4.735 0.205 L 0.235 4.455 C 0.085 4.596 0 4.794 0 5 C 0 5.206 0.085 5.404 0.235 5.545 L 4.735 9.795 C 5.036 10.08 5.511 10.066 5.795 9.765 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: size=32
    "size=32": __body0,
    // figma: size=24
    "size=24": __body1,
    // figma: size=16
    "size=16": __body2
  };
  return (__impls[__vkey_IconChevronLeft3(props)] ?? __body2)();
}

// figma node: 5703:1242 .iOS / Sheets / Blocks / Lead Edge (3 variants)
const __venc_IOSSheetsBlocksLeadEdge3 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IOSSheetsBlocksLeadEdge3 = p => "options=" + __venc_IOSSheetsBlocksLeadEdge3(p.options);
function IOSSheetsBlocksLeadEdge3(_p = {}) {
  const props = {
    ..._p,
    options: _p.options ?? "flat button"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 8,
      height: 32,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  });
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IOSSheetsBlocksEdgeIcon3, {
    icon: /*#__PURE__*/React.createElement(IconChevronLeft3, {
      size: "32"
    })
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      padding: "4px 4px 4px 4px",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--patch-color-text-accent-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "{Value}")))));
  const __impls = {
    // figma: Options=Nothing
    "options=nothing": __body0,
    // figma: Options=Icon
    "options=icon": __body1,
    // figma: Options=Flat button
    "options=flat button": __body2
  };
  return (__impls[__vkey_IOSSheetsBlocksLeadEdge3(props)] ?? __body2)();
}

// figma node: 5192:16640 icon/x (3 variants)
const __venc_IconX4 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconX4 = p => "size=" + __venc_IconX4(p.size);
function IconX4(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "16"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      position: "relative",
      color: "var(--patch-color-text-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 7,
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.707 1.707 L 10.414 9 L 17.707 16.293 C 18.098 16.683 18.098 17.317 17.707 17.707 C 17.317 18.098 16.683 18.098 16.293 17.707 L 9 10.414 L 1.707 17.707 C 1.317 18.098 0.683 18.098 0.293 17.707 C -0.098 17.317 -0.098 16.683 0.293 16.293 L 7.586 9 L 0.293 1.707 C -0.098 1.317 -0.098 0.683 0.293 0.293 C 0.683 -0.098 1.317 -0.098 1.707 0.293 L 9 7.586 L 16.293 0.293 C 16.683 -0.098 17.317 -0.098 17.707 0.293 C 18.098 0.683 18.098 1.317 17.707 1.707 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--patch-color-text-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.78 1.28 L 8.061 7 L 13.78 12.72 C 14.073 13.013 14.073 13.487 13.78 13.78 C 13.487 14.073 13.013 14.073 12.72 13.78 L 7 8.061 L 1.28 13.78 C 0.987 14.073 0.513 14.073 0.22 13.78 C -0.073 13.487 -0.073 13.013 0.22 12.72 L 5.939 7 L 0.22 1.28 C -0.073 0.987 -0.073 0.513 0.22 0.22 C 0.513 -0.073 0.987 -0.073 1.28 0.22 L 7 5.939 L 12.72 0.22 C 13.013 -0.073 13.487 -0.073 13.78 0.22 C 14.073 0.513 14.073 0.987 13.78 1.28 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      color: "var(--patch-color-text-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7.970,
    height: 7.971,
    viewBox: "0 0 7.970 7.971",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.006,
      top: 4.02,
      width: 7.97,
      height: 7.971
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.28 0.221 L 3.984 2.925 L 6.689 0.22 C 6.982 -0.073 7.457 -0.073 7.75 0.22 C 8.043 0.513 8.043 0.987 7.75 1.28 L 5.045 3.986 L 7.75 6.691 C 8.043 6.984 8.043 7.459 7.75 7.752 C 7.458 8.045 6.983 8.045 6.69 7.752 L 3.984 5.046 L 1.28 7.751 C 0.987 8.044 0.513 8.044 0.22 7.751 C -0.073 7.458 -0.073 6.983 0.22 6.69 L 2.924 3.986 L 0.22 1.282 C -0.073 0.989 -0.073 0.514 0.22 0.221 C 0.513 -0.072 0.988 -0.072 1.28 0.221 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: size=32
    "size=32": __body0,
    // figma: size=24
    "size=24": __body1,
    // figma: size=16
    "size=16": __body2
  };
  return (__impls[__vkey_IconX4(props)] ?? __body2)();
}

// figma node: 5322:37420 Mobile / Buttons / Button (54 variants)
const __venc_MobileButtonsButton3 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_MobileButtonsButton3 = p => "role=" + __venc_MobileButtonsButton3(p.role) + '|' + "type=" + __venc_MobileButtonsButton3(p.type) + '|' + "size=" + __venc_MobileButtonsButton3(p.size) + '|' + "state=" + __venc_MobileButtonsButton3(p.state);
function MobileButtonsButton3(_p = {}) {
  const props = {
    ..._p,
    role: _p.role ?? "default",
    type: _p.type ?? "primary",
    size: _p.size ?? "s",
    state: _p.state ?? "at rest",
    value: _p.value ?? "{Value}",
    lead: _p.lead ?? true
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-error)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 16px 4px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-on-error)",
      flexShrink: 0
    }
  }, props.value))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-accent-primary)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 16px 4px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--patch-color-text-on-accent-primary)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-on-accent-primary)",
      flexShrink: 0
    }
  }, props.value))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-surface-primary-dull)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 16px 4px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-disabled)",
      flexShrink: 0
    }
  }, props.value))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-surface-primary-dull)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "8px 24px 8px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-24) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-24) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "var(--patch-color-text-disabled)",
      flexShrink: 0
    }
  }, props.value))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-surface-primary-dull)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "16px 32px 16px 32px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-32) * 1px)",
      paddingTop: "calc(var(--patch-spacer-16) * 1px)",
      paddingRight: "calc(var(--patch-spacer-32) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-16) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "24px",
      color: "var(--patch-color-text-disabled)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-accent-primary)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "8px 24px 8px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-24) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-24) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--patch-color-text-on-accent-primary)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "var(--patch-color-text-on-accent-primary)",
      flexShrink: 0
    }
  }, props.value))));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-accent-primary)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "16px 32px 16px 32px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-32) * 1px)",
      paddingTop: "calc(var(--patch-spacer-16) * 1px)",
      paddingRight: "calc(var(--patch-spacer-32) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-16) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--patch-color-text-on-accent-primary)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "24px",
      color: "var(--patch-color-text-on-accent-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value))));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-accent-primary)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      backgroundColor: "rgba(18,18,18,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 16px 4px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--patch-color-text-on-accent-primary)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-on-accent-primary)",
      flexShrink: 0
    }
  }, props.value))));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-accent-primary)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      backgroundColor: "rgba(18,18,18,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "8px 24px 8px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-24) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-24) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--patch-color-text-on-accent-primary)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "var(--patch-color-text-on-accent-primary)",
      flexShrink: 0
    }
  }, props.value))));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-accent-primary)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      backgroundColor: "rgba(18,18,18,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "16px 32px 16px 32px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-32) * 1px)",
      paddingTop: "calc(var(--patch-spacer-16) * 1px)",
      paddingRight: "calc(var(--patch-spacer-32) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-16) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "var(--patch-color-text-on-accent-primary)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "24px",
      color: "var(--patch-color-text-on-accent-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value))));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-error)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      backgroundColor: "rgba(18,18,18,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 16px 4px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-on-error)",
      flexShrink: 0
    }
  }, props.value))));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-error)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "8px 24px 8px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-24) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-24) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "var(--patch-color-text-on-error)",
      flexShrink: 0
    }
  }, props.value))));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-error)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      backgroundColor: "rgba(18,18,18,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "8px 24px 8px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-24) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-24) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "var(--patch-color-text-on-error)",
      flexShrink: 0
    }
  }, props.value))));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-error)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "16px 32px 16px 32px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-32) * 1px)",
      paddingTop: "calc(var(--patch-spacer-16) * 1px)",
      paddingRight: "calc(var(--patch-spacer-32) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-16) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "24px",
      color: "var(--patch-color-text-on-error)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value))));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-error)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      backgroundColor: "rgba(18,18,18,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "16px 32px 16px 32px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-32) * 1px)",
      paddingTop: "calc(var(--patch-spacer-16) * 1px)",
      paddingRight: "calc(var(--patch-spacer-32) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-16) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "24px",
      color: "var(--patch-color-text-on-error)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value))));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-surface-primary-lowest)",
      borderTop: "1px solid var(--patch-color-border-error)",
      borderRight: "1px solid var(--patch-color-border-error)",
      borderBottom: "1px solid var(--patch-color-border-error)",
      borderLeft: "1px solid var(--patch-color-border-error)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 16px 4px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-error)",
      flexShrink: 0
    }
  }, props.value))));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-surface-primary-lowest)",
      borderTop: "1px solid var(--patch-color-border-accent-primary)",
      borderRight: "1px solid var(--patch-color-border-accent-primary)",
      borderBottom: "1px solid var(--patch-color-border-accent-primary)",
      borderLeft: "1px solid var(--patch-color-border-accent-primary)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 16px 4px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(186,48,3)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-accent-primary)",
      flexShrink: 0
    }
  }, props.value))));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      borderTop: "1px solid var(--patch-color-border-disabled)",
      borderRight: "1px solid var(--patch-color-border-disabled)",
      borderBottom: "1px solid var(--patch-color-border-disabled)",
      borderLeft: "1px solid var(--patch-color-border-disabled)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 16px 4px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,133,93)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-disabled)",
      flexShrink: 0
    }
  }, props.value))));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      borderTop: "1px solid var(--patch-color-border-disabled)",
      borderRight: "1px solid var(--patch-color-border-disabled)",
      borderBottom: "1px solid var(--patch-color-border-disabled)",
      borderLeft: "1px solid var(--patch-color-border-disabled)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "8px 24px 8px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-24) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-24) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,133,93)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "var(--patch-color-text-disabled)",
      flexShrink: 0
    }
  }, props.value))));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      borderTop: "1px solid var(--patch-color-border-disabled)",
      borderRight: "1px solid var(--patch-color-border-disabled)",
      borderBottom: "1px solid var(--patch-color-border-disabled)",
      borderLeft: "1px solid var(--patch-color-border-disabled)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "16px 32px 16px 32px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-32) * 1px)",
      paddingTop: "calc(var(--patch-spacer-16) * 1px)",
      paddingRight: "calc(var(--patch-spacer-32) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-16) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,133,93)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "24px",
      color: "var(--patch-color-text-disabled)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value))));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 16px 4px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,133,93)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-disabled)",
      flexShrink: 0
    }
  }, props.value))));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "8px 24px 8px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-24) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-24) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,133,93)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "var(--patch-color-text-disabled)",
      flexShrink: 0
    }
  }, props.value))));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "16px 32px 16px 32px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-32) * 1px)",
      paddingTop: "calc(var(--patch-spacer-16) * 1px)",
      paddingRight: "calc(var(--patch-spacer-32) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-16) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,133,93)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "24px",
      color: "var(--patch-color-text-disabled)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value))));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-surface-primary-lowest)",
      borderTop: "1px solid var(--patch-color-border-accent-primary)",
      borderRight: "1px solid var(--patch-color-border-accent-primary)",
      borderBottom: "1px solid var(--patch-color-border-accent-primary)",
      borderLeft: "1px solid var(--patch-color-border-accent-primary)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "8px 24px 8px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-24) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-24) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(186,48,3)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "var(--patch-color-text-accent-primary)",
      flexShrink: 0
    }
  }, props.value))));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-surface-primary-lowest)",
      borderTop: "1px solid var(--patch-color-border-accent-primary)",
      borderRight: "1px solid var(--patch-color-border-accent-primary)",
      borderBottom: "1px solid var(--patch-color-border-accent-primary)",
      borderLeft: "1px solid var(--patch-color-border-accent-primary)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "16px 32px 16px 32px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-32) * 1px)",
      paddingTop: "calc(var(--patch-spacer-16) * 1px)",
      paddingRight: "calc(var(--patch-spacer-32) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-16) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(186,48,3)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "24px",
      color: "var(--patch-color-text-accent-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value))));
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-accent-primary)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 16px 4px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,102,72)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-on-accent-primary)",
      flexShrink: 0
    }
  }, props.value))));
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-accent-primary)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "8px 24px 8px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-24) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-24) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,102,72)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "var(--patch-color-text-on-accent-primary)",
      flexShrink: 0
    }
  }, props.value))));
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-accent-primary)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "16px 32px 16px 32px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-32) * 1px)",
      paddingTop: "calc(var(--patch-spacer-16) * 1px)",
      paddingRight: "calc(var(--patch-spacer-32) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-16) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(0,102,72)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "24px",
      color: "var(--patch-color-text-on-accent-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value))));
  const __body28 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-error)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 16px 4px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(151,39,2)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-on-error)",
      flexShrink: 0
    }
  }, props.value))));
  const __body29 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 16px 4px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-error)",
      flexShrink: 0
    }
  }, props.value))));
  const __body30 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 16px 4px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(186,48,3)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-accent-primary)",
      flexShrink: 0
    }
  }, props.value))));
  const __body31 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "8px 24px 8px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-24) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-24) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(186,48,3)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "var(--patch-color-text-accent-primary)",
      flexShrink: 0
    }
  }, props.value))));
  const __body32 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "16px 32px 16px 32px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-32) * 1px)",
      paddingTop: "calc(var(--patch-spacer-16) * 1px)",
      paddingRight: "calc(var(--patch-spacer-32) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-16) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(186,48,3)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "24px",
      color: "var(--patch-color-text-accent-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value))));
  const __body33 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "8px 24px 8px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-24) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-24) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "var(--patch-color-text-error)",
      flexShrink: 0
    }
  }, props.value))));
  const __body34 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-error)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "8px 24px 8px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-24) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-24) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(151,39,2)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "var(--patch-color-text-on-error)",
      flexShrink: 0
    }
  }, props.value))));
  const __body35 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "16px 32px 16px 32px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-32) * 1px)",
      paddingTop: "calc(var(--patch-spacer-16) * 1px)",
      paddingRight: "calc(var(--patch-spacer-32) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-16) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "24px",
      color: "var(--patch-color-text-error)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value))));
  const __body36 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-error)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "16px 32px 16px 32px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-32) * 1px)",
      paddingTop: "calc(var(--patch-spacer-16) * 1px)",
      paddingRight: "calc(var(--patch-spacer-32) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-16) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(151,39,2)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "24px",
      color: "var(--patch-color-text-on-error)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value))));
  const __body37 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-surface-primary-lowest)",
      borderTop: "1px solid var(--patch-color-border-error)",
      borderRight: "1px solid var(--patch-color-border-error)",
      borderBottom: "1px solid var(--patch-color-border-error)",
      borderLeft: "1px solid var(--patch-color-border-error)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "8px 24px 8px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-24) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-24) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "var(--patch-color-text-error)",
      flexShrink: 0
    }
  }, props.value))));
  const __body38 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-surface-primary-lowest)",
      borderTop: "1px solid var(--patch-color-border-error)",
      borderRight: "1px solid var(--patch-color-border-error)",
      borderBottom: "1px solid var(--patch-color-border-error)",
      borderLeft: "1px solid var(--patch-color-border-error)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "16px 32px 16px 32px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-32) * 1px)",
      paddingTop: "calc(var(--patch-spacer-16) * 1px)",
      paddingRight: "calc(var(--patch-spacer-32) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-16) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "24px",
      color: "var(--patch-color-text-error)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value))));
  const __impls = {
    // figma: Role=Error, Type=Primary, Size=S, State=at rest
    "role=error|type=primary|size=s|state=at rest": __body0,
    // figma: Role=Default, Type=Primary, Size=S, State=at rest
    "role=default|type=primary|size=s|state=at rest": __body1,
    // figma: Role=Default, Type=Primary, Size=S, State=is disabled
    "role=default|type=primary|size=s|state=is disabled": __body2,
    // figma: Role=Error, Type=Primary, Size=S, State=is disabled
    "role=error|type=primary|size=s|state=is disabled": __body2,
    // figma: Role=Default, Type=Primary, Size=M, State=is disabled
    "role=default|type=primary|size=m|state=is disabled": __body3,
    // figma: Role=Error, Type=Primary, Size=M, State=is disabled
    "role=error|type=primary|size=m|state=is disabled": __body3,
    // figma: Role=Default, Type=Primary, Size=L, State=is disabled
    "role=default|type=primary|size=l|state=is disabled": __body4,
    // figma: Role=Error, Type=Primary, Size=L, State=is disabled
    "role=error|type=primary|size=l|state=is disabled": __body4,
    // figma: Role=Default, Type=Primary, Size=M, State=at rest
    "role=default|type=primary|size=m|state=at rest": __body5,
    // figma: Role=Default, Type=Primary, Size=L, State=at rest
    "role=default|type=primary|size=l|state=at rest": __body6,
    // figma: Role=Default, Type=Primary, Size=S, State=is active
    "role=default|type=primary|size=s|state=is active": __body7,
    // figma: Role=Default, Type=Primary, Size=M, State=is active
    "role=default|type=primary|size=m|state=is active": __body8,
    // figma: Role=Default, Type=Primary, Size=L, State=is active
    "role=default|type=primary|size=l|state=is active": __body9,
    // figma: Role=Error, Type=Primary, Size=S, State=is active
    "role=error|type=primary|size=s|state=is active": __body10,
    // figma: Role=Error, Type=Primary, Size=M, State=at rest
    "role=error|type=primary|size=m|state=at rest": __body11,
    // figma: Role=Error, Type=Primary, Size=M, State=is active
    "role=error|type=primary|size=m|state=is active": __body12,
    // figma: Role=Error, Type=Primary, Size=L, State=at rest
    "role=error|type=primary|size=l|state=at rest": __body13,
    // figma: Role=Error, Type=Primary, Size=L, State=is active
    "role=error|type=primary|size=l|state=is active": __body14,
    // figma: Role=Error, Type=Secondary, Size=S, State=at rest
    "role=error|type=secondary|size=s|state=at rest": __body15,
    // figma: Role=Default, Type=Secondary, Size=S, State=at rest
    "role=default|type=secondary|size=s|state=at rest": __body16,
    // figma: Role=Default, Type=Secondary, Size=S, State=is disabled
    "role=default|type=secondary|size=s|state=is disabled": __body17,
    // figma: Role=Error, Type=Secondary, Size=S, State=is disabled
    "role=error|type=secondary|size=s|state=is disabled": __body17,
    // figma: Role=Default, Type=Secondary, Size=M, State=is disabled
    "role=default|type=secondary|size=m|state=is disabled": __body18,
    // figma: Role=Error, Type=Secondary, Size=M, State=is disabled
    "role=error|type=secondary|size=m|state=is disabled": __body18,
    // figma: Role=Default, Type=Secondary, Size=L, State=is disabled
    "role=default|type=secondary|size=l|state=is disabled": __body19,
    // figma: Role=Error, Type=Secondary, Size=L, State=is disabled
    "role=error|type=secondary|size=l|state=is disabled": __body19,
    // figma: Role=Default, Type=Tertiary, Size=S, State=is disabled
    "role=default|type=tertiary|size=s|state=is disabled": __body20,
    // figma: Role=Error, Type=Tertiary, Size=S, State=is disabled
    "role=error|type=tertiary|size=s|state=is disabled": __body20,
    // figma: Role=Default, Type=Tertiary, Size=M, State=is disabled
    "role=default|type=tertiary|size=m|state=is disabled": __body21,
    // figma: Role=Error, Type=Tertiary, Size=M, State=is disabled
    "role=error|type=tertiary|size=m|state=is disabled": __body21,
    // figma: Role=Default, Type=Tertiary, Size=L, State=is disabled
    "role=default|type=tertiary|size=l|state=is disabled": __body22,
    // figma: Role=Error, Type=Tertiary, Size=L, State=is disabled
    "role=error|type=tertiary|size=l|state=is disabled": __body22,
    // figma: Role=Default, Type=Secondary, Size=M, State=at rest
    "role=default|type=secondary|size=m|state=at rest": __body23,
    // figma: Role=Default, Type=Secondary, Size=L, State=at rest
    "role=default|type=secondary|size=l|state=at rest": __body24,
    // figma: Role=Default, Type=Secondary, Size=S, State=is active
    "role=default|type=secondary|size=s|state=is active": __body25,
    // figma: Role=Default, Type=Secondary, Size=M, State=is active
    "role=default|type=secondary|size=m|state=is active": __body26,
    // figma: Role=Default, Type=Secondary, Size=L, State=is active
    "role=default|type=secondary|size=l|state=is active": __body27,
    // figma: Role=Error, Type=Secondary, Size=S, State=is active
    "role=error|type=secondary|size=s|state=is active": __body28,
    // figma: Role=Error, Type=Tertiary, Size=S, State=at rest
    "role=error|type=tertiary|size=s|state=at rest": __body29,
    // figma: Role=Default, Type=Tertiary, Size=S, State=at rest
    "role=default|type=tertiary|size=s|state=at rest": __body30,
    // figma: Role=Default, Type=Tertiary, Size=M, State=at rest
    "role=default|type=tertiary|size=m|state=at rest": __body31,
    // figma: Role=Default, Type=Tertiary, Size=L, State=at rest
    "role=default|type=tertiary|size=l|state=at rest": __body32,
    // figma: Role=Default, Type=Tertiary, Size=S, State=is active
    "role=default|type=tertiary|size=s|state=is active": __body25,
    // figma: Role=Default, Type=Tertiary, Size=M, State=is active
    "role=default|type=tertiary|size=m|state=is active": __body26,
    // figma: Role=Default, Type=Tertiary, Size=L, State=is active
    "role=default|type=tertiary|size=l|state=is active": __body27,
    // figma: Role=Error, Type=Tertiary, Size=S, State=is active
    "role=error|type=tertiary|size=s|state=is active": __body28,
    // figma: Role=Error, Type=Tertiary, Size=M, State=at rest
    "role=error|type=tertiary|size=m|state=at rest": __body33,
    // figma: Role=Error, Type=Tertiary, Size=M, State=is active
    "role=error|type=tertiary|size=m|state=is active": __body34,
    // figma: Role=Error, Type=Tertiary, Size=L, State=at rest
    "role=error|type=tertiary|size=l|state=at rest": __body35,
    // figma: Role=Error, Type=Tertiary, Size=L, State=is active
    "role=error|type=tertiary|size=l|state=is active": __body36,
    // figma: Role=Error, Type=Secondary, Size=M, State=at rest
    "role=error|type=secondary|size=m|state=at rest": __body37,
    // figma: Role=Error, Type=Secondary, Size=M, State=is active
    "role=error|type=secondary|size=m|state=is active": __body34,
    // figma: Role=Error, Type=Secondary, Size=L, State=at rest
    "role=error|type=secondary|size=l|state=at rest": __body38,
    // figma: Role=Error, Type=Secondary, Size=L, State=is active
    "role=error|type=secondary|size=l|state=is active": __body36
  };
  return (__impls[__vkey_MobileButtonsButton3(props)] ?? __body1)();
}

// figma node: 5703:1248 .iOS / Sheets / Blocks / Trail Edge (4 variants)
const __venc_IOSSheetsBlocksTrailEdge4 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IOSSheetsBlocksTrailEdge4 = p => "options=" + __venc_IOSSheetsBlocksTrailEdge4(p.options);
function IOSSheetsBlocksTrailEdge4(_p = {}) {
  const props = {
    ..._p,
    options: _p.options ?? "button"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 8,
      height: 32,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  });
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IOSSheetsBlocksEdgeIcon3, {
    icon: /*#__PURE__*/React.createElement(IconX4, {
      size: "32"
    })
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      padding: "0px 4px 0px 4px",
      justifyContent: "flex-end",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-4) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-4) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(MobileButtonsButton3, {
    style: {
      position: "relative",
      width: 74,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    lead: false,
    role: "default",
    type: "primary",
    size: "s",
    state: "at rest"
  }));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      padding: "4px 4px 4px 4px",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-4) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-4) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--patch-color-text-accent-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "{Value}")))));
  const __impls = {
    // figma: Options=Nothing
    "options=nothing": __body0,
    // figma: Options=Icon
    "options=icon": __body1,
    // figma: Options=Button
    "options=button": __body2,
    // figma: Options=Flat button
    "options=flat button": __body3
  };
  return (__impls[__vkey_IOSSheetsBlocksTrailEdge4(props)] ?? __body2)();
}

// figma node: 5703:1256 iOS / Sheets / Blocks / Header
function IOSSheetsBlocksHeader(_p = {}) {
  const props = {
    ..._p,
    title: _p.title ?? true
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 361,
      height: 32,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IOSSheetsBlocksLeadEdge3, {
    options: "flat button"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 156,
      top: 2,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }
  }, props.title && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Euclid Circular B\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 18,
      textAlign: "center",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "24px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0
    }
  }, "{Title}"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 299,
      top: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IOSSheetsBlocksTrailEdge4, {
    options: "flat button"
  })));
}

// figma node: 5435:202 .iOS / Sheets / Blocks / Grabber Bar
function IOSSheetsBlocksGrabberBar(_p = {}) {
  const props = {
    ..._p,
    handle: _p.handle ?? true
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      height: 14,
      position: "relative",
      ...props.style
    }
  }, props.handle && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 169,
      top: 5,
      width: 36,
      height: 5,
      borderRadius: 9999,
      backgroundColor: "var(--patch-form-color-fill-tertiary)"
    }
  }));
}

// figma node: 6060:36412 iOS / Sheets / Phone
function IOSSheetsPhone(_p = {}) {
  const props = {
    ..._p,
    homeIndicator: _p.homeIndicator ?? true,
    navigationOptional: _p.navigationOptional ?? "",
    header: _p.header ?? "",
    footerOptional: _p.footerOptional ?? "",
    body: _p.body ?? ""
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      height: 384,
      borderRadius: "10px 10px 0px 0px",
      backgroundColor: "var(--patch-color-surface-primary-base)",
      boxShadow: "0px -3px 8px 0px rgba(18,18,18,0.1)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(IOSSheetsBlocksGrabberBar, {
    style: {
      position: "relative",
      height: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "12px 8px 12px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-12) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-12) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(IOSSheetsBlocksHeader, {
    style: {
      position: "relative",
      height: 32,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 48,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 55,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      padding: "13px 0px 42px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), props.homeIndicator && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 363,
      width: 375,
      height: 21
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 116,
      top: 8,
      width: 144,
      height: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,1,144,0)",
      transformOrigin: "0 0",
      width: 144,
      height: 5,
      borderRadius: 100,
      backgroundColor: "var(--label-primary)"
    }
  }))));
}

// figma node: 4235:604 icon/placeholder (3 variants)
const __venc_IconPlaceholder7 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconPlaceholder7 = p => "size=" + __venc_IconPlaceholder7(p.size);
function IconPlaceholder7(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "16"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      position: "relative",
      color: "var(--patch-color-text-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 26.354,
    height: 26.354,
    viewBox: "0 0 26.354 26.354",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.823,
      top: 2.823,
      width: 26.354,
      height: 26.354
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.597 24.403 C 1.501 24.28 1.419 24.144 1.354 24 C 0.66 23.686 0.177 22.988 0.177 22.177 L 0.177 4.177 C 0.177 3.366 0.66 2.667 1.354 2.354 C 1.419 2.209 1.501 2.074 1.597 1.95 L 0 0.354 L 0.354 0 L 1.95 1.597 C 2.074 1.501 2.209 1.419 2.354 1.354 C 2.667 0.66 3.366 0.177 4.177 0.177 L 22.177 0.177 C 22.988 0.177 23.686 0.66 24 1.354 C 24.144 1.419 24.28 1.501 24.403 1.597 L 26 0 L 26.354 0.354 L 24.757 1.95 C 24.853 2.074 24.935 2.209 25 2.354 C 25.694 2.667 26.177 3.366 26.177 4.177 L 26.177 22.177 C 26.177 22.988 25.694 23.686 25 24 C 24.935 24.144 24.853 24.28 24.757 24.403 L 26.354 26 L 26 26.354 L 24.403 24.757 C 24.28 24.853 24.144 24.935 24 25 C 23.686 25.694 22.988 26.177 22.177 26.177 L 4.177 26.177 C 3.366 26.177 2.667 25.694 2.354 25 C 2.209 24.935 2.074 24.853 1.95 24.757 L 0.354 26.354 L 0 26 L 1.597 24.403 Z M 23.677 20.843 C 23.33 21.318 22.951 21.768 22.544 22.191 L 23.677 23.323 L 23.677 20.843 Z M 23.323 23.677 L 22.191 22.544 C 21.768 22.951 21.318 23.33 20.843 23.677 L 23.323 23.677 Z M 23.677 19.962 L 23.677 13.427 L 13.78 13.427 L 22.191 21.837 C 22.743 21.262 23.241 20.634 23.677 19.962 Z M 23.677 12.927 L 23.677 6.392 C 23.241 5.719 22.743 5.092 22.191 4.516 L 13.78 12.927 L 23.677 12.927 Z M 24.177 13.427 L 24.177 19.119 C 24.359 18.783 24.526 18.438 24.677 18.084 L 24.677 13.427 L 24.177 13.427 Z M 24.677 12.927 L 24.677 8.27 C 24.526 7.916 24.359 7.571 24.177 7.235 L 24.177 12.927 L 24.677 12.927 Z M 25.177 13.427 L 25.177 16.688 C 25.48 15.651 25.652 14.557 25.674 13.427 L 25.177 13.427 Z M 25.674 12.927 C 25.652 11.796 25.48 10.703 25.177 9.665 L 25.177 12.927 L 25.674 12.927 Z M 12.573 12.927 L 4.163 4.516 C 3.61 5.092 3.112 5.719 2.677 6.392 L 2.677 12.927 L 12.573 12.927 Z M 2.177 12.927 L 2.177 7.235 C 1.995 7.571 1.828 7.916 1.677 8.27 L 1.677 12.927 L 2.177 12.927 Z M 1.677 13.427 L 1.677 18.084 C 1.828 18.438 1.995 18.783 2.177 19.119 L 2.177 13.427 L 1.677 13.427 Z M 1.177 12.927 L 1.177 9.665 C 0.874 10.703 0.701 11.796 0.679 12.927 L 1.177 12.927 Z M 0.679 13.427 C 0.701 14.557 0.874 15.651 1.177 16.688 L 1.177 13.427 L 0.679 13.427 Z M 2.677 13.427 L 2.677 19.962 C 3.112 20.634 3.61 21.262 4.163 21.837 L 12.573 13.427 L 2.677 13.427 Z M 21.837 22.191 L 13.409 13.762 L 13.409 23.677 L 19.962 23.677 C 20.634 23.241 21.262 22.743 21.837 22.191 Z M 12.909 2.677 L 6.392 2.677 C 5.719 3.112 5.092 3.61 4.517 4.163 L 12.909 12.555 L 12.909 2.677 Z M 5.51 2.677 L 3.03 2.677 L 4.163 3.809 C 4.586 3.402 5.036 3.024 5.51 2.677 Z M 3.809 4.163 L 2.677 3.03 L 2.677 5.51 C 3.024 5.036 3.402 4.586 3.809 4.163 Z M 3.03 23.677 L 5.51 23.677 C 5.036 23.33 4.586 22.951 4.163 22.544 L 3.03 23.677 Z M 3.809 22.191 C 3.402 21.768 3.024 21.318 2.677 20.843 L 2.677 23.323 L 3.809 22.191 Z M 4.516 22.191 C 5.092 22.743 5.719 23.241 6.392 23.677 L 12.909 23.677 L 12.909 13.798 L 4.516 22.191 Z M 21.837 4.163 C 21.262 3.61 20.634 3.112 19.962 2.677 L 13.409 2.677 L 13.409 12.591 L 21.837 4.163 Z M 22.544 4.163 C 22.951 4.586 23.33 5.036 23.677 5.51 L 23.677 3.03 L 22.544 4.163 Z M 23.323 2.677 L 20.843 2.677 C 21.318 3.024 21.768 3.402 22.191 3.809 L 23.323 2.677 Z M 16.688 25.177 L 13.409 25.177 L 13.409 25.675 C 14.546 25.654 15.645 25.482 16.688 25.177 Z M 12.909 25.177 L 9.665 25.177 C 10.697 25.478 11.785 25.65 12.909 25.674 L 12.909 25.177 Z M 18.084 24.677 C 18.438 24.526 18.783 24.359 19.119 24.177 L 13.409 24.177 L 13.409 24.677 L 18.084 24.677 Z M 12.909 24.677 L 12.909 24.177 L 7.235 24.177 C 7.571 24.359 7.916 24.526 8.27 24.677 L 12.909 24.677 Z M 19.119 2.177 C 18.783 1.995 18.438 1.828 18.084 1.677 L 13.409 1.677 L 13.409 2.177 L 19.119 2.177 Z M 12.909 2.177 L 12.909 1.677 L 8.27 1.677 C 7.916 1.828 7.571 1.995 7.235 2.177 L 12.909 2.177 Z M 16.688 1.177 C 15.645 0.872 14.546 0.7 13.409 0.679 L 13.409 1.177 L 16.688 1.177 Z M 12.909 1.177 L 12.909 0.68 C 11.785 0.703 10.697 0.875 9.665 1.177 L 12.909 1.177 Z M 8.168 25.177 L 3.177 25.177 C 3.136 25.177 3.096 25.176 3.056 25.173 C 3.33 25.482 3.731 25.677 4.177 25.677 L 9.594 25.677 C 9.106 25.537 8.63 25.37 8.168 25.177 Z M 25.173 23.298 C 25.482 23.023 25.677 22.623 25.677 22.177 L 25.677 16.76 C 25.537 17.247 25.37 17.723 25.177 18.186 L 25.177 23.177 C 25.177 23.218 25.176 23.258 25.173 23.298 Z M 25.677 9.594 L 25.677 4.177 C 25.677 3.731 25.482 3.33 25.173 3.056 C 25.176 3.096 25.177 3.136 25.177 3.177 L 25.177 8.168 C 25.37 8.63 25.537 9.106 25.677 9.594 Z M 24.177 2.677 L 24.177 6.245 C 24.354 6.526 24.521 6.814 24.677 7.109 L 24.677 3.177 C 24.677 3.025 24.654 2.879 24.613 2.741 C 24.475 2.699 24.328 2.677 24.177 2.677 Z M 23.677 2.177 C 23.677 2.025 23.654 1.879 23.613 1.741 C 23.475 1.699 23.328 1.677 23.177 1.677 L 19.245 1.677 C 19.539 1.833 19.827 1.999 20.108 2.177 L 23.677 2.177 Z M 6.245 2.177 C 6.526 1.999 6.814 1.833 7.109 1.677 L 3.177 1.677 C 3.025 1.677 2.879 1.699 2.741 1.741 C 2.699 1.879 2.677 2.025 2.677 2.177 L 6.245 2.177 Z M 1.741 2.741 C 1.699 2.879 1.677 3.025 1.677 3.177 L 1.677 7.109 C 1.833 6.814 1.999 6.526 2.177 6.245 L 2.177 2.677 C 2.025 2.677 1.879 2.699 1.741 2.741 Z M 1.18 3.056 C 0.871 3.33 0.677 3.731 0.677 4.177 L 0.677 9.594 C 0.816 9.106 0.984 8.63 1.177 8.168 L 1.177 3.177 C 1.177 3.136 1.178 3.096 1.18 3.056 Z M 0.677 16.76 L 0.677 22.177 C 0.677 22.623 0.871 23.023 1.18 23.298 C 1.178 23.258 1.177 23.218 1.177 23.177 L 1.177 18.186 C 0.984 17.723 0.816 17.247 0.677 16.76 Z M 2.177 23.677 L 2.177 20.108 C 1.999 19.827 1.833 19.539 1.677 19.245 L 1.677 23.177 C 1.677 23.328 1.699 23.475 1.741 23.613 C 1.879 23.654 2.025 23.677 2.177 23.677 Z M 2.677 24.177 C 2.677 24.328 2.699 24.475 2.741 24.613 C 2.879 24.654 3.025 24.677 3.177 24.677 L 7.109 24.677 C 6.814 24.521 6.526 24.354 6.245 24.177 L 2.677 24.177 Z M 20.108 24.177 C 19.827 24.354 19.539 24.521 19.245 24.677 L 23.177 24.677 C 23.328 24.677 23.475 24.654 23.613 24.613 C 23.654 24.475 23.677 24.328 23.677 24.177 L 20.108 24.177 Z M 24.177 23.677 C 24.328 23.677 24.475 23.654 24.613 23.613 C 24.654 23.475 24.677 23.328 24.677 23.177 L 24.677 19.245 C 24.521 19.539 24.354 19.827 24.177 20.108 L 24.177 23.677 Z M 3.177 1.177 L 8.168 1.177 C 8.63 0.984 9.106 0.816 9.594 0.677 L 4.177 0.677 C 3.731 0.677 3.33 0.871 3.056 1.18 C 3.096 1.178 3.136 1.177 3.177 1.177 Z M 23.177 25.177 L 18.186 25.177 C 17.723 25.37 17.247 25.537 16.76 25.677 L 22.177 25.677 C 22.623 25.677 23.023 25.482 23.298 25.173 C 23.258 25.176 23.218 25.177 23.177 25.177 Z M 22.177 0.677 L 16.76 0.677 C 17.247 0.816 17.723 0.984 18.186 1.177 L 23.177 1.177 C 23.218 1.177 23.258 1.178 23.298 1.18 C 23.023 0.871 22.623 0.677 22.177 0.677 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--patch-color-text-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.348,
    height: 20.348,
    viewBox: "0 0 20.348 20.348",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.823,
      top: 1.829,
      width: 20.348,
      height: 20.348
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.947 1.593 C 2.072 1.496 2.208 1.413 2.353 1.347 C 2.667 0.654 3.366 0.171 4.177 0.171 L 16.177 0.171 C 16.967 0.171 17.65 0.629 17.975 1.294 C 18.145 1.357 18.304 1.442 18.449 1.547 L 19.995 0.001 L 20.348 0.354 L 18.815 1.887 C 18.947 2.044 19.054 2.221 19.133 2.414 C 19.755 2.753 20.177 3.413 20.177 4.171 L 20.177 16.171 C 20.177 16.929 19.755 17.588 19.133 17.928 C 19.054 18.122 18.945 18.301 18.812 18.459 L 20.347 19.995 L 19.994 20.348 L 18.444 18.798 C 18.301 18.901 18.143 18.985 17.975 19.047 C 17.65 19.712 16.967 20.171 16.177 20.171 L 4.177 20.171 C 3.366 20.171 2.667 19.688 2.353 18.994 C 2.209 18.929 2.074 18.847 1.95 18.751 L 0.354 20.347 L 0 19.994 L 1.597 18.397 C 1.501 18.274 1.419 18.138 1.353 17.994 C 0.66 17.68 0.177 16.982 0.177 16.171 L 0.177 4.171 C 0.177 3.36 0.66 2.661 1.353 2.347 C 1.418 2.204 1.499 2.07 1.594 1.947 L 0.001 0.354 L 0.354 0 L 1.947 1.593 Z M 2.677 3.03 L 2.677 3.556 C 2.759 3.463 2.843 3.371 2.928 3.281 L 2.677 3.03 Z M 3.282 2.928 L 3.025 2.671 L 3.562 2.671 C 3.467 2.755 3.374 2.84 3.282 2.928 Z M 3.282 3.635 C 3.069 3.86 2.867 4.095 2.677 4.339 L 2.677 9.921 L 9.567 9.921 L 3.282 3.635 Z M 9.923 9.569 L 9.923 2.671 L 4.345 2.671 C 4.099 2.863 3.862 3.066 3.636 3.281 L 9.923 9.569 Z M 10.423 10.776 L 10.423 17.671 L 16.008 17.671 C 16.253 17.48 16.487 17.279 16.712 17.066 L 10.423 10.776 Z M 17.066 16.712 C 17.281 16.486 17.485 16.249 17.677 16.002 L 17.677 10.421 L 10.774 10.421 L 17.066 16.712 Z M 17.065 17.42 C 16.976 17.505 16.884 17.589 16.791 17.671 L 17.317 17.671 L 17.065 17.42 Z M 17.677 17.324 L 17.419 17.066 C 17.507 16.974 17.593 16.881 17.677 16.785 L 17.677 17.324 Z M 3.562 17.671 L 3.03 17.671 L 3.285 17.416 C 3.376 17.503 3.468 17.588 3.562 17.671 Z M 2.677 17.317 L 2.931 17.063 C 2.845 16.972 2.76 16.879 2.677 16.785 L 2.677 17.317 Z M 4.345 17.671 L 9.923 17.671 L 9.923 10.779 L 3.638 17.063 C 3.864 17.277 4.1 17.48 4.345 17.671 Z M 3.285 16.709 L 9.574 10.421 L 2.677 10.421 L 2.677 16.002 C 2.868 16.248 3.071 16.484 3.285 16.709 Z M 17.677 9.921 L 17.677 4.339 C 17.486 4.094 17.283 3.858 17.069 3.633 L 10.781 9.921 L 17.677 9.921 Z M 10.423 9.572 L 16.716 3.279 C 16.49 3.065 16.254 2.862 16.008 2.671 L 10.423 2.671 L 10.423 9.572 Z M 17.677 3.556 C 17.594 3.462 17.509 3.37 17.423 3.279 L 17.677 3.026 L 17.677 3.556 Z M 17.07 2.926 L 17.325 2.671 L 16.791 2.671 C 16.886 2.754 16.978 2.839 17.07 2.926 Z M 13.226 19.171 L 10.423 19.171 L 10.423 19.668 C 11.401 19.643 12.343 19.47 13.226 19.171 Z M 9.923 19.171 L 7.127 19.171 C 8.008 19.469 8.947 19.642 9.923 19.667 L 9.923 19.171 Z M 14.424 18.671 C 14.726 18.519 15.019 18.352 15.302 18.171 L 10.423 18.171 L 10.423 18.671 L 14.424 18.671 Z M 9.923 18.671 L 9.923 18.171 L 5.051 18.171 C 5.334 18.352 5.627 18.519 5.929 18.671 L 9.923 18.671 Z M 18.177 10.421 L 18.177 15.296 C 18.401 14.947 18.603 14.581 18.781 14.202 L 18.781 10.421 L 18.177 10.421 Z M 18.781 9.921 L 18.781 6.139 C 18.603 5.76 18.401 5.395 18.177 5.045 L 18.177 9.921 L 18.781 9.921 Z M 19.281 10.421 L 19.281 12.892 C 19.516 12.106 19.651 11.277 19.674 10.421 L 19.281 10.421 Z M 19.674 9.921 C 19.651 9.064 19.516 8.236 19.281 7.45 L 19.281 9.921 L 19.674 9.921 Z M 2.177 9.921 L 2.177 5.045 C 1.995 5.328 1.828 5.621 1.677 5.923 L 1.677 9.921 L 2.177 9.921 Z M 1.677 10.421 L 1.677 14.418 C 1.828 14.72 1.995 15.013 2.177 15.296 L 2.177 10.421 L 1.677 10.421 Z M 1.177 9.921 L 1.177 7.121 C 0.878 8.003 0.705 8.944 0.68 9.921 L 1.177 9.921 Z M 0.68 10.421 C 0.705 11.398 0.878 12.338 1.177 13.22 L 1.177 10.421 L 0.68 10.421 Z M 15.302 2.171 C 15.019 1.989 14.726 1.822 14.424 1.671 L 10.423 1.671 L 10.423 2.171 L 15.302 2.171 Z M 9.923 2.171 L 9.923 1.671 L 5.929 1.671 C 5.627 1.822 5.334 1.989 5.051 2.171 L 9.923 2.171 Z M 13.226 1.171 C 12.343 0.871 11.401 0.699 10.423 0.674 L 10.423 1.171 L 13.226 1.171 Z M 9.923 1.171 L 9.923 0.674 C 8.947 0.7 8.008 0.872 7.127 1.171 L 9.923 1.171 Z M 5.813 19.171 L 3.177 19.171 C 3.136 19.171 3.096 19.169 3.055 19.167 C 3.33 19.476 3.731 19.671 4.177 19.671 L 7.046 19.671 C 6.621 19.531 6.21 19.364 5.813 19.171 Z M 19.281 17.186 C 19.527 16.918 19.677 16.562 19.677 16.171 L 19.677 13.302 C 19.563 13.647 19.431 13.985 19.281 14.313 L 19.281 17.171 L 19.281 17.186 Z M 19.677 7.04 L 19.677 4.171 C 19.677 3.779 19.527 3.423 19.281 3.156 L 19.281 3.171 L 19.281 6.029 C 19.431 6.357 19.563 6.694 19.677 7.04 Z M 18.177 2.671 L 18.177 4.17 C 18.394 4.459 18.596 4.76 18.781 5.072 L 18.781 3.171 C 18.781 3.034 18.763 2.901 18.729 2.776 C 18.558 2.708 18.372 2.671 18.177 2.671 Z M 17.677 2.171 C 17.677 2.008 17.651 1.852 17.603 1.705 C 17.499 1.683 17.392 1.671 17.281 1.671 L 15.447 1.671 C 15.698 1.827 15.942 1.994 16.178 2.171 L 17.677 2.171 Z M 4.176 2.171 C 4.411 1.994 4.655 1.827 4.906 1.671 L 3.177 1.671 C 3.025 1.671 2.879 1.693 2.741 1.735 C 2.699 1.873 2.677 2.019 2.677 2.171 L 4.176 2.171 Z M 1.741 2.735 C 1.699 2.873 1.677 3.019 1.677 3.171 L 1.677 4.9 C 1.833 4.649 2 4.405 2.177 4.17 L 2.177 2.671 C 2.025 2.671 1.879 2.693 1.741 2.735 Z M 1.18 3.049 C 0.871 3.324 0.677 3.725 0.677 4.171 L 0.677 7.04 C 0.816 6.615 0.984 6.204 1.177 5.807 L 1.177 3.171 C 1.177 3.13 1.178 3.09 1.18 3.049 Z M 0.677 13.302 L 0.677 16.171 C 0.677 16.617 0.871 17.017 1.18 17.292 C 1.178 17.252 1.177 17.211 1.177 17.171 L 1.177 14.535 C 0.984 14.138 0.816 13.726 0.677 13.302 Z M 2.177 17.671 L 2.177 16.172 C 2 15.936 1.833 15.692 1.677 15.441 L 1.677 17.171 C 1.677 17.322 1.699 17.469 1.741 17.606 C 1.879 17.648 2.025 17.671 2.177 17.671 Z M 2.677 18.171 C 2.677 18.322 2.699 18.469 2.741 18.606 C 2.879 18.648 3.025 18.671 3.177 18.671 L 4.906 18.671 C 4.655 18.515 4.411 18.348 4.176 18.171 L 2.677 18.171 Z M 16.178 18.171 C 15.942 18.348 15.698 18.515 15.447 18.671 L 17.281 18.671 C 17.392 18.671 17.499 18.659 17.603 18.636 C 17.651 18.49 17.677 18.333 17.677 18.171 L 16.178 18.171 Z M 18.177 17.671 C 18.372 17.671 18.558 17.633 18.729 17.566 C 18.763 17.44 18.781 17.307 18.781 17.171 L 18.781 15.269 C 18.596 15.581 18.394 15.883 18.177 16.172 L 18.177 17.671 Z M 3.177 1.171 L 5.813 1.171 C 6.21 0.978 6.621 0.81 7.046 0.671 L 4.177 0.671 C 3.731 0.671 3.33 0.865 3.055 1.174 C 3.096 1.172 3.136 1.171 3.177 1.171 Z M 17.281 19.171 L 14.541 19.171 C 14.144 19.364 13.732 19.531 13.308 19.671 L 16.177 19.671 C 16.621 19.671 17.02 19.478 17.295 19.171 L 17.281 19.171 Z M 16.177 0.671 L 13.308 0.671 C 13.732 0.81 14.144 0.978 14.541 1.171 L 17.281 1.171 L 17.295 1.171 C 17.02 0.864 16.621 0.671 16.177 0.671 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      color: "var(--patch-color-text-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.354,
    height: 14.354,
    viewBox: "0 0 14.354 14.354",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.823,
      top: 0.823,
      width: 14.354,
      height: 14.354
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.354 14.354 L 0 14 L 1.315 12.685 C 1.227 12.536 1.177 12.362 1.177 12.177 C 0.625 12.177 0.177 11.729 0.177 11.177 L 0.177 3.177 C 0.177 2.624 0.625 2.177 1.177 2.177 C 1.177 1.991 1.227 1.818 1.315 1.669 L 0 0.354 L 0.354 0 L 1.669 1.315 C 1.818 1.227 1.991 1.177 2.177 1.177 C 2.177 0.624 2.625 0.177 3.177 0.177 L 11.177 0.177 C 11.729 0.177 12.177 0.624 12.177 1.177 C 12.362 1.177 12.536 1.227 12.685 1.315 L 14 0 L 14.354 0.354 L 13.038 1.669 C 13.126 1.818 13.177 1.991 13.177 2.177 C 13.729 2.177 14.177 2.624 14.177 3.177 L 14.177 11.177 C 14.177 11.729 13.729 12.177 13.177 12.177 C 13.177 12.362 13.126 12.536 13.038 12.685 L 14.354 14 L 14 14.354 L 12.685 13.038 C 12.536 13.126 12.362 13.177 12.177 13.177 C 12.177 13.729 11.729 14.177 11.177 14.177 L 3.177 14.177 C 2.625 14.177 2.177 13.729 2.177 13.177 C 1.991 13.177 1.818 13.126 1.669 13.038 L 0.354 14.354 Z M 0.677 4.574 C 0.817 4.224 0.985 3.888 1.177 3.569 L 1.177 2.677 C 0.901 2.677 0.677 2.901 0.677 3.177 L 0.677 4.574 Z M 0.677 7.177 C 0.677 8.064 0.855 8.91 1.177 9.681 L 1.177 4.672 C 0.855 5.443 0.677 6.289 0.677 7.177 Z M 0.677 9.78 L 0.677 11.177 C 0.677 11.453 0.901 11.677 1.177 11.677 L 1.177 10.784 C 0.985 10.465 0.817 10.129 0.677 9.78 Z M 1.677 11.507 L 1.677 11.677 L 1.815 11.677 C 1.768 11.621 1.722 11.565 1.677 11.507 Z M 2.677 12.539 L 2.677 12.677 L 2.846 12.677 C 2.789 12.632 2.733 12.586 2.677 12.539 Z M 3.711 12.677 L 10.642 12.677 C 10.883 12.525 11.113 12.358 11.33 12.177 L 3.023 12.177 C 3.241 12.358 3.471 12.525 3.711 12.677 Z M 3.569 13.177 L 2.677 13.177 C 2.677 13.453 2.901 13.677 3.177 13.677 L 4.574 13.677 C 4.224 13.537 3.888 13.369 3.569 13.177 Z M 9.78 13.677 L 11.177 13.677 C 11.453 13.677 11.677 13.453 11.677 13.177 L 10.784 13.177 C 10.465 13.369 10.13 13.537 9.78 13.677 Z M 9.681 13.177 L 4.672 13.177 C 5.443 13.499 6.289 13.677 7.177 13.677 C 8.064 13.677 8.91 13.499 9.681 13.177 Z M 11.507 12.677 L 11.677 12.677 L 11.677 12.539 C 11.621 12.586 11.565 12.632 11.507 12.677 Z M 12.539 11.677 L 12.677 11.677 L 12.677 11.507 C 12.632 11.565 12.586 11.621 12.539 11.677 Z M 13.177 10.784 L 13.177 11.677 C 13.453 11.677 13.677 11.453 13.677 11.177 L 13.677 9.78 C 13.537 10.129 13.369 10.465 13.177 10.784 Z M 13.677 7.177 C 13.677 6.289 13.499 5.443 13.177 4.672 L 13.177 9.681 C 13.499 8.91 13.677 8.064 13.677 7.177 Z M 13.677 4.574 L 13.677 3.177 C 13.677 2.901 13.453 2.677 13.177 2.677 L 13.177 3.569 C 13.369 3.888 13.537 4.224 13.677 4.574 Z M 12.677 2.846 L 12.677 2.677 L 12.539 2.677 C 12.586 2.732 12.632 2.789 12.677 2.846 Z M 11.677 1.815 L 11.677 1.677 L 11.507 1.677 C 11.565 1.722 11.621 1.768 11.677 1.815 Z M 10.642 1.677 L 3.711 1.677 C 3.471 1.829 3.241 1.996 3.023 2.177 L 11.33 2.177 C 11.113 1.996 10.883 1.829 10.642 1.677 Z M 10.784 1.177 L 11.677 1.177 C 11.677 0.901 11.453 0.677 11.177 0.677 L 9.78 0.677 C 10.13 0.817 10.465 0.984 10.784 1.177 Z M 7.177 0.677 C 6.289 0.677 5.443 0.855 4.672 1.177 L 9.681 1.177 C 8.91 0.855 8.064 0.677 7.177 0.677 Z M 4.574 0.677 L 3.177 0.677 C 2.901 0.677 2.677 0.901 2.677 1.177 L 3.569 1.177 C 3.888 0.984 4.224 0.817 4.574 0.677 Z M 2.846 1.677 L 2.677 1.677 L 2.677 1.815 C 2.733 1.768 2.789 1.722 2.846 1.677 Z M 1.815 2.677 L 1.677 2.677 L 1.677 2.846 C 1.722 2.789 1.768 2.732 1.815 2.677 Z M 1.677 3.711 L 1.677 10.642 C 1.829 10.883 1.996 11.113 2.177 11.33 L 2.177 3.023 C 1.996 3.241 1.829 3.471 1.677 3.711 Z M 12.177 3.023 L 12.177 11.33 C 12.358 11.113 12.525 10.883 12.677 10.642 L 12.677 3.711 C 12.525 3.471 12.358 3.241 12.177 3.023 Z M 2.177 12.677 C 2.132 12.677 2.089 12.671 2.047 12.66 L 2.177 12.53 L 2.177 12.677 Z M 7.177 7.53 L 3.03 11.677 L 11.323 11.677 L 7.177 7.53 Z M 2.677 11.323 L 6.823 7.177 L 2.677 3.03 L 2.677 11.323 Z M 11.677 11.323 L 11.677 3.03 L 7.53 7.177 L 11.677 11.323 Z M 7.177 6.823 L 11.323 2.677 L 3.03 2.677 L 7.177 6.823 Z M 12.677 2.177 L 12.53 2.177 L 12.66 2.047 C 12.671 2.089 12.677 2.132 12.677 2.177 Z M 12.177 1.823 L 12.306 1.694 C 12.265 1.683 12.222 1.677 12.177 1.677 L 12.177 1.823 Z M 1.694 12.306 L 1.823 12.177 L 1.677 12.177 C 1.677 12.222 1.683 12.265 1.694 12.306 Z M 12.66 12.306 C 12.671 12.265 12.677 12.222 12.677 12.177 L 12.53 12.177 L 12.66 12.306 Z M 12.177 12.53 L 12.306 12.66 C 12.265 12.671 12.222 12.677 12.177 12.677 L 12.177 12.53 Z M 2.177 1.823 L 2.177 1.677 C 2.132 1.677 2.089 1.683 2.047 1.694 L 2.177 1.823 Z M 1.694 2.047 L 1.823 2.177 L 1.677 2.177 C 1.677 2.132 1.683 2.089 1.694 2.047 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: size=32
    "size=32": __body0,
    // figma: size=24
    "size=24": __body1,
    // figma: size=16
    "size=16": __body2
  };
  return (__impls[__vkey_IconPlaceholder7(props)] ?? __body2)();
}

// figma node: 4235:614 Mobile / Buttons / Icon Button (24 variants)
const __venc_MobileButtonsIconButton = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_MobileButtonsIconButton = p => "type=" + __venc_MobileButtonsIconButton(p.type) + '|' + "size=" + __venc_MobileButtonsIconButton(p.size) + '|' + "state=" + __venc_MobileButtonsIconButton(p.state);
function MobileButtonsIconButton(_p = {}) {
  const props = {
    ..._p,
    background: _p.background ?? true,
    type: _p.type ?? "primary",
    size: _p.size ?? "xs",
    state: _p.state ?? "at rest"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-medium) * 1px)",
      height: "calc(var(--patch-object-medium) * 1px)",
      borderRadius: 8,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 8,
      width: 24,
      height: 24,
      color: "rgb(255,255,255)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder7, {
    size: "24"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-small) * 1px)",
      height: "calc(var(--patch-object-small) * 1px)",
      borderRadius: 8,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 24,
      height: 24,
      color: "rgb(255,255,255)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder7, {
    size: "24"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-medium) * 1px)",
      height: "calc(var(--patch-object-medium) * 1px)",
      borderRadius: 8,
      position: "relative",
      ...props.style
    }
  }, props.background && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: "calc(var(--patch-object-medium) * 1px)",
      height: "calc(var(--patch-object-medium) * 1px)",
      borderRadius: 8,
      backgroundColor: "var(--patch-color-surface-accent-primary)",
      borderTop: "1px solid var(--patch-color-border-accent-primary)",
      borderRight: "1px solid var(--patch-color-border-accent-primary)",
      borderBottom: "1px solid var(--patch-color-border-accent-primary)",
      borderLeft: "1px solid var(--patch-color-border-accent-primary)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 8,
      width: 24,
      height: 24,
      color: "rgb(255,255,255)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder7, {
    size: "24"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-small) * 1px)",
      height: "calc(var(--patch-object-small) * 1px)",
      borderRadius: 8,
      position: "relative",
      ...props.style
    }
  }, props.background && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: "calc(var(--patch-object-small) * 1px)",
      height: "calc(var(--patch-object-small) * 1px)",
      borderRadius: 8,
      backgroundColor: "var(--patch-color-surface-accent-primary)",
      borderTop: "1px solid var(--patch-color-border-accent-primary)",
      borderRight: "1px solid var(--patch-color-border-accent-primary)",
      borderBottom: "1px solid var(--patch-color-border-accent-primary)",
      borderLeft: "1px solid var(--patch-color-border-accent-primary)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 24,
      height: 24,
      color: "rgb(255,255,255)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder7, {
    size: "24"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-medium) * 1px)",
      height: "calc(var(--patch-object-medium) * 1px)",
      borderRadius: 9999,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 8,
      width: 24,
      height: 24,
      color: "rgb(255,255,255)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder7, {
    size: "24"
  })));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-small) * 1px)",
      height: "calc(var(--patch-object-small) * 1px)",
      borderRadius: 9999,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 24,
      height: 24,
      color: "rgb(255,255,255)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder7, {
    size: "24"
  })));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-medium) * 1px)",
      height: "calc(var(--patch-object-medium) * 1px)",
      borderRadius: 9999,
      position: "relative",
      ...props.style
    }
  }, props.background && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: "calc(var(--patch-object-medium) * 1px)",
      height: "calc(var(--patch-object-medium) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-surface-accent-primary)",
      borderTop: "1px solid var(--patch-color-border-accent-primary)",
      borderRight: "1px solid var(--patch-color-border-accent-primary)",
      borderBottom: "1px solid var(--patch-color-border-accent-primary)",
      borderLeft: "1px solid var(--patch-color-border-accent-primary)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 8,
      width: 24,
      height: 24,
      color: "rgb(255,255,255)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder7, {
    size: "24"
  })));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-small) * 1px)",
      height: "calc(var(--patch-object-small) * 1px)",
      borderRadius: 9999,
      position: "relative",
      ...props.style
    }
  }, props.background && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: "calc(var(--patch-object-small) * 1px)",
      height: "calc(var(--patch-object-small) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-surface-accent-primary)",
      borderTop: "1px solid var(--patch-color-border-accent-primary)",
      borderRight: "1px solid var(--patch-color-border-accent-primary)",
      borderBottom: "1px solid var(--patch-color-border-accent-primary)",
      borderLeft: "1px solid var(--patch-color-border-accent-primary)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 24,
      height: 24,
      color: "rgb(255,255,255)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder7, {
    size: "24"
  })));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-x-small) * 1px)",
      height: "calc(var(--patch-object-x-small) * 1px)",
      borderRadius: 4,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 16,
      height: 16,
      color: "rgb(255,255,255)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder7, {
    size: "16"
  })));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-x-small) * 1px)",
      height: "calc(var(--patch-object-x-small) * 1px)",
      borderRadius: 4,
      position: "relative",
      ...props.style
    }
  }, props.background && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: "calc(var(--patch-object-x-small) * 1px)",
      height: "calc(var(--patch-object-x-small) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--patch-color-surface-accent-primary)",
      borderTop: "1px solid var(--patch-color-border-accent-primary)",
      borderRight: "1px solid var(--patch-color-border-accent-primary)",
      borderBottom: "1px solid var(--patch-color-border-accent-primary)",
      borderLeft: "1px solid var(--patch-color-border-accent-primary)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 16,
      height: 16,
      color: "rgb(255,255,255)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder7, {
    size: "16"
  })));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-x-small) * 1px)",
      height: "calc(var(--patch-object-x-small) * 1px)",
      borderRadius: 9999,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 16,
      height: 16,
      color: "rgb(255,255,255)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder7, {
    size: "16"
  })));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-x-small) * 1px)",
      height: "calc(var(--patch-object-x-small) * 1px)",
      borderRadius: 9999,
      position: "relative",
      ...props.style
    }
  }, props.background && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: "calc(var(--patch-object-x-small) * 1px)",
      height: "calc(var(--patch-object-x-small) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-surface-accent-primary)",
      borderTop: "1px solid var(--patch-color-border-accent-primary)",
      borderRight: "1px solid var(--patch-color-border-accent-primary)",
      borderBottom: "1px solid var(--patch-color-border-accent-primary)",
      borderLeft: "1px solid var(--patch-color-border-accent-primary)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 16,
      height: 16,
      color: "rgb(255,255,255)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder7, {
    size: "16"
  })));
  const __impls = {
    // figma: Type=Primary, Size=M, State=at rest
    "type=primary|size=m|state=at rest": __body0,
    // figma: Type=Primary, Size=S, State=at rest
    "type=primary|size=s|state=at rest": __body1,
    // figma: Type=Primary, Size=M, State=is disabled
    "type=primary|size=m|state=is disabled": __body0,
    // figma: Type=Primary, Size=S, State=is disabled
    "type=primary|size=s|state=is disabled": __body1,
    // figma: Type=Primary, Size=M, State=is active
    "type=primary|size=m|state=is active": __body0,
    // figma: Type=Primary, Size=M, State=is selected
    "type=primary|size=m|state=is selected": __body2,
    // figma: Type=Primary, Size=S, State=is active
    "type=primary|size=s|state=is active": __body1,
    // figma: Type=Primary, Size=S, State=is selected
    "type=primary|size=s|state=is selected": __body3,
    // figma: Type=Secondary, Size=M, State=at rest
    "type=secondary|size=m|state=at rest": __body4,
    // figma: Type=Secondary, Size=S, State=at rest
    "type=secondary|size=s|state=at rest": __body5,
    // figma: Type=Secondary, Size=M, State=is disabled
    "type=secondary|size=m|state=is disabled": __body4,
    // figma: Type=Secondary, Size=S, State=is disabled
    "type=secondary|size=s|state=is disabled": __body5,
    // figma: Type=Secondary, Size=M, State=is active
    "type=secondary|size=m|state=is active": __body4,
    // figma: Type=Secondary, Size=M, State=is selected
    "type=secondary|size=m|state=is selected": __body6,
    // figma: Type=Secondary, Size=S, State=is active
    "type=secondary|size=s|state=is active": __body5,
    // figma: Type=Secondary, Size=S, State=is selected
    "type=secondary|size=s|state=is selected": __body7,
    // figma: Type=Primary, Size=XS, State=at rest
    "type=primary|size=xs|state=at rest": __body8,
    // figma: Type=Primary, Size=XS, State=is disabled
    "type=primary|size=xs|state=is disabled": __body8,
    // figma: Type=Primary, Size=XS, State=is active
    "type=primary|size=xs|state=is active": __body8,
    // figma: Type=Primary, Size=XS, State=is selected
    "type=primary|size=xs|state=is selected": __body9,
    // figma: Type=Secondary, Size=XS, State=at rest
    "type=secondary|size=xs|state=at rest": __body10,
    // figma: Type=Secondary, Size=XS, State=is disabled
    "type=secondary|size=xs|state=is disabled": __body10,
    // figma: Type=Secondary, Size=XS, State=is active
    "type=secondary|size=xs|state=is active": __body10,
    // figma: Type=Secondary, Size=XS, State=is selected
    "type=secondary|size=xs|state=is selected": __body11
  };
  return (__impls[__vkey_MobileButtonsIconButton(props)] ?? __body8)();
}

// figma node: 3460:2671 Sheet
function Sheet(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1576,
      height: 1970,
      overflow: "hidden",
      backgroundColor: "rgb(245,245,245)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(StatusBlock, {
    style: {
      position: "absolute",
      left: 1059,
      top: 40,
      width: 477
    },
    date: "2026-05-01",
    orientation: "default"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 40,
      top: 640,
      width: 33,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "iPhone"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 40,
      top: 1136,
      width: 66,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "iPad, Elevated"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 848,
      top: 640,
      width: 71,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Android phone"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 848,
      top: 1136,
      width: 68,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Android tablet"), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 40,
      top: 148,
      width: 472,
      height: 428
    },
    subheading: true,
    text1: "Notes",
    text2: "2025 Q4: details are still TBD while Sheets are rolled out more widely. Sheet sizes on tablet, together with header arrangements, are not unified (yet).",
    text3: "Will often include Lists, tiles, or context-specific functionality.\nSheets within a specific flow should always include a title and functionality to go back or dismiss the sheet. An ‘x’ close button is preferable to a text button – see more.\nDo not change the colors of the header elements.\nSheets on a tablet should appear above an isolation layer. (A specific Figma component exists for this, as does the dedicated color token scrim.)\nMaterial specifies a max-width of 640 px for bottom sheets on Android.\niOS offers alternative form factors (Modal, Modal Stack) depending on exact context of a Sheet on a phone.\nAll sheets include slots to accommodate anticipated content types. Slot characteristics and visibility are editable."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40,
      top: 1168,
      width: 712,
      height: 746,
      overflow: "hidden",
      borderRadius: 13,
      backgroundColor: "var(--patch-color-surface-primary-base)",
      boxShadow: "0px 3px 8px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 14,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 337,
      top: 5,
      width: 36,
      height: 5,
      borderRadius: 9999,
      backgroundColor: "var(--patch-form-color-fill-tertiary)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-12) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-12) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(IOSSheetsBlocksHeader, {
    style: {
      position: "relative",
      height: 32,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  })), /*#__PURE__*/React.createElement("svg", {
    height: 48,
    viewBox: "0 0 712 48",
    fill: "none",
    style: {
      position: "relative",
      height: 48,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 712 0 L 712 48 L 0 48 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 712 540",
    fill: "none",
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 712 0 L 712 540 L 0 540 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    height: 88,
    viewBox: "0 0 712 88",
    fill: "none",
    style: {
      position: "relative",
      height: 88,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 712 0 L 712 88 L 0 88 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 848,
      top: 1168,
      width: 688,
      height: 700,
      overflow: "hidden",
      borderRadius: 28,
      backgroundColor: "var(--patch-color-surface-primary-base)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 56,
      backgroundColor: "var(--patch-color-surface-primary-base)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "flex-start",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(MobileButtonsIconButton, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40
    },
    type: "primary",
    size: "m",
    state: "at rest"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-16) * 1px)",
      paddingRight: "calc(var(--patch-spacer-16) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Euclid Circular B\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 18,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "24px",
      color: "var(--patch-color-text-primary)",
      flexGrow: 1
    }
  }, "{Title}")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: "calc(var(--patch-object-medium) * 1px)",
      height: "calc(var(--patch-object-medium) * 1px)",
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 8,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 14,
      height: 14,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.78 1.28 L 8.061 7 L 13.78 12.72 C 14.073 13.013 14.073 13.487 13.78 13.78 C 13.487 14.073 13.013 14.073 12.72 13.78 L 7 8.061 L 1.28 13.78 C 0.987 14.073 0.513 14.073 0.22 13.78 C -0.073 13.487 -0.073 13.013 0.22 12.72 L 5.939 7 L 0.22 1.28 C -0.073 0.987 -0.073 0.513 0.22 0.22 C 0.513 -0.073 0.987 -0.073 1.28 0.22 L 7 5.939 L 12.72 0.22 C 13.013 -0.073 13.487 -0.073 13.78 0.22 C 14.073 0.513 14.073 0.987 13.78 1.28 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("svg", {
    height: 48,
    viewBox: "0 0 688 48",
    fill: "none",
    style: {
      position: "relative",
      height: 48,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 688 0 L 688 48 L 0 48 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 688 548",
    fill: "none",
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 688 0 L 688 548 L 0 548 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    height: 48,
    viewBox: "0 0 688 48",
    fill: "none",
    style: {
      position: "relative",
      height: 48,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 24px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingBottom: "calc(var(--patch-spacer-24) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 688 0 L 688 48 L 0 48 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement(IOSSheetsPhone, {
    style: {
      position: "absolute",
      left: 40,
      top: 672,
      width: 375,
      height: 384
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 848,
      top: 672,
      width: 360,
      height: 400,
      maxWidth: 640,
      maxHeight: null,
      borderRadius: "28px 28px 0px 0px",
      backgroundColor: "var(--patch-color-surface-primary-base)",
      boxShadow: "0px -3px 8px 0px rgba(18,18,18,0.1)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 36,
      maxWidth: 640,
      maxHeight: null,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      padding: "16px 0px 16px 0px",
      justifyContent: "flex-start",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-16) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-16) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 4,
      borderRadius: 9999,
      backgroundColor: "var(--patch-form-color-fill-secondary)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 56,
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: "calc(var(--patch-object-medium) * 1px)",
      height: "calc(var(--patch-object-medium) * 1px)",
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 8,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.996,
    height: 10,
    viewBox: "0 0 19.996 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.004,
      top: 7,
      width: 19.996,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.792 9.844 L 0.292 5.598 C 0.108 5.456 0 5.237 0 5.004 C 0 4.772 0.107 4.553 0.291 4.411 L 5.787 0.157 C 6.115 -0.097 6.586 -0.037 6.839 0.291 C 7.093 0.619 7.033 1.09 6.705 1.343 L 2.949 4.25 L 19.246 4.25 C 19.66 4.25 19.996 4.586 19.996 5 C 19.996 5.414 19.66 5.75 19.246 5.75 L 2.944 5.75 L 6.708 8.656 C 7.036 8.909 7.097 9.38 6.844 9.708 C 6.591 10.036 6.12 10.097 5.792 9.844 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Euclid Circular B\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 18,
      textAlign: "center",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "24px",
      color: "var(--patch-color-text-primary)",
      flexGrow: 1
    }
  }, "{Title}")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: "calc(var(--patch-object-medium) * 1px)",
      height: "calc(var(--patch-object-medium) * 1px)",
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 8,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 14,
      height: 14,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.78 1.28 L 8.061 7 L 13.78 12.72 C 14.073 13.013 14.073 13.487 13.78 13.78 C 13.487 14.073 13.013 14.073 12.72 13.78 L 7 8.061 L 1.28 13.78 C 0.987 14.073 0.513 14.073 0.22 13.78 C -0.073 13.487 -0.073 13.013 0.22 12.72 L 5.939 7 L 0.22 1.28 C -0.073 0.987 -0.073 0.513 0.22 0.22 C 0.513 -0.073 0.987 -0.073 1.28 0.22 L 7 5.939 L 12.72 0.22 C 13.013 -0.073 13.487 -0.073 13.78 0.22 C 14.073 0.513 14.073 0.987 13.78 1.28 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("svg", {
    height: 48,
    viewBox: "0 0 360 48",
    fill: "none",
    style: {
      position: "relative",
      height: 48,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 360 0 L 360 48 L 0 48 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 360 212",
    fill: "none",
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 360 0 L 360 212 L 0 212 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    height: 48,
    viewBox: "0 0 360 48",
    fill: "none",
    style: {
      position: "relative",
      height: 48,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 24px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingBottom: "calc(var(--patch-spacer-24) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 360 0 L 360 48 L 0 48 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 376,
      width: 360,
      display: "flex",
      flexDirection: "row",
      padding: "10px 0px 10px 0px",
      justifyContent: "center",
      alignItems: "flex-end",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 108,
      height: 4,
      borderRadius: 8,
      backgroundColor: "var(--patch-color-text-primary)",
      flexShrink: 0
    }
  }))), /*#__PURE__*/React.createElement(TitleBlock, {
    style: {
      position: "absolute",
      left: 40,
      top: 40,
      width: 728
    },
    text1: "Sheet",
    text2: "Sheets display supplementary content on a temporary surface."
  }));
}

// Globals for scripts loaded after this file.
window.IOSButtonsBlocksEmbeddedAction = IOSButtonsBlocksEmbeddedAction;
window.IOSActionSheet = IOSActionSheet;
window.StatusBadge = StatusBadge;
window.StatusBlock = StatusBlock;
window.TitleBlock = TitleBlock;
window.ActionSheet = ActionSheet;
window.FigmaDetails = FigmaDetails;
window.Divider = Divider;
window.AndroidFormsCheckbox2 = AndroidFormsCheckbox2;
window.AndroidFormsRadioButton2 = AndroidFormsRadioButton2;
window.IconPlaceholder9 = IconPlaceholder9;
window.AndroidListsBlocksLeadEdge2 = AndroidListsBlocksLeadEdge2;
window.AndroidListsBlocksSecondaryContent = AndroidListsBlocksSecondaryContent;
window.AndroidListsBlocksSupportingContent = AndroidListsBlocksSupportingContent;
window.AndroidFormsSwitch2 = AndroidFormsSwitch2;
window.AndroidListsBlocksTrailEdge2 = AndroidListsBlocksTrailEdge2;
window.IconCheckmark2 = IconCheckmark2;
window.IconMinus2 = IconMinus2;
window.IOSFormsCheckbox2 = IOSFormsCheckbox2;
window.IOSFormsRadioButton2 = IOSFormsRadioButton2;
window.IconInfo = IconInfo;
window.IOSListsBlocksPrimaryContent = IOSListsBlocksPrimaryContent;
window.IOSListsBlocksSecondaryContent = IOSListsBlocksSecondaryContent;
window.IOSFormsSwitch2 = IOSFormsSwitch2;
window.IconChevronRight6 = IconChevronRight6;
window.IOSListsBlocksTrailEdge2 = IOSListsBlocksTrailEdge2;
window.IOSListsHeaderRow = IOSListsHeaderRow;
window.IOSListsBlocksLeadEdge2 = IOSListsBlocksLeadEdge2;
window.IOSListsBlocksTrailEdge3 = IOSListsBlocksTrailEdge3;
window.IOSListsRow = IOSListsRow;
window.IconChevronDown5 = IconChevronDown5;
window.SwatchesGeneric = SwatchesGeneric;
window.TextBlock = TextBlock;
window.List = List;
window.DesktopPopover = DesktopPopover;
window.Pointer = Pointer;
window.IOSPopover = IOSPopover;
window.Popover = Popover;
window.IOSSheetsBlocksEdgeIcon3 = IOSSheetsBlocksEdgeIcon3;
window.IconChevronLeft3 = IconChevronLeft3;
window.IOSSheetsBlocksLeadEdge3 = IOSSheetsBlocksLeadEdge3;
window.IconX4 = IconX4;
window.MobileButtonsButton3 = MobileButtonsButton3;
window.IOSSheetsBlocksTrailEdge4 = IOSSheetsBlocksTrailEdge4;
window.IOSSheetsBlocksHeader = IOSSheetsBlocksHeader;
window.IOSSheetsBlocksGrabberBar = IOSSheetsBlocksGrabberBar;
window.IOSSheetsPhone = IOSSheetsPhone;
window.IconPlaceholder7 = IconPlaceholder7;
window.MobileButtonsIconButton = MobileButtonsIconButton;
window.Sheet = Sheet;