---
title: Quick Start
description: Get started with BrowserSec tools and technologies
---
<!-- 
# Getting Started with BrowserSec

This guide will help you get up and running with BrowserSec's open source browser security tools.

## Prerequisites

- Node.js 14 or higher
- Docker and Docker Compose (for KubeBrowse)
- Kubernetes cluster (for production deployments)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/browsersec/browsersec-tools.git
cd browsersec-tools
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Your Environment

Create a `.env` file based on the provided example:

```bash
cp .env.example .env
```

Edit the `.env` file to match your environment settings.

### 4. Run the Detection Engine

```bash
npm run detection-engine
```

This will start the browser detection service on port 3000.

## Using the Browser Detection API

Once the detection engine is running, you can use the API to detect browser-based threats:

```javascript
// Example API usage
const response = await fetch('http://localhost:3000/api/analyze', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    url: 'https://example.com',
    options: {
      depth: 2,
      scanJavaScript: true
    }
  }),
});

const result = await response.json();
console.log(result);
```

## Setting Up KubeBrowse

For detailed instructions on setting up KubeBrowse, our Kubernetes-based secure browsing solution, see the [KubeBrowse Documentation](/products/kubebrowse).

## Next Steps

- Learn about [Browser Detection](/guides/browser-detection) techniques
- Explore [Security Response](/guides/security-response) automation
- Join our [Discord Community](https://discord.gg/browsersec) to connect with other users and contributors
- Check out the [API Reference](/reference/api) for detailed endpoint information

## Troubleshooting

If you encounter any issues during setup:

1. Check our [FAQ](/reference/faq) for common problems and solutions
2. Search existing [GitHub Issues](https://github.com/browsersec/browsersec-tools/issues)
3. Ask for help in our [Discord Community](https://discord.gg/browsersec)
4. Open a new [GitHub Issue](https://github.com/browsersec/browsersec-tools/issues/new) with detailed information about your problem -->
