// Components bundle — 31 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

// figma node: 3429:426 .Desktop / Inputs / Blocks / Content (2 variants)
const __venc_DesktopInputsBlocksContent = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_DesktopInputsBlocksContent = p => "status=" + __venc_DesktopInputsBlocksContent(p.status);
function DesktopInputsBlocksContent(_p = {}) {
  const props = {
    ..._p,
    status: _p.status ?? "default",
    content: _p.content ?? "{Value}"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      position: "relative",
      ...props.style
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
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.content)));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      position: "relative",
      ...props.style
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
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--patch-color-text-placeholder)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.content)));
  const __impls = {
    // figma: Status=Default
    "status=default": __body0,
    // figma: Status=Placeholder
    "status=placeholder": __body1
  };
  return (__impls[__vkey_DesktopInputsBlocksContent(props)] ?? __body0)();
}

// figma node: 5193:20154 .Desktop / Inputs / Blocks / Content (2 variants)
const __venc_DesktopInputsBlocksContent2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_DesktopInputsBlocksContent2 = p => "status=" + __venc_DesktopInputsBlocksContent2(p.status);
function DesktopInputsBlocksContent2(_p = {}) {
  const props = {
    ..._p,
    status: _p.status ?? "default",
    content: _p.content ?? "{Value}"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      position: "relative",
      ...props.style
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
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.content)));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      position: "relative",
      ...props.style
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
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--patch-color-text-placeholder)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.content)));
  const __impls = {
    // figma: Status=Default
    "status=default": __body0,
    // figma: Status=Placeholder
    "status=placeholder": __body1
  };
  return (__impls[__vkey_DesktopInputsBlocksContent2(props)] ?? __body0)();
}

// figma node: 5193:19723 .Desktop / Inputs / Blocks / Label
function DesktopInputsBlocksLabel(_p = {}) {
  const props = {
    ..._p,
    label: _p.label ?? "{Label}"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
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
      color: "var(--patch-color-text-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.label));
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

// figma node: 5193:13868 icon/chevron-up (3 variants)
const __venc_IconChevronUp = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconChevronUp = p => "size=" + __venc_IconChevronUp(p.size);
function IconChevronUp(_p = {}) {
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
      top: 10,
      width: 18,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.707 9.707 C 17.317 10.098 16.683 10.098 16.293 9.707 L 9 2.414 L 1.707 9.707 C 1.317 10.098 0.683 10.098 0.293 9.707 C -0.098 9.317 -0.098 8.683 0.293 8.293 L 8.293 0.293 C 8.48 0.105 8.735 0 9 0 C 9.265 0 9.52 0.105 9.707 0.293 L 17.707 8.293 C 18.098 8.683 18.098 9.317 17.707 9.707 Z",
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
      top: 7,
      width: 14,
      height: 8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 0 C 7.204 0 7.399 0.083 7.541 0.23 L 13.791 6.73 C 14.078 7.029 14.068 7.504 13.77 7.791 C 13.471 8.078 12.996 8.068 12.709 7.77 L 7 1.832 L 1.291 7.77 C 1.004 8.068 0.529 8.078 0.23 7.791 C -0.068 7.504 -0.078 7.029 0.209 6.73 L 6.459 0.23 C 6.601 0.083 6.796 0 7 0 Z",
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
      top: 5,
      width: 10,
      height: 6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.235 5.795 C -0.066 5.511 -0.08 5.036 0.205 4.735 L 4.455 0.235 C 4.596 0.085 4.794 0 5 0 C 5.206 0 5.404 0.085 5.545 0.235 L 9.795 4.735 C 10.08 5.036 10.066 5.511 9.765 5.795 C 9.464 6.08 8.989 6.066 8.705 5.765 L 5 1.842 L 1.295 5.765 C 1.011 6.066 0.536 6.08 0.235 5.795 Z",
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
  return (__impls[__vkey_IconChevronUp(props)] ?? __body2)();
}

// figma node: 5323:2762 .Desktop / Inputs / Blocks / Rocker Elements (6 variants)
const __venc_DesktopInputsBlocksRockerElements = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_DesktopInputsBlocksRockerElements = p => "type=" + __venc_DesktopInputsBlocksRockerElements(p.type) + '|' + "state=" + __venc_DesktopInputsBlocksRockerElements(p.state);
function DesktopInputsBlocksRockerElements(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "up",
    state: _p.state ?? "at rest"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 12,
      borderRadius: "4px 4px 0px 0px",
      backgroundColor: "var(--patch-color-surface-primary)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 12,
      borderRadius: "4px 4px 0px 0px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 0,
      width: 12,
      height: 12
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevronUp, {
    size: "16",
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 12,
      borderRadius: "4px 4px 0px 0px",
      backgroundColor: "var(--patch-color-surface-primary-dull)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 12,
      borderRadius: "4px 4px 0px 0px",
      backgroundColor: "rgba(18,18,18,0.2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 0,
      width: 12,
      height: 12
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevronUp, {
    size: "16",
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 12,
      borderRadius: "4px 4px 0px 0px",
      backgroundColor: "var(--patch-color-surface-primary-dim)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 12,
      borderRadius: "4px 4px 0px 0px",
      backgroundColor: "rgba(18,18,18,0.4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 0,
      width: 12,
      height: 12
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevronUp, {
    size: "16",
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 12,
      borderRadius: "0px 0px 4px 4px",
      backgroundColor: "var(--patch-color-surface-primary)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 12,
      borderRadius: "0px 0px 4px 4px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 0,
      width: 12,
      height: 12
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevronDown5, {
    size: "16",
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 12,
      borderRadius: "0px 0px 4px 4px",
      backgroundColor: "var(--patch-color-surface-primary-dull)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 12,
      borderRadius: "0px 0px 4px 4px",
      backgroundColor: "rgba(18,18,18,0.2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 0,
      width: 12,
      height: 12
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevronDown5, {
    size: "16",
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 12,
      borderRadius: "0px 0px 4px 4px",
      backgroundColor: "var(--patch-color-surface-primary-dim)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 12,
      borderRadius: "0px 0px 4px 4px",
      backgroundColor: "rgba(18,18,18,0.4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 0,
      width: 12,
      height: 12
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevronDown5, {
    size: "16",
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __impls = {
    // figma: Type=Up, State=at rest
    "type=up|state=at rest": __body0,
    // figma: Type=Up, State=on hover
    "type=up|state=on hover": __body1,
    // figma: Type=Up, State=is active
    "type=up|state=is active": __body2,
    // figma: Type=Down, State=at rest
    "type=down|state=at rest": __body3,
    // figma: Type=Down, State=on hover
    "type=down|state=on hover": __body4,
    // figma: Type=Down, State=is active
    "type=down|state=is active": __body5
  };
  return (__impls[__vkey_DesktopInputsBlocksRockerElements(props)] ?? __body0)();
}

// figma node: 5323:2781 .Desktop / Inputs / Blocks / Rocker
function DesktopInputsBlocksRocker(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 12
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(DesktopInputsBlocksRockerElements, {
    type: "up",
    state: "at rest"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 12,
      width: 16,
      height: 12
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(DesktopInputsBlocksRockerElements, {
    type: "down",
    state: "at rest"
  })));
}

// figma node: 5193:19760 .Desktop / Inputs / Blocks / Supporting Text (3 variants)
const __venc_DesktopInputsBlocksSupportingText2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_DesktopInputsBlocksSupportingText2 = p => "state=" + __venc_DesktopInputsBlocksSupportingText2(p.state);
function DesktopInputsBlocksSupportingText2(_p = {}) {
  const props = {
    ..._p,
    text: _p.text ?? "{Supporting text}",
    state: _p.state ?? "at rest"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 82,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--patch-color-text-secondary)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.text));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 82,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--patch-color-text-error)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.text));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 82,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--patch-color-text-disabled)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.text));
  const __impls = {
    // figma: State=at rest
    "state=at rest": __body0,
    // figma: State=has error
    "state=has error": __body1,
    // figma: State=is disabled
    "state=is disabled": __body2
  };
  return (__impls[__vkey_DesktopInputsBlocksSupportingText2(props)] ?? __body0)();
}

// figma node: 3429:433 .Desktop / Inputs / Blocks / Metric
function DesktopInputsBlocksMetric(_p = {}) {
  const props = {
    ..._p,
    metric: _p.metric ?? "{X}"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--patch-color-text-placeholder)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.metric));
}

// figma node: 4593:44125 .Desktop / Inputs / Blocks / UoM (6 variants)
const __venc_DesktopInputsBlocksUoM = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_DesktopInputsBlocksUoM = p => "metric=" + __venc_DesktopInputsBlocksUoM(p.metric);
function DesktopInputsBlocksUoM(_p = {}) {
  const props = {
    ..._p,
    metric: _p.metric ?? "x"
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
      width: 10,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(DesktopInputsBlocksMetric, {
    metric: "X"
  })));
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
      width: 9,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(DesktopInputsBlocksMetric, {
    metric: "Y"
  })));
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
      width: 13,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(DesktopInputsBlocksMetric, {
    metric: "W"
  })));
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
      width: 11,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(DesktopInputsBlocksMetric, {
    metric: "H"
  })));
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
      width: 11,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(DesktopInputsBlocksMetric, {
    metric: "%"
  })));
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
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(DesktopInputsBlocksMetric, {
    metric: "in"
  })));
  const __impls = {
    // figma: Metric=X
    "metric=x": __body0,
    // figma: Metric=Y
    "metric=y": __body1,
    // figma: Metric=W
    "metric=w": __body2,
    // figma: Metric=H
    "metric=h": __body3,
    // figma: Metric=%
    "metric=%25": __body4,
    // figma: Metric=in
    "metric=in": __body5
  };
  return (__impls[__vkey_DesktopInputsBlocksUoM(props)] ?? __body0)();
}

