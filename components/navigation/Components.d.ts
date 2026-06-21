// Components.d.ts — the complete catalog of the 38 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.AndroidSearch) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Android / Search" (node 5322:37950)
export interface AndroidSearchProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "bar" | "view";
  state?: "has placeholder" | "has focus" | "is active" | "is committed";
  query?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "arrow" (node 2306:2915)
export interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
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

// figma layer: "Desktop / Carousel / Page Control" (node 5331:1523)
export interface DesktopCarouselPageControlProps {
  className?: string;
  style?: React.CSSProperties;
  container?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}

// figma layer: "Desktop / Carousel / Pagination Controls" (node 5193:40747)
export interface DesktopCarouselPaginationControlsProps {
  className?: string;
  style?: React.CSSProperties;
  leftScroller?: boolean;
  rightScroller?: boolean;
  size?: "m" | "s";
  gradient?: boolean;
}

// figma layer: ".Desktop / Carousel / Status Indicator" (node 5193:42057)
export interface DesktopCarouselStatusIndicator2Props {
  className?: string;
  style?: React.CSSProperties;
  color?: "default" | "fixed";
  currentItem?: boolean;
  video?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: ".Desktop / Menus / Blocks / Row Content" (node 5193:19146)
export interface DesktopMenusBlocksRowContentProps {
  className?: string;
  style?: React.CSSProperties;
  text?: string;
}

// figma layer: "Desktop / Search Assist" (node 5879:314)
export interface DesktopSearchAssistProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "embedded";
  condition?: "default" | "popover open";
}

// figma layer: ".Desktop / Search / Blocks / Popover" (node 5879:244)
export interface DesktopSearchBlocksPopoverProps {
  className?: string;
  style?: React.CSSProperties;
  donTTouch?: "default" | "embedded";
  state?: "static (recent etc.)" | "active (type ahead)";
}

// figma layer: ".Desktop / Search / Blocks / Recent Search Item" (node 5879:241)
export interface DesktopSearchBlocksRecentSearchProps {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: ".Desktop / Search / Blocks / Type Ahead Item" (node 5193:41400)
export interface DesktopSearchBlocksTypeAheadProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "at rest" | "on hover" | "is active";
  query?: string;
  wordspace?: boolean;
  suggestion?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Desktop / Tab" (node 5228:2846)
export interface DesktopTabProps {
  className?: string;
  style?: React.CSSProperties;
  name?: string;
  size?: "s" | "m" | "l";
  state?: "at rest" | "is disabled" | "is selected" | "on hover";
}

// figma layer: "iOS / Search Field" (node 5193:40843)
export interface IOSSearchFieldProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "has placeholder" | "has focus" | "is active" | "is committed";
  query?: string;
  /** Text content; defaults to "􀊫". */
  text1?: string;
  /** Text content; defaults to "􀁡". */
  text2?: string;
  /** Text content; defaults to "Cancel". */
  text3?: string;
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

// figma layer: "icon/placeholder" (node 5188:8441)
export interface IconPlaceholder9Props {
  className?: string;
  style?: React.CSSProperties;
  size?: "16" | "24" | "32";
}

// figma layer: "icon/play" (node 5193:15446)
export interface IconPlay2Props {
  className?: string;
  style?: React.CSSProperties;
  size?: "24" | "32";
}

// figma layer: "icon/play-hardware" (node 5193:15035)
export interface IconPlayHardware2Props {
  className?: string;
  style?: React.CSSProperties;
  size?: "24" | "32";
}

// figma layer: "icon/restore" (node 5193:16221)
export interface IconRestoreProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "24" | "32";
}

