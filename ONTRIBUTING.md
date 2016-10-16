1. Fork a copy to your local github repo
2. Create a clone on your local PC and add a remote upstream pointing to the original repo
3. Checkout a feature branch to work on
4. Once feature is done , git add and git commit your changes
5. Do a rebase with the upstream master, git pull --rebase upstream master
6. Resolve any conflicts, if conflicts then do, git add . ,after resolution
   1. once conflict resolved issue, git rebase --continue
   2. If cannot resolve conflicts then abort rebase using, git rebase --abort
7. Push your changes to the feature branch on your local github repo
8. From your local github repo, select your feature branch and issue a pull request. 
