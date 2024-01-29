import { execSync } from 'child_process';

export interface ResetOptions {
  oldEmail: string;
  newEmail: string;
  newAuthor: string;
}

export function resetGitAuthor(options: ResetOptions): void {
  const { oldEmail, newEmail, newAuthor } = options;

  // Validate email format using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(oldEmail) || !emailRegex.test(newEmail)) {
    console.error('Error: Invalid email address format');
    process.exitCode = 1; // Set exit code to indicate error
    return; // Return instead of calling process.exit
  }

  try {
    execSync(`git filter-branch --env-filter '
      if [ "$GIT_COMMITTER_EMAIL" = "${oldEmail}" ]; then
        export GIT_COMMITTER_NAME="${newAuthor}"
        export GIT_COMMITTER_EMAIL="${newEmail}"
      fi
      if [ "$GIT_AUTHOR_EMAIL" = "${oldEmail}" ]; then
        export GIT_AUTHOR_NAME="${newAuthor}"
        export GIT_AUTHOR_EMAIL="${newEmail}"
      fi
    ' --tag-name-filter cat -- --branches --tags`);
  } catch (error) {
    console.error('Error resetting Git commits:', (error as Error).message);
    process.exitCode = 1; // Set exit code to indicate error
  }
}
