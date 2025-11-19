#!/bin/sh
set -e

echo "Waiting for Weaviate to be ready..."

# Wait for Weaviate to be healthy
until wget --spider -q http://weaviate:8080/v1/.well-known/ready 2>/dev/null; do
  echo "Weaviate is unavailable - sleeping"
  sleep 2
done

echo "Weaviate is ready!"
echo "Loading embeddings..."

# Run the embedding loader
cd /app
node load_embeddings.js

echo "Embeddings loaded successfully!"
