// Components bundle — 23 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

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

// figma node: 5192:38330 Desktop / Buttons / Button (72 variants)
const __venc_DesktopButtonsButton = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_DesktopButtonsButton = p => "role=" + __venc_DesktopButtonsButton(p.role) + '|' + "type=" + __venc_DesktopButtonsButton(p.type) + '|' + "size=" + __venc_DesktopButtonsButton(p.size) + '|' + "state=" + __venc_DesktopButtonsButton(p.state);
function DesktopButtonsButton(_p = {}) {
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
      width: 132,
      minWidth: 132,
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
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      minWidth: 132,
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
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      minWidth: 132,
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
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      minWidth: 132,
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
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      minWidth: 132,
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
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      minWidth: 132,
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
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      minWidth: 132,
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
      backgroundColor: "rgba(18,18,18,0.2)",
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
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      minWidth: 132,
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
      backgroundColor: "rgba(18,18,18,0.2)",
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
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      minWidth: 132,
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
      backgroundColor: "rgba(18,18,18,0.2)",
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
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      minWidth: 132,
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
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      minWidth: 132,
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
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      minWidth: 132,
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
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      minWidth: 132,
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
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      minWidth: 132,
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
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      minWidth: 132,
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
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      minWidth: 132,
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
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      minWidth: 132,
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
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      minWidth: 132,
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
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      minWidth: 132,
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
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      minWidth: 132,
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
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      minWidth: 132,
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
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      minWidth: 132,
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
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      minWidth: 132,
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
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      minWidth: 132,
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
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      minWidth: 132,
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
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      minWidth: 132,
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
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      minWidth: 132,
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
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      minWidth: 132,
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
  const __body28 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      minWidth: 132,
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
  const __body29 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      minWidth: 132,
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
  const __body30 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      minWidth: 132,
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
  const __body31 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      minWidth: 132,
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
      backgroundColor: "rgba(18,18,18,0.2)",
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
  const __body32 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      minWidth: 132,
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
  const __body33 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      minWidth: 132,
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
  const __body34 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      minWidth: 132,
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
      backgroundColor: "rgba(18,18,18,0.2)",
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
  const __body35 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      minWidth: 132,
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
  const __body36 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      minWidth: 132,
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
  const __body37 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      minWidth: 132,
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
      backgroundColor: "rgba(18,18,18,0.2)",
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
  const __body38 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      minWidth: 132,
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
  const __body39 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      minWidth: 132,
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
  const __body40 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      minWidth: 132,
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
  const __body41 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      minWidth: 132,
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
  const __body42 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      minWidth: 132,
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
  const __body43 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      minWidth: 132,
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
  const __body44 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      minWidth: 132,
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
  const __body45 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      minWidth: 132,
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
  const __body46 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      minWidth: 132,
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
  const __body47 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      minWidth: 132,
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
  const __body48 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      minWidth: 132,
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
  const __body49 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      minWidth: 132,
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
  const __body50 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      minWidth: 132,
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
    // figma: Role=Default, Type=Primary, Size=S, State=at rest
    "role=default|type=primary|size=s|state=at rest": __body0,
    // figma: Role=Default, Type=Primary, Size=S, State=is disabled
    "role=default|type=primary|size=s|state=is disabled": __body1,
    // figma: Role=Default, Type=Primary, Size=M, State=is disabled
    "role=default|type=primary|size=m|state=is disabled": __body2,
    // figma: Role=Default, Type=Primary, Size=L, State=is disabled
    "role=default|type=primary|size=l|state=is disabled": __body3,
    // figma: Role=Default, Type=Primary, Size=M, State=at rest
    "role=default|type=primary|size=m|state=at rest": __body4,
    // figma: Role=Default, Type=Primary, Size=L, State=at rest
    "role=default|type=primary|size=l|state=at rest": __body5,
    // figma: Role=Default, Type=Primary, Size=S, State=on hover
    "role=default|type=primary|size=s|state=on hover": __body6,
    // figma: Role=Default, Type=Primary, Size=M, State=on hover
    "role=default|type=primary|size=m|state=on hover": __body7,
    // figma: Role=Default, Type=Primary, Size=L, State=on hover
    "role=default|type=primary|size=l|state=on hover": __body8,
    // figma: Role=Default, Type=Primary, Size=S, State=is active
    "role=default|type=primary|size=s|state=is active": __body9,
    // figma: Role=Default, Type=Primary, Size=M, State=is active
    "role=default|type=primary|size=m|state=is active": __body10,
    // figma: Role=Default, Type=Primary, Size=L, State=is active
    "role=default|type=primary|size=l|state=is active": __body11,
    // figma: Role=Default, Type=Secondary, Size=S, State=at rest
    "role=default|type=secondary|size=s|state=at rest": __body12,
    // figma: Role=Default, Type=Secondary, Size=S, State=is disabled
    "role=default|type=secondary|size=s|state=is disabled": __body13,
    // figma: Role=Default, Type=Secondary, Size=M, State=is disabled
    "role=default|type=secondary|size=m|state=is disabled": __body14,
    // figma: Role=Default, Type=Secondary, Size=L, State=is disabled
    "role=default|type=secondary|size=l|state=is disabled": __body15,
    // figma: Role=Default, Type=Tertiary, Size=S, State=is disabled
    "role=default|type=tertiary|size=s|state=is disabled": __body16,
    // figma: Role=Default, Type=Tertiary, Size=M, State=is disabled
    "role=default|type=tertiary|size=m|state=is disabled": __body17,
    // figma: Role=Default, Type=Tertiary, Size=L, State=is disabled
    "role=default|type=tertiary|size=l|state=is disabled": __body18,
    // figma: Role=Default, Type=Secondary, Size=M, State=at rest
    "role=default|type=secondary|size=m|state=at rest": __body19,
    // figma: Role=Default, Type=Secondary, Size=L, State=at rest
    "role=default|type=secondary|size=l|state=at rest": __body20,
    // figma: Role=Default, Type=Secondary, Size=S, State=on hover
    "role=default|type=secondary|size=s|state=on hover": __body21,
    // figma: Role=Default, Type=Secondary, Size=M, State=on hover
    "role=default|type=secondary|size=m|state=on hover": __body22,
    // figma: Role=Default, Type=Secondary, Size=L, State=on hover
    "role=default|type=secondary|size=l|state=on hover": __body23,
    // figma: Role=Default, Type=Secondary, Size=S, State=is active
    "role=default|type=secondary|size=s|state=is active": __body24,
    // figma: Role=Default, Type=Secondary, Size=M, State=is active
    "role=default|type=secondary|size=m|state=is active": __body25,
    // figma: Role=Default, Type=Secondary, Size=L, State=is active
    "role=default|type=secondary|size=l|state=is active": __body26,
    // figma: Role=Default, Type=Tertiary, Size=S, State=at rest
    "role=default|type=tertiary|size=s|state=at rest": __body27,
    // figma: Role=Default, Type=Tertiary, Size=M, State=at rest
    "role=default|type=tertiary|size=m|state=at rest": __body28,
    // figma: Role=Default, Type=Tertiary, Size=L, State=at rest
    "role=default|type=tertiary|size=l|state=at rest": __body29,
    // figma: Role=Default, Type=Tertiary, Size=S, State=on hover
    "role=default|type=tertiary|size=s|state=on hover": __body21,
    // figma: Role=Default, Type=Tertiary, Size=M, State=on hover
    "role=default|type=tertiary|size=m|state=on hover": __body22,
    // figma: Role=Default, Type=Tertiary, Size=L, State=on hover
    "role=default|type=tertiary|size=l|state=on hover": __body23,
    // figma: Role=Default, Type=Tertiary, Size=S, State=is active
    "role=default|type=tertiary|size=s|state=is active": __body24,
    // figma: Role=Default, Type=Tertiary, Size=M, State=is active
    "role=default|type=tertiary|size=m|state=is active": __body25,
    // figma: Role=Default, Type=Tertiary, Size=L, State=is active
    "role=default|type=tertiary|size=l|state=is active": __body26,
    // figma: Role=Error, Type=Primary, Size=S, State=at rest
    "role=error|type=primary|size=s|state=at rest": __body30,
    // figma: Role=Error, Type=Primary, Size=S, State=is disabled
    "role=error|type=primary|size=s|state=is disabled": __body1,
    // figma: Role=Error, Type=Primary, Size=M, State=is disabled
    "role=error|type=primary|size=m|state=is disabled": __body2,
    // figma: Role=Error, Type=Primary, Size=L, State=is disabled
    "role=error|type=primary|size=l|state=is disabled": __body3,
    // figma: Role=Error, Type=Primary, Size=S, State=on hover
    "role=error|type=primary|size=s|state=on hover": __body31,
    // figma: Role=Error, Type=Primary, Size=S, State=is active
    "role=error|type=primary|size=s|state=is active": __body32,
    // figma: Role=Error, Type=Primary, Size=M, State=at rest
    "role=error|type=primary|size=m|state=at rest": __body33,
    // figma: Role=Error, Type=Primary, Size=M, State=on hover
    "role=error|type=primary|size=m|state=on hover": __body34,
    // figma: Role=Error, Type=Primary, Size=M, State=is active
    "role=error|type=primary|size=m|state=is active": __body35,
    // figma: Role=Error, Type=Primary, Size=L, State=at rest
    "role=error|type=primary|size=l|state=at rest": __body36,
    // figma: Role=Error, Type=Primary, Size=L, State=on hover
    "role=error|type=primary|size=l|state=on hover": __body37,
    // figma: Role=Error, Type=Primary, Size=L, State=is active
    "role=error|type=primary|size=l|state=is active": __body38,
    // figma: Role=Error, Type=Secondary, Size=S, State=at rest
    "role=error|type=secondary|size=s|state=at rest": __body39,
    // figma: Role=Error, Type=Secondary, Size=S, State=is disabled
    "role=error|type=secondary|size=s|state=is disabled": __body13,
    // figma: Role=Error, Type=Secondary, Size=M, State=is disabled
    "role=error|type=secondary|size=m|state=is disabled": __body14,
    // figma: Role=Error, Type=Secondary, Size=L, State=is disabled
    "role=error|type=secondary|size=l|state=is disabled": __body15,
    // figma: Role=Error, Type=Tertiary, Size=S, State=is disabled
    "role=error|type=tertiary|size=s|state=is disabled": __body16,
    // figma: Role=Error, Type=Tertiary, Size=M, State=is disabled
    "role=error|type=tertiary|size=m|state=is disabled": __body17,
    // figma: Role=Error, Type=Tertiary, Size=L, State=is disabled
    "role=error|type=tertiary|size=l|state=is disabled": __body18,
    // figma: Role=Error, Type=Secondary, Size=S, State=on hover
    "role=error|type=secondary|size=s|state=on hover": __body40,
    // figma: Role=Error, Type=Secondary, Size=S, State=is active
    "role=error|type=secondary|size=s|state=is active": __body41,
    // figma: Role=Error, Type=Tertiary, Size=S, State=at rest
    "role=error|type=tertiary|size=s|state=at rest": __body42,
    // figma: Role=Error, Type=Tertiary, Size=S, State=on hover
    "role=error|type=tertiary|size=s|state=on hover": __body40,
    // figma: Role=Error, Type=Tertiary, Size=S, State=is active
    "role=error|type=tertiary|size=s|state=is active": __body41,
    // figma: Role=Error, Type=Tertiary, Size=M, State=at rest
    "role=error|type=tertiary|size=m|state=at rest": __body43,
    // figma: Role=Error, Type=Tertiary, Size=M, State=on hover
    "role=error|type=tertiary|size=m|state=on hover": __body44,
    // figma: Role=Error, Type=Tertiary, Size=M, State=is active
    "role=error|type=tertiary|size=m|state=is active": __body45,
    // figma: Role=Error, Type=Tertiary, Size=L, State=at rest
    "role=error|type=tertiary|size=l|state=at rest": __body46,
    // figma: Role=Error, Type=Tertiary, Size=L, State=on hover
    "role=error|type=tertiary|size=l|state=on hover": __body47,
    // figma: Role=Error, Type=Tertiary, Size=L, State=is active
    "role=error|type=tertiary|size=l|state=is active": __body48,
    // figma: Role=Error, Type=Secondary, Size=M, State=at rest
    "role=error|type=secondary|size=m|state=at rest": __body49,
    // figma: Role=Error, Type=Secondary, Size=M, State=on hover
    "role=error|type=secondary|size=m|state=on hover": __body44,
    // figma: Role=Error, Type=Secondary, Size=M, State=is active
    "role=error|type=secondary|size=m|state=is active": __body45,
    // figma: Role=Error, Type=Secondary, Size=L, State=at rest
    "role=error|type=secondary|size=l|state=at rest": __body50,
    // figma: Role=Error, Type=Secondary, Size=L, State=on hover
    "role=error|type=secondary|size=l|state=on hover": __body47,
    // figma: Role=Error, Type=Secondary, Size=L, State=is active
    "role=error|type=secondary|size=l|state=is active": __body48
  };
  return (__impls[__vkey_DesktopButtonsButton(props)] ?? __body0)();
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

