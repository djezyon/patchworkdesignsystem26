// Components.d.ts — the complete catalog of the 96 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.AndroidChip) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Android / Chip" (node 5193:44771)
export interface AndroidChipProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "at rest" | "is active" | "is selected";
  value?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: ".Android / Forms / Blocks / Slider / Handle" (node 5193:44922)
export interface AndroidFormsBlocksSliderHandleProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: ".Android / Forms / Blocks / Slider / Track Dot" (node 5193:44923)
export interface AndroidFormsBlocksSliderTrackProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: ".Android / Forms / Blocks / Slider / Track Right" (node 5193:44925)
export interface AndroidFormsBlocksSliderTrack2Props {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: ".Android / Forms / Blocks / Slider / Track Left" (node 5193:44927)
export interface AndroidFormsBlocksSliderTrack3Props {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Android / Forms / Checkbox" (node 5193:37073)
export interface AndroidFormsCheckbox2Props {
  className?: string;
  style?: React.CSSProperties;
  condition?: "indeterminate" | "selected" | "unselected";
  disabled?: boolean;
}

// figma layer: "Android / Forms / Radio Button" (node 5193:37098)
export interface AndroidFormsRadioButton2Props {
  className?: string;
  style?: React.CSSProperties;
  selected?: boolean;
  disabled?: boolean;
}

// figma layer: "Android / Forms / Slider Centered" (node 5193:45093)
export interface AndroidFormsSliderCenteredProps {
  className?: string;
  style?: React.CSSProperties;
  value?: "-50" | "0" | "+50";
  disabled?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Android / Forms / Slider Continuous" (node 5442:202)
export interface AndroidFormsSliderContinuousProps {
  className?: string;
  style?: React.CSSProperties;
  value?: "0" | "25" | "50" | "75" | "100";
  disabled?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Android / Forms / Switch" (node 5193:37120)
export interface AndroidFormsSwitch2Props {
  className?: string;
  style?: React.CSSProperties;
  selected?: boolean;
  disabled?: boolean;
}

// figma layer: ".Android / Menus / Blocks / Lead Edge" (node 5193:25056)
export interface AndroidMenusBlocksLeadEdgeProps {
  className?: string;
  style?: React.CSSProperties;
  options?: "icon" | "indent";
  icon?: React.ReactNode;
}

// figma layer: ".Android / Menus / Blocks / Trail Edge" (node 5193:25060)
export interface AndroidMenusBlocksTrailEdgeProps {
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
}

// figma layer: "arrow" (node 2306:2915)
export interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: ".chevron" (node 1354:3593)
export interface ChevronProps {
  className?: string;
  style?: React.CSSProperties;
  chevron?: "dropdown" | "flyout";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Chip (aka Pill)" (node 2845:7964)
export interface ChipAkaPillProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Controls (aka Toggles)" (node 2958:2180)
export interface ControlsAkaTogglesProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: ".Desktop / Blocks / Forms / Slider Handle" (node 5419:2249)
export interface DesktopBlocksFormsSliderHandleProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "at rest" | "is active" | "is disabled" | "on hover";
}

// figma layer: ".Desktop / Blocks / Forms / Slider Handle" (node 5703:935)
export interface DesktopBlocksFormsSliderHandle2Props {
  className?: string;
  style?: React.CSSProperties;
  state?: "at rest" | "is active" | "is disabled" | "on hover";
}

// figma layer: ".Desktop / Blocks / Forms / Slider Track" (node 5418:2213)
export interface DesktopBlocksFormsSliderTrackProps {
  className?: string;
  style?: React.CSSProperties;
  tickmark?: boolean;
  type?: "primary" | "secondary";
}

// figma layer: ".Desktop / Blocks / Forms / Slider Track Highlight" (node 5418:2242)
export interface DesktopBlocksFormsSliderTrack2Props {
  className?: string;
  style?: React.CSSProperties;
  highlight?: boolean;
}

// figma layer: "Desktop / Canvas / Panels / Curve" (node 6060:35982)
export interface DesktopCanvasPanelsCurveProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Desktop / Chip" (node 5703:8597)
export interface DesktopChipProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "s" | "m";
  state?: "at rest" | "is selected" | "on hover";
  value?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Desktop / Forms / Checkbox" (node 5703:2980)
export interface DesktopFormsCheckboxProps {
  className?: string;
  style?: React.CSSProperties;
  condition?: "indeterminate" | "selected" | "unselected";
  disabled?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Desktop / Forms / Radio Button" (node 5703:2991)
export interface DesktopFormsRadioButtonProps {
  className?: string;
  style?: React.CSSProperties;
  selected?: boolean;
  disabled?: boolean;
}

// figma layer: "Desktop / Forms / Select" (node 5703:4783)
export interface DesktopFormsSelectProps {
  className?: string;
  style?: React.CSSProperties;
  label?: boolean;
  support?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Desktop / Forms / Slider" (node 5703:8405)
export interface DesktopFormsSliderProps {
  className?: string;
  style?: React.CSSProperties;
  approxValue?: "0" | "10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90" | "100";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Desktop / Forms / Slider Centered" (node 5703:948)
export interface DesktopFormsSliderCenteredProps {
  className?: string;
  style?: React.CSSProperties;
  approxValue?: "-5" | "-4" | "-3" | "-2" | "-1" | "0" | "+1" | "+2" | "+3" | "+4" | "+5";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Desktop / Forms / Switch" (node 5703:2998)
export interface DesktopFormsSwitchProps {
  className?: string;
  style?: React.CSSProperties;
  selected?: boolean;
  disabled?: boolean;
}

// figma layer: ".Desktop / Inputs / Blocks / Label" (node 5193:19723)
export interface DesktopInputsBlocksLabelProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
}

// figma layer: ".Desktop / Inputs / Blocks / Supporting Text" (node 5193:19760)
export interface DesktopInputsBlocksSupportingText2Props {
  className?: string;
  style?: React.CSSProperties;
  text?: string;
  state?: "at rest" | "has error" | "is disabled";
}

// figma layer: ".Desktop / Menus / Blocks / Lead Edge" (node 5193:19140)
export interface DesktopMenusBlocksLeadEdge3Props {
  className?: string;
  style?: React.CSSProperties;
  options?: "icon" | "indent" | "indented icon";
  icon?: React.ReactNode;
}

// figma layer: ".Desktop / Menus / Blocks / Row Content" (node 5193:19146)
export interface DesktopMenusBlocksRowContentProps {
  className?: string;
  style?: React.CSSProperties;
  text?: string;
}

// figma layer: ".Desktop / Menus / Blocks / Trail Edge" (node 5193:19151)
export interface DesktopMenusBlocksTrailEdge5Props {
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  options?: "badge" | "icon" | "shortcut" | "submenu";
  shortcut?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: ".Desktop / Menus / Blocks / Trail Edge" (node 5879:210)
export interface DesktopMenusBlocksTrailEdge6Props {
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  options?: "badge" | "icon" | "shortcut" | "submenu";
  shortcut?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Desktop / Menus / Menu Item" (node 5879:219)
export interface DesktopMenusMenuItem2Props {
  className?: string;
  style?: React.CSSProperties;
  lead?: boolean;
  state?: "at rest" | "on hover" | "is selected" | "is disabled";
  trail?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}

// figma layer: "Desktop / Popover" (node 5805:896)
export interface DesktopPopoverProps {
  className?: string;
  style?: React.CSSProperties;
  header?: string;
  body?: string;
  footer?: string;
}

// figma layer: ".Desktop / Select / Blocks / Content" (node 5193:19730)
export interface DesktopSelectBlocksContent2Props {
  className?: string;
  style?: React.CSSProperties;
  status?: "default" | "placeholder";
  value?: string;
  lead?: boolean;
  text?: boolean;
  iconOrSwatch?: React.ReactNode;
}

// figma layer: ".Desktop / Select / Blocks / Size" (node 5703:4778)
export interface DesktopSelectBlocksSizeProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "s" | "m";
}

// figma layer: ".Desktop / Select / Blocks / State" (node 5703:4767)
export interface DesktopSelectBlocksState2Props {
  className?: string;
  style?: React.CSSProperties;
  state?: "at rest" | "has error" | "is disabled" | "is selected" | "on hover";
}

// figma layer: "Desktop / Swatch" (node 5496:4150)
export interface DesktopSwatchProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "xs" | "s" | "m";
  swatchBook?: React.ReactNode;
}

// figma layer: "Desktop / Swatch Selectable" (node 5496:4160)
export interface DesktopSwatchSelectableProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "primary" | "secondary";
  state?: "at rest" | "on hover" | "is selected";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Desktop / Token" (node 5644:2268)
export interface DesktopTokenProps {
  className?: string;
  style?: React.CSSProperties;
  value?: string;
  state?: "at rest" | "is disabled" | "is selected" | "on hover";
}

// figma layer: ".f/forms/d/flyout/state" (node 2283:5711)
export interface FFormsDFlyoutStateProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "at rest" | "is disabled" | "is selected" | "on hover";
}

// figma layer: ".f/forms/d/select/content" (node 2259:2472)
export interface FFormsDSelectContentProps {
  className?: string;
  style?: React.CSSProperties;
  status?: "default" | "placeholder";
  value?: string;
  lead?: boolean;
  text?: boolean;
  iconOrSwatch?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: ".figma_details" (node 2842:2708)
export interface FigmaDetailsProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Content". */
  text1?: string;
}

// figma layer: "iOS / Chip" (node 5193:45138)
export interface IOSChipProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "at rest" | "is active" | "is selected";
  value?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "iOS / Forms / Checkbox" (node 5193:31938)
export interface IOSFormsCheckbox2Props {
  className?: string;
  style?: React.CSSProperties;
  condition?: "indeterminate" | "selected" | "unselected";
  disabled?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "iOS / Forms / Radio Button" (node 5193:37368)
export interface IOSFormsRadioButton2Props {
  className?: string;
  style?: React.CSSProperties;
  selected?: boolean;
  disabled?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "iOS / Forms / Slider" (node 5193:44644)
export interface IOSFormsSliderProps {
  className?: string;
  style?: React.CSSProperties;
  approxValue?: "0%" | "10%" | "20%" | "30%" | "40%" | "50%" | "60%" | "70%" | "80%" | "90%" | "100%";
  disabled?: boolean;
  highlight?: boolean;
}

// figma layer: "iOS / Forms / Switch" (node 5193:37388)
export interface IOSFormsSwitch2Props {
  className?: string;
  style?: React.CSSProperties;
  selected?: boolean;
  disabled?: boolean;
}

// figma layer: "icon/arrow-right" (node 5193:19148)
export interface IconArrowRight2Props {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "icon/.boundary-8px" (node 3415:2197)
export interface IconBoundary8pxProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "icon/camera" (node 5193:15537)
export interface IconCameraProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "24" | "32";
}

// figma layer: "icon/checkmark" (node 5193:16502)
export interface IconCheckmark2Props {
  className?: string;
  style?: React.CSSProperties;
  size?: "16" | "24" | "32";
}

// figma layer: "icon/chevron-down" (node 1265:5410)
export interface IconChevronDownProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "16" | "24" | "32";
}

// figma layer: "icon/chevron-down" (node 1810:6124)
export interface IconChevronDown2Props {
  className?: string;
  style?: React.CSSProperties;
  size?: "16" | "24" | "32";
}

// figma layer: "icon/chevron-down" (node 2509:2816)
export interface IconChevronDown3Props {
  className?: string;
  style?: React.CSSProperties;
  size?: "16" | "24" | "32";
}

// figma layer: "icon/chevron-down" (node 4021:9999)
export interface IconChevronDown4Props {
  className?: string;
  style?: React.CSSProperties;
  size?: "16" | "24" | "32";
}

// figma layer: "icon/chevron-down" (node 5193:16361)
export interface IconChevronDown5Props {
  className?: string;
  style?: React.CSSProperties;
  size?: "16" | "24" | "32";
}

// figma layer: "icon/chevron-right" (node 1265:5352)
export interface IconChevronRightProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "16" | "24" | "32";
}

// figma layer: "icon/chevron-right" (node 1810:6182)
export interface IconChevronRight2Props {
  className?: string;
  style?: React.CSSProperties;
  size?: "16" | "24" | "32";
}

// figma layer: "icon/chevron-right" (node 5193:14291)
export interface IconChevronRight6Props {
  className?: string;
  style?: React.CSSProperties;
  size?: "16" | "24" | "32";
}

// figma layer: "icon/detailed-instructions" (node 6393:1033)
export interface IconDetailedInstructionsProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "24" | "32";
}

// figma layer: "icon/engrave-fill" (node 5193:15716)
export interface IconEngraveFillProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "24" | "32";
}

// figma layer: "icon/help" (node 5193:5038)
export interface IconHelpProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "24" | "32";
}

// figma layer: "icon/image" (node 5193:33076)
export interface IconImageProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "24" | "32";
}

// figma layer: "icon/justify-center" (node 5193:6269)
export interface IconJustifyCenterProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "24" | "32";
}

// figma layer: "icon/minus" (node 5193:13409)
export interface IconMinus2Props {
  className?: string;
  style?: React.CSSProperties;
  size?: "16" | "24" | "32";
}

// figma layer: "icon/move-back" (node 5193:13969)
export interface IconMoveBackProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "24" | "32";
}

