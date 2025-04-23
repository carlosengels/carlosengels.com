#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting deployment process..."

# Build the project
echo "📦 Building the project..."
npm run build

# Create S3 bucket if it doesn't exist
echo "🪣 Creating/verifying S3 bucket..."
aws s3 mb s3://carlosengels.com || true

# Enable static website hosting
echo "🌐 Enabling static website hosting..."
aws s3 website s3://carlosengels.com --index-document index.html --error-document index.html

# Upload files to S3
echo "📤 Uploading files to S3..."
aws s3 sync build/ s3://carlosengels.com --delete

# Set bucket policy for public access
echo "🔓 Setting bucket policy for public access..."
aws s3api put-bucket-policy --bucket carlosengels.com --policy file://bucket-policy.json

echo "✅ Deployment complete! Your site should be available at:"
echo "http://carlosengels.com.s3-website-us-east-1.amazonaws.com" 