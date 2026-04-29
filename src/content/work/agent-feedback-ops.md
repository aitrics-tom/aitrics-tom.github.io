---
title: Decoupled Training for Long-Tailed Classification With Stochastic Representations
slug: decoupled-training-long-tailed-classification
kind: paper
summary: ICLR 2023 paper on decoupled long-tailed classification using SWA-Gaussian stochastic representations and self-distillation.
year: 2023
authors:
  - Giung Nam
  - Sunguk Jang
  - Juho Lee
venue: ICLR 2023 Poster
topics:
  - long-tailed-learning
  - classification
  - uncertainty
links:
  paper: https://openreview.net/forum?id=bcYZwYo-0t
  slides: https://iclr.cc/media/iclr-2023/Slides/11593.pdf
featured: true
status: published
language: en
cover: /media/publications/decoupled-training-overview.svg
---

## Overview

This paper studies long-tailed classification through stochastic representations and a decoupled training strategy, a strong fit for a research profile that emphasizes robust learning rather than only product-style demos.

It first uses Stochastic Weight Averaging to obtain better-generalizing feature extractors, then re-trains the classifier with stochastic representations from SWA-Gaussian and a self-distillation strategy. Experiments cover CIFAR10/100-LT, ImageNet-LT, and iNaturalist-2018, with improvements in both prediction accuracy and uncertainty estimation.

## Why it matters

It provides a concrete, externally verifiable publication anchor for the portfolio and connects directly to the KAIST SIML Lab period listed elsewhere on the site.