// figma layer: "icon/placeholder" (node 1810:7570)
export interface IconPlaceholder2Props {
  className?: string;
  style?: React.CSSProperties;
  size?: "16" | "24" | "32";
}

// figma layer: "icon/placeholder" (node 5188:8441)
export interface IconPlaceholder9Props {
  className?: string;
  style?: React.CSSProperties;
  size?: "16" | "24" | "32";
}

// figma layer: "icon/settings" (node 5193:5029)
export interface IconSettingsProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "24" | "32";
}

// figma layer: "icon/shapes" (node 5193:5448)
export interface IconShapesProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "24" | "32";
}

// figma layer: "icon/star-cluster" (node 6248:232)
export interface IconStarClusterProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "24" | "32";
}

// figma layer: "icon/template" (node 5193:5430)
export interface IconTemplateProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "24" | "32";
}

// figma layer: "icon/text" (node 5193:5439)
export interface IconTextProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "24" | "32";
}

// figma layer: "icon/textbox-bottom" (node 5193:5457)
export interface IconTextboxBottomProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "24" | "32";
}

// figma layer: "icon/textbox-top" (node 5193:5467)
export interface IconTextboxTopProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "24" | "32";
}

// figma layer: "icon/upload" (node 5193:16061)
export interface IconUploadProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "24" | "32";
}

