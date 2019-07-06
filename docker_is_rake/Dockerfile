FROM ubuntu:16.04
MAINTAINER  Iskey <Iskey@outlook.com>

COPY sources.list /etc/apt/

ENV http_proxy=
ENV https_proxy=


# instal system dependencies and ruby
RUN apt-get update
RUN apt-get install git ruby ruby-dev build-essential language-pack-en python python-dev -y

# make sure we're working in UTF8
ENV LC_ALL en_US.utf8

# add the current blog source
ADD . /o
WORKDIR /o

# install octopress dependencies
RUN gem sources --remove https://rubygems.org/
RUN gem sources -a https://gems.ruby-china.com 
RUN gem sources -l
RUN gem install bundler
RUN bundle install
RUN ssh-keygen -q -N "" -f "/root/.ssh/id_rsa" && cat /root/.ssh/id_rsa.pub
RUN git config --global user.email "iskey@outlook.com" && git config --global user.name "iskey"

# set up user so that host files have correct ownership
#RUN addgroup --gid 1000 blog
#RUN adduser --uid 1000 --gid 1000 blog
#RUN chown -R blog:blog /o
#USER blog

# base command
ENTRYPOINT ["rake"]

#usefull commands
#docker build -t is_rake .
#docker run --rm -v `pwd`:/o is_rake generate
