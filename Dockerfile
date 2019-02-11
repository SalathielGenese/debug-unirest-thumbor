FROM node:dubnium-alpine
WORKDIR /opt/app/
CMD [ "yarn", "run", "jasmine" ]
COPY package.json yarn.loc[k] /opt/app/
RUN yarn install
COPY spec /opt/app/spec
COPY src /opt/app/src
