#!/usr/bin/env node
import { program } from 'commander';
import { resetGitAuthor, ResetOptions } from './resetGitAuthor.js'

program
  .version('1.0.0')
  .option('-f, --force', 'Force overwrite existing backup')
  .description('A command-line tool to reset Git author information')
  .requiredOption('--oldEmail <oldEmail>', 'Old email address to be replaced')
  .requiredOption('--newEmail <newEmail>', 'New email address')
  .requiredOption('--newAuthor <newAuthor>', 'New author name')
  .action((options: ResetOptions) => {
    // Call resetGitAuthor function with the provided options
    resetGitAuthor(options);
  });

// Parse the command-line arguments
program.parse(process.argv);

// If no arguments are provided, show help
if (process.argv.length < 3) {
  program.help();
}