// figma node: 5323:2747 .Desktop / Inputs / Blocks / Metric
function DesktopInputsBlocksMetric2(_p = {}) {
  const props = {
    ..._p,
    metric: _p.metric ?? "{X}"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
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
      color: "var(--patch-color-text-placeholder)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.metric));
}

// figma node: 5323:2749 .Desktop / Inputs / Blocks / UoM (6 variants)
const __venc_DesktopInputsBlocksUoM2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_DesktopInputsBlocksUoM2 = p => "metric=" + __venc_DesktopInputsBlocksUoM2(p.metric);
function DesktopInputsBlocksUoM2(_p = {}) {
  const props = {
    ..._p,
    metric: _p.metric ?? "x"
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
      width: 10,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(DesktopInputsBlocksMetric2, {
    metric: "X"
  })));
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
      width: 9,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(DesktopInputsBlocksMetric2, {
    metric: "Y"
  })));
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
      width: 13,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(DesktopInputsBlocksMetric2, {
    metric: "W"
  })));
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
      width: 11,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(DesktopInputsBlocksMetric2, {
    metric: "H"
  })));
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
      width: 11,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(DesktopInputsBlocksMetric2, {
    metric: "%"
  })));
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
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(DesktopInputsBlocksMetric2, {
    metric: "in"
  })));
  const __impls = {
    // figma: Metric=X
    "metric=x": __body0,
    // figma: Metric=Y
    "metric=y": __body1,
    // figma: Metric=W
    "metric=w": __body2,
    // figma: Metric=H
    "metric=h": __body3,
    // figma: Metric=%
    "metric=%25": __body4,
    // figma: Metric=in
    "metric=in": __body5
  };
  return (__impls[__vkey_DesktopInputsBlocksUoM2(props)] ?? __body0)();
}

// figma node: 1841:6775 .f/forms/d/input/content (2 variants)
const __venc_FFormsDInputContent = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_FFormsDInputContent = p => "status=" + __venc_FFormsDInputContent(p.status);
function FFormsDInputContent(_p = {}) {
  const props = {
    ..._p,
    status: _p.status ?? "default",
    content: _p.content ?? "{Value}"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      position: "relative",
      ...props.style
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
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(18,18,18)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.content)));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      position: "relative",
      ...props.style
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
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(115,115,115)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.content)));
  const __impls = {
    // figma: Status=Default
    "status=default": __body0,
    // figma: Status=Placeholder
    "status=placeholder": __body1
  };
  return (__impls[__vkey_FFormsDInputContent(props)] ?? __body0)();
}

// figma node: 5193:8398 icon/machine (2 variants)
const __venc_IconMachine = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconMachine = p => "size=" + __venc_IconMachine(p.size);
function IconMachine(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "24"
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
    width: 25.339,
    height: 13,
    viewBox: "0 0 25.339 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.331,
      top: 9,
      width: 25.339,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.669 12 L 5.669 12 C 5.669 12.552 5.222 13 4.669 13 L 1.669 13 C 1.193 13 0.782 12.664 0.689 12.196 L 0.408 10.791 C -0.091 8.295 -0.133 5.73 0.286 3.22 L 0.321 3.008 C 0.61 1.272 2.112 0 3.872 0 L 21.467 0 C 23.227 0 24.729 1.272 25.018 3.008 L 25.053 3.22 C 25.472 5.73 25.43 8.295 24.931 10.791 L 24.65 12.196 C 24.557 12.664 24.146 13 23.669 13 L 20.669 13 C 20.117 13 19.669 12.552 19.669 12 Z M 2.294 3.337 L 2.259 3.549 C 2.123 4.361 2.041 5.18 2.012 6 L 23.327 6 C 23.298 5.18 23.216 4.361 23.08 3.549 L 23.045 3.337 C 22.917 2.565 22.249 2 21.467 2 L 3.872 2 C 3.09 2 2.422 2.565 2.294 3.337 Z M 2.046 8 C 2.103 8.804 2.21 9.605 2.369 10.398 L 2.489 11 L 3.937 11 C 4.283 10.402 4.929 10 5.669 10 L 19.669 10 C 20.41 10 21.056 10.402 21.402 11 L 22.85 11 L 22.97 10.398 C 23.129 9.605 23.236 8.804 23.293 8 L 2.046 8 Z",
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
    width: 18.761,
    height: 11,
    viewBox: "0 0 18.761 11",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.62,
      top: 6,
      width: 18.761,
      height: 11
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.297 9.627 L 18.11 10.422 C 18.031 10.761 17.728 11 17.38 11 L 14.13 11 C 13.716 11 13.38 10.664 13.38 10.25 L 13.38 10 C 13.38 9.862 13.269 9.75 13.13 9.75 L 5.63 9.75 C 5.492 9.75 5.38 9.862 5.38 10 L 5.38 10.25 C 5.38 10.664 5.045 11 4.63 11 L 1.38 11 C 1.032 11 0.73 10.761 0.65 10.422 L 0.463 9.627 C -0.097 7.247 -0.15 4.775 0.308 2.373 C 0.57 0.996 1.774 0 3.175 0 L 15.586 0 C 16.987 0 18.191 0.996 18.453 2.373 C 18.911 4.775 18.858 7.247 18.297 9.627 Z M 1.781 2.653 C 1.633 3.43 1.544 4.214 1.513 5 L 17.248 5 C 17.217 4.214 17.127 3.43 16.979 2.653 C 16.852 1.984 16.267 1.5 15.586 1.5 L 3.175 1.5 C 2.494 1.5 1.909 1.984 1.781 2.653 Z M 1.524 6.5 C 1.574 7.435 1.708 8.367 1.924 9.284 L 1.974 9.5 L 3.953 9.5 C 4.168 8.777 4.838 8.25 5.63 8.25 L 13.13 8.25 C 13.923 8.25 14.593 8.777 14.808 9.5 L 16.786 9.5 L 16.837 9.284 C 17.053 8.367 17.186 7.435 17.237 6.5 L 1.524 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: size=32
    "size=32": __body0,
    // figma: size=24
    "size=24": __body1
  };
  return (__impls[__vkey_IconMachine(props)] ?? __body1)();
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

// figma node: 5193:15002 icon/rotate (2 variants)
const __venc_IconRotate = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconRotate = p => "size=" + __venc_IconRotate(p.size);
function IconRotate(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "24"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
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
    height: 18.000,
    viewBox: "0 0 18 18.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.921 0.208 C 12.923 0.646 14.716 1.757 16.003 3.355 C 16.864 4.425 17.465 5.671 17.769 6.993 C 17.862 7.397 17.61 7.799 17.207 7.892 C 16.803 7.985 16.4 7.733 16.307 7.33 C 16.053 6.227 15.553 5.188 14.834 4.296 C 13.761 2.964 12.267 2.038 10.6 1.673 C 8.932 1.308 7.19 1.524 5.661 2.286 C 4.18 3.025 2.985 4.233 2.26 5.722 L 4.875 5.722 C 5.289 5.722 5.625 6.058 5.625 6.472 C 5.625 6.886 5.289 7.222 4.875 7.222 L 0.75 7.222 C 0.336 7.222 0 6.886 0 6.472 L 0 1.646 C 0 1.232 0.336 0.896 0.75 0.896 C 1.164 0.896 1.5 1.232 1.5 1.646 L 1.5 4.035 C 2.369 2.722 3.57 1.653 4.992 0.944 C 6.827 0.029 8.918 -0.231 10.921 0.208 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11.917 11.758 C 11.917 11.343 12.253 11.008 12.667 11.008 L 17.25 11.008 C 17.664 11.008 18 11.343 18 11.758 L 18 16.813 C 18 17.227 17.664 17.563 17.25 17.563 C 16.836 17.563 16.5 17.227 16.5 16.813 L 16.5 13.964 C 15.631 15.277 14.43 16.346 13.008 17.055 C 11.173 17.97 9.082 18.23 7.079 17.792 C 5.077 17.353 3.284 16.243 1.997 14.645 C 1.136 13.575 0.535 12.329 0.231 11.007 C 0.138 10.603 0.39 10.2 0.793 10.107 C 1.197 10.014 1.6 10.266 1.693 10.67 C 1.947 11.773 2.447 12.812 3.166 13.704 C 4.238 15.036 5.732 15.961 7.4 16.327 C 9.068 16.692 10.81 16.475 12.339 15.713 C 13.743 15.013 14.89 13.891 15.623 12.508 L 12.667 12.508 C 12.253 12.508 11.917 12.172 11.917 11.758 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      position: "relative",
      color: "var(--patch-color-text-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24.000,
    height: 24,
    viewBox: "0 0 24.000 24",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.561 0.277 C 17.231 0.862 19.621 2.343 21.337 4.474 C 22.486 5.9 23.286 7.561 23.692 9.324 C 23.816 9.863 23.481 10.399 22.942 10.523 C 22.404 10.647 21.867 10.311 21.743 9.773 C 21.405 8.302 20.737 6.917 19.779 5.728 C 18.349 3.951 16.357 2.718 14.133 2.231 C 11.909 1.744 9.586 2.032 7.548 3.048 C 5.573 4.033 3.98 5.645 3.014 7.63 L 6.5 7.63 C 7.052 7.63 7.5 8.077 7.5 8.63 C 7.5 9.182 7.052 9.63 6.5 9.63 L 1 9.63 C 0.448 9.63 0 9.182 0 8.63 L 0 2.195 C 0 1.643 0.448 1.195 1 1.195 C 1.552 1.195 2 1.643 2 2.195 L 2 5.38 C 3.158 3.63 4.76 2.204 6.656 1.259 C 9.102 0.039 11.891 -0.307 14.561 0.277 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15.889 15.677 C 15.889 15.125 16.337 14.677 16.889 14.677 L 23 14.677 C 23.552 14.677 24 15.125 24 15.677 L 24 22.418 C 24 22.97 23.552 23.418 23 23.418 C 22.448 23.418 22 22.97 22 22.418 L 22 18.619 C 20.842 20.37 19.24 21.796 17.344 22.741 C 14.898 23.961 12.109 24.308 9.439 23.723 C 6.769 23.138 4.379 21.658 2.663 19.526 C 1.514 18.1 0.714 16.439 0.308 14.676 C 0.184 14.137 0.519 13.601 1.058 13.477 C 1.596 13.353 2.133 13.689 2.257 14.227 C 2.595 15.698 3.263 17.083 4.221 18.272 C 5.651 20.049 7.643 21.282 9.867 21.769 C 12.09 22.256 14.413 21.967 16.452 20.951 C 18.324 20.018 19.853 18.521 20.83 16.677 L 16.889 16.677 C 16.337 16.677 15.889 16.229 15.889 15.677 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: size=24
    "size=24": __body0,
    // figma: size=32
    "size=32": __body1
  };
  return (__impls[__vkey_IconRotate(props)] ?? __body0)();
}