// figma node: 1149:2577 Button
function Button2(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1576,
      height: 1000,
      overflow: "hidden",
      backgroundColor: "rgb(245,245,245)",
      position: "relative",
      color: "var(--warm)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(DesktopButtonsButton, {
    style: {
      position: "absolute",
      left: 735,
      top: 540,
      width: 132
    },
    role: "default",
    type: "primary",
    size: "s",
    state: "at rest"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 239,
      top: 668,
      width: 132,
      minWidth: 132,
      overflow: "hidden",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.986,
    height: 19,
    viewBox: "0 0 17.986 19",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.014,
      top: 2,
      width: 17.986,
      height: 19,
      color: "rgb(186,48,3)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.986 0 C 10.047 0 11.064 0.421 11.814 1.172 C 12.564 1.922 12.986 2.939 12.986 4 L 15.422 4 C 16.336 4 17.096 4.703 17.166 5.614 L 17.977 16.037 C 18.102 17.635 16.839 19 15.236 19 L 2.75 19 C 1.147 19 -0.116 17.635 0.008 16.037 L 0.82 5.614 C 0.89 4.703 1.65 4 2.564 4 L 4.986 4 C 4.986 2.939 5.407 1.922 6.157 1.172 C 6.908 0.421 7.925 0 8.986 0 Z M 11.486 5.5 L 6.486 5.5 L 6.486 7.25 C 6.486 7.664 6.15 8 5.736 8 C 5.322 8 4.986 7.664 4.986 7.25 L 4.986 5.5 L 2.564 5.5 C 2.434 5.5 2.325 5.6 2.315 5.731 L 1.504 16.153 C 1.447 16.879 2.022 17.5 2.75 17.5 L 15.236 17.5 C 15.964 17.5 16.539 16.879 16.482 16.153 L 15.671 5.731 C 15.661 5.6 15.552 5.5 15.422 5.5 L 12.986 5.5 L 12.986 7.25 C 12.986 7.664 12.65 8 12.236 8 C 11.822 8 11.486 7.664 11.486 7.25 L 11.486 5.5 Z M 11.486 4 C 11.486 3.337 11.222 2.701 10.754 2.232 C 10.285 1.763 9.649 1.5 8.986 1.5 C 8.323 1.5 7.687 1.763 7.218 2.232 C 6.749 2.701 6.486 3.337 6.486 4 L 11.486 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
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
  }, "Buy Materials")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482,
      top: 668,
      width: 132,
      minWidth: 132,
      overflow: "hidden",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 18,
    viewBox: "0 0 20 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 3,
      width: 20,
      height: 18,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.75 7 C 8.164 7 8.5 7.336 8.5 7.75 L 8.5 13.25 C 8.5 13.664 8.164 14 7.75 14 C 7.336 14 7 13.664 7 13.25 L 7 7.75 C 7 7.336 7.336 7 7.75 7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13 7.75 L 13 13.25 C 13 13.664 12.664 14 12.25 14 C 11.836 14 11.5 13.664 11.5 13.25 L 11.5 7.75 C 11.5 7.336 11.836 7 12.25 7 C 12.664 7 13 7.336 13 7.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.75 0 L 13.25 0 C 13.664 0 14 0.336 14 0.75 L 14 3 L 19.25 3 C 19.664 3 20 3.336 20 3.75 C 20 4.164 19.664 4.5 19.25 4.5 L 17.714 4.5 L 16.887 15.457 C 16.779 16.891 15.584 18 14.145 18 L 5.855 18 C 4.416 18 3.221 16.891 3.112 15.457 L 2.286 4.5 L 0.75 4.5 C 0.336 4.5 0 4.164 0 3.75 C 0 3.336 0.336 3 0.75 3 L 6 3 L 6 0.75 C 6 0.336 6.336 0 6.75 0 Z M 12.5 3 L 12.5 1.5 L 7.5 1.5 L 7.5 3 L 12.5 3 Z M 3.809 4.75 L 4.608 15.344 C 4.657 15.996 5.201 16.5 5.855 16.5 L 14.145 16.5 C 14.799 16.5 15.342 15.996 15.392 15.344 L 16.191 4.75 L 3.809 4.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
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
  }, "Delete")))), /*#__PURE__*/React.createElement(DesktopButtonsButton, {
    style: {
      position: "absolute",
      left: 239,
      top: 732,
      width: 132
    },
    value: "Shop Now",
    lead: false,
    role: "default",
    type: "secondary",
    size: "m",
    state: "at rest"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 464,
      top: 732,
      minWidth: 132,
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
      alignItems: "center"
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.992,
    height: 15.992,
    viewBox: "0 0 15.992 15.992",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.008,
      top: 4,
      width: 15.992,
      height: 15.992,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 2.25 C 0 1.007 1.007 0 2.25 0 L 5.25 0 C 5.664 0 6 0.336 6 0.75 C 6 1.164 5.664 1.5 5.25 1.5 L 2.25 1.5 C 1.836 1.5 1.5 1.836 1.5 2.25 L 1.5 5.25 C 1.5 5.664 1.164 6 0.75 6 C 0.336 6 0 5.664 0 5.25 L 0 2.25 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 13.742 C 0 14.985 1.007 15.992 2.25 15.992 L 5.25 15.992 C 5.664 15.992 6 15.656 6 15.242 C 6 14.828 5.664 14.492 5.25 14.492 L 2.25 14.492 C 1.836 14.492 1.5 14.156 1.5 13.742 L 1.5 10.742 C 1.5 10.328 1.164 9.992 0.75 9.992 C 0.336 9.992 0 10.328 0 10.742 L 0 13.742 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15.992 2.258 L 15.992 5.258 C 15.992 5.672 15.656 6.008 15.242 6.008 C 14.828 6.008 14.492 5.672 14.492 5.258 L 14.492 2.258 C 14.492 1.844 14.156 1.508 13.742 1.508 L 10.742 1.508 C 10.328 1.508 9.992 1.172 9.992 0.758 C 9.992 0.344 10.328 0.008 10.742 0.008 L 13.742 0.008 C 14.985 0.008 15.992 1.015 15.992 2.258 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15.992 13.742 C 15.992 14.985 14.985 15.992 13.742 15.992 L 10.742 15.992 C 10.328 15.992 9.992 15.656 9.992 15.242 C 9.992 14.828 10.328 14.492 10.742 14.492 L 13.742 14.492 C 14.156 14.492 14.492 14.156 14.492 13.742 L 14.492 10.742 C 14.492 10.328 14.828 9.992 15.242 9.992 C 15.656 9.992 15.992 10.328 15.992 10.742 L 15.992 13.742 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8 6.5 C 7.172 6.5 6.5 7.172 6.5 8 C 6.5 8.828 7.172 9.5 8 9.5 C 8.828 9.5 9.5 8.828 9.5 8 C 9.5 7.172 8.828 6.5 8 6.5 Z M 5 8 C 5 6.343 6.343 5 8 5 C 9.657 5 11 6.343 11 8 C 11 9.657 9.657 11 8 11 C 6.343 11 5 9.657 5 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
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
  }, "Stop Preview")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 210,
      top: 804,
      minWidth: 132,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-accent-primary)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18,
      color: "var(--patch-color-text-on-accent-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.75 0.75 L 9.75 8.25 L 17.25 8.25 C 17.664 8.25 18 8.586 18 9 C 18 9.414 17.664 9.75 17.25 9.75 L 9.75 9.75 L 9.75 17.25 C 9.75 17.664 9.414 18 9 18 C 8.586 18 8.25 17.664 8.25 17.25 L 8.25 9.75 L 0.75 9.75 C 0.336 9.75 0 9.414 0 9 C 0 8.586 0.336 8.25 0.75 8.25 L 8.25 8.25 L 8.25 0.75 C 8.25 0.336 8.586 0 9 0 C 9.414 0 9.75 0.336 9.75 0.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
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
  }, "New Project")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 474,
      top: 804,
      minWidth: 132,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-error)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
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
      height: 20,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9 11 L 9 5 C 9 4.448 9.448 4 10 4 C 10.552 4 11 4.448 11 5 L 11 11 C 11 11.552 10.552 12 10 12 C 9.448 12 9 11.552 9 11 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10 14 C 10.552 14 11 14.448 11 15 C 11 15.552 10.552 16 10 16 C 9.448 16 9 15.552 9 15 C 9 14.448 9.448 14 10 14 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10 20 C 4.477 20 0 15.523 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 Z M 10 18.5 C 14.694 18.5 18.5 14.694 18.5 10 C 18.5 5.306 14.694 1.5 10 1.5 C 5.306 1.5 1.5 5.306 1.5 10 C 1.5 14.694 5.306 18.5 10 18.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
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
  }, "Cancel Job")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 104,
      top: 824,
      width: 64,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "right",
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Type: Primary"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 680,
      top: 676,
      width: 32,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Size: S"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 680,
      top: 744,
      width: 34,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Size: M"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 680,
      top: 824,
      width: 31,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Size: L"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 89,
      top: 744,
      width: 79,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "right",
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Type: Secondary"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 105,
      top: 676,
      width: 63,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "right",
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Type: Tertiary"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 275,
      top: 892,
      width: 60,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Role: Default"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 524,
      top: 892,
      width: 49,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Role: Error"), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 1064,
      top: 608,
      width: 472,
      height: 192
    },
    subheading: false,
    text1: "Copy",
    text3: "In most cases, buttons describe actions – use verbs.\nChoose words carefully: avoid vague language and actions that could have multiple meanings within the context.\nTry to limit the button copy to one word; only use more than one word if it’s absolutely necessary for clarity.\nUse Title Case."
  }), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 40,
      top: 196,
      width: 472,
      height: 112
    },
    subheading: false,
    text1: "Usage",
    text3: "For prominent calls-to-action – emphasis can be adjusted via the Type property."
  }), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 1064,
      top: 196,
      width: 472,
      height: 372
    },
    subheading: false,
    text1: "Presentation",
    text3: "To maintain integrity and make the right impact, use of the Error role (intended for negative or destructive situations rather than literal errors) should be the exception.\nIf using several buttons in close proximity, keep in mind that a tertiary button has no background by default (and looks link-like) but reacts like a button on hover and click.\nIdeally there’s only one primary CTA visible at any one time.\nHierarchy should be clear between primary and secondary actions, especially if multiple secondary actions are available. Primary action should ideally be adjacent to a tertiary action to make the distinction clear. (Pair a primary and tertiary button for clear actions; don’t pair a button and a link button in the same way.)\nMinimum button width on desktop is 132 px.\nMaximum button width on desktop is 320px, but can be full width on mobile."
  }), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 40,
      top: 348,
      width: 472,
      height: 92
    },
    subheading: false,
    text1: "Behavior",
    text3: "Should not spawn a popover or menu-like component."
  }), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 552,
      top: 196,
      width: 472,
      height: 212
    },
    sectionHeading: true,
    subheading: false,
    text1: "Properties",
    text2: "Component",
    text3: "Role: contextually appropriate appearance. See Presentation 👉\nType: levels of visual prominence.\nSize: available height options, corresponding to similar sizes in other components.\nState: allows different states of user interaction to be represented.\nLead: an optional icon preceding the button text.\nValue: string representing the available action. See Copy 👉"
  }), /*#__PURE__*/React.createElement(StatusBlock, {
    style: {
      position: "absolute",
      left: 993,
      top: 40,
      width: 543
    },
    date: "2025-08-05",
    orientation: "default"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 783,
      top: 504,
      width: 26,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Value"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 680,
      top: 548,
      width: 23,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Lead"), /*#__PURE__*/React.createElement("svg", {
    width: 32,
    height: 1,
    viewBox: "0 -0.500 32 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,796,520)",
      transformOrigin: "0 0",
      width: 32,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.333 0 C 29.333 1.473 30.527 2.667 32 2.667 C 33.473 2.667 34.667 1.473 34.667 0 C 34.667 -1.473 33.473 -2.667 32 -2.667 C 30.527 -2.667 29.333 -1.473 29.333 0 Z M 0 0.5 L 32 0.5 L 32 -0.5 L 0 -0.5 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 44,
    height: 1,
    viewBox: "0 -0.500 44 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 707,
      top: 556,
      width: 44,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 41.333 0 C 41.333 1.473 42.527 2.667 44 2.667 C 45.473 2.667 46.667 1.473 46.667 0 C 46.667 -1.473 45.473 -2.667 44 -2.667 C 42.527 -2.667 41.333 -1.473 41.333 0 Z M 0 0.5 L 44 0.5 L 44 -0.5 L 0 -0.5 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 552,
      top: 448,
      width: 472,
      height: 56
    },
    subheading: false,
    content: false,
    text1: "Anatomy"
  }), /*#__PURE__*/React.createElement(TitleBlock, {
    style: {
      position: "absolute",
      left: 40,
      top: 40,
      width: 728,
      height: 116
    },
    text1: "Button",
    text2: "Buttons provide a means for the user to initiate an action, to which the app responds. Though Patchwork styling can be applied to either tag type, note that <button> is for an action while <a> is for navigation."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1064,
      top: 840,
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
  }, "The Figma button component displays a leading icon by default, although in all likelihood, this will be more of an exception than a rule.")));
}

// figma node: 5193:32352 Desktop / Buttons / FAB (32 variants)
const __venc_DesktopButtonsFAB = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_DesktopButtonsFAB = p => "type=" + __venc_DesktopButtonsFAB(p.type) + '|' + "size=" + __venc_DesktopButtonsFAB(p.size) + '|' + "state=" + __venc_DesktopButtonsFAB(p.state);
function DesktopButtonsFAB(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "primary",
    size: _p.size ?? "xs",
    state: _p.state ?? "at rest"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-large) * 1px)",
      height: "calc(var(--patch-object-large) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-surface-primary-variant)",
      boxShadow: "0px 1px 3px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
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
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-12) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-12) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "32"
  }))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-large) * 1px)",
      height: "calc(var(--patch-object-large) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-surface-primary-highest)",
      boxShadow: "0px 1px 3px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
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
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-12) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-12) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "32"
  }))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-large) * 1px)",
      height: "calc(var(--patch-object-large) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-surface-primary-highest)",
      boxShadow: "0px 1px 3px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
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
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-12) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-12) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(255,255,255)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "32"
  }))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-large) * 1px)",
      height: "calc(var(--patch-object-large) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-surface-primary-dull)",
      boxShadow: "0px 1px 3px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
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
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-12) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-12) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(255,255,255)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "32"
  }))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-medium) * 1px)",
      height: "calc(var(--patch-object-medium) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-surface-primary-variant)",
      boxShadow: "0px 1px 3px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
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
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
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
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-medium) * 1px)",
      height: "calc(var(--patch-object-medium) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-surface-primary-highest)",
      boxShadow: "0px 1px 3px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
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
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
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
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-medium) * 1px)",
      height: "calc(var(--patch-object-medium) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-surface-primary-highest)",
      boxShadow: "0px 1px 3px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
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
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
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
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-medium) * 1px)",
      height: "calc(var(--patch-object-medium) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-surface-primary-dull)",
      boxShadow: "0px 1px 3px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
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
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
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
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-small) * 1px)",
      height: "calc(var(--patch-object-small) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-surface-primary-variant)",
      boxShadow: "0px 1px 3px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
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
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
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
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  }))));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-small) * 1px)",
      height: "calc(var(--patch-object-small) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-surface-primary-highest)",
      boxShadow: "0px 1px 3px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
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
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
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
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  }))));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-small) * 1px)",
      height: "calc(var(--patch-object-small) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-surface-primary-highest)",
      boxShadow: "0px 1px 3px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
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
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
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
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(255,255,255)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  }))));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-small) * 1px)",
      height: "calc(var(--patch-object-small) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-surface-primary-dull)",
      boxShadow: "0px 1px 3px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
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
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
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
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(255,255,255)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  }))));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-x-small) * 1px)",
      height: "calc(var(--patch-object-x-small) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-surface-primary-variant)",
      boxShadow: "0px 1px 3px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
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
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
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
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--patch-color-text-primary)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  }))));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-x-small) * 1px)",
      height: "calc(var(--patch-object-x-small) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-surface-primary-highest)",
      boxShadow: "0px 1px 3px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
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
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
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
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--patch-color-text-primary)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  }))));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-x-small) * 1px)",
      height: "calc(var(--patch-object-x-small) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-surface-primary-highest)",
      boxShadow: "0px 1px 3px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
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
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
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
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--patch-color-text-accent-primary)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  }))));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-x-small) * 1px)",
      height: "calc(var(--patch-object-x-small) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-surface-primary-dull)",
      boxShadow: "0px 1px 3px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
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
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
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
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--patch-color-text-disabled)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  }))));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-large) * 1px)",
      height: "calc(var(--patch-object-large) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-accent-primary)",
      boxShadow: "0px 1px 3px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
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
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-12) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-12) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--patch-color-text-on-accent-primary)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "32"
  }))));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-large) * 1px)",
      height: "calc(var(--patch-object-large) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-accent-primary)",
      boxShadow: "0px 1px 3px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      backgroundColor: "rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-12) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-12) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--patch-color-text-on-accent-primary)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "32"
  }))));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-large) * 1px)",
      height: "calc(var(--patch-object-large) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-accent-primary)",
      boxShadow: "0px 1px 3px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
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
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-12) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-12) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--patch-color-text-on-accent-primary)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "32"
  }))));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-medium) * 1px)",
      height: "calc(var(--patch-object-medium) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-accent-primary)",
      boxShadow: "0px 1px 3px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
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
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--patch-color-text-on-accent-primary)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  }))));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-medium) * 1px)",
      height: "calc(var(--patch-object-medium) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-accent-primary)",
      boxShadow: "0px 1px 3px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      backgroundColor: "rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--patch-color-text-on-accent-primary)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  }))));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-medium) * 1px)",
      height: "calc(var(--patch-object-medium) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-accent-primary)",
      boxShadow: "0px 1px 3px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
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
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--patch-color-text-on-accent-primary)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  }))));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-small) * 1px)",
      height: "calc(var(--patch-object-small) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-accent-primary)",
      boxShadow: "0px 1px 3px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
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
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
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
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--patch-color-text-on-accent-primary)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  }))));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-small) * 1px)",
      height: "calc(var(--patch-object-small) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-accent-primary)",
      boxShadow: "0px 1px 3px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      backgroundColor: "rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
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
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--patch-color-text-on-accent-primary)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  }))));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-small) * 1px)",
      height: "calc(var(--patch-object-small) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-accent-primary)",
      boxShadow: "0px 1px 3px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
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
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
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
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--patch-color-text-on-accent-primary)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  }))));
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-x-small) * 1px)",
      height: "calc(var(--patch-object-x-small) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-accent-primary)",
      boxShadow: "0px 1px 3px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
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
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
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
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--patch-color-text-on-accent-primary)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  }))));
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-x-small) * 1px)",
      height: "calc(var(--patch-object-x-small) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-accent-primary)",
      boxShadow: "0px 1px 3px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      backgroundColor: "rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
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
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--patch-color-text-on-accent-primary)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  }))));
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--patch-object-x-small) * 1px)",
      height: "calc(var(--patch-object-x-small) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-accent-primary)",
      boxShadow: "0px 1px 3px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
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
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
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
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--patch-color-text-on-accent-primary)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  }))));
  const __impls = {
    // figma: Type=Secondary, Size=L, State=at rest
    "type=secondary|size=l|state=at rest": __body0,
    // figma: Type=Secondary, Size=L, State=on hover
    "type=secondary|size=l|state=on hover": __body1,
    // figma: Type=Secondary, Size=L, State=is active
    "type=secondary|size=l|state=is active": __body2,
    // figma: Type=Secondary, Size=L, State=is disabled
    "type=secondary|size=l|state=is disabled": __body3,
    // figma: Type=Secondary, Size=M, State=at rest
    "type=secondary|size=m|state=at rest": __body4,
    // figma: Type=Secondary, Size=M, State=on hover
    "type=secondary|size=m|state=on hover": __body5,
    // figma: Type=Secondary, Size=M, State=is active
    "type=secondary|size=m|state=is active": __body6,
    // figma: Type=Secondary, Size=M, State=is disabled
    "type=secondary|size=m|state=is disabled": __body7,
    // figma: Type=Secondary, Size=S, State=at rest
    "type=secondary|size=s|state=at rest": __body8,
    // figma: Type=Secondary, Size=S, State=on hover
    "type=secondary|size=s|state=on hover": __body9,
    // figma: Type=Secondary, Size=S, State=is active
    "type=secondary|size=s|state=is active": __body10,
    // figma: Type=Secondary, Size=S, State=is disabled
    "type=secondary|size=s|state=is disabled": __body11,
    // figma: Type=Secondary, Size=XS, State=at rest
    "type=secondary|size=xs|state=at rest": __body12,
    // figma: Type=Secondary, Size=XS, State=on hover
    "type=secondary|size=xs|state=on hover": __body13,
    // figma: Type=Secondary, Size=XS, State=is active
    "type=secondary|size=xs|state=is active": __body14,
    // figma: Type=Secondary, Size=XS, State=is disabled
    "type=secondary|size=xs|state=is disabled": __body15,
    // figma: Type=Primary, Size=L, State=at rest
    "type=primary|size=l|state=at rest": __body16,
    // figma: Type=Primary, Size=L, State=on hover
    "type=primary|size=l|state=on hover": __body17,
    // figma: Type=Primary, Size=L, State=is active
    "type=primary|size=l|state=is active": __body18,
    // figma: Type=Primary, Size=L, State=is disabled
    "type=primary|size=l|state=is disabled": __body3,
    // figma: Type=Primary, Size=M, State=at rest
    "type=primary|size=m|state=at rest": __body19,
    // figma: Type=Primary, Size=M, State=on hover
    "type=primary|size=m|state=on hover": __body20,
    // figma: Type=Primary, Size=M, State=is active
    "type=primary|size=m|state=is active": __body21,
    // figma: Type=Primary, Size=M, State=is disabled
    "type=primary|size=m|state=is disabled": __body7,
    // figma: Type=Primary, Size=S, State=at rest
    "type=primary|size=s|state=at rest": __body22,
    // figma: Type=Primary, Size=S, State=on hover
    "type=primary|size=s|state=on hover": __body23,
    // figma: Type=Primary, Size=S, State=is active
    "type=primary|size=s|state=is active": __body24,
    // figma: Type=Primary, Size=S, State=is disabled
    "type=primary|size=s|state=is disabled": __body11,
    // figma: Type=Primary, Size=XS, State=at rest
    "type=primary|size=xs|state=at rest": __body25,
    // figma: Type=Primary, Size=XS, State=is disabled
    "type=primary|size=xs|state=is disabled": __body15,
    // figma: Type=Primary, Size=XS, State=on hover
    "type=primary|size=xs|state=on hover": __body26,
    // figma: Type=Primary, Size=XS, State=is active
    "type=primary|size=xs|state=is active": __body27
  };
  return (__impls[__vkey_DesktopButtonsFAB(props)] ?? __body25)();
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

