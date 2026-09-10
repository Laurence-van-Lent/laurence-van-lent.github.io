# Repository instructions

## Project

This repository contains an academic accounting manuscript targeted at the
Journal of Accounting and Economics. The manuscript is written in LaTeX.

## Authoritative sources

Before working on the manuscript, read:

1. `REVISION_SPEC.md`
2. `EVIDENCE_REGISTER.md`
3. the complete main manuscript and all files included through `\input` or
   `\include`

Treat `REVISION_SPEC.md` as controlling when the current manuscript reflects
an earlier framing.

## Substantive rules

- Do not invent, alter, round, reconcile, or infer numerical results.
- Use only empirical results recorded in `EVIDENCE_REGISTER.md` or displayed
  in an identified final table.
- Do not add, remove, or reinterpret citations without explicit approval.
- Do not describe a predictive estimate as causal.
- Do not equate public evidence with underlying harm.
- Do not describe RepRisk novelty as the first occurrence of underlying harm.
- Do not describe the post-2020 comparison as a clean monitoring shock.
- Do not claim that a sentence has been matched to a later incident.
- Distinguish discussion, underlying risk, subsequent harm, public evidence,
  monitoring, visibility, and contestability consistently.
- Preserve null findings and qualifications.

## Editing rules

- Work only on the section explicitly authorized in the task.
- Make the smallest changes needed to implement the agreed argument.
- Do not rewrite unrelated passages.
- Preserve LaTeX commands, labels, citations, references, footnotes, equations,
  table references, and figure references unless a change is necessary.
- Do not edit empirical tables, figures, bibliography entries, or data files
  unless the task expressly authorizes it.
- Use precise, restrained academic English suitable for JAE.
- Do not use em dashes.
- Do not commit, push, merge, or delete branches.

## Verification

After editing:

- Report every file changed.
- List all substantive claims introduced, removed, or narrowed.
- Identify any unresolved factual or empirical question.
- Run the repository's established LaTeX compilation command if one is
  documented and available.
- If compilation cannot be run, state this directly.
- Do not install a TeX distribution or substantial dependency without
  permission.