// figma node: 5193:13375 icon/text-format-horizontal (2 variants)
const __venc_IconTextFormatHorizontal = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconTextFormatHorizontal = p => "size=" + __venc_IconTextFormatHorizontal(p.size);
function IconTextFormatHorizontal(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "24"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--patch-color-text-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.989,
    height: 16,
    viewBox: "0 0 19.989 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.011,
      top: 4,
      width: 19.989,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.752 9.302 L 2.655 11.25 L 17.329 11.25 L 15.226 9.304 C 14.922 9.023 14.904 8.549 15.185 8.245 C 15.466 7.941 15.941 7.922 16.245 8.203 L 19.749 11.446 C 19.902 11.587 19.989 11.786 19.989 11.995 C 19.99 12.204 19.903 12.403 19.75 12.545 L 16.254 15.799 C 15.951 16.081 15.476 16.064 15.194 15.761 C 14.912 15.458 14.929 14.983 15.232 14.701 L 17.328 12.75 L 2.66 12.75 L 4.753 14.699 C 5.056 14.981 5.073 15.455 4.791 15.759 C 4.508 16.062 4.034 16.079 3.731 15.796 L 0.239 12.545 C 0.086 12.403 0 12.204 0 11.995 C 0 11.787 0.087 11.588 0.24 11.446 L 3.731 8.203 C 4.035 7.922 4.509 7.939 4.791 8.243 C 5.073 8.546 5.056 9.021 4.752 9.302 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11.989 6 L 11.989 0 L 14.518 0 C 15.922 0 16.651 0.537 16.651 1.561 L 16.651 1.594 C 16.651 2.224 16.327 2.685 15.607 2.878 C 16.444 3.038 16.894 3.483 16.894 4.288 L 16.894 4.322 C 16.894 5.421 16.12 6 14.635 6 L 11.989 6 Z M 13.411 2.467 L 14.284 2.467 C 14.986 2.467 15.265 2.232 15.265 1.695 L 15.265 1.662 C 15.265 1.158 14.959 0.931 14.275 0.931 L 13.411 0.931 L 13.411 2.467 Z M 13.411 5.06 L 14.41 5.06 C 15.13 5.06 15.454 4.758 15.454 4.213 L 15.454 4.179 C 15.454 3.625 15.13 3.34 14.338 3.34 L 13.411 3.34 L 13.411 5.06 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 2.989 6 L 4.961 0 L 6.732 0 L 8.679 6 L 7.261 6 L 6.849 4.666 L 4.676 4.666 L 4.265 6 L 2.989 6 Z M 5.767 1.108 L 4.97 3.701 L 6.556 3.701 L 5.767 1.108 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
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
    height: 22,
    viewBox: "0 0 26 22",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 5,
      width: 26,
      height: 22
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20.624 12.219 L 25.624 16.212 C 25.861 16.402 26 16.689 26 16.993 C 26 17.296 25.862 17.584 25.625 17.774 L 20.625 21.78 C 20.194 22.126 19.565 22.056 19.22 21.625 C 18.874 21.194 18.944 20.565 19.375 20.22 L 22.145 18 L 3.856 18 L 6.625 20.22 C 7.056 20.565 7.126 21.194 6.78 21.625 C 6.435 22.056 5.806 22.126 5.375 21.78 L 0.375 17.773 C 0.138 17.583 0 17.296 0 16.992 C 0 16.688 0.139 16.401 0.376 16.212 L 5.376 12.22 C 5.808 11.875 6.437 11.946 6.781 12.377 C 7.126 12.809 7.056 13.438 6.624 13.783 L 3.847 16 L 22.154 16 L 19.376 13.781 C 18.944 13.437 18.874 12.808 19.219 12.376 C 19.563 11.944 20.193 11.874 20.624 12.219 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15.667 8 L 15.667 0 L 18.761 0 C 20.478 0 21.37 0.716 21.37 2.081 L 21.37 2.126 C 21.37 2.965 20.973 3.58 20.093 3.838 C 21.117 4.05 21.667 4.643 21.667 5.717 L 21.667 5.762 C 21.667 7.228 20.72 8 18.904 8 L 15.667 8 Z M 17.406 3.29 L 18.474 3.29 C 19.333 3.29 19.674 2.976 19.674 2.26 L 19.674 2.215 C 19.674 1.544 19.3 1.242 18.463 1.242 L 17.406 1.242 L 17.406 3.29 Z M 17.406 6.747 L 18.628 6.747 C 19.509 6.747 19.906 6.344 19.906 5.617 L 19.906 5.572 C 19.906 4.834 19.509 4.453 18.54 4.453 L 17.406 4.453 L 17.406 6.747 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4 8 L 6.426 0 L 8.605 0 L 11 8 L 9.255 8 L 8.749 6.221 L 6.075 6.221 L 5.569 8 L 4 8 Z M 7.417 1.477 L 6.437 4.934 L 8.388 4.934 L 7.417 1.477 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: size=24
    "size=24": __body0,
    // figma: size=32
    "size=32": __body1
  };
  return (__impls[__vkey_IconTextFormatHorizontal(props)] ?? __body0)();
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

