// Components.d.ts — the complete catalog of the 31 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.DesktopButtonsIconButton3) and usable directly in JSX.
import * as React from 'react';

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

// figma layer: "Desktop / Forms / Stepper" (node 5326:3380)
export interface DesktopFormsStepperProps {
  className?: string;
  style?: React.CSSProperties;
  label?: boolean;
  input?: boolean;
  support?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}

// figma layer: ".Desktop / Inputs / Blocks / Content" (node 3429:426)
export interface DesktopInputsBlocksContentProps {
  className?: string;
  style?: React.CSSProperties;
  status?: "default" | "placeholder";
  content?: string;
}

// figma layer: ".Desktop / Inputs / Blocks / Content" (node 5193:20154)
export interface DesktopInputsBlocksContent2Props {
  className?: string;
  style?: React.CSSProperties;
  status?: "default" | "placeholder";
  content?: string;
}

// figma layer: ".Desktop / Inputs / Blocks / Label" (node 5193:19723)
export interface DesktopInputsBlocksLabelProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
}

// figma layer: ".Desktop / Inputs / Blocks / Metric" (node 3429:433)
export interface DesktopInputsBlocksMetricProps {
  className?: string;
  style?: React.CSSProperties;
  metric?: string;
}

// figma layer: ".Desktop / Inputs / Blocks / Metric" (node 5323:2747)
export interface DesktopInputsBlocksMetric2Props {
  className?: string;
  style?: React.CSSProperties;
  metric?: string;
}

// figma layer: ".Desktop / Inputs / Blocks / Rocker" (node 5323:2781)
export interface DesktopInputsBlocksRockerProps {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: ".Desktop / Inputs / Blocks / Rocker Elements" (node 5323:2762)
export interface DesktopInputsBlocksRockerElementsProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "up" | "down";
  state?: "at rest" | "on hover" | "is active";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: ".Desktop / Inputs / Blocks / Size" (node 5326:3375)
export interface DesktopInputsBlocksSizeProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "s" | "m";
}

// figma layer: ".Desktop / Inputs / Blocks / State" (node 5326:3306)
export interface DesktopInputsBlocksState3Props {
  className?: string;
  style?: React.CSSProperties;
  type?: "text" | "number";
  state?: "at rest" | "has error" | "has focus" | "is disabled" | "is highlighted" | "on hover";
  lead?: boolean;
  icon?: React.ReactNode;
  rocker?: boolean;
  trail?: boolean;
  icon2?: React.ReactNode;
}

// figma layer: ".Desktop / Inputs / Blocks / Supporting Text" (node 5193:19760)
export interface DesktopInputsBlocksSupportingText2Props {
  className?: string;
  style?: React.CSSProperties;
  text?: string;
  state?: "at rest" | "has error" | "is disabled";
}

// figma layer: ".Desktop / Inputs / Blocks / UoM" (node 4593:44125)
export interface DesktopInputsBlocksUoMProps {
  className?: string;
  style?: React.CSSProperties;
  metric?: "x" | "y" | "w" | "h" | "%" | "in";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: ".Desktop / Inputs / Blocks / UoM" (node 5323:2749)
export interface DesktopInputsBlocksUoM2Props {
  className?: string;
  style?: React.CSSProperties;
  metric?: "x" | "y" | "w" | "h" | "%" | "in";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: ".f/forms/d/input/content" (node 1841:6775)
export interface FFormsDInputContentProps {
  className?: string;
  style?: React.CSSProperties;
  status?: "default" | "placeholder";
  content?: string;
}

// figma layer: "iOS / Inputs / Stepper" (node 5193:30744)
export interface IOSInputsStepperProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "􀅽". */
  text1?: string;
  /** Text content; defaults to "􀅼". */
  text2?: string;
}

// figma layer: "icon/chevron-down" (node 5193:16361)
export interface IconChevronDown5Props {
  className?: string;
  style?: React.CSSProperties;
  size?: "16" | "24" | "32";
}

// figma layer: "icon/chevron-up" (node 5193:13868)
export interface IconChevronUpProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "16" | "24" | "32";
}

// figma layer: "icon/machine" (node 5193:8398)
export interface IconMachineProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "24" | "32";
}

// figma layer: "icon/minus-circle" (node 5193:15651)
export interface IconMinusCircleProps {
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

// figma layer: "icon/plus-circle" (node 5193:15584)
export interface IconPlusCircleProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "24" | "32";
}

// figma layer: "icon/rotate" (node 5193:15002)
export interface IconRotateProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "24" | "32";
}

// figma layer: "icon/text-format-horizontal" (node 5193:13375)
export interface IconTextFormatHorizontalProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "24" | "32";
}

