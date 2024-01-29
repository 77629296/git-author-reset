import { resetGitAuthor, ResetOptions } from '../src/resetGitAuthor';
import { execSync } from 'child_process';

jest.mock('child_process');

describe('resetGitAuthor', () => {
  it('should reset Git commits with new author and email', () => {
    // Mock the execSync function
    const mockedExecSync = execSync as jest.Mock;

    // Call the function with sample options
    const params = {
      oldEmail: 'old@example.com',
      newEmail: 'new@example.com',
      newAuthor: 'New Author',
    }
    resetGitAuthor(params);

    // Assert that execSync was called with the correct command
    expect(mockedExecSync).toHaveBeenCalledWith(
      `git filter-branch --env-filter '
      if [ "$GIT_COMMITTER_EMAIL" = "${params.oldEmail}" ]; then
        export GIT_COMMITTER_NAME="${params.newAuthor}"
        export GIT_COMMITTER_EMAIL="${params.newEmail}"
      fi
      if [ "$GIT_AUTHOR_EMAIL" = "${params.oldEmail}" ]; then
        export GIT_AUTHOR_NAME="${params.newAuthor}"
        export GIT_AUTHOR_EMAIL="${params.newEmail}"
      fi
    ' --tag-name-filter cat -- --branches --tags`,
    );
  });

  it('should handle invalid email format and set exitCode', () => {
    const params: ResetOptions = {
      oldEmail: 'invalid-email',
      newEmail: 'new@example.com',
      newAuthor: 'New Author',
    };

    // Call the function
    resetGitAuthor(params);

    // Assert that process.exitCode is set to 1 (indicating error)
    expect(process.exitCode).toBe(1);
  });
});