// figma node: 3421:4625 Input
function Input(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1576,
      height: 1300,
      overflow: "hidden",
      backgroundColor: "rgb(245,245,245)",
      position: "relative",
      color: "var(--warm)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(TitleBlock, {
    style: {
      position: "absolute",
      left: 40,
      top: 40,
      width: 728
    },
    text1: "Input",
    text2: "An input field allows users to enter alphanumeric data into the app."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 703,
      top: 434,
      width: 128,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      alignItems: "flex-start",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)"
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
  }, /*#__PURE__*/React.createElement(DesktopInputsBlocksLabel, {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 80 20",
    fill: "none",
    style: {
      position: "relative",
      overflow: "hidden",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 80 0 L 80 20 L 0 20 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
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
      borderRadius: 8,
      backgroundColor: "var(--patch-color-surface-primary-lowest)",
      borderTop: "1px solid var(--patch-color-border-secondary)",
      borderRight: "1px solid var(--patch-color-border-secondary)",
      borderBottom: "1px solid var(--patch-color-border-secondary)",
      borderLeft: "1px solid var(--patch-color-border-secondary)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(IconPlaceholder9, {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    size: "24"
  }), /*#__PURE__*/React.createElement(DesktopInputsBlocksContent2, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    status: "default"
  }), /*#__PURE__*/React.createElement(IconPlaceholder9, {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    size: "24"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 703,
      top: 808,
      width: 144,
      height: 100,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      alignItems: "flex-start",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 20,
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
  }, /*#__PURE__*/React.createElement(DesktopInputsBlocksLabel, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 56 20",
    fill: "none",
    style: {
      position: "relative",
      overflow: "hidden",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 56 0 L 56 20 L 0 20 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      justifyContent: "flex-end",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "right",
      lineHeight: "16px",
      color: "var(--patch-color-text-secondary)",
      flexShrink: 0
    }
  }, "0"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "var(--patch-color-text-secondary)",
      flexShrink: 0
    }
  }, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "var(--patch-color-text-secondary)",
      flexShrink: 0
    }
  }, "500"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--patch-color-surface-primary-lowest)",
      boxShadow: "inset 0 0 0 1px var(--patch-color-border-secondary)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--patch-color-text-placeholder)",
      flexShrink: 0
    }
  }, "{Value}"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 16,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.971,
    height: 1,
    viewBox: "0 -0.500 16.971 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.707,-0.707,0.707,0.707,2,14)",
      transformOrigin: "0 0",
      width: 16.971,
      height: 1,
      color: "var(--patch-color-border-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 -1 C 0.224 -1 0 -0.776 0 -0.5 C 0 -0.224 0.224 0 0.5 0 L 0.5 -0.5 L 0.5 -1 Z M 16.471 0 C 16.747 0 16.971 -0.224 16.971 -0.5 C 16.971 -0.776 16.747 -1 16.471 -1 L 16.471 -0.5 L 16.471 0 Z M 0.5 -0.5 L 0.5 0 L 16.471 0 L 16.471 -0.5 L 16.471 -1 L 0.5 -1 L 0.5 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.314,
    height: 1,
    viewBox: "0 -0.500 11.314 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.707,-0.707,0.707,0.707,6,14)",
      transformOrigin: "0 0",
      width: 11.314,
      height: 1,
      color: "var(--patch-color-border-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 -1 C 0.224 -1 0 -0.776 0 -0.5 C 0 -0.224 0.224 0 0.5 0 L 0.5 -0.5 L 0.5 -1 Z M 10.814 0 C 11.09 0 11.314 -0.224 11.314 -0.5 C 11.314 -0.776 11.09 -1 10.814 -1 L 10.814 -0.5 L 10.814 0 Z M 0.5 -0.5 L 0.5 0 L 10.814 0 L 10.814 -0.5 L 10.814 -1 L 0.5 -1 L 0.5 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.657,
    height: 1,
    viewBox: "0 -0.500 5.657 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.707,-0.707,0.707,0.707,10,14)",
      transformOrigin: "0 0",
      width: 5.657,
      height: 1,
      color: "var(--patch-color-border-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 -1 C 0.224 -1 0 -0.776 0 -0.5 C 0 -0.224 0.224 0 0.5 0 L 0.5 -0.5 L 0.5 -1 Z M 5.157 0 C 5.433 0 5.657 -0.224 5.657 -0.5 C 5.657 -0.776 5.433 -1 5.157 -1 L 5.157 -0.5 L 5.157 0 Z M 0.5 -0.5 L 0.5 0 L 5.157 0 L 5.157 -0.5 L 5.157 -1 L 0.5 -1 L 0.5 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement(DesktopInputsBlocksSupportingText2, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    state: "at rest"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1137,
      top: 396,
      width: 128,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      alignItems: "flex-start",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)"
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
  }, /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0
    }
  }, "Letter Space")), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 43 20",
    fill: "none",
    style: {
      position: "relative",
      overflow: "hidden",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 43 0 L 43 20 L 0 20 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
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
      borderRadius: 8,
      backgroundColor: "var(--patch-color-surface-primary-lowest)",
      borderTop: "1px solid var(--patch-color-border-secondary)",
      borderRight: "1px solid var(--patch-color-border-secondary)",
      borderBottom: "1px solid var(--patch-color-border-secondary)",
      borderLeft: "1px solid var(--patch-color-border-secondary)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(IconTextFormatHorizontal, {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    size: "24"
  }), /*#__PURE__*/React.createElement(DesktopInputsBlocksContent2, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    status: "default"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1137,
      top: 668,
      width: 96,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      alignItems: "flex-start",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)"
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
  }, /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0
    }
  }, "Rotate")), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 52 20",
    fill: "none",
    style: {
      position: "relative",
      overflow: "hidden",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 52 0 L 52 20 L 0 20 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
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
      borderRadius: 8,
      backgroundColor: "var(--patch-color-surface-primary-lowest)",
      boxShadow: "inset 0 0 0 1px var(--patch-color-border-secondary)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(IconRotate, {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    size: "24"
  }), /*#__PURE__*/React.createElement(FFormsDInputContent, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    content: "{Value}",
    status: "default"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1344,
      top: 396,
      width: 192,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      alignItems: "flex-start",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)"
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
  }, /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0
    }
  }, "Machine name")), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 94 20",
    fill: "none",
    style: {
      position: "relative",
      overflow: "hidden",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 94 0 L 94 20 L 0 20 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
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
      borderRadius: 8,
      backgroundColor: "var(--patch-color-surface-primary-lowest)",
      borderTop: "1px solid var(--patch-color-border-secondary)",
      borderRight: "1px solid var(--patch-color-border-secondary)",
      borderBottom: "1px solid var(--patch-color-border-secondary)",
      borderLeft: "1px solid var(--patch-color-border-secondary)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(DesktopInputsBlocksContent2, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    status: "default"
  }), /*#__PURE__*/React.createElement(IconMachine, {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    size: "24"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1137,
      top: 532,
      width: 80,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      alignItems: "flex-start",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)"
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
  }, /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0
    }
  }, "Position")), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 26 20",
    fill: "none",
    style: {
      position: "relative",
      overflow: "hidden",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 26 0 L 26 20 L 0 20 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
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
      borderRadius: 8,
      backgroundColor: "var(--patch-color-surface-primary-lowest)",
      borderTop: "1px solid var(--patch-color-border-secondary)",
      borderRight: "1px solid var(--patch-color-border-secondary)",
      borderBottom: "1px solid var(--patch-color-border-secondary)",
      borderLeft: "1px solid var(--patch-color-border-secondary)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(DesktopInputsBlocksUoM2, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    metric: "%"
  }), /*#__PURE__*/React.createElement(DesktopInputsBlocksContent2, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    status: "default"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 11,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      justifyContent: "flex-end",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(DesktopInputsBlocksRocker, {
    style: {
      position: "relative",
      width: 16,
      height: 24,
      flexShrink: 0
    }
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1221,
      top: 556,
      width: 80,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      alignItems: "flex-start",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
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
      borderRadius: 8,
      backgroundColor: "var(--patch-color-surface-primary-lowest)",
      borderTop: "1px solid var(--patch-color-border-secondary)",
      borderRight: "1px solid var(--patch-color-border-secondary)",
      borderBottom: "1px solid var(--patch-color-border-secondary)",
      borderLeft: "1px solid var(--patch-color-border-secondary)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(DesktopInputsBlocksUoM, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    metric: "%"
  }), /*#__PURE__*/React.createElement(DesktopInputsBlocksContent, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    status: "default"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1137,
      top: 960,
      width: 96,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      alignItems: "flex-start",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)"
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
  }, /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0
    }
  }, "Width")), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 56 20",
    fill: "none",
    style: {
      position: "relative",
      overflow: "hidden",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 56 0 L 56 20 L 0 20 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
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
      borderRadius: 8,
      backgroundColor: "var(--patch-color-surface-primary-lowest)",
      borderTop: "1px solid var(--patch-color-border-secondary)",
      borderRight: "1px solid var(--patch-color-border-secondary)",
      borderBottom: "1px solid var(--patch-color-border-secondary)",
      borderLeft: "1px solid var(--patch-color-border-secondary)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      alignItems: "center",
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
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
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
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "{Value}"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
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
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "%"))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1344,
      top: 668,
      width: 96,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      alignItems: "flex-start",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)"
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
  }, /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0
    }
  }, "Height")), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 51 20",
    fill: "none",
    style: {
      position: "relative",
      overflow: "hidden",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 51 0 L 51 20 L 0 20 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
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
      borderRadius: 8,
      backgroundColor: "var(--patch-color-surface-primary-lowest)",
      borderTop: "1px solid var(--patch-color-border-secondary)",
      borderRight: "1px solid var(--patch-color-border-secondary)",
      borderBottom: "1px solid var(--patch-color-border-secondary)",
      borderLeft: "1px solid var(--patch-color-border-secondary)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(DesktopInputsBlocksUoM2, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    metric: "%"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid var(--patch-color-border-accent-primary)",
      borderRight: "1px solid var(--patch-color-border-accent-primary)",
      borderBottom: "1px solid var(--patch-color-border-accent-primary)",
      borderLeft: "1px solid var(--patch-color-border-accent-primary)",
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
  }, "{Value}"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 11,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      justifyContent: "flex-end",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(DesktopInputsBlocksRocker, {
    style: {
      position: "relative",
      width: 16,
      height: 24,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement(DesktopInputsBlocksUoM2, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    metric: "%"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1344,
      top: 532,
      width: 60,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      alignItems: "flex-start",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)"
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
  }, /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0
    }
  }, "Zoom")), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 21 20",
    fill: "none",
    style: {
      position: "relative",
      overflow: "hidden",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 21 0 L 21 20 L 0 20 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
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
      borderRadius: 8,
      backgroundColor: "var(--patch-color-surface-primary-lowest)",
      borderTop: "1px solid var(--patch-color-border-secondary)",
      borderRight: "1px solid var(--patch-color-border-secondary)",
      borderBottom: "1px solid var(--patch-color-border-secondary)",
      borderLeft: "1px solid var(--patch-color-border-secondary)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(DesktopInputsBlocksContent, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    status: "default"
  }), /*#__PURE__*/React.createElement(DesktopInputsBlocksUoM, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    metric: "%"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1137,
      top: 1096,
      width: 96,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      alignItems: "flex-start",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)"
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
  }, /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0
    }
  }, "Size")), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 68 20",
    fill: "none",
    style: {
      position: "relative",
      overflow: "hidden",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 68 0 L 68 20 L 0 20 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
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
      borderRadius: 8,
      backgroundColor: "var(--patch-color-surface-primary-lowest)",
      borderTop: "1px solid var(--patch-color-border-secondary)",
      borderRight: "1px solid var(--patch-color-border-secondary)",
      borderBottom: "1px solid var(--patch-color-border-secondary)",
      borderLeft: "1px solid var(--patch-color-border-secondary)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(DesktopInputsBlocksUoM, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    metric: "%"
  }), /*#__PURE__*/React.createElement(DesktopInputsBlocksContent, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    status: "default"
  }), /*#__PURE__*/React.createElement(DesktopInputsBlocksUoM, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    metric: "%"
  })))), /*#__PURE__*/React.createElement("div", {
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
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--patch-color-text-error)",
      flexGrow: 1
    }
  }, "Numerical value required."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1344,
      top: 1096,
      width: 128,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      alignItems: "flex-start",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)"
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
  }, /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0
    }
  }, "Name")), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 65 20",
    fill: "none",
    style: {
      position: "relative",
      overflow: "hidden",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 65 0 L 65 20 L 0 20 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      justifyContent: "flex-end",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "right",
      lineHeight: "16px",
      color: "var(--patch-color-text-secondary)",
      flexShrink: 0
    }
  }, "8"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "var(--patch-color-text-secondary)",
      flexShrink: 0
    }
  }, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "var(--patch-color-text-secondary)",
      flexShrink: 0
    }
  }, "8"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
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
      borderRadius: 8,
      backgroundColor: "var(--patch-color-surface-primary-lowest)",
      borderTop: "1px solid var(--patch-color-border-secondary)",
      borderRight: "1px solid var(--patch-color-border-secondary)",
      borderBottom: "1px solid var(--patch-color-border-secondary)",
      borderLeft: "1px solid var(--patch-color-border-secondary)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(DesktopInputsBlocksContent, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    status: "default"
  })))), /*#__PURE__*/React.createElement("div", {
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
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--patch-color-text-error)",
      flexGrow: 1
    }
  }, "Character count exceeded."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1137,
      top: 804,
      width: 192,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      alignItems: "flex-start",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)"
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
  }, /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0
    }
  }, "Project Name*")), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 61 20",
    fill: "none",
    style: {
      position: "relative",
      overflow: "hidden",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 61 0 L 61 20 L 0 20 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      justifyContent: "flex-end",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "right",
      lineHeight: "16px",
      color: "var(--patch-color-text-secondary)",
      flexShrink: 0
    }
  }, "16"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "var(--patch-color-text-secondary)",
      flexShrink: 0
    }
  }, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "var(--patch-color-text-secondary)",
      flexShrink: 0
    }
  }, "64"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
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
      borderRadius: 8,
      backgroundColor: "var(--patch-color-surface-primary-lowest)",
      borderTop: "1px solid var(--patch-color-border-secondary)",
      borderRight: "1px solid var(--patch-color-border-secondary)",
      borderBottom: "1px solid var(--patch-color-border-secondary)",
      borderLeft: "1px solid var(--patch-color-border-secondary)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      alignItems: "center",
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
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--patch-color-surface-accent-primary)",
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
  }, "{Value}")))))), /*#__PURE__*/React.createElement("div", {
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
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--patch-color-text-secondary)",
      flexGrow: 1
    }
  }, "Help others find your project."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40,
      top: 300,
      width: 472,
      borderTop: "1px solid rgb(173,173,173)",
      borderRight: "1px solid rgb(173,173,173)",
      borderBottom: "1px solid rgb(173,173,173)",
      borderLeft: "1px solid rgb(173,173,173)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 0px 16px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Euclid Circular B\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "24px",
      color: "var(--patch-color-gray-800)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Properties"), /*#__PURE__*/React.createElement("span", {
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
  }, "• ", "L", "abel: optional but recommended.", "\n", "• ", "Counter: optional character count with discrete properties.", "\n", "• ", "Support: optional helper text beneath the element, with discrete states.", "\n", "• ", "S", "ize", " (desktop only)", ": ", "two size options to fit with adjacent form elements or buttons of similar size.", "\n", "• ", "T", "ype: ", "select from text or number variants (desktop)", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(43,43,43)"
    }
  }, ", single or multi-line (i.e. textarea) variants (mobile). Note that text and numerical inputs are separate components on mobile."), "\n", "• ", "State: allows different states of user interaction to be represented (see below).", "\n", "• ", "Lead: an optional slot preceding the text, that can accommodate an icon (desktop only) or a dimensional designation such as W, H, X, or Y. Not applicable to Textarea variant.", "\n", "• ", "Trail: an optional slot following the text, that can accommodate an icon ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(43,43,43)"
    }
  }, "(desktop only) "), "or a unit of measure (UoM) for a numeric value, such as percentage. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(43,43,43)"
    }
  }, "Not applicable to Textarea variant."), "\n", "• ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(43,43,43)"
    }
  }, "Rocker (desktop only): optional up/down arrows to increment a numerical input value. Will only display on hover or with focus."), "\n", "• ", "Status: allows text content inside the field to be styled as a placeholder if required. Note that this is different to setting the State to disabled.", "\n", "• ", "Content or Value: the text to appear in the field.")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 710,
      top: 388,
      width: 26,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Label"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 703,
      top: 506,
      width: 199,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Desktop, type: Text, size: S, Status: Default"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 703,
      top: 712,
      width: 103,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Mobile, Number Input"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 703,
      top: 924,
      width: 206,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Desktop, type: Textarea, Status: Placeholder"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 642,
      top: 466,
      width: 23,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Lead"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 626,
      top: 680,
      width: 39,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Support"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 870,
      top: 466,
      width: 20,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Trail"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 870,
      top: 810,
      width: 39,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Counter"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 758,
      top: 388,
      width: 39,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Content"), /*#__PURE__*/React.createElement("svg", {
    width: 32,
    height: 1,
    viewBox: "0 -0.500 32 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,723,404)",
      transformOrigin: "0 0",
      width: 32,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.333 0 C 29.333 1.473 30.527 2.667 32 2.667 C 33.473 2.667 34.667 1.473 34.667 0 C 34.667 -1.473 33.473 -2.667 32 -2.667 C 30.527 -2.667 29.333 -1.473 29.333 0 Z M 0 0 L 0 0.5 L 32 0.5 L 32 0 L 32 -0.5 L 0 -0.5 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 64,
    height: 1,
    viewBox: "0 -0.500 64 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,777,404)",
      transformOrigin: "0 0",
      width: 64,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 61.333 0 C 61.333 1.473 62.527 2.667 64 2.667 C 65.473 2.667 66.667 1.473 66.667 0 C 66.667 -1.473 65.473 -2.667 64 -2.667 C 62.527 -2.667 61.333 -1.473 61.333 0 Z M 0 0 L 0 0.5 L 64 0.5 L 64 0 L 64 -0.5 L 0 -0.5 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 44,
    height: 1,
    viewBox: "0 -0.500 44 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 669,
      top: 474,
      width: 44,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 41.333 0 C 41.333 1.473 42.527 2.667 44 2.667 C 45.473 2.667 46.667 1.473 46.667 0 C 46.667 -1.473 45.473 -2.667 44 -2.667 C 42.527 -2.667 41.333 -1.473 41.333 0 Z M 0 0 L 0 0.5 L 44 0.5 L 44 0 L 44 -0.5 L 0 -0.5 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 31,
    height: 1,
    viewBox: "0 -0.500 31 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 669,
      top: 688,
      width: 31,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 28.333 0 C 28.333 1.473 29.527 2.667 31 2.667 C 32.473 2.667 33.667 1.473 33.667 0 C 33.667 -1.473 32.473 -2.667 31 -2.667 C 29.527 -2.667 28.333 -1.473 28.333 0 Z M 0 0 L 0 0.5 L 31 0.5 L 31 0 L 31 -0.5 L 0 -0.5 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 44,
    height: 1,
    viewBox: "0 -0.500 44 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 821,
      top: 474,
      width: 44,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -2.667 0 C -2.667 1.473 -1.473 2.667 0 2.667 C 1.473 2.667 2.667 1.473 2.667 0 C 2.667 -1.473 1.473 -2.667 0 -2.667 C -1.473 -2.667 -2.667 -1.473 -2.667 0 Z M 0 0 L 0 0.5 L 44 0.5 L 44 0 L 44 -0.5 L 0 -0.5 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 1,
    viewBox: "0 -0.500 18 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 847,
      top: 818,
      width: 18,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -2.667 0 C -2.667 1.473 -1.473 2.667 0 2.667 C 1.473 2.667 2.667 1.473 2.667 0 C 2.667 -1.473 1.473 -2.667 0 -2.667 C -1.473 -2.667 -2.667 -1.473 -2.667 0 Z M 0 0 L 0 0.5 L 18 0.5 L 18 0 L 18 -0.5 L 0 -0.5 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 1079,
      top: 1128,
      width: 42,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "right",
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "has error"), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 40,
      top: 148,
      width: 472,
      height: 112
    },
    subheading: false,
    content: true,
    text1: "Usage",
    text3: "Enables the user to enter data via a keyboard.\nTypically part of a form or related to other inputs."
  }), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 552,
      top: 300,
      width: 472,
      height: 56
    },
    subheading: false,
    content: false,
    text1: "Anatomy"
  }), /*#__PURE__*/React.createElement(StatusBlock, {
    style: {
      position: "absolute",
      left: 993,
      top: 40,
      width: 543
    },
    date: "2025-11-13",
    orientation: "default"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 703,
      top: 602,
      width: 120,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      alignItems: "flex-start"
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
      fontWeight: 500,
      fontSize: 15,
      lineHeight: "22px",
      color: "var(--patch-color-text-primary)",
      flexGrow: 1
    }
  }, "{Label}")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 48,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--patch-color-surface-primary-lowest)",
      boxShadow: "inset 0 0 0 1px var(--patch-color-border-secondary)",
      display: "flex",
      flexDirection: "row",
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
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--patch-color-text-placeholder)",
      flexShrink: 0
    }
  }, "W"), /*#__PURE__*/React.createElement("div", {
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
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "0")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--patch-color-text-placeholder)",
      flexShrink: 0
    }
  }, "in"))), /*#__PURE__*/React.createElement("div", {
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
      fontSize: 12,
      lineHeight: "16px",
      color: "var(--patch-color-text-secondary)",
      flexGrow: 1
    }
  }, "{Supporting text}"))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 1091,
      top: 428,
      width: 30,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "right",
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "at rest"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 1079,
      top: 564,
      width: 42,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "right",
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "on hover"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 1076,
      top: 699,
      width: 45,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "right",
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "has focus"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 1071,
      top: 992,
      width: 50,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "right",
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "is disabled"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 1057,
      top: 836,
      width: 64,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "right",
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "is highlighted"), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 1064,
      top: 300,
      width: 472,
      height: 56
    },
    subheading: false,
    content: false,
    text1: "States",
    text3: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 1089,
      top: 104,
      width: 282,
      height: 16,
      fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "var(--hot)"
    }
  }, "Mobile versions in flux as of Q2/3 2025"));
}