// figma layer: "icon/search" (node 5193:7145)
export interface IconSearchProps {
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

// figma layer: "Mobile / Carousel / Page Control" (node 5193:41134)
export interface MobileCarouselPageControlProps {
  className?: string;
  style?: React.CSSProperties;
  container?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}

// figma layer: ".Mobile / Carousel / Status Indicator" (node 5193:41117)
export interface MobileCarouselStatusIndicatorProps {
  className?: string;
  style?: React.CSSProperties;
  color?: "default" | "fixed";
  currentItem?: boolean;
  video?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Mobile / Search" (node 5193:41088)
export interface MobileSearchProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "s" | "m";
  cancel?: boolean;
}

// figma layer: "Mobile / Search Assist" (node 5193:40904)
export interface MobileSearchAssistProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "recent searches etc." | "type ahead";
  device?: "phone" | "tablet";
  /** Text content; defaults to "Recent Searches". */
  text1?: string;
  /** Text content; defaults to "Quick Links". */
  text2?: string;
}

// figma layer: ".Mobile / Search / Blocks / Content" (node 5193:41064)
export interface MobileSearchBlocksContentProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "has placeholder" | "has focus" | "is active" | "is committed" | "is disabled";
  query?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: ".Mobile / Search / Blocks / Line Item" (node 5193:40897)
export interface MobileSearchBlocksLineItemProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "at rest" | "is active";
  query?: string;
}

// figma layer: ".Mobile / Search / Blocks / Recent Search Item" (node 5193:40886)
export interface MobileSearchBlocksRecentSearchProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "at rest" | "is active";
  query?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: ".Mobile / Search / Blocks / Type Ahead Item" (node 5193:40871)
export interface MobileSearchBlocksTypeAheadProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "at rest" | "is active";
  query?: string;
  wordspace?: boolean;
  suggestion?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Mobile / Tab" (node 5976:1310)
export interface MobileTabProps {
  className?: string;
  style?: React.CSSProperties;
  name?: string;
  size?: "s" | "m" | "l";
  state?: "at rest" | "is active" | "is selected" | "is disabled";
}