// figma node: 5193:16380 icon/download (2 variants)
const __venc_IconDownload = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconDownload = p => "size=" + __venc_IconDownload(p.size);
function IconDownload(_p = {}) {
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
    width: 14,
    height: 16,
    viewBox: "0 0 14 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 4,
      width: 14,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 0 C 7.414 0 7.75 0.336 7.75 0.75 L 7.75 9.365 L 10.705 6.239 C 10.99 5.938 11.464 5.924 11.765 6.209 C 12.066 6.493 12.08 6.968 11.795 7.269 L 7.545 11.765 C 7.403 11.915 7.206 12 7 12 C 6.793 12 6.596 11.915 6.455 11.765 L 2.208 7.265 C 1.924 6.963 1.938 6.489 2.239 6.205 C 2.54 5.92 3.015 5.934 3.299 6.235 L 6.25 9.362 L 6.25 0.75 C 6.25 0.336 6.586 0 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.75 13 C 1.164 13 1.5 13.336 1.5 13.75 L 1.5 14.5 L 12.5 14.5 L 12.5 13.75 C 12.5 13.336 12.836 13 13.25 13 C 13.664 13 14 13.336 14 13.75 L 14 15.25 C 14 15.664 13.664 16 13.25 16 L 0.75 16 C 0.336 16 0 15.664 0 15.25 L 0 13.75 C 0 13.336 0.336 13 0.75 13 Z",
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
    width: 18,
    height: 22,
    viewBox: "0 0 18 22",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 5,
      width: 18,
      height: 22
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9 0 C 9.552 0 10 0.448 10 1 L 10 12.586 L 14.293 8.293 C 14.683 7.902 15.317 7.902 15.707 8.293 C 16.098 8.683 16.098 9.317 15.707 9.707 L 9.707 15.707 C 9.317 16.098 8.683 16.098 8.293 15.707 L 2.293 9.707 C 1.902 9.317 1.902 8.683 2.293 8.293 C 2.683 7.902 3.317 7.902 3.707 8.293 L 8 12.586 L 8 1 C 8 0.448 8.448 0 9 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1 18 C 1.552 18 2 18.448 2 19 L 2 20 L 16 20 L 16 19 C 16 18.448 16.448 18 17 18 C 17.552 18 18 18.448 18 19 L 18 21 C 18 21.552 17.552 22 17 22 L 1 22 C 0.448 22 0 21.552 0 21 L 0 19 C 0 18.448 0.448 18 1 18 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: size=24
    "size=24": __body0,
    // figma: size=32
    "size=32": __body1
  };
  return (__impls[__vkey_IconDownload(props)] ?? __body0)();
}

// figma node: 5193:7161 icon/pause-hardware (2 variants)
const __venc_IconPauseHardware = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconPauseHardware = p => "size=" + __venc_IconPauseHardware(p.size);
function IconPauseHardware(_p = {}) {
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
    width: 7.969,
    height: 16,
    viewBox: "0 0 7.969 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.016,
      top: 4.002,
      width: 7.969,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.75 0 C 1.164 0 1.5 0.336 1.5 0.75 L 1.5 15.25 C 1.5 15.664 1.164 16 0.75 16 C 0.336 16 0 15.664 0 15.25 L 0 0.75 C 0 0.336 0.336 0 0.75 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 7.219 0 C 7.633 0 7.969 0.336 7.969 0.75 L 7.969 15.25 C 7.969 15.664 7.633 16 7.219 16 C 6.805 16 6.469 15.664 6.469 15.25 L 6.469 0.75 C 6.469 0.336 6.805 0 7.219 0 Z",
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
    width: 10,
    height: 22,
    viewBox: "0 0 10 22",
    fill: "none",
    style: {
      position: "absolute",
      left: 11,
      top: 5,
      width: 10,
      height: 22
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 C 1.552 0 2 0.448 2 1 L 2 21 C 2 21.552 1.552 22 1 22 C 0.448 22 0 21.552 0 21 L 0 1 C 0 0.448 0.448 0 1 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9 0 C 9.552 0 10 0.448 10 1 L 10 21 C 10 21.552 9.552 22 9 22 C 8.448 22 8 21.552 8 21 L 8 1 C 8 0.448 8.448 0 9 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: size=24
    "size=24": __body0,
    // figma: size=32
    "size=32": __body1
  };
  return (__impls[__vkey_IconPauseHardware(props)] ?? __body0)();
}

// figma node: 5193:16176 icon/save (2 variants)
const __venc_IconSave = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconSave = p => "size=" + __venc_IconSave(p.size);
function IconSave(_p = {}) {
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
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 3.5 L 10 4.5 C 10 4.914 9.664 5.25 9.25 5.25 C 8.836 5.25 8.5 4.914 8.5 4.5 L 8.5 3.5 C 8.5 3.086 8.836 2.75 9.25 2.75 C 9.664 2.75 10 3.086 10 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 1.25 C 0 0.56 0.56 0 1.25 0 L 14.75 0 C 15.44 0 16 0.56 16 1.25 L 16 14.75 C 16 15.44 15.44 16 14.75 16 L 1.25 16 C 0.56 16 0 15.44 0 14.75 L 0 1.25 Z M 1.5 1.5 L 1.5 14.5 L 14.5 14.5 L 14.5 1.5 L 13 1.5 L 13 6.75 C 13 7.44 12.441 8 11.75 8 L 4.25 8 C 3.56 8 3 7.44 3 6.75 L 3 1.5 L 1.5 1.5 Z M 4.5 1.5 L 4.5 6.5 L 11.5 6.5 L 11.5 1.5 L 4.5 1.5 Z",
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
    width: 22,
    height: 22,
    viewBox: "0 0 22 22",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 22,
      height: 22
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.5 4 L 13.5 4 C 13.776 4 14 4.224 14 4.5 L 14 6.5 C 14 6.776 13.776 7 13.5 7 L 12.5 7 C 12.224 7 12 6.776 12 6.5 L 12 4.5 C 12 4.224 12.224 4 12.5 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 1.5 C 0 0.672 0.672 0 1.5 0 L 20.5 0 C 21.328 0 22 0.672 22 1.5 L 22 20.5 C 22 21.328 21.328 22 20.5 22 L 1.5 22 C 0.672 22 0 21.328 0 20.5 L 0 1.5 Z M 2 2 L 2 20 L 20 20 L 20 2 L 18 2 L 18 9.5 C 18 10.328 17.328 11 16.5 11 L 5.5 11 C 4.672 11 4 10.328 4 9.5 L 4 2 L 2 2 Z M 6 2 L 6 9 L 16 9 L 16 2 L 6 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: size=24
    "size=24": __body0,
    // figma: size=32
    "size=32": __body1
  };
  return (__impls[__vkey_IconSave(props)] ?? __body0)();
}

// figma node: 1149:2890 FAB
function FAB(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1576,
      height: 1000,
      overflow: "hidden",
      backgroundColor: "rgb(245,245,245)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 707,
      top: 600,
      width: "calc(var(--patch-object-small) * 1px)",
      height: "calc(var(--patch-object-small) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-accent-primary)",
      boxShadow: "0px 1px 3px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
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
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 18,
    viewBox: "0 0 20 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 18,
      color: "var(--patch-color-text-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.5 10.5 C 6.5 8.567 8.067 7 10 7 C 11.933 7 13.5 8.567 13.5 10.5 C 13.5 12.433 11.933 14 10 14 C 8.067 14 6.5 12.433 6.5 10.5 Z M 10 8.5 C 8.895 8.5 8 9.395 8 10.5 C 8 11.605 8.895 12.5 10 12.5 C 11.105 12.5 12 11.605 12 10.5 C 12 9.395 11.105 8.5 10 8.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15 9 C 14.448 9 14 8.552 14 8 C 14 7.448 14.448 7 15 7 C 15.552 7 16 7.448 16 8 C 16 8.552 15.552 9 15 9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.735 3 L 5.776 1.309 C 6.276 0.495 7.163 0 8.118 0 L 11.882 0 C 12.837 0 13.724 0.495 14.225 1.309 L 15.265 3 L 17.25 3 C 18.769 3 20 4.231 20 5.75 L 20 15.25 C 20 16.769 18.769 18 17.25 18 L 2.75 18 C 1.231 18 0 16.769 0 15.25 L 0 5.75 C 0 4.231 1.231 3 2.75 3 L 4.735 3 Z M 7.053 2.095 L 6.496 3 L 13.504 3 L 12.947 2.095 C 12.72 1.725 12.317 1.5 11.882 1.5 L 8.118 1.5 C 7.684 1.5 7.281 1.725 7.053 2.095 Z M 1.5 5.75 L 1.5 15.25 C 1.5 15.94 2.06 16.5 2.75 16.5 L 17.25 16.5 C 17.94 16.5 18.5 15.94 18.5 15.25 L 18.5 5.75 C 18.5 5.06 17.94 4.5 17.25 4.5 L 2.75 4.5 C 2.06 4.5 1.5 5.06 1.5 5.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 711,
      top: 528,
      width: "calc(var(--patch-object-x-small) * 1px)",
      height: "calc(var(--patch-object-x-small) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-accent-primary)",
      boxShadow: "0px 1px 3px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
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
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 18.997,
    viewBox: "0 0 16 18.997",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 2,
      width: 16,
      height: 18.997,
      color: "var(--patch-color-text-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 2.75 C 0 1.231 1.231 0 2.75 0 L 13.25 0 C 14.769 0 16 1.231 16 2.75 L 16 17.745 C 16 18.69 14.993 19.293 14.16 18.847 L 8 15.551 L 1.84 18.847 C 1.007 19.293 0 18.69 0 17.745 L 0 2.75 Z M 2.75 1.5 C 2.06 1.5 1.5 2.06 1.5 2.75 L 1.5 17.328 L 7.41 14.165 C 7.779 13.968 8.221 13.968 8.59 14.165 L 14.5 17.328 L 14.5 2.75 C 14.5 2.06 13.94 1.5 13.25 1.5 L 2.75 1.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 703,
      top: 680,
      width: "calc(var(--patch-object-medium) * 1px)",
      height: "calc(var(--patch-object-medium) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-accent-primary)",
      boxShadow: "0px 1px 3px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.062,
    height: 15.717,
    viewBox: "0 0 16.062 15.717",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4.14,
      width: 16.062,
      height: 15.717,
      color: "var(--patch-color-text-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.577 1.578 C 2.079 1.337 1.5 1.699 1.5 2.253 L 1.5 13.464 C 1.5 14.018 2.079 14.381 2.577 14.139 L 14.139 8.527 C 14.703 8.254 14.703 7.451 14.139 7.177 L 2.577 1.578 Z M 0 2.253 C 0 0.593 1.737 -0.496 3.231 0.228 L 14.793 5.827 C 16.484 6.647 16.485 9.056 14.794 9.877 L 3.232 15.488 C 1.738 16.214 0 15.125 0 13.464 L 0 2.253 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 695,
      top: 768,
      width: "calc(var(--patch-object-large) * 1px)",
      height: "calc(var(--patch-object-large) * 1px)",
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-accent-primary)",
      boxShadow: "0px 1px 3px 0px rgba(18,18,18,0.2)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 9999,
      display: "flex",
      flexDirection: "row",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-12) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-12) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 24,
      height: 24,
      color: "var(--patch-color-text-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13 1 L 13 11 L 23 11 C 23.552 11 24 11.448 24 12 C 24 12.552 23.552 13 23 13 L 13 13 L 13 23 C 13 23.552 12.552 24 12 24 C 11.448 24 11 23.552 11 23 L 11 13 L 1 13 C 0.448 13 0 12.552 0 12 C 0 11.448 0.448 11 1 11 L 11 11 L 11 1 C 11 0.448 11.448 0 12 0 C 12.552 0 13 0.448 13 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement(DesktopButtonsFAB, {
    style: {
      position: "absolute",
      left: 835,
      top: 600,
      width: 32,
      height: 32
    },
    icon2: /*#__PURE__*/React.createElement(IconSave, {
      size: "24"
    }),
    type: "secondary",
    size: "s",
    state: "at rest"
  }), /*#__PURE__*/React.createElement(DesktopButtonsFAB, {
    style: {
      position: "absolute",
      left: 839,
      top: 528,
      width: 24,
      height: 24
    },
    icon2: /*#__PURE__*/React.createElement(IconDownload, {
      size: "24"
    }),
    type: "secondary",
    size: "xs",
    state: "at rest"
  }), /*#__PURE__*/React.createElement(DesktopButtonsFAB, {
    style: {
      position: "absolute",
      left: 831,
      top: 680,
      width: 40,
      height: 40
    },
    icon2: /*#__PURE__*/React.createElement(IconPauseHardware, {
      size: "24"
    }),
    type: "secondary",
    size: "m",
    state: "at rest"
  }), /*#__PURE__*/React.createElement(DesktopButtonsFAB, {
    style: {
      position: "absolute",
      left: 823,
      top: 768,
      width: 56,
      height: 56
    },
    icon: /*#__PURE__*/React.createElement(IconChevronRight6, {
      size: "32"
    }),
    type: "secondary",
    size: "l",
    state: "at rest"
  }), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 40,
      top: 148,
      width: 472,
      height: 132
    },
    subheading: false,
    text1: "Usage",
    text3: "For prominent actions that can be easily communicated with only an icon (conventions such as ‘Add’, ‘Next’, or ‘Save’, for example).\nUse sparingly for best effect."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40,
      top: 320,
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
      color: "rgb(36,36,37)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "• ", "Persists by appearing on top of other content.", "\n", "• ", "Should not spawn a popover or menu-like component.")), /*#__PURE__*/React.createElement("div", {
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
      color: "rgb(36,36,37)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "• ", "Aim to pair a primary with a secondary; avoid presenting conflicting primary actions.", "\n", "• ", "For visibility, ensure there is sufficient space around an FAB.", "\n", "• ", "S is the default FAB size.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1064,
      top: 340,
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
  }, "Due to the way the properties are structured, swapped icons will not commute to the larger FAB if the button size is later switched to something smaller (and vice versa).")), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 552,
      top: 148,
      width: 472,
      height: 172
    },
    sectionHeading: true,
    subheading: false,
    text1: "Properties",
    text2: "Component",
    text3: "Type: levels of visual prominence.\nSize: available size options, corresponding to similar sizes in other components.\nState: allows different states of user interaction to be represented.\nIcon: swappable button content."
  }), /*#__PURE__*/React.createElement(TitleBlock, {
    style: {
      position: "absolute",
      left: 40,
      top: 40,
      width: 728
    },
    text1: "FAB",
    text2: "A Floating Action Button represents a primary action with a single icon."
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 691,
      top: 480,
      width: 64,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Type: Primary"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 608,
      top: 608,
      width: 32,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "right",
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Size: S"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 602,
      top: 532,
      width: 38,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "right",
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Size: XS"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 606,
      top: 692,
      width: 34,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "right",
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Size: M"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 609,
      top: 788,
      width: 31,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "right",
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Size: L"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 812,
      top: 480,
      width: 79,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Type: Secondary"), /*#__PURE__*/React.createElement(StatusBlock, {
    style: {
      position: "absolute",
      left: 993,
      top: 40,
      width: 543
    },
    date: "2025-09-15",
    orientation: "default"
  }));
}