// figma node: 5193:20969 Desktop / Buttons / Icon Button (30 variants)
const __venc_DesktopButtonsIconButton3 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_DesktopButtonsIconButton3 = p => "type=" + __venc_DesktopButtonsIconButton3(p.type) + '|' + "size=" + __venc_DesktopButtonsIconButton3(p.size) + '|' + "state=" + __venc_DesktopButtonsIconButton3(p.state);
function DesktopButtonsIconButton3(_p = {}) {
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
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
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
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-medium) * 1px)",
      height: "calc(var(--patch-object-medium) * 1px)",
      borderRadius: 8,
      backgroundColor: "var(--patch-color-surface-primary-highest)",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-small) * 1px)",
      height: "calc(var(--patch-object-small) * 1px)",
      borderRadius: 8,
      backgroundColor: "var(--patch-color-surface-primary-highest)",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
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
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
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
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 8,
      width: 24,
      height: 24,
      color: "rgb(255,255,255)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 24,
      height: 24,
      color: "rgb(255,255,255)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-medium) * 1px)",
      height: "calc(var(--patch-object-medium) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-surface-primary-highest)",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-small) * 1px)",
      height: "calc(var(--patch-object-small) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-surface-primary-highest)",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
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
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
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
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
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
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "16"
  })));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-x-small) * 1px)",
      height: "calc(var(--patch-object-x-small) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--patch-color-surface-primary-highest)",
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
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "16"
  })));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
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
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "16"
  })));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
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
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "16"
  })));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-x-small) * 1px)",
      height: "calc(var(--patch-object-x-small) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-surface-primary-highest)",
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
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "16"
  })));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
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
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
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
    // figma: Type=Primary, Size=M, State=on hover
    "type=primary|size=m|state=on hover": __body2,
    // figma: Type=Primary, Size=S, State=on hover
    "type=primary|size=s|state=on hover": __body3,
    // figma: Type=Primary, Size=M, State=is active
    "type=primary|size=m|state=is active": __body2,
    // figma: Type=Primary, Size=M, State=is selected
    "type=primary|size=m|state=is selected": __body4,
    // figma: Type=Primary, Size=S, State=is active
    "type=primary|size=s|state=is active": __body3,
    // figma: Type=Primary, Size=S, State=is selected
    "type=primary|size=s|state=is selected": __body5,
    // figma: Type=Secondary, Size=M, State=at rest
    "type=secondary|size=m|state=at rest": __body6,
    // figma: Type=Secondary, Size=S, State=at rest
    "type=secondary|size=s|state=at rest": __body7,
    // figma: Type=Secondary, Size=M, State=is disabled
    "type=secondary|size=m|state=is disabled": __body6,
    // figma: Type=Secondary, Size=S, State=is disabled
    "type=secondary|size=s|state=is disabled": __body7,
    // figma: Type=Secondary, Size=M, State=on hover
    "type=secondary|size=m|state=on hover": __body8,
    // figma: Type=Secondary, Size=S, State=on hover
    "type=secondary|size=s|state=on hover": __body9,
    // figma: Type=Secondary, Size=M, State=is active
    "type=secondary|size=m|state=is active": __body8,
    // figma: Type=Secondary, Size=M, State=is selected
    "type=secondary|size=m|state=is selected": __body10,
    // figma: Type=Secondary, Size=S, State=is active
    "type=secondary|size=s|state=is active": __body9,
    // figma: Type=Secondary, Size=S, State=is selected
    "type=secondary|size=s|state=is selected": __body11,
    // figma: Type=Primary, Size=XS, State=at rest
    "type=primary|size=xs|state=at rest": __body12,
    // figma: Type=Primary, Size=XS, State=is disabled
    "type=primary|size=xs|state=is disabled": __body12,
    // figma: Type=Primary, Size=XS, State=on hover
    "type=primary|size=xs|state=on hover": __body13,
    // figma: Type=Primary, Size=XS, State=is active
    "type=primary|size=xs|state=is active": __body13,
    // figma: Type=Primary, Size=XS, State=is selected
    "type=primary|size=xs|state=is selected": __body14,
    // figma: Type=Secondary, Size=XS, State=at rest
    "type=secondary|size=xs|state=at rest": __body15,
    // figma: Type=Secondary, Size=XS, State=is disabled
    "type=secondary|size=xs|state=is disabled": __body15,
    // figma: Type=Secondary, Size=XS, State=on hover
    "type=secondary|size=xs|state=on hover": __body16,
    // figma: Type=Secondary, Size=XS, State=is active
    "type=secondary|size=xs|state=is active": __body16,
    // figma: Type=Secondary, Size=XS, State=is selected
    "type=secondary|size=xs|state=is selected": __body17
  };
  return (__impls[__vkey_DesktopButtonsIconButton3(props)] ?? __body12)();
}

