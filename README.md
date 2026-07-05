# Adam Deane Portfolio

[![Deploy Status](https://github.com/admbahm/admbahm.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/admbahm/admbahm.github.io/actions)
[![Link Checker](https://github.com/admbahm/admbahm.github.io/actions/workflows/link-checker.yml/badge.svg)](https://github.com/admbahm/admbahm.github.io/actions)

GitHub Pages portfolio for Adam Deane.

**Live Site:** [https://admbahm.github.io](https://admbahm.github.io)

## Positioning

**Senior Platform Engineer & Engineering Manager**

Systems Engineering • High-Throughput Pipelines • SRE & Observability • Cloud Platform • Data Sovereignty

Adam Deane builds deterministic, high-throughput developer platforms, local-first LLM orchestration engines, and resilient cloud-native infrastructure. Over 20 years of hands-on technical tenure leading teams and designing systems that scale reliably under pressure.

## Core Tenets & Technical Worldview

*   **Deterministic Systems Architecture over Broad AI Guesswork**: Focus on repeatable, verifiable, and deterministic outcomes instead of probabilistic AI completions for critical pipelines.
*   **Human-In-The-Loop Engineering Verification**: Utilizing automation to amplify rather than replace engineering judgment.
*   **Data Sovereignty & Local-First Isolation**: Executing critical computations and language models locally to protect proprietary corporate assets and candidate intellectual property.

## Core Architectures

*   **The Forge**: A Go-based local LLM orchestration engine that tailors resumes and interview prep materials dynamically while protecting IP through total data sovereignty.
*   **OpenHunt**: An open-source, high-efficiency web crawling and data parsing engine written in Rust and Go, designed for highly parallel page ingestion under strict RSS memory limits.

## Local Preview

This is a static GitHub Pages site. Preview it by opening `index.html` directly, or run a local static server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy

Deployment is automated via GitHub Actions. Pushing to the `main` branch triggers the CI pipeline which runs automated tests (like link checking and HTML validation) before publishing the updated static site to GitHub Pages.
