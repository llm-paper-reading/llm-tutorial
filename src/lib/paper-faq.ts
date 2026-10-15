import attentionTransformerFAQ from "@/app/papers/attention-transformer/faq";
import deepseekOcrFAQ from "@/app/papers/deepseek-ocr/faq";
import deepseekV3FAQ from "@/app/papers/deepseek-v3/faq";
import deepseekV32FAQ from "@/app/papers/deepseek-v3-2/faq";
import deepseekV4FAQ from "@/app/papers/deepseek-v4/faq";
import distillingKnowledgeFAQ from "@/app/papers/distilling-knowledge/faq";
import dpoRafailovFAQ from "@/app/papers/dpo-rafailov/faq";
import glm45FAQ from "@/app/papers/glm-45/faq";
import glm5FAQ from "@/app/papers/glm-5/faq";
import grpoDeepseekR1FAQ from "@/app/papers/grpo-deepseek-r1/faq";
import internvl35FAQ from "@/app/papers/internvl35/faq";
import kimiK15FAQ from "@/app/papers/kimi-k15/faq";
import kimiK2FAQ from "@/app/papers/kimi-k2/faq";
import kimiK3FAQ from "@/app/papers/kimi-k3/faq";
import mimoV2FlashFAQ from "@/app/papers/mimo-v2-flash/faq";
import minillmGuFAQ from "@/app/papers/minillm-gu/faq";
import minimaxM3FAQ from "@/app/papers/minimax-m3/faq";
import nemotronCascade2FAQ from "@/app/papers/nemotron-cascade-2/faq";
import opdAgarwalFAQ from "@/app/papers/opd-agarwal/faq";
import ppoSchulmanFAQ from "@/app/papers/ppo-schulman/faq";
import qwen3FAQ from "@/app/papers/qwen3/faq";
import qwen3VlFAQ from "@/app/papers/qwen3-vl/faq";
import rethinkingOpdFAQ from "@/app/papers/rethinking-opd/faq";
import tmlOpdFAQ from "@/app/papers/tml-opd/faq";
import uiTars2FAQ from "@/app/papers/ui-tars-2/faq";

export interface PaperFAQItem {
  id: string;
  question: string;
  answer: string[];
  bullets?: string[];
  takeaway?: string;
}

export type PaperFAQ = PaperFAQItem[];

const paperFAQBySlug: Partial<Record<string, PaperFAQ>> = {
  "attention-transformer": attentionTransformerFAQ,
  "deepseek-ocr": deepseekOcrFAQ,
  "deepseek-v3": deepseekV3FAQ,
  "deepseek-v3-2": deepseekV32FAQ,
  "deepseek-v4": deepseekV4FAQ,
  "distilling-knowledge": distillingKnowledgeFAQ,
  "dpo-rafailov": dpoRafailovFAQ,
  "glm-45": glm45FAQ,
  "glm-5": glm5FAQ,
  "grpo-deepseek-r1": grpoDeepseekR1FAQ,
  "internvl35": internvl35FAQ,
  "kimi-k15": kimiK15FAQ,
  "kimi-k2": kimiK2FAQ,
  "kimi-k3": kimiK3FAQ,
  "mimo-v2-flash": mimoV2FlashFAQ,
  "minillm-gu": minillmGuFAQ,
  "minimax-m3": minimaxM3FAQ,
  "nemotron-cascade-2": nemotronCascade2FAQ,
  "opd-agarwal": opdAgarwalFAQ,
  "ppo-schulman": ppoSchulmanFAQ,
  "qwen3": qwen3FAQ,
  "qwen3-vl": qwen3VlFAQ,
  "rethinking-opd": rethinkingOpdFAQ,
  "tml-opd": tmlOpdFAQ,
  "ui-tars-2": uiTars2FAQ,
};

export function getPaperFAQ(slug: string): PaperFAQ {
  return paperFAQBySlug[slug] ?? [];
}