// figma node: 5326:3306 .Desktop / Inputs / Blocks / State (12 variants)
const __venc_DesktopInputsBlocksState3 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_DesktopInputsBlocksState3 = p => "type=" + __venc_DesktopInputsBlocksState3(p.type) + '|' + "state=" + __venc_DesktopInputsBlocksState3(p.state);
function DesktopInputsBlocksState3(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "text",
    state: _p.state ?? "at rest",
    lead: _p.lead ?? false,
    rocker: _p.rocker ?? false,
    trail: _p.trail ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 63,
      borderRadius: 8,
      backgroundColor: "var(--patch-color-surface-primary-lowest)",
      borderTop: "1px solid var(--patch-color-border-secondary)",
      borderRight: "1px solid var(--patch-color-border-secondary)",
      borderBottom: "1px solid var(--patch-color-border-secondary)",
      borderLeft: "1px solid var(--patch-color-border-secondary)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      position: "relative",
      ...props.style
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
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement(DesktopInputsBlocksContent2, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    status: "default"
  }), props.trail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  }))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 63,
      borderRadius: 8,
      backgroundColor: "var(--patch-color-surface-primary-lowest)",
      borderTop: "1px solid var(--patch-color-border-secondary)",
      borderRight: "1px solid var(--patch-color-border-secondary)",
      borderBottom: "1px solid var(--patch-color-border-secondary)",
      borderLeft: "1px solid var(--patch-color-border-secondary)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      position: "relative",
      ...props.style
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
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(255,255,255)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
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
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "{Value}"))), props.trail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(255,255,255)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  }))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 63,
      borderRadius: 8,
      backgroundColor: "var(--patch-color-surface-primary-lowest)",
      borderTop: "1px solid var(--patch-color-border-error)",
      borderRight: "1px solid var(--patch-color-border-error)",
      borderBottom: "1px solid var(--patch-color-border-error)",
      borderLeft: "1px solid var(--patch-color-border-error)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      position: "relative",
      ...props.style
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
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(255,255,255)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement(DesktopInputsBlocksContent2, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    status: "default"
  }), props.trail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(255,255,255)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  }))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 63,
      borderRadius: 8,
      backgroundColor: "var(--patch-color-surface-primary-lowest)",
      borderTop: "1px solid var(--patch-color-border-hover)",
      borderRight: "1px solid var(--patch-color-border-hover)",
      borderBottom: "1px solid var(--patch-color-border-hover)",
      borderLeft: "1px solid var(--patch-color-border-hover)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      position: "relative",
      ...props.style
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
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement(DesktopInputsBlocksContent2, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    status: "default"
  }), props.trail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  }))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 63,
      borderRadius: 8,
      backgroundColor: "var(--patch-color-surface-primary-lowest)",
      borderTop: "1px solid var(--patch-color-border-accent-primary)",
      borderRight: "1px solid var(--patch-color-border-accent-primary)",
      borderBottom: "1px solid var(--patch-color-border-accent-primary)",
      borderLeft: "1px solid var(--patch-color-border-accent-primary)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      position: "relative",
      ...props.style
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
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(255,255,255)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid var(--patch-color-border-accent-primary)",
      borderRight: "1px solid var(--patch-color-border-accent-primary)",
      borderBottom: "1px solid var(--patch-color-border-accent-primary)",
      borderLeft: "1px solid var(--patch-color-border-accent-primary)",
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
  }, "{Value}"))), props.trail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(255,255,255)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  }))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 63,
      borderRadius: 8,
      backgroundColor: "var(--patch-color-surface-primary-lowest)",
      borderTop: "1px solid var(--patch-color-border-accent-primary)",
      borderRight: "1px solid var(--patch-color-border-accent-primary)",
      borderBottom: "1px solid var(--patch-color-border-accent-primary)",
      borderLeft: "1px solid var(--patch-color-border-accent-primary)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      position: "relative",
      ...props.style
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
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(255,255,255)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--patch-color-surface-accent-primary)",
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
  }, "{Value}"))), props.trail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(255,255,255)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  }))));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 63,
      borderRadius: 8,
      backgroundColor: "var(--patch-color-surface-primary-lowest)",
      borderTop: "1px solid var(--patch-color-border-secondary)",
      borderRight: "1px solid var(--patch-color-border-secondary)",
      borderBottom: "1px solid var(--patch-color-border-secondary)",
      borderLeft: "1px solid var(--patch-color-border-secondary)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      position: "relative",
      ...props.style
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
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement(DesktopInputsBlocksUoM2, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    metric: "%"
  }), /*#__PURE__*/React.createElement(DesktopInputsBlocksContent2, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    status: "default"
  }), props.trail && /*#__PURE__*/React.createElement(DesktopInputsBlocksUoM2, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    metric: "%"
  })));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 63,
      borderRadius: 8,
      backgroundColor: "var(--patch-color-surface-primary-lowest)",
      borderTop: "1px solid var(--patch-color-border-secondary)",
      borderRight: "1px solid var(--patch-color-border-secondary)",
      borderBottom: "1px solid var(--patch-color-border-secondary)",
      borderLeft: "1px solid var(--patch-color-border-secondary)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      position: "relative",
      ...props.style
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
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "right",
      lineHeight: "20px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "%"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
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
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "{Value}"))), props.trail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "right",
      lineHeight: "20px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "%")))));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 63,
      borderRadius: 8,
      backgroundColor: "var(--patch-color-surface-primary-lowest)",
      borderTop: "1px solid var(--patch-color-border-error)",
      borderRight: "1px solid var(--patch-color-border-error)",
      borderBottom: "1px solid var(--patch-color-border-error)",
      borderLeft: "1px solid var(--patch-color-border-error)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      position: "relative",
      ...props.style
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
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement(DesktopInputsBlocksUoM2, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    metric: "%"
  }), /*#__PURE__*/React.createElement(DesktopInputsBlocksContent2, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    status: "default"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 11,
      height: 20,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      justifyContent: "flex-end",
      alignItems: "center",
      flexShrink: 0
    }
  }, props.rocker && /*#__PURE__*/React.createElement(DesktopInputsBlocksRocker, {
    style: {
      position: "relative",
      width: 16,
      height: 24,
      flexShrink: 0
    }
  }), props.trail && /*#__PURE__*/React.createElement(DesktopInputsBlocksUoM2, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    metric: "%"
  }))));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 63,
      borderRadius: 8,
      backgroundColor: "var(--patch-color-surface-primary-lowest)",
      borderTop: "1px solid var(--patch-color-border-hover)",
      borderRight: "1px solid var(--patch-color-border-hover)",
      borderBottom: "1px solid var(--patch-color-border-hover)",
      borderLeft: "1px solid var(--patch-color-border-hover)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      position: "relative",
      ...props.style
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
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement(DesktopInputsBlocksUoM2, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    metric: "%"
  }), /*#__PURE__*/React.createElement(DesktopInputsBlocksContent2, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    status: "default"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 11,
      height: 20,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      justifyContent: "flex-end",
      alignItems: "center",
      flexShrink: 0
    }
  }, props.rocker && /*#__PURE__*/React.createElement(DesktopInputsBlocksRocker, {
    style: {
      position: "relative",
      width: 16,
      height: 24,
      flexShrink: 0
    }
  }), props.trail && /*#__PURE__*/React.createElement(DesktopInputsBlocksUoM2, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    metric: "%"
  }))));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 63,
      borderRadius: 8,
      backgroundColor: "var(--patch-color-surface-primary-lowest)",
      borderTop: "1px solid var(--patch-color-border-accent-primary)",
      borderRight: "1px solid var(--patch-color-border-accent-primary)",
      borderBottom: "1px solid var(--patch-color-border-accent-primary)",
      borderLeft: "1px solid var(--patch-color-border-accent-primary)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      position: "relative",
      ...props.style
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
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement(DesktopInputsBlocksUoM2, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    metric: "%"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid var(--patch-color-border-accent-primary)",
      borderRight: "1px solid var(--patch-color-border-accent-primary)",
      borderBottom: "1px solid var(--patch-color-border-accent-primary)",
      borderLeft: "1px solid var(--patch-color-border-accent-primary)",
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
  }, "{Value}"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 11,
      height: 20,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      justifyContent: "flex-end",
      alignItems: "center",
      flexShrink: 0
    }
  }, props.rocker && /*#__PURE__*/React.createElement(DesktopInputsBlocksRocker, {
    style: {
      position: "relative",
      width: 16,
      height: 24,
      flexShrink: 0
    }
  }), props.trail && /*#__PURE__*/React.createElement(DesktopInputsBlocksUoM2, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    metric: "%"
  }))));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 63,
      borderRadius: 8,
      backgroundColor: "var(--patch-color-surface-primary-lowest)",
      borderTop: "1px solid var(--patch-color-border-accent-primary)",
      borderRight: "1px solid var(--patch-color-border-accent-primary)",
      borderBottom: "1px solid var(--patch-color-border-accent-primary)",
      borderLeft: "1px solid var(--patch-color-border-accent-primary)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      position: "relative",
      ...props.style
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
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.lead && /*#__PURE__*/React.createElement(DesktopInputsBlocksUoM2, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    metric: "%"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
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
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "{Value}"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 11,
      height: 20,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      justifyContent: "flex-end",
      alignItems: "center",
      flexShrink: 0
    }
  }, props.rocker && /*#__PURE__*/React.createElement(DesktopInputsBlocksRocker, {
    style: {
      position: "relative",
      width: 16,
      height: 24,
      flexShrink: 0
    }
  }), props.trail && /*#__PURE__*/React.createElement(DesktopInputsBlocksUoM2, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    metric: "%"
  }))));
  const __impls = {
    // figma: Type=Text, State=at rest
    "type=text|state=at rest": __body0,
    // figma: Type=Text, State=is disabled
    "type=text|state=is disabled": __body1,
    // figma: Type=Text, State=has error
    "type=text|state=has error": __body2,
    // figma: Type=Text, State=on hover
    "type=text|state=on hover": __body3,
    // figma: Type=Text, State=has focus
    "type=text|state=has focus": __body4,
    // figma: Type=Text, State=is highlighted
    "type=text|state=is highlighted": __body5,
    // figma: Type=Number, State=at rest
    "type=number|state=at rest": __body6,
    // figma: Type=Number, State=is disabled
    "type=number|state=is disabled": __body7,
    // figma: Type=Number, State=has error
    "type=number|state=has error": __body8,
    // figma: Type=Number, State=on hover
    "type=number|state=on hover": __body9,
    // figma: Type=Number, State=has focus
    "type=number|state=has focus": __body10,
    // figma: Type=Number, State=is highlighted
    "type=number|state=is highlighted": __body11
  };
  return (__impls[__vkey_DesktopInputsBlocksState3(props)] ?? __body0)();
}

