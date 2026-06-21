// Components.d.ts — the complete catalog of the 65 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.AndroidDialog) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Android / Dialog" (node 5322:37691)
export interface AndroidDialogProps {
  className?: string;
  style?: React.CSSProperties;
  divider?: boolean;
  title?: string;
  actions?: "horizontal" | "vertical";
  content?: string;
}

// figma layer: ".Android / Progress Indicators / Blocks / Indicator" (node 5193:35299)
export interface AndroidProgressIndicatorsBlocksIndicatorProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: ".Android / Progress Indicators / Blocks / Track" (node 5193:35297)
export interface AndroidProgressIndicatorsBlocksTrackProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Android / Progress Indicators / Determinate / Circular" (node 5193:36211)
export interface AndroidProgressIndicatorsDeterminateCircProps {
  className?: string;
  style?: React.CSSProperties;
  progress?: "25%" | "33%" | "50%" | "66%" | "75%" | "100%";
}

// figma layer: "Android / Progress Indicators / Determinate / Gauge" (node 5322:11609)
export interface AndroidProgressIndicatorsDeterminateGaugProps {
  className?: string;
  style?: React.CSSProperties;
  status?: string;
  value?: string;
}

// figma layer: "Android / Progress Indicators / Determinate / Linear" (node 5193:35301)
export interface AndroidProgressIndicatorsDeterminateLineProps {
  className?: string;
  style?: React.CSSProperties;
  progress?: "0%" | "10%" | "20%" | "30%" | "40%" | "50%" | "60%" | "70%" | "80%" | "90%" | "100%";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Android / Progress Indicators / Indeterminate / Circular" (node 5193:35188)
export interface AndroidProgressIndicatorsIndeterminateCiProps {
  className?: string;
  style?: React.CSSProperties;
  progress?: "lots" | "more" | "some";
}

// figma layer: "Android / Progress Indicators / Indeterminate / Linear" (node 5193:36197)
export interface AndroidProgressIndicatorsIndeterminateLiProps {
  className?: string;
  style?: React.CSSProperties;
  progress?: "none" | "more" | "some";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Android / Snackbar" (node 5322:38022)
export interface AndroidSnackbarProps {
  className?: string;
  style?: React.CSSProperties;
  configuration?: "text only" | "text & action" | "text & longer action";
  content?: string;
  action?: string;
  lead?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: ".Android / Snackbar / Blocks / Lead" (node 5193:35195)
export interface AndroidSnackbarBlocksLeadProps {
  className?: string;
  style?: React.CSSProperties;
  options?: "icon" | "progress indicator";
  role?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Android / Tag" (node 5322:11576)
export interface AndroidTagProps {
  className?: string;
  style?: React.CSSProperties;
  tag?: string;
}

// figma layer: "Badge" (node 3115:862)
export interface Badge2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Banner" (node 3143:1137)
export interface BannerProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Desktop / Badges / Badge" (node 5188:8464)
export interface DesktopBadgesBadge4Props {
  className?: string;
  style?: React.CSSProperties;
  role?: "default" | "accent" | "lowlight" | "highlight";
}

// figma layer: "Desktop / Badges / Counter" (node 5188:8522)
export interface DesktopBadgesCounterProps {
  className?: string;
  style?: React.CSSProperties;
  count?: string;
  role?: "alert" | "default";
}

// figma layer: "Desktop / Badges / Status Indicator" (node 5188:8517)
export interface DesktopBadgesStatusIndicatorProps {
  className?: string;
  style?: React.CSSProperties;
  role?: "alert" | "default";
}

// figma layer: "Desktop / Banner" (node 5876:6514)
export interface DesktopBannerProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  dismissable?: boolean;
  content?: string;
  link?: boolean;
  type?: "banner" | "inline message";
  role?: "information" | "warning";
  width?: "fixed" | "over 401 px" | "up to 400 px";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: ".Desktop / Blocks / Badge" (node 5188:8452)
export interface DesktopBlocksBadge5Props {
  className?: string;
  style?: React.CSSProperties;
  size?: "xs" | "s";
  label?: string;
  lead?: React.ReactNode;
}

// figma layer: ".Desktop / Buttons / Blocks / Link Button" (node 5192:38282)
export interface DesktopButtonsBlocksLinkButton3Props {
  className?: string;
  style?: React.CSSProperties;
  value?: string;
  size?: "m" | "l";
  icon?: React.ReactNode;
  lead?: boolean;
  icon2?: React.ReactNode;
  trail?: boolean;
}

// figma layer: "Desktop / Buttons / Button" (node 5192:38330)
export interface DesktopButtonsButtonProps {
  className?: string;
  style?: React.CSSProperties;
  role?: "default" | "error";
  type?: "primary" | "secondary" | "tertiary";
  size?: "s" | "m" | "l";
  state?: "at rest" | "on hover" | "is active" | "is disabled";
  value?: string;
  icon?: React.ReactNode;
  lead?: boolean;
}

// figma layer: "Desktop / Buttons / Icon Button" (node 5193:20969)
export interface DesktopButtonsIconButton3Props {
  className?: string;
  style?: React.CSSProperties;
  background?: boolean;
  icon?: React.ReactNode;
  icon2?: React.ReactNode;
  type?: "primary" | "secondary";
  size?: "xs" | "s" | "m";
  state?: "at rest" | "on hover" | "is active" | "is disabled" | "is selected";
}

// figma layer: "Desktop / Buttons / Link Button" (node 5192:38293)
export interface DesktopButtonsLinkButton2Props {
  className?: string;
  style?: React.CSSProperties;
  role?: "default" | "error";
  type?: "primary" | "secondary";
  state?: "at rest" | "on hover" | "is active" | "is disabled";
}

// figma layer: "Desktop / Dialog" (node 5192:38691)
export interface DesktopDialogProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  type?: "error" | "general";
  cTAs?: "three" | "two" | "one";
  action?: React.ReactNode;
  content?: string;
  action2?: boolean;
}

// figma layer: ".Desktop / Forms / Blocks / Control Content" (node 5193:22006)
export interface DesktopFormsBlocksControlContentProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  icon?: React.ReactNode;
  lead?: boolean;
  icon2?: React.ReactNode;
  trail?: boolean;
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

// figma layer: "Desktop / Progress Indicators / Determinate / Circular" (node 5193:30128)
export interface DesktopProgressIndicatorsDeterminateCircProps {
  className?: string;
  style?: React.CSSProperties;
  progress?: "0%" | "25%" | "33%" | "50%" | "66%" | "75%" | "100%";
}

// figma layer: "Desktop / Progress Indicators / Determinate / Gauge" (node 5193:30164)
export interface DesktopProgressIndicatorsDeterminateGaugProps {
  className?: string;
  style?: React.CSSProperties;
  status?: string;
}

// figma layer: "Desktop / Progress Indicators / Determinate / Progress Bar" (node 5193:35740)
export interface DesktopProgressIndicatorsDeterminateProgProps {
  className?: string;
  style?: React.CSSProperties;
  progress?: "0%" | "1%" | "10%" | "20%" | "30%" | "40%" | "50%" | "60%" | "70%" | "80%" | "90%" | "100%";
}

// figma layer: "Desktop / Progress Indicators / Indeterminate / Circular" (node 5009:1950)
export interface DesktopProgressIndicatorsIndeterminateCiProps {
  className?: string;
  style?: React.CSSProperties;
  progress?: "lots" | "more" | "some";
}

// figma layer: "Desktop / Progress Indicators / Indeterminate / Circular" (node 5193:32264)
export interface DesktopProgressIndicatorsIndeterminateCi2Props {
  className?: string;
  style?: React.CSSProperties;
  progress?: "lots" | "more" | "some";
}

// figma layer: "Desktop / Progress Indicators / Indeterminate / Skeleton / Container" (node 6478:1442)
export interface DesktopProgressIndicatorsIndeterminateSkProps {
  className?: string;
  style?: React.CSSProperties;
  undeterminedContent?: string;
  position?: "start" | "end";
}

// figma layer: "Desktop / Snackbar" (node 5193:32276)
export interface DesktopSnackbarProps {
  className?: string;
  style?: React.CSSProperties;
  value?: string;
  content?: string;
  lead?: boolean;
  action?: boolean;
  configuration?: "multi-line" | "single line";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: ".Desktop / Snackbar / Blocks / Lead" (node 5193:32271)
export interface DesktopSnackbarBlocksLead2Props {
  className?: string;
  style?: React.CSSProperties;
  options?: "icon" | "progress indicator";
  role?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Desktop / Tag" (node 5193:35729)
export interface DesktopTagProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "s" | "m";
  tag?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Desktop / Title" (node 5193:31993)
export interface DesktopTitleProps {
  className?: string;
  style?: React.CSSProperties;
  pointer?: "n" | "e" | "s" | "w" | "none";
  label?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Desktop / Tooltip" (node 5193:32632)
export interface DesktopTooltipProps {
  className?: string;
  style?: React.CSSProperties;
  pointer?: "n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "nw";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: ".Desktop / Tooltip / Blocks / Body" (node 5193:32626)
export interface DesktopTooltipBlocksBody2Props {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  type?: "rich" | "standard";
  content?: string;
}

// figma layer: "Dialog" (node 3142:676)
export interface DialogProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: ".figma_details" (node 2842:2708)
export interface FigmaDetailsProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Content". */
  text1?: string;
}

// figma layer: "Hotspot" (node 4271:4767)
export interface Hotspot2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "iOS / Progress Indicators / Determinate / Gauge" (node 5442:3648)
export interface IOSProgressIndicatorsDeterminateGaugeProps {
  className?: string;
  style?: React.CSSProperties;
  status?: string;
}

// figma layer: "iOS / Progress Indicators / Indeterminate Spinner" (node 5193:35777)
export interface IOSProgressIndicatorsIndeterminateSpinneProps {
  className?: string;
  style?: React.CSSProperties;
  configuration?: "spinner only" | "status →" | "status ↓";
  size?: "regular" | "sm";
  status?: string;
}

// figma layer: "iOS / Snackbar" (node 5421:7164)
export interface IOSSnackbarProps {
  className?: string;
  style?: React.CSSProperties;
  configuration?: "text only" | "text & action" | "text & longer action";
  content?: string;
  action?: string;
  lead?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: ".iOS / Snackbar / Blocks / Lead" (node 5193:35842)
export interface IOSSnackbarBlocksLeadProps {
  className?: string;
  style?: React.CSSProperties;
  options?: "icon" | "spinner";
  role?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "iOS / Tag" (node 5442:2347)
export interface IOSTagProps {
  className?: string;
  style?: React.CSSProperties;
  tag?: string;
}

// figma layer: "icon/checkmark" (node 5193:16502)
export interface IconCheckmark2Props {
  className?: string;
  style?: React.CSSProperties;
  size?: "16" | "24" | "32";
}

// figma layer: "icon/info" (node 5698:997)
export interface IconInfoProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "16" | "24" | "32";
}

// figma layer: "icon/minus" (node 5193:13409)
export interface IconMinus2Props {
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

// figma layer: "icon/warning" (node 5193:15229)
export interface IconWarningProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "16" | "24" | "32";
}

// figma layer: "icon/x" (node 5192:16640)
export interface IconX4Props {
  className?: string;
  style?: React.CSSProperties;
  size?: "16" | "24" | "32";
}

// figma layer: "Isolation Layer" (node 5202:7895)
export interface IsolationLayer2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Mobile / Banner" (node 6101:806)
export interface MobileBannerProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  dismissable?: boolean;
  content?: string;
  link?: boolean;
  type?: "banner" | "inline message" | "overlay";
  role?: "information" | "warning";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Mobile / Buttons / Button" (node 5322:37420)
export interface MobileButtonsButton3Props {
  className?: string;
  style?: React.CSSProperties;
  role?: "default" | "error";
  type?: "primary" | "secondary" | "tertiary";
  size?: "s" | "m" | "l";
  state?: "at rest" | "is active" | "is disabled";
  value?: string;
  icon?: React.ReactNode;
  lead?: boolean;
}

// figma layer: "Pointer" (node 5193:31991)
export interface PointerProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Progress Indicator" (node 2984:14462)
export interface ProgressIndicatorProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Skeleton" (node 6412:1355)
export interface SkeletonProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Snackbar" (node 2975:3398)
export interface SnackbarProps {
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

// figma layer: "Tag" (node 4655:6036)
export interface TagProps {
  className?: string;
  style?: React.CSSProperties;
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

// figma layer: "Title" (node 3388:1292)
export interface TitleProps {
  className?: string;
  style?: React.CSSProperties;
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

// figma layer: "Tooltip" (node 3388:1411)
export interface TooltipProps {
  className?: string;
  style?: React.CSSProperties;
}

declare const AndroidDialog: React.FC<AndroidDialogProps>;
declare const AndroidProgressIndicatorsBlocksIndicator: React.FC<AndroidProgressIndicatorsBlocksIndicatorProps>;
declare const AndroidProgressIndicatorsBlocksTrack: React.FC<AndroidProgressIndicatorsBlocksTrackProps>;
declare const AndroidProgressIndicatorsDeterminateCirc: React.FC<AndroidProgressIndicatorsDeterminateCircProps>;
declare const AndroidProgressIndicatorsDeterminateGaug: React.FC<AndroidProgressIndicatorsDeterminateGaugProps>;
declare const AndroidProgressIndicatorsDeterminateLine: React.FC<AndroidProgressIndicatorsDeterminateLineProps>;
declare const AndroidProgressIndicatorsIndeterminateCi: React.FC<AndroidProgressIndicatorsIndeterminateCiProps>;
declare const AndroidProgressIndicatorsIndeterminateLi: React.FC<AndroidProgressIndicatorsIndeterminateLiProps>;
declare const AndroidSnackbar: React.FC<AndroidSnackbarProps>;
declare const AndroidSnackbarBlocksLead: React.FC<AndroidSnackbarBlocksLeadProps>;
declare const AndroidTag: React.FC<AndroidTagProps>;
declare const Badge2: React.FC<Badge2Props>;
declare const Banner: React.FC<BannerProps>;
declare const DesktopBadgesBadge4: React.FC<DesktopBadgesBadge4Props>;
declare const DesktopBadgesCounter: React.FC<DesktopBadgesCounterProps>;
declare const DesktopBadgesStatusIndicator: React.FC<DesktopBadgesStatusIndicatorProps>;
declare const DesktopBanner: React.FC<DesktopBannerProps>;
declare const DesktopBlocksBadge5: React.FC<DesktopBlocksBadge5Props>;
declare const DesktopButtonsBlocksLinkButton3: React.FC<DesktopButtonsBlocksLinkButton3Props>;
declare const DesktopButtonsButton: React.FC<DesktopButtonsButtonProps>;
declare const DesktopButtonsIconButton3: React.FC<DesktopButtonsIconButton3Props>;
declare const DesktopButtonsLinkButton2: React.FC<DesktopButtonsLinkButton2Props>;
declare const DesktopDialog: React.FC<DesktopDialogProps>;
declare const DesktopFormsBlocksControlContent: React.FC<DesktopFormsBlocksControlContentProps>;
declare const DesktopFormsCheckbox: React.FC<DesktopFormsCheckboxProps>;
declare const DesktopProgressIndicatorsDeterminateCirc: React.FC<DesktopProgressIndicatorsDeterminateCircProps>;
declare const DesktopProgressIndicatorsDeterminateGaug: React.FC<DesktopProgressIndicatorsDeterminateGaugProps>;
declare const DesktopProgressIndicatorsDeterminateProg: React.FC<DesktopProgressIndicatorsDeterminateProgProps>;
declare const DesktopProgressIndicatorsIndeterminateCi: React.FC<DesktopProgressIndicatorsIndeterminateCiProps>;
declare const DesktopProgressIndicatorsIndeterminateCi2: React.FC<DesktopProgressIndicatorsIndeterminateCi2Props>;
declare const DesktopProgressIndicatorsIndeterminateSk: React.FC<DesktopProgressIndicatorsIndeterminateSkProps>;
declare const DesktopSnackbar: React.FC<DesktopSnackbarProps>;
declare const DesktopSnackbarBlocksLead2: React.FC<DesktopSnackbarBlocksLead2Props>;
declare const DesktopTag: React.FC<DesktopTagProps>;
declare const DesktopTitle: React.FC<DesktopTitleProps>;
declare const DesktopTooltip: React.FC<DesktopTooltipProps>;
declare const DesktopTooltipBlocksBody2: React.FC<DesktopTooltipBlocksBody2Props>;
declare const Dialog: React.FC<DialogProps>;
declare const FigmaDetails: React.FC<FigmaDetailsProps>;
declare const Hotspot2: React.FC<Hotspot2Props>;
declare const IOSProgressIndicatorsDeterminateGauge: React.FC<IOSProgressIndicatorsDeterminateGaugeProps>;
declare const IOSProgressIndicatorsIndeterminateSpinne: React.FC<IOSProgressIndicatorsIndeterminateSpinneProps>;
declare const IOSSnackbar: React.FC<IOSSnackbarProps>;
declare const IOSSnackbarBlocksLead: React.FC<IOSSnackbarBlocksLeadProps>;
declare const IOSTag: React.FC<IOSTagProps>;
declare const IconCheckmark2: React.FC<IconCheckmark2Props>;
declare const IconInfo: React.FC<IconInfoProps>;
declare const IconMinus2: React.FC<IconMinus2Props>;
declare const IconPlaceholder9: React.FC<IconPlaceholder9Props>;
declare const IconWarning: React.FC<IconWarningProps>;
declare const IconX4: React.FC<IconX4Props>;
declare const IsolationLayer2: React.FC<IsolationLayer2Props>;
declare const MobileBanner: React.FC<MobileBannerProps>;
declare const MobileButtonsButton3: React.FC<MobileButtonsButton3Props>;
declare const Pointer: React.FC<PointerProps>;
declare const ProgressIndicator: React.FC<ProgressIndicatorProps>;
declare const Skeleton: React.FC<SkeletonProps>;
declare const Snackbar: React.FC<SnackbarProps>;
declare const StatusBadge: React.FC<StatusBadgeProps>;
declare const StatusBlock: React.FC<StatusBlockProps>;
declare const Tag: React.FC<TagProps>;
declare const TextBlock: React.FC<TextBlockProps>;
declare const Title: React.FC<TitleProps>;
declare const TitleBlock: React.FC<TitleBlockProps>;
declare const Tooltip: React.FC<TooltipProps>;
declare global {
  interface Window {
    AndroidDialog: React.FC<AndroidDialogProps>;
    AndroidProgressIndicatorsBlocksIndicator: React.FC<AndroidProgressIndicatorsBlocksIndicatorProps>;
    AndroidProgressIndicatorsBlocksTrack: React.FC<AndroidProgressIndicatorsBlocksTrackProps>;
    AndroidProgressIndicatorsDeterminateCirc: React.FC<AndroidProgressIndicatorsDeterminateCircProps>;
    AndroidProgressIndicatorsDeterminateGaug: React.FC<AndroidProgressIndicatorsDeterminateGaugProps>;
    AndroidProgressIndicatorsDeterminateLine: React.FC<AndroidProgressIndicatorsDeterminateLineProps>;
    AndroidProgressIndicatorsIndeterminateCi: React.FC<AndroidProgressIndicatorsIndeterminateCiProps>;
    AndroidProgressIndicatorsIndeterminateLi: React.FC<AndroidProgressIndicatorsIndeterminateLiProps>;
    AndroidSnackbar: React.FC<AndroidSnackbarProps>;
    AndroidSnackbarBlocksLead: React.FC<AndroidSnackbarBlocksLeadProps>;
    AndroidTag: React.FC<AndroidTagProps>;
    Badge2: React.FC<Badge2Props>;
    Banner: React.FC<BannerProps>;
    DesktopBadgesBadge4: React.FC<DesktopBadgesBadge4Props>;
    DesktopBadgesCounter: React.FC<DesktopBadgesCounterProps>;
    DesktopBadgesStatusIndicator: React.FC<DesktopBadgesStatusIndicatorProps>;
    DesktopBanner: React.FC<DesktopBannerProps>;
    DesktopBlocksBadge5: React.FC<DesktopBlocksBadge5Props>;
    DesktopButtonsBlocksLinkButton3: React.FC<DesktopButtonsBlocksLinkButton3Props>;
    DesktopButtonsButton: React.FC<DesktopButtonsButtonProps>;
    DesktopButtonsIconButton3: React.FC<DesktopButtonsIconButton3Props>;
    DesktopButtonsLinkButton2: React.FC<DesktopButtonsLinkButton2Props>;
    DesktopDialog: React.FC<DesktopDialogProps>;
    DesktopFormsBlocksControlContent: React.FC<DesktopFormsBlocksControlContentProps>;
    DesktopFormsCheckbox: React.FC<DesktopFormsCheckboxProps>;
    DesktopProgressIndicatorsDeterminateCirc: React.FC<DesktopProgressIndicatorsDeterminateCircProps>;
    DesktopProgressIndicatorsDeterminateGaug: React.FC<DesktopProgressIndicatorsDeterminateGaugProps>;
    DesktopProgressIndicatorsDeterminateProg: React.FC<DesktopProgressIndicatorsDeterminateProgProps>;
    DesktopProgressIndicatorsIndeterminateCi: React.FC<DesktopProgressIndicatorsIndeterminateCiProps>;
    DesktopProgressIndicatorsIndeterminateCi2: React.FC<DesktopProgressIndicatorsIndeterminateCi2Props>;
    DesktopProgressIndicatorsIndeterminateSk: React.FC<DesktopProgressIndicatorsIndeterminateSkProps>;
    DesktopSnackbar: React.FC<DesktopSnackbarProps>;
    DesktopSnackbarBlocksLead2: React.FC<DesktopSnackbarBlocksLead2Props>;
    DesktopTag: React.FC<DesktopTagProps>;
    DesktopTitle: React.FC<DesktopTitleProps>;
    DesktopTooltip: React.FC<DesktopTooltipProps>;
    DesktopTooltipBlocksBody2: React.FC<DesktopTooltipBlocksBody2Props>;
    Dialog: React.FC<DialogProps>;
    FigmaDetails: React.FC<FigmaDetailsProps>;
    Hotspot2: React.FC<Hotspot2Props>;
    IOSProgressIndicatorsDeterminateGauge: React.FC<IOSProgressIndicatorsDeterminateGaugeProps>;
    IOSProgressIndicatorsIndeterminateSpinne: React.FC<IOSProgressIndicatorsIndeterminateSpinneProps>;
    IOSSnackbar: React.FC<IOSSnackbarProps>;
    IOSSnackbarBlocksLead: React.FC<IOSSnackbarBlocksLeadProps>;
    IOSTag: React.FC<IOSTagProps>;
    IconCheckmark2: React.FC<IconCheckmark2Props>;
    IconInfo: React.FC<IconInfoProps>;
    IconMinus2: React.FC<IconMinus2Props>;
    IconPlaceholder9: React.FC<IconPlaceholder9Props>;
    IconWarning: React.FC<IconWarningProps>;
    IconX4: React.FC<IconX4Props>;
    IsolationLayer2: React.FC<IsolationLayer2Props>;
    MobileBanner: React.FC<MobileBannerProps>;
    MobileButtonsButton3: React.FC<MobileButtonsButton3Props>;
    Pointer: React.FC<PointerProps>;
    ProgressIndicator: React.FC<ProgressIndicatorProps>;
    Skeleton: React.FC<SkeletonProps>;
    Snackbar: React.FC<SnackbarProps>;
    StatusBadge: React.FC<StatusBadgeProps>;
    StatusBlock: React.FC<StatusBlockProps>;
    Tag: React.FC<TagProps>;
    TextBlock: React.FC<TextBlockProps>;
    Title: React.FC<TitleProps>;
    TitleBlock: React.FC<TitleBlockProps>;
    Tooltip: React.FC<TooltipProps>;
  }
}
