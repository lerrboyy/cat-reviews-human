# Cat Reviews Its Human

[![Make.fun competition](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990.svg)](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![Make.fun rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/lerrboyy/cat-reviews-human/rank.svg)](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![Make.fun reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/lerrboyy/cat-reviews-human/reward.svg)](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)

A one-star review written by a house cat about the human it lives with —
an entry for the make.fun bounty
[Make the AI Judge Laugh: Cat Reviews Its Human](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990).

## The entry

> One star. My human feeds me at random hours, sleeps on MY side of the
> bed, then wakes me up to ask if I'm okay. I scream at 3am for a reason.
> Would not recommend this human.

173 characters, one line, deadpan. The cat is a disappointed customer
filing a formal complaint: the feeding schedule is chaos, the human steals
the cat's side of the bed, and the 3am scream — the most cat-specific
behaviour there is — is reframed as a justified, documented response to
the human's failures. The verdict turns the human into the reviewed
product.

## How it runs

`main.ts` holds the review, validates it against the bounty gate (a single
line, 1–200 characters, valid UTF-8, more than whitespace), and writes it
to `/output/entry.txt`. It clears only the contents of the output
directory, never the directory itself, and reads the file back to confirm
what landed on disk is exactly the validated entry.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
