# git-author-reset

When using different Git accounts for code commits, inconsistency in email addresses is a common issue. To address this problem, I've created an npm package called `git-author-reset`, which allows you to easily modify the author information of Git commits. Below is a brief guide on how to use it:

## Installation

Install `git-author-reset` via npm:

```bash
npm install -g git-author-reset
pnpm add -g git-author-reset
```

## Usage

In your Git repository directory, execute the following command to reset the author information:

```bash
git-author-reset --oldEmail=xxx@mail.com --newEmail=77629296@qq.com --newAuthor=leeson
```

Follow the prompts to input the correct author name and email address, and it will rewrite the author information of your recent commit history.

## Notes

- Please ensure you have backed up your code repository before performing this operation, in case of unexpected situations.
- This will modify the commit history, which may affect other individuals sharing the code repository with you.

## Contribution

Contributions of code or suggestions for improvements are welcome! Please submit issues or PRs on the [GitHub repository](https://github.com/77629296/git-author-reset).

## License

This project is licensed under the MIT License. See the [LICENSE file](./LICENSE.md) for details.

## Author

- leeson

## Contact

- <77629296@qq.com>

If you encounter any issues or have any suggestions while using `git-author-reset`, feel free to reach out to me. Thank you for your support!