// figma node: 5188:8517 Desktop / Badges / Status Indicator (2 variants)
const __venc_DesktopBadgesStatusIndicator = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_DesktopBadgesStatusIndicator = p => "role=" + __venc_DesktopBadgesStatusIndicator(p.role);
function DesktopBadgesStatusIndicator(_p = {}) {
  const props = {
    ..._p,
    role: _p.role ?? "alert"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 8,
      height: 8,
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-error)",
      gap: "calc(var(--patch-spacer-0) * 1px)",
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
      width: 8,
      height: 8,
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-accent-primary)",
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
    // figma: Role=Alert
    "role=alert": __body0,
    // figma: Role=Default
    "role=default": __body1
  };
  return (__impls[__vkey_DesktopBadgesStatusIndicator(props)] ?? __body0)();
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

// figma node: 1020:7651 Icon Button
function IconButton2(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1576,
      height: 1000,
      overflow: "hidden",
      backgroundColor: "rgb(245,245,245)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(DesktopButtonsIconButton3, {
    style: {
      position: "absolute",
      left: 712,
      top: 572,
      width: 24,
      height: 24
    },
    type: "primary",
    size: "xs",
    state: "at rest"
  }), /*#__PURE__*/React.createElement(DesktopButtonsIconButton3, {
    style: {
      position: "absolute",
      left: 708,
      top: 644,
      width: 32,
      height: 32
    },
    type: "primary",
    size: "s",
    state: "at rest"
  }), /*#__PURE__*/React.createElement(DesktopButtonsIconButton3, {
    style: {
      position: "absolute",
      left: 704,
      top: 724,
      width: 40,
      height: 40
    },
    type: "primary",
    size: "m",
    state: "on hover"
  }), /*#__PURE__*/React.createElement(DesktopButtonsIconButton3, {
    style: {
      position: "absolute",
      left: 704,
      top: 812,
      width: 40,
      height: 40
    },
    background: true,
    type: "primary",
    size: "m",
    state: "is selected"
  }), /*#__PURE__*/React.createElement(DesktopButtonsIconButton3, {
    style: {
      position: "absolute",
      left: 832,
      top: 812,
      width: 40,
      height: 40
    },
    background: false,
    type: "secondary",
    size: "m",
    state: "is selected"
  }), /*#__PURE__*/React.createElement(DesktopButtonsIconButton3, {
    style: {
      position: "absolute",
      left: 840,
      top: 572,
      width: 24,
      height: 24
    },
    type: "secondary",
    size: "xs",
    state: "at rest"
  }), /*#__PURE__*/React.createElement(DesktopButtonsIconButton3, {
    style: {
      position: "absolute",
      left: 836,
      top: 644,
      width: 32,
      height: 32
    },
    type: "secondary",
    size: "s",
    state: "at rest"
  }), /*#__PURE__*/React.createElement(DesktopButtonsIconButton3, {
    style: {
      position: "absolute",
      left: 832,
      top: 724,
      width: 40,
      height: 40
    },
    type: "secondary",
    size: "m",
    state: "on hover"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 128,
      top: 728,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "calc(var(--patch-object-small) * 1px)",
      height: "calc(var(--patch-object-small) * 1px)",
      borderRadius: 8,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
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
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 13.504,
    viewBox: "0 0 18 13.504",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 5,
      width: 18,
      height: 13.504,
      color: "var(--patch-color-text-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12.754 C 0 12.34 0.336 12.004 0.75 12.004 L 17.25 12.004 C 17.664 12.004 18 12.34 18 12.754 C 18 13.169 17.664 13.504 17.25 13.504 L 0.75 13.504 C 0.336 13.504 0 13.169 0 12.754 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.75 C 0 0.336 0.336 0 0.75 0 L 17.25 0 C 17.664 0 18 0.336 18 0.75 C 18 1.164 17.664 1.5 17.25 1.5 L 0.75 1.5 C 0.336 1.5 0 1.164 0 0.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 6.758 C 0 6.344 0.336 6.008 0.75 6.008 L 12.25 6.008 C 12.664 6.008 13 6.344 13 6.758 C 13 7.173 12.664 7.508 12.25 7.508 L 0.75 7.508 C 0.336 7.508 0 7.173 0 6.758 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "calc(var(--patch-object-small) * 1px)",
      height: "calc(var(--patch-object-small) * 1px)",
      borderRadius: 8,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.012,
    height: 13.500,
    viewBox: "0 0 18.012 13.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 5,
      width: 18.012,
      height: 13.5,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.012 12.75 C 0.012 12.335 0.348 12 0.762 12 L 17.262 12 C 17.676 12 18.012 12.335 18.012 12.75 C 18.012 13.164 17.676 13.5 17.262 13.5 L 0.762 13.5 C 0.348 13.5 0.012 13.164 0.012 12.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.75 C 0 0.336 0.336 0 0.75 0 L 17.25 0 C 17.664 0 18 0.336 18 0.75 C 18 1.164 17.664 1.5 17.25 1.5 L 0.75 1.5 C 0.336 1.5 0 1.164 0 0.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3 6.753 C 3 6.339 3.336 6.003 3.75 6.003 L 14.25 6.003 C 14.664 6.003 15 6.339 15 6.753 C 15 7.168 14.664 7.503 14.25 7.503 L 3.75 7.503 C 3.336 7.503 3 7.168 3 6.753 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "calc(var(--patch-object-small) * 1px)",
      height: "calc(var(--patch-object-small) * 1px)",
      borderRadius: 8,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 13.507,
    viewBox: "0 0 18 13.507",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 5,
      width: 18,
      height: 13.507,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12.757 C 0 12.343 0.336 12.007 0.75 12.007 L 17.25 12.007 C 17.664 12.007 18 12.343 18 12.757 C 18 13.171 17.664 13.507 17.25 13.507 L 0.75 13.507 C 0.336 13.507 0 13.171 0 12.757 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.75 C 0 0.336 0.336 0 0.75 0 L 17.25 0 C 17.664 0 18 0.336 18 0.75 C 18 1.164 17.664 1.5 17.25 1.5 L 0.75 1.5 C 0.336 1.5 0 1.164 0 0.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5 6.765 C 5 6.351 5.336 6.015 5.75 6.015 L 17.25 6.015 C 17.664 6.015 18 6.351 18 6.765 C 18 7.179 17.664 7.515 17.25 7.515 L 5.75 7.515 C 5.336 7.515 5 7.179 5 6.765 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 320,
      top: 728,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "calc(var(--patch-object-small) * 1px)",
      height: "calc(var(--patch-object-small) * 1px)",
      borderRadius: 8,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.001,
    height: 17,
    viewBox: "0 0 16.001 17",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.998,
      top: 4,
      width: 16.001,
      height: 17,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.75 C 0 0.336 0.336 0 0.75 0 L 15.251 0 C 15.665 0 16.001 0.336 16.001 0.75 C 16.001 1.164 15.665 1.5 15.251 1.5 L 0.75 1.5 C 0.336 1.5 0 1.164 0 0.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11.709 5.656 C 12.037 5.908 12.099 6.379 11.846 6.707 C 11.594 7.036 11.123 7.097 10.794 6.845 L 8.752 5.273 L 8.752 16.25 C 8.752 16.664 8.416 17 8.002 17 C 7.587 17 7.252 16.664 7.252 16.25 L 7.252 5.273 L 5.209 6.845 C 4.881 7.097 4.41 7.036 4.157 6.707 C 3.905 6.379 3.966 5.908 4.294 5.656 L 7.532 3.165 C 7.566 3.138 7.602 3.114 7.639 3.093 C 7.721 3.048 7.813 3.017 7.91 3.006 C 7.94 3.002 7.971 3 8.002 3 C 8.043 3 8.084 3.003 8.125 3.01 C 8.202 3.023 8.275 3.047 8.342 3.082 C 8.388 3.105 8.431 3.133 8.472 3.165 L 11.709 5.656 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "calc(var(--patch-object-small) * 1px)",
      height: "calc(var(--patch-object-small) * 1px)",
      borderRadius: 8,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
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
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.997,
    height: 19.969,
    viewBox: "0 0 15.997 19.969",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.007,
      top: 2,
      width: 15.997,
      height: 19.969,
      color: "var(--patch-color-text-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.743 0.75 L 8.743 5.296 L 9.686 4.248 C 9.963 3.94 10.437 3.915 10.745 4.193 C 11.053 4.47 11.078 4.944 10.801 5.252 L 8.558 7.743 C 8.546 7.757 8.534 7.771 8.52 7.784 C 8.37 7.932 8.171 8.005 7.973 8 C 7.874 7.997 7.774 7.975 7.682 7.932 C 7.601 7.895 7.525 7.844 7.46 7.777 C 7.449 7.766 7.439 7.755 7.429 7.744 L 5.186 5.252 C 4.909 4.944 4.934 4.47 5.242 4.193 C 5.55 3.915 6.024 3.94 6.301 4.248 L 7.243 5.296 L 7.243 0.75 C 7.243 0.336 7.579 0 7.993 0 C 8.408 0 8.743 0.336 8.743 0.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 7.243 19.219 L 7.243 14.704 L 6.301 15.752 C 6.024 16.06 5.55 16.085 5.242 15.807 C 4.934 15.53 4.909 15.056 5.186 14.748 L 7.428 12.257 C 7.441 12.243 7.453 12.229 7.466 12.216 C 7.616 12.068 7.815 11.995 8.014 12 C 8.112 12.003 8.211 12.025 8.303 12.067 C 8.385 12.104 8.461 12.156 8.527 12.223 C 8.538 12.234 8.548 12.244 8.557 12.256 L 10.801 14.748 C 11.078 15.056 11.053 15.53 10.745 15.807 C 10.437 16.085 9.963 16.06 9.686 15.752 L 8.743 14.704 L 8.743 19.219 C 8.743 19.633 8.408 19.969 7.993 19.969 C 7.579 19.969 7.243 19.633 7.243 19.219 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 10 C 0 9.586 0.336 9.25 0.75 9.25 L 15.247 9.25 C 15.661 9.25 15.997 9.586 15.997 10 C 15.997 10.414 15.661 10.75 15.247 10.75 L 0.75 10.75 C 0.336 10.75 0 10.414 0 10 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "calc(var(--patch-object-small) * 1px)",
      height: "calc(var(--patch-object-small) * 1px)",
      borderRadius: 8,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 17,
    viewBox: "0 0 16 17",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.004,
      top: 4,
      width: 16,
      height: 17,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.25 15.5 C 15.664 15.5 16 15.836 16 16.25 C 16 16.664 15.664 17 15.25 17 L 0.75 17 C 0.336 17 0 16.664 0 16.25 C 0 15.836 0.336 15.5 0.75 15.5 L 15.25 15.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11.703 11.344 L 8.466 13.835 C 8.426 13.867 8.382 13.895 8.337 13.918 C 8.269 13.953 8.196 13.977 8.119 13.99 C 8.078 13.997 8.037 14 7.996 14 C 7.966 14 7.935 13.998 7.904 13.994 C 7.807 13.983 7.716 13.952 7.634 13.907 C 7.596 13.886 7.56 13.862 7.526 13.835 L 4.289 11.344 C 3.961 11.092 3.899 10.621 4.152 10.293 C 4.404 9.964 4.875 9.903 5.203 10.155 L 7.246 11.727 L 7.246 0.75 C 7.246 0.336 7.582 0 7.996 0 C 8.41 0 8.746 0.336 8.746 0.75 L 8.746 11.727 L 10.789 10.155 C 11.117 9.903 11.588 9.964 11.841 10.293 C 12.093 10.621 12.032 11.092 11.703 11.344 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement(TitleBlock, {
    style: {
      position: "absolute",
      left: 40,
      top: 40,
      width: 728,
      height: 116
    },
    text1: "Icon Button & Icon Button Group",
    text2: "Buttons provide a means for the user to initiate an action, to which the app responds. Though Patchwork styling can be applied to either tag type, note that <button> is for an action while <a> is for navigation."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1064,
      top: 408,
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
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "• ", "Due to the way the properties are structured, swapped icons will not commute if an XS button size is later switched to something larger (and vice versa).")), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 40,
      top: 196,
      width: 472,
      height: 152
    },
    subheading: false,
    text1: "Usage",
    text3: "For low prominence actions that can be easily communicated with only an icon.\nA series of related actions may be represented with an Icon Button Group. Also see Segmented Button."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40,
      top: 388,
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
  }, "• ", "Icon button may spawn a popover or menu-like component – but only when not part of a group.", "\n", "• ", "Only one item in an Icon Button Group may be selected at a time.  See Notes 👉 ")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1064,
      top: 196,
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
      color: "rgb(36,36,37)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "• ", "Square and rounded variants are available, for use in different contexts and to pair appropriately with adjacent interface components.", "\n", "• ", "Do not use just for compactness; ensure that the available action can be communicated via only an icon, or use a ", /*#__PURE__*/React.createElement("span", {
    style: {
      textDecoration: "underline",
      fontSize: 14
    }
  }, "Link Button"), " instead.")), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 552,
      top: 196,
      width: 472,
      height: 212
    },
    sectionHeading: true,
    subheading: false,
    text1: "Properties",
    text2: "Component",
    text3: "Type: shape options. See Presentation 👉\nSize: available size options, corresponding to similar sizes in other components. XS should be used in exceptional cases only.\nState: allows different states of user interaction to be represented.\nBackground: an optional background for the selected state only, to allow for toggle-like selections (such as ‘Bookmark’ or ‘Like’). \nIcon: swappable button content."
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 602,
      top: 577,
      width: 38,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "right",
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Size: XS"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 608,
      top: 652,
      width: 32,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "right",
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Size: S"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 606,
      top: 737,
      width: 34,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "right",
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Size: M"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 692,
      top: 524,
      width: 64,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Type: Primary"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 812,
      top: 524,
      width: 79,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Type: Secondary"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 936,
      top: 720,
      width: 129,
      height: 48,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "State: on hover (desktop), to demonstrate shape differences."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 233,
      top: 784,
      width: 87,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Icon Button Group"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 936,
      top: 816,
      width: 121,
      height: 32,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "State: is selected (with or without background)."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 1185,
      top: 784,
      width: 214,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Icon Button with Appendage (also see Badge)"), /*#__PURE__*/React.createElement(StatusBlock, {
    style: {
      position: "absolute",
      left: 993,
      top: 40,
      width: 543
    },
    date: "2026-03-24",
    orientation: "default"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1192,
      top: 728,
      width: 32,
      height: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: "calc(var(--patch-object-small) * 1px)",
      height: "calc(var(--patch-object-small) * 1px)",
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 20,
    viewBox: "0 0 18 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 2,
      width: 18,
      height: 20,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.25 2.04 L 8.25 0.75 C 8.25 0.336 8.586 0 9 0 C 9.414 0 9.75 0.336 9.75 0.75 L 9.75 2.04 C 12.373 2.328 13.655 4.09 14.195 4.971 C 14.53 5.516 14.744 6.19 14.914 6.945 C 15.086 7.705 15.225 8.611 15.382 9.646 C 15.513 10.517 15.617 11.031 15.81 11.533 C 15.884 11.723 16.07 12.03 16.34 12.382 C 16.602 12.722 16.904 13.055 17.165 13.295 C 17.625 13.718 17.882 14.196 17.968 14.683 C 18.052 15.161 17.961 15.596 17.811 15.93 C 17.564 16.48 17.003 17.017 16.1 17.017 C 15.349 17.017 14.188 17.022 11.991 17.017 C 11.945 17.685 11.714 18.36 11.276 18.915 C 10.768 19.559 9.993 20 9 20 C 8.007 20 7.232 19.559 6.724 18.915 C 6.286 18.36 6.055 17.685 6.009 17.017 C 3.809 17.022 2.654 17.017 1.9 17.017 C 0.999 17.017 0.437 16.48 0.189 15.931 C 0.039 15.596 -0.052 15.161 0.032 14.683 C 0.118 14.195 0.377 13.717 0.838 13.294 C 1.099 13.054 1.402 12.722 1.665 12.381 C 1.937 12.029 2.123 11.722 2.197 11.532 C 2.391 11.03 2.494 10.516 2.626 9.646 C 2.783 8.611 2.923 7.704 3.095 6.944 C 3.266 6.189 3.481 5.516 3.816 4.97 C 4.356 4.092 5.62 2.328 8.25 2.04 Z M 7.901 17.985 C 8.143 18.291 8.493 18.5 9 18.5 C 9.507 18.5 9.857 18.291 10.099 17.985 C 10.308 17.72 10.443 17.385 10.485 17.017 C 9.495 17.016 8.505 17.016 7.515 17.017 C 7.557 17.385 7.692 17.72 7.901 17.985 Z M 9 3.5 C 6.645 3.5 5.589 4.952 5.094 5.756 C 4.888 6.091 4.717 6.574 4.558 7.275 C 4.4 7.972 4.268 8.823 4.109 9.871 C 3.975 10.753 3.853 11.407 3.596 12.073 C 3.443 12.467 3.152 12.91 2.853 13.297 C 2.545 13.696 2.185 14.094 1.852 14.399 C 1.608 14.623 1.532 14.814 1.51 14.943 C 1.485 15.082 1.511 15.212 1.557 15.315 C 1.585 15.378 1.625 15.426 1.668 15.457 C 1.706 15.483 1.772 15.517 1.9 15.517 C 6.633 15.517 11.367 15.517 16.1 15.517 C 16.229 15.517 16.296 15.483 16.333 15.457 C 16.376 15.426 16.415 15.379 16.443 15.315 C 16.489 15.212 16.515 15.082 16.491 14.943 C 16.468 14.813 16.392 14.622 16.149 14.399 C 15.817 14.093 15.458 13.695 15.151 13.296 C 14.853 12.909 14.562 12.466 14.411 12.072 C 14.154 11.406 14.032 10.752 13.899 9.871 C 13.74 8.823 13.608 7.972 13.451 7.275 C 13.293 6.573 13.122 6.09 12.917 5.755 C 12.426 4.955 11.349 3.5 9 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 0,
      height: 16,
      minWidth: 16,
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-error)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 4px 0px 4px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-4) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-4) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)"
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
  }, "99"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1272,
      top: 728,
      width: 32,
      height: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: "calc(var(--patch-object-small) * 1px)",
      height: "calc(var(--patch-object-small) * 1px)",
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.000,
    height: 14.009,
    viewBox: "0 0 20.000 14.009",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 5,
      width: 20,
      height: 14.009,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.25 12 L 16.858 12 C 16.449 13.17 15.335 14.009 14.025 14.009 C 12.716 14.009 11.602 13.17 11.193 12 L 0.75 12 C 0.336 12 0 11.664 0 11.25 C 0 10.836 0.336 10.5 0.75 10.5 L 11.068 10.5 C 11.31 9.086 12.542 8.009 14.025 8.009 C 15.509 8.009 16.741 9.086 16.982 10.5 L 19.25 10.5 C 19.664 10.5 20 10.836 20 11.25 C 20 11.664 19.664 12 19.25 12 Z M 14.025 9.509 C 13.197 9.509 12.525 10.181 12.525 11.009 C 12.525 11.837 13.197 12.509 14.025 12.509 C 14.854 12.509 15.525 11.837 15.525 11.009 C 15.525 10.181 14.854 9.509 14.025 9.509 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.75 2 L 3.171 2 C 3.583 0.835 4.694 0 6 0 C 7.306 0 8.417 0.835 8.829 2 L 19.242 2 C 19.656 2 19.992 2.336 19.992 2.75 C 19.992 3.164 19.656 3.5 19.242 3.5 L 8.959 3.5 C 8.72 4.919 7.486 6 6 6 C 4.514 6 3.28 4.919 3.041 3.5 L 0.75 3.5 C 0.336 3.5 0 3.164 0 2.75 C 0 2.336 0.336 2 0.75 2 Z M 6 4.5 C 6.828 4.5 7.5 3.828 7.5 3 C 7.5 2.172 6.828 1.5 6 1.5 C 5.172 1.5 4.5 2.172 4.5 3 C 4.5 3.828 5.172 4.5 6 4.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 0,
      width: 16,
      height: 16,
      minWidth: 16,
      borderRadius: 9999,
      backgroundColor: "var(--patch-color-fill-error)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 4px 0px 4px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-4) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-4) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)"
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
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "3"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1352,
      top: 728,
      width: 32,
      height: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: "calc(var(--patch-object-small) * 1px)",
      height: "calc(var(--patch-object-small) * 1px)",
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 24,
      height: 24
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
      height: 11,
      color: "var(--patch-color-text-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.297 9.627 L 18.11 10.422 C 18.031 10.761 17.728 11 17.38 11 L 14.13 11 C 13.716 11 13.38 10.664 13.38 10.25 L 13.38 10 C 13.38 9.862 13.269 9.75 13.13 9.75 L 5.63 9.75 C 5.492 9.75 5.38 9.862 5.38 10 L 5.38 10.25 C 5.38 10.664 5.045 11 4.63 11 L 1.38 11 C 1.032 11 0.73 10.761 0.65 10.422 L 0.463 9.627 C -0.097 7.247 -0.15 4.775 0.308 2.373 C 0.57 0.996 1.774 0 3.175 0 L 15.586 0 C 16.987 0 18.191 0.996 18.453 2.373 C 18.911 4.775 18.858 7.247 18.297 9.627 Z M 1.781 2.653 C 1.633 3.43 1.544 4.214 1.513 5 L 17.248 5 C 17.217 4.214 17.127 3.43 16.979 2.653 C 16.852 1.984 16.267 1.5 15.586 1.5 L 3.175 1.5 C 2.494 1.5 1.909 1.984 1.781 2.653 Z M 1.524 6.5 C 1.574 7.435 1.708 8.367 1.924 9.284 L 1.974 9.5 L 3.953 9.5 C 4.168 8.777 4.838 8.25 5.63 8.25 L 13.13 8.25 C 13.923 8.25 14.593 8.777 14.808 9.5 L 16.786 9.5 L 16.837 9.284 C 17.053 8.367 17.186 7.435 17.237 6.5 L 1.524 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement(DesktopBadgesStatusIndicator, {
    style: {
      position: "absolute",
      left: 20,
      top: 4,
      width: 8,
      height: 8
    },
    role: "default"
  })));
}