// figma layer: "Page Control" (node 3071:139)
export interface PageControlProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Paginated Carousel" (node 2845:5593)
export interface PaginatedCarouselProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Search" (node 3081:1492)
export interface SearchProps {
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

// figma layer: "Tab" (node 2556:4471)
export interface TabProps {
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

declare const AndroidSearch: React.FC<AndroidSearchProps>;
declare const Arrow: React.FC<ArrowProps>;
declare const DesktopButtonsIconButton3: React.FC<DesktopButtonsIconButton3Props>;
declare const DesktopCarouselPageControl: React.FC<DesktopCarouselPageControlProps>;
declare const DesktopCarouselPaginationControls: React.FC<DesktopCarouselPaginationControlsProps>;
declare const DesktopCarouselStatusIndicator2: React.FC<DesktopCarouselStatusIndicator2Props>;
declare const DesktopMenusBlocksRowContent: React.FC<DesktopMenusBlocksRowContentProps>;
declare const DesktopSearchAssist: React.FC<DesktopSearchAssistProps>;
declare const DesktopSearchBlocksPopover: React.FC<DesktopSearchBlocksPopoverProps>;
declare const DesktopSearchBlocksRecentSearch: React.FC<DesktopSearchBlocksRecentSearchProps>;
declare const DesktopSearchBlocksTypeAhead: React.FC<DesktopSearchBlocksTypeAheadProps>;
declare const DesktopTab: React.FC<DesktopTabProps>;
declare const IOSSearchField: React.FC<IOSSearchFieldProps>;
declare const IconChevronLeft3: React.FC<IconChevronLeft3Props>;
declare const IconChevronRight6: React.FC<IconChevronRight6Props>;
declare const IconPlaceholder9: React.FC<IconPlaceholder9Props>;
declare const IconPlay2: React.FC<IconPlay2Props>;
declare const IconPlayHardware2: React.FC<IconPlayHardware2Props>;
declare const IconRestore: React.FC<IconRestoreProps>;
declare const IconSearch: React.FC<IconSearchProps>;
declare const IconX4: React.FC<IconX4Props>;
declare const MobileCarouselPageControl: React.FC<MobileCarouselPageControlProps>;
declare const MobileCarouselStatusIndicator: React.FC<MobileCarouselStatusIndicatorProps>;
declare const MobileSearch: React.FC<MobileSearchProps>;
declare const MobileSearchAssist: React.FC<MobileSearchAssistProps>;
declare const MobileSearchBlocksContent: React.FC<MobileSearchBlocksContentProps>;
declare const MobileSearchBlocksLineItem: React.FC<MobileSearchBlocksLineItemProps>;
declare const MobileSearchBlocksRecentSearch: React.FC<MobileSearchBlocksRecentSearchProps>;
declare const MobileSearchBlocksTypeAhead: React.FC<MobileSearchBlocksTypeAheadProps>;
declare const MobileTab: React.FC<MobileTabProps>;
declare const PageControl: React.FC<PageControlProps>;
declare const PaginatedCarousel: React.FC<PaginatedCarouselProps>;
declare const Search: React.FC<SearchProps>;
declare const StatusBadge: React.FC<StatusBadgeProps>;
declare const StatusBlock: React.FC<StatusBlockProps>;
declare const Tab: React.FC<TabProps>;
declare const TextBlock: React.FC<TextBlockProps>;
declare const TitleBlock: React.FC<TitleBlockProps>;
declare global {
  interface Window {
    AndroidSearch: React.FC<AndroidSearchProps>;
    Arrow: React.FC<ArrowProps>;
    DesktopButtonsIconButton3: React.FC<DesktopButtonsIconButton3Props>;
    DesktopCarouselPageControl: React.FC<DesktopCarouselPageControlProps>;
    DesktopCarouselPaginationControls: React.FC<DesktopCarouselPaginationControlsProps>;
    DesktopCarouselStatusIndicator2: React.FC<DesktopCarouselStatusIndicator2Props>;
    DesktopMenusBlocksRowContent: React.FC<DesktopMenusBlocksRowContentProps>;
    DesktopSearchAssist: React.FC<DesktopSearchAssistProps>;
    DesktopSearchBlocksPopover: React.FC<DesktopSearchBlocksPopoverProps>;
    DesktopSearchBlocksRecentSearch: React.FC<DesktopSearchBlocksRecentSearchProps>;
    DesktopSearchBlocksTypeAhead: React.FC<DesktopSearchBlocksTypeAheadProps>;
    DesktopTab: React.FC<DesktopTabProps>;
    IOSSearchField: React.FC<IOSSearchFieldProps>;
    IconChevronLeft3: React.FC<IconChevronLeft3Props>;
    IconChevronRight6: React.FC<IconChevronRight6Props>;
    IconPlaceholder9: React.FC<IconPlaceholder9Props>;
    IconPlay2: React.FC<IconPlay2Props>;
    IconPlayHardware2: React.FC<IconPlayHardware2Props>;
    IconRestore: React.FC<IconRestoreProps>;
    IconSearch: React.FC<IconSearchProps>;
    IconX4: React.FC<IconX4Props>;
    MobileCarouselPageControl: React.FC<MobileCarouselPageControlProps>;
    MobileCarouselStatusIndicator: React.FC<MobileCarouselStatusIndicatorProps>;
    MobileSearch: React.FC<MobileSearchProps>;
    MobileSearchAssist: React.FC<MobileSearchAssistProps>;
    MobileSearchBlocksContent: React.FC<MobileSearchBlocksContentProps>;
    MobileSearchBlocksLineItem: React.FC<MobileSearchBlocksLineItemProps>;
    MobileSearchBlocksRecentSearch: React.FC<MobileSearchBlocksRecentSearchProps>;
    MobileSearchBlocksTypeAhead: React.FC<MobileSearchBlocksTypeAheadProps>;
    MobileTab: React.FC<MobileTabProps>;
    PageControl: React.FC<PageControlProps>;
    PaginatedCarousel: React.FC<PaginatedCarouselProps>;
    Search: React.FC<SearchProps>;
    StatusBadge: React.FC<StatusBadgeProps>;
    StatusBlock: React.FC<StatusBlockProps>;
    Tab: React.FC<TabProps>;
    TextBlock: React.FC<TextBlockProps>;
    TitleBlock: React.FC<TitleBlockProps>;
  }
}