// figma layer: "icon/x" (node 5192:16640)
export interface IconX4Props {
  className?: string;
  style?: React.CSSProperties;
  size?: "16" | "24" | "32";
}

// figma layer: "Menu" (node 2845:7796)
export interface MenuProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: ".Mobile / Forms / Blocks / Label" (node 5193:24743)
export interface MobileFormsBlocksLabelProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
}

// figma layer: ".Mobile / Forms / Blocks / Supporting Text" (node 5193:24778)
export interface MobileFormsBlocksSupportingTextProps {
  className?: string;
  style?: React.CSSProperties;
  text?: string;
  state?: "at rest" | "has error" | "is disabled";
}

// figma layer: "Mobile / Forms / Select" (node 5193:29466)
export interface MobileFormsSelectProps {
  className?: string;
  style?: React.CSSProperties;
  label?: boolean;
  support?: boolean;
}

// figma layer: ".Mobile / Select / Blocks / State" (node 5193:29445)
export interface MobileSelectBlocksStateProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "at rest" | "is active" | "has error" | "is disabled";
  value?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Select" (node 3419:4931)
export interface SelectProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Select List" (node 3419:4988)
export interface SelectListProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Slider" (node 2975:6747)
export interface SliderProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "status-badge" (node 3349:5053)
export interface StatusBadgeProps {
  className?: string;
  style?: React.CSSProperties;
  status?: "awaiting revision" | "deprecated" | "implemented" | "in progress" | "outdated" | "ready for dev" | "stable" | "status";
}