// figma node: 5192:38282 .Desktop / Buttons / Blocks / Link Button (2 variants)
const __venc_DesktopButtonsBlocksLinkButton3 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_DesktopButtonsBlocksLinkButton3 = p => "size=" + __venc_DesktopButtonsBlocksLinkButton3(p.size);
function DesktopButtonsBlocksLinkButton3(_p = {}) {
  const props = {
    ..._p,
    value: _p.value ?? "{Value}",
    size: _p.size ?? "m",
    lead: _p.lead ?? true,
    trail: _p.trail ?? true
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-8) * 1px)",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
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
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
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
  }, props.value)), props.trail && /*#__PURE__*/React.createElement("div", {
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
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      alignItems: "center",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      position: "relative",
      ...props.style
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
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), /*#__PURE__*/React.createElement("div", {
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
  }, props.value)), props.trail && /*#__PURE__*/React.createElement("div", {
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
  })));
  const __impls = {
    // figma: Size=L
    "size=l": __body0,
    // figma: Size=M
    "size=m": __body1
  };
  return (__impls[__vkey_DesktopButtonsBlocksLinkButton3(props)] ?? __body1)();
}

// figma node: 5192:38293 Desktop / Buttons / Link Button (12 variants)
const __venc_DesktopButtonsLinkButton2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_DesktopButtonsLinkButton2 = p => "role=" + __venc_DesktopButtonsLinkButton2(p.role) + '|' + "type=" + __venc_DesktopButtonsLinkButton2(p.type) + '|' + "state=" + __venc_DesktopButtonsLinkButton2(p.state);
function DesktopButtonsLinkButton2(_p = {}) {
  const props = {
    ..._p,
    role: _p.role ?? "default",
    type: _p.type ?? "primary",
    state: _p.state ?? "at rest"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-small) * 1px)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(DesktopButtonsBlocksLinkButton3, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    size: "m"
  }));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-small) * 1px)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
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
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch"
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
      borderTop: "1px solid rgb(255,255,255)",
      borderRight: "1px solid rgb(255,255,255)",
      borderBottom: "1px solid rgb(255,255,255)",
      borderLeft: "1px solid rgb(255,255,255)",
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
  }, "{Value}")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch"
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
  })))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-small) * 1px)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
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
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch"
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
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "{Value}")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch"
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
  })))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-small) * 1px)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
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
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch"
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
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "{Value}")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch"
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
  })))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-small) * 1px)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
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
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch"
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
      borderTop: "1px solid var(--patch-color-border-error)",
      borderRight: "1px solid var(--patch-color-border-error)",
      borderBottom: "1px solid var(--patch-color-border-error)",
      borderLeft: "1px solid var(--patch-color-border-error)",
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
  }, "{Value}")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch"
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
  })))));
  const __impls = {
    // figma: Role=Default, Type=Primary, State=at rest
    "role=default|type=primary|state=at rest": __body0,
    // figma: Role=Default, Type=Primary, State=on hover
    "role=default|type=primary|state=on hover": __body0,
    // figma: Role=Default, Type=Primary, State=is active
    "role=default|type=primary|state=is active": __body1,
    // figma: Role=Default, Type=Primary, State=is disabled
    "role=default|type=primary|state=is disabled": __body2,
    // figma: Role=Default, Type=Secondary, State=is disabled
    "role=default|type=secondary|state=is disabled": __body2,
    // figma: Role=Error, Type=Primary, State=is disabled
    "role=error|type=primary|state=is disabled": __body2,
    // figma: Role=Default, Type=Secondary, State=at rest
    "role=default|type=secondary|state=at rest": __body2,
    // figma: Role=Default, Type=Secondary, State=on hover
    "role=default|type=secondary|state=on hover": __body1,
    // figma: Role=Default, Type=Secondary, State=is active
    "role=default|type=secondary|state=is active": __body3,
    // figma: Role=Error, Type=Primary, State=at rest
    "role=error|type=primary|state=at rest": __body2,
    // figma: Role=Error, Type=Primary, State=on hover
    "role=error|type=primary|state=on hover": __body4,
    // figma: Role=Error, Type=Primary, State=is active
    "role=error|type=primary|state=is active": __body1
  };
  return (__impls[__vkey_DesktopButtonsLinkButton2(props)] ?? __body0)();
}

// figma node: 4163:639 icon/.boundary-24px
function IconBoundary24px4(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
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
      height: 24
    }
  }));
}