// figma node: 5326:3375 .Desktop / Inputs / Blocks / Size (2 variants)
const __venc_DesktopInputsBlocksSize = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_DesktopInputsBlocksSize = p => "size=" + __venc_DesktopInputsBlocksSize(p.size);
function DesktopInputsBlocksSize(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "s"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 128,
      borderRadius: 8,
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
  }, /*#__PURE__*/React.createElement(DesktopInputsBlocksState3, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    type: "text",
    state: "at rest"
  }));
  const __impls = {
    // figma: Size=M
    "size=m": __body0,
    // figma: Size=S
    "size=s": __body0
  };
  return (__impls[__vkey_DesktopInputsBlocksSize(props)] ?? __body0)();
}

// figma node: 5193:15651 icon/minus-circle (2 variants)
const __venc_IconMinusCircle = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconMinusCircle = p => "size=" + __venc_IconMinusCircle(p.size);
function IconMinusCircle(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "24"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
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
    d: "M 10 1.5 C 5.306 1.5 1.5 5.306 1.5 10 C 1.5 14.694 5.306 18.5 10 18.5 C 14.694 18.5 18.5 14.694 18.5 10 C 18.5 5.306 14.694 1.5 10 1.5 Z M 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4 9.757 C 4 9.342 4.336 9.007 4.75 9.007 L 15.25 9.007 C 15.664 9.007 16 9.342 16 9.757 C 16 10.171 15.664 10.507 15.25 10.507 L 4.75 10.507 C 4.336 10.507 4 10.171 4 9.757 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
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
    d: "M 13 2 C 6.925 2 2 6.925 2 13 C 2 19.075 6.925 24 13 24 C 19.075 24 24 19.075 24 13 C 24 6.925 19.075 2 13 2 Z M 0 13 C 0 5.82 5.82 0 13 0 C 20.18 0 26 5.82 26 13 C 26 20.18 20.18 26 13 26 C 5.82 26 0 20.18 0 13 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.999 13 C 4.999 12.448 5.447 12 5.999 12 L 19.999 12 C 20.552 12 20.999 12.448 20.999 13 C 20.999 13.552 20.552 14 19.999 14 L 5.999 14 C 5.447 14 4.999 13.552 4.999 13 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: size=24
    "size=24": __body0,
    // figma: size=32
    "size=32": __body1
  };
  return (__impls[__vkey_IconMinusCircle(props)] ?? __body0)();
}

// figma node: 5193:15584 icon/plus-circle (2 variants)
const __venc_IconPlusCircle = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconPlusCircle = p => "size=" + __venc_IconPlusCircle(p.size);
function IconPlusCircle(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "24"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
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
    d: "M 10 1.5 C 5.306 1.5 1.5 5.306 1.5 10 C 1.5 14.694 5.306 18.5 10 18.5 C 14.694 18.5 18.5 14.694 18.5 10 C 18.5 5.306 14.694 1.5 10 1.5 Z M 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.25 14.25 L 9.25 11 L 5.75 11 C 5.336 11 5 10.664 5 10.25 C 5 9.836 5.336 9.5 5.75 9.5 L 9.25 9.5 L 9.25 5.75 C 9.25 5.336 9.586 5 10 5 C 10.414 5 10.75 5.336 10.75 5.75 L 10.75 9.5 L 14.25 9.5 C 14.664 9.5 15 9.836 15 10.25 C 15 10.664 14.664 11 14.25 11 L 10.75 11 L 10.75 14.25 C 10.75 14.664 10.414 15 10 15 C 9.586 15 9.25 14.664 9.25 14.25 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
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
    d: "M 6 13 C 6 12.448 6.448 12 7 12 L 12 12 L 12 7 C 12 6.448 12.448 6 13 6 C 13.552 6 14 6.448 14 7 L 14 12 L 19 12 C 19.552 12 20 12.448 20 13 C 20 13.552 19.552 14 19 14 L 14 14 L 14 19 C 14 19.552 13.552 20 13 20 C 12.448 20 12 19.552 12 19 L 12 14 L 7 14 C 6.448 14 6 13.552 6 13 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 13 C 0 5.82 5.82 0 13 0 C 20.18 0 26 5.82 26 13 C 26 20.18 20.18 26 13 26 C 5.82 26 0 20.18 0 13 Z M 13 2 C 6.925 2 2 6.925 2 13 C 2 19.075 6.925 24 13 24 C 19.075 24 24 19.075 24 13 C 24 6.925 19.075 2 13 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: size=24
    "size=24": __body0,
    // figma: size=32
    "size=32": __body1
  };
  return (__impls[__vkey_IconPlusCircle(props)] ?? __body0)();
}

// figma node: 5326:3380 Desktop / Forms / Stepper
function DesktopFormsStepper(_p = {}) {
  const props = {
    ..._p,
    label: _p.label ?? true,
    input: _p.input ?? true,
    support: _p.support ?? false
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 144,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      alignItems: "flex-start",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
    }
  }, props.label && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(DesktopInputsBlocksLabel, null)), /*#__PURE__*/React.createElement("div", {
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
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(DesktopButtonsIconButton3, {
    icon: /*#__PURE__*/React.createElement(IconMinusCircle, {
      size: "24"
    }),
    type: "primary",
    size: "s",
    state: "at rest"
  })), props.input && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(DesktopInputsBlocksSize, {
    size: "s"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(DesktopButtonsIconButton3, {
    icon: /*#__PURE__*/React.createElement(IconPlusCircle, {
      size: "24"
    }),
    type: "primary",
    size: "s",
    state: "at rest"
  }))), props.support && /*#__PURE__*/React.createElement(DesktopInputsBlocksSupportingText2, {
    style: {
      position: "relative",
      height: 32,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    state: "at rest"
  }));
}

// figma node: 5193:30744 iOS / Inputs / Stepper
function IOSInputsStepper(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 94,
      height: 32,
      borderRadius: 8,
      backgroundColor: "var(--patch-color-surface-primary)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 46.5,
      top: 7,
      width: 1,
      height: 18,
      borderRadius: 8,
      backgroundColor: "var(--patch-form-color-fill-secondary)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      top: 5,
      width: 18,
      height: 22,
      fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 17,
      textAlign: "center",
      lineHeight: "22px",
      color: "var(--patch-color-text-primary)"
    }
  }, props.text1 ?? "􀅽"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 61,
      top: 5,
      width: 18,
      height: 22,
      fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 17,
      textAlign: "center",
      lineHeight: "22px",
      color: "var(--patch-color-text-primary)"
    }
  }, props.text2 ?? "􀅼"));
}

// figma node: 5193:29344 Mobile / Forms / Stepper
function MobileFormsStepper(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 60,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
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
      width: "calc(var(--patch-object-x-small) * 1px)",
      borderRadius: 4,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 16,
      height: 16
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
      height: 1.5,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.75 C 0 0.336 0.336 0 0.75 0 L 9.25 0 C 9.664 0 10 0.336 10 0.75 C 10 1.164 9.664 1.5 9.25 1.5 L 0.75 1.5 C 0.336 1.5 0 1.164 0 0.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "calc(var(--patch-object-x-small) * 1px)",
      borderRadius: 4,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 10,
    viewBox: "0 0 10 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 10,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.75 0.75 L 5.75 4.25 L 9.25 4.25 C 9.664 4.25 10 4.586 10 5 C 10 5.414 9.664 5.75 9.25 5.75 L 5.75 5.75 L 5.75 9.25 C 5.75 9.664 5.414 10 5 10 C 4.586 10 4.25 9.664 4.25 9.25 L 4.25 5.75 L 0.75 5.75 C 0.336 5.75 0 5.414 0 5 C 0 4.586 0.336 4.25 0.75 4.25 L 4.25 4.25 L 4.25 0.75 C 4.25 0.336 4.586 0 5 0 C 5.414 0 5.75 0.336 5.75 0.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
}

