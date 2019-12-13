FROM node:10.15.3

ARG PORT=3040
ENV PORT=${PORT}

ARG CONFIG_NET=production
ENV CONFIG_NET=${CONFIG_NET}

WORKDIR /home/aladinexplorer
COPY . /home/aladinexplorer

RUN npm install -g pm2
RUN npm install -g @angular/cli@7.1.4
RUN cd /home/aladinexplorer && npm install
RUN cd /home/aladinexplorer && node patch
RUN cd /home/aladinexplorer/server && npm install
RUN cd /home/aladinexplorer && ng build --configuration=${CONFIG_NET}

CMD ["pm2-runtime", "/home/aladinexplorer/server/ecosystem.config.js", "--web"]

EXPOSE ${PORT}
EXPOSE 9615