// figma layer: ".status_block" (node 3347:2335)
export interface StatusBlockProps {
  className?: string;
  style?: React.CSSProperties;
  orientation?: "old" | "default";
  date?: string;
  /** Text content; defaults to "Component". */
  text1?: string;
  /** Text content; defaults to "This page". */
  text2?: string;
  /** Text content; defaults to "Last update". */
  text3?: string;
  /** Text content; defaults to "This page". */
  text4?: string;
}

// figma layer: "Swatch" (node 2845:7607)
export interface SwatchProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Swatches / Generic" (node 5496:4093)
export interface SwatchesGenericProps {
  className?: string;
  style?: React.CSSProperties;
  hue?: "black" | "blue" | "blue dk" | "blue lt" | "brown" | "gray" | "gray dk" | "gray dk plus" | "gray lt" | "green" | "green dk" | "green lt" | "navy" | "navy dk" | "navy lt" | "orange" | "orange dk" | "orange lt" | "purple" | "purple dk" | "purple lt" | "red" | "red dk" | "red lt" | "white" | "yellow" | "yellow dk" | "yellow lt";
}

// figma layer: "Swatches / Material" (node 5496:19674)
export interface SwatchesMaterialProps {
  className?: string;
  style?: React.CSSProperties;
  hue?: "mymaterial" | "paper" | "cardstock" | "artboard" | "ironon" | "vinyl" | "foilmetal" | "fabric" | "felt" | "leather" | "foam" | "plastic" | "magnet" | "wood" | "other";
}

