# Git Workflow Guide - Canary Prototype Foundation

This guide documents the Git workflow used for developing and releasing the Canary UI component library.

## Table of Contents
1. [Starting a New Feature Branch](#starting-a-new-feature-branch)
2. [Development Workflow](#development-workflow)
3. [Testing and Committing Changes](#testing-and-committing-changes)
4. [Merging to Main](#merging-to-main)
5. [Creating a New Release](#creating-a-new-release)
6. [Pull Request Process](#pull-request-process)

---

## Starting a New Feature Branch

### 1. Ensure you're on main and up-to-date
```bash
git checkout main
git pull origin main
```

### 2. Create and switch to a new feature branch
```bash
git checkout -b feature/your-feature-name
```

**Naming conventions:**
- Use descriptive, kebab-case names
- Prefix with `feature/` for new features
- Examples: `feature/tag-updates`, `feature/input-updates`

---

## Development Workflow

### While working on your feature:

1. **Make your changes** to components, types, etc.

2. **Check local dev server** (should auto-reload)
   - Dev server runs at: `http://localhost:3001`
   - Or start manually: `pnpm dev`

3. **Update demo page** (`app/page.tsx`) to showcase new features

4. **Update exports** if you added new components or types
   - Component index: `components/canary-ui/[category]/index.ts`
   - Main export: `components/canary-ui/index.ts`

---

## Testing and Committing Changes

### 1. Test the production build
```bash
pnpm build
```

**Important:** Always test the build before committing. Fix any TypeScript errors or build issues.

### 2. Check git status
```bash
git status
```

### 3. Stage all changes
```bash
git add .
```

### 4. Commit with descriptive message
```bash
git commit -m "$(cat <<'EOF'
Brief summary of changes

Detailed description:
- Feature 1 added
- Feature 2 updated
- Bug fix for X

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"
```

**Commit message structure:**
- **First line:** Brief summary (50 chars or less)
- **Body:** Detailed bullet points of changes
- **Footer:** Attribution footer

### 5. Push feature branch to remote
```bash
git push origin feature/your-feature-name
```

---

## Merging to Main

### Option A: Direct Merge (Small Changes)

**1. Switch to main**
```bash
git checkout main
```

**2. Pull latest changes**
```bash
git pull origin main
```

**3. Merge feature branch**
```bash
git merge feature/your-feature-name
```

**If conflicts occur:**
```bash
# View conflicted files
git status

# Resolve conflicts manually in files, then:
git add .
git commit -m "Resolve merge conflicts"
```

**4. Push merged changes**
```bash
git push origin main
```

### Option B: Pull Request (Recommended for Team Review)

**1. Push feature branch** (if not already pushed)
```bash
git push origin feature/your-feature-name
```

**2. Create PR via GitHub CLI**
```bash
gh pr create --title "Feature: Description" --body "$(cat <<'EOF'
## Summary
- Brief description of changes

## Changes Made
- Detailed list of changes

## Test Plan
- How to test the changes

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

**3. After PR is approved, merge via GitHub UI or CLI**
```bash
gh pr merge [PR-NUMBER] --merge
```

**4. Update local main**
```bash
git checkout main
git pull origin main
```

---

## Creating a New Release

### Version Numbering (Semantic Versioning)
- **Patch** (0.1.x → 0.1.y): Bug fixes, small tweaks
- **Minor** (0.x.0 → 0.y.0): New features, non-breaking changes
- **Major** (x.0.0 → y.0.0): Breaking changes

### Release Process

**1. Ensure you're on main and up-to-date**
```bash
git checkout main
git pull origin main
```

**2. Check current version**
```bash
# View package.json version
grep '"version"' package.json

# Check remote tags
git ls-remote --tags origin
```

**3. Update version in package.json**
```json
{
  "version": "0.1.3"  // Update this
}
```

**4. Update all version references in README.md**
```bash
# Replace all occurrences (example from v0.1.2 to v0.1.3)
# Find: v0.1.2
# Replace: v0.1.3
```

**Update these sections in README:**
- Installation section
- Quick Start section
- Maintenance section (Updating to Latest Version)

**5. Commit version bump**
```bash
git add package.json README.md

git commit -m "$(cat <<'EOF'
Bump version to 0.1.3

Release includes:
- Feature 1: Description
- Feature 2: Description
- Bug fix: Description

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"
```

**6. Create git tag**
```bash
git tag -a v0.1.3 -m "Release v0.1.3 - Brief description"
```

**7. Push commit and tag**
```bash
git push origin main && git push origin v0.1.3
```

**8. Verify release**
- GitHub will automatically create a release: `https://github.com/msantana-canary/canary-prototype-foundation/releases/tag/v0.1.3`
- Tag appears in remote: `git ls-remote --tags origin`

---

## Pull Request Process

### Creating a PR

**1. Push your feature branch**
```bash
git push origin feature/your-feature-name
```

**2. Create PR via GitHub CLI**
```bash
gh pr create --title "Feature: Your Feature Name" --body "$(cat <<'EOF'
## Summary
Brief overview of what this PR does

## Changes Made
- Component X updated to match Figma specs
- Added new variant Y
- Fixed issue Z

## Test Plan
- [ ] Production build passes (`pnpm build`)
- [ ] Local dev server works correctly
- [ ] All new features visible in demo page
- [ ] No TypeScript errors

## Screenshots
[Add screenshots if applicable]

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

**Or create via GitHub URL** (shown after pushing branch):
```
https://github.com/msantana-canary/canary-prototype-foundation/pull/new/feature/your-feature-name
```

### Reviewing a PR

**View PR details:**
```bash
gh pr view [PR-NUMBER]
```

**Checkout PR locally for testing:**
```bash
gh pr checkout [PR-NUMBER]
pnpm dev  # Test locally
pnpm build  # Test build
```

### Merging a PR

**Option 1: Via GitHub CLI**
```bash
# Merge commit (recommended)
gh pr merge [PR-NUMBER] --merge

# Squash merge (combines all commits)
gh pr merge [PR-NUMBER] --squash

# Rebase merge
gh pr merge [PR-NUMBER] --rebase
```

**Option 2: Via GitHub UI**
- Click "Merge pull request" button
- Choose merge strategy
- Confirm merge

**After merge, update local main:**
```bash
git checkout main
git pull origin main
```

---

## Common Scenarios

### Scenario 1: Feature Complete, Ready for Release
```bash
# 1. Ensure feature branch is pushed
git push origin feature/your-feature

# 2. Switch to main and pull
git checkout main
git pull origin main

# 3. Merge feature (or create PR for review)
git merge feature/your-feature
git push origin main

# 4. Create release (see Creating a New Release section)
```

### Scenario 2: Multiple Features, Release Together
```bash
# Work on each feature separately
git checkout -b feature/feature-1
# ... make changes, commit, push

git checkout main
git checkout -b feature/feature-2
# ... make changes, commit, push

# Merge all features to main
git checkout main
git pull origin main
git merge feature/feature-1
git merge feature/feature-2
git push origin main

# Create single release with all features
```

### Scenario 3: Merge Conflicts
```bash
# During merge, if conflicts occur:
git merge feature/your-feature
# Auto-merging file.txt
# CONFLICT (content): Merge conflict in file.txt

# 1. View conflicted files
git status

# 2. Open files and resolve conflicts
# Look for conflict markers:
# <<<<<<< HEAD
# (current main code)
# =======
# (feature branch code)
# >>>>>>> feature/your-feature

# 3. After resolving, stage and commit
git add .
git commit -m "Resolve merge conflicts between main and feature/your-feature"

# 4. Push
git push origin main
```

### Scenario 4: Hotfix on Production
```bash
# Create hotfix branch from main
git checkout main
git pull origin main
git checkout -b hotfix/critical-bug-fix

# Make fix, test, commit
pnpm build  # Ensure build works
git add .
git commit -m "Fix critical bug in component X"
git push origin hotfix/critical-bug-fix

# Merge to main immediately
git checkout main
git merge hotfix/critical-bug-fix
git push origin main

# Create patch release
# Update version: 0.1.3 → 0.1.4
# Follow release process
```

---

## Quick Reference Commands

### Branch Management
```bash
# List all branches
git branch -a

# Delete local branch
git branch -d feature/old-feature

# Delete remote branch
git push origin --delete feature/old-feature

# Rename current branch
git branch -m new-branch-name
```

### Viewing History
```bash
# View commit history
git log --oneline --graph --all

# View recent commits
git log -5

# View commits for specific file
git log -- path/to/file.tsx
```

### Undoing Changes
```bash
# Discard unstaged changes
git checkout -- path/to/file.tsx

# Unstage files
git reset HEAD path/to/file.tsx

# Undo last commit (keep changes)
git reset --soft HEAD~1

# View what changed in last commit
git show HEAD
```

### Checking Status
```bash
# View status
git status

# View diff of unstaged changes
git diff

# View diff of staged changes
git diff --staged
```

---

## Best Practices

### ✅ Do's
- **Always test build** before committing (`pnpm build`)
- **Pull before pushing** to avoid conflicts
- **Use descriptive branch names** (feature/tag-updates, not feature/stuff)
- **Write clear commit messages** with bullet points
- **Update demo page** to showcase new features
- **Update exports** when adding new components
- **Create small, focused PRs** rather than massive changes
- **Test locally** before pushing

### ❌ Don'ts
- **Don't commit without testing build**
- **Don't force push to main** (`git push -f origin main`)
- **Don't commit broken code** or TypeScript errors
- **Don't forget to update README** when releasing
- **Don't merge without reviewing** changes first
- **Don't use `git checkout --ours/--theirs`** without understanding what it does

---

## Troubleshooting

### Build fails with TypeScript errors
```bash
# Check TypeScript errors
pnpm build

# Common fixes:
# - Ensure exports are updated in index.ts files
# - Check for missing type definitions
# - Verify imports are correct
```

### Merge conflicts
```bash
# View conflicted files
git status

# Choose merge strategy carefully:
# --ours = keep main's version
# --theirs = keep feature branch's version
# Manual = resolve conflicts line by line (RECOMMENDED)
```

### Pushed wrong commit
```bash
# Undo last commit on remote (DANGER - coordinate with team)
git reset --hard HEAD~1
git push -f origin branch-name

# Safer: Create new commit that reverts
git revert HEAD
git push origin branch-name
```

### Lost in detached HEAD state
```bash
# Return to main branch
git checkout main

# If you made changes in detached HEAD:
git branch temp-branch  # Save changes
git checkout main
git merge temp-branch
```

---

## Example Workflow (Full Cycle)

Here's a complete example of implementing a new feature and releasing it:

```bash
# 1. Start on main
git checkout main
git pull origin main

# 2. Create feature branch
git checkout -b feature/new-button-variant

# 3. Make changes
# - Update components/canary-ui/buttons/CanaryButton.tsx
# - Update components/canary-ui/buttons/types.ts
# - Update app/page.tsx to showcase new variant
# - Update components/canary-ui/buttons/index.ts exports

# 4. Test build
pnpm build
# ✓ Compiled successfully

# 5. Commit changes
git add .
git commit -m "$(cat <<'EOF'
Add new ghost variant to CanaryButton

- Added ButtonType.GHOST variant
- Updated button styles for ghost appearance
- Added demo section in showcase page
- Exported new ButtonType variant

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"

# 6. Push feature branch
git push origin feature/new-button-variant

# 7. Switch back to main
git checkout main
git pull origin main

# 8. Merge feature (or create PR)
git merge feature/new-button-variant
git push origin main

# 9. Create release v0.1.4
# Update package.json: "version": "0.1.4"
# Update README.md: v0.1.3 → v0.1.4

git add package.json README.md
git commit -m "$(cat <<'EOF'
Bump version to 0.1.4

Release includes:
- Added ButtonType.GHOST variant to CanaryButton
- Updated button component styling
- Enhanced demo page with ghost button examples

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"

# 10. Create and push tag
git tag -a v0.1.4 -m "Release v0.1.4 - Add ghost button variant"
git push origin main && git push origin v0.1.4

# ✅ Done! Release available at:
# https://github.com/msantana-canary/canary-prototype-foundation/releases/tag/v0.1.4
```

---

## Additional Resources

- **GitHub CLI docs**: https://cli.github.com/manual/
- **Git documentation**: https://git-scm.com/doc
- **Semantic Versioning**: https://semver.org/
- **Conventional Commits**: https://www.conventionalcommits.org/

---

*Last updated: 2025-11-12*
