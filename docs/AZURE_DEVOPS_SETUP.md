# Azure DevOps Configuration Guide for twoChurch

## Overview

This document explains how to set up Azure DevOps pipelines for the twoChurch project.

## Prerequisites

1. Azure DevOps account
2. Azure DevOps project: https://dev.azure.com/ITSolutionsLLC/twoChurch/
3. GitHub repository connected to Azure DevOps
4. Service connections configured

## Pipeline Files

- `azure-pipelines.yml` - Main orchestration pipeline
- `azure-pipelines-web.yml` - Web application (Next.js) pipeline
- `azure-pipelines-mobile.yml` - Mobile application (React Native/Expo) pipeline

## Setting Up Pipelines

### 1. Connect GitHub Repository

1. Go to Azure DevOps project
2. Navigate to **Pipelines** > **Create Pipeline**
3. Select **GitHub** as the source
4. Authorize Azure DevOps to access your GitHub account
5. Select the `ITSolutionsLLC/twoChurch` repository

### 2. Create Web Pipeline

1. Create a new pipeline in Azure DevOps
2. Point it to `azure-pipelines-web.yml`
3. Configure the following variables:
   - `nodeVersion`: 20.x
   - Any environment-specific variables

### 3. Create Mobile Pipeline

1. Create a new pipeline in Azure DevOps
2. Point it to `azure-pipelines-mobile.yml`
3. For iOS builds, ensure you have:
   - Apple Developer certificates
   - Provisioning profiles
   - Configured secure files in Azure DevOps
4. For Android builds, ensure you have:
   - Keystore file
   - Keystore credentials in Azure DevOps library

### 4. Create Main Pipeline

1. Create a new pipeline in Azure DevOps
2. Point it to `azure-pipelines.yml`
3. This will orchestrate both web and mobile builds

## Environment Configuration

### Required Service Connections

1. **GitHub** - For repository access
2. **Azure App Service** (optional) - For web deployment
3. **Google Play** (optional) - For Android app publishing
4. **Apple App Store** (optional) - For iOS app publishing

### Required Variables

Create variable groups in Azure DevOps Library:

#### Web Variables Group
```
- NODE_ENV: production
- API_BASE_URL: <your-api-url>
- NEXT_PUBLIC_API_URL: <your-public-api-url>
```

#### Mobile Variables Group
```
- EXPO_TOKEN: <your-expo-token>
- ANDROID_KEYSTORE_ALIAS: <keystore-alias>
- ANDROID_KEYSTORE_PASSWORD: <keystore-password>
- IOS_CERTIFICATE_PASSWORD: <certificate-password>
```

## Build Triggers

### Branches
- **main**: Production builds and deployments
- **develop**: Development/staging builds
- **feature/**: Feature branch builds (no deployment)
- **hotfix/**: Hotfix builds

### Pull Requests
- All PRs to `main` and `develop` trigger validation builds
- Build status is reported back to GitHub

## Deployment Stages

### Web Application
1. **Build** - Compile Next.js application
2. **Test** - Run unit tests and linting
3. **Deploy** - Deploy to hosting (Vercel, Azure App Service, etc.)

### Mobile Application
1. **Build** - Build Android and iOS apps
2. **Test** - Run unit tests
3. **Deploy** - Publish to App Store and Google Play (manual approval required)

## Manual Approvals

For production deployments:
1. Go to **Environments** in Azure DevOps
2. Create `production` environment
3. Add approvers for manual deployment approval

## Monitoring and Notifications

Configure notifications in Azure DevOps:
1. Go to **Project Settings** > **Notifications**
2. Set up notifications for:
   - Build failures
   - Build successes (for main branch)
   - Deployment completions

## Troubleshooting

### Common Issues

1. **Build fails on dependencies**
   - Ensure `package-lock.json` is committed
   - Clear npm cache in pipeline: `npm ci --cache .npm --prefer-offline`

2. **Mobile build fails**
   - Check Expo version compatibility
   - Verify certificates and provisioning profiles
   - Ensure keystore is properly configured

3. **Deployment fails**
   - Verify service connection credentials
   - Check environment variables
   - Review deployment logs

## Next Steps

1. Push code to GitHub
2. Set up Azure DevOps pipelines
3. Configure service connections
4. Set up variable groups
5. Run first build
6. Monitor and iterate

## Resources

- [Azure DevOps Documentation](https://docs.microsoft.com/azure/devops/)
- [Expo Build Documentation](https://docs.expo.dev/build/introduction/)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

---

For questions or issues, contact the DevOps team.
