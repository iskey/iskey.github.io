"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3226],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>p});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),h=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=h(o),p=n,d=m["".concat(l,".").concat(p)]||m[p]||c[p]||i;return o?a.createElement(d,s(s({ref:t},u),{},{components:o})):a.createElement(d,s({ref:t},u))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,s=new Array(i);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:n,s[1]=r;for(var h=2;h<i;h++)s[h]=o[h];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},2246:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var a=o(7462),n=(o(7294),o(3905));const i={title:"Git\u4f7f\u7528\u6280\u5de7",date:"2018-04-26 23:38:05 +0800",comments:!0,tags:["tool"]},s="Git\u4f7f\u7528\u6280\u5de7",r={unversionedId:"Linux/Tools/Git\u4f7f\u7528\u6280\u5de7",id:"Linux/Tools/Git\u4f7f\u7528\u6280\u5de7",title:"Git\u4f7f\u7528\u6280\u5de7",description:"Recently we published a couple of tutorials to get you familiar with Git basics and using Git in a team environment. The commands that we discussed were about enough to help a developer survive in the Git world. In this post, we will try to explore how to manage your time effectively and make full use of the features that Git provides.",source:"@site/docs/Linux/Tools/Git\u4f7f\u7528\u6280\u5de7.md",sourceDirName:"Linux/Tools",slug:"/Linux/Tools/Git\u4f7f\u7528\u6280\u5de7",permalink:"/Linux/Tools/Git\u4f7f\u7528\u6280\u5de7",draft:!1,editUrl:"https://github.com/iskey/iskey.github.io/tree/main/docs/Linux/Tools/Git\u4f7f\u7528\u6280\u5de7.md",tags:[{label:"tool",permalink:"/tags/tool"}],version:"current",lastUpdatedAt:1706763441,formattedLastUpdatedAt:"Feb 1, 2024",frontMatter:{title:"Git\u4f7f\u7528\u6280\u5de7",date:"2018-04-26 23:38:05 +0800",comments:!0,tags:["tool"]},sidebar:"tutorialSidebar",previous:{title:"ColorTool",permalink:"/Linux/Tools/ColorTool"},next:{title:"Kernel C.tom for SourceInsight",permalink:"/Linux/Tools/Kernel C.tom for SourceInsight"}},l={},h=[{value:"git\u7684\u4e00\u4e9b\u914d\u7f6e\u53c2\u6570",id:"git\u7684\u4e00\u4e9b\u914d\u7f6e\u53c2\u6570",level:2},{value:"Git Auto Completion",id:"git-auto-completion",level:2},{value:"Ignoring Files in Git",id:"ignoring-files-in-git",level:2},{value:"Who Messed With My Code?",id:"who-messed-with-my-code",level:2},{value:"Review History of the Repository",id:"review-history-of-the-repository",level:2},{value:"Never Lose Track of a Commit",id:"never-lose-track-of-a-commit",level:2},{value:"Staging Parts of a Changed File for a Commit",id:"staging-parts-of-a-changed-file-for-a-commit",level:2},{value:"Squash Multiple Commits",id:"squash-multiple-commits",level:2},{value:"Stash Uncommitted Changes",id:"stash-uncommitted-changes",level:2},{value:"Check for Lost Commits",id:"check-for-lost-commits",level:2},{value:"Cherry Pick",id:"cherry-pick",level:2}],u={toc:h};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"git\u4f7f\u7528\u6280\u5de7"},"Git\u4f7f\u7528\u6280\u5de7"),(0,n.kt)("p",null,"Recently we published a couple of tutorials to get you familiar with Git basics and using Git in a team environment. The commands that we discussed were about enough to help a developer survive in the Git world. In this post, we will try to explore how to manage your time effectively and make full use of the features that Git provides."),(0,n.kt)("p",null,"Note: Some commands in this article include part of the command in square brackets (e.g. git add -p ","[file_name]","). In those examples, you would insert the necessary number, identifier, etc. without the square brackets."),(0,n.kt)("h2",{id:"git\u7684\u4e00\u4e9b\u914d\u7f6e\u53c2\u6570"},"git\u7684\u4e00\u4e9b\u914d\u7f6e\u53c2\u6570"),(0,n.kt)("p",null,"git config --global core.pager cat"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53d6\u6d88git\u7684\u67d0\u4e2a\u914d\u7f6e\u9879")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git config --global --unset core.excludesfile\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7f16\u8f91git\u7684\u914d\u7f6e\u6587\u4ef6")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git config --global --edit\n")),(0,n.kt)("h2",{id:"git-auto-completion"},"Git Auto Completion"),(0,n.kt)("p",null,"If you run Git commands through the command line, it\u2019s a tiresome task to type in the commands manually every single time. To help with this, you can enable auto completion of Git commands within a few minutes.\nTo get the script, run the following in a Unix system:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},"cd ~\ncurl https://raw.github.com/git/git/master/contrib/completion/git-completion.bash -o ~/.git-completion.bash\n")),(0,n.kt)("p",null,"Next, add the following lines to your ~/.bash_profile file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"if [ -f ~/.git-completion.bash ]; then\n    . ~/.git-completion.bash\nfi\n")),(0,n.kt)("p",null,"Although I have mentioned this earlier, I can not stress it enough: If you want to use the features of Git fully, you should definitely shift to the command line interface!"),(0,n.kt)("h2",{id:"ignoring-files-in-git"},"Ignoring Files in Git"),(0,n.kt)("p",null,"Are you tired of compiled files (like .pyc) appearing in your Git repository? Or are you so fed up that you have added them to Git? Look no further, there is a way through which you can tell Git to ignore certain files and directories altogether. Simply create a file with the name .gitignore and list the files and directories that you don\u2019t want Git to track. You can make exceptions using the exclamation mark(!)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"*.pyc\n*.exe\nmy_db_config/\n")),(0,n.kt)("p",null,"!main.pyc"),(0,n.kt)("h2",{id:"who-messed-with-my-code"},"Who Messed With My Code?"),(0,n.kt)("p",null,"It\u2019s the natural instinct of human beings to blame others when something goes wrong. If your production server is broke, it\u2019s very easy to find out the culprit \u2014 just do a git blame. This command shows you the author of every line in a file, the commit that saw the last change in that line, and the timestamp of the commit."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git blame [file_name]\ngit blame demonstration\n")),(0,n.kt)("p",null,"And in the screenshot below, you can see how this command would look on a bigger repository:"),(0,n.kt)("p",null,"git blame on the ATutor repository"),(0,n.kt)("h2",{id:"review-history-of-the-repository"},"Review History of the Repository"),(0,n.kt)("p",null,"We had a look at the use of git log in a previous tutorial, however, there are three options that you should know about."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"    --oneline \u2013 Compresses the information shown beside each commit to a reduced commit hash and the commit message, all shown in a single line.\n    --graph \u2013 This option draws a text-based graphical representation of the history on the left hand side of the output. It\u2019s of no use if you are viewing the history for a single branch.\n    --all \u2013 Shows the history of all branches.\n")),(0,n.kt)("p",null,"Here\u2019s what a combination of the options looks like:\nUse of git log with all, graph and oneline"),(0,n.kt)("h2",{id:"never-lose-track-of-a-commit"},"Never Lose Track of a Commit"),(0,n.kt)("p",null,"Let\u2019s say you committed something you didn\u2019t want to and ended up doing a hard reset to come back to your previous state. Later, you realize you lost some other information in the process and want to get it back, or at least view it. This is where git reflog can help."),(0,n.kt)("p",null,"A simple git log shows you the latest commit, its parent, its parent\u2019s parent, and so on. However, git reflog is a list of commits that the head was pointed to. Remember that it\u2019s local to your system; it\u2019s not a part of your repository and not included in pushes or merges."),(0,n.kt)("p",null,"If I run git log, I get the commits that are a part of my repository:"),(0,n.kt)("p",null,"Project history"),(0,n.kt)("p",null,"However, a git reflog shows a commit (b1b0ee9 \u2013 HEAD@{4}) that was lost when I did a hard reset:"),(0,n.kt)("p",null,"Git reflog"),(0,n.kt)("h2",{id:"staging-parts-of-a-changed-file-for-a-commit"},"Staging Parts of a Changed File for a Commit"),(0,n.kt)("p",null,"It is generally a good practice to make feature-based commits, that is, each commit must represent a feature or a bug fix. Consider what would happen if you fixed two bugs, or added multiple features without committing the changes. In such a situation situation, you could put the changes in a single commit. But there is a better way: Stage the files individually and commit them separately."),(0,n.kt)("p",null,"Let\u2019s say you\u2019ve made multiple changes to a single file and want them to appear in separate commits. In that case, we add files by prefixing -p to our add commands."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git add -p [file_name]\n")),(0,n.kt)("p",null,"Let\u2019s try to demonstrate the same. I have added three new lines to file_name and I want only the first and third lines to appear in my commit. Let\u2019s see what a git diff shows us."),(0,n.kt)("p",null,"Changes in repo"),(0,n.kt)("p",null,"And let\u2019s see what happes when we prefix a -p to our add command."),(0,n.kt)("p",null,"Running add with -p"),(0,n.kt)("p",null,"It seems that Git assumed that all the changes were a part of the same idea, thereby grouping it into a single hunk. You have the following options:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"    Enter y to stage that hunk\n    Enter n to not stage that hunk\n    Enter e to manually edit the hunk\n    Enter d to exit or go to the next file.\n    Enter s to split the hunk.\n")),(0,n.kt)("p",null,"In our case, we definitely want to split it into smaller parts to selectively add some and ignore the rest."),(0,n.kt)("p",null,"Adding all hunks"),(0,n.kt)("p",null,"As you can see, we have added the first and third lines and ignored the second. You can then view the status of the repository and make a commit."),(0,n.kt)("p",null,"Repository after selectively adding a file"),(0,n.kt)("h2",{id:"squash-multiple-commits"},"Squash Multiple Commits"),(0,n.kt)("p",null,"When you submit your code for review and create a pull request (which happens often in open source projects), you might be asked to make a change to your code before it\u2019s accepted. You make the change, only to be asked to change it yet again in the next review. Before you know it, you have a few extra commits. Ideally, you could squash them into one using the rebase command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git rebase -i HEAD~[number_of_commits]\n")),(0,n.kt)("p",null,"If you want to squash the last two commits, the command that you run is the following."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git rebase -i HEAD~2\n")),(0,n.kt)("p",null,"On running this command, you are taken to an interactive interface listing the commits and asking you which ones to squash. Ideally, you pick the latest commit and squash the old ones."),(0,n.kt)("p",null,"Git squash interactive"),(0,n.kt)("p",null,"You are then asked to provide a commit message to the new commit. This process essentially re-writes your commit history."),(0,n.kt)("p",null,"Adding a commit message"),(0,n.kt)("h2",{id:"stash-uncommitted-changes"},"Stash Uncommitted Changes"),(0,n.kt)("p",null,"Let\u2019s say you are working on a certain bug or a feature, and you are suddenly asked to demonstrate your work. Your current work is not complete enough to be committed, and you can\u2019t give a demonstration at this stage (without reverting the changes). In such a situation, git stash comes to the rescue. Stash essentially takes all your changes and stores them for further use. To stash your changes, you simply run the following-"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git stash\n")),(0,n.kt)("p",null,"To check the list of stashes, you can run the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git stash list\n")),(0,n.kt)("p",null,"Stash list"),(0,n.kt)("p",null,"If you want to un-stash and recover the uncommitted changes, you apply the stash:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git stash apply\n")),(0,n.kt)("p",null,"In the last screenshot, you can see that each stash has an indentifier, a unique number (although we have only one stash in this case). In case you want to apply only selective stashes, you add the specific identifier to the apply command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git stash apply stash@{2}\n")),(0,n.kt)("p",null,"After un-stashing changes"),(0,n.kt)("h2",{id:"check-for-lost-commits"},"Check for Lost Commits"),(0,n.kt)("p",null,"Although reflog is one way of checking for lost commits, it\u2019s not feasible in large repositories. That is when the fsck (file system check) command comes into play."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git fsck --lost-found\n")),(0,n.kt)("p",null,"Git fsck results"),(0,n.kt)("p",null,"Here you can see a lost commit. You can check the changes in the commit by running git show ","[commit_hash]"," or recover it by running git merge ","[commit_hash]","."),(0,n.kt)("p",null,"git fsck has an advantage over reflog. Let\u2019s say you deleted a remote branch and then cloned the repository. With fsck you can search for and recover the deleted remote branch."),(0,n.kt)("h2",{id:"cherry-pick"},"Cherry Pick"),(0,n.kt)("p",null,"I have saved the most elegant Git command for the last. The cherry-pick command is by far my favorite Git command, because of its literal meaning as well as its utility!"),(0,n.kt)("p",null,"In the simplest of terms, cherry-pick is picking a single commit from a different branch and merging it with your current one. If you are working in a parallel fashion on two or more branches, you might notice a bug that is present in all branches. If you solve it in one, you can cherry pick the commit into the other branches, without messing with other files or commits."),(0,n.kt)("p",null,"Let\u2019s consider a scenario where we can apply this. I have two branches and I want to cherry-pick the commit b20fd14: Cleaned junk into another one."),(0,n.kt)("p",null,"Before cherry pick"),(0,n.kt)("p",null,"I switch to the branch into which I want to cherry-pick the commit, and run the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git cherry-pick [commit_hash]\n")),(0,n.kt)("p",null,"After cherry pick"),(0,n.kt)("p",null,"Although we had a clean cherry-pick this time, you should know that this command can often lead to conflicts, so use it with care.\nConclusion"),(0,n.kt)("p",null,"With this, we come to the end of our list of tips that I think can help you take your Git skills to a new level. Git is the best out there and it can accomplish anything you can imagine. Therefore, always try to challenge yourself with Git. Chances are, you will end up learning something new!"))}c.isMDXComponent=!0}}]);