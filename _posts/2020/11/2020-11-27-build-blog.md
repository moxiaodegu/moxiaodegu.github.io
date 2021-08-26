---
title: 如何通过Jekyll搭建GitHub博客
tags: 其他
layout: post
---

个人搭建博客总结


**1.创建一个github仓库**

- 如何创建->[新手传送门](https://docs.github.com/cn/free-pro-team@latest/github/getting-started-with-github/create-a-repo)
- 仓库名设置为 username.github.io，其中 username 就是你的 github 用户名。

**2.找一个jekyll模板**
- 我用的是这个网站：http://jekyllthemes.org/
- 复制到上一步的仓库里
- 现在访问 https://username.github.io/, 应该可以看到了

**3.下载ruby**
 - http://www.ruby-lang.org/zh_cn/ 找到对应的安装包下载安装就OK

**3.下载jekyll**
 - 打开cmd，输入：```gem install jekyll``` ```gem install jekyll-paginate```

 **4.下载bundle**
 - ```gem install bundler```

 **5.克隆远程仓库代码到本地**
 - ```git clone ...```

 **6.启动**
 - 打开本地文件夹 ```cd ...```
 - 启动项目 ```jekyll s```
 - 一般情况下输入 http://localhost:4000 或 http://127.0.0.1:4000 就可以访问了
 - 如果报错 可能是需要更新Gemfile.lock ```bundle update```,再次启动，就可以啦

 **7.修改_config.yml**
 - 把_config.yml里面的信息修改为自己的即可
 - 也可以自己更改成自己喜欢的风格，本地查看满意之后，就可以提交到git仓库啦
 
 **8.提交代码**
 - 可以用git命令提交，再次刷新https://username.github.io/，就看到你的博克啦（可能有延时）
 - 也可以用[GitHub Desktop](https://desktop.github.com/)提交