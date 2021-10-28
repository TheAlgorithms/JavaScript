if ! git diff --quiet DIRECTORY.md; then
    echo Changes found, attempting to commit and push...
    git add DIRECTORY.md
    git commit -am "Auto-update DIRECTORY.md" ||  true
    git push --force origin HEAD:$GITHUB_REF || true
    echo ... done.
else
    echo No changes found, exiting.
fi

