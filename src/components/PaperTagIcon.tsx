import { ChatGLM, DeepSeek, Meta, Minimax, OpenAI, Qwen } from "@lobehub/icons";
import { getTagIcon, getTagIconSrc } from "@/lib/paper-tags";

export default function PaperTagIcon({
  tag,
  className = "block h-4 w-4 shrink-0",
}: {
  tag: string;
  className?: string;
}) {
  if (tag === "DeepSeek 系列") {
    return <DeepSeek.Color className={className} size="1em" />;
  }

  if (tag === "GLM 系列") {
    return <ChatGLM.Color className={className} size="1em" />;
  }

  if (tag === "MiniMax 系列") {
    return <Minimax.Color className={className} size="1em" />;
  }

  if (tag === "Qwen 系列") {
    return <Qwen.Color className={className} size="1em" />;
  }

  if (tag === "Llama 系列") {
    return <Meta.Color className={className} size="1em" />;
  }

  if (tag === "GPT 系列") {
    return <OpenAI className={className} size="1em" />;
  }

  const iconSrc = getTagIconSrc(tag);
  if (iconSrc) {
    return (
      <img
        src={iconSrc}
        alt=""
        aria-hidden="true"
        className={`${className} rounded-sm object-contain`}
      />
    );
  }

  return <span>{getTagIcon(tag)}</span>;
}
