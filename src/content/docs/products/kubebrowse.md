---
title: KubeBrowse
description: Kubernetes-orchestrated secure browsing environment
---

For KubeBrowse Documentation Please refer at https://browsersec.github.io/KubeBrowse

<!-- 
# KubeBrowse

KubeBrowse is an open-source Kubernetes orchestrator that mitigates phishing and malware attacks by providing a secure browser-in-browser sandbox environment.

![KubeBrowse Architecture](/src/assets/kubebrowse-architecture.svg)

## Key Features

- **Isolated Browsing Environment**: Each browsing session runs in its own isolated container
- **Automatic File Analysis**: Suspicious file downloads are automatically analyzed in a sandbox
- **Network Isolation**: Prevent data exfiltration with fine-grained network controls
- **Screenshot Recording**: Capture session history for security analysis and audit
- **Zero Trust Architecture**: Verify every access request with comprehensive authentication

## How It Works

KubeBrowse creates ephemeral browser instances in Kubernetes pods that:

1. Isolate potentially malicious content from your main environment
2. Record all activity for security analysis
3. Prevent data exfiltration and unauthorized access
4. Automatically terminate after use, destroying any potential malware

## Installation

### Prerequisites

- Kubernetes 1.19+
- Helm 3.0+
- A domain name for the service
- TLS certificates

### Quick Install with Helm

```bash
# Add the BrowserSec Helm repository
helm repo add browsersec https://charts.browsersec.io

# Update your repositories
helm repo update

# Install KubeBrowse
helm install kubebrowse browsersec/kubebrowse \
  --namespace kubebrowse \
  --create-namespace \
  --set domain=browse.yourdomain.com \
  --set tls.enabled=true \
  --set storage.type=s3 \
  --set storage.s3.bucket=your-bucket \
  --set storage.s3.region=us-west-2
```

## Configuration

KubeBrowse can be configured via the `values.yaml` file or using command line parameters with Helm:

```yaml
# Example configuration
kubebrowse:
  replicas: 3
  resources:
    requests:
      memory: "256Mi"
      cpu: "100m"
    limits:
      memory: "1Gi"
      cpu: "1000m"

browser:
  image: browsersec/chrome-secure:latest
  securityContext:
    privileged: false

security:
  networkPolicy:
    enabled: true
    allowedEgress:
      - to:
          - ipBlock:
              cidr: 10.0.0.0/8
      - ports:
          - port: 443
            protocol: TCP

monitoring:
  enabled: true
  prometheus:
    scrape: true
```

## Usage

Once installed, KubeBrowse provides several ways to access isolated browsing environments:

### Web Portal

Navigate to your configured domain (e.g., `https://browse.yourdomain.com`) and authenticate to access the web portal.

### API Integration

```javascript
// Example API request to create a new browsing session
const response = await fetch('https://browse.yourdomain.com/api/v1/sessions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    url: 'https://example.com',
    timeout: 3600, // session timeout in seconds
    recording: true,
  }),
});

const { sessionUrl } = await response.json();
console.log(`Secure browsing session created: ${sessionUrl}`);
```

## Security Considerations

- Always keep KubeBrowse updated to the latest version
- Configure network policies to restrict egress traffic
- Enable audit logging for all sessions
- Implement proper RBAC controls for the KubeBrowse API

## Support

For support with KubeBrowse:

- Check our [GitHub Issues](https://github.com/browsersec/kubebrowse/issues)
- Join our [Discord Community](https://discord.gg/browsersec)
- Email support at support@browsersec.org -->
