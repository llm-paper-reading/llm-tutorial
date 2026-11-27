import attentionTransformerFAQ from "@/app/papers/attention-transformer/faq";
import llama3FAQ from "@/app/papers/llama3/faq";
import gpt3FAQ from "@/app/papers/gpt3/faq";
import flashAttentionFAQ from "@/app/papers/flash-attention/faq";
import scalingLawsFAQ from "@/app/papers/scaling-laws/faq";
import constitutionalAIFAQ from "@/app/papers/constitutional-ai/faq";
import chainOfThoughtFAQ from "@/app/papers/chain-of-thought/faq";
import mixtralFAQ from "@/app/papers/mixtral/faq";
import mambaFAQ from "@/app/papers/mamba/faq";
import vllmFAQ from "@/app/papers/vllm/faq";
import instructgptFAQ from "@/app/papers/instructgpt/faq";
import deepseekR1FAQ from "@/app/papers/deepseek-r1/faq";
import deepseekOcrFAQ from "@/app/papers/deepseek-ocr/faq";
import deepseekV3FAQ from "@/app/papers/deepseek-v3/faq";
import deepseekV32FAQ from "@/app/papers/deepseek-v3-2/faq";
import deepseekV4FAQ from "@/app/papers/deepseek-v4/faq";
import dsparkFAQ from "@/app/papers/dspark/faq";
import timesfmFAQ from "@/app/papers/timesfm/faq";
import timesfm3FAQ from "@/app/papers/timesfm-3/faq";
import deepTsSurveyFAQ from "@/app/papers/deep-ts-survey/faq";
import timexerFAQ from "@/app/papers/timexer/faq";
import momentFAQ from "@/app/papers/moment/faq";
import moiraiFAQ from "@/app/papers/moirai/faq";
import ssrPurchaseIntentFAQ from "@/app/papers/ssr-purchase-intent/faq";
import ctvaeProductLineFAQ from "@/app/papers/ctvae-product-line/faq";
import distillingKnowledgeFAQ from "@/app/papers/distilling-knowledge/faq";
import knowledgeDistillationSurveyFAQ from "@/app/papers/kd-survey-gou-2021/faq";
import kdComprehensiveSurveyFAQ from "@/app/papers/kd-survey-mansourian-2025/faq";
import llmKdSurveyFAQ from "@/app/papers/llm-kd-survey-xu-2024/faq";
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
import qwen1FAQ from "@/app/papers/qwen1/faq";
import qwen2FAQ from "@/app/papers/qwen2/faq";
import qwen25FAQ from "@/app/papers/qwen2-5/faq";
import qwen25CoderFAQ from "@/app/papers/qwen2-5-coder/faq";
import qwen25VlFAQ from "@/app/papers/qwen2-5-vl/faq";
import qwen3FAQ from "@/app/papers/qwen3/faq";
import qwen3VlFAQ from "@/app/papers/qwen3-vl/faq";
import rethinkingOpdFAQ from "@/app/papers/rethinking-opd/faq";
import tmlOpdFAQ from "@/app/papers/tml-opd/faq";
import uiTars2FAQ from "@/app/papers/ui-tars-2/faq";
import oneFitsAllFAQ from "@/app/papers/one-fits-all/faq";
import timeLlmFAQ from "@/app/papers/time-llm/faq";
import timehf20FAQ from "@/app/papers/timehf-2-0/faq";
import chronos2FAQ from "@/app/papers/chronos-2/faq";
import moirai2FAQ from "@/app/papers/moirai-2/faq";
import mallesFAQ from "@/app/papers/malles/faq";
import cdlfFAQ from "@/app/papers/cdlf/faq";
import tmamlFAQ from "@/app/papers/tmaml/faq";

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
  "llama3": llama3FAQ,
  "gpt3": gpt3FAQ,
  "flash-attention": flashAttentionFAQ,
  "scaling-laws": scalingLawsFAQ,
  "constitutional-ai": constitutionalAIFAQ,
  "chain-of-thought": chainOfThoughtFAQ,
  "mixtral": mixtralFAQ,
  "mamba": mambaFAQ,
  "vllm": vllmFAQ,
  "instructgpt": instructgptFAQ,
  "deepseek-r1": deepseekR1FAQ,
  "deepseek-ocr": deepseekOcrFAQ,
  "deepseek-v3": deepseekV3FAQ,
  "deepseek-v3-2": deepseekV32FAQ,
  "deepseek-v4": deepseekV4FAQ,
  "dspark": dsparkFAQ,
  "timesfm": timesfmFAQ,
  "timesfm-3": timesfm3FAQ,
  "deep-ts-survey": deepTsSurveyFAQ,
  "timexer": timexerFAQ,
  "moment": momentFAQ,
  "moirai": moiraiFAQ,
  "ssr-purchase-intent": ssrPurchaseIntentFAQ,
  "ctvae-product-line": ctvaeProductLineFAQ,
  "distilling-knowledge": distillingKnowledgeFAQ,
  "kd-survey-gou-2021": knowledgeDistillationSurveyFAQ,
  "kd-survey-mansourian-2025": kdComprehensiveSurveyFAQ,
  "llm-kd-survey-xu-2024": llmKdSurveyFAQ,
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
  "qwen1": qwen1FAQ,
  "qwen2": qwen2FAQ,
  "qwen2-5": qwen25FAQ,
  "qwen2-5-coder": qwen25CoderFAQ,
  "qwen2-5-vl": qwen25VlFAQ,
  "qwen3": qwen3FAQ,
  "qwen3-vl": qwen3VlFAQ,
  "rethinking-opd": rethinkingOpdFAQ,
  "tml-opd": tmlOpdFAQ,
  "ui-tars-2": uiTars2FAQ,
  "one-fits-all": oneFitsAllFAQ,
  "time-llm": timeLlmFAQ,
  "timehf-2-0": timehf20FAQ,
  "chronos-2": chronos2FAQ,
  "moirai-2": moirai2FAQ,
  "malles": mallesFAQ,
  "cdlf": cdlfFAQ,
  "tmaml": tmamlFAQ,
};

export function getPaperFAQ(slug: string): PaperFAQ {
  return paperFAQBySlug[slug] ?? [];
}
