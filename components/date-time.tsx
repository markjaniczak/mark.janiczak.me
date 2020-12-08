import { format } from "date-fns";

export const DateTime: React.FC<{ date: string }> = ({ date }) => (
	<time dateTime={date}>{format(new Date(date), "MMMM dd, yyyy")}</time>
);
