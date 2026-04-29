---
title: "SCAD: Super-Class-Aware Debiasing for Long-Tailed Semi-Supervised Learning"
slug: scad-long-tailed-semi-supervised-learning
kind: paper
summary: ICLR 2026 Poster on long-tailed semi-supervised learning that uses semantic super-classes to address local imbalance and pseudo-label bias amplification.
year: 2026
authors:
  - Sunguk Jang
  - Jinwoo Jeon
  - Byung-Jun Lee
venue: ICLR 2026 Poster
topics:
  - long-tailed-learning
  - semi-supervised-learning
  - class-imbalance
links:
  paper: https://openreview.net/forum?id=aSCtAZEcRa
featured: true
status: published
language: en
cover: /media/publications/scad-overview.svg
---

## Overview

SCAD addresses long-tailed semi-supervised learning by using semantic super-classes to debias representation learning under heavy class imbalance.

The paper identifies intra-super-class imbalance: a setting where semantically similar classes are also locally imbalanced, causing early pseudo-labeling errors to reinforce majority-class representations. SCAD introduces dynamic, super-class-aware logit adjustment so that debiasing is concentrated on the most confusable semantic groups.

## Why it matters

The paper fits naturally with a profile centered on robust learning under data scarcity, especially when rare classes matter disproportionately in real-world data.

The AITRICS publication page lists Sunguk Jang and Jinwoo Jeon as equal-contribution authors, making this the strongest current publication anchor for long-tailed semi-supervised learning on the portfolio.
