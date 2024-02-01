# git-author-reset

简体中文 / [English](./README.md)

当您在使用不同的 Git 账户进行代码提交时，经常会遇到邮箱不一致的问题。为了解决这个问题，我创建了一个 npm 包，名为 `git-author-reset`，它可以帮助您轻松修改 Git 提交的作者信息。以下是如何使用它的简要说明：

## 安装

使用 npm或pnpm 安装 `git-author-reset`：

```bash
npm install -g git-author-reset
pnpm add -g git-author-reset
```

## 使用方法

在您的 Git 仓库目录中，执行以下命令以重置作者信息：

```bash
git-author-reset --oldEmail=xxx@mail.com --newEmail=77629296@qq.com --newAuthor=leeson
```

按照提示输入正确的作者名和邮箱地址，然后它将会重写您最近的提交历史中的作者信息。

## 注意事项

- 请确保在执行此操作之前备份您的代码库，以防意外情况发生。
- 这将会修改提交历史，因此可能会影响与您共享代码库的其他人员。

## 贡献

欢迎贡献代码或提出改进建议！请在 [GitHub 仓库](https://github.com/77629296/git-author-reset) 中提交 issue 或 PR。

## 许可证

本项目基于 MIT 许可证。详情请参阅 [LICENSE 文件](./LICENSE.md)。

## 作者

- leeson

## 联系方式

- <77629296@qq.com>

如果您在使用 `git-author-reset` 时遇到任何问题或有任何建议，请随时联系我。感谢您的支持！
