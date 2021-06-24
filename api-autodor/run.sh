#!/bin/bash
docker run --restart always --name api-autodor-1 -p 5050:5050 -d api-autodor-image