// figma node: 3000:2149 Stepper
function Stepper(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1576,
      height: 1000,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      color: "var(--warm)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(TitleBlock, {
    style: {
      position: "absolute",
      left: 40,
      top: 40,
      width: 728
    },
    text1: "Stepper",
    text2: "An input mechanism that enables the user to incrementally change a value."
  }), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 40,
      top: 148,
      width: 472,
      height: 212
    },
    subheading: false,
    text1: "Usage",
    text3: "Use to change an input value by increments appropriate to the context. (Increments are configurable.)\nTypically part of a form or related to other inputs.\nNot to be confused with a Segmented Button, which does not have the incremental logic attached.\nDepending on the context and available space, a Slider (or a slider with up/down buttons) may be a suitable alternative."
  }), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 552,
      top: 148,
      width: 472,
      height: 272
    },
    subheading: false,
    text1: "Properties (desktop only)",
    text3: "Label: optional but recommended.\nInput: boolean; numerical entry field is visible by default but may be hidden to create something similar to the mobile component.\nSupport: optional helper text beneath the element, with discrete states.\nSize: two size options for the input, to fit with adjacent form elements or buttons of similar size. Note that the embedded + – buttons will not change size in unison.\nState: allows different states of user interaction to be represented.\nContent: the numerical value to appear in the input field."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1064,
      top: 148,
      width: 472,
      borderTop: "1px solid rgb(173,173,173)",
      borderRight: "1px solid rgb(173,173,173)",
      borderBottom: "1px solid rgb(173,173,173)",
      borderLeft: "1px solid rgb(173,173,173)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 0px 16px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Euclid Circular B\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "24px",
      color: "rgb(43,43,43)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Presentation"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--patch-color-gray-800)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "• ", "To avoid clutter and confusion, do not enable the lead or trail icons inside the input field.", "\n", "• ", "Theoretically, the + – buttons could be replaced with different icons (such as fast/slow or hi/lo) but this should be carefully considered.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40,
      top: 460,
      width: 472,
      borderTop: "1px solid rgb(173,173,173)",
      borderRight: "1px solid rgb(173,173,173)",
      borderBottom: "1px solid rgb(173,173,173)",
      borderLeft: "1px solid rgb(173,173,173)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 0px 16px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Euclid Circular B\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "24px",
      color: "rgb(43,43,43)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Behavior"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--patch-color-gray-800)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "• ", "Clicking the embedded buttons increments or decrements the value displayed in the text field. ", "\n", "• ", "Increments are typically small; the desktop component includes a numerical entry field to allow larger values to be entered. Mobile does not, so the current input value should be clearly visible (and ideally editable) in close proximity.")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 691,
      top: 792,
      width: 153,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "rgb(207,0,162)"
    }
  }, "Mobile (only appears on Canvas)"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 691,
      top: 920,
      width: 17,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "rgb(207,0,162)"
    }
  }, "iOS"), /*#__PURE__*/React.createElement(MobileFormsStepper, {
    style: {
      position: "absolute",
      left: 691,
      top: 752,
      width: 60
    }
  }), /*#__PURE__*/React.createElement(IOSInputsStepper, {
    style: {
      position: "absolute",
      left: 691,
      top: 872,
      width: 94,
      height: 32
    }
  }), /*#__PURE__*/React.createElement(DesktopFormsStepper, {
    style: {
      position: "absolute",
      left: 691,
      top: 580,
      width: 180,
      height: 76
    },
    support: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 204,
      top: 724,
      width: 144,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      alignItems: "flex-start",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0
    }
  }, "Zoom level (%)")), /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement(DesktopButtonsIconButton3, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    icon: /*#__PURE__*/React.createElement(IconMinusCircle, {
      size: "24"
    }),
    type: "primary",
    size: "s",
    state: "at rest"
  }), /*#__PURE__*/React.createElement(DesktopInputsBlocksSize, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    size: "s"
  }), /*#__PURE__*/React.createElement(DesktopButtonsIconButton3, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    icon: /*#__PURE__*/React.createElement(IconPlusCircle, {
      size: "24"
    }),
    type: "primary",
    size: "s",
    state: "at rest"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 204,
      top: 860,
      width: 144,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      alignItems: "flex-start",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0
    }
  }, "Copies")), /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement(DesktopButtonsIconButton3, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    icon: /*#__PURE__*/React.createElement(IconMinusCircle, {
      size: "24"
    }),
    type: "primary",
    size: "s",
    state: "at rest"
  }), /*#__PURE__*/React.createElement(DesktopInputsBlocksSize, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    size: "s"
  }), /*#__PURE__*/React.createElement(DesktopButtonsIconButton3, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    icon: /*#__PURE__*/React.createElement(IconPlusCircle, {
      size: "24"
    }),
    type: "primary",
    size: "s",
    state: "at rest"
  }))), /*#__PURE__*/React.createElement(StatusBlock, {
    style: {
      position: "absolute",
      left: 993,
      top: 40,
      width: 543
    },
    date: "2025-10-28",
    orientation: "default"
  }), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 552,
      top: 460,
      width: 472,
      height: 56
    },
    subheading: false,
    content: false,
    text1: "Anatomy"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 707,
      top: 532,
      width: 26,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Label"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 691,
      top: 672,
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
      left: 749,
      top: 548,
      width: 39,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Content"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 806,
      top: 564,
      width: 25,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Input"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 896,
      top: 640,
      width: 39,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Support"), /*#__PURE__*/React.createElement("svg", {
    width: 34,
    height: 1,
    viewBox: "0 -0.500 34 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,720,548)",
      transformOrigin: "0 0",
      width: 34,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 31.333 0 C 31.333 1.473 32.527 2.667 34 2.667 C 35.473 2.667 36.667 1.473 36.667 0 C 36.667 -1.473 35.473 -2.667 34 -2.667 C 32.527 -2.667 31.333 -1.473 31.333 0 Z M 0 0 L 0 0.5 L 34 0.5 L 34 0 L 34 -0.5 L 0 -0.5 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 49,
    height: 1,
    viewBox: "0 -0.500 49 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,768,564)",
      transformOrigin: "0 0",
      width: 49,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 46.333 0 C 46.333 1.473 47.527 2.667 49 2.667 C 50.473 2.667 51.667 1.473 51.667 0 C 51.667 -1.473 50.473 -2.667 49 -2.667 C 47.527 -2.667 46.333 -1.473 46.333 0 Z M 0 0 L 0 0.5 L 49 0.5 L 49 0 L 49 -0.5 L 0 -0.5 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 24,
    height: 1,
    viewBox: "0 -0.500 24 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,817,580)",
      transformOrigin: "0 0",
      width: 24,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 21.333 0 C 21.333 1.473 22.527 2.667 24 2.667 C 25.473 2.667 26.667 1.473 26.667 0 C 26.667 -1.473 25.473 -2.667 24 -2.667 C 22.527 -2.667 21.333 -1.473 21.333 0 Z M 0 0 L 0 0.5 L 24 0.5 L 24 0 L 24 -0.5 L 0 -0.5 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 78,
    height: 1,
    viewBox: "0 -0.500 78 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,-1,892,648)",
      transformOrigin: "0 0",
      width: 78,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 75.333 0 C 75.333 1.473 76.527 2.667 78 2.667 C 79.473 2.667 80.667 1.473 80.667 0 C 80.667 -1.473 79.473 -2.667 78 -2.667 C 76.527 -2.667 75.333 -1.473 75.333 0 Z M 0 0 L 0 0.5 L 78 0.5 L 78 0 L 78 -0.5 L 0 -0.5 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// Globals for scripts loaded after this file.
window.DesktopInputsBlocksContent = DesktopInputsBlocksContent;
window.DesktopInputsBlocksContent2 = DesktopInputsBlocksContent2;
window.DesktopInputsBlocksLabel = DesktopInputsBlocksLabel;
window.IconChevronDown5 = IconChevronDown5;
window.IconChevronUp = IconChevronUp;
window.DesktopInputsBlocksRockerElements = DesktopInputsBlocksRockerElements;
window.DesktopInputsBlocksRocker = DesktopInputsBlocksRocker;
window.DesktopInputsBlocksSupportingText2 = DesktopInputsBlocksSupportingText2;
window.DesktopInputsBlocksMetric = DesktopInputsBlocksMetric;
window.DesktopInputsBlocksUoM = DesktopInputsBlocksUoM;
window.DesktopInputsBlocksMetric2 = DesktopInputsBlocksMetric2;
window.DesktopInputsBlocksUoM2 = DesktopInputsBlocksUoM2;
window.FFormsDInputContent = FFormsDInputContent;
window.IconMachine = IconMachine;
window.IconPlaceholder9 = IconPlaceholder9;
window.IconRotate = IconRotate;
window.IconTextFormatHorizontal = IconTextFormatHorizontal;
window.StatusBadge = StatusBadge;
window.StatusBlock = StatusBlock;
window.TextBlock = TextBlock;
window.TitleBlock = TitleBlock;
window.Input = Input;
window.DesktopButtonsIconButton3 = DesktopButtonsIconButton3;
window.DesktopInputsBlocksState3 = DesktopInputsBlocksState3;
window.DesktopInputsBlocksSize = DesktopInputsBlocksSize;
window.IconMinusCircle = IconMinusCircle;
window.IconPlusCircle = IconPlusCircle;
window.DesktopFormsStepper = DesktopFormsStepper;
window.IOSInputsStepper = IOSInputsStepper;
window.MobileFormsStepper = MobileFormsStepper;
window.Stepper = Stepper;