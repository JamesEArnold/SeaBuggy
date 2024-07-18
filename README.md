## Making a Commit
Commitlint and Conventional Commits
What is Commitlint?

Commitlint ensures commit messages follow the Conventional Commits specification. This standardized approach simplifies creating a clear commit history, aiding in automation and collaboration.
Why Use Conventional Commits?

    Auto-generate CHANGELOGs
    Semantic Versioning: Determines version bumps (PATCH, MINOR, MAJOR).
    Clear Communication: Clarifies changes for team members and stakeholders.
    Automate Processes: Triggers build and publish processes.
    Ease of Contribution: Simplifies navigation of commit history.

Commit Message Structure

A Conventional Commit message should follow this format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Common Commit Types

    fix: Bug fixes (PATCH)
    feat: New features (MINOR)
    BREAKING CHANGE: Major changes (MAJOR)

Other types: build, chore, ci, docs, style, refactor, perf, test.
Examples

Basic:
```
docs: correct spelling of CHANGELOG
```
With Scope:

```
feat(lang): add Polish language
````

Breaking Change:
```
feat!: send an email to the customer when a product is shipped
```
By following these guidelines, we maintain a consistent and clear commit history, facilitating better project management and collaboration.
