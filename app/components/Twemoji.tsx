import kebabCase from "~/lib/utils/kebabCase";
import type { TwemojiProps } from "~/types";

export function Twemoji({ emoji, size = "twa-lg", className }: TwemojiProps) {
  let cls = `inline-block twa ${size} twa-${kebabCase(emoji)} ${
    className || ""
  }`;
  return <i className={cls.trim()} />;
}

export default Twemoji;
