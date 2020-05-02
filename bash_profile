export PS1="\\w:\$(git branch 2>/dev/null | grep '^*' | colrm 1 2)\$ "