// figma node: 1149:3082 Link Button
function LinkButton(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1576,
      height: 1000,
      overflow: "hidden",
      backgroundColor: "rgb(245,245,245)",
      position: "relative",
      color: "var(--warm)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 202,
      top: 744,
      height: "calc(var(--patch-object-small) * 1px)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 151,
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.975,
    height: 18.997,
    viewBox: "0 0 18.975 18.997",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.01,
      top: 2.014,
      width: 18.975,
      height: 18.997,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.403 1.573 C 17.905 2.075 18.459 2.692 18.753 3.342 C 18.904 3.677 19.009 4.067 18.965 4.482 C 18.919 4.913 18.722 5.299 18.391 5.618 L 7.544 16.464 C 7.425 16.584 7.282 16.678 7.125 16.741 L 1.718 18.905 C 0.7 19.312 -0.312 18.305 0.09 17.285 L 2.233 11.855 C 2.296 11.696 2.391 11.551 2.512 11.43 L 13.359 0.584 C 13.68 0.254 14.067 0.056 14.497 0.01 C 14.913 -0.034 15.304 0.071 15.638 0.223 C 16.287 0.517 16.902 1.072 17.403 1.573 Z M 14.433 1.631 L 14.424 1.64 L 4.064 12 L 6.976 14.911 L 17.341 4.546 L 17.347 4.541 C 17.449 4.443 17.468 4.374 17.473 4.325 C 17.48 4.258 17.468 4.142 17.386 3.961 C 17.213 3.578 16.833 3.125 16.342 2.633 C 15.85 2.141 15.399 1.761 15.018 1.589 C 14.838 1.507 14.722 1.495 14.655 1.502 C 14.605 1.507 14.534 1.526 14.433 1.631 Z M 3.267 13.323 L 1.699 17.297 L 5.656 15.713 L 3.267 13.323 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 123,
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
  }, "Edit Project Details")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch"
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
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 244,
      top: 824,
      height: "calc(var(--patch-object-small) * 1px)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)"
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
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20.000,
    viewBox: "0 0 20 20.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20,
      color: "var(--patch-color-text-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3 0.75 C 3 0.336 3.336 0 3.75 0 L 11.682 0 C 11.877 0 12.065 0.076 12.205 0.213 L 16.774 4.667 C 16.918 4.808 17 5.001 17 5.204 L 17 7.195 L 18.453 7.195 C 19.287 7.195 20 7.905 20 8.826 L 20 16.314 C 20 17.045 19.459 17.945 18.453 17.945 L 16.008 17.945 L 16.008 19.25 C 16.008 19.664 15.672 20 15.258 20 L 4.766 20 C 4.351 20 4.016 19.664 4.016 19.25 L 4.016 17.945 L 1.547 17.945 C 0.713 17.945 0 17.235 0 16.314 L 0 8.826 C 0 8.094 0.541 7.195 1.547 7.195 L 3 7.195 L 3 0.75 Z M 18.449 16.445 C 18.451 16.443 18.454 16.44 18.458 16.435 C 18.468 16.424 18.479 16.406 18.487 16.382 C 18.496 16.358 18.5 16.334 18.5 16.314 L 18.5 8.826 C 18.5 8.789 18.493 8.764 18.487 8.747 C 18.48 8.73 18.471 8.718 18.462 8.709 C 18.454 8.7 18.447 8.696 18.444 8.695 L 1.551 8.695 C 1.549 8.696 1.546 8.699 1.542 8.704 C 1.533 8.715 1.521 8.733 1.513 8.757 C 1.504 8.781 1.5 8.805 1.5 8.826 L 1.5 16.314 C 1.5 16.35 1.507 16.376 1.513 16.392 C 1.52 16.409 1.529 16.421 1.538 16.43 C 1.546 16.439 1.553 16.443 1.556 16.445 L 4.016 16.445 L 4.016 13.5 L 3.75 13.5 C 3.336 13.5 3 13.164 3 12.75 C 3 12.336 3.336 12 3.75 12 L 16.25 12 C 16.664 12 17 12.336 17 12.75 C 17 13.164 16.664 13.5 16.25 13.5 L 16.008 13.5 L 16.008 16.445 L 18.449 16.445 Z M 5.516 13.5 L 5.516 18.5 L 14.508 18.5 L 14.508 13.5 L 5.516 13.5 Z M 4.5 1.5 L 4.5 7.194 L 15.5 7.194 L 15.5 5.52 L 15.48 5.5 L 10.75 5.5 C 10.336 5.5 10 5.164 10 4.75 L 10 1.5 L 4.5 1.5 Z M 11.5 1.62 L 11.5 4 L 13.941 4 L 11.5 1.62 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 35,
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
  }, "Print")))), /*#__PURE__*/React.createElement(DesktopButtonsLinkButton2, {
    style: {
      position: "absolute",
      left: 738,
      top: 561,
      height: 32
    },
    role: "default",
    type: "primary",
    state: "at rest"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 615,
      top: 744,
      height: "calc(var(--patch-object-small) * 1px)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 97,
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.014,
    height: 18.024,
    viewBox: "0 0 18.014 18.024",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.017,
      top: 2.969,
      width: 18.014,
      height: 18.024,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.763 5.251 C 13.056 5.544 13.056 6.018 12.763 6.311 L 6.263 12.811 C 5.97 13.104 5.495 13.104 5.203 12.811 C 4.91 12.518 4.91 12.044 5.203 11.751 L 11.703 5.251 C 11.995 4.958 12.47 4.958 12.763 5.251 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.741 7.229 C 5.046 7.509 5.065 7.984 4.785 8.289 L 2.385 10.899 C 1.173 12.217 1.21 14.256 2.47 15.529 C 3.744 16.816 5.809 16.86 7.136 15.63 L 9.723 13.231 C 10.027 12.949 10.501 12.967 10.783 13.271 C 11.064 13.575 11.046 14.049 10.743 14.331 L 8.156 16.729 C 6.235 18.511 3.247 18.447 1.404 16.585 C -0.419 14.742 -0.474 11.792 1.281 9.883 L 3.681 7.273 C 3.961 6.969 4.436 6.949 4.741 7.229 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 7.186 4.794 C 6.902 4.492 6.918 4.017 7.22 3.734 L 9.795 1.32 C 11.716 -0.482 14.721 -0.433 16.584 1.43 C 18.447 3.293 18.496 6.298 16.694 8.22 L 14.28 10.794 C 13.997 11.096 13.522 11.112 13.22 10.828 C 12.918 10.545 12.903 10.07 13.186 9.768 L 15.6 7.194 C 16.848 5.862 16.814 3.781 15.524 2.49 C 14.233 1.2 12.152 1.166 10.82 2.414 L 8.246 4.828 C 7.944 5.112 7.469 5.096 7.186 4.794 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 69,
      borderTop: "1px solid rgb(255,255,255)",
      borderRight: "1px solid rgb(255,255,255)",
      borderBottom: "1px solid rgb(255,255,255)",
      borderLeft: "1px solid rgb(255,255,255)",
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
  }, "Share Link")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch"
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
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 600,
      top: 824,
      height: "calc(var(--patch-object-small) * 1px)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)"
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
      width: 95,
      borderTop: "1px solid rgb(255,255,255)",
      borderRight: "1px solid rgb(255,255,255)",
      borderBottom: "1px solid rgb(255,255,255)",
      borderLeft: "1px solid rgb(255,255,255)",
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
  }, "Make Private")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.000,
    height: 17.500,
    viewBox: "0 0 20.000 17.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 3.25,
      width: 20,
      height: 17.5,
      color: "var(--patch-color-text-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.47 0.22 C 1.763 -0.073 2.237 -0.073 2.53 0.22 L 8.141 5.83 C 8.176 5.855 8.21 5.884 8.242 5.916 C 8.272 5.946 8.299 5.979 8.323 6.013 L 18.53 16.22 C 18.823 16.513 18.823 16.987 18.53 17.28 C 18.237 17.573 17.763 17.573 17.47 17.28 L 14.516 14.327 C 12.216 15.774 9.922 16.143 7.557 15.317 C 5.119 14.465 2.712 12.378 0.166 9.221 C -0.054 8.947 -0.056 8.557 0.163 8.283 C 1.558 6.532 2.911 5.118 4.249 4.06 L 1.47 1.28 C 1.177 0.987 1.177 0.513 1.47 0.22 Z M 6.691 6.502 L 5.317 5.128 C 4.173 6.011 2.98 7.212 1.717 8.747 C 4.052 11.555 6.12 13.226 8.052 13.901 C 9.818 14.518 11.553 14.329 13.424 13.235 L 12.248 12.059 C 11.607 12.495 10.833 12.75 10 12.75 C 7.791 12.75 6 10.959 6 8.75 C 6 7.917 6.255 7.142 6.691 6.502 Z M 11.156 10.967 L 7.783 7.593 C 7.602 7.939 7.5 8.332 7.5 8.75 C 7.5 10.131 8.619 11.25 10 11.25 C 10.418 11.25 10.811 11.148 11.156 10.967 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.717 2.722 C 15.731 3.771 17.74 5.651 19.837 8.283 C 20.055 8.556 20.055 8.944 19.837 9.217 C 18.877 10.422 17.94 11.466 17.017 12.343 C 16.717 12.628 16.242 12.616 15.957 12.316 C 15.671 12.015 15.683 11.541 15.984 11.255 C 16.727 10.549 17.493 9.714 18.285 8.75 C 16.393 6.448 14.661 4.905 13.025 4.053 C 11.311 3.161 9.697 3.022 8.047 3.589 C 7.655 3.723 7.229 3.515 7.094 3.123 C 6.96 2.731 7.168 2.305 7.56 2.17 C 9.632 1.458 11.672 1.658 13.717 2.722 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10 4.75 C 12.209 4.75 14 6.541 14 8.75 C 14 9.164 13.664 9.5 13.25 9.5 C 12.836 9.5 12.5 9.164 12.5 8.75 C 12.5 7.369 11.381 6.25 10 6.25 C 9.586 6.25 9.25 5.914 9.25 5.5 C 9.25 5.086 9.586 4.75 10 4.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 429,
      top: 744,
      height: "calc(var(--patch-object-small) * 1px)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 78,
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(IconBoundary24px4, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 20.750,
    height: 18,
    viewBox: "0 0 20.750 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.25,
      top: 3,
      width: 20.75,
      height: 18,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.25 9 C 4.25 9.443 4.306 9.899 4.365 10.252 C 4.368 10.273 4.372 10.294 4.375 10.314 L 6.22 8.47 C 6.513 8.177 6.987 8.177 7.28 8.47 C 7.573 8.763 7.573 9.237 7.28 9.53 L 4.28 12.53 C 3.987 12.823 3.513 12.823 3.22 12.53 L 0.22 9.53 C -0.073 9.237 -0.073 8.763 0.22 8.47 C 0.513 8.177 0.987 8.177 1.28 8.47 L 2.814 10.004 C 2.777 9.696 2.75 9.351 2.75 9 C 2.75 4.27 6.496 0 11.75 0 C 17.006 0 20.75 4.303 20.75 9 C 20.75 13.701 17.19 18 11.5 18 C 11.086 18 10.75 17.664 10.75 17.25 C 10.75 16.836 11.086 16.5 11.5 16.5 C 16.31 16.5 19.25 12.924 19.25 9 C 19.25 5.072 16.119 1.5 11.75 1.5 C 7.379 1.5 4.25 5.042 4.25 9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 50,
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
  }, "Restore")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch"
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
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 427,
      top: 824,
      height: "calc(var(--patch-object-small) * 1px)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "calc(var(--patch-spacer-0) * 1px)",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-0) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)"
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
      width: 83,
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
  }, "Cancel Job")))), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 40,
      top: 196,
      width: 472,
      height: 152
    },
    subheading: false,
    text1: "Usage",
    text3: "Consider this to be a quaternary button type: use for actions of low prominence or to simulate a standalone link (a ‘Read More’ action beneath a warning message, for example).\nMay be used to simulate a horizontal row of low priority actions."
  }), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 40,
      top: 388,
      width: 472,
      height: 92
    },
    subheading: false,
    text1: "Behavior",
    text3: "May spawn a popover or menu-like component."
  }), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 1064,
      top: 368,
      width: 472,
      height: 192
    },
    subheading: false,
    text1: "Copy",
    text3: "In most cases, buttons describe actions – use verbs.\nChoose words carefully: avoid vague language and actions that could have multiple meanings within the context.\nTry to limit the button copy to one word; only use more than one word if it’s absolutely necessary for clarity.\nUse Title Case."
  }), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 1064,
      top: 196,
      width: 472,
      height: 132
    },
    subheading: false,
    text1: "Presentation",
    text3: "To maintain integrity and make the right impact, use of the Error role (intended for negative or destructive situations rather than literal errors) should be the exception."
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 359,
      top: 680,
      width: 64,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Type: Primary"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 94,
      top: 752,
      width: 34,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "right",
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Size: M"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 97,
      top: 832,
      width: 31,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "right",
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Size: L"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 624,
      top: 680,
      width: 79,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Type: Secondary"), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 552,
      top: 196,
      width: 472,
      height: 232
    },
    sectionHeading: true,
    subheading: false,
    text1: "Properties",
    text2: "Component",
    text3: "Role: contextually appropriate appearance. See Presentation 👉\nType: levels of visual prominence.\nState: allows different states of user interaction to be represented.\nSize: available height options, corresponding to similar sizes in other components.\nValue: string representing the available action. See Copy 👉\nLead: an optional icon preceding the button text.\nTrail: an optional icon following the button text."
  }), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 552,
      top: 468,
      width: 472,
      height: 56
    },
    subheading: false,
    content: false,
    text1: "Anatomy"
  }), /*#__PURE__*/React.createElement(TitleBlock, {
    style: {
      position: "absolute",
      left: 40,
      top: 40,
      width: 728,
      height: 116
    },
    text1: "Link Button",
    text2: "Buttons provide a means for the user to initiate an action, to which the app responds. Though Patchwork styling can be applied to either tag type, note that <button> is for an action while <a> is for navigation."
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 773,
      top: 524,
      width: 26,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Value"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 668,
      top: 569,
      width: 23,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "right",
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Lead"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 888,
      top: 569,
      width: 20,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Trail"), /*#__PURE__*/React.createElement("svg", {
    width: 32,
    height: 1,
    viewBox: "0 -0.500 32 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,786,540)",
      transformOrigin: "0 0",
      width: 32,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.333 0 C 29.333 1.473 30.527 2.667 32 2.667 C 33.473 2.667 34.667 1.473 34.667 0 C 34.667 -1.473 33.473 -2.667 32 -2.667 C 30.527 -2.667 29.333 -1.473 29.333 0 Z M 0 0.5 L 32 0.5 L 32 -0.5 L 0 -0.5 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 44,
    height: 1,
    viewBox: "0 -0.500 44 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 695,
      top: 577,
      width: 44,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 41.333 0 C 41.333 1.473 42.527 2.667 44 2.667 C 45.473 2.667 46.667 1.473 46.667 0 C 46.667 -1.473 45.473 -2.667 44 -2.667 C 42.527 -2.667 41.333 -1.473 41.333 0 Z M 0 0.5 L 44 0.5 L 44 -0.5 L 0 -0.5 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 44,
    height: 1,
    viewBox: "0 -0.500 44 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 840,
      top: 577,
      width: 44,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -2.667 0 C -2.667 1.473 -1.473 2.667 0 2.667 C 1.473 2.667 2.667 1.473 2.667 0 C 2.667 -1.473 1.473 -2.667 0 -2.667 C -1.473 -2.667 -2.667 -1.473 -2.667 0 Z M 0 0.5 L 44 0.5 L 44 -0.5 L 0 -0.5 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 248,
      top: 904,
      width: 60,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Role: Default"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 444,
      top: 904,
      width: 49,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Role: Error"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 628,
      top: 904,
      width: 72,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "State: on hover"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1064,
      top: 600,
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
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "• ", "The Figma component displays both a leading and trailing icon by default, but the expectation is that these will rarely, if ever, appear at the same time.", "\n", "• ", "Underlines on the hovered variant (desktop only) are slightly further away from the text than they will be in production.")), /*#__PURE__*/React.createElement(StatusBlock, {
    style: {
      position: "absolute",
      left: 993,
      top: 40,
      width: 543
    },
    date: "2025-09-10",
    orientation: "default"
  }));
}

