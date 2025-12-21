import { ListSection } from "./ListSection";
import { TagsSection } from "./TagsSection";
import { TextSection } from "./TextSection";
import { TimelineSection } from "./TimelineSection";

export const sectionRendererMap = {
	text: TextSection,
	list: ListSection,
	timeline: TimelineSection,
	tags: TagsSection,
};
