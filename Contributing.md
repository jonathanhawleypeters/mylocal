Fork a copy to your local github repo
Create a clone on your local PC and add a remote upstream pointing to the original repo
Checkout a feature branch to work on
Once feature is done , <git add> and <git commit> your changes
Do a rebase with the upstream master <git pull --rebase upstream master>
Resolve any conflicts, if conflicts then do <git add .> after resolution
  once conflict resolved issue <git rebase --continue>
  If cannot resolve conflicts then abort rebase using <git rebase --abort>
Push your changes to the feature branch on your local github repo
From your local github repo, select your feature branch and issue a pull request. 