// figma node: 5193:33940 Desktop / Buttons / Segmented Button (45 variants)
const __venc_DesktopButtonsSegmentedButton = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_DesktopButtonsSegmentedButton = p => "size=" + __venc_DesktopButtonsSegmentedButton(p.size) + '|' + "position=" + __venc_DesktopButtonsSegmentedButton(p.position) + '|' + "state=" + __venc_DesktopButtonsSegmentedButton(p.state);
function DesktopButtonsSegmentedButton(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "s",
    position: _p.position ?? "lead",
    state: _p.state ?? "at rest",
    label: _p.label ?? true,
    value: _p.value ?? "{Label}",
    icon3: _p.icon3 ?? true
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "8px 0px 0px 8px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      borderRadius: "8px 0px 0px 8px",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "32"
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value)));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "32"
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value)));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "0px 8px 8px 0px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      borderRadius: "0px 8px 8px 0px",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "32"
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value)));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "0px 8px 8px 0px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      borderRadius: "0px 8px 8px 0px",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0,
      color: "rgb(18,18,18)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "32"
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "var(--patch-color-text-disabled)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value)));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "0px 8px 8px 0px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      borderRadius: "0px 8px 8px 0px",
      backgroundColor: "var(--patch-color-surface-primary-highest)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "32"
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value)));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "0px 8px 8px 0px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      borderRadius: "0px 8px 8px 0px",
      backgroundColor: "var(--patch-color-surface-primary-highest)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0,
      color: "rgb(18,18,18)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "32"
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "var(--patch-color-text-accent-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value)));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "0px 8px 8px 0px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      borderRadius: "0px 8px 8px 0px",
      backgroundColor: "var(--patch-color-surface-accent-primary)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0,
      color: "rgb(18,18,18)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "32"
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "var(--patch-color-text-accent-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value)));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0,
      color: "rgb(18,18,18)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "32"
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "var(--patch-color-text-disabled)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value)));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      backgroundColor: "var(--patch-color-surface-primary-highest)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "32"
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value)));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      backgroundColor: "var(--patch-color-surface-primary-highest)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0,
      color: "rgb(18,18,18)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "32"
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "var(--patch-color-text-accent-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value)));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      backgroundColor: "var(--patch-color-surface-accent-primary)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0,
      color: "rgb(18,18,18)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "32"
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "var(--patch-color-text-accent-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value)));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "8px 0px 0px 8px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      borderRadius: "8px 0px 0px 8px",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0,
      color: "rgb(18,18,18)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "32"
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "var(--patch-color-text-disabled)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value)));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "8px 0px 0px 8px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      borderRadius: "8px 0px 0px 8px",
      backgroundColor: "var(--patch-color-surface-primary-highest)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "32"
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value)));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "8px 0px 0px 8px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      borderRadius: "8px 0px 0px 8px",
      backgroundColor: "var(--patch-color-surface-primary-highest)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0,
      color: "rgb(18,18,18)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "32"
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "var(--patch-color-text-accent-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value)));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "8px 0px 0px 8px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      borderRadius: "8px 0px 0px 8px",
      backgroundColor: "var(--patch-color-surface-accent-primary)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0,
      color: "rgb(18,18,18)"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "32"
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "var(--patch-color-text-accent-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.value)));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-medium) * 1px)",
      overflow: "hidden",
      borderRadius: "8px 0px 0px 8px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      borderRadius: "8px 0px 0px 8px",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
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
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0
    }
  }, props.value)));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-medium) * 1px)",
      overflow: "hidden",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
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
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0
    }
  }, props.value)));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-medium) * 1px)",
      overflow: "hidden",
      borderRadius: "0px 8px 8px 0px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      borderRadius: "0px 8px 8px 0px",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
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
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0
    }
  }, props.value)));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-medium) * 1px)",
      overflow: "hidden",
      borderRadius: "8px 0px 0px 8px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      borderRadius: "8px 0px 0px 8px",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(18,18,18)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-disabled)",
      flexShrink: 0
    }
  }, props.value)));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-medium) * 1px)",
      overflow: "hidden",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(18,18,18)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-disabled)",
      flexShrink: 0
    }
  }, props.value)));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-medium) * 1px)",
      overflow: "hidden",
      borderRadius: "0px 8px 8px 0px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      borderRadius: "0px 8px 8px 0px",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(18,18,18)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-disabled)",
      flexShrink: 0
    }
  }, props.value)));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-medium) * 1px)",
      overflow: "hidden",
      borderRadius: "8px 0px 0px 8px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      borderRadius: "8px 0px 0px 8px",
      backgroundColor: "var(--patch-color-surface-primary-highest)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
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
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0
    }
  }, props.value)));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-medium) * 1px)",
      overflow: "hidden",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      backgroundColor: "var(--patch-color-surface-primary-highest)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
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
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0
    }
  }, props.value)));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-medium) * 1px)",
      overflow: "hidden",
      borderRadius: "0px 8px 8px 0px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      borderRadius: "0px 8px 8px 0px",
      backgroundColor: "var(--patch-color-surface-primary-highest)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
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
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0
    }
  }, props.value)));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-medium) * 1px)",
      overflow: "hidden",
      borderRadius: "8px 0px 0px 8px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      borderRadius: "8px 0px 0px 8px",
      backgroundColor: "var(--patch-color-surface-primary-highest)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(18,18,18)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-accent-primary)",
      flexShrink: 0
    }
  }, props.value)));
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-medium) * 1px)",
      overflow: "hidden",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      backgroundColor: "var(--patch-color-surface-primary-highest)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(18,18,18)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-accent-primary)",
      flexShrink: 0
    }
  }, props.value)));
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-medium) * 1px)",
      overflow: "hidden",
      borderRadius: "0px 8px 8px 0px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      borderRadius: "0px 8px 8px 0px",
      backgroundColor: "var(--patch-color-surface-primary-highest)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(18,18,18)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-accent-primary)",
      flexShrink: 0
    }
  }, props.value)));
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-medium) * 1px)",
      overflow: "hidden",
      borderRadius: "8px 0px 0px 8px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      borderRadius: "8px 0px 0px 8px",
      backgroundColor: "var(--patch-color-surface-accent-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(18,18,18)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-accent-primary)",
      flexShrink: 0
    }
  }, props.value)));
  const __body28 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-medium) * 1px)",
      overflow: "hidden",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      backgroundColor: "var(--patch-color-surface-accent-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(18,18,18)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-accent-primary)",
      flexShrink: 0
    }
  }, props.value)));
  const __body29 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-medium) * 1px)",
      overflow: "hidden",
      borderRadius: "0px 8px 8px 0px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      borderRadius: "0px 8px 8px 0px",
      backgroundColor: "var(--patch-color-surface-accent-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-8) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-8) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(18,18,18)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-accent-primary)",
      flexShrink: 0
    }
  }, props.value)));
  const __body30 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-small) * 1px)",
      overflow: "hidden",
      borderRadius: "8px 0px 0px 8px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      borderRadius: "8px 0px 0px 8px",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-4) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-4) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
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
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0
    }
  }, props.value)));
  const __body31 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-small) * 1px)",
      overflow: "hidden",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-4) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-4) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
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
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0
    }
  }, props.value)));
  const __body32 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-small) * 1px)",
      overflow: "hidden",
      borderRadius: "0px 8px 8px 0px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      borderRadius: "0px 8px 8px 0px",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-4) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-4) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
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
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0
    }
  }, props.value)));
  const __body33 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-small) * 1px)",
      overflow: "hidden",
      borderRadius: "8px 0px 0px 8px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      borderRadius: "8px 0px 0px 8px",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-4) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-4) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(18,18,18)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-disabled)",
      flexShrink: 0
    }
  }, props.value)));
  const __body34 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-small) * 1px)",
      overflow: "hidden",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-4) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-4) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(18,18,18)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-disabled)",
      flexShrink: 0
    }
  }, props.value)));
  const __body35 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-small) * 1px)",
      overflow: "hidden",
      borderRadius: "0px 8px 8px 0px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      borderRadius: "0px 8px 8px 0px",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-4) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-4) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(18,18,18)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-disabled)",
      flexShrink: 0
    }
  }, props.value)));
  const __body36 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-small) * 1px)",
      overflow: "hidden",
      borderRadius: "8px 0px 0px 8px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      borderRadius: "8px 0px 0px 8px",
      backgroundColor: "var(--patch-color-surface-primary-highest)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-4) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-4) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
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
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0
    }
  }, props.value)));
  const __body37 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-small) * 1px)",
      overflow: "hidden",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      backgroundColor: "var(--patch-color-surface-primary-highest)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-4) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-4) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
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
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0
    }
  }, props.value)));
  const __body38 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-small) * 1px)",
      overflow: "hidden",
      borderRadius: "0px 8px 8px 0px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      borderRadius: "0px 8px 8px 0px",
      backgroundColor: "var(--patch-color-surface-primary-highest)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-4) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-4) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
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
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0
    }
  }, props.value)));
  const __body39 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-small) * 1px)",
      overflow: "hidden",
      borderRadius: "8px 0px 0px 8px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      borderRadius: "8px 0px 0px 8px",
      backgroundColor: "var(--patch-color-surface-primary-highest)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-4) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-4) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(18,18,18)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-accent-primary)",
      flexShrink: 0
    }
  }, props.value)));
  const __body40 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-small) * 1px)",
      overflow: "hidden",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      backgroundColor: "var(--patch-color-surface-primary-highest)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-4) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-4) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(18,18,18)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-accent-primary)",
      flexShrink: 0
    }
  }, props.value)));
  const __body41 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-small) * 1px)",
      overflow: "hidden",
      borderRadius: "0px 8px 8px 0px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      borderRadius: "0px 8px 8px 0px",
      backgroundColor: "var(--patch-color-surface-primary-highest)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-4) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-4) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(18,18,18)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-accent-primary)",
      flexShrink: 0
    }
  }, props.value)));
  const __body42 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-small) * 1px)",
      overflow: "hidden",
      borderRadius: "8px 0px 0px 8px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      borderRadius: "8px 0px 0px 8px",
      backgroundColor: "var(--patch-color-surface-accent-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-4) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-4) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(18,18,18)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-accent-primary)",
      flexShrink: 0
    }
  }, props.value)));
  const __body43 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-small) * 1px)",
      overflow: "hidden",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      backgroundColor: "var(--patch-color-surface-accent-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-4) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-4) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(18,18,18)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-accent-primary)",
      flexShrink: 0
    }
  }, props.value)));
  const __body44 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: "calc(var(--patch-object-small) * 1px)",
      overflow: "hidden",
      borderRadius: "0px 8px 8px 0px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      borderRadius: "0px 8px 8px 0px",
      backgroundColor: "var(--patch-color-surface-accent-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-4) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-4) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.icon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(18,18,18)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconPlaceholder9, {
    size: "24"
  })), props.label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--patch-color-text-accent-primary)",
      flexShrink: 0
    }
  }, props.value)));
  const __impls = {
    // figma: Size=XL, Position=Lead, State=at rest
    "size=xl|position=lead|state=at rest": __body0,
    // figma: Size=XL, Position=Middle, State=at rest
    "size=xl|position=middle|state=at rest": __body1,
    // figma: Size=XL, Position=Trail, State=at rest
    "size=xl|position=trail|state=at rest": __body2,
    // figma: Size=XL, Position=Trail, State=is disabled
    "size=xl|position=trail|state=is disabled": __body3,
    // figma: Size=XL, Position=Trail, State=on hover
    "size=xl|position=trail|state=on hover": __body4,
    // figma: Size=XL, Position=Trail, State=is active
    "size=xl|position=trail|state=is active": __body5,
    // figma: Size=XL, Position=Trail, State=is selected
    "size=xl|position=trail|state=is selected": __body6,
    // figma: Size=XL, Position=Middle, State=is disabled
    "size=xl|position=middle|state=is disabled": __body7,
    // figma: Size=XL, Position=Middle, State=on hover
    "size=xl|position=middle|state=on hover": __body8,
    // figma: Size=XL, Position=Middle, State=is active
    "size=xl|position=middle|state=is active": __body9,
    // figma: Size=XL, Position=Middle, State=is selected
    "size=xl|position=middle|state=is selected": __body10,
    // figma: Size=XL, Position=Lead, State=is disabled
    "size=xl|position=lead|state=is disabled": __body11,
    // figma: Size=XL, Position=Lead, State=on hover
    "size=xl|position=lead|state=on hover": __body12,
    // figma: Size=XL, Position=Lead, State=is active
    "size=xl|position=lead|state=is active": __body13,
    // figma: Size=XL, Position=Lead, State=is selected
    "size=xl|position=lead|state=is selected": __body14,
    // figma: Size=M, Position=Lead, State=at rest
    "size=m|position=lead|state=at rest": __body15,
    // figma: Size=M, Position=Middle, State=at rest
    "size=m|position=middle|state=at rest": __body16,
    // figma: Size=M, Position=Trail, State=at rest
    "size=m|position=trail|state=at rest": __body17,
    // figma: Size=M, Position=Lead, State=is disabled
    "size=m|position=lead|state=is disabled": __body18,
    // figma: Size=M, Position=Middle, State=is disabled
    "size=m|position=middle|state=is disabled": __body19,
    // figma: Size=M, Position=Trail, State=is disabled
    "size=m|position=trail|state=is disabled": __body20,
    // figma: Size=M, Position=Lead, State=on hover
    "size=m|position=lead|state=on hover": __body21,
    // figma: Size=M, Position=Middle, State=on hover
    "size=m|position=middle|state=on hover": __body22,
    // figma: Size=M, Position=Trail, State=on hover
    "size=m|position=trail|state=on hover": __body23,
    // figma: Size=M, Position=Lead, State=is active
    "size=m|position=lead|state=is active": __body24,
    // figma: Size=M, Position=Middle, State=is active
    "size=m|position=middle|state=is active": __body25,
    // figma: Size=M, Position=Trail, State=is active
    "size=m|position=trail|state=is active": __body26,
    // figma: Size=M, Position=Lead, State=is selected
    "size=m|position=lead|state=is selected": __body27,
    // figma: Size=M, Position=Middle, State=is selected
    "size=m|position=middle|state=is selected": __body28,
    // figma: Size=M, Position=Trail, State=is selected
    "size=m|position=trail|state=is selected": __body29,
    // figma: Size=S, Position=Lead, State=at rest
    "size=s|position=lead|state=at rest": __body30,
    // figma: Size=S, Position=Middle, State=at rest
    "size=s|position=middle|state=at rest": __body31,
    // figma: Size=S, Position=Trail, State=at rest
    "size=s|position=trail|state=at rest": __body32,
    // figma: Size=S, Position=Lead, State=is disabled
    "size=s|position=lead|state=is disabled": __body33,
    // figma: Size=S, Position=Middle, State=is disabled
    "size=s|position=middle|state=is disabled": __body34,
    // figma: Size=S, Position=Trail, State=is disabled
    "size=s|position=trail|state=is disabled": __body35,
    // figma: Size=S, Position=Lead, State=on hover
    "size=s|position=lead|state=on hover": __body36,
    // figma: Size=S, Position=Middle, State=on hover
    "size=s|position=middle|state=on hover": __body37,
    // figma: Size=S, Position=Trail, State=on hover
    "size=s|position=trail|state=on hover": __body38,
    // figma: Size=S, Position=Lead, State=is active
    "size=s|position=lead|state=is active": __body39,
    // figma: Size=S, Position=Middle, State=is active
    "size=s|position=middle|state=is active": __body40,
    // figma: Size=S, Position=Trail, State=is active
    "size=s|position=trail|state=is active": __body41,
    // figma: Size=S, Position=Lead, State=is selected
    "size=s|position=lead|state=is selected": __body42,
    // figma: Size=S, Position=Middle, State=is selected
    "size=s|position=middle|state=is selected": __body43,
    // figma: Size=S, Position=Trail, State=is selected
    "size=s|position=trail|state=is selected": __body44
  };
  return (__impls[__vkey_DesktopButtonsSegmentedButton(props)] ?? __body30)();
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

