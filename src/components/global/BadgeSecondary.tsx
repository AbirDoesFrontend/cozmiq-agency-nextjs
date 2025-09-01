import {BadgeSecondaryProps} from "@/types/ui/button";

export default function BadgeSecondary({text}: BadgeSecondaryProps) {
  return (
    <span
      className={"section-badge"}
    >
        <span>{text}</span>
    </span>
  );
}