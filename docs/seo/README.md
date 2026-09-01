# SiteMind SEO documentation

Документация `docs/seo/` ведёт ручной процесс SiteMind experiments для `shanmon74.ru`.

```text
BASELINE
↓
OBSERVATION
↓
EVIDENCE
↓
HYPOTHESIS
↓
MANUAL SEO EXPERIMENT
↓
MEASUREMENT
↓
VERDICT
↓
LEARNING
```

## Структура

- `baselines/` — неизменяемые точки измерения, полученные из фактических данных.
- `changes/` — исторические изменения, сделанные до baseline либо вне изолированного эксперимента.
- `experiments/` — только контролируемые ручные SEO experiments после появления evidence.

## Правила работы

- SiteMind пока не разрабатывается.
- Сначала проводятся 3–5 manual SEO experiments, затем оценивается, что имеет смысл автоматизировать.
- Codex отвечает за **HOW**: изучение реализации, минимальное изменение, проверку и build.
- SEO/SiteMind workflow отвечает за **WHAT + WHY**: наблюдение, evidence, гипотезу и критерии измерения.
- Значимые изменения требуют human approval.
- `correlation != causation`: изменение метрик не доказывает причинный эффект без сопоставимого baseline и observation window.
- Отсутствие доказательства улучшения не является успехом.

> Нет SEO-изменения без зафиксированных baseline, evidence, hypothesis, measurement и learning.