// figma node: 2843:2078 Segmented Button
function SegmentedButton(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1576,
      height: 1136,
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
      width: 728,
      height: 92
    },
    text1: "Segmented Button",
    text2: "A segmented button or control is a group of conjoined buttons, representing related actions."
  }), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 40,
      top: 172,
      width: 472,
      height: 132
    },
    subheading: false,
    text1: "Usage",
    text3: "Use for a group of two or more related actions or options, arranged horizontally. Also see Icon Button Group.\niOS also uses this as a navigation tab component. Also see Tab."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1064,
      top: 172,
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
      color: "rgb(36,36,37)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "• ", "The visibility of icon and label can be varied by platform, but—", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(43,43,43)"
    }
  }, "for reasons of spacing and balance—a horizontal"), " layout cannot be wrapped to a ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(43,43,43)"
    }
  }, "vertical"), " layout (if available), and vice versa.", "\n", "• ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(43,43,43)"
    }
  }, "Desktop and "), "Android allow for icon-only instances, whereas the iOS component doesn’t accommodate icons at all.", "\n", "• ", "All segments within a group should ideally be of the same width, assuming space and content can accommodate this.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1064,
      top: 656,
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
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "• ", "Due to the way the properties are structured, swapped icons will not commute if a smaller button size is later switched to something larger (and vice versa).", "\n", "• ", "The iOS component includes a boolean trailing divider, to avoid—with manual intervention—a selected segment clashing with adjacent unselected segments.", "\n", "• ", "Multiple elements in a Segmented Button may be presented in a selected state, although the need for multi-select remains TBD.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40,
      top: 344,
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
      color: "rgb(36,36,37)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "• ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(43,43,43)"
    }
  }, "May behave similarly to a tab (in that the visible page content may change depending on the active selection), or represent a selected item from the available options."), "\n", "• ", "Only one segment may be selected at a time. See Notes 👉", "\n", "• ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(43,43,43)"
    }
  }, "A segment should not spawn a popover or menu-like component"), ".")), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 552,
      top: 172,
      width: 472,
      height: 272
    },
    sectionHeading: true,
    subheading: false,
    text1: "Properties",
    text2: "Component",
    text3: "Size: available size options, corresponding to similar sizes in other components. (Does not apply to Android.)\nPosition: shape options appropriate to different positions in the row of buttons. (Does not apply to iOS.)\nState: allows different states of user interaction to be represented.\nIcon (or Lead on Android): an optional icon preceding the button text.\nLabel: optional string representing the available action. See Copy 👉\nType: layout configurations (Android only).\nTrailing divider: optional separator between segments (iOS only)."
  }), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 1064,
      top: 424,
      width: 472,
      height: 192
    },
    subheading: false,
    text1: "Copy",
    text3: "In most cases, buttons describe actions – use verbs.\nChoose words carefully: avoid vague language and actions that could have multiple meanings within the context.\nTry to limit the button copy to one word; only use more than one word if it’s absolutely necessary for clarity.\nUse Title Case."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 554,
      top: 860,
      width: 360,
      display: "flex",
      flexDirection: "row",
      gap: -1,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "calc(var(--patch-object-medium) * 1px)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "9999px 0px 0px 9999px",
      boxShadow: "inset 0 0 0 1px var(--patch-color-border-primary)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 40,
      overflow: "hidden",
      borderRadius: "9999px 0px 0px 9999px",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
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
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0
    }
  }, "Shared")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "calc(var(--patch-object-medium) * 1px)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      boxShadow: "inset 0 0 0 1px var(--patch-color-border-primary)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 40,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
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
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0
    }
  }, "Bookmarked")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "calc(var(--patch-object-medium) * 1px)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "0px 9999px 9999px 0px",
      boxShadow: "inset 0 0 0 1px var(--patch-color-border-primary)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 40,
      overflow: "hidden",
      borderRadius: "0px 9999px 9999px 0px",
      backgroundColor: "var(--patch-color-surface-accent-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(IconCheckmark2, {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(18,18,18)"
    },
    size: "24"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--patch-color-text-on-accent-primary-surface)",
      flexShrink: 0
    }
  }, "All"))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 554,
      top: 828,
      width: 38,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Android"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 40,
      top: 676,
      width: 81,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Desktop, Size: XL"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 40,
      top: 828,
      width: 78,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Desktop, Size: M"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 40,
      top: 948,
      width: 75,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Desktop, Size: S"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 554,
      top: 948,
      width: 54,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "iOS, Size: S"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 554,
      top: 980,
      width: 375,
      overflow: "hidden",
      borderRadius: 9,
      backgroundColor: "var(--patch-color-surface-primary)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 7,
      backgroundColor: "var(--patch-color-surface-accent-primary)",
      boxShadow: "inset 0 0 0 1px var(--patch-color-border-accent-primary)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 12px 4px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "var(--patch-color-text-on-accent-primary-surface)",
      flexGrow: 1
    }
  }, "Followers")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      padding: "4px 12px 4px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-4) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-4) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 12px 0px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-0) * 1px)",
      paddingTop: "calc(var(--patch-spacer-0) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-0) * 1px)",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "var(--patch-color-text-primary)",
      flexGrow: 1
    }
  }, "Following")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40,
      top: 708,
      width: 320,
      display: "flex",
      flexDirection: "row",
      gap: -1,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "8px 0px 0px 8px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
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
      borderRadius: "8px 0px 0px 8px",
      backgroundColor: "var(--patch-color-surface-accent-primary)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
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
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25.931,
    height: 25.860,
    viewBox: "0 0 25.931 25.860",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.069,
      top: 3,
      width: 25.931,
      height: 25.86,
      color: "var(--patch-color-text-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.138 21.736 C -0.05 21.54 -0.045 21.229 0.149 21.039 L 15.397 6.099 C 15.594 5.906 15.911 5.908 16.106 6.103 L 19.778 9.773 C 19.971 9.966 19.972 10.279 19.779 10.473 L 4.659 25.711 C 4.46 25.912 4.133 25.909 3.937 25.705 L 0.138 21.736 Z M 4.32 23.212 L 12.991 14.474 L 11.366 12.849 L 2.611 21.427 L 4.32 23.212 Z M 14.4 13.054 L 17.304 10.128 L 15.739 8.564 L 12.795 11.449 L 14.4 13.054 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 16.931 0 C 17.484 0 17.931 0.448 17.931 1 L 17.931 3 C 17.931 3.552 17.484 4 16.931 4 C 16.379 4 15.931 3.552 15.931 3 L 15.931 1 C 15.931 0.448 16.379 0 16.931 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.725 2.208 C 10.116 1.817 10.749 1.817 11.139 2.208 L 12.639 3.707 C 13.029 4.098 13.029 4.731 12.639 5.121 C 12.248 5.512 11.615 5.512 11.224 5.121 L 9.725 3.622 C 9.335 3.232 9.335 2.599 9.725 2.208 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 23.639 2.293 C 24.029 2.683 24.029 3.317 23.639 3.707 L 22.224 5.121 C 21.834 5.512 21.201 5.512 20.81 5.121 C 20.42 4.731 20.42 4.098 20.81 3.707 L 22.224 2.293 C 22.615 1.902 23.248 1.902 23.639 2.293 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 20.81 13.293 C 21.201 12.902 21.834 12.902 22.224 13.293 L 23.724 14.792 C 24.114 15.182 24.114 15.816 23.724 16.206 C 23.333 16.597 22.7 16.597 22.309 16.206 L 20.81 14.707 C 20.42 14.317 20.42 13.683 20.81 13.293 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 21.931 9 C 21.931 8.448 22.379 8 22.931 8 L 24.931 8 C 25.484 8 25.931 8.448 25.931 9 C 25.931 9.552 25.484 10 24.931 10 L 22.931 10 C 22.379 10 21.931 9.552 21.931 9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "var(--patch-color-text-accent-primary)",
      flexShrink: 0
    }
  }, "Select"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
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
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
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
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24.993,
    height: 24.935,
    viewBox: "0 0 24.993 24.935",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.976,
      top: 3.065,
      width: 24.993,
      height: 24.935,
      color: "var(--patch-color-text-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.03 0.586 L 24.371 7.927 C 25.156 8.711 25.152 9.984 24.363 10.764 L 12.043 22.935 L 23.993 22.935 C 24.546 22.935 24.993 23.382 24.993 23.935 C 24.993 24.487 24.546 24.935 23.993 24.935 L 9.025 24.935 C 8.833 24.935 8.655 24.881 8.503 24.788 C 8.248 24.691 8.009 24.541 7.803 24.336 L 0.589 17.158 C -0.193 16.38 -0.197 15.116 0.579 14.332 L 14.195 0.592 C 14.975 -0.195 16.247 -0.198 17.03 0.586 Z M 22.957 9.341 L 15.616 2 L 9.016 8.661 L 16.286 15.931 L 22.957 9.341 Z M 14.863 17.337 L 7.608 10.081 L 2 15.74 L 9.214 22.918 L 14.863 17.337 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0
    }
  }, "Erase"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "0px 8px 8px 0px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
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
      borderRadius: "0px 8px 8px 0px",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--patch-spacer-12) * 1px)",
      paddingTop: "calc(var(--patch-spacer-8) * 1px)",
      paddingRight: "calc(var(--patch-spacer-12) * 1px)",
      paddingBottom: "calc(var(--patch-spacer-8) * 1px)",
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
      height: 26,
      color: "var(--patch-color-text-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.978 0 C 15.337 0 17.175 2.046 16.924 4.392 L 16.427 9.016 L 18.976 9.016 C 20.081 9.016 20.976 9.911 20.976 11.016 L 20.976 12.016 C 20.976 12.568 20.529 13.016 19.976 13.016 C 19.424 13.016 18.976 12.568 18.976 12.016 L 18.976 11.016 L 15.404 11.016 C 14.762 11.016 14.261 10.458 14.33 9.82 L 14.935 4.179 C 15.06 3.015 14.148 2 12.978 2 C 11.8 2 10.886 3.027 11.022 4.197 L 11.676 9.811 C 11.751 10.452 11.25 11.016 10.604 11.016 L 6.99 11.016 L 6.99 13.987 L 11 13.987 C 11.552 13.987 12 14.434 12 14.987 C 12 15.539 11.552 15.987 11 15.987 L 6.837 15.987 L 6.2 19.82 C 6.065 20.634 5.737 21.376 5.268 22 L 11.969 22 C 12.521 22 12.969 22.448 12.969 23 C 12.969 23.552 12.521 24 11.969 24 L 1.406 24 C 1.392 24 1.378 24 1.363 23.999 C 1.332 24 1.3 24 1.268 24 L 1 24 C 0.448 24 0 23.552 0 23 C 0 22.448 0.448 22 1 22 L 1.268 22 C 2.735 22 3.987 20.939 4.227 19.492 L 4.99 14.904 L 4.99 11.016 C 4.99 9.911 5.885 9.016 6.99 9.016 L 9.57 9.016 L 9.035 4.428 C 8.761 2.07 10.604 0 12.978 0 Z M 18.375 18.459 C 18.889 18.255 19.47 18.506 19.673 19.02 C 19.877 19.533 19.626 20.115 19.112 20.318 L 16.817 21.228 C 16.354 21.412 15.827 21.227 15.58 20.794 L 14.318 18.584 C 14.044 18.105 14.211 17.494 14.691 17.22 C 15.17 16.946 15.781 17.113 16.055 17.593 L 16.178 17.808 C 17.066 16.14 18.766 15 20.761 15 C 23.747 15 26 17.534 26 20.5 C 26 23.472 23.702 26 20.761 26 C 19.298 26 17.991 25.375 17.039 24.365 C 16.66 23.963 16.679 23.33 17.081 22.951 C 17.483 22.572 18.116 22.591 18.495 22.993 C 19.098 23.634 19.891 24 20.761 24 C 22.487 24 24 22.482 24 20.5 C 24 18.512 22.52 17 20.761 17 C 19.629 17 18.608 17.619 18.026 18.597 L 18.375 18.459 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "var(--patch-color-text-primary)",
      flexShrink: 0
    }
  }, "Restore")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40,
      top: 980,
      display: "flex",
      flexDirection: "row",
      gap: -1,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: "calc(var(--patch-object-small) * 1px)",
      overflow: "hidden",
      borderRadius: "8px 0px 0px 8px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      borderRadius: "8px 0px 0px 8px",
      backgroundColor: "var(--patch-color-surface-accent-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
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
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 6,
      width: 12,
      height: 12,
      color: "var(--patch-color-text-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.409 2.393 L 3.711 7.376 L 7.089 7.376 L 5.409 2.393 Z M 0 12 L 0 11.154 L 1.514 10.939 L 5.372 0 L 6.886 0 L 10.745 11.028 L 12 11.172 L 12 12 L 6.665 12 L 6.665 11.172 L 8.289 10.975 L 7.403 8.312 L 3.378 8.312 L 2.492 10.921 L 4.098 11.154 L 4.098 12 L 0 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: "calc(var(--patch-object-small) * 1px)",
      overflow: "hidden",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
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
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 12,
    viewBox: "0 0 10 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 6,
      width: 10,
      height: 12,
      color: "var(--patch-color-text-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.639 6.21 L 4 6.21 C 4 7.062 4 7.878 4 8.658 C 4.011 9.425 3.989 10.245 4 11 L 4.639 11 C 5.423 11 6.028 10.746 6.454 10.356 C 6.891 9.967 7.109 9.382 7.109 8.603 C 7.109 7.775 6.902 7.172 6.487 6.795 C 6.084 6.405 5.468 6.21 4.639 6.21 Z M 4.689 1.059 L 4 1 C 3.989 1.682 4.011 2.294 4 3 C 4 3.694 4 4.544 4 5.25 L 4.538 5.242 C 5.255 5.242 5.782 5.059 6.118 4.694 C 6.454 4.317 6.622 3.769 6.622 3.05 C 6.622 1.723 5.978 1.059 4.689 1.059 Z M 0 1 L 0 0 L 5.429 0 C 6.381 0 7.143 0.128 7.714 0.384 C 8.286 0.627 8.7 0.962 8.958 1.388 C 9.216 1.814 9.345 2.295 9.345 2.831 C 9.345 3.245 9.261 3.635 9.092 4 C 8.924 4.353 8.633 4.67 8.218 4.95 C 7.804 5.218 7.227 5.425 6.487 5.571 C 7.742 5.729 8.639 6.076 9.176 6.612 C 9.725 7.135 10 7.811 10 8.639 C 10 9.017 9.922 9.406 9.765 9.808 C 9.608 10.198 9.339 10.557 8.958 10.886 C 8.577 11.215 8.045 11.482 7.361 11.689 C 6.689 11.896 5.832 12 4.79 12 L 0 12 L 0 11 L 1.25 10.868 C 1.272 10.113 1.25 9.352 1.25 8.584 C 1.25 7.817 1.25 7.044 1.25 6.265 L 1.25 5.735 C 1.25 4.98 1.25 4.219 1.25 3.452 C 1.25 2.673 1.272 1.9 1.25 1.132 L 0 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: "calc(var(--patch-object-small) * 1px)",
      overflow: "hidden",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
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
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 12,
    viewBox: "0 0 8 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 8,
      top: 6,
      width: 8,
      height: 12,
      color: "var(--patch-color-text-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.042 0.986 L 2.246 0 L 8 0 L 7.796 0.986 L 6.311 1.151 L 5.327 6.32 C 5.179 7.075 5.036 7.83 4.9 8.584 C 4.764 9.339 4.628 10.094 4.492 10.849 L 5.94 11.014 L 5.735 12 L 0 12 L 0.204 11.014 L 1.671 10.868 L 2.673 5.662 C 2.809 4.907 2.945 4.152 3.081 3.397 C 3.23 2.642 3.366 1.887 3.49 1.132 L 2.042 0.986 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: "calc(var(--patch-object-small) * 1px)",
      overflow: "hidden",
      borderRadius: "0px 8px 8px 0px",
      borderTop: "1px solid var(--patch-color-border-primary)",
      borderRight: "1px solid var(--patch-color-border-primary)",
      borderBottom: "1px solid var(--patch-color-border-primary)",
      borderLeft: "1px solid var(--patch-color-border-primary)",
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
      borderRadius: "0px 8px 8px 0px",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--patch-spacer-4) * 1px)",
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
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
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 12,
    viewBox: "0 0 18 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 6,
      width: 18,
      height: 12,
      color: "var(--patch-color-text-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.9 1 L 2.1 0 L 6.788 0 C 7.736 0 8.479 0.134 9.016 0.402 C 9.564 0.658 9.953 0.992 10.181 1.406 C 10.421 1.82 10.541 2.265 10.541 2.74 C 10.541 3.409 10.313 4.018 9.856 4.566 C 9.399 5.102 8.673 5.461 7.679 5.644 C 8.605 5.839 9.279 6.216 9.702 6.776 C 10.136 7.324 10.353 7.957 10.353 8.676 C 10.353 9.212 10.199 9.735 9.89 10.247 C 9.582 10.758 9.062 11.178 8.33 11.507 C 7.599 11.836 6.605 12 5.348 12 L 0 12 L 0.2 11 L 1.543 10.868 L 2.468 5.662 C 2.594 4.907 2.72 4.152 2.845 3.397 C 2.982 2.642 3.108 1.887 3.222 1.132 L 1.9 1 Z M 4.919 6.32 C 4.782 7.099 4.645 7.878 4.508 8.658 C 4.371 9.425 4.239 10.198 4.114 10.977 L 4.988 10.977 C 5.891 10.977 6.582 10.734 7.062 10.247 C 7.542 9.76 7.782 9.114 7.782 8.311 C 7.782 7.629 7.605 7.105 7.25 6.74 C 6.896 6.374 6.411 6.192 5.794 6.192 L 4.936 6.192 L 4.919 6.32 Z M 6.222 1.023 L 5.845 1.023 L 5.108 5.205 L 5.605 5.205 C 6.382 5.205 6.976 5.005 7.388 4.603 C 7.799 4.189 8.005 3.592 8.005 2.813 C 8.005 2.265 7.856 1.833 7.559 1.516 C 7.273 1.187 6.828 1.023 6.222 1.023 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12.498 0.986 L 12.686 0 L 18 0 L 17.811 0.986 L 16.44 1.151 L 15.532 6.32 C 15.395 7.075 15.263 7.83 15.138 8.584 C 15.012 9.339 14.886 10.094 14.76 10.849 L 16.097 11.014 L 15.909 12 L 10.612 12 L 10.801 11.014 L 12.155 10.868 L 13.081 5.662 C 13.206 4.907 13.332 4.152 13.458 3.397 C 13.595 2.642 13.721 1.887 13.835 1.132 L 12.498 0.986 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40,
      top: 860,
      width: 360,
      display: "flex",
      flexDirection: "row",
      gap: -1,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(DesktopButtonsSegmentedButton, {
    style: {
      position: "relative",
      height: 40,
      flexGrow: 1,
      width: "auto"
    },
    value: "Shared",
    label: true,
    icon3: false,
    size: "m",
    position: "lead",
    state: "at rest"
  }), /*#__PURE__*/React.createElement(DesktopButtonsSegmentedButton, {
    style: {
      position: "relative",
      height: 40,
      flexGrow: 1,
      width: "auto"
    },
    value: "Bookmarked",
    icon3: false,
    size: "m",
    position: "middle",
    state: "at rest"
  }), /*#__PURE__*/React.createElement(DesktopButtonsSegmentedButton, {
    style: {
      position: "relative",
      height: 40,
      flexGrow: 1,
      width: "auto"
    },
    value: "All",
    icon3: false,
    size: "m",
    position: "trail",
    state: "is selected"
  })), /*#__PURE__*/React.createElement(TextBlock, {
    style: {
      position: "absolute",
      left: 552,
      top: 484,
      width: 472,
      height: 56
    },
    subheading: false,
    content: false,
    text1: "Anatomy"
  }), /*#__PURE__*/React.createElement(DesktopButtonsSegmentedButton, {
    style: {
      position: "absolute",
      left: 752,
      top: 577
    },
    size: "xl",
    position: "middle",
    state: "at rest"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 758,
      top: 540,
      width: 59,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Icon or Lead"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 707,
      top: 676,
      width: 161,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Desktop, Size: XL, Position: Middle"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 692,
      top: 623,
      width: 26,
      height: 16,
      fontFamily: "Graphik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "right",
      lineHeight: "16px",
      color: "var(--warm)"
    }
  }, "Label"), /*#__PURE__*/React.createElement("svg", {
    width: 32,
    height: 1,
    viewBox: "0 -0.500 32 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,787,556)",
      transformOrigin: "0 0",
      width: 32,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.333 0 C 29.333 1.473 30.527 2.667 32 2.667 C 33.473 2.667 34.667 1.473 34.667 0 C 34.667 -1.473 33.473 -2.667 32 -2.667 C 30.527 -2.667 29.333 -1.473 29.333 0 Z M 0 0.5 L 32 0.5 L 32 -0.5 L 0 -0.5 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 44,
    height: 1,
    viewBox: "0 -0.500 44 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 720,
      top: 631,
      width: 44,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 41.333 0 C 41.333 1.473 42.527 2.667 44 2.667 C 45.473 2.667 46.667 1.473 46.667 0 C 46.667 -1.473 45.473 -2.667 44 -2.667 C 42.527 -2.667 41.333 -1.473 41.333 0 Z M 0 0.5 L 44 0.5 L 44 -0.5 L 0 -0.5 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement(StatusBlock, {
    style: {
      position: "absolute",
      left: 976,
      top: 40,
      width: 560
    },
    date: "2025-07-28",
    orientation: "default"
  }));
}

// Globals for scripts loaded after this file.
window.IconPlaceholder9 = IconPlaceholder9;
window.DesktopButtonsButton = DesktopButtonsButton;
window.StatusBadge = StatusBadge;
window.StatusBlock = StatusBlock;
window.TextBlock = TextBlock;
window.TitleBlock = TitleBlock;
window.Button2 = Button2;
window.DesktopButtonsFAB = DesktopButtonsFAB;
window.IconChevronRight6 = IconChevronRight6;
window.IconDownload = IconDownload;
window.IconPauseHardware = IconPauseHardware;
window.IconSave = IconSave;
window.FAB = FAB;
window.DesktopBadgesStatusIndicator = DesktopBadgesStatusIndicator;
window.DesktopButtonsIconButton3 = DesktopButtonsIconButton3;
window.IconButton2 = IconButton2;
window.DesktopButtonsBlocksLinkButton3 = DesktopButtonsBlocksLinkButton3;
window.DesktopButtonsLinkButton2 = DesktopButtonsLinkButton2;
window.IconBoundary24px4 = IconBoundary24px4;
window.LinkButton = LinkButton;
window.DesktopButtonsSegmentedButton = DesktopButtonsSegmentedButton;
window.IconCheckmark2 = IconCheckmark2;
window.SegmentedButton = SegmentedButton;