# PRE-BASELINE-2026-09-01

**Дата deploy, зафиксированная в истории:** 2026-09-01  
**Production commit:** `NOT_AVAILABLE`

Этот документ хранит подтверждённые исторические изменения, описанные в прежнем документе `Initial SEO Deployment`. Он не является experiment log и не содержит утверждений об эффекте изменений.

## Confirmed pre-baseline changes

- Сайт расширен до пяти индексируемых URL: `/`, `/lizing/`, `/harakteristiki/`, `/shanmon-388/`, `/zapchasti-shanmon/`.
- На этих страницах присутствуют уникальные `title`, meta description, self-referencing canonical и `robots` с `index, follow, max-image-preview:large`.
- Добавлены `robots.txt` с `Allow: /` и ссылкой на sitemap, а также sitemap с пятью canonical URL.
- На главной присутствуют Open Graph и Twitter metadata.
- В текущей версии присутствует JSON-LD:
  - главная: `Organization`, `Product`, `FAQPage`;
  - `/lizing/`: `Organization`, `FAQPage`;
  - `/shanmon-388/`: `Organization`, `Product`, `FAQPage`;
  - `/zapchasti-shanmon/`: `Organization`, `FAQPage`.
- Главная содержит коммерческую информацию о SHANMON 388H: цена по запросу, наличие, DDP Челябинск / Забайкальск, гарантия 12 месяцев или 1000 м/ч, доставка по всей России с условиями в коммерческом предложении.
- Созданы отдельные страницы лизинга, характеристик SHANMON 388H, SHANMON 388 под заказ и подбора запчастей.
- Добавлены внутренняя перелинковка, FAQ, контакты ООО «АМУР» и форма Formspree.
- Яндекс Метрика `107081419` присутствует на главной странице.

## Interpretation

These changes happened before the SiteMind baseline.

Their SEO impact is currently unknown.

They are historical pre-baseline changes, not isolated controlled experiments.

Any future change in indexing, impressions, queries, positions or clicks
must not automatically be attributed to these changes.
