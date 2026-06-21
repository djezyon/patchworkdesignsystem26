// Components.d.ts — the complete catalog of the 50 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.ActionSheet) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Action Sheet" (node 3460:2670)
export interface ActionSheetProps {
  className?: string;
  style?: React.CSSProperties;
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

// figma layer: "Android / Forms / Switch" (node 5193:37120)
export interface AndroidFormsSwitch2Props {
  className?: string;
  style?: React.CSSProperties;
  selected?: boolean;
  disabled?: boolean;
}

// figma layer: ".Android / Lists / Blocks / Lead Edge" (node 5193:37107)
export interface AndroidListsBlocksLeadEdge2Props {
  className?: string;
  style?: React.CSSProperties;
  options?: "checkbox" | "icon or swatch" | "nothing" | "radio button";
  iconOrSwatch?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: ".Android / Lists / Blocks / Secondary Content" (node 5193:37140)
export interface AndroidListsBlocksSecondaryContentProps {
  className?: string;
  style?: React.CSSProperties;
  text?: string;
}

// figma layer: ".Android / Lists / Blocks / Supporting Content" (node 5193:37118)
export interface AndroidListsBlocksSupportingContentProps {
  className?: string;
  style?: React.CSSProperties;
  text?: string;
}

// figma layer: ".Android / Lists / Blocks / Trail Edge" (node 5193:37129)
export interface AndroidListsBlocksTrailEdge2Props {
  className?: string;
  style?: React.CSSProperties;
  options?: "checkbox" | "flat button" | "icon" | "switch" | "text";
  icon?: React.ReactNode;
  value?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Desktop / Popover" (node 5805:896)
export interface DesktopPopoverProps {
  className?: string;
  style?: React.CSSProperties;
  header?: string;
  body?: string;
  footer?: string;
}

// figma layer: "Divider" (node 5229:9796)
export interface DividerProps {
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

// figma layer: "iOS / Action Sheet" (node 5193:38046)
export interface IOSActionSheetProps {
  className?: string;
  style?: React.CSSProperties;
  header?: boolean;
  device?: "iPad" | "iPhone";
  title?: string;
  description?: boolean;
  description2?: string;
  cancelButton?: boolean;
}

// figma layer: ".iOS / Buttons / Blocks / Embedded Action" (node 5192:42025)
export interface IOSButtonsBlocksEmbeddedActionProps {
  className?: string;
  style?: React.CSSProperties;
  emphasized?: boolean;
  destructive?: boolean;
  enabled?: boolean;
  action?: string;
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

// figma layer: "iOS / Forms / Switch" (node 5193:37388)
export interface IOSFormsSwitch2Props {
  className?: string;
  style?: React.CSSProperties;
  selected?: boolean;
  disabled?: boolean;
}

// figma layer: ".iOS / Lists / Blocks / Lead Edge" (node 5193:37377)
export interface IOSListsBlocksLeadEdge2Props {
  className?: string;
  style?: React.CSSProperties;
  options?: "checkbox" | "icon or swatch" | "radio button";
  iconOrSwatch?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: ".iOS / Lists / Blocks / Primary Content" (node 6060:1444)
export interface IOSListsBlocksPrimaryContentProps {
  className?: string;
  style?: React.CSSProperties;
  text?: string;
  infoIcon?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: ".iOS / Lists / Blocks / Secondary Content" (node 5193:37412)
export interface IOSListsBlocksSecondaryContentProps {
  className?: string;
  style?: React.CSSProperties;
  text?: string;
}

// figma layer: ".iOS / Lists / Blocks / Trail Edge" (node 5193:37397)
export interface IOSListsBlocksTrailEdge2Props {
  className?: string;
  style?: React.CSSProperties;
  options?: "checkbox" | "details" | "disclosure" | "flat button" | "switch";
  icon?: boolean;
  icon2?: React.ReactNode;
  value?: string;
  label?: boolean;
  drillIn?: boolean;
  checkmark?: boolean;
  condition?: React.ReactNode;
}

// figma layer: ".iOS / Lists / Blocks / Trail Edge" (node 5442:6017)
export interface IOSListsBlocksTrailEdge3Props {
  className?: string;
  style?: React.CSSProperties;
  options?: "checkbox" | "details" | "disclosure" | "flat button" | "switch";
  icon?: boolean;
  icon2?: React.ReactNode;
  value?: string;
  label?: boolean;
  drillIn?: boolean;
  checkmark?: boolean;
  condition?: React.ReactNode;
}

// figma layer: "iOS / Lists / Header Row" (node 5193:37550)
export interface IOSListsHeaderRowProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "plain" | "prominent";
  width?: "full" | "inset";
  text?: string;
}

// figma layer: "iOS / Lists / Row" (node 6060:1448)
export interface IOSListsRowProps {
  className?: string;
  style?: React.CSSProperties;
  lead?: boolean;
  width?: "full" | "inset";
  height?: "regular" | "tall";
  trail?: boolean;
  secondaryContent?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "iOS / Popover" (node 6060:36217)
export interface IOSPopoverProps {
  className?: string;
  style?: React.CSSProperties;
  pointer?: "n" | "nne" | "ne" | "ene" | "e" | "ese" | "se" | "sse" | "s" | "ssw" | "sw" | "wsw" | "w" | "wnw" | "nw" | "nnw";
  content?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: ".iOS / Sheets / Blocks / Edge Icon" (node 5703:1240)
export interface IOSSheetsBlocksEdgeIcon3Props {
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
}

// figma layer: ".iOS / Sheets / Blocks / Grabber Bar" (node 5435:202)
export interface IOSSheetsBlocksGrabberBarProps {
  className?: string;
  style?: React.CSSProperties;
  handle?: boolean;
}

// figma layer: "iOS / Sheets / Blocks / Header" (node 5703:1256)
export interface IOSSheetsBlocksHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  title?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}

// figma layer: ".iOS / Sheets / Blocks / Lead Edge" (node 5703:1242)
export interface IOSSheetsBlocksLeadEdge3Props {
  className?: string;
  style?: React.CSSProperties;
  options?: "flat button" | "icon" | "nothing";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: ".iOS / Sheets / Blocks / Trail Edge" (node 5703:1248)
export interface IOSSheetsBlocksTrailEdge4Props {
  className?: string;
  style?: React.CSSProperties;
  options?: "button" | "flat button" | "icon" | "nothing";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "iOS / Sheets / Phone" (node 6060:36412)
export interface IOSSheetsPhoneProps {
  className?: string;
  style?: React.CSSProperties;
  homeIndicator?: boolean;
  navigationOptional?: string;
  header?: string;
  footerOptional?: string;
  body?: string;
}

// figma layer: "icon/checkmark" (node 5193:16502)
export interface IconCheckmark2Props {
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

// figma layer: "icon/chevron-left" (node 5193:14264)
export interface IconChevronLeft3Props {
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

// figma layer: "icon/placeholder" (node 4235:604)
export interface IconPlaceholder7Props {
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

// figma layer: "icon/x" (node 5192:16640)
export interface IconX4Props {
  className?: string;
  style?: React.CSSProperties;
  size?: "16" | "24" | "32";
}

// figma layer: "List" (node 3435:2590)
export interface ListProps {
  className?: string;
  style?: React.CSSProperties;
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

// figma layer: "Mobile / Buttons / Icon Button" (node 4235:614)
export interface MobileButtonsIconButtonProps {
  className?: string;
  style?: React.CSSProperties;
  background?: boolean;
  type?: "primary" | "secondary";
  size?: "xs" | "s" | "m";
  state?: "at rest" | "is active" | "is selected" | "is disabled";
  icon?: React.ReactNode;
  icon2?: React.ReactNode;
}

// figma layer: "Pointer" (node 5193:31991)
export interface PointerProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Popover" (node 3403:5483)
export interface PopoverProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Sheet" (node 3460:2671)
export interface SheetProps {
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

// figma layer: "Swatches / Generic" (node 5496:4093)
export interface SwatchesGenericProps {
  className?: string;
  style?: React.CSSProperties;
  hue?: "black" | "blue" | "blue dk" | "blue lt" | "brown" | "gray" | "gray dk" | "gray dk plus" | "gray lt" | "green" | "green dk" | "green lt" | "navy" | "navy dk" | "navy lt" | "orange" | "orange dk" | "orange lt" | "purple" | "purple dk" | "purple lt" | "red" | "red dk" | "red lt" | "white" | "yellow" | "yellow dk" | "yellow lt";
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

declare const ActionSheet: React.FC<ActionSheetProps>;
declare const AndroidFormsCheckbox2: React.FC<AndroidFormsCheckbox2Props>;
declare const AndroidFormsRadioButton2: React.FC<AndroidFormsRadioButton2Props>;
declare const AndroidFormsSwitch2: React.FC<AndroidFormsSwitch2Props>;
declare const AndroidListsBlocksLeadEdge2: React.FC<AndroidListsBlocksLeadEdge2Props>;
declare const AndroidListsBlocksSecondaryContent: React.FC<AndroidListsBlocksSecondaryContentProps>;
declare const AndroidListsBlocksSupportingContent: React.FC<AndroidListsBlocksSupportingContentProps>;
declare const AndroidListsBlocksTrailEdge2: React.FC<AndroidListsBlocksTrailEdge2Props>;
declare const DesktopPopover: React.FC<DesktopPopoverProps>;
declare const Divider: React.FC<DividerProps>;
declare const FigmaDetails: React.FC<FigmaDetailsProps>;
declare const IOSActionSheet: React.FC<IOSActionSheetProps>;
declare const IOSButtonsBlocksEmbeddedAction: React.FC<IOSButtonsBlocksEmbeddedActionProps>;
declare const IOSFormsCheckbox2: React.FC<IOSFormsCheckbox2Props>;
declare const IOSFormsRadioButton2: React.FC<IOSFormsRadioButton2Props>;
declare const IOSFormsSwitch2: React.FC<IOSFormsSwitch2Props>;
declare const IOSListsBlocksLeadEdge2: React.FC<IOSListsBlocksLeadEdge2Props>;
declare const IOSListsBlocksPrimaryContent: React.FC<IOSListsBlocksPrimaryContentProps>;
declare const IOSListsBlocksSecondaryContent: React.FC<IOSListsBlocksSecondaryContentProps>;
declare const IOSListsBlocksTrailEdge2: React.FC<IOSListsBlocksTrailEdge2Props>;
declare const IOSListsBlocksTrailEdge3: React.FC<IOSListsBlocksTrailEdge3Props>;
declare const IOSListsHeaderRow: React.FC<IOSListsHeaderRowProps>;
declare const IOSListsRow: React.FC<IOSListsRowProps>;
declare const IOSPopover: React.FC<IOSPopoverProps>;
declare const IOSSheetsBlocksEdgeIcon3: React.FC<IOSSheetsBlocksEdgeIcon3Props>;
declare const IOSSheetsBlocksGrabberBar: React.FC<IOSSheetsBlocksGrabberBarProps>;
declare const IOSSheetsBlocksHeader: React.FC<IOSSheetsBlocksHeaderProps>;
declare const IOSSheetsBlocksLeadEdge3: React.FC<IOSSheetsBlocksLeadEdge3Props>;
declare const IOSSheetsBlocksTrailEdge4: React.FC<IOSSheetsBlocksTrailEdge4Props>;
declare const IOSSheetsPhone: React.FC<IOSSheetsPhoneProps>;
declare const IconCheckmark2: React.FC<IconCheckmark2Props>;
declare const IconChevronDown5: React.FC<IconChevronDown5Props>;
declare const IconChevronLeft3: React.FC<IconChevronLeft3Props>;
declare const IconChevronRight6: React.FC<IconChevronRight6Props>;
declare const IconInfo: React.FC<IconInfoProps>;
declare const IconMinus2: React.FC<IconMinus2Props>;
declare const IconPlaceholder7: React.FC<IconPlaceholder7Props>;
declare const IconPlaceholder9: React.FC<IconPlaceholder9Props>;
declare const IconX4: React.FC<IconX4Props>;
declare const List: React.FC<ListProps>;
declare const MobileButtonsButton3: React.FC<MobileButtonsButton3Props>;
declare const MobileButtonsIconButton: React.FC<MobileButtonsIconButtonProps>;
declare const Pointer: React.FC<PointerProps>;
declare const Popover: React.FC<PopoverProps>;
declare const Sheet: React.FC<SheetProps>;
declare const StatusBadge: React.FC<StatusBadgeProps>;
declare const StatusBlock: React.FC<StatusBlockProps>;
declare const SwatchesGeneric: React.FC<SwatchesGenericProps>;
declare const TextBlock: React.FC<TextBlockProps>;
declare const TitleBlock: React.FC<TitleBlockProps>;
declare global {
  interface Window {
    ActionSheet: React.FC<ActionSheetProps>;
    AndroidFormsCheckbox2: React.FC<AndroidFormsCheckbox2Props>;
    AndroidFormsRadioButton2: React.FC<AndroidFormsRadioButton2Props>;
    AndroidFormsSwitch2: React.FC<AndroidFormsSwitch2Props>;
    AndroidListsBlocksLeadEdge2: React.FC<AndroidListsBlocksLeadEdge2Props>;
    AndroidListsBlocksSecondaryContent: React.FC<AndroidListsBlocksSecondaryContentProps>;
    AndroidListsBlocksSupportingContent: React.FC<AndroidListsBlocksSupportingContentProps>;
    AndroidListsBlocksTrailEdge2: React.FC<AndroidListsBlocksTrailEdge2Props>;
    DesktopPopover: React.FC<DesktopPopoverProps>;
    Divider: React.FC<DividerProps>;
    FigmaDetails: React.FC<FigmaDetailsProps>;
    IOSActionSheet: React.FC<IOSActionSheetProps>;
    IOSButtonsBlocksEmbeddedAction: React.FC<IOSButtonsBlocksEmbeddedActionProps>;
    IOSFormsCheckbox2: React.FC<IOSFormsCheckbox2Props>;
    IOSFormsRadioButton2: React.FC<IOSFormsRadioButton2Props>;
    IOSFormsSwitch2: React.FC<IOSFormsSwitch2Props>;
    IOSListsBlocksLeadEdge2: React.FC<IOSListsBlocksLeadEdge2Props>;
    IOSListsBlocksPrimaryContent: React.FC<IOSListsBlocksPrimaryContentProps>;
    IOSListsBlocksSecondaryContent: React.FC<IOSListsBlocksSecondaryContentProps>;
    IOSListsBlocksTrailEdge2: React.FC<IOSListsBlocksTrailEdge2Props>;
    IOSListsBlocksTrailEdge3: React.FC<IOSListsBlocksTrailEdge3Props>;
    IOSListsHeaderRow: React.FC<IOSListsHeaderRowProps>;
    IOSListsRow: React.FC<IOSListsRowProps>;
    IOSPopover: React.FC<IOSPopoverProps>;
    IOSSheetsBlocksEdgeIcon3: React.FC<IOSSheetsBlocksEdgeIcon3Props>;
    IOSSheetsBlocksGrabberBar: React.FC<IOSSheetsBlocksGrabberBarProps>;
    IOSSheetsBlocksHeader: React.FC<IOSSheetsBlocksHeaderProps>;
    IOSSheetsBlocksLeadEdge3: React.FC<IOSSheetsBlocksLeadEdge3Props>;
    IOSSheetsBlocksTrailEdge4: React.FC<IOSSheetsBlocksTrailEdge4Props>;
    IOSSheetsPhone: React.FC<IOSSheetsPhoneProps>;
    IconCheckmark2: React.FC<IconCheckmark2Props>;
    IconChevronDown5: React.FC<IconChevronDown5Props>;
    IconChevronLeft3: React.FC<IconChevronLeft3Props>;
    IconChevronRight6: React.FC<IconChevronRight6Props>;
    IconInfo: React.FC<IconInfoProps>;
    IconMinus2: React.FC<IconMinus2Props>;
    IconPlaceholder7: React.FC<IconPlaceholder7Props>;
    IconPlaceholder9: React.FC<IconPlaceholder9Props>;
    IconX4: React.FC<IconX4Props>;
    List: React.FC<ListProps>;
    MobileButtonsButton3: React.FC<MobileButtonsButton3Props>;
    MobileButtonsIconButton: React.FC<MobileButtonsIconButtonProps>;
    Pointer: React.FC<PointerProps>;
    Popover: React.FC<PopoverProps>;
    Sheet: React.FC<SheetProps>;
    StatusBadge: React.FC<StatusBadgeProps>;
    StatusBlock: React.FC<StatusBlockProps>;
    SwatchesGeneric: React.FC<SwatchesGenericProps>;
    TextBlock: React.FC<TextBlockProps>;
    TitleBlock: React.FC<TitleBlockProps>;
  }
}