// figma layer: ".text_block" (node 1400:4420)
export interface TextBlockProps {
  className?: string;
  style?: React.CSSProperties;
  content?: boolean;
  subheading?: boolean;
  sectionHeading?: boolean;
  /** Text content; defaults to "SectionHeading". */
  text1?: string;
  /** Text content; defaults to "Subheading". */
  text2?: string;
}

// figma layer: ".title_block" (node 1126:1942)
export interface TitleBlockProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Title". */
  text1?: string;
  /** Text content; defaults to "Description". */
  text2?: string;
}

// figma layer: "Token" (node 5629:2220)
export interface TokenProps {
  className?: string;
  style?: React.CSSProperties;
}

declare const AndroidChip: React.FC<AndroidChipProps>;
declare const AndroidFormsBlocksSliderHandle: React.FC<AndroidFormsBlocksSliderHandleProps>;
declare const AndroidFormsBlocksSliderTrack: React.FC<AndroidFormsBlocksSliderTrackProps>;
declare const AndroidFormsBlocksSliderTrack2: React.FC<AndroidFormsBlocksSliderTrack2Props>;
declare const AndroidFormsBlocksSliderTrack3: React.FC<AndroidFormsBlocksSliderTrack3Props>;
declare const AndroidFormsCheckbox2: React.FC<AndroidFormsCheckbox2Props>;
declare const AndroidFormsRadioButton2: React.FC<AndroidFormsRadioButton2Props>;
declare const AndroidFormsSliderCentered: React.FC<AndroidFormsSliderCenteredProps>;
declare const AndroidFormsSliderContinuous: React.FC<AndroidFormsSliderContinuousProps>;
declare const AndroidFormsSwitch2: React.FC<AndroidFormsSwitch2Props>;
declare const AndroidMenusBlocksLeadEdge: React.FC<AndroidMenusBlocksLeadEdgeProps>;
declare const AndroidMenusBlocksTrailEdge: React.FC<AndroidMenusBlocksTrailEdgeProps>;
declare const Arrow: React.FC<ArrowProps>;
declare const Chevron: React.FC<ChevronProps>;
declare const ChipAkaPill: React.FC<ChipAkaPillProps>;
declare const ControlsAkaToggles: React.FC<ControlsAkaTogglesProps>;
declare const DesktopBlocksFormsSliderHandle: React.FC<DesktopBlocksFormsSliderHandleProps>;
declare const DesktopBlocksFormsSliderHandle2: React.FC<DesktopBlocksFormsSliderHandle2Props>;
declare const DesktopBlocksFormsSliderTrack: React.FC<DesktopBlocksFormsSliderTrackProps>;
declare const DesktopBlocksFormsSliderTrack2: React.FC<DesktopBlocksFormsSliderTrack2Props>;
declare const DesktopCanvasPanelsCurve: React.FC<DesktopCanvasPanelsCurveProps>;
declare const DesktopChip: React.FC<DesktopChipProps>;
declare const DesktopFormsCheckbox: React.FC<DesktopFormsCheckboxProps>;
declare const DesktopFormsRadioButton: React.FC<DesktopFormsRadioButtonProps>;
declare const DesktopFormsSelect: React.FC<DesktopFormsSelectProps>;
declare const DesktopFormsSlider: React.FC<DesktopFormsSliderProps>;
declare const DesktopFormsSliderCentered: React.FC<DesktopFormsSliderCenteredProps>;
declare const DesktopFormsSwitch: React.FC<DesktopFormsSwitchProps>;
declare const DesktopInputsBlocksLabel: React.FC<DesktopInputsBlocksLabelProps>;
declare const DesktopInputsBlocksSupportingText2: React.FC<DesktopInputsBlocksSupportingText2Props>;
declare const DesktopMenusBlocksLeadEdge3: React.FC<DesktopMenusBlocksLeadEdge3Props>;
declare const DesktopMenusBlocksRowContent: React.FC<DesktopMenusBlocksRowContentProps>;
declare const DesktopMenusBlocksTrailEdge5: React.FC<DesktopMenusBlocksTrailEdge5Props>;
declare const DesktopMenusBlocksTrailEdge6: React.FC<DesktopMenusBlocksTrailEdge6Props>;
declare const DesktopMenusMenuItem2: React.FC<DesktopMenusMenuItem2Props>;
declare const DesktopPopover: React.FC<DesktopPopoverProps>;
declare const DesktopSelectBlocksContent2: React.FC<DesktopSelectBlocksContent2Props>;
declare const DesktopSelectBlocksSize: React.FC<DesktopSelectBlocksSizeProps>;
declare const DesktopSelectBlocksState2: React.FC<DesktopSelectBlocksState2Props>;
declare const DesktopSwatch: React.FC<DesktopSwatchProps>;
declare const DesktopSwatchSelectable: React.FC<DesktopSwatchSelectableProps>;
declare const DesktopToken: React.FC<DesktopTokenProps>;
declare const FFormsDFlyoutState: React.FC<FFormsDFlyoutStateProps>;
declare const FFormsDSelectContent: React.FC<FFormsDSelectContentProps>;
declare const FigmaDetails: React.FC<FigmaDetailsProps>;
declare const IOSChip: React.FC<IOSChipProps>;
declare const IOSFormsCheckbox2: React.FC<IOSFormsCheckbox2Props>;
declare const IOSFormsRadioButton2: React.FC<IOSFormsRadioButton2Props>;
declare const IOSFormsSlider: React.FC<IOSFormsSliderProps>;
declare const IOSFormsSwitch2: React.FC<IOSFormsSwitch2Props>;
declare const IconArrowRight2: React.FC<IconArrowRight2Props>;
declare const IconBoundary8px: React.FC<IconBoundary8pxProps>;
declare const IconCamera: React.FC<IconCameraProps>;
declare const IconCheckmark2: React.FC<IconCheckmark2Props>;
declare const IconChevronDown: React.FC<IconChevronDownProps>;
declare const IconChevronDown2: React.FC<IconChevronDown2Props>;
declare const IconChevronDown3: React.FC<IconChevronDown3Props>;
declare const IconChevronDown4: React.FC<IconChevronDown4Props>;
declare const IconChevronDown5: React.FC<IconChevronDown5Props>;
declare const IconChevronRight: React.FC<IconChevronRightProps>;
declare const IconChevronRight2: React.FC<IconChevronRight2Props>;
declare const IconChevronRight6: React.FC<IconChevronRight6Props>;
declare const IconDetailedInstructions: React.FC<IconDetailedInstructionsProps>;
declare const IconEngraveFill: React.FC<IconEngraveFillProps>;
declare const IconHelp: React.FC<IconHelpProps>;
declare const IconImage: React.FC<IconImageProps>;
declare const IconJustifyCenter: React.FC<IconJustifyCenterProps>;
declare const IconMinus2: React.FC<IconMinus2Props>;
declare const IconMoveBack: React.FC<IconMoveBackProps>;
declare const IconPlaceholder2: React.FC<IconPlaceholder2Props>;
declare const IconPlaceholder9: React.FC<IconPlaceholder9Props>;
declare const IconSettings: React.FC<IconSettingsProps>;
declare const IconShapes: React.FC<IconShapesProps>;
declare const IconStarCluster: React.FC<IconStarClusterProps>;
declare const IconTemplate: React.FC<IconTemplateProps>;
declare const IconText: React.FC<IconTextProps>;
declare const IconTextboxBottom: React.FC<IconTextboxBottomProps>;
declare const IconTextboxTop: React.FC<IconTextboxTopProps>;
declare const IconUpload: React.FC<IconUploadProps>;
declare const IconX4: React.FC<IconX4Props>;
declare const Menu: React.FC<MenuProps>;
declare const MobileFormsBlocksLabel: React.FC<MobileFormsBlocksLabelProps>;
declare const MobileFormsBlocksSupportingText: React.FC<MobileFormsBlocksSupportingTextProps>;
declare const MobileFormsSelect: React.FC<MobileFormsSelectProps>;
declare const MobileSelectBlocksState: React.FC<MobileSelectBlocksStateProps>;
declare const Select: React.FC<SelectProps>;
declare const SelectList: React.FC<SelectListProps>;
declare const Slider: React.FC<SliderProps>;
declare const StatusBadge: React.FC<StatusBadgeProps>;
declare const StatusBlock: React.FC<StatusBlockProps>;
declare const Swatch: React.FC<SwatchProps>;
declare const SwatchesGeneric: React.FC<SwatchesGenericProps>;
declare const SwatchesMaterial: React.FC<SwatchesMaterialProps>;
declare const TextBlock: React.FC<TextBlockProps>;
declare const TitleBlock: React.FC<TitleBlockProps>;
declare const Token: React.FC<TokenProps>;
declare global {
  interface Window {
    AndroidChip: React.FC<AndroidChipProps>;
    AndroidFormsBlocksSliderHandle: React.FC<AndroidFormsBlocksSliderHandleProps>;
    AndroidFormsBlocksSliderTrack: React.FC<AndroidFormsBlocksSliderTrackProps>;
    AndroidFormsBlocksSliderTrack2: React.FC<AndroidFormsBlocksSliderTrack2Props>;
    AndroidFormsBlocksSliderTrack3: React.FC<AndroidFormsBlocksSliderTrack3Props>;
    AndroidFormsCheckbox2: React.FC<AndroidFormsCheckbox2Props>;
    AndroidFormsRadioButton2: React.FC<AndroidFormsRadioButton2Props>;
    AndroidFormsSliderCentered: React.FC<AndroidFormsSliderCenteredProps>;
    AndroidFormsSliderContinuous: React.FC<AndroidFormsSliderContinuousProps>;
    AndroidFormsSwitch2: React.FC<AndroidFormsSwitch2Props>;
    AndroidMenusBlocksLeadEdge: React.FC<AndroidMenusBlocksLeadEdgeProps>;
    AndroidMenusBlocksTrailEdge: React.FC<AndroidMenusBlocksTrailEdgeProps>;
    Arrow: React.FC<ArrowProps>;
    Chevron: React.FC<ChevronProps>;
    ChipAkaPill: React.FC<ChipAkaPillProps>;
    ControlsAkaToggles: React.FC<ControlsAkaTogglesProps>;
    DesktopBlocksFormsSliderHandle: React.FC<DesktopBlocksFormsSliderHandleProps>;
    DesktopBlocksFormsSliderHandle2: React.FC<DesktopBlocksFormsSliderHandle2Props>;
    DesktopBlocksFormsSliderTrack: React.FC<DesktopBlocksFormsSliderTrackProps>;
    DesktopBlocksFormsSliderTrack2: React.FC<DesktopBlocksFormsSliderTrack2Props>;
    DesktopCanvasPanelsCurve: React.FC<DesktopCanvasPanelsCurveProps>;
    DesktopChip: React.FC<DesktopChipProps>;
    DesktopFormsCheckbox: React.FC<DesktopFormsCheckboxProps>;
    DesktopFormsRadioButton: React.FC<DesktopFormsRadioButtonProps>;
    DesktopFormsSelect: React.FC<DesktopFormsSelectProps>;
    DesktopFormsSlider: React.FC<DesktopFormsSliderProps>;
    DesktopFormsSliderCentered: React.FC<DesktopFormsSliderCenteredProps>;
    DesktopFormsSwitch: React.FC<DesktopFormsSwitchProps>;
    DesktopInputsBlocksLabel: React.FC<DesktopInputsBlocksLabelProps>;
    DesktopInputsBlocksSupportingText2: React.FC<DesktopInputsBlocksSupportingText2Props>;
    DesktopMenusBlocksLeadEdge3: React.FC<DesktopMenusBlocksLeadEdge3Props>;
    DesktopMenusBlocksRowContent: React.FC<DesktopMenusBlocksRowContentProps>;
    DesktopMenusBlocksTrailEdge5: React.FC<DesktopMenusBlocksTrailEdge5Props>;
    DesktopMenusBlocksTrailEdge6: React.FC<DesktopMenusBlocksTrailEdge6Props>;
    DesktopMenusMenuItem2: React.FC<DesktopMenusMenuItem2Props>;
    DesktopPopover: React.FC<DesktopPopoverProps>;
    DesktopSelectBlocksContent2: React.FC<DesktopSelectBlocksContent2Props>;
    DesktopSelectBlocksSize: React.FC<DesktopSelectBlocksSizeProps>;
    DesktopSelectBlocksState2: React.FC<DesktopSelectBlocksState2Props>;
    DesktopSwatch: React.FC<DesktopSwatchProps>;
    DesktopSwatchSelectable: React.FC<DesktopSwatchSelectableProps>;
    DesktopToken: React.FC<DesktopTokenProps>;
    FFormsDFlyoutState: React.FC<FFormsDFlyoutStateProps>;
    FFormsDSelectContent: React.FC<FFormsDSelectContentProps>;
    FigmaDetails: React.FC<FigmaDetailsProps>;
    IOSChip: React.FC<IOSChipProps>;
    IOSFormsCheckbox2: React.FC<IOSFormsCheckbox2Props>;
    IOSFormsRadioButton2: React.FC<IOSFormsRadioButton2Props>;
    IOSFormsSlider: React.FC<IOSFormsSliderProps>;
    IOSFormsSwitch2: React.FC<IOSFormsSwitch2Props>;
    IconArrowRight2: React.FC<IconArrowRight2Props>;
    IconBoundary8px: React.FC<IconBoundary8pxProps>;
    IconCamera: React.FC<IconCameraProps>;
    IconCheckmark2: React.FC<IconCheckmark2Props>;
    IconChevronDown: React.FC<IconChevronDownProps>;
    IconChevronDown2: React.FC<IconChevronDown2Props>;
    IconChevronDown3: React.FC<IconChevronDown3Props>;
    IconChevronDown4: React.FC<IconChevronDown4Props>;
    IconChevronDown5: React.FC<IconChevronDown5Props>;
    IconChevronRight: React.FC<IconChevronRightProps>;
    IconChevronRight2: React.FC<IconChevronRight2Props>;
    IconChevronRight6: React.FC<IconChevronRight6Props>;
    IconDetailedInstructions: React.FC<IconDetailedInstructionsProps>;
    IconEngraveFill: React.FC<IconEngraveFillProps>;
    IconHelp: React.FC<IconHelpProps>;
    IconImage: React.FC<IconImageProps>;
    IconJustifyCenter: React.FC<IconJustifyCenterProps>;
    IconMinus2: React.FC<IconMinus2Props>;
    IconMoveBack: React.FC<IconMoveBackProps>;
    IconPlaceholder2: React.FC<IconPlaceholder2Props>;
    IconPlaceholder9: React.FC<IconPlaceholder9Props>;
    IconSettings: React.FC<IconSettingsProps>;
    IconShapes: React.FC<IconShapesProps>;
    IconStarCluster: React.FC<IconStarClusterProps>;
    IconTemplate: React.FC<IconTemplateProps>;
    IconText: React.FC<IconTextProps>;
    IconTextboxBottom: React.FC<IconTextboxBottomProps>;
    IconTextboxTop: React.FC<IconTextboxTopProps>;
    IconUpload: React.FC<IconUploadProps>;
    IconX4: React.FC<IconX4Props>;
    Menu: React.FC<MenuProps>;
    MobileFormsBlocksLabel: React.FC<MobileFormsBlocksLabelProps>;
    MobileFormsBlocksSupportingText: React.FC<MobileFormsBlocksSupportingTextProps>;
    MobileFormsSelect: React.FC<MobileFormsSelectProps>;
    MobileSelectBlocksState: React.FC<MobileSelectBlocksStateProps>;
    Select: React.FC<SelectProps>;
    SelectList: React.FC<SelectListProps>;
    Slider: React.FC<SliderProps>;
    StatusBadge: React.FC<StatusBadgeProps>;
    StatusBlock: React.FC<StatusBlockProps>;
    Swatch: React.FC<SwatchProps>;
    SwatchesGeneric: React.FC<SwatchesGenericProps>;
    SwatchesMaterial: React.FC<SwatchesMaterialProps>;
    TextBlock: React.FC<TextBlockProps>;
    TitleBlock: React.FC<TitleBlockProps>;
    Token: React.FC<TokenProps>;
  }
}
