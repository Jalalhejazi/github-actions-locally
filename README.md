# What makes this way of test so special ? 

Running GitHub Actions --> Same YAML, Everywhere
- Locally 
- Continuous Build (Shared build on-premises)
- Remote (Global build Cloud)
- super super fast 🚀🚀🚀


## Github Action (Workflows) (YAML) runs inside a Docker Container (Isolated)

- No more "It's works on my machine (mindset) "
- No pollutions
- No Sideeffects on local machine environment 
- No maintenance on local machine Dependencies



## How to Test inside a docker container super fast 🚀

```bash
# how to install 'act' ?  
scoop info act
scoop install act


# run the tests job
act --job test 

# run the the entire pipeline
act 

# view the execution graph (List workflows)
act --list
```


## Run your GitHub Actions locally 🚀

```
$ act --help 

Run GitHub actions locally by specifying the event name (e.g. `push`) or an action name directly.

Usage:
  act [event name to run]
If no event name passed, will default to "on: push" [flags]

Flags:
  -a, --actor string                                      user that triggered the event (default "nektos/act")
      --artifact-server-path string                       Defines the path where the artifact server stores uploads and retrieves downloads from. If not specified the artifact server will not start.
      --artifact-server-port string                       Defines the port where the artifact server listens (will only bind to localhost). (default "34567")
  -b, --bind                                              bind working directory to container, rather than copy
      --bug-report                                        Display system information for bug report
      --container-architecture string                     Architecture which should be used to run containers, e.g.: linux/amd64. If not specified, will use host default architecture. Requires Docker server API Version 1.41+. Ignored on earlier Docker server platforms.
      --container-cap-add stringArray                     kernel capabilities to add to the workflow containers (e.g. --container-cap-add SYS_PTRACE)
      --container-cap-drop stringArray                    kernel capabilities to remove from the workflow containers (e.g. --container-cap-drop SYS_PTRACE)
      --container-daemon-socket string                    Path to Docker daemon socket which will be mounted to containers (default "/var/run/docker.sock")
      --defaultbranch string                              the name of the main branch
      --detect-event                                      Use first event type from workflow as event that triggered the workflow
  -C, --directory string                                  working directory (default ".")
  -n, --dryrun                                            dryrun mode
      --env stringArray                                   env to make available to actions with optional value (e.g. --env myenv=foo or --env myenv)
      --env-file string                                   environment file to read and use as env in the containers (default ".env")
  -e, --eventpath string                                  path to event JSON file
      --github-instance string                            GitHub instance to use. Don't use this if you are not using GitHub Enterprise Server. (default "github.com")
  -g, --graph                                             draw workflows
  -h, --help                                              help for act
      --insecure-secrets                                  NOT RECOMMENDED! Doesn't hide secrets while printing logs.
  -j, --job string                                        run job
      --json                                              Output logs in json format
  -l, --list                                              list workflows
      --no-recurse                                        Flag to disable running workflows from subdirectories of specified path in '--workflows'/'-W' flag
      --no-skip-checkout                                  Do not skip actions/checkout
  -P, --platform stringArray                              custom image to use per platform (e.g. -P ubuntu-18.04=nektos/act-environments-ubuntu:18.04)
      --privileged                                        use privileged mode
  -p, --pull                                              pull docker image(s) even if already present
  -q, --quiet                                             disable logging of output from steps      --rebuild                                           rebuild local action docker image(s) even if already present
      --remote-name string                                git remote name that will be used to retrieve url of git repo (default "origin")
      --replace-ghe-action-token-with-github-com string   If you are using replace-ghe-action-with-github-com  and you want to use private actions on GitHub, you have to set personal access token
      --replace-ghe-action-with-github-com stringArray    If you are using GitHub Enterprise Server and allow specified actions from GitHub (github.com), you can set actions on this. (e.g. --replace-ghe-action-with-github-com =github/super-linter)
  -r, --reuse                                             don't remove container(s) on successfully completed workflow(s) to maintain state between runs
      --rm                                                automatically remove container(s)/volume(s) after a workflow(s) failure
  -s, --secret stringArray                                secret to make available to actions with optional value (e.g. -s mysecret=foo or -s mysecret)
      --secret-file string                                file with list of secrets to read from (e.g. --secret-file .secrets) (default ".secrets")
      --use-gitignore                                     Controls whether paths specified in .gitignore should be copied into container (default true)
      --userns string                                     user namespace to use
  -v, --verbose                                           verbose output
      --version                                           version for act
  -w, --watch                                             watch the contents of the local repo and run when files change
  -W, --workflows string                                  path to workflow file(s) (default "./.github/workflows/")
```
