# Azure DevOps Setup - Step by Step

## 1. Connect GitHub to Azure DevOps

### 1.1 Create Service Connection
1. Go to https://dev.azure.com/ITSolutionsLLC/twoChurch/
2. Click **Project Settings** (bottom left)
3. Under **Pipelines**, click **Service connections**
4. Click **New service connection**
5. Select **GitHub**
6. Click **Next**
7. Choose **Grant authorization** or **Personal access token**
8. Authorize Azure Pipelines to access your GitHub account
9. Name it: `GitHub-twoChurch`
10. Click **Save**

## 2. Create Build Pipelines

### 2.1 Main Pipeline

1. Go to **Pipelines** > **Pipelines**
2. Click **New pipeline**
3. Select **GitHub**
4. Select repository: `ITSolutionsLLC/twoChurch`
5. Select **Existing Azure Pipelines YAML file**
6. Path: `/azure-pipelines.yml`
7. Click **Continue**
8. Review and click **Run**

### 2.2 Web Pipeline

1. Click **New pipeline**
2. Select **GitHub**
3. Select repository: `ITSolutionsLLC/twoChurch`
4. Select **Existing Azure Pipelines YAML file**
5. Path: `/azure-pipelines-web.yml`
6. Click **Continue**
7. Click **Save** (don't run yet)

### 2.3 Mobile Pipeline

1. Click **New pipeline**
2. Select **GitHub**
3. Select repository: `ITSolutionsLLC/twoChurch`
4. Select **Existing Azure Pipelines YAML file**
5. Path: `/azure-pipelines-mobile.yml`
6. Click **Continue**
7. Click **Save** (don't run yet)

## 3. Configure Variable Groups

### 3.1 Create Web Variables Group

1. Go to **Pipelines** > **Library**
2. Click **+ Variable group**
3. Name: `twoChurch-Web-Variables`
4. Add variables:
   - `NODE_ENV` = `production`
   - `NEXT_PUBLIC_API_URL` = `https://api.twochurch.com` (or your API URL)

5. Click **Save**

### 3.2 Create Mobile Variables Group

1. Click **+ Variable group**
2. Name: `twoChurch-Mobile-Variables`
3. Add variables:
   - `EXPO_PUBLIC_API_URL` = `https://api.twochurch.com`
   
4. Click **Save**

## 4. Set Up Environments

### 4.1 Create Production Environment

1. Go to **Pipelines** > **Environments**
2. Click **New environment**
3. Name: `production`
4. Resource: None (click **Create**)
5. Click on the environment
6. Click **⋮** (three dots) > **Approvals and checks**
7. Click **+** > **Approvals**
8. Add approvers (your email or team)
9. Click **Create**

### 4.2 Create Staging Environment (Optional)

1. Click **New environment**
2. Name: `staging`
3. Resource: None (click **Create**)

## 5. Configure Branch Policies

### 5.1 Protect Main Branch

1. Go to **Repos** > **Branches**
2. Find `main` branch
3. Click **⋮** > **Branch policies**
4. Enable:
   - ✅ **Require a minimum number of reviewers**: 1
   - ✅ **Check for linked work items**: Optional
   - ✅ **Check for comment resolution**: Recommended
   
5. Under **Build Validation**:
   - Click **+**
   - Select your main pipeline
   - Trigger: Automatic
   - Policy requirement: Required
   - Build expiration: 12 hours
   - Click **Save**

## 6. Configure Notifications

### 6.1 Team Notifications

1. Go to **Project Settings** > **Notifications**
2. Click **New subscription**
3. Configure:
   - **Build completes** - main branch only
   - **Build fails** - all branches
   - **Pull request created**
   - **Pull request merge attempted**

## 7. Run First Build

### 7.1 Test Main Pipeline

1. Go to **Pipelines** > **Pipelines**
2. Select your main pipeline
3. Click **Run pipeline**
4. Branch: `main`
5. Click **Run**
6. Monitor the build progress

## 8. Configure Deployment (Optional)

### For Web App Deployment to Azure App Service:

1. **Create Azure App Service** (if not exists)
2. **Add Service Connection**:
   - Project Settings > Service connections
   - New service connection > Azure Resource Manager
   - Select your subscription
   - Select your App Service
   - Save

3. **Update `azure-pipelines-web.yml`**:
   Add deployment task in Deploy stage

### For Web App Deployment to Vercel:

1. Get Vercel token from https://vercel.com/account/tokens
2. Add to Variable Group as secret
3. Update pipeline to use Vercel CLI

## 9. Mobile App Setup (Advanced)

### For iOS:

1. Upload Apple certificates to **Pipelines** > **Library** > **Secure files**
2. Add variables for certificate passwords
3. Install Apple Developer certificates

### For Android:

1. Upload keystore to **Secure files**
2. Add variables:
   - `ANDROID_KEYSTORE_ALIAS`
   - `ANDROID_KEYSTORE_PASSWORD` (mark as secret)

### Using EAS (Expo Application Services):

1. Create account at https://expo.dev/
2. Get EXPO_TOKEN from Expo
3. Add to Variable Group as secret
4. Configure `eas.json` in mobile app

## 10. Verify Everything Works

### Checklist:

- [ ] GitHub connected to Azure DevOps
- [ ] Main pipeline created and runs successfully
- [ ] Web pipeline created
- [ ] Mobile pipeline created
- [ ] Variable groups configured
- [ ] Production environment with approvals
- [ ] Branch policies on main
- [ ] Notifications configured
- [ ] First build successful

## 11. Next Steps

### Enable Continuous Deployment:

1. Every push to `main` triggers production deployment
2. Pull requests trigger validation builds
3. Feature branches can be deployed to staging

### Monitor Builds:

- Dashboard: **Pipelines** > **Analytics**
- Build history
- Success/failure rates
- Build duration trends

## Troubleshooting

### Pipeline Fails on First Run

Common issues:
- **Node version**: Ensure Node 20.x is available
- **npm ci fails**: Check package-lock.json is committed
- **Permission denied**: Check service connection

### GitHub Connection Issues

- Re-authorize GitHub connection
- Check repository permissions
- Verify webhook is created in GitHub

### Deployment Fails

- Check service connection credentials
- Verify environment variables
- Review deployment logs

## Support

For issues:
1. Check build logs in Azure DevOps
2. Review pipeline YAML syntax
3. Check Azure DevOps documentation
4. Contact team lead

---

🎉 Your Azure DevOps is now configured for twoChurch!
