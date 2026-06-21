// Components.d.ts — the complete catalog of the 23 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.Button2) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Button" (node 1149:2577)
export interface Button2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Desktop / Badges / Status Indicator" (node 5188:8517)
export interface DesktopBadgesStatusIndicatorProps {
  className?: string;
  style?: React.CSSProperties;
  role?: "alert" | "default";
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

// figma layer: "Desktop / Buttons / FAB" (node 5193:32352)
export interface DesktopButtonsFABProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "primary" | "secondary";
  size?: "xs" | "s" | "m" | "l";
  state?: "at rest" | "on hover" | "is active" | "is disabled";
  icon?: React.ReactNode;
  icon2?: React.ReactNode;
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

// figma layer: "Desktop / Buttons / Segmented Button" (node 5193:33940)
export interface DesktopButtonsSegmentedButtonProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "s" | "m" | "xl";
  position?: "lead" | "middle" | "trail";
  state?: "at rest" | "on hover" | "is active" | "is selected" | "is disabled";
  label?: boolean;
  value?: string;
  icon?: React.ReactNode;
  icon2?: React.ReactNode;
  icon3?: boolean;
}

// figma layer: "FAB" (node 1149:2890)
export interface FABProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "icon/.boundary-24px" (node 4163:639)
export interface IconBoundary24px4Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon Button" (node 1020:7651)
export interface IconButton2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "icon/checkmark" (node 5193:16502)
export interface IconCheckmark2Props {
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

// figma layer: "icon/download" (node 5193:16380)
export interface IconDownloadProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "24" | "32";
}

// figma layer: "icon/pause-hardware" (node 5193:7161)
export interface IconPauseHardwareProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "24" | "32";
}

// figma layer: "icon/placeholder" (node 5188:8441)
export interface IconPlaceholder9Props {
  className?: string;
  style?: React.CSSProperties;
  size?: "16" | "24" | "32";
}

// figma layer: "icon/save" (node 5193:16176)
export interface IconSaveProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "24" | "32";
}

// figma layer: "Link Button" (node 1149:3082)
export interface LinkButtonProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Segmented Button" (node 2843:2078)
export interface SegmentedButtonProps {
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

declare const Button2: React.FC<Button2Props>;
declare const DesktopBadgesStatusIndicator: React.FC<DesktopBadgesStatusIndicatorProps>;
declare const DesktopButtonsBlocksLinkButton3: React.FC<DesktopButtonsBlocksLinkButton3Props>;
declare const DesktopButtonsButton: React.FC<DesktopButtonsButtonProps>;
declare const DesktopButtonsFAB: React.FC<DesktopButtonsFABProps>;
declare const DesktopButtonsIconButton3: React.FC<DesktopButtonsIconButton3Props>;
declare const DesktopButtonsLinkButton2: React.FC<DesktopButtonsLinkButton2Props>;
declare const DesktopButtonsSegmentedButton: React.FC<DesktopButtonsSegmentedButtonProps>;
declare const FAB: React.FC<FABProps>;
declare const IconBoundary24px4: React.FC<IconBoundary24px4Props>;
declare const IconButton2: React.FC<IconButton2Props>;
declare const IconCheckmark2: React.FC<IconCheckmark2Props>;
declare const IconChevronRight6: React.FC<IconChevronRight6Props>;
declare const IconDownload: React.FC<IconDownloadProps>;
declare const IconPauseHardware: React.FC<IconPauseHardwareProps>;
declare const IconPlaceholder9: React.FC<IconPlaceholder9Props>;
declare const IconSave: React.FC<IconSaveProps>;
declare const LinkButton: React.FC<LinkButtonProps>;
declare const SegmentedButton: React.FC<SegmentedButtonProps>;
declare const StatusBadge: React.FC<StatusBadgeProps>;
declare const StatusBlock: React.FC<StatusBlockProps>;
declare const TextBlock: React.FC<TextBlockProps>;
declare const TitleBlock: React.FC<TitleBlockProps>;
declare global {
  interface Window {
    Button2: React.FC<Button2Props>;
    DesktopBadgesStatusIndicator: React.FC<DesktopBadgesStatusIndicatorProps>;
    DesktopButtonsBlocksLinkButton3: React.FC<DesktopButtonsBlocksLinkButton3Props>;
    DesktopButtonsButton: React.FC<DesktopButtonsButtonProps>;
    DesktopButtonsFAB: React.FC<DesktopButtonsFABProps>;
    DesktopButtonsIconButton3: React.FC<DesktopButtonsIconButton3Props>;
    DesktopButtonsLinkButton2: React.FC<DesktopButtonsLinkButton2Props>;
    DesktopButtonsSegmentedButton: React.FC<DesktopButtonsSegmentedButtonProps>;
    FAB: React.FC<FABProps>;
    IconBoundary24px4: React.FC<IconBoundary24px4Props>;
    IconButton2: React.FC<IconButton2Props>;
    IconCheckmark2: React.FC<IconCheckmark2Props>;
    IconChevronRight6: React.FC<IconChevronRight6Props>;
    IconDownload: React.FC<IconDownloadProps>;
    IconPauseHardware: React.FC<IconPauseHardwareProps>;
    IconPlaceholder9: React.FC<IconPlaceholder9Props>;
    IconSave: React.FC<IconSaveProps>;
    LinkButton: React.FC<LinkButtonProps>;
    SegmentedButton: React.FC<SegmentedButtonProps>;
    StatusBadge: React.FC<StatusBadgeProps>;
    StatusBlock: React.FC<StatusBlockProps>;
    TextBlock: React.FC<TextBlockProps>;
    TitleBlock: React.FC<TitleBlockProps>;
  }
}
