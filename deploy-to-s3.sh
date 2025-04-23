#!/bin/bash

BUCKET_NAME="carlosengels.com"
BUILD_DIR="build"

echo ">> Building the React project..."
npm run build || { echo "Build failed"; exit 1; }

echo ">> Syncing build directory to S3..."
aws s3 sync $BUILD_DIR s3://$BUCKET_NAME --delete

echo ">> Setting files as publicly readable..."
aws s3 cp s3://$BUCKET_NAME s3://$BUCKET_NAME --recursive --acl public-read

echo ">> Deployment to S3 completed successfully!"
