workflow "Deploy on Now" {
  on = "push"
  resolves = ["release"]
}

# Deploy, and write deployment to file
action "deploy" {
  uses = "actions/zeit-now@master"
  args = "deploy ./build > $HOME/$GITHUB_ACTION.txt"
  secrets = [
    "ZEIT_TOKEN",
    "GITHUB_TOKEN",
  ]
}

# Always create an alias using the SHA
action "alias" {
  needs = "deploy"
  uses = "actions/zeit-now@master"
  args = "alias `cat /github/home/deploy.txt` $GITHUB_SHA"
  secrets = [
    "ZEIT_TOKEN",
    "GITHUB_TOKEN",
  ]
}

# Filter for master branch
action "master-branch-filter" {
  needs = "alias"
  uses = "actions/bin/filter@master"
  args = "branch master"
  secrets = ["GITHUB_TOKEN", "ZEIT_TOKEN"]
}

# Requires now.json in repository
action "release" {
  needs = "master-branch-filter"
  uses = "actions/zeit-now@master"
  secrets = [
    "ZEIT_TOKEN",
    "GITHUB_TOKEN",
  ]
  args = "alias --local-config=./site/now.json"
}