// figma layer: "Input" (node 3421:4625)
export interface InputProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Mobile / Forms / Stepper" (node 5193:29344)
export interface MobileFormsStepperProps {
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

// figma layer: "Stepper" (node 3000:2149)
export interface StepperProps {
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

// figma layer: ".title_block" (node 1126:1942)
export interface TitleBlockProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Title". */
  text1?: string;
  /** Text content; defaults to "Description". */
  text2?: string;
}

declare const DesktopButtonsIconButton3: React.FC<DesktopButtonsIconButton3Props>;
declare const DesktopFormsStepper: React.FC<DesktopFormsStepperProps>;
declare const DesktopInputsBlocksContent: React.FC<DesktopInputsBlocksContentProps>;
declare const DesktopInputsBlocksContent2: React.FC<DesktopInputsBlocksContent2Props>;
declare const DesktopInputsBlocksLabel: React.FC<DesktopInputsBlocksLabelProps>;
declare const DesktopInputsBlocksMetric: React.FC<DesktopInputsBlocksMetricProps>;
declare const DesktopInputsBlocksMetric2: React.FC<DesktopInputsBlocksMetric2Props>;
declare const DesktopInputsBlocksRocker: React.FC<DesktopInputsBlocksRockerProps>;
declare const DesktopInputsBlocksRockerElements: React.FC<DesktopInputsBlocksRockerElementsProps>;
declare const DesktopInputsBlocksSize: React.FC<DesktopInputsBlocksSizeProps>;
declare const DesktopInputsBlocksState3: React.FC<DesktopInputsBlocksState3Props>;
declare const DesktopInputsBlocksSupportingText2: React.FC<DesktopInputsBlocksSupportingText2Props>;
declare const DesktopInputsBlocksUoM: React.FC<DesktopInputsBlocksUoMProps>;
declare const DesktopInputsBlocksUoM2: React.FC<DesktopInputsBlocksUoM2Props>;
declare const FFormsDInputContent: React.FC<FFormsDInputContentProps>;
declare const IOSInputsStepper: React.FC<IOSInputsStepperProps>;
declare const IconChevronDown5: React.FC<IconChevronDown5Props>;
declare const IconChevronUp: React.FC<IconChevronUpProps>;
declare const IconMachine: React.FC<IconMachineProps>;
declare const IconMinusCircle: React.FC<IconMinusCircleProps>;
declare const IconPlaceholder9: React.FC<IconPlaceholder9Props>;
declare const IconPlusCircle: React.FC<IconPlusCircleProps>;
declare const IconRotate: React.FC<IconRotateProps>;
declare const IconTextFormatHorizontal: React.FC<IconTextFormatHorizontalProps>;
declare const Input: React.FC<InputProps>;
declare const MobileFormsStepper: React.FC<MobileFormsStepperProps>;
declare const StatusBadge: React.FC<StatusBadgeProps>;
declare const StatusBlock: React.FC<StatusBlockProps>;
declare const Stepper: React.FC<StepperProps>;
declare const TextBlock: React.FC<TextBlockProps>;
declare const TitleBlock: React.FC<TitleBlockProps>;
declare global {
  interface Window {
    DesktopButtonsIconButton3: React.FC<DesktopButtonsIconButton3Props>;
    DesktopFormsStepper: React.FC<DesktopFormsStepperProps>;
    DesktopInputsBlocksContent: React.FC<DesktopInputsBlocksContentProps>;
    DesktopInputsBlocksContent2: React.FC<DesktopInputsBlocksContent2Props>;
    DesktopInputsBlocksLabel: React.FC<DesktopInputsBlocksLabelProps>;
    DesktopInputsBlocksMetric: React.FC<DesktopInputsBlocksMetricProps>;
    DesktopInputsBlocksMetric2: React.FC<DesktopInputsBlocksMetric2Props>;
    DesktopInputsBlocksRocker: React.FC<DesktopInputsBlocksRockerProps>;
    DesktopInputsBlocksRockerElements: React.FC<DesktopInputsBlocksRockerElementsProps>;
    DesktopInputsBlocksSize: React.FC<DesktopInputsBlocksSizeProps>;
    DesktopInputsBlocksState3: React.FC<DesktopInputsBlocksState3Props>;
    DesktopInputsBlocksSupportingText2: React.FC<DesktopInputsBlocksSupportingText2Props>;
    DesktopInputsBlocksUoM: React.FC<DesktopInputsBlocksUoMProps>;
    DesktopInputsBlocksUoM2: React.FC<DesktopInputsBlocksUoM2Props>;
    FFormsDInputContent: React.FC<FFormsDInputContentProps>;
    IOSInputsStepper: React.FC<IOSInputsStepperProps>;
    IconChevronDown5: React.FC<IconChevronDown5Props>;
    IconChevronUp: React.FC<IconChevronUpProps>;
    IconMachine: React.FC<IconMachineProps>;
    IconMinusCircle: React.FC<IconMinusCircleProps>;
    IconPlaceholder9: React.FC<IconPlaceholder9Props>;
    IconPlusCircle: React.FC<IconPlusCircleProps>;
    IconRotate: React.FC<IconRotateProps>;
    IconTextFormatHorizontal: React.FC<IconTextFormatHorizontalProps>;
    Input: React.FC<InputProps>;
    MobileFormsStepper: React.FC<MobileFormsStepperProps>;
    StatusBadge: React.FC<StatusBadgeProps>;
    StatusBlock: React.FC<StatusBlockProps>;
    Stepper: React.FC<StepperProps>;
    TextBlock: React.FC<TextBlockProps>;
    TitleBlock: React.FC<TitleBlockProps>;
  }
}
