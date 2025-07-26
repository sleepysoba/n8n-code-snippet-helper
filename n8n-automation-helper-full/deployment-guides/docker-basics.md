# n8n Docker Deployment Guide

## Quick Start
```bash
docker run -it --rm   -p 5678:5678   -v ~/.n8n:/home/node/.n8n   n8nio/n8n
```

## Notes
- Store data persistently using volumes
- Use environment variables to set credentials
- Enable queue mode for scaling